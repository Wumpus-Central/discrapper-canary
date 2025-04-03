let r = n(868667);
e.exports = (e, t) => {
    let n = r(e.trim().replace(/^[=v]+/, ''), t);
    return n ? n.version : null;
};
