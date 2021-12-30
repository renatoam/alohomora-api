# Alohomora Back-End

Project based on Harry Potter's world. It's a huge platform using many types of application and technologies in order to teach and learn about programming and web development.

## Development Tools

### Linters

**Git Commit Msg Linter**: We've opted for `git-commit-msg-linter` over `commitlint` because it doesn't require a previous configuration. It is triggered by default on every commit.

**ES Lint**: such an annoying config! Personally, I hate configure `eslint` and/or `prettier`, but for this case we've opted to don't use `prettier`, only `eslint` for linting and formatting.

For ensure the possibly installed `prettier` on dev computer doesn't conflict with our config, we've disabled it for the current VS Code workspace.

We're using `eslint` with `typescript` and `standard-with-typescript` as our rules. We've also enabled `strictNullChecks` in order to ensure safety on `null` or `undefined` types check.
