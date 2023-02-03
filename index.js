const date = (dateX, dateY) => dateX.getTime() === dateY.getTime(); // esta funcióin compara los milisegundos desde enero 1 1970 hasta el momento y si son iguales. 

/*
los formatos de date, dependiendo de si son declarados en string  o con números cambian su index, en número el index de mes es 0, es decir, new Date(2019, 1, 1) referencia el primero de febrero del 2019, en vez del primero de enero de 2019, seria new Date(2019, 0, 1)
*/

// Esta función compara el día no más, un número de 1 a 31, en este caso esto funciona para que la comparación de new Date(2000, 01, 01) new Date('2000/01/01') de true.
const getDate = (dateX, dateY) => dateX.getDate() === dateY.getDate();

  console.log(date(new Date(2019, 0, 1), new Date(2019, 0, 1)))
  console.log(date(new Date('2020/01/01'), new Date('2020/01/02')));
  console.log(date(new Date(2019, 0, 1), new Date(2019, 1, 1)))
  console.log(date(new Date('2000/01/01'), new Date('2000/01/01')));
  console.log(date(new Date(2000, 01, 01), new Date('2000/01/01')));

  console.log(getDate(new Date(2000, 01, 01), new Date('2000/01/01')));