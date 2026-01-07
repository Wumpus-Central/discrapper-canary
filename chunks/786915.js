n.d(t, { Z: () => v });
var r = n(54381);
n(473749);
var i = n(512722),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(24124),
    c = n(906732),
    u = n(522651),
    d = n(728285),
    p = n(430824),
    f = n(293273),
    h = n(496675),
    g = n(871499),
    m = n(981631),
    b = n(388032);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e) {
    var {
            applicationId: t,
            stream: i,
            channel: v,
            exitFullScreen: O,
            appContext: j,
            analyticsLocation: x,
            guildScheduledEvent: C,
            shouldPrioritizeGroupPlusIcon: E = !1,
            isRichPresenceInvite: S = !1,
            iconClassName: _,
            look: I,
            size: P,
            buttonText: Z,
            color: N,
        } = e,
        T = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, [
            "applicationId",
            "stream",
            "channel",
            "exitFullScreen",
            "appContext",
            "analyticsLocation",
            "guildScheduledEvent",
            "shouldPrioritizeGroupPlusIcon",
            "isRichPresenceInvite",
            "iconClassName",
            "look",
            "size",
            "buttonText",
            "color",
        ]);
    let A = (0, d.bp)(),
        { parentAnalyticsLocation: w } = (0, c.ZP)(),
        R = null == v ? void 0 : v.getGuildId(),
        D = (0, a.e7)([p.Z], () => (null != R ? p.Z.getGuild(R) : null), [R]),
        M = (0, a.e7)([f.Z], () => (null != t ? f.Z.getApplicationActivity(t) : void 0)),
        k = null == t || E ? o.ejJ : o.gQj,
        L = null != t ? b.intl.string(b.t["OzOM/q"]) : b.intl.string(b.t["6F9ivu"]);
    return null != M && S
        ? (0, r.jsx)(g.Z, {
              onClick: () => {
                  null != w && (0, u.v)(w, u.d.INVITE), s.h7(M, !1, A);
              },
              iconComponent: k,
              label: L,
              iconClassName: _,
              look: I,
              size: P,
              buttonText: Z,
              color: null != N ? N : void 0,
          })
        : null != D && null != v && h.Z.can(m.Plq.CREATE_INSTANT_INVITE, v)
          ? (0, r.jsx)(
                g.Z,
                y(
                    {
                        onClick: () => {
                            l()(null != D, "guild cannot be null"),
                                l()(null != v, "channel cannot be null"),
                                null != w && (0, u.v)(w, u.d.INVITE),
                                (function (e) {
                                    let {
                                        guild: t,
                                        channel: i,
                                        streamUserId: l,
                                        applicationId: a,
                                        appContext: s,
                                        exitFullScreen: c,
                                        analyticsLocation: u,
                                        guildScheduledEvent: d,
                                    } = e;
                                    null == c || c(),
                                        (0, o.ZDy)(
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("7654"),
                                                    n.e("49049"),
                                                    n.e("97016"),
                                                ]).then(n.bind(n, 560114));
                                                return (n) => {
                                                    var o, s;
                                                    return (0, r.jsx)(
                                                        e,
                                                        ((o = y({}, n)),
                                                        (s = s =
                                                            {
                                                                guild: t,
                                                                channel: i,
                                                                streamUserId: l,
                                                                applicationId: a,
                                                                analyticsLocation: u,
                                                                source: i.isGuildStageVoice()
                                                                    ? m.t4x.STAGE_CHANNEL
                                                                    : m.t4x.STREAM_INVITE,
                                                                guildScheduledEvent: d,
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  o,
                                                                  Object.getOwnPropertyDescriptors(s),
                                                              )
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(s)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      o,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(s, e),
                                                                  );
                                                              }),
                                                        o),
                                                    );
                                                };
                                            },
                                            {
                                                modalKey: "stream-invite-modal",
                                                contextKey: s === m.IlC.POPOUT ? o.u1M : o.z1l,
                                            },
                                        );
                                })({
                                    guild: D,
                                    channel: v,
                                    streamUserId: null == i ? void 0 : i.ownerId,
                                    applicationId: t,
                                    appContext: null != j ? j : A,
                                    exitFullScreen: O,
                                    analyticsLocation: x,
                                    guildScheduledEvent: C,
                                });
                        },
                        iconComponent: k,
                        label: L,
                        iconClassName: _,
                        look: I,
                        size: P,
                        color: N,
                        buttonText: Z,
                    },
                    T,
                ),
            )
          : null;
}
