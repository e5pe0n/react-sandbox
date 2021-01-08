#!/bin/bash
echo 'installing nodenv'
git clone https://github.com/nodenv/nodenv.git ~/.nodenv
echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(nodenv init -)"' >> ~/.bashrc
echo 'installed nodenv'

nodenv=~/.nodenv/bin/nodenv
nodenv_root="$("$nodenv" root)"
mkdir -p "${nodenv_root}/plugins"
echo 'installing node-build'
git clone https://github.com/nodenv/node-build.git "${nodenv_root}/plugins/node-build"
echo 'installed node-build'
echo 'installing nodenv-default-packages'
git clone https://github.com/nodenv/nodenv-default-packages.git "${nodenv_root}/plugins/nodenv-default-packages"
touch ${nodenv_root}/default-packages
echo -e "yarn\ntypescript\nts-node\ntypesync" >> ${nodenv_root}/default-packages
echo 'installed nodenv-default-packages'

mkdir -p "${nodenv_root}/cache"
echo 'completed set up'
