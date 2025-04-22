n.d(t, { Z: () => C });
var r = n(200651);
n(192379);
var i = n(512722),
    l = n.n(i),
    o = n(252258),
    a = n(442837),
    s = n(481060),
    c = n(24124),
    u = n(40851),
    d = n(906732),
    p = n(522651),
    h = n(430824),
    f = n(293273),
    m = n(496675),
    g = n(871499),
    b = n(981631),
    _ = n(388032);
function y(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function C(e) {
    var { applicationId: t, stream: i, channel: C, exitFullScreen: x, appContext: v, analyticsLocation: j, guildScheduledEvent: O, shouldPrioritizeGroupPlusIcon: E = !1, embeddedActivity: I, iconClassName: S, look: P, size: Z, buttonText: N } = e,
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['applicationId', 'stream', 'channel', 'exitFullScreen', 'appContext', 'analyticsLocation', 'guildScheduledEvent', 'shouldPrioritizeGroupPlusIcon', 'embeddedActivity', 'iconClassName', 'look', 'size', 'buttonText']);
    let A = (0, u.bp)(),
        { parentAnalyticsLocation: w } = (0, d.ZP)(),
        R = null == C ? void 0 : C.getGuildId(),
        k = (0, a.e7)([h.Z], () => (null != R ? h.Z.getGuild(R) : null), [R]),
        M = (0, a.e7)([f.Z], () => (null != t ? f.Z.getApplicationActivity(t) : void 0));
    return null != M && (null == I ? void 0 : I.location.kind) === o.E.CONTEXTLESS
        ? (0, r.jsx)(g.Z, {
              onClick: () => {
                  null != w && (0, p.v)(w, p.d.INVITE), c.h7(M, !1, A);
              },
              iconComponent: null == t || E ? s.ejJ : s.gQj,
              label: null != t ? _.intl.string(_.t['OzOM/v']) : _.intl.string(_.t['6F9ivr']),
              iconClassName: S,
              look: P,
              size: Z,
              buttonText: N
          })
        : null != k && null != C && m.Z.can(b.Plq.CREATE_INSTANT_INVITE, C)
          ? (0, r.jsx)(
                g.Z,
                y(
                    {
                        onClick: () => {
                            l()(null != k, 'guild cannot be null'),
                                l()(null != C, 'channel cannot be null'),
                                null != w && (0, p.v)(w, p.d.INVITE),
                                (function (e) {
                                    let { guild: t, channel: i, streamUserId: l, applicationId: o, appContext: a, exitFullScreen: c, analyticsLocation: u, guildScheduledEvent: d } = e;
                                    null == c || c(),
                                        (0, s.ZDy)(
                                            async () => {
                                                let { default: e } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                                                return (n) => {
                                                    var a, s;
                                                    return (0, r.jsx)(
                                                        e,
                                                        ((a = y({}, n)),
                                                        (s = s =
                                                            {
                                                                guild: t,
                                                                channel: i,
                                                                streamUserId: l,
                                                                applicationId: o,
                                                                analyticsLocation: u,
                                                                source: i.isGuildStageVoice() ? b.t4x.STAGE_CHANNEL : b.t4x.STREAM_INVITE,
                                                                guildScheduledEvent: d
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(s)).forEach(function (e) {
                                                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                                                              }),
                                                        a)
                                                    );
                                                };
                                            },
                                            {
                                                modalKey: 'stream-invite-modal',
                                                contextKey: a === b.IlC.POPOUT ? s.u1M : s.z1l
                                            }
                                        );
                                })({
                                    guild: k,
                                    channel: C,
                                    streamUserId: null == i ? void 0 : i.ownerId,
                                    applicationId: t,
                                    appContext: null != v ? v : A,
                                    exitFullScreen: x,
                                    analyticsLocation: j,
                                    guildScheduledEvent: O
                                });
                        },
                        iconComponent: null == t || E ? s.ejJ : s.gQj,
                        label: null != t ? _.intl.string(_.t['OzOM/v']) : _.intl.string(_.t['6F9ivr']),
                        iconClassName: S,
                        look: P,
                        size: Z,
                        buttonText: N
                    },
                    T
                )
            )
          : null;
}
