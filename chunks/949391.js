t.d(e, { default: () => E });
var a = t(54381),
    i = t(473749),
    r = t(442837),
    s = t(481060),
    d = t(668274),
    l = t(600164),
    o = t(241209),
    c = t(807693),
    u = t(388032),
    p = t(648441);
function E(n) {
    var e;
    let { eulaId: t, transitionState: E, onClose: g } = n,
        m = (0, r.e7)([c.Z], () => c.Z.getEULA(t));
    i.useEffect(() => {
        (0, d.N)(t);
    }, [t]);
    let f = null != (e = null == m ? void 0 : m.name) ? e : u.intl.string(u.t.ZTNur7),
        h =
            null != m
                ? (0, a.jsx)(o.Z, {
                      children: m.content,
                      className: p.markdown,
                  })
                : (0, a.jsx)(s.$jN, { className: p.spinner });
    return (0, a.jsxs)(s.Y0X, {
        "data-migration-pending": !0,
        transitionState: E,
        size: s.CgR.SMALL,
        "aria-label": f,
        parentComponent: "EULA",
        children: [
            (0, a.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                justify: l.Z.Justify.BETWEEN,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: f,
                    }),
                    (0, a.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        onClick: g,
                    }),
                ],
            }),
            (0, a.jsx)(s.hzk, {
                "data-migration-pending": !0,
                children: h,
            }),
        ],
    });
}
