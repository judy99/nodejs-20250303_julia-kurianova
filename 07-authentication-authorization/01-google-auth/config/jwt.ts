import { registerAs } from "@nestjs/config";

export default registerAs("jwt", () => ({
  secret: process.env.JWT_SECRET || "killer-is-jim",
  signOptions: { expiresIn: "20s" },
  refreshTokenExpires: "1h",
}));
