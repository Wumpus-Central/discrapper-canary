var r = n(192379),
    i = Symbol.for('react.element'),
    o = Symbol.for('react.fragment'),
    a = Object.prototype.hasOwnProperty,
    s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function c(e, t, n) {
    var r,
        o = {},
        c = null,
        u = null;
    for (r in (void 0 !== n && (c = '' + n), void 0 !== t.key && (c = '' + t.key), void 0 !== t.ref && (u = t.ref), t)) a.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
    return {
        $$typeof: i,
        type: e,
        key: c,
        ref: u,
        props: o,
        _owner: s.current
    };
}
(t.Fragment = o), (t.jsx = c), (t.jsxs = c);
