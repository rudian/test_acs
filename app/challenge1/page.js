'use client';

import {useEffect, useState} from "react";
import {Button, InputNumber, notification} from "antd";

export default function Challenge1()
{
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [totalNumber, setTotalNumber] = useState(0);

    const [api, contextHolder] = notification.useNotification();
    const onChangeNumber1 = (value) => {
        setNumber1(value);
    };

    const onChangeNumber2 = (value) => {
        setNumber2(value);
    };

    const sum=()=>{
        if(number1=="" || number2==""){
            api['error']({
                message: 'Error!',
                description:
                    'Number1 and Number2 are required fields',
            });
            return;
        }

        setTotalNumber(number1+number2);
    }

    return (
        <>
            {contextHolder}
            <div style={{margin:"0 auto", width:"300px",marginTop:"30px"}}>
                <div className="flex flex-col">
                    <div className="font-medium text-2xl">Adding Two Numbers</div>
                    <InputNumber min={1} max={1000000000} defaultValue={""} onChange={onChangeNumber1} placeholder={"First Number"} style={{width:"100%",marginTop:"10px"}} />
                    <InputNumber min={1} max={1000000000} defaultValue={""} onChange={onChangeNumber2} placeholder={"Second Number"} style={{width:"100%",marginTop:"10px"}}/>
                    <Button style={{marginTop:"20px"}} onClick={()=>{sum();}}>Add Two Numbers</Button>

                    {
                        totalNumber > 0 &&
                        <div className="font-medium text-xl" style={{marginTop:"10px"}}>Total:{totalNumber}</div>
                    }

                </div>
            </div>
        </>
    );
}
