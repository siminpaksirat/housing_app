// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

// // const VisuallyHiddenInput = styled('input')({
// //   clip: 'rect(0 0 0 0)',
// //   clipPath: 'inset(50%)',
// //   height: 1,
// //   overflow: 'hidden',
// //   position: 'absolute',
// //   bottom: 0,
// //   left: 0,
// //   whiteSpace: 'nowrap',
// //   width: 1,
// // });


// const Profile = () => {
//   const dispatch = useDispatch();

//   const { firstname, lastname, email, password } = useSelector(
//     (state) => state.auth.me
//   );
//   const [form, setForm] = useState({
//     currentPassword: '',
//     newPassword: '',
//   });

//   const handleChange = (event) => {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       dispatch(updatePassword(form));
//       <Navigate to="/profile" />;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container my-5">
//       <h2>Edit Profile</h2>
//       {userType === 'admin' && (
//         <button className="btn btn-primary mb-3">Admin Privileges</button>
//       )}
//       <div>
//         <p>
//           <strong>First Name:</strong> {firstName}
//         </p>
//         <p>
//           <strong>Last Name:</strong> {lastName}
//         </p>
//         <p>
//           <strong>Email:</strong> {email}
//         </p>
//       </div>
//       <div>
//       <Button
//   component="label"
//   role={undefined}
//   variant="contained"
//   tabIndex={-1}
//   startIcon={<CloudUploadIcon />}
// >
//   Upload file
//   <VisuallyHiddenInput type="file" />
// </Button>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="currentPassword" className="form-label">
//             Current Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="currentPassword"
//             name="currentPassword"
//             value={form.currentPassword}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="newPassword" className="form-label">
//             New Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="newPassword"
//             name="newPassword"
//             value={form.newPassword}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Profile;
