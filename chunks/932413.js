t.d(s, { A: () => d });
var u = t(477900),
    n = t(582128),
    r = t(702841),
    c = t(859703),
    h = t(639214),
    i = t(657792);
let d = function (e) {
    let { applicationId: s, children: t, questContent: d } = e,
        l = (0, r.bG)([c.A], () => c.A.quests),
        o = n.useMemo(() => (0, h.jm)(l, s), [l, s]),
        p = n.useRef(null);
    return o.length > 0
        ? (0, u.jsx)(i.R, { questOrQuests: o[0], questContent: d, sourceQuestContent: d, children: t })
        : (0, u.jsx)(u.Fragment, { children: t(p, p) });
};
