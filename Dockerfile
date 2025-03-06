# 1. Използване на официалния Node.js образ
FROM node:18-alpine AS builder

# 2. Задаване на работна директория
WORKDIR /app

# 3. Копиране на package.json и package-lock.json
COPY package.json package-lock.json ./

# 4. Инсталиране на зависимостите
RUN npm install

# 5. Копиране на целия код в контейнера
COPY . .

# 6. Билд на Vite приложението
RUN npm run build

# 7. Използване на Nginx за production server
FROM nginx:alpine

# 8. Копиране на билд файловете в Nginx директорията
COPY --from=builder /app/dist /usr/share/nginx/html

# 9. Експониране на порт 80
EXPOSE 80

# 10. Стартиране на Nginx
CMD ["nginx", "-g", "daemon off;"]
