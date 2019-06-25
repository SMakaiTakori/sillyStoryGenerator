var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
var storyText = `It was 94 fahrenheit outside, so ${insertX} went for a walk. When they got to ${insertY}, they stared in horror for a few moments, then ${insertZ}. Bob saw the whole thing, but was not surprised — ${insertX} weighs 300 pounds, and it was a hot day.`;


randomize.addEventListener('click', result);

function result() {

  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(insertX, xItem);
  newStory = newStory.replace(insertX, xItem);
  newStory = newStory.replace(insertY, yItem);
  newStory = newStory.replace(insertZ, zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
  } 

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300/14) + ' stones';
    var temperature =  Math.round((94-32)*5/9) + ' centigrade';

    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}