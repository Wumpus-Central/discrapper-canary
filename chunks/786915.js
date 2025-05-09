n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(512722),
    l = n.n(i),
    o = n(442837),
    a = n(481060),
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
function _(e) {
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
function y(e) {
    var { applicationId: t, stream: i, channel: y, exitFullScreen: x, appContext: C, analyticsLocation: v, guildScheduledEvent: j, shouldPrioritizeGroupPlusIcon: O = !1, isContextlessActivity: E = !1, iconClassName: I, look: P, size: S, buttonText: Z, color: N } = e,
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
        })(e, ['applicationId', 'stream', 'channel', 'exitFullScreen', 'appContext', 'analyticsLocation', 'guildScheduledEvent', 'shouldPrioritizeGroupPlusIcon', 'isContextlessActivity', 'iconClassName', 'look', 'size', 'buttonText', 'color']);
    let A = (0, c.bp)(),
        { parentAnalyticsLocation: w } = (0, u.ZP)(),
        R = null == y ? void 0 : y.getGuildId(),
        k = (0, o.e7)([p.Z], () => (null != R ? p.Z.getGuild(R) : null), [R]),
        M = (0, o.e7)([h.Z], () => (null != t ? h.Z.getApplicationActivity(t) : void 0)),
        L = null == t || O ? a.ejJ : a.gQj,
        D = null != t ? b.intl.string(b.t['OzOM/v']) : b.intl.string(b.t['6F9ivr']);
    return null != M && E
        ? (0, r.jsx)(m.Z, {
              onClick: () => {
                  null != w && (0, d.v)(w, d.d.INVITE), s.h7(M, !1, A);
              },
              iconComponent: L,
              label: D,
              iconClassName: I,
              look: P,
              size: S,
              buttonText: Z,
              color: null != N ? N : void 0
          })
        : null != k && null != y && f.Z.can(g.Plq.CREATE_INSTANT_INVITE, y)
          ? (0, r.jsx)(
                m.Z,
                _(
                    {
                        onClick: () => {
                            l()(null != k, 'guild cannot be null'),
                                l()(null != y, 'channel cannot be null'),
                                null != w && (0, d.v)(w, d.d.INVITE),
                                (function (e) {
                                    let { guild: t, channel: i, streamUserId: l, applicationId: o, appContext: s, exitFullScreen: c, analyticsLocation: u, guildScheduledEvent: d } = e;
                                    null == c || c(),
                                        (0, a.ZDy)(
                                            async () => {
                                                let { default: e } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                                                return (n) => {
                                                    var a, s;
                                                    return (0, r.jsx)(
                                                        e,
                                                        ((a = _({}, n)),
                                                        (s = s =
                                                            {
                                                                guild: t,
                                                                channel: i,
                                                                streamUserId: l,
                                                                applicationId: o,
                                                                analyticsLocation: u,
                                                                source: i.isGuildStageVoice() ? g.t4x.STAGE_CHANNEL : g.t4x.STREAM_INVITE,
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
                                                contextKey: s === g.IlC.POPOUT ? a.u1M : a.z1l
                                            }
                                        );
                                })({
                                    guild: k,
                                    channel: y,
                                    streamUserId: null == i ? void 0 : i.ownerId,
                                    applicationId: t,
                                    appContext: null != C ? C : A,
                                    exitFullScreen: x,
                                    analyticsLocation: v,
                                    guildScheduledEvent: j
                                });
                        },
                        iconComponent: L,
                        label: D,
                        iconClassName: I,
                        look: P,
                        size: S,
                        buttonText: Z
                    },
                    T
                )
            )
          : null;
}
