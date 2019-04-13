import React from 'react';
import ClassCounter from "./ClassCounter";
// const user = [
//   {
//     firstName: "Nguyễn",
//     lastName: "Thanh Thế",
//     email: "nguyenthe@gmail.com",
//   },
//   {
//     firstName: "Lê",
//     lastName: "Bích Phượng",
//     email: "bichphuong@gmail.com",
//   },
//   {
//     firstName: "Trần",
//     lastName: "Quang Thắng",
//     email: "",
//   },
//   {
//     firstName: "Nguyễn",
//     lastName: "Thanh Thế",
//     email: "nguyenthe@gmail.com",
//   },
//   {
//     firstName: "Lê",
//     lastName: "Bích Phượng",
//     email: "bichphuong@gmail.com",
//   },
//   {
//     firstName: "Trần",
//     lastName: "Quang Thắng",
//     // email: ,
//   },
// ]

// function GetFullName(fn, ln){
//   const style = {
//     fontSize: 20,
//     marginBottom: "10px",
//     color: "#333",
//   }
//   return <div style={style}>{fn} {ln}</div>
// }

// function GetEmail(mail){
//   const style = {
//     color: "#fff",
//     cursor: "pointer",
//     display: 'inline-block',
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: 200,
//     backgroundColor: "#8ab4f7",
//     boxShadow: "0 2px 10px -5px rgba(0, 0, 0, 0.5)",
//     fontSize: 16,
//   }
  
//   if (!mail){
//     mail = 'User không có mail'
//     style.backgroundColor = "red"
//   }
//   return <div style={style}>{mail}</div>
// }

// const User = (props) => {
//   const u = props.user
//   const style={
//     // position: "absolute",
//     marginTop: 70,
//     width: "100%",
//     textAlign: "center",
//   }

//   const element = <div style={style}>{GetFullName(u.firstName, u.lastName)}{GetEmail(u.email)}</div>
//   return element
// }

const App = () =>{
  // const element = user.map(u => {
  //   return <User user={u} />
  // })
  const element = <ClassCounter />
  return element
}

export default App;
