// import React from 'react'

// export default class Delete extends React.Component {
//   static defaultProps ={
//     onDeleteLog: () => {},
//   }

//   handleClickDelete = e => {
//     e.preventDefault()
//     const logId = this.props.id

//     fetch('http://localhost:8000/log', {
//       method: 'DELETE',
//       headers: {
//         'content-type': 'application/json'
//       },
//     })
//       .then(res => {
//         if (!res.ok)
//           return res.json().then(e => Promise.reject(e))
//         return res.json()
//       })
//       .then(() => {
//         this.props.deleteLog(logId)
//         // allow parent to perform extra behaviour
//         this.props.onDeleteLog(logId)
//       })
//       .catch(error => {
//         console.error({ error })
//       })
//   }

//   render() {
//     const { id, climb_type, difficulty, attempts, rating } = this.props
//     return (
//       <div className='Log'>
//         <h2 className='Note__title'>
//           <Link to={`/log${id}`}>
//             {name}
//           </Link>
//         </h2>
//         <button
//           className='Log__delete'
//           type='button'
//           onClick={this.props.handleClickDelete}
//         >
  
//           {' '}
//           remove
//         </button>
//         <div className='Note__dates'>
//           <div className='Note__dates-modified'>
//             Modified
//             {' '}
//             <span className='Date'>
//               {format(modified, 'Do MMM YYYY')}
//             </span>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }