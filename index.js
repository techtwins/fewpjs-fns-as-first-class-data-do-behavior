/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = time => {
  let t = parseFloat(time)

  if ( t < 12 ) {
   return "Good Morning"
  } else if ( t > 12 && t < 17){
    return "Good Afternoon"
  } else if (t > 17) {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
const displayMessage = string => {
  document.getElementById("greeting").innerText = string
}