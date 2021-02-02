import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import { tabs, furnitureList } from '../constants/dummyData';

const LabelTab = ({ tabList, selectedTab, onPress }) => {
	const renderLabel = ({ item }) => (
		<TouchableOpacity style={{ marginHorizontal: SIZES.padding }} onPress={() => onPress(item)}>
			<Text
				style={{
					color: COLORS.lightGray2,
					fontSize: SIZES.h2,
					fontWeight: '700',
					opacity: selectedTab.id == item.id ? 1 : 0.5
				}}
			>
				{item.name}
			</Text>
		</TouchableOpacity>
	);

	return (
		<View style={{ marginTop: SIZES.padding }}>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={tabList}
				renderItem={renderLabel}
				keyExtractor={(item) => `${item.id}`}
			/>
		</View>
	);
};

const ScrollCard = ({ navigation, productList }) => {
	const renderCard = ({ item }) => (
		<TouchableOpacity
			style={{
				width: SIZES.width,
				height: SIZES.width / 3,
				flexDirection: 'row',
				marginBottom: 10,
				backgroundColor: COLORS.white
			}}
			onPress={() => navigation.navigate('ItemDetails', { itemDetails: item })}
		>
			<Image
				source={item.image}
				resizeMode="cover"
				style={{
					flex: 2.5,
					height: '100%'
				}}
			/>

			{/* texts */}
			<View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', paddingRight: SIZES.radius }}>
				<Text style={{ color: COLORS.black, ...FONTS.h2, fontWeight: 'bold' }}>{item.productName}</Text>
				<Text style={{ ...FONTS.h2, color: COLORS.primary }}>{item.price.toFixed(2)} $</Text>
			</View>

			{/* Button */}
			<View
				style={{
					flex: 2,
					marginRight: SIZES.radius,
					alignItems: 'flex-end',
					justifyContent: 'center'
				}}
			>
				<TouchableOpacity
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: 10
					}}
					onPress={() => {}}
				>
					<Ionicons name="chevron-forward-sharp" size={30} color={COLORS.black} />
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	);

	return (
		<View style={{ marginTop: SIZES.padding }}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				data={productList}
				renderItem={renderCard}
				keyExtractor={(item) => `${item.productId}`}
			/>
		</View>
	);
};

const Home = ({ navigation }) => {
	const [ tabList, setTabList ] = React.useState(furnitureList);
	const [ selectedTab, setSelectedTab ] = React.useState(tabs);

	// Rendering

	function renderHeader() {
		return (
			<View
				style={{
					paddingHorizontal: SIZES.padding,
					backgroundColor: COLORS.black,
					// height: '6%',
					justifyContent: 'center'
				}}
			>
				<View style={{ flexDirection: 'row', paddingTop: 10 }}>
					<View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
						<TouchableOpacity onPress={() => navigation.openDrawer()}>
							<Ionicons name="md-reorder-three-outline" size={40} color={COLORS.lightGray2} />
						</TouchableOpacity>
					</View>

					<View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
						<Text style={{ color: COLORS.lightGray2, fontSize: 25, fontWeight: 'bold' }}>Furniture</Text>
					</View>
				</View>
			</View>
		);
	}

	function renderTitle(title) {
		return (
			<View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
				<Text style={{ color: COLORS.lightGray2, ...FONTS.h2, fontWeight: 'bold' }}>Collection of {title}</Text>
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			{/* <StatusBar backgroundColor={COLORS.brown} barStyle="light-content" /> */}

			{renderHeader()}

			{renderTitle(selectedTab.title)}

			<LabelTab tabList={tabList} selectedTab={selectedTab} onPress={(item) => setSelectedTab(item)} />

			<View style={{ flex: 1 }}>
				<ScrollCard navigation={navigation} productList={selectedTab.Products} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.black
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		elevation: 9
	}
});

export default Home;
