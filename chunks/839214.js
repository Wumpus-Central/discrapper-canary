n.d(t, { D: () => l });
var i = n(537812),
    r = n(882035),
    a = n(121894);
function s(e, t) {
    return e === t;
}
function l(e) {
    let t = (0, r.h)((0, i.eh)((t, n, i) => e((e) => (0, a.r)(() => t(e)), n, i)));
    function n(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
        return t(e, n);
    }
    function l(e) {
        let n = t.getState();
        return null != e ? e(n) : n;
    }
    let o = (e) => {
        (0, a.r)(() => t.setState(e));
    };
    return {
        useState: n,
        getState: l,
        useField: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
            return n((t) => t[e], t);
        },
        getField: function (e) {
            return l((t) => t[e]);
        },
        subscribe: function (e, n, i) {
            return t.subscribe(e, n, i);
        },
        setState: o,
        resetState: function () {
            o(t.getInitialState());
        },
    };
}
