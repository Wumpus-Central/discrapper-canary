n.d(t, {
    PE: () => y,
    l: () => v,
    pM: () => E
});
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(194359),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    let { userId: t, friendToken: n, analyticsLocation: l, shouldShowTooltip: c } = e,
        u = i.useCallback(() => {
            o.Z.addRelationship({
                userId: t,
                friendToken: n,
                context: { location: l }
            });
        }, [l, n, t]);
    return (0, r.jsx)(s.oY, {
        action: 'SEND_FRIEND_REQUEST',
        icon: a.oLu,
        tooltipText: d.NW.string(d.t.w5uwoK),
        shouldShowTooltip: c,
        onClick: u
    });
}
function b(e) {
    var { user: t, analyticsLocation: n } = e,
        a = m(e, ['user', 'analyticsLocation']);
    let o = (0, l.Y)({
            user: t,
            analyticsLocation: n
        }),
        c = i.useRef(null);
    return 0 === o.length
        ? (0, r.jsx)(s.oY, h(_({}, a), { disabled: !0 }))
        : (0, r.jsx)(l.Z, {
              targetElementRef: c,
              menuItems: o,
              children: (e) => (0, r.jsx)('div', h(_({ ref: c }, e), { children: (0, r.jsx)(s.oY, _({}, a)) }))
          });
}
function y(e) {
    let { user: t, relationshipType: n, analyticsLocation: o, shouldShowTooltip: s } = e,
        l = i.useMemo(() => {
            switch (n) {
                case u.OGo.FRIEND:
                    return a._uN;
                case u.OGo.PENDING_OUTGOING:
                case u.OGo.PENDING_INCOMING:
                    return a.iHX;
            }
        }, [n]),
        c = i.useMemo(() => {
            switch (n) {
                case u.OGo.FRIEND:
                    return d.NW.string(d.t.G7jMpa);
                case u.OGo.PENDING_OUTGOING:
                    return d.NW.string(d.t['s/+byM']);
                case u.OGo.PENDING_INCOMING:
                    return d.NW.string(d.t['6QQCQ0']);
            }
        }, [n]);
    return (0, r.jsx)(b, {
        icon: l,
        tooltipText: c,
        shouldShowTooltip: s,
        user: t,
        analyticsLocation: o
    });
}
function v(e) {
    let { user: t, gameFriends: n, hasOutgoingPendingGameFriends: i, hasIncomingPendingGameFriends: a, analyticsLocation: o, shouldShowTooltip: s } = e,
        {
            tooltipText: l,
            onMouseEnter: u,
            ariaLabel: d,
            icon: f
        } = (0, c.N)({
            gameFriends: n,
            hasOutgoingPendingGameFriends: i,
            hasIncomingPendingGameFriends: a
        });
    return (0, r.jsx)(b, {
        tooltipText: l,
        tooltipPosition: 'left',
        tooltipAlign: 'top',
        ariaLabel: d,
        shouldShowTooltip: s,
        icon: f,
        onMouseEnter: u,
        user: t,
        analyticsLocation: o
    });
}
