* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --border: 1px solid #ffffff1a;
}

body,
table,
input,
button {
  font: 300 16px/140% 'Roboto', sans-serif;
}

body {
  background-color: #121214;
  color: #ffffff;
}

.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 20px 32px;
}

header {
  padding: 20px 0;
}

form {
  border: var(--border);
  border-inline: none;
  padding: 20px 0;
}

fieldset {
  border: none;
}

fieldset>div {
  display: flex;
  gap: 12px;
}

.input-wrapper {
  flex: 1;

  display: flex;
  align-items: center;
  gap: 12px;

  border: var(--border);
  border-radius: 10px;

  padding: 8px 12px;

  font: 400 14px/150% 'Roboto', sans-serif;
  color: #C4C4CC;
}

input {
  all: unset;
}

fieldset legend,
section h2 {
  font: 700 16px/140% 'Roboto', sans-serif;
  color: #E1E1E6;
  padding-bottom: 16px;
}

fieldset button {
  width: fit-content;
  border: 0;
  background: #F48F56;
  border-radius: 10px;
  padding: 7px 20px;

  font: 700 12px/24px 'Roboto', sans-serif;
  color: #00292E;
}

fieldset button:hover {
  background: #f37c37;
}

.lista-participantes {
  padding: 20px 0;
}

.lista-participantes > div {
  border: var(--border);
  border-radius: 8px;
}

table {
  border-collapse: collapse;
}

table thead {
  font-size: 14px;
  line-height: 16px;
}

thead th,
tbody td {
  padding: 12px 16px;
}

tbody td {
  border-top: var(--border);
  font-size: 13px;
  line-height: 15px;
  color: #c4c4cc;
}

tbody td strong {
  color: white;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}

tbody td small {
  font-size: 12px;
  line-height: 16px;
}

tbody td button {
  all: unset;
  color: #9FF9CC;
}

tbody td button:hover {
  text-decoration: underline;
}
