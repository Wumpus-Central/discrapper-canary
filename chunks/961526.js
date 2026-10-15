n.d(t, { A: () => lL, p: () => lC });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(607399),
    d = n(702841),
    c = n(331322),
    u = n(289873),
    o = n(761508),
    x = n(812993);
if (221552 == n.j) var m = n(43990);
if (221552 == n.j) var h = n(177953);
if (221552 == n.j) var f = n(364522);
var j = n(944791),
    g = n(793574),
    v = n(688810),
    A = n(726249),
    E = n(915089),
    p = n(742589),
    N = n(363195),
    T = n(885386),
    S = n(669067),
    I = n(899847),
    y = n(695515),
    b = n(438732),
    _ = n(174459),
    C = n(191627),
    L = n(652215);
let R = {
        [C.u9.ACTIVITY]: "family_center_activity_tab",
        [C.u9.REQUESTS]: "family_center_requests_tab",
        [C.u9.SETTINGS]: "family_center_settings_tab",
        [C.u9.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
        [C.u9.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
        [C.u9.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
    },
    k = function () {
        return {
            selectedTab: (0, d.bG)([y.A], () => y.A.getSelectedTab()),
            handleTabChange: function (e) {
                (I.Ay.selectTab(e), _.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: C.qb.TabChange, tab: e }));
            },
        };
    };
var D = n(834981),
    U = n(843282),
    P = n(778712),
    M = n(939249),
    O = n(548411),
    F = n(661531),
    G = n(834730),
    V = n(297264),
    w = n(10005),
    z = n(153739),
    H = n(284009),
    B = n.n(H),
    Y = n(192308),
    Z = n(885574),
    q = n(858899),
    K = n(39623),
    W = n(935208),
    X = n(864202),
    Q = n(580630),
    J = n(513687),
    $ = n(105292);
function ee(e) {
    return new Intl.DateTimeFormat($.intl.currentLocale, { month: "short", day: "numeric" }).format((0, X.default)(e));
}
var et = n(923531),
    en = n(294433);
function el(e) {
    return (0, d.bG)([y.A], () => y.A.getTotalForDisplayType(e));
}
function ei(e) {
    let t = el(e) ?? 0;
    if (e === C.NV.TOTAL_VOICE_MINUTES) return (0, et.hO)(t);
    if (e === C.NV.PURCHASES) {
        let e = y.A.getTotalSpendAmount(),
            n = y.A.getTotalSpendCurrency();
        return null != e && null != n ? (0, Q.RS)(e, n) : t;
    }
    if (e === C.NV.GIFTS) {
        let e = y.A.getTotalGiftValue();
        if (null != e) return (0, Q.RS)(e.amount, e.currency);
    }
    return t;
}
var er = n(500470),
    es = n(707554),
    ea = n(902546);
let ed = function (e) {
    let { header: t, displayType: n } = e,
        i = el(n),
        r = ei(n);
    return (0, l.jsxs)("div", {
        className: ea.hJ,
        children: [
            (0, l.jsx)(V.D, {
                variant: "heading-xxl/medium",
                color: i > 0 ? "text-brand" : "text-muted",
                children: (0, l.jsx)(es.F, { children: r }),
            }),
            (0, l.jsx)(G.E, { variant: "text-sm/semibold", className: ea.io, children: t }),
        ],
    });
};
var ec = n(821701),
    eu = n(427262),
    eo = n(575593),
    ex = n(898461),
    em = n(203632),
    eh = n(486020),
    ef = n(202541);
function ej(e, t) {
    let n,
        l,
        i = null != t;
    if (null != e)
        ((n = e.name),
            (l = (function (e) {
                switch (e) {
                    case eo.R.AVATAR_DECORATION:
                        return $.intl.string(J.default.obi47v);
                    case eo.R.PROFILE_EFFECT:
                        return $.intl.string(J.default.RX8BMR);
                    case eo.R.NAMEPLATE:
                        return $.intl.string(J.default.nNGEHk);
                    case eo.R.BUNDLE:
                        return $.intl.string(J.default.VS1fKo);
                    case eo.R.PROFILE_FRAME:
                        return $.intl.string(J.default.JiIY1l);
                    default:
                        return "";
                }
            })(e.type)));
    else if (i && null != t) {
        let e = ef.hd[t];
        n = e?.name;
    }
    return { displayName: n, typeName: l, isSubscription: i };
}
var eg = n(34188),
    ev = n(104510),
    eA = n(403581),
    eE = n(253292),
    ep = n(780898),
    eN = n(372320),
    eT = n(665411),
    eS = n(740523);
function eI(e) {
    let { displayName: t, product: n } = e,
        i = (function (e) {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, ex.T)(t) ? (0, eh.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 }) : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: eS._P });
}
function ey(e) {
    let { displayName: t, nameplateData: n } = e,
        { staticImageUrl: i } = (0, eE.K)(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: eS.M4 });
}
function eb(e) {
    let { displayName: t, product: n } = e,
        i = (function (e) {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, em.C3)(t) ? t.thumbnailPreviewSrc : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: eS._P });
}
function e_(e) {
    let { product: t } = e,
        n = (0, eN.A)(t.skuId);
    return null == n
        ? null
        : (0, l.jsx)("div", {
              className: eS.pI,
              children: (0, l.jsx)("div", { className: eS.ZS, children: (0, l.jsx)(eT.A, { frame: n }) }),
          });
}
function eC(e) {
    let { subscriptionPlanId: t } = e;
    if (null == t) return (0, l.jsx)("div", { className: eS.T8, children: (0, l.jsx)(eg.U, {}) });
    let n = (function (e) {
        if (null == e) return !1;
        let t = ef.hd[e];
        return t?.skuId === ef.pe.GUILD;
    })(t);
    return (0, l.jsx)("div", {
        className: eS.T8,
        children: n
            ? (0, l.jsx)(ev._, { size: "custom", width: 20, height: 20 })
            : (0, l.jsx)(eA.t, { size: "custom", width: 20, height: 20 }),
    });
}
function eL(e) {
    let { displayName: t, product: n } = e;
    if (null == n) return (0, l.jsx)("div", { className: eS.T8, children: (0, l.jsx)(eg.U, {}) });
    switch (n.type) {
        case eo.R.AVATAR_DECORATION:
            return (0, l.jsx)(eI, { displayName: t, product: n });
        case eo.R.NAMEPLATE:
            let i = (0, ep.EQ)(n);
            return null != i ? (0, l.jsx)(ey, { displayName: t, nameplateData: i }) : null;
        case eo.R.PROFILE_EFFECT:
            return (0, l.jsx)(eb, { displayName: t, product: n });
        case eo.R.PROFILE_FRAME:
            return (0, l.jsx)(e_, { product: n });
        default:
            return (0, l.jsx)("div", { className: eS.T8, children: (0, l.jsx)(eg.U, {}) });
    }
}
let eR = function (e) {
    let { displayName: t, isSubscription: n, product: i, subscriptionPlanId: r } = e;
    return n ? (0, l.jsx)(eC, { subscriptionPlanId: r }) : (0, l.jsx)(eL, { displayName: t, product: i });
};
var ek = n(271308);
let eD = i.memo((e) => {
    let {
            skuId: t,
            subscriptionPlanId: n,
            price: i,
            gifterUserId: r,
            claimed: a,
            offeredAt: d,
            claimedAt: c,
            className: u,
        } = e,
        { product: o } = (0, ec.A)(t),
        x = (0, z.F7)(r),
        { displayName: m, isSubscription: h } = ej(o ?? null, n);
    if ((null != t && !h && null == o) || null == m) return null;
    let f = (function (e) {
        let { claimed: t, price: n, gifterName: l, offeredAt: i, claimedAt: r } = e,
            s = null != n ? (0, Q.$g)(n.amount, n.currency) : null,
            a = null;
        return (
            null != s && null != l
                ? (a = $.intl.formatToPlainString(J.default["o44n/1"], { price: s, username: l }))
                : null != s && (a = s),
            [
                a,
                t
                    ? $.intl.formatToPlainString(J.default.kDyllq, { date: ee(r ?? i) })
                    : $.intl.formatToPlainString(J.default.gAG45y, { date: ee(i) }),
            ]
                .filter(Boolean)
                .join(" \u2022 ")
        );
    })({ claimed: a, price: i, gifterName: null != x ? eu.Ay.getName(x) : null, offeredAt: d, claimedAt: c });
    return (0, l.jsxs)("div", {
        className: s()(ek.k, u),
        children: [
            (0, l.jsx)(eR, { displayName: m, isSubscription: h, product: o ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(G.E, { variant: "text-md/semibold", children: m }),
                    (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: f }),
                ],
            }),
        ],
    });
});
eD.displayName = "FamilyCenterActivityGiftRow";
var eU = n(900002),
    eP = n(714991),
    eM = n(23339),
    eO = n(97808),
    eF = n(260509),
    eG = n(601360);
let eV = [18, 18, 16, 16, 14, 12, 10],
    ew = function (e) {
        let { guildId: t } = e,
            n = (0, d.bG)([y.A], () => y.A.getGuild(t));
        if (void 0 === n) return null;
        let { name: i } = n,
            r = (0, eF.Iv)(n, 40, !0),
            s = null,
            a = 10;
        return (
            null == n.icon && null != i && (a = eV[(s = (0, eM.oN)(i)).length - 1] ?? eV[eV.length - 1]),
            (0, l.jsx)("div", {
                className: eG.k,
                children: (0, l.jsxs)("div", {
                    style: { fontSize: a },
                    children: [
                        null != s ? (0, l.jsx)("div", { className: eG.X, "aria-hidden": !0, children: s }) : null,
                        null != r ? (0, l.jsx)(eO.eu, { src: r, size: P._3.SIZE_40, "aria-hidden": !0 }) : null,
                    ],
                }),
            })
        );
    };
var ez = n(85909);
let eH = i.memo((e) => {
    let { guildId: t, className: n, customSubtext: i } = e,
        r = (0, d.bG)([y.A], () => y.A.getGuild(t));
    if (void 0 === r) return null;
    let a = r.features.has(L.GuildFeatures.VERIFIED) || r.features.has(L.GuildFeatures.PARTNERED),
        { name: c } = r;
    return (0, l.jsxs)("div", {
        className: s()(ez.kL, n),
        children: [
            (0, l.jsx)(ew, { guildId: t }),
            (0, l.jsxs)("div", {
                className: ez.$z,
                children: [
                    (0, l.jsxs)("div", {
                        className: ez.wx,
                        children: [
                            a
                                ? (0, l.jsx)(eP.A, {
                                      guild: r,
                                      tooltipPosition: "bottom",
                                      tooltipColor: eU.ST.Colors.PRIMARY,
                                      className: ez.n2,
                                  })
                                : null,
                            (0, l.jsx)(G.E, { variant: "text-md/semibold", children: c }),
                        ],
                    }),
                    (0, l.jsx)(G.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children:
                            null != i
                                ? i
                                : void 0 !== r.approximateMemberCount
                                  ? $.intl.format(J.default["5JmNgg"], { members: r.approximateMemberCount })
                                  : null,
                    }),
                ],
            }),
        ],
    });
});
eH.displayName = "FamilyCenterActivityGuildRow";
var eB = n(748695);
let eY = i.memo((e) => {
    let { skuId: t, subscriptionPlanId: n, total: i, currency: r, className: a } = e,
        { product: d } = (0, ec.A)(t),
        { displayName: c, typeName: u, isSubscription: o } = ej(d ?? null, n);
    if ((null != t && !o && null == d) || null == c) return null;
    let x = (0, Q.$g)(i, r);
    return (0, l.jsxs)("div", {
        className: s()(eB.k, a),
        children: [
            (0, l.jsx)(eR, { displayName: c, isSubscription: o, product: d ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(G.E, { variant: "text-md/semibold", children: null != u ? `${c} \u{2022} ${u}` : c }),
                    (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: x }),
                ],
            }),
        ],
    });
});
eY.displayName = "FamilyCenterActivityPurchaseRow";
var eZ = n(287809),
    eq = n(283900),
    eK = n(467719);
let eW = i.memo((e) => {
    let { userId: t, subText: n, className: i } = e,
        r = (0, d.bG)([eZ.default], () => eZ.default.getUser(t));
    return void 0 === r
        ? null
        : (0, l.jsxs)("div", {
              className: s()(eK.k, i),
              children: [
                  (0, l.jsx)(eq.H, { user: r, avatarSize: P._3.SIZE_40 }),
                  (0, l.jsx)("div", {
                      children: (0, l.jsxs)("div", {
                          className: eK.$,
                          children: [
                              (0, l.jsx)(G.E, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: eu.Ay.getName(r),
                              }),
                              null != n &&
                                  (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                          ],
                      }),
                  }),
              ],
          });
});
eW.displayName = "FamilyCenterActivityUserRow";
var eX = n(475833),
    eQ = n(584144),
    eJ = n(221851);
let e$ = function (e) {
    let { text: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: s()(n, eQ.I),
        children: [
            (0, l.jsx)("img", { className: eQ.S, src: "/assets/f47ef22a8aeff32a.svg", alt: "" }),
            (0, l.jsx)(G.E, { className: eJ.Ot, variant: "text-sm/medium", color: "text-muted", children: t }),
        ],
    });
};
var e0 = n(683063),
    e1 = n(372777);
let e3 = function (e) {
    let { userId: t, dmsSent: n, callCount: i } = e,
        r = (0, d.bG)([eZ.default], () => eZ.default.getUser(t));
    return void 0 === r
        ? null
        : (0, l.jsx)(e0.u, {
              title: r.username,
              body: (0, et.fq)(n, i),
              asContainer: !0,
              children: (0, l.jsx)("div", {
                  className: e1.k,
                  children: (0, l.jsx)(eq.H, { user: r, avatarSize: P._3.SIZE_40 }),
              }),
          });
};
var e2 = n(326851);
let e8 = function () {
    let e = (0, d.bG)([y.A], () => y.A.getTopUserActivities()),
        t = (0, d.bG)([y.A], () => y.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: e2.kL,
              children: [
                  e.length > 0 &&
                      (0, l.jsxs)("div", {
                          className: e2.A2,
                          children: [
                              (0, l.jsx)(V.D, {
                                  variant: "text-md/medium",
                                  className: e2.bV,
                                  children: $.intl.string(J.default.BxbvS7),
                              }),
                              (0, l.jsx)("div", {
                                  className: e2.Ce,
                                  children:
                                      1 === e.length
                                          ? (0, l.jsx)(eW, {
                                                userId: e[0].user_id,
                                                subText: (0, et.fq)(e[0].dms_sent, e[0].call_count),
                                                className: e2.q3,
                                            })
                                          : e.map((e) =>
                                                (0, l.jsx)(
                                                    e3,
                                                    { userId: e.user_id, dmsSent: e.dms_sent, callCount: e.call_count },
                                                    e.user_id,
                                                ),
                                            ),
                              }),
                          ],
                      }),
                  t.length > 0 &&
                      (0, l.jsxs)("div", {
                          className: e2.A2,
                          children: [
                              (0, l.jsx)(V.D, {
                                  variant: "text-md/medium",
                                  className: e2.bV,
                                  children: $.intl.string(J.default.Lq9Set),
                              }),
                              1 === t.length
                                  ? (0, l.jsx)(eH, {
                                        guildId: t[0].guild_id,
                                        customSubtext: (0, et.fq)(t[0].messages_sent, t[0].call_count),
                                        className: e2._S,
                                    })
                                  : (0, l.jsx)("div", {
                                        className: e2.Ce,
                                        children: t.map((e) => {
                                            let t = y.A.getGuild(e.guild_id),
                                                n = t?.name ?? "Unknown Server";
                                            return (0, l.jsx)(
                                                e0.u,
                                                {
                                                    title: n,
                                                    body: (0, et.fq)(e.messages_sent, e.call_count) ?? null,
                                                    asContainer: !0,
                                                    children: (0, l.jsx)(ew, { guildId: e?.guild_id }),
                                                },
                                                e.guild_id,
                                            );
                                        }),
                                    }),
                          ],
                      }),
              ],
          });
};
var e9 = n(700582),
    e5 = n(238304);
function e7() {
    let e = i.useCallback(() => {
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("166894"), n.e("160106")]).then(n.bind(n, 853809));
            return (t) => (0, l.jsx)(e, { ...t });
        });
    }, []);
    return (0, l.jsx)(M.D, {
        className: e9.YL,
        onClick: e,
        children: (0, l.jsx)(Z.CircleInformationIcon, {
            size: "custom",
            color: "currentColor",
            className: e9.Kk,
            width: 15,
            height: 15,
        }),
    });
}
function e4(e) {
    let { displayType: t } = e,
        n = i.useCallback(() => {
            (0, q.P0)({ text: $.intl.string(J.default.Wu8BK2), variant: "critical" });
        }, []),
        r = (0, b.A)(),
        a = (0, d.yK)([y.A], () => y.A.getActionsForDisplayType(t)),
        c = el(t),
        o = ei(t),
        { loadMore: x, isMoreLoading: m } = (0, w.A)({ onError: n }),
        h = (0, et.kN)().get(t),
        [f, j] = i.useState(C.PH),
        g = i.useCallback(() => {
            (j((e) => e + C.PH), x(t));
        }, [t, x]);
    B()(null != h, `No text for action type: ${t}`);
    let v = (t === C.NV.PURCHASES || t === C.NV.GIFTS) && null != o ? h.sectionHeader(o) : h.sectionHeader(c),
        A = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = a[t];
                if ((0, et.aq)(n)) {
                    let e = W.default.extractTimestamp(n.event_id),
                        t = (0, et.i6)(e, h.timestampFormatter);
                    return (0, l.jsx)(eW, { userId: n.entity_id, subText: t }, n.event_id);
                }
                if ((0, et.Is)(n)) return (0, l.jsx)(eH, { guildId: n.entity_id }, n.event_id);
                if ((0, et.u7)(n)) {
                    let e = y.A.getPurchaseInfo(n.entity_id);
                    return null == e
                        ? null
                        : (0, l.jsx)(
                              eY,
                              {
                                  skuId: e.sku_id,
                                  subscriptionPlanId: e.subscription_plan_id,
                                  total: e.total,
                                  currency: e.currency,
                              },
                              n.event_id,
                          );
                }
                if ((0, et.FT)(n)) {
                    let e = y.A.getGiftInfo(n.entity_id);
                    if (null == e) return null;
                    let {
                        skuId: t,
                        subscriptionPlanId: i,
                        price: r,
                        gifterUserId: s,
                        claimed: a,
                        offeredAt: d,
                        claimedAt: c,
                    } = {
                        skuId: e.sku_id,
                        subscriptionPlanId: e.subscription_plan_id,
                        price: e.price,
                        gifterUserId: e.gifter_user_id,
                        claimed: e.claimed,
                        offeredAt: e.offered_at,
                        claimedAt: e.claimed_at,
                    };
                    return (0, l.jsx)(
                        eD,
                        {
                            skuId: t,
                            subscriptionPlanId: i,
                            price: r,
                            gifterUserId: s,
                            claimed: a,
                            offeredAt: d,
                            claimedAt: c,
                        },
                        n.event_id,
                    );
                }
                return null;
            },
            [a, h.timestampFormatter],
        ),
        E = i.useCallback(
            () =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(G.E, { className: e9.bV, variant: "text-md/semibold", children: v }),
                        void 0 !== h.sectionDescription
                            ? (0, l.jsx)(G.E, {
                                  className: e9.yV,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: h.sectionDescription(r ?? !1),
                              })
                            : null,
                    ],
                }),
            [v, h, r],
        );
    if (0 === a.length) return null;
    let p = a.slice(0, f);
    return (0, l.jsxs)("div", {
        className: e9.A2,
        children: [
            E(),
            (0, l.jsx)("div", {
                className: e9.o1,
                style: { maxHeight: 65 * p.length },
                children: p.map((e, t) => A({ row: t })),
            }),
            p.length < c
                ? (0, l.jsx)(M.D, {
                      className: s()(e9.FQ, { [e9.r9]: m }),
                      onClick: g,
                      role: "button",
                      "aria-disabled": m,
                      children: m
                          ? (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, className: e9.u1 })
                          : (0, l.jsx)(G.E, {
                                className: e9.UX,
                                variant: "text-sm/bold",
                                children: $.intl.format(J.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - p.length, C.PH)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
function e6() {
    let e = (0, b.A)(),
        t = (0, D.vx)(),
        n = (0, en.y)(
            $.intl.formatToPlainString(J.default["7hqFl9"], { activeLinks: t.length }),
            $.intl.string(J.default["Q/D/0Q"]),
        ),
        i = (0, et.cV)(!!e),
        r = (0, D.v4)(i);
    return e && t.length > 1
        ? (0, l.jsx)(G.E, { variant: "eyebrow", children: r })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  e ? null : (0, l.jsx)(K.EyeIcon, { size: "xs", color: "currentColor", className: e9.Kk }),
                  (0, l.jsx)(G.E, { variant: "eyebrow", children: n }),
              ],
          });
}
let te = i.memo((e) => {
    let { userId: t, subText: n, avatarSize: i = P._3.SIZE_40, hideUserTag: r = !1 } = e,
        s = (0, z.F7)(t);
    return void 0 === s
        ? null
        : (0, l.jsxs)("div", {
              className: e9.iO,
              children: [
                  (0, l.jsx)(eq.H, { user: s, avatarSize: i }),
                  (0, l.jsxs)("div", {
                      className: e9.TK,
                      children: [
                          (0, l.jsx)(eX.A, { user: s, hideUserTag: r }),
                          void 0 !== n
                              ? (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: n })
                              : null,
                      ],
                  }),
              ],
          });
});
function tt() {
    let e = (0, D.GR)(),
        t = (0, d.bG)([y.A], () => y.A.getSelectedTeenId()),
        { selectTeenUser: n } = (0, w.A)({}),
        r = e.map((e) => ({ label: e.id, value: e.id })),
        s = i.useCallback((e) => (0, l.jsx)(te, { userId: e.value, avatarSize: P._3.SIZE_24 }), []);
    return (0, l.jsx)(U.Pw, {
        className: e9.Lt,
        renderOptionLabel: s,
        renderOptionValue: (e) => {
            let [t] = e;
            return s(t);
        },
        serialize: (e) => e,
        select: function (e) {
            (n(e), _.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: C.qb.SelectTeen }));
        },
        isSelected: (e) => e === t,
        options: r,
        "data-migration-pending": !0,
    });
}
function tn() {
    let e = (0, er.k)(),
        t = (0, b.A)(),
        n = (0, D.vx)(),
        i = (0, et.cV)(!!t),
        r = (0, D.v4)(i);
    return null === e ? null : t && 1 !== n.length ? (0, l.jsx)(tt, {}) : (0, l.jsx)(te, { userId: e, subText: r });
}
te.displayName = "FamilyCenterActivityCardAccountRow";
let tl = function () {
    let e = (0, et.Mo)(),
        t = (0, d.bG)([y.A], () => Object.values(C.NV).some((e) => y.A.getTotalForDisplayType(e) > 0)),
        n = (0, et.jp)(),
        i = (0, D.v4)(n);
    return (0, l.jsxs)("div", {
        className: e9.kL,
        children: [
            (0, l.jsxs)("div", { className: e9.vF, children: [(0, l.jsx)(e6, {}), (0, l.jsx)(e7, {})] }),
            (0, l.jsxs)("div", {
                className: e5.a,
                children: [
                    (0, l.jsx)("div", { className: e9.wx, children: (0, l.jsx)(tn, {}) }),
                    (0, l.jsxs)(c.B, {
                        gap: 32,
                        padding: 32,
                        fullWidth: !1,
                        children: [
                            (0, l.jsx)("div", {
                                className: e9.O2,
                                children: e
                                    .filter((e) => {
                                        let [t] = e;
                                        return t !== C.NV.GIFTS;
                                    })
                                    .map((e) => {
                                        let [t, n] = e;
                                        return (0, l.jsx)(
                                            ed,
                                            { displayType: t, header: n.tooltipHeader() },
                                            `counter-${t}`,
                                        );
                                    }),
                            }),
                            (0, l.jsxs)("div", {
                                className: e9.RJ,
                                children: [
                                    (0, l.jsx)(e8, {}),
                                    t
                                        ? e.map((e) => {
                                              let [t] = e;
                                              return (0, l.jsx)(e4, { displayType: t }, `${t}-list`);
                                          })
                                        : (0, l.jsx)(e$, { className: e9.RL, text: i ?? "" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var ti = n(373554);
function tr() {
    let e = (0, D.vx)(),
        t = (0, z.y3)(),
        { selectTeenUser: n } = (0, w.A)({}),
        r = e.map((e) => ({ label: e, value: e })),
        a = i.useCallback((e) => (0, l.jsx)(te, { userId: e.value, avatarSize: P._3.SIZE_24, hideUserTag: !0 }), []);
    return 0 === e.length
        ? null
        : (0, l.jsx)("div", {
              className: s()(ti.Gq, { [ti.wS]: e.length > 1 }),
              children:
                  e.length > 1
                      ? (0, l.jsx)(U.Pw, {
                            renderOptionLabel: a,
                            renderOptionValue: (e) => {
                                let [t] = e;
                                return a(t);
                            },
                            serialize: (e) => e,
                            select: function (e) {
                                n(e);
                            },
                            isSelected: (e) => e === t?.id,
                            options: r,
                            "data-migration-pending": !0,
                        })
                      : (0, l.jsx)(te, { userId: e[0], avatarSize: P._3.SIZE_24, hideUserTag: !0 }),
          });
}
function ts() {
    let { selectedTab: e, handleTabChange: t } = k(),
        n = i.useCallback(() => {
            t(C.u9.ACTIVITY);
        }, [t]);
    return (0, l.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, l.jsxs)(M.D, {
                className: ti.Gv,
                onClick: n,
                "aria-label": $.intl.string($.t.ybUZql),
                children: [
                    (0, l.jsx)(O.Z, { size: "sm", color: F.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    (0, l.jsx)(G.E, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: $.intl.string($.t["13/7kX"]),
                    }),
                ],
            }),
            (0, l.jsxs)(c.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, l.jsxs)(c.B, {
                        gap: 4,
                        className: ti.gn,
                        children: [
                            (0, l.jsx)(G.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: $.intl.string(J.default.RZqaJn),
                            }),
                            (0, l.jsx)(V.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: $.intl.string(e === C.u9.CONTENT_AND_SOCIAL ? $.t["+o1pDZ"] : $.t.OAuOHD),
                            }),
                        ],
                    }),
                    (0, l.jsx)(tr, {}),
                ],
            }),
        ],
    });
}
var ta = n(404778),
    td = n(110057);
let tc = function (e) {
    let { children: t, title: n, description: i } = e;
    return (0, l.jsxs)("div", {
        className: td.L1,
        children: [
            (null != n || null != i) &&
                (0, l.jsxs)("div", {
                    className: td.Km,
                    children: [
                        null != n &&
                            (0, l.jsx)(V.D, { variant: "heading-lg/semibold", color: "text-strong", children: n }),
                        null != i && (0, l.jsx)(G.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                    ],
                }),
            (0, l.jsx)("div", { className: td.Yq, children: t }),
            (0, l.jsx)(ta.c, { className: td.yj }),
        ],
    });
};
var tu = n(280668);
function to(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: tu.y, children: t });
}
var tx = n(389462),
    tm = n(464946),
    th = n(750994),
    tf = n(171316);
function tj() {
    let e = (0, tf.KK)(),
        t = (0, er.k)() ?? void 0,
        n = (0, tf.NZ)();
    return (0, l.jsx)(tm.h, {
        children: (0, l.jsx)(th.Ay, {
            title: n ? $.intl.string($.t.PMsfcH) : $.intl.string($.t.RAQUSN),
            note: n ? $.intl.string($.t.XXGmuB) : $.intl.string($.t.wbYDfT),
            value: !e,
            onChange: function (e) {
                tx.yr.updateControlledSetting(t, !e);
            },
        }),
    });
}
var tg = n(379257),
    tv = n(306537),
    tA = n(953298),
    tE = n(975571);
function tp() {
    let e = (0, er.k)() ?? void 0,
        t = (0, tf.KK)(),
        n = tx.ES.useControlledSetting(e);
    return (0, l.jsx)(tm.h, {
        children: (0, l.jsx)(th.Ay, {
            title: $.intl.string($.t["3o2ojh"]),
            value: !t && !n,
            onChange: (t) => {
                !t && (0, tA.w)()
                    ? tg.A.showAgeVerificationGetStartedModal({ entryPoint: tv.q1.MESSAGE_REQUESTS_SETTINGS })
                    : tx.ES.updateControlledSetting(e, !t);
            },
            disabled: t,
            note: $.intl.format($.t.IoztJ0, { helpdeskArticle: tE.A.getArticleURL(L.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
var tN = n(665260),
    tT = n(115063);
function tS() {
    let e = (0, er.k)() ?? void 0,
        t = tx.up.useControlledSetting(e),
        n = i.useMemo(() => (0, tT.Lx)(t), [t]);
    return null == e
        ? null
        : (0, l.jsxs)(to, {
              children: [
                  (0, l.jsx)(tm.h, {
                      children: (0, l.jsx)(th.Ay, {
                          title: $.intl.string($.t["7x9dyE"]),
                          value: n.all,
                          onChange: (t) => tx.up.updateControlledSetting(e, t ? L.yKI : L.yKI & ~L.dzt.NO_RELATION),
                      }),
                  }),
                  (0, l.jsx)(tm.h, {
                      children: (0, l.jsx)(th.Ay, {
                          title: $.intl.string($.t.NfeuZ3),
                          value: n.all || n.mutualFriends,
                          onChange: (n) =>
                              tx.up.updateControlledSetting(
                                  e,
                                  n
                                      ? tN.UI(t, L.dzt.MUTUAL_FRIENDS)
                                      : tN.iE(t, L.dzt.MUTUAL_FRIENDS, L.dzt.NO_RELATION),
                              ),
                      }),
                  }),
                  (0, l.jsx)(tm.h, {
                      children: (0, l.jsx)(th.Ay, {
                          title: $.intl.string($.t.qsMfsH),
                          value: n.all || n.mutualGuilds,
                          onChange: (n) =>
                              tx.up.updateControlledSetting(
                                  e,
                                  n ? tN.UI(t, L.dzt.MUTUAL_GUILDS) : tN.iE(t, L.dzt.MUTUAL_GUILDS, L.dzt.NO_RELATION),
                              ),
                      }),
                  }),
              ],
          });
}
var tI = n(444802),
    ty = n(875162),
    tb = n(873298),
    t_ = n(389737),
    tC = n(566769),
    tL = n(704724);
function tR() {
    let e = (0, er.k)(),
        t = (0, tf.xs)(),
        n = [
            { value: tb.TO.BLUR, label: $.intl.string($.t.S49Uad) },
            { value: tb.TO.BLOCK, label: $.intl.string($.t["D/157Y"]) },
        ];
    if (null == t || null == e) return null;
    function i(t) {
        null != e && (0, tL.Jz)(e, t);
    }
    let { explicitContentFriendDm: r, explicitContentNonFriendDm: s } = t;
    return (0, l.jsxs)(t_.E, {
        description: $.intl.string($.t.Wnojv1),
        children: [
            (0, l.jsx)(tC.A, {
                title: $.intl.string($.t["+uI23H"]),
                value: r,
                onChange: (e) => i({ explicitContentFriendDm: e }),
                options: n,
            }),
            (0, l.jsx)(tC.A, {
                title: $.intl.string($.t["Yh+HX1"]),
                value: s,
                onChange: (e) => i({ explicitContentNonFriendDm: e }),
                options: n,
            }),
        ],
    });
}
function tk() {
    let e = (0, er.k)(),
        t = (0, tf.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: n, goreContentNonFriendDm: i } = t;
    function r(t) {
        null != e && (0, tL.qY)(e, t);
    }
    let s = [
        { value: tb.TO.BLUR, label: $.intl.string($.t.S49Uad) },
        { value: tb.TO.BLOCK, label: $.intl.string($.t["D/157Y"]) },
    ];
    return (0, l.jsxs)(t_.E, {
        description: $.intl.string($.t.XgH9eh),
        children: [
            (0, l.jsx)(tC.A, {
                title: $.intl.string($.t["+uI23H"]),
                value: n,
                onChange: (e) => r({ goreContentFriendDm: e }),
                options: s,
            }),
            (0, l.jsx)(tC.A, {
                title: $.intl.string($.t["Yh+HX1"]),
                value: i,
                onChange: (e) => r({ goreContentNonFriendDm: e }),
                options: s,
            }),
        ],
    });
}
var tD = n(309318);
function tU() {
    let e = (0, tI.WX)(),
        t = [
            {
                id: "explicit-media-redaction",
                title: $.intl.string($.t.GYpoAq),
                component: () => (0, l.jsx)(tR, {}),
                orientation: "vertical",
            },
            {
                id: "gore-media-redaction",
                title: $.intl.string($.t["16/3Bi"]),
                component: () => (0, l.jsx)(tk, {}),
                orientation: "vertical",
            },
        ];
    return (0, l.jsxs)(tm.h, {
        children: [
            (0, l.jsx)(tm._, {
                header: $.intl.string($.t["Hj/But"]),
                description: $.intl.format($.t["H/Icz+"], { learnMoreLink: tE.A.getArticleURL(e) }),
            }),
            (0, l.jsx)(ty.A, { tabs: t, orientation: "vertical", tabsClassName: tD.v }),
        ],
    });
}
let tP = function () {
    return (0, l.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, l.jsx)(ts, {}),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(tc, { title: $.intl.string($.t.xVRG4P), children: (0, l.jsx)(tU, {}) }),
                    (0, l.jsx)(tc, {
                        title: $.intl.string($.t["y62Z/d"]),
                        children: (0, l.jsxs)(to, { children: [(0, l.jsx)(tj, {}), (0, l.jsx)(tp, {})] }),
                    }),
                    (0, l.jsx)(tc, { title: $.intl.string($.t["1Qn8iV"]), children: (0, l.jsx)(tS, {}) }),
                ],
            }),
        ],
    });
};
function tM() {
    let { hasConsented: e, updateConsent: t } = (0, tf.lH)(L.YAq.PERSONALIZATION);
    return (0, l.jsx)(tm.h, {
        children: (0, l.jsx)(th.Ay, {
            title: $.intl.string(J.default.XMPqUx),
            note: $.intl.format(J.default.Imp6Ns, {
                helpdeskArticle: tE.A.getArticleURL(L.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
function tO() {
    let e = (0, er.k)() ?? void 0,
        t = tx.yH.useControlledSetting(e),
        n = tx.kf.useControlledSetting(e);
    return null == e
        ? null
        : (0, l.jsx)(tm.h, {
              children: (0, l.jsx)(th.Ay, {
                  title: $.intl.string($.t.CyLYKZ),
                  note: $.intl.format(J.default["6mK5Pz"], {
                      helpdeskArticle: tE.A.getArticleURL(L.MVz.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !t,
                  onChange: (t) => tx.yH.updateControlledSetting(e, !t),
                  disabled: n,
              }),
          });
}
function tF() {
    let e = (0, er.k)() ?? void 0,
        t = tx.kf.useControlledSetting(e);
    return (0, l.jsx)(tm.h, {
        children: (0, l.jsx)(th.Ay, {
            title: $.intl.string(J.default.ZhaNu8),
            note: $.intl.format(J.default.cnCK6b, {
                helpdeskArticle: tE.A.getArticleURL(L.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => tx.kf.updateControlledSetting(e, !t),
        }),
    });
}
function tG() {
    let { hasConsented: e, updateConsent: t } = (0, tf.lH)(L.YAq.USAGE_STATISTICS);
    return (0, l.jsx)(tm.h, {
        children: (0, l.jsx)(th.Ay, {
            title: $.intl.string(J.default.HjstRR),
            note: $.intl.format(J.default.Z5yJZy, { helpdeskArticle: tE.A.getArticleURL(L.MVz.DATA_PRIVACY_CONTROLS) }),
            value: e,
            onChange: t,
        }),
    });
}
let tV = function () {
    return (0, l.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, l.jsx)(ts, {}),
            (0, l.jsx)("div", {
                children: (0, l.jsxs)(tc, {
                    title: $.intl.string($.t.SRZyHg),
                    children: [(0, l.jsx)(tG, {}), (0, l.jsx)(tF, {}), (0, l.jsx)(tO, {}), (0, l.jsx)(tM, {})],
                }),
            }),
        ],
    });
};
var tw = n(582394),
    tz = n(141006),
    tH = n(821609),
    tB = n(17928),
    tY = n(173936),
    tZ = n(964486),
    tq = n(957565),
    tK = n(765548),
    tW = n(647219);
function tX() {
    return (0, D.xr)() ? null : (0, l.jsx)(tQ, {});
}
function tQ() {
    let e,
        t = i.useCallback(() => {
            (0, q.P0)({ text: $.intl.string(J.default.Wu8BK2), variant: "critical" });
        }, []),
        { getLinkCode: r } = (0, w.A)(),
        s = (0, D.VE)(),
        a = (0, tB.bG)([y.A], () => y.A.getLinkCodeExpiresAt());
    ((0, tZ.Ay)(() => {
        r();
    }),
        (e = (0, tK.A)(r)),
        i.useEffect(() => {
            if (null == a) return;
            let t = a - Date.now();
            if (t <= 0) return void e();
            let n = setTimeout(e, t);
            return () => clearTimeout(n);
        }, [a, e]));
    let d = i.useCallback(() => {
            ((0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("262546"),
                    n.e("776915"),
                    n.e("595429"),
                    n.e("65407"),
                    n.e("748370"),
                    n.e("689419"),
                    n.e("94570"),
                ]).then(n.bind(n, 414833));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        onLoadError: t,
                        title: $.intl.string(J.default.aCUVfL),
                        body: $.intl.format(J.default["2O6ltn"], {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    });
            }),
                _.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: C.qb.ShowQRCodeModal }));
        }, [t]),
        c = i.useCallback(() => {
            null != s &&
                (_.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: C.qb.CopyLink }),
                (0, tq.C)(s, () => (0, q.P0)({ text: $.intl.string($.t["L/PwZf"]), variant: "success" })));
        }, [s]);
    return (0, l.jsxs)("div", {
        className: tW.U,
        children: [
            (0, l.jsx)(tH.$, { icon: tz.y, variant: "primary", text: $.intl.string(J.default["m/3urB"]), onClick: d }),
            (0, l.jsx)(tH.$, {
                icon: tY.LinkIcon,
                variant: "secondary",
                text: $.intl.string($.t.WqhZss),
                disabled: null == s,
                onClick: c,
            }),
        ],
    });
}
var tJ = n(769062);
function t$() {
    let e = (0, D.Li)(),
        t = (0, b.A)(),
        { handleTabChange: n } = k();
    return (0, D.xr)() || (t && e)
        ? null
        : (0, l.jsx)("div", {
              className: tJ.x6,
              children: t
                  ? (0, l.jsx)(tH.$, {
                        variant: "primary",
                        text: $.intl.string($.t.LhlgY9),
                        onClick: () => n(C.u9.REQUESTS),
                    })
                  : (0, l.jsx)(tX, {}),
          });
}
let t0 = function () {
    let e = (0, b.A)(),
        t = (0, en.y)($.intl.string(J.default["T7GyW+"]), $.intl.string(J.default.goKE2b)),
        n = (0, en.y)(
            $.intl.format(J.default.MXjDSv, { articleLink: "https://support.discord.com/hc/articles/14155060633623" }),
            $.intl.format(J.default.EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" }),
        );
    return (0, l.jsxs)("div", {
        className: s()(tJ.kL, e5.a),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", {
                        children: (0, l.jsxs)("div", {
                            className: tJ.TK,
                            children: [
                                (0, l.jsx)(V.D, {
                                    variant: "heading-xl/medium",
                                    children: (0, l.jsx)(es.F, { children: t }),
                                }),
                                (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(t$, {}),
                ],
            }),
            (0, l.jsx)("div", {
                className: tJ.F0,
                children: (0, l.jsx)("img", {
                    src: e ? "/assets/bc9100f5e54f39a8.svg" : "/assets/12ee06c12c73e78e.svg",
                    alt: $.intl.string(J.default.ffg6xd),
                }),
            }),
        ],
    });
};
var t1 = n(299628),
    t3 = n(324149);
let t2 = function (e) {
    let { icon: t, iconClassName: n, header: i, description: r } = e;
    return (0, l.jsxs)("div", {
        className: s()(t3.kL, e5.a),
        children: [
            (0, l.jsx)("div", {
                className: t3.n1,
                children: (0, l.jsx)(t, {
                    className: s()(t3.Kk, n),
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(V.D, {
                        variant: "heading-md/bold",
                        className: t3.wx,
                        children: (0, l.jsx)(es.F, { children: i }),
                    }),
                    (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: r }),
                ],
            }),
        ],
    });
};
var t8 = n(28863),
    t9 = n(683071),
    t5 = n(987197),
    t7 = n(822585);
function t4() {
    (0, $.useSyncMessages)(J.messagesLoader);
    let e = (0, t5.f)(),
        t = (0, t7.L)()?.daysRemaining ?? null;
    if (!e || null == t || t < 0) return null;
    function n(e, t) {
        return (0, l.jsx)(
            t8.Anchor,
            {
                href: "https://support.discord.com/hc/articles/14155060633623",
                target: "_blank",
                rel: "noreferrer noopener",
                children: e,
            },
            t,
        );
    }
    return (0, l.jsx)("div", {
        "data-parental-consent-notice": !0,
        children: (0, l.jsx)(t9.w, {
            type: "warning",
            message:
                0 === t
                    ? $.intl.format(J.default.S5kmfO, { learnMoreHook: n })
                    : $.intl.format(J.default["5jm+T3"], { count: t, learnMoreHook: n }),
            role: "static",
        }),
    });
}
var t6 = n(847374),
    ne = n(308528),
    nt = n(922529),
    nn = n(780964),
    nl = n(830543),
    ni = n(766075),
    nr = n(219893),
    ns = n(465323),
    na = n(617617),
    nd = n(361157);
function nc(e) {
    let t = (0, tB.bG)([y.A], () => y.A.getMonthlyPurchases());
    return (function (e, t) {
        if (null == e) return { kind: "off" };
        if (0 === e.amount) return { kind: "blocked" };
        let n = e.currency,
            l = (0, Q.CE)((0, Q.$g)(e.amount, n), ef.WT.MONTH, 1);
        if (t >= e.amount) return { kind: "spent", monthlyText: l };
        let i = ns.yR[e.currency] ?? 2,
            r = e.amount - t;
        return r <= 10 * 10 ** i
            ? {
                  kind: "close-to-limit",
                  monthlyText: l,
                  remainingText: $.intl.formatToPlainString(J.default["+Q+bU1"], { amount: (0, Q.$g)(r, n) }),
              }
            : { kind: "on", monthlyText: l };
    })(e, t?.total_amount ?? 0);
}
var nu = n(534654),
    no = n(980707),
    nx = n(477782),
    nm = n(943255),
    nh = n(922016),
    nf = n(408278),
    nj = n(365199),
    ng = n(193249),
    nv = n(95396),
    nA = n(585634);
function nE(e) {
    let { closePopout: t, onEdit: n, onDelete: i } = e;
    return (0, l.jsxs)(no.W, {
        "data-menu-migrated": !0,
        "aria-label": $.intl.string($.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, l.jsx)(nx.Dr, { id: "edit", label: $.intl.string(J.default.b3DPqg), action: n }),
            (0, l.jsx)(nx.Dr, { id: "delete", label: $.intl.string(J.default.d8pizZ), color: "danger", action: i }),
        ],
    });
}
function np(e) {
    let { rule: t, teenId: r, readOnly: s = !1 } = e,
        a = i.useRef(null),
        d = t?.enabled ?? !0,
        u = (0, nr.li)(t),
        o = (0, nr.n1)(t.days);
    function x() {
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("58008"), n.e("777848"), n.e("639231")]).then(
                n.bind(n, 154434),
            );
            return (n) => (0, l.jsx)(e, { ...n, teenId: r, rule: t });
        });
    }
    function m() {
        (0, nv.CS)(r, t.ruleId);
    }
    return (0, l.jsxs)(c.B, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        children: [
            (0, l.jsx)("div", { className: nA.X, children: (0, l.jsx)(nm.Z, { size: "md" }) }),
            (0, l.jsxs)(c.B, {
                direction: "vertical",
                style: { flex: 1, minWidth: 0 },
                gap: 4,
                children: [
                    (0, l.jsx)(G.E, { variant: "text-md/medium", children: u }),
                    (0, l.jsx)(G.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
                ],
            }),
            (0, l.jsxs)(c.B, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                fullWidth: !1,
                children: [
                    !s &&
                        (0, l.jsx)(nh.Y, {
                            targetElementRef: a,
                            renderPopout: (e) => (0, l.jsx)(nE, { ...e, onEdit: x, onDelete: m }),
                            position: "bottom",
                            align: "right",
                            animation: nh.Y.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, l.jsx)(nf.K, {
                                    buttonRef: a,
                                    size: "sm",
                                    icon: nj.MoreHorizontalIcon,
                                    variant: "icon-only",
                                    "aria-label": $.intl.string($.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    onClick: (e) => {
                                        (e.stopPropagation(), t(e));
                                    },
                                });
                            },
                        }),
                    (0, l.jsx)("div", {
                        className: nA.m,
                        children: (0, l.jsx)(ng.d, {
                            checked: d,
                            label: $.intl.string(J.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: function () {
                                (0, nv.Um)(r, t.ruleId, { enabled: !d });
                            },
                            hasIcon: !0,
                            disabled: s,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var nN = n(12350);
function nT(e) {
    let { title: t, subtitle: n, buttonText: i, onButtonPress: r, readOnly: s = !1 } = e;
    return (0, l.jsxs)(c.B, {
        padding: { top: 12, bottom: 12 },
        justify: "space-between",
        direction: "horizontal",
        align: "center",
        gap: 32,
        children: [
            (0, l.jsxs)(c.B, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, l.jsx)(G.E, { variant: "text-md/medium", children: t }),
                    null != n && (0, l.jsx)(G.E, { variant: "text-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? nN.nh : void 0,
                children: (0, l.jsx)(tH.$, { text: i, onClick: r, variant: "secondary", size: "sm", disabled: s }),
            }),
        ],
    });
}
function nS(e, t, i) {
    return (0, l.jsx)(nT, {
        title: $.intl.string(J.default.gMeekL),
        subtitle: (function (e) {
            switch (e.kind) {
                case "off":
                    return $.intl.string(J.default.YEnpaj);
                case "on":
                    return e.monthlyText;
                case "close-to-limit":
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            e.monthlyText,
                            " \xb7 ",
                            (0, l.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-warning",
                                tag: "span",
                                children: e.remainingText,
                            }),
                        ],
                    });
                case "spent":
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            e.monthlyText,
                            " \xb7 ",
                            (0, l.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                tag: "span",
                                children: $.intl.string(J.default.Q2msVQ),
                            }),
                        ],
                    });
                case "blocked":
                    return (0, l.jsx)(G.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        tag: "span",
                        children: $.intl.string(J.default.FUu2b0),
                    });
            }
        })(t),
        buttonText: $.intl.string($.t.bt75uw),
        onButtonPress: () => {
            (0, Y.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("781173"), n.e("387096")]).then(n.bind(n, 638155));
                return (n) => (0, l.jsx)(t, { ...n, teenId: e });
            });
        },
        readOnly: i,
    });
}
function nI(e) {
    let { teenId: t } = e;
    return nS(
        t,
        nc(
            (0, tB.bG)(
                [na.A],
                () => {
                    let e = na.A.settings.safetySettings?.spendingLimitSettings?.oneTimePurchaseLimit;
                    return null == e ? null : { amount: Number(e.amount), currency: e.currency };
                },
                void 0,
                nd.Ky,
            ),
        ),
        !0,
    );
}
function ny(e) {
    let { teenId: t } = e,
        n = tx.fD.useControlledSetting(t);
    return nS(t, nc(n));
}
function nb(e) {
    let { teenId: t, readOnly: r = !1 } = e,
        s = (0, z.y3)(),
        a = s?.restrictedSchedule?.rules ?? [],
        d = (0, nr.I2)(a),
        [u, o] = i.useState(d.length > 0);
    function x() {
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("58008"), n.e("777848"), n.e("639231")]).then(
                n.bind(n, 154434),
            );
            return (n) => (0, l.jsx)(e, { ...n, teenId: t });
        });
    }
    return (i.useEffect(() => {
        d.length > 0 && o(!0);
    }, [d.length]),
    0 === d.length)
        ? (0, l.jsx)(nT, {
              title: $.intl.string(J.default["1Op+NP"]),
              buttonText: $.intl.string(J.default.OwFF4o),
              onButtonPress: x,
              readOnly: r,
          })
        : (0, l.jsxs)(c.B, {
              direction: "vertical",
              gap: 0,
              children: [
                  (0, l.jsxs)(M.D, {
                      className: nN.dV,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, l.jsx)("div", {
                              className: nN.WB,
                              children: (0, l.jsxs)(c.B, {
                                  direction: "vertical",
                                  gap: 4,
                                  children: [
                                      (0, l.jsx)(G.E, {
                                          variant: "text-md/medium",
                                          children: $.intl.string(J.default["1Op+NP"]),
                                      }),
                                      (0, l.jsx)(G.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: $.intl.formatToPlainString(J.default.XfwcpX, { count: d.length }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: nN.pt,
                              children: (0, l.jsx)(t6.a, {
                                  size: "sm",
                                  color: "currentColor",
                                  className: `${nN.ai} ${u ? nN.hg : ""}`,
                              }),
                          }),
                      ],
                  }),
                  u &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(c.B, {
                                  direction: "vertical",
                                  gap: 16,
                                  padding: { top: 24, bottom: 24 },
                                  children: d.map((e) => (0, l.jsx)(np, { rule: e, teenId: t, readOnly: r }, e.ruleId)),
                              }),
                              (0, l.jsx)("div", {
                                  className: r ? nN.nh : void 0,
                                  children: (0, l.jsx)(tH.$, {
                                      text: $.intl.string(J.default.OwFF4o),
                                      onClick: x,
                                      variant: "secondary",
                                      size: "sm",
                                      disabled: r,
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
function n_() {
    let e = (0, D.vx)(),
        t = (0, z.y3)();
    function n() {
        (0, ni.openUserSettings)(nn.X.MESSAGING_PERMISSIONS_PANEL);
    }
    return (0, l.jsxs)(c.B, {
        direction: "vertical",
        gap: 0,
        children: [
            (0, l.jsxs)(c.B, {
                padding: { bottom: 12 },
                justify: "space-between",
                direction: "horizontal",
                align: "center",
                gap: 32,
                children: [
                    (0, l.jsxs)(c.B, {
                        direction: "vertical",
                        gap: 4,
                        children: [
                            (0, l.jsx)(G.E, { variant: "text-sm/semibold", children: $.intl.string(J.default.ahKIJO) }),
                            (0, l.jsx)(G.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children: $.intl.format(J.default.X9rW0j, {
                                    openSettingsHook: (e, t) => (0, l.jsx)(t8.Anchor, { onClick: n, children: e }, t),
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(tH.$, {
                        text: $.intl.formatToPlainString(J.default.ggcjPR, { count: e.length }),
                        onClick: function () {
                            ((0, nl.default)(), ne.A.openPrivateChannel({ recipientIds: e }));
                        },
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            t?.id != null &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(nt.A, { className: nN.yF }),
                        (0, l.jsx)(nI, { teenId: t.id }),
                        (0, l.jsx)(nt.A, { className: nN.yF }),
                        (0, l.jsx)(nb, { teenId: t.id, readOnly: !0 }),
                    ],
                }),
        ],
    });
}
function nC() {
    let e = (0, z.y3)(),
        t = (0, z.tl)(),
        { handleTabChange: n } = k();
    return (
        i.useEffect(() => {
            e?.id != null && t && I.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(c.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, l.jsx)(G.E, { variant: "text-sm/semibold", children: $.intl.string(J.default.ahKIJO) }),
                        (0, l.jsx)(G.E, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: $.intl.string(J.default.Sv236e),
                        }),
                    ],
                }),
                (0, l.jsx)(nT, {
                    title: $.intl.string($.t["+o1pDZ"]),
                    buttonText: $.intl.string($.t.bt75uw),
                    onButtonPress: () => {
                        n(C.u9.CONTENT_AND_SOCIAL);
                    },
                }),
                (0, l.jsx)(nt.A, { className: nN.yF }),
                (0, l.jsx)(nT, {
                    title: $.intl.string($.t.OAuOHD),
                    buttonText: $.intl.string($.t.bt75uw),
                    onButtonPress: () => {
                        n(C.u9.DATA_AND_PRIVACY);
                    },
                }),
                e?.id != null &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(nt.A, { className: nN.yF }),
                            (0, l.jsx)(ny, { teenId: e.id }),
                            (0, l.jsx)(nt.A, { className: nN.yF }),
                            (0, l.jsx)(nb, { teenId: e.id }),
                        ],
                    }),
            ],
        })
    );
}
function nL() {
    let e = (0, nu.A)();
    return 0 === (0, D.vx)().length
        ? null
        : (0, l.jsx)("div", { className: nN.kL, children: e ? (0, l.jsx)(n_, {}) : (0, l.jsx)(nC, {}) });
}
var nR = n(768775);
let nk = function () {
    let e = (0, D.vx)().length > 0,
        t = (0, d.bG)([eZ.default], () => eZ.default.getCurrentUser()),
        n = (0, en.y)($.intl.string(J.default["5RZ8Tq"]), $.intl.string(J.default.bmhCnL)),
        i = (0, en.y)($.intl.string(J.default.XKnFFq), $.intl.string(J.default["68zfxD"])),
        r = (0, en.y)($.intl.string(J.default["Rm/6a0"]), $.intl.string(J.default["1xPTwE"]));
    return void 0 === t
        ? null
        : (0, l.jsxs)("div", {
              className: nR.kL,
              children: [
                  (0, l.jsx)(t4, {}),
                  e
                      ? null
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", { className: nR.vK, children: (0, l.jsx)(t0, {}) }),
                                (0, l.jsxs)("div", {
                                    className: nR.yk,
                                    children: [
                                        (0, l.jsx)(t2, {
                                            icon: tw.M,
                                            header: $.intl.string(J.default["001l3m"]),
                                            description: n,
                                        }),
                                        (0, l.jsx)(t2, {
                                            icon: K.EyeIcon,
                                            header: $.intl.string(J.default.yipAeP),
                                            description: i,
                                        }),
                                        (0, l.jsx)(t2, {
                                            icon: tz.y,
                                            header: $.intl.string(J.default.hhOuMe),
                                            description: r,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  e ? (0, l.jsx)(tl, {}) : (0, l.jsx)(t1.A, { showSectionDescriptions: !0 }),
                  (0, l.jsx)(nL, {}),
              ],
          });
};
n(801541);
var nD = n(889137),
    nU = n(837381),
    nP = n(62617);
function nM(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: s, width: a, height: d, className: c, style: u } = e,
        o = i.useMemo(
            () => (0, nP.H)({ width: a, height: d, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [a, d, u],
        );
    return (0, l.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/bb4093f4ae937ad09bc359b162988c3cbb7d49d924073fee7d66a763e738fc67.svg",
        className: (0, nP.Z)(c),
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: s ?? "img",
    });
}
var nO = n(475825),
    nF = n(260762),
    nG = n(485947),
    nV = n(426190),
    nw = n(789645),
    nz = n(866665),
    nH = n(883005);
function nB(e) {
    let { icon: t, tooltip: n, onClick: i, className: r } = e;
    return (0, l.jsx)(nz.m, {
        text: n,
        children: (0, l.jsx)(M.D, {
            "aria-label": n,
            onClick: function (e) {
                (e.preventDefault(), e.stopPropagation(), i(e));
            },
            className: s()(nH.hP, r),
            children: (0, l.jsx)(t, { className: nH.Kk, color: "currentColor" }),
        }),
    });
}
var nY = n(854627),
    nZ = n(19575),
    nq = n(218750);
let nK = nZ.Ay.getEnableHardwareAcceleration() ? eO.Js : eO.eu;
function nW(e) {
    let { otherUser: t, status: n } = e,
        i = (0, D.XC)(t.id, n),
        {
            avatarSrc: r,
            avatarDecorationSrc: s,
            eventHandlers: a,
        } = (0, nY.A)({ userId: t.id, size: P._3.SIZE_40, animateOnHover: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ...a,
                children: (0, l.jsx)(nK, {
                    className: nq.my,
                    src: r,
                    avatarDecoration: s,
                    size: P._3.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, l.jsxs)("div", {
                className: nq.yt,
                children: [
                    (0, l.jsx)("div", { className: nq.Vx, children: (0, l.jsx)(eX.A, { user: t }) }),
                    (0, l.jsx)(G.E, { color: "text-muted", variant: "text-xs/normal", children: i }),
                ],
            }),
        ],
    });
}
var nX = n(856087);
function nQ(e) {
    let { user: t } = e,
        r = (0, d.bG)([eZ.default], () => eZ.default.getCurrentUser()),
        s = i.useCallback(() => {
            (B()(void 0 !== r, "User must be logged in to accept a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("321855"), n.e("943139")]).then(n.bind(n, 179950));
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: r, otherUser: t });
                }));
        }, [r, t]);
    return (0, l.jsxs)("div", {
        className: nX.kL,
        children: [
            (0, l.jsx)("div", { className: nX.zH, children: (0, l.jsx)(nW, { otherUser: t, status: C.Ef.ACTIVE }) }),
            (0, l.jsx)("div", {
                className: nX.o1,
                children: (0, l.jsx)(nB, { icon: nw.P, tooltip: $.intl.string(J.default.l20ZZp), onClick: s }),
            }),
        ],
    });
}
var nJ = n(933832);
function n$(e) {
    let { user: t } = e,
        r = (0, b.A)(),
        s = (0, D.xr)(),
        a = (0, d.bG)([eZ.default], () => eZ.default.getCurrentUser()),
        c = i.useCallback(() => {
            (B()(void 0 !== a, "User must be logged in to accept a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("916131"), n.e("155738"), n.e("331385")]).then(
                        n.bind(n, 58144),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]),
        u = i.useCallback(() => {
            (B()(void 0 !== a, "User must be logged in to decline a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("916131"), n.e("155738"), n.e("384811")]).then(
                        n.bind(n, 389094),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]),
        o = i.useCallback(() => {
            (B()(void 0 !== a, "User must be logged in to decline a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("916131"), n.e("155738"), n.e("817219")]).then(
                        n.bind(n, 187278),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]);
    return (0, l.jsxs)("div", {
        className: nX.kL,
        children: [
            (0, l.jsx)("div", { className: nX.zH, children: (0, l.jsx)(nW, { otherUser: t, status: C.Ef.PENDING }) }),
            (0, l.jsx)("div", {
                className: nX.o1,
                children: r
                    ? (0, l.jsx)(nB, { icon: nw.P, tooltip: $.intl.string(J.default.e5iHmZ), onClick: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              s
                                  ? null
                                  : (0, l.jsx)(nB, {
                                        icon: nJ.CheckmarkLargeIcon,
                                        tooltip: $.intl.string(J.default.krWQZK),
                                        onClick: c,
                                    }),
                              (0, l.jsx)(nB, { icon: nw.P, tooltip: $.intl.string(J.default.bBDeNI), onClick: u }),
                          ],
                      }),
            }),
        ],
    });
}
var n0 = n(615300),
    n1 = n(559106),
    n3 = n(402860),
    n2 = n(487565);
let n8 = function (e) {
    let { userId: t, children: n, isLast: r, className: a } = e,
        [d, c] = i.useState(!1),
        { analyticsLocations: u } = (0, v.Ay)(),
        o = i.useCallback(() => {
            (0, n3.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u });
        }, [t, u]);
    function x() {
        c(!0);
    }
    function m() {
        c(!1);
    }
    return (0, l.jsx)(nU.tG, {
        id: t,
        children: (e) =>
            (0, l.jsx)(n1.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(n0.A.div, {
                    style: { opacity: 1 },
                    className: s()(n2.KG, a, { [n2.HV]: r, [n2.vu]: d }),
                    onMouseEnter: x,
                    onMouseLeave: m,
                    onClick: o,
                    ...e,
                    children: n(d),
                }),
            }),
    });
};
var n9 = n(327337),
    n5 = n(375980);
function n7(e) {
    let { header: t, description: n, stepNumber: i } = e;
    return (0, l.jsxs)("div", {
        className: n5.PM,
        children: [
            (0, l.jsx)("div", {
                className: n5.CD,
                children: (0, l.jsx)(V.D, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, l.jsx)(es.F, { children: i }),
                }),
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(V.D, { variant: "heading-sm/bold", children: (0, l.jsx)(es.F, { children: t }) }),
                    (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
                ],
            }),
        ],
    });
}
function n4() {
    return (0, l.jsxs)("div", {
        className: s()(n5.aP, e5.a, n5.dO, n5.p2),
        children: [
            (0, l.jsxs)("div", {
                className: n5.Np,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(V.D, {
                                className: eJ.QB,
                                variant: "heading-xl/medium",
                                children: (0, l.jsx)(es.F, { children: $.intl.string(J.default.pHEnV5) }),
                            }),
                            (0, l.jsx)(G.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: eJ.SX,
                                children: $.intl.string(J.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, l.jsx)(nM, { alt: "", ariaHidden: !0, width: 224, className: n5._u }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: n5.Ci,
                children: [
                    (0, l.jsx)(n7, {
                        header: $.intl.string(J.default["7xxAni"]),
                        description: $.intl.string(J.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, l.jsx)(n7, {
                        header: $.intl.string(J.default["AXgx+a"]),
                        description: $.intl.string(J.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, l.jsx)(n7, {
                        header: $.intl.string(J.default.MZn1tG),
                        description: $.intl.string(J.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function n6() {
    let e = (0, D.xr)();
    return (0, l.jsxs)("div", {
        className: s()(n5.aP, e5.a, n5.dO),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(V.D, {
                        className: eJ.QB,
                        variant: "heading-xl/medium",
                        children: (0, l.jsx)(es.F, { children: $.intl.string(J.default.zUCWEL) }),
                    }),
                    (0, l.jsx)(G.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: eJ.SX,
                        children: $.intl.format(J.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, l.jsx)(tX, {}),
                ],
            }),
            (0, l.jsx)(nM, { alt: "", ariaHidden: !0, width: 224, className: n5._u }),
        ],
    });
}
function le(e) {
    let { sectionType: t, sectionTitle: n, requests: r } = e,
        s = i.useRef(null),
        a = `${t}-list`,
        d = (0, nF.A)(a),
        c = i.useCallback(
            (e) => {
                let { row: n, listIndex: i } = e,
                    s = r[n],
                    a = i === r.length;
                return null == s
                    ? null
                    : (0, l.jsx)(
                          n8,
                          {
                              userId: s.id,
                              isLast: a,
                              children: () =>
                                  t === C.Ef.ACTIVE ? (0, l.jsx)(nQ, { user: s }) : (0, l.jsx)(n$, { user: s }),
                          },
                          s.id,
                      );
            },
            [r, t],
        ),
        u = i.useCallback(
            () =>
                (0, l.jsx)(
                    nG.A,
                    {
                        children: (0, l.jsx)(G.E, {
                            className: eJ.QB,
                            variant: "eyebrow",
                            color: "text-default",
                            children: n,
                        }),
                    },
                    "title",
                ),
            [n],
        );
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(nU.hD, {
            navigator: d,
            children: (0, l.jsx)(nU.PR, {
                children: (e) => {
                    let { ref: t, role: i, ...d } = e;
                    return (0, l.jsx)(
                        nO.OZ,
                        {
                            innerRole: i,
                            innerAriaLabel: n,
                            ref: (e) => {
                                ((s.current = e), (t.current = e?.getScrollerNode() ?? null));
                            },
                            sectionHeight: C.h4,
                            rowHeight: C.Gg,
                            renderSection: u,
                            renderRow: c,
                            sections: [r.length],
                            chunkSize: 30,
                            fade: !0,
                            ...d,
                        },
                        a,
                    );
                },
            }),
        }),
    });
}
function lt() {
    let e = (0, b.A)(),
        t = (0, D.GR)(),
        n = e ? C.Y7 : C.kp,
        i = { count: t.length, max: n },
        r = (0, en.y)(
            $.intl.formatToPlainString(J.default["+tnO34"], i),
            $.intl.formatToPlainString(J.default["pu6/U0"], i),
        );
    return t.length > 0
        ? (0, l.jsx)(le, { sectionType: C.Ef.ACTIVE, sectionTitle: r, requests: t })
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(G.E, { className: eJ.QB, variant: "eyebrow", color: "text-default", children: r }),
                  (0, l.jsx)("div", {
                      className: n5.aP,
                      children: (0, l.jsx)(G.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          children: $.intl.string(J.default.C4ScLD),
                      }),
                  }),
              ],
          });
}
function ln() {
    let e = (0, D.xr)(),
        t = (0, b.A)() ? C.Y7 : C.kp,
        n = (0, en.y)(
            $.intl.formatToPlainString(J.default["1/PzIj"], { maxConnections: t }),
            $.intl.formatToPlainString(J.default.RcTgiE, { maxConnections: t }),
        );
    return e
        ? (0, l.jsx)("div", {
              className: n5.rv,
              children: (0, l.jsx)(G.E, { variant: "text-xxs/medium", color: "text-muted", children: n }),
          })
        : null;
}
function ll() {
    let e = (0, nV.N)(),
        t = (0, nV.z)(),
        n = (0, nD.YW)({ helpline: e, throughline: t })
            .with({ helpline: !0 }, () =>
                $.intl.format(J.default["KOwsf/"], {
                    helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                }),
            )
            .with({ throughline: !0 }, () => $.intl.format(J.default["6tsC8u"], { helpLink: n9.CL }))
            .otherwise(() => null);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(V.D, {
                      className: n5.rH,
                      variant: "heading-sm/semibold",
                      children: (0, l.jsx)(es.F, { children: $.intl.string(J.default["7/tVhv"]) }),
                  }),
                  (0, l.jsx)(G.E, { variant: "text-xs/medium", color: "text-muted", children: n }),
              ],
          });
}
function li() {
    let e = (0, D.xk)(C.Ef.PENDING),
        t = (0, en.y)(
            $.intl.formatToPlainString(J.default.IkAgkG, { count: e.length }),
            $.intl.formatToPlainString(J.default.Q8XnAa, { count: e.length }),
        );
    return 0 === e.length ? null : (0, l.jsx)(le, { sectionType: C.Ef.PENDING, sectionTitle: t, requests: e });
}
let lr = function () {
    let e = (0, b.A)();
    return (0, l.jsxs)("div", {
        className: n5.kL,
        children: [
            (0, l.jsx)(t4, {}),
            e ? (0, l.jsx)(n4, {}) : (0, l.jsx)(n6, {}),
            (0, l.jsx)(lt, {}),
            (0, l.jsx)(li, {}),
            (0, l.jsx)(ln, {}),
            (0, l.jsx)(ll, {}),
        ],
    });
};
var ls = n(561028),
    la = n(946015),
    ld = n(270003),
    lc = n(993077),
    lu = n(935286),
    lo = n(840559),
    lx = n(997187),
    lm = n(723923),
    lh = n(629143);
let lf = function () {
    let e = T.dm.useSetting(),
        { categories: t, initialized: n } = (0, tB.cf)([lx.A], () => lx.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == n && (0, lo.cR)();
        }, [n]),
        (0, l.jsx)("div", {
            className: lh.kL,
            children: (0, l.jsxs)(ld.n, {
                label: $.intl.string(J.default.USIXU7),
                children: [
                    (0, l.jsx)(ng.d, {
                        checked: e,
                        description: $.intl.string(J.default["5MdB3j"]),
                        onChange: T.dm.updateSetting,
                        label: $.intl.string(J.default.zkEceS),
                    }),
                    e
                        ? (0, l.jsx)(lc.Z, {
                              className: lh.MT,
                              type: lc.Z.Types.CUSTOM,
                              outline: !0,
                              children: (0, l.jsxs)(la.s, {
                                  justify: la.s.Justify.END,
                                  children: [
                                      (0, l.jsx)(la.s.Child, {
                                          children: (0, l.jsx)(G.E, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: $.intl.string(J.default.xAVm7K),
                                          }),
                                      }),
                                      (0, l.jsx)(M.D, {
                                          children: (0, l.jsx)(ls.N_, {
                                              onClick: nl.default,
                                              to: { pathname: L.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: $.intl.string(J.default.cUIXFY),
                                          }),
                                      }),
                                      (0, l.jsx)(x.fk, { icon: lu.E, className: lh.UE, disableColor: !0 }),
                                  ],
                              }),
                          })
                        : null,
                    (0, l.jsx)(ng.d, {
                        checked: !!t[lm.HO.FAMILY_CENTER_DIGEST],
                        description: $.intl.string(J.default.y34S46),
                        onChange: function (e) {
                            (0, lo.CA)(lm.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: $.intl.string(J.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
var lj = n(731738),
    lg = n(612200),
    lv = n(807393),
    lA = n(210714),
    lE = n(33666),
    lp = n(204925);
function lN(e) {
    let { location: t, onMountEffect: n } = e,
        l = (0, lE.A)(),
        r = (0, D.W1)(),
        { familyCenterInitialized: s, isLoading: a } = (0, d.cf)([y.A], () => ({
            familyCenterInitialized: y.A.getIsInitialized(),
            isLoading: y.A.isLoading(),
        })),
        c = (0, er.k)(),
        { selectedTab: u, handleTabChange: o } = k(),
        x = eZ.default.getCurrentUser(),
        m = null != l,
        h = s && null != x && !m;
    (0, tZ.Ay)(() => {
        ((0, lA.d0)("family-center"), null != n && n());
    });
    let f = { isConsideredAdult: "adult" === l, numOfAcceptedRequests: r, selectedTab: u, selectedTeenId: c },
        j = i.useRef(f);
    return (
        i.useEffect(() => {
            j.current = f;
        }),
        i.useEffect(() => {
            if (s && m) {
                let { isConsideredAdult: e, numOfAcceptedRequests: n, selectedTab: l, selectedTeenId: i } = j.current;
                (_.default.track(L.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: n,
                    selected_teen_id: i,
                    initial_page: C.zu[l],
                    source: C.iN[t],
                }),
                    lv.A.increment({ name: lj.K.FAMILY_CENTER_VIEW }));
            }
        }, [s, m, t]),
        i.useEffect(() => {
            h && !y.A.isLoading() && (0, lg.yO)(lp.w_.FAMILY_CENTER);
        }, [h, a]),
        { isLoading: a, selectedTab: u, handleTabChange: o, showAgeGateModal: h }
    );
}
var lT = n(220330);
let lS = {
        [C.u9.REQUESTS]: lr,
        [C.u9.ACTIVITY]: nk,
        [C.u9.SETTINGS]: lf,
        [C.u9.CONTENT_AND_SOCIAL]: tP,
        [C.u9.DATA_AND_PRIVACY]: tV,
        [C.u9.SCREEN_TIME_CONTROLS]: lf,
    },
    lI = { [C.u9.REQUESTS]: lr, [C.u9.ACTIVITY]: nk, [C.u9.CONTENT_AND_SOCIAL]: tP, [C.u9.DATA_AND_PRIVACY]: tV };
function ly() {
    return (0, l.jsx)(c.B, { justify: "center", align: "center", className: lT.g4, children: (0, l.jsx)(u.y, {}) });
}
function lb(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, D.VT)(),
        r = (0, b.A)();
    return [C.u9.CONTENT_AND_SOCIAL, C.u9.DATA_AND_PRIVACY, C.u9.SCREEN_TIME_CONTROLS].includes(t)
        ? null
        : (0, l.jsxs)(o.V, {
              className: lT.c5,
              "aria-label": $.intl.string(J.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, l.jsx)(o.V.Item, {
                      className: lT.jA,
                      id: C.u9.ACTIVITY,
                      children: $.intl.string(J.default.bdBmqy),
                  }),
                  (0, l.jsxs)(o.V.Item, {
                      className: lT.jA,
                      id: C.u9.REQUESTS,
                      "aria-label": $.intl.string(J.default["gVWG+6"]),
                      children: [
                          $.intl.string(J.default["gVWG+6"]),
                          i > 0 ? (0, l.jsx)(x.hV, { className: lT.qS, count: i }) : null,
                      ],
                  }),
                  r
                      ? (0, l.jsx)(o.V.Item, {
                            className: lT.jA,
                            id: C.u9.SETTINGS,
                            children: $.intl.string($.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function l_(e) {
    let { theme: t, section: n, handleItemSelect: i } = e,
        r = (0, E.GV)(),
        d = (0, D.VT)();
    return (0, l.jsx)(m.N, {
        theme: t,
        children: (e) =>
            (0, l.jsxs)(p.A, {
                className: s()(e, lT.ZB),
                scrollable: a.Fr,
                role: "navigation",
                "aria-labelledby": r,
                toolbar: !0,
                children: [
                    (0, l.jsx)(p.A.Icon, { icon: h.n, "aria-hidden": !0 }),
                    (0, l.jsx)(p.A.Title, { id: r, children: $.intl.string(J.default.RZqaJn) }),
                    (0, l.jsx)(p.A.Divider, {}),
                    (0, l.jsxs)(o.V, {
                        "aria-label": $.intl.string(J.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, l.jsx)(o.V.Item, {
                                id: C.u9.ACTIVITY,
                                className: lT.AS,
                                children: $.intl.string(J.default.bdBmqy),
                            }),
                            (0, l.jsxs)(o.V.Item, {
                                id: C.u9.REQUESTS,
                                className: lT.AS,
                                "aria-label": $.intl.string(J.default["gVWG+6"]),
                                children: [
                                    $.intl.string(J.default["gVWG+6"]),
                                    d > 0 ? (0, l.jsx)(x.hV, { className: lT.qS, count: d }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function lC() {
    let e = (0, E.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: r,
            showAgeGateModal: s,
        } = lN({
            location: C.MH.SETTINGS,
            onMountEffect: () => {
                I.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            (0, S._)(R[n]);
        }, [n]),
        s)
    )
        return null;
    let a = lS[n];
    return (0, l.jsxs)("main", {
        className: lT.kL,
        "aria-label": $.intl.string(J.default.RZqaJn),
        children: [
            (0, l.jsx)(A.HI, { location: $.intl.string(J.default.RZqaJn) }),
            (0, l.jsx)(lb, {
                section: n,
                handleItemSelect: function (e) {
                    r(e);
                },
            }),
            (0, l.jsx)(o.V.Panel, {
                id: n,
                "aria-labelledby": e,
                className: lT.Us,
                children: t ? (0, l.jsx)(ly, {}) : (0, l.jsx)(a, {}),
            }),
        ],
    });
}
function lL() {
    let { analyticsLocations: e } = (0, v.Ay)(g.A.FAMILY_CENTER),
        t = (0, b.A)(),
        n = (0, d.bG)([y.A], () => y.A.getIsInitialized()),
        r = (0, d.bG)([N.A], () => N.A.theme),
        a = (0, E.GV)(),
        {
            isLoading: c,
            selectedTab: u,
            handleTabChange: x,
            showAgeGateModal: m,
        } = lN({
            location: C.MH.SIDENAV,
            onMountEffect: () => {
                (j.I(L.BVt.FAMILY_CENTER), !y.A.isLoading() && y.A.canRefetch() && I.Ay.initialPageLoad());
            },
        });
    if (
        (i.useEffect(() => {
            let e = T.dm.getSetting();
            n && t && void 0 === e && T.dm.updateSetting(!0);
        }, [n, t]),
        m)
    )
        return null;
    let h = u !== C.u9.SETTINGS && u !== C.u9.SCREEN_TIME_CONTROLS ? u : C.u9.ACTIVITY,
        p = lI[h];
    return (0, l.jsx)(v.f5, {
        value: e,
        children: (0, l.jsxs)("main", {
            className: s()(lT.kL, lT.ei),
            "aria-label": $.intl.string(J.default.RZqaJn),
            children: [
                (0, l.jsx)(A.HI, { location: $.intl.string(J.default.RZqaJn) }),
                (0, l.jsx)(l_, {
                    theme: r,
                    section: h,
                    handleItemSelect: function (e) {
                        x(e);
                    },
                }),
                (0, l.jsx)(o.V.Panel, {
                    id: h,
                    "aria-labelledby": a,
                    className: lT.Om,
                    children: (0, l.jsx)(f.Ip, {
                        children: (0, l.jsx)("div", {
                            className: lT.O4,
                            children: c ? (0, l.jsx)(ly, {}) : (0, l.jsx)(p, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
