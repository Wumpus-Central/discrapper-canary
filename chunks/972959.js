n.d(t, { H: () => s });
var r = n(781930),
    i = n(372793),
    o = n(731965);
function a(e, t) {
    return e === t;
}
function s(e) {
    let t = (0, i.F)((0, r.XR)((t, n, r) => e((e) => (0, o.j)(() => t(e)), n, r)));
    function n(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
        return t(e, n);
    }
    function s(e) {
        let n = t.getState();
        return null != e ? e(n) : n;
    }
    function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
        return n((t) => t[e], t);
    }
    function c(e) {
        return s((t) => t[e]);
    }
    let u = (e) => {
        (0, o.j)(() => t.setState(e));
    };
    function d() {
        u(t.getInitialState());
    }
    return {
        useState: n,
        getState: s,
        useField: l,
        getField: c,
        subscribe: function (e, n, r) {
            return t.subscribe(e, n, r);
        },
        setState: u,
        resetState: d
    };
}
