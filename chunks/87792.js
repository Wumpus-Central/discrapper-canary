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
    u = n(199849),
    d = n(481060),
    f = n(626135),
    p = n(709054),
    _ = n(914788),
    m = n(546791),
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
    C = n(657825),
    A = n(198952),
    N = n(329242),
    P = n(895328),
    R = n(448524),
    w = n(292352),
    D = n(981631),
    x = n(517319),
    L = n(388032),
    j = n(203549),
    M = n(108319);
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
        (0, d.ZDy)(async () => {
            let { default: e } = await n.e("66462").then(n.bind(n, 756226));
            return (t) => (0, r.jsx)(e, U({}, t));
        });
    }, []);
    return (0, r.jsx)(d.P3F, {
        className: j.tooltip,
        onClick: e,
        children: (0, r.jsx)(d.d3s, {
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
        n = i.useCallback(() => {
            (0, d.showToast)((0, d.createToast)(L.intl.string(x.default.Wu8BK2), d.ToastType.FAILURE));
        }, []),
        a = (0, O.Z)(),
        s = (0, E.ws)(t),
        c = (0, E.C7)(t),
        u = (0, E.A)(t),
        { loadMore: f, isMoreLoading: h } = (0, g.G)({ onError: n }),
        b = (0, m.E2)().get(t),
        [y, v] = i.useState(w.iB),
        S = i.useCallback(() => {
            v((e) => e + w.iB), f(t);
        }, [t, f]);
    l()(b, "No text for action type: ".concat(t));
    let A = t === w.MY.PURCHASES && null != u ? b.sectionHeader(u) : b.sectionHeader(c),
        N = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = s[t];
                if ((0, m.iB)(n)) {
                    let e = p.default.extractTimestamp(n.event_id),
                        t = (0, m.LI)(e, b.timestampFormatter);
                    return (0, r.jsx)(
                        C.Z,
                        {
                            userId: n.entity_id,
                            subText: t,
                        },
                        n.event_id,
                    );
                }
                if ((0, m.f0)(n)) return (0, r.jsx)(I.Z, { guildId: n.entity_id }, n.event_id);
                if ((0, m.m4)(n)) {
                    let e = _.Z.getPurchaseInfo(n.entity_id);
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
            [s, b.timestampFormatter],
        ),
        P = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(d.Text, {
                            className: j.sectionHeader,
                            variant: "text-md/semibold",
                            children: A,
                        }),
                        void 0 !== b.sectionDescription
                            ? (0, r.jsx)(d.Text, {
                                  className: j.sectionDescription,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: b.sectionDescription(null != a && a),
                              })
                            : null,
                    ],
                }),
            [A, b, a],
        );
    if (0 === s.length) return null;
    let R = s.slice(0, y);
    return (0, r.jsxs)("div", {
        className: j.actionSection,
        children: [
            P(),
            (0, r.jsx)("div", {
                className: j.actions,
                style: { maxHeight: R.length * G },
                children: R.map((e, t) => N({ row: t })),
            }),
            R.length < c
                ? (0, r.jsx)(d.P3F, {
                      className: o()(j.loadMoreBar, { [j.disabled]: h }),
                      onClick: S,
                      role: "button",
                      "aria-disabled": h,
                      children: h
                          ? (0, r.jsx)(d.$jN, {
                                type: d.$jN.Type.PULSING_ELLIPSIS,
                                className: j.spinner,
                            })
                          : (0, r.jsx)(d.Text, {
                                className: j.loadMore,
                                variant: "text-sm/bold",
                                children: L.intl.format(x.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - R.length, w.iB)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let B = () => {
        let e = (0, O.Z)(),
            t = (0, v.ZM)(),
            n = (0, h.o)(
                L.intl.formatToPlainString(x.default["7hqFl9"], { activeLinks: t.length }),
                L.intl.string(x.default["Q/D/0Q"]),
            ),
            i = (0, m.Qr)(!!e),
            a = (0, v.Rd)(i);
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
                                className: j.icon,
                            }),
                      (0, r.jsx)(d.Text, {
                          variant: "eyebrow",
                          children: n,
                      }),
                  ],
              });
    },
    V = i.memo((e) => {
        let { userId: t, subText: n, avatarSize: i = d.EFr.SIZE_40, hideUserTag: a = !1 } = e,
            o = (0, y.In)(t);
        return void 0 === o
            ? null
            : (0, r.jsxs)("div", {
                  className: j.accountRow,
                  children: [
                      (0, r.jsx)(A.r, {
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
V.displayName = "FamilyCenterActivityCardAccountRow";
let H = () => {
        let e = (0, v.zu)(),
            t = (0, c.e7)([_.Z], () => _.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, g.G)({}),
            a = (e) => {
                n(e), f.default.track(D.rMx.FAMILY_CENTER_ACTION, { action: w.YC.SelectTeen });
            },
            o = e.map((e) => ({
                label: e.id,
                value: e.id,
            })),
            s = i.useCallback(
                (e) =>
                    (0, r.jsx)(V, {
                        userId: e.value,
                        avatarSize: d.EFr.SIZE_24,
                    }),
                [],
            );
        return (0, r.jsx)(u.B6, {
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
            i = (0, m.Qr)(!!t),
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
        let e = (0, m._p)(),
            t = (0, E.kE)(),
            n = (0, m.t3)(),
            i = (0, v.Rd)(n);
        return (0, r.jsxs)("div", {
            className: j.container,
            children: [
                (0, r.jsxs)("div", {
                    className: j.connectedCounter,
                    children: [(0, r.jsx)(B, {}), (0, r.jsx)(Z, {})],
                }),
                (0, r.jsxs)("div", {
                    className: M.box,
                    children: [
                        (0, r.jsx)("div", {
                            className: j.header,
                            children: (0, r.jsx)(Y, {}),
                        }),
                        (0, r.jsxs)(d.Kqy, {
                            gap: 32,
                            padding: 32,
                            fullWidth: !1,
                            children: [
                                (0, r.jsx)("div", {
                                    className: j.activityCounterRow,
                                    children: e.map((e) => {
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
                                        (0, r.jsx)(R.Z, {}),
                                        t
                                            ? e.map((e) => {
                                                  let [t] = e;
                                                  return (0, r.jsx)(F, { displayType: t }, "".concat(t, "-list"));
                                              })
                                            : (0, r.jsx)(P.Z, {
                                                  className: j.emptyActivity,
                                                  text: null != i ? i : "",
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
