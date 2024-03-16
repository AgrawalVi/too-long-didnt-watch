
// export default function YoutubeBox() {
//     return (
//       <div className="flex justify-center items-start h-screen">
//         <div className="bg-beige-light rounded-md shadow-md p-6 opacity:75">
//             <input type="text" className="w-64 h-10 px-3 rounded-full border border-transparent focus:outline-none text-black" placeholder="Insert Youtube Link" />
//         </div>
//       </div>
//     );
//   }
  // export default function YoutubeBox() {
  //   return (
  //     <div className="flex justify-center items-start h-screen">
  //       <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
  //         <div className="w-64 h-10 px-3 rounded-full border border-transparent focus:outline-none focus:border-blue-500 text-black" contentEditable="true" placeholder="Enter text..."></div>
  //       </div>
  //     </div>
  //   );
  // }

  export default function YoutubeBox() {
    return (
      <div className="flex justify-center items-start h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6" style={{ width: '80%', height:'20%'}}>
          <input type="text"
                 className="w-full h-10 px-3 rounded-b-full border border-transparent focus:outline-none focus:border-blue-500 text-x3"
                 style={{ borderRadius: '0 0 0px 0px', height:'100%', fontSize: '90px'}}
                 placeholder="Enter video link"
          />
        </div>
      </div>
    );
  }