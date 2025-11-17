n.d(t, {
    M7: () => c,
    dw: () => o,
    ue: () => a,
}),
    n(415506),
    n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a =
        (((r = {})[(r.BASIC_INFO = 0)] = "BASIC_INFO"),
        (r[(r.TIERS = 1)] = "TIERS"),
        (r[(r.PAYMENT = 2)] = "PAYMENT"),
        (r[(r.EMOJIS = 3)] = "EMOJIS"),
        r);
let s = l.createContext({
    currentTab: 0,
    setCurrentTab: () => {
        throw Error("useTabBarState must be used within TabBarContextProvider");
    },
});
function o() {
    return l.useContext(s);
}
function c(e) {
    let { initialTab: t, children: n } = e,
        [r, a] = l.useState(t);
    return (0, i.jsx)(s.Provider, {
        value: {
            currentTab: r,
            setCurrentTab: a,
        },
        children: n,
    });
}
