import { UserModel} from "../models/user.model";
import { ContractModel } from "../models/Contracts.model";

export function createUser(){
   return UserModel.create(input)
}

export function findAllusers(query,options={lean:true}){
           return UserModel.find(query,{},options)
}

export function findAndUpdate(query,update,options){
    return UserModel.findOneAndUpdate(query,update,options)
}

export function createContract(){
         return ContractModel.create(input)
}

export function findAllContract(query,options={lean:true}){
    return ContractModel.find(query,{},options)
}

