n.d(t, { Z: () => k });
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(28664),
    u = n(481060),
    m = n(239091),
    x = n(700582),
    j = n(906732),
    b = n(693546),
    h = n(826581),
    f = n(246364),
    g = n(98493),
    p = n(328977),
    v = n(412222),
    _ = n(223312),
    C = n(172751),
    E = n(768762),
    S = n(892001),
    T = n(598077),
    N = n(430824),
    P = n(51144),
    O = n(388032),
    I = n(106682),
    y = n(243194),
    R = n(494409),
    w = n(266631);
function A(e) {
    let t,
        n,
        { status: r } = e;
    switch (r) {
        case f.wB.REJECTED:
            (t = O.t["7YSJ6e"]), (n = O.t.i05OUV);
            break;
        case f.wB.APPROVED:
            (t = O.t.bv82GR), (n = O.t.D4OUHR);
            break;
        default:
            (t = O.t["/wqiSk"]), (n = O.t.o47YZm);
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
                children: O.intl.string(t),
            }),
            (0, l.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: O.intl.string(n),
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
                        color: "interactive-normal",
                        children: O.intl.string(O.t.Es7n9f),
                    }),
                }),
                (0, l.jsx)("th", {
                    className: a()(I.headerCell, w.mediumCol),
                    children: (0, l.jsxs)(u.P3F, {
                        className: I.sortItem,
                        onClick: n,
                        children: [
                            (0, l.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "interactive-normal",
                                children: O.intl.string(O.t.EZ5QWF),
                            }),
                            t === f.Nw.TIMESTAMP_ASC
                                ? (0, l.jsx)(E.Z, {
                                      className: I.sortIcon,
                                      direction: E.Z.Directions.UP,
                                  })
                                : (0, l.jsx)(E.Z, {
                                      className: I.sortIcon,
                                      direction: E.Z.Directions.DOWN,
                                  }),
                        ],
                    }),
                }),
                (0, l.jsx)("th", {
                    className: a()(I.headerCell, I.moreOptionsCol),
                    children: (0, l.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        children: O.intl.string(O.t["5Q9xGh"]),
                    }),
                }),
            ],
        }),
    });
}
let M = r.memo(function (e) {
        let { joinRequest: t, user: n } = e,
            { joinRequestId: i, guildId: a } = t,
            { analyticsLocations: s } = (0, j.ZP)(),
            o = r.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, S.openUserProfileModal)({
                            userId: n.id,
                            joinRequestId: i,
                            sourceAnalyticsLocations: s,
                        });
                },
                [n, i, s],
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
                                (0, l.jsx)(C.ZP, {
                                    primaryGuild: null == n ? void 0 : n.primaryGuild,
                                    userId: null == n ? void 0 : n.id,
                                    contextGuildId: a,
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
                        color: "header-secondary",
                        tag: "span",
                        children: (0, l.jsx)(u.P3F, {
                            onClick: o,
                            tag: "span",
                            children: P.ZP.getUserTag(n),
                        }),
                    }),
                }),
            ],
        });
    }),
    D = r.memo(function (e) {
        let { joinRequest: t, onSelect: i } = e,
            { guildId: s, createdAt: x, applicationStatus: j } = t,
            b = r.useMemo(() => new T.Z(t.user), [t.user]),
            h = (0, p.L)({ guildId: s }),
            g = (0, c.e7)([N.Z], () => N.Z.getGuild(s)),
            v = j === f.wB.SUBMITTED;
        return null == b
            ? null
            : (0, l.jsxs)("tr", {
                  onClick: i,
                  className: a()(w.roundedRow, w.memberRowContainer, {
                      [w.selected]: (null == h ? void 0 : h.joinRequestId) === t.joinRequestId,
                  }),
                  children: [
                      (0, l.jsx)("td", {
                          children: (0, l.jsx)(M, {
                              joinRequest: t,
                              user: b,
                          }),
                      }),
                      (0, l.jsx)("td", {
                          className: w.mediumCol,
                          children: (0, l.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              color: "header-secondary",
                              children: o()(x).format("lll"),
                          }),
                      }),
                      (0, l.jsx)("td", {
                          className: I.moreOptionsCol,
                          children:
                              v &&
                              (0, l.jsx)(d.u, {
                                  text: O.intl.string(O.t.x8Nn4O),
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
                                                                  user: b,
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
    G = () => {
        let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            t = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            n = "".concat(Math.floor(25 * Math.random()) + 50, "px");
        return (0, l.jsxs)("tr", {
            className: a()(w.roundedRow, w.memberRowContainer),
            children: [
                (0, l.jsx)("td", {
                    children: (0, l.jsxs)("div", {
                        className: w.memberNameContainer,
                        children: [
                            (0, l.jsx)("div", { className: a()(I.placeholderAvatar, w.memberAvatar) }),
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
function k(e) {
    let { guildId: t, currentTab: n } = e,
        i = r.useRef(null),
        a = (0, c.e7)([N.Z], () => N.Z.getGuild(t)),
        s = (0, v.C)({ guildId: t }),
        o = (0, c.e7)([h.Z], () => h.Z.isFetching()),
        { guildJoinRequests: d } = (0, _.j)({
            guildId: t,
            applicationStatus: n,
            sortOrder: s,
        }),
        { fetchNextPage: m } = (0, g.m)({
            guildId: t,
            guildJoinRequests: d,
        }),
        x = r.useCallback(async () => {
            let e = s === f.Nw.TIMESTAMP_ASC ? f.Nw.TIMESTAMP_DESC : f.Nw.TIMESTAMP_ASC;
            b.Z.setSelectedSortOrder(t, e), await m(e, n);
        }, [s, t, m, n]);
    return null == a
        ? null
        : (0, l.jsx)("div", {
              className: y.mainTableContainer,
              children: (0, l.jsx)(u.Den, {
                  className: y.horizatonalScroller,
                  ref: i,
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
                                  ? [, , , , ,].fill(0).map((e, t) => (0, l.jsx)(G, {}, "placeholder-".concat(t)))
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
                                                  onSelect: () => b.Z.setSelectedGuildJoinRequest(t, e),
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
