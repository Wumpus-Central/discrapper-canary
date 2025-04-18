n.d(t, {
    Z: () => D,
    k: () => b
}),
    n(997841);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(471445),
    u = n(592125),
    m = n(271383),
    N = n(430824),
    I = n(496675),
    h = n(186523),
    g = n(768581),
    f = n(630388),
    p = n(526120),
    E = n(563534),
    S = n(846121),
    T = n(216701),
    x = n(981631),
    O = n(372897),
    _ = n(388032),
    j = n(411114);
function b(e) {
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
        I =
            null != m
                ? g.ZP.getNewMemberActionIconURL({
                      channelId: m,
                      icon: i
                  })
                : null;
    return (0, l.jsxs)(o.Zbd, {
        className: s()(j.action, { [j.clickableAction]: null != d }),
        onClick: d,
        children: [
            null != I
                ? (0, l.jsx)('img', {
                      src: I,
                      className: j.icon,
                      width: 32,
                      height: 32,
                      alt: '',
                      'aria-hidden': !0
                  })
                : (0, l.jsx)(T.Z, {
                      emojiId: n,
                      emojiName: r,
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
                      className: j.checkCircleCompleted
                  })
                : (0, l.jsx)(h.Z, {
                      className: j.checkCircle,
                      width: 24,
                      height: 24
                  })
        ]
    });
}
function v(e) {
    var t;
    let { action: n, completed: i } = e,
        { channelId: s, title: m, emoji: N, icon: h } = n,
        { id: g, name: f } = null != N ? N : {},
        E = (0, a.e7)([u.Z], () => u.Z.getChannel(s)),
        S = (0, c.ZP)(E, !0),
        T = (0, a.e7)([I.Z], () => I.Z.can(x.Plq.VIEW_CHANNEL, E)),
        O = r.useMemo(() => {
            if (null != E) return () => (0, p.gp)(E.guild_id, E.id);
        }, [E]);
    if (null == E || !T) return null;
    let _ = null != (t = (0, d.KS)(E)) ? t : o.VL1;
    return (0, l.jsx)(b, {
        variant: 'channel',
        channelId: s,
        title: m,
        channelName: S,
        emojiId: g,
        emojiName: f,
        icon: h,
        completed: i,
        Icon: _,
        onClick: O
    });
}
function D(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([E.Z], () => E.Z.getNewMemberActions(t), [t]),
        i = (0, a.e7)([S.Z], () => S.Z.getCompletedActions(t)),
        c = (0, a.e7)([m.ZP], () => m.ZP.getSelfMember(t)),
        d = (0, a.e7)([N.Z], () => N.Z.getGuild(t));
    r.useEffect(() => {
        var e;
        null == i && (null == c ? void 0 : c.flags) != null && (0, f.yE)(null != (e = c.flags) ? e : 0, O.q.STARTED_HOME_ACTIONS) && (0, p.Fg)(t);
    }, [i, t, null == c ? void 0 : c.flags]);
    let u = r.useCallback(() => {
        null != d && null != d.rulesChannelId && (0, p.gp)(d.id, d.rulesChannelId);
    }, [d]);
    return null == c || null == n || 0 === n.length
        ? null
        : (0, l.jsxs)('div', {
              className: j.container,
              children: [
                  (0, l.jsx)(o.X6q, {
                      variant: 'heading-lg/bold',
                      color: 'header-primary',
                      children: _.NW.string(_.t.LhlgY2)
                  }),
                  n.map((e) =>
                      (0, l.jsx)(
                          v,
                          {
                              action: e,
                              completed: (null == i ? void 0 : i[e.channelId]) === !0,
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
                                      children: _.NW.string(_.t['K/i3iY'])
                                  })
                              })
                          ]
                      })
              ]
          });
}
