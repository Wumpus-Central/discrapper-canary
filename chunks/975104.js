r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(411104);
var a = r(200651),
    o = r(192379);
function s() {
    let e = o.createContext(void 0);
    function n() {
        let n = o.useContext(e);
        if (null == n) throw Error('Context was used outside of defined provider.');
        return n;
    }
    function r() {
        let r = n();
        return function n(n) {
            let { children: i } = n;
            return (0, a.jsx)(e.Provider, {
                value: r,
                children: i
            });
        };
    }
    return [e, n, r];
}
