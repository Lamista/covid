# Covid-19 statistics

## Tools

* Backend - Spring Boot.
* Frontend - React.
* Database - H2 SQL database.
* Additional: Swagger, Maven.

## Project structure
Project is based on layered architecture pattern. 
* Controller - API endpoints
* Repository - Data access layer.
* Service - Bussines logic layer.
* Domain - DATA layer.

## Spring-boot
To start the app on default 8080 port
```mvn spring-boot:run```
### Swagger
```http://localhost:8080/swagger-ui/```
### H2
```http://localhost:8080/console```
```
datasource url: jdbc:h2:mem:app
username: sa
password:
```

## Embedded Tomcat
To run app from war file
```
mvn clean install org.codehaus.cargo:cargo-maven2-plugin:1.7.7:run -Dcargo.maven.containerId=tomcat9x -Dcargo.servlet.port=8080 -Dcargo.maven.containerUrl=https://repo1.maven.org/maven2/org/apache/tomcat/tomcat/9.0.40/tomcat-9.0.40.zip

```
Or run `mvn clean install` and make a new war file (app.war) in target folder and deploy it to Tomcat server.
### Swagger
```http://localhost:8080/app/swagger-ui/```
### H2
```http://localhost:8080/app/console```