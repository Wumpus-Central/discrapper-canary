n.d(t, {
    M7: function () {
        return c;
    },
    dw: function () {
        return o;
    },
    ue: function () {
        return i;
    }
}),
    n(411104),
    n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379);
((r = i || (i = {}))[(r.BASIC_INFO = 0)] = 'BASIC_INFO'), (r[(r.TIERS = 1)] = 'TIERS'), (r[(r.PAYMENT = 2)] = 'PAYMENT'), (r[(r.EMOJIS = 3)] = 'EMOJIS');
let s = a.createContext({
    currentTab: 0,
    setCurrentTab: () => {
        throw Error('useTabBarState must be used within TabBarContextProvider');
    }
});
function o() {
    return a.useContext(s);
}
function c(e) {
    let { initialTab: t, children: n } = e,
        [i, r] = a.useState(t);
    return (0, l.jsx)(s.Provider, {
        value: {
            currentTab: i,
            setCurrentTab: r
        },
        children: n
    });
}
