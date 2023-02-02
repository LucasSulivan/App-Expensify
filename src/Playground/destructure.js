/* const book = {
  title: 'Ego is the Enemy',
  author:' Ryan Holiday',
  publisher: {
    name:'Penguin'
  }
};

const { name: publisherName = 'Self-Publisher' } = book.publisher

console.log(publisherName) */

const item = ['Coffe (HOT)', '$2.00', '$2.50','$2.75'];
const [coffe, ,medium] = item

console.log(`A medium ${coffe}, costs: ${medium}`);
