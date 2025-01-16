l.d(n, {
    Z: function () {
        return k;
    },
    k: function () {
        return M;
    }
}),
    l(789020);
var a = l(200651),
    i = l(192379),
    t = l(442837),
    r = l(481060),
    s = l(933557),
    d = l(471445),
    o = l(905362),
    c = l(353093),
    u = l(979264),
    h = l(937111),
    m = l(592125),
    g = l(271383),
    x = l(430824),
    f = l(496675),
    C = l(186523),
    v = l(768581),
    I = l(630388),
    p = l(526120),
    Z = l(563534),
    j = l(846121),
    N = l(216701),
    _ = l(981631),
    b = l(308083),
    A = l(372897),
    E = l(388032),
    S = l(51979);
function M(e) {
    let { title: n, emojiId: l, emojiName: i, icon: t, completed: s, Icon: d, ...o } = e,
        c = 'channel' === o.variant ? o.channelId : null,
        u = 'static' === o.variant ? o.subtitle : o.channelName,
        h =
            null != c
                ? v.ZP.getNewMemberActionIconURL({
                      channelId: c,
                      icon: t
                  })
                : null;
    return (0, a.jsxs)('div', {
        className: S.action,
        children: [
            null != h
                ? (0, a.jsx)('img', {
                      src: h,
                      className: S.icon,
                      width: 32,
                      height: 32,
                      alt: '',
                      'aria-hidden': !0
                  })
                : (0, a.jsx)(N.Z, {
                      emojiId: l,
                      emojiName: i,
                      size: N.R.LARGE,
                      defaultComponent: (0, a.jsx)('div', {
                          className: S.channelIconContainer,
                          children: (0, a.jsx)(d, {
                              className: S.channelIcon,
                              color: 'currentColor'
                          })
                      })
                  }),
            (0, a.jsxs)('div', {
                className: S.actionInfo,
                children: [
                    (0, a.jsx)(r.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: n
                    }),
                    null != u
                        ? (0, a.jsx)(r.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: u
                          })
                        : null
                ]
            }),
            s
                ? (0, a.jsx)(r.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: '#fff',
                      className: S.checkCircleCompleted
                  })
                : (0, a.jsx)(C.Z, {
                      className: S.checkCircle,
                      width: 24,
                      height: 24
                  })
        ]
    });
}
function y(e) {
    var n;
    let { action: l, completed: o } = e,
        { channelId: c, title: u, emoji: h, icon: g } = l,
        { id: x, name: C } = null != h ? h : {},
        v = (0, t.e7)([m.Z], () => m.Z.getChannel(c)),
        I = (0, s.ZP)(v, !0),
        Z = (0, t.e7)([f.Z], () => f.Z.can(_.Plq.VIEW_CHANNEL, v)),
        j = i.useCallback(() => {
            if (null == v) return null;
            (0, p.gp)(v.guild_id, v.id);
        }, [v]);
    if (null == v || !Z) return null;
    let N = null !== (n = (0, d.KS)(v)) && void 0 !== n ? n : r.TextIcon;
    return (0, a.jsx)(r.Clickable, {
        className: S.clickableAction,
        onClick: j,
        children: (0, a.jsx)(M, {
            variant: 'channel',
            channelId: c,
            title: u,
            channelName: I,
            emojiId: x,
            emojiName: C,
            icon: g,
            completed: o,
            Icon: N
        })
    });
}
function k(e) {
    var n;
    let { guildId: l } = e,
        s = (0, t.e7)([Z.Z], () => Z.Z.getNewMemberActions(l), [l]),
        d = (0, t.e7)([j.Z], () => j.Z.getCompletedActions(l)),
        m = (0, t.e7)([g.ZP], () => g.ZP.getSelfMember(l)),
        f = (0, t.e7)([x.Z], () => x.Z.getGuild(l)),
        C = null != f ? (0, c.ky)(f.id, null === (n = f.profile) || void 0 === n ? void 0 : n.badge, b.NC.SIZE_16) : null,
        v = (0, t.e7)([h.Z], () => h.Z.getRequest(l));
    i.useEffect(() => {
        var e;
        null == d && (null == m ? void 0 : m.flags) != null && (0, I.yE)(null !== (e = m.flags) && void 0 !== e ? e : 0, A.q.STARTED_HOME_ACTIONS) && (0, p.Fg)(l);
    }, [d, l, null == m ? void 0 : m.flags]);
    let N = i.useCallback(() => {
        null != f && null != f.rulesChannelId && (0, p.gp)(f.id, f.rulesChannelId);
    }, [f]);
    return null == m || null == s || 0 === s.length
        ? null
        : (0, a.jsxs)('div', {
              className: S.container,
              children: [
                  (0, a.jsx)(r.Heading, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: E.intl.string(E.t.LhlgY2)
                  }),
                  (null == f ? void 0 : f.hasFeature(_.oNc.CLAN)) &&
                      null != C &&
                      (0, a.jsx)(r.Clickable, {
                          className: S.clickableAction,
                          onClick: () => (0, o.CK)(l, null == v ? void 0 : v.joinRequestId),
                          children: (0, a.jsxs)('div', {
                              className: S.action,
                              children: [
                                  (0, a.jsx)('div', {
                                      className: S.tagIconContainer,
                                      children: (0, a.jsx)(u.KQ, {
                                          src: C,
                                          size: b.NC.SIZE_16
                                      })
                                  }),
                                  (0, a.jsx)('div', {
                                      className: S.actionInfo,
                                      children: (0, a.jsx)(r.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'header-primary',
                                          children: E.intl.string(E.t.MNhFER)
                                      })
                                  })
                              ]
                          })
                      }),
                  s.map((e) =>
                      (0, a.jsx)(
                          y,
                          {
                              action: e,
                              completed: (null == d ? void 0 : d[e.channelId]) === !0,
                              guildId: l
                          },
                          e.channelId
                      )
                  ),
                  (null == f ? void 0 : f.rulesChannelId) != null &&
                      (0, a.jsxs)(r.Clickable, {
                          className: S.action,
                          onClick: N,
                          children: [
                              (0, a.jsx)('div', {
                                  className: S.rulesIconContainer,
                                  children: (0, a.jsx)(r.BookCheckIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: S.rulesIcon
                                  })
                              }),
                              (0, a.jsx)('div', {
                                  className: S.actionInfo,
                                  children: (0, a.jsx)(r.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: E.intl.string(E.t['K/i3iY'])
                                  })
                              })
                          ]
                      })
              ]
          });
}
