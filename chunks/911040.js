r.d(e, { A: () => d });
var t = r(17928),
    u = r(91242),
    a = r(64656),
    i = r(652215),
    l = r(165610),
    A = r(105292);
function d(n) {
    let e = (0, t.bG)(
            [u.A],
            () => {
                let e = n.type === i.rbe.GUILD_APP ? (0, l.HD)(n) : null;
                return (null != e ? u.A.getFramesForSurface(e)[0]?.id : void 0) ?? null;
            },
            [n],
        ),
        r = (0, a.A)(e);
    return { frameId: e, runningLabel: r ? A.intl.string(A.t["1yCkJY"]) : null };
}
