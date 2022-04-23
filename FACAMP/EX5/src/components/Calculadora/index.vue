<!--cd calculadora-app
npm run dev-->

<template>
  <div class="calculadora">
    <div class="display">{{ valorCorrente || "0" }}</div>

    <div v-on:click="limpar" class="botao btnLimpar">clear</div>
    <div v-on:click="porcentagem" class="botao">%</div>
    <div v-on:click="sqrt2" class="botao">√x</div>
    <div v-on:click="log" class="botao">log</div>
    <div v-on:click="potencia" class="botao">x^n</div>
    <div v-on:click="sqrt" class="botao">sqrt</div>
    <div v-on:click="log10" class="botao">log10</div>
    <div v-on:click="elevadoDois" class="botao">x²</div>
    <div v-on:click="dividir" class="botao operadores dividir"></div>
    <div v-on:click="juntarNumeros('7')" class="botao">7</div>
    <div v-on:click="juntarNumeros('8')" class="botao">8</div>
    <div v-on:click="juntarNumeros('9')" class="botao">9</div>
    <div v-on:click="multiplicar" class="botao operadores multiplicador"></div>
    <div v-on:click="juntarNumeros('4')" class="botao">4</div>
    <div v-on:click="juntarNumeros('5')" class="botao">5</div>
    <div v-on:click="juntarNumeros('6')" class="botao">6</div>
    <div v-on:click="diminuir" class="botao operadores menos"></div>
    <div v-on:click="juntarNumeros('1')" class="botao">1</div>
    <div v-on:click="juntarNumeros('2')" class="botao">2</div>
    <div v-on:click="juntarNumeros('3')" class="botao">3</div>
    <div v-on:click="somar" class="botao operadores mais"></div>
    <div v-on:click="sinal" class="botao">±</div>
    <div v-on:click="juntarNumeros('0')" class="botao">0</div>
    <div v-on:click="ponto" class="botao">.</div>
    <div v-on:click="resultado" class="botao operadores igual"></div>
  </div>
</template>

<script src="./calculadora.js">
</script>
<style src="./calculadora.css" scoped/>
