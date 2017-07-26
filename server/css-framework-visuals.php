<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>CSS Framework visuals</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
</head>
<body class="demo">
<h1>Header <b>&lt;h1&gt;</b></h1>
<h2>Header <b>&lt;h2&gt;</b></h2>
<h3>Header <b>&lt;h3&gt;</b></h3>
<h4>Header <b>&lt;h4&gt;</b></h4>
<h5>Header <b>&lt;h5&gt;</b></h5>
<h6>Header <b>&lt;h6&gt;</b></h6>
<p>The regular paragraph <b>&lt;p&gt;</b></p>
<p>Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot "Hier uw tekst, hier uw tekst" wat het tot min of meer leesbaar nederlands maakt. Veel desktop publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum als hun standaard model tekst, en een zoekopdracht naar "lorem ipsum" ontsluit veel websites die nog in aanbouw zijn. Verscheidene versies hebben zich ontwikkeld in de loop van de jaren, soms per ongeluk soms expres (ingevoegde humor en dergelijke).
</p>



<h1>Buttons</h1>
<div class="h-list">
    <span class="button">Button <b>.button</b></span>
    <span class="button narrow">+ <b>.narrow</b></span>
    <span class="button red">+ <b>.red</b></span>
    <span class="button green">+ <b>.green</b></span>
    <span class="button blue">+ <b>.blue</b></span>
    <span class="button grey">+ <b>.grey</b></span>
</div>



<h1><b>.h-list</b> and <b>.v-list</b></h1>
<h2>Wrapper is <b>.h-list</b></h2>
<div class="h-list h-list-demo with-border">
    <span>one</span>
    <span>two</span>
    <span>three</span>
    <span>four</span>
    <span>five</span>
</div>
<h2>Wrapper is <b>.v-list</b></h2>
<div class="v-list v-list-demo with-border">
    <div>one</div>
    <div>two</div>
    <div>three</div>
    <div>four</div>
    <div>five</div>
</div>



<h1>Grid <b>.row > .column-xx</b></h1>
<p>Border and padding added for demonstration purposes.</p>
<div class="row column-demo">
    <div class="column-1"><b>.column-1</b></div>
    <div class="column-2"><b>.column-2</b></div>
    <div class="column-3"><b>.column-3</b></div>
    <div class="column-4"><b>.column-4</b></div>
    <div class="column-2">
        <b>.column-2</b> with a lot of text in it.
        <p>Tum Quintus: Est plane, Piso, ut dicis, inquit. Iam id ipsum absurdum, maximum malum neglegi. Terram, mihi crede, ea lanx et maria deprimet. Sed quid attinet de rebus tam apertis plura requirere?</p>
    </div>
</div>
<div class="row column-demo">
    <div class="column-5"><b>.column-5</b> followed by <b>.column-1.gap</b></div>
    <div class="column-1 gap" style="padding: 0; border: 0 none;"></div>
    <div class="column-6"><b>.column-6</b></div>
</div>
<div class="row column-demo">
    <div class="column-7"><b>.column-7</b></div>
    <div class="column-8"><b>.column-8</b></div>
    <div class="column-9"><b>.column-9</b></div>
    <div class="column-10"><b>.column-10</b></div>
    <div class="column-11"><b>.column-11</b></div>
    <div class="column-12"><b>.column-12</b></div>
</div>



<h1>Form elements</h1>
<p>Recommended setup:</p>
<p><b>
    div.row <br>
    &nbsp;&nbsp;div.column-3 > label <br>
    &nbsp;&nbsp;div.column-3 > input[type=...] <br>
    div.row <br>
    &nbsp;&nbsp;div.column-3 > label <br>
    &nbsp;&nbsp;div.column-3 > input[type=...] <br>
    </b>and so on... <br>
    <b>div.controls <br>
    &nbsp;&nbsp;.button <br>
    &nbsp;&nbsp;.button <br>
</b></p>
<form>
    <div class="row">
        <div class="column-3">
            <label for="input-text">Text input</label>
        </div>
        <div class="column-9">
            <input type="text" id="input-text" value="Some text">
        </div>
    </div>
    <div class="row">
        <div class="column-3">
            <label for="input-num">Number input</label>
        </div>
        <div class="column-3">
            <input type="number" id="input-num" value="42">
        </div>
    </div>
    <div class="row">
        <div class="column-3">
            <label for="input-num">Textarea</label>
        </div>
        <div class="column-9">
            <textarea>Lorem ipsum dolor</textarea>
        </div>
    </div>
    <div class="controls">
        <span class="button grey"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></span>
        <span class="button green"><i class="fa fa-check" aria-hidden="true"></i></span>
    </div>
</form>
</body>
</html>