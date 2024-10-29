
import './App.css'
import img from './assets/useMemo.png'

function App() {

  return (
    <>
      <h1>useMemo</h1>
      <p>Uma das possibilidades com o React Hooks é o useMemo, que utiliza uma técnica já conhecida chamada memoization, que consiste em guardar o valor de retorno de uma função a partir dos valores de entrada (Parâmetros). Ou seja, se uma função de soma recebe os parâmetros 2 e 3 e retorna 5, esses valores serão armazenados e, quando essa função for chamada com os mesmos parâmetros, ela não precisará refazer o cálculo para obter o valor de retorno, já que este estará armazenado.</p>

      <h2>Exemplo onde useMemo é útil</h2>
      <p>      Imagine que você tem uma função que faz uma operação complexa, como filtrar e mapear uma lista grande de itens, e você quer que essa operação seja executada somente quando a lista ou certos filtros mudarem:
      </p>
      <img src={img} alt="" />
      <p>Neste caso, o filteredData só será recalculado quando data mudar. Sem o useMemo, a filtragem e o mapeamento seriam feitos em toda renderização, afetando o desempenho.
      </p>
      <p>Então, o useMemo é útil para ganhar eficiência e evitar cálculos desnecessários em aplicações complexas.
      </p>
    </>
  )
}

export default App
