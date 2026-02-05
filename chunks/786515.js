n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    a = n(397927),
    r = n(318937),
    o = n(533117),
    d = n(709562),
    c = n(60504),
    u = n(985018);
function h() {
    let e = (0, s.bG)([o.A], () => !o.A.visibleOverlayCanvas),
        t = l.useRef(null);
    return (0, i.jsx)(c.A, {
        renderPopout: () => null,
        popoutTargetRef: t,
        children: (n) => {
            let { ...l } = n;
            return (0, i.jsx)(d.A, {
                ...l,
                buttonRef: t,
                label: u.intl.string(u.t.Cuo44L),
                isActive: e,
                iconComponent: a.bMW,
                onClick: r.bI,
            });
        },
    });
}
