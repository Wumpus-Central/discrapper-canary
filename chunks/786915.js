n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(512722),
    l = n.n(i),
    o = n(115911),
    a = n(442837),
    s = n(481060),
    c = n(24124),
    u = n(40851),
    d = n(430824),
    p = n(293273),
    h = n(496675),
    f = n(871499),
    m = n(981631),
    g = n(388032);
function b(e) {
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
function _(e) {
    var { applicationId: t, stream: i, channel: _, exitFullScreen: C, appContext: v, analyticsLocation: y, guildScheduledEvent: x, shouldPrioritizeGroupPlusIcon: j = !1, embeddedActivity: O } = e,
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['applicationId', 'stream', 'channel', 'exitFullScreen', 'appContext', 'analyticsLocation', 'guildScheduledEvent', 'shouldPrioritizeGroupPlusIcon', 'embeddedActivity']);
    let E = (0, u.bp)(),
        P = null == _ ? void 0 : _.getGuildId(),
        I = (0, a.e7)([d.Z], () => (null != P ? d.Z.getGuild(P) : null), [P]),
        S = (0, a.e7)([p.Z], () => (null != t ? p.Z.getApplicationActivity(t) : void 0));
    return null != S && (null == O ? void 0 : O.location.kind) === o.X.CONTEXTLESS
        ? (0, r.jsx)(f.Z, {
              onClick: () => {
                  c.h7(S, !1, E);
              },
              iconComponent: null == t || j ? s.ejJ : s.gQj,
              label: null != t ? g.NW.string(g.t['OzOM/v']) : g.NW.string(g.t['6F9ivr'])
          })
        : null != I && null != _ && h.Z.can(m.Plq.CREATE_INSTANT_INVITE, _)
          ? (0, r.jsx)(
                f.Z,
                b(
                    {
                        onClick: () => {
                            l()(null != I, 'guild cannot be null'),
                                l()(null != _, 'channel cannot be null'),
                                (function (e) {
                                    let { guild: t, channel: i, streamUserId: l, applicationId: o, appContext: a, exitFullScreen: c, analyticsLocation: u, guildScheduledEvent: d } = e;
                                    null == c || c(),
                                        (0, s.ZDy)(
                                            async () => {
                                                let { default: e } = await Promise.all([n.e('7654'), n.e('33781')]).then(n.bind(n, 560114));
                                                return (n) => {
                                                    var a, s;
                                                    return (0, r.jsx)(
                                                        e,
                                                        ((a = b({}, n)),
                                                        (s = s =
                                                            {
                                                                guild: t,
                                                                channel: i,
                                                                streamUserId: l,
                                                                applicationId: o,
                                                                analyticsLocation: u,
                                                                source: i.isGuildStageVoice() ? m.t4x.STAGE_CHANNEL : m.t4x.STREAM_INVITE,
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
                                                contextKey: a === m.IlC.POPOUT ? s.u1M : s.z1l
                                            }
                                        );
                                })({
                                    guild: I,
                                    channel: _,
                                    streamUserId: null == i ? void 0 : i.ownerId,
                                    applicationId: t,
                                    appContext: null != v ? v : E,
                                    exitFullScreen: C,
                                    analyticsLocation: y,
                                    guildScheduledEvent: x
                                });
                        },
                        iconComponent: null == t || j ? s.ejJ : s.gQj,
                        label: null != t ? g.NW.string(g.t['OzOM/v']) : g.NW.string(g.t['6F9ivr'])
                    },
                    N
                )
            )
          : null;
}
