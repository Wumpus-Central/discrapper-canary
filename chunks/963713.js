var l = n(477900),
    s = n(582128),
    a = n(323889),
    i = n(409626),
    r = n(692969),
    o = n(792620),
    u = n(284846),
    c = n(221596);
let d = s.createContext({ quest: null, taskDetails: null }),
    p = s.createContext(null),
    m = s.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function x(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: a } = (0, u.U)(n),
        d = (0, r.A)({
            applicationId: (0, o.xc)(n),
            location: c.rE.QUEST_INSTRUCTIONS,
            source: i.GameProfileSources.QuestBar,
        }),
        p = s.useMemo(() => ({ hasAlreadyLinked: a, onClickGameTitle: d }), [a, d]);
    return (0, l.jsx)(m.Provider, { value: p, children: t });
}
n.d(
    t,
    {},
    {
        $0: d,
        Q8: function (e) {
            return s.useMemo(() => ({ type: a.p.BOUNTY, bounty: e }), [e]);
        },
        SH: m,
        aV: function (e) {
            let { children: t, quest: n, taskDetails: a } = e,
                i = s.useMemo(() => ({ quest: n, taskDetails: a }), [n, a]);
            return (0, l.jsx)(d.Provider, { value: i, children: t });
        },
        fF: function (e) {
            let { bounty: t, children: n } = e;
            return (0, l.jsx)(p.Provider, { value: t, children: n });
        },
        l: function (e) {
            let { children: t, quest: n } = e;
            return (0, o.I6)(n) ? (0, l.jsx)(x, { quest: n, children: t }) : t;
        },
        o5: function () {
            let e = s.useContext(p);
            if (null == e) throw Error("useQuestBarBounty requires a QuestBarBountyContextProvider ancestor");
            return e;
        },
    },
);
