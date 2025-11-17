n.d(t, {
    Z7: () => O,
    g: () => A,
    k9: () => C,
    lJ: () => v,
});
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(194359),
    s = n(475413),
    l = n(732380),
    c = n(156518),
    u = n(690501),
    d = n(228168),
    f = n(981631),
    _ = n(388032);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e) {
    let { userId: t, analyticsLocation: n } = e,
        r = i.useCallback(() => {
            o.Z.addRelationship({
                userId: t,
                context: { location: n },
            });
        }, [n, t]);
    return {
        action: d.yM.SEND_FRIEND_REQUEST,
        icon: a.oLu,
        text: _.intl.string(_.t.w5uwoI),
        onClick: r,
    };
}
function O(e) {
    var { userId: t, analyticsLocation: n } = e,
        i = E(e, ["userId", "analyticsLocation"]);
    let a = y({
        userId: t,
        analyticsLocation: n,
    });
    return (0, r.jsx)(l.O1, h({}, a, i));
}
function v(e) {
    let { userId: t, analyticsLocation: n } = e,
        i = y({
            userId: t,
            analyticsLocation: n,
        }),
        { text: a } = i,
        o = E(i, ["text"]);
    return (0, r.jsx)(l.f6, h({ tooltipText: a }, o));
}
function I(e) {
    var { type: t, user: n, analyticsLocation: a } = e,
        o = E(e, ["type", "user", "analyticsLocation"]);
    let l = (0, c.Y)({
            user: n,
            analyticsLocation: a,
        }),
        u = i.useRef(null),
        d = t === s.j8.ICON ? s.ef : s.oY;
    return 0 === l.length
        ? (0, r.jsx)(d, g(h({}, o), { disabled: !0 }))
        : (0, r.jsx)(c.Z, {
              targetElementRef: u,
              menuItems: l,
              children: (e) => (0, r.jsx)("div", g(h({ ref: u }, e), { children: (0, r.jsx)(d, h({}, o)) })),
          });
}
let T = {
        [f.OGo.FRIEND]: a._uN,
        [f.OGo.PENDING_OUTGOING]: a.iHX,
        [f.OGo.PENDING_INCOMING]: a.iHX,
    },
    S = {
        [f.OGo.FRIEND]: () => _.intl.string(_.t.G7jMpU),
        [f.OGo.PENDING_OUTGOING]: () => _.intl.string(_.t["s/+byI"]),
        [f.OGo.PENDING_INCOMING]: () => _.intl.string(_.t["6QQCQ+"]),
    };
function A(e) {
    var { type: t, user: n, relationshipType: i, analyticsLocation: a, shouldShowTooltip: o } = e,
        s = E(e, ["type", "user", "relationshipType", "analyticsLocation", "shouldShowTooltip"]);
    let l = T[i],
        c = S[i]();
    return (0, r.jsx)(
        I,
        h(
            {
                type: t,
                user: n,
                icon: l,
                tooltipText: c,
                shouldShowTooltip: o,
                analyticsLocation: a,
            },
            s,
        ),
    );
}
function C(e) {
    var {
            type: t,
            user: n,
            gameFriends: i,
            hasOutgoingPendingGameFriends: a,
            hasIncomingPendingGameFriends: o,
            analyticsLocation: s,
            shouldShowTooltip: l,
        } = e,
        c = E(e, [
            "type",
            "user",
            "gameFriends",
            "hasOutgoingPendingGameFriends",
            "hasIncomingPendingGameFriends",
            "analyticsLocation",
            "shouldShowTooltip",
        ]);
    let {
        tooltipText: d,
        onMouseEnter: f,
        ariaLabel: _,
        icon: p,
    } = (0, u.N)({
        gameFriends: i,
        hasOutgoingPendingGameFriends: a,
        hasIncomingPendingGameFriends: o,
    });
    return (0, r.jsx)(
        I,
        h(
            {
                type: t,
                tooltipText: d,
                tooltipPosition: "left",
                tooltipAlign: "top",
                ariaLabel: _,
                shouldShowTooltip: l,
                icon: p,
                onMouseEnter: f,
                user: n,
                analyticsLocation: s,
            },
            c,
        ),
    );
}
