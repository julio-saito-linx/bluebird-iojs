# bluebird-iojs

blue bird promises with iojs

```sh
# install nvm
curl https://raw.githubusercontent.com/creationix/nvm/v0.24.0/install.sh | bash

# check latest version of iojs
nvm ls-remote iojs

# install iojs
nvm install iojs-v1.5.1

# run example with iojs native generators
iojs blubird-gen-test.js
```

you should see that:
```sh
$ iojs blubird-gen-test.js
Ping? 0
Pong! 1
Ping? 2
Pong! 3
Ping? 4
Pong! 5
Ping? 6
Pong! 7
Ping? 8
Pong! 9
Ping? 10
...
```
