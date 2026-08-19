let t = /^[0-9]+$/,
    r = (e, r) => {
        let n = t.test(e),
            o = t.test(r);
        return n && o && ((e *= 1), (r *= 1)), e === r ? 0 : n && !o ? -1 : o && !n ? 1 : e < r ? -1 : 1;
    };
e.exports = { compareIdentifiers: r, rcompareIdentifiers: (e, t) => r(t, e) };
