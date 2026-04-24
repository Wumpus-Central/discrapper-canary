"use strict";
n.d(t, { A: () => c });
var l = n(627968),
    i = n(64700),
    s = n(702841),
    a = n(859703),
    r = n(639214),
    o = n(73473);
let c = (e) => {
    let { applicationId: t, children: n, questContent: c } = e,
        u = (0, s.bG)([a.A], () => a.A.quests),
        d = i.useMemo(() => (0, r.jm)(u, t), [u, t]),
        h = i.useRef(null);
    return d.length > 0
        ? (0, l.jsx)(o.R, { questOrQuests: d[0], questContent: c, sourceQuestContent: c, children: n })
        : (0, l.jsx)(l.Fragment, { children: n(h, h) });
};
