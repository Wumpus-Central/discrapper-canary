n.d(t, {
    A: () => a,
}),
    n(65821);
var r = n(627968),
    i = n(64700);

function a() {
    let e = i.createContext(void 0);

    function t() {
        let t = i.useContext(e);
        if (null == t) throw Error("Context was used outside of defined provider.");
        return t;
    }

    function n() {
        let n = t();
        return function (t) {
            let { children: i } = t;
            return (0, r.jsx)(e.Provider, {
                value: n,
                children: i,
            });
        };
    }
    return [e, t, n];
}
