"use strict";
n.d(t, { A: () => d });
var i = n(477900),
    r = n(582128),
    a = n(702841),
    s = n(859703),
    l = n(639214),
    o = n(73473);
let d = function (e) {
    let { applicationId: t, children: n, questContent: d } = e,
        c = (0, a.bG)([s.A], () => s.A.quests),
        u = r.useMemo(() => (0, l.jm)(c, t), [c, t]),
        _ = r.useRef(null);
    return u.length > 0
        ? (0, i.jsx)(o.R, { questOrQuests: u[0], questContent: d, sourceQuestContent: d, children: n })
        : (0, i.jsx)(i.Fragment, { children: n(_, _) });
};
