const env = process.env;

export const config = {
  isProd: env.NODE_ENV === "production",
  port: Number(env.PORT) || 3001,
  smtp: {
    host: env.SMTP_HOST ?? "",
    port: Number(env.SMTP_PORT) || 465,
    user: env.SMTP_USER ?? "",
    pass: env.SMTP_PASS ?? "",
  },
  contactTo: env.CONTACT_TO ?? env.SMTP_USER ?? "",
};

export const mailConfigured = Boolean(
  config.smtp.host && config.smtp.user && config.smtp.pass && config.contactTo,
);
