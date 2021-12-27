# Createsuper

> This repo contains the source code of [createsunday.app](https://createsunday.app).

# Dev

Install dependencies then run the development mode:

```
yarn && yarn dev
```

If you want to get the remote changes locally:

```
git pull --rebase
```

# Deploy

We deploy and follow the Vercel pattern to deploy. Checkout the [docs](https://vercel.com/docs/concepts/deployments/environments) to learn more.

**Production:**

Make or merge your change to the `main` branch then run `git push` and `yarn deploy --prod` to deploy to the production environment.


**Staging:**

Make your change on a dedicaded branch (ex: `my-feature`) then run `git push` and `yarn deploy` to deploy to the preview environment and create unique URL to each commit.


## License

[MIT License](./LICENSE.md) © Christophe Ribeiro