"use strict";
var i = n(53635),
    r = {
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
    return i.isMemo(e) ? a : o[e.$$typeof] || r;
}
(o[i.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (o[i.Memo] = a);
var u = Object.defineProperty,
    c = Object.getOwnPropertyNames,
    d = Object.getOwnPropertySymbols,
    _ = Object.getOwnPropertyDescriptor,
    h = Object.getPrototypeOf,
    f = Object.prototype;
e.exports = function e(t, n, i) {
    if ("string" != typeof n) {
        if (f) {
            var r = h(n);
            r && r !== f && e(t, r, i);
        }
        var a = c(n);
        d && (a = a.concat(d(n)));
        for (var o = l(t), p = l(n), E = 0; E < a.length; ++E) {
            var m = a[E];
            if (!s[m] && !(i && i[m]) && !(p && p[m]) && !(o && o[m])) {
                var g = _(n, m);
                try {
                    u(t, m, g);
                } catch (e) {}
            }
        }
    }
    return t;
};
