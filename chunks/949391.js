t.d(n, { default: () => p });
var r = t(54381),
    i = t(473749),
    a = t(442837),
    s = t(481060),
    l = t(668274),
    o = t(600164),
    c = t(241209),
    d = t(807693),
    u = t(388032),
    E = t(608981);
function p(e) {
    var n;
    let { eulaId: t, transitionState: p, onClose: f } = e,
        h = (0, a.e7)([d.Z], () => d.Z.getEULA(t));
    i.useEffect(() => {
        (0, l.N)(t);
    }, [t]);
    let S = null != (n = null == h ? void 0 : h.name) ? n : u.intl.string(u.t.ZTNur7),
        j =
            null != h
                ? (0, r.jsx)(c.Z, {
                      children: h.content,
                      className: E.markdown,
                  })
                : (0, r.jsx)(s.$jN, { className: E.spinner });
    return (0, r.jsxs)(s.Y0X, {
        transitionState: p,
        size: s.CgR.SMALL,
        "aria-label": S,
        parentComponent: "EULA",
        children: [
            (0, r.jsxs)(s.xBx, {
                justify: o.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: S,
                    }),
                    (0, r.jsx)(s.olH, { onClick: f }),
                ],
            }),
            (0, r.jsx)(s.hzk, { children: j }),
        ],
    });
}
