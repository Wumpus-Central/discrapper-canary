n.d(t, { $0: () => d, Q8: () => C, SH: () => f, aV: () => x, fF: () => g, l: () => h, o5: () => v });
var l = n(477900),
    r = n(582128),
    u = n(323889),
    a = n(409626),
    o = n(692969),
    i = n(792620),
    s = n(284846),
    c = n(190107);
let d = r.createContext({ quest: null, taskDetails: null }),
    p = r.createContext(null),
    f = r.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function m(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: u } = (0, s.U)(n),
        d = (0, o.A)({
            applicationId: (0, i.xc)(n),
            location: c.rE.QUEST_INSTRUCTIONS,
            source: a.GameProfileSources.QuestBar,
        }),
        p = r.useMemo(() => ({ hasAlreadyLinked: u, onClickGameTitle: d }), [u, d]);
    return (0, l.jsx)(f.Provider, { value: p, children: t });
}
function x(e) {
    let { children: t, quest: n, taskDetails: u } = e,
        a = r.useMemo(() => ({ quest: n, taskDetails: u }), [n, u]);
    return (0, l.jsx)(d.Provider, { value: a, children: t });
}
function h(e) {
    let { children: t, quest: n } = e;
    return (0, i.I6)(n) ? (0, l.jsx)(m, { quest: n, children: t }) : t;
}
function v() {
    let e = r.useContext(p);
    if (null == e) throw Error("useQuestBarBounty requires a QuestBarBountyContextProvider ancestor");
    return e;
}
function g(e) {
    let { bounty: t, children: n } = e;
    return (0, l.jsx)(p.Provider, { value: t, children: n });
}
function C(e) {
    return r.useMemo(() => ({ type: u.p.BOUNTY, bounty: e }), [e]);
}
