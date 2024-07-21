"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// app.use(errorHandler):

module.exports = (err, req, res, next) => {

    return res.status(res?.errorStatusCode || 500).send({
        error: false,
        message: err.message,
        cause: err.cause,
        body: req.body
    });
}