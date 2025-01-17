let i = r(868667),
    a = (e, n) => {
        let r = i(e.trim().replace(/^[=v]+/, ''), n);
        return r ? r.version : null;
    };
e.exports = a;
