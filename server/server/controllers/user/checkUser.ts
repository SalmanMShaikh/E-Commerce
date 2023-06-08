import { Request, Response } from 'express';
import { UserModel } from '../../connection/connection';
import { config } from '../../config/config';
import CryptoJS from 'crypto-js';

const checkUser = async (req: Request, res: Response) => {
    try {
        interface User {
            username: string,
            password: string
        }
        let user: User = req.body

        //check if user exists
        let isUserExist = await UserModel.findOne({ where: { username: user.username } })
        console.log(isUserExist, '<<<<<<<<<<<<<<<<<<<<<<<<hereyougo', req.body)
        const encryptedPass = CryptoJS.AES.encrypt(user.password, config.key);
        user.password = encryptedPass.toString();

        await UserModel.save(user)




    } catch (err) {
        if (err) {
            return res.json({ status: 400, message: 'Something went wrong.' })
        }
    }
}

export default checkUser