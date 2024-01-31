# Busca Binária

> A busca binária tem grau de complexidade O(1), sendo o pior caso === a altura da arvore pesquisada.
> Vale ressaltar que nesse algoritmo é preciso que os valores estejam ordenados

## Sequencia de passos para aplicar a pesquisa binária

* Esse tipo de busca consiste em definir um "min" e "max";
* Depois encontre a media entre eles arredondando sempre para baixo, para que sempre seja um numero inteiro
* Verifique se a posição do item que esta procurando é essa;
* Senao, avalie se o palpite foi muito baixo ou muito alto, para redefinir o "min" e "max";
* Se o palpite foi muito alto o max é definido como max - 1 na proxima tentativa;
* Se o palpite foi muito baixo o min é definido como min +1 na proxima tentativa;
* Esse ciclo se repete ate encontrar o item procurado;

> Estudo feito em: https://pt.khanacademy.org/computing/computer-science/algorithms/binary-search/a/running-time-of-binary-search