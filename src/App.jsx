import { useState } from 'react'
import './App.css'

function App() {
  // 🔹 แก้ 1: ใช้ useState เก็บค่าของ input และผลลัพธ์
  // เดิมคุณมี แต่ยังไปดึงค่า DOM โดยตรงอยู่
  const [moneyDD, setMoneyDD] = useState("");
  const [moneyS, setMoneyS] = useState("");
  const [moneyE, setMoneyE] = useState("");
  const [sumMoney, setSumMoney] = useState("0.00");

  const [howG, setHowG] = useState("");
  const [howE, setHowE] = useState("");
  const [moneyGE, setMoneyGE] = useState("0.00");
  const [moneyGC, setMoneyGC] = useState("0.00");

  // 🔹 แก้ 2: handleSubmit1 เลิกใช้ document.getElementById
  const handleSubmit1 = (e) => {
    e.preventDefault();
    const sum = (
      (Number(moneyDD) || 0) +
      (Number(moneyS) || 0) -
      (Number(moneyE) || 0)
    ).toFixed(2);
    setSumMoney(sum); // ใช้ React state อัปเดตค่าแทน
  };

  // 🔹 แก้ 3: handleSubmit2 คำนวณจาก state ตรงๆ ไม่ใช้ DOM
  const handleSubmit2 = (e) => {
    e.preventDefault();
    const ge = ((Number(sumMoney) * (Number(howG) || 0)) / 100).toFixed(2);
    const gc = ((Number(sumMoney) * (Number(howE) || 0)) / 100).toFixed(2);
    setMoneyGE(ge);
    setMoneyGC(gc);
  };

  return (
    <>  
      <center><h1>My Aom</h1></center>

      <div className='container'>
        {/* กล่องที่ 1 */}
        <div className="card">
          <div className="card-header">
            <div className="text-header">คำนวณ</div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit1}>
              <div className="form-group">
                <label>เงินเดือน</label>
                {/* 🔹 แก้ 4: ใช้ value + onChange (controlled input) */}
                <input 
                  type="number" 
                  className="form-control"
                  value={moneyDD}
                  onChange={(e) => setMoneyDD(e.target.value)} placeholder='กรอกเงินเดือน' 
                />
              </div>
              <div className="form-group">
                <label>รายได้เสริม</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={moneyS}
                  onChange={(e) => setMoneyS(e.target.value)} placeholder='กรอกรายได้เสริม'
                />
              </div>
              <div className="form-group">
                <label>ค่าใช้จ่ายรายเดือน</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={moneyE}
                  onChange={(e) => setMoneyE(e.target.value)} placeholder='กรอกค่าใช้จ่ายรายเดือน'
                />
              </div>
              <div className="form-group">
                <label>ยอดเงินคงเหลือต่อเดือน</label>
                {/* 🔹 แก้ 5: ใช้ JSX แสดงผล ไม่ใช้ innerHTML */}
                <p>{sumMoney} บาท</p>
              </div>
              <input type="submit" className="btn" value="ยืนยัน" />
            </form>
          </div>
        </div>

        {/* กล่องที่ 2 */}
        <div className="card">
          <div className="card-header">
            <div className="text-header">ผลลัพธ์</div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit2}>
              <div className="form-group">
                <label>ต้องการเเบ่งเก็บกี่ % จากเงินคงเหลือ</label>
                {/* 🔹 แก้ 6: เปลี่ยน input เป็น controlled */}
                <input 
                  type="number"
                  className="form-control"
                  value={howG}
                  onChange={(e) => setHowG(e.target.value)} placeholder='กรอกเปอร์เซ็นต์ที่ต้องการแบ่งเก็บ'
                />
              </div>
              <div className="form-group">
                <label>ต้องการเเบ่งลงทุนกี่ % จากเงินคงเหลือ</label>
                <input 
                  type="number"
                  className="form-control"
                  value={howE}
                  onChange={(e) => setHowE(e.target.value)} placeholder='กรอกเปอร์เซ็นต์ที่ต้องการแบ่งลงทุน'
                />
              </div>
              <div className="form-group">
                <label>เเบ่งเก็บ</label>
                {/* 🔹 แก้ 7: ใช้ state แสดงผล */}
                <p>{moneyGE} บาท</p>
              </div>
              <div className="form-group">
                <label>เเบ่งลงทุน</label>
                <p>{moneyGC} บาท</p>
              </div>
              <input type="submit" className="btn" value="ยืนยัน" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
