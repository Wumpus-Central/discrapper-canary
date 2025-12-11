n.d(t, {
    Z: () => D,
    k: () => v,
}),
    n(997841);
var l = n(54381),
    i = n(473749),
    r = n(120356),
    s = n.n(r),
    a = n(95015),
    o = n(442837),
    c = n(481060),
    d = n(933557),
    u = n(471445),
    m = n(592125),
    g = n(271383),
    f = n(430824),
    h = n(496675),
    N = n(186523),
    I = n(768581),
    p = n(526120),
    O = n(563534),
    E = n(846121),
    S = n(216701),
    x = n(981631),
    T = n(372897),
    _ = n(388032),
    j = n(437449);
function v(e) {
    var { title: t, emojiId: n, emojiName: i, icon: r, completed: a, Icon: o, onClick: d } = e,
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
                for (l = 0; l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["title", "emojiId", "emojiName", "icon", "completed", "Icon", "onClick"]);
    let m = "channel" === u.variant ? u.channelId : null,
        g = "static" === u.variant ? u.subtitle : u.channelName,
        f =
            null != m
                ? I.ZP.getNewMemberActionIconURL({
                      channelId: m,
                      icon: r,
                  })
                : null;
    return (0, l.jsxs)(c.Zbd, {
        className: s()(j.action, { [j.clickableAction]: null != d }),
        onClick: d,
        children: [
            null != f
                ? (0, l.jsx)("img", {
                      src: f,
                      className: j.icon,
                      width: 32,
                      height: 32,
                      alt: "",
                      "aria-hidden": !0,
                  })
                : (0, l.jsx)(S.Z, {
                      emojiId: n,
                      emojiName: i,
                      size: S.R.LARGE,
                      defaultComponent: (0, l.jsx)("div", {
                          className: j.channelIconContainer,
                          children: (0, l.jsx)(o, {
                              className: j.channelIcon,
                              color: "currentColor",
                          }),
                      }),
                  }),
            (0, l.jsxs)("div", {
                className: j.actionInfo,
                children: [
                    (0, l.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: t,
                    }),
                    null != g
                        ? (0, l.jsx)(c.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: g,
                          })
                        : null,
                ],
            }),
            a
                ? (0, l.jsx)(c.owK, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: "#fff",
                      className: j.checkCircleCompleted,
                  })
                : (0, l.jsx)(N.Z, {
                      className: j.checkCircle,
                      width: 24,
                      height: 24,
                  }),
        ],
    });
}
function b(e) {
    var t;
    let { action: n, completed: r } = e,
        { channelId: s, title: a, emoji: g, icon: f } = n,
        { id: N, name: I } = null != g ? g : {},
        O = (0, o.e7)([m.Z], () => m.Z.getChannel(s)),
        E = (0, d.ZP)(O, !0),
        S = (0, o.e7)([h.Z], () => h.Z.can(x.Plq.VIEW_CHANNEL, O)),
        T = i.useMemo(() => {
            if (null != O) return () => (0, p.gp)(O.guild_id, O.id);
        }, [O]);
    if (null == O || !S) return null;
    let _ = null != (t = (0, u.KS)(O)) ? t : c.VL1;
    return (0, l.jsx)(v, {
        variant: "channel",
        channelId: s,
        title: a,
        channelName: E,
        emojiId: N,
        emojiName: I,
        icon: f,
        completed: r,
        Icon: _,
        onClick: T,
    });
}
function D(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([O.Z], () => O.Z.getNewMemberActions(t), [t]),
        r = (0, o.e7)([E.Z], () => E.Z.getCompletedActions(t)),
        d = (0, o.e7)([g.ZP], () => g.ZP.getSelfMember(t)),
        u = (0, o.e7)([f.Z], () => f.Z.getGuild(t));
    i.useEffect(() => {
        var e;
        null == r &&
            (null == d ? void 0 : d.flags) != null &&
            (0, a.yE)(null != (e = d.flags) ? e : 0, T.q.STARTED_HOME_ACTIONS) &&
            (0, p.Fg)(t);
    }, [r, t, null == d ? void 0 : d.flags]);
    let m = i.useCallback(() => {
        null != u && null != u.rulesChannelId && (0, p.gp)(u.id, u.rulesChannelId);
    }, [u]);
    return null == d || null == n || 0 === n.length
        ? null
        : (0, l.jsxs)("div", {
              className: j.container,
              children: [
                  (0, l.jsx)(c.Heading, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: _.intl.string(_.t.LhlgY9),
                  }),
                  n.map((e) =>
                      (0, l.jsx)(
                          b,
                          {
                              action: e,
                              completed: (null == r ? void 0 : r[e.channelId]) === !0,
                              guildId: t,
                          },
                          e.channelId,
                      ),
                  ),
                  (null == u ? void 0 : u.rulesChannelId) != null &&
                      (0, l.jsxs)(c.Zbd, {
                          className: s()(j.action, j.clickableAction),
                          onClick: m,
                          children: [
                              (0, l.jsx)("div", {
                                  className: j.rulesIconContainer,
                                  children: (0, l.jsx)(c.snC, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: j.rulesIcon,
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  className: j.actionInfo,
                                  children: (0, l.jsx)(c.Text, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: _.intl.string(_.t["K/i3iQ"]),
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
