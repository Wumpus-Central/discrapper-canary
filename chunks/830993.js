n.d(t, { Z: () => A }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(616780),
    u = n(619915),
    d = n(620662),
    f = n(841784),
    h = n(471445),
    p = n(704538),
    g = n(644011),
    b = n(314897),
    m = n(430824),
    y = n(496675),
    O = n(158776),
    v = n(885110),
    j = n(979651),
    C = n(823379),
    x = n(355363),
    E = n(449932),
    S = n(561788),
    I = n(876548),
    _ = n(543432),
    P = n(981631),
    N = n(582113),
    Z = n(388032),
    w = n(26714),
    T = n(570291);
function A(e) {
    var t, l;
    let { channel: a, guild: h, onAction: m, voiceStates: y, isChannelSelected: j, shouldShowSettingNudge: x } = e,
        S = i.useMemo(() => {
            var e;
            return null == y || y.length > 50
                ? {}
                : {
                      [a.getGuildId()]:
                          null !=
                          (e = y.map((e) => {
                              let { user: t } = e;
                              return t.id;
                          }))
                              ? e
                              : [],
                  };
        }, [a, y]);
    (0, c.$)(S, "VoiceChannelActivities");
    let I = (0, u.ZP)(a),
        _ = Array.from((0, u.uF)(I).values()),
        T = null != (t = null == y ? void 0 : y.filter(C.lm)) ? t : [],
        A = () => (e) =>
            ([P.IIU.PLAYING, P.IIU.WATCHING].includes(e.type) &&
                (null != e.assets || null != e.state || null != e.details || null != e.party)) ||
            e.type === P.IIU.LISTENING,
        D = (0, o.e7)(
            [v.Z, O.Z, b.default],
            () => {
                let e = {};
                return (
                    T.forEach((t) => {
                        let n =
                            t.user.id === b.default.getId()
                                ? v.Z.findActivity(A(), !0)
                                : O.Z.findActivity(t.user.id, A());
                        if (null != n && !(0, f.Z)(n)) {
                            var r, i, l, a;
                            let o = ""
                                    .concat(null != (i = n.application_id) ? i : "", ":")
                                    .concat(null != (l = null == (r = n.party) ? void 0 : r.id) ? l : t.user.id),
                                s =
                                    null != (a = e[o])
                                        ? a
                                        : {
                                              members: [],
                                              activity: n,
                                          };
                            s.members.push(t), (0, d.Z)(s.activity, P.xjy.JOIN) || (s.activity = n), (e[o] = s);
                        }
                    }),
                    Object.values(e)
                );
            },
            [T],
            o.pF,
        ),
        M = (0, p.p)({ location: "voice_channel_activities" });
    if (D.length + _.length === 0) return null;
    let L = !1;
    return (0, r.jsxs)(s.Ttm, {
        className: w.container,
        children: [
            (0, r.jsx)(R, {
                channel: a,
                isChannelSelected: j,
                voiceStatesCount: null != (l = null == y ? void 0 : y.length) ? l : 0,
            }),
            (0, r.jsx)("div", { className: w.headerDivider }),
            _.map((e, t) => {
                var n;
                return (0, r.jsx)(
                    E.Z,
                    {
                        embeddedApp: e,
                        presenceActivity: null != (n = e.presenceActivity) ? n : void 0,
                        channel: a,
                        onAction: m,
                    },
                    t,
                );
            }),
            D.map((e, t) => {
                let { members: n, activity: l } = e;
                return M && null != l.application_id && N.RI.has(l.application_id) && !L
                    ? ((L = !0),
                      (0, r.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  (0, r.jsx)(E.Z, {
                                      presenceActivity: l,
                                      channel: a,
                                      members: n,
                                      onAction: m,
                                  }),
                                  (0, r.jsx)(g.Z, {
                                      className: w.voiceChannelGiftingBreadcrumb,
                                      applicationId: l.application_id,
                                      userIds: n.map((e) => e.user.id),
                                      location: "voice_channel",
                                      guildId: a.guild_id,
                                      channelId: a.id,
                                  }),
                              ],
                          },
                          "".concat(t, "-with-gifting-breadcrumb"),
                      ))
                    : (0, r.jsx)(
                          E.Z,
                          {
                              presenceActivity: l,
                              channel: a,
                              members: n,
                              onAction: m,
                          },
                          t,
                      );
            }),
            x &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", { className: w.headerDivider }),
                        (0, r.jsx)("div", {
                            className: w.settingNudgeText,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                tag: "span",
                                children: Z.intl.format(Z.t.ePyoY2, {
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
                                                                            return Object.getOwnPropertyDescriptor(n, e)
                                                                                .enumerable;
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
function R(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: i } = e,
        l = (0, o.e7)([y.Z], () => !y.Z.can(P.Plq.CONNECT, t)),
        s = (0, o.e7)([j.Z], () => j.Z.hasVideo(t.id)),
        c = (0, x.ZP)({
            channel: t,
            locked: l,
            video: s,
            selected: n,
        }),
        u = (0, o.e7)([m.Z], () => m.Z.getGuild(t.guild_id));
    return null == (0, h.KS)(t, u)
        ? null
        : (0, r.jsxs)("div", {
              className: a()(w.popoutHeaderContainer, T.popoutHeaderContainer),
              children: [
                  (0, r.jsx)(S.Z, { channel: t }),
                  c
                      ? (0, r.jsx)(I.Z, {
                            userCount: i,
                            video: s,
                            channel: t,
                        })
                      : (0, r.jsx)(_.Z, { userCount: i }),
              ],
          });
}
