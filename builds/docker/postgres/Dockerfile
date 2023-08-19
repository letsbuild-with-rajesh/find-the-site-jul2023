FROM postgres:15-alpine
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD admin
ENV POSTGRES_DB postgres
COPY database/init.sql /docker-entrypoint-initdb.d/