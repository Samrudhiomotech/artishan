// test-db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: join(__dirname, '.env') });

console.log('🔍 Testing MongoDB Connection...');
console.log('MongoDB URI:', process.env.MONGO_URI);

const testConnection = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB successfully!');

    // Get connection info
    const db = mongoose.connection.db;
    const host = mongoose.connection.host;
    const port = mongoose.connection.port;
    const name = mongoose.connection.name;

    console.log('\n📊 Connection Details:');
    console.log(`  Host: ${host}`);
    console.log(`  Port: ${port}`);
    console.log(`  Database: ${name}`);

    // List all collections
    const collections = await db.listCollections().toArray();
    console.log('\n📚 Existing collections:');
    if (collections.length === 0) {
      console.log('  No collections yet. They will be created when you insert data.');
    } else {
      collections.forEach(col => {
        console.log(`  - ${col.name}`);
      });
    }

    // Get database stats
    const stats = await db.stats();
    console.log('\n📈 Database Stats:');
    console.log(`  Collections: ${stats.collections}`);
    console.log(`  Objects (Documents): ${stats.objects}`);
    console.log(`  Data Size: ${(stats.dataSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Storage Size: ${(stats.storageSize / 1024 / 1024).toFixed(2)} MB`);

    // Try to create a test collection and document
    console.log('\n🧪 Testing CRUD operations...');
    
    // Create a test collection
    const testCollection = db.collection('test');
    
    // Insert a test document
    const insertResult = await testCollection.insertOne({
      name: 'Test Document',
      timestamp: new Date(),
      message: 'This is a test document to verify MongoDB is working'
    });
    console.log('  ✅ Insert test document:', insertResult.insertedId);

    // Read the test document
    const foundDoc = await testCollection.findOne({ _id: insertResult.insertedId });
    console.log('  ✅ Read test document:', foundDoc.name);

    // Update the test document
    await testCollection.updateOne(
      { _id: insertResult.insertedId },
      { $set: { updated: true, updatedAt: new Date() } }
    );
    console.log('  ✅ Updated test document');

    // Delete the test document
    await testCollection.deleteOne({ _id: insertResult.insertedId });
    console.log('  ✅ Deleted test document');

    console.log('\n✨ All CRUD operations successful!');

    // List available databases (optional - may require admin privileges)
    try {
      const admin = mongoose.connection.db.admin();
      const dbs = await admin.listDatabases();
      console.log('\n💾 Available Databases:');
      dbs.databases.forEach(db => {
        console.log(`  - ${db.name} (${(db.sizeOnDisk / 1024 / 1024).toFixed(2)} MB)`);
      });
    } catch (err) {
      console.log('\nℹ️  Cannot list databases (may require admin privileges)');
    }

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    
    // Provide helpful error messages
    if (error.message.includes('ECONNREFUSED')) {
      console.log('\n💡 Tip: Make sure MongoDB is running!');
      console.log('   Start MongoDB with:');
      console.log('   - Windows: net start MongoDB');
      console.log('   - Or just run: mongod');
    } else if (error.message.includes('Authentication failed')) {
      console.log('\n💡 Tip: Check your MongoDB username and password in .env file');
    } else if (error.message.includes('ENOTFOUND')) {
      console.log('\n💡 Tip: Check your MongoDB host in .env file');
    }
  } finally {
    // Close the connection
    await mongoose.disconnect();
    console.log('\n👋 Disconnected from MongoDB');
  }
};

// Run the test
testConnection();