n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    o = n.n(l),
    a = n(442837),
    s = n(194983),
    c = n(28664),
    u = n(481060),
    d = n(884338),
    p = n(100527),
    h = n(906732),
    f = n(150039),
    g = n(892001),
    m = n(271383),
    b = n(430824),
    _ = n(594174),
    y = n(251625),
    O = n(823379),
    v = n(665149),
    j = n(228168),
    C = n(388032),
    x = n(130370);
function E(e, t, n) {
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
class S {
    updateData(e) {
        let { userId: t, user: n, channelId: r, analyticsLocations: i } = e;
        (this.userId = t), (this.user = n), (this.channelId = r), (this.analyticsLocations = i);
    }
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderNicknamePairs(e) {
        return this.getNicknameGuildPairs().map((t, n) => {
            let [l, o] = t,
                a = (0, r.jsx)(u.P3F, {
                    tag: "span",
                    onClick: this.handleClick,
                    children: l,
                });
            return (
                o.length > 0 &&
                    (a = (0, r.jsx)(c.u, {
                        asContainer: !0,
                        tag: "span",
                        text: o.join(", "),
                        position: "bottom",
                        shouldShow: e,
                        delay: 50,
                        children: a,
                    })),
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [0 !== n ? ", " : null, a],
                    },
                    n,
                )
            );
        });
    }
    constructor({ userId: e, user: t, channelId: n, analyticsLocations: i }) {
        E(this, "userId", void 0),
            E(this, "user", void 0),
            E(this, "channelId", void 0),
            E(this, "analyticsLocations", void 0),
            E(
                this,
                "generateNicknameGuildPairs",
                (0, y.oH)((e) => {
                    var t;
                    return o()(m.ZP.getNicknameGuildsMapping(null != (t = null == e ? void 0 : e.id) ? t : this.userId))
                        .toPairs()
                        .map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                n
                                    .map((e) => {
                                        var t;
                                        return null == (t = b.Z.getGuild(e)) ? void 0 : t.name;
                                    })
                                    .filter(O.lm),
                            ];
                        })
                        .filter((t) => {
                            let [n] = t;
                            return n !== (null == e ? void 0 : e.globalName);
                        })
                        .value();
                }),
            ),
            E(this, "renderMoreAvatars", () =>
                (0, r.jsx)(
                    c.u,
                    {
                        asContainer: !0,
                        tag: "span",
                        text: C.intl.string(C.t["UTjRE/"]),
                        position: "bottom",
                        children: (0, r.jsx)(u.P3F, {
                            className: x.moreAvatars,
                            onClick: this.handleClick,
                            children: (0, r.jsx)(u.oFk, {
                                size: "xs",
                                color: "currentColor",
                                className: x.plusIcon,
                            }),
                        }),
                    },
                    "more-avatars",
                ),
            ),
            E(this, "handleClick", () => {
                (0, g.openUserProfileModal)({
                    userId: this.userId,
                    channelId: this.channelId,
                    sourceAnalyticsLocations: this.analyticsLocations,
                    section: j.oh.MUTUAL_GUILDS,
                });
            }),
            (this.userId = e),
            (this.user = t),
            (this.channelId = n),
            (this.analyticsLocations = i);
    }
}
function I(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        l = (0, f.gc)(n),
        o = Array(l.length).fill(null),
        { analyticsLocations: g } = (0, h.ZP)(p.Z.AKA),
        m = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: r } = e,
                l = (0, a.e7)([_.default], () => _.default.getUser(t), [t]),
                [o] = i.useState(
                    () =>
                        new S({
                            user: l,
                            userId: t,
                            channelId: n,
                            analyticsLocations: r,
                        }),
                );
            return (
                o.updateData({
                    userId: t,
                    user: l,
                    channelId: n,
                    analyticsLocations: r,
                }),
                o
            );
        })({
            userId: n,
            analyticsLocations: g,
            channelId: t.id,
        }),
        [y, O] = i.useState(!1),
        j = i.useCallback(() => {
            O(!0);
        }, [O]),
        E = i.useCallback(() => {
            O(!1);
        }, [O]);
    return 0 === m.getNicknameGuildPairs().length && 0 === l.length
        ? (0, r.jsx)("div", { className: x.spacer })
        : (0, r.jsxs)(h.Gt, {
              value: g,
              children: [
                  (0, r.jsx)(v.iz, { className: x.divider }),
                  (0, r.jsx)(u.IGR, {
                      text: C.intl.string(C.t.l1QVfj),
                      disableColor: !0,
                      className: x.akaBadge,
                  }),
                  l.length > 0
                      ? (0, r.jsx)(d.ZP, {
                            size: 16,
                            users: o,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                var i;
                                let o = m.user,
                                    a = l[n];
                                return null == a || null == o
                                    ? null
                                    : (0, r.jsx)(
                                          c.u,
                                          {
                                              asContainer: !0,
                                              text: null == (i = b.Z.getGuild(a)) ? void 0 : i.name,
                                              position: "bottom",
                                              children: (0, r.jsx)("img", {
                                                  alt: "",
                                                  className: x.avatar,
                                                  onClick: m.handleClick,
                                                  src: o.getAvatarURL(a, 16),
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          a[1],
                                      );
                            },
                            renderMoreUsers: m.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: x.avatars,
                        })
                      : null,
                  m.getNicknameGuildPairs().length > 0
                      ? (0, r.jsx)(s.Z, {
                            position: "bottom",
                            className: x.nicknames,
                            delay: 0,
                            onTooltipShow: j,
                            onTooltipHide: E,
                            children: m.renderNicknamePairs(!y),
                        })
                      : null,
              ],
          });
}
