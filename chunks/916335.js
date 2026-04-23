n.d(t, { Z: () => m });
var i = n(627968),
    s = n(64700),
    l = n(777666),
    a = n(834730),
    r = n(821609),
    o = n(379848),
    d = n(49999),
    u = n(985018),
    c = n(950018);
let g = (e) => {
        let { markAsDismissed: t } = e;
        return (
            s.useEffect(() => t(d.i.UNKNOWN), [t]),
            (0, i.jsx)(l.Lp, { className: c.Ad, text: u.intl.string(u.t.y2b7CA) })
        );
    },
    m = (e) => {
        let { title: t, body: n, img: s, newIndicatorDismissibleContent: l, onClick: d } = e;
        return (0, i.jsxs)("div", {
            className: c.kL,
            children: [
                s,
                (0, i.jsxs)("div", {
                    className: c.FS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: c.TK,
                            children: [
                                (0, i.jsx)(o.Ay, {
                                    contentTypes: [l],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === l ? (0, i.jsx)(g, { markAsDismissed: n }) : null;
                                    },
                                }),
                                (0, i.jsx)(a.E, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, i.jsx)(a.E, { variant: "text-xs/normal", children: n }),
                    ],
                }),
                (0, i.jsx)(r.$, { text: u.intl.string(u.t.vD60Pv), onClick: d }),
            ],
        });
    };
