(l.r(t), l.d(t, { default: () => E }));
var i = l(477900),
    s = l(582128),
    n = l(485845),
    r = l(283973),
    a = l(664121),
    c = l(939249),
    o = l(834730),
    d = l(320448),
    u = l(534514),
    m = l(900797),
    h = l(661531),
    x = l(847374),
    j = l(735991),
    p = l(717048),
    g = l(396533),
    N = l(611371),
    f = l(566615),
    b = l(105292),
    v = l(898514),
    y = l(165648),
    C = l(291071);
function E(e) {
    let { application: t, onSelect: l } = e,
        u = (0, f.i)(),
        { iconURL: m } = s.useMemo(() => (0, j.X2)(t, { fakeAppIconURL: C, size: 84 }), [t]),
        h = s.useMemo(
            () =>
                [
                    {
                        type: n.b.USER_INSTALL,
                        icon: r.R,
                        title: b.intl.string(b.t.aCg60P),
                        subtitle: b.intl.string(b.t.YeiIUZ),
                        beta: !1,
                    },
                    {
                        type: n.b.GUILD_INSTALL,
                        icon: a.R,
                        title: b.intl.string(b.t.E64YCz),
                        subtitle: b.intl.string(b.t.bbtoKm),
                        beta: !1,
                    },
                ].filter((e) => t.integrationTypesConfig?.[e.type]?.oauth2InstallParams != null),
            [t.integrationTypesConfig],
        );
    return (0, i.jsxs)("div", {
        className: v.kL,
        children: [
            (0, i.jsxs)("header", {
                id: u,
                className: v.wx,
                children: [
                    (0, i.jsx)(p.A, { src: m, className: v.Z2, rendersPlaceholder: !0 }),
                    (0, i.jsx)(T, { application: t }),
                    (0, i.jsx)(L, { application: t }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: v.Ge,
                children: h.map((e) =>
                    (0, i.jsxs)(
                        c.D,
                        {
                            tag: "li",
                            className: v.nM,
                            onClick: () => l(e.type),
                            children: [
                                (0, i.jsx)(e.icon, { size: "md", color: "currentColor", className: v.hc }),
                                (0, i.jsxs)("div", {
                                    className: v.bL,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: v.pt,
                                            children: [
                                                (0, i.jsx)(o.E, {
                                                    variant: "body-md/medium",
                                                    color: "interactive-text-active",
                                                    children: e.title,
                                                }),
                                                (0, i.jsx)(o.E, {
                                                    variant: "body-xs/medium",
                                                    color: "text-muted",
                                                    children: e.subtitle,
                                                }),
                                            ],
                                        }),
                                        e.beta && (0, i.jsx)(N.A, {}),
                                        (0, i.jsx)(d._, { size: "md", color: "currentColor", className: v.gN }),
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
function L(e) {
    let { application: t } = e,
        l = t.description;
    return null == l || 0 === l.length
        ? null
        : (0, i.jsx)("div", {
              className: v.wt,
              children: (0, i.jsx)("div", {
                  className: v.bH,
                  children: null != l && l.length > 0 ? (0, i.jsx)(k, { description: l }) : null,
              }),
          });
}
function T(e) {
    let { application: t } = e,
        l = t.name,
        s = (0, j.b7)(t);
    return (0, i.jsxs)("div", {
        className: v.gn,
        children: [
            (0, i.jsx)(u.D, { variant: "heading-xl/semibold", lineClamp: 1, children: l }),
            s
                ? (0, i.jsx)("div", {
                      className: v.s3,
                      children: (0, i.jsx)(o.E, {
                          variant: "body-xs/medium",
                          color: "text-default",
                          children: b.intl.string(b.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
function k(e) {
    let { description: t } = e,
        [n, r] = s.useState(!0);
    s.useLayoutEffect(() => r(!1), []);
    let a = s.useMemo(() => {
            let { parseBioReact: e } = l(713804);
            return e(t);
        }, [t]),
        {
            ref: d,
            lineHeight: u,
            lineCount: j,
        } = (function () {
            let e = s.useRef(null),
                [t, l] = s.useState(null),
                [i, n] = s.useState(null);
            return (
                s.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let i = parseInt(getComputedStyle(t).lineHeight);
                    isNaN(i) || (l(i), n(Math.floor(t.clientHeight / i)));
                }, []),
                { ref: e, lineHeight: t, lineCount: i }
            );
        })(),
        p = s.useMemo(() => {
            if (null == u || null == j) return { key: 0 };
            let e = u * j;
            return { key: 1, minHeightOverride: Math.min(e, 3 * u), maxHeightOverride: e };
        }, [j, u]),
        { ref: N, isTransitioning: f, onTransitionEnd: C } = (0, g.A)({ isExpanded: n, ...p }),
        E = n || f;
    return (0, i.jsxs)("div", {
        className: v.iQ,
        children: [
            (0, i.jsx)("div", {
                ref: N,
                className: v.ZT,
                onTransitionEnd: C,
                children: (0, i.jsx)(o.E, {
                    ref: d,
                    className: y.PT,
                    variant: "body-sm/medium",
                    lineClamp: E ? void 0 : 3,
                    style: { maxHeight: E ? void 0 : p.minHeightOverride },
                    children: a,
                }),
            }),
            null != j && j > 3
                ? (0, i.jsxs)(c.D, {
                      className: v.lP,
                      onClick: () => r((e) => !e),
                      children: [
                          (0, i.jsx)(o.E, {
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              children: E ? b.intl.string(b.t.u4YJ8g) : b.intl.string(b.t["N/tajD"]),
                          }),
                          E
                              ? (0, i.jsx)(m.t, { size: "sm", color: h.A.colors.TEXT_BRAND })
                              : (0, i.jsx)(x.a, { size: "sm", color: h.A.colors.TEXT_BRAND }),
                      ],
                  })
                : null,
        ],
    });
}
