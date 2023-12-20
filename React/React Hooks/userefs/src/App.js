// import { useState } from 'react'; const initialValues = { username: '', password: '' }; const LoginForm = () => {
//   const [formValues, updateFormValues] = useState(initialValues);
//   const { username, password } = formValues;

// const { act } = require("react-dom/test-utils");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formValues);
//   };

//   const handleChange = (e) => {
//     console.log(e.target.value);
//     updateFormValues({
//       ...formValues,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <input
//           value={username}
//           onChange={handleChange}
//           name='username'
//           placeholder='Enter your username'
//         />
//       </div>
//       <div>
//         <input
//           value={password}
//           onChange={handleChange}
//           name='password'
//           placeholder='Enter your password'
//         />
//       </div>
//       {username && password && <button type='submit'>Login</button>}
//     </form>
//   );
// };

// function App() {
//   return <LoginForm />;
// }

// export default App;


//Example code 
// const users= ['user1', 'user2', 'user3'];
// const reducedValue=users.reduce((acc, cur)=>'you hv been reduced');
// console.log(reducedValue);

// const numbers =[3, 5, 4, 10];
// const reducedValue=numbers.reduce((acc, cur)=>acc+cur, 50);
// console.log(reducedValue);

// const users =[
//   {
//     username: 'Edie',
//     location: 'seatle'
//   },
//   {
//     username: 'tomah',
//     location: 'portland'
//   },
//   {
//     username: 'Ediejerome',
//     location: 'oakland'
//   },
//   {
//     username: 'solace',
//     location: 'oakland'
//   }
// ];

// const usersByCity=users.reduce((acc,user)=>({
//   ...acc,
//   [user.location]: (acc[user.location] || 0 )+1 }), {}
// );

// console.log(usersByCity);
// const initialState = {
//     coins: 0,
//     health: 100
// };
// const actionsArray = [
//     { type: 'ADD_COINS', payload: 20 },
//     { type: 'SUBTRACT_HEALTH', payload: 5 }
// ];

// const marioReducer = (state, action) => {
//     console.log(action);
//     switch (action.type) {
//         case 'ADD_COINS':
//             return {
//                 ...state,
//                 coins: state.coins + action.payload
//             };
//         case 'SUBTRACT_COINS':
//             return {
//                 ...state,
//                 coins: state.coins - action.payload
//             };
//         case 'ADD_HEALTH':
//             return {
//                 ...state,
//                 health: state.health + action.payload
//             };
//         case 'SUBTRACT_HEALTH':
//             return {
//                 ...state,
//                 health: state.health - action.payload
//             };
//         default:
//             return state;
//     }
// }
// const currentState = actionsArray.reduce(marioReducer, initialState);
// // console.log(currentState);

// const gems = [
//     { type: 'amethyst', price: 8 },
//     { type: 'turquoise', price: 50 },
//     { type: 'selenite', price: 2 },
//     { type: 'topaz', price: 10 },
//     { type: 'emerald', price: 500 }
// ];
// //let count =0;
// const gemsOverTen = gems.reduce((acc, cur) => {

//     if(gems.price<10) 
//     acc[0]+=cur   
//     return acc;
  
// },[]);
 
// console.log(gemsOverTen)

// export const selectStudentById = (id) = (state) => state.students.data.find(s => s.id = id);

// export const selectStudentById = (id) => (state) => state.students.data.find(s => s.id = id);

const pauseThenLog =(pause)=>{
    new Promise((resolve, reject)=>{
        if(pause){
            setTimeout(()=>resolve(`pause for ${pause} milliseconds`), pause);
        }else {
            reject('No pause was detected');
        }
    });
}

pauseThenLog(2000).then((response)=>console.log(response)).catch((err)=>console.log(err));