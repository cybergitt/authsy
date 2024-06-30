# 🔐 Express Auth

A simple authentication system which provides APIs to authenticate users with the latest technology and mix of architecture like Clean Architecture and Vertical Slice Architecture, Repository Pattern, Postgres, RabbitMq and Express in NodeJS, etc.

## 🎨 Project Features
- Mixing Clean Architecture to organize the application across layers and Vertical Slice Architecture to organizes the code around features or use cases

## 🛠️ Getting Started

### Step 1: 🚀 Initial Setup

- Clone this repository: `git clone https://github.com/cybergitt/authsy.git`
- Navigate: `cd authsy/express-auth`
- Install dependencies: `pnpm i`

### Step 2: ⚙️ Environment Configuration

- Create `.env`: Copy `.env.template` to `.env`
- Update `.env`: Fill in necessary environment variables

### Step 3: 🏃‍♂️ Running the Project

- Development Mode: `pnpm dev`
- Building: `pnpm build`
- Production Mode: Set `.env` to `NODE_ENV="production"` then `pnpm build && pnpm start`

## 📁 Project Structure

```sh
├── dist // Contains source build
├── docs // Contains documentation files
├── public // Contains static files if any
├── src
│   ├── common // Contains files shared logic
│   ├── features // Contains classes with business logic
│   ├── infrastructure // Contains specific implementations of frameworks and libraries
├── test // Contains jest testing files
```