# HTML :five:

## Semântica:

Durante muitos anos o elemento padrão no HTML era a div, porém em 2014 saiu a 5ª versão do HTML, e com ela vieram várias mudanças importantes, como performance e acessibilidade.

**Semântica nos permite descrever mais precisamente o nosso conteúdo, agora um bloco de texto não é apenas uma div, agora é um article e tem mais significado assim**

**Section**

<section>
    Representa uma seção genérica de conteúdo quando não houver um elemento mais específico para isso, como uma lista de artigos, por exemplo. 
</section>

**Header**

Cabeçalho da página ou de uma seção da página e normalmente contém logotipos, menus, campos de busca.

**Aside**

É uma seção que engloba conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do autor e publicidade. Normalmente são representadas como barras laterais.

**Footer**

Esse elemento representa o rodapé do conteúdo ou de parte dele, pois ele é aceito dentro de vários elementos, como article e section e até do body. Exemplos de conteúdo de um <footer> são informações de autor e *links* relacionados.

**h1 a h6**

Eles não foram criados na versão 5 do HTML e nem são específicos para semântica, mas servem para esse propósito. São utilizados para marcar a importância dos títulos, sendo <h1> o mais importante e <h6> o menos. Uma dica: use apenas um <h1> por página, pois ele representa o objetivo da sua página.

## Textos e links

h1 Título da página /h1

h2 Título de seção /h2

h3 Título de artigo /h3

p Conteúdo do artigo /p

### Âncora

<a>Link</a>

<a href="linkedin.com/in/vilaboim">Linkedin</a>

<a href="cnn.com">CNN</a>

href = link para o qual a página aponta.

target = indica como o link será aberto.



### Imagens

src="img/avatar.jpg"

alt="Foto de Henrique Bandeira"