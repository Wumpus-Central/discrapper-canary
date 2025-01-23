n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(616780),
    u = n(619915),
    d = n(620662),
    h = n(841784),
    p = n(471445),
    m = n(430824),
    f = n(496675),
    g = n(158776),
    v = n(979651),
    C = n(823379),
    x = n(355363),
    I = n(449932),
    _ = n(561788),
    Z = n(876548),
    b = n(543432),
    S = n(981631),
    N = n(388032),
    E = n(684393),
    y = n(738523);
function j(e) {
    var t, r;
    let { channel: a, guild: p, onAction: m, voiceStates: f, isChannelSelected: v, shouldShowSettingNudge: x } = e;
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
    })(a, f);
    let _ = (0, u.ZP)(a),
        Z = Array.from((0, u.uF)(_).values()),
        b = null !== (t = null == f ? void 0 : f.filter(C.lm)) && void 0 !== t ? t : [],
        y = (e) => (t) => ([S.IIU.PLAYING, S.IIU.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId)) || t.type === S.IIU.LISTENING,
        j = (0, o.e7)(
            [g.Z],
            () => {
                let e = {};
                return (
                    b.forEach((t) => {
                        let n = g.Z.findActivity(t.user.id, y(t));
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
                            s.members.push(t), !(0, d.Z)(s.activity, S.xjy.JOIN) && (s.activity = n), (e[o] = s);
                        }
                    }),
                    Object.values(e)
                );
            },
            [b],
            o.pF
        );
    return j.length + Z.length === 0
        ? null
        : (0, i.jsxs)(s.Scroller, {
              className: E.container,
              children: [
                  (0, i.jsx)(T, {
                      channel: a,
                      isChannelSelected: v,
                      voiceStatesCount: null !== (r = null == f ? void 0 : f.length) && void 0 !== r ? r : 0
                  }),
                  (0, i.jsx)('div', { className: E.headerDivider }),
                  Z.map((e, t) => {
                      var n;
                      return (0, i.jsx)(
                          I.Z,
                          {
                              embeddedApp: e,
                              presenceActivity: null !== (n = e.presenceActivity) && void 0 !== n ? n : void 0,
                              channel: a,
                              onAction: m
                          },
                          t
                      );
                  }),
                  j.map((e, t) => {
                      let { members: n, activity: l } = e;
                      return (0, i.jsx)(
                          I.Z,
                          {
                              presenceActivity: l,
                              channel: a,
                              members: n,
                              onAction: m
                          },
                          t
                      );
                  }),
                  x &&
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
                                              (0, s.openModalLazy)(async () => {
                                                  let { default: e } = await Promise.all([n.e('23217'), n.e('84605'), n.e('8016'), n.e('17938'), n.e('76540'), n.e('68445'), n.e('37229'), n.e('22646'), n.e('3940'), n.e('25183'), n.e('48923'), n.e('30419'), n.e('18824'), n.e('30203'), n.e('82159')]).then(n.bind(n, 241420));
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
function T(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: l } = e,
        r = (0, o.e7)([f.Z], () => !f.Z.can(S.Plq.CONNECT, t)),
        s = (0, o.e7)([v.Z], () => v.Z.hasVideo(t.id)),
        c = (0, x.ZP)({
            channel: t,
            locked: r,
            video: s,
            selected: n
        }),
        u = (0, o.e7)([m.Z], () => m.Z.getGuild(t.guild_id));
    return null == (0, p.KS)(t, u)
        ? null
        : (0, i.jsxs)('div', {
              className: a()(E.popoutHeaderContainer, y.popoutHeaderContainer),
              children: [
                  (0, i.jsx)(_.Z, { channel: t }),
                  c
                      ? (0, i.jsx)(Z.Z, {
                            userCount: l,
                            video: s,
                            channel: t
                        })
                      : (0, i.jsx)(b.Z, { userCount: l })
              ]
          });
}
