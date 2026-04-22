"use strict";
i.r(t), i.d(t, { default: () => T });
var r = i(627968),
    l = i(64700),
    n = i(485845),
    a = i(283973),
    s = i(664121),
    o = i(939249),
    c = i(834730),
    u = i(320448),
    d = i(534514),
    _ = i(900797),
    h = i(827734),
    p = i(847374),
    f = i(735991),
    g = i(717048),
    m = i(396533),
    A = i(611371),
    v = i(566615),
    b = i(985018),
    E = i(442793),
    I = i(992595),
    x = i(291071);
function T(e) {
    let { application: t, onSelect: i } = e,
        d = (0, v.i)(),
        { iconURL: _ } = l.useMemo(() => (0, f.X2)(t, { fakeAppIconURL: x, size: 84 }), [t]),
        h = l.useMemo(
            () =>
                [
                    {
                        type: n.b.USER_INSTALL,
                        icon: a.R,
                        title: b.intl.string(b.t.aCg60P),
                        subtitle: b.intl.string(b.t.YeiIUZ),
                        beta: !1,
                    },
                    {
                        type: n.b.GUILD_INSTALL,
                        icon: s.R,
                        title: b.intl.string(b.t.E64YCz),
                        subtitle: b.intl.string(b.t.bbtoKm),
                        beta: !1,
                    },
                ].filter((e) => t.integrationTypesConfig?.[e.type]?.oauth2InstallParams != null),
            [t.integrationTypesConfig],
        );
    return (0, r.jsxs)("div", {
        className: E.kL,
        children: [
            (0, r.jsxs)("header", {
                id: d,
                className: E.wx,
                children: [
                    (0, r.jsx)(g.A, { src: _, className: E.Z2, rendersPlaceholder: !0 }),
                    (0, r.jsx)(y, { application: t }),
                    (0, r.jsx)(C, { application: t }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: E.Ge,
                children: h.map((e) =>
                    (0, r.jsxs)(
                        o.D,
                        {
                            tag: "li",
                            className: E.nM,
                            onClick: () => i(e.type),
                            children: [
                                (0, r.jsx)(e.icon, { size: "md", color: "currentColor", className: E.hc }),
                                (0, r.jsxs)("div", {
                                    className: E.bL,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: E.pt,
                                            children: [
                                                (0, r.jsx)(c.E, {
                                                    variant: "text-md/medium",
                                                    color: "interactive-text-active",
                                                    children: e.title,
                                                }),
                                                (0, r.jsx)(c.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-muted",
                                                    children: e.subtitle,
                                                }),
                                            ],
                                        }),
                                        e.beta && (0, r.jsx)(A.A, {}),
                                        (0, r.jsx)(u._, { size: "md", color: "currentColor", className: E.gN }),
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
function C(e) {
    let { application: t } = e,
        i = t.description;
    return null == i || 0 === i.length
        ? null
        : (0, r.jsx)("div", {
              className: E.wt,
              children: (0, r.jsx)("div", {
                  className: E.bH,
                  children: null != i && i.length > 0 ? (0, r.jsx)(S, { description: i }) : null,
              }),
          });
}
function y(e) {
    let { application: t } = e,
        i = t.name,
        l = (0, f.b7)(t);
    return (0, r.jsxs)("div", {
        className: E.gn,
        children: [
            (0, r.jsx)(d.D, { variant: "heading-xl/extrabold", lineClamp: 1, children: i }),
            l
                ? (0, r.jsx)("div", {
                      className: E.s3,
                      children: (0, r.jsx)(c.E, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: b.intl.string(b.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
function S(e) {
    let { description: t } = e,
        [n, a] = l.useState(!0);
    l.useLayoutEffect(() => a(!1), []);
    let s = l.useMemo(() => {
            let { parseBioReact: e } = i(713804);
            return e(t);
        }, [t]),
        {
            ref: u,
            lineHeight: d,
            lineCount: f,
        } = (function () {
            let e = l.useRef(null),
                [t, i] = l.useState(null),
                [r, n] = l.useState(null);
            return (
                l.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let r = parseInt(getComputedStyle(t).lineHeight);
                    isNaN(r) || (i(r), n(Math.floor(t.clientHeight / r)));
                }, []),
                { ref: e, lineHeight: t, lineCount: r }
            );
        })(),
        g = l.useMemo(() => {
            if (null == d || null == f) return { key: 0 };
            let e = d * f;
            return { key: 1, minHeightOverride: Math.min(e, 3 * d), maxHeightOverride: e };
        }, [f, d]),
        { ref: A, isTransitioning: v, onTransitionEnd: x } = (0, m.A)({ isExpanded: n, ...g }),
        T = n || v;
    return (0, r.jsxs)("div", {
        className: E.iQ,
        children: [
            (0, r.jsx)("div", {
                ref: A,
                className: E.ZT,
                onTransitionEnd: x,
                children: (0, r.jsx)(c.E, {
                    ref: u,
                    className: I.PT,
                    variant: "text-sm/medium",
                    lineClamp: T ? void 0 : 3,
                    style: { maxHeight: T ? void 0 : g.minHeightOverride },
                    children: s,
                }),
            }),
            null != f && f > 3
                ? (0, r.jsxs)(o.D, {
                      className: E.lP,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, r.jsx)(c.E, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: T ? b.intl.string(b.t.u4YJ8g) : b.intl.string(b.t["N/tajD"]),
                          }),
                          T
                              ? (0, r.jsx)(_.t, { size: "sm", color: h.A.colors.TEXT_BRAND })
                              : (0, r.jsx)(p.a, { size: "sm", color: h.A.colors.TEXT_BRAND }),
                      ],
                  })
                : null,
        ],
    });
}
