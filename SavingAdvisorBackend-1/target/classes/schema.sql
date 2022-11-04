create Table savingplandata(
id int primary key,
savingpoint float,
planname varchar(10),
amount numeric(10),
tenure int,
type varchar(2)
);
create Table LOGINUSER(
username varchar(10) primary key,
password varchar(10)
);