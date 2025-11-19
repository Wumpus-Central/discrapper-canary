n.d(t, {
    Z: () => D,
    k: () => v,
}),
    n(997841);
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(471445),
    u = n(592125),
    m = n(271383),
    g = n(430824),
    h = n(496675),
    f = n(186523),
    N = n(768581),
    I = n(630388),
    p = n(526120),
    O = n(563534),
    E = n(846121),
    S = n(216701),
    x = n(981631),
    T = n(372897),
    _ = n(388032),
    j = n(195286);
function v(e) {
    var { title: t, emojiId: n, emojiName: r, icon: i, completed: s, Icon: c, onClick: d } = e,
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
                for (l = 0; l < i.length; l++)
                    (n = i[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["title", "emojiId", "emojiName", "icon", "completed", "Icon", "onClick"]);
    let m = "channel" === u.variant ? u.channelId : null,
        g = "static" === u.variant ? u.subtitle : u.channelName,
        h =
            null != m
                ? N.ZP.getNewMemberActionIconURL({
                      channelId: m,
                      icon: i,
                  })
                : null;
    return (0, l.jsxs)(o.Zbd, {
        className: a()(j.action, { [j.clickableAction]: null != d }),
        onClick: d,
        children: [
            null != h
                ? (0, l.jsx)("img", {
                      src: h,
                      className: j.icon,
                      width: 32,
                      height: 32,
                      alt: "",
                      "aria-hidden": !0,
                  })
                : (0, l.jsx)(S.Z, {
                      emojiId: n,
                      emojiName: r,
                      size: S.R.LARGE,
                      defaultComponent: (0, l.jsx)("div", {
                          className: j.channelIconContainer,
                          children: (0, l.jsx)(c, {
                              className: j.channelIcon,
                              color: "currentColor",
                          }),
                      }),
                  }),
            (0, l.jsxs)("div", {
                className: j.actionInfo,
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: t,
                    }),
                    null != g
                        ? (0, l.jsx)(o.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: g,
                          })
                        : null,
                ],
            }),
            s
                ? (0, l.jsx)(o.owK, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: "#fff",
                      className: j.checkCircleCompleted,
                  })
                : (0, l.jsx)(f.Z, {
                      className: j.checkCircle,
                      width: 24,
                      height: 24,
                  }),
        ],
    });
}
function b(e) {
    var t;
    let { action: n, completed: i } = e,
        { channelId: a, title: m, emoji: g, icon: f } = n,
        { id: N, name: I } = null != g ? g : {},
        O = (0, s.e7)([u.Z], () => u.Z.getChannel(a)),
        E = (0, c.ZP)(O, !0),
        S = (0, s.e7)([h.Z], () => h.Z.can(x.Plq.VIEW_CHANNEL, O)),
        T = r.useMemo(() => {
            if (null != O) return () => (0, p.gp)(O.guild_id, O.id);
        }, [O]);
    if (null == O || !S) return null;
    let _ = null != (t = (0, d.KS)(O)) ? t : o.VL1;
    return (0, l.jsx)(v, {
        variant: "channel",
        channelId: a,
        title: m,
        channelName: E,
        emojiId: N,
        emojiName: I,
        icon: f,
        completed: i,
        Icon: _,
        onClick: T,
    });
}
function D(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([O.Z], () => O.Z.getNewMemberActions(t), [t]),
        i = (0, s.e7)([E.Z], () => E.Z.getCompletedActions(t)),
        c = (0, s.e7)([m.ZP], () => m.ZP.getSelfMember(t)),
        d = (0, s.e7)([g.Z], () => g.Z.getGuild(t));
    r.useEffect(() => {
        var e;
        null == i &&
            (null == c ? void 0 : c.flags) != null &&
            (0, I.yE)(null != (e = c.flags) ? e : 0, T.q.STARTED_HOME_ACTIONS) &&
            (0, p.Fg)(t);
    }, [i, t, null == c ? void 0 : c.flags]);
    let u = r.useCallback(() => {
        null != d && null != d.rulesChannelId && (0, p.gp)(d.id, d.rulesChannelId);
    }, [d]);
    return null == c || null == n || 0 === n.length
        ? null
        : (0, l.jsxs)("div", {
              className: j.container,
              children: [
                  (0, l.jsx)(o.Heading, {
                      variant: "heading-lg/bold",
                      color: "header-primary",
                      children: _.intl.string(_.t.LhlgY9),
                  }),
                  n.map((e) =>
                      (0, l.jsx)(
                          b,
                          {
                              action: e,
                              completed: (null == i ? void 0 : i[e.channelId]) === !0,
                              guildId: t,
                          },
                          e.channelId,
                      ),
                  ),
                  (null == d ? void 0 : d.rulesChannelId) != null &&
                      (0, l.jsxs)(o.Zbd, {
                          className: a()(j.action, j.clickableAction),
                          onClick: u,
                          children: [
                              (0, l.jsx)("div", {
                                  className: j.rulesIconContainer,
                                  children: (0, l.jsx)(o.snC, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: j.rulesIcon,
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  className: j.actionInfo,
                                  children: (0, l.jsx)(o.Text, {
                                      variant: "text-md/semibold",
                                      color: "header-primary",
                                      children: _.intl.string(_.t["K/i3iQ"]),
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
