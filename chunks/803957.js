"use strict";
n.d(t, { A: () => p });
var a = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    l = n(311907),
    s = n(939249),
    d = n(834730),
    o = n(865116),
    c = n(147925),
    u = n(777148),
    _ = n(797982);
let m = (e) => {
        let { child: t, onClick: n, nodeMap: i } = e,
            [m, p] = t,
            h = (0, l.bG)([o.Ay], () => o.Ay.get("iar_show_report_sub_type_labels")),
            g = i[p],
            f = g?.report_type;
        return (0, a.jsxs)(s.D, {
            className: r()(_.Zm, u.lD),
            onClick: () => n(t),
            children: [
                (0, a.jsxs)("div", {
                    className: _.OH,
                    children: [
                        (0, a.jsx)(d.E, { className: _.ix, variant: "text-md/normal", children: m }),
                        h &&
                            null != f &&
                            (0, a.jsx)(d.E, {
                                className: _.Z$,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: f,
                            }),
                    ],
                }),
                (0, a.jsx)(c.A, { className: _._2, direction: c.A.Directions.RIGHT }),
            ],
        });
    },
    p = (e) => {
        let {
            node: { children: t },
            onSelectChild: n,
            nodeMap: i,
        } = e;
        if (null == t || 0 === t.length) return null;
        let r = t.map((e) => {
            let [t, r] = e;
            return (0, a.jsx)(m, { child: e, onClick: n, nodeMap: i }, `${t}+${r}`);
        });
        return (0, a.jsx)("div", { className: u.E8, children: r });
    };
