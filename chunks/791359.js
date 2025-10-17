n.d(t, { Z: () => L }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    o = n(954955),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    p = n(365113),
    f = n(509212),
    h = n(569984),
    g = n(93127),
    m = n(752048),
    b = n(594174),
    _ = n(801077),
    E = n(626135),
    O = n(70956),
    v = n(225559),
    y = n(910436),
    I = n(203028),
    C = n(358924),
    S = n(292140),
    N = n(525296),
    T = n(981631),
    P = n(46140),
    j = n(388032),
    x = n(559909);
let A = 15 * O.Z.Millis.MINUTE,
    Z = (0, N.Z)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: l, quest: a } = e,
            o = i.useRef(null),
            c = (0, r.jsx)(I.Z, {
                party: t,
                onUserContextMenu: n,
            }),
            d = (0, r.jsx)(y.Z, {
                party: t,
                onChannelContextMenu: l,
                quest: a,
            }),
            { partiedMembers: f, applicationStreams: h, currentActivities: g, voiceChannels: m } = t,
            b = f.length,
            _ = h.length,
            O = g.length,
            v = m.length > 0,
            N = p.o.useConfig({ location: "itemcard" }).demureActivityCards,
            P = i.useCallback(() => {
                let e = g
                    .filter((e) => {
                        var t, n;
                        return (
                            (null == (t = e.game) ? void 0 : t.name) != null &&
                            (0, E.isGameApplicationType)(null == (n = e.game) ? void 0 : n.type)
                        );
                    })
                    .map((e) => e.game.name);
                E.default.track(T.rMx.NOW_PLAYING_CARD_HOVERED, {
                    num_users: b,
                    num_streams: _,
                    num_activities: O,
                    in_voice_channel: v,
                    games_detected: e,
                });
            }, [b, _, O, v, g]),
            j = s()(P, A);
        return null != c || null != d
            ? (0, r.jsx)(u.yRy, {
                  targetElementRef: o,
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
                                  ref: o,
                                  onMouseEnter: j,
                                  "aria-haspopup": "menu",
                                  className: x.itemCard,
                                  active: l,
                                  flat: N,
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
        } = (0, c.cj)([_.Z, m.Z, b.default], () => ({
            nowPlayingCards: _.Z.nowPlayingCards,
            loaded: _.Z.loaded,
            needsRefresh: m.Z.shouldFetch(),
            fetching: m.Z.isFetching(),
            currentUser: b.default.getCurrentUser(),
        })),
        o = (0, c.e7)([h.Z], () => h.Z.quests);
    i.useEffect(() => (d.Z.wait(() => v.L()), () => d.Z.wait(() => v.v())), [null == a ? void 0 : a.id]),
        i.useEffect(() => {
            n && !l && w();
        }, [n, l]);
    let s = i.useMemo(() => {
            let t = new Map(),
                n = new Set(),
                r = (0, f.NI)(o, P.l$);
            for (let i of e)
                i.party.currentActivities.forEach((e) => {
                    let { activity: l } = e;
                    if (null == l) return;
                    let a = (0, f.ZZ)(r, l);
                    null == a || n.has(a.id) || (t.set(i.party.id, a), n.add(a.id));
                });
            return t;
        }, [e, o]),
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
                                quest: s.get(t.id),
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
                                children: j.intl.string(j.t["ngJ/5u"]),
                            }),
                            (0, r.jsx)(u.Text, {
                                color: "none",
                                className: x.emptyText,
                                variant: "text-sm/normal",
                                children: j.intl.string(j.t["99ZWxc"]),
                            }),
                        ],
                    }))
        : (0, r.jsx)("div", {
              className: x.emptyCard,
              children: (0, r.jsx)(u.$jN, {}),
          });
}
