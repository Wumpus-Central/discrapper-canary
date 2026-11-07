var u = t(477900),
    n = t(582128),
    r = t(164636),
    c = t(122760),
    h = t(639214),
    i = t(280905);
t.d(
    s,
    {},
    {
        A: function (e) {
            let { applicationId: s, children: t, questContent: d } = e,
                o = (0, r.bG)([c.A], () => c.A.quests),
                p = n.useMemo(() => (0, h.jm)(o, s), [o, s]),
                a = n.useRef(null);
            return p.length > 0
                ? (0, u.jsx)(i.R, { questOrQuests: p[0], questContent: d, sourceQuestContent: d, children: t })
                : (0, u.jsx)(u.Fragment, { children: t(a, a) });
        },
    },
);
