CREATE TABLE USER (
    ID DOUBLE AUTO_INCREMENT,
    USER_NAME VARCHAR(16),
    PASSWORD VARCHAR(32),
    PASSWORD_CONFIRM VARCHAR(32),
    LAST_LOGGED_IN TIMESTAMP,
    CREATION_TIME TIMESTAMP,
    IS_LOGGED_IN VARCHAR(1),
    VERSION DOUBLE

);