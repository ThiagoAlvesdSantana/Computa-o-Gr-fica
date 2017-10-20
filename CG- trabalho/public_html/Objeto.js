/* global THREE, esfera, cubo */

var camera, scene, renderer;

var ORIGEM = new THREE.Vector3(0, 0, 0);
renderer = new THREE.WebGLRenderer({/*alpha:true*/});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//renderer.setClearColor( 0x6B8E23, 0.5 );

camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000); // Define a perspectiva camera e atributos.
camera.position.set(0, 0, 0); 
camera.lookAt(ORIGEM);

scene = new THREE.Scene(); // Cria um objeto Three.js scene.     

function criarCubo(objeto)
{ 
  var geometriacubo = new THREE.CubeGeometry(100, 40, 60), // Declarando a Gometria do cubo.
      materialcubo = new THREE.MeshBasicMaterial({color:0x0000CC, specular: 0XFFFFFF,shininess: 100, opacity: 0.9, transparent: true/*, wireframe: true*/}), // Declarando a cor do cubo.
      cubo = new THREE.Mesh(geometriacubo, materialcubo); // cubo rebe geometria e o materia.    
     // adicionando elemento na posição( 0, 0, 0).
      cubo.add(objeto);
      scene.add(cubo);        
      return cubo;
   }
   
   function criarRetangulo(objeto)
   {
    var geometriaRetangulo = new THREE.CubeGeometry(10,  5, 60), // Declarando a Gometria do cubo.
        materialRetangulo = new THREE.MeshBasicMaterial({color: 0xCCFF33, specular: 0XFFFFFF,shininess: 100, opacity: 0.7, transparent: true/*, wireframe: true*/}), // Declarando a cor do cubo.
        retangulo = new THREE.Mesh(geometriaRetangulo, materialRetangulo); // cubo rebe geometria e o materia.    
               
        // tranladando os objetos para posições corretas
        retangulo.translateX(-45);
        retangulo.translateY(22.5); 
        retangulo.add(objeto);
        return retangulo;        
   }
   
   function criarRetangulo2(objeto)
   {
    var geometriaRetangulo2 = new THREE.CubeGeometry(15, 10, 60 ), // Declarando a Gometria do cubo.
        materialRetangulo2 = new THREE.MeshBasicMaterial({color: 0x000000/*, wireframe: true*/}), // Declarando a cor do cubo.
        retangulo2 = new THREE.Mesh(geometriaRetangulo2, materialRetangulo2); // cubo rebe geometria e o materia.    
                
        retangulo2.translateX(12.70);
        retangulo2.translateY(2.5);
        retangulo2.add(objeto);
        return retangulo2;          
   }
   
   function criarRetangulo3(objeto)
   {
    var geometriaRetangulo3 = new THREE.CubeGeometry(50, 5, 60 ), // Declarando a Gometria do cubo.
        materialRetangulo3 = new THREE.MeshBasicMaterial({color: 0xCCFF33, specular: 0XFFFFFF,shininess: 100, opacity: 0.7, transparent: true/*, wireframe: true*/}), // Declarando a cor do cubo.
        retangulo3 = new THREE.Mesh(geometriaRetangulo3, materialRetangulo3); // cubo rebe geometria e o materia.        
        retangulo3.translateX(32.5);      
        retangulo3.translateY(-2.5); 
        retangulo3.add(objeto);
        return retangulo3;        
   }

function criarRetangulo4(objeto)
   {
    var geometriaRetangulo4 = new THREE.CubeGeometry(15, 10, 60 ), // Declarando a Gometria do cubo.
        materialRetangulo4 = new THREE.MeshBasicMaterial({color: 0x000000/*, wireframe: true*/}), // Declarando a cor do cubo.
        retangulo4 = new THREE.Mesh(geometriaRetangulo4, materialRetangulo4); // cubo rebe geometria e o materia.       
               
        retangulo4.translateX(32.70);
        retangulo4.translateY(2.5); 
        retangulo4.add(objeto);
        return retangulo4;
   }

function criarRetangulo5(objeto)
   {
    var geometriaRetangulo5 = new THREE.CubeGeometry( 10, 5, 60), // Declarando a Gometria do cubo.
        materialRetangulo5 = new THREE.MeshBasicMaterial({color: 0xCCFF33, specular: 0XFFFFFF,shininess: 100, opacity: 0.7, transparent: true/*, wireframe: true*/}), // Declarando a cor do cubo.
        retangulo5 = new THREE.Mesh(geometriaRetangulo5, materialRetangulo5); // cubo rebe geometria e o materia.       
               
        retangulo5.translateX(12.70);
        retangulo5.translateY(-2.5);  
        retangulo5.add(objeto);
        return retangulo5;    
   }    
   
   function criarRetangulo6(objeto)
   {
    var geometriaRetangulo6 = new THREE.CubeGeometry( 40, 10, 60 ), // Declarando a Gometria do cubo.
        materialRetangulo6 = new THREE.MeshBasicMaterial({color: 0x990000/*, wireframe: true*/}), // Declarando a cor do cubo.
        retangulo6 = new THREE.Mesh(geometriaRetangulo6, materialRetangulo6); // cubo rebe geometria e o materia.        
        retangulo6.translateX(-45);         
        retangulo6.translateY(7.5); 
        retangulo6.add(objeto);
        return retangulo6;        
   }
   
   function criarQuadrado(objeto)
   {
    var geometriaQuadrado = new THREE.CubeGeometry( 25, 10, 60 ), // Declarando a Gometria do cubo.
        materialQuadrado = new THREE.MeshBasicMaterial({color: 0x00CCCC, specular: 0XFFFFFF,shininess: 100, opacity: 0.6, transparent: true/*, wireframe: true*/}), // Declarando a cor do cubo.
        quadrado = new THREE.Mesh(geometriaQuadrado, materialQuadrado); // cubo rebe geometria e o materia.        
                
        quadrado.translateX(-35);
        quadrado.translateY(-15);  
        quadrado.add(objeto);
        return quadrado;
   }
   
   function criarQuadrado2(objeto)
   {
    var geometriaQuadrado2 = new THREE.CubeGeometry( 25, 10, 60), // Declarando a Gometria do cubo.
        materialQuadrado2 = new THREE.MeshBasicMaterial({color: 0x00CCCC, specular: 0XFFFFFF,shininess: 100, opacity: 0.7, transparent: true/*, wireframe: true*/}), // Declarando a cor do cubo.
        quadrado2 = new THREE.Mesh(geometriaQuadrado2, materialQuadrado2); // cubo rebe geometria e o materia.        
                 
        quadrado2.translateX(68);
         
        quadrado2.add(objeto);
        return quadrado2;        
   }
   
   function criarQuadrado3(objeto)
   {
    var geometriaQuadrado3 = new THREE.CubeGeometry(43, 5, 60 ), // Declarando a Gometria do cubo.
        materialQuadrado3 = new THREE.MeshBasicMaterial({color: 0x00CCCC, specular: 0XFFFFFF,shininess: 100, opacity: 0.7, transparent: true/*, wireframe: true*/}), // Declarando a cor do cubo.
        quadrado3 = new THREE.Mesh(geometriaQuadrado3, materialQuadrado3); // cubo rebe geometria e o materia.        
                
        quadrado3.translateX(-34);
        quadrado3.translateY(2.5);
        quadrado3.add(objeto);
        return quadrado3;
   }
   
   function criarBox(objeto){
       var geometriaBox = new THREE.CubeGeometry(20,7.5,61),
           materialBox = new THREE.MeshBasicMaterial({color: 0x5BAF8F, specular: 0XFFFFFF,shininess: 100, opacity: 0.9, transparent: true/*, wireframe: true*/}), 
           box = new THREE.Mesh(geometriaBox, materialBox); 
           box.translateX(-33.5);
           box.translateY(-1.3);
           box.add(objeto);
           return box;
   }

function criarBox2(){
       var geometriaBox2 = new THREE.CubeGeometry(20,7.5,61),
           materialBox2 = new THREE.MeshBasicMaterial({color: 0x5BAF8F, specular: 0XFFFFFF,shininess: 100, opacity: 0.9, transparent: true/*, wireframe: true*/}), 
           box2 = new THREE.Mesh(geometriaBox2, materialBox2); 
           box2.translateX(67);
                     
           return box2;
   }
   
   function Esferas()
   {
      
    var materials = [];
    for(var i = 0; i< 14; i++){
    materials.push(new THREE.MeshBasicMaterial( { color: 0x000000 } ));
    
       }
    
    var geometriaEsfera = new THREE.SphereGeometry(1, 20, 20);
    
    objects = [];
    objects2 = [];    
    
    var sphere, sphere2, geometry, material;    
    
    var f = -38;
    var i = 0;
    
    for ( var i = 0, l = materials.length; i < l; i ++ ) 
    {         
	material = materials[ i ];
        geometry = geometriaEsfera;
        sphere = new THREE.Mesh( geometry, material );        
        sphere.position.x = f;
        sphere.position.y = 26; 
        sphere.translateZ(40);
        objects.push( sphere );
        scene.add( sphere );
        f += 2.5;
        
        if(i == 6) f += 42;
        
    }
    
    var f1 = -37;
    
    for ( var i = 0, l = materials.length; i < (l-2); i ++ ) 
    {         
	material = materials[ i ];
        geometry = geometriaEsfera;        
        sphere2 = new THREE.Mesh(geometry, material);
        sphere2.position.x = f1;
        sphere2.position.y = 23; 
        sphere2.translateZ(40);
        objects2.push( sphere2 );
        scene.add( sphere2 );
        f1 += 2.5;
        
        if(i == 5) f1 += 44;
        
    }    	     
   }   

esferas = Esferas();
box2 = criarBox2();
box = criarBox(box2);
quadrado3 = criarQuadrado3(box);
quadrado2 = criarQuadrado2(quadrado3);
quadrado = criarQuadrado(quadrado2);
retangulo6 = criarRetangulo6(quadrado);
retangulo5 = criarRetangulo5(retangulo6);
retangulo4 = criarRetangulo4(retangulo5);
retangulo3 = criarRetangulo3(retangulo4);
retangulo2 = criarRetangulo2(retangulo3);
retangulo = criarRetangulo(retangulo2);
cubo = criarCubo(retangulo);


function render()
{   
 
 renderer.render(scene, camera);    
 requestAnimationFrame( render );
}
render(); // Inicia a renderização dos frames animados.
camera.position.z = 110; // Move a camera da origem z 
camera.position.y = 80;