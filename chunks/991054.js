n.d(t, { A: () => b }), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(485845),
    s = n(397927),
    o = n(735991),
    l = n(717048),
    c = n(396533),
    u = n(611371),
    d = n(566615),
    f = n(985018),
    p = n(358412),
    _ = n(206314),
    h = n(291071);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
let E = 84;
function b(e) {
    let { application: t, onSelect: n } = e,
        c = (0, d.i)(),
        { iconURL: _ } = i.useMemo(
            () =>
                (0, o.X2)(t, {
                    fakeAppIconURL: h,
                    size: E,
                }),
            [t],
        ),
        m = i.useMemo(
            () =>
                [
                    {
                        type: a.b.USER_INSTALL,
                        icon: s.Rvf,
                        title: f.intl.string(f.t.aCg60P),
                        subtitle: f.intl.string(f.t.YeiIUZ),
                        beta: !1,
                    },
                    {
                        type: a.b.GUILD_INSTALL,
                        icon: s.RR9,
                        title: f.intl.string(f.t.E64YCz),
                        subtitle: f.intl.string(f.t.bbtoKm),
                        beta: !1,
                    },
                ].filter((e) => {
                    var n, r;
                    return (
                        (null == (r = t.integrationTypesConfig) || null == (n = r[e.type])
                            ? void 0
                            : n.oauth2InstallParams) != null
                    );
                }),
            [t.integrationTypesConfig],
        );
    return (0, r.jsxs)("div", {
        className: p.kL,
        children: [
            (0, r.jsxs)("header", {
                id: c,
                className: p.wx,
                children: [
                    (0, r.jsx)(l.A, {
                        src: _,
                        className: p.Z2,
                        rendersPlaceholder: !0,
                    }),
                    (0, r.jsx)(O, { application: t }),
                    (0, r.jsx)(y, { application: t }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: p.Ge,
                children: m.map((e) =>
                    (0, r.jsxs)(
                        s.DUT,
                        {
                            tag: "li",
                            className: p.nM,
                            onClick: () => n(e.type),
                            children: [
                                (0, r.jsx)(e.icon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: p.hc,
                                }),
                                (0, r.jsxs)("div", {
                                    className: p.bL,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: p.pt,
                                            children: [
                                                (0, r.jsx)(s.Text, {
                                                    variant: "text-md/medium",
                                                    color: "interactive-text-active",
                                                    children: e.title,
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-muted",
                                                    children: e.subtitle,
                                                }),
                                            ],
                                        }),
                                        e.beta && (0, r.jsx)(u.A, {}),
                                        (0, r.jsx)(s._BQ, {
                                            size: "md",
                                            color: "currentColor",
                                            className: p.gN,
                                        }),
                                    ],
                                }),
                            ],
                        },
                        e.type,
                    ),
                ),
            }),
        ],
    });
}
function y(e) {
    let { application: t } = e,
        n = t.description;
    return null == n || 0 === n.length
        ? null
        : (0, r.jsx)("div", {
              className: p.wt,
              children: (0, r.jsx)("div", {
                  className: p.bH,
                  children: null != n && n.length > 0 ? (0, r.jsx)(v, { description: n }) : null,
              }),
          });
}
function O(e) {
    let { application: t } = e,
        n = t.name,
        i = (0, o.b7)(t);
    return (0, r.jsxs)("div", {
        className: p.gn,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-xl/extrabold",
                lineClamp: 1,
                children: n,
            }),
            i
                ? (0, r.jsx)("div", {
                      className: p.s3,
                      children: (0, r.jsx)(s.Text, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: f.intl.string(f.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
let A = 3;
function v(e) {
    let { description: t } = e,
        [a, o] = i.useState(!0);
    i.useLayoutEffect(() => o(!1), []);
    let l = i.useMemo(() => {
            let { parseBioReact: e } = n(713804);
            return e(t);
        }, [t]),
        { ref: u, lineHeight: d, lineCount: h } = S(),
        m = i.useMemo(() => {
            if (null == d || null == h) return { key: 0 };
            let e = d * h;
            return {
                key: 1,
                minHeightOverride: Math.min(e, A * d),
                maxHeightOverride: e,
            };
        }, [h, d]),
        { ref: E, isTransitioning: b, onTransitionEnd: y } = (0, c.A)(g({ isExpanded: a }, m)),
        O = a || b;
    return (0, r.jsxs)("div", {
        className: p.iQ,
        children: [
            (0, r.jsx)("div", {
                ref: E,
                className: p.ZT,
                onTransitionEnd: y,
                children: (0, r.jsx)(s.Text, {
                    ref: u,
                    className: _.PT,
                    variant: "text-sm/medium",
                    lineClamp: O ? void 0 : A,
                    style: { maxHeight: O ? void 0 : m.minHeightOverride },
                    children: l,
                }),
            }),
            null != h && h > A
                ? (0, r.jsxs)(s.DUT, {
                      className: p.lP,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: O ? f.intl.string(f.t.u4YJ8g) : f.intl.string(f.t["N/tajD"]),
                          }),
                          O
                              ? (0, r.jsx)(s.tN5, {
                                    size: "sm",
                                    color: s.LU0.colors.TEXT_BRAND,
                                })
                              : (0, r.jsx)(s.abt, {
                                    size: "sm",
                                    color: s.LU0.colors.TEXT_BRAND,
                                }),
                      ],
                  })
                : null,
        ],
    });
}
function S() {
    let e = i.useRef(null),
        [t, n] = i.useState(null),
        [r, a] = i.useState(null);
    return (
        i.useLayoutEffect(() => {
            let t = e.current;
            if (null === t || 0 === t.clientHeight) return;
            let r = parseInt(getComputedStyle(t).lineHeight);
            isNaN(r) || (n(r), a(Math.floor(t.clientHeight / r)));
        }, []),
        {
            ref: e,
            lineHeight: t,
            lineCount: r,
        }
    );
}
