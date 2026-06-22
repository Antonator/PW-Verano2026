Comandos principales de Git

1.- Git init: Crea un nuevo repositorio Git o reinicia uno existente. Ejemplo: Empiezas un proyecto y quieres llevar control de versiones usas git init.

2.- Git clone: Copia un repositorio remoto a tu máquina local. Ejemplo: git clone https://github.com/usuario/proyecto.git para clonar un proyecto en GitHub y trabajar sobre él.

3.- Git config: Configrura opciones como nombre de usuario o correo. Ejemplo: git config --global user.name "Antonator".

4.- Git status: Muestra el estado de los archivos. Ejemplo: poner git status antes de hacer un commit para revisar que archivos han sido modificados.

5.- Git add: Agrega archivos al área de staging para el próximo commit. Ejemplo: Si terminas de editar un archivo y quieres guardarlo en el historial haces git add archivo.js o git add .

6.- Git commit: Guarda los cambios en staging como un punto en el historial. Ejemplo: Si completaste alguna función y quieres registrar el avance haces git commit -m "funcion nueva agregada".

7.- Git diff: Muestra las diferencias entre archivos modificados y la última versión guardada. Ejemplo: Quieres revisar exactamente que líneas cambiaste antes de hacer commit con git diff.

8.- Git log: Muestra el historial de commits. Ejemplo: Necesitas ver que cambios se hicieron y quien los hizo con git log --oneline.

9.- Git branch: Crea, lista o elimina ramas. Ejemplo: Quieres trabajar en una nueva función sin afectar la rama principal con git branch nueva-funcion

10.- Git checkout: Cambia entre ramas o restaura archivos. Ejemplo: Necesitas moverte a otra rama para trabajar en ella con git checkout nueva-funcionalidad.

11.- Git switch: Alternativa más nueva a checkout para cambiar de rama. Ejemplo: Quieres volver a la rama principal después de terminar una tarea usas git switch main.

12.- Git merge: Combina los cambios de una rama con otra. Ejemplo: Terminaste una función en una rama y quieres integrarla a la rama principal, haces git merge nueva-funcionalidad.

13.- Git rebase: Reaplica commits sobre otra rama base, creando un historial más lineal. Ejemplo: Quieres actualizar tu rama con los últimos cambios de main sin crear un commit de merge, usas git rebase main.

14.- Git push: Envía tus commits locales al repositorio remoto. Ejemplo: Terminaste tus cambios de manera local y quieres subirlos a GitHub, lo haces con git push origin main.

15.- Git pull: Descarga y combina los cambios del repositorio remoto. Ejemplo: Un compañero subió cambios y necesitas actualizarlos en tu copia local, haces git pull origin main.

16.- Git fetch: Descarga cambios remotos sin combinarlos automáticamente. Ejemplo: Quieres ver qué hay de nuevo en el remoto antes de decidir si lo integras, haces git fetch origin.

17.- Git remote: Gestiona las conexiones a repositorios remotos. Ejemplo: Creaste un repositorio local y necesitas vincularlo a uno de GitHub, haces git remote add origin https://github.com/usuario/proyecto.git

18.- Git reset: Deshace commits o cambios en staging, manteniendo o no los archivos modificados. Ejemplo: Hiciste un commit por error y quieres deshacerlo sin perder los cambios, usas git reset --soft HEAD~1

19.- Git revert: Crea un nuevo commit que anula los cambios de un commit anterior. Ejemplo: Un commit ya subido al repositorio remoto casuó errores y necesitas revertirlo sin reescribir el historial, usas git revert a1b2c3d

20.- Git stash: Guarda temporalmente cambios sin confirmar, para recuperarlos después. Ejemplo: Estás trabajando en algo, pero necesitas cambiar de rama urgentemente sin perder progreso, haces git stash - git stash pop
