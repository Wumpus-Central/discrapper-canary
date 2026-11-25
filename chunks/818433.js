var n = l(477900),
    a = l(582128),
    i = l(503698),
    r = l.n(i),
    s = l(95477),
    o = l(534514),
    c = l(939249),
    u = l(866665),
    d = l(408278),
    m = l(22231),
    f = l(834730),
    h = l(718812),
    p = l(923904);
(l(696016), l(600253));
var x = l(792996),
    v = l(880275);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { variant: t, className: l, containerClassName: i, asHeading: g = !1 } = e,
                { clip: b, clipName: j, setClipName: y } = (0, p.T)(),
                C = (0, h.h)(b),
                [N, k] = a.useState(!1);
            if (N)
                return (0, n.jsx)(s.k, {
                    autoFocus: !0,
                    "aria-label": x.intl.string(x.t.SJKc5n),
                    value: j,
                    placeholder: C,
                    minLength: 0,
                    maxLength: 200,
                    onChange: (e) => y("" === e ? void 0 : e),
                    onBlur: () => k(!1),
                    onKeyDown: (e) => {
                        ("Enter" === e.key || "Escape" === e.key) && (e.stopPropagation(), e.currentTarget.blur());
                    },
                });
            let E = null != j && "" !== j ? j : C;
            return g
                ? (0, n.jsxs)("div", {
                      className: r()(v.R_, i),
                      children: [
                          (0, n.jsx)(o.D, {
                              variant: t,
                              color: "text-strong",
                              className: l,
                              children: (0, n.jsx)(c.D, {
                                  tag: "span",
                                  tabIndex: -1,
                                  className: v.N4,
                                  onClick: () => k(!0),
                                  children: E,
                              }),
                          }),
                          (0, n.jsx)(u.m, {
                              text: x.intl.string(x.t.bt75uw),
                              children: (0, n.jsx)(d.K, {
                                  icon: m.PencilIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": x.intl.string(x.t.bt75uw),
                                  onClick: () => k(!0),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsxs)(c.D, {
                      className: r()(v.x6, i),
                      onClick: () => k(!0),
                      children: [
                          (0, n.jsx)(f.E, { variant: t, color: "text-default", className: l, children: E }),
                          (0, n.jsx)(m.PencilIcon, { className: v.IZ, size: "xs", color: "currentColor" }),
                      ],
                  });
        },
    },
);
