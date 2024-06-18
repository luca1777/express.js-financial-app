import { FinancialRecordForm } from "./financial-record-form"
import { FinancialRecordList } from "./financial-record-list"
import "./financial-record.css";

export const Dashboard = () => {
    return <div className="dashboard-container">
        <h1>Welcome, here are your finances!</h1>
        <FinancialRecordForm />
        <FinancialRecordList />
    </div>
}