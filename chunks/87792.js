n.d(t, {
    I: () => H,
    Z: () => K,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(399606),
    u = n(199849),
    d = n(481060),
    f = n(626135),
    p = n(709054),
    _ = n(914788),
    m = n(546791),
    h = n(277537),
    g = n(785681),
    E = n(985002),
    b = n(858719),
    y = n(652262),
    O = n(780985),
    v = n(880257),
    S = n(631885),
    I = n(240351),
    T = n(792258),
    A = n(381190),
    C = n(657825),
    N = n(198952),
    P = n(329242),
    R = n(895328),
    w = n(448524),
    D = n(292352),
    x = n(981631),
    L = n(225753),
    j = n(388032),
    M = n(37742),
    k = n(519279);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
let Z = 65;
function B() {
    let e = i.useCallback(() => {
        (0, d.ZDy)(async () => {
            let { default: e } = await n.e("66462").then(n.bind(n, 756226));
            return (t) => (0, r.jsx)(e, G({}, t));
        });
    }, []);
    return (0, r.jsx)(d.P3F, {
        className: M.tooltip,
        onClick: e,
        children: (0, r.jsx)(d.d3s, {
            size: "custom",
            color: "currentColor",
            className: M.icon,
            width: 15,
            height: 15,
        }),
    });
}
function F(e) {
    let { displayType: t } = e,
        n = (0, h.PO)("family_center_activity_card"),
        a = i.useCallback(() => {
            (0, d.showToast)((0, d.createToast)(j.intl.string(L.default.Wu8BK2), d.ToastType.FAILURE));
        }, []),
        s = (0, v.Z)(),
        c = (0, b.ws)(t),
        u = (0, b.C7)(t),
        f = (0, b.A)(t),
        { loadMore: g, isMoreLoading: y } = (0, E.G)({ onError: a }),
        O = (0, m.E2)(n).get(t),
        [S, I] = i.useState(D.iB),
        N = i.useCallback(() => {
            I((e) => e + D.iB), g(t);
        }, [t, g]);
    l()(O, "No text for action type: ".concat(t));
    let P = t === D.MY.PURCHASES && null != f ? O.sectionHeader(f) : O.sectionHeader(u),
        R = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = c[t];
                if ((0, m.iB)(n)) {
                    let e = p.default.extractTimestamp(n.event_id),
                        t = (0, m.LI)(e, O.timestampFormatter);
                    return (0, r.jsx)(
                        C.Z,
                        {
                            userId: n.entity_id,
                            subText: t,
                        },
                        n.event_id,
                    );
                }
                if ((0, m.f0)(n)) return (0, r.jsx)(T.Z, { guildId: n.entity_id }, n.event_id);
                if ((0, m.m4)(n)) {
                    let e = _.Z.getPurchaseInfo(n.entity_id);
                    return null == e
                        ? null
                        : (0, r.jsx)(
                              A.Z,
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
            [c, O.timestampFormatter],
        ),
        w = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(d.Text, {
                            className: M.sectionHeader,
                            variant: "text-md/semibold",
                            children: P,
                        }),
                        void 0 !== O.sectionDescription
                            ? (0, r.jsx)(d.Text, {
                                  className: M.sectionDescription,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: O.sectionDescription(null != s && s),
                              })
                            : null,
                    ],
                }),
            [P, O, s],
        );
    if (0 === c.length) return null;
    let x = c.slice(0, S);
    return (0, r.jsxs)("div", {
        className: M.actionSection,
        children: [
            w(),
            (0, r.jsx)("div", {
                className: M.actions,
                style: { maxHeight: x.length * Z },
                children: x.map((e, t) => R({ row: t })),
            }),
            x.length < u
                ? (0, r.jsx)(d.P3F, {
                      className: o()(M.loadMoreBar, { [M.disabled]: y }),
                      onClick: N,
                      role: "button",
                      "aria-disabled": y,
                      children: y
                          ? (0, r.jsx)(d.$jN, {
                                type: d.$jN.Type.PULSING_ELLIPSIS,
                                className: M.spinner,
                            })
                          : (0, r.jsx)(d.Text, {
                                className: M.loadMore,
                                variant: "text-sm/bold",
                                children: j.intl.format(L.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(u - x.length, D.iB)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let V = () => {
        let e = (0, v.Z)(),
            t = (0, S.ZM)(),
            n = (0, g.o)(
                j.intl.formatToPlainString(L.default["7hqFl9"], { activeLinks: t.length }),
                j.intl.string(L.default["Q/D/0Q"]),
            ),
            i = (0, m.Qr)(!!e),
            a = (0, S.Rd)(i);
        return e && t.length > 1
            ? (0, r.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: a,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      e
                          ? null
                          : (0, r.jsx)(d.tEF, {
                                size: "xs",
                                color: "currentColor",
                                className: M.icon,
                            }),
                      (0, r.jsx)(d.Text, {
                          variant: "eyebrow",
                          children: n,
                      }),
                  ],
              });
    },
    H = i.memo((e) => {
        let { userId: t, subText: n, avatarSize: i = d.EFr.SIZE_40, hideUserTag: a = !1 } = e,
            o = (0, O.In)(t);
        return void 0 === o
            ? null
            : (0, r.jsxs)("div", {
                  className: M.accountRow,
                  children: [
                      (0, r.jsx)(N.r, {
                          user: o,
                          avatarSize: i,
                      }),
                      (0, r.jsxs)("div", {
                          className: M.headerText,
                          children: [
                              (0, r.jsx)(P.Z, {
                                  user: o,
                                  hideUserTag: a,
                              }),
                              void 0 !== n
                                  ? (0, r.jsx)(d.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: n,
                                    })
                                  : null,
                          ],
                      }),
                  ],
              });
    });
H.displayName = "FamilyCenterActivityCardAccountRow";
let Y = () => {
        let e = (0, S.zu)(),
            t = (0, c.e7)([_.Z], () => _.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, E.G)({}),
            a = (e) => {
                n(e), f.default.track(x.rMx.FAMILY_CENTER_ACTION, { action: D.YC.SelectTeen });
            },
            o = e.map((e) => ({
                label: e.id,
                value: e.id,
            })),
            s = i.useCallback(
                (e) =>
                    (0, r.jsx)(H, {
                        userId: e.value,
                        avatarSize: d.EFr.SIZE_24,
                    }),
                [],
            );
        return (0, r.jsx)(u.B6, {
            className: M.select,
            renderOptionLabel: s,
            renderOptionValue: (e) => {
                let [t] = e;
                return s(t);
            },
            serialize: (e) => e,
            select: a,
            isSelected: (e) => e === t,
            options: o,
        });
    },
    W = () => {
        let e = (0, y.M)(),
            t = (0, v.Z)(),
            n = (0, S.ZM)(),
            i = (0, m.Qr)(!!t),
            a = (0, S.Rd)(i);
        return null === e
            ? null
            : t && 1 !== n.length
              ? (0, r.jsx)(Y, {})
              : (0, r.jsx)(H, {
                    userId: e,
                    subText: a,
                });
    },
    K = () => {
        let e = (0, h.PO)("family_center_activity_card"),
            t = (0, m._p)(e),
            n = (0, b.kE)(),
            i = (0, m.t3)(),
            a = (0, S.Rd)(i);
        return (0, r.jsxs)("div", {
            className: e ? M.containerV2 : M.container,
            children: [
                (0, r.jsxs)("div", {
                    className: M.connectedCounter,
                    children: [(0, r.jsx)(V, {}), (0, r.jsx)(B, {})],
                }),
                (0, r.jsxs)("div", {
                    className: k.box,
                    children: [
                        (0, r.jsx)("div", {
                            className: M.header,
                            children: (0, r.jsx)(W, {}),
                        }),
                        (0, r.jsxs)(d.Kqy, {
                            gap: 32,
                            padding: 32,
                            fullWidth: !1,
                            children: [
                                (0, r.jsx)("div", {
                                    className: e ? M.activityCounterRowV2 : M.activityCounterRow,
                                    children: t.map((e) => {
                                        let [t, n] = e;
                                        return (0, r.jsx)(
                                            I.Z,
                                            {
                                                displayType: t,
                                                header: n.tooltipHeader(),
                                            },
                                            "counter-".concat(t),
                                        );
                                    }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: M.activityOverview,
                                    children: [
                                        e ? (0, r.jsx)(w.Z, {}) : null,
                                        n
                                            ? t.map((e) => {
                                                  let [t] = e;
                                                  return (0, r.jsx)(F, { displayType: t }, "".concat(t, "-list"));
                                              })
                                            : (0, r.jsx)(R.Z, {
                                                  className: M.emptyActivity,
                                                  text: null != a ? a : "",
                                              }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
