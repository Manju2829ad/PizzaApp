import React from 'react'



function NonVegPizzaP({pizzadata=[]}) {


    return (
        <>
          <div
            className="container"
            style={{
              display: 'flex',
              width: '900px',
              height: 'auto',
            flexWrap: 'wrap',
              boxSizing: 'border-box',
              padding:'20px',
              border:'1px solid black',
              marginTop:'50px'
            }}
          >
            {pizzadata.filter((data) => data.category === 'nonVeg').map((data) => 
            
            (
                <div key={data.id} className="card" style={{ width: '240px', height: '400px', margin: '10px',border:'1px solid black',marginTop:'50px' }}>
                  <div className="image" style={{ width: '100%', height: '250px' }}>
                    <img src={data.image} alt={data.name} style={{ width: '100%', height: '100%' }} />
                  </div>
                  <h2 className="cardname" style={{ fontFamily: 'sans-serif' }}>{data.name}</h2>
                  <p className="des" style={{ fontFamily: 'sans-serif', fontSize: '16px' }}>{data.description}</p>
                  <select style={{ width: '100px' }} id="size" name="size">
                    {data.sizes.map((size, index) => (
                      <option value={size} key={index}>
                        {size}
                      </option>
                    ))}
                  </select>
                  <select style={{ width: '100px' }} className="crust" id="crust" name="crust">
                    {data.crust.map((crust, index) => (
                      <option value={crust} key={index}>
                        {crust}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
          </div>
        </>
      );
    }
    
export default NonVegPizzaP;