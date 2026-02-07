import React from "react";
import {
    Button,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from "react-native";
import BottomNav from "./BottomNav";
import CreditCards from "./CreditCards";
import DepositAccount from "./DepositAccount";

export default function MainPage() {
	return (
		<View style={styles.container}>
			{/*Header*/}
			<View style={styles.header}>
				<Image
					source={{
						uri: "https://upload.wikimedia.org/wikipedia/en/4/48/CIBC_logo_2021.svg",
					}}
					style={styles.logo}
				/>
				<Image
					source={{
						uri: "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_927190.jpg",
					}}
					style={styles.searchicon}
				/>
			</View>
			{/* Alert Button*/}
			<ScrollView>
				<View style={styles.alertbutton}>
					<Button
						title="Alert"
						color="darkred"
						onPress={() => alert("Alert Button Pressed")}
					/>
				</View>
				<DepositAccount />
				<CreditCards />
				<BottomNav />
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
		padding: 10,
		alignItems: "center",
		backgroundColor: "white",
		justifyContent: "space-between",
	},
	logo: {
		width: 100,
		height: 50,
		resizeMode: "contain",
		marginLeft: 10,
	},
	searchicon: {
		width: 30,
		height: 30,
		borderRadius: 40,
		borderWidth: 1,
		borderColor: "darkred",
		marginRight: 10,
	},

	alertbutton: {
		alignSelf: "flex-end",
		height: 50,
		width: 100,
		marginRight: 20,
		marginTop: 10,
	},
});
