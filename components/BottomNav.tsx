import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function DepositAccount() {
	return (
		<View>
			<TouchableOpacity>
				<Text>House Icon</Text>
				<Text>Home</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<Text>Money Icon</Text>
				<Text>Move money</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<Text>Stock Icon</Text>
				<Text>Advice</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<Text>⋮</Text>
				<Text>More</Text>
			</TouchableOpacity>
		</View>
	);
}
