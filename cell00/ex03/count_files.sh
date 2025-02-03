#!/bin/bash
count=$(find . -mindepth 1 -maxdepth 1 | wc -l)
echo $count

