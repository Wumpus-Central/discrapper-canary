n.d(t, { Z: () => P }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
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
    O = n(449932),
    v = n(561788),
    j = n(876548),
    C = n(543432),
    x = n(981631),
    E = n(388032),
    S = n(413409),
    I = n(21265);
function P(e) {
    var t, l;
    let { channel: o, guild: h, onAction: f, voiceStates: g, isChannelSelected: b, shouldShowSettingNudge: y } = e,
        v = i.useMemo(() => {
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
                              : [],
                  };
        }, [o, g]);
    (0, c.$)(v, "VoiceChannelActivities");
    let j = (0, u.ZP)(o),
        C = Array.from((0, u.uF)(j).values()),
        I = null != (t = null == g ? void 0 : g.filter(_.lm)) ? t : [],
        P = (0, a.e7)(
            [m.Z],
            () => {
                let e = {};
                return (
                    I.forEach((t) => {
                        let n = m.Z.findActivity(
                            t.user.id,
                            (e) =>
                                ([x.IIU.PLAYING, x.IIU.WATCHING].includes(e.type) &&
                                    (null != e.assets || null != e.state || null != e.details || null != e.party) &&
                                    (null == e.session_id || e.session_id === t.voiceState.sessionId)) ||
                                e.type === x.IIU.LISTENING,
                        );
                        if (null != n && !(0, p.Z)(n)) {
                            var r, i, l, o;
                            let a = ""
                                    .concat(null != (i = n.application_id) ? i : "", ":")
                                    .concat(null != (l = null == (r = n.party) ? void 0 : r.id) ? l : t.user.id),
                                s =
                                    null != (o = e[a])
                                        ? o
                                        : {
                                              members: [],
                                              activity: n,
                                          };
                            s.members.push(t), (0, d.Z)(s.activity, x.xjy.JOIN) || (s.activity = n), (e[a] = s);
                        }
                    }),
                    Object.values(e)
                );
            },
            [I],
            a.pF,
        );
    return P.length + C.length === 0
        ? null
        : (0, r.jsxs)(s.Ttm, {
              className: S.container,
              children: [
                  (0, r.jsx)(N, {
                      channel: o,
                      isChannelSelected: b,
                      voiceStatesCount: null != (l = null == g ? void 0 : g.length) ? l : 0,
                  }),
                  (0, r.jsx)("div", { className: S.headerDivider }),
                  C.map((e, t) => {
                      var n;
                      return (0, r.jsx)(
                          O.Z,
                          {
                              embeddedApp: e,
                              presenceActivity: null != (n = e.presenceActivity) ? n : void 0,
                              channel: o,
                              onAction: f,
                          },
                          t,
                      );
                  }),
                  P.map((e, t) => {
                      let { members: n, activity: i } = e;
                      return (0, r.jsx)(
                          O.Z,
                          {
                              presenceActivity: i,
                              channel: o,
                              members: n,
                              onAction: f,
                          },
                          t,
                      );
                  }),
                  y &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", { className: S.headerDivider }),
                              (0, r.jsx)("div", {
                                  className: S.settingNudgeText,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: "text-xs/normal",
                                      tag: "span",
                                      children: E.intl.format(E.t.ePyoY2, {
                                          onClick: () => {
                                              (0, s.ZDy)(async () => {
                                                  let { default: e } = await n.e("86722").then(n.bind(n, 264333));
                                                  return (t) => {
                                                      var n, i;
                                                      return (0, r.jsx)(
                                                          e,
                                                          ((n = (function (e) {
                                                              for (var t = 1; t < arguments.length; t++) {
                                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                                      r = Object.keys(n);
                                                                  "function" == typeof Object.getOwnPropertySymbols &&
                                                                      (r = r.concat(
                                                                          Object.getOwnPropertySymbols(n).filter(
                                                                              function (e) {
                                                                                  return Object.getOwnPropertyDescriptor(
                                                                                      n,
                                                                                      e,
                                                                                  ).enumerable;
                                                                              },
                                                                          ),
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
                                                          })({}, t)),
                                                          (i = i = { guild: h }),
                                                          Object.getOwnPropertyDescriptors
                                                              ? Object.defineProperties(
                                                                    n,
                                                                    Object.getOwnPropertyDescriptors(i),
                                                                )
                                                              : (function (e, t) {
                                                                    var n = Object.keys(e);
                                                                    if (Object.getOwnPropertySymbols) {
                                                                        var r = Object.getOwnPropertySymbols(e);
                                                                        n.push.apply(n, r);
                                                                    }
                                                                    return n;
                                                                })(Object(i)).forEach(function (e) {
                                                                    Object.defineProperty(
                                                                        n,
                                                                        e,
                                                                        Object.getOwnPropertyDescriptor(i, e),
                                                                    );
                                                                }),
                                                          n),
                                                      );
                                                  };
                                              });
                                          },
                                      }),
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
function N(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: i } = e,
        l = (0, a.e7)([g.Z], () => !g.Z.can(x.Plq.CONNECT, t)),
        s = (0, a.e7)([b.Z], () => b.Z.hasVideo(t.id)),
        c = (0, y.ZP)({
            channel: t,
            locked: l,
            video: s,
            selected: n,
        }),
        u = (0, a.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
    return null == (0, h.KS)(t, u)
        ? null
        : (0, r.jsxs)("div", {
              className: o()(S.popoutHeaderContainer, I.popoutHeaderContainer),
              children: [
                  (0, r.jsx)(v.Z, { channel: t }),
                  c
                      ? (0, r.jsx)(j.Z, {
                            userCount: i,
                            video: s,
                            channel: t,
                        })
                      : (0, r.jsx)(C.Z, { userCount: i }),
              ],
          });
}
