n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(311907),
    s = n(939249),
    d = n(834730),
    o = n(865116),
    c = n(147925),
    u = n(777148),
    _ = n(797982);
let m = (e) => {
        let { child: t, onClick: n, nodeMap: a } = e,
            [m, h] = t,
            g = (0, r.bG)([o.Ay], () => o.Ay.get("iar_show_report_sub_type_labels")),
            p = a[h],
            x = p?.report_type;
        return (0, l.jsxs)(s.D, {
            className: i()(_.Zm, u.lD),
            onClick: () => n(t),
            children: [
                (0, l.jsxs)("div", {
                    className: _.OH,
                    children: [
                        (0, l.jsx)(d.E, { className: _.ix, variant: "text-md/normal", children: m }),
                        g &&
                            null != x &&
                            (0, l.jsx)(d.E, {
                                className: _.Z$,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: x,
                            }),
                    ],
                }),
                (0, l.jsx)(c.A, { className: _._2, direction: c.A.Directions.RIGHT }),
            ],
        });
    },
    h = (e) => {
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
