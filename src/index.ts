
import express from 'express';
import { json, urlencoded } from 'body-parser';


import express, {Request, Response}  from 'express';

const app = express();
const port = process.env.PORT || 3001;

const products = [{id: 1, title: 'watermelon'}, { id: 2, title: 'orange'}]
const addresses = [{ id: 1, value: 'london-street 11'}, {id: 2, value: 'lorsanov 22'},
                  { id: 3, value: 'backer-lions 119/3'}, {id: 4, value: '56 uchastok'}]

app.use(json()); // Для парсинга JSON-объектов в теле запроса
app.use(urlencoded({ extended: true }));



app.get('/products', (req: Request, res: Response) => {
    if(req.query.title) {
        let searchString = req.query.title.toString();
        res.send(products.filter(p => p.title.indexOf(searchString) > -1 ));
    } else {
        res.send(products);
    }
});
app.post('/products', (req: Request, res: Response) => {
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    }
    products.push(newProduct)
    res.status(201).send(newProduct)
});
app.get('/products/:id', (req: Request, res: Response) => {
    let product = products.find(p => p.id === +req.params.id)
    if(product) {
        res.send(product)
    } else {
        res.send(404);
    }
});
app.put('/products/:id', (req: Request, res: Response) => {
    let product = products.find(p => p.id === +req.params.id)
    if(product) {
        product.title = req.body.title
        res.send(product)
    } else {
        res.send(404);
    }
});
app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send(201)
            return;
        }
    }
    res.send(404);
})
app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses);
});
app.get('/addresses/:id', (req: Request, res: Response) => {
    let address = addresses.find(a => a.id === +req.params.id)
    if(address) {
        res.send(address)
    } else {
        res.sendStatus(404);
    }

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello Incubator!'

import express from 'express'
const app = express();
const port = process.env.PORT || 3000
app.get('/', (req: any, res: any) => {
    let helloMessage = 'Hello Incubator'

    res.send(helloMessage);

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});