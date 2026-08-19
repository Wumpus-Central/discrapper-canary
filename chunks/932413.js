"use strict";
n.d(t, { A: () => u });
var l = n(477900),
    i = n(582128),
    s = n(702841),
    r = n(859703),
    a = n(639214),
    o = n(73473);
let u = function (e) {
    let { applicationId: t, children: n, questContent: u } = e,
        c = (0, s.bG)([r.A], () => r.A.quests),
        d = i.useMemo(() => (0, a.jm)(c, t), [c, t]),
        h = i.useRef(null);
    return d.length > 0
        ? (0, l.jsx)(o.R, { questOrQuests: d[0], questContent: u, sourceQuestContent: u, children: n })
        : (0, l.jsx)(l.Fragment, { children: n(h, h) });
};
