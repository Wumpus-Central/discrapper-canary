var i = r(192379),
    a = Symbol.for('react.element'),
    o = Symbol.for('react.fragment'),
    s = Object.prototype.hasOwnProperty,
    l = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function c(e, n, r) {
    var i,
        o = {},
        c = null,
        d = null;
    for (i in (void 0 !== r && (c = '' + r), void 0 !== n.key && (c = '' + n.key), void 0 !== n.ref && (d = n.ref), n)) s.call(n, i) && !u.hasOwnProperty(i) && (o[i] = n[i]);
    if (e && e.defaultProps) for (i in (n = e.defaultProps)) void 0 === o[i] && (o[i] = n[i]);
    return {
        $$typeof: a,
        type: e,
        key: c,
        ref: d,
        props: o,
        _owner: l.current
    };
}
(n.Fragment = o), (n.jsx = c), (n.jsxs = c);
