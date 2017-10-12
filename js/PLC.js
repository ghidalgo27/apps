var app=
    {
	 inicio: function(){
         this.inicaBotones();
         this.iniciaFastClick();
     },
         
         
         //ejecuto fastclick para todo el body
         iniciaFastClick: function(){
             FastClick.attach(document.body);
         },
         
         inicaBotones: function(){
	   //escucho el click del botton y ejecuto pon lo ON 

		document.getElementById("BtnON").addEventListener('click',this.ponloON,true);
        document.getElementById("BtnOff").addEventListener('click',this.ponloOff,true);
		 },
	   
             
    // ejecuto FUNCIONES llamadas desde addEventlistener
	 ponloON: function(){
		  document.getElementById('Ocultar').style.display = 'block';
         document.getElementById('Mostrar').style.display = 'none';
         
		 },
        ponloOff: function(){
		  	  document.getElementById('Ocultar').style.display = 'none';
         document.getElementById('Mostrar').style.display = 'block';
         
		 },
	 

        
 };

// si escuchofastclic ejecuto inicio.
if('addEventListener' in document){
    document.addEventListener('DOMContentLoaded',function(){
        FastClick.attach(document.body);
        app.inicio();
    }, false);
}
