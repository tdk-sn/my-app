import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import './App.css';

function App() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendRequest();
    }
  }, [formErrors]);

  const sendRequest = async () => {
    try {
      // リクエストのボディを構築
      const requestData = `username=${formValues.username}&&password=${CryptoJS.SHA256(formValues.password).toString()}`;
      const response = await fetch('https://script.google.com/macros/s/AKfycbydU9SkC0rTSqAUdf3T5x7SVNu8clwzPcg2iolUAoG3Peuo6HZOe9Ty4XSJ14Eb_nKnzA/exec', {
        method: 'POST',
        body: requestData,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.log(error);
      setMessage("エラーが発生しました。もう一度お試しください。");
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "ユーザー名を入力してください。";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください。";
    } else if (values.password.length < 4) {
      errors.password = "パスワードが短すぎます。";
    }
    return errors;
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input
              type="text"
              name="username"
              placeholder="ユーザー名"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className="errorMsg">{formErrors.username}</p>
          <div className="formField">
            <label>パスワード</label>
            <input
              type="password"
              name="password"
              placeholder="パスワード"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className="errorMsg">{formErrors.password}</p>
          <button className="submitButton">ログイン</button>
          {message && <p className="message">{message}</p>}
        </div>
      </form>
    </div>
  );
}

export default App;
