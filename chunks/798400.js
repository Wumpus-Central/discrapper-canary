n.d(t, {
    A: () => O,
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(158954),
    o = n(311907),
    c = n(397927),
    u = n(585958),
    d = n(486020),
    m = n(854987),
    f = n(719718),
    p = n(927989),
    h = n(155286),
    b = n(573138),
    g = n(877272),
    x = n(398225),
    y = n(532294),
    v = n(622865),
    j = n(985018),
    C = n(308021),
    _ = n(211134);

function A(e) {
    let { numDaysPlayed: t, game: n, index: a } = e,
        o = (0, l.useContext)(m.P),
        f = (0, c.rdh)(o.primaryColor).hex(),
        { id: h, name: b, coverImageHash: y } = n,
        { coverImageUrl: A } = (0, u.n)(h),
        O =
            null != A
                ? A
                : d.Ay.getGameAssetURL({
                      id: h,
                      hash: y,
                  }),
        E = (0, x.vy)();
    return (0, r.jsxs)(x.vw, {
        className: i()(_.Y_, {
            [_.Nf]: 0 === a,
        }),
        spring: E,
        children: [
            (0, r.jsx)(p.A, {
                children: (0, r.jsxs)("div", {
                    className: _.JS,
                    children: [
                        null != O
                            ? (0, r.jsx)("img", {
                                  className: _.CC,
                                  alt: "",
                                  src: O,
                              })
                            : (0, r.jsx)("div", {
                                  className: _.CC,
                                  style: {
                                      borderColor: f,
                                  },
                                  children: (0, r.jsx)(s._7Z, {
                                      size: "lg",
                                      className: _.QQ,
                                  }),
                              }),
                        (0, r.jsx)("div", {
                            className: _.Tm,
                            style: {
                                backgroundColor: f,
                            },
                            children: (0, r.jsxs)(g.A, {
                                variant: "text-lg/normal",
                                className: C.sH,
                                children: ["#", a + 1],
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(g.A, {
                variant: "eyebrow",
                className: _.UU,
                children: b,
            }),
            (0, r.jsx)(g.A, {
                variant: "text-sm/bold",
                className: _.Mf,
                children: j.intl.format(v.default.MugpMu, {
                    numSessions: t,
                }),
            }),
        ],
    });
}

function O() {
    let e = (0, l.useContext)(m.P),
        t = (0, c.rdh)(e.primaryColor).hex(),
        {
            applications: { totalGamesPlayed: n, applications: a } = {
                totalGamesPlayed: 0,
                applications: [],
            },
        } = (0, o.bG)([f.A], () => f.A.getCheckpointData());
    return (0, r.jsxs)(b.A, {
        verticalFlow: !0,
        className: _.kL,
        children: [
            (0, r.jsxs)("div", {
                className: C.DD,
                children: [
                    (0, r.jsx)(s._xR, {
                        size: "refresh_sm",
                        color: t,
                        colorClass: C.d7,
                    }),
                    (0, r.jsx)(g.A, {
                        variant: "eyebrow",
                        className: C.UP,
                        children: j.intl.string(v.default.dW6EBf),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: _.wx,
                children: [
                    (0, r.jsx)(g.A, {
                        variant: "display-lg",
                        className: _.Vy,
                        children: j.intl.string(j.t.URyqtP),
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(g.A, {
                                variant: "heading-xxl/medium",
                                className: _.VA,
                                children: j.intl.format(v.default.gzlOml, {
                                    numGames: n,
                                    gamesHook: (e, t) =>
                                        (0, r.jsx)(
                                            g.A,
                                            {
                                                variant: "heading-xxl/medium",
                                                className: _.mG,
                                                children: e,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                            (0, r.jsx)(h.e, {
                                slide: y.P7.GAMING,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: _.ag,
                children: a.map((e, t) => {
                    var n, l;
                    return (0, r.jsx)(
                        A,
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
                        (l = l =
                            {
                                index: t,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n),
                        "game-".concat(t),
                    );
                }),
            }),
        ],
    });
}
