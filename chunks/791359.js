n.d(t, { Z: () => L }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    s = n(954955),
    o = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    p = n(365113),
    f = n(509212),
    h = n(569984),
    g = n(93127),
    m = n(752048),
    _ = n(594174),
    b = n(801077),
    E = n(626135),
    O = n(70956),
    y = n(225559),
    v = n(910436),
    I = n(203028),
    C = n(358924),
    S = n(292140),
    T = n(525296),
    N = n(981631),
    j = n(46140),
    P = n(388032),
    x = n(559909);
let A = 15 * O.Z.Millis.MINUTE,
    Z = (0, T.Z)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: l, quest: a } = e,
            s = i.useRef(null),
            c = (0, r.jsx)(I.Z, {
                party: t,
                onUserContextMenu: n,
            }),
            d = (0, r.jsx)(v.Z, {
                party: t,
                onChannelContextMenu: l,
                quest: a,
            }),
            { partiedMembers: f, applicationStreams: h, currentActivities: g, voiceChannels: m } = t,
            _ = f.length,
            b = h.length,
            O = g.length,
            y = m.length > 0,
            T = p.o.useConfig({ location: "itemcard" }).demureActivityCards,
            j = i.useCallback(() => {
                let e = g
                    .filter((e) => {
                        var t, n;
                        return (
                            (null == (t = e.game) ? void 0 : t.name) != null &&
                            (0, E.isGameApplicationType)(null == (n = e.game) ? void 0 : n.type)
                        );
                    })
                    .map((e) => e.game.name);
                E.default.track(N.rMx.NOW_PLAYING_CARD_HOVERED, {
                    num_users: _,
                    num_streams: b,
                    num_activities: O,
                    in_voice_channel: y,
                    games_detected: e,
                });
            }, [_, b, O, y, g]),
            P = i.useMemo(() => o()(j, A), [j]);
        return null != c || null != d
            ? (0, r.jsx)(u.yRy, {
                  targetElementRef: s,
                  position: "left",
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, r.jsx)(S.Z, {
                          party: t,
                          close: n,
                      });
                  },
                  spacing: 8,
                  children: (e, t) => {
                      var n, i;
                      let { isShown: l } = t;
                      return (0, r.jsx)(
                          C.Z,
                          ((n = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({}, e)),
                          (i = i =
                              {
                                  ref: s,
                                  onMouseEnter: P,
                                  "aria-haspopup": "menu",
                                  className: x.itemCard,
                                  active: l,
                                  flat: T,
                                  children: (0, r.jsxs)("div", {
                                      children: [c, d],
                                  }),
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
                          n),
                      );
                  },
              })
            : null;
    }),
    w = a().throttle(() => g._(), 300000);
function L() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: l,
            currentUser: a,
        } = (0, c.cj)([b.Z, m.Z, _.default], () => ({
            nowPlayingCards: b.Z.nowPlayingCards,
            loaded: b.Z.loaded,
            needsRefresh: m.Z.shouldFetch(),
            fetching: m.Z.isFetching(),
            currentUser: _.default.getCurrentUser(),
        })),
        s = (0, c.e7)([h.Z], () => h.Z.quests);
    i.useEffect(() => (d.Z.wait(() => y.L()), () => d.Z.wait(() => y.v())), [null == a ? void 0 : a.id]),
        i.useEffect(() => {
            n && !l && w();
        }, [n, l]);
    let o = i.useMemo(() => {
            let t = new Map(),
                n = new Set(),
                r = (0, f.NI)(s, j.l$);
            for (let i of e)
                i.party.currentActivities.forEach((e) => {
                    let { activity: l } = e;
                    if (null == l) return;
                    let a = (0, f.ZZ)(r, l);
                    null == a || n.has(a.id) || (t.set(i.party.id, a), n.add(a.id));
                });
            return t;
        }, [e, s]),
        p = null;
    return t
        ? (p =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, r.jsx)(
                            Z,
                            {
                                party: t,
                                quest: o.get(t.id),
                            },
                            t.id,
                        );
                    })
                  : (0, r.jsxs)("div", {
                        className: x.emptyCard,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                variant: "heading-md/semibold",
                                className: x.emptyHeader,
                                children: P.intl.string(P.t["ngJ/5u"]),
                            }),
                            (0, r.jsx)(u.Text, {
                                color: "none",
                                className: x.emptyText,
                                variant: "text-sm/normal",
                                children: P.intl.string(P.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, r.jsx)("div", {
              className: x.emptyCard,
              children: (0, r.jsx)(u.$jN, {}),
          });
}
