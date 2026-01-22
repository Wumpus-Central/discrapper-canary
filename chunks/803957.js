n.d(t, { A: () => b }), n(896048);
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(311907),
    s = n(397927),
    o = n(865116),
    c = n(147925),
    d = n(212335),
    u = n(357905);
let m = (e) => {
        let { child: t, onClick: n, nodeMap: r } = e,
            [m, b] = t,
            p = (0, i.bG)([o.Ay], () => o.Ay.get("iar_show_report_sub_type_labels")),
            x = r[b],
            g = null == x ? void 0 : x.report_type;
        return (0, l.jsxs)(s.DUT, {
            className: a()(u.Zm, d.lD),
            onClick: () => n(t),
            children: [
                (0, l.jsxs)("div", {
                    className: u.OH,
                    children: [
                        (0, l.jsx)(s.Text, {
                            className: u.ix,
                            variant: "text-md/semibold",
                            children: m,
                        }),
                        p &&
                            null != g &&
                            (0, l.jsx)(s.Text, {
                                className: u.Z$,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: g,
                            }),
                    ],
                }),
                (0, l.jsx)(c.A, {
                    className: u._2,
                    direction: c.A.Directions.RIGHT,
                }),
            ],
        });
    },
    b = (e) => {
        let {
            node: { children: t },
            onSelectChild: n,
            nodeMap: r,
        } = e;
        if (null == t || 0 === t.length) return null;
        let a = t.map((e) => {
            let [t, a] = e;
            return (0, l.jsx)(
                m,
                {
                    child: e,
                    onClick: n,
                    nodeMap: r,
                },
                "".concat(t, "+").concat(a),
            );
        });
        return (0, l.jsx)("div", {
            className: d.E8,
            children: a,
        });
    };
