n.d(t, {
    I: () => V,
    Z: () => W,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(399606),
    u = n(481060),
    d = n(626135),
    f = n(709054),
    p = n(914788),
    _ = n(546791),
    m = n(277537),
    h = n(785681),
    g = n(985002),
    E = n(858719),
    b = n(652262),
    y = n(780985),
    O = n(880257),
    v = n(631885),
    S = n(240351),
    I = n(792258),
    T = n(381190),
    A = n(657825),
    C = n(198952),
    N = n(329242),
    P = n(895328),
    R = n(448524),
    w = n(292352),
    D = n(981631),
    x = n(744038),
    L = n(388032),
    j = n(37742),
    M = n(519279);
function k(e, t, n) {
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
function U(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
let G = 65;
function Z() {
    let e = i.useCallback(() => {
        (0, u.ZDy)(async () => {
            let { default: e } = await n.e("66462").then(n.bind(n, 756226));
            return (t) => (0, r.jsx)(e, U({}, t));
        });
    }, []);
    return (0, r.jsx)(u.P3F, {
        className: j.tooltip,
        onClick: e,
        children: (0, r.jsx)(u.d3s, {
            size: "custom",
            color: "currentColor",
            className: j.icon,
            width: 15,
            height: 15,
        }),
    });
}
function B(e) {
    let { displayType: t } = e,
        n = (0, m.PO)("family_center_activity_card"),
        a = i.useCallback(() => {
            (0, u.showToast)((0, u.createToast)(L.intl.string(x.default.Wu8BK2), u.ToastType.FAILURE));
        }, []),
        s = (0, O.Z)(),
        c = (0, E.ws)(t),
        d = (0, E.C7)(t),
        h = (0, E.A)(t),
        { loadMore: b, isMoreLoading: y } = (0, g.G)({ onError: a }),
        v = (0, _.E2)(n).get(t),
        [S, C] = i.useState(w.iB),
        N = i.useCallback(() => {
            C((e) => e + w.iB), b(t);
        }, [t, b]);
    l()(v, "No text for action type: ".concat(t));
    let P = t === w.MY.PURCHASES && null != h ? v.sectionHeader(h) : v.sectionHeader(d),
        R = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = c[t];
                if ((0, _.iB)(n)) {
                    let e = f.default.extractTimestamp(n.event_id),
                        t = (0, _.LI)(e, v.timestampFormatter);
                    return (0, r.jsx)(
                        A.Z,
                        {
                            userId: n.entity_id,
                            subText: t,
                        },
                        n.event_id,
                    );
                }
                if ((0, _.f0)(n)) return (0, r.jsx)(I.Z, { guildId: n.entity_id }, n.event_id);
                if ((0, _.m4)(n)) {
                    let e = p.Z.getPurchaseInfo(n.entity_id);
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
        D = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: j.sectionHeader,
                            variant: "text-md/semibold",
                            children: P,
                        }),
                        void 0 !== v.sectionDescription
                            ? (0, r.jsx)(u.Text, {
                                  className: j.sectionDescription,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: v.sectionDescription(null != s && s),
                              })
                            : null,
                    ],
                }),
            [P, v, s],
        );
    if (0 === c.length) return null;
    let M = c.slice(0, S);
    return (0, r.jsxs)("div", {
        className: j.actionSection,
        children: [
            D(),
            (0, r.jsx)("div", {
                className: j.actions,
                style: { maxHeight: M.length * G },
                children: M.map((e, t) => R({ row: t })),
            }),
            M.length < d
                ? (0, r.jsx)(u.P3F, {
                      className: o()(j.loadMoreBar, { [j.disabled]: y }),
                      onClick: N,
                      role: "button",
                      "aria-disabled": y,
                      children: y
                          ? (0, r.jsx)(u.$jN, {
                                type: u.$jN.Type.PULSING_ELLIPSIS,
                                className: j.spinner,
                            })
                          : (0, r.jsx)(u.Text, {
                                className: j.loadMore,
                                variant: "text-sm/bold",
                                children: L.intl.format(x.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(d - M.length, w.iB)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let F = () => {
        let e = (0, O.Z)(),
            t = (0, v.ZM)(),
            n = (0, h.o)(
                L.intl.formatToPlainString(x.default["7hqFl9"], { activeLinks: t.length }),
                L.intl.string(x.default["Q/D/0Q"]),
            ),
            i = (0, _.Qr)(!!e),
            a = (0, v.Rd)(i);
        return e && t.length > 1
            ? (0, r.jsx)(u.Text, {
                  variant: "eyebrow",
                  children: a,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      e
                          ? null
                          : (0, r.jsx)(u.tEF, {
                                size: "xs",
                                color: "currentColor",
                                className: j.icon,
                            }),
                      (0, r.jsx)(u.Text, {
                          variant: "eyebrow",
                          children: n,
                      }),
                  ],
              });
    },
    V = i.memo((e) => {
        let { userId: t, subText: n, avatarSize: i = u.EFr.SIZE_40, hideUserTag: a = !1 } = e,
            o = (0, y.In)(t);
        return void 0 === o
            ? null
            : (0, r.jsxs)("div", {
                  className: j.accountRow,
                  children: [
                      (0, r.jsx)(C.r, {
                          user: o,
                          avatarSize: i,
                      }),
                      (0, r.jsxs)("div", {
                          className: j.headerText,
                          children: [
                              (0, r.jsx)(N.Z, {
                                  user: o,
                                  hideUserTag: a,
                              }),
                              void 0 !== n
                                  ? (0, r.jsx)(u.Text, {
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
V.displayName = "FamilyCenterActivityCardAccountRow";
let H = () => {
        let e = (0, v.zu)(),
            t = (0, c.e7)([p.Z], () => p.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, g.G)({}),
            a = (e) => {
                n(e), d.default.track(D.rMx.FAMILY_CENTER_ACTION, { action: w.YC.SelectTeen });
            },
            o = e.map((e) => ({
                label: e.id,
                value: e.id,
            })),
            s = i.useCallback(
                (e) =>
                    (0, r.jsx)(V, {
                        userId: e.value,
                        avatarSize: u.EFr.SIZE_24,
                    }),
                [],
            );
        return (0, r.jsx)(u.PhF, {
            className: j.select,
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
    Y = () => {
        let e = (0, b.M)(),
            t = (0, O.Z)(),
            n = (0, v.ZM)(),
            i = (0, _.Qr)(!!t),
            a = (0, v.Rd)(i);
        return null === e
            ? null
            : t && 1 !== n.length
              ? (0, r.jsx)(H, {})
              : (0, r.jsx)(V, {
                    userId: e,
                    subText: a,
                });
    },
    W = () => {
        let e = (0, m.PO)("family_center_activity_card"),
            t = (0, _._p)(e),
            n = (0, E.kE)(),
            i = (0, _.t3)(),
            a = (0, v.Rd)(i);
        return (0, r.jsxs)("div", {
            className: e ? j.containerV2 : j.container,
            children: [
                (0, r.jsxs)("div", {
                    className: j.connectedCounter,
                    children: [(0, r.jsx)(F, {}), (0, r.jsx)(Z, {})],
                }),
                (0, r.jsxs)("div", {
                    className: M.box,
                    children: [
                        (0, r.jsx)("div", {
                            className: j.header,
                            children: (0, r.jsx)(Y, {}),
                        }),
                        (0, r.jsxs)(u.Kqy, {
                            gap: 32,
                            padding: 32,
                            fullWidth: !1,
                            children: [
                                (0, r.jsx)("div", {
                                    className: e ? j.activityCounterRowV2 : j.activityCounterRow,
                                    children: t.map((e) => {
                                        let [t, n] = e;
                                        return (0, r.jsx)(
                                            S.Z,
                                            {
                                                displayType: t,
                                                header: n.tooltipHeader(),
                                            },
                                            "counter-".concat(t),
                                        );
                                    }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: j.activityOverview,
                                    children: [
                                        e ? (0, r.jsx)(R.Z, {}) : null,
                                        n
                                            ? t.map((e) => {
                                                  let [t] = e;
                                                  return (0, r.jsx)(B, { displayType: t }, "".concat(t, "-list"));
                                              })
                                            : (0, r.jsx)(P.Z, {
                                                  className: j.emptyActivity,
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
