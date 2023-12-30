import { Router, Request, Response } from "express";
import { getBody } from "../../lib/apiUtils";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "GET request received" });
});

router.post("/", (req: Request, res: Response) => {
  if (req.is("json")) {
    processJsonData(req, res);
  } else {
    res.status(400).send("Invalid content type. Please send JSON.");
  }
});

router.delete("/user/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  res
    .status(200)
    .json({ message: `User data for user ${userId} deleted successfully` });

  res.status(404).json({ message: "User not found" });
});

router.options("/", (req: Request, res: Response) => {
  res.setHeader("Allow", "GET, POST, DELETE, OPTIONS");
  res.status(204).send();
});

router.patch("/user/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const updateData = req.body;
  res.status(200).json({
    message: "User data updated successfully",
    updatedData: { userId, updateData },
  });
});

export default router;

async function processJsonData(req: Request, res: Response) {
  const userData = await getBody(req);
  if (!userData.name || !userData.email) {
    return res
      .status(400)
      .json({ message: "Missing name or email in user data." });
  }
  res
    .status(200)
    .json({ message: "User data processed successfully", userData });
}
