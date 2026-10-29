n.d(t, { $0: () => d, Q8: () => N, SH: () => p, aV: () => h, fF: () => v, l: () => f, o5: () => C });
var l = n(477900),
    s = n(582128),
    r = n(323889),
    a = n(409626),
    i = n(692969),
    o = n(792620),
    u = n(284846),
    c = n(190107);
let d = s.createContext({ quest: null, taskDetails: null }),
    m = s.createContext(null),
    p = s.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function x(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: r } = (0, u.U)(n),
        d = (0, i.A)({
            applicationId: (0, o.xc)(n),
            location: c.rE.QUEST_INSTRUCTIONS,
            source: a.GameProfileSources.QuestBar,
        }),
        m = s.useMemo(() => ({ hasAlreadyLinked: r, onClickGameTitle: d }), [r, d]);
    return (0, l.jsx)(p.Provider, { value: m, children: t });
}
function h(e) {
    let { children: t, quest: n, taskDetails: r } = e,
        a = s.useMemo(() => ({ quest: n, taskDetails: r }), [n, r]);
    return (0, l.jsx)(d.Provider, { value: a, children: t });
}
function f(e) {
    let { children: t, quest: n } = e;
    return (0, o.I6)(n) ? (0, l.jsx)(x, { quest: n, children: t }) : t;
}
function C() {
    let e = s.useContext(m);
    if (null == e) throw Error("useQuestBarBounty requires a QuestBarBountyContextProvider ancestor");
    return e;
}
function v(e) {
    let { bounty: t, children: n } = e;
    return (0, l.jsx)(m.Provider, { value: t, children: n });
}
function N(e) {
    return s.useMemo(() => ({ type: r.p.BOUNTY, bounty: e }), [e]);
}
