// Переменные как константы . промежуточные переменные 
// Функции - в математическом смысле. чистые функция
// Объекты - неизменяемые, данные (POJO), Модули - набор функционала (префикс), 

// React - функционального: компонент - функция

// username - обязательное, не меньше 5 символов
// passwrods - обязательное, не меньше 8 символов, (содержит символ !) (содержит большую букву и цифру)
// age - число, целое, (0, 150)

let validForm = {
  username: "anton",
  password: "anton!anton",
  age: "20",
};

let invalidForm = {
  username: "anto",
  password: "anto",
  age: "20a",
};

// ValidationState = Valid | Invalid {string}
// ValidationState = [boolean, Maybe<string>]
// string -> ValidationState
const validateUsername = (username) => (
  username.length < 5
  ? [false, "Логин должен быть не меньше 5 символов"]
  : [true, null]
);

const validatePassword = (password) => {
  
  if (password.length < 8) {
    return [false, "Пароль должен быть не меньше 8 символов"];
  }

  if (password.indexOf("!") < 0) {
    return [false,  "Пароль должен содержать '!'"];
  }

  return [true, null];
}

const validateAge = (age) => {
  let ageNumber = parseInt(age);

  if (isNaN(ageNumber) || age !== String(ageNumber)) {
    return [false, "Возраст должен быть числом"];
  }

  if (age < 0 || age > 150) {
    return [false, "Возраст должен быть в промежутке от 0 до 150 лет"];
  }

  return [true, null];
}

// (string, string) => ValidationState
const validate = (key, value) => {
  switch(key) {
    case "username": return validateUsername(value);
    case "password": return validatePassword(value);
    case "age": return validateAge(value);
  }
}

// UserForm = { string: string }
// Errors = { string: string }
// Maybe<User> = User | null
// UserForm -> [boolean, Errors, Maybe<User>]
const validateUserForm = form => {
  const validationStates = Object.entries(form)
    .map(([key, value]) => [key, validate(key, value)])
    .filter(([, state]) => !state[0]); // [ [key, ValidationState] ]

  const isValid = validationStates.length == 0;

  const errors = Object.fromEntries(
    validationStates.map(([key, state]) => [key, state[1]])
  );

  return [
    isValid, 
    errors, 
    isValid && createUser(form)
  ];
}

const createUser = ({
  username,
  password,
  age
}) => ({
  username,
  password,
  age,
  dateOfRegistration: new Date()
});

// UserForm -> void (Побочный эффект)
// Пограничная функция между миром чистых функций и миром побочных эффектов
const handleSubmit = (form) => {
  // проверка типов данных 
  const [isValid, errors, user] = validateUserForm(form);

  if (isValid) {
    // отправить форму 
    console.log("Создаем пользователя", user);
  } else {
    // отображаем ошибки в форме
    console.log("Форма заполнена с ошибками", errors, form);
  }
}

/// 

handleSubmit(validForm);
console.log("-----");
handleSubmit(invalidForm);