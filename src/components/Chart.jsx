import React from 'react'
import { TagCloud } from 'react-tagcloud'


function RequestChart(props) {
  // TODO: make wordFreqArray represent the sum of all words in all long descriptions within the request list.

  const wordFreqArray = []
  // for (let i = 0; i < props.data.length(); i++) {
  //   let words = i.ldescription.split()
  //   if (wordFreqArray[words] === undefined){
  //     wordFreqArray[words] = 1 
  //   }
  //   else {
  //     wordFreqArray[words] += 1
  //   }
  // }
  let freqMap = {};
  for (let i = 0; i < props.data.length; i++) {

    let words = props.data[i].ldescription.split(" ")
    words.forEach(function (w) {
      if (!freqMap[w]) {
        freqMap[w] = 0;
      }
      freqMap[w] += 1;
    });
  }
  for (let w in freqMap) {
    wordFreqArray.push({ value: w, count: freqMap[w] })
  }
  return (
    <div className="form-contain">
      <TagCloud minSize={24}
        maxSize={48}
        tags={wordFreqArray}
        colorOptions={{ luminosity: 'dark' }}
        className="simple-cloud"
        randomSeed={484}
      />  </div>
  )
}

export default RequestChart 