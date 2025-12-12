n.d(t, { N: () => L }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(259580),
    u = n(499033),
    d = n(626135),
    f = n(709054),
    p = n(531441),
    _ = n(236289),
    m = n(788080),
    h = n(467432),
    g = n(451284),
    E = n(613734),
    b = n(800530),
    y = n(981631),
    O = n(388032),
    v = n(712243);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = (e) => {
        let { status: t, onClick: n, opened: i, count: o } = e;
        return (0, r.jsxs)(l.P3F, {
            className: v.header,
            onClick: n,
            children: [
                (0, r.jsx)("div", {
                    className: v.headerIconWrapper,
                    children: (0, r.jsx)(l.aNP, {
                        size: "md",
                        color: "active" === t ? l.TVs.colors.INTERACTIVE_TEXT_ACTIVE : l.TVs.colors.INTERACTIVE_MUTED,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: v.title,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children:
                                "active" === t
                                    ? O.intl.formatToPlainString(O.t.IeV2oY, { count: o.toString() })
                                    : O.intl.formatToPlainString(O.t.fZAHBT, { count: o.toString() }),
                        }),
                        (0, r.jsx)(l.Heading, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "active" === t ? O.intl.string(O.t.XJ2YVR) : O.intl.string(O.t.SzGV0g),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: v.caret,
                    children: (0, r.jsx)(c.Z, {
                        width: 18,
                        height: 18,
                        direction: i ? c.Z.Directions.UP : c.Z.Directions.DOWN,
                    }),
                }),
            ],
        });
    },
    N = () =>
        (0, r.jsxs)("div", {
            className: v.emptyState,
            children: [
                (0, r.jsxs)("div", {
                    className: v.iconContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: v.iconBackground,
                            children: (0, r.jsx)(l.rm8, {
                                size: "md",
                                color: "currentColor",
                                className: v.icon,
                            }),
                        }),
                        (0, r.jsx)(u.Z, { className: v.stars }),
                    ],
                }),
                (0, r.jsx)(l.Heading, {
                    variant: "heading-md/bold",
                    className: v.emptyStateText,
                    children: O.intl.string(O.t.reLFaV),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    className: v.emptyStateSubtext,
                    children: O.intl.string(O.t.ERdH1o),
                }),
            ],
        }),
    P = () =>
        (0, r.jsx)("div", {
            className: v.emptyState,
            children: (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                className: v.emptyStateSubtext,
                children: O.intl.string(O.t.RV3AXf),
            }),
        }),
    R = (e) => {
        let { timestamp: t } = e;
        return (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            className: v.timestamp,
            children: (0, m.XX)(t),
        });
    },
    w = () =>
        (0, r.jsx)(l.Text, {
            variant: "text-xs/bold",
            className: v.newBadge,
            children: O.intl.string(O.t.QKMRC4),
        }),
    D = (e) => {
        let { classification: t } = e,
            { id: o, description: s } = t,
            c = f.default.extractTimestamp(o),
            u = (0, h.e)(t),
            d = i.useMemo(() => {
                var e, n, i;
                let o = {
                    description: s,
                    descriptionHook: (e) =>
                        (0, r.jsx)(l.Text, {
                            tag: "span",
                            variant: "heading-lg/bold",
                            children: e,
                        }),
                };
                return (0, m.FB)(t)
                    ? (null == t || null == (e = t.guild_metadata) ? void 0 : e.member_type) === p.wO.OWNER
                        ? O.intl.format(
                              O.t.Lb0HVv,
                              C(I({}, o), { guildName: null == t || null == (n = t.guild_metadata) ? void 0 : n.name }),
                          )
                        : O.intl.format(O.t.rmpEPD, {
                              guildName: null == t || null == (i = t.guild_metadata) ? void 0 : i.name,
                              classification_type: o.description,
                              classificationHook: o.descriptionHook,
                          })
                    : O.intl.format(O.t.QY4g5t, o);
            }, [t, s]),
            _ = () => {
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("18831").then(n.bind(n, 41164));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            I(
                                {
                                    classificationId: o,
                                    source: b.s.StandingTab,
                                },
                                t,
                            ),
                        );
                });
            };
        return (0, r.jsx)(
            l.P3F,
            {
                onClick: _,
                className: a()(v.itemDetail, { [v.itemDetailNew]: u }),
                children: (0, r.jsxs)("div", {
                    className: v.descriptionContainer,
                    children: [
                        u ? (0, r.jsx)(w, {}) : (0, r.jsx)(R, { timestamp: c }),
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-lg/normal",
                            children: d,
                        }),
                    ],
                }),
            },
            o,
        );
    },
    x = (e) => {
        let { status: t, classifications: n } = e,
            [o, a] = i.useState(!1),
            [c, u] = i.useState(3),
            f = (0, g.P)(),
            p = (0, s.e7)([_.Z], () => _.Z.getIsDsaEligible()),
            m = i.useMemo(() => n.slice(0, c), [n, c]);
        i.useEffect(() => {
            o &&
                d.default.track(y.rMx.SAFETY_HUB_ACTION, {
                    action: b.n0.ViewViolationsDropdown,
                    account_standing: f.state,
                    classification_ids: m.map((e) => Number(e.id)),
                    source: b.s.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: p,
                });
        }, [o, f.state, m, p]);
        let h = n.length - m.length > 3 ? 3 : n.length - m.length;
        return (0, r.jsxs)("div", {
            className: v.dropdown,
            children: [
                (0, r.jsx)(A, {
                    status: t,
                    onClick: () => a((e) => !e),
                    opened: o,
                    count: n.length,
                }),
                o &&
                    (0, r.jsxs)("div", {
                        className: v.items,
                        children: [
                            (0, r.jsx)(l.njP.Separator, {
                                style: {
                                    height: "1px",
                                    width: "100%",
                                },
                            }),
                            m.length > 0 && m.map((e) => (0, r.jsx)(D, { classification: e }, e.id)),
                            m.length < n.length &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.njP.Separator, {
                                            style: {
                                                height: "1px",
                                                width: "100%",
                                            },
                                        }),
                                        (0, r.jsx)("button", {
                                            className: v.paginationButton,
                                            onClick: () => u((e) => e + h),
                                            children: O.intl.format(O.t["9Ml56H"], { nextPageSize: h }),
                                        }),
                                    ],
                                }),
                            0 === m.length && "active" === t && (0, r.jsx)(N, {}),
                            0 === m.length && "expired" === t && (0, r.jsx)(P, {}),
                        ],
                    }),
            ],
        });
    },
    L = () => {
        let e = (0, E.y9)(),
            t = (0, E.KM)();
        return 0 === e.length && 0 === t.length
            ? null
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(x, {
                          status: "active",
                          classifications: e,
                      }),
                      (0, r.jsx)(x, {
                          status: "expired",
                          classifications: t,
                      }),
                  ],
              });
    };
