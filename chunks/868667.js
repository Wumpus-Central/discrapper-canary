let i = n(40231),
    r = (e, t, n = !1) => {
        if (e instanceof i) return e;
        try {
            return new i(e, t);
        } catch (e) {
            if (!n) return null;
            throw e;
        }
    };
e.exports = r;
