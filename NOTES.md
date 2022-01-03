# Notas sobre problemas durante o desenvolvimento

- Talvez venha a ocorrer algum problema com a lib `eslint-config-standard-with-typescript`, porque na versão 16, ela exige um `await` em determinada parte do código, mas nas anteriores, não. Preciso esperar chegar essa parte no curso pra confirmar.

- Eu estava enlouquecendo com um auto formatter que eu não consegui identificar. O ESLint acusando um ponto-e-vírgula a mais e quando eu tiro e salvo o arquivo, algum formatter do inferno recoloca, mas não consegui descobrir qual. Desabilitei tudo, o Prettier eu até excluí, mas nada resolveu. Nem desabilitando tudo no global. Só consegui rodando o ESLint pela linha de comando. Quando rodei o ESLint, apareceu o seguinte erro. Imagino que possa ter relação:

```shell
WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <4.5.0

YOUR TYPESCRIPT VERSION: 4.5.4
```
