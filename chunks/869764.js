t.d(n, {
    Z: () => P,
    k: () => N
}),
    t(997841);
var l = t(200651),
    r = t(192379),
    a = t(120356),
    i = t.n(a),
    s = t(442837),
    c = t(481060),
    o = t(933557),
    d = t(471445),
    u = t(592125),
    h = t(271383),
    m = t(430824),
    f = t(496675),
    g = t(186523),
    p = t(768581),
    x = t(630388),
    b = t(526120),
    j = t(563534),
    C = t(846121),
    _ = t(216701),
    I = t(981631),
    v = t(372897),
    Z = t(388032),
    y = t(411114);
function N(e) {
    var { title: n, emojiId: t, emojiName: r, icon: a, completed: s, Icon: o, onClick: d } = e,
        u = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        l,
                        r = {},
                        a = Object.keys(e);
                    for (l = 0; l < a.length; l++) (t = a[l]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (l = 0; l < a.length; l++) (t = a[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['title', 'emojiId', 'emojiName', 'icon', 'completed', 'Icon', 'onClick']);
    let h = 'channel' === u.variant ? u.channelId : null,
        m = 'static' === u.variant ? u.subtitle : u.channelName,
        f =
            null != h
                ? p.ZP.getNewMemberActionIconURL({
                      channelId: h,
                      icon: a
                  })
                : null;
    return (0, l.jsxs)(c.Zbd, {
        className: i()(y.action, { [y.clickableAction]: null != d }),
        onClick: d,
        children: [
            null != f
                ? (0, l.jsx)('img', {
                      src: f,
                      className: y.icon,
                      width: 32,
                      height: 32,
                      alt: '',
                      'aria-hidden': !0
                  })
                : (0, l.jsx)(_.Z, {
                      emojiId: t,
                      emojiName: r,
                      size: _.R.LARGE,
                      defaultComponent: (0, l.jsx)('div', {
                          className: y.channelIconContainer,
                          children: (0, l.jsx)(o, {
                              className: y.channelIcon,
                              color: 'currentColor'
                          })
                      })
                  }),
            (0, l.jsxs)('div', {
                className: y.actionInfo,
                children: [
                    (0, l.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: n
                    }),
                    null != m
                        ? (0, l.jsx)(c.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: m
                          })
                        : null
                ]
            }),
            s
                ? (0, l.jsx)(c.owK, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: '#fff',
                      className: y.checkCircleCompleted
                  })
                : (0, l.jsx)(g.Z, {
                      className: y.checkCircle,
                      width: 24,
                      height: 24
                  })
        ]
    });
}
function O(e) {
    var n;
    let { action: t, completed: a } = e,
        { channelId: i, title: h, emoji: m, icon: g } = t,
        { id: p, name: x } = null != m ? m : {},
        j = (0, s.e7)([u.Z], () => u.Z.getChannel(i)),
        C = (0, o.ZP)(j, !0),
        _ = (0, s.e7)([f.Z], () => f.Z.can(I.Plq.VIEW_CHANNEL, j)),
        v = r.useMemo(() => {
            if (null != j) return () => (0, b.gp)(j.guild_id, j.id);
        }, [j]);
    if (null == j || !_) return null;
    let Z = null != (n = (0, d.KS)(j)) ? n : c.VL1;
    return (0, l.jsx)(N, {
        variant: 'channel',
        channelId: i,
        title: h,
        channelName: C,
        emojiId: p,
        emojiName: x,
        icon: g,
        completed: a,
        Icon: Z,
        onClick: v
    });
}
function P(e) {
    let { guildId: n } = e,
        t = (0, s.e7)([j.Z], () => j.Z.getNewMemberActions(n), [n]),
        a = (0, s.e7)([C.Z], () => C.Z.getCompletedActions(n)),
        o = (0, s.e7)([h.ZP], () => h.ZP.getSelfMember(n)),
        d = (0, s.e7)([m.Z], () => m.Z.getGuild(n));
    r.useEffect(() => {
        var e;
        null == a && (null == o ? void 0 : o.flags) != null && (0, x.yE)(null != (e = o.flags) ? e : 0, v.q.STARTED_HOME_ACTIONS) && (0, b.Fg)(n);
    }, [a, n, null == o ? void 0 : o.flags]);
    let u = r.useCallback(() => {
        null != d && null != d.rulesChannelId && (0, b.gp)(d.id, d.rulesChannelId);
    }, [d]);
    return null == o || null == t || 0 === t.length
        ? null
        : (0, l.jsxs)('div', {
              className: y.container,
              children: [
                  (0, l.jsx)(c.X6q, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: Z.intl.string(Z.t.LhlgY2)
                  }),
                  t.map((e) =>
                      (0, l.jsx)(
                          O,
                          {
                              action: e,
                              completed: (null == a ? void 0 : a[e.channelId]) === !0,
                              guildId: n
                          },
                          e.channelId
                      )
                  ),
                  (null == d ? void 0 : d.rulesChannelId) != null &&
                      (0, l.jsxs)(c.Zbd, {
                          className: i()(y.action, y.clickableAction),
                          onClick: u,
                          children: [
                              (0, l.jsx)('div', {
                                  className: y.rulesIconContainer,
                                  children: (0, l.jsx)(c.snC, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: y.rulesIcon
                                  })
                              }),
                              (0, l.jsx)('div', {
                                  className: y.actionInfo,
                                  children: (0, l.jsx)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: Z.intl.string(Z.t['K/i3iY'])
                                  })
                              })
                          ]
                      })
              ]
          });
}
