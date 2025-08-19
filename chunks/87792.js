n.d(t, { Z: () => M }), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(512722),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(626135),
    d = n(709054),
    u = n(914788),
    m = n(546791),
    p = n(277537),
    g = n(259756),
    h = n(785681),
    f = n(985002),
    b = n(858719),
    x = n(780985),
    _ = n(880257),
    j = n(631885),
    E = n(240351),
    C = n(792258),
    O = n(657825),
    v = n(198952),
    S = n(329242),
    T = n(895328),
    N = n(292352),
    I = n(981631),
    y = n(345909),
    A = n(388032),
    P = n(37742),
    R = n(519279);
function D() {
    let e = r.useCallback(() => {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e("66462").then(n.bind(n, 756226));
            return (t) =>
                (0, i.jsx)(
                    e,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, t),
                );
        });
    }, []);
    return (0, i.jsx)(o.P3F, {
        className: P.tooltip,
        onClick: e,
        children: (0, i.jsx)(o.d3s, {
            size: "custom",
            color: "currentColor",
            className: P.icon,
            width: 15,
            height: 15,
        }),
    });
}
function Z(e) {
    let { displayType: t } = e,
        n = (0, p.PO)("family_center_activity_card"),
        s = r.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(A.intl.string(y.default.Wu8BKy), o.ToastType.FAILURE));
        }, []),
        l = (0, _.Z)(),
        c = (0, b.ws)(t),
        u = (0, b.C7)(t),
        { loadMore: h, isMoreLoading: x } = (0, f.G)({ onError: s }),
        j = (0, m.E2)(n).get(t),
        [E, v] = r.useState(N.iB),
        S = (0, g.Xi)({ location: "family_center_activity_section_web" }),
        T = r.useCallback(() => {
            v((e) => e + N.iB), h(t);
        }, [t, h]);
    a()(j, "No text for action type: ".concat(t));
    let I = j.sectionHeader(u),
        R = r.useCallback(
            (e) => {
                let { row: t } = e,
                    n = c[t];
                return (0, m.iB)(n)
                    ? (0, i.jsx)(
                          O.Z,
                          {
                              userId: n.entity_id,
                              timestamp: d.default.extractTimestamp(n.event_id),
                              timestampFormatter: j.timestampFormatter,
                          },
                          n.event_id,
                      )
                    : (0, m.f0)(n)
                      ? (0, i.jsx)(C.Z, { guildId: n.entity_id }, n.event_id)
                      : void 0;
            },
            [c, j.timestampFormatter],
        ),
        D = r.useCallback(
            () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Text, {
                            className: P.sectionHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: I,
                        }),
                        void 0 !== j.sectionDescription
                            ? (0, i.jsx)(o.Text, {
                                  className: P.sectionDescription,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: j.sectionDescription(null != l && l, S),
                              })
                            : null,
                    ],
                }),
            [I, j, l, S],
        );
    if (0 === c.length) return null;
    let Z = c.slice(0, E);
    return (0, i.jsxs)("div", {
        className: P.actionSection,
        children: [
            D(),
            (0, i.jsx)("div", {
                className: P.actions,
                style: { maxHeight: 65 * Z.length },
                children: Z.map((e, t) => R({ row: t })),
            }),
            Z.length !== u
                ? (0, i.jsx)(o.P3F, {
                      className: P.loadMoreBar,
                      onClick: T,
                      role: "button",
                      children: x
                          ? (0, i.jsx)(o.$jN, {
                                type: o.$jN.Type.PULSING_ELLIPSIS,
                                className: P.spinner,
                            })
                          : (0, i.jsx)(o.Text, {
                                className: P.loadMore,
                                variant: "text-sm/bold",
                                children: A.intl.format(y.default["7dMmJS"], {
                                    pageSize: Math.min(u - Z.length, N.iB),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let w = () => {
        let e = (0, _.Z)(),
            t = (0, j.mq)(N.ne.ACTIVE),
            n = (0, h.o)(
                A.intl.formatToPlainString(y.default["7hqFl5"], { activeLinks: t.length }),
                A.intl.string(y.default["Q/D/0d"]),
            ),
            r = (0, m.Qr)(!!e),
            s = (0, j.Rd)(r);
        return e && t.length > 1
            ? (0, i.jsx)(o.Text, {
                  variant: "eyebrow",
                  children: s,
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      e
                          ? null
                          : (0, i.jsx)(o.tEF, {
                                size: "xs",
                                color: "currentColor",
                                className: P.icon,
                            }),
                      (0, i.jsx)(o.Text, {
                          variant: "eyebrow",
                          children: n,
                      }),
                  ],
              });
    },
    k = (e) => {
        let { userId: t, subText: n, avatarSize: r = o.EFr.SIZE_40 } = e,
            s = (0, x.I)(t);
        return void 0 === s
            ? null
            : (0, i.jsxs)("div", {
                  className: P.accountRow,
                  children: [
                      (0, i.jsx)(v.r, {
                          user: s,
                          avatarSize: r,
                      }),
                      (0, i.jsxs)("div", {
                          className: P.headerText,
                          children: [
                              (0, i.jsx)(S.Z, { user: s }),
                              void 0 !== n
                                  ? (0, i.jsx)(o.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: n,
                                    })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    L = () => {
        let e = (0, j.mq)(N.ne.ACTIVE),
            t = (0, l.e7)([u.Z], () => u.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, f.G)({}),
            s = e.map((e) => ({
                label: e.id,
                value: e.id,
            })),
            a = r.useCallback(
                (e) =>
                    (0, i.jsx)(k, {
                        userId: e.value,
                        avatarSize: o.EFr.SIZE_24,
                    }),
                [],
            );
        return (0, i.jsx)(o.PhF, {
            className: P.select,
            renderOptionLabel: a,
            renderOptionValue: (e) => {
                let [t] = e;
                return a(t);
            },
            serialize: (e) => e,
            select: (e) => {
                n(e), c.default.track(I.rMx.FAMILY_CENTER_ACTION, { action: N.YC.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: s,
        });
    },
    B = (e) => {
        let { userId: t } = e,
            n = (0, _.Z)(),
            r = (0, j.mq)(N.ne.ACTIVE),
            s = (0, m.Qr)(!!n),
            a = (0, j.Rd)(s);
        return n && 1 !== r.length
            ? (0, i.jsx)(L, {})
            : (0, i.jsx)(k, {
                  userId: t,
                  subText: a,
              });
    },
    M = (e) => {
        let { user: t } = e,
            n = (0, p.PO)("family_center_activity_card"),
            r = (0, m._p)(n),
            s = (0, b.kE)(),
            a = (0, m.t3)(),
            l = (0, j.Rd)(a);
        return (0, i.jsxs)("div", {
            className: n ? P.containerV2 : P.container,
            children: [
                (0, i.jsxs)("div", {
                    className: P.connectedCounter,
                    children: [(0, i.jsx)(w, {}), (0, i.jsx)(D, {})],
                }),
                (0, i.jsxs)("div", {
                    className: R.box,
                    children: [
                        (0, i.jsx)("div", {
                            className: P.header,
                            children: (0, i.jsx)(B, { userId: t.id }),
                        }),
                        (0, i.jsxs)("div", {
                            className: P.content,
                            children: [
                                (0, i.jsx)("div", {
                                    className: n ? P.activityCounterRowV2 : P.activityCounterRow,
                                    children: r.map((e) => {
                                        let [t, n] = e;
                                        return (0, i.jsx)(
                                            E.Z,
                                            {
                                                displayType: t,
                                                header: n.tooltipHeader(),
                                            },
                                            "counter-".concat(t),
                                        );
                                    }),
                                }),
                                (0, i.jsx)("div", {
                                    className: P.activityOverview,
                                    children: s
                                        ? r.map((e) => {
                                              let [t] = e;
                                              return (0, i.jsx)(Z, { displayType: t }, "".concat(t, "-list"));
                                          })
                                        : (0, i.jsx)(T.Z, {
                                              className: P.emptyActivity,
                                              text: null != l ? l : "",
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
