n.d(t, {
    Z7: () => E,
    g: () => v,
    k9: () => I
});
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(194359),
    s = n(475413),
    l = n(156518),
    c = n(690501),
    u = n(981631),
    d = n(388032);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    var { type: t, userId: n, friendToken: l, analyticsLocation: c, shouldShowTooltip: u } = e,
        f = m(e, ['type', 'userId', 'friendToken', 'analyticsLocation', 'shouldShowTooltip']);
    let p = i.useCallback(() => {
            a.Z.addRelationship({
                userId: n,
                friendToken: l,
                context: { location: c }
            });
        }, [c, l, n]),
        h = t === s.j8.TEXT ? s.tG : s.oY;
    return (0, r.jsx)(
        h,
        _(
            {
                action: 'SEND_FRIEND_REQUEST',
                icon: o.oLu,
                text: d.intl.string(d.t.w5uwoK),
                tooltipText: d.intl.string(d.t.w5uwoK),
                shouldShowTooltip: u,
                onClick: p
            },
            f
        )
    );
}
function b(e) {
    var { type: t, user: n, analyticsLocation: o } = e,
        a = m(e, ['type', 'user', 'analyticsLocation']);
    let c = (0, l.Y)({
            user: n,
            analyticsLocation: o
        }),
        u = i.useRef(null),
        d = t === s.j8.ICON ? s.ef : s.oY;
    return 0 === c.length
        ? (0, r.jsx)(d, h(_({}, a), { disabled: !0 }))
        : (0, r.jsx)(l.Z, {
              targetElementRef: u,
              menuItems: c,
              children: (e) => (0, r.jsx)('div', h(_({ ref: u }, e), { children: (0, r.jsx)(d, _({}, a)) }))
          });
}
let y = {
        [u.OGo.FRIEND]: o._uN,
        [u.OGo.PENDING_OUTGOING]: o.iHX,
        [u.OGo.PENDING_INCOMING]: o.iHX
    },
    O = {
        [u.OGo.FRIEND]: () => d.intl.string(d.t.G7jMpa),
        [u.OGo.PENDING_OUTGOING]: () => d.intl.string(d.t['s/+byM']),
        [u.OGo.PENDING_INCOMING]: () => d.intl.string(d.t['6QQCQ0'])
    };
function v(e) {
    var { type: t, user: n, relationshipType: i, analyticsLocation: o, shouldShowTooltip: a } = e,
        s = m(e, ['type', 'user', 'relationshipType', 'analyticsLocation', 'shouldShowTooltip']);
    let l = y[i],
        c = O[i]();
    return (0, r.jsx)(
        b,
        _(
            {
                type: t,
                user: n,
                icon: l,
                tooltipText: c,
                shouldShowTooltip: a,
                analyticsLocation: o
            },
            s
        )
    );
}
function I(e) {
    var { type: t, user: n, gameFriends: i, hasOutgoingPendingGameFriends: o, hasIncomingPendingGameFriends: a, analyticsLocation: s, shouldShowTooltip: l } = e,
        u = m(e, ['type', 'user', 'gameFriends', 'hasOutgoingPendingGameFriends', 'hasIncomingPendingGameFriends', 'analyticsLocation', 'shouldShowTooltip']);
    let {
        tooltipText: d,
        onMouseEnter: f,
        ariaLabel: p,
        icon: h
    } = (0, c.N)({
        gameFriends: i,
        hasOutgoingPendingGameFriends: o,
        hasIncomingPendingGameFriends: a
    });
    return (0, r.jsx)(
        b,
        _(
            {
                type: t,
                tooltipText: d,
                tooltipPosition: 'left',
                tooltipAlign: 'top',
                ariaLabel: p,
                shouldShowTooltip: l,
                icon: h,
                onMouseEnter: f,
                user: n,
                analyticsLocation: s
            },
            u
        )
    );
}
