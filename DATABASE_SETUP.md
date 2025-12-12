# Database Setup for Catch Talent

This project uses MySQL as the database with Prisma ORM.

## Prerequisites

1. **MySQL Server**: Make sure you have MySQL installed and running
2. **Node.js**: Version 18 or higher
3. **npm**: Package manager

## Setup Instructions

### 1. Create MySQL Database

Connect to your MySQL server and create a database:

```sql
CREATE DATABASE catchtalent;
```

### 2. Environment Configuration

Create a `.env.local` file in the project root:

```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/catchtalent"
DIRECT_URL="mysql://username:password@localhost:3306/catchtalent"

# Vimeo API (optional)
VIMEO_ACCESS_TOKEN="your_vimeo_access_token_here"
```

Replace `username` and `password` with your MySQL credentials.

**Note**:

- `DATABASE_URL`: Used by Prisma for migrations and schema operations
- `DIRECT_URL`: Used for direct database connections (bypasses connection pooling)
- Both URLs can be the same for local development
- For production, `DIRECT_URL` should be a direct connection without pooling

### 3. Install Dependencies

```bash
npm install
```

### 4. Generate Prisma Client

```bash
npm run db:generate
```

### 5. Push Database Schema

```bash
npm run db:push
```

This will create the `TalentRegistration` table in your MySQL database.

### 6. Start Development Server

```bash
npm run dev
```

## Database Management Commands

- **Generate Prisma Client**: `npm run db:generate`
- **Push Schema Changes**: `npm run db:push`
- **Create Migration**: `npm run db:migrate`
- **Open Prisma Studio**: `npm run db:studio`
- **Reset Database**: `npm run db:push --force-reset`

## Database Schema

The `TalentRegistration` table includes:

- **Personal Info**: firstName, lastName, email, phone, age, gender
- **Physical**: height, weight, eyeColor, hairColor
- **Professional**: languages, experience, specialSkills
- **Agency**: agency, agencyContact
- **Additional**: availability, location, bio
- **Media**: photos (JSON string), video (file path)
- **Timestamps**: createdAt, updatedAt

## Troubleshooting

### Connection Issues

1. **Check MySQL is running**: `sudo service mysql status`
2. **Verify credentials**: Test connection with MySQL client
3. **Check database exists**: `SHOW DATABASES;`
4. **Verify port**: Default is 3306

### Permission Issues

Make sure your MySQL user has proper permissions:

```sql
GRANT ALL PRIVILEGES ON catchtalent.* TO 'your_username'@'localhost';
FLUSH PRIVILEGES;
```

### Reset Database

If you need to start fresh:

```bash
npm run db:push --force-reset
```

This will drop and recreate all tables.
