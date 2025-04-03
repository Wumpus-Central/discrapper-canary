n.d(t, {
    M7: () => c,
    dw: () => o,
    ue: () => a
}),
    n(411104),
    n(47120);
var r,
    i = n(200651),
    s = n(192379),
    a = (((r = {})[(r.BASIC_INFO = 0)] = 'BASIC_INFO'), (r[(r.TIERS = 1)] = 'TIERS'), (r[(r.PAYMENT = 2)] = 'PAYMENT'), (r[(r.EMOJIS = 3)] = 'EMOJIS'), r);
let l = s.createContext({
    currentTab: 0,
    setCurrentTab: () => {
        throw Error('useTabBarState must be used within TabBarContextProvider');
    }
});
function o() {
    return s.useContext(l);
}
function c(e) {
    let { initialTab: t, children: n } = e,
        [r, a] = s.useState(t);
    return (0, i.jsx)(l.Provider, {
        value: {
            currentTab: r,
            setCurrentTab: a
        },
        children: n
    });
}
