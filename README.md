# Proyecto de React - Marvel Comics

Este proyecto es una aplicación de React que muestra cómics de Marvel utilizando la API de Marvel. La aplicación consta de varias páginas y componentes que se describen a continuación.

## Contenido

- [Proyecto de React - Marvel Comics](#proyecto-de-react---marvel-comics)
  - [Contenido](#contenido)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Páginas](#páginas)
    - [Layout](#layout)
    - [Page Home](#page-home)
  - [Componentes](#componentes)
    - [ComicCard](#comiccard)
    - [ComicModal](#comicmodal)
    - [ComicSkeleton](#comicskeleton)
  - [Consumo de la API de Marvel](#consumo-de-la-api-de-marvel)
  - [Getting Started](#getting-started)
  - [Learn More](#learn-more)

## Estructura del Proyecto

- `layout.js`: Define el diseño de la página principal y envuelve el contenido.
- `page.js`: Página principal que muestra los cómics.
- `components/ComicCard.js`: Componente que representa una tarjeta de cómic.
- `components/ComicModal.js`: Componente modal que muestra detalles de un cómic.
- `components/ComicSkeleton.js`: Componente que muestra un esqueleto de carga mientras se obtienen los datos.

## Páginas

### Layout

`layout.js`

Este archivo define el diseño raíz de la aplicación y establece algunos metadatos

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Page Home

`page.js`

Este archivo contiene la lógica principal para obtener y mostrar los cómics de Marvel. Utiliza useState y useEffect para manejar el estado y los efectos secundarios, respectivamente.

## Componentes

### ComicCard
`components/ComicCard.js`

Este componente representa una tarjeta de cómic. Muestra la imagen y el título del cómic, y llama a una función onClick cuando se hace clic en la tarjeta.

### ComicModal
`components/ComicModal.js`

Este componente muestra un modal con los detalles del cómic seleccionado. Utiliza ReactModal para crear el modal.


### ComicSkeleton
`components/ComicSkeleton.js`

Este componente muestra un esqueleto de carga mientras se obtienen los datos de los cómics.


## Consumo de la API de Marvel
La aplicación consume la API de Marvel para obtener una lista de cómics. Se utiliza axios para realizar la solicitud HTTP. La autenticación se maneja mediante la generación de un hash MD5 a partir de una clave pública, una clave privada y un timestamp. El código se ejecuta dentro de un `useEffect` que se dispara cuando el componente se monta, obteniendo y estableciendo los datos de los cómics en el estado local.




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

