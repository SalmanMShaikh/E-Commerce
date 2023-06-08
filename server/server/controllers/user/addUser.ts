import { Request, Response } from 'express';
import { UserModel } from '../../connection/connection';
import { config } from '../../config/config';
import CryptoJS from 'crypto-js';

const addUser = async (req: Request, res: Response) => {
    try {
        interface User {
            username: string,
            password: string
        }
        console.log(req, '<<<<<<<<<<<<<<<<<<<why')
        let user: User = req.body

        const encryptedPass = CryptoJS.AES.encrypt(user.password, config.key);
        user.password = encryptedPass.toString();

        await UserModel.save(user)
        let data = await UserModel.find()
        return res.status(200).json({ status: 200, message: 'success', data })



    } catch (err) {
        if (err) {
            return res.json({ status: 400, message: 'Something went wrong.' })
        }
    }
}

export default addUser