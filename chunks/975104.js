n.d(t, { Z: () => o }), n(411104);
var r = n(200651),
    i = n(192379);
function o() {
    let e = i.createContext(void 0);
    function t() {
        let t = i.useContext(e);
        if (null == t) throw Error('Context was used outside of defined provider.');
        return t;
    }
    function n() {
        let n = t();
        return function (t) {
            let { children: i } = t;
            return (0, r.jsx)(e.Provider, {
                value: n,
                children: i
            });
        };
    }
    return [e, t, n];
}
