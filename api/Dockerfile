FROM ubuntu:latest as build
# Install build dependencies
RUN apt-get update
RUN apt-get install openjdk-23 -y
COPY . .
RUN apt-get install maven -y
RUN mvn clean install

FROM openjdk:23-jdk-slim
EXPOSE 8080
COPY --from=build /target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
