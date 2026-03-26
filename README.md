# 🎨 Artist Marketplace

A full-stack e-commerce platform for artists to showcase and sell their handmade artwork, crafts, and traditional art pieces.

## 🌟 Features

### 🎨 **For Artists**
- **Profile Management**: Create and manage artisan profiles
- **Artwork Gallery**: Upload and showcase artwork with multiple images
- **Product Management**: Add, edit, and delete artwork listings
- **Order Management**: Track and manage customer orders
- **Analytics Dashboard**: View sales performance and insights
- **Category Management**: Organize artwork by categories (Painting, Textiles, Pottery, etc.)

### 🛍️ **For Customers**
- **Browse Artwork**: Discover unique handmade artwork
- **Artist Directory**: Explore artist profiles and portfolios
- **Secure Shopping**: Safe and secure payment processing
- **Order Tracking**: Monitor order status and delivery
- **Reviews & Ratings**: Share feedback on purchases

### 🏪 **Marketplace Features**
- **Advanced Search**: Filter by category, price, artist
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Real-time Updates**: Live inventory and order status
- **Secure Authentication**: JWT-based user authentication
- **Image Upload**: Cloudinary integration for image storage

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern UI framework
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Cloudinary** - Image storage and processing

### **Development Tools**
- **Vite** - Fast build tool
- **ESLint** - Code linting
- **Git** - Version control

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn package manager
- Git

## 🚀 Quick Start

### 1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/artist-marketplace.git
cd artist-marketplace
```

### 2. **Install Dependencies**

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

### 3. **Environment Setup**

Create a `.env` file in the `backend` directory:

```env
# Database
MONGO_URI=mongodb://localhost:27017/artist_marketplace

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Server
PORT=5000
NODE_ENV=development
```

### 4. **Start the Development Servers**

#### Start Backend (Terminal 1)
```bash
cd backend
npm run dev
```

#### Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```

### 5. **Access the Application**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **API Documentation**: http://localhost:5000/api-docs

## 📁 Project Structure

```
artist-marketplace/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/         # Database models
│   │   ├── middleware/     # Custom middleware
│   │   ├── routes/         # API routes
│   │   └── utils/          # Utility functions
│   ├── uploads/            # Temporary upload directory
│   ├── .env                # Environment variables
│   └── server.js           # Server entry point
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── contexts/       # React contexts
│   │   └── utils/          # Utility functions
│   └── public/             # Static assets
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🎯 Available Categories

- **Painting** - Traditional and contemporary paintings
- **Textiles** - Handwoven fabrics, scarves, textiles
- **Pottery** - Ceramic art, pottery, clay work
- **Jewelry** - Handmade jewelry and accessories
- **Metal Work** - Metal crafts, sculptures
- **Woodwork** - Wood carvings, furniture
- **Glass Art** - Glass sculptures, stained glass

## 🔐 Authentication & Authorization

### **User Roles**
- **Customer**: Can browse, purchase, and review artwork
- **Artisan**: Can manage profile, upload artwork, and handle orders
- **Admin**: Full system access (future feature)

### **JWT Authentication**
- Secure token-based authentication
- Role-based access control
- Protected API routes
- Automatic token refresh

## 📸 Image Upload System

- **Cloudinary Integration**: Secure cloud storage
- **Multiple Images**: Support for multiple product images
- **Image Optimization**: Automatic resizing and compression
- **CDN Delivery**: Fast image loading globally

## 🛒 Order Management

### **Order Flow**
1. Customer places order
2. Artist receives notification
3. Artist processes order
4. Order status updates
5. Delivery tracking
6. Review and rating system

### **Order Statuses**
- `pending` - Order placed, awaiting processing
- `processing` - Artist is preparing the artwork
- `shipped` - Order has been shipped
- `delivered` - Order delivered successfully
- `cancelled` - Order cancelled

## 🔧 API Endpoints

### **Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### **Artworks**
- `GET /api/paintings` - Get all artworks
- `GET /api/paintings/:id` - Get single artwork
- `POST /api/paintings` - Create new artwork (Artisan only)
- `PUT /api/paintings/:id` - Update artwork (Artisan only)
- `DELETE /api/paintings/:id` - Delete artwork (Artisan only)

### **Artists**
- `GET /api/artists` - Get all artists
- `GET /api/artists/:id` - Get single artist
- `PUT /api/artists/profile` - Update artist profile

### **Categories**
- `GET /api/categories` - Get all categories

### **Orders**
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order status

## 🎨 UI/UX Features

### **Design System**
- **Color Scheme**: Warm amber and orange tones
- **Typography**: Clean, readable fonts
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first design approach

### **Key Components**
- **Navigation Bar**: Responsive with user menu
- **Product Cards**: Beautiful artwork display
- **Artist Profiles**: Comprehensive artist information
- **Shopping Cart**: Easy cart management
- **Checkout Flow**: Simple and secure checkout

## 🚀 Deployment

### **Frontend (Vercel/Netlify)**
```bash
cd frontend
npm run build
# Deploy dist/ folder to your hosting provider
```

### **Backend (Heroku/Railway)**
```bash
cd backend
# Set environment variables in hosting provider
# Deploy to your preferred hosting platform
```

### **Environment Variables for Production**
```env
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
CLOUDINARY_CLOUD_NAME=your_production_cloud_name
CLOUDINARY_API_KEY=your_production_api_key
CLOUDINARY_API_SECRET=your_production_api_secret
NODE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Cloudinary** - For image storage and processing
- **MongoDB** - For the flexible database solution
- **Framer Motion** - For beautiful animations

## 📞 Support

For support, please contact:
- 📧 Email: support@artistmarketplace.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/artist-marketplace/issues)
- 💬 Discord: [Join our community](https://discord.gg/yourinvite)

---

**Made with ❤️ for artists and art lovers worldwide** 🎨✨
Strengthens cultural preservation while advancing environmental and economic sustainability
>>>>>>> 02ce46789b751e88b7f3f8cbcbe18f5a67e16fa0
