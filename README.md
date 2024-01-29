# Utils   
Utils: biblioteca com o mais reutilisável no projeto   
Cada seletor na seguinte lista só funciona no tamanho especificado, esses sendo ML (>1025px), M ( 1024px < & > 769px), e S (< 768px)   
Opções existentes são:
- sz[tamanho da fonte]  | eg: sz16S | tamanhos de fonte: 12, 14, 16, 18, 28, 32, 36, 48, e 80   
- span[numero] | eg: span3ML | retorna "grid-column: 1 / span [numero]" | de 1 a 12   
- gridStart[numero] | eg: gridStart4M | utilizado para alterar o valor inicial de span[numero] | de 1 a 12   
- absoluteSpan[numero] | mesmo que o outro span, exceto sem o grid-column-start de 1 | de 1 a 12   
- rowSpan[numero] | quantidade de rows tomada pelo elemento | de 1 a 2    
- gridRows[numero] | quantidade de rows de um grid | de 1 a 4   
- mt[numero] | margin-top: calc(8px * [numero]) | de 1 a 6   
- mtL[numero] | margin-top: calc(30px * [numero]) | de 1 a 6   
- flexColumn | display flex & direction |eg: flexColumn   
- flexRow | display flex & direction |eg: flexRowS   
- none | display: none | eg: noneML   
- width100 | width 100% | eg: width100ML   

standardisedGrid é a grid utilizada para organizar os elementos em conjunto com span[numero] e gridStart[numero]. 12 colunas para ML (>1025px), 10 colunas para M ( 1024px < & > 769px), e 4 colunas para S (< 768px)

sz[tamanho da fonte] também tem uma variante sem limitação de viewport, aplica-se sempre. eg: sz16

spanRow ocupa todas as colunas em todos os tamanhos de standardisedGrid

cada peso de fonte (thin, normal, demibold, bold) tem sua classe, escrita [nome]FW. eg thinFW

as cores presentes em Utils são (o valor entre aspas é o nome utilisado nas classes)   
#fff "W", #000 "B", #00000065 "TB", #1AA584 "G1",  #48B79D "G2", #DCF8B1 "G3", #03110D "DB", #393939 "Gray1"   
as classes envolvendo cores são   
hoverBg[nome] | cor de background quando hover | hoverBgG2   
bg[nome] | cor de background | eg: bgB    
hoverColor[nome] | cor quando hover   
color[nome] | cor   
fill[nome] | fill para SVGs   
border[nome] | retorna border: 2px solid [cor]   

cada valor de display tem sua classe, o nome utilizado esta entre aspas    
none "N", block "B" ,inline-block "IN", flex "F", grid "G"   
d[nome] eg dB

bdrs é o valor de border-radius mais utilizado, 4px

aceitando valores de 1 a 6, existem as seguintes:   
.mt#[numero] | margin-top: calc( 8px * [numero] ) 
    
.mtL#[numero] | margin-top: calc( 30px * [numero] ) 

.p#[numero] | padding: calc( 8px * [numero] )

.ptL#[numero] | padding-top: calc( 30px * [numero] )

.pbL#[numero] | padding-bottom: calc( 30px * [numero] )

existem outras classes simples que estão no topo de utils.module.sass


# Rambling
1 - não deveria ter gerado os maps      
2 - se o projeto fosse maior, a pasta de sections teria uma pasta para cada pagina   
3 - o form só espera 5 segundos e retorna sucesso
