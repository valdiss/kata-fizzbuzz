# FizzBuzz

## Objectif

Le but est de réaliser une fonction qui prend en argument un nombre supérieur ou égal à 1.
- si ce nombre est multiple de 3, la fonction retourne la chaîne "Fizz"
- pour les multiples de 5, retourne "Buzz"
- pour les multiples de 15, retourne "FizzBuzz"
- pour les autres, renvoie l'argument

## Mise en place

Cette mise en place est nécessaire uniquement pour ce premier kata. En ligne de commandes :
```
$ sudo apt-get install -y nodejs
$ sudo apt-get install -y build-essential
$ sudo npm install -g jasmine
```

## Test

Ecrivez l'implémentation de votre solution dans le fichier src/FizzBuzz.js, à l'intérieur de la fonction fizzBuzz

Dans le terminal, placez-vous à la racine du projet (dans le répertoire kata-fizzbuzz) et lancer
```
$ jasmine
```

Tant que des erreurs sont affichées, votre implémentation est incomplète. Lorsque jasmine ne renvoie que des marqueurs verts, l'exercice est réussi.
