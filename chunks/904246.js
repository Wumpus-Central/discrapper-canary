var i = n(192379),
    r = Symbol.for('react.element'),
    a = Symbol.for('react.fragment'),
    s = Object.prototype.hasOwnProperty,
    o = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function u(e, t, n) {
    var i,
        a = {},
        u = null,
        c = null;
    for (i in (void 0 !== n && (u = '' + n), void 0 !== t.key && (u = '' + t.key), void 0 !== t.ref && (c = t.ref), t)) s.call(t, i) && !l.hasOwnProperty(i) && (a[i] = t[i]);
    if (e && e.defaultProps) for (i in (t = e.defaultProps)) void 0 === a[i] && (a[i] = t[i]);
    return {
        $$typeof: r,
        type: e,
        key: u,
        ref: c,
        props: a,
        _owner: o.current
    };
}
(t.Fragment = a), (t.jsx = u), (t.jsxs = u);
