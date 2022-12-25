module.exports = async (req, res) => {
    if (req.query.id === undefined) {
        res.json({
            code: -1
        });
        return;
    }
    if (!await req.database.exists('/' + req.query.id)) {
        res.json({
            code: 200,
            data: []
        });
        return;
    }
    res.json({
        code: 200,
        data: await req.database.getData('/' + req.query.id)
    });
    return;
};