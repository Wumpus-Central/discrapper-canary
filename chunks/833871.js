"use strict";
var n = e(53635),
    o = {
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
    i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    f = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    u = {};
function s(t) {
    return n.isMemo(t) ? f : u[t.$$typeof] || o;
}
(u[n.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (u[n.Memo] = f);
var a = Object.defineProperty,
    h = Object.getOwnPropertyNames,
    p = Object.getOwnPropertySymbols,
    c = Object.getOwnPropertyDescriptor,
    l = Object.getPrototypeOf,
    y = Object.prototype;
t.exports = function t(r, e, n) {
    if ("string" != typeof e) {
        if (y) {
            var o = l(e);
            o && o !== y && t(r, o, n);
        }
        var f = h(e);
        p && (f = f.concat(p(e)));
        for (var u = s(r), g = s(e), d = 0; d < f.length; ++d) {
            var v = f[d];
            if (!i[v] && !(n && n[v]) && !(g && g[v]) && !(u && u[v])) {
                var b = c(e, v);
                try {
                    a(r, v, b);
                } catch (t) {}
            }
        }
    }
    return r;
};
