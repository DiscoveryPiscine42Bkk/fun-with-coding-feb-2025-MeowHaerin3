#!/bin/bash
if [ $# -eq 0 ]; then
    echo "no arguments found"

elif [ $# -gt 1 ]; then
    for arg in "$@"; do
        echo "$arg"
    done
fi