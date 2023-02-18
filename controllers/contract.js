import { createContract, findAllContract,findAllusers, findAndUpdate } from "../services/user.service"

const contractCreate= async(req,res)=>{
    try{

        let {LenderId,BorrowerId,Principle,Interest,LoanStartDate,LoanDueDate,IsRepaid}=req.body
        let findUser= await findAllContract({LenderId}).populate("LenderId")
        console.log(findUser)
         if(findUser.length>0){
            let x= await findAllusers({_id:LenderId})
            let updateAmoutn= x[0].Total+Principle
            let count= x[0].count + 1
            await findAndUpdate({_id:LenderId},{Total:updateAmoutn,count},{new:true})
            await createContract({LenderId,BorrowerId,Principle,Interest,LoanStartDate,LoanDueDate,IsRepaid})
            res.status(200).send("New Contract created")
         }else{
            let findUser= await findAllContract({LenderId}).populate("LenderId")
            let x= await findAllusers({_id:LenderId})
            let updateAmoutn= x[0].Total+Principle
            let count= x[0].count + 1
            await findAndUpdate({_id:LenderId},{Total:updateAmoutn,count},{new:true})
            await createContract({LenderId,BorrowerId,Principle,Interest,LoanStartDate,LoanDueDate,IsRepaid})
            res.status(200).send("New Contract created")
         }
       
    }
    catch(err){
           res.status(400).send({Error: "Something went wrong"})
    }

}
const getContract=async(req,res)=>{ 
    try{
        if(req.query){
            let {n}= req.query
        console.log(n)
            let allUsers= await findAllusers({count: {$gte: Number(n) }})
            if(allUsers.length==0){
                return res.send("No Lender in this range")
            }
            res.send(allUsers)

        }else{

            let allUsers= await findAllContract({})
            res.status(200).send(allUsers)
        }

    }
    catch(err){
        res.status(400).send({Error:"Something Error"})
    }

}
export{
    contractCreate,
    getContract
} 