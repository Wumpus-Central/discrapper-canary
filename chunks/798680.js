n.d(t, {
    M7: () => c,
    dw: () => o,
    ue: () => s
}),
    n(411104),
    n(47120);
var i,
    r = n(200651),
    l = n(192379),
    s = (((i = {})[(i.BASIC_INFO = 0)] = 'BASIC_INFO'), (i[(i.TIERS = 1)] = 'TIERS'), (i[(i.PAYMENT = 2)] = 'PAYMENT'), (i[(i.EMOJIS = 3)] = 'EMOJIS'), i);
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
        [i, s] = l.useState(t);
    return (0, r.jsx)(a.Provider, {
        value: {
            currentTab: i,
            setCurrentTab: s
        },
        children: n
    });
}
