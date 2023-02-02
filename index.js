const date = (dateX, dateY) => dateX.getTime() === dateY.getTime() ? true : false;

  console.log(date(new Date(2019, 0, 1), new Date(2019, 0, 1)))
  console.log(date(new Date('2020/01/01'), new Date('2020/01/02')));
  console.log(date(new Date(2019, 0, 1), new Date(2019, 1, 1)))
  console.log(date(new Date('2000/01/01'), new Date('2000/01/01')));