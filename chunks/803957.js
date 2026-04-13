n.d(t, { A: () => m });
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(311907),
    s = n(397927),
    d = n(865116),
    o = n(147925),
    c = n(687404),
    u = n(246478);
let _ = (e) => {
        let { child: t, onClick: n, nodeMap: l } = e,
            [_, m] = t,
            p = (0, r.bG)([d.Ay], () => d.Ay.get("iar_show_report_sub_type_labels")),
            h = l[m],
            x = h?.report_type;
        return (0, a.jsxs)(s.DUT, {
            className: i()(u.Zm, c.lD),
            onClick: () => n(t),
            children: [
                (0, a.jsxs)("div", {
                    className: u.OH,
                    children: [
                        (0, a.jsx)(s.Text, { className: u.ix, variant: "text-md/semibold", children: _ }),
                        p &&
                            null != x &&
                            (0, a.jsx)(s.Text, {
                                className: u.Z$,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: x,
                            }),
                    ],
                }),
                (0, a.jsx)(o.A, { className: u._2, direction: o.A.Directions.RIGHT }),
            ],
        });
    },
    m = (e) => {
        let {
            node: { children: t },
            onSelectChild: n,
            nodeMap: l,
        } = e;
        if (null == t || 0 === t.length) return null;
        let i = t.map((e) => {
            let [t, i] = e;
            return (0, a.jsx)(_, { child: e, onClick: n, nodeMap: l }, `${t}+${i}`);
        });
        return (0, a.jsx)("div", { className: c.E8, children: i });
    };
