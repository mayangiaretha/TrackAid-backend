import usersModel from '../../models/users';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import dayjs from 'dayjs';
import EnumHttpStatus from '../../enums/httpCode';
import { encryptPassword } from '../../utils/hashPassword';
import { generateJwt } from '../../utils/generateJwt';
import { IS_USER } from '../../constants/roles';

class UsersControllers {
  static async registerAUser(req, res) {
    const { email, password, username } = req.body;
    const existingUser = await usersModel.findOne({ email: email });

    if (existingUser) {
      return res
        .status(EnumHttpStatus.BAD_REQUEST)
        .json({ message: 'Email already exists' });
    }

    const duplicateUsername = await usersModel.findOne({ username: username });

    if (duplicateUsername) {
      return res
        .status(EnumHttpStatus.BAD_REQUEST)
        .json({ message: 'username already in use' });
    }

    const hashedPassword = await encryptPassword(password);
    const newUser = new usersModel({
      username,
      email,
      password: hashedPassword,
      createdAt: dayjs().format('YYYY-MM-DD h:mm:ss A'),
      userId: uuidv4(),
    });

    const createdUser = await newUser.save();

    const token = generateJwt({ email, username, role: IS_USER });

    return res.status(EnumHttpStatus.OK).json({
      message: 'User registered successfully',
      user: createdUser,
      token,
    });
  }

  static async loginUser(req, res) {

    const { email, password } = req.body;

    const loggedIn = await usersModel.findOne({ email: email });

    if (!loggedIn) {
      return res
        .status(EnumHttpStatus.NOT_FOUND)
        .json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, loggedIn.password);

    if (!passwordMatch) {
      return res
        .status(EnumHttpStatus.UNAUTHORIZED)
        .json({ message: 'Incorrect password' });
    }

    const { username } = loggedIn;

    const userBody = {
      username,
      email,
    };

    const jwt = generateJwt(userBody, IS_USER);

    return res
      .status(EnumHttpStatus.ACCEPTED)
      .json({ message: `Successfully Logged In: ${email}`, token: jwt });
  }
  catch(error) {
    return res
      .status(EnumHttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal Server Error' });
  }
}

export default UsersControllers;
