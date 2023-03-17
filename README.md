# EdTech API

An API for schools to manage classes, subjects, teachers and students that uses Prisma ORM with postgreSQL as database.

## Documentation

### GET /status

- **200** : Ok! The server is working!

### GET /classes

- List of classes

```json
[
  {
    "id": 1,
    "name": "Turma 8A"
  }
]
```

### POST /classes

- Create new class with unique name

```json
{
  "name": "Turma 8B"
}
```

- **201** : Class created
- **400** : Invalid body (see error message)
- **409** : Class name already exists

### POST /classes/subject

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
