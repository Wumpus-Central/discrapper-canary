n.d(t, {
    A: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(108531),
    a = n(311907),
    s = n(397927),
    o = n(73153),
    c = n(835072),
    u = n(194187),
    d = n(58736),
    p = n(342296),
    f = n(734057),
    h = n(290863),
    A = n(994500),
    g = n(287809),
    m = n(126904),
    b = n(726079),
    _ = n(348417),
    E = n(652215),
    O = n(985018),
    y = n(270430);

function I(e) {
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
}

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function S(e) {
    let { className: t } = e,
        n = (0, a.bG)([A.A], () => A.A.getPendingCount() > 0),
        m = (0, s.rdh)(s.LU0.modules.chat.INPUT_ICON_SIZE),
        S = (function () {
            let [e, t] = i.useState(null),
                { showActivityTicker: n } = (0, _.A)(),
                r = i.useRef({}),
                l = i.useRef(null);
            return (
                i.useEffect(() => {
                    if (!n) {
                        t(null), null != l.current && (window.clearTimeout(l.current), (l.current = null));
                        return;
                    }
                    let e = (e, t, n) => {
                            null == r.current[e] && (r.current[e] = {}),
                                null == n ? delete r.current[e][t] : (r.current[e][t] = n),
                                0 === Object.keys(r.current[e]).length && delete r.current[e];
                        },
                        i = (n, i, a) => {
                            var s, o, c, u, d, p, h, m, b, _;
                            if (!A.A.isFriend(n)) return !1;
                            let O = g.default.getUser(n);
                            if (null == O) return !1;
                            let y = !1,
                                I = null;
                            if (null != i) {
                                let t,
                                    l = i.type;
                                if (
                                    null != l &&
                                    (((t = (_ = i).type) === E.$pd.PLAYING && null != _.application_id) ||
                                        t === E.$pd.LISTENING ||
                                        t === E.$pd.WATCHING)
                                ) {
                                    let t =
                                        l === E.$pd.WATCHING || l === E.$pd.LISTENING
                                            ? ""
                                                  .concat(l, "-")
                                                  .concat(null != (c = i.name) ? c : "", "-")
                                                  .concat(null != (u = i.state) ? u : "", "-")
                                                  .concat(null != (d = i.details) ? d : "")
                                            : "".concat(l, "-").concat(null != (p = i.name) ? p : "");
                                    (null == (h = r.current[n]) ? void 0 : h.presence) !== t &&
                                        ((y = !0),
                                        e(n, "presence", t),
                                        (I = {
                                            user: O,
                                            activity: i,
                                        }));
                                } else
                                    (null == (o = r.current[n]) ? void 0 : o.presence) != null &&
                                        ((y = !0), e(n, "presence", null));
                            }
                            if (null != a) {
                                let t = f.A.getChannel(a);
                                if (null != t) {
                                    let i = "voice-".concat(t.id);
                                    (null == (m = r.current[n]) ? void 0 : m.voice) !== i &&
                                        ((y = !0),
                                        e(n, "voice", i),
                                        (I = {
                                            user: O,
                                            voiceChannel: t,
                                        }));
                                }
                            } else
                                (null == (s = r.current[n]) ? void 0 : s.voice) != null &&
                                    ((y = !0), e(n, "voice", null));
                            return (
                                y &&
                                    null != I &&
                                    ((b = I),
                                    null != l.current && (window.clearTimeout(l.current), (l.current = null)),
                                    t(b),
                                    (l.current = window.setTimeout(() => {
                                        t(null), (l.current = null);
                                    }, 1e4))),
                                y
                            );
                        },
                        a = (e) => {
                            for (let t of e.updates) {
                                let e = t.user.id,
                                    n = h.A.getPrimaryActivity(e);
                                if (i(e, n)) break;
                            }
                        },
                        s = (e) => {
                            for (let t of e.voiceStates) if (i(t.userId, void 0, t.channelId)) break;
                        };
                    return (
                        o.h.subscribe("PRESENCE_UPDATES", a),
                        o.h.subscribe("VOICE_STATE_UPDATES", s),
                        () => {
                            o.h.unsubscribe("PRESENCE_UPDATES", a),
                                o.h.unsubscribe("VOICE_STATE_UPDATES", s),
                                null != l.current && (window.clearTimeout(l.current), (l.current = null));
                        }
                    );
                }, [n]),
                e
            );
        })(),
        C = i.useRef(null),
        N = (0, s.pnh)(S, {
            keys: (e) => {
                var t, n, r;
                return null != e
                    ? null != e.voiceChannel
                        ? "".concat(e.user.id, "-voice-").concat(e.voiceChannel.id)
                        : ""
                              .concat(e.user.id, "-")
                              .concat(null == (t = e.activity) ? void 0 : t.state, ":")
                              .concat(null == (n = e.activity) ? void 0 : n.details, ":")
                              .concat(null == (r = e.activity) ? void 0 : r.name)
                    : "none";
            },
            from: {
                opacity: 0,
                transform: "translateY(32px)",
            },
            enter: {
                opacity: 1,
                transform: "translateY(0px)",
            },
            leave: {
                opacity: 0,
                transform: "translateY(-32px)",
            },
            config: {
                tension: 300,
                friction: 30,
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: y.kL,
                children: N((e, t) =>
                    null == t
                        ? null
                        : (0, r.jsx)(p.A, {
                              targetElementRef: C,
                              position: "bottom",
                              align: "left",
                              userId: t.user.id,
                              children: (n) => {
                                  var i;
                                  return (0, r.jsxs)(
                                      l.animated.div,
                                      v(
                                          I(
                                              {
                                                  ref: C,
                                                  className: y.HI,
                                                  style: e,
                                              },
                                              n,
                                          ),
                                          {
                                              children: [
                                                  (0, r.jsx)(s.Text, {
                                                      variant: "text-xs/semibold",
                                                      children: null != (i = t.user.globalName) ? i : t.user.username,
                                                  }),
                                                  null != t.voiceChannel
                                                      ? (0, r.jsx)(u.A, {
                                                            channel: t.voiceChannel,
                                                            textVariant: "text-xs/medium",
                                                            textClassName: y.qS,
                                                        })
                                                      : (0, r.jsx)(c.A, {
                                                            activity: t.activity,
                                                            textVariant: "text-xs/medium",
                                                            textClassName: y.qS,
                                                        }),
                                              ],
                                          },
                                      ),
                                  );
                              },
                          }),
                ),
            }),
            (0, r.jsx)(b.lD, {
                popoutPosition: "bottom",
                popoutAlign: "left",
                children: (e, i, l, a) =>
                    (0, r.jsx)(
                        d.In,
                        v(I({}, l), {
                            ref: a,
                            className: t,
                            onClick: e,
                            icon: s.$yI,
                            iconSize: m,
                            "aria-label": O.intl.string(O.t.TdEu5X),
                            tooltip: i ? null : O.intl.string(O.t.TdEu5X),
                            selected: i,
                            showBadge: n,
                        }),
                    ),
            }),
        ],
    });
}

function C(e) {
    let { className: t } = e,
        { enableTopNavButton: n } = (0, m.tR)({
            location: "friends-button",
        });
    return n
        ? (0, r.jsx)(S, {
              className: t,
          })
        : null;
}
