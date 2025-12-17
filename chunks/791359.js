n.d(t, { Z: () => D }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    o = n(954955),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    p = n(365113),
    f = n(616022),
    g = n(968843),
    h = n(759479),
    m = n(283689),
    b = n(93127),
    _ = n(752048),
    E = n(594174),
    O = n(801077),
    v = n(626135),
    y = n(70956),
    I = n(225559),
    C = n(910436),
    S = n(203028),
    T = n(358924),
    N = n(292140),
    j = n(525296),
    P = n(981631),
    x = n(324805),
    A = n(388032),
    Z = n(121748);
let w = 15 * y.Z.Millis.MINUTE,
    L = (0, j.Z)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: l, quest: a } = e,
            o = i.useRef(null),
            c = (0, r.jsx)(S.Z, {
                party: t,
                onUserContextMenu: n,
            }),
            d = (0, r.jsx)(C.Z, {
                party: t,
                onChannelContextMenu: l,
                quest: a,
            }),
            { partiedMembers: f, applicationStreams: g, currentActivities: h, voiceChannels: m } = t,
            b = f.length,
            _ = g.length,
            E = h.length,
            O = m.length > 0,
            y = p.o.useConfig({ location: "itemcard" }).demureActivityCards,
            I = i.useCallback(() => {
                let e = h
                    .filter((e) => {
                        var t, n;
                        return (
                            (null == (t = e.game) ? void 0 : t.name) != null &&
                            (0, v.isGameApplicationType)(null == (n = e.game) ? void 0 : n.type)
                        );
                    })
                    .map((e) => e.game.name);
                v.default.track(P.rMx.NOW_PLAYING_CARD_HOVERED, {
                    num_users: b,
                    num_streams: _,
                    num_activities: E,
                    in_voice_channel: O,
                    games_detected: e,
                });
            }, [b, _, E, O, h]),
            j = i.useMemo(() => s()(I, w), [I]);
        return null != c || null != d
            ? (0, r.jsx)(u.yRy, {
                  targetElementRef: o,
                  position: "left",
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, r.jsx)(N.Z, {
                          party: t,
                          close: n,
                      });
                  },
                  spacing: 8,
                  children: (e, t) => {
                      var n, i;
                      let { isShown: l } = t;
                      return (0, r.jsx)(
                          T.Z,
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
                                  className: Z.itemCard,
                                  active: l,
                                  flat: y,
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
    R = a().throttle(() => b._(), 300000);
function D() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: l,
            currentUser: a,
        } = (0, c.cj)([O.Z, _.Z, E.default], () => ({
            nowPlayingCards: O.Z.nowPlayingCards,
            loaded: O.Z.loaded,
            needsRefresh: _.Z.shouldFetch(),
            fetching: _.Z.isFetching(),
            currentUser: E.default.getCurrentUser(),
        })),
        o = (0, c.e7)([f.Z], () => f.Z.quests),
        s = (0, g.Fy)(Array.from(o.values()));
    i.useEffect(() => (d.Z.wait(() => I.L()), () => d.Z.wait(() => I.v())), [null == a ? void 0 : a.id]),
        i.useEffect(() => {
            n && !l && R();
        }, [n, l]);
    let p = i.useMemo(() => {
            let t = new Map(),
                n = new Set(),
                r = (0, m.NI)(o, x.l$);
            for (let i of e)
                i.party.currentActivities.forEach((e) => {
                    let { activity: l } = e;
                    if (null == l) return;
                    let a = (0, h.ZZ)(r, l);
                    null == a || n.has(a.id) || (t.set(i.party.id, a), n.add(a.id));
                });
            return t;
        }, [e, o, s]),
        b = null;
    return t
        ? (b =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, r.jsx)(
                            L,
                            {
                                party: t,
                                quest: p.get(t.id),
                            },
                            t.id,
                        );
                    })
                  : (0, r.jsxs)("div", {
                        className: Z.emptyCard,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                variant: "heading-md/semibold",
                                className: Z.emptyHeader,
                                children: A.intl.string(A.t["ngJ/5u"]),
                            }),
                            (0, r.jsx)(u.Text, {
                                color: "none",
                                className: Z.emptyText,
                                variant: "text-sm/normal",
                                children: A.intl.string(A.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, r.jsx)("div", {
              className: Z.emptyCard,
              children: (0, r.jsx)(u.$jN, {}),
          });
}
