(function() {
   'use strict';

   // Assign button and light variables by div ID
  const stopLight = document.getElementById("stopLight");
  const stopButton = document.getElementById("stopButton");
  
  // Add event listener to stop button to toggle class "stop"
  stopButton.addEventListener('click', (event)=>{
    console.log(stopButton.textContent + " was clicked");
    stopLight.classList.toggle("stop");
    checkLight(stopLight, 'stop', stopButton);
  })

  // Add event listener to stop button to track mouseover
  stopButton.addEventListener('mouseover',(event)=>{
    console.log('Entered ' + stopButton.textContent);
  })

  // Add event listener to stop button to track mouse leaving
  stopButton.addEventListener('mouseout',(event)=>{
    console.log('Left ' + stopButton.textContent);
  })
  // Add event listener to slow button to toggle class "slow"
  let slowLight = document.getElementById('slowLight');
  let slowButton = document.getElementById('slowButton');
  slowButton.addEventListener('click', (event)=>{
    console.log(slowButton.textContent + ' was clicked');
    slowLight.classList.toggle('slow');
    checkLight(slowLight, 'slow', slowButton);
  })
  // Add event listener to slow button to track mouseover
  slowButton.addEventListener('mouseover', (event) => {
    console.log('Entered ' + slowButton.textContent);
  })
  // Add event listener to slow button to track mouse leaving
  slowButton.addEventListener('mouseout', (event) => {
    console.log('Left ' + slowButton.textContent);
  })
  // Add event listener to go button to toggle class "go"
  const goLight = document.getElementById("goLight")
  const goButton = document.getElementById("goButton")
  goButton.addEventListener('click', (event)=>{
    console.log(goButton.textContent + ' was clicked');
    goLight.classList.toggle("go")
    checkLight(goLight, 'go', goButton);
  })
  // Add event listener to go button to track mouseover
  goButton.addEventListener('mouseover', (event) => {
    console.log('Entered ' + goButton.textContent);
  })
  // Add event listener to go button to track mouse leaving
  goButton.addEventListener('mouseout', (event) => {
    console.log('Left ' + goButton.textContent);
  })

  // Add function that logs to console when a light turns on and off
  function checkLight(bulb, color, button) {
    if (bulb.classList.contains(color)) {
      console.log(button.textContent + ' turned on.')
    } else {
      console.log(button.textContent + ' turned off.')
    }
  }

})();
