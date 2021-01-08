#!/bin/bash
git clone https://github.com/nodenv/nodenv.git ~/.nodenv
echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(nodenv init -)"' >> ~/.bashrc
nodenv=~/.nodenv/bin/nodenv
nodenv_root="$("$nodenv" root)"
mkdir -p "${nodenv_root}/plugins"
git clone https://github.com/nodenv/node-build.git "${nodenv_root}/plugins/node-build"
git clone https://github.com/nodenv/nodenv-default-packages.git "${nodenv_root}/plugins/nodenv-default-packages"
touch ${nodenv_root}/default-packages
echo -e "yarn\ntypescript\nts-node\ntypesync" >> ${nodenv_root}/default-packages

mkdir -p "${nodenv_root}/cache"
exec $SHELL -l
