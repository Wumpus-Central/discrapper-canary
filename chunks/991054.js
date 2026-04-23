l.r(t), l.d(t, { default: () => y });
var n = l(627968),
    s = l(64700),
    i = l(485845),
    r = l(283973),
    a = l(664121),
    c = l(939249),
    u = l(834730),
    o = l(320448),
    d = l(534514),
    h = l(900797),
    f = l(827734),
    m = l(847374),
    x = l(735991),
    g = l(717048),
    p = l(396533),
    b = l(611371),
    v = l(566615),
    j = l(985018),
    N = l(442793),
    A = l(992595),
    _ = l(291071);
function y(e) {
    let { application: t, onSelect: l } = e,
        d = (0, v.i)(),
        { iconURL: h } = s.useMemo(() => (0, x.X2)(t, { fakeAppIconURL: _, size: 84 }), [t]),
        f = s.useMemo(
            () =>
                [
                    {
                        type: i.b.USER_INSTALL,
                        icon: r.R,
                        title: j.intl.string(j.t.aCg60P),
                        subtitle: j.intl.string(j.t.YeiIUZ),
                        beta: !1,
                    },
                    {
                        type: i.b.GUILD_INSTALL,
                        icon: a.R,
                        title: j.intl.string(j.t.E64YCz),
                        subtitle: j.intl.string(j.t.bbtoKm),
                        beta: !1,
                    },
                ].filter((e) => t.integrationTypesConfig?.[e.type]?.oauth2InstallParams != null),
            [t.integrationTypesConfig],
        );
    return (0, n.jsxs)("div", {
        className: N.kL,
        children: [
            (0, n.jsxs)("header", {
                id: d,
                className: N.wx,
                children: [
                    (0, n.jsx)(g.A, { src: h, className: N.Z2, rendersPlaceholder: !0 }),
                    (0, n.jsx)(w, { application: t }),
                    (0, n.jsx)(C, { application: t }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: N.Ge,
                children: f.map((e) =>
                    (0, n.jsxs)(
                        c.D,
                        {
                            tag: "li",
                            className: N.nM,
                            onClick: () => l(e.type),
                            children: [
                                (0, n.jsx)(e.icon, { size: "md", color: "currentColor", className: N.hc }),
                                (0, n.jsxs)("div", {
                                    className: N.bL,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: N.pt,
                                            children: [
                                                (0, n.jsx)(u.E, {
                                                    variant: "text-md/medium",
                                                    color: "interactive-text-active",
                                                    children: e.title,
                                                }),
                                                (0, n.jsx)(u.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-muted",
                                                    children: e.subtitle,
                                                }),
                                            ],
                                        }),
                                        e.beta && (0, n.jsx)(b.A, {}),
                                        (0, n.jsx)(o._, { size: "md", color: "currentColor", className: N.gN }),
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
        l = t.description;
    return null == l || 0 === l.length
        ? null
        : (0, n.jsx)("div", {
              className: N.wt,
              children: (0, n.jsx)("div", {
                  className: N.bH,
                  children: null != l && l.length > 0 ? (0, n.jsx)(L, { description: l }) : null,
              }),
          });
}
function w(e) {
    let { application: t } = e,
        l = t.name,
        s = (0, x.b7)(t);
    return (0, n.jsxs)("div", {
        className: N.gn,
        children: [
            (0, n.jsx)(d.D, { variant: "heading-xl/extrabold", lineClamp: 1, children: l }),
            s
                ? (0, n.jsx)("div", {
                      className: N.s3,
                      children: (0, n.jsx)(u.E, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: j.intl.string(j.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
function L(e) {
    let { description: t } = e,
        [i, r] = s.useState(!0);
    s.useLayoutEffect(() => r(!1), []);
    let a = s.useMemo(() => {
            let { parseBioReact: e } = l(713804);
            return e(t);
        }, [t]),
        {
            ref: o,
            lineHeight: d,
            lineCount: x,
        } = (function () {
            let e = s.useRef(null),
                [t, l] = s.useState(null),
                [n, i] = s.useState(null);
            return (
                s.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let n = parseInt(getComputedStyle(t).lineHeight);
                    isNaN(n) || (l(n), i(Math.floor(t.clientHeight / n)));
                }, []),
                { ref: e, lineHeight: t, lineCount: n }
            );
        })(),
        g = s.useMemo(() => {
            if (null == d || null == x) return { key: 0 };
            let e = d * x;
            return { key: 1, minHeightOverride: Math.min(e, 3 * d), maxHeightOverride: e };
        }, [x, d]),
        { ref: b, isTransitioning: v, onTransitionEnd: _ } = (0, p.A)({ isExpanded: i, ...g }),
        y = i || v;
    return (0, n.jsxs)("div", {
        className: N.iQ,
        children: [
            (0, n.jsx)("div", {
                ref: b,
                className: N.ZT,
                onTransitionEnd: _,
                children: (0, n.jsx)(u.E, {
                    ref: o,
                    className: A.PT,
                    variant: "text-sm/medium",
                    lineClamp: y ? void 0 : 3,
                    style: { maxHeight: y ? void 0 : g.minHeightOverride },
                    children: a,
                }),
            }),
            null != x && x > 3
                ? (0, n.jsxs)(c.D, {
                      className: N.lP,
                      onClick: () => r((e) => !e),
                      children: [
                          (0, n.jsx)(u.E, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: y ? j.intl.string(j.t.u4YJ8g) : j.intl.string(j.t["N/tajD"]),
                          }),
                          y
                              ? (0, n.jsx)(h.t, { size: "sm", color: f.A.colors.TEXT_BRAND })
                              : (0, n.jsx)(m.a, { size: "sm", color: f.A.colors.TEXT_BRAND }),
                      ],
                  })
                : null,
        ],
    });
}
