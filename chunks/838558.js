let i = n(868667),
    r = (e, t) => {
        let n = i(e.trim().replace(/^[=v]+/, ''), t);
        return n ? n.version : null;
    };
e.exports = r;
