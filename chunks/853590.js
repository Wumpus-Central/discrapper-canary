n.d(t, {
    C: () => c,
    Y: () => u,
});
var r = n(909144),
    i = n(314739),
    a = n(64700);
let s = a.createContext(null);
function o(e) {
    let { locale: t, children: n } = e,
        i = a.useMemo(
            () => ({
                locale: t,
                direction: (0, r.V)(t) ? "rtl" : "ltr",
            }),
            [t],
        );
    return a.createElement(s.Provider, { value: i }, n);
}
function l(e) {
    let { children: t } = e,
        n = (0, i.D)();
    return a.createElement(s.Provider, { value: n }, t);
}
function c(e) {
    let { locale: t, children: n } = e;
    return t
        ? a.createElement(o, {
              locale: t,
              children: n,
          })
        : a.createElement(l, { children: n });
}
function u() {
    let e = (0, i.D)();
    return (0, a.useContext)(s) || e;
}
