n.d(t, {
    I: () => H,
    Z: () => K,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(399606),
    u = n(481060),
    d = n(626135),
    f = n(709054),
    _ = n(914788),
    p = n(546791),
    h = n(277537),
    m = n(259756),
    g = n(785681),
    E = n(985002),
    b = n(858719),
    y = n(652262),
    O = n(780985),
    v = n(880257),
    I = n(631885),
    T = n(240351),
    S = n(792258),
    A = n(381190),
    C = n(657825),
    N = n(198952),
    R = n(329242),
    P = n(895328),
    w = n(448524),
    D = n(292352),
    L = n(981631),
    x = n(345909),
    M = n(388032),
    j = n(37742),
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
let B = 65;
function Z() {
    let e = i.useCallback(() => {
        (0, u.ZDy)(async () => {
            let { default: e } = await n.e("66462").then(n.bind(n, 756226));
            return (t) => (0, r.jsx)(e, G({}, t));
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
function F(e) {
    let { displayType: t } = e,
        n = (0, h.PO)("family_center_activity_card"),
        a = i.useCallback(() => {
            (0, u.showToast)((0, u.createToast)(M.intl.string(x.default.Wu8BKy), u.ToastType.FAILURE));
        }, []),
        s = (0, v.Z)(),
        c = (0, b.ws)(t),
        d = (0, b.C7)(t),
        g = (0, b.A)(t),
        { loadMore: y, isMoreLoading: O } = (0, E.G)({ onError: a }),
        I = (0, p.E2)(n).get(t),
        [T, N] = i.useState(D.iB),
        R = (0, m.Xi)({ location: "family_center_activity_section_web" }),
        P = i.useCallback(() => {
            N((e) => e + D.iB), y(t);
        }, [t, y]);
    l()(I, "No text for action type: ".concat(t));
    let w = t === D.MY.PURCHASES && null != g ? I.sectionHeader(g) : I.sectionHeader(d),
        L = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = c[t];
                if ((0, p.iB)(n)) {
                    let e = f.default.extractTimestamp(n.event_id),
                        t = (0, p.LI)(e, I.timestampFormatter);
                    return (0, r.jsx)(
                        C.Z,
                        {
                            userId: n.entity_id,
                            subText: t,
                        },
                        n.event_id,
                    );
                }
                if ((0, p.f0)(n)) return (0, r.jsx)(S.Z, { guildId: n.entity_id }, n.event_id);
                if ((0, p.m4)(n)) {
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
            [c, I.timestampFormatter],
        ),
        k = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: j.sectionHeader,
                            variant: "text-md/semibold",
                            children: w,
                        }),
                        void 0 !== I.sectionDescription
                            ? (0, r.jsx)(u.Text, {
                                  className: j.sectionDescription,
                                  variant: "text-md/medium",
                                  color: "text-tertiary",
                                  children: I.sectionDescription(null != s && s, R),
                              })
                            : null,
                    ],
                }),
            [w, I, s, R],
        );
    if (0 === c.length) return null;
    let U = c.slice(0, T);
    return (0, r.jsxs)("div", {
        className: j.actionSection,
        children: [
            k(),
            (0, r.jsx)("div", {
                className: j.actions,
                style: { maxHeight: U.length * B },
                children: U.map((e, t) => L({ row: t })),
            }),
            U.length < d
                ? (0, r.jsx)(u.P3F, {
                      className: o()(j.loadMoreBar, { [j.disabled]: O }),
                      onClick: P,
                      role: "button",
                      "aria-disabled": O,
                      children: O
                          ? (0, r.jsx)(u.$jN, {
                                type: u.$jN.Type.PULSING_ELLIPSIS,
                                className: j.spinner,
                            })
                          : (0, r.jsx)(u.Text, {
                                className: j.loadMore,
                                variant: "text-sm/bold",
                                children: M.intl.format(x.default["7dMmJS"], {
                                    pageSize: Math.max(1, Math.min(d - U.length, D.iB)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let V = () => {
        let e = (0, v.Z)(),
            t = (0, I.ZM)(),
            n = (0, g.o)(
                M.intl.formatToPlainString(x.default["7hqFl5"], { activeLinks: t.length }),
                M.intl.string(x.default["Q/D/0d"]),
            ),
            i = (0, p.Qr)(!!e),
            a = (0, I.Rd)(i);
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
    H = i.memo((e) => {
        let { userId: t, subText: n, avatarSize: i = u.EFr.SIZE_40, hideUserTag: a = !1 } = e,
            o = (0, O.In)(t);
        return void 0 === o
            ? null
            : (0, r.jsxs)("div", {
                  className: j.accountRow,
                  children: [
                      (0, r.jsx)(N.r, {
                          user: o,
                          avatarSize: i,
                      }),
                      (0, r.jsxs)("div", {
                          className: j.headerText,
                          children: [
                              (0, r.jsx)(R.Z, {
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
H.displayName = "FamilyCenterActivityCardAccountRow";
let Y = () => {
        let e = (0, I.zu)(),
            t = (0, c.e7)([_.Z], () => _.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, E.G)({}),
            a = (e) => {
                n(e), d.default.track(L.rMx.FAMILY_CENTER_ACTION, { action: D.YC.SelectTeen });
            },
            o = e.map((e) => ({
                label: e.id,
                value: e.id,
            })),
            s = i.useCallback(
                (e) =>
                    (0, r.jsx)(H, {
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
    W = () => {
        let e = (0, y.M)(),
            t = (0, v.Z)(),
            n = (0, I.ZM)(),
            i = (0, p.Qr)(!!t),
            a = (0, I.Rd)(i);
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
            t = (0, p._p)(e),
            n = (0, b.kE)(),
            i = (0, p.t3)(),
            a = (0, I.Rd)(i);
        return (0, r.jsxs)("div", {
            className: e ? j.containerV2 : j.container,
            children: [
                (0, r.jsxs)("div", {
                    className: j.connectedCounter,
                    children: [(0, r.jsx)(V, {}), (0, r.jsx)(Z, {})],
                }),
                (0, r.jsxs)("div", {
                    className: k.box,
                    children: [
                        (0, r.jsx)("div", {
                            className: j.header,
                            children: (0, r.jsx)(W, {}),
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
                                            T.Z,
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
                                        e ? (0, r.jsx)(w.Z, {}) : null,
                                        n
                                            ? t.map((e) => {
                                                  let [t] = e;
                                                  return (0, r.jsx)(F, { displayType: t }, "".concat(t, "-list"));
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
