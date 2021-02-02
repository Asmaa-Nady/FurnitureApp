import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

import { COLORS, SIZES, icons, FONTS } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemDetails = ({ route, navigation }) => {
	function renderHeader() {
		return (
			<View
				style={{
					marginTop: SIZES.padding,
					marginHorizontal: SIZES.padding
				}}
			>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, alignItems: 'flex-start' }}>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Ionicons name="arrow-back" size={30} color={COLORS.white} />
						</TouchableOpacity>
					</View>

					<View style={{ flex: 1, alignItems: 'flex-end' }}>
						<TouchableOpacity>
							<Ionicons name="search" size={30} color={COLORS.white} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}

	function renderInfo() {
		let { itemDetails } = route.params;

		if (itemDetails) {
			return (
				<ImageBackground
					source={itemDetails.image}
					resizeMode="cover"
					style={{ width: '100%', height: '100%' }}
				>
					{renderHeader()}
					<View
						style={{
							position: 'absolute',
							top: '10%',
							left: '10%',
							right: '10%',
							flexDirection: 'row',
							padding: SIZES.radius * 1.5,
							backgroundColor: COLORS.transparentLightGray1,
							width: '80%',
							borderRadius: 12
						}}
					>
						<View style={{ flex: 2 }}>
							<Text style={{ color: COLORS.black, ...FONTS.h2 }}>{itemDetails.productName}</Text>
						</View>

						<View style={{ flex: 1.5, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
							<Text style={{ color: COLORS.darkGreen, ...FONTS.h2 }}>
								{itemDetails.price.toFixed(2)} $
							</Text>
						</View>
					</View>
				</ImageBackground>
			);
		} else {
			return <View />;
		}
	}

	function renderFooter() {
		return (
			<TouchableOpacity
				style={{
					position: 'absolute',
					bottom: '5%',
					left: SIZES.padding,
					right: SIZES.padding,
					height: 70,
					backgroundColor: COLORS.black2,
					borderRadius: 20,
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'row'
				}}
			>
				<Text style={{ color: COLORS.white, fontSize: SIZES.h1 }}>Add To Cart</Text>

				<Ionicons name="cart" size={35} color={COLORS.white} style={{ marginHorizontal: 10 }} />
			</TouchableOpacity>
		);
	}

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.white }}>
			{renderInfo()}
			{renderFooter()}
		</View>
	);
};

const styles = StyleSheet.create({});

export default ItemDetails;
