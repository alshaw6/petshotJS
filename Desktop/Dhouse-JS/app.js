var animal = {
    tipo: 'cachorro',
    nome: 'batman',
    idade: 2,
    sexo: 'M',
    raca: 'pug',
    vacinado: true,
    tutor: {
        nome: 'alshaw',
        telefone: '(41)997979971'
    }
};


var listaDeAnimais = [
    {

        tipo: 'cachorro',
        nome: 'batman',
        idade: 2,
        sexo: 'M',
        raca: 'pug',
        vacinado: true,
        tutor: {
            nome: 'alshaw',
            telefone: '(41)997979971'
        }
    },
{
        tipo: 'cachorro',
        nome: 'max',
        idade: 4,
        sexo: 'M',
        raca: undefined,
        vacinado: true,
        tutor: {
            nome: 'ana',
            telefone: '(41)997979931'
        }
    }

]

function adicionarPet(tipo,nome,idade,raca,sexo,vacinado,tutor){
    var newPet = {
        tipo: tipo,
        nome: nome,
        idade: idade,
        sexo: sexo,
        raca: raca,
        vacinado: vacinado,
        tutor: {
            nome: tutor,
            telefone: undefined
    }
}
}

listaDeAnimais.push(newPet);

console.log('pet cadastrado');

function visualizarPets(){
    for(var i =0; i < listaDeAnimais.length; i++){
        var animal = listaDeAnimais[i]
        console.log('---------------------')
        console.log('nome do animal:' + animal.nome)
    }
}



