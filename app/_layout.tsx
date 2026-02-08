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
					tabBarIcon: () => <Text>Home Icon</Text>,
				}}
			/>
			<Tabs.Screen
				name="move-money"
				options={{
					title: "Move money",
					tabBarIcon: () => <Text>2 Arrows Icon</Text>,
				}}
			/>
			<Tabs.Screen
				name="advice"
				options={{
					title: "Advice",
					tabBarIcon: () => <Text>Advice Icon</Text>,
				}}
			/>
			<Tabs.Screen
				name="more"
				options={{
					title: "More",
					tabBarIcon: () => <Text>4 Grid Icon</Text>,
				}}
			/>
		</Tabs>
	);
}
