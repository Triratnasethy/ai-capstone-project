const { z } = require('zod');

const settingsSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters"),
  email: z.string().email("Invalid email address"),
  notifications: z.boolean().default(false),
});

module.exports = { settingsSchema };
