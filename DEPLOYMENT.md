# Deployment Guide for Pahal

## Prerequisites
- Node.js 18+
- npm or yarn
- Git

## Development Setup

\\\ash
git clone https://github.com/Zoyaimam01/pahal.git
cd pahal
npm install
npm run dev
\\\

## Production Build

\\\ash
npm run build
npm run preview
\\\

## Deployment Options

### Vercel
\\\ash
npm i -g vercel
vercel
\\\

### Docker
\\\dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD [\"npm\", \"run\", \"preview\"]
\\\

### AWS Amplify
Connect your GitHub repository to AWS Amplify for automatic deployments.

## Environment Variables
See \.env.example\ for all available configuration options.

## Performance Tips
- Enable gzip compression
- Use CDN for static assets
- Implement proper caching headers
- Monitor Core Web Vitals

## Support
For issues and questions, open an issue on GitHub.
