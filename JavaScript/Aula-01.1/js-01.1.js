/* Variáveis podem ser declaradas de 03 formas:
* Var / Let e Const
Var : no geral evite o seu uso, pode nao ser muito seguro. Pode gerar duplicidade e com isso perde uma das variaveis
Let : Utilize quando for necessário reatribuir o valor da variável (declaração x atribuição)
      Declaração você cria uma variavel e deixa ela ja reservada. Atribuir é quando você atribui um valor para ela. 
      Quando o valor precisa ser reatribuido
Const : Não consegue reatribuir o valor. O valor fica fixo. Utilize quando nãop precisdar reatribuir o valor da variavel
        Ex. const cidade = "registro" - OK 
            const cidade = "pariquera" - não pode, o vlaor não pode ser reatribuido

*/


//Tipos de funções

// Função Simples
function showMessage(){
    document.write("<h2>Olá! Bem-vindo! Essa é sua primeira função!</h2>")
}
//Invocando a função
showMessage();


