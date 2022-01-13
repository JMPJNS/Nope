import { NextPageContext } from "next"
import { Row } from "../models/row"
import rowService from "../services/rowService"



const Home = ({ rows }: { rows: Row[] }) => {
	return (<div>
		<h1>Rows</h1>
		{
			rows.map(r => <div key={r.id}>
				{r.colls.map(c => <p key={c.id}>
					{c.data}
				</p>)}
			</div>)
		}
	</div>)
}

export async function getServerSideProps(context: NextPageContext) {
	const rows = await rowService.getRows() ?? null
	return {
		props: {
			rows
		},
	}
}

export default Home