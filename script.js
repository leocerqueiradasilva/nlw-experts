const perguntas = [
	{
		pergunta:
			"Qual é a maneira correta de declarar uma variável em JavaScript?",
		respostas: ["var myVar;", "variable myVar;", "let myVar;"],
		correta: 2,
	},
	{
		pergunta: "O que o método 'querySelector()' faz em JavaScript?",
		respostas: [
			"Seleciona vários elementos com a mesma classe.",
			"Seleciona o primeiro elemento que corresponde a um seletor CSS especificado.",
			"Seleciona todos os elementos filhos de um elemento específico.",
		],
		correta: 1,
	},
	{
		pergunta: "Qual desses é um operador de comparação em JavaScript?",
		respostas: ["===", ">>>", "<>"],
		correta: 0,
	},
	{
		pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
		respostas: [
			"Remove um ouvinte de evento de um elemento.",
			"Adiciona um ouvinte de evento a um elemento.",
			"Dispara um evento personalizado.",
		],
		correta: 1,
	},
	{
		pergunta: "Como você comentaria uma linha de código em JavaScript?",
		respostas: [
			"// Este é um comentário",
			"/* Este é um comentário */",
			"<!-- Este é um comentário -->",
		],
		correta: 0,
	},
	{
		pergunta: "Qual é a saída do seguinte código?\nconsole.log(3 + '3');",
		respostas: ["33", "6", "Erro"],
		correta: 0,
	},
	{
		pergunta: "Qual é o operador de atribuição em JavaScript?",
		respostas: ["==", "=", "+="],
		correta: 1,
	},
	{
		pergunta: "O que o método 'map()' faz em JavaScript?",
		respostas: [
			"Itera sobre uma matriz e retorna uma nova matriz com elementos transformados.",
			"Ordena os elementos de uma matriz.",
			"Remove elementos de uma matriz.",
		],
		correta: 0,
	},
	{
		pergunta: "O que o método 'push()' faz em JavaScript?",
		respostas: [
			"Remove o último elemento de uma matriz.",
			"Adiciona um elemento ao final de uma matriz.",
			"Inverte a ordem dos elementos em uma matriz.",
		],
		correta: 1,
	},
	{
		pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
		respostas: [
			"Retorna o tipo de dados de uma expressão.",
			"Converte uma string em um número.",
			"Concatena duas strings.",
		],
		correta: 0,
	},
]

const quiz = document.querySelector("#quiz") //pega div com id quiz
const template = document.querySelector("template") //pega todo o conteudo de template

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')

mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for (const item of perguntas) {
	// percorre cada questao como se fosse um item
	const quizItem = template.content.cloneNode(true) //faz / clona o nó quizItem
	quizItem.querySelector("h3").textContent = item.pergunta //adiciona a pergunta no h3

	for (const resposta of item.respostas) {
		const dt = quizItem.querySelector("dl dt").cloneNode(true) //clona dl e dt

		dt.querySelector("span").textContent = resposta // pega um resposta, cria um span e adiciona

		dt.querySelector("input").setAttribute(
			"name",
			"pergunta-" + perguntas.indexOf(item)
		) // pega o input do tipo radio e adiciona nome com base no indice de cada pergunta

		dt.querySelector("input").value = item.respostas.indexOf(resposta) // pega o input do tipo radio e adiciona valor com base no indice de cada resposta
        dt.querySelector('input').onchange = (event) => { //criando arrowFunction para pegar o evento do click
            const estaCorreta = event.target.value == item.correta // armazena se o que foi selecionado ao que esta no array de perguntas
            
            
            if (estaCorreta) {
                corretas.add(item) // se estaCorreta for true adiciona o item na variavel corretas
            } else {
                corretas.delete(item) // se estaCorreta for false remove o item na variavel corretas
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
            // alert(corretas.size)
        }

		quizItem.querySelector("dl").appendChild(dt)
	}

	quizItem.querySelector("dl dt").remove() //remove o primeiro item armazenado no quizitem

	quiz.appendChild(quizItem) // coloca / adiciona a pergunta na tela dentro da div quiz um item montado - uma pergunta
}
