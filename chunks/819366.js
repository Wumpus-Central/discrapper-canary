n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    a = n(873546),
    o = n(442837),
    s = n(239091),
    l = n(100527),
    c = n(906732),
    u = n(927723),
    d = n(124072),
    f = n(670188),
    p = n(592125),
    _ = n(271383),
    m = n(699516),
    h = n(594174),
    g = n(5192),
    E = n(51144);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { userId: t, className: a, children: o } = e,
        l = i.useCallback(() => {
            (0, u.k)({ kind: "user" });
        }, []),
        c = i.useCallback(
            (e) => {
                null != t &&
                    (0, s.jW)(e, async () => {
                        let { default: e } = await n.e("25073").then(n.bind(n, 80742));
                        return (n) => (0, r.jsx)(e, v(y({}, n), { userId: t }));
                    });
            },
            [t],
        );
    return (0, r.jsx)(d.Z, {
        className: a,
        onClick: l,
        onContextMenu: c,
        children: o,
    });
}
function I(e) {
    let {
            className: t,
            userId: u,
            channelId: b,
            parsedUserId: O,
            content: I,
            inlinePreview: T = !1,
            viewingChannelId: C,
        } = e,
        A = i.useRef(null),
        { analyticsLocations: N } = (0, c.ZP)(l.Z.USER_MENTION),
        P = (0, o.e7)([h.default], () => h.default.getUser(u)),
        R = (0, o.e7)([p.Z], () => p.Z.getChannel(b)),
        w = null != R ? R.getGuildId() : null,
        D =
            T || null == P || null == w || null == b
                ? void 0
                : (e) => {
                      null != R &&
                          (0, s.jW)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("79695"),
                                  n.e("4040"),
                                  n.e("6915"),
                                  n.e("92524"),
                                  n.e("7717"),
                                  n.e("75548"),
                              ]).then(n.bind(n, 757387));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      v(y({}, t), {
                                          viewingChannelId: C,
                                          user: P,
                                          channel: R,
                                          guildId: w,
                                      }),
                                  );
                          });
                  },
        x = E.ZP.useName(P),
        L = (0, o.e7)([p.Z, _.ZP, m.Z], () => g.ZP.getNickname(w, b, P));
    if (null == P)
        return (0, r.jsx)(S, {
            userId: O,
            className: t,
            children: I,
        });
    let j = (e) =>
        (0, r.jsx)(
            d.Z,
            v(
                y(
                    {
                        ref: A,
                        className: t,
                        onContextMenu: D,
                    },
                    e,
                ),
                { children: "@".concat(null != L ? L : x) },
            ),
        );
    return T
        ? (0, r.jsx)(c.Gt, {
              value: N,
              children: j(),
          })
        : (0, r.jsx)(c.Gt, {
              value: N,
              children: (0, r.jsx)(f.Z, {
                  targetElementRef: A,
                  user: P,
                  guildId: null != w ? w : void 0,
                  channelId: b,
                  position: a.tq ? "top" : "right",
                  clickTrap: !0,
                  children: (e) => j(e),
              }),
          });
}
