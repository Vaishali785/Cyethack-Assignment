import React from "react"
import ListTableHeader from "../components/ListPageComponents/ListTableHeader"
import ListTableBody from "../components/ListPageComponents/ListTableBody"

const List = () => {
	return (
		<div className="min-h-screen rounded-lg overflow-hidden m-4">
			<ListTableHeader />
			<ListTableBody />
		</div>
	)
}

export default List
