const funcs = []

for (let i = 0; i < 10; i++)
{
    funcs.push(function(){
        console.log(i)
    }
    )
}
// o javascript não consegue respeitar o incremento do laço na variável i
// usando o var

funcs[2]()
funcs[8]()