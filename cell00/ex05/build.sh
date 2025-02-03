#!/bin/bash
if [ $# -eq 0 ]; then
    echo "no arguments supplied"
else
    for arg in "$@"; do
        folder_name="ex${arg}"
        mkdir -p "$folder_name"
    done
fi