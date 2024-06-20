import React from "react"
import items from "../../store/items.json"
import ListTableBodyRow from "./ListTableBodyRow"
const ListTableBody = () => {
	console.log(items)
	return (
		<div className="">
			{items.map((item) => (
				<ListTableBodyRow data={item} key={item.sno} />
			))}
		</div>
	)
}

export default ListTableBody
