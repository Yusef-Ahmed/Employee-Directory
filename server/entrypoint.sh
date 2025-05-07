echo "Waiting for MySQL to be ready..."
until nc -z mysql-employee-directory 3306; do
  echo 'Waiting for MySQL...'
  sleep 2
done
echo "MySQL is ready!"

echo "Running database migrations..."
npm run db:migrate

echo "Starting the server..."
npm start