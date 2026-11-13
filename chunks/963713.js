var s = n(477900),
    l = n(582128),
    a = n(323889),
    r = n(409626),
    i = n(692969),
    o = n(792620),
    u = n(284846),
    c = n(221596);
let d = l.createContext({ quest: null, taskDetails: null }),
    m = l.createContext(null),
    p = l.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function x(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: a } = (0, u.U)(n),
        d = (0, i.A)({
            applicationId: (0, o.xc)(n),
            location: c.rE.QUEST_INSTRUCTIONS,
            source: r.GameProfileSources.QuestBar,
        }),
        m = l.useMemo(() => ({ hasAlreadyLinked: a, onClickGameTitle: d }), [a, d]);
    return (0, s.jsx)(p.Provider, { value: m, children: t });
}
n.d(
    t,
    {},
    {
        $0: d,
        Q8: function (e) {
            return l.useMemo(() => ({ type: a.p.BOUNTY, bounty: e }), [e]);
        },
        SH: p,
        aV: function (e) {
            let { children: t, quest: n, taskDetails: a } = e,
                r = l.useMemo(() => ({ quest: n, taskDetails: a }), [n, a]);
            return (0, s.jsx)(d.Provider, { value: r, children: t });
        },
        fF: function (e) {
            let { bounty: t, children: n } = e;
            return (0, s.jsx)(m.Provider, { value: t, children: n });
        },
        l: function (e) {
            let { children: t, quest: n } = e;
            return (0, o.I6)(n) ? (0, s.jsx)(x, { quest: n, children: t }) : t;
        },
        o5: function () {
            let e = l.useContext(m);
            if (null == e) throw Error("useQuestBarBounty requires a QuestBarBountyContextProvider ancestor");
            return e;
        },
    },
);
