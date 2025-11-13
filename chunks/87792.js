n.d(t, {
    I: () => V,
    Z: () => W,
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
    m = n(785681),
    g = n(985002),
    E = n(858719),
    b = n(652262),
    y = n(780985),
    O = n(880257),
    v = n(631885),
    I = n(240351),
    T = n(792258),
    S = n(381190),
    A = n(657825),
    C = n(198952),
    N = n(329242),
    R = n(895328),
    P = n(448524),
    D = n(292352),
    w = n(981631),
    x = n(597754),
    L = n(388032),
    M = n(37742),
    j = n(519279);
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
function B() {
    let e = i.useCallback(() => {
        (0, u.ZDy)(async () => {
            let { default: e } = await n.e("66462").then(n.bind(n, 756226));
            return (t) => (0, r.jsx)(e, U({}, t));
        });
    }, []);
    return (0, r.jsx)(u.P3F, {
        className: M.tooltip,
        onClick: e,
        children: (0, r.jsx)(u.d3s, {
            size: "custom",
            color: "currentColor",
            className: M.icon,
            width: 15,
            height: 15,
        }),
    });
}
function Z(e) {
    let { displayType: t } = e,
        n = (0, h.PO)("family_center_activity_card"),
        a = i.useCallback(() => {
            (0, u.showToast)((0, u.createToast)(L.intl.string(x.default.Wu8BK2), u.ToastType.FAILURE));
        }, []),
        s = (0, O.Z)(),
        c = (0, E.ws)(t),
        d = (0, E.C7)(t),
        m = (0, E.A)(t),
        { loadMore: b, isMoreLoading: y } = (0, g.G)({ onError: a }),
        v = (0, p.E2)(n).get(t),
        [I, C] = i.useState(D.iB),
        N = i.useCallback(() => {
            C((e) => e + D.iB), b(t);
        }, [t, b]);
    l()(v, "No text for action type: ".concat(t));
    let R = t === D.MY.PURCHASES && null != m ? v.sectionHeader(m) : v.sectionHeader(d),
        P = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = c[t];
                if ((0, p.iB)(n)) {
                    let e = f.default.extractTimestamp(n.event_id),
                        t = (0, p.LI)(e, v.timestampFormatter);
                    return (0, r.jsx)(
                        A.Z,
                        {
                            userId: n.entity_id,
                            subText: t,
                        },
                        n.event_id,
                    );
                }
                if ((0, p.f0)(n)) return (0, r.jsx)(T.Z, { guildId: n.entity_id }, n.event_id);
                if ((0, p.m4)(n)) {
                    let e = _.Z.getPurchaseInfo(n.entity_id);
                    return null == e
                        ? null
                        : (0, r.jsx)(
                              S.Z,
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
        w = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: M.sectionHeader,
                            variant: "text-md/semibold",
                            children: R,
                        }),
                        void 0 !== v.sectionDescription
                            ? (0, r.jsx)(u.Text, {
                                  className: M.sectionDescription,
                                  variant: "text-md/medium",
                                  color: "text-tertiary",
                                  children: v.sectionDescription(null != s && s),
                              })
                            : null,
                    ],
                }),
            [R, v, s],
        );
    if (0 === c.length) return null;
    let j = c.slice(0, I);
    return (0, r.jsxs)("div", {
        className: M.actionSection,
        children: [
            w(),
            (0, r.jsx)("div", {
                className: M.actions,
                style: { maxHeight: j.length * G },
                children: j.map((e, t) => P({ row: t })),
            }),
            j.length < d
                ? (0, r.jsx)(u.P3F, {
                      className: o()(M.loadMoreBar, { [M.disabled]: y }),
                      onClick: N,
                      role: "button",
                      "aria-disabled": y,
                      children: y
                          ? (0, r.jsx)(u.$jN, {
                                type: u.$jN.Type.PULSING_ELLIPSIS,
                                className: M.spinner,
                            })
                          : (0, r.jsx)(u.Text, {
                                className: M.loadMore,
                                variant: "text-sm/bold",
                                children: L.intl.format(x.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(d - j.length, D.iB)),
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
            n = (0, m.o)(
                L.intl.formatToPlainString(x.default["7hqFl9"], { activeLinks: t.length }),
                L.intl.string(x.default["Q/D/0Q"]),
            ),
            i = (0, p.Qr)(!!e),
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
                                className: M.icon,
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
                  className: M.accountRow,
                  children: [
                      (0, r.jsx)(C.r, {
                          user: o,
                          avatarSize: i,
                      }),
                      (0, r.jsxs)("div", {
                          className: M.headerText,
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
            t = (0, c.e7)([_.Z], () => _.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, g.G)({}),
            a = (e) => {
                n(e), d.default.track(w.rMx.FAMILY_CENTER_ACTION, { action: D.YC.SelectTeen });
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
    Y = () => {
        let e = (0, b.M)(),
            t = (0, O.Z)(),
            n = (0, v.ZM)(),
            i = (0, p.Qr)(!!t),
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
        let e = (0, h.PO)("family_center_activity_card"),
            t = (0, p._p)(e),
            n = (0, E.kE)(),
            i = (0, p.t3)(),
            a = (0, v.Rd)(i);
        return (0, r.jsxs)("div", {
            className: e ? M.containerV2 : M.container,
            children: [
                (0, r.jsxs)("div", {
                    className: M.connectedCounter,
                    children: [(0, r.jsx)(F, {}), (0, r.jsx)(B, {})],
                }),
                (0, r.jsxs)("div", {
                    className: j.box,
                    children: [
                        (0, r.jsx)("div", {
                            className: M.header,
                            children: (0, r.jsx)(Y, {}),
                        }),
                        (0, r.jsxs)(u.Kqy, {
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
                                        e ? (0, r.jsx)(P.Z, {}) : null,
                                        n
                                            ? t.map((e) => {
                                                  let [t] = e;
                                                  return (0, r.jsx)(Z, { displayType: t }, "".concat(t, "-list"));
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
