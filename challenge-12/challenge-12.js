(function (){/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
 let person = {
     'name': 'Bezerra',
     'lastname': 'Da Silva',
     'age': 86
 }
console.log( 'Propriedades de "person":', person );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
let books =[];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
let livroA = {'name': 'A', 'pages': 38};
let livroB = {'name': 'B', 'pages': 39};
let livroC = {'name': 'C', 'pages': 40};

books.push(livroA);
books.push(livroB);
books.push(livroC);
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
for (prop in books) {
    console.log(books[prop]);
}

/*
Remova o último livro, e mostre-o no console.
*/
console.log( '\nLivro que está sendo removido:', books.pop());

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
for (prop in books) {
    console.log(books[prop]);
}

/*
Converta os objetos que ficaram em `books` para strings.
*/
books = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/

console.log( '\nLivros em formato string:', books);

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books);
console.log( '\nAgora os livros são objetos novamente:', books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(let i = 0; i < books.length; i++){
    for (prop in books[i]) {
        console.log(`${prop}: ${books[i][prop]}`);
    }
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
let myName = ['B','e','z','e','r','r','a ','D','a ','S','i','l','v','a']

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( '\nMeu nome é:', myName.join(''));

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/

console.log( '\nMeu nome invertido é:', myName.reverse().join(''));

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/

console.log( '\nAgora em ordem alfabética:', myName.sort());

})();