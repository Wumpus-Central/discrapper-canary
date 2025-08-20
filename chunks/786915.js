n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(512722),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(24124),
    c = n(40851),
    u = n(906732),
    d = n(522651),
    p = n(430824),
    h = n(293273),
    f = n(496675),
    m = n(871499),
    g = n(981631),
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
function _(e) {
    var {
            applicationId: t,
            stream: i,
            channel: _,
            exitFullScreen: C,
            appContext: x,
            analyticsLocation: v,
            guildScheduledEvent: O,
            shouldPrioritizeGroupPlusIcon: j = !1,
            isRichPresenceInvite: E = !1,
            iconClassName: S,
            look: P,
            size: I,
            buttonText: Z,
            color: T,
        } = e,
        N = (function (e, t) {
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
    let A = (0, c.bp)(),
        { parentAnalyticsLocation: w } = (0, u.ZP)(),
        R = null == _ ? void 0 : _.getGuildId(),
        M = (0, a.e7)([p.Z], () => (null != R ? p.Z.getGuild(R) : null), [R]),
        k = (0, a.e7)([h.Z], () => (null != t ? h.Z.getApplicationActivity(t) : void 0)),
        D = null == t || j ? o.ejJ : o.gQj,
        L = null != t ? b.intl.string(b.t["OzOM/v"]) : b.intl.string(b.t["6F9ivr"]);
    return null != k && E
        ? (0, r.jsx)(m.Z, {
              onClick: () => {
                  null != w && (0, d.v)(w, d.d.INVITE), s.h7(k, !1, A);
              },
              iconComponent: D,
              label: L,
              iconClassName: S,
              look: P,
              size: I,
              buttonText: Z,
              color: null != T ? T : void 0,
          })
        : null != M && null != _ && f.Z.can(g.Plq.CREATE_INSTANT_INVITE, _)
          ? (0, r.jsx)(
                m.Z,
                y(
                    {
                        onClick: () => {
                            l()(null != M, "guild cannot be null"),
                                l()(null != _, "channel cannot be null"),
                                null != w && (0, d.v)(w, d.d.INVITE),
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
                                                    n.e("62292"),
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
                                                contextKey: s === g.IlC.POPOUT ? o.u1M : o.z1l,
                                            },
                                        );
                                })({
                                    guild: M,
                                    channel: _,
                                    streamUserId: null == i ? void 0 : i.ownerId,
                                    applicationId: t,
                                    appContext: null != x ? x : A,
                                    exitFullScreen: C,
                                    analyticsLocation: v,
                                    guildScheduledEvent: O,
                                });
                        },
                        iconComponent: D,
                        label: L,
                        iconClassName: S,
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
