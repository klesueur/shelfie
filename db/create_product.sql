INSERT INTO products
(name, price, imgurl)
VALUE ($1, $2, $3)
returning *;