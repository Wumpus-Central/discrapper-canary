n.d(t, {
    I: () => F,
    Z: () => Y,
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
    T = n(381190),
    S = n(657825),
    A = n(198952),
    C = n(329242),
    N = n(895328),
    R = n(448524),
    P = n(292352),
    w = n(981631),
    D = n(345909),
    L = n(388032),
    x = n(37742),
    M = n(519279);
function j(e, t, n) {
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
function k(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
let U = 65;
function G() {
    let e = i.useCallback(() => {
        (0, l.ZDy)(async () => {
            let { default: e } = await n.e("66462").then(n.bind(n, 756226));
            return (t) => (0, r.jsx)(e, k({}, t));
        });
    }, []);
    return (0, r.jsx)(l.P3F, {
        className: x.tooltip,
        onClick: e,
        children: (0, r.jsx)(l.d3s, {
            size: "custom",
            color: "currentColor",
            className: x.icon,
            width: 15,
            height: 15,
        }),
    });
}
function B(e) {
    let { displayType: t } = e,
        n = (0, _.PO)("family_center_activity_card"),
        a = i.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(L.intl.string(D.default.Wu8BKy), l.ToastType.FAILURE));
        }, []),
        s = (0, y.Z)(),
        c = (0, g.ws)(t),
        h = (0, g.C7)(t),
        E = (0, g.A)(t),
        { loadMore: b, isMoreLoading: O } = (0, m.G)({ onError: a }),
        v = (0, f.E2)(n).get(t),
        [A, C] = i.useState(P.iB),
        N = (0, p.Xi)({ location: "family_center_activity_section_web" }),
        R = i.useCallback(() => {
            C((e) => e + P.iB), b(t);
        }, [t, b]);
    o()(v, "No text for action type: ".concat(t));
    let w = t === P.MY.PURCHASES && null != E ? v.sectionHeader(E) : v.sectionHeader(h),
        M = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = c[t];
                if ((0, f.iB)(n)) {
                    let e = u.default.extractTimestamp(n.event_id),
                        t = (0, f.LI)(e, v.timestampFormatter);
                    return (0, r.jsx)(
                        S.Z,
                        {
                            userId: n.entity_id,
                            subText: t,
                        },
                        n.event_id,
                    );
                }
                if ((0, f.f0)(n)) return (0, r.jsx)(I.Z, { guildId: n.entity_id }, n.event_id);
                if ((0, f.m4)(n)) {
                    let e = d.Z.getPurchaseInfo(n.entity_id);
                    return null == e
                        ? null
                        : (0, r.jsx)(
                              T.Z,
                              {
                                  skuId: e.sku_id,
                                  subscriptionPlanId: e.subscription_plan_id,
                                  total: e.total,
                                  currency: e.currency,
                              },
                              n.event_id,
                          );
                }
                return null;
            },
            [c, v.timestampFormatter],
        ),
        j = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Text, {
                            className: x.sectionHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: w,
                        }),
                        void 0 !== v.sectionDescription
                            ? (0, r.jsx)(l.Text, {
                                  className: x.sectionDescription,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: v.sectionDescription(null != s && s, N),
                              })
                            : null,
                    ],
                }),
            [w, v, s, N],
        );
    if (0 === c.length) return null;
    let k = c.slice(0, A);
    return (0, r.jsxs)("div", {
        className: x.actionSection,
        children: [
            j(),
            (0, r.jsx)("div", {
                className: x.actions,
                style: { maxHeight: k.length * U },
                children: k.map((e, t) => M({ row: t })),
            }),
            k.length !== h
                ? (0, r.jsx)(l.P3F, {
                      className: x.loadMoreBar,
                      onClick: R,
                      role: "button",
                      children: O
                          ? (0, r.jsx)(l.$jN, {
                                type: l.$jN.Type.PULSING_ELLIPSIS,
                                className: x.spinner,
                            })
                          : (0, r.jsx)(l.Text, {
                                className: x.loadMore,
                                variant: "text-sm/bold",
                                children: L.intl.format(D.default["7dMmJS"], {
                                    pageSize: Math.min(h - k.length, P.iB),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let Z = () => {
        let e = (0, y.Z)(),
            t = (0, O.ZM)(),
            n = (0, h.o)(
                L.intl.formatToPlainString(D.default["7hqFl5"], { activeLinks: t.length }),
                L.intl.string(D.default["Q/D/0d"]),
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
                                className: x.icon,
                            }),
                      (0, r.jsx)(l.Text, {
                          variant: "eyebrow",
                          children: n,
                      }),
                  ],
              });
    },
    F = (e) => {
        let { userId: t, subText: n, avatarSize: i = l.EFr.SIZE_40, hideUserTag: a = !1 } = e,
            o = (0, b.In)(t);
        return void 0 === o
            ? null
            : (0, r.jsxs)("div", {
                  className: x.accountRow,
                  children: [
                      (0, r.jsx)(A.r, {
                          user: o,
                          avatarSize: i,
                      }),
                      (0, r.jsxs)("div", {
                          className: x.headerText,
                          children: [
                              (0, r.jsx)(C.Z, {
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
    V = () => {
        let e = (0, O.zu)(),
            t = (0, s.e7)([d.Z], () => d.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, m.G)({}),
            a = (e) => {
                n(e), c.default.track(w.rMx.FAMILY_CENTER_ACTION, { action: P.YC.SelectTeen });
            },
            o = e.map((e) => ({
                label: e.id,
                value: e.id,
            })),
            u = i.useCallback(
                (e) =>
                    (0, r.jsx)(F, {
                        userId: e.value,
                        avatarSize: l.EFr.SIZE_24,
                    }),
                [],
            );
        return (0, r.jsx)(l.PhF, {
            className: x.select,
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
    H = () => {
        let e = (0, E.M)(),
            t = (0, y.Z)(),
            n = (0, O.ZM)(),
            i = (0, f.Qr)(!!t),
            a = (0, O.Rd)(i);
        return null === e
            ? null
            : t && 1 !== n.length
              ? (0, r.jsx)(V, {})
              : (0, r.jsx)(F, {
                    userId: e,
                    subText: a,
                });
    },
    Y = () => {
        let e = (0, _.PO)("family_center_activity_card"),
            t = (0, f._p)(e),
            n = (0, g.kE)(),
            i = (0, f.t3)(),
            a = (0, O.Rd)(i);
        return (0, r.jsxs)("div", {
            className: e ? x.containerV2 : x.container,
            children: [
                (0, r.jsxs)("div", {
                    className: x.connectedCounter,
                    children: [(0, r.jsx)(Z, {}), (0, r.jsx)(G, {})],
                }),
                (0, r.jsxs)("div", {
                    className: M.box,
                    children: [
                        (0, r.jsx)("div", {
                            className: x.header,
                            children: (0, r.jsx)(H, {}),
                        }),
                        (0, r.jsxs)("div", {
                            className: x.content,
                            children: [
                                (0, r.jsx)("div", {
                                    className: e ? x.activityCounterRowV2 : x.activityCounterRow,
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
                                e ? (0, r.jsx)(R.Z, {}) : null,
                                (0, r.jsx)("div", {
                                    className: x.activityOverview,
                                    children: n
                                        ? t.map((e) => {
                                              let [t] = e;
                                              return (0, r.jsx)(B, { displayType: t }, "".concat(t, "-list"));
                                          })
                                        : (0, r.jsx)(N.Z, {
                                              className: x.emptyActivity,
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
