# EdTech API

An API for schools to manage classes, subjects, teachers and students that uses Prisma ORM with postgreSQL as database.

## Documentation

### ![#61AFFE](https://placehold.co/15x15/61AFFE/61AFFE.png) GET /status

- **200** : Ok! The server is working!

---

### ![#61AFFE](https://placehold.co/15x15/61AFFE/61AFFE.png) GET /classes

- List of classes

```json
[
  {
    "id": 1,
    "name": "Turma 8A"
  }
]
```

### ![#49CC90](https://placehold.co/15x15/49CC90/49CC90.png) POST /classes

- Create new class with unique name

```json
{
  "name": "Turma 8B"
}
```

- **201** : Class created
- **400** : Invalid body (see error message)
- **409** : Class name already exists

### ![#49CC90](https://placehold.co/15x15/49CC90/49CC90.png) POST /classes/subject

- Create new register of subject for a class

```json
{
  "classId": "1",
  "subjectId": "1"
}
```

- **201** : Register created
- **400** : Invalid body (see error message)
- **404** : Class or Subject Id not found (see error message)
- **409** : Register already exists

---

### ![#61AFFE](https://placehold.co/15x15/61AFFE/61AFFE.png) GET /students

- List of students

```json
[
  {
    "id": 1,
    "name": "João",
    "email": "joao@email.com",
    "classId": 1,
    "classes": {
      "id": 1,
      "name": "Turma 8A"
    }
  }
]
```

### ![#61AFFE](https://placehold.co/15x15/61AFFE/61AFFE.png) GET /students/:id

- Student info with class, subjects and teachers

```json
{
  "id": 1,
  "name": "João",
  "email": "joao@email.com",
  "class": {
    "classId": 1,
    "className": "Turma 8A",
    "subjects": [
      {
        "subjectId": 1,
        "subjectName": "Matemática",
        "subjectTeacher": "Sr Carlos"
      },
      {
        "subjectId": 2,
        "subjectName": "História",
        "subjectTeacher": "Sra Ana"
      }
    ]
  }
}
```

### ![#49CC90](https://placehold.co/15x15/49CC90/49CC90.png) POST /students

- Create new student

```json
{
  "name": "Carlos",
  "email": "carlos@email.com",
  "classId": "1"
}
```

- **201** : Student created
- **400** : Invalid body (see error message)
- **404** : Class Id not found
- **409** : Student email already exists

### ![#F93E3E](https://placehold.co/15x15/F93E3E/F93E3E.png) DELETE /students/:id

- Remove student

- **204** : Student removed
- **404** : Student Id not found

---

### ![#61AFFE](https://placehold.co/15x15/61AFFE/61AFFE.png) GET /subjects

- List of subjects

```json
[
  {
    "id": 1,
    "name": "Matemática"
  }
]
```

### ![#49CC90](https://placehold.co/15x15/49CC90/49CC90.png) POST /subjects

- Create new subject with unique name

```json
{
  "name": "Geografia"
}
```

- **201** : Class created
- **400** : Invalid body (see error message)
- **409** : Subject name already exists

---

### ![#61AFFE](https://placehold.co/15x15/61AFFE/61AFFE.png) GET /teachers

- List of teachers

```json
[
  {
    "id": 1,
    "name": "Sr Carlos",
    "email": "profcarlos@email.com"
  }
]
```

### ![#61AFFE](https://placehold.co/15x15/61AFFE/61AFFE.png) GET /teachers/:id

- Teacher info with subjects

```json
{
  "id": 1,
  "name": "Sr Carlos",
  "email": "profcarlos@email.com",
  "subjects": [
    {
      "subjectId": 1,
      "subjectName": "Matemática"
    }
  ]
}
```

## Feedbacks?

This project is part of my portfolio, any feedback will be greatly appreciated.

E-mail: g.rmc3000@gmail.com
Or contact me in [LinkedIn](https://www.linkedin.com/in/guilherme-rmc/)

## Getting Started

- Cloning the Repository:

```bash
git clone https://github.com/g-rmc/CadastreMe.git
```

- Create ```.env``` based on ```.env.example```

- Install all dependencies:

```bash
npm i
```

- Set dataBase configs:

```bash
npm run migration:generate
npm run migration:run
```

- If you want to populate the db with generic data:

```bash
npm run seed
```

- Start the server in dev mode:

```bash
npm run dev
```
