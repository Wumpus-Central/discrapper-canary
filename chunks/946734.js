n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(194983),
    c = n(28664),
    u = n(481060),
    d = n(884338),
    f = n(100527),
    h = n(906732),
    p = n(150039),
    g = n(892001),
    b = n(271383),
    m = n(430824),
    y = n(594174),
    O = n(251625),
    v = n(823379),
    j = n(665149),
    C = n(228168),
    x = n(388032),
    E = n(297742);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class I {
    updateData(e) {
        let { userId: t, user: n, channelId: r, analyticsLocations: i } = e;
        (this.userId = t), (this.user = n), (this.channelId = r), (this.analyticsLocations = i);
    }
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderNicknamePairs(e) {
        return this.getNicknameGuildPairs().map((t, n) => {
            let [l, a] = t,
                o = (0, r.jsx)(u.P3F, {
                    tag: "span",
                    onClick: this.handleClick,
                    children: l,
                });
            return (
                a.length > 0 &&
                    (o = (0, r.jsx)(c.u, {
                        asContainer: !0,
                        tag: "span",
                        text: a.join(", "),
                        position: "bottom",
                        shouldShow: e,
                        delay: 50,
                        children: o,
                    })),
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [0 !== n ? ", " : null, o],
                    },
                    n,
                )
            );
        });
    }
    constructor({ userId: e, user: t, channelId: n, analyticsLocations: i }) {
        S(this, "userId", void 0),
            S(this, "user", void 0),
            S(this, "channelId", void 0),
            S(this, "analyticsLocations", void 0),
            S(
                this,
                "generateNicknameGuildPairs",
                (0, O.oH)((e) => {
                    var t;
                    return a()(b.ZP.getNicknameGuildsMapping(null != (t = null == e ? void 0 : e.id) ? t : this.userId))
                        .toPairs()
                        .map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                n
                                    .map((e) => {
                                        var t;
                                        return null == (t = m.Z.getGuild(e)) ? void 0 : t.name;
                                    })
                                    .filter(v.lm),
                            ];
                        })
                        .filter((t) => {
                            let [n] = t;
                            return n !== (null == e ? void 0 : e.globalName);
                        })
                        .value();
                }),
            ),
            S(this, "renderMoreAvatars", () =>
                (0, r.jsx)(
                    c.u,
                    {
                        asContainer: !0,
                        tag: "span",
                        text: x.intl.string(x.t["UTjRE/"]),
                        position: "bottom",
                        children: (0, r.jsx)(u.P3F, {
                            className: E.moreAvatars,
                            onClick: this.handleClick,
                            children: (0, r.jsx)(u.oFk, {
                                size: "xs",
                                color: "currentColor",
                                className: E.plusIcon,
                            }),
                        }),
                    },
                    "more-avatars",
                ),
            ),
            S(this, "handleClick", () => {
                (0, g.openUserProfileModal)({
                    userId: this.userId,
                    channelId: this.channelId,
                    sourceAnalyticsLocations: this.analyticsLocations,
                    tabSection: C.oh.MUTUAL_GUILDS,
                });
            }),
            (this.userId = e),
            (this.user = t),
            (this.channelId = n),
            (this.analyticsLocations = i);
    }
}
function _(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        l = (0, p.gc)(n),
        a = Array(l.length).fill(null),
        { analyticsLocations: g } = (0, h.ZP)(f.Z.AKA),
        b = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: r } = e,
                l = (0, o.e7)([y.default], () => y.default.getUser(t), [t]),
                [a] = i.useState(
                    () =>
                        new I({
                            user: l,
                            userId: t,
                            channelId: n,
                            analyticsLocations: r,
                        }),
                );
            return (
                a.updateData({
                    userId: t,
                    user: l,
                    channelId: n,
                    analyticsLocations: r,
                }),
                a
            );
        })({
            userId: n,
            analyticsLocations: g,
            channelId: t.id,
        }),
        [O, v] = i.useState(!1),
        C = i.useCallback(() => {
            v(!0);
        }, [v]),
        S = i.useCallback(() => {
            v(!1);
        }, [v]);
    return 0 === b.getNicknameGuildPairs().length && 0 === l.length
        ? (0, r.jsx)("div", { className: E.spacer })
        : (0, r.jsxs)(h.Gt, {
              value: g,
              children: [
                  (0, r.jsx)(j.iz, { className: E.divider }),
                  (0, r.jsx)(u.IGR, {
                      text: x.intl.string(x.t.l1QVfj),
                      disableColor: !0,
                      className: E.akaBadge,
                  }),
                  l.length > 0
                      ? (0, r.jsx)(d.ZP, {
                            size: 16,
                            users: a,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                var i;
                                let a = b.user,
                                    o = l[n];
                                return null == o || null == a
                                    ? null
                                    : (0, r.jsx)(
                                          c.u,
                                          {
                                              asContainer: !0,
                                              text: null == (i = m.Z.getGuild(o)) ? void 0 : i.name,
                                              position: "bottom",
                                              children: (0, r.jsx)("img", {
                                                  alt: "",
                                                  className: E.avatar,
                                                  onClick: b.handleClick,
                                                  src: a.getAvatarURL(o, 16),
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          o[1],
                                      );
                            },
                            renderMoreUsers: b.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: E.avatars,
                        })
                      : null,
                  b.getNicknameGuildPairs().length > 0
                      ? (0, r.jsx)(s.Z, {
                            position: "bottom",
                            className: E.nicknames,
                            delay: 0,
                            onTooltipShow: C,
                            onTooltipHide: S,
                            children: b.renderNicknamePairs(!O),
                        })
                      : null,
              ],
          });
}
