n.d(t, { Z: () => L }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(954955),
    s = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    p = n(569984),
    h = n(918701),
    g = n(93127),
    f = n(814443),
    m = n(594174),
    b = n(801077),
    _ = n(626135),
    E = n(70956),
    O = n(225559),
    N = n(910436),
    v = n(203028),
    y = n(358924),
    I = n(292140),
    C = n(525296),
    S = n(981631),
    T = n(674563),
    P = n(388032),
    j = n(465577);
let A = 15 * E.Z.Millis.MINUTE,
    Z = (0, C.Z)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: l, quest: o } = e,
            a = (0, r.jsx)(v.Z, {
                party: t,
                onUserContextMenu: n
            }),
            c = (0, r.jsx)(N.Z, {
                party: t,
                onChannelContextMenu: l,
                quest: o
            }),
            { partiedMembers: d, applicationStreams: p, currentActivities: h, voiceChannels: g } = t,
            f = d.length,
            m = p.length,
            b = h.length,
            E = g.length > 0,
            O = i.useCallback(() => {
                let e = h
                    .filter((e) => {
                        var t, n;
                        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === T.wW.GAME;
                    })
                    .map((e) => e.game.name);
                _.default.track(S.rMx.NOW_PLAYING_CARD_HOVERED, {
                    num_users: f,
                    num_streams: m,
                    num_activities: b,
                    in_voice_channel: E,
                    games_detected: e
                });
            }, [f, m, b, E, h]),
            C = s()(O, A);
        return null != a || null != c
            ? (0, r.jsx)(u.yRy, {
                  position: 'left',
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, r.jsx)(I.Z, {
                          party: t,
                          close: n
                      });
                  },
                  spacing: 8,
                  children: (e, t) => {
                      var n, i;
                      let { isShown: l } = t;
                      return (0, r.jsx)(
                          y.Z,
                          ((n = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({}, e)),
                          (i = i =
                              {
                                  onMouseEnter: C,
                                  'aria-haspopup': 'menu',
                                  className: j.itemCard,
                                  active: l,
                                  children: (0, r.jsxs)('div', {
                                      children: [a, c]
                                  })
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(i)).forEach(function (e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                }),
                          n)
                      );
                  }
              })
            : null;
    }),
    x = o().throttle(() => g.W(!1), 300000);
function L() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: l,
            currentUser: o
        } = (0, c.cj)([b.Z, f.Z, m.default], () => ({
            nowPlayingCards: b.Z.nowPlayingCards,
            loaded: b.Z.loaded,
            needsRefresh: f.Z.needsRefresh(),
            fetching: f.Z.getFetching(),
            currentUser: m.default.getCurrentUser()
        })),
        a = (0, c.e7)([p.Z], () => p.Z.quests);
    i.useEffect(() => (d.Z.wait(() => O.L()), () => d.Z.wait(() => O.v())), [null == o ? void 0 : o.id]),
        i.useEffect(() => {
            n && !l && x();
        }, [n, l]);
    let s = i.useMemo(() => {
            let t = new Map(),
                n = new Set();
            for (let r of e)
                r.party.currentActivities.forEach((e) => {
                    let { activity: i } = e;
                    if (null != i) {
                        let e = (0, h.ZZ)(a, i);
                        null == e || n.has(e.id) || (t.set(r.party.id, e), n.add(e.id));
                    }
                });
            return t;
        }, [e, a]),
        g = null;
    return t
        ? ((g =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, r.jsx)(
                            Z,
                            {
                                party: t,
                                quest: s.get(t.id)
                            },
                            t.id
                        );
                    })
                  : (0, r.jsxs)('div', {
                        className: j.emptyCard,
                        children: [
                            (0, r.jsx)(u.X6q, {
                                variant: 'heading-md/semibold',
                                className: j.emptyHeader,
                                children: P.NW.string(P.t['ngJ/5u'])
                            }),
                            (0, r.jsx)(u.Text, {
                                color: 'none',
                                className: j.emptyText,
                                variant: 'text-sm/normal',
                                children: P.NW.string(P.t['99ZWxc'])
                            })
                        ]
                    })),
          (0, r.jsx)(r.Fragment, { children: g }))
        : (0, r.jsx)('div', {
              className: j.emptyCard,
              children: (0, r.jsx)(u.$jN, {})
          });
}
