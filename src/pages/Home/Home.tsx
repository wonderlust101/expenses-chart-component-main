import Expenses from "./Expenses";
import "./Home.scss";
import dataJson from "../../data/data.json";

const expensesData: expenses[] = dataJson;

export default function Home() {
    return (
        <main className="home">
            <Expenses expensesData={expensesData}/>
        </main>
    );
}