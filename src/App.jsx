import React, { useState, useEffect } from 'react'
// {sth} => named export 

import CardComponent from "./components/CardComponent";
import Navbar from "./components/Navbar";
import SideBarComponent from './components/SideBarComponent'
import axios from 'axios'
import ContentLoader from 'react-content-loader'

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [showItems, setShowItems] = useState(3);
  const [responseData, setResponseData] = useState([]);
  // react way to store some value to a variable
  // state variable

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data);
        const myData = res.data;
        setResponseData(myData);
        setIsLoading(false);
      })
  }, [])

  // fetching data from API
  // Get the data
  // Get Request
  // Get Method
  // POST Method
  // PUT Method
  // DELETE



  return (
    <div className="page">
      <Navbar />

      <main className="flex flex-col md:flex-row gap-5 px-5 py-5">
        <div className="sidebar w-full  md:w-[20%] p-5 shadow-md">
          <SideBarComponent />
        </div>
        <div className="content w-full md:w-[80%] bg-slate-300 p-5 ">
          <div className="gridTemplate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {isLoading &&
              <>

                <ContentLoader viewBox="0 0 500 280" height={280} width={500}>
                  <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
                  <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
                  <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
                  <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
                </ContentLoader>
                <ContentLoader viewBox="0 0 500 280" height={280} width={500}>
                  <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
                  <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
                  <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
                  <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
                </ContentLoader>
                <ContentLoader viewBox="0 0 500 280" height={280} width={500}>
                  <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
                  <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
                  <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
                  <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
                </ContentLoader>
              </>
            }
            {responseData.slice(0, showItems).map((item) => (


              <CardComponent imageUrl={`https://picsum.photos/id/${item.id}/500/500`} title={item.title} text={item.body} btnText="Know More" link="/blog/slug" userIdReceived={item.userId} />

            ))}
          </div>

          <button onClick={() => setShowItems(showItems + 3)} className='bg-purple-700 mt-5 w-full text-white px-5 py-3 rounded'>Load More Data</button>

        </div>
      </main>
    </div>
  );
}

export default App;
