n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(884338),
    d = n(100527),
    u = n(906732),
    h = n(111028),
    p = n(150039),
    m = n(171368),
    f = n(271383),
    g = n(430824),
    C = n(594174),
    x = n(251625),
    v = n(823379),
    _ = n(665149),
    I = n(981631),
    E = n(228168),
    b = n(388032),
    Z = n(25161);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class N {
    updateData(e) {
        let { userId: t, user: n, channelId: i, analyticsLocations: l } = e;
        (this.userId = t), (this.user = n), (this.channelId = i), (this.analyticsLocations = l);
    }
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderNicknamePairs() {
        return this.getNicknameGuildPairs().map((e, t) => {
            let [n, r] = e,
                a = (0, i.jsx)(o.Clickable, {
                    tag: 'span',
                    onClick: this.handleClick,
                    children: n
                });
            return (
                r.length > 0 &&
                    (a = (0, i.jsx)(o.TooltipContainer, {
                        className: Z.tooltip,
                        text: r.join(', '),
                        position: 'bottom',
                        children: a
                    })),
                (0, i.jsxs)(
                    l.Fragment,
                    {
                        children: [0 !== t ? ', ' : null, a]
                    },
                    t
                )
            );
        });
    }
    constructor({ userId: e, user: t, channelId: n, analyticsLocations: l }) {
        S(this, 'userId', void 0),
            S(this, 'user', void 0),
            S(this, 'channelId', void 0),
            S(this, 'analyticsLocations', void 0),
            S(
                this,
                'generateNicknameGuildPairs',
                (0, x.oH)((e) => {
                    var t;
                    return a()(f.ZP.getNicknameGuildsMapping(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : this.userId))
                        .toPairs()
                        .map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                n
                                    .map((e) => {
                                        var t;
                                        return null === (t = g.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
                                    })
                                    .filter(v.lm)
                            ];
                        })
                        .value();
                })
            ),
            S(this, 'renderMoreAvatars', () =>
                (0, i.jsx)(
                    o.TooltipContainer,
                    {
                        text: b.intl.string(b.t.UTjREx),
                        position: 'bottom',
                        children: (0, i.jsx)(o.Clickable, {
                            className: Z.moreAvatars,
                            onClick: this.handleClick,
                            children: (0, i.jsx)(o.CirclePlusIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: Z.plusIcon
                            })
                        })
                    },
                    'more-avatars'
                )
            ),
            S(this, 'handleClick', () => {
                (0, m.openUserProfileModal)({
                    userId: this.userId,
                    channelId: this.channelId,
                    sourceAnalyticsLocations: this.analyticsLocations,
                    section: E.oh.MUTUAL_GUILDS,
                    analyticsLocation: { section: I.jXE.CHANNEL_HEADER }
                });
            }),
            (this.userId = e),
            (this.user = t),
            (this.channelId = n),
            (this.analyticsLocations = l);
    }
}
function T(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        r = (0, p.gc)(n),
        a = Array(r.length).fill(null),
        { analyticsLocations: m } = (0, u.ZP)(d.Z.AKA),
        f = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: i } = e,
                r = (0, s.e7)([C.default], () => C.default.getUser(t), [t]),
                [a] = l.useState(
                    () =>
                        new N({
                            user: r,
                            userId: t,
                            channelId: n,
                            analyticsLocations: i
                        })
                );
            return (
                a.updateData({
                    userId: t,
                    user: r,
                    channelId: n,
                    analyticsLocations: i
                }),
                a
            );
        })({
            userId: n,
            analyticsLocations: m,
            channelId: t.id
        });
    return 0 === f.getNicknameGuildPairs().length && 0 === r.length
        ? (0, i.jsx)('div', { className: Z.spacer })
        : (0, i.jsxs)(u.Gt, {
              value: m,
              children: [
                  (0, i.jsx)(_.iz, { className: Z.divider }),
                  (0, i.jsx)(o.TextBadge, {
                      text: b.intl.string(b.t.l1QVfn),
                      disableColor: !0,
                      className: Z.akaBadge
                  }),
                  r.length > 0
                      ? (0, i.jsx)(c.Z, {
                            size: 16,
                            users: a,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                var l;
                                let a = f.user,
                                    s = r[n];
                                return null == s || null == a
                                    ? null
                                    : (0, i.jsx)(
                                          o.TooltipContainer,
                                          {
                                              text: null === (l = g.Z.getGuild(s)) || void 0 === l ? void 0 : l.name,
                                              position: 'bottom',
                                              children: (0, i.jsx)('img', {
                                                  alt: '',
                                                  className: Z.avatar,
                                                  onClick: f.handleClick,
                                                  src: a.getAvatarURL(s, 16),
                                                  'aria-hidden': !0
                                              })
                                          },
                                          s[1]
                                      );
                            },
                            renderMoreUsers: f.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: Z.avatars
                        })
                      : null,
                  f.getNicknameGuildPairs().length > 0
                      ? (0, i.jsx)(h.Z, {
                            position: 'bottom',
                            className: Z.nicknames,
                            children: f.renderNicknamePairs()
                        })
                      : null
              ]
          });
}
