import { z } from "zod";

const UserSchema = z.object({
    name: z.string().optional(),
    password: z.string().min(8).optional(),
});

export default UserSchema;
