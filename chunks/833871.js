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
    a = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    s = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    o = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    l = {};
function u(e) {
    return r.isMemo(e) ? o : l[e.$$typeof] || i;
}
(l[r.ForwardRef] = s), (l[r.Memo] = o);
var c = Object.defineProperty,
    d = Object.getOwnPropertyNames,
    _ = Object.getOwnPropertySymbols,
    f = Object.getOwnPropertyDescriptor,
    p = Object.getPrototypeOf,
    h = Object.prototype;
function m(e, t, n) {
    if ("string" != typeof t) {
        if (h) {
            var r = p(t);
            r && r !== h && m(e, r, n);
        }
        var i = d(t);
        _ && (i = i.concat(_(t)));
        for (var s = u(e), o = u(t), l = 0; l < i.length; ++l) {
            var g = i[l];
            if (!a[g] && !(n && n[g]) && !(o && o[g]) && !(s && s[g])) {
                var E = f(t, g);
                try {
                    c(e, g, E);
                } catch (e) {}
            }
        }
    }
    return e;
}
e.exports = m;
