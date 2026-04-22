"use strict";
n.d(t, { D: () => o });
var r = n(499867),
    i = n(265690),
    s = n(121894);
function a(e, t) {
    return e === t;
}
function o(e) {
    let t = (0, i.h)((0, r.eh)((t, n, r) => e((e) => (0, s.r)(() => t(e)), n, r)));
    function n(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
        return t(e, n);
    }
    function o(e) {
        let n = t.getState();
        return null != e ? e(n) : n;
    }
    let l = (e) => {
        (0, s.r)(() => t.setState(e));
    };
    return {
        useState: n,
        getState: o,
        useField: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
            return n((t) => t[e], t);
        },
        getField: function (e) {
            return o((t) => t[e]);
        },
        subscribe: function (e, n, r) {
            return t.subscribe(e, n, r);
        },
        setState: l,
        resetState: function () {
            l(t.getInitialState());
        },
    };
}
