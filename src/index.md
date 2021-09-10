eliminar el caches

npm cache clean --force

npm cache verify 

Podemos toparnos con muchos errores desde la configuracion, sistema operativo, espacios, no configurar bien github, no establecer bien los datos del package, a ver dejado algun elemento extrano en la configuracion, etc.

Podemos activar la opcion de verbouse que nos dejara ver que esta pasando a lo largo de la ejecucion de un comando. que es con la flag “—dd”.

Podemos ver el error de 'Command not found" que es un error en el script asignados. Cuando tengamos un error hay que entrar en calma para poder leer toda la informacion que nos dice la salida y encontrar y entender el error. Nos genera un reporte y en la consola podemos ver su ruta y dentro de esto podemos ver a mucho mas detalle nuestro error de forma mas ordenada.

Podemos eliminar las carpetas o eliminar un comando para poder limpiar el cache que pueda existir, usamos el comando

npm cache clean --force
Asi podremos eliminar el cache y para verificar usamos:

npm cache verify
Uno de los errores es que tengamos corrupto o no completo algun paquete que hayamos instalado, para este problema necesitamos eliminar la carpeta, esto se hace con:

rm -rf node_modules
Despues podemos instalar todo con

npm install
Hay una forma de poder eliminar de forma segura esta carpeta si es que tenemos problemas, pero primero tenemos que isntalarlo con

sudo npm install -g rimraf
Ahora solo para eliminar hacemos:

rimraf node_modules
Y se eliminara de forma correcta esta carpeta para instalar de forma correcta los paquete

npm audit fix 
garantizar que no hay vulnerabilidad