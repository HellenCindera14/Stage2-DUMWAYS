import { NextFunction, Request, Response } from "express";
import * as multer from "multer";

// cloudinary.config({
//     claod_name: "ddlupyy8i",
//     api_key: "151499178714111",
//     api_secret: "xmwXIpFtMZWyDm8GzcQQB8F77DA"
// })

export const upload = (image: string) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
    },
  });

  const uploadFile = multer({ storage: storage });

  return (req: Request, res: Response, next: NextFunction) => {
    uploadFile.single(image)(req, res, function (err: any) {
      if (err) {
        console.log(err);
        return res.status(400).json({ error: "file upload failed." });
      }
      res.locals.filename = req.file.filename;
      next();
    });
  };
};