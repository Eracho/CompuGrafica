var scene = null,
    camera = null,
    renderer = null,
    control = null,
    cube = null,
    torus = null;
   

    const size = 10;
    const divisions = 10;
    
var material, mesh, geometria, figura=[];

function startScene() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFF60FA);
    camera = new THREE.PerspectiveCamera(75, 
        window.innerWidth / window.innerHeight,0.1, 1000);
        

    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('app') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

//ORBITCONTROLS
    control = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(0,0,0);
    control.update();
    
//OBJETOS
          
    camera.position.z = 5;
// grid helper
    const gridHelper = new THREE.GridHelper( size, divisions );
    scene.add( gridHelper );
    
// axes
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

animate();
//cuboa();


}


function animate() {
    requestAnimationFrame(animate);
    control.update();
    renderer.render(scene, camera);

    for(let i=0; i< figura.length;i++){

        figura[i].rotation.x +=0.05;
        figura[i].rotation.z -=0.05;

    }
   
 } 


// resize
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

// eligir forma 

 function poner(form){

    
    switch (form) {

        case "cubo" :


            geometria = new THREE.BoxGeometry(1, 1, 1);

        break;

        case "toru" :

            geometria = new THREE.TorusGeometry( 1, 0.5, 16, 100 );   
 
        break;

        case "cone":
 
            geometria= new THREE.ConeGeometry( 1, 5, 100); 
           
            break;


            }


            material= new THREE.MeshBasicMaterial( { color: 0xFFB23B, wireframe: true } );

            mesh=  new THREE.Mesh( geometria, material );

            mesh.position.x = Math.random() * -(9- 1) + 4.05;
            mesh.position.z = Math.random() * -(9- 1) + 4.05;

            scene.add(mesh);
            
            figura.push(mesh);
 }