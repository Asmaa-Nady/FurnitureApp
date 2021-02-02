import React from 'react';
import { View, Image, StyleSheet, StatusBar, Text, BackHandler, Linking, Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { DrawerItem, createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// import AppLoading from 'expo';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { images, icons, COLORS, FONTS, SIZES } from './constants';

import Home from './screens/Home';
import ItemDetails from './screens/ItemDetails';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: 'transparent'
	}
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation }) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
			initialRouteName={'Home'}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="ItemDetails" component={ItemDetails} />
		</Stack.Navigator>
	);
};

export const DrawerContent = (props) => {

	
	const openStore = () => {
		//This is the main trick
		if (Platform.OS != 'ios') {
			Linking.openURL(`market://details?id=${GOOGLE_PACKAGE_NAME}`).catch((err) =>
				alert('Please check for Google Play Store')
			);
		} else {
			Linking.openURL(`itms://itunes.apple.com/in/app/apple-store/${APPLE_STORE_ID}`).catch((err) =>
				alert('Please check for the App Store')
			);
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View>
					<View
						style={{
							flex: 1,
							width: '100%',
							height: 180,
							justifyContent: 'flex-start',
							alignItems: 'center',
							marginTop: -5
						}}
					>
						<Image
							style={{ flex: 1, width: '100%', height: '100%' }}
							source={require('./assets/images/background.jpeg')}
							resizeMethod="resize"
						/>

						<Text
							style={{
								position: 'absolute',
								fontSize: 20,
								fontWeight: 'bold',
								color: COLORS.white,
								marginTop: 10
							}}
						>
							5000+ Furniture Designs
						</Text>
					</View>
				</View>

				<View style={styles.drawerSection}>
					<DrawerItem
						icon={({ color, size }) => <Icon name="cards-heart" color={'#556052'} size={size * 1.3} />}
						label="Favorite"
						labelStyle={styles.drawerLabel}
						activeBackgroundColor="brown"
						onPress={() => {
							props.navigation.navigate('Home');
						}}
					/>

					<DrawerItem
						icon={({ color, size }) => <Icon name="eye" color={'#556052'} size={size * 1.3} />}
						label="Privacy Policy"
						labelStyle={styles.drawerLabel}
						onPress={() => {
							props.navigation.navigate('Home');
						}}
					/>

					<DrawerItem
						icon={({ color, size }) => <Icon name="share-variant" color={'#556052'} size={size * 1.3} />}
						label="Share App Via"
						labelStyle={styles.drawerLabel}
						onPress={() => {
							props.navigation.navigate('Home');
						}}
					/>

					<DrawerItem
						icon={({ color, size }) => <Icon name="hexagram" color={'#556052'} size={size * 1.3} />}
						label="Feedback"
						labelStyle={styles.drawerLabel}
						onPress={openStore}
					/>

					<DrawerItem
						icon={({ color, size }) => <Icon name="menu" color={'#556052'} size={size * 1.3} />}
						label="More"
						labelStyle={styles.drawerLabel}
						onPress={() => {
							props.navigation.navigate('Home');
						}}
					/>

					<DrawerItem
						icon={({ color, size }) => <Icon name="import" color={'#556052'} size={size * 1.3} />}
						label="Exit"
						labelStyle={styles.drawerLabel}
						onPress={() => {
							return BackHandler.exitApp();
						}}
					/>

					<DrawerItem
						icon={({ color, size }) => <Icon name="account-plus" color={'#556052'} size={size * 1.3} />}
						label="SignUp"
						labelStyle={styles.drawerLabel}
						onPress={() => {
							props.navigation.navigate('Home');
						}}
					/>
				</View>
			</DrawerContentScrollView>
		</View>
	);
};

const App = () => {
	const [ isFontLoaded, setFontLoaded ] = React.useState(false);

	return (
		<NavigationContainer theme={theme}>
			<Drawer.Navigator
				drawerType="front"
				initialRouteName="Home"
				drawerContent={(props) => <DrawerContent {...props} />}
			>
				<Drawer.Screen name="Screens" component={Screens} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default () => {
	return <App />;
};

const styles = StyleSheet.create({
	drawerSection: {
		marginTop: 5
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15
	},
	drawerLabel: {
		fontSize: 17,
		fontWeight: 'bold',
		color: 'black'
	}
});
