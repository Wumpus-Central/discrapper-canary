let l;
n.d(t, { A: () => T }), n(896048), n(321073), n(733351), n(747238);
var r,
    i = n(311907),
    a = n(73153),
    s = n(308368),
    o = n(629357),
    c = n(47167),
    u = n(734057),
    d = n(71393),
    f = n(375492),
    p = n(290863),
    b = n(994500),
    g = n(287809),
    m = n(645959),
    h = n(652215);
function A(e, t, n) {
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
let y = [o.rD.TEXT_CHANNEL, o.rD.GROUP_DM, o.rD.USER],
    _ = null,
    E = null,
    v = [],
    O = [];
function x(e) {
    (v = [...v, e]),
        (O = O.map((e) => {
            var t, n;
            return (
                (t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                A(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n = { sent: v.includes(e.data.record.id) }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t
            );
        })),
        j.emitChange();
}
function S() {
    (_ = null), null != l && (l.destroy(), (l = null)), null != E && E();
}
function N() {
    let e = null != _ && null != _.application_id ? f.A.getApplicationActivity(_.application_id) : null;
    if (null != _ && (null == e || null == e.party || null == e.party.id)) return S();
}
class C extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(u.A, d.A, f.A, p.A, m.A, g.default);
    }
    getActivity() {
        return _;
    }
    getQuery() {
        var e;
        return null != (e = null == l ? void 0 : l.query) ? e : "";
    }
    getResults() {
        return O;
    }
}
A(C, "displayName", "ActivityInviteModalStore");
let j = new C(a.h, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (_ = e.activity),
                (E = e.resolve),
                (v = []),
                null == l &&
                    (l = new o.Ay(
                        (e, t) => {
                            let n;
                            (O = (
                                "" === t.trim()
                                    ? ((n = []),
                                      m.A.getPrivateChannelIds().forEach((e) => {
                                          let t = u.A.getChannel(e);
                                          if (null != t)
                                              if (t.type === h.rbe.DM) {
                                                  let e = t.getRecipientId(),
                                                      l = null != e ? g.default.getUser(e) : null;
                                                  null != l &&
                                                      n.push({
                                                          type: o.rD.USER,
                                                          record: l,
                                                          score: 0,
                                                      });
                                              } else
                                                  t.isMultiUserDM() &&
                                                      n.push({
                                                          type: o.rD.GROUP_DM,
                                                          record: t,
                                                          score: 0,
                                                      });
                                      }),
                                      n)
                                    : e
                            )
                                .map((e) => {
                                    switch (e.type) {
                                        case o.rD.USER: {
                                            let { record: t } = e;
                                            return {
                                                type: o.rD.USER,
                                                sent: v.includes(t.id),
                                                status: p.A.getStatus(t.id),
                                                data: e,
                                            };
                                        }
                                        case o.rD.TEXT_CHANNEL: {
                                            var t;
                                            let { record: n } = e,
                                                l = u.A.getChannel(n.parent_id),
                                                r = d.A.getGuild(n.guild_id);
                                            return {
                                                type: o.rD.TEXT_CHANNEL,
                                                sent: v.includes(n.id),
                                                categoryName: null != l ? (0, c.m1)(l, g.default, b.A) : "",
                                                guildName: null != (t = null == r ? void 0 : r.name) ? t : "",
                                                data: e,
                                            };
                                        }
                                        case o.rD.GROUP_DM: {
                                            let { record: t } = e;
                                            return {
                                                type: o.rD.GROUP_DM,
                                                sent: v.includes(t.id),
                                                data: e,
                                            };
                                        }
                                        default:
                                            return null;
                                    }
                                })
                                .filter((e) => null != e)),
                                j.emitChange();
                        },
                        y,
                        100,
                    )),
                l.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != l && l.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == _) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? s.A.sendActivityInvite({
                      channelId: t,
                      type: h.xL.JOIN,
                      activity: _,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => x(t))
                : null != n &&
                  s.A.sendActivityInviteUser({
                      userId: n,
                      type: h.xL.JOIN,
                      activity: _,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => x(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: S,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != _ && (S(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: N,
        RPC_APP_DISCONNECTED: N,
    }),
    T = 21552 == n.j ? j : null;
