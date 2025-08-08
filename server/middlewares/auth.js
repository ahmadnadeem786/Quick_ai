import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    const { userId, has } = await req.auth();

    const user = await clerkClient.users.getUser(userId);

    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};





// export const auth = async (req, res, next) => {
//   try {
//     const { userId } = await req.auth(); // Only get userId, ignore has()
//     const user = await clerkClient.users.getUser(userId);

//     // Use the free_usage from privateMetadata, or set to 0 if not present
//     req.free_usage = user.privateMetadata.free_usage || 0;
//     req.plan = "free";

//     next();
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

