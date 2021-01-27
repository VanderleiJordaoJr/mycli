#!/bin/zsh
install_location=~/.local/share/template/

echo 'Removing old installation files'
rm -rf $install_location
mkdir $install_location

echo 'Moving new files'
cp -r node_modules $install_location
cp -r dist ~/.local/share/template/dist
