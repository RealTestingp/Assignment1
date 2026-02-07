import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function CreditCards() {
	return (
		<View>
			<Text>CREDIT CARDS</Text>

			<View>
				<View>
					<Text>CIBC Visa</Text>
					<Text>0000 1234 5678 9010</Text>
					<Text>$1,234.56</Text>
				</View>
				<TouchableOpacity>
					<Text>→</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
