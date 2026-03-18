n.d(t, { Z: () => u });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(379848),
    r = n(49999),
    o = n(985018),
    d = n(453947);
let c = (e) => {
        let { markAsDismissed: t } = e;
        return (
            s.useEffect(() => t(r.i.UNKNOWN), [t]),
            (0, i.jsx)(l.LpS, { className: d.Ad, text: o.intl.string(o.t.y2b7CA) })
        );
    },
    u = (e) => {
        let { title: t, body: n, img: s, newIndicatorDismissibleContent: r, onClick: u } = e;
        return (0, i.jsxs)("div", {
            className: d.kL,
            children: [
                s,
                (0, i.jsxs)("div", {
                    className: d.FS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: d.TK,
                            children: [
                                (0, i.jsx)(a.Ay, {
                                    contentTypes: [r],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === r ? (0, i.jsx)(c, { markAsDismissed: n }) : null;
                                    },
                                }),
                                (0, i.jsx)(l.Text, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, i.jsx)(l.Text, { variant: "text-xs/normal", children: n }),
                    ],
                }),
                (0, i.jsx)(l.Button, { text: o.intl.string(o.t.vD60Pv), onClick: u }),
            ],
        });
    };
