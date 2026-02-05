"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    a = n(485845),
    s = n(397927),
    o = n(735991),
    l = n(717048),
    u = n(396533),
    c = n(611371),
    d = n(566615),
    _ = n(985018),
    f = n(358412),
    p = n(206314),
    h = n(291071);
let m = 84;
function g(e) {
    let { application: t, onSelect: n } = e,
        u = (0, d.i)(),
        { iconURL: p } = i.useMemo(() => (0, o.X2)(t, { fakeAppIconURL: h, size: m }), [t]),
        g = i.useMemo(
            () =>
                [
                    {
                        type: a.b.USER_INSTALL,
                        icon: s.Rvf,
                        title: _.intl.string(_.t.aCg60P),
                        subtitle: _.intl.string(_.t.YeiIUZ),
                        beta: !1,
                    },
                    {
                        type: a.b.GUILD_INSTALL,
                        icon: s.RR9,
                        title: _.intl.string(_.t.E64YCz),
                        subtitle: _.intl.string(_.t.bbtoKm),
                        beta: !1,
                    },
                ].filter((e) => t.integrationTypesConfig?.[e.type]?.oauth2InstallParams != null),
            [t.integrationTypesConfig],
        );
    return (0, r.jsxs)("div", {
        className: f.kL,
        children: [
            (0, r.jsxs)("header", {
                id: u,
                className: f.wx,
                children: [
                    (0, r.jsx)(l.A, { src: p, className: f.Z2, rendersPlaceholder: !0 }),
                    (0, r.jsx)(A, { application: t }),
                    (0, r.jsx)(E, { application: t }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: f.Ge,
                children: g.map((e) =>
                    (0, r.jsxs)(
                        s.DUT,
                        {
                            tag: "li",
                            className: f.nM,
                            onClick: () => n(e.type),
                            children: [
                                (0, r.jsx)(e.icon, { size: "md", color: "currentColor", className: f.hc }),
                                (0, r.jsxs)("div", {
                                    className: f.bL,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: f.pt,
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
                                        e.beta && (0, r.jsx)(c.A, {}),
                                        (0, r.jsx)(s._BQ, { size: "md", color: "currentColor", className: f.gN }),
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
function E(e) {
    let { application: t } = e,
        n = t.description;
    return null == n || 0 === n.length
        ? null
        : (0, r.jsx)("div", {
              className: f.wt,
              children: (0, r.jsx)("div", {
                  className: f.bH,
                  children: null != n && n.length > 0 ? (0, r.jsx)(T, { description: n }) : null,
              }),
          });
}
function A(e) {
    let { application: t } = e,
        n = t.name,
        i = (0, o.b7)(t);
    return (0, r.jsxs)("div", {
        className: f.gn,
        children: [
            (0, r.jsx)(s.Heading, { variant: "heading-xl/extrabold", lineClamp: 1, children: n }),
            i
                ? (0, r.jsx)("div", {
                      className: f.s3,
                      children: (0, r.jsx)(s.Text, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: _.intl.string(_.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
let I = 3;
function T(e) {
    let { description: t } = e,
        [a, o] = i.useState(!0);
    i.useLayoutEffect(() => o(!1), []);
    let l = i.useMemo(() => {
            let { parseBioReact: e } = n(713804);
            return e(t);
        }, [t]),
        { ref: c, lineHeight: d, lineCount: h } = y(),
        m = i.useMemo(() => {
            if (null == d || null == h) return { key: 0 };
            let e = d * h;
            return { key: 1, minHeightOverride: Math.min(e, I * d), maxHeightOverride: e };
        }, [h, d]),
        { ref: g, isTransitioning: E, onTransitionEnd: A } = (0, u.A)({ isExpanded: a, ...m }),
        T = a || E;
    return (0, r.jsxs)("div", {
        className: f.iQ,
        children: [
            (0, r.jsx)("div", {
                ref: g,
                className: f.ZT,
                onTransitionEnd: A,
                children: (0, r.jsx)(s.Text, {
                    ref: c,
                    className: p.PT,
                    variant: "text-sm/medium",
                    lineClamp: T ? void 0 : I,
                    style: { maxHeight: T ? void 0 : m.minHeightOverride },
                    children: l,
                }),
            }),
            null != h && h > I
                ? (0, r.jsxs)(s.DUT, {
                      className: f.lP,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: T ? _.intl.string(_.t.u4YJ8g) : _.intl.string(_.t["N/tajD"]),
                          }),
                          T
                              ? (0, r.jsx)(s.tN5, { size: "sm", color: s.LU0.colors.TEXT_BRAND })
                              : (0, r.jsx)(s.abt, { size: "sm", color: s.LU0.colors.TEXT_BRAND }),
                      ],
                  })
                : null,
        ],
    });
}
function y() {
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
        { ref: e, lineHeight: t, lineCount: r }
    );
}
