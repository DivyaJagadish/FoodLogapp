import React from "react";
import SimpleMap from "./map";
import Nav from "./Navigation.jsx";
import Card from "./StatComponents";
import { PieChart } from "react-minimal-pie-chart";

export default function App() {
	return (
		<>
			<Nav />
			<SimpleMap />
			<Card />
			<PieChart
				data={[
					{ title: "One", value: 10, color: "#E38627" },
					{ title: "Two", value: 15, color: "#C13C37" },
					{ title: "Three", value: 20, color: "#6A2135" },
				]}
				label={({ dataEntry }) => dataEntry.title}
			/>
			;
		</>
	);
}
