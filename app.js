let items = [
  { link: 'https://github.com', name: 'GitHub' },
  { link: 'https://discord.com/app', name: 'Discord' },
  { link: 'https://mail.google.com', name: 'Gmail' },
  { link: 'https://stackoverflow.com', name: 'Stack Overflow' },
  { link: 'https://desmos.com/calculator', name: 'Desmos' },
  { link: 'https://translate.google.com', name: 'Translate' },
  { link: 'https://leetcode.com', name: 'LeetCode' },
  { link: 'https://jr0.org', name: 'JR0.org' },
  { link: 'https://cplusplus.com/', name: 'C++' },
  {
    link: 'https://rust-lang-nursery.github.io/rust-cookbook/',
    name: 'Rust Book',
  },
  { link: 'https://canvas.ucdavis.edu', name: 'UCD Canvas' },
  { link: 'https://portal.mypearson.com/portal', name: 'MyLab' },
];

let container = document.getElementById('container');

for (let x in items) {
  var li_item = document.createElement('li');
  var a_item = document.createElement('a');
  var p_item = document.createElement('p');

  p_item.setAttribute('class', 'num-item');
  a_item.setAttribute('class', 'link-item');

  item = items[x];
  a_item.href = item['link'];
  a_item.innerHTML = item['name'];
  p_item.innerHTML = x;

  li_item.append(p_item);
  li_item.append(a_item);
  container.append(li_item);
}

const getDateEnding = (number) => {
  var ending = number % 10;
  if (ending == 1) {
    return 'st';
  } else if (ending == 2) {
    return 'nd';
  } else if (ending == 3) {
    return 'rd';
  } else {
    // Zero included
    return 'th';
  }
};

const getJimDay = (number) => {
  var day = number % 3;

  if (number == 7) {
    return 'Rest Day';
  }

  if (day == 0) {
    return 'Leg Day';
  }

  if (day == 1) {
    return 'Push Day';
  }

  if (day == 2) {
    return 'Pull Day';
  }
};

const setDate = () => {
  const date = new Date();
  const spec_date = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });

  document.getElementById('date').innerHTML = month + ' ' + spec_date;
  document.getElementById('day-sufix').innerHTML = getDateEnding(spec_date);
};

const setJimDay = () => {
  const date = new Date();
  const day = date.getDay();
  const name = date.toLocaleDateString('en-US', {
    weekday: 'long',
  });

  document.getElementById('jim-day').innerHTML = getJimDay(day) + " " + name;
};

setDate();
setJimDay();
