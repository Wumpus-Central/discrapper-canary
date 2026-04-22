n.d(t, { A: () => _ });
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    i = n(97808),
    s = n(778712),
    o = n(834730),
    c = n(831544),
    d = n(985018),
    u = n(63892);
function _(e) {
    let { guild: t, speakers: n, speakerCount: l, className: _ } = e,
        h = n.slice(0, 5),
        p = h.map((e) =>
            (0, a.jsxs)(
                "div",
                {
                    className: u.dq,
                    children: [
                        (0, a.jsx)(i.eu, {
                            src: e?.user?.getAvatarURL(t.id, 20),
                            size: s._3.SIZE_20,
                            className: u.my,
                            "aria-label": `${e?.userNick}-avatar`,
                        }),
                        (0, a.jsx)("div", {
                            className: u.CU,
                            children: (0, a.jsx)(o.E, {
                                color: "text-default",
                                variant: "text-sm/normal",
                                className: u.br,
                                children: e?.userNick,
                            }),
                        }),
                    ],
                },
                e?.user?.id,
            ),
        ),
        f = l - h.length;
    return (0, a.jsxs)("div", {
        className: r()(u.Vg, _),
        children: [
            p,
            f > 0 &&
                (0, a.jsxs)("div", {
                    className: u.dq,
                    children: [
                        (0, a.jsx)("div", {
                            className: u.Ko,
                            children: (0, a.jsx)(c.c, { size: "custom", color: "currentColor", height: 12 }),
                        }),
                        (0, a.jsx)(o.E, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            className: u.br,
                            children: d.intl.format(d.t["185ggO"], { count: f }),
                        }),
                    ],
                }),
        ],
    });
}
