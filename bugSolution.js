import AsyncStorage from '@react-native-async-storage/async-storage';
import { MMKVStorage } from 'react-native-mmkv-storage';

const mmkv = new MMKVStorage.Loader().initialize();

// Example Usage
const saveData = async (key, value) => {
  try {
    await mmkv.setItem(key, JSON.stringify(value));
    console.log('Data saved successfully using MMKV');
  } catch (error) {
    console.error('Error saving data using MMKV:', error);
  }
};

const loadData = async (key) => {
  try {
    const value = await mmkv.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    console.error('Error loading data using MMKV:', error);
    return null; // Handle missing data gracefully
  }
};
// Example of using the function
saveData('myKey', {name: 'John Doe'})
.then(()=> loadData('myKey'))
.then(res => console.log(res));