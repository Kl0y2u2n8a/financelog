import React, { useState} from 'react';
import image from "/src/images/background.jpg";

const TodoList = () => {
    const [type, setType] = useState<string>('');
    const [detail,setDetail] = useState<string>('');
    const [person,setPerson] = useState<string>('');
    const [money,setMoney] = useState<string>('');
    const [logs, setLogs] = useState<string[]>([]);

    const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    }

    const getDetails = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setDetail(e.target.value);
    }

    const getPersons = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPerson(e.target.value);
    }

    const getMoney = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setMoney(e.target.value);
    }

    const addLogs = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const newLogs = [...logs];
        if(type === "Pay"){
            newLogs.push("振込 : " + person + "様 に " + detail + " ため、￥" + money + " 送りました");
        } 
        else if(type === "Receive"){
            newLogs.push("入金 : " + person + "様 から " + detail + " ため、￥" + money + " もらいました");
        }
        setLogs(newLogs);

        // reset to default
        setType("");
        setDetail("");
        setPerson("");
        setMoney("");   
    }

    return (
        <div className='items-center'>
            <div className='flex flex-col md:flex-row justify-center'>
                <form onSubmit={addLogs} className='flex flex-col md:flex-row'>
                    <select onChange={handleType} value={type} className='m-1 text-black border-black border-2 rounded-xl p-1 text-center hover:border-blue-500' required>
                        <option>
                            ---------
                        </option>
                        <option value="Pay">
                            振込
                        </option>
                        <option value="Receive">
                            入金
                        </option>
                    </select>
                    
                    <input onChange={getDetails} value={detail} type='text' placeholder='内容' className=' m-1 border-black border-2 py-1 text-center rounded-xl hover:border-blue-500'required/>
                    <input onChange={getPersons} value={person} type='text' placeholder='誰から/誰に' className=' m-1 border-black border-2 py-1 text-center rounded-xl hover:border-blue-500'required/>
                    <input onChange={getMoney} value={money} type='number' placeholder='金額(￥)' className=' m-1 border-black border-2 py-1 text-center rounded-xl hover:border-blue-500' required/>
                    <div className='flex flex-col md:flex-row'>
                        <button type='submit' className=' border-black border-2 m-1 rounded-lg p-1 text-black font-semibold hover:border-blue-500'>追加</button>
                    </div>
                </form>
            </div>

            
            <div className='mt-2 max-w-2xl items-center mx-auto h-96 bg-black bg-opacity-10 rounded-xl shadow-md shadow-purple-200 overflow-x-auto
            scrollbar-track-sky-300 scrollbar-thumb-blue-500 scrollbar-thin'>
                <ul className='p-1 '>
                    {logs.map((log)=>(
                        <li className='border-2 border-black p-1 m-3 rounded-md shadow-lg text-sm md:text-xl shadow-indigo-400 bg-pink-300 bg-opacity-90 hover:border-red-500'><p>{log}</p></li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}

export default TodoList
