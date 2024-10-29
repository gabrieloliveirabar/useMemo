
# Exemplo de Uso do React Hook `useMemo`

Este projeto demonstra o uso do Hook `useMemo` em uma aplicação React. O `useMemo` é útil para melhorar a eficiência da aplicação ao evitar cálculos desnecessários, memorizando valores derivados até que suas dependências sejam atualizadas.

## Introdução ao `useMemo`

O `useMemo` utiliza uma técnica chamada **memoization**, que consiste em armazenar o valor de retorno de uma função com base nos valores dos parâmetros de entrada. Com isso, se uma função recebe os mesmos parâmetros, ela não precisa recalcular o valor, pois ele já está armazenado.

### Exemplo onde `useMemo` é útil

Imagine que você tenha uma função que faz uma operação complexa, como filtrar e mapear uma lista grande de itens. Você quer que essa operação seja executada apenas quando a lista ou certos filtros mudarem:

![Exemplo de código com useMemo](./assets/useMemo.png)

Neste caso, `filteredData` só será recalculado quando `data` mudar. Sem o `useMemo`, a filtragem e o mapeamento seriam feitos em toda renderização, o que pode impactar o desempenho da aplicação.

### Benefícios do `useMemo`

- **Eficiência**: Evita cálculos desnecessários, economizando processamento.
- **Otimização**: Especialmente útil em operações pesadas, como filtragem e mapeamento de grandes conjuntos de dados.
  
