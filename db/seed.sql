create table houses (
id serial PRIMARY KEY,
name varchar(30),
address varchar(100),
city varchar(100),
state varchar(2),
zip INTEGER,
img text,
mortgage decimal,
rent decimal
);

insert into houses (name, address, city, state, zip, img, mortgage, rent)
values($1, $2, $3, $4, $5, $6, $7, $8);

select * from houses;