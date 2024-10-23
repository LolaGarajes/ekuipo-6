<div class="salida">
    <a href="../"><img src="https://res.cloudinary.com/donhib3cp/image/upload/v1724352997/images%20pagina/c0tqayrqkh5ulx2xqedz.jpg" class= "logolola"alt="logolola " /></a>
    <h1>inicio</h1>
</div>
<script lang="ts">
	
    let input: HTMLInputElement | undefined = $state(undefined);

    let new_image_url = '';

const WITH = 300;

let image: { id: number; secureUrl: string } = $state({ id: 0, secureUrl: '' });

let showImage = $state(false);

async function onChange() {
    if (!input) return;
    showImage = true;
    const file = input.files ? input.files[0] : null;

    if (file) {
        console.log('ingreso al evento de cambio de imagen');
        showImage = true;
        const reader = new FileReader();
        let modificar = false;

        reader.addEventListener('load', function () {
            const new_image = document.createElement('img');
            if (reader.result !== null) {
                new_image.setAttribute('src', reader.result as string);
                new_image_url = reader.result as string;
            }

            new_image.onload = async (e) => {
                let w_image = WITH;
                let h_image = WITH;
                if (e.target !== null) {
                    const imageElement = e.target as HTMLImageElement;
                    w_image = imageElement.width ? imageElement.width : 300;
                    h_image = imageElement.height ? imageElement.height : 300;
                }
                let ratio;
                let canvas = document.createElement('canvas');
                if (w_image >= h_image && WITH / w_image < 1) {
                    ratio = WITH / w_image;
                    canvas.width = WITH;
                    canvas.height = h_image * ratio;
                    modificar = true;
                } else if (w_image < h_image && WITH / h_image < 1) {
                    ratio = WITH / h_image;
                    canvas.height = WITH;
                    canvas.width = w_image * ratio;
                    modificar = true;
                }
                if (modificar) {
                    const context = canvas.getContext('2d');
                    if (context) {
                        context.drawImage(new_image, 0, 0, canvas.width, canvas.height);
                        new_image_url = context.canvas.toDataURL('image/jpeg', 100);
                    }
                }
                image = { secureUrl: new_image_url, id: Date.now() };
                canvas.remove();
            };
            new_image.remove();
        });

        reader.readAsDataURL(file);
        return;
    }
    showImage = false;
}
</script>

<div class="publi">
<div  class="cuadropubli">
    <h1>PUBLICACIÓN</h1>
    <input
        name="Imagen"
        bind:this={input}
        onchange={() => onChange()}
        type="file"
        accept=".jpg,.png,.svg.,jpeg"
    />
    
    <form action="?/crearUsuario" method="post">
        <h2>añada una descripcion:</h2>
        <input class="desc" name="desc" type="text"placeholder="Añada una descripción..." required/>
        
        <h2>Añada la fecha</h2>
        <input class="fecha" name="date" type="date" placeholder = "ingrese la fecha" required/>
        
        <h2>Ingrese su nombre:</h2>
        <input class="nombre" name="name" type="text"placeholder="nombre..." required/>
        
        <h2>Añada su correo electronico:</h2>
        <input class ="correo" name="mail" type="email" placeholder="correo..." required/>
        
        <input type="hidden" name="send_image" bind:value={image.secureUrl} />
    
        <button type="submit">Enviar datos</button>
    </form>


    
    
    
</div>

</div>
