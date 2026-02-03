n.d(t, {
    A: () => m,
}),
    n(896048),
    n(114821),
    n(339614),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(92674),
    o = n(827734),
    c = n(397927),
    d = n(147925),
    u = n(276777);

function g(e) {
    let { checked: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: u.nM,
        children: [
            (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "interactive-text-active",
                className: u.qg,
                children: n,
            }),
            t
                ? (0, r.jsx)(c.yr3, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                      className: s()(u.aL, u.xp),
                  })
                : (0, r.jsx)("div", {
                      className: s()(u.aL, u.VL),
                  }),
        ],
    });
}

function m(e) {
    let { title: t, children: n, buttonLabel: l, buttonCallback: s, disabled: o } = e,
        [m, p] = i.useState(!1),
        f = n.flatMap((e) => e.items.map((e) => e.completed)),
        h = f.filter((e) => e).length / f.length,
        b = (0, c.zhh)({
            width: "".concat(100 * h, "%"),
        });
    return (0, r.jsxs)("div", {
        className: u.kL,
        children: [
            (0, r.jsxs)(c.DUT, {
                className: u.jr,
                onClick: () => p((e) => !e),
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        className: u.TK,
                        children: t,
                    }),
                    (0, r.jsx)(d.A, {
                        direction: m ? d.A.Directions.DOWN : d.A.Directions.UP,
                        className: u.D,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u.ux,
                children: (0, r.jsx)(a.animated.div, {
                    className: u.zZ,
                    style: b,
                }),
            }),
            !m &&
                n.map((e, t) => {
                    let { title: n, items: l } = e;
                    return (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                t > 0 &&
                                    (0, r.jsx)(c.cGx, {
                                        className: u.yF,
                                    }),
                                (0, r.jsx)("div", {
                                    className: u.p8,
                                    children: (0, r.jsx)(c.D0$, {
                                        label: n,
                                        children: l.map((e, t) =>
                                            (0, r.jsx)(
                                                g,
                                                {
                                                    children: e.description,
                                                    checked: e.completed,
                                                },
                                                t,
                                            ),
                                        ),
                                    }),
                                }),
                            ],
                        },
                        t,
                    );
                }),
            null !== l &&
                "" !== l &&
                null !== s &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.cGx, {
                            className: u.yF,
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: u.x6,
                            children: (0, r.jsx)(c.Button, {
                                variant: "primary",
                                size: "sm",
                                text: l,
                                onClick: s,
                                disabled: 1 !== h || o,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
