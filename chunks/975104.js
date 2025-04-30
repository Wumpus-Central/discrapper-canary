n.d(t, { Z: () => a }), n(415506);
var r = n(255367),
    i = n(73800);
function a() {
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
