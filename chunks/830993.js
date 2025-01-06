n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(616780),
    s = n(619915),
    c = n(620662),
    u = n(841784),
    d = n(471445),
    h = n(430824),
    p = n(496675),
    f = n(158776),
    m = n(979651),
    g = n(823379),
    v = n(355363),
    C = n(449932),
    x = n(561788),
    Z = n(135724),
    I = n(543432),
    _ = n(981631),
    b = n(388032),
    S = n(684393);
function N(e) {
    var t, d;
    let { channel: h, guild: p, onAction: m, voiceStates: v, isChannelSelected: x, shouldShowSettingNudge: Z } = e;
    !(function (e, t) {
        let n = l.useMemo(() => {
            var n;
            return null == t || t.length > 50
                ? {}
                : {
                      [e.getGuildId()]:
                          null !==
                              (n = t.map((e) => {
                                  let { user: t } = e;
                                  return t.id;
                              })) && void 0 !== n
                              ? n
                              : []
                  };
        }, [e, t]);
        (0, o.$)(n);
    })(h, v);
    let I = (0, s.ZP)(h),
        N = Array.from((0, s.uF)(I).values()),
        y = null !== (t = null == v ? void 0 : v.filter(g.lm)) && void 0 !== t ? t : [],
        j = (e) => (t) => ([_.IIU.PLAYING, _.IIU.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId)) || t.type === _.IIU.LISTENING,
        T = (0, r.e7)(
            [f.Z],
            () => {
                let e = {};
                return (
                    y.forEach((t) => {
                        let n = f.Z.findActivity(t.user.id, j(t));
                        if (null != n && !(0, u.Z)(n)) {
                            var i, l, r, a;
                            let o = ''.concat(null !== (l = n.application_id) && void 0 !== l ? l : '', ':').concat(null !== (r = null === (i = n.party) || void 0 === i ? void 0 : i.id) && void 0 !== r ? r : t.user.id),
                                s =
                                    null !== (a = e[o]) && void 0 !== a
                                        ? a
                                        : {
                                              members: [],
                                              activity: n
                                          };
                            s.members.push(t), !(0, c.Z)(s.activity, _.xjy.JOIN) && (s.activity = n), (e[o] = s);
                        }
                    }),
                    Object.values(e)
                );
            },
            [y],
            r.pF
        );
    return T.length + N.length === 0
        ? null
        : (0, i.jsxs)(a.Scroller, {
              className: S.container,
              children: [
                  (0, i.jsx)(E, {
                      channel: h,
                      isChannelSelected: x,
                      voiceStatesCount: null !== (d = null == v ? void 0 : v.length) && void 0 !== d ? d : 0
                  }),
                  (0, i.jsx)('div', { className: S.headerDivider }),
                  N.map((e, t) => {
                      var n;
                      return (0, i.jsx)(
                          C.Z,
                          {
                              embeddedApp: e,
                              presenceActivity: null !== (n = e.presenceActivity) && void 0 !== n ? n : void 0,
                              channel: h,
                              onAction: m
                          },
                          t
                      );
                  }),
                  T.map((e, t) => {
                      let { members: n, activity: l } = e;
                      return (0, i.jsx)(
                          C.Z,
                          {
                              presenceActivity: l,
                              channel: h,
                              members: n,
                              onAction: m
                          },
                          t
                      );
                  }),
                  Z &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', { className: S.headerDivider }),
                              (0, i.jsx)('div', {
                                  className: S.settingNudgeText,
                                  children: (0, i.jsx)(a.Text, {
                                      variant: 'text-xs/normal',
                                      tag: 'span',
                                      children: b.intl.format(b.t.ePyoY2, {
                                          onClick: () => {
                                              (0, a.openModalLazy)(async () => {
                                                  let { default: e } = await Promise.all([n.e('23217'), n.e('84605'), n.e('33053'), n.e('8016'), n.e('15669'), n.e('76540'), n.e('17938'), n.e('18101'), n.e('22646'), n.e('3940'), n.e('89029'), n.e('48923'), n.e('30419'), n.e('8821'), n.e('18824'), n.e('38175'), n.e('37229'), n.e('25183'), n.e('28044'), n.e('92729'), n.e('57085'), n.e('29263')]).then(n.bind(n, 241420));
                                                  return (t) =>
                                                      (0, i.jsx)(e, {
                                                          ...t,
                                                          guild: p
                                                      });
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
    let { channel: t, isChannelSelected: n, voiceStatesCount: l } = e,
        a = (0, r.e7)([p.Z], () => !p.Z.can(_.Plq.CONNECT, t)),
        o = (0, r.e7)([m.Z], () => m.Z.hasVideo(t.id)),
        s = (0, v.ZP)({
            channel: t,
            locked: a,
            video: o,
            selected: n
        }),
        c = (0, r.e7)([h.Z], () => h.Z.getGuild(t.guild_id));
    return null == (0, d.KS)(t, c)
        ? null
        : (0, i.jsxs)('div', {
              className: S.popoutHeaderContainer,
              children: [
                  (0, i.jsx)(x.Z, { channel: t }),
                  s
                      ? (0, i.jsx)(Z.Z, {
                            userCount: l,
                            video: o,
                            channel: t
                        })
                      : (0, i.jsx)(I.Z, { userCount: l })
              ]
          });
}
