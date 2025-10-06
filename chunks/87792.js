n.d(t, {
    I: () => Z,
    Z: () => H,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
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
    E = n(652262),
    b = n(780985),
    y = n(880257),
    O = n(631885),
    v = n(240351),
    I = n(792258),
    T = n(657825),
    S = n(198952),
    A = n(329242),
    C = n(895328),
    N = n(448524),
    R = n(292352),
    P = n(981631),
    w = n(345909),
    D = n(388032),
    L = n(37742),
    x = n(519279);
function M(e, t, n) {
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
function j(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
let k = 65;
function U() {
    let e = i.useCallback(() => {
        (0, l.ZDy)(async () => {
            let { default: e } = await n.e("66462").then(n.bind(n, 756226));
            return (t) => (0, r.jsx)(e, j({}, t));
        });
    }, []);
    return (0, r.jsx)(l.P3F, {
        className: L.tooltip,
        onClick: e,
        children: (0, r.jsx)(l.d3s, {
            size: "custom",
            color: "currentColor",
            className: L.icon,
            width: 15,
            height: 15,
        }),
    });
}
function G(e) {
    let { displayType: t } = e,
        n = (0, _.PO)("family_center_activity_card"),
        a = i.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(D.intl.string(w.default.Wu8BKy), l.ToastType.FAILURE));
        }, []),
        s = (0, y.Z)(),
        c = (0, g.ws)(t),
        d = (0, g.C7)(t),
        h = (0, g.A)(t),
        { loadMore: E, isMoreLoading: b } = (0, m.G)({ onError: a }),
        O = (0, f.E2)(n).get(t),
        [v, S] = i.useState(R.iB),
        A = (0, p.Xi)({ location: "family_center_activity_section_web" }),
        C = i.useCallback(() => {
            S((e) => e + R.iB), E(t);
        }, [t, E]);
    o()(O, "No text for action type: ".concat(t));
    let N = t === R.MY.PURCHASES && null != h ? O.sectionHeader(h) : O.sectionHeader(d),
        P = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = c[t];
                if ((0, f.iB)(n)) {
                    let e = u.default.extractTimestamp(n.event_id),
                        t = (0, f.LI)(e, O.timestampFormatter);
                    return (0, r.jsx)(
                        T.Z,
                        {
                            userId: n.entity_id,
                            subText: t,
                        },
                        n.event_id,
                    );
                }
                if ((0, f.f0)(n)) return (0, r.jsx)(I.Z, { guildId: n.entity_id }, n.event_id);
            },
            [c, O.timestampFormatter],
        ),
        x = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Text, {
                            className: L.sectionHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: N,
                        }),
                        void 0 !== O.sectionDescription
                            ? (0, r.jsx)(l.Text, {
                                  className: L.sectionDescription,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: O.sectionDescription(null != s && s, A),
                              })
                            : null,
                    ],
                }),
            [N, O, s, A],
        );
    if (0 === c.length) return null;
    let M = c.slice(0, v);
    return (0, r.jsxs)("div", {
        className: L.actionSection,
        children: [
            x(),
            (0, r.jsx)("div", {
                className: L.actions,
                style: { maxHeight: M.length * k },
                children: M.map((e, t) => P({ row: t })),
            }),
            M.length !== d
                ? (0, r.jsx)(l.P3F, {
                      className: L.loadMoreBar,
                      onClick: C,
                      role: "button",
                      children: b
                          ? (0, r.jsx)(l.$jN, {
                                type: l.$jN.Type.PULSING_ELLIPSIS,
                                className: L.spinner,
                            })
                          : (0, r.jsx)(l.Text, {
                                className: L.loadMore,
                                variant: "text-sm/bold",
                                children: D.intl.format(w.default["7dMmJS"], {
                                    pageSize: Math.min(d - M.length, R.iB),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let B = () => {
        let e = (0, y.Z)(),
            t = (0, O.ZM)(),
            n = (0, h.o)(
                D.intl.formatToPlainString(w.default["7hqFl5"], { activeLinks: t.length }),
                D.intl.string(w.default["Q/D/0d"]),
            ),
            i = (0, f.Qr)(!!e),
            a = (0, O.Rd)(i);
        return e && t.length > 1
            ? (0, r.jsx)(l.Text, {
                  variant: "eyebrow",
                  children: a,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      e
                          ? null
                          : (0, r.jsx)(l.tEF, {
                                size: "xs",
                                color: "currentColor",
                                className: L.icon,
                            }),
                      (0, r.jsx)(l.Text, {
                          variant: "eyebrow",
                          children: n,
                      }),
                  ],
              });
    },
    Z = (e) => {
        let { userId: t, subText: n, avatarSize: i = l.EFr.SIZE_40, hideUserTag: a = !1 } = e,
            o = (0, b.In)(t);
        return void 0 === o
            ? null
            : (0, r.jsxs)("div", {
                  className: L.accountRow,
                  children: [
                      (0, r.jsx)(S.r, {
                          user: o,
                          avatarSize: i,
                      }),
                      (0, r.jsxs)("div", {
                          className: L.headerText,
                          children: [
                              (0, r.jsx)(A.Z, {
                                  user: o,
                                  hideUserTag: a,
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
    F = () => {
        let e = (0, O.zu)(),
            t = (0, s.e7)([d.Z], () => d.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, m.G)({}),
            a = (e) => {
                n(e), c.default.track(P.rMx.FAMILY_CENTER_ACTION, { action: R.YC.SelectTeen });
            },
            o = e.map((e) => ({
                label: e.id,
                value: e.id,
            })),
            u = i.useCallback(
                (e) =>
                    (0, r.jsx)(Z, {
                        userId: e.value,
                        avatarSize: l.EFr.SIZE_24,
                    }),
                [],
            );
        return (0, r.jsx)(l.PhF, {
            className: L.select,
            renderOptionLabel: u,
            renderOptionValue: (e) => {
                let [t] = e;
                return u(t);
            },
            serialize: (e) => e,
            select: a,
            isSelected: (e) => e === t,
            options: o,
        });
    },
    V = () => {
        let e = (0, E.M)(),
            t = (0, y.Z)(),
            n = (0, O.ZM)(),
            i = (0, f.Qr)(!!t),
            a = (0, O.Rd)(i);
        return null === e
            ? null
            : t && 1 !== n.length
              ? (0, r.jsx)(F, {})
              : (0, r.jsx)(Z, {
                    userId: e,
                    subText: a,
                });
    },
    H = () => {
        let e = (0, _.PO)("family_center_activity_card"),
            t = (0, f._p)(e),
            n = (0, g.kE)(),
            i = (0, f.t3)(),
            a = (0, O.Rd)(i);
        return (0, r.jsxs)("div", {
            className: e ? L.containerV2 : L.container,
            children: [
                (0, r.jsxs)("div", {
                    className: L.connectedCounter,
                    children: [(0, r.jsx)(B, {}), (0, r.jsx)(U, {})],
                }),
                (0, r.jsxs)("div", {
                    className: x.box,
                    children: [
                        (0, r.jsx)("div", {
                            className: L.header,
                            children: (0, r.jsx)(V, {}),
                        }),
                        (0, r.jsxs)("div", {
                            className: L.content,
                            children: [
                                (0, r.jsx)("div", {
                                    className: e ? L.activityCounterRowV2 : L.activityCounterRow,
                                    children: t.map((e) => {
                                        let [t, n] = e;
                                        return (0, r.jsx)(
                                            v.Z,
                                            {
                                                displayType: t,
                                                header: n.tooltipHeader(),
                                            },
                                            "counter-".concat(t),
                                        );
                                    }),
                                }),
                                e ? (0, r.jsx)(N.Z, {}) : null,
                                (0, r.jsx)("div", {
                                    className: L.activityOverview,
                                    children: n
                                        ? t.map((e) => {
                                              let [t] = e;
                                              return (0, r.jsx)(G, { displayType: t }, "".concat(t, "-list"));
                                          })
                                        : (0, r.jsx)(C.Z, {
                                              className: L.emptyActivity,
                                              text: null != a ? a : "",
                                          }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
