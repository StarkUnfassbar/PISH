/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Добавляет `/` в конце URL (опционально)
  output: "export", // Если делаете статический экспорт (`next export`)
  skipTrailingSlashRedirect: true, // Отключает редиректы для `/` в конце
  experimental: {
    appDir: true, // Если используете App Router (Next.js 13+)
  },
};

export default nextConfig;