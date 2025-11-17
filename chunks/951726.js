n.d(t, { b: () => i });
var r = n(752689);
function i(e, t) {
    let { id: n, "aria-label": i, "aria-labelledby": a } = e;
    return (
        (n = (0, r.Me)(n)),
        a && i
            ? (a = [...new Set([n, ...a.trim().split(/\s+/)])].join(" "))
            : a && (a = a.trim().split(/\s+/).join(" ")),
        i || a || !t || (i = t),
        {
            id: n,
            "aria-label": i,
            "aria-labelledby": a,
        }
    );
}
