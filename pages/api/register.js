import { Register } from "../../server/controllers/auth";

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return Register(req, res);
    default:
      return res.status(404).json(404);
  }
}
