import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function DepositAccount() {
	return (
		<View>
			<Text>DEPOSIT</Text>

			<View>
				<View>
					<Text>Chequing</Text>
					<Text>0012345</Text>
					<Text>$300.00</Text>
					<View>
						<Text>DEBIT</Text>
					</View>
				</View>
				<View>
					<TouchableOpacity>
						<Text>Send money</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text>...</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity>
					<Text>→</Text>
				</TouchableOpacity>
			</View>

			<View>
				<View>
					<Text>Savings</Text>
					<Text>0012345</Text>
					<Text>$9,200.00</Text>
				</View>
				<TouchableOpacity>
					<Text>→</Text>
				</TouchableOpacity>
			</View>

			<View>
				<Text>Total</Text>
				<View>
					<Text>$9,500.00</Text>
					<Text>!</Text>
				</View>
			</View>
		</View>
	);
}
