# Abhishek Sharma Portfolio

Modern React/Vite portfolio for Abhishek Sharma, focused on cloud engineering, DevOps, Kubernetes, GitOps, Azure, and infrastructure automation.

## Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Lucide React

## Development

```bash
npm ci
npm run dev
```

## Production Build

```bash
npm run build
```

## Checks

```bash
npm run lint
```

## Docker Deploy

```bash
docker compose up -d --build
```

The compose service binds to `127.0.0.1:8087` for local host access and also joins the external Docker network named `edge`.

```text
http://127.0.0.1:8087
```

For the shared Caddy edge container, point `abhishek.ideova.in` to the compose service name on the `edge` network:

```text
reverse_proxy abhishek:80
```

## GitHub Actions Deploy

The deployment workflow is in `.github/workflows/deploy-vps.yml`. Configure these GitHub repository variables and secret:

- `VPS_HOST`
- `VPS_USER`
- `VPS_PORT` (optional, defaults to `22`)
- `VPS_APP_DIR` (optional, defaults to `/srv/abhishek`)
- `VPS_SSH_KEY` as a repository secret
