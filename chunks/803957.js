n.d(t, { A: () => _ });
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(311907),
    s = n(397927),
    d = n(865116),
    o = n(147925),
    u = n(212335),
    c = n(357905);
let m = (e) => {
        let { child: t, onClick: n, nodeMap: a } = e,
            [m, _] = t,
            x = (0, r.bG)([d.Ay], () => d.Ay.get("iar_show_report_sub_type_labels")),
            g = a[_],
            h = g?.report_type;
        return (0, l.jsxs)(s.DUT, {
            className: i()(c.Zm, u.lD),
            onClick: () => n(t),
            children: [
                (0, l.jsxs)("div", {
                    className: c.OH,
                    children: [
                        (0, l.jsx)(s.Text, { className: c.ix, variant: "text-md/semibold", children: m }),
                        x &&
                            null != h &&
                            (0, l.jsx)(s.Text, {
                                className: c.Z$,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: h,
                            }),
                    ],
                }),
                (0, l.jsx)(o.A, { className: c._2, direction: o.A.Directions.RIGHT }),
            ],
        });
    },
    _ = (e) => {
        let {
            node: { children: t },
            onSelectChild: n,
            nodeMap: a,
        } = e;
        if (null == t || 0 === t.length) return null;
        let i = t.map((e) => {
            let [t, i] = e;
            return (0, l.jsx)(m, { child: e, onClick: n, nodeMap: a }, `${t}+${i}`);
        });
        return (0, l.jsx)("div", { className: u.E8, children: i });
    };
