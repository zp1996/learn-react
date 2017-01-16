#!/bin/bash

handle=$1
if [ $handle != del ]
then
	node new-component.js --name=$1
else
	echo 'not support' 
fi