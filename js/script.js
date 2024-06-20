// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function findIntegerClicked() {
  const integer = parseInt(document.getElementById("num-entered").value)
  let answer = 0
  for (let counter = 1; counter <= integer; counter++) {
    answer += Math.abs(counter)
    console.log(counter)
  }
  document.getElementById("answer").innerHTML = "Your answer is: " + answer
}