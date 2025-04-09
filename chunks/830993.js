n.d(t, { Z: () => N }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(616780),
    u = n(619915),
    d = n(620662),
    p = n(841784),
    h = n(471445),
    f = n(430824),
    g = n(496675),
    m = n(158776),
    b = n(979651),
    _ = n(823379),
    y = n(355363),
    v = n(449932),
    O = n(561788),
    j = n(876548),
    C = n(543432),
    x = n(981631),
    S = n(388032),
    P = n(642317),
    I = n(656855);
function N(e) {
    var t, l;
    let { channel: o, guild: h, onAction: f, voiceStates: g, isChannelSelected: b, shouldShowSettingNudge: y } = e,
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
    let j = (0, u.ZP)(o),
        C = Array.from((0, u.uF)(j).values()),
        I = null != (t = null == g ? void 0 : g.filter(_.lm)) ? t : [],
        N = (e) => (t) => ([x.IIU.PLAYING, x.IIU.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId)) || t.type === x.IIU.LISTENING,
        Z = (0, a.e7)(
            [m.Z],
            () => {
                let e = {};
                return (
                    I.forEach((t) => {
                        let n = m.Z.findActivity(t.user.id, N(t));
                        if (null != n && !(0, p.Z)(n)) {
                            var r, i, l, o;
                            let a = ''.concat(null != (i = n.application_id) ? i : '', ':').concat(null != (l = null == (r = n.party) ? void 0 : r.id) ? l : t.user.id),
                                s =
                                    null != (o = e[a])
                                        ? o
                                        : {
                                              members: [],
                                              activity: n
                                          };
                            s.members.push(t), (0, d.Z)(s.activity, x.xjy.JOIN) || (s.activity = n), (e[a] = s);
                        }
                    }),
                    Object.values(e)
                );
            },
            [I],
            a.pF
        );
    return Z.length + C.length === 0
        ? null
        : (0, r.jsxs)(s.Ttm, {
              className: P.container,
              children: [
                  (0, r.jsx)(E, {
                      channel: o,
                      isChannelSelected: b,
                      voiceStatesCount: null != (l = null == g ? void 0 : g.length) ? l : 0
                  }),
                  (0, r.jsx)('div', { className: P.headerDivider }),
                  C.map((e, t) => {
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
                  Z.map((e, t) => {
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
                  y &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', { className: P.headerDivider }),
                              (0, r.jsx)('div', {
                                  className: P.settingNudgeText,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      tag: 'span',
                                      children: S.NW.format(S.t.ePyoY2, {
                                          onClick: () => {
                                              (0, s.ZDy)(async () => {
                                                  let { default: e } = await Promise.all([n.e('16172'), n.e('84605'), n.e('76540'), n.e('17938'), n.e('9710'), n.e('49508'), n.e('3940'), n.e('25183'), n.e('27458'), n.e('41851'), n.e('30419'), n.e('18824'), n.e('70371'), n.e('69313'), n.e('40078')]).then(n.bind(n, 241420));
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
                                                          (i = i = { guild: h }),
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
function E(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: i } = e,
        l = (0, a.e7)([g.Z], () => !g.Z.can(x.Plq.CONNECT, t)),
        s = (0, a.e7)([b.Z], () => b.Z.hasVideo(t.id)),
        c = (0, y.ZP)({
            channel: t,
            locked: l,
            video: s,
            selected: n
        }),
        u = (0, a.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
    return null == (0, h.KS)(t, u)
        ? null
        : (0, r.jsxs)('div', {
              className: o()(P.popoutHeaderContainer, I.popoutHeaderContainer),
              children: [
                  (0, r.jsx)(O.Z, { channel: t }),
                  c
                      ? (0, r.jsx)(j.Z, {
                            userCount: i,
                            video: s,
                            channel: t
                        })
                      : (0, r.jsx)(C.Z, { userCount: i })
              ]
          });
}
