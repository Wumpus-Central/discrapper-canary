n.d(t, { Z: () => G });
var l = n(54381),
    r = n(473749),
    a = n(120356),
    i = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(28664),
    u = n(481060),
    m = n(239091),
    x = n(700582),
    b = n(906732),
    j = n(693546),
    f = n(826581),
    h = n(246364),
    g = n(98493),
    p = n(328977),
    v = n(412222),
    C = n(223312),
    T = n(172751),
    S = n(768762),
    E = n(892001),
    N = n(598077),
    O = n(430824),
    _ = n(51144),
    P = n(388032),
    I = n(929133),
    y = n(803767),
    R = n(452173),
    w = n(983266);
function A(e) {
    let t,
        n,
        { status: r } = e;
    switch (r) {
        case h.wB.REJECTED:
            (t = P.t["7YSJ6f"]), (n = P.t.i05OUR);
            break;
        case h.wB.APPROVED:
            (t = P.t.bv82GS), (n = P.t.D4OUHT);
            break;
        default:
            (t = P.t["/wqiSv"]), (n = P.t.o47YZs);
    }
    return (0, l.jsxs)("div", {
        className: I.emptyContainer,
        children: [
            (0, l.jsx)(u.dz2, {
                size: "md",
                color: "currentColor",
                className: I.checkmark,
            }),
            (0, l.jsx)(u.Heading, {
                variant: "heading-md/medium",
                children: P.intl.string(t),
            }),
            (0, l.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: P.intl.string(n),
            }),
        ],
    });
}
function Z(e) {
    let { sortOrder: t, onSortChange: n } = e;
    return (0, l.jsx)("thead", {
        children: (0, l.jsxs)("tr", {
            className: R.tableHeaderRow,
            children: [
                (0, l.jsx)("th", {
                    className: I.headerCell,
                    children: (0, l.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: P.intl.string(P.t.Es7n9c),
                    }),
                }),
                (0, l.jsx)("th", {
                    className: i()(I.headerCell, w.mediumCol),
                    children: (0, l.jsxs)(u.P3F, {
                        className: I.sortItem,
                        onClick: n,
                        children: [
                            (0, l.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "interactive-text-default",
                                children: P.intl.string(P.t.EZ5QWL),
                            }),
                            t === h.Nw.TIMESTAMP_ASC
                                ? (0, l.jsx)(S.Z, {
                                      className: I.sortIcon,
                                      direction: S.Z.Directions.UP,
                                  })
                                : (0, l.jsx)(S.Z, {
                                      className: I.sortIcon,
                                      direction: S.Z.Directions.DOWN,
                                  }),
                        ],
                    }),
                }),
                (0, l.jsx)("th", {
                    className: i()(I.headerCell, I.moreOptionsCol),
                    children: (0, l.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: P.intl.string(P.t["5Q9xGr"]),
                    }),
                }),
            ],
        }),
    });
}
let M = r.memo(function (e) {
        let { joinRequest: t, user: n } = e,
            { joinRequestId: a, guildId: i } = t,
            { analyticsLocations: s } = (0, b.ZP)(),
            o = r.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, E.openUserProfileModal)({
                            userId: n.id,
                            joinRequestId: a,
                            sourceAnalyticsLocations: s,
                        });
                },
                [n, a, s],
            );
        return (0, l.jsxs)("div", {
            className: w.memberNameContainer,
            children: [
                (0, l.jsx)(u.P3F, {
                    className: w.memberAvatar,
                    onClick: o,
                    children: (0, l.jsx)(x.Z, { user: n }),
                }),
                (0, l.jsx)("div", {
                    className: w.memberName,
                    children: (0, l.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        children: (0, l.jsxs)(u.P3F, {
                            onClick: o,
                            className: w.nameContainer,
                            children: [
                                n.globalName,
                                (0, l.jsx)(T.ZP, {
                                    primaryGuild: null == n ? void 0 : n.primaryGuild,
                                    userId: null == n ? void 0 : n.id,
                                    contextGuildId: i,
                                    containerClassName: w.memberClanTag,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsx)("div", {
                    className: w.memberGlobalName,
                    children: (0, l.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        tag: "span",
                        children: (0, l.jsx)(u.P3F, {
                            onClick: o,
                            tag: "span",
                            children: _.ZP.getUserTag(n),
                        }),
                    }),
                }),
            ],
        });
    }),
    D = r.memo(function (e) {
        let { joinRequest: t, onSelect: a } = e,
            { guildId: s, createdAt: x, applicationStatus: b } = t,
            j = r.useMemo(() => new N.Z(t.user), [t.user]),
            f = (0, p.L)({ guildId: s }),
            g = (0, c.e7)([O.Z], () => O.Z.getGuild(s)),
            v = b === h.wB.SUBMITTED;
        return null == j
            ? null
            : (0, l.jsxs)("tr", {
                  onClick: a,
                  className: i()(w.roundedRow, w.memberRowContainer, {
                      [w.selected]: (null == f ? void 0 : f.joinRequestId) === t.joinRequestId,
                  }),
                  children: [
                      (0, l.jsx)("td", {
                          children: (0, l.jsx)(M, {
                              joinRequest: t,
                              user: j,
                          }),
                      }),
                      (0, l.jsx)("td", {
                          className: w.mediumCol,
                          children: (0, l.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: o()(x).format("lll"),
                          }),
                      }),
                      (0, l.jsx)("td", {
                          className: I.moreOptionsCol,
                          children:
                              v &&
                              (0, l.jsx)(d.u, {
                                  text: P.intl.string(P.t.x8Nn4M),
                                  children: (0, l.jsx)(u.P3F, {
                                      onClick: (e) => {
                                          (0, m.jW)(
                                              e,
                                              async () => {
                                                  let { default: e } = await n.e("84259").then(n.bind(n, 597409));
                                                  return (t) => {
                                                      var n, r;
                                                      return (0, l.jsx)(
                                                          e,
                                                          ((n = (function (e) {
                                                              for (var t = 1; t < arguments.length; t++) {
                                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                                      l = Object.keys(n);
                                                                  "function" == typeof Object.getOwnPropertySymbols &&
                                                                      (l = l.concat(
                                                                          Object.getOwnPropertySymbols(n).filter(
                                                                              function (e) {
                                                                                  return Object.getOwnPropertyDescriptor(
                                                                                      n,
                                                                                      e,
                                                                                  ).enumerable;
                                                                              },
                                                                          ),
                                                                      )),
                                                                      l.forEach(function (t) {
                                                                          var l;
                                                                          (l = n[t]),
                                                                              t in e
                                                                                  ? Object.defineProperty(e, t, {
                                                                                        value: l,
                                                                                        enumerable: !0,
                                                                                        configurable: !0,
                                                                                        writable: !0,
                                                                                    })
                                                                                  : (e[t] = l);
                                                                      });
                                                              }
                                                              return e;
                                                          })({}, t)),
                                                          (r = r =
                                                              {
                                                                  guild: g,
                                                                  user: j,
                                                              }),
                                                          Object.getOwnPropertyDescriptors
                                                              ? Object.defineProperties(
                                                                    n,
                                                                    Object.getOwnPropertyDescriptors(r),
                                                                )
                                                              : (function (e, t) {
                                                                    var n = Object.keys(e);
                                                                    if (Object.getOwnPropertySymbols) {
                                                                        var l = Object.getOwnPropertySymbols(e);
                                                                        n.push.apply(n, l);
                                                                    }
                                                                    return n;
                                                                })(Object(r)).forEach(function (e) {
                                                                    Object.defineProperty(
                                                                        n,
                                                                        e,
                                                                        Object.getOwnPropertyDescriptor(r, e),
                                                                    );
                                                                }),
                                                          n),
                                                      );
                                                  };
                                              },
                                              {
                                                  position: "bottom",
                                                  align: "right",
                                              },
                                          );
                                      },
                                      className: w.button,
                                      children: (0, l.jsx)(u.Huf, {
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
    k = () => {
        let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            t = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            n = "".concat(Math.floor(25 * Math.random()) + 50, "px");
        return (0, l.jsxs)("tr", {
            className: i()(w.roundedRow, w.memberRowContainer),
            children: [
                (0, l.jsx)("td", {
                    children: (0, l.jsxs)("div", {
                        className: w.memberNameContainer,
                        children: [
                            (0, l.jsx)("div", { className: i()(I.placeholderAvatar, w.memberAvatar) }),
                            (0, l.jsx)("div", {
                                className: w.memberName,
                                children: (0, l.jsx)("div", {
                                    className: I.placeholderText,
                                    style: { width: e },
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: w.memberGlobalName,
                                children: (0, l.jsx)("div", {
                                    className: I.placeholderTextSmall,
                                    style: { width: t },
                                }),
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)("td", {
                    className: w.mediumCol,
                    children: (0, l.jsx)("div", {
                        className: I.placeholderText,
                        style: { width: n },
                    }),
                }),
                (0, l.jsx)("td", { className: I.moreOptionsCol }),
            ],
        });
    };
function G(e) {
    let { guildId: t, currentTab: n } = e,
        a = r.useRef(null),
        i = (0, c.e7)([O.Z], () => O.Z.getGuild(t)),
        s = (0, v.C)({ guildId: t }),
        o = (0, c.e7)([f.Z], () => f.Z.isFetching()),
        { guildJoinRequests: d } = (0, C.j)({
            guildId: t,
            applicationStatus: n,
            sortOrder: s,
        }),
        { fetchNextPage: m } = (0, g.m)({
            guildId: t,
            guildJoinRequests: d,
        }),
        x = r.useCallback(async () => {
            let e = s === h.Nw.TIMESTAMP_ASC ? h.Nw.TIMESTAMP_DESC : h.Nw.TIMESTAMP_ASC;
            j.Z.setSelectedSortOrder(t, e), await m(e, n);
        }, [s, t, m, n]);
    return null == i
        ? null
        : (0, l.jsx)("div", {
              className: y.mainTableContainer,
              children: (0, l.jsx)(u.Den, {
                  className: y.horizatonalScroller,
                  ref: a,
                  orientation: "horizontal",
                  children: (0, l.jsxs)("table", {
                      className: I.table,
                      children: [
                          (0, l.jsx)(Z, {
                              sortOrder: s,
                              onSortChange: x,
                          }),
                          (0, l.jsx)("tbody", {
                              children: o
                                  ? [, , , , ,].fill(0).map((e, t) => (0, l.jsx)(k, {}, "placeholder-".concat(t)))
                                  : 0 === d.length
                                    ? (0, l.jsx)("td", {
                                          colSpan: 3,
                                          children: (0, l.jsx)(A, { status: n }),
                                      })
                                    : d.map((e) =>
                                          (0, l.jsx)(
                                              D,
                                              {
                                                  joinRequest: e,
                                                  onSelect: () => j.Z.setSelectedGuildJoinRequest(t, e),
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
