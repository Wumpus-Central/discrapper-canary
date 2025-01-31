n.d(t, { Z: () => a }), n(411104);
var i = n(200651),
    r = n(192379);
function a() {
    let e = r.createContext(void 0);
    function t() {
        let t = r.useContext(e);
        if (null == t) throw Error('Context was used outside of defined provider.');
        return t;
    }
    function n() {
        let n = t();
        return function (t) {
            let { children: r } = t;
            return (0, i.jsx)(e.Provider, {
                value: n,
                children: r
            });
        };
    }
    return [e, t, n];
}
