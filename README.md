# Zadania z rekurencji w JavaScript

## 1. Silnia (factorial)

Napisz funkcję rekurencyjną do obliczania silnii liczby.

- **Cel zadania:** Zrozumienie koncepcji silnii i implementacja funkcji rekurencyjnej.
- **Objaśnienie:**
  1. Silnia liczby n to iloczyn wszystkich dodatnich liczb całkowitych od 1 do n.
  2. Rekurencyjnie oblicz silnię dla mniejszych liczb, aż dojdziesz do 1.
  3. Zwróć wynik.

## 2. Sumowanie elementów tablicy

Stwórz funkcję rekurencyjną do sumowania elementów tablicy.

- **Cel zadania:** Umiejętność sumowania elementów tablicy za pomocą rekurencji.
- **Objaśnienie:**
  1. Iteruj przez elementy tablicy.
  2. Dodawaj każdy element do sumy.
  3. Rekurencyjnie wywołaj funkcję dla reszty tablicy.
  4. Zwróć sumę.

## 3. Odwracanie stringa

Zaimplementuj rekurencyjną funkcję do odwracania stringa.

- **Cel zadania:** Obróć kolejność znaków w stringu przy użyciu rekurencji.
- **Objaśnienie:**
  1. Sprawdź bazowy przypadek, jeśli string jest pusty.
  2. Odwróć resztę stringa rekurencyjnie.
  3. Zwróć odwrócony string.

## 4. Ciąg Fibonacciego

Utwórz funkcję rekurencyjną, która oblicza N-ty element ciągu Fibonacciego.

- **Cel zadania:** Zrozumienie ciągu Fibonacciego i jego implementacja rekurencyjna.
- **Objaśnienie:**
  1. Ciąg Fibonacciego to ciąg, w którym każda liczba to suma dwóch poprzednich.
  2. Rekurencyjnie oblicz N-ty element sumując dwa poprzednie elementy.

## 5. Potęga liczby

Stwórz rekurencyjną funkcję do obliczania potęgi liczby.

- **Cel zadania:** Umiejętność obliczania potęgi za pomocą rekurencji.
- **Objaśnienie:**
  1. Rekurencyjnie pomnóż liczbę przez siebie samą, aż do osiągnięcia odpowiedniej potęgi.
  2. Zwróć wynik.

## 6. Palindrom

Zaimplementuj funkcję rekurencyjną do sprawdzania, czy dany string jest palindromem.

- **Cel zadania:** Sprawdź, czy string czyta się tak samo od lewej do prawej, jak i od prawej do lewej.
- **Objaśnienie:**
  1. Sprawdź, czy pierwszy i ostatni znak są takie same.
  2. Rekurencyjnie sprawdź, czy reszta stringa jest palindromem.

## 7. Największy Wspólny Dzielnik (NWD)

Utwórz rekurencyjną funkcję do znajdowania największego wspólnego dzielnika dwóch liczb.

- **Cel zadania:** Znalezienie największej liczby, przez którą obie liczby są podzielne.
- **Objaśnienie:**
  1. Znajdź resztę z dzielenia większej liczby przez mniejszą.
  2. Rekurencyjnie wywołaj funkcję dla mniejszej liczby i reszty z poprzedniego kroku.

## 8. Permutacje w tablicy

Stwórz funkcję rekurencyjną do generowania wszystkich możliwych permutacji elementów w tablicy.

- **Cel zadania:** Utworzenie wszystkich możliwych permutacji elementów w tablicy.
- **Objaśnienie:**
  1. Iteruj przez elementy tablicy.
  2. Wybierz jeden element i rekurencyjnie znajdź permutacje reszty tablicy.
  3. Połącz wybrany element z permutacjami reszty.

## 9. Sortowanie tablicy (quicksort)

Zaimplementuj rekurencyjną funkcję do sortowania tablicy (np. quicksort).

- **Cel zadania:** Zrozumienie algorytmu quicksort i jego implementacja rekurencyjna.
- **Objaśnienie:**
  1. Wybierz element pivot.
  2. Podziel tablicę na elementy mniejsze i większe od pivota.
  3. Rekurencyjnie posortuj mniejsze i większe elementy.

## 10. Liczba pierwsza

Utwórz funkcję rekurencyjną do sprawdzania, czy dana liczba jest liczbą pierwszą.

- **Cel zadania:** Sprawdź, czy liczba ma tylko dwa dzielniki: 1 i sama siebie.
- **Objaśnienie:**
  1. Sprawdź, czy liczba jest podzielna przez inne liczby niż 1 i ona sama.
  2. Rekurencyjnie sprawdź dla mniejszych liczb.

## 11. Przypuszczenie Collatza

Stwórz funkcję rekurencyjną, która implementuje przypuszczenie Collatza. Przyjmij liczbę całkowitą n. Jeśli n jest parzyste, podziel ją przez 2. Jeśli n jest nieparzyste, pomnóż przez 3 i dodaj 1. Funkcja powinna wywołać samą siebie dla nowej wartości n, aż do osiągnięcia wartości 1.

- **Cel zadania:** Implementacja przypuszczenia Collatza i zrozumienie rekurencji w tym kontekście.
