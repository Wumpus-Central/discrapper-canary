n.d(t, {
    I: () => G,
    Z: () => F,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    o = n(512722),
    a = n.n(o),
    s = n(399606),
    l = n(481060),
    c = n(626135),
    u = n(709054),
    d = n(914788),
    f = n(546791),
    _ = n(277537),
    p = n(259756),
    h = n(785681),
    m = n(985002),
    g = n(858719),
    E = n(780985),
    b = n(880257),
    y = n(631885),
    O = n(240351),
    v = n(792258),
    I = n(657825),
    T = n(198952),
    S = n(329242),
    A = n(895328),
    C = n(292352),
    N = n(981631),
    R = n(345909),
    P = n(388032),
    w = n(37742),
    D = n(519279);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
let j = 65;
function M() {
    let e = i.useCallback(() => {
        (0, l.ZDy)(async () => {
            let { default: e } = await n.e("66462").then(n.bind(n, 756226));
            return (t) => (0, r.jsx)(e, L({}, t));
        });
    }, []);
    return (0, r.jsx)(l.P3F, {
        className: w.tooltip,
        onClick: e,
        children: (0, r.jsx)(l.d3s, {
            size: "custom",
            color: "currentColor",
            className: w.icon,
            width: 15,
            height: 15,
        }),
    });
}
function k(e) {
    let { displayType: t } = e,
        n = (0, _.PO)("family_center_activity_card"),
        o = i.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(P.intl.string(R.default.Wu8BKy), l.ToastType.FAILURE));
        }, []),
        s = (0, b.Z)(),
        c = (0, g.ws)(t),
        d = (0, g.C7)(t),
        { loadMore: h, isMoreLoading: E } = (0, m.G)({ onError: o }),
        y = (0, f.E2)(n).get(t),
        [O, T] = i.useState(C.iB),
        S = (0, p.Xi)({ location: "family_center_activity_section_web" }),
        A = i.useCallback(() => {
            T((e) => e + C.iB), h(t);
        }, [t, h]);
    a()(y, "No text for action type: ".concat(t));
    let N = y.sectionHeader(d),
        D = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = c[t];
                return (0, f.iB)(n)
                    ? (0, r.jsx)(
                          I.Z,
                          {
                              userId: n.entity_id,
                              timestamp: u.default.extractTimestamp(n.event_id),
                              timestampFormatter: y.timestampFormatter,
                          },
                          n.event_id,
                      )
                    : (0, f.f0)(n)
                      ? (0, r.jsx)(v.Z, { guildId: n.entity_id }, n.event_id)
                      : void 0;
            },
            [c, y.timestampFormatter],
        ),
        x = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Text, {
                            className: w.sectionHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: N,
                        }),
                        void 0 !== y.sectionDescription
                            ? (0, r.jsx)(l.Text, {
                                  className: w.sectionDescription,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: y.sectionDescription(null != s && s, S),
                              })
                            : null,
                    ],
                }),
            [N, y, s, S],
        );
    if (0 === c.length) return null;
    let L = c.slice(0, O);
    return (0, r.jsxs)("div", {
        className: w.actionSection,
        children: [
            x(),
            (0, r.jsx)("div", {
                className: w.actions,
                style: { maxHeight: L.length * j },
                children: L.map((e, t) => D({ row: t })),
            }),
            L.length !== d
                ? (0, r.jsx)(l.P3F, {
                      className: w.loadMoreBar,
                      onClick: A,
                      role: "button",
                      children: E
                          ? (0, r.jsx)(l.$jN, {
                                type: l.$jN.Type.PULSING_ELLIPSIS,
                                className: w.spinner,
                            })
                          : (0, r.jsx)(l.Text, {
                                className: w.loadMore,
                                variant: "text-sm/bold",
                                children: P.intl.format(R.default["7dMmJS"], {
                                    pageSize: Math.min(d - L.length, C.iB),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let U = () => {
        let e = (0, b.Z)(),
            t = (0, y.mq)(C.ne.ACTIVE),
            n = (0, h.o)(
                P.intl.formatToPlainString(R.default["7hqFl5"], { activeLinks: t.length }),
                P.intl.string(R.default["Q/D/0d"]),
            ),
            i = (0, f.Qr)(!!e),
            o = (0, y.Rd)(i);
        return e && t.length > 1
            ? (0, r.jsx)(l.Text, {
                  variant: "eyebrow",
                  children: o,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      e
                          ? null
                          : (0, r.jsx)(l.tEF, {
                                size: "xs",
                                color: "currentColor",
                                className: w.icon,
                            }),
                      (0, r.jsx)(l.Text, {
                          variant: "eyebrow",
                          children: n,
                      }),
                  ],
              });
    },
    G = (e) => {
        let { userId: t, subText: n, avatarSize: i = l.EFr.SIZE_40, hideUserTag: o = !1 } = e,
            a = (0, E.In)(t);
        return void 0 === a
            ? null
            : (0, r.jsxs)("div", {
                  className: w.accountRow,
                  children: [
                      (0, r.jsx)(T.r, {
                          user: a,
                          avatarSize: i,
                      }),
                      (0, r.jsxs)("div", {
                          className: w.headerText,
                          children: [
                              (0, r.jsx)(S.Z, {
                                  user: a,
                                  hideUserTag: o,
                              }),
                              void 0 !== n
                                  ? (0, r.jsx)(l.Text, {
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
    B = () => {
        let e = (0, y.mq)(C.ne.ACTIVE),
            t = (0, s.e7)([d.Z], () => d.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, m.G)({}),
            o = (e) => {
                n(e), c.default.track(N.rMx.FAMILY_CENTER_ACTION, { action: C.YC.SelectTeen });
            },
            a = e.map((e) => ({
                label: e.id,
                value: e.id,
            })),
            u = i.useCallback(
                (e) =>
                    (0, r.jsx)(G, {
                        userId: e.value,
                        avatarSize: l.EFr.SIZE_24,
                    }),
                [],
            );
        return (0, r.jsx)(l.PhF, {
            className: w.select,
            renderOptionLabel: u,
            renderOptionValue: (e) => {
                let [t] = e;
                return u(t);
            },
            serialize: (e) => e,
            select: o,
            isSelected: (e) => e === t,
            options: a,
        });
    },
    Z = (e) => {
        let { userId: t } = e,
            n = (0, b.Z)(),
            i = (0, y.mq)(C.ne.ACTIVE),
            o = (0, f.Qr)(!!n),
            a = (0, y.Rd)(o);
        return n && 1 !== i.length
            ? (0, r.jsx)(B, {})
            : (0, r.jsx)(G, {
                  userId: t,
                  subText: a,
              });
    },
    F = (e) => {
        let { user: t } = e,
            n = (0, _.PO)("family_center_activity_card"),
            i = (0, f._p)(n),
            o = (0, g.kE)(),
            a = (0, f.t3)(),
            s = (0, y.Rd)(a);
        return (0, r.jsxs)("div", {
            className: n ? w.containerV2 : w.container,
            children: [
                (0, r.jsxs)("div", {
                    className: w.connectedCounter,
                    children: [(0, r.jsx)(U, {}), (0, r.jsx)(M, {})],
                }),
                (0, r.jsxs)("div", {
                    className: D.box,
                    children: [
                        (0, r.jsx)("div", {
                            className: w.header,
                            children: (0, r.jsx)(Z, { userId: t.id }),
                        }),
                        (0, r.jsxs)("div", {
                            className: w.content,
                            children: [
                                (0, r.jsx)("div", {
                                    className: n ? w.activityCounterRowV2 : w.activityCounterRow,
                                    children: i.map((e) => {
                                        let [t, n] = e;
                                        return (0, r.jsx)(
                                            O.Z,
                                            {
                                                displayType: t,
                                                header: n.tooltipHeader(),
                                            },
                                            "counter-".concat(t),
                                        );
                                    }),
                                }),
                                (0, r.jsx)("div", {
                                    className: w.activityOverview,
                                    children: o
                                        ? i.map((e) => {
                                              let [t] = e;
                                              return (0, r.jsx)(k, { displayType: t }, "".concat(t, "-list"));
                                          })
                                        : (0, r.jsx)(A.Z, {
                                              className: w.emptyActivity,
                                              text: null != s ? s : "",
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
