n.d(t, { Z: () => I }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(884338),
    u = n(100527),
    d = n(906732),
    p = n(111028),
    h = n(150039),
    f = n(892001),
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
                a = (0, r.jsx)(s.P3F, {
                    tag: 'span',
                    onClick: this.handleClick,
                    children: n
                });
            return (
                l.length > 0 &&
                    (a = (0, r.jsx)(s.DY3, {
                        className: j.tooltip,
                        text: l.join(', '),
                        position: 'bottom',
                        children: a
                    })),
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [0 !== t ? ', ' : null, a]
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
                    return a()(m.ZP.getNicknameGuildsMapping(null != (t = null == e ? void 0 : e.id) ? t : this.userId))
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
                        .filter((t) => {
                            let [n] = t;
                            return n !== (null == e ? void 0 : e.globalName);
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
        a = Array(l.length).fill(null),
        { analyticsLocations: f } = (0, d.ZP)(u.Z.AKA),
        m = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: r } = e,
                l = (0, o.e7)([b.default], () => b.default.getUser(t), [t]),
                [a] = i.useState(
                    () =>
                        new E({
                            user: l,
                            userId: t,
                            channelId: n,
                            analyticsLocations: r
                        })
                );
            return (
                a.updateData({
                    userId: t,
                    user: l,
                    channelId: n,
                    analyticsLocations: r
                }),
                a
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
                            users: a,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                var i;
                                let a = m.user,
                                    o = l[n];
                                return null == o || null == a
                                    ? null
                                    : (0, r.jsx)(
                                          s.DY3,
                                          {
                                              text: null == (i = g.Z.getGuild(o)) ? void 0 : i.name,
                                              position: 'bottom',
                                              children: (0, r.jsx)('img', {
                                                  alt: '',
                                                  className: j.avatar,
                                                  onClick: m.handleClick,
                                                  src: a.getAvatarURL(o, 16),
                                                  'aria-hidden': !0
                                              })
                                          },
                                          o[1]
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
