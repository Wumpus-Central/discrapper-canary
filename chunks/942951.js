n.d(t, { l: () => A });
var r = n(54381),
    i = n(473749),
    a = n(756715),
    o = n(573385),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(386725),
    d = n(821795),
    f = n(892567),
    p = n(7284),
    _ = n(402235),
    m = n(670188),
    h = n(592125),
    g = n(91047),
    E = n(392819);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function T(e, t) {
    return i.useCallback(
        (n) => {
            let r = h.Z.getChannel(t);
            null != r && null != e && (0, g.Pv)(n, e, r);
        },
        [e, t],
    );
}
function A(e) {
    let {
            user: t,
            channelId: n,
            guildId: h,
            messageId: g,
            stopPropagation: b = !1,
            ariaLabel: O,
            enableDisplayNameStyles: I = !1,
        } = e,
        A = i.useRef(null),
        { analyticsLocations: C } = (0, c.ZP)(l.Z.USERNAME),
        N = (0, _.ZP)(h, null == t ? void 0 : t.id),
        P = (0, u.Z)({
            userId: null == t ? void 0 : t.id,
            guildId: h,
        }),
        R = (0, p.j)({ displayNameStyles: P }),
        D = T(t, n),
        w = i.useContext(o.d);
    return (
        (0, E.Z)({
            subscribeToGroupId: g,
            authorId: null == t ? void 0 : t.id,
            shouldSubscribe: I && null != P && null == h,
        }),
        i.useCallback(
            (e) => (i, o) => {
                let l = null == e ? void 0 : e.colorStrings,
                    u = N && null != l && null != l.primaryColor && null != l.secondaryColor,
                    p = (t, n) => {
                        var o, c, p;
                        if (!I || null == P || null != h)
                            return (0, r.jsx)(
                                s.rz2,
                                v(y({}, null != t ? t : {}), {
                                    ref: A,
                                    onContextMenu: D,
                                    name: null != (c = (0, s.qgQ)(i)) ? c : "",
                                    colorString: null != (p = null == e ? void 0 : e.colorString) ? p : null,
                                    roleName: null == e ? void 0 : e.colorRoleName,
                                    colorStrings: u ? l : null,
                                    "aria-label": O,
                                    className: R,
                                }),
                            );
                        {
                            let e =
                                (null == w ? void 0 : w.animate) || (null == n ? void 0 : n.isShown)
                                    ? d.F.ANIMATED
                                    : d.F.PLAIN;
                            return (0, r.jsx)(
                                a.Anchor,
                                v(y({}, null != t ? t : {}), {
                                    ref: A,
                                    onContextMenu: D,
                                    "aria-label": O,
                                    children: (0, r.jsx)(f.Z, {
                                        userName: null != (o = (0, s.qgQ)(i)) ? o : "",
                                        displayNameStyles: P,
                                        effectDisplayType: e,
                                        shouldUnderlineOnHover: !0,
                                        loop: !0,
                                    }),
                                }),
                            );
                        }
                    },
                    _ = (e) => (t) => {
                        b && null != t && t.stopPropagation(), e(t);
                    };
                return (0, r.jsx)(
                    c.Gt,
                    {
                        value: C,
                        children:
                            null != t
                                ? (0, r.jsx)(m.Z, {
                                      targetElementRef: A,
                                      user: t,
                                      guildId: h,
                                      channelId: n,
                                      messageId: g,
                                      roleId: null == e ? void 0 : e.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, t) => {
                                          var { onClick: n } = e,
                                              r = S(e, ["onClick"]);
                                          return p(y({ onClick: _(n) }, r), t);
                                      },
                                  })
                                : p(void 0, void 0),
                    },
                    o,
                );
            },
            [C, t, n, h, g, D, b, O, N, R, null == w ? void 0 : w.animate, P, I],
        )
    );
}
