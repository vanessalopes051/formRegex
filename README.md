<h1> Relatório técnico do desenvolvimento de máscaras de validação por meio de expressões regulares.</h1>
 <p>Este trabalho apresenta um relatório técnico que destaca os procedimentos realizados para o desenvolvimento de máscaras de validação por meio de expressões regulares, além de apresentar seus respectivos testes.</p>
 
<h3>Tecnologias Utilizadas</h3>
<li><strong>Regex Tester:</strong> Para desenvolver as expressões regulares foi utilizado o site Regex Tester, um testador de expressão regular com destaque de sintaxe, suporte a PHP / PCRE e JS.</li>
<li>HTML 5</li>
<li>CSS3</li>
<li>Bootstrap 4.3.1</li>
<li>JavaScript</li>

<h3>Expressões regulares desenvolvidas </h3>
<li>Expressão Regular: Nome</li>
A máscara para validação de nome é composta basicamente por um padrão que se repete duas vezes,uma vez para o nome e outra vez para o sobrenome.
() = Os parênteses iniciam agrupamentos.
([A-Z]{1}) = Aceita apenas um símbolo maiúsculo.
([a-z]+) = Aceita de um a vários símbolos minúsculos
Após esse agrupamento a sentença aceita exatamente um espaço, por fim o padrão ([A-Z]{1})([a-z]+)) se repete para o sobrenome.
/^((([A-Z]{1})([a-z]+)) (([A-Z]{1})([a-z]+)))$/

<br>

<li>Expressão Regular: Email</li>
[a-z]+ = Aceita de um a vários símbolos minúsculos.
@ = Aceita exatamente um símbolo “@”.
[a-z]+ = Aceita de um a vários símbolos minúsculos.
[\.]br{1} = Aceita exatamente 1 símbolo “.” seguido da string “br”.
/^([a-z]+@[a-z]+[\.]br{1})$/


https://vanessalopes051.github.io/formRegex/


