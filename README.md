# Atida Hyva Theme - Figma Code Connect

This repo bridges the Atida Hyva Theme (Magento + Tailwind v4) with Figma Code Connect.

## Purpose

The original codebase is in Bitbucket (project-atida) with CSS/HTML files by category. This repo provides a Code Connect-compatible per-component structure for Figma Dev Mode.

## Structure

components/button/button.figma.ts
components/icons/icons.figma.ts  
components/tabs/tabs.figma.ts

## Setup - Code Connect CLI

1. Install: npm install --save-dev @figma/code-connect
2. Create figma.config.json with parser: "html"
3. Authenticate: npx figma connect auth
4. Replace FIGMA_COMPONENT_URL_* in each .figma.ts with real Figma node URLs
5. Publish: npx figma connect publish

## Source CSS (Bitbucket project-atida)

Button: web/tailwind/components/2-mw-elements/button.css
Icons:  web/tailwind/components/2-mw-elements/icons.css
Tabs:   web/tailwind/components/2-mw-elements/tabs.css
Price:  web/tailwind/components/2-mw-elements/price.css
