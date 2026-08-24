let t = /^[0-9]+$/,
    r = (e, r) => {
        let n = t.test(e),
            i = t.test(r);
        return n && i && ((e *= 1), (r *= 1)), e === r ? 0 : n && !i ? -1 : i && !n ? 1 : e < r ? -1 : 1;
    };
e.exports = { compareIdentifiers: r, rcompareIdentifiers: (e, t) => r(t, e) };
