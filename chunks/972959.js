n.d(t, { H: () => l });
var i = n(192379),
    r = n(877124),
    a = n(65400),
    s = n(731965);
function o(e, t) {
    return e === t;
}
function l(e) {
    let t = (0, a.F)((0, r.XR)((t, n, i) => e((e) => (0, s.j)(() => t(e)), n, i)));
    function n(e, n) {
        return t(e, n);
    }
    function l(e) {
        let n = t.getState();
        return null != e ? e(n) : n;
    }
    function u(e) {
        return (t) => t[e];
    }
    function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
        return n(
            i.useMemo(() => u(e), [e]),
            t
        );
    }
    function d(e) {
        return l(u(e));
    }
    let f = (e) => {
        (0, s.j)(() => t.setState(e));
    };
    function _() {
        f(t.getInitialState());
    }
    return {
        useState: n,
        getState: l,
        useField: c,
        getField: d,
        subscribe: function (e, n, i) {
            return t.subscribe(e, n, i);
        },
        setState: f,
        resetState: _
    };
}
