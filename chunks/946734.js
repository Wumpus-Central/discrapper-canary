n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(28664),
    c = n(481060),
    u = n(884338),
    d = n(100527),
    p = n(906732),
    h = n(111028),
    f = n(150039),
    m = n(892001),
    g = n(271383),
    b = n(430824),
    y = n(594174),
    _ = n(251625),
    C = n(823379),
    v = n(665149),
    x = n(228168),
    O = n(388032),
    j = n(130370);
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
            let [l, a] = t,
                o = (0, r.jsx)(c.P3F, {
                    tag: "span",
                    onClick: this.handleClick,
                    children: l,
                });
            return (
                a.length > 0 &&
                    (o = (0, r.jsx)(s.u, {
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
        E(this, "userId", void 0),
            E(this, "user", void 0),
            E(this, "channelId", void 0),
            E(this, "analyticsLocations", void 0),
            E(
                this,
                "generateNicknameGuildPairs",
                (0, _.oH)((e) => {
                    var t;
                    return a()(g.ZP.getNicknameGuildsMapping(null != (t = null == e ? void 0 : e.id) ? t : this.userId))
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
                                    .filter(C.lm),
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
                    s.u,
                    {
                        asContainer: !0,
                        tag: "span",
                        text: O.intl.string(O.t.UTjREx),
                        position: "bottom",
                        children: (0, r.jsx)(c.P3F, {
                            className: j.moreAvatars,
                            onClick: this.handleClick,
                            children: (0, r.jsx)(c.oFk, {
                                size: "xs",
                                color: "currentColor",
                                className: j.plusIcon,
                            }),
                        }),
                    },
                    "more-avatars",
                ),
            ),
            E(this, "handleClick", () => {
                (0, m.openUserProfileModal)({
                    userId: this.userId,
                    channelId: this.channelId,
                    sourceAnalyticsLocations: this.analyticsLocations,
                    section: x.oh.MUTUAL_GUILDS,
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
        a = Array(l.length).fill(null),
        { analyticsLocations: m } = (0, p.ZP)(d.Z.AKA),
        g = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: r } = e,
                l = (0, o.e7)([y.default], () => y.default.getUser(t), [t]),
                [a] = i.useState(
                    () =>
                        new S({
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
            analyticsLocations: m,
            channelId: t.id,
        }),
        [_, C] = i.useState(!1),
        x = i.useCallback(() => {
            C(!0);
        }, [C]),
        E = i.useCallback(() => {
            C(!1);
        }, [C]);
    return 0 === g.getNicknameGuildPairs().length && 0 === l.length
        ? (0, r.jsx)("div", { className: j.spacer })
        : (0, r.jsxs)(p.Gt, {
              value: m,
              children: [
                  (0, r.jsx)(v.iz, { className: j.divider }),
                  (0, r.jsx)(c.IGR, {
                      text: O.intl.string(O.t.l1QVfn),
                      disableColor: !0,
                      className: j.akaBadge,
                  }),
                  l.length > 0
                      ? (0, r.jsx)(u.ZP, {
                            size: 16,
                            users: a,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                var i;
                                let a = g.user,
                                    o = l[n];
                                return null == o || null == a
                                    ? null
                                    : (0, r.jsx)(
                                          s.u,
                                          {
                                              asContainer: !0,
                                              text: null == (i = b.Z.getGuild(o)) ? void 0 : i.name,
                                              position: "bottom",
                                              children: (0, r.jsx)("img", {
                                                  alt: "",
                                                  className: j.avatar,
                                                  onClick: g.handleClick,
                                                  src: a.getAvatarURL(o, 16),
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          o[1],
                                      );
                            },
                            renderMoreUsers: g.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: j.avatars,
                        })
                      : null,
                  g.getNicknameGuildPairs().length > 0
                      ? (0, r.jsx)(h.Z, {
                            position: "bottom",
                            className: j.nicknames,
                            delay: 0,
                            onTooltipShow: x,
                            onTooltipHide: E,
                            children: g.renderNicknamePairs(!_),
                        })
                      : null,
              ],
          });
}
