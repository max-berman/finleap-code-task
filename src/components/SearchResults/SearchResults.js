import React from 'react'

export default function SearchResults({ cityList = [], setCityList }) {
  function handleOnClick(itemId) {
    setCityList(cityList.filter(({ id }) => itemId !== id))
  }
  function className(temp) {
    return temp > 20 ? 'hot' : temp >= 5 && temp <= 20 ? 'mild' : 'cold'
  }

  return (
    cityList.length > 0 && (
      <section className='cards'>
        {cityList
          .sort((x, y) => +y.temp_max - +x.temp_max)
          .map(({ id, name, temp_max, temp_min }, key) => (
            <dl className={`${className(temp_max)} card`} key={key}>
              <dd className='close' onClick={() => handleOnClick(id)} />
              <dt>{name}</dt>
              <dd>
                <span>min:</span> {temp_max}
              </dd>
              <dd>
                <span>max:</span> {temp_min}
              </dd>
            </dl>
          ))}
      </section>
    )
  )
}
