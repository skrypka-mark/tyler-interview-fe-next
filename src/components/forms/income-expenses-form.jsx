import { useState } from "react";
import Form from "@/components/form";
import TextFiled from "@/components/text-field";
import Congratulations from "@/components/congratulations";

export default function IncomeExpensesForm({ goBack }) {
    return (
        <Form title='Income and Expenses' isLast goBack={goBack}>
            <Congratulations />
        </Form>
    )
}
