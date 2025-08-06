n.d(t, { Z: () => A });
var r = n(255367);
n(73800);
var i = n(512722),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(24124),
    c = n(40851),
    u = n(906732),
    d = n(522651),
    f = n(430824),
    _ = n(293273),
    p = n(496675),
    h = n(871499),
    m = n(981631),
    g = n(388032);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            }));
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function T(e, t) {
    return null != e && null != t && p.Z.can(m.Plq.CREATE_INSTANT_INVITE, t);
}
function S(e) {
    let { guild: t, channel: i, streamUserId: o, applicationId: a, appContext: l, exitFullScreen: c, analyticsLocation: u, guildScheduledEvent: d } = e;
    (null == c || c(),
        (0, s.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('49049'), n.e('29328')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        O(b({}, n), {
                            guild: t,
                            channel: i,
                            streamUserId: o,
                            applicationId: a,
                            analyticsLocation: u,
                            source: i.isGuildStageVoice() ? m.t4x.STAGE_CHANNEL : m.t4x.STREAM_INVITE,
                            guildScheduledEvent: d
                        })
                    );
            },
            {
                modalKey: 'stream-invite-modal',
                contextKey: l === m.IlC.POPOUT ? s.u1M : s.z1l
            }
        ));
}
function A(e) {
    var { applicationId: t, stream: n, channel: i, exitFullScreen: p, appContext: m, analyticsLocation: E, guildScheduledEvent: y, shouldPrioritizeGroupPlusIcon: O = !1, isRichPresenceInvite: I = !1, iconClassName: A, look: N, size: C, buttonText: R, color: P } = e,
        w = v(e, ['applicationId', 'stream', 'channel', 'exitFullScreen', 'appContext', 'analyticsLocation', 'guildScheduledEvent', 'shouldPrioritizeGroupPlusIcon', 'isRichPresenceInvite', 'iconClassName', 'look', 'size', 'buttonText', 'color']);
    let D = (0, c.bp)(),
        { parentAnalyticsLocation: L } = (0, u.ZP)(),
        x = null == i ? void 0 : i.getGuildId(),
        M = (0, a.e7)([f.Z], () => (null != x ? f.Z.getGuild(x) : null), [x]),
        k = (0, a.e7)([_.Z], () => (null != t ? _.Z.getApplicationActivity(t) : void 0)),
        j = null == t || O ? s.ejJ : s.gQj,
        U = null != t ? g.intl.string(g.t['OzOM/v']) : g.intl.string(g.t['6F9ivr']);
    if (null != k && I) {
        let e = () => {
            (null != L && (0, d.v)(L, d.d.INVITE), l.h7(k, !1, D));
        };
        return (0, r.jsx)(h.Z, {
            onClick: e,
            iconComponent: j,
            label: U,
            iconClassName: A,
            look: N,
            size: C,
            buttonText: R,
            color: null != P ? P : void 0
        });
    }
    return T(M, i)
        ? (0, r.jsx)(
              h.Z,
              b(
                  {
                      onClick: () => {
                          (o()(null != M, 'guild cannot be null'),
                              o()(null != i, 'channel cannot be null'),
                              null != L && (0, d.v)(L, d.d.INVITE),
                              S({
                                  guild: M,
                                  channel: i,
                                  streamUserId: null == n ? void 0 : n.ownerId,
                                  applicationId: t,
                                  appContext: null != m ? m : D,
                                  exitFullScreen: p,
                                  analyticsLocation: E,
                                  guildScheduledEvent: y
                              }));
                      },
                      iconComponent: j,
                      label: U,
                      iconClassName: A,
                      look: N,
                      size: C,
                      color: P,
                      buttonText: R
                  },
                  w
              )
          )
        : null;
}
