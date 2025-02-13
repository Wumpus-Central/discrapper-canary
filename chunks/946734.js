n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
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
    _ = n(594174),
    C = n(251625),
    x = n(823379),
    v = n(665149),
    E = n(981631),
    I = n(228168),
    b = n(388032),
    Z = n(668065);
function N(e, t, n) {
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
class T {
    updateData(e) {
        let { userId: t, user: n, channelId: i, analyticsLocations: l } = e;
        (this.userId = t), (this.user = n), (this.channelId = i), (this.analyticsLocations = l);
    }
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderNicknamePairs() {
        return this.getNicknameGuildPairs().map((e, t) => {
            let [n, a] = e,
                r = (0, i.jsx)(o.P3F, {
                    tag: 'span',
                    onClick: this.handleClick,
                    children: n
                });
            return (
                a.length > 0 &&
                    (r = (0, i.jsx)(o.DY3, {
                        className: Z.tooltip,
                        text: a.join(', '),
                        position: 'bottom',
                        children: r
                    })),
                (0, i.jsxs)(
                    l.Fragment,
                    {
                        children: [0 !== t ? ', ' : null, r]
                    },
                    t
                )
            );
        });
    }
    constructor({ userId: e, user: t, channelId: n, analyticsLocations: l }) {
        N(this, 'userId', void 0),
            N(this, 'user', void 0),
            N(this, 'channelId', void 0),
            N(this, 'analyticsLocations', void 0),
            N(
                this,
                'generateNicknameGuildPairs',
                (0, C.oH)((e) => {
                    var t;
                    return r()(f.ZP.getNicknameGuildsMapping(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : this.userId))
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
                                    .filter(x.lm)
                            ];
                        })
                        .value();
                })
            ),
            N(this, 'renderMoreAvatars', () =>
                (0, i.jsx)(
                    o.DY3,
                    {
                        text: b.intl.string(b.t.UTjREx),
                        position: 'bottom',
                        children: (0, i.jsx)(o.P3F, {
                            className: Z.moreAvatars,
                            onClick: this.handleClick,
                            children: (0, i.jsx)(o.oFk, {
                                size: 'xs',
                                color: 'currentColor',
                                className: Z.plusIcon
                            })
                        })
                    },
                    'more-avatars'
                )
            ),
            N(this, 'handleClick', () => {
                (0, m.openUserProfileModal)({
                    userId: this.userId,
                    channelId: this.channelId,
                    sourceAnalyticsLocations: this.analyticsLocations,
                    section: I.oh.MUTUAL_GUILDS,
                    analyticsLocation: { section: E.jXE.CHANNEL_HEADER }
                });
            }),
            (this.userId = e),
            (this.user = t),
            (this.channelId = n),
            (this.analyticsLocations = l);
    }
}
function S(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        a = (0, p.gc)(n),
        r = Array(a.length).fill(null),
        { analyticsLocations: m } = (0, u.ZP)(d.Z.AKA),
        f = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: i } = e,
                a = (0, s.e7)([_.default], () => _.default.getUser(t), [t]),
                [r] = l.useState(
                    () =>
                        new T({
                            user: a,
                            userId: t,
                            channelId: n,
                            analyticsLocations: i
                        })
                );
            return (
                r.updateData({
                    userId: t,
                    user: a,
                    channelId: n,
                    analyticsLocations: i
                }),
                r
            );
        })({
            userId: n,
            analyticsLocations: m,
            channelId: t.id
        });
    return 0 === f.getNicknameGuildPairs().length && 0 === a.length
        ? (0, i.jsx)('div', { className: Z.spacer })
        : (0, i.jsxs)(u.Gt, {
              value: m,
              children: [
                  (0, i.jsx)(v.iz, { className: Z.divider }),
                  (0, i.jsx)(o.IGR, {
                      text: b.intl.string(b.t.l1QVfn),
                      disableColor: !0,
                      className: Z.akaBadge
                  }),
                  a.length > 0
                      ? (0, i.jsx)(c.Z, {
                            size: 16,
                            users: r,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                var l;
                                let r = f.user,
                                    s = a[n];
                                return null == s || null == r
                                    ? null
                                    : (0, i.jsx)(
                                          o.DY3,
                                          {
                                              text: null === (l = g.Z.getGuild(s)) || void 0 === l ? void 0 : l.name,
                                              position: 'bottom',
                                              children: (0, i.jsx)('img', {
                                                  alt: '',
                                                  className: Z.avatar,
                                                  onClick: f.handleClick,
                                                  src: r.getAvatarURL(s, 16),
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
