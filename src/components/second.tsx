import { useState } from "react";

function Second() {
    const [scriptFlag, setScriptFlag] = useState<boolean>(false);
    const sqlScript = `
                //수강 과목
                CREATE TABLE course (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    teacher_id INTEGER UNSIGNED NOT NULL, //teacher table key
                    student_id INTEGER UNSIGNED NOT NULL, // student table key
                    PRIMARY KEY(id),
                    INDEX course_FKIndex1(student_id),
                    INDEX course_FKIndex2(teacher_id)
                );

                //취미 종류 테이블
                CREATE TABLE hobby (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    hobby VARCHAR NOT NULL, //취미
                    PRIMARY KEY(id)
                );

                //부모님 테이블
                CREATE TABLE parent (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    name VARCHAR NOT NULL, //부모님 성함
                    phoneNum VARCHAR NULL, //전화번호
                    PRIMARY KEY(id)
                );

                //학교 테이블
                CREATE TABLE school (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    schoolName VARCHAR NOT NULL, //학교 이름
                    PRIMARY KEY(id)
                );

                //학생 테이블
                CREATE TABLE student (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    school_id INTEGER UNSIGNED NOT NULL, // school table key
                    parent_id INTEGER UNSIGNED NOT NULL, // parent table key
                    name VARCHAR NOT NULL, // 이름
                    phoneNum VARCHAR NULL, //전화번호
                    email VARCHAR NULL, //이메일
                    birth VARCHAR NOT NULL, // 생년 월일
                    PRIMARY KEY(id),
                    INDEX student_FKIndex1(parent_id),
                    INDEX student_FKIndex2(school_id)
                );

                //학생 취미 테이블
                CREATE TABLE studentHobby (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    hobby_id INTEGER UNSIGNED NOT NULL, // hobby table key
                    student_id INTEGER UNSIGNED NOT NULL, // student table key
                    PRIMARY KEY(id),
                    INDEX studentHobby_FKIndex1(student_id),
                    INDEX studentHobby_FKIndex2(hobby_id)
                );

                // 과목 테이블
                CREATE TABLE subject (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    subject VARCHAR NOT NULL, //과목 이름
                    PRIMARY KEY(id)
                );

                //선생님 테이블
                CREATE TABLE teacher (
                    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                    school_id INTEGER UNSIGNED NOT NULL, // school table key
                    subject_id INTEGER UNSIGNED NOT NULL, // subject table key
                    name VARCHAR NOT NULL, //선생님 성함
                    PRIMARY KEY(id),
                    INDEX teacher_FKIndex1(subject_id),
                    INDEX teacher_FKIndex2(school_id)
                );

    `
    return (
        <div className="container">
            <h3>두번째 문제</h3>
            <img src="https://alcoholcocktail.s3.ap-northeast-2.amazonaws.com/erd.png" />
            <p>- 선생님과 학교간의 관계를 정의할 때 수강 과목이 같은 동명이인의 선생님이 각각의 학교에 계시다고 가정하고 설계했습니다</p>
            <button onClick={() => setScriptFlag(!scriptFlag)}>View sql script</button>
            {scriptFlag ? 
                <pre>
                    {sqlScript}


                </pre>
                :null
            }
        </div>
    )
}

export default Second;