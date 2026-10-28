n.d(t, { $0: () => d, Q8: () => g, SH: () => p, aV: () => h, fF: () => v, l: () => f, o5: () => C });
var l = n(477900),
    r = n(582128),
    s = n(323889),
    a = n(409626),
    i = n(692969),
    o = n(792620),
    u = n(284846),
    c = n(190107);
let d = r.createContext({ quest: null, taskDetails: null }),
    m = r.createContext(null),
    p = r.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function x(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: s } = (0, u.U)(n),
        d = (0, i.A)({
            applicationId: (0, o.xc)(n),
            location: c.rE.QUEST_INSTRUCTIONS,
            source: a.GameProfileSources.QuestBar,
        }),
        m = r.useMemo(() => ({ hasAlreadyLinked: s, onClickGameTitle: d }), [s, d]);
    return (0, l.jsx)(p.Provider, { value: m, children: t });
}
function h(e) {
    let { children: t, quest: n, taskDetails: s } = e,
        a = r.useMemo(() => ({ quest: n, taskDetails: s }), [n, s]);
    return (0, l.jsx)(d.Provider, { value: a, children: t });
}
function f(e) {
    let { children: t, quest: n } = e;
    return (0, o.I6)(n) ? (0, l.jsx)(x, { quest: n, children: t }) : t;
}
function C() {
    let e = r.useContext(m);
    if (null == e) throw Error("useQuestBarBounty requires a QuestBarBountyContextProvider ancestor");
    return e;
}
function v(e) {
    let { bounty: t, children: n } = e;
    return (0, l.jsx)(m.Provider, { value: t, children: n });
}
function g(e) {
    return r.useMemo(() => ({ type: s.p.BOUNTY, bounty: e }), [e]);
}
