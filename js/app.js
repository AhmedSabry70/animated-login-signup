const signup_btn = document.querySelector('#signup-btn')
const signin_btn = document.querySelector('#signin-btn')
const container = document.querySelector('.container')
const signUpBtn = document.querySelector('#sign-up-btn')


signup_btn.addEventListener('click', () => {
    container.classList.add('signup-mode')
})

signin_btn.addEventListener('click', () => {
    container.classList.remove('signup-mode')
})



// const register = (data) => {
//     fetch('http://localhost:3000/api/users/signup', {



//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//           'content-type': 'application/json',
    
//         },
//         body: JSON.stringify(data),
//       })
// .then(response => response.json())
// .then(data => {
// console.log('Success:', data);
// })
// .catch((error) => {
// console.error('Error:', error);
// });
// }

// signUpBtn.addEventListener('click', async (e) => {
//     e.preventDefault()

//     try {
//         const name = document.querySelector('#user_name').value;
//         const email = document.querySelector('#Email').value;
//         const user_password = document.querySelector('#user_password').value;
//         const Confirm_Password = document.querySelector('#Confirm_Password').value;

//         const data = {
//             name,
//             email,
//             user_password,
//             Confirm_Password,
//         }

//         console.log(data);

//         await register(data)
        
//     } catch(error) {
//             console.log(error);
//     }


// })


