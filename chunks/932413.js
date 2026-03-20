"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(417597),
    a = n(859703),
    o = n(639214),
    l = n(73473);
let u = (e) => {
    let { applicationId: t, children: n, questContent: u } = e,
        c = (0, s.bG)([a.A], () => a.A.quests),
        d = i.useMemo(() => (0, o.jm)(c, t), [c, t]),
        _ = i.useRef(null);
    return d.length > 0
        ? (0, r.jsx)(l.R, { questOrQuests: d[0], questContent: u, sourceQuestContent: u, children: n })
        : (0, r.jsx)(r.Fragment, { children: n(_, _) });
};
