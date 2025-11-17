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
    _ = n(7284),
    p = n(402235),
    h = n(456077),
    m = n(592125),
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
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e, t) {
    return i.useCallback(
        (n) => {
            let r = m.Z.getChannel(t);
            null != r && null != e && (0, g.Pv)(n, e, r);
        },
        [e, t],
    );
}
function A(e) {
    let {
            user: t,
            channelId: n,
            guildId: m,
            messageId: g,
            stopPropagation: b = !1,
            ariaLabel: O,
            enableDisplayNameStyles: T = !1,
        } = e,
        A = i.useRef(null),
        { analyticsLocations: C } = (0, c.ZP)(l.Z.USERNAME),
        N = (0, p.ZP)(m, null == t ? void 0 : t.id),
        R = (0, u.Z)({
            userId: null == t ? void 0 : t.id,
            guildId: m,
        }),
        P = (0, _.j)({ displayNameStyles: R }),
        D = S(t, n),
        w = i.useContext(o.d);
    return (
        (0, E.Z)({
            subscribeToGroupId: g,
            authorId: null == t ? void 0 : t.id,
            shouldSubscribe: T && null != R && null == m,
        }),
        i.useCallback(
            (e) => (i, o) => {
                let l = null == e ? void 0 : e.colorStrings,
                    u = N && null != l && null != l.primaryColor && null != l.secondaryColor,
                    _ = (t, n) => {
                        var o, c, _;
                        if (!T || null == R || null != m)
                            return (0, r.jsx)(
                                s.rz2,
                                v(y({}, null != t ? t : {}), {
                                    ref: A,
                                    onContextMenu: D,
                                    name: null != (c = (0, s.qgQ)(i)) ? c : "",
                                    colorString: null != (_ = null == e ? void 0 : e.colorString) ? _ : null,
                                    roleName: null == e ? void 0 : e.colorRoleName,
                                    colorStrings: u ? l : null,
                                    "aria-label": O,
                                    className: P,
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
                                        displayNameStyles: R,
                                        effectDisplayType: e,
                                        shouldUnderlineOnHover: !0,
                                        loop: !0,
                                    }),
                                }),
                            );
                        }
                    },
                    p = (e) => (t) => {
                        b && null != t && t.stopPropagation(), e(t);
                    };
                return (0, r.jsx)(
                    c.Gt,
                    {
                        value: C,
                        children:
                            null != t
                                ? (0, r.jsx)(h.Z, {
                                      targetElementRef: A,
                                      user: t,
                                      guildId: m,
                                      channelId: n,
                                      messageId: g,
                                      roleId: null == e ? void 0 : e.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, t) => {
                                          var { onClick: n } = e,
                                              r = I(e, ["onClick"]);
                                          return _(y({ onClick: p(n) }, r), t);
                                      },
                                  })
                                : _(void 0, void 0),
                    },
                    o,
                );
            },
            [C, t, n, m, g, D, b, O, N, P, null == w ? void 0 : w.animate, R, T],
        )
    );
}
