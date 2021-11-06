import React from 'react'

function Tablehead() {
    return (
        <>
            <thead>
                                        <tr>
                                            <th style={{width: "200px", overflow: "hidden"}}>Activity</th>
                                            <th style={{width: "190px", overflow: "hidden"}}>Duration (min)</th>
                                            <th style={{width: "210px", overflow: "hidden"}}>Discription</th>
                                            <th style={{width: "180px", overflow: "hidden"}}>Date</th>
                                            <th style={{width: "210px", overflow: "hidden"}}>Overdue Alert</th>
                                            <th style={{width: "100px", overflow: "hidden"}}>Action</th>
                                        </tr>
                                    </thead>
        </>
    )
}

export default Tablehead
