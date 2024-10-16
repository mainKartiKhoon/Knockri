import React from 'react'

const Filter = (props) => {

  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;
  // console.log(filterData);


  function filterHandler(title) {
    setCategory(title);
    console.log(category);
  }


  return (
    <div className=''>
      {
        filterData.map((data) => (
          <button onClick={() => filterHandler(data.title)} className={`rounded-full text-[16px] mx-[4px] font-semibold py-[7px] px-[30px]
            ${
                category === data.title
                ? "text-white bg-[#1967d2]"
                : "text-black bg-[#f6f4fc]"
            }  
            transition - all duration-300`} key={data.id}>{data.title}</button>
        ))
      }
    </div>
  )
}

export default Filter


// ${
//     category === data.title
//     ? "text-white bg-[#1967d2]"
//     : "text-black bg-[#f6f4fc]"
// }