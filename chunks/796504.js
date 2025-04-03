r.d(t, { default: () => f });
var n = r(200651),
    l = r(192379),
    a = r(442837),
    o = r(481060),
    c = r(668274),
    i = r(600164),
    s = r(241209),
    u = r(807693),
    d = r(388032),
    p = r(539752);
function f(e) {
    var t;
    let { eulaId: r, transitionState: f, onClose: h } = e,
        g = (0, a.e7)([u.Z], () => u.Z.getEULA(r));
    l.useEffect(() => {
        (0, c.N)(r);
    }, [r]);
    let b = null != (t = null == g ? void 0 : g.name) ? t : d.NW.string(d.t.ZTNur6),
        m =
            null != g
                ? (0, n.jsx)(s.Z, {
                      children: g.content,
                      className: p.markdown
                  })
                : (0, n.jsx)(o.$jN, { className: p.spinner });
    return (0, n.jsxs)(o.Y0X, {
        transitionState: f,
        size: o.CgR.SMALL,
        'aria-label': b,
        children: [
            (0, n.jsxs)(o.xBx, {
                justify: i.Z.Justify.BETWEEN,
                children: [
                    (0, n.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: b
                    }),
                    (0, n.jsx)(o.olH, { onClick: h })
                ]
            }),
            (0, n.jsx)(o.hzk, { children: m })
        ]
    });
}
