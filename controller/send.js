module.exports = async (req, res) => {
    if (req.body.id === undefined) {
        res.json({
            code: -1
        });
        return;
    }
    if (req.body.content === undefined) {
        res.json({
            code: -1
        });
        return;
    }
    req.database.push('/' + req.body.id + '[]', req.body.content);
    console.log(req.database.getData(req.body.id));
    res.json({
        code: 200
    });
    return;
};