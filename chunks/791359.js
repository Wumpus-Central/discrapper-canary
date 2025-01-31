n.d(t, { Z: () => R }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(954955),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    h = n(569984),
    m = n(918701),
    p = n(93127),
    g = n(814443),
    _ = n(594174),
    f = n(801077),
    E = n(626135),
    I = n(70956),
    C = n(225559),
    v = n(910436),
    N = n(203028),
    T = n(358924),
    S = n(292140),
    Z = n(525296),
    x = n(981631),
    A = n(674563),
    b = n(388032),
    L = n(721925);
let y = 15 * I.Z.Millis.MINUTE,
    P = (0, Z.Z)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: r, quest: a } = e,
            s = (0, i.jsx)(N.Z, {
                party: t,
                onUserContextMenu: n
            }),
            c = (0, i.jsx)(v.Z, {
                party: t,
                onChannelContextMenu: r,
                quest: a
            }),
            { partiedMembers: u, applicationStreams: h, currentActivities: m, voiceChannels: p } = t,
            g = u.length,
            _ = h.length,
            f = m.length,
            I = p.length > 0,
            C = l.useCallback(() => {
                let e = m
                    .filter((e) => {
                        var t, n;
                        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === A.wW.GAME;
                    })
                    .map((e) => e.game.name);
                E.default.track(x.rMx.NOW_PLAYING_CARD_HOVERED, {
                    num_users: g,
                    num_streams: _,
                    num_activities: f,
                    in_voice_channel: I,
                    games_detected: e
                });
            }, [g, _, f, I, m]),
            Z = o()(C, y);
        return null != s || null != c
            ? (0, i.jsx)(d.yRy, {
                  position: 'left',
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, i.jsx)(S.Z, {
                          party: t,
                          close: n
                      });
                  },
                  spacing: 8,
                  children: (e, t) => {
                      let { isShown: n } = t;
                      return (0, i.jsx)(T.Z, {
                          ...e,
                          onMouseEnter: Z,
                          'aria-haspopup': 'menu',
                          className: L.itemCard,
                          active: n,
                          children: (0, i.jsxs)('div', {
                              children: [s, c]
                          })
                      });
                  }
              })
            : null;
    }),
    O = a().throttle(() => p.W(!1), 300000);
function R() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: r,
            currentUser: a
        } = (0, c.cj)([f.Z, g.Z, _.default], () => ({
            nowPlayingCards: f.Z.nowPlayingCards,
            loaded: f.Z.loaded,
            needsRefresh: g.Z.needsRefresh(),
            fetching: g.Z.getFetching(),
            currentUser: _.default.getCurrentUser()
        })),
        s = (0, c.e7)([h.Z], () => h.Z.quests);
    l.useEffect(() => (u.Z.wait(() => C.L()), () => u.Z.wait(() => C.v())), [null == a ? void 0 : a.id]),
        l.useEffect(() => {
            n && !r && O();
        }, [n, r]);
    let o = l.useMemo(() => {
            let t = new Map(),
                n = new Set();
            for (let i of e)
                i.party.currentActivities.forEach((e) => {
                    let { activity: l } = e;
                    if (null != l) {
                        let e = (0, m.ZZ)(s, l);
                        null == e || n.has(e.id) || (t.set(i.party.id, e), n.add(e.id));
                    }
                });
            return t;
        }, [e, s]),
        p = null;
    return t
        ? ((p =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, i.jsx)(
                            P,
                            {
                                party: t,
                                quest: o.get(t.id)
                            },
                            t.id
                        );
                    })
                  : (0, i.jsxs)('div', {
                        className: L.emptyCard,
                        children: [
                            (0, i.jsx)(d.X6q, {
                                variant: 'heading-md/semibold',
                                className: L.emptyHeader,
                                children: b.intl.string(b.t['ngJ/5u'])
                            }),
                            (0, i.jsx)(d.Text, {
                                color: 'none',
                                className: L.emptyText,
                                variant: 'text-sm/normal',
                                children: b.intl.string(b.t['99ZWxc'])
                            })
                        ]
                    })),
          (0, i.jsx)(i.Fragment, { children: p }))
        : (0, i.jsx)('div', {
              className: L.emptyCard,
              children: (0, i.jsx)(d.$jN, {})
          });
}
