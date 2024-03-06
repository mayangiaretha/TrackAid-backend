import bcrypt from 'bcryptjs'
export const encryptPassword = async(password) =>{
    const salt = await bcrypt.genSalt(8)
    return bcrypt.hash(password, salt);
}
    export const comparePasswords =(userPassword, hashedPassword) =>{
        return bcrypt.compare(userPassword, hashedPassword)
}