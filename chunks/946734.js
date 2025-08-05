(n.d(t, { Z: () => N }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(884338),
    u = n(100527),
    d = n(906732),
    f = n(111028),
    _ = n(150039),
    p = n(892001),
    h = n(271383),
    m = n(430824),
    g = n(594174),
    E = n(251625),
    b = n(823379),
    y = n(665149),
    O = n(228168),
    v = n(388032),
    I = n(479367);
function T(e, t, n) {
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
class S {
    updateData(e) {
        let { userId: t, user: n, channelId: r, analyticsLocations: i } = e;
        ((this.userId = t), (this.user = n), (this.channelId = r), (this.analyticsLocations = i));
    }
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderNicknamePairs() {
        return this.getNicknameGuildPairs().map((e, t) => {
            let [n, a] = e,
                o = (0, r.jsx)(l.P3F, {
                    tag: 'span',
                    onClick: this.handleClick,
                    children: n
                });
            return (
                a.length > 0 &&
                    (o = (0, r.jsx)(l.DY3, {
                        className: I.tooltip,
                        text: a.join(', '),
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
        (T(this, 'userId', void 0),
            T(this, 'user', void 0),
            T(this, 'channelId', void 0),
            T(this, 'analyticsLocations', void 0),
            T(
                this,
                'generateNicknameGuildPairs',
                (0, E.oH)((e) => {
                    var t;
                    return o()(h.ZP.getNicknameGuildsMapping(null != (t = null == e ? void 0 : e.id) ? t : this.userId))
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
                                    .filter(b.lm)
                            ];
                        })
                        .filter((t) => {
                            let [n] = t;
                            return n !== (null == e ? void 0 : e.globalName);
                        })
                        .value();
                })
            ),
            T(this, 'renderMoreAvatars', () =>
                (0, r.jsx)(
                    l.DY3,
                    {
                        text: v.intl.string(v.t.UTjREx),
                        position: 'bottom',
                        children: (0, r.jsx)(l.P3F, {
                            className: I.moreAvatars,
                            onClick: this.handleClick,
                            children: (0, r.jsx)(l.oFk, {
                                size: 'xs',
                                color: 'currentColor',
                                className: I.plusIcon
                            })
                        })
                    },
                    'more-avatars'
                )
            ),
            T(this, 'handleClick', () => {
                (0, p.openUserProfileModal)({
                    userId: this.userId,
                    channelId: this.channelId,
                    sourceAnalyticsLocations: this.analyticsLocations,
                    section: O.oh.MUTUAL_GUILDS
                });
            }),
            (this.userId = e),
            (this.user = t),
            (this.channelId = n),
            (this.analyticsLocations = i));
    }
}
function A(e) {
    let { userId: t, channelId: n, analyticsLocations: r } = e,
        a = (0, s.e7)([g.default], () => g.default.getUser(t), [t]),
        [o] = i.useState(
            () =>
                new S({
                    user: a,
                    userId: t,
                    channelId: n,
                    analyticsLocations: r
                })
        );
    return (
        o.updateData({
            userId: t,
            user: a,
            channelId: n,
            analyticsLocations: r
        }),
        o
    );
}
function N(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        i = (0, _.gc)(n),
        a = Array(i.length).fill(null),
        { analyticsLocations: o } = (0, d.ZP)(u.Z.AKA),
        s = A({
            userId: n,
            analyticsLocations: o,
            channelId: t.id
        }),
        p = (e, t, n) => {
            var a;
            let o = s.user,
                c = i[n];
            return null == c || null == o
                ? null
                : (0, r.jsx)(
                      l.DY3,
                      {
                          text: null == (a = m.Z.getGuild(c)) ? void 0 : a.name,
                          position: 'bottom',
                          children: (0, r.jsx)('img', {
                              alt: '',
                              className: I.avatar,
                              onClick: s.handleClick,
                              src: o.getAvatarURL(c, 16),
                              'aria-hidden': !0
                          })
                      },
                      c[1]
                  );
        };
    return 0 === s.getNicknameGuildPairs().length && 0 === i.length
        ? (0, r.jsx)('div', { className: I.spacer })
        : (0, r.jsxs)(d.Gt, {
              value: o,
              children: [
                  (0, r.jsx)(y.iz, { className: I.divider }),
                  (0, r.jsx)(l.IGR, {
                      text: v.intl.string(v.t.l1QVfn),
                      disableColor: !0,
                      className: I.akaBadge
                  }),
                  i.length > 0
                      ? (0, r.jsx)(c.ZP, {
                            size: 16,
                            users: a,
                            showUserPopout: !1,
                            renderUser: p,
                            renderMoreUsers: s.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: I.avatars
                        })
                      : null,
                  s.getNicknameGuildPairs().length > 0
                      ? (0, r.jsx)(f.Z, {
                            position: 'bottom',
                            className: I.nicknames,
                            children: s.renderNicknamePairs()
                        })
                      : null
              ]
          });
}
