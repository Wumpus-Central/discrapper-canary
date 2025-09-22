n.d(t, {
    Px: () => l,
    hv: () => c,
});
var r = n(647438),
    i = n(793030),
    a = n(663893);
let o = {
        mass: 1,
        tension: 1000,
        friction: 48,
    },
    s = {
        mass: 1,
        tension: 1200,
        friction: 80,
    },
    l = o;
function c(e, t) {
    let n = e === a.D.ENTERING || e === a.D.ENTERED,
        { reducedMotion: l } = r.useContext(i.Sfi),
        c = n || l.enabled || "subtle" === t ? "scale(1)" : "scale(0.9)";
    return (0, i.q_F)(
        {
            opacity: +!!n,
            transform: c,
            config: n ? o : s,
            delay: 64 * !!n,
        },
        "animate-always",
    );
}
