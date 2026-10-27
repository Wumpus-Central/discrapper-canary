r.d(n, { A: () => A });
var t = r(17928),
    u = r(91242),
    a = r(64656),
    l = r(652215),
    i = r(165610),
    d = r(105292);
function A(e) {
    let n = (0, t.bG)(
            [u.A],
            () => {
                let n = e.type === l.rbe.GUILD_APP ? (0, i.HD)(e) : null;
                return (null != n ? u.A.getFramesForSurface(n)[0]?.id : void 0) ?? null;
            },
            [e],
        ),
        r = (0, a.A)(n),
        { audible: A, userMuted: s } = (0, t.cf)(
            [u.A],
            () => {
                let e = (0, i.ny)(u.A.getFrame(n))?.data;
                return { audible: e?.audible === !0, userMuted: e?.userMuted === !0 };
            },
            [n],
        );
    return { frameId: n, runningLabel: r ? d.intl.string(d.t["1yCkJY"]) : null, audible: A, userMuted: s };
}
