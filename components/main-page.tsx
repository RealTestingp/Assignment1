import React from "react";
import {
	Button,
	Image,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import CreditCards from "./CreditCards";
import DepositAccount from "./DepositAccount";

export default function MainPage() {
	return (
		<View style={styles.container}>
			{/*Header*/}
			<View style={styles.header}>
				{/*Logo*/}
				<Image
					source={{
						uri: "https://1000logos.net/wp-content/uploads/2021/10/CIBC-Logo-768x432.png",
					}}
					style={styles.logo}
				/>
				{/*Search and Profile Icons*/}
				<View style={styles.icon}>
					<Image
						source={require("../assets/images/search.png")}
						style={styles.searchicon}
					/>

					<TouchableOpacity style={styles.profile}>
						<Text style={styles.profileText}>GR</Text>
					</TouchableOpacity>
				</View>
			</View>
			{/* Alert Button*/}
			<ScrollView>
				<View style={styles.alertbutton}>
					<Button
						title="Alert"
						color="#be123c"
						onPress={() => alert("Alert Button Pressed")}
					/>
				</View>
				<DepositAccount />
				<CreditCards />
			</ScrollView>
		</View>
	);
}

// export default MainPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		backgroundColor: "white",
	},
	header: {
		flexDirection: "row",
		paddingHorizontal: 10,
		paddingVertical: 15,
		alignItems: "center",
		backgroundColor: "white",
		justifyContent: "space-between",
	},
	logo: {
		width: 100,
		height: 70,
		resizeMode: "contain",
	},
	searchicon: {
		width: 20,
		height: 20,
		tintColor: "#be123c",
	},

	profileText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 12,
	},
	icon: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},

	profile: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: "#be123c",
		justifyContent: "center",
		alignItems: "center",
	},

	alertbutton: {
		alignSelf: "flex-end",
		height: 50,
		width: 100,
		marginRight: 20,
		marginTop: 10,
	},
});
