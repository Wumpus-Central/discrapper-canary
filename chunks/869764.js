n.d(t, {
    Z: () => D,
    k: () => v
}),
    n(997841);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(471445),
    u = n(592125),
    m = n(271383),
    I = n(430824),
    h = n(496675),
    g = n(186523),
    N = n(768581),
    f = n(630388),
    S = n(526120),
    E = n(563534),
    p = n(846121),
    T = n(216701),
    x = n(981631),
    O = n(372897),
    _ = n(388032),
    j = n(411114);
function v(e) {
    var { title: t, emojiId: n, emojiName: i, icon: r, completed: a, Icon: c, onClick: d } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        i = {},
                        r = Object.keys(e);
                    for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (l = 0; l < r.length; l++) (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['title', 'emojiId', 'emojiName', 'icon', 'completed', 'Icon', 'onClick']);
    let m = 'channel' === u.variant ? u.channelId : null,
        I = 'static' === u.variant ? u.subtitle : u.channelName,
        h =
            null != m
                ? N.ZP.getNewMemberActionIconURL({
                      channelId: m,
                      icon: r
                  })
                : null;
    return (0, l.jsxs)(o.Zbd, {
        className: s()(j.action, { [j.clickableAction]: null != d }),
        onClick: d,
        children: [
            null != h
                ? (0, l.jsx)('img', {
                      src: h,
                      className: j.icon,
                      width: 32,
                      height: 32,
                      alt: '',
                      'aria-hidden': !0
                  })
                : (0, l.jsx)(T.Z, {
                      emojiId: n,
                      emojiName: i,
                      size: T.R.LARGE,
                      defaultComponent: (0, l.jsx)('div', {
                          className: j.channelIconContainer,
                          children: (0, l.jsx)(c, {
                              className: j.channelIcon,
                              color: 'currentColor'
                          })
                      })
                  }),
            (0, l.jsxs)('div', {
                className: j.actionInfo,
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: t
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
                      className: j.checkCircleCompleted
                  })
                : (0, l.jsx)(g.Z, {
                      className: j.checkCircle,
                      width: 24,
                      height: 24
                  })
        ]
    });
}
function b(e) {
    var t;
    let { action: n, completed: r } = e,
        { channelId: s, title: m, emoji: I, icon: g } = n,
        { id: N, name: f } = null != I ? I : {},
        E = (0, a.e7)([u.Z], () => u.Z.getChannel(s)),
        p = (0, c.ZP)(E, !0),
        T = (0, a.e7)([h.Z], () => h.Z.can(x.Plq.VIEW_CHANNEL, E)),
        O = i.useMemo(() => {
            if (null != E) return () => (0, S.gp)(E.guild_id, E.id);
        }, [E]);
    if (null == E || !T) return null;
    let _ = null != (t = (0, d.KS)(E)) ? t : o.VL1;
    return (0, l.jsx)(v, {
        variant: 'channel',
        channelId: s,
        title: m,
        channelName: p,
        emojiId: N,
        emojiName: f,
        icon: g,
        completed: r,
        Icon: _,
        onClick: O
    });
}
function D(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([E.Z], () => E.Z.getNewMemberActions(t), [t]),
        r = (0, a.e7)([p.Z], () => p.Z.getCompletedActions(t)),
        c = (0, a.e7)([m.ZP], () => m.ZP.getSelfMember(t)),
        d = (0, a.e7)([I.Z], () => I.Z.getGuild(t));
    i.useEffect(() => {
        var e;
        null == r && (null == c ? void 0 : c.flags) != null && (0, f.yE)(null != (e = c.flags) ? e : 0, O.q.STARTED_HOME_ACTIONS) && (0, S.Fg)(t);
    }, [r, t, null == c ? void 0 : c.flags]);
    let u = i.useCallback(() => {
        null != d && null != d.rulesChannelId && (0, S.gp)(d.id, d.rulesChannelId);
    }, [d]);
    return null == c || null == n || 0 === n.length
        ? null
        : (0, l.jsxs)('div', {
              className: j.container,
              children: [
                  (0, l.jsx)(o.X6q, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: _.intl.string(_.t.LhlgY2)
                  }),
                  n.map((e) =>
                      (0, l.jsx)(
                          b,
                          {
                              action: e,
                              completed: (null == r ? void 0 : r[e.channelId]) === !0,
                              guildId: t
                          },
                          e.channelId
                      )
                  ),
                  (null == d ? void 0 : d.rulesChannelId) != null &&
                      (0, l.jsxs)(o.Zbd, {
                          className: s()(j.action, j.clickableAction),
                          onClick: u,
                          children: [
                              (0, l.jsx)('div', {
                                  className: j.rulesIconContainer,
                                  children: (0, l.jsx)(o.snC, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: j.rulesIcon
                                  })
                              }),
                              (0, l.jsx)('div', {
                                  className: j.actionInfo,
                                  children: (0, l.jsx)(o.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: _.intl.string(_.t['K/i3iY'])
                                  })
                              })
                          ]
                      })
              ]
          });
}
