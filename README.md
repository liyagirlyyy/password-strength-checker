# Password Strength Checker — README

## Project Information

* **Intern ID:** CITS8420
* **Full Name:** Onley Zarro N
* **No. of Weeks:** 4 weeks
* **Project Name:** Password Strength Checker

## 1. Introduction

The **Password Strength Checker** is a simple cybersecurity project developed to evaluate the strength of a user's password. The application checks a password against different security criteria and provides feedback on whether the password is weak, medium, or strong.

The project aims to help users understand the importance of creating secure passwords and following good password security practices.

## 2. Objectives

* To evaluate the strength of passwords.
* To identify common password weaknesses.
* To encourage users to create stronger passwords.
* To provide clear and useful password security recommendations.
* To demonstrate basic concepts of cybersecurity and input validation.

## 3. Features

The Password Strength Checker evaluates passwords based on the following criteria:

* Minimum password length.
* Uppercase letters.
* Lowercase letters.
* Numbers.
* Special characters.
* Common or easily predictable patterns.

The application provides a strength classification such as:

* 🔴 **Weak** – Password does not meet basic security requirements.
* 🟡 **Medium** – Password meets some security requirements but can be improved.
* 🟢 **Strong** – Password satisfies most or all recommended security requirements.

## 4. How It Works

1. The user enters a password.
2. The application analyzes the password.
3. Different security criteria are checked.
4. A strength score is calculated.
5. The application displays the password strength.
6. Suggestions are provided if the password needs improvement.

### Example

**Input:**

```text
Password123
```

**Output:**

```text
Strength: Medium

Suggestion:
Add special characters and use a longer password.
```

## 5. Technologies Used

* **Programming Language:** Python
* **Frontend:** HTML, CSS, JavaScript *(if applicable)*
* **Development Environment:** Visual Studio Code
* **Version Control:** Git/GitHub

## 6. Project Structure

```text
Password-Strength-Checker/
│
├── README.md
├── main.py
├── requirements.txt
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   └── script.js
└── screenshots/
```

*The project structure may vary depending on the implementation.*

## 7. Security Considerations

The application is designed for password-strength evaluation and educational purposes. User passwords should not be stored, logged, or unnecessarily transmitted.

For real-world applications, passwords should be handled using secure authentication practices, appropriate hashing algorithms, and other established cybersecurity measures.

## 8. Expected Outcome

The Password Strength Checker should provide users with a simple way to understand how secure their passwords are. It should identify weaknesses and provide recommendations for creating stronger passwords.

## 9. Future Enhancements

Future versions of the project could include:

* Interactive password strength meter.
* Strong password generator.
* Detection of commonly used passwords.
* Improved password analysis.
* Estimated resistance to password-guessing attacks.
* User-friendly graphical interface.
* Additional cybersecurity recommendations.

## 10. Conclusion

The **Password Strength Checker** is a practical project that demonstrates fundamental cybersecurity concepts such as password validation, security requirements, and user input analysis. It helps users understand the characteristics of strong passwords and encourages safer password practices.
