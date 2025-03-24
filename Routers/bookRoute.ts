import express from 'express';
import { BookCollection } from '../models/newCollection';
const bookRouter = express.Router();

bookRouter.post("/addbook", async(req: express.Request, res:express.Response )=>{
    try {
        const newBook = new BookCollection({
            id: req.body.id,
            title: req.body.title,
            pages: req.body.pages,
            author: req.body.author,
            isbn: req.body.isbn,
            image: req.body.image,
            count: req.body.count,
            categories: req.body.categories
        });
        const result = await newBook.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({error});
    }
});

bookRouter.get("/getbooks", async(req: express.Request, res:express.Response)=>{
    try {
        const result = await BookCollection.find().exec();
        res.status(200).json(result);
    } catch (err){
        res.status(400).json({error: err});
    }
});

bookRouter.get("/books", async(req: express.Request, res:express.Response)=>{
    let {page, limit} = req.query;
    page = page as string || "1";
    limit = limit as string || "5";
      
    const pageNo = parseInt(page);
    const limitNo = parseInt(limit);
    const skip = (pageNo - 1) * limitNo;
    try {
        const books = await BookCollection.find().skip(skip).limit(limitNo);
        const total = await BookCollection.countDocuments();
        res.status(200).json({
            data:books,
            totalItems: total,
            totalPages: Math.ceil(total/limitNo),
            currentPage: pageNo,      
        });
    } catch (error) {
        res.status(500).json({message: error})
    }



});

bookRouter.put("/updatebook/:id", async(req: express.Request, res: express.Response )=>{
    try {
        const id = req.params.id;
        const result = await BookCollection.findByIdAndUpdate(id, req.body);
        res.status(200).json(result);
        } catch (error) {
            res.status(400).json({error});
        }
});

bookRouter.delete("/deletebook/:id", async(req: express.Request, res: express.Response )=>{
    try {
        const id = req.params.id;
        const result = await BookCollection.findByIdAndDelete(id);
        res.status(200).json(result);
        } catch (error) {
            res.status(400).json({error});
        }
        });

export default bookRouter;
