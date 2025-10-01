n.d(t, {
    I: () => B,
    Z: () => V,
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
    E = n(780985),
    b = n(880257),
    y = n(631885),
    O = n(240351),
    v = n(792258),
    I = n(657825),
    T = n(198952),
    S = n(329242),
    A = n(895328),
    C = n(448524),
    N = n(292352),
    R = n(981631),
    P = n(412297),
    w = n(388032),
    D = n(742164),
    L = n(152269);
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
                x(e, t, n[t]);
            });
    }
    return e;
}
let M = 65;
function k() {
    let e = i.useCallback(() => {
        (0, l.ZDy)(async () => {
            let { default: e } = await n.e("66462").then(n.bind(n, 756226));
            return (t) => (0, r.jsx)(e, j({}, t));
        });
    }, []);
    return (0, r.jsx)(l.P3F, {
        className: D.tooltip,
        onClick: e,
        children: (0, r.jsx)(l.d3s, {
            size: "custom",
            color: "currentColor",
            className: D.icon,
            width: 15,
            height: 15,
        }),
    });
}
function U(e) {
    let { displayType: t } = e,
        n = (0, _.PO)("family_center_activity_card"),
        a = i.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(w.intl.string(P.default.Wu8BKy), l.ToastType.FAILURE));
        }, []),
        s = (0, b.Z)(),
        c = (0, g.ws)(t),
        d = (0, g.C7)(t),
        { loadMore: h, isMoreLoading: E } = (0, m.G)({ onError: a }),
        y = (0, f.E2)(n).get(t),
        [O, T] = i.useState(N.iB),
        S = (0, p.Xi)({ location: "family_center_activity_section_web" }),
        A = i.useCallback(() => {
            T((e) => e + N.iB), h(t);
        }, [t, h]);
    o()(y, "No text for action type: ".concat(t));
    let C = y.sectionHeader(d),
        R = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = c[t];
                if ((0, f.iB)(n)) {
                    let e = u.default.extractTimestamp(n.event_id),
                        t = (0, f.LI)(e, y.timestampFormatter);
                    return (0, r.jsx)(
                        I.Z,
                        {
                            userId: n.entity_id,
                            subText: t,
                        },
                        n.event_id,
                    );
                }
                if ((0, f.f0)(n)) return (0, r.jsx)(v.Z, { guildId: n.entity_id }, n.event_id);
            },
            [c, y.timestampFormatter],
        ),
        L = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Text, {
                            className: D.sectionHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: C,
                        }),
                        void 0 !== y.sectionDescription
                            ? (0, r.jsx)(l.Text, {
                                  className: D.sectionDescription,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: y.sectionDescription(null != s && s, S),
                              })
                            : null,
                    ],
                }),
            [C, y, s, S],
        );
    if (0 === c.length) return null;
    let x = c.slice(0, O);
    return (0, r.jsxs)("div", {
        className: D.actionSection,
        children: [
            L(),
            (0, r.jsx)("div", {
                className: D.actions,
                style: { maxHeight: x.length * M },
                children: x.map((e, t) => R({ row: t })),
            }),
            x.length !== d
                ? (0, r.jsx)(l.P3F, {
                      className: D.loadMoreBar,
                      onClick: A,
                      role: "button",
                      children: E
                          ? (0, r.jsx)(l.$jN, {
                                type: l.$jN.Type.PULSING_ELLIPSIS,
                                className: D.spinner,
                            })
                          : (0, r.jsx)(l.Text, {
                                className: D.loadMore,
                                variant: "text-sm/bold",
                                children: w.intl.format(P.default["7dMmJS"], {
                                    pageSize: Math.min(d - x.length, N.iB),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let G = () => {
        let e = (0, b.Z)(),
            t = (0, y.mq)(N.ne.ACTIVE),
            n = (0, h.o)(
                w.intl.formatToPlainString(P.default["7hqFl5"], { activeLinks: t.length }),
                w.intl.string(P.default["Q/D/0d"]),
            ),
            i = (0, f.Qr)(!!e),
            a = (0, y.Rd)(i);
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
                                className: D.icon,
                            }),
                      (0, r.jsx)(l.Text, {
                          variant: "eyebrow",
                          children: n,
                      }),
                  ],
              });
    },
    B = (e) => {
        let { userId: t, subText: n, avatarSize: i = l.EFr.SIZE_40, hideUserTag: a = !1 } = e,
            o = (0, E.In)(t);
        return void 0 === o
            ? null
            : (0, r.jsxs)("div", {
                  className: D.accountRow,
                  children: [
                      (0, r.jsx)(T.r, {
                          user: o,
                          avatarSize: i,
                      }),
                      (0, r.jsxs)("div", {
                          className: D.headerText,
                          children: [
                              (0, r.jsx)(S.Z, {
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
    Z = () => {
        let e = (0, y.mq)(N.ne.ACTIVE),
            t = (0, s.e7)([d.Z], () => d.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, m.G)({}),
            a = (e) => {
                n(e), c.default.track(R.rMx.FAMILY_CENTER_ACTION, { action: N.YC.SelectTeen });
            },
            o = e.map((e) => ({
                label: e.id,
                value: e.id,
            })),
            u = i.useCallback(
                (e) =>
                    (0, r.jsx)(B, {
                        userId: e.value,
                        avatarSize: l.EFr.SIZE_24,
                    }),
                [],
            );
        return (0, r.jsx)(l.PhF, {
            className: D.select,
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
    F = (e) => {
        let { userId: t } = e,
            n = (0, b.Z)(),
            i = (0, y.mq)(N.ne.ACTIVE),
            a = (0, f.Qr)(!!n),
            o = (0, y.Rd)(a);
        return n && 1 !== i.length
            ? (0, r.jsx)(Z, {})
            : (0, r.jsx)(B, {
                  userId: t,
                  subText: o,
              });
    },
    V = (e) => {
        let { user: t } = e,
            n = (0, _.PO)("family_center_activity_card"),
            i = (0, f._p)(n),
            a = (0, g.kE)(),
            o = (0, f.t3)(),
            s = (0, y.Rd)(o);
        return (0, r.jsxs)("div", {
            className: n ? D.containerV2 : D.container,
            children: [
                (0, r.jsxs)("div", {
                    className: D.connectedCounter,
                    children: [(0, r.jsx)(G, {}), (0, r.jsx)(k, {})],
                }),
                (0, r.jsxs)("div", {
                    className: L.box,
                    children: [
                        (0, r.jsx)("div", {
                            className: D.header,
                            children: (0, r.jsx)(F, { userId: t.id }),
                        }),
                        (0, r.jsxs)("div", {
                            className: D.content,
                            children: [
                                (0, r.jsx)("div", {
                                    className: n ? D.activityCounterRowV2 : D.activityCounterRow,
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
                                n ? (0, r.jsx)(C.Z, {}) : null,
                                (0, r.jsx)("div", {
                                    className: D.activityOverview,
                                    children: a
                                        ? i.map((e) => {
                                              let [t] = e;
                                              return (0, r.jsx)(U, { displayType: t }, "".concat(t, "-list"));
                                          })
                                        : (0, r.jsx)(A.Z, {
                                              className: D.emptyActivity,
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
