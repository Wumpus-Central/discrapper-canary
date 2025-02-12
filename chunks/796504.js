t.d(n, { default: () => p });
var r = t(200651),
    l = t(192379),
    a = t(442837),
    o = t(481060),
    i = t(668274),
    s = t(600164),
    c = t(241209),
    u = t(807693),
    d = t(388032),
    h = t(616386);
function p(e) {
    var n;
    let { eulaId: t, transitionState: p, onClose: f } = e,
        g = (0, a.e7)([u.Z], () => u.Z.getEULA(t));
    l.useEffect(() => {
        (0, i.N)(t);
    }, [t]);
    let m = null !== (n = null == g ? void 0 : g.name) && void 0 !== n ? n : d.intl.string(d.t.ZTNur6),
        k =
            null != g
                ? (0, r.jsx)(c.Z, {
                      children: g.content,
                      className: h.markdown
                  })
                : (0, r.jsx)(o.$jN, { className: h.spinner });
    return (0, r.jsxs)(o.Y0X, {
        transitionState: p,
        size: o.CgR.SMALL,
        'aria-label': m,
        children: [
            (0, r.jsxs)(o.xBx, {
                justify: s.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: m
                    }),
                    (0, r.jsx)(o.olH, { onClick: f })
                ]
            }),
            (0, r.jsx)(o.hzk, { children: k })
        ]
    });
}
