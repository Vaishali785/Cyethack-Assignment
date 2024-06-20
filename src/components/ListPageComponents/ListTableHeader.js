function ListTableHeader() {
	return (
		<div className="grid xl:grid-cols-[100px,1fr,1.5fr,1.5fr,repeat(3,minmax(0,1fr))] sm:max-[850px]:grid-cols-[100px,1fr,1.5fr,1fr,1fr] min-[851px]:max-xl:grid-cols-[100px,1fr,1.5fr,1.5fr,1fr,1fr]  min-[450px]:max-sm:grid-cols-[80px,1fr,2fr,1fr] grid-cols-[80px,2fr,1fr] gap-2 justify-center items-start w-full px-4 py-3 bg-themeCol text-white border-b-2 border-b-white">
			<div className="flex gap-2 justify-start items-center py-5 px-3">
				<span className="text text-xs font-bold uppercase leading-[1.3rem] ">
					S. NO.
				</span>
			</div>
			<div className="flex gap-2 justify-start items-center py-5 px-3">
				<span className="text text-xs font-bold uppercase leading-[1.3rem] inline-block">
					Mobiles
				</span>
			</div>
			<div className="flex gap-2 justify-start items-center py-5 px-3  max-[450px]:hidden min-[450px]:inline-block">
				<span className="text text-xs font-bold uppercase leading-[1.3rem] inline-block ">
					Models
				</span>
			</div>

			<div className="flex  py-5 px-3 max-[850px]:hidden">
				<span className="text text-xs font-bold uppercase leading-[1.3rem] inline-block">
					Device OS
				</span>
			</div>
			<div className=" justify-cent py-5 px-3 xl:flex sm:inline-flex hidden">
				<span className="text text-xs font-bold uppercase leading-[1.3rem] inline-block">
					Release Date
				</span>
			</div>
			<div className="flex gap-2 justify-start items-center py-5 px-3 max-xl:hidden max-[850px]:hidden">
				<span className="text text-xs font-bold uppercase leading-[1.3rem] inline max-[850px]:w-min">
					Service Center
				</span>
			</div>
			<div className="flex justify-start py-5 px-3 ">
				<span className="text text-xs font-bold uppercase leading-[1.3rem] inline-block ">
					Price
				</span>
			</div>
		</div>
	)
}

export default ListTableHeader
