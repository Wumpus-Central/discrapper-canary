let r = n(40231),
    i = n(889658);
e.exports = (e, t, n) => {
    let o = null,
        a = null,
        s = null;
    try {
        s = new i(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach((e) => {
            s.test(e) && (!o || 1 === a.compare(e)) && (a = new r((o = e), n));
        }),
        o
    );
};
