# New Project Template

[![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139)](https://joaquingodoy.com) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joaquin--godoy/) [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/JoaccoDev) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/joaccogodoy99/)

Repository created to save time by not having to repeat the process of creating the initial configuration files for each [ISDI Coders Bootcamp](https://isdicoders.com/bootcamps/desarrollo-web-full-stack/) project.

As the files, folders and initial configurations depends on so many different things, this repository was only created to use during my bootcamp journey to save time and will probably get deprecated on time after I finish my studies.

# Material included

- Script `npm run update-git`:
  - _Ejecuta los comandos `git checkout main`, `git fetch -p`, `git pull` y `npm list` en ese orden. Útil para actualizar nuestro repositorio local luego de haber hecho un merge mediante pull request._
- **Archivos:**
  - .editorconfig _(agrega características del team agreement al VSC)_
  - .gitignore _(**node_modules** y **.DS_Store**)_.
  - index.html _(configuración inicial básica con comentarios)_.
  - style.css _(reset básico)._
  - main.js _(archivo javascript)_
- **Carpetas** _(para una cómoda organización)_:
  - css _(archivos css)._
  - js _(archivos javascript)._
  - assets _(archivos estáticos que probablemente no vayamos a mover a lo largo del proyecto: logos, imágenes, videos, tipografías, etc)._
- **Packages:**
  - Husky _(Git Hooks, con 2 comprobaciones incluidas)._

**Nota:** En caso de tener muchos archivos dentro de la carpeta assets, se podrían crear subcarpetas dentro _(ejemplo: carpeta img, carpeta fonts, etc)_.
En caso de hacerlo, todos los archivos que se muevan deberán volver a ser referenciados en sus respectivos llamados.

# Installation

1. Clonar el repositorio dentro de una carpeta:

`git clone https://github.com/JoaccoG/new-project-template.git`

2. Eliminar el archivo [README.md](https://github.com/JoaccoG/new-project-template/blob/main/README.md)
3. Modificar las propiedades necesarias dentro de [package.json](https://github.com/JoaccoG/new-project-template/blob/main/package.json) para que concuerden con el proyecto nuevo _(name, description, author, etc)_.
4. Ejecutar `npm install` para tener **Husky** en el proyecto.
5. **(solo macOS)** Ejecutar, en el root del nuevo proyecto `chmod ug+x .husky/*` y `chmod ug+x .git/hooks/*` para dar permiso de ejecutable a los hooks de Husky.
6. **(opcional)** Modificar los parámetros dados a los que necesitemos dentro de los diferentes archivos de la plantilla _([index.html](https://github.com/JoaccoG/new-project-template/blob/main/index.html), [style.css](https://github.com/JoaccoG/new-project-template/blob/main/css/style.css), etc)_.
