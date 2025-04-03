n.d(t, {
    Z: () => P,
    k: () => A
}),
    n(789020);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(471445),
    u = n(905362),
    m = n(353093),
    N = n(979264),
    h = n(937111),
    I = n(592125),
    g = n(271383),
    f = n(430824),
    p = n(496675),
    E = n(186523),
    S = n(768581),
    x = n(630388),
    T = n(526120),
    O = n(563534),
    _ = n(846121),
    j = n(216701),
    v = n(981631),
    b = n(308083),
    D = n(372897),
    C = n(388032),
    G = n(411114);
function A(e) {
    var { title: t, emojiId: n, emojiName: r, icon: i, completed: a, Icon: c, onClick: d } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['title', 'emojiId', 'emojiName', 'icon', 'completed', 'Icon', 'onClick']);
    let m = 'channel' === u.variant ? u.channelId : null,
        N = 'static' === u.variant ? u.subtitle : u.channelName,
        h =
            null != m
                ? S.ZP.getNewMemberActionIconURL({
                      channelId: m,
                      icon: i
                  })
                : null;
    return (0, l.jsxs)(o.Zbd, {
        className: s()(G.action, { [G.clickableAction]: null != d }),
        onClick: d,
        children: [
            null != h
                ? (0, l.jsx)('img', {
                      src: h,
                      className: G.icon,
                      width: 32,
                      height: 32,
                      alt: '',
                      'aria-hidden': !0
                  })
                : (0, l.jsx)(j.Z, {
                      emojiId: n,
                      emojiName: r,
                      size: j.R.LARGE,
                      defaultComponent: (0, l.jsx)('div', {
                          className: G.channelIconContainer,
                          children: (0, l.jsx)(c, {
                              className: G.channelIcon,
                              color: 'currentColor'
                          })
                      })
                  }),
            (0, l.jsxs)('div', {
                className: G.actionInfo,
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: t
                    }),
                    null != N
                        ? (0, l.jsx)(o.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: N
                          })
                        : null
                ]
            }),
            a
                ? (0, l.jsx)(o.owK, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: '#fff',
                      className: G.checkCircleCompleted
                  })
                : (0, l.jsx)(E.Z, {
                      className: G.checkCircle,
                      width: 24,
                      height: 24
                  })
        ]
    });
}
function L(e) {
    var t;
    let { action: n, completed: i } = e,
        { channelId: s, title: u, emoji: m, icon: N } = n,
        { id: h, name: g } = null != m ? m : {},
        f = (0, a.e7)([I.Z], () => I.Z.getChannel(s)),
        E = (0, c.ZP)(f, !0),
        S = (0, a.e7)([p.Z], () => p.Z.can(v.Plq.VIEW_CHANNEL, f)),
        x = r.useMemo(() => {
            if (null != f) return () => (0, T.gp)(f.guild_id, f.id);
        }, [f]);
    if (null == f || !S) return null;
    let O = null != (t = (0, d.KS)(f)) ? t : o.VL1;
    return (0, l.jsx)(A, {
        variant: 'channel',
        channelId: s,
        title: u,
        channelName: E,
        emojiId: h,
        emojiName: g,
        icon: N,
        completed: i,
        Icon: O,
        onClick: x
    });
}
function P(e) {
    var t;
    let { guildId: n } = e,
        i = (0, a.e7)([O.Z], () => O.Z.getNewMemberActions(n), [n]),
        c = (0, a.e7)([_.Z], () => _.Z.getCompletedActions(n)),
        d = (0, a.e7)([g.ZP], () => g.ZP.getSelfMember(n)),
        I = (0, a.e7)([f.Z], () => f.Z.getGuild(n)),
        p = null != I ? (0, m.ky)(I.id, null == (t = I.profile) ? void 0 : t.badge, b.NC.SIZE_16) : null,
        E = (0, a.e7)([h.Z], () => h.Z.getRequest(n));
    r.useEffect(() => {
        var e;
        null == c && (null == d ? void 0 : d.flags) != null && (0, x.yE)(null != (e = d.flags) ? e : 0, D.q.STARTED_HOME_ACTIONS) && (0, T.Fg)(n);
    }, [c, n, null == d ? void 0 : d.flags]);
    let S = r.useCallback(() => {
        null != I && null != I.rulesChannelId && (0, T.gp)(I.id, I.rulesChannelId);
    }, [I]);
    return null == d || null == i || 0 === i.length
        ? null
        : (0, l.jsxs)('div', {
              className: G.container,
              children: [
                  (0, l.jsx)(o.X6q, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: C.NW.string(C.t.LhlgY2)
                  }),
                  (null == I ? void 0 : I.hasFeature(v.oNc.CLAN)) &&
                      null != p &&
                      (0, l.jsx)(o.P3F, {
                          className: G.clickableAction,
                          onClick: () => (0, u.CK)(n, null == E ? void 0 : E.joinRequestId),
                          children: (0, l.jsxs)('div', {
                              className: G.action,
                              children: [
                                  (0, l.jsx)('div', {
                                      className: G.tagIconContainer,
                                      children: (0, l.jsx)(N.KQ, {
                                          src: p,
                                          size: b.NC.SIZE_16
                                      })
                                  }),
                                  (0, l.jsx)('div', {
                                      className: G.actionInfo,
                                      children: (0, l.jsx)(o.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'header-primary',
                                          children: C.NW.string(C.t.MNhFER)
                                      })
                                  })
                              ]
                          })
                      }),
                  i.map((e) =>
                      (0, l.jsx)(
                          L,
                          {
                              action: e,
                              completed: (null == c ? void 0 : c[e.channelId]) === !0,
                              guildId: n
                          },
                          e.channelId
                      )
                  ),
                  (null == I ? void 0 : I.rulesChannelId) != null &&
                      (0, l.jsxs)(o.Zbd, {
                          className: s()(G.action, G.clickableAction),
                          onClick: S,
                          children: [
                              (0, l.jsx)('div', {
                                  className: G.rulesIconContainer,
                                  children: (0, l.jsx)(o.snC, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: G.rulesIcon
                                  })
                              }),
                              (0, l.jsx)('div', {
                                  className: G.actionInfo,
                                  children: (0, l.jsx)(o.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: C.NW.string(C.t['K/i3iY'])
                                  })
                              })
                          ]
                      })
              ]
          });
}
