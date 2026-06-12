"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(702841),
    a = n(859703),
    o = n(639214),
    l = n(73473);
let u = (e) => {
    let { applicationId: t, children: n, questContent: u } = e,
        c = (0, s.bG)([a.A], () => a.A.quests),
        d = r.useMemo(() => (0, o.jm)(c, t), [c, t]),
        _ = r.useRef(null);
    return d.length > 0
        ? (0, i.jsx)(l.R, { questOrQuests: d[0], questContent: u, sourceQuestContent: u, children: n })
        : (0, i.jsx)(i.Fragment, { children: n(_, _) });
};
