import React, { useState } from 'react';
import styles from './ZaikoPage.module.css';

const ZaikoPage = () => {
    const [rows, setRows] = useState([{ id: 1 }]);

    // 行追加
    const handleAddRow = () => {
        setRows([...rows, { id: rows.length + 1 }]);
    };

    // 行削除
    const handleDelRow = (id) =>{
        setRows(rows.filter(row => row.id !== id));
    }

    return (
        <div className={styles.ZaikoPage}>
            <h1>おうちの在庫管理システム</h1>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>管理対象</th>
                        <th>品目</th>
                        <th>ステータス</th>
                        <th>更新日</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row => (
                        <tr key={row.id}>
                        <td><select name="" id=""></select></td>
                        <td><input type="text" /></td>
                        <td><select name="" id=""></select></td>
                        <td><input type="text" readOnly /></td>
                        <td><button onClick={() => handleDelRow(row.id)}>削除</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.btnArea}>
                <button className={styles.btnAddRow} onClick={handleAddRow}>行追加</button>
                <button className={styles.btnUpdate}>更新</button>
            </div>
            
        </div>
    )
}

export default ZaikoPage