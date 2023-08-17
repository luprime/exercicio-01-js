/*
    nome do aluno
    primeira nota
    segunda nota

*/
const students = [
    {
        name: "Lucas",

        fistNote: 5,

        secondNote: 9
    },

    {
        name: "Marcia",

        fistNote: 7,

        secondNote: 2
    },

    {
        name: "Eduardo",

        fistNote: 7,

        secondNote: 8
    },
]

function average(fistNote, secondNote){

    return (fistNote + secondNote) / 2;

}

function printAverageNote(student) {

    const mean = average(student.fistNote, student.secondNote);
    if (mean >= 7) {
      return `
        A média de ${student.name} é: ${mean}\n parabéns, você foi aprovado!`;
    } else {
      return `
        A média de ${student.name} é: ${mean}\n Tente novamente!`;
    }
  }
  
  for (let student of students) {
    let Message = printAverageNote(student);
    alert(Message);
  }