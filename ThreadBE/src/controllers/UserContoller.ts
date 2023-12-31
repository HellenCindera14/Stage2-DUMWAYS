import { Request, Response } from "express";
import ThreadsService from "../services/ThreadService";

class ThreadsController {
  async find(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;

      const response = await ThreadsService.find(req.query, loginSession);
      return res.status(200).json(response);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Something went wrong on the server!" });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const loginSession = res.locals.loginSession;

      const response = await ThreadsService.findOne(id, loginSession);
      return res.status(200).json(response);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Something went wrong on the server!" });
    }
  }
}

export default new ThreadsController();