let listVar = null;
let val;

const formValue = document.getElementById('form-value');
const submit = document.getElementById('submit');
const form = document.querySelector('form');
const btn = document.querySelector('button');

submit.addEventListener('click', (event) => {
    event.preventDefault(); //Pra previnir de recarregar a página

    if (formValue.value == "") { //Se não tiver nada no input
        formValue.classList.add('warning'); //Adiciona a classe warning no placeholder
        
        setTimeout(() => { //Espera 800ms e remove a classe
            formValue.classList.remove('warning');
        }, 800);

    } else {
        val = formValue.value; //Salva o valor do form numa variável
        listVar = document.createElement('li'); //Cria um elemento li
        listVar.textContent = val; //Dá o valor daquela variável para o elemento criado
        document.getElementById('lista').appendChild(listVar); //Mete o elemento criado na lista

        form.reset(); //Tira o valor do form pra limpar o campo

        //Acho que eu poderia ter botado o valor do form direto no elemento criado ao invés de fazer uma variável temporária, mas quis fazer assim mesmo
    }
    
})

btn.addEventListener('click', (event) => {
    form.reset();
})

el.addEventListener('click', (event) => { // O Event passa um monte de informações do elemento que você tá clicando.
    event.target.classList.add("teste")
    console.log(event.target)
})