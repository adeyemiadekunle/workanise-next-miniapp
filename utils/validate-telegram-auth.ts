// utils/telegramAuth.ts
import { parse, validate } from "@telegram-apps/init-data-node";

const BOT_TOKEN = process.env.BOT_TOKEN || "";

interface ValidationResult {
  valid: boolean;
  user?: {
    id: number;
    is_bot?: boolean;
    first_name?: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    photo_url?: string;
  };
  error?: string;
}

export function validateTelegramData(initData: string): ValidationResult {
  const valid = validate(initData, BOT_TOKEN);

  console.log(valid);

  const parsedData = parse(initData);

  if (!parsedData.user) {
    return { valid: false, error: "Invalid init data: User data is missing"  };
  }

  return { valid: true, user: parsedData.user };
}
