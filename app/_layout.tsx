// import { Stack } from "expo-router";

// export default function RootLayout() {
// 	return <Stack screenOptions={{ headerShown: false }} />;
// }

import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function RootLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarLabelPosition: "below-icon",
				tabBarInactiveTintColor: "black",
				tabBarActiveTintColor: "#be123c",
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ focused, color }) => (
						<Image
							source={require("../assets/images/home.png")}
							style={{ width: 20, height: 20, tintColor: color }}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="move-money"
				options={{
					title: "Move money",
					tabBarIcon: ({ color }) => (
						<Image
							source={require("../assets/images/move-money.png")}
							style={{ width: 20, height: 20, tintColor: color }}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="advice"
				options={{
					title: "Advice",
					tabBarIcon: ({ color }) => (
						<Image
							source={require("../assets/images/advice.png")}
							style={{ width: 20, height: 20, tintColor: color }}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="more"
				options={{
					title: "More",
					tabBarIcon: ({ color }) => (
						<Image
							source={require("../assets/images/more.png")}
							style={{ width: 20, height: 20, tintColor: color }}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
