n.d(t, { $0: () => d, Q8: () => N, SH: () => m, aV: () => h, fF: () => v, l: () => C, o5: () => f });
var l = n(477900),
    r = n(582128),
    a = n(323889),
    o = n(409626),
    s = n(692969),
    i = n(792620),
    u = n(284846),
    c = n(190107);
let d = r.createContext({ quest: null, taskDetails: null }),
    p = r.createContext(null),
    m = r.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function x(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: a } = (0, u.U)(n),
        d = (0, s.A)({
            applicationId: (0, i.xc)(n),
            location: c.rE.QUEST_INSTRUCTIONS,
            source: o.GameProfileSources.QuestBar,
        }),
        p = r.useMemo(() => ({ hasAlreadyLinked: a, onClickGameTitle: d }), [a, d]);
    return (0, l.jsx)(m.Provider, { value: p, children: t });
}
function h(e) {
    let { children: t, quest: n, taskDetails: a } = e,
        o = r.useMemo(() => ({ quest: n, taskDetails: a }), [n, a]);
    return (0, l.jsx)(d.Provider, { value: o, children: t });
}
function C(e) {
    let { children: t, quest: n } = e;
    return (0, i.I6)(n) ? (0, l.jsx)(x, { quest: n, children: t }) : t;
}
function f() {
    let e = r.useContext(p);
    if (null == e) throw Error("useQuestBarBounty requires a QuestBarBountyContextProvider ancestor");
    return e;
}
function v(e) {
    let { bounty: t, children: n } = e;
    return (0, l.jsx)(p.Provider, { value: t, children: n });
}
function N(e) {
    return r.useMemo(() => ({ type: a.p.BOUNTY, bounty: e }), [e]);
}
