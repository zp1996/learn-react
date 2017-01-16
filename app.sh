#!/bin/bash

handle=$1
if [ $handle != del ]
then
	node new-component.js --name=$1
else
	node new-component.js --del=true --name=$2
fi