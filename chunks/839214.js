"use strict";
n.d(t, { D: () => o });
var i = n(499867),
    r = n(265690),
    s = n(121894);
function a(e, t) {
    return e === t;
}
function o(e) {
    let t = (0, r.h)((0, i.eh)((t, n, i) => e((e) => (0, s.r)(() => t(e)), n, i)));
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
        subscribe: function (e, n, i) {
            return t.subscribe(e, n, i);
        },
        setState: l,
        resetState: function () {
            l(t.getInitialState());
        },
    };
}
