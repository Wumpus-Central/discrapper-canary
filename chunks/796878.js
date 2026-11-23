var l = n(477900);
n(582128);
var o = n(517352),
    a = n(683063),
    r = n(641436),
    i = n(807098),
    d = n(92551),
    s = n(792996),
    u = n(472530);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { children: t } = e,
                n = (0, r.uF)(o.oW.PREMIUM_TAB_TOOLTIP),
                p = n?.surface,
                c = (0, i.T)(p?.asset);
            if (null == p || null == n) return t;
            let b = n.getFormatVariableValues(s.intl.currentLocale),
                _ = (0, d.d)(p.body, b);
            if (!_.ok) return t;
            let m = (0, d.d)(p.header, b);
            return m.ok
                ? (0, l.jsx)(a.u, {
                      title: m.content,
                      body: _.content,
                      asset: null != c ? (0, l.jsx)("img", { src: c, className: u.L, alt: "" }) : void 0,
                      assetSize: 80,
                      padding: "lg",
                      position: "right",
                      asContainer: !0,
                      children: (0, l.jsx)("div", { children: t }),
                  })
                : t;
        },
    },
);
