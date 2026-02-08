import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DepositAccount() {
	return (
		<View>
			<Text style={styles.heading}>DEPOSIT ACCOUNTS</Text>

			<View style={styles.container}>
				<View>
					<Text style={styles.typeText}>Chequing</Text>
					<Text style={styles.accountText}>0012345</Text>
					<Text style={styles.ammountText}>$300.00</Text>
					<View>
						<Image
							source={{ uri: "https://www.cibc.com/content/dam/global-assets/card-art/debit-cards/cibc-advantage-debit-card/cibc-advantage-debit-en.png/_jcr_content/renditions/cq5dam.web.1280.1280.png", }}
							style={styles.debit}
						/>
					</View>
				</View>
				<View style={styles.buttonposition}>
					<TouchableOpacity style={styles.button}>
						<Text style ={styles.sendbutton}>Send money</Text>
					</TouchableOpacity>
						<TouchableOpacity style={[styles.button, styles.morebutton]}>
						<Text style ={styles.moreText}>...</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.arrowcontainer}>
					<Text style={styles.arrow}>{`>`}</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.container}>
				<View>
					<Text style={styles.typeText}>Savings</Text>
					<Text style={styles.accountText}>0012345</Text>
					<Text style={styles.ammountText}>$9,200.00</Text>
				</View>
				<TouchableOpacity style={styles.arrowcontainer}>
					<Text style={styles.arrow}>{`>`}</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.totalcontainer}>
				<Text style ={styles.totalText}>Total</Text>
				<View style={styles.total}>
					<Text style ={styles.totalText}>$9,500.00</Text>
					<TouchableOpacity>
						<Text style={styles.info}>{`①`}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({

	heading: {
		fontSize: 15,
		marginLeft: 20,
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#f4f4f5",
		padding: 15,
		borderRadius: 10,
		marginVertical: 10,
		marginLeft: 20,
		marginRight: 20,
	},

	debit:{
		width: 90,
		height: 80,
		resizeMode: "contain",
	},
	typeText: {
		fontSize: 12,
		color: "black",
	},

	accountText: {
		fontSize: 12,
		color: "#71717a",
	},

	ammountText: {
		fontSize: 25,
		color: "black",
		fontWeight: "bold",
	},

	buttonposition: {
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "flex-end",
		gap: 10,
		flex: 1,
	
	},

	button:{
		borderColor: "darkgrey",
		backgroundColor: "white",
		borderWidth: 1,
		borderRadius: 5,
		
	},

	sendbutton:{
		paddingVertical: 6,
		paddingHorizontal: 10,
		//height: 30,
		//width: 100,
		fontSize: 12,
	},

	moreText:{
		fontSize: 20,
		marginTop: 0,
	},

	morebutton: {
		width: 30,
		height: 30,
		alignItems: "center",
		justifyContent: "center",
		
	},
	arrow: {
		fontSize: 25,
		color: "#be123c",
	},

	arrowcontainer: {
		justifyContent: "center",
		alignItems: "center",
	},

	totalcontainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderColor: "darkgrey",
		borderWidth: 1,
		padding: 15,
		borderRadius: 10,
		marginVertical: 10,
		marginLeft: 20,
		marginRight: 20,

	},
	total:{
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},

	totalText: {
		fontSize: 15,
		color: "black",
		fontWeight: "bold",
	}, 

	info: {
		fontSize: 15,
		color: "grey",
		fontWeight: "bold",
		justifyContent: "flex-end",
	},
});