let t = /^[0-9]+$/,
    n = (e, n) => {
        let i = t.test(e),
            r = t.test(n);
        return i && r && ((e *= 1), (n *= 1)), e === n ? 0 : i && !r ? -1 : r && !i ? 1 : e < n ? -1 : 1;
    };
e.exports = { compareIdentifiers: n, rcompareIdentifiers: (e, t) => n(t, e) };
