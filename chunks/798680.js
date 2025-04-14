n.d(t, {
    M7: () => c,
    dw: () => o,
    ue: () => l
}),
    n(415506),
    n(388685);
var r,
    i = n(200651),
    s = n(192379),
    l = (((r = {})[(r.BASIC_INFO = 0)] = 'BASIC_INFO'), (r[(r.TIERS = 1)] = 'TIERS'), (r[(r.PAYMENT = 2)] = 'PAYMENT'), (r[(r.EMOJIS = 3)] = 'EMOJIS'), r);
let a = s.createContext({
    currentTab: 0,
    setCurrentTab: () => {
        throw Error('useTabBarState must be used within TabBarContextProvider');
    }
});
function o() {
    return s.useContext(a);
}
function c(e) {
    let { initialTab: t, children: n } = e,
        [r, l] = s.useState(t);
    return (0, i.jsx)(a.Provider, {
        value: {
            currentTab: r,
            setCurrentTab: l
        },
        children: n
    });
}
