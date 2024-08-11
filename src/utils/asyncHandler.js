// const asyncHandler = () => {};

const asyncHandler = (requestHandler) => {
 return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
  };
};

export { asyncHandler };

// const asyncHandler = () => {};
// const asyncHandler = (func) => {() => {}};
// const asyncHandler = (func) => async () => {};

// const asyncHandler = (func) => async (req, res, next) => {
//     try {
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: true,
//             message: error.message
//         });
//     }
// };
