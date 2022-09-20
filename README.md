# Teste Convenia

## Versão utilizada

- Node: 16.17.0

## Comandos

####  Clone do projeto 
```
git clone https://github.com/VitorAlvesCarvalho/Teste-Convenia.git
```

#### Instalar dependencias - *Rodar comando na pasta raiz do projeto 
```
yarn
```

#### Executar projeto - *Rodar comando na pasta raiz do projeto 
```
yarn serve
```

#### Rodar todos os testes 
```
yarn test
```

#### Rodar teste de um único arquivo
```
yarn test:unit 'nome-arquivo'
```

## Tecnologias utilizadas
- HTML
- CSS
- SCSS
- TypeScript
- Vue
- VueX
- Jest
- Vue Testing Library

## Arquitetura e padrões utilizados
- <b>Arquitetura de pastas:</b> Foi utilizado a arquitetura de modulos.
- <b>Componentes:</b> Na pasta de componentes tem um arquivo index que exporta todos os componentes, isso facilita pois se precisar usar mais de um componente em um arquivo, é possível fazer o import deles na mesma linha, sem necessidade de adicionar um novo import para cada componente.
- <b>Privacidade de elementos:</b> Foi utilizado readonly para elementos que não tem o seu valor alterado, private para elementos que são utilizados só no script, e public para elementos que também são utilizados no template.
- <b>CSS:</b> Foi utilizado o padrão BEM para a nomeclatura de classes.
- <b>Props e eventos:</b> Pra nome de passagem de prop e emissão de evento foi utilizado o kebab case.
