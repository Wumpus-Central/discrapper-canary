n.d(t, { D: () => l });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(525876);
function l(e) {
    let { graphic: t, layout: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: i } = t;
                return (0, r.jsx)(o.FhE, {
                    className: a()(s.roleDot, { [s.roleDotInline]: "inline" === n }),
                    background: !1,
                    color: i,
                });
            case "avatar":
                let { src: l } = t;
                return (0, r.jsx)(o.qEK, {
                    size: o.EFr.SIZE_16,
                    src: l,
                    "aria-hidden": !0,
                });
            default:
                return null;
        }
    let c = "inline" === n ? "xs" : "sm",
        u = t;
    return (0, r.jsx)(u, { size: c });
}
