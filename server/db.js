const mongoose = require('mongoose');
require('dotenv').config();

// ----------------------
// Unified MongoDB Connection
// ----------------------
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'SisuniDB'
})
.then(() => console.log(`✅ Connected to MongoDB { ${process.env.db} }`))
.catch((err) => {
  console.error('❌ Failed to connect to MongoDB:', err);
  process.exit(1);
});

// MongoDB event listeners
const db = mongoose.connection;

db.on('connected', () => {
  console.log('✅ MongoDB connected to DB: ${mongoose.connection.name}');
});

db.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('🔌 MongoDB connection closed due to app termination');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error during MongoDB shutdown:', err);
    process.exit(1);
  }
});

module.exports = { mongoose };
