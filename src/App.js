import React, { useState } from 'react';
import './App.css';

function App() {
  const initialValues = {username: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => { 
    // console.log(e.target.value);
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value}); //角括弧でnameを囲うと名称参照できる
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //画面のリロードを無効にする

    // ログイン情報の送信
    // 入力チェック
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username){
      errors.username = "ユーザー名を入力してください。";
    }
    if (!values.password){
      errors.password = "パスワードを入力してください。";
    }else if(values.password.length < 4){
      errors.password = "パスワードが短すぎます。";
    }

    return errors;
  };

  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input type="text" name="username" placeholder="ユーザー名" onChange={(e) => handleChange(e)}/>
          </div>
          <p className="errorMsg">{formErrors.username}</p>
          <div className="formField">
            <label>パスワード</label>
            <input type="text" name="password" placeholder="パスワード" onChange={(e) => handleChange(e)}/>
          </div>
          <p className="errorMsg">{formErrors.password}</p>
          <button className="submitButton">ログイン</button>
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="msgOk">ログインに成功しました。</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
