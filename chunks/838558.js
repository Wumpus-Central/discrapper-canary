let r = n(868667),
    i = (e, t) => {
        let n = r(e.trim().replace(/^[=v]+/, ''), t);
        return n ? n.version : null;
    };
e.exports = i;
