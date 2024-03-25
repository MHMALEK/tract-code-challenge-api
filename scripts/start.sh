# Reset containers and database
docker-compose down --volumes

# TODO: expose vite build
docker-compose up # & npm start --prefix ./frontend --config ./frontend/vite.config.js
