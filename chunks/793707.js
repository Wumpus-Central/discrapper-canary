let i = n(40231),
    r = n(889658),
    a = (e, t, n) => {
        let a = null,
            s = null,
            o = null;
        try {
            o = new r(t, n);
        } catch (e) {
            return null;
        }
        return (
            e.forEach((e) => {
                o.test(e) && (!a || 1 === s.compare(e)) && (s = new i((a = e), n));
            }),
            a
        );
    };
e.exports = a;
