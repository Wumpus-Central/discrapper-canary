(n.d(t, { Z: () => w }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    o = n(954955),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    p = n(569984),
    h = n(918701),
    f = n(93127),
    g = n(752048),
    m = n(594174),
    b = n(801077),
    _ = n(626135),
    E = n(70956),
    O = n(225559),
    y = n(910436),
    I = n(203028),
    v = n(358924),
    C = n(292140),
    S = n(525296),
    N = n(981631),
    T = n(46140),
    P = n(388032),
    j = n(370168);
let A = 15 * E.Z.Millis.MINUTE,
    Z = (0, S.Z)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: l, quest: a } = e,
            o = i.useRef(null),
            c = (0, r.jsx)(I.Z, {
                party: t,
                onUserContextMenu: n
            }),
            d = (0, r.jsx)(y.Z, {
                party: t,
                onChannelContextMenu: l,
                quest: a
            }),
            { partiedMembers: p, applicationStreams: h, currentActivities: f, voiceChannels: g } = t,
            m = p.length,
            b = h.length,
            E = f.length,
            O = g.length > 0,
            S = i.useCallback(() => {
                let e = f
                    .filter((e) => {
                        var t, n;
                        return (null == (t = e.game) ? void 0 : t.name) != null && (0, _.isGameApplicationType)(null == (n = e.game) ? void 0 : n.type);
                    })
                    .map((e) => e.game.name);
                _.default.track(N.rMx.NOW_PLAYING_CARD_HOVERED, {
                    num_users: m,
                    num_streams: b,
                    num_activities: E,
                    in_voice_channel: O,
                    games_detected: e
                });
            }, [m, b, E, O, f]),
            T = s()(S, A);
        return null != c || null != d
            ? (0, r.jsx)(u.yRy, {
                  targetElementRef: o,
                  position: 'left',
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, r.jsx)(C.Z, {
                          party: t,
                          close: n
                      });
                  },
                  spacing: 8,
                  children: (e, t) => {
                      var n, i;
                      let { isShown: l } = t;
                      return (0, r.jsx)(
                          v.Z,
                          ((n = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          ((r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r));
                                      }));
                              }
                              return e;
                          })({}, e)),
                          (i = i =
                              {
                                  ref: o,
                                  onMouseEnter: T,
                                  'aria-haspopup': 'menu',
                                  className: j.itemCard,
                                  active: l,
                                  children: (0, r.jsxs)('div', {
                                      children: [c, d]
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
    x = a().throttle(() => f._(), 300000);
function w() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: l,
            currentUser: a
        } = (0, c.cj)([b.Z, g.Z, m.default], () => ({
            nowPlayingCards: b.Z.nowPlayingCards,
            loaded: b.Z.loaded,
            needsRefresh: g.Z.shouldFetch(),
            fetching: g.Z.isFetching(),
            currentUser: m.default.getCurrentUser()
        })),
        o = (0, c.e7)([p.Z], () => p.Z.quests);
    (i.useEffect(() => (d.Z.wait(() => O.L()), () => d.Z.wait(() => O.v())), [null == a ? void 0 : a.id]),
        i.useEffect(() => {
            n && !l && x();
        }, [n, l]));
    let s = i.useMemo(() => {
            let t = new Map(),
                n = new Set(),
                r = (0, h.MM)(o, T.l$);
            for (let i of e)
                i.party.currentActivities.forEach((e) => {
                    let { activity: l } = e;
                    if (null == l) return;
                    let a = (0, h.ZZ)(r, l);
                    null == a || n.has(a.id) || (t.set(i.party.id, a), n.add(a.id));
                });
            return t;
        }, [e, o]),
        f = null;
    return t
        ? (f =
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
                                children: P.intl.string(P.t['ngJ/5u'])
                            }),
                            (0, r.jsx)(u.Text, {
                                color: 'none',
                                className: j.emptyText,
                                variant: 'text-sm/normal',
                                children: P.intl.string(P.t['99ZWxc'])
                            })
                        ]
                    }))
        : (0, r.jsx)('div', {
              className: j.emptyCard,
              children: (0, r.jsx)(u.$jN, {})
          });
}
