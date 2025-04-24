l.d(n, {
    Z: () => P,
    k: () => y
}),
    l(997841);
var t = l(200651),
    r = l(192379),
    a = l(120356),
    i = l.n(a),
    s = l(442837),
    c = l(481060),
    o = l(933557),
    d = l(471445),
    u = l(592125),
    m = l(271383),
    h = l(430824),
    f = l(496675),
    g = l(186523),
    x = l(768581),
    p = l(630388),
    b = l(526120),
    j = l(563534),
    C = l(846121),
    _ = l(216701),
    v = l(981631),
    I = l(372897),
    Z = l(388032),
    N = l(411114);
function y(e) {
    var { title: n, emojiId: l, emojiName: r, icon: a, completed: s, Icon: o, onClick: d } = e,
        u = (function (e, n) {
            if (null == e) return {};
            var l,
                t,
                r = (function (e, n) {
                    if (null == e) return {};
                    var l,
                        t,
                        r = {},
                        a = Object.keys(e);
                    for (t = 0; t < a.length; t++) (l = a[t]), n.indexOf(l) >= 0 || (r[l] = e[l]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (t = 0; t < a.length; t++) (l = a[t]), !(n.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
            }
            return r;
        })(e, ['title', 'emojiId', 'emojiName', 'icon', 'completed', 'Icon', 'onClick']);
    let m = 'channel' === u.variant ? u.channelId : null,
        h = 'static' === u.variant ? u.subtitle : u.channelName,
        f =
            null != m
                ? x.ZP.getNewMemberActionIconURL({
                      channelId: m,
                      icon: a
                  })
                : null;
    return (0, t.jsxs)(c.Zbd, {
        className: i()(N.action, { [N.clickableAction]: null != d }),
        onClick: d,
        children: [
            null != f
                ? (0, t.jsx)('img', {
                      src: f,
                      className: N.icon,
                      width: 32,
                      height: 32,
                      alt: '',
                      'aria-hidden': !0
                  })
                : (0, t.jsx)(_.Z, {
                      emojiId: l,
                      emojiName: r,
                      size: _.R.LARGE,
                      defaultComponent: (0, t.jsx)('div', {
                          className: N.channelIconContainer,
                          children: (0, t.jsx)(o, {
                              className: N.channelIcon,
                              color: 'currentColor'
                          })
                      })
                  }),
            (0, t.jsxs)('div', {
                className: N.actionInfo,
                children: [
                    (0, t.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: n
                    }),
                    null != h
                        ? (0, t.jsx)(c.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: h
                          })
                        : null
                ]
            }),
            s
                ? (0, t.jsx)(c.owK, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: '#fff',
                      className: N.checkCircleCompleted
                  })
                : (0, t.jsx)(g.Z, {
                      className: N.checkCircle,
                      width: 24,
                      height: 24
                  })
        ]
    });
}
function O(e) {
    var n;
    let { action: l, completed: a } = e,
        { channelId: i, title: m, emoji: h, icon: g } = l,
        { id: x, name: p } = null != h ? h : {},
        j = (0, s.e7)([u.Z], () => u.Z.getChannel(i)),
        C = (0, o.ZP)(j, !0),
        _ = (0, s.e7)([f.Z], () => f.Z.can(v.Plq.VIEW_CHANNEL, j)),
        I = r.useMemo(() => {
            if (null != j) return () => (0, b.gp)(j.guild_id, j.id);
        }, [j]);
    if (null == j || !_) return null;
    let Z = null != (n = (0, d.KS)(j)) ? n : c.VL1;
    return (0, t.jsx)(y, {
        variant: 'channel',
        channelId: i,
        title: m,
        channelName: C,
        emojiId: x,
        emojiName: p,
        icon: g,
        completed: a,
        Icon: Z,
        onClick: I
    });
}
function P(e) {
    let { guildId: n } = e,
        l = (0, s.e7)([j.Z], () => j.Z.getNewMemberActions(n), [n]),
        a = (0, s.e7)([C.Z], () => C.Z.getCompletedActions(n)),
        o = (0, s.e7)([m.ZP], () => m.ZP.getSelfMember(n)),
        d = (0, s.e7)([h.Z], () => h.Z.getGuild(n));
    r.useEffect(() => {
        var e;
        null == a && (null == o ? void 0 : o.flags) != null && (0, p.yE)(null != (e = o.flags) ? e : 0, I.q.STARTED_HOME_ACTIONS) && (0, b.Fg)(n);
    }, [a, n, null == o ? void 0 : o.flags]);
    let u = r.useCallback(() => {
        null != d && null != d.rulesChannelId && (0, b.gp)(d.id, d.rulesChannelId);
    }, [d]);
    return null == o || null == l || 0 === l.length
        ? null
        : (0, t.jsxs)('div', {
              className: N.container,
              children: [
                  (0, t.jsx)(c.X6q, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: Z.intl.string(Z.t.LhlgY2)
                  }),
                  l.map((e) =>
                      (0, t.jsx)(
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
                      (0, t.jsxs)(c.Zbd, {
                          className: i()(N.action, N.clickableAction),
                          onClick: u,
                          children: [
                              (0, t.jsx)('div', {
                                  className: N.rulesIconContainer,
                                  children: (0, t.jsx)(c.snC, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: N.rulesIcon
                                  })
                              }),
                              (0, t.jsx)('div', {
                                  className: N.actionInfo,
                                  children: (0, t.jsx)(c.Text, {
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
