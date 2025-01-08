function a(e, t) {
    let r = e.length;
    !Array.isArray(e[0]) && (e = [e]), !Array.isArray(t[0]) && (t = t.map((e) => [e]));
    let a = t[0].length,
        n = t[0].map((e, r) => t.map((e) => e[r])),
        o = e.map((e) =>
            n.map((t) => {
                let r = 0;
                if (!Array.isArray(e)) {
                    for (let a of t) r += e * a;
                    return r;
                }
                for (let a = 0; a < e.length; a++) r += e[a] * (t[a] || 0);
                return r;
            })
        );
    return (1 === r && (o = o[0]), 1 === a) ? o.map((e) => e[0]) : o;
}
r.d(t, {
    Z: function () {
        return a;
    }
});
