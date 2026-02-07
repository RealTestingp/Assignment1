// import { Stack } from "expo-router";

// export default function RootLayout() {
// 	return <Stack screenOptions={{ headerShown: false }} />;
// }

import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: () => <Text>House Icon</Text>,
				}}
			/>
			<Tabs.Screen
				name="move-money"
				options={{
					title: "Move money",
					tabBarIcon: () => <Text>Money Icon</Text>,
				}}
			/>
			<Tabs.Screen
				name="advice"
				options={{
					title: "Advice",
					tabBarIcon: () => <Text>Stock Icon</Text>,
				}}
			/>
			<Tabs.Screen
				name="more"
				options={{
					title: "More",
					tabBarIcon: () => <Text>⋮</Text>,
				}}
			/>
		</Tabs>
	);
}
