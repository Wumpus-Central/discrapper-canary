n.d(t, { Z: () => I }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(616780),
    u = n(619915),
    d = n(620662),
    h = n(841784),
    p = n(471445),
    f = n(430824),
    g = n(496675),
    m = n(158776),
    b = n(979651),
    y = n(823379),
    _ = n(355363),
    v = n(449932),
    O = n(561788),
    C = n(876548),
    S = n(543432),
    j = n(981631),
    E = n(388032),
    x = n(642317),
    N = n(656855);
function I(e) {
    var t, l;
    let { channel: o, guild: p, onAction: f, voiceStates: g, isChannelSelected: b, shouldShowSettingNudge: _ } = e,
        O = i.useMemo(() => {
            var e;
            return null == g || g.length > 50
                ? {}
                : {
                      [o.getGuildId()]:
                          null !=
                          (e = g.map((e) => {
                              let { user: t } = e;
                              return t.id;
                          }))
                              ? e
                              : []
                  };
        }, [o, g]);
    (0, c.$)(O);
    let C = (0, u.ZP)(o),
        S = Array.from((0, u.uF)(C).values()),
        N = null != (t = null == g ? void 0 : g.filter(y.lm)) ? t : [],
        I = (e) => (t) => ([j.IIU.PLAYING, j.IIU.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId)) || t.type === j.IIU.LISTENING,
        w = (0, s.e7)(
            [m.Z],
            () => {
                let e = {};
                return (
                    N.forEach((t) => {
                        let n = m.Z.findActivity(t.user.id, I(t));
                        if (null != n && !(0, h.Z)(n)) {
                            var r, i, l, o;
                            let s = ''.concat(null != (i = n.application_id) ? i : '', ':').concat(null != (l = null == (r = n.party) ? void 0 : r.id) ? l : t.user.id),
                                a =
                                    null != (o = e[s])
                                        ? o
                                        : {
                                              members: [],
                                              activity: n
                                          };
                            a.members.push(t), (0, d.Z)(a.activity, j.xjy.JOIN) || (a.activity = n), (e[s] = a);
                        }
                    }),
                    Object.values(e)
                );
            },
            [N],
            s.pF
        );
    return w.length + S.length === 0
        ? null
        : (0, r.jsxs)(a.Ttm, {
              className: x.container,
              children: [
                  (0, r.jsx)(P, {
                      channel: o,
                      isChannelSelected: b,
                      voiceStatesCount: null != (l = null == g ? void 0 : g.length) ? l : 0
                  }),
                  (0, r.jsx)('div', { className: x.headerDivider }),
                  S.map((e, t) => {
                      var n;
                      return (0, r.jsx)(
                          v.Z,
                          {
                              embeddedApp: e,
                              presenceActivity: null != (n = e.presenceActivity) ? n : void 0,
                              channel: o,
                              onAction: f
                          },
                          t
                      );
                  }),
                  w.map((e, t) => {
                      let { members: n, activity: i } = e;
                      return (0, r.jsx)(
                          v.Z,
                          {
                              presenceActivity: i,
                              channel: o,
                              members: n,
                              onAction: f
                          },
                          t
                      );
                  }),
                  _ &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', { className: x.headerDivider }),
                              (0, r.jsx)('div', {
                                  className: x.settingNudgeText,
                                  children: (0, r.jsx)(a.Text, {
                                      variant: 'text-xs/normal',
                                      tag: 'span',
                                      children: E.NW.format(E.t.ePyoY2, {
                                          onClick: () => {
                                              (0, a.ZDy)(async () => {
                                                  let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                                  return (t) => {
                                                      var n, i;
                                                      return (0, r.jsx)(
                                                          e,
                                                          ((n = (function (e) {
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
                                                          })({}, t)),
                                                          (i = i = { guild: p }),
                                                          Object.getOwnPropertyDescriptors
                                                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                                              : (function (e, t) {
                                                                    var n = Object.keys(e);
                                                                    if (Object.getOwnPropertySymbols) {
                                                                        var r = Object.getOwnPropertySymbols(e);
                                                                        n.push.apply(n, r);
                                                                    }
                                                                    return n;
                                                                })(Object(i)).forEach(function (e) {
                                                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                                                }),
                                                          n)
                                                      );
                                                  };
                                              });
                                          }
                                      })
                                  })
                              })
                          ]
                      })
              ]
          });
}
function P(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: i } = e,
        l = (0, s.e7)([g.Z], () => !g.Z.can(j.Plq.CONNECT, t)),
        a = (0, s.e7)([b.Z], () => b.Z.hasVideo(t.id)),
        c = (0, _.ZP)({
            channel: t,
            locked: l,
            video: a,
            selected: n
        }),
        u = (0, s.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
    return null == (0, p.KS)(t, u)
        ? null
        : (0, r.jsxs)('div', {
              className: o()(x.popoutHeaderContainer, N.popoutHeaderContainer),
              children: [
                  (0, r.jsx)(O.Z, { channel: t }),
                  c
                      ? (0, r.jsx)(C.Z, {
                            userCount: i,
                            video: a,
                            channel: t
                        })
                      : (0, r.jsx)(S.Z, { userCount: i })
              ]
          });
}
