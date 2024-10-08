import { deleteAccount } from "../../models/accountModel.js"
import account from "./accountController.js"

const remove = async (req, res, next) => {
    const {id} = req.params
    try{
        
        const accountValidated = accountValidateId(+id)

        if(accountValidated?.error)
            return res.status(401).json({
                error: "Erro ao deletar um serviço!",
                fieldErrors: accountValidated.error.flatten().fieldErrors
            })

        const account = await deleteAccount(accountValidated.data.id)
        return res.json({
            success: "Conta removida com sucesso!",
            account
        }) 

    }catch(error){
        if(!account)
            return res.status(404).json({
                error: `Conta com o id ${id}, não encontrado!`
            })
        next(error)
    }
}

export default remove