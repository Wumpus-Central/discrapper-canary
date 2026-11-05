n.d(t, { p: () => lD, A: () => lU });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(607399),
    d = n(164636),
    c = n(646514),
    u = n(331322),
    o = n(289873),
    m = n(695366),
    x = n(834730),
    h = n(821609),
    f = n(761508),
    j = n(812993);
if (221552 == n.j) var g = n(43990);
if (221552 == n.j) var v = n(177953);
if (221552 == n.j) var A = n(95362);
var E = n(944791),
    N = n(793574),
    p = n(688810),
    y = n(726249),
    b = n(915089),
    T = n(742589),
    S = n(413599),
    I = n(253932),
    _ = n(669067),
    C = n(899847),
    L = n(695515),
    R = n(438732),
    k = n(129230),
    D = n(191627),
    U = n(652215);
let P = {
        [D.u9.ACTIVITY]: "family_center_activity_tab",
        [D.u9.REQUESTS]: "family_center_requests_tab",
        [D.u9.SETTINGS]: "family_center_settings_tab",
        [D.u9.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
        [D.u9.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
        [D.u9.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
    },
    F = function () {
        return {
            selectedTab: (0, d.bG)([L.A], () => L.A.getSelectedTab()),
            handleTabChange: function (e) {
                (C.Ay.selectTab(e), k.default.track(U.HAw.FAMILY_CENTER_ACTION, { action: D.qb.TabChange, tab: e }));
            },
        };
    };
var M = n(834981),
    O = n(843282),
    G = n(778712),
    V = n(939249),
    w = n(548411),
    z = n(534514),
    H = n(10005),
    B = n(153739),
    Y = n(284009),
    q = n.n(Y),
    Z = n(192308),
    K = n(885574),
    W = n(858899),
    X = n(39623),
    Q = n(811091),
    J = n(864202),
    $ = n(580630),
    ee = n(665956),
    et = n(792996);
function en(e) {
    return new Intl.DateTimeFormat(et.intl.currentLocale, { month: "short", day: "numeric" }).format((0, J.default)(e));
}
var el = n(923531),
    ei = n(294433);
function er(e) {
    return (0, d.bG)([L.A], () => L.A.getTotalForDisplayType(e));
}
function es(e) {
    let t = er(e) ?? 0;
    if (e === D.NV.TOTAL_VOICE_MINUTES) return (0, el.hO)(t);
    if (e === D.NV.PURCHASES) {
        let e = L.A.getTotalSpendAmount(),
            n = L.A.getTotalSpendCurrency();
        return null != e && null != n ? (0, $.RS)(e, n) : t;
    }
    if (e === D.NV.GIFTS) {
        let e = L.A.getTotalGiftValue();
        if (null != e) return (0, $.RS)(e.amount, e.currency);
    }
    return t;
}
var ea = n(500470),
    ed = n(707554),
    ec = n(902546);
let eu = function (e) {
    let { header: t, displayType: n } = e,
        i = er(n),
        r = es(n);
    return (0, l.jsxs)("div", {
        className: ec.hJ,
        children: [
            (0, l.jsx)(z.D, {
                variant: "heading-xxl/medium",
                color: i > 0 ? "text-brand" : "text-muted",
                children: (0, l.jsx)(ed.F, { children: r }),
            }),
            (0, l.jsx)(x.E, { variant: "body-sm/semibold", className: ec.io, children: t }),
        ],
    });
};
var eo = n(821701),
    em = n(427262),
    ex = n(575593),
    eh = n(898461),
    ef = n(203632),
    ej = n(486020),
    eg = n(682901);
function ev(e, t) {
    let n,
        l,
        i = null != t;
    if (null != e)
        ((n = e.name),
            (l = (function (e) {
                switch (e) {
                    case ex.R.AVATAR_DECORATION:
                        return et.intl.string(ee.default.obi47v);
                    case ex.R.PROFILE_EFFECT:
                        return et.intl.string(ee.default.RX8BMR);
                    case ex.R.NAMEPLATE:
                        return et.intl.string(ee.default.nNGEHk);
                    case ex.R.BUNDLE:
                        return et.intl.string(ee.default.VS1fKo);
                    case ex.R.PROFILE_FRAME:
                        return et.intl.string(ee.default.JiIY1l);
                    default:
                        return "";
                }
            })(e.type)));
    else if (i && null != t) {
        let e = eg.hd[t];
        n = e?.name;
    }
    return { displayName: n, typeName: l, isSubscription: i };
}
var eA = n(34188),
    eE = n(104510),
    eN = n(403581),
    ep = n(253292),
    ey = n(780898),
    eb = n(287727),
    eT = n(665411),
    eS = n(740523);
function eI(e) {
    let { displayName: t, product: n } = e,
        i = (function (e) {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, eh.T)(t) ? (0, ej.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 }) : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: eS._P });
}
function e_(e) {
    let { displayName: t, nameplateData: n } = e,
        { staticImageUrl: i } = (0, ep.K)(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: eS.M4 });
}
function eC(e) {
    let { displayName: t, product: n } = e,
        i = (function (e) {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, ef.C3)(t) ? t.thumbnailPreviewSrc : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: eS._P });
}
function eL(e) {
    let { product: t } = e,
        n = (0, eb.A)(t.skuId);
    return null == n
        ? null
        : (0, l.jsx)("div", {
              className: eS.pI,
              children: (0, l.jsx)("div", { className: eS.ZS, children: (0, l.jsx)(eT.A, { frame: n }) }),
          });
}
function eR(e) {
    let { subscriptionPlanId: t } = e;
    if (null == t) return (0, l.jsx)("div", { className: eS.T8, children: (0, l.jsx)(eA.U, {}) });
    let n = (function (e) {
        if (null == e) return !1;
        let t = eg.hd[e];
        return t?.skuId === eg.pe.GUILD;
    })(t);
    return (0, l.jsx)("div", {
        className: eS.T8,
        children: n
            ? (0, l.jsx)(eE._, { size: "custom", width: 20, height: 20 })
            : (0, l.jsx)(eN.t, { size: "custom", width: 20, height: 20 }),
    });
}
function ek(e) {
    let { displayName: t, product: n } = e;
    if (null == n) return (0, l.jsx)("div", { className: eS.T8, children: (0, l.jsx)(eA.U, {}) });
    switch (n.type) {
        case ex.R.AVATAR_DECORATION:
            return (0, l.jsx)(eI, { displayName: t, product: n });
        case ex.R.NAMEPLATE:
            let i = (0, ey.EQ)(n);
            return null != i ? (0, l.jsx)(e_, { displayName: t, nameplateData: i }) : null;
        case ex.R.PROFILE_EFFECT:
            return (0, l.jsx)(eC, { displayName: t, product: n });
        case ex.R.PROFILE_FRAME:
            return (0, l.jsx)(eL, { product: n });
        default:
            return (0, l.jsx)("div", { className: eS.T8, children: (0, l.jsx)(eA.U, {}) });
    }
}
let eD = function (e) {
    let { displayName: t, isSubscription: n, product: i, subscriptionPlanId: r } = e;
    return n ? (0, l.jsx)(eR, { subscriptionPlanId: r }) : (0, l.jsx)(ek, { displayName: t, product: i });
};
var eU = n(271308);
let eP = i.memo((e) => {
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
        { product: o } = (0, eo.A)(t),
        m = (0, B.F7)(r),
        { displayName: h, isSubscription: f } = ev(o ?? null, n);
    if ((null != t && !f && null == o) || null == h) return null;
    let j = (function (e) {
        let { claimed: t, price: n, gifterName: l, offeredAt: i, claimedAt: r } = e,
            s = null != n ? (0, $.$g)(n.amount, n.currency) : null,
            a = null;
        return (
            null != s && null != l
                ? (a = et.intl.formatToPlainString(ee.default["o44n/1"], { price: s, username: l }))
                : null != s && (a = s),
            [
                a,
                t
                    ? et.intl.formatToPlainString(ee.default.kDyllq, { date: en(r ?? i) })
                    : et.intl.formatToPlainString(ee.default.gAG45y, { date: en(i) }),
            ]
                .filter(Boolean)
                .join(" \u2022 ")
        );
    })({ claimed: a, price: i, gifterName: null != m ? em.Ay.getName(m) : null, offeredAt: d, claimedAt: c });
    return (0, l.jsxs)("div", {
        className: s()(eU.k, u),
        children: [
            (0, l.jsx)(eD, { displayName: h, isSubscription: f, product: o ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(x.E, { variant: "body-md/semibold", children: h }),
                    (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", children: j }),
                ],
            }),
        ],
    });
});
eP.displayName = "FamilyCenterActivityGiftRow";
var eF = n(664343),
    eM = n(714991),
    eO = n(23339),
    eG = n(97808),
    eV = n(260509),
    ew = n(601360);
let ez = [18, 18, 16, 16, 14, 12, 10],
    eH = function (e) {
        let { guildId: t } = e,
            n = (0, d.bG)([L.A], () => L.A.getGuild(t));
        if (void 0 === n) return null;
        let { name: i } = n,
            r = (0, eV.Iv)(n, 40, !0),
            s = null,
            a = 10;
        return (
            null == n.icon && null != i && (a = ez[(s = (0, eO.oN)(i)).length - 1] ?? ez[ez.length - 1]),
            (0, l.jsx)("div", {
                className: ew.k,
                children: (0, l.jsxs)("div", {
                    style: { fontSize: a },
                    children: [
                        null != s ? (0, l.jsx)("div", { className: ew.X, "aria-hidden": !0, children: s }) : null,
                        null != r ? (0, l.jsx)(eG.eu, { src: r, size: G._3.SIZE_40, "aria-hidden": !0 }) : null,
                    ],
                }),
            })
        );
    };
var eB = n(85909);
let eY = i.memo((e) => {
    let { guildId: t, className: n, customSubtext: i } = e,
        r = (0, d.bG)([L.A], () => L.A.getGuild(t));
    if (void 0 === r) return null;
    let a = r.features.has(U.GuildFeatures.VERIFIED) || r.features.has(U.GuildFeatures.PARTNERED),
        { name: c } = r;
    return (0, l.jsxs)("div", {
        className: s()(eB.kL, n),
        children: [
            (0, l.jsx)(eH, { guildId: t }),
            (0, l.jsxs)("div", {
                className: eB.$z,
                children: [
                    (0, l.jsxs)("div", {
                        className: eB.wx,
                        children: [
                            a
                                ? (0, l.jsx)(eM.A, {
                                      guild: r,
                                      tooltipPosition: "bottom",
                                      tooltipColor: eF.ST.Colors.PRIMARY,
                                      className: eB.n2,
                                  })
                                : null,
                            (0, l.jsx)(x.E, { variant: "body-md/semibold", children: c }),
                        ],
                    }),
                    (0, l.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children:
                            null != i
                                ? i
                                : void 0 !== r.approximateMemberCount
                                  ? et.intl.format(ee.default["5JmNgg"], { members: r.approximateMemberCount })
                                  : null,
                    }),
                ],
            }),
        ],
    });
});
eY.displayName = "FamilyCenterActivityGuildRow";
var eq = n(748695);
let eZ = i.memo((e) => {
    let { skuId: t, subscriptionPlanId: n, total: i, currency: r, className: a } = e,
        { product: d } = (0, eo.A)(t),
        { displayName: c, typeName: u, isSubscription: o } = ev(d ?? null, n);
    if ((null != t && !o && null == d) || null == c) return null;
    let m = (0, $.$g)(i, r);
    return (0, l.jsxs)("div", {
        className: s()(eq.k, a),
        children: [
            (0, l.jsx)(eD, { displayName: c, isSubscription: o, product: d ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(x.E, { variant: "body-md/semibold", children: null != u ? `${c} \u{2022} ${u}` : c }),
                    (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", children: m }),
                ],
            }),
        ],
    });
});
eZ.displayName = "FamilyCenterActivityPurchaseRow";
var eK = n(287809),
    eW = n(283900),
    eX = n(467719);
let eQ = i.memo((e) => {
    let { userId: t, subText: n, className: i } = e,
        r = (0, d.bG)([eK.default], () => eK.default.getUser(t));
    return void 0 === r
        ? null
        : (0, l.jsxs)("div", {
              className: s()(eX.k, i),
              children: [
                  (0, l.jsx)(eW.H, { user: r, avatarSize: G._3.SIZE_40 }),
                  (0, l.jsx)("div", {
                      children: (0, l.jsxs)("div", {
                          className: eX.$,
                          children: [
                              (0, l.jsx)(x.E, {
                                  variant: "body-md/semibold",
                                  color: "interactive-text-active",
                                  children: em.Ay.getName(r),
                              }),
                              null != n &&
                                  (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", children: n }),
                          ],
                      }),
                  }),
              ],
          });
});
eQ.displayName = "FamilyCenterActivityUserRow";
var eJ = n(475833),
    e$ = n(584144),
    e0 = n(221851);
let e1 = function (e) {
    let { text: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: s()(n, e$.I),
        children: [
            (0, l.jsx)("img", { className: e$.S, src: "/assets/f47ef22a8aeff32a.svg", alt: "" }),
            (0, l.jsx)(x.E, { className: e0.Ot, variant: "body-sm/medium", color: "text-muted", children: t }),
        ],
    });
};
var e3 = n(683063),
    e2 = n(372777);
let e9 = function (e) {
    let { userId: t, dmsSent: n, callCount: i } = e,
        r = (0, d.bG)([eK.default], () => eK.default.getUser(t));
    return void 0 === r
        ? null
        : (0, l.jsx)(e3.u, {
              title: r.username,
              body: (0, el.fq)(n, i),
              asContainer: !0,
              children: (0, l.jsx)("div", {
                  className: e2.k,
                  children: (0, l.jsx)(eW.H, { user: r, avatarSize: G._3.SIZE_40 }),
              }),
          });
};
var e8 = n(326851);
let e5 = function () {
    let e = (0, d.bG)([L.A], () => L.A.getTopUserActivities()),
        t = (0, d.bG)([L.A], () => L.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: e8.kL,
              children: [
                  e.length > 0 &&
                      (0, l.jsxs)("div", {
                          className: e8.A2,
                          children: [
                              (0, l.jsx)(z.D, {
                                  variant: "body-md/medium",
                                  className: e8.bV,
                                  children: et.intl.string(ee.default.BxbvS7),
                              }),
                              (0, l.jsx)("div", {
                                  className: e8.Ce,
                                  children:
                                      1 === e.length
                                          ? (0, l.jsx)(eQ, {
                                                userId: e[0].user_id,
                                                subText: (0, el.fq)(e[0].dms_sent, e[0].call_count),
                                                className: e8.q3,
                                            })
                                          : e.map((e) =>
                                                (0, l.jsx)(
                                                    e9,
                                                    { userId: e.user_id, dmsSent: e.dms_sent, callCount: e.call_count },
                                                    e.user_id,
                                                ),
                                            ),
                              }),
                          ],
                      }),
                  t.length > 0 &&
                      (0, l.jsxs)("div", {
                          className: e8.A2,
                          children: [
                              (0, l.jsx)(z.D, {
                                  variant: "body-md/medium",
                                  className: e8.bV,
                                  children: et.intl.string(ee.default.Lq9Set),
                              }),
                              1 === t.length
                                  ? (0, l.jsx)(eY, {
                                        guildId: t[0].guild_id,
                                        customSubtext: (0, el.fq)(t[0].messages_sent, t[0].call_count),
                                        className: e8._S,
                                    })
                                  : (0, l.jsx)("div", {
                                        className: e8.Ce,
                                        children: t.map((e) => {
                                            let t = L.A.getGuild(e.guild_id),
                                                n = t?.name ?? "Unknown Server";
                                            return (0, l.jsx)(
                                                e3.u,
                                                {
                                                    title: n,
                                                    body: (0, el.fq)(e.messages_sent, e.call_count) ?? null,
                                                    asContainer: !0,
                                                    children: (0, l.jsx)(eH, { guildId: e?.guild_id }),
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
var e6 = n(700582),
    e7 = n(238304);
function e4() {
    let e = (0, ei.y)(et.intl.string(ee.default.q3IRal), et.intl.string(ee.default.JNLpDZ)),
        t = i.useCallback(() => {
            (0, Z.mM)(async () => {
                let { default: e } = await Promise.all([n.e(166894), n.e(907410)]).then(n.bind(n, 606377));
                return (t) => (0, l.jsx)(e, { ...t });
            });
        }, []);
    return (0, l.jsx)(V.D, {
        className: e6.YL,
        onClick: t,
        "aria-label": e,
        children: (0, l.jsx)(K.CircleInformationIcon, {
            size: "custom",
            color: "currentColor",
            className: e6.Kk,
            width: 15,
            height: 15,
        }),
    });
}
function te(e) {
    let { displayType: t } = e,
        n = i.useCallback(() => {
            (0, W.P0)({ text: et.intl.string(ee.default.Wu8BK2), variant: "critical" });
        }, []),
        r = (0, R.A)(),
        a = (0, d.yK)([L.A], () => L.A.getActionsForDisplayType(t)),
        c = er(t),
        u = es(t),
        { loadMore: m, isMoreLoading: h } = (0, H.A)({ onError: n }),
        f = (0, el.kN)().get(t),
        [j, g] = i.useState(4),
        v = i.useCallback(() => {
            (g((e) => e + 4), m(t));
        }, [t, m]);
    q()(null != f, `No text for action type: ${t}`);
    let A = (t === D.NV.PURCHASES || t === D.NV.GIFTS) && null != u ? f.sectionHeader(u) : f.sectionHeader(c),
        E = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = a[t];
                if ((0, el.aq)(n)) {
                    let e = Q.default.extractTimestamp(n.event_id),
                        t = (0, el.i6)(e, f.timestampFormatter);
                    return (0, l.jsx)(eQ, { userId: n.entity_id, subText: t }, n.event_id);
                }
                if ((0, el.Is)(n)) return (0, l.jsx)(eY, { guildId: n.entity_id }, n.event_id);
                if ((0, el.u7)(n)) {
                    let e = L.A.getPurchaseInfo(n.entity_id);
                    return null == e
                        ? null
                        : (0, l.jsx)(
                              eZ,
                              {
                                  skuId: e.sku_id,
                                  subscriptionPlanId: e.subscription_plan_id,
                                  total: e.total,
                                  currency: e.currency,
                              },
                              n.event_id,
                          );
                }
                if ((0, el.FT)(n)) {
                    let e = L.A.getGiftInfo(n.entity_id);
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
                        eP,
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
            [a, f.timestampFormatter],
        ),
        N = i.useCallback(
            () =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(x.E, { className: e6.bV, variant: "body-md/semibold", children: A }),
                        void 0 !== f.sectionDescription
                            ? (0, l.jsx)(x.E, {
                                  className: e6.yV,
                                  variant: "body-md/medium",
                                  color: "text-muted",
                                  children: f.sectionDescription(r ?? !1),
                              })
                            : null,
                    ],
                }),
            [A, f, r],
        );
    if (0 === a.length) return null;
    let p = a.slice(0, j);
    return (0, l.jsxs)("div", {
        className: e6.A2,
        children: [
            N(),
            (0, l.jsx)("div", {
                className: e6.o1,
                style: { maxHeight: 65 * p.length },
                children: p.map((e, t) => E({ row: t })),
            }),
            p.length < c
                ? (0, l.jsx)(V.D, {
                      className: s()(e6.FQ, { [e6.r9]: h }),
                      onClick: v,
                      role: "button",
                      "aria-disabled": h,
                      children: h
                          ? (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, className: e6.u1 })
                          : (0, l.jsx)(x.E, {
                                className: e6.UX,
                                variant: "body-sm/semibold",
                                children: et.intl.format(ee.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - p.length, 4)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
function tt() {
    let e = (0, R.A)(),
        t = (0, M.vx)(),
        n = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["7hqFl9"], { activeLinks: t.length }),
            et.intl.string(ee.default["Q/D/0Q"]),
        ),
        i = (0, el.cV)(!!e),
        r = (0, M.v4)(i);
    return e && t.length > 1
        ? (0, l.jsx)(x.E, { variant: "body-sm/medium", children: r })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  e ? null : (0, l.jsx)(X.EyeIcon, { size: "xs", color: "currentColor", className: e6.Kk }),
                  (0, l.jsx)(x.E, { variant: "body-sm/medium", children: n }),
              ],
          });
}
let tn = i.memo((e) => {
    let { userId: t, subText: n, avatarSize: i = G._3.SIZE_40, hideUserTag: r = !1 } = e,
        s = (0, B.F7)(t);
    return void 0 === s
        ? null
        : (0, l.jsxs)("div", {
              className: e6.iO,
              children: [
                  (0, l.jsx)(eW.H, { user: s, avatarSize: i }),
                  (0, l.jsxs)("div", {
                      className: e6.TK,
                      children: [
                          (0, l.jsx)(eJ.A, { user: s, hideUserTag: r }),
                          void 0 !== n
                              ? (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: n })
                              : null,
                      ],
                  }),
              ],
          });
});
function tl() {
    let e = (0, M.GR)(),
        t = (0, d.bG)([L.A], () => L.A.getSelectedTeenId()),
        { selectTeenUser: n } = (0, H.A)({}),
        r = e.map((e) => ({ label: e.id, value: e.id })),
        s = i.useCallback((e) => (0, l.jsx)(tn, { userId: e.value, avatarSize: G._3.SIZE_24 }), []);
    return (0, l.jsx)(O.Pw, {
        className: e6.Lt,
        renderOptionLabel: s,
        renderOptionValue: (e) => {
            let [t] = e;
            return s(t);
        },
        serialize: (e) => e,
        select: function (e) {
            (n(e), k.default.track(U.HAw.FAMILY_CENTER_ACTION, { action: D.qb.SelectTeen }));
        },
        isSelected: (e) => e === t,
        options: r,
        "data-migration-pending": !0,
    });
}
function ti() {
    let e = (0, ea.k)(),
        t = (0, R.A)(),
        n = (0, M.vx)(),
        i = (0, el.cV)(!!t),
        r = (0, M.v4)(i);
    return null === e ? null : t && 1 !== n.length ? (0, l.jsx)(tl, {}) : (0, l.jsx)(tn, { userId: e, subText: r });
}
tn.displayName = "FamilyCenterActivityCardAccountRow";
let tr = function () {
    let e = (0, el.Mo)(),
        t = (0, d.bG)([L.A], () => Object.values(D.NV).some((e) => L.A.getTotalForDisplayType(e) > 0)),
        n = (0, el.jp)(),
        i = (0, M.v4)(n);
    return (0, l.jsxs)("div", {
        className: e6.kL,
        children: [
            (0, l.jsxs)("div", { className: e6.vF, children: [(0, l.jsx)(tt, {}), (0, l.jsx)(e4, {})] }),
            (0, l.jsxs)("div", {
                className: e7.a,
                children: [
                    (0, l.jsx)("div", { className: e6.wx, children: (0, l.jsx)(ti, {}) }),
                    (0, l.jsxs)(u.B, {
                        gap: 32,
                        padding: 32,
                        fullWidth: !1,
                        children: [
                            (0, l.jsx)("div", {
                                className: e6.O2,
                                children: e
                                    .filter((e) => {
                                        let [t] = e;
                                        return t !== D.NV.GIFTS;
                                    })
                                    .map((e) => {
                                        let [t, n] = e;
                                        return (0, l.jsx)(
                                            eu,
                                            { displayType: t, header: n.tooltipHeader() },
                                            `counter-${t}`,
                                        );
                                    }),
                            }),
                            (0, l.jsxs)("div", {
                                className: e6.RJ,
                                children: [
                                    (0, l.jsx)(e5, {}),
                                    t
                                        ? e.map((e) => {
                                              let [t] = e;
                                              return (0, l.jsx)(te, { displayType: t }, `${t}-list`);
                                          })
                                        : (0, l.jsx)(e1, { className: e6.RL, text: i ?? "" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var ts = n(373554);
function ta() {
    let e = (0, M.vx)(),
        t = (0, B.y3)(),
        { selectTeenUser: n } = (0, H.A)({}),
        r = e.map((e) => ({ label: e, value: e })),
        a = i.useCallback((e) => (0, l.jsx)(tn, { userId: e.value, avatarSize: G._3.SIZE_24, hideUserTag: !0 }), []);
    return 0 === e.length
        ? null
        : (0, l.jsx)("div", {
              className: s()(ts.Gq, { [ts.wS]: e.length > 1 }),
              children:
                  e.length > 1
                      ? (0, l.jsx)(O.Pw, {
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
                      : (0, l.jsx)(tn, { userId: e[0], avatarSize: G._3.SIZE_24, hideUserTag: !0 }),
          });
}
function td() {
    let { selectedTab: e, handleTabChange: t } = F(),
        n = i.useCallback(() => {
            t(D.u9.ACTIVITY);
        }, [t]);
    return (0, l.jsxs)(u.B, {
        gap: 32,
        children: [
            (0, l.jsxs)(V.D, {
                className: ts.Gv,
                onClick: n,
                "aria-label": et.intl.string(et.t.ybUZql),
                children: [
                    (0, l.jsx)(w.Z, { size: "sm", color: c.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    (0, l.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: et.intl.string(et.t["13/7kX"]),
                    }),
                ],
            }),
            (0, l.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, l.jsxs)(u.B, {
                        gap: 4,
                        className: ts.gn,
                        children: [
                            (0, l.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                children: et.intl.string(ee.default.RZqaJn),
                            }),
                            (0, l.jsx)(z.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: et.intl.string(e === D.u9.CONTENT_AND_SOCIAL ? et.t["+o1pDZ"] : et.t.OAuOHD),
                            }),
                        ],
                    }),
                    (0, l.jsx)(ta, {}),
                ],
            }),
        ],
    });
}
var tc = n(404778),
    tu = n(110057);
let to = function (e) {
    let { children: t, title: n, description: i } = e;
    return (0, l.jsxs)("div", {
        className: tu.L1,
        children: [
            (null != n || null != i) &&
                (0, l.jsxs)("div", {
                    className: tu.Km,
                    children: [
                        null != n &&
                            (0, l.jsx)(z.D, { variant: "heading-lg/semibold", color: "text-strong", children: n }),
                        null != i && (0, l.jsx)(x.E, { variant: "body-sm/normal", color: "text-default", children: i }),
                    ],
                }),
            (0, l.jsx)("div", { className: tu.Yq, children: t }),
            (0, l.jsx)(tc.c, { className: tu.yj }),
        ],
    });
};
var tm = n(280668);
function tx(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: tm.y, children: t });
}
var th = n(389462),
    tf = n(464946),
    tj = n(750994),
    tg = n(620432),
    tv = n(171316);
function tA() {
    let e = (0, tv.KK)(),
        t = (0, ea.k)() ?? void 0,
        n = (0, tv.NZ)();
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: n ? et.intl.string(et.t.PMsfcH) : et.intl.string(et.t.RAQUSN),
            note: n ? et.intl.string(et.t.XXGmuB) : et.intl.string(et.t.wbYDfT),
            value: !e,
            onChange: function (e) {
                (0, tg._)(th.yr.updateControlledSetting(t, !e));
            },
        }),
    });
}
var tE = n(871309),
    tN = n(171576),
    tp = n(953298),
    ty = n(975571);
function tb() {
    let e = (0, ea.k)() ?? void 0,
        t = (0, tv.KK)(),
        n = th.ES.useControlledSetting(e);
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: et.intl.string(et.t["3o2ojh"]),
            value: !t && !n,
            onChange: (t) => {
                !t && (0, tp.w)()
                    ? tE.A.showAgeVerificationGetStartedModal({ entryPoint: tN.q1.MESSAGE_REQUESTS_SETTINGS })
                    : (0, tg._)(th.ES.updateControlledSetting(e, !t));
            },
            disabled: t,
            note: et.intl.format(et.t.IoztJ0, { helpdeskArticle: ty.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
var tT = n(665260),
    tS = n(115063);
function tI() {
    let e = (0, ea.k)() ?? void 0,
        t = th.up.useControlledSetting(e),
        n = i.useMemo(() => (0, tS.Lx)(t), [t]);
    return null == e
        ? null
        : (0, l.jsxs)(tx, {
              children: [
                  (0, l.jsx)(tf.h, {
                      children: (0, l.jsx)(tj.Ay, {
                          title: et.intl.string(et.t["7x9dyE"]),
                          value: n.all,
                          onChange: (t) =>
                              (0, tg._)(th.up.updateControlledSetting(e, t ? 14 : 14 & ~U.dzt.NO_RELATION)),
                      }),
                  }),
                  (0, l.jsx)(tf.h, {
                      children: (0, l.jsx)(tj.Ay, {
                          title: et.intl.string(et.t.NfeuZ3),
                          value: n.all || n.mutualFriends,
                          onChange: (n) =>
                              (0, tg._)(
                                  th.up.updateControlledSetting(
                                      e,
                                      n
                                          ? tT.UI(t, U.dzt.MUTUAL_FRIENDS)
                                          : tT.iE(t, U.dzt.MUTUAL_FRIENDS, U.dzt.NO_RELATION),
                                  ),
                              ),
                      }),
                  }),
                  (0, l.jsx)(tf.h, {
                      children: (0, l.jsx)(tj.Ay, {
                          title: et.intl.string(et.t.qsMfsH),
                          value: n.all || n.mutualGuilds,
                          onChange: (n) =>
                              (0, tg._)(
                                  th.up.updateControlledSetting(
                                      e,
                                      n
                                          ? tT.UI(t, U.dzt.MUTUAL_GUILDS)
                                          : tT.iE(t, U.dzt.MUTUAL_GUILDS, U.dzt.NO_RELATION),
                                  ),
                              ),
                      }),
                  }),
              ],
          });
}
var t_ = n(444802),
    tC = n(875162),
    tL = n(873298),
    tR = n(389737),
    tk = n(523009),
    tD = n(704724);
function tU() {
    let e = (0, ea.k)(),
        t = (0, tv.xs)(),
        n = [
            { value: tL.TO.BLUR, label: et.intl.string(et.t.S49Uad) },
            { value: tL.TO.BLOCK, label: et.intl.string(et.t["D/157Y"]) },
        ];
    if (null == t || null == e) return null;
    function i(t) {
        null != e && (0, tD.Jz)(e, t);
    }
    let { explicitContentFriendDm: r, explicitContentNonFriendDm: s } = t;
    return (0, l.jsxs)(tR.E, {
        description: et.intl.string(et.t.Wnojv1),
        children: [
            (0, l.jsx)(tk.A, {
                title: et.intl.string(et.t["+uI23H"]),
                value: r,
                onChange: (e) => i({ explicitContentFriendDm: e }),
                options: n,
            }),
            (0, l.jsx)(tk.A, {
                title: et.intl.string(et.t["Yh+HX1"]),
                value: s,
                onChange: (e) => i({ explicitContentNonFriendDm: e }),
                options: n,
            }),
        ],
    });
}
function tP() {
    let e = (0, ea.k)(),
        t = (0, tv.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: n, goreContentNonFriendDm: i } = t;
    function r(t) {
        null != e && (0, tD.qY)(e, t);
    }
    let s = [
        { value: tL.TO.BLUR, label: et.intl.string(et.t.S49Uad) },
        { value: tL.TO.BLOCK, label: et.intl.string(et.t["D/157Y"]) },
    ];
    return (0, l.jsxs)(tR.E, {
        description: et.intl.string(et.t.XgH9eh),
        children: [
            (0, l.jsx)(tk.A, {
                title: et.intl.string(et.t["+uI23H"]),
                value: n,
                onChange: (e) => r({ goreContentFriendDm: e }),
                options: s,
            }),
            (0, l.jsx)(tk.A, {
                title: et.intl.string(et.t["Yh+HX1"]),
                value: i,
                onChange: (e) => r({ goreContentNonFriendDm: e }),
                options: s,
            }),
        ],
    });
}
var tF = n(309318);
function tM() {
    let e = (0, t_.WX)(),
        t = [
            {
                id: "explicit-media-redaction",
                title: et.intl.string(et.t.GYpoAq),
                component: () => (0, l.jsx)(tU, {}),
                orientation: "vertical",
            },
            {
                id: "gore-media-redaction",
                title: et.intl.string(et.t["16/3Bi"]),
                component: () => (0, l.jsx)(tP, {}),
                orientation: "vertical",
            },
        ];
    return (0, l.jsxs)(tf.h, {
        children: [
            (0, l.jsx)(tf._, {
                header: et.intl.string(et.t["Hj/But"]),
                description: et.intl.format(et.t["H/Icz+"], { learnMoreLink: ty.A.getArticleURL(e) }),
            }),
            (0, l.jsx)(tC.A, { tabs: t, orientation: "vertical", tabsClassName: tF.v }),
        ],
    });
}
let tO = function () {
    return (0, l.jsxs)(u.B, {
        gap: 32,
        children: [
            (0, l.jsx)(td, {}),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(to, { title: et.intl.string(et.t.xVRG4P), children: (0, l.jsx)(tM, {}) }),
                    (0, l.jsx)(to, {
                        title: et.intl.string(et.t["y62Z/d"]),
                        children: (0, l.jsxs)(tx, { children: [(0, l.jsx)(tA, {}), (0, l.jsx)(tb, {})] }),
                    }),
                    (0, l.jsx)(to, { title: et.intl.string(et.t["1Qn8iV"]), children: (0, l.jsx)(tI, {}) }),
                ],
            }),
        ],
    });
};
function tG() {
    let { hasConsented: e, updateConsent: t } = (0, tv.lH)(U.YAq.PERSONALIZATION);
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: et.intl.string(ee.default.XMPqUx),
            note: et.intl.format(ee.default.Imp6Ns, {
                helpdeskArticle: ty.A.getArticleURL(U.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
function tV() {
    let e = (0, ea.k)() ?? void 0,
        t = th.yH.useControlledSetting(e),
        n = th.kf.useControlledSetting(e);
    return null == e
        ? null
        : (0, l.jsx)(tf.h, {
              children: (0, l.jsx)(tj.Ay, {
                  title: et.intl.string(et.t.CyLYKZ),
                  note: et.intl.format(ee.default["6mK5Pz"], {
                      helpdeskArticle: ty.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !t,
                  onChange: (t) => (0, tg._)(th.yH.updateControlledSetting(e, !t)),
                  disabled: n,
              }),
          });
}
function tw() {
    let e = (0, ea.k)() ?? void 0,
        t = th.kf.useControlledSetting(e);
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: et.intl.string(ee.default.ZhaNu8),
            note: et.intl.format(ee.default.cnCK6b, {
                helpdeskArticle: ty.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => (0, tg._)(th.kf.updateControlledSetting(e, !t)),
        }),
    });
}
function tz() {
    let { hasConsented: e, updateConsent: t } = (0, tv.lH)(U.YAq.USAGE_STATISTICS);
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: et.intl.string(ee.default.HjstRR),
            note: et.intl.format(ee.default.Z5yJZy, {
                helpdeskArticle: ty.A.getArticleURL(U.MVz.DATA_PRIVACY_CONTROLS),
            }),
            value: e,
            onChange: t,
        }),
    });
}
let tH = function () {
    return (0, l.jsxs)(u.B, {
        gap: 32,
        children: [
            (0, l.jsx)(td, {}),
            (0, l.jsx)("div", {
                children: (0, l.jsxs)(to, {
                    title: et.intl.string(et.t.SRZyHg),
                    children: [(0, l.jsx)(tz, {}), (0, l.jsx)(tw, {}), (0, l.jsx)(tV, {}), (0, l.jsx)(tG, {})],
                }),
            }),
        ],
    });
};
var tB = n(582394),
    tY = n(141006),
    tq = n(855986),
    tZ = n(173936),
    tK = n(964486),
    tW = n(957565),
    tX = n(765548),
    tQ = n(647219);
function tJ() {
    return (0, M.xr)() ? null : (0, l.jsx)(t$, {});
}
function t$() {
    let e,
        t = i.useCallback(() => {
            (0, W.P0)({ text: et.intl.string(ee.default.Wu8BK2), variant: "critical" });
        }, []),
        { getLinkCode: r } = (0, H.A)(),
        s = (0, M.VE)(),
        a = (0, tq.bG)([L.A], () => L.A.getLinkCodeExpiresAt());
    ((0, tK.Ay)(() => {
        r();
    }),
        (e = (0, tX.A)(r)),
        i.useEffect(() => {
            if (null == a) return;
            let t = a - Date.now();
            if (t <= 0) return void e();
            let n = setTimeout(e, t);
            return () => clearTimeout(n);
        }, [a, e]));
    let d = i.useCallback(() => {
            ((0, Z.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(72338),
                    n.e(776915),
                    n.e(595429),
                    n.e(595948),
                    n.e(525989),
                    n.e(813036),
                    n.e(735611),
                ]).then(n.bind(n, 207049));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        onLoadError: t,
                        title: et.intl.string(ee.default.aCUVfL),
                        body: et.intl.format(ee.default["2O6ltn"], {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    });
            }),
                k.default.track(U.HAw.FAMILY_CENTER_ACTION, { action: D.qb.ShowQRCodeModal }));
        }, [t]),
        c = i.useCallback(() => {
            null != s &&
                (k.default.track(U.HAw.FAMILY_CENTER_ACTION, { action: D.qb.CopyLink }),
                (0, tW.C)(s, () => (0, W.P0)({ text: et.intl.string(et.t["L/PwZf"]), variant: "success" })));
        }, [s]);
    return (0, l.jsxs)("div", {
        className: tQ.U,
        children: [
            (0, l.jsx)(h.$, { icon: tY.y, variant: "primary", text: et.intl.string(ee.default["m/3urB"]), onClick: d }),
            (0, l.jsx)(h.$, {
                icon: tZ.LinkIcon,
                variant: "secondary",
                text: et.intl.string(et.t.WqhZss),
                disabled: null == s,
                onClick: c,
            }),
        ],
    });
}
var t0 = n(769062);
function t1() {
    let e = (0, M.Li)(),
        t = (0, R.A)(),
        { handleTabChange: n } = F();
    return (0, M.xr)() || (t && e)
        ? null
        : (0, l.jsx)("div", {
              className: t0.x6,
              children: t
                  ? (0, l.jsx)(h.$, {
                        variant: "primary",
                        text: et.intl.string(et.t.LhlgY9),
                        onClick: () => n(D.u9.REQUESTS),
                    })
                  : (0, l.jsx)(tJ, {}),
          });
}
let t3 = function () {
    let e = (0, R.A)(),
        t = (0, ei.y)(et.intl.string(ee.default["T7GyW+"]), et.intl.string(ee.default.goKE2b)),
        n = (0, ei.y)(
            et.intl.format(ee.default.MXjDSv, {
                articleLink: "https://support.discord.com/hc/articles/14155060633623",
            }),
            et.intl.format(ee.default.EMCf6j, {
                articleLink: "https://support.discord.com/hc/articles/14155043715735",
            }),
        );
    return (0, l.jsxs)("div", {
        className: s()(t0.kL, e7.a),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", {
                        children: (0, l.jsxs)("div", {
                            className: t0.TK,
                            children: [
                                (0, l.jsx)(z.D, {
                                    variant: "heading-xl/medium",
                                    children: (0, l.jsx)(ed.F, { children: t }),
                                }),
                                (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: n }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(t1, {}),
                ],
            }),
            (0, l.jsx)("div", {
                className: t0.F0,
                children: (0, l.jsx)("img", {
                    src: e ? "/assets/bc9100f5e54f39a8.svg" : "/assets/12ee06c12c73e78e.svg",
                    alt: et.intl.string(ee.default.ffg6xd),
                }),
            }),
        ],
    });
};
var t2 = n(299628),
    t9 = n(324149);
let t8 = function (e) {
    let { icon: t, iconClassName: n, header: i, description: r } = e;
    return (0, l.jsxs)("div", {
        className: s()(t9.kL, e7.a),
        children: [
            (0, l.jsx)("div", {
                className: t9.n1,
                children: (0, l.jsx)(t, {
                    className: s()(t9.Kk, n),
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(z.D, {
                        variant: "heading-sm/semibold",
                        className: t9.wx,
                        children: (0, l.jsx)(ed.F, { children: i }),
                    }),
                    (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: r }),
                ],
            }),
        ],
    });
};
var t5 = n(28863),
    t6 = n(683071),
    t7 = n(987197),
    t4 = n(822585);
function ne() {
    (0, et.useSyncMessages)(ee.messagesLoader);
    let e = (0, t7.f)(),
        t = (0, t4.L)()?.daysRemaining ?? null;
    if (!e || null == t || t < 0) return null;
    function n(e, t) {
        return (0, l.jsx)(
            t5.Anchor,
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
        children: (0, l.jsx)(t6.w, {
            type: "warning",
            message:
                0 === t
                    ? et.intl.format(ee.default.S5kmfO, { learnMoreHook: n })
                    : et.intl.format(ee.default["5jm+T3"], { count: t, learnMoreHook: n }),
            role: "none",
        }),
    });
}
var nt = n(847374),
    nn = n(922529),
    nl = n(780964),
    ni = n(830543),
    nr = n(766075),
    ns = n(219893),
    na = n(465323),
    nd = n(617617),
    nc = n(361157);
function nu(e) {
    let t = (0, tq.bG)([L.A], () => L.A.getMonthlyPurchases());
    return (function (e, t) {
        if (null == e) return { kind: "off" };
        if (0 === e.amount) return { kind: "blocked" };
        let n = e.currency,
            l = (0, $.CE)((0, $.$g)(e.amount, n), eg.WT.MONTH, 1);
        if (t >= e.amount) return { kind: "spent", monthlyText: l };
        let i = na.yR[e.currency] ?? 2,
            r = e.amount - t;
        return r <= 10 * 10 ** i
            ? {
                  kind: "close-to-limit",
                  monthlyText: l,
                  remainingText: et.intl.formatToPlainString(ee.default["+Q+bU1"], { amount: (0, $.$g)(r, n) }),
              }
            : { kind: "on", monthlyText: l };
    })(e, t?.total_amount ?? 0);
}
var no = n(534654),
    nm = n(327919),
    nx = n(165862),
    nh = n(477782),
    nf = n(943255),
    nj = n(265872),
    ng = n(408278),
    nv = n(365199),
    nA = n(143129),
    nE = n(95396),
    nN = n(585634);
function np(e) {
    let { closePopout: t, onEdit: n, onDelete: i } = e;
    return (0, l.jsxs)(nx.W, {
        "data-menu-migrated": !0,
        "aria-label": et.intl.string(et.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, l.jsx)(nh.Dr, { id: "edit", label: et.intl.string(ee.default.b3DPqg), action: n }),
            (0, l.jsx)(nh.Dr, { id: "delete", label: et.intl.string(ee.default.d8pizZ), color: "danger", action: i }),
        ],
    });
}
function ny(e) {
    let { rule: t, teenId: r, readOnly: s = !1 } = e,
        a = i.useRef(null),
        d = t?.enabled ?? !0,
        c = (0, ns.li)(t),
        o = (0, ns.n1)(t.days);
    function m() {
        (0, Z.mM)(async () => {
            let { default: e } = await Promise.all([n.e(58008), n.e(777848), n.e(386135)]).then(n.bind(n, 362890));
            return (n) => (0, l.jsx)(e, { ...n, teenId: r, rule: t });
        });
    }
    async function h() {
        try {
            await (0, nE.CS)(r, t.ruleId);
        } catch {
            (0, W.P0)({ text: et.intl.string(ee.default.Wu8BK2), variant: "critical" });
        }
    }
    return (0, l.jsxs)(u.B, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        children: [
            (0, l.jsx)("div", { className: nN.X, children: (0, l.jsx)(nf.Z, { size: "md" }) }),
            (0, l.jsxs)(u.B, {
                direction: "vertical",
                style: { flex: 1, minWidth: 0 },
                gap: 4,
                children: [
                    (0, l.jsx)(x.E, { variant: "body-md/medium", children: c }),
                    (0, l.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: o }),
                ],
            }),
            (0, l.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                fullWidth: !1,
                children: [
                    !s &&
                        (0, l.jsx)(nj.Y, {
                            targetElementRef: a,
                            renderPopout: (e) => (0, l.jsx)(np, { ...e, onEdit: m, onDelete: h }),
                            position: "bottom",
                            align: "right",
                            animation: nj.Y.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, l.jsx)(ng.K, {
                                    buttonRef: a,
                                    size: "sm",
                                    icon: nv.MoreHorizontalIcon,
                                    variant: "icon-only",
                                    "aria-label": et.intl.string(et.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    onClick: (e) => {
                                        (e.stopPropagation(), t(e));
                                    },
                                });
                            },
                        }),
                    (0, l.jsx)("div", {
                        className: nN.m,
                        children: (0, l.jsx)(nA.d, {
                            checked: d,
                            label: et.intl.string(ee.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: async function () {
                                try {
                                    await (0, nE.Um)(r, t.ruleId, { enabled: !d });
                                } catch {
                                    (0, W.P0)({ text: et.intl.string(ee.default.Wu8BK2), variant: "critical" });
                                }
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
var nb = n(12350);
function nT(e) {
    let { title: t, subtitle: n, buttonText: i, onButtonPress: r, readOnly: s = !1 } = e;
    return (0, l.jsxs)(u.B, {
        padding: { top: 12, bottom: 12 },
        justify: "space-between",
        direction: "horizontal",
        align: "center",
        gap: 32,
        children: [
            (0, l.jsxs)(u.B, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, l.jsx)(x.E, { variant: "body-md/medium", children: t }),
                    null != n && (0, l.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? nb.nh : void 0,
                children: (0, l.jsx)(h.$, { text: i, onClick: r, variant: "secondary", size: "sm", disabled: s }),
            }),
        ],
    });
}
function nS(e, t, i) {
    return (0, l.jsx)(nT, {
        title: et.intl.string(ee.default.gMeekL),
        subtitle: (function (e) {
            switch (e.kind) {
                case "off":
                    return et.intl.string(ee.default.YEnpaj);
                case "on":
                    return e.monthlyText;
                case "close-to-limit":
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            e.monthlyText,
                            " \xb7 ",
                            (0, l.jsx)(x.E, {
                                variant: "body-sm/normal",
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
                            (0, l.jsx)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                tag: "span",
                                children: et.intl.string(ee.default.Q2msVQ),
                            }),
                        ],
                    });
                case "blocked":
                    return (0, l.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        tag: "span",
                        children: et.intl.string(ee.default.FUu2b0),
                    });
            }
        })(t),
        buttonText: et.intl.string(et.t.bt75uw),
        onButtonPress: () => {
            (0, Z.mM)(async () => {
                let { default: t } = await Promise.all([n.e(781173), n.e(760064)]).then(n.bind(n, 270915));
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
        nu(
            (0, tq.bG)(
                [nd.A],
                () => {
                    let e = nd.A.settings.safetySettings?.spendingLimitSettings?.oneTimePurchaseLimit;
                    return null == e ? null : { amount: Number(e.amount), currency: e.currency };
                },
                void 0,
                nc.Ky,
            ),
        ),
        !0,
    );
}
function n_(e) {
    let { teenId: t } = e,
        n = th.fD.useControlledSetting(t);
    return nS(t, nu(n));
}
function nC(e) {
    let { teenId: t, readOnly: r = !1 } = e,
        s = (0, B.y3)(),
        a = s?.restrictedSchedule?.rules ?? [],
        d = (0, ns.I2)(a),
        [c, o] = i.useState(d.length > 0);
    function m() {
        (0, Z.mM)(async () => {
            let { default: e } = await Promise.all([n.e(58008), n.e(777848), n.e(386135)]).then(n.bind(n, 362890));
            return (n) => (0, l.jsx)(e, { ...n, teenId: t });
        });
    }
    return (i.useEffect(() => {
        d.length > 0 && o(!0);
    }, [d.length]),
    0 === d.length)
        ? (0, l.jsx)(nT, {
              title: et.intl.string(ee.default["1Op+NP"]),
              buttonText: et.intl.string(ee.default.OwFF4o),
              onButtonPress: m,
              readOnly: r,
          })
        : (0, l.jsxs)(u.B, {
              direction: "vertical",
              gap: 0,
              children: [
                  (0, l.jsxs)(V.D, {
                      className: nb.dV,
                      onClick: () => o((e) => !e),
                      "aria-expanded": c,
                      children: [
                          (0, l.jsx)("div", {
                              className: nb.WB,
                              children: (0, l.jsxs)(u.B, {
                                  direction: "vertical",
                                  gap: 4,
                                  children: [
                                      (0, l.jsx)(x.E, {
                                          variant: "body-md/medium",
                                          children: et.intl.string(ee.default["1Op+NP"]),
                                      }),
                                      (0, l.jsx)(x.E, {
                                          variant: "body-sm/normal",
                                          color: "text-muted",
                                          children: et.intl.formatToPlainString(ee.default.XfwcpX, { count: d.length }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: nb.pt,
                              children: (0, l.jsx)(nt.a, {
                                  size: "sm",
                                  color: "currentColor",
                                  className: `${nb.ai} ${c ? nb.hg : ""}`,
                              }),
                          }),
                      ],
                  }),
                  c &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(u.B, {
                                  direction: "vertical",
                                  gap: 16,
                                  padding: { top: 24, bottom: 24 },
                                  children: d.map((e) => (0, l.jsx)(ny, { rule: e, teenId: t, readOnly: r }, e.ruleId)),
                              }),
                              (0, l.jsx)("div", {
                                  className: r ? nb.nh : void 0,
                                  children: (0, l.jsx)(h.$, {
                                      text: et.intl.string(ee.default.OwFF4o),
                                      onClick: m,
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
function nL() {
    let e = (0, M.vx)(),
        t = (0, B.y3)();
    function n() {
        (0, nr.openUserSettings)(nl.X.MESSAGING_PERMISSIONS_PANEL);
    }
    return (0, l.jsxs)(u.B, {
        direction: "vertical",
        gap: 0,
        children: [
            (0, l.jsxs)(u.B, {
                padding: { bottom: 12 },
                justify: "space-between",
                direction: "horizontal",
                align: "center",
                gap: 32,
                children: [
                    (0, l.jsxs)(u.B, {
                        direction: "vertical",
                        gap: 4,
                        children: [
                            (0, l.jsx)(x.E, {
                                variant: "body-sm/semibold",
                                children: et.intl.string(ee.default.ahKIJO),
                            }),
                            (0, l.jsx)(x.E, {
                                variant: "body-md/medium",
                                color: "text-muted",
                                children: et.intl.format(ee.default.X9rW0j, {
                                    openSettingsHook: (e, t) => (0, l.jsx)(t5.Anchor, { onClick: n, children: e }, t),
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(h.$, {
                        text: et.intl.formatToPlainString(ee.default.ggcjPR, { count: e.length }),
                        onClick: function () {
                            (0, nm.A)(e, ni.default, () =>
                                (0, W.P0)({
                                    text: et.intl.formatToPlainString(ee.default.D1BwNC, { count: e.length }),
                                    variant: "critical",
                                }),
                            );
                        },
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            t?.id != null &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(nn.A, { className: nb.yF }),
                        (0, l.jsx)(nI, { teenId: t.id }),
                        (0, l.jsx)(nn.A, { className: nb.yF }),
                        (0, l.jsx)(nC, { teenId: t.id, readOnly: !0 }),
                    ],
                }),
        ],
    });
}
function nR() {
    let e = (0, B.y3)(),
        t = (0, B.tl)(),
        { handleTabChange: n } = F();
    return (
        i.useEffect(() => {
            e?.id != null && t && C.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(u.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, l.jsx)(x.E, { variant: "body-sm/semibold", children: et.intl.string(ee.default.ahKIJO) }),
                        (0, l.jsx)(x.E, {
                            variant: "body-md/medium",
                            color: "text-muted",
                            children: et.intl.string(ee.default.Sv236e),
                        }),
                    ],
                }),
                (0, l.jsx)(nT, {
                    title: et.intl.string(et.t["+o1pDZ"]),
                    buttonText: et.intl.string(et.t.bt75uw),
                    onButtonPress: () => {
                        n(D.u9.CONTENT_AND_SOCIAL);
                    },
                }),
                (0, l.jsx)(nn.A, { className: nb.yF }),
                (0, l.jsx)(nT, {
                    title: et.intl.string(et.t.OAuOHD),
                    buttonText: et.intl.string(et.t.bt75uw),
                    onButtonPress: () => {
                        n(D.u9.DATA_AND_PRIVACY);
                    },
                }),
                e?.id != null &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(nn.A, { className: nb.yF }),
                            (0, l.jsx)(n_, { teenId: e.id }),
                            (0, l.jsx)(nn.A, { className: nb.yF }),
                            (0, l.jsx)(nC, { teenId: e.id }),
                        ],
                    }),
            ],
        })
    );
}
function nk() {
    let e = (0, no.A)();
    return 0 === (0, M.vx)().length
        ? null
        : (0, l.jsx)("div", { className: nb.kL, children: e ? (0, l.jsx)(nL, {}) : (0, l.jsx)(nR, {}) });
}
var nD = n(768775);
let nU = function () {
    let e = (0, M.vx)().length > 0,
        t = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        n = (0, ei.y)(et.intl.string(ee.default["5RZ8Tq"]), et.intl.string(ee.default.bmhCnL)),
        i = (0, ei.y)(et.intl.string(ee.default.XKnFFq), et.intl.string(ee.default["68zfxD"])),
        r = (0, ei.y)(et.intl.string(ee.default["Rm/6a0"]), et.intl.string(ee.default["1xPTwE"]));
    return void 0 === t
        ? null
        : (0, l.jsxs)("div", {
              className: nD.kL,
              children: [
                  (0, l.jsx)(ne, {}),
                  e
                      ? null
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", { className: nD.vK, children: (0, l.jsx)(t3, {}) }),
                                (0, l.jsxs)("div", {
                                    className: nD.yk,
                                    children: [
                                        (0, l.jsx)(t8, {
                                            icon: tB.M,
                                            header: et.intl.string(ee.default["001l3m"]),
                                            description: n,
                                        }),
                                        (0, l.jsx)(t8, {
                                            icon: X.EyeIcon,
                                            header: et.intl.string(ee.default.yipAeP),
                                            description: i,
                                        }),
                                        (0, l.jsx)(t8, {
                                            icon: tY.y,
                                            header: et.intl.string(ee.default.hhOuMe),
                                            description: r,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  e ? (0, l.jsx)(tr, {}) : (0, l.jsx)(t2.A, { showSectionDescriptions: !0 }),
                  (0, l.jsx)(nk, {}),
              ],
          });
};
n(801541);
var nP = n(889137),
    nF = n(837381),
    nM = n(62617);
function nO(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: s, width: a, height: d, className: c, style: u } = e,
        o = i.useMemo(
            () => (0, nM.H)({ width: a, height: d, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [a, d, u],
        );
    return (0, l.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/bb4093f4ae937ad09bc359b162988c3cbb7d49d924073fee7d66a763e738fc67.svg",
        className: (0, nM.Z)(c),
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: s ?? "img",
    });
}
var nG = n(475825),
    nV = n(260762),
    nw = n(485947),
    nz = n(426190),
    nH = n(789645),
    nB = n(866665),
    nY = n(883005);
function nq(e) {
    let { icon: t, tooltip: n, onClick: i, className: r } = e;
    return (0, l.jsx)(nB.m, {
        text: n,
        children: (0, l.jsx)(V.D, {
            "aria-label": n,
            onClick: function (e) {
                (e.preventDefault(), e.stopPropagation(), i(e));
            },
            className: s()(nY.hP, r),
            children: (0, l.jsx)(t, { className: nY.Kk, color: "currentColor" }),
        }),
    });
}
var nZ = n(854627),
    nK = n(253400),
    nW = n(218750);
let nX = nK.Ay.getEnableHardwareAcceleration() ? eG.Js : eG.eu;
function nQ(e) {
    let { otherUser: t, status: n } = e,
        i = (0, M.XC)(t.id, n),
        {
            avatarSrc: r,
            avatarDecorationSrc: s,
            eventHandlers: a,
        } = (0, nZ.A)({ userId: t.id, size: G._3.SIZE_40, animateOnHover: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ...a,
                children: (0, l.jsx)(nX, {
                    className: nW.my,
                    src: r,
                    avatarDecoration: s,
                    size: G._3.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, l.jsxs)("div", {
                className: nW.yt,
                children: [
                    (0, l.jsx)("div", { className: nW.Vx, children: (0, l.jsx)(eJ.A, { user: t }) }),
                    (0, l.jsx)(x.E, { color: "text-muted", variant: "body-xs/normal", children: i }),
                ],
            }),
        ],
    });
}
var nJ = n(856087);
function n$(e) {
    let { user: t } = e,
        r = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        s = i.useCallback(() => {
            (q()(void 0 !== r, "User must be logged in to accept a link request"),
                (0, Z.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(321855), n.e(943139)]).then(n.bind(n, 179950));
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: r, otherUser: t });
                }));
        }, [r, t]);
    return (0, l.jsxs)("div", {
        className: nJ.kL,
        children: [
            (0, l.jsx)("div", { className: nJ.zH, children: (0, l.jsx)(nQ, { otherUser: t, status: D.Ef.ACTIVE }) }),
            (0, l.jsx)("div", {
                className: nJ.o1,
                children: (0, l.jsx)(nq, { icon: nH.P, tooltip: et.intl.string(ee.default.l20ZZp), onClick: s }),
            }),
        ],
    });
}
var n0 = n(933832);
function n1(e) {
    let { user: t } = e,
        r = (0, R.A)(),
        s = (0, M.xr)(),
        a = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        c = i.useCallback(() => {
            (q()(void 0 !== a, "User must be logged in to accept a link request"),
                (0, Z.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(916131), n.e(155738), n.e(331385)]).then(
                        n.bind(n, 58144),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]),
        u = i.useCallback(() => {
            (q()(void 0 !== a, "User must be logged in to decline a link request"),
                (0, Z.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(916131), n.e(155738), n.e(384811)]).then(
                        n.bind(n, 389094),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]),
        o = i.useCallback(() => {
            (q()(void 0 !== a, "User must be logged in to decline a link request"),
                (0, Z.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(916131), n.e(155738), n.e(817219)]).then(
                        n.bind(n, 187278),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]);
    return (0, l.jsxs)("div", {
        className: nJ.kL,
        children: [
            (0, l.jsx)("div", { className: nJ.zH, children: (0, l.jsx)(nQ, { otherUser: t, status: D.Ef.PENDING }) }),
            (0, l.jsx)("div", {
                className: nJ.o1,
                children: r
                    ? (0, l.jsx)(nq, { icon: nH.P, tooltip: et.intl.string(ee.default.e5iHmZ), onClick: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              s
                                  ? null
                                  : (0, l.jsx)(nq, {
                                        icon: n0.CheckmarkLargeIcon,
                                        tooltip: et.intl.string(ee.default.krWQZK),
                                        onClick: c,
                                    }),
                              (0, l.jsx)(nq, { icon: nH.P, tooltip: et.intl.string(ee.default.bBDeNI), onClick: u }),
                          ],
                      }),
            }),
        ],
    });
}
var n3 = n(615300),
    n2 = n(559106),
    n9 = n(702476),
    n8 = n(487565);
let n5 = function (e) {
    let { userId: t, children: n, isLast: r, className: a } = e,
        [d, c] = i.useState(!1),
        { analyticsLocations: u } = (0, p.Ay)(),
        o = i.useCallback(() => {
            (0, n9.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u });
        }, [t, u]);
    function m() {
        c(!0);
    }
    function x() {
        c(!1);
    }
    return (0, l.jsx)(nF.tG, {
        id: t,
        children: (e) =>
            (0, l.jsx)(n2.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(n3.A.div, {
                    style: { opacity: 1 },
                    className: s()(n8.KG, a, { [n8.HV]: r, [n8.vu]: d }),
                    onMouseEnter: m,
                    onMouseLeave: x,
                    onClick: o,
                    ...e,
                    children: n(d),
                }),
            }),
    });
};
var n6 = n(327337),
    n7 = n(375980);
function n4(e) {
    let { header: t, description: n, stepNumber: i } = e;
    return (0, l.jsxs)("div", {
        className: n7.PM,
        children: [
            (0, l.jsx)("div", {
                className: n7.CD,
                children: (0, l.jsx)(z.D, {
                    variant: "heading-sm/semibold",
                    color: "text-brand",
                    children: (0, l.jsx)(ed.F, { children: i }),
                }),
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(z.D, { variant: "heading-xs/semibold", children: (0, l.jsx)(ed.F, { children: t }) }),
                    (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: n }),
                ],
            }),
        ],
    });
}
function le() {
    return (0, l.jsxs)("div", {
        className: s()(n7.aP, e7.a, n7.dO, n7.p2),
        children: [
            (0, l.jsxs)("div", {
                className: n7.Np,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(z.D, {
                                className: e0.QB,
                                variant: "heading-xl/medium",
                                children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default.pHEnV5) }),
                            }),
                            (0, l.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "text-muted",
                                className: e0.SX,
                                children: et.intl.string(ee.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, l.jsx)(nO, { alt: "", ariaHidden: !0, width: 224, className: n7._u }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: n7.Ci,
                children: [
                    (0, l.jsx)(n4, {
                        header: et.intl.string(ee.default["7xxAni"]),
                        description: et.intl.string(ee.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, l.jsx)(n4, {
                        header: et.intl.string(ee.default["AXgx+a"]),
                        description: et.intl.string(ee.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, l.jsx)(n4, {
                        header: et.intl.string(ee.default.MZn1tG),
                        description: et.intl.string(ee.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function lt() {
    let e = (0, M.xr)();
    return (0, l.jsxs)("div", {
        className: s()(n7.aP, e7.a, n7.dO),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(z.D, {
                        className: e0.QB,
                        variant: "heading-xl/medium",
                        children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default.zUCWEL) }),
                    }),
                    (0, l.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        className: e0.SX,
                        children: et.intl.format(ee.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, l.jsx)(tJ, {}),
                ],
            }),
            (0, l.jsx)(nO, { alt: "", ariaHidden: !0, width: 224, className: n7._u }),
        ],
    });
}
function ln(e) {
    let { sectionType: t, sectionTitle: n, requests: r } = e,
        s = i.useRef(null),
        a = `${t}-list`,
        d = (0, nV.A)(a),
        c = i.useCallback(
            (e) => {
                let { row: n, listIndex: i } = e,
                    s = r[n],
                    a = i === r.length;
                return null == s
                    ? null
                    : (0, l.jsx)(
                          n5,
                          {
                              userId: s.id,
                              isLast: a,
                              children: () =>
                                  t === D.Ef.ACTIVE ? (0, l.jsx)(n$, { user: s }) : (0, l.jsx)(n1, { user: s }),
                          },
                          s.id,
                      );
            },
            [r, t],
        ),
        u = i.useCallback(
            () =>
                (0, l.jsx)(
                    nw.A,
                    {
                        children: (0, l.jsx)(x.E, {
                            className: e0.QB,
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: n,
                        }),
                    },
                    "title",
                ),
            [n],
        );
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(nF.hD, {
            navigator: d,
            children: (0, l.jsx)(nF.PR, {
                children: (e) => {
                    let { ref: t, role: i, ...d } = e;
                    return (0, l.jsx)(
                        nG.OZ,
                        {
                            innerRole: i,
                            innerAriaLabel: n,
                            ref: (e) => {
                                ((s.current = e), (t.current = e?.getScrollerNode() ?? null));
                            },
                            sectionHeight: 26,
                            rowHeight: 64,
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
function ll() {
    let e = (0, R.A)(),
        t = (0, M.GR)(),
        n = { count: t.length, max: e ? 8 : 3 },
        i = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["+tnO34"], n),
            et.intl.formatToPlainString(ee.default["pu6/U0"], n),
        );
    return t.length > 0
        ? (0, l.jsx)(ln, { sectionType: D.Ef.ACTIVE, sectionTitle: i, requests: t })
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(x.E, { className: e0.QB, variant: "body-sm/medium", color: "text-default", children: i }),
                  (0, l.jsx)("div", {
                      className: n7.aP,
                      children: (0, l.jsx)(x.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          children: et.intl.string(ee.default.C4ScLD),
                      }),
                  }),
              ],
          });
}
function li() {
    let e = (0, M.xr)(),
        t = (0, R.A)() ? 8 : 3,
        n = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["1/PzIj"], { maxConnections: t }),
            et.intl.formatToPlainString(ee.default.RcTgiE, { maxConnections: t }),
        );
    return e
        ? (0, l.jsx)("div", {
              className: n7.rv,
              children: (0, l.jsx)(x.E, { variant: "footnote/medium", color: "text-muted", children: n }),
          })
        : null;
}
function lr() {
    let e = (0, nz.N)(),
        t = (0, nz.z)(),
        n = (0, nP.YW)({ helpline: e, throughline: t })
            .with({ helpline: !0 }, () =>
                et.intl.format(ee.default["KOwsf/"], {
                    helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                }),
            )
            .with({ throughline: !0 }, () => et.intl.format(ee.default["6tsC8u"], { helpLink: n6.CL }))
            .otherwise(() => null);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(z.D, {
                      className: n7.rH,
                      variant: "heading-xs/semibold",
                      children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default["7/tVhv"]) }),
                  }),
                  (0, l.jsx)(x.E, { variant: "body-xs/medium", color: "text-muted", children: n }),
              ],
          });
}
function ls() {
    let e = (0, M.xk)(D.Ef.PENDING),
        t = (0, ei.y)(
            et.intl.formatToPlainString(ee.default.IkAgkG, { count: e.length }),
            et.intl.formatToPlainString(ee.default.Q8XnAa, { count: e.length }),
        );
    return 0 === e.length ? null : (0, l.jsx)(ln, { sectionType: D.Ef.PENDING, sectionTitle: t, requests: e });
}
let la = function () {
    let e = (0, R.A)();
    return (0, l.jsxs)("div", {
        className: n7.kL,
        children: [
            (0, l.jsx)(ne, {}),
            e ? (0, l.jsx)(le, {}) : (0, l.jsx)(lt, {}),
            (0, l.jsx)(ll, {}),
            (0, l.jsx)(ls, {}),
            (0, l.jsx)(li, {}),
            (0, l.jsx)(lr, {}),
        ],
    });
};
var ld = n(561028),
    lc = n(946015),
    lu = n(270003),
    lo = n(993077),
    lm = n(935286),
    lx = n(840559),
    lh = n(997187),
    lf = n(723923),
    lj = n(629143);
let lg = function () {
    let e = I.dm.useSetting(),
        { categories: t, initialized: n } = (0, tq.cf)([lh.A], () => lh.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == n && (0, lx.cR)();
        }, [n]),
        (0, l.jsx)("div", {
            className: lj.kL,
            children: (0, l.jsxs)(lu.n, {
                label: et.intl.string(ee.default.USIXU7),
                children: [
                    (0, l.jsx)(nA.d, {
                        checked: e,
                        description: et.intl.string(ee.default["5MdB3j"]),
                        onChange: I.dm.updateSetting,
                        label: et.intl.string(ee.default.zkEceS),
                    }),
                    e
                        ? (0, l.jsx)(lo.Z, {
                              className: lj.MT,
                              type: lo.Z.Types.CUSTOM,
                              outline: !0,
                              children: (0, l.jsxs)(lc.s, {
                                  justify: lc.s.Justify.END,
                                  children: [
                                      (0, l.jsx)(lc.s.Child, {
                                          children: (0, l.jsx)(x.E, {
                                              variant: "body-sm/semibold",
                                              color: "text-default",
                                              children: et.intl.string(ee.default.xAVm7K),
                                          }),
                                      }),
                                      (0, l.jsx)(n2.vN, {
                                          children: (0, l.jsx)(ld.N_, {
                                              onClick: ni.default,
                                              to: { pathname: U.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: et.intl.string(ee.default.cUIXFY),
                                          }),
                                      }),
                                      (0, l.jsx)(j.fk, { icon: lm.E, className: lj.UE, disableColor: !0 }),
                                  ],
                              }),
                          })
                        : null,
                    (0, l.jsx)(nA.d, {
                        checked: !!t[lf.HO.FAMILY_CENTER_DIGEST],
                        description: et.intl.string(ee.default.y34S46),
                        onChange: function (e) {
                            (0, lx.CA)(lf.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: et.intl.string(ee.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
var lv = n(731738),
    lA = n(612200),
    lE = n(913379),
    lN = n(210714);
let lp = new (n(611599).Vy)("useRefetchWhenSelectedTeenMissing");
var ly = n(33666),
    lb = n(204925);
function lT(e) {
    let { location: t, onMountEffect: n } = e,
        l = (0, ly.A)(),
        r = (0, M.W1)(),
        {
            familyCenterInitialized: s,
            isLoading: a,
            hasLoadFailed: c,
        } = (0, d.cf)([L.A], () => ({
            familyCenterInitialized: L.A.getIsInitialized(),
            isLoading: L.A.isLoading(),
            hasLoadFailed: L.A.hasInitialLoadFailed(),
        })),
        u = (0, ea.k)(),
        { selectedTab: o, handleTabChange: m } = F(),
        x = eK.default.getCurrentUser(),
        h = null != l,
        f = s && null != x && !h;
    ((0, tK.Ay)(() => {
        ((0, lN.d0)("family-center"), null != n && n());
    }),
        (function () {
            let {
                    isInitialized: e,
                    isLoading: t,
                    selectedTeenId: n,
                } = (0, tq.cf)([L.A], () => ({
                    isInitialized: L.A.getIsInitialized(),
                    isLoading: L.A.isLoading(),
                    selectedTeenId: L.A.getSelectedTeenId(),
                })),
                l = (0, M.Li)(),
                r = i.useRef(!1);
            i.useEffect(() => {
                if (!l) {
                    r.current = !1;
                    return;
                }
                !e ||
                    L.A.isLoading() ||
                    null != n ||
                    r.current ||
                    ((r.current = !0),
                    (async function () {
                        try {
                            await C.Ay.initialPageLoad({ showLoading: !1 });
                        } catch (e) {
                            lp.error("Failed to refetch Family Center for a missing selected teen", e);
                        }
                    })());
            }, [e, t, n, l]);
        })());
    let j = { isConsideredAdult: "adult" === l, numOfAcceptedRequests: r, selectedTab: o, selectedTeenId: u },
        g = i.useRef(j);
    return (
        i.useEffect(() => {
            g.current = j;
        }),
        i.useEffect(() => {
            if (s && h) {
                let { isConsideredAdult: e, numOfAcceptedRequests: n, selectedTab: l, selectedTeenId: i } = g.current;
                (k.default.track(U.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: n,
                    selected_teen_id: i,
                    initial_page: D.zu[l],
                    source: D.iN[t],
                }),
                    lE.A.increment({ name: lv.K.FAMILY_CENTER_VIEW }));
            }
        }, [s, h, t]),
        i.useEffect(() => {
            f && !L.A.isLoading() && (0, lA.yO)(lb.w_.FAMILY_CENTER);
        }, [f, a]),
        { isLoading: a, hasLoadFailed: c, selectedTab: o, handleTabChange: m, showAgeGateModal: f }
    );
}
var lS = n(220330);
let lI = {
        [D.u9.REQUESTS]: la,
        [D.u9.ACTIVITY]: nU,
        [D.u9.SETTINGS]: lg,
        [D.u9.CONTENT_AND_SOCIAL]: tO,
        [D.u9.DATA_AND_PRIVACY]: tH,
        [D.u9.SCREEN_TIME_CONTROLS]: lg,
    },
    l_ = { [D.u9.REQUESTS]: la, [D.u9.ACTIVITY]: nU, [D.u9.CONTENT_AND_SOCIAL]: tO, [D.u9.DATA_AND_PRIVACY]: tH };
function lC() {
    return (0, l.jsx)(u.B, { justify: "center", align: "center", className: lS.g4, children: (0, l.jsx)(o.y, {}) });
}
function lL(e) {
    let { fillPanel: t = !1 } = e;
    return (0, l.jsxs)(u.B, {
        justify: "center",
        align: "center",
        gap: 24,
        padding: t ? 24 : { top: 96, bottom: 96 },
        className: s()(lS._I, { [lS.TP]: t }),
        role: "alert",
        children: [
            (0, l.jsxs)(u.B, {
                align: "center",
                gap: 12,
                children: [
                    (0, l.jsx)(m.E, { size: "lg", color: c.A.colors.ICON_FEEDBACK_CRITICAL, "aria-hidden": !0 }),
                    (0, l.jsx)(x.E, {
                        variant: "body-md/medium",
                        color: "text-strong",
                        children: et.intl.string(ee.default.nGX8Co),
                    }),
                ],
            }),
            (0, l.jsx)(h.$, {
                variant: "primary",
                text: et.intl.string(et.t["7NqTJn"]),
                onClick: () => C.Ay.initialPageLoad(),
            }),
        ],
    });
}
function lR(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, M.VT)(),
        r = (0, R.A)();
    return [D.u9.CONTENT_AND_SOCIAL, D.u9.DATA_AND_PRIVACY, D.u9.SCREEN_TIME_CONTROLS].includes(t)
        ? null
        : (0, l.jsxs)(f.V, {
              className: lS.c5,
              "aria-label": et.intl.string(ee.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, l.jsx)(f.V.Item, {
                      className: lS.jA,
                      id: D.u9.ACTIVITY,
                      children: et.intl.string(ee.default.bdBmqy),
                  }),
                  (0, l.jsxs)(f.V.Item, {
                      className: lS.jA,
                      id: D.u9.REQUESTS,
                      "aria-label": et.intl.string(ee.default["gVWG+6"]),
                      children: [
                          et.intl.string(ee.default["gVWG+6"]),
                          i > 0 ? (0, l.jsx)(j.hV, { className: lS.qS, count: i }) : null,
                      ],
                  }),
                  r
                      ? (0, l.jsx)(f.V.Item, {
                            className: lS.jA,
                            id: D.u9.SETTINGS,
                            children: et.intl.string(et.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function lk(e) {
    let { theme: t, section: n, handleItemSelect: i } = e,
        r = (0, b.GV)(),
        d = (0, M.VT)();
    return (0, l.jsx)(g.N, {
        theme: t,
        children: (e) =>
            (0, l.jsxs)(T.A, {
                className: s()(e, lS.ZB),
                scrollable: a.Fr,
                role: "navigation",
                "aria-labelledby": r,
                toolbar: !0,
                children: [
                    (0, l.jsx)(T.A.Icon, { icon: v.n, "aria-hidden": !0 }),
                    (0, l.jsx)(T.A.Title, { id: r, children: et.intl.string(ee.default.RZqaJn) }),
                    (0, l.jsx)(T.A.Divider, {}),
                    (0, l.jsxs)(f.V, {
                        "aria-label": et.intl.string(ee.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, l.jsx)(f.V.Item, {
                                id: D.u9.ACTIVITY,
                                className: lS.AS,
                                children: et.intl.string(ee.default.bdBmqy),
                            }),
                            (0, l.jsxs)(f.V.Item, {
                                id: D.u9.REQUESTS,
                                className: lS.AS,
                                "aria-label": et.intl.string(ee.default["gVWG+6"]),
                                children: [
                                    et.intl.string(ee.default["gVWG+6"]),
                                    d > 0 ? (0, l.jsx)(j.hV, { className: lS.qS, count: d }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function lD() {
    let e = (0, b.GV)(),
        {
            isLoading: t,
            hasLoadFailed: n,
            selectedTab: r,
            handleTabChange: s,
            showAgeGateModal: a,
        } = lT({
            location: D.MH.SETTINGS,
            onMountEffect: () => {
                C.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            (0, _._)(P[r]);
        }, [r]),
        a)
    )
        return null;
    let d = lI[r];
    return (0, l.jsxs)("main", {
        className: lS.kL,
        "aria-label": et.intl.string(ee.default.RZqaJn),
        children: [
            (0, l.jsx)(y.HI, { location: et.intl.string(ee.default.RZqaJn) }),
            (0, l.jsx)(lR, {
                section: r,
                handleItemSelect: function (e) {
                    s(e);
                },
            }),
            (0, l.jsx)(f.V.Panel, {
                id: r,
                "aria-labelledby": e,
                className: lS.Us,
                children: n ? (0, l.jsx)(lL, {}) : t ? (0, l.jsx)(lC, {}) : (0, l.jsx)(d, {}),
            }),
        ],
    });
}
function lU() {
    let { analyticsLocations: e } = (0, p.Ay)(N.A.FAMILY_CENTER),
        t = (0, R.A)(),
        n = (0, d.bG)([L.A], () => L.A.getIsInitialized()),
        r = (0, d.bG)([S.A], () => S.A.theme),
        a = (0, b.GV)(),
        {
            isLoading: c,
            hasLoadFailed: u,
            selectedTab: o,
            handleTabChange: m,
            showAgeGateModal: x,
        } = lT({
            location: D.MH.SIDENAV,
            onMountEffect: () => {
                (E.I(U.BVt.FAMILY_CENTER), !L.A.isLoading() && L.A.canRefetch() && C.Ay.initialPageLoad());
            },
        });
    if (
        (i.useEffect(() => {
            let e = I.dm.getSetting();
            n && t && void 0 === e && I.dm.updateSetting(!0);
        }, [n, t]),
        x)
    )
        return null;
    let h = o !== D.u9.SETTINGS && o !== D.u9.SCREEN_TIME_CONTROLS ? o : D.u9.ACTIVITY,
        j = l_[h];
    return (0, l.jsx)(p.f5, {
        value: e,
        children: (0, l.jsxs)("main", {
            className: s()(lS.kL, lS.ei),
            "aria-label": et.intl.string(ee.default.RZqaJn),
            children: [
                (0, l.jsx)(y.HI, { location: et.intl.string(ee.default.RZqaJn) }),
                (0, l.jsx)(lk, {
                    theme: r,
                    section: h,
                    handleItemSelect: function (e) {
                        m(e);
                    },
                }),
                (0, l.jsx)(f.V.Panel, {
                    id: h,
                    "aria-labelledby": a,
                    className: lS.Om,
                    children: u
                        ? (0, l.jsx)(lL, { fillPanel: !0 })
                        : (0, l.jsx)(A.Ip, {
                              children: (0, l.jsx)("div", {
                                  className: lS.O4,
                                  children: c ? (0, l.jsx)(lC, {}) : (0, l.jsx)(j, {}),
                              }),
                          }),
                }),
            ],
        }),
    });
}
