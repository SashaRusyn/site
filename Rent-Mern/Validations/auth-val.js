import { body } from "express-validator";

export const registerValidator = [
    body('email', 'Переконайтеся що пошта введена коректно').isEmail(),
    body('password', 'Пароль має містити щонайменше 5 символів').isLength({min:5}),
];