import * as z from 'zod'

export const SignUpValidation = z.object({
    name: z.string().min(2, { message: 'Name is too short.'}).max(30, { message: 'Name is too long.'}),
    username: z.string().min(2, { message: 'Username is too short.'}).max(30, { message: 'Username is too long.'}),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters.'}),
})