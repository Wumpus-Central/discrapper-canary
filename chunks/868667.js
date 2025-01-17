let i = r(40231),
    a = (e, n, r = !1) => {
        if (e instanceof i) return e;
        try {
            return new i(e, n);
        } catch (e) {
            if (!r) return null;
            throw e;
        }
    };
e.exports = a;
