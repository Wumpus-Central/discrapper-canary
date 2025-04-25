n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
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
    var { applicationId: t, stream: i, channel: y, exitFullScreen: x, appContext: C, analyticsLocation: v, guildScheduledEvent: j, shouldPrioritizeGroupPlusIcon: O = !1, isContextlessActivity: E = !1, iconClassName: I, look: P, size: S, buttonText: Z } = e,
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
        })(e, ['applicationId', 'stream', 'channel', 'exitFullScreen', 'appContext', 'analyticsLocation', 'guildScheduledEvent', 'shouldPrioritizeGroupPlusIcon', 'isContextlessActivity', 'iconClassName', 'look', 'size', 'buttonText']);
    let T = (0, c.bp)(),
        { parentAnalyticsLocation: A } = (0, u.ZP)(),
        w = null == y ? void 0 : y.getGuildId(),
        R = (0, o.e7)([p.Z], () => (null != w ? p.Z.getGuild(w) : null), [w]),
        k = (0, o.e7)([h.Z], () => (null != t ? h.Z.getApplicationActivity(t) : void 0)),
        M = null == t || O ? a.ejJ : a.gQj,
        L = null != t ? b.intl.string(b.t['OzOM/v']) : b.intl.string(b.t['6F9ivr']);
    if (null != k && E) {
        let e = () => {
            null != A && (0, d.v)(A, d.d.INVITE), s.h7(k, !1, T);
        };
        return T === g.IlC.APP
            ? (0, r.jsx)(m.d, {
                  onClick: e,
                  iconComponent: M,
                  label: L,
                  themeable: !0
              })
            : (0, r.jsx)(m.Z, {
                  onClick: e,
                  iconComponent: M,
                  label: L,
                  iconClassName: I,
                  look: P,
                  size: S,
                  buttonText: Z
              });
    }
    return null != R && null != y && f.Z.can(g.Plq.CREATE_INSTANT_INVITE, y)
        ? (0, r.jsx)(
              m.Z,
              _(
                  {
                      onClick: () => {
                          l()(null != R, 'guild cannot be null'),
                              l()(null != y, 'channel cannot be null'),
                              null != A && (0, d.v)(A, d.d.INVITE),
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
                                  guild: R,
                                  channel: y,
                                  streamUserId: null == i ? void 0 : i.ownerId,
                                  applicationId: t,
                                  appContext: null != C ? C : T,
                                  exitFullScreen: x,
                                  analyticsLocation: v,
                                  guildScheduledEvent: j
                              });
                      },
                      iconComponent: M,
                      label: L,
                      iconClassName: I,
                      look: P,
                      size: S,
                      buttonText: Z
                  },
                  N
              )
          )
        : null;
}
