"use strict";
var r = n(53635),
    i = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
    },
    s = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    o = {};
function l(e) {
    return r.isMemo(e) ? a : o[e.$$typeof] || i;
}
(o[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (o[r.Memo] = a);
var u = Object.defineProperty,
    c = Object.getOwnPropertyNames,
    d = Object.getOwnPropertySymbols,
    _ = Object.getOwnPropertyDescriptor,
    f = Object.getPrototypeOf,
    p = Object.prototype;
e.exports = function e(t, n, r) {
    if ("string" != typeof n) {
        if (p) {
            var i = f(n);
            i && i !== p && e(t, i, r);
        }
        var a = c(n);
        d && (a = a.concat(d(n)));
        for (var o = l(t), h = l(n), E = 0; E < a.length; ++E) {
            var m = a[E];
            if (!s[m] && !(r && r[m]) && !(h && h[m]) && !(o && o[m])) {
                var g = _(n, m);
                try {
                    u(t, m, g);
                } catch (e) {}
            }
        }
    }
    return t;
};
