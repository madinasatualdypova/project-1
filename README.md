# Проект 1 — NULL / ESCAPE

Образовательная браузерная игра, в которой игрок изучает основы Python, чтобы выбраться из цифровой тюрьмы.

**Языки:** қазақша, русский, English.

## Игра

Пять глав знакомят с переменными, строками, условиями, циклами и функциями. Игрок исследует комнаты, решает задания, собирает сюжетные записи и выбирает одну из двух концовок.

Управление: **WASD / стрелки** — движение, **E** — взаимодействие. На телефоне доступны экранные кнопки.

## Запуск

1. Скачайте репозиторий через **Code → Download ZIP** и распакуйте его.
2. Откройте `index.html` в современном браузере.
3. Для автономного запуска одним файлом откройте [null-escape.html](null-escape.html).

Установка зависимостей и сборка не требуются. В автономной версии подключение к интернету не нужно.

## Презентация

[Скачать PowerPoint для конкурса](NULL-Escape_Presentation_EN.pptx)

10 слайдов на английском языке для выступления.

## Текущий статус

Работающий MVP. Задания проверяют заданные фрагменты кода и моделируют вывод. Произвольный Python в браузере не исполняется. Прогресс действует до перезагрузки страницы, а выбранный язык сохраняется локально.

Проведены функциональные проверки заданий, переводов, переключения языка и концовок. Исследование образовательной эффективности с учениками ещё не проводилось.

## Структура

- `index.html` — интерфейс игры
- `style.css` — оформление и адаптация для телефона
- `game.js` — управление, задания и сюжет
- `locales.js` — тексты трёх языков
- `null-escape.html` — автономная версия
- `NULL-Escape_Presentation_EN.pptx` — конкурсная презентация

## English

NULL / ESCAPE is a browser adventure that introduces Python through five short coding puzzles. The player explores a digital prison, restores terminals and decides the fate of a companion. The game supports Kazakh, Russian and English, keyboard and touch controls, hints and two endings.

Download the repository and open `index.html`, or use the standalone `null-escape.html` file. The presentation contains 10 English slides with Russian presenter notes. This is an introductory prototype with predefined answer validation, not a full Python interpreter. Learning outcomes have not yet been evaluated with students.
