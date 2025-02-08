n.d(t, { Z: () => y }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(616780),
    d = n(619915),
    u = n(620662),
    h = n(841784),
    p = n(471445),
    g = n(430824),
    m = n(496675),
    f = n(158776),
    _ = n(979651),
    v = n(823379),
    C = n(355363),
    x = n(449932),
    Z = n(561788),
    I = n(876548),
    b = n(543432),
    S = n(981631),
    N = n(388032),
    E = n(684393),
    j = n(738523);
function y(e) {
    var t, r;
    let { channel: a, guild: p, onAction: g, voiceStates: m, isChannelSelected: _, shouldShowSettingNudge: C } = e;
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
        (0, c.$)(n);
    })(a, m);
    let Z = (0, d.ZP)(a),
        I = Array.from((0, d.uF)(Z).values()),
        b = null !== (t = null == m ? void 0 : m.filter(v.lm)) && void 0 !== t ? t : [],
        j = (e) => (t) => ([S.IIU.PLAYING, S.IIU.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId)) || t.type === S.IIU.LISTENING,
        y = (0, o.e7)(
            [f.Z],
            () => {
                let e = {};
                return (
                    b.forEach((t) => {
                        let n = f.Z.findActivity(t.user.id, j(t));
                        if (null != n && !(0, h.Z)(n)) {
                            var i, l, r, a;
                            let o = ''.concat(null !== (l = n.application_id) && void 0 !== l ? l : '', ':').concat(null !== (r = null === (i = n.party) || void 0 === i ? void 0 : i.id) && void 0 !== r ? r : t.user.id),
                                s =
                                    null !== (a = e[o]) && void 0 !== a
                                        ? a
                                        : {
                                              members: [],
                                              activity: n
                                          };
                            s.members.push(t), (0, u.Z)(s.activity, S.xjy.JOIN) || (s.activity = n), (e[o] = s);
                        }
                    }),
                    Object.values(e)
                );
            },
            [b],
            o.pF
        );
    return y.length + I.length === 0
        ? null
        : (0, i.jsxs)(s.Ttm, {
              className: E.container,
              children: [
                  (0, i.jsx)(P, {
                      channel: a,
                      isChannelSelected: _,
                      voiceStatesCount: null !== (r = null == m ? void 0 : m.length) && void 0 !== r ? r : 0
                  }),
                  (0, i.jsx)('div', { className: E.headerDivider }),
                  I.map((e, t) => {
                      var n;
                      return (0, i.jsx)(
                          x.Z,
                          {
                              embeddedApp: e,
                              presenceActivity: null !== (n = e.presenceActivity) && void 0 !== n ? n : void 0,
                              channel: a,
                              onAction: g
                          },
                          t
                      );
                  }),
                  y.map((e, t) => {
                      let { members: n, activity: l } = e;
                      return (0, i.jsx)(
                          x.Z,
                          {
                              presenceActivity: l,
                              channel: a,
                              members: n,
                              onAction: g
                          },
                          t
                      );
                  }),
                  C &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', { className: E.headerDivider }),
                              (0, i.jsx)('div', {
                                  className: E.settingNudgeText,
                                  children: (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      tag: 'span',
                                      children: N.intl.format(N.t.ePyoY2, {
                                          onClick: () => {
                                              (0, s.ZDy)(async () => {
                                                  let { default: e } = await Promise.all([n.e('23217'), n.e('84605'), n.e('8016'), n.e('17938'), n.e('76540'), n.e('68445'), n.e('49508'), n.e('22646'), n.e('3940'), n.e('25183'), n.e('48923'), n.e('30419'), n.e('18824'), n.e('28805'), n.e('4877'), n.e('8744')]).then(n.bind(n, 241420));
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
function P(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: l } = e,
        r = (0, o.e7)([m.Z], () => !m.Z.can(S.Plq.CONNECT, t)),
        s = (0, o.e7)([_.Z], () => _.Z.hasVideo(t.id)),
        c = (0, C.ZP)({
            channel: t,
            locked: r,
            video: s,
            selected: n
        }),
        d = (0, o.e7)([g.Z], () => g.Z.getGuild(t.guild_id));
    return null == (0, p.KS)(t, d)
        ? null
        : (0, i.jsxs)('div', {
              className: a()(E.popoutHeaderContainer, j.popoutHeaderContainer),
              children: [
                  (0, i.jsx)(Z.Z, { channel: t }),
                  c
                      ? (0, i.jsx)(I.Z, {
                            userCount: l,
                            video: s,
                            channel: t
                        })
                      : (0, i.jsx)(b.Z, { userCount: l })
              ]
          });
}
