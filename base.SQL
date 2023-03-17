CREATE TABLE "classes" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE "students" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL UNIQUE,
	"classId" INTEGER REFERENCES "classes"("id")
);

CREATE TABLE "subjects" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE "teachers" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE "teachers_subjects" (
	"id" SERIAL PRIMARY KEY,
	"teacherId" INTEGER REFERENCES "teachers"("id"),
	"subjectId" INTEGER REFERENCES "subjects"("id")
);

CREATE TABLE "classes_subjects" (
	"id" SERIAL PRIMARY KEY,
	"classesId" INTEGER REFERENCES "classes"("id"),
	"subjectId" INTEGER REFERENCES "subjects"("id")
);
