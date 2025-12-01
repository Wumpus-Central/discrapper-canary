n.d(t, { Z: () => m }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(638730),
    o = n(167762),
    s = n(293273),
    u = n(594174),
    c = n(444295),
    d = n(603618),
    h = n(388627),
    p = n(981631),
    f = n(275525);
function m(e) {
    let { locked: t } = e,
        n = (0, h.II)(),
        m = null == n ? void 0 : n.id,
        g = null == n ? void 0 : n.altId,
        y = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        O = null != g ? g : m,
        [E, v] = r.useState(new Set()),
        [S, b] = r.useState(new Set()),
        x = r.useCallback((e, t, n) => {
            v((n) => {
                if (t) {
                    if (n.has(e)) return n;
                    n.add(e);
                } else {
                    if (!n.has(e)) return n;
                    n.delete(e);
                }
                return new Set(n);
            }),
                b((i) => {
                    if (n && t) {
                        if (i.has(e)) return i;
                        i.add(e);
                    } else {
                        if (!i.has(e)) return i;
                        i.delete(e);
                    }
                    return new Set(i);
                });
        }, []),
        j = (0, c.ee)(() => E, [E]),
        I = (0, c.ee)(() => S, [S]),
        C = (0, a.h)(c.zi, 3000, []);
    r.useEffect(() => {
        0 === j.size ||
            t ||
            C(p.Odu.FRIENDS, {
                locked: t,
                shownUserIds: Array.from(j),
                liveUserIds: Array.from(I),
                contentInventoryIds: [],
            });
    }, [j, I, t, C]);
    let Z = (0, l.e7)([s.Z], () => (null == O ? null : s.Z.getApplicationActivity(O)), [O]),
        N = (0, r.useCallback)((e, t) => {
            let n = (function (e) {
                switch (e) {
                    case o.sG.OPEN_DIRECT_MESSAGE:
                        return {
                            type: c.Qu.FRIEND_LIST,
                            value: c.bk.CHAT,
                        };
                    case o.sG.ACCEPT_FRIEND_REQUEST:
                        return {
                            type: c.Qu.FRIEND_REQUEST,
                            value: c.bk.ACCEPT_REQUEST,
                        };
                    case o.sG.DECLINE_FRIEND_REQUEST:
                        return {
                            type: c.Qu.FRIEND_REQUEST,
                            value: c.bk.DECLINE_REQUEST,
                        };
                    case o.sG.CANCEL_FRIEND_REQUEST:
                        return {
                            type: c.Qu.FRIEND_REQUEST,
                            value: c.bk.CANCEL_REQUEST,
                        };
                    case o.sG.SEND_FRIEND_REQUEST:
                        return {
                            type: c.Qu.FRIEND_REQUEST,
                            value: c.bk.SEND_REQUEST,
                        };
                    case o.sG.SEND_ACTIVITY_INVITE:
                        return {
                            type: c.Qu.INVITE,
                            value: c.bk.INVITE_SENT,
                        };
                    case o.sG.ASK_TO_JOIN:
                        return {
                            type: c.Qu.INVITE,
                            value: c.bk.JOIN_REQUEST_SENT,
                        };
                    case o.sG.USER_CONTEXT_MENU:
                        return {
                            type: c.Qu.FRIEND_LIST,
                            value: c.bk.SETTINGS_OPENED,
                        };
                    case o.sG.OPEN_FRIEND_MODAL:
                        return {
                            type: c.Qu.FRIEND_LIST,
                            value: c.bk.PROFILE_OPENED,
                        };
                    case o.sG.OPEN_SETTINGS_MODAL:
                        return {
                            type: c.Qu.FRIEND_LIST,
                            value: c.bk.SETTINGS_OPENED,
                        };
                    case o.sG.SEARCH_FRIENDS:
                        return {
                            type: c.Qu.FRIEND_LIST,
                            value: c.bk.SEARCH,
                        };
                    default:
                        return null;
                }
            })(e);
            if (null != n) {
                var i, r;
                (0, c.Ws)(
                    p.Odu.FRIENDS,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, n)),
                    (r = r = { userId: t }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    i),
                );
            }
        }, []),
        w = (0, r.useCallback)(() => {}, []),
        T = (0, r.useCallback)(
            () =>
                (0, i.jsx)(d.lE, {
                    activity: Z,
                    currentUser: y,
                    showInviteButton: !1,
                }),
            [Z, y],
        );
    return t
        ? null
        : (0, i.jsx)(o.r1, {
              containerClassName: f.container,
              listClassName: f.list,
              closePopout: w,
              renderHeader: T,
              appContext: p.IlC.OVERLAY,
              onAction: N,
              onFriendVisible: x,
          });
}
