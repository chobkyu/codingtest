                CREATE TABLE course (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    teacher_id INTEGER UNSIGNED NOT NULL, 
                    student_id INTEGER UNSIGNED NOT NULL, 
                    PRIMARY KEY(id),
                    INDEX course_FKIndex1(student_id),
                    INDEX course_FKIndex2(teacher_id)
                );

                CREATE TABLE hobby (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    hobby VARCHAR NOT NULL, 
                    PRIMARY KEY(id)
                );

                CREATE TABLE parent (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    name VARCHAR NOT NULL,
                    phoneNum VARCHAR NULL, 
                    PRIMARY KEY(id)
                );


                CREATE TABLE school (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    schoolName VARCHAR NOT NULL, 
                    PRIMARY KEY(id)
                );

                CREATE TABLE student (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    school_id INTEGER UNSIGNED NOT NULL, 
                    parent_id INTEGER UNSIGNED NOT NULL, 
                    name VARCHAR NOT NULL, 
                    phoneNum VARCHAR NULL, 
                    email VARCHAR NULL, 
                    birth VARCHAR NOT NULL,
                    PRIMARY KEY(id),
                    INDEX student_FKIndex1(parent_id),
                    INDEX student_FKIndex2(school_id)
                );

                CREATE TABLE studentHobby (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    hobby_id INTEGER UNSIGNED NOT NULL, 
                    student_id INTEGER UNSIGNED NOT NULL, 
                    PRIMARY KEY(id),
                    INDEX studentHobby_FKIndex1(student_id),
                    INDEX studentHobby_FKIndex2(hobby_id)
                );

                CREATE TABLE subject (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    subject VARCHAR NOT NULL, 
                    PRIMARY KEY(id)
                );

                CREATE TABLE teacher (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    school_id INTEGER UNSIGNED NOT NULL, 
                    subject_id INTEGER UNSIGNED NOT NULL, 
                    name VARCHAR NOT NULL, 
                    PRIMARY KEY(id),
                    INDEX teacher_FKIndex1(subject_id),
                    INDEX teacher_FKIndex2(school_id)
                );
