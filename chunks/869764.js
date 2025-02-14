t.d(n, {
    Z: () => b,
    k: () => L
}),
    t(789020);
var l = t(200651),
    i = t(192379),
    s = t(120356),
    r = t.n(s),
    a = t(442837),
    o = t(481060),
    d = t(933557),
    c = t(471445),
    u = t(905362),
    m = t(353093),
    I = t(979264),
    h = t(937111),
    N = t(592125),
    g = t(271383),
    E = t(430824),
    x = t(496675),
    T = t(186523),
    S = t(768581),
    _ = t(630388),
    f = t(526120),
    p = t(563534),
    v = t(846121),
    j = t(216701),
    C = t(981631),
    D = t(308083),
    O = t(372897),
    G = t(388032),
    A = t(335322);
function L(e) {
    let { title: n, emojiId: t, emojiName: i, icon: s, completed: a, Icon: d, onClick: c, ...u } = e,
        m = 'channel' === u.variant ? u.channelId : null,
        I = 'static' === u.variant ? u.subtitle : u.channelName,
        h =
            null != m
                ? S.ZP.getNewMemberActionIconURL({
                      channelId: m,
                      icon: s
                  })
                : null;
    return (0, l.jsxs)(o.Zbd, {
        className: r()(A.action, { [A.clickableAction]: null != c }),
        onClick: c,
        children: [
            null != h
                ? (0, l.jsx)('img', {
                      src: h,
                      className: A.icon,
                      width: 32,
                      height: 32,
                      alt: '',
                      'aria-hidden': !0
                  })
                : (0, l.jsx)(j.Z, {
                      emojiId: t,
                      emojiName: i,
                      size: j.R.LARGE,
                      defaultComponent: (0, l.jsx)('div', {
                          className: A.channelIconContainer,
                          children: (0, l.jsx)(d, {
                              className: A.channelIcon,
                              color: 'currentColor'
                          })
                      })
                  }),
            (0, l.jsxs)('div', {
                className: A.actionInfo,
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: n
                    }),
                    null != I
                        ? (0, l.jsx)(o.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: I
                          })
                        : null
                ]
            }),
            a
                ? (0, l.jsx)(o.owK, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: '#fff',
                      className: A.checkCircleCompleted
                  })
                : (0, l.jsx)(T.Z, {
                      className: A.checkCircle,
                      width: 24,
                      height: 24
                  })
        ]
    });
}
function Z(e) {
    var n;
    let { action: t, completed: s } = e,
        { channelId: r, title: u, emoji: m, icon: I } = t,
        { id: h, name: g } = null != m ? m : {},
        E = (0, a.e7)([N.Z], () => N.Z.getChannel(r)),
        T = (0, d.ZP)(E, !0),
        S = (0, a.e7)([x.Z], () => x.Z.can(C.Plq.VIEW_CHANNEL, E)),
        _ = i.useMemo(() => {
            if (null != E) return () => (0, f.gp)(E.guild_id, E.id);
        }, [E]);
    if (null == E || !S) return null;
    let p = null !== (n = (0, c.KS)(E)) && void 0 !== n ? n : o.VL1;
    return (0, l.jsx)(L, {
        variant: 'channel',
        channelId: r,
        title: u,
        channelName: T,
        emojiId: h,
        emojiName: g,
        icon: I,
        completed: s,
        Icon: p,
        onClick: _
    });
}
function b(e) {
    var n;
    let { guildId: t } = e,
        s = (0, a.e7)([p.Z], () => p.Z.getNewMemberActions(t), [t]),
        d = (0, a.e7)([v.Z], () => v.Z.getCompletedActions(t)),
        c = (0, a.e7)([g.ZP], () => g.ZP.getSelfMember(t)),
        N = (0, a.e7)([E.Z], () => E.Z.getGuild(t)),
        x = null != N ? (0, m.ky)(N.id, null === (n = N.profile) || void 0 === n ? void 0 : n.badge, D.NC.SIZE_16) : null,
        T = (0, a.e7)([h.Z], () => h.Z.getRequest(t));
    i.useEffect(() => {
        var e;
        null == d && (null == c ? void 0 : c.flags) != null && (0, _.yE)(null !== (e = c.flags) && void 0 !== e ? e : 0, O.q.STARTED_HOME_ACTIONS) && (0, f.Fg)(t);
    }, [d, t, null == c ? void 0 : c.flags]);
    let S = i.useCallback(() => {
        null != N && null != N.rulesChannelId && (0, f.gp)(N.id, N.rulesChannelId);
    }, [N]);
    return null == c || null == s || 0 === s.length
        ? null
        : (0, l.jsxs)('div', {
              className: A.container,
              children: [
                  (0, l.jsx)(o.X6q, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: G.intl.string(G.t.LhlgY2)
                  }),
                  (null == N ? void 0 : N.hasFeature(C.oNc.CLAN)) &&
                      null != x &&
                      (0, l.jsx)(o.P3F, {
                          className: A.clickableAction,
                          onClick: () => (0, u.CK)(t, null == T ? void 0 : T.joinRequestId),
                          children: (0, l.jsxs)('div', {
                              className: A.action,
                              children: [
                                  (0, l.jsx)('div', {
                                      className: A.tagIconContainer,
                                      children: (0, l.jsx)(I.KQ, {
                                          src: x,
                                          size: D.NC.SIZE_16
                                      })
                                  }),
                                  (0, l.jsx)('div', {
                                      className: A.actionInfo,
                                      children: (0, l.jsx)(o.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'header-primary',
                                          children: G.intl.string(G.t.MNhFER)
                                      })
                                  })
                              ]
                          })
                      }),
                  s.map((e) =>
                      (0, l.jsx)(
                          Z,
                          {
                              action: e,
                              completed: (null == d ? void 0 : d[e.channelId]) === !0,
                              guildId: t
                          },
                          e.channelId
                      )
                  ),
                  (null == N ? void 0 : N.rulesChannelId) != null &&
                      (0, l.jsxs)(o.Zbd, {
                          className: r()(A.action, A.clickableAction),
                          onClick: S,
                          children: [
                              (0, l.jsx)('div', {
                                  className: A.rulesIconContainer,
                                  children: (0, l.jsx)(o.snC, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: A.rulesIcon
                                  })
                              }),
                              (0, l.jsx)('div', {
                                  className: A.actionInfo,
                                  children: (0, l.jsx)(o.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: G.intl.string(G.t['K/i3iY'])
                                  })
                              })
                          ]
                      })
              ]
          });
}
