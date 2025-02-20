n.d(t, { H: () => l });
var r = n(192379),
    i = n(877124),
    o = n(65400),
    a = n(731965);
function s(e, t) {
    return e === t;
}
function l(e) {
    let t = (0, o.F)((0, i.XR)((t, n, r) => e((e) => (0, a.j)(() => t(e)), n, r)));
    function n(e, n) {
        return t(e, n);
    }
    function l(e) {
        let n = t.getState();
        return null != e ? e(n) : n;
    }
    function c(e) {
        return (t) => t[e];
    }
    function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
        return n(
            r.useMemo(() => c(e), [e]),
            t
        );
    }
    function d(e) {
        return l(c(e));
    }
    let f = (e) => {
        (0, a.j)(() => t.setState(e));
    };
    function p() {
        f(t.getInitialState());
    }
    return {
        useState: n,
        getState: l,
        useField: u,
        getField: d,
        subscribe: function (e, n, r) {
            return t.subscribe(e, n, r);
        },
        setState: f,
        resetState: p
    };
}
