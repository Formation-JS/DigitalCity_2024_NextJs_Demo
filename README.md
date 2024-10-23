# Demo Next.js

## Création du projet
### Via la RC du create-next-app (en date du 23/10)
```
// Next 15 rc1
pnpm create next-app@rc

// Next 15 stable
pnpx @next/codemod@canary upgrade latest

// ESLint v9
pnpm i eslint@9 --save-dev

// Migration du fichier ESLint
pnpx @eslint/migrate-config .eslintrc.json
pnpm i @eslint/js @eslint/eslintrc --save-dev
```
### Quand le create-next-app sera en version 15
```
pnpm create next-app@latest
```

## Routes du demo
```
 /                      HomePage
 /product               Liste des produits
 /product/add           Formulaire d'ajout de produit
 /product/detail/[id]   Detail d'un produit
 /stock                 Transactions du stock (filter -> query)
 /stock/add             Formulaire d'ajout de transaction