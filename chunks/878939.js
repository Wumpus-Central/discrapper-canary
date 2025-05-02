n.d(t, { Z: () => m }), n(388685);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(638730),
    a = n(167762),
    s = n(293273),
    c = n(594174),
    u = n(444295),
    d = n(603618),
    p = n(388627),
    f = n(981631),
    h = n(852266);
function m(e) {
    let { locked: t } = e,
        n = (0, p.II)(),
        m = null == n ? void 0 : n.id,
        g = null == n ? void 0 : n.altId,
        y = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        O = null != g ? g : m,
        [v, b] = r.useState(new Set()),
        [E, _] = r.useState(new Set()),
        I = r.useCallback((e, t, n) => {
            b((n) => {
                if (t) {
                    if (n.has(e)) return n;
                    n.add(e);
                } else {
                    if (!n.has(e)) return n;
                    n.delete(e);
                }
                return new Set(n);
            }),
                _((i) => {
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
        x = (0, u.ee)(() => v, [v]),
        j = (0, u.ee)(() => E, [E]),
        S = (0, l.h)(u.zi, 3000, []);
    r.useEffect(() => {
        0 === x.size ||
            t ||
            S(f.Odu.FRIENDS, {
                locked: t,
                shownUserIds: Array.from(x),
                liveUserIds: Array.from(j),
                contentInventoryIds: []
            });
    }, [x, j, t, S]);
    let C = (0, o.e7)([s.Z], () => (null == O ? null : s.Z.getApplicationActivity(O)), [O]),
        N = (0, r.useCallback)((e, t) => {
            let n = (function (e) {
                switch (e) {
                    case a.sG.OPEN_DIRECT_MESSAGE:
                        return {
                            type: u.Qu.FRIEND_LIST,
                            value: u.bk.CHAT
                        };
                    case a.sG.ACCEPT_FRIEND_REQUEST:
                        return {
                            type: u.Qu.FRIEND_REQUEST,
                            value: u.bk.ACCEPT_REQUEST
                        };
                    case a.sG.DECLINE_FRIEND_REQUEST:
                        return {
                            type: u.Qu.FRIEND_REQUEST,
                            value: u.bk.DECLINE_REQUEST
                        };
                    case a.sG.CANCEL_FRIEND_REQUEST:
                        return {
                            type: u.Qu.FRIEND_REQUEST,
                            value: u.bk.CANCEL_REQUEST
                        };
                    case a.sG.SEND_FRIEND_REQUEST:
                        return {
                            type: u.Qu.FRIEND_REQUEST,
                            value: u.bk.SEND_REQUEST
                        };
                    case a.sG.SEND_ACTIVITY_INVITE:
                        return {
                            type: u.Qu.INVITE,
                            value: u.bk.INVITE_SENT
                        };
                    case a.sG.ASK_TO_JOIN:
                        return {
                            type: u.Qu.INVITE,
                            value: u.bk.JOIN_REQUEST_SENT
                        };
                    case a.sG.USER_CONTEXT_MENU:
                        return {
                            type: u.Qu.FRIEND_LIST,
                            value: u.bk.SETTINGS_OPENED
                        };
                    case a.sG.OPEN_FRIEND_MODAL:
                        return {
                            type: u.Qu.FRIEND_LIST,
                            value: u.bk.PROFILE_OPENED
                        };
                    case a.sG.OPEN_SETTINGS_MODAL:
                        return {
                            type: u.Qu.FRIEND_LIST,
                            value: u.bk.SETTINGS_OPENED
                        };
                    case a.sG.SEARCH_FRIENDS:
                        return {
                            type: u.Qu.FRIEND_LIST,
                            value: u.bk.SEARCH
                        };
                    default:
                        return null;
                }
            })(e);
            if (null != n) {
                var i, r;
                (0, u.Ws)(
                    f.Odu.FRIENDS,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
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
                    i)
                );
            }
        }, []),
        Z = (0, r.useCallback)(() => {}, []),
        w = (0, r.useCallback)(
            () =>
                (0, i.jsx)(d.lE, {
                    activity: C,
                    currentUser: y,
                    showInviteButton: !1
                }),
            [C, y]
        );
    return t
        ? null
        : (0, i.jsx)(a.r1, {
              containerClassName: h.container,
              listClassName: h.list,
              closePopout: Z,
              renderHeader: w,
              appContext: f.IlC.OVERLAY,
              onAction: N,
              onFriendVisible: I
          });
}
