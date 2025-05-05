n.d(t, {
    M7: () => c,
    dw: () => o,
    ue: () => s
}),
    n(415506),
    n(388685);
var r,
    i = n(255367),
    l = n(73800),
    s = (((r = {})[(r.BASIC_INFO = 0)] = 'BASIC_INFO'), (r[(r.TIERS = 1)] = 'TIERS'), (r[(r.PAYMENT = 2)] = 'PAYMENT'), (r[(r.EMOJIS = 3)] = 'EMOJIS'), r);
let a = l.createContext({
    currentTab: 0,
    setCurrentTab: () => {
        throw Error('useTabBarState must be used within TabBarContextProvider');
    }
});
function o() {
    return l.useContext(a);
}
function c(e) {
    let { initialTab: t, children: n } = e,
        [r, s] = l.useState(t);
    return (0, i.jsx)(a.Provider, {
        value: {
            currentTab: r,
            setCurrentTab: s
        },
        children: n
    });
}
