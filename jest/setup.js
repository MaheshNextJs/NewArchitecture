// filepath: /e:/NewArchitecture/jest/setup.js
import 'react-native-gesture-handler/jestSetup';
import jest from 'jest';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
