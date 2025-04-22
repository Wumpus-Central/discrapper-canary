n.d(t, { Z: () => I }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(884338),
    u = n(100527),
    d = n(906732),
    p = n(111028),
    h = n(150039),
    f = n(171368),
    m = n(271383),
    g = n(430824),
    b = n(594174),
    _ = n(251625),
    y = n(823379),
    C = n(665149),
    x = n(228168),
    v = n(388032),
    j = n(479367);
function O(e, t, n) {
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
class E {
    updateData(e) {
        let { userId: t, user: n, channelId: r, analyticsLocations: i } = e;
        (this.userId = t), (this.user = n), (this.channelId = r), (this.analyticsLocations = i);
    }
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderNicknamePairs() {
        return this.getNicknameGuildPairs().map((e, t) => {
            let [n, l] = e,
                o = (0, r.jsx)(s.P3F, {
                    tag: 'span',
                    onClick: this.handleClick,
                    children: n
                });
            return (
                l.length > 0 &&
                    (o = (0, r.jsx)(s.DY3, {
                        className: j.tooltip,
                        text: l.join(', '),
                        position: 'bottom',
                        children: o
                    })),
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [0 !== t ? ', ' : null, o]
                    },
                    t
                )
            );
        });
    }
    constructor({ userId: e, user: t, channelId: n, analyticsLocations: i }) {
        O(this, 'userId', void 0),
            O(this, 'user', void 0),
            O(this, 'channelId', void 0),
            O(this, 'analyticsLocations', void 0),
            O(
                this,
                'generateNicknameGuildPairs',
                (0, _.oH)((e) => {
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
                                        return null == (t = g.Z.getGuild(e)) ? void 0 : t.name;
                                    })
                                    .filter(y.lm)
                            ];
                        })
                        .value();
                })
            ),
            O(this, 'renderMoreAvatars', () =>
                (0, r.jsx)(
                    s.DY3,
                    {
                        text: v.intl.string(v.t.UTjREx),
                        position: 'bottom',
                        children: (0, r.jsx)(s.P3F, {
                            className: j.moreAvatars,
                            onClick: this.handleClick,
                            children: (0, r.jsx)(s.oFk, {
                                size: 'xs',
                                color: 'currentColor',
                                className: j.plusIcon
                            })
                        })
                    },
                    'more-avatars'
                )
            ),
            O(this, 'handleClick', () => {
                (0, f.openUserProfileModal)({
                    userId: this.userId,
                    channelId: this.channelId,
                    sourceAnalyticsLocations: this.analyticsLocations,
                    section: x.oh.MUTUAL_GUILDS
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
        l = (0, h.gc)(n),
        o = Array(l.length).fill(null),
        { analyticsLocations: f } = (0, d.ZP)(u.Z.AKA),
        m = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: r } = e,
                l = (0, a.e7)([b.default], () => b.default.getUser(t), [t]),
                [o] = i.useState(
                    () =>
                        new E({
                            user: l,
                            userId: t,
                            channelId: n,
                            analyticsLocations: r
                        })
                );
            return (
                o.updateData({
                    userId: t,
                    user: l,
                    channelId: n,
                    analyticsLocations: r
                }),
                o
            );
        })({
            userId: n,
            analyticsLocations: f,
            channelId: t.id
        });
    return 0 === m.getNicknameGuildPairs().length && 0 === l.length
        ? (0, r.jsx)('div', { className: j.spacer })
        : (0, r.jsxs)(d.Gt, {
              value: f,
              children: [
                  (0, r.jsx)(C.iz, { className: j.divider }),
                  (0, r.jsx)(s.IGR, {
                      text: v.intl.string(v.t.l1QVfn),
                      disableColor: !0,
                      className: j.akaBadge
                  }),
                  l.length > 0
                      ? (0, r.jsx)(c.Z, {
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
                                          s.DY3,
                                          {
                                              text: null == (i = g.Z.getGuild(a)) ? void 0 : i.name,
                                              position: 'bottom',
                                              children: (0, r.jsx)('img', {
                                                  alt: '',
                                                  className: j.avatar,
                                                  onClick: m.handleClick,
                                                  src: o.getAvatarURL(a, 16),
                                                  'aria-hidden': !0
                                              })
                                          },
                                          a[1]
                                      );
                            },
                            renderMoreUsers: m.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: j.avatars
                        })
                      : null,
                  m.getNicknameGuildPairs().length > 0
                      ? (0, r.jsx)(p.Z, {
                            position: 'bottom',
                            className: j.nicknames,
                            children: m.renderNicknamePairs()
                        })
                      : null
              ]
          });
}
