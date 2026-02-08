import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CreditCards() {
	return (
		<View>
			<Text style={styles.heading}>CREDIT CARDS</Text>

			<View style={styles.container}>
				<View>
					<Text style={styles.typeText}>CIBC VISA</Text>
					<Text style={styles.accountText}>0000 1234 5678 9010</Text>
					<Text style={styles.ammountText}>$1,234.56</Text>
					<View>
						<Image
							source={{ uri: "https://www.cibc.com/content/dam/global-assets/card-art/credit-cards/select-cards/cibc-select-visa-card/cibc-visa-select-en.png/_jcr_content/renditions/cq5dam.web.767.767.png", }}
							style={styles.credit}
						/>
					</View>
					
				</View>
				<TouchableOpacity style={styles.arrowcontainer}>
					<Text style={styles.arrow}>{`>`}</Text>
				</TouchableOpacity>
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
	arrow: {
		fontSize: 25,
		color: "#be123c",
	},

	arrowcontainer: {
		justifyContent: "center",
		alignItems: "center",
	},

	credit:{
		width: 90,
		height: 80,
		resizeMode: "contain",
	},
	
	

});