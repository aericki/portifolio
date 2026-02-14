# Portfólio — Aericki

Portfólio pessoal em React + TypeScript + Vite.

## Stack

- React 19
- TypeScript 5
- Vite 6
- Tailwind CSS 4
- i18next

## Scripts

- `npm run dev` — ambiente de desenvolvimento
- `npm run build` — build de produção
- `npm run preview` — preview da build
- `npm run lint` — lint

## Deploy

O deploy principal é feito na Vercel.

### Domínio canônico

- `aericki.dev`

### Redirecionamentos configurados

- `aericki.me` → `aericki.dev`
- `www.aericki.me` → `aericki.dev`
- `www.aericki.dev` → `aericki.dev`

As regras estão no arquivo `vercel.json`.

## DNS recomendado

### Name.com (`aericki.dev`)

- Apex (`@`) como A record para `76.76.21.21`
- `www` como CNAME para `cname.vercel-dns.com`

### Namecheap (`aericki.me`)

- Apex (`@`) como A record para `76.76.21.21`
- `www` como CNAME para `cname.vercel-dns.com`

## CI

GitHub Actions mantém o pipeline de qualidade:

- Instala dependências
- Roda `lint`
- Roda `build`

Workflow em `.github/workflows/ci.yml`.
