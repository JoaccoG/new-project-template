# New Project Template

[![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139)](https://joaquingodoy.com) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joaquin--godoy/) [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/JoaccoDev) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/joaccogodoy99/)

Repository created to save time by not having to repeat the process of creating the initial configuration files for each [ISDI Coders Bootcamp](https://isdicoders.com/bootcamps/desarrollo-web-full-stack/) project.

As the files, folders and initial configurations depends on so many different factors, this repository was only created to use during my bootcamp journey to save time and will probably get deprecated on time after I finish my studies.

# Material included

- Script `npm run update-git`:
  - _Ejecuta los comandos `git checkout main`, `git fetch -p`, `git pull` y `npm list` en ese orden. Útil para actualizar nuestro repositorio local luego de haber hecho un merge mediante pull request. También chequea si hay dependencias que hayan incluido nuestros compañeros y nosotros no tengamos._
- **Archivos.**
  - .editorconfig _(agrega características del team agreement al VSC)_
  - .gitignore _(node_modules, coverage y .DS_Store)_.
  - .tsconfig.json _(modulos cambiados para usar ES2022)_.
  - package.json _(archivo npm)_.
  - Otros archivos:
    - favicon.ico _(ya linkeado en index.html)_.
    - style.css _(reset básico)_.
    - index.html _(configuración básica con comentarios)_.
    - index.ts _(archivo typescript)_.
    - index.js _(con función básica para probar Jest)_.
    - index.test.js _(con test básico para probar Jest)_.
- **Carpetas.**
  - .husky
  - src _(archivos de código propios)_:
    - css _(archivos css)_.
    - js _(archivos javascript, typescript y jest)_.
    - assets _(archivos estáticos que probablemente no vayamos a mover a lo largo del proyecto: logos, imágenes, videos, tipografías, etc)_.
- **Frameworks y dependencias.**
  - Husky _(2 comprobaciones incluidas)._
  - Jest _(testing)_
  - TypeScript _(transpilador de código .ts a .js)_

**Nota:** En caso de tener muchos archivos dentro de la carpeta assets, se podrían crear subcarpetas dentro _(ejemplo: carpeta img, carpeta fonts, etc)_.
En caso de hacerlo, todos los archivos que se muevan deberán volver a ser referenciados en sus respectivos llamados.

# Installation

1. Clonar el repositorio dentro de una carpeta: <br>
   `git clone https://github.com/JoaccoG/new-project-template.git`
2. Eliminar el archivo [README.md](https://github.com/JoaccoG/new-project-template/blob/main/README.md)
3. Borrar la carpeta **.git** del proyecto para iniciar un git nuevo con `git init`
4. Modificar las propiedades necesarias dentro de [package.json](https://github.com/JoaccoG/new-project-template/blob/main/package.json) _(name, description, author, etc)_.
5. Ejecutar `npm install` para descargar **Husky**, **Jest** y **TypeScript** en el proyecto.
   - Debería crearse la carpeta _node_modules_ luego de ejecutar el comando.
6. Ejecutar `npx jest --coverage` para comprobar que Jest funciona correctamente.
   - Debería crearse la carpeta _coverage_ luego de ejecutar el comando.
7. **Extras:**
   - Crear un repositorio remoto y enlazarlo (asegurarse de haber hecho el paso 3 primero).
     - Proteger la rama main
   - Desplegar el repositorio en Netlify.
   - Enlazar el repositorio en SonarCloud.

- Posible error _(MacOS únicamente)_.
  - **Error:** _The '.husky/commit-msg|pre-push' hook was ignored because it's not set as executable._
  - **Solución:** Abrir consola en el root del proyecto y ejecutar `chmod ug+x .husky/* && chmod ug+x .git/hooks/*` para dar permiso de ejecutable a los hooks de Husky.
