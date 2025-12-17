n.d(t, { Z: () => y });
var i = n(54381);
n(473749);
var r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(24124),
    c = n(906732),
    u = n(522651),
    d = n(728285),
    p = n(430824),
    f = n(293273),
    h = n(496675),
    m = n(871499),
    g = n(981631),
    b = n(388032);
function C(e) {
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
}
function y(e) {
    var {
            applicationId: t,
            stream: r,
            channel: y,
            exitFullScreen: v,
            appContext: x,
            analyticsLocation: O,
            guildScheduledEvent: E,
            shouldPrioritizeGroupPlusIcon: j = !1,
            isRichPresenceInvite: S = !1,
            iconClassName: _,
            look: P,
            size: I,
            buttonText: Z,
            color: T,
        } = e,
        N = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
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
        M = null == y ? void 0 : y.getGuildId(),
        R = (0, a.e7)([p.Z], () => (null != M ? p.Z.getGuild(M) : null), [M]),
        L = (0, a.e7)([f.Z], () => (null != t ? f.Z.getApplicationActivity(t) : void 0)),
        D = null == t || j ? o.ejJ : o.gQj,
        k = null != t ? b.intl.string(b.t["OzOM/q"]) : b.intl.string(b.t["6F9ivu"]);
    return null != L && S
        ? (0, i.jsx)(m.Z, {
              onClick: () => {
                  null != w && (0, u.v)(w, u.d.INVITE), s.h7(L, !1, A);
              },
              iconComponent: D,
              label: k,
              iconClassName: _,
              look: P,
              size: I,
              buttonText: Z,
              color: null != T ? T : void 0,
          })
        : null != R && null != y && h.Z.can(g.Plq.CREATE_INSTANT_INVITE, y)
          ? (0, i.jsx)(
                m.Z,
                C(
                    {
                        onClick: () => {
                            l()(null != R, "guild cannot be null"),
                                l()(null != y, "channel cannot be null"),
                                null != w && (0, u.v)(w, u.d.INVITE),
                                (function (e) {
                                    let {
                                        guild: t,
                                        channel: r,
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
                                                    n.e("49049"),
                                                    n.e("7654"),
                                                    n.e("97016"),
                                                ]).then(n.bind(n, 560114));
                                                return (n) => {
                                                    var o, s;
                                                    return (0, i.jsx)(
                                                        e,
                                                        ((o = C({}, n)),
                                                        (s = s =
                                                            {
                                                                guild: t,
                                                                channel: r,
                                                                streamUserId: l,
                                                                applicationId: a,
                                                                analyticsLocation: u,
                                                                source: r.isGuildStageVoice()
                                                                    ? g.t4x.STAGE_CHANNEL
                                                                    : g.t4x.STREAM_INVITE,
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
                                                                      var i = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, i);
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
                                                contextKey: s === g.IlC.POPOUT ? o.u1M : o.z1l,
                                            },
                                        );
                                })({
                                    guild: R,
                                    channel: y,
                                    streamUserId: null == r ? void 0 : r.ownerId,
                                    applicationId: t,
                                    appContext: null != x ? x : A,
                                    exitFullScreen: v,
                                    analyticsLocation: O,
                                    guildScheduledEvent: E,
                                });
                        },
                        iconComponent: D,
                        label: k,
                        iconClassName: _,
                        look: P,
                        size: I,
                        color: T,
                        buttonText: Z,
                    },
                    N,
                ),
            )
          : null;
}
