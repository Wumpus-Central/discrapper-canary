l.d(t, {
    A: () => U,
});
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(989349),
    c = l.n(a),
    d = l(311907),
    o = l(990078),
    u = l(397927),
    x = l(442433),
    m = l(966327),
    j = l(688810),
    b = l(624458),
    f = l(844944),
    h = l(513461),
    g = l(663997),
    v = l(716416),
    A = l(417718),
    p = l(324023),
    E = l(534400),
    S = l(532197),
    T = l(657331),
    y = l(427157),
    _ = l(71393),
    O = l(427262),
    N = l(985018),
    I = l(566737),
    R = l(663282),
    D = l(236671),
    P = l(918372);

function C(e) {
    let t,
        l,
        { status: r } = e;
    switch (r) {
        case h.B5.REJECTED:
            (t = N.t["7YSJ6f"]), (l = N.t.i05OUR);
            break;
        case h.B5.APPROVED:
            (t = N.t.bv82GS), (l = N.t.D4OUHT);
            break;
        default:
            (t = N.t["/wqiSv"]), (l = N.t.o47YZs);
    }
    return (0, n.jsxs)("div", {
        className: I.do,
        children: [
            (0, n.jsx)(u.A9s, {
                size: "md",
                color: "currentColor",
                className: I.AI,
            }),
            (0, n.jsx)(u.Heading, {
                variant: "heading-md/medium",
                children: N.intl.string(t),
            }),
            (0, n.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: N.intl.string(l),
            }),
        ],
    });
}

function M(e) {
    let { sortOrder: t, onSortChange: l } = e;
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: D.Yk,
            children: [
                (0, n.jsx)("th", {
                    className: I.e4,
                    children: (0, n.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: N.intl.string(N.t.Es7n9c),
                    }),
                }),
                (0, n.jsx)("th", {
                    className: s()(I.e4, P.QB),
                    children: (0, n.jsxs)(u.DUT, {
                        className: I.KF,
                        onClick: l,
                        children: [
                            (0, n.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "interactive-text-default",
                                children: N.intl.string(N.t.EZ5QWL),
                            }),
                            t === h._e.TIMESTAMP_ASC
                                ? (0, n.jsx)(S.A, {
                                      className: I.GM,
                                      direction: S.A.Directions.UP,
                                  })
                                : (0, n.jsx)(S.A, {
                                      className: I.GM,
                                      direction: S.A.Directions.DOWN,
                                  }),
                        ],
                    }),
                }),
                (0, n.jsx)("th", {
                    className: s()(I.e4, I.UX),
                    children: (0, n.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: N.intl.string(N.t["5Q9xGr"]),
                    }),
                }),
            ],
        }),
    });
}
let w = r.memo(function (e) {
        let { joinRequest: t, user: l } = e,
            { joinRequestId: i, guildId: s } = t,
            { analyticsLocations: a } = (0, j.Ay)(),
            c = r.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, T.openUserProfileModal)({
                            userId: l.id,
                            joinRequestId: i,
                            sourceAnalyticsLocations: a,
                        });
                },
                [l, i, a],
            );
        return (0, n.jsxs)("div", {
            className: P.FD,
            children: [
                (0, n.jsx)(u.DUT, {
                    className: P.Wn,
                    onClick: c,
                    children: (0, n.jsx)(m.A, {
                        user: l,
                    }),
                }),
                (0, n.jsx)("div", {
                    className: P.eg,
                    children: (0, n.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        children: (0, n.jsxs)(u.DUT, {
                            onClick: c,
                            className: P.VW,
                            children: [
                                l.globalName,
                                (0, n.jsx)(E.Ay, {
                                    primaryGuild: null == l ? void 0 : l.primaryGuild,
                                    userId: null == l ? void 0 : l.id,
                                    contextGuildId: s,
                                    containerClassName: P.Dz,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: P.Br,
                    children: (0, n.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        tag: "span",
                        children: (0, n.jsx)(u.DUT, {
                            onClick: c,
                            tag: "span",
                            children: O.Ay.getUserTag(l),
                        }),
                    }),
                }),
            ],
        });
    }),
    G = r.memo(function (e) {
        let { joinRequest: t, onSelect: i } = e,
            { guildId: a, createdAt: m, applicationStatus: j } = t,
            b = r.useMemo(() => new y.A(t.user), [t.user]),
            f = (0, v.R)({
                guildId: a,
            }),
            g = (0, d.bG)([_.A], () => _.A.getGuild(a)),
            A = j === h.B5.SUBMITTED;
        return null == b
            ? null
            : (0, n.jsxs)("tr", {
                  onClick: i,
                  className: s()(P.yF, P.iA, {
                      [P.wH]: (null == f ? void 0 : f.joinRequestId) === t.joinRequestId,
                  }),
                  children: [
                      (0, n.jsx)("td", {
                          children: (0, n.jsx)(w, {
                              joinRequest: t,
                              user: b,
                          }),
                      }),
                      (0, n.jsx)("td", {
                          className: P.QB,
                          children: (0, n.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: c()(m).format("lll"),
                          }),
                      }),
                      (0, n.jsx)("td", {
                          className: I.UX,
                          children:
                              A &&
                              (0, n.jsx)(o.m, {
                                  text: N.intl.string(N.t.x8Nn4M),
                                  children: (0, n.jsx)(u.DUT, {
                                      onClick: (e) => {
                                          (0, x.L3)(
                                              e,
                                              async () => {
                                                  let { default: e } = await l.e("32660").then(l.bind(l, 772063));
                                                  return (t) => {
                                                      var l, r;
                                                      return (0, n.jsx)(
                                                          e,
                                                          ((l = (function (e) {
                                                              for (var t = 1; t < arguments.length; t++) {
                                                                  var l = null != arguments[t] ? arguments[t] : {},
                                                                      n = Object.keys(l);
                                                                  "function" == typeof Object.getOwnPropertySymbols &&
                                                                      (n = n.concat(
                                                                          Object.getOwnPropertySymbols(l).filter(
                                                                              function (e) {
                                                                                  return Object.getOwnPropertyDescriptor(
                                                                                      l,
                                                                                      e,
                                                                                  ).enumerable;
                                                                              },
                                                                          ),
                                                                      )),
                                                                      n.forEach(function (t) {
                                                                          var n;
                                                                          (n = l[t]),
                                                                              t in e
                                                                                  ? Object.defineProperty(e, t, {
                                                                                        value: n,
                                                                                        enumerable: !0,
                                                                                        configurable: !0,
                                                                                        writable: !0,
                                                                                    })
                                                                                  : (e[t] = n);
                                                                      });
                                                              }
                                                              return e;
                                                          })({}, t)),
                                                          (r = r =
                                                              {
                                                                  guild: g,
                                                                  user: b,
                                                              }),
                                                          Object.getOwnPropertyDescriptors
                                                              ? Object.defineProperties(
                                                                    l,
                                                                    Object.getOwnPropertyDescriptors(r),
                                                                )
                                                              : (function (e, t) {
                                                                    var l = Object.keys(e);
                                                                    if (Object.getOwnPropertySymbols) {
                                                                        var n = Object.getOwnPropertySymbols(e);
                                                                        l.push.apply(l, n);
                                                                    }
                                                                    return l;
                                                                })(Object(r)).forEach(function (e) {
                                                                    Object.defineProperty(
                                                                        l,
                                                                        e,
                                                                        Object.getOwnPropertyDescriptor(r, e),
                                                                    );
                                                                }),
                                                          l),
                                                      );
                                                  };
                                              },
                                              {
                                                  position: "bottom",
                                                  align: "right",
                                              },
                                          );
                                      },
                                      className: P.x6,
                                      children: (0, n.jsx)(u.FHP, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 18,
                                          height: 18,
                                      }),
                                  }),
                              }),
                      }),
                  ],
              });
    }),
    L = () => {
        let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            t = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            l = "".concat(Math.floor(25 * Math.random()) + 50, "px");
        return (0, n.jsxs)("tr", {
            className: s()(P.yF, P.iA),
            children: [
                (0, n.jsx)("td", {
                    children: (0, n.jsxs)("div", {
                        className: P.FD,
                        children: [
                            (0, n.jsx)("div", {
                                className: s()(I.RH, P.Wn),
                            }),
                            (0, n.jsx)("div", {
                                className: P.eg,
                                children: (0, n.jsx)("div", {
                                    className: I.RC,
                                    style: {
                                        width: e,
                                    },
                                }),
                            }),
                            (0, n.jsx)("div", {
                                className: P.Br,
                                children: (0, n.jsx)("div", {
                                    className: I.w7,
                                    style: {
                                        width: t,
                                    },
                                }),
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)("td", {
                    className: P.QB,
                    children: (0, n.jsx)("div", {
                        className: I.RC,
                        style: {
                            width: l,
                        },
                    }),
                }),
                (0, n.jsx)("td", {
                    className: I.UX,
                }),
            ],
        });
    };

function U(e) {
    let { guildId: t, currentTab: l } = e,
        i = r.useRef(null),
        s = (0, d.bG)([_.A], () => _.A.getGuild(t)),
        a = (0, A.n)({
            guildId: t,
        }),
        c = (0, d.bG)([f.A], () => f.A.isFetching()),
        { guildJoinRequests: o } = (0, p.K)({
            guildId: t,
            applicationStatus: l,
            sortOrder: a,
        }),
        { fetchNextPage: x } = (0, g.K)({
            guildId: t,
            guildJoinRequests: o,
        }),
        m = r.useCallback(async () => {
            let e = a === h._e.TIMESTAMP_ASC ? h._e.TIMESTAMP_DESC : h._e.TIMESTAMP_ASC;
            b.A.setSelectedSortOrder(t, e), await x(e, l);
        }, [a, t, x, l]);
    return null == s
        ? null
        : (0, n.jsx)("div", {
              className: R.FV,
              children: (0, n.jsx)(u.T7Y, {
                  className: R.A0,
                  ref: i,
                  orientation: "horizontal",
                  children: (0, n.jsxs)("table", {
                      className: I.tp,
                      children: [
                          (0, n.jsx)(M, {
                              sortOrder: a,
                              onSortChange: m,
                          }),
                          (0, n.jsx)("tbody", {
                              children: c
                                  ? [, , , , ,].fill(0).map((e, t) => (0, n.jsx)(L, {}, "placeholder-".concat(t)))
                                  : 0 === o.length
                                    ? (0, n.jsx)("td", {
                                          colSpan: 3,
                                          children: (0, n.jsx)(C, {
                                              status: l,
                                          }),
                                      })
                                    : o.map((e) =>
                                          (0, n.jsx)(
                                              G,
                                              {
                                                  joinRequest: e,
                                                  onSelect: () => b.A.setSelectedGuildJoinRequest(t, e),
                                              },
                                              e.joinRequestId,
                                          ),
                                      ),
                          }),
                      ],
                  }),
              }),
          });
}
