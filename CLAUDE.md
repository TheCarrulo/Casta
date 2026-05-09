# Casta App

Catálogo de castas portuguesas com perfis sensoriais, aromas, harmonizações e vinhos de referência.

## Stack
- Next.js 15 (App Router), Tailwind CSS v4, TypeScript
- Dados estáticos em JSON local (`/data/castas.json`)
- Deploy: Vercel

## Estrutura
```
/app
  layout.tsx        — layout raiz
  page.tsx          — página única, layout 3 colunas (a criar)
  globals.css       — Tailwind v4 + variáveis CSS
/app/components
  LeftColumn.tsx    — pesquisa + filtros + lista de castas (a criar)
  CenterPanel.tsx   — ficha detalhada da casta selecionada (a criar)
  RightColumn.tsx   — castas relacionadas (a criar)
/data
  castas.json       — ~45 castas portuguesas reais (a criar)
/types
  casta.ts          — tipos TypeScript (feito)
```

## Design
- Paleta monocromática, tons cinza neutro
- Sem gradientes, sem sombras, sem cores decorativas
- Bordas `0.5px solid #E5E5E3`, border-radius 8-12px
- Tipografia: system font, pesos 400 e 500 apenas
- Dot tintos: `#888780` | Dot brancos: `#B4B2A9` | Dot rosé: `#A89D99`
- Barras de perfil sensorial na cor do dot da casta

## Convenções
- Português de Portugal em toda a UI
- Sem backend, sem auth, sem DB
- Componentes Client (`"use client"`) apenas onde há interatividade
- Dados importados diretamente do JSON, sem fetch

## Schema da casta (`/types/casta.ts`)
```ts
{
  id: string
  nome: string
  tipo: "tinto" | "branco" | "rosé"
  regioes: string[]        // ex: ["douro", "dão"]
  aromas: string[]         // ex: ["Violeta", "Amora"]
  taninos: number          // 0-100
  acidez: number           // 0-100
  corpo: number            // 0-100
  aroma: number            // 0-100
  harmonizacao: { icone: string; prato: string; nota: string }[]
  vinhos: { nome: string; produtor: string }[]
}
```

## Tarefas pendentes
- [ ] Criar `data/castas.json` com ~45 castas portuguesas reais
- [ ] Criar `app/page.tsx` com layout 3 colunas e estado global
- [ ] Criar `app/components/LeftColumn.tsx` (pesquisa + filtros + lista)
- [ ] Criar `app/components/CenterPanel.tsx` (ficha detalhada)
- [ ] Criar `app/components/RightColumn.tsx` (castas relacionadas)
- [ ] Instalar dependências e validar build
