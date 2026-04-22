"use strict";
n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var i = n(683071),
    r = n(46054),
    l = n(861662);
let s = r.A.reactParserFor({ ...r.A.defaultRules, link: l.B }),
    d = (e) => {
        let { element: t } = e,
            { body: n, notice_type: r } = t.data;
        return (0, a.jsx)(i.w, { type: r, children: s(n) });
    };
