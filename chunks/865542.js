n.d(t, { A: () => lT, p: () => lp });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(607399),
    d = n(702841),
    c = n(331322),
    u = n(289873),
    o = n(761508),
    x = n(812993);
if (21552 == n.j) var m = n(43990);
if (21552 == n.j) var h = n(177953);
if (21552 == n.j) var j = n(364522);
var f = n(944791),
    g = n(793574),
    v = n(688810),
    A = n(726249),
    E = n(915089),
    N = n(742589),
    p = n(363195),
    T = n(885386),
    S = n(669067),
    I = n(899847),
    y = n(695515),
    _ = n(438732),
    b = n(174459),
    C = n(191627),
    R = n(652215);
let L = {
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
                I.Ay.selectTab(e), b.default.track(R.HAw.FAMILY_CENTER_ACTION, { action: C.qb.TabChange, tab: e });
            },
        };
    };
var D = n(834981),
    U = n(843282),
    P = n(778712),
    O = n(939249),
    F = n(548411),
    M = n(661531),
    G = n(834730),
    V = n(534514),
    w = n(10005),
    z = n(153739),
    H = n(284009),
    B = n.n(H),
    Y = n(192308),
    q = n(885574),
    Z = n(691540),
    K = n(857250),
    W = n(97483),
    X = n(39623),
    Q = n(935208),
    J = n(864202),
    $ = n(580630),
    ee = n(602339),
    et = n(375708);
function en(e) {
    return new Intl.DateTimeFormat(et.intl.currentLocale, { month: "short", day: "numeric" }).format((0, J.default)(e));
}
var el = n(923531),
    ei = n(294433);
function es(e) {
    return (0, d.bG)([y.A], () => y.A.getTotalForDisplayType(e));
}
function er(e) {
    let t = es(e) ?? 0;
    if (e === C.NV.TOTAL_VOICE_MINUTES) return (0, el.hO)(t);
    if (e === C.NV.PURCHASES) {
        let e = y.A.getTotalSpendAmount(),
            n = y.A.getTotalSpendCurrency();
        return null != e && null != n ? (0, $.RS)(e, n) : t;
    }
    if (e === C.NV.GIFTS) {
        let e = y.A.getTotalGiftValue();
        if (null != e) return (0, $.RS)(e.amount, e.currency);
    }
    return t;
}
var ea = n(500470),
    ed = n(707554),
    ec = n(474063);
let eu = function (e) {
    let { header: t, displayType: n } = e,
        i = es(n),
        s = er(n);
    return (0, l.jsxs)("div", {
        className: ec.hJ,
        children: [
            (0, l.jsx)(V.D, {
                variant: "heading-xxl/medium",
                color: i > 0 ? "text-brand" : "text-muted",
                children: (0, l.jsx)(ed.F, { children: s }),
            }),
            (0, l.jsx)(G.E, { variant: "text-sm/semibold", className: ec.io, children: t }),
        ],
    });
};
var eo = n(821701),
    ex = n(427262),
    em = n(575593),
    eh = n(898461),
    ej = n(203632),
    ef = n(486020),
    eg = n(788868);
function ev(e, t) {
    let n,
        l,
        i = null != t;
    if (null != e)
        (n = e.name),
            (l = (function (e) {
                switch (e) {
                    case em.R.AVATAR_DECORATION:
                        return et.intl.string(ee.default.obi47v);
                    case em.R.PROFILE_EFFECT:
                        return et.intl.string(ee.default.RX8BMR);
                    case em.R.NAMEPLATE:
                        return et.intl.string(ee.default.nNGEHk);
                    case em.R.BUNDLE:
                        return et.intl.string(ee.default.VS1fKo);
                    case em.R.PROFILE_FRAME:
                        return et.intl.string(ee.default.JiIY1l);
                    default:
                        return "";
                }
            })(e.type));
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
    eT = n(780898),
    eS = n(474257),
    eI = n(665411),
    ey = n(215006);
function e_(e) {
    let { displayName: t, product: n } = e,
        i = ((e) => {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, eh.T)(t) ? (0, ef.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 }) : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: ey._P });
}
function eb(e) {
    let { displayName: t, nameplateData: n } = e,
        { staticImageUrl: i } = (0, ep.K)(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: ey.M4 });
}
function eC(e) {
    let { displayName: t, product: n } = e,
        i = (function (e) {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, ej.C3)(t) ? t.thumbnailPreviewSrc : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: ey._P });
}
function eR(e) {
    let { product: t } = e,
        n = (0, eS.A)(t.skuId, "FamilyCenterActivityItemPreview");
    return null == n
        ? null
        : (0, l.jsx)("div", {
              className: ey.pI,
              children: (0, l.jsx)("div", { className: ey.ZS, children: (0, l.jsx)(eI.A, { frame: n }) }),
          });
}
function eL(e) {
    let { subscriptionPlanId: t } = e;
    if (null == t) return (0, l.jsx)("div", { className: ey.T8, children: (0, l.jsx)(eA.U, {}) });
    let n = (function (e) {
        if (null == e) return !1;
        let t = eg.hd[e];
        return t?.skuId === eg.pe.GUILD;
    })(t);
    return (0, l.jsx)("div", {
        className: ey.T8,
        children: n
            ? (0, l.jsx)(eE._, { size: "custom", width: 20, height: 20 })
            : (0, l.jsx)(eN.t, { size: "custom", width: 20, height: 20 }),
    });
}
function ek(e) {
    let { displayName: t, product: n } = e;
    if (null == n) return (0, l.jsx)("div", { className: ey.T8, children: (0, l.jsx)(eA.U, {}) });
    switch (n.type) {
        case em.R.AVATAR_DECORATION:
            return (0, l.jsx)(e_, { displayName: t, product: n });
        case em.R.NAMEPLATE:
            let i = (0, eT.EQ)(n);
            return null != i ? (0, l.jsx)(eb, { displayName: t, nameplateData: i }) : null;
        case em.R.PROFILE_EFFECT:
            return (0, l.jsx)(eC, { displayName: t, product: n });
        case em.R.PROFILE_FRAME:
            return (0, l.jsx)(eR, { product: n });
        default:
            return (0, l.jsx)("div", { className: ey.T8, children: (0, l.jsx)(eA.U, {}) });
    }
}
let eD = function (e) {
    let { displayName: t, isSubscription: n, product: i, subscriptionPlanId: s } = e;
    return n ? (0, l.jsx)(eL, { subscriptionPlanId: s }) : (0, l.jsx)(ek, { displayName: t, product: i });
};
var eU = n(284809);
let eP = i.memo((e) => {
    let {
            skuId: t,
            subscriptionPlanId: n,
            price: i,
            gifterUserId: s,
            claimed: a,
            offeredAt: d,
            claimedAt: c,
            className: u,
        } = e,
        { product: o } = (0, eo.A)(t),
        x = (0, z.F7)(s),
        { displayName: m, isSubscription: h } = ev(o ?? null, n);
    if ((null != t && !h && null == o) || null == m) return null;
    let j = (function (e) {
        let { claimed: t, price: n, gifterName: l, offeredAt: i, claimedAt: s } = e,
            r = null != n ? (0, $.$g)(n.amount, n.currency) : null,
            a = null;
        return (
            null != r && null != l
                ? (a = et.intl.formatToPlainString(ee.default["o44n/1"], { price: r, username: l }))
                : null != r && (a = r),
            [
                a,
                t
                    ? et.intl.formatToPlainString(ee.default.kDyllq, { date: en(s ?? i) })
                    : et.intl.formatToPlainString(ee.default.gAG45y, { date: en(i) }),
            ]
                .filter(Boolean)
                .join(" \u2022 ")
        );
    })({ claimed: a, price: i, gifterName: null != x ? ex.Ay.getName(x) : null, offeredAt: d, claimedAt: c });
    return (0, l.jsxs)("div", {
        className: r()(eU.k, u),
        children: [
            (0, l.jsx)(eD, { displayName: m, isSubscription: h, product: o ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(G.E, { variant: "text-md/semibold", children: m }),
                    (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: j }),
                ],
            }),
        ],
    });
});
eP.displayName = "FamilyCenterActivityGiftRow";
var eO = n(781696),
    eF = n(714991),
    eM = n(23339),
    eG = n(97808),
    eV = n(260509),
    ew = n(904425);
let ez = function (e) {
    let { guildId: t } = e,
        n = (0, d.bG)([y.A], () => y.A.getGuild(t));
    if (void 0 === n) return null;
    let { name: i } = n,
        s = (0, eV.Iv)(n, 40, !0),
        r = null,
        a = 10;
    return (
        null == n.icon && null != i && (a = eB[(r = (0, eM.oN)(i)).length - 1] ?? eB[eB.length - 1]),
        (0, l.jsx)("div", {
            className: ew.k,
            children: (0, l.jsxs)("div", {
                style: { fontSize: a },
                children: [
                    null != r ? (0, l.jsx)("div", { className: ew.X, "aria-hidden": !0, children: r }) : null,
                    null != s ? (0, l.jsx)(eG.eu, { src: s, size: P._3.SIZE_40, "aria-hidden": !0 }) : null,
                ],
            }),
        })
    );
};
var eH = n(751406);
let eB = [18, 18, 16, 16, 14, 12, 10],
    eY = i.memo((e) => {
        let { guildId: t, className: n, customSubtext: i } = e,
            s = (0, d.bG)([y.A], () => y.A.getGuild(t));
        if (void 0 === s) return null;
        let a = s.features.has(R.GuildFeatures.VERIFIED) || s.features.has(R.GuildFeatures.PARTNERED),
            { name: c } = s;
        return (0, l.jsxs)("div", {
            className: r()(eH.kL, n),
            children: [
                (0, l.jsx)(ez, { guildId: t }),
                (0, l.jsxs)("div", {
                    className: eH.$z,
                    children: [
                        (0, l.jsxs)("div", {
                            className: eH.wx,
                            children: [
                                a
                                    ? (0, l.jsx)(eF.A, {
                                          guild: s,
                                          tooltipPosition: "bottom",
                                          tooltipColor: eO.ST.Colors.PRIMARY,
                                          className: eH.n2,
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
                                    : void 0 !== s.approximateMemberCount
                                      ? et.intl.format(ee.default["5JmNgg"], { members: s.approximateMemberCount })
                                      : null,
                        }),
                    ],
                }),
            ],
        });
    });
eY.displayName = "FamilyCenterActivityGuildRow";
var eq = n(893458);
let eZ = i.memo((e) => {
    let { skuId: t, subscriptionPlanId: n, total: i, currency: s, className: a } = e,
        { product: d } = (0, eo.A)(t),
        { displayName: c, typeName: u, isSubscription: o } = ev(d ?? null, n);
    if ((null != t && !o && null == d) || null == c) return null;
    let x = (0, $.$g)(i, s);
    return (0, l.jsxs)("div", {
        className: r()(eq.k, a),
        children: [
            (0, l.jsx)(eD, { displayName: c, isSubscription: o, product: d ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(G.E, { variant: "text-md/semibold", children: null != u ? `${c} \u{2022} ${u}` : c }),
                    (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: x }),
                ],
            }),
        ],
    });
});
eZ.displayName = "FamilyCenterActivityPurchaseRow";
var eK = n(287809),
    eW = n(283900),
    eX = n(914518);
let eQ = i.memo((e) => {
    let { userId: t, subText: n, className: i } = e,
        s = (0, d.bG)([eK.default], () => eK.default.getUser(t));
    return void 0 === s
        ? null
        : (0, l.jsxs)("div", {
              className: r()(eX.k, i),
              children: [
                  (0, l.jsx)(eW.H, { user: s, avatarSize: P._3.SIZE_40 }),
                  (0, l.jsx)("div", {
                      children: (0, l.jsxs)("div", {
                          className: eX.$,
                          children: [
                              (0, l.jsx)(G.E, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: ex.Ay.getName(s),
                              }),
                              null != n &&
                                  (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                          ],
                      }),
                  }),
              ],
          });
});
eQ.displayName = "FamilyCenterActivityUserRow";
var eJ = n(475833),
    e$ = n(768869),
    e0 = n(818050);
let e3 = function (e) {
    let { text: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: r()(n, e$.I),
        children: [
            (0, l.jsx)("img", { className: e$.S, src: "/assets/f47ef22a8aeff32a.svg", alt: "" }),
            (0, l.jsx)(G.E, { className: e0.Ot, variant: "text-sm/medium", color: "text-muted", children: t }),
        ],
    });
};
var e2 = n(459192),
    e1 = n(494596);
let e9 = function (e) {
    let { userId: t, dmsSent: n, callCount: i } = e,
        s = (0, d.bG)([eK.default], () => eK.default.getUser(t));
    return void 0 === s
        ? null
        : (0, l.jsx)(e2.u, {
              title: s.username,
              body: (0, el.fq)(n, i),
              asContainer: !0,
              children: (0, l.jsx)("div", {
                  className: e1.k,
                  children: (0, l.jsx)(eW.H, { user: s, avatarSize: P._3.SIZE_40 }),
              }),
          });
};
var e8 = n(833802);
let e5 = function () {
    let e = (0, d.bG)([y.A], () => y.A.getTopUserActivities()),
        t = (0, d.bG)([y.A], () => y.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: e8.kL,
              children: [
                  e.length > 0 &&
                      (0, l.jsxs)("div", {
                          className: e8.A2,
                          children: [
                              (0, l.jsx)(V.D, {
                                  variant: "text-md/medium",
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
                              (0, l.jsx)(V.D, {
                                  variant: "text-md/medium",
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
                                            let t = y.A.getGuild(e.guild_id),
                                                n = t?.name ?? "Unknown Server";
                                            return (0, l.jsx)(
                                                e2.u,
                                                {
                                                    title: n,
                                                    body: (0, el.fq)(e.messages_sent, e.call_count) ?? null,
                                                    asContainer: !0,
                                                    children: (0, l.jsx)(ez, { guildId: e?.guild_id }),
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
var e7 = n(990021),
    e4 = n(453287);
function e6() {
    let e = i.useCallback(() => {
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("3083"), n.e("60106")]).then(n.bind(n, 853809));
            return (t) => (0, l.jsx)(e, { ...t });
        });
    }, []);
    return (0, l.jsx)(O.D, {
        className: e7.YL,
        onClick: e,
        children: (0, l.jsx)(q.m, { size: "custom", color: "currentColor", className: e7.Kk, width: 15, height: 15 }),
    });
}
function te(e) {
    let { displayType: t } = e,
        n = i.useCallback(() => {
            (0, Z.P0)((0, K.o)(et.intl.string(ee.default.Wu8BK2), W.Ck.FAILURE));
        }, []),
        s = (0, _.A)(),
        a = (0, d.yK)([y.A], () => y.A.getActionsForDisplayType(t)),
        c = es(t),
        o = er(t),
        { loadMore: x, isMoreLoading: m } = (0, w.A)({ onError: n }),
        h = (0, el.kN)().get(t),
        [j, f] = i.useState(C.PH),
        g = i.useCallback(() => {
            f((e) => e + C.PH), x(t);
        }, [t, x]);
    B()(h, `No text for action type: ${t}`);
    let v = (t === C.NV.PURCHASES || t === C.NV.GIFTS) && null != o ? h.sectionHeader(o) : h.sectionHeader(c),
        A = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = a[t];
                if ((0, el.aq)(n)) {
                    let e = Q.default.extractTimestamp(n.event_id),
                        t = (0, el.i6)(e, h.timestampFormatter);
                    return (0, l.jsx)(eQ, { userId: n.entity_id, subText: t }, n.event_id);
                }
                if ((0, el.Is)(n)) return (0, l.jsx)(eY, { guildId: n.entity_id }, n.event_id);
                if ((0, el.u7)(n)) {
                    let e = y.A.getPurchaseInfo(n.entity_id);
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
                    let e = y.A.getGiftInfo(n.entity_id);
                    if (null == e) return null;
                    let {
                        skuId: t,
                        subscriptionPlanId: i,
                        price: s,
                        gifterUserId: r,
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
                            price: s,
                            gifterUserId: r,
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
                        (0, l.jsx)(G.E, { className: e7.bV, variant: "text-md/semibold", children: v }),
                        void 0 !== h.sectionDescription
                            ? (0, l.jsx)(G.E, {
                                  className: e7.yV,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: h.sectionDescription(s ?? !1),
                              })
                            : null,
                    ],
                }),
            [v, h, s],
        );
    if (0 === a.length) return null;
    let N = a.slice(0, j);
    return (0, l.jsxs)("div", {
        className: e7.A2,
        children: [
            E(),
            (0, l.jsx)("div", {
                className: e7.o1,
                style: { maxHeight: 65 * N.length },
                children: N.map((e, t) => A({ row: t })),
            }),
            N.length < c
                ? (0, l.jsx)(O.D, {
                      className: r()(e7.FQ, { [e7.r9]: m }),
                      onClick: g,
                      role: "button",
                      "aria-disabled": m,
                      children: m
                          ? (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, className: e7.u1 })
                          : (0, l.jsx)(G.E, {
                                className: e7.UX,
                                variant: "text-sm/bold",
                                children: et.intl.format(ee.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - N.length, C.PH)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
function tt() {
    let e = (0, _.A)(),
        t = (0, D.vx)(),
        n = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["7hqFl9"], { activeLinks: t.length }),
            et.intl.string(ee.default["Q/D/0Q"]),
        ),
        i = (0, el.cV)(!!e),
        s = (0, D.v4)(i);
    return e && t.length > 1
        ? (0, l.jsx)(G.E, { variant: "eyebrow", children: s })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  e ? null : (0, l.jsx)(X.b, { size: "xs", color: "currentColor", className: e7.Kk }),
                  (0, l.jsx)(G.E, { variant: "eyebrow", children: n }),
              ],
          });
}
let tn = i.memo((e) => {
    let { userId: t, subText: n, avatarSize: i = P._3.SIZE_40, hideUserTag: s = !1 } = e,
        r = (0, z.F7)(t);
    return void 0 === r
        ? null
        : (0, l.jsxs)("div", {
              className: e7.iO,
              children: [
                  (0, l.jsx)(eW.H, { user: r, avatarSize: i }),
                  (0, l.jsxs)("div", {
                      className: e7.TK,
                      children: [
                          (0, l.jsx)(eJ.A, { user: r, hideUserTag: s }),
                          void 0 !== n
                              ? (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: n })
                              : null,
                      ],
                  }),
              ],
          });
});
function tl() {
    let e = (0, D.GR)(),
        t = (0, d.bG)([y.A], () => y.A.getSelectedTeenId()),
        { selectTeenUser: n } = (0, w.A)({}),
        s = e.map((e) => ({ label: e.id, value: e.id })),
        r = i.useCallback((e) => (0, l.jsx)(tn, { userId: e.value, avatarSize: P._3.SIZE_24 }), []);
    return (0, l.jsx)(U.Pw, {
        className: e7.Lt,
        renderOptionLabel: r,
        renderOptionValue: (e) => {
            let [t] = e;
            return r(t);
        },
        serialize: (e) => e,
        select: function (e) {
            n(e), b.default.track(R.HAw.FAMILY_CENTER_ACTION, { action: C.qb.SelectTeen });
        },
        isSelected: (e) => e === t,
        options: s,
        "data-migration-pending": !0,
    });
}
function ti() {
    let e = (0, ea.k)(),
        t = (0, _.A)(),
        n = (0, D.vx)(),
        i = (0, el.cV)(!!t),
        s = (0, D.v4)(i);
    return null === e ? null : t && 1 !== n.length ? (0, l.jsx)(tl, {}) : (0, l.jsx)(tn, { userId: e, subText: s });
}
tn.displayName = "FamilyCenterActivityCardAccountRow";
let ts = function () {
    let e = (0, el.Mo)(),
        t = (0, d.bG)([y.A], () => Object.values(C.NV).some((e) => y.A.getTotalForDisplayType(e) > 0)),
        n = (0, el.jp)(),
        i = (0, D.v4)(n);
    return (0, l.jsxs)("div", {
        className: e7.kL,
        children: [
            (0, l.jsxs)("div", { className: e7.vF, children: [(0, l.jsx)(tt, {}), (0, l.jsx)(e6, {})] }),
            (0, l.jsxs)("div", {
                className: e4.a,
                children: [
                    (0, l.jsx)("div", { className: e7.wx, children: (0, l.jsx)(ti, {}) }),
                    (0, l.jsxs)(c.B, {
                        gap: 32,
                        padding: 32,
                        fullWidth: !1,
                        children: [
                            (0, l.jsx)("div", {
                                className: e7.O2,
                                children: e
                                    .filter((e) => {
                                        let [t] = e;
                                        return t !== C.NV.GIFTS;
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
                                className: e7.RJ,
                                children: [
                                    (0, l.jsx)(e5, {}),
                                    t
                                        ? e.map((e) => {
                                              let [t] = e;
                                              return (0, l.jsx)(te, { displayType: t }, `${t}-list`);
                                          })
                                        : (0, l.jsx)(e3, { className: e7.RL, text: i ?? "" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var tr = n(336541);
function ta() {
    let e = (0, D.vx)(),
        t = (0, z.y3)(),
        { selectTeenUser: n } = (0, w.A)({}),
        s = e.map((e) => ({ label: e, value: e })),
        a = i.useCallback((e) => (0, l.jsx)(tn, { userId: e.value, avatarSize: P._3.SIZE_24, hideUserTag: !0 }), []);
    return 0 === e.length
        ? null
        : (0, l.jsx)("div", {
              className: r()(tr.Gq, { [tr.wS]: e.length > 1 }),
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
                            options: s,
                            "data-migration-pending": !0,
                        })
                      : (0, l.jsx)(tn, { userId: e[0], avatarSize: P._3.SIZE_24, hideUserTag: !0 }),
          });
}
function td() {
    let { selectedTab: e, handleTabChange: t } = k(),
        n = i.useCallback(() => {
            t(C.u9.ACTIVITY);
        }, [t]);
    return (0, l.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, l.jsxs)(O.D, {
                className: tr.Gv,
                onClick: n,
                "aria-label": et.intl.string(et.t.ybUZql),
                children: [
                    (0, l.jsx)(F.Z, { size: "sm", color: M.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    (0, l.jsx)(G.E, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: et.intl.string(et.t["13/7kX"]),
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
                        className: tr.gn,
                        children: [
                            (0, l.jsx)(G.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: et.intl.string(ee.default.RZqaJn),
                            }),
                            (0, l.jsx)(V.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: et.intl.string(e === C.u9.CONTENT_AND_SOCIAL ? et.t["+o1pDZ"] : et.t.OAuOHD),
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
    tu = n(628630);
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
                            (0, l.jsx)(V.D, { variant: "heading-lg/semibold", color: "text-strong", children: n }),
                        null != i && (0, l.jsx)(G.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                    ],
                }),
            (0, l.jsx)("div", { className: tu.Yq, children: t }),
            (0, l.jsx)(tc.c, { className: tu.yj }),
        ],
    });
};
var tx = n(884307);
function tm(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: tx.y, children: t });
}
var th = n(389462),
    tj = n(464946),
    tf = n(750994),
    tg = n(171316);
function tv() {
    let e = (0, tg.KK)(),
        t = (0, ea.k)() ?? void 0,
        n = (0, tg.NZ)();
    return (0, l.jsx)(tj.h, {
        children: (0, l.jsx)(tf.Ay, {
            title: n ? et.intl.string(et.t.PMsfcH) : et.intl.string(et.t.RAQUSN),
            note: n ? et.intl.string(et.t.XXGmuB) : et.intl.string(et.t.wbYDfT),
            value: !e,
            onChange: function (e) {
                th.yr.updateControlledSetting(t, !e);
            },
        }),
    });
}
var tA = n(379257),
    tE = n(847599),
    tN = n(953298),
    tp = n(975571);
function tT() {
    let e = (0, ea.k)() ?? void 0,
        t = (0, tg.KK)(),
        n = th.ES.useControlledSetting(e);
    return (0, l.jsx)(tj.h, {
        children: (0, l.jsx)(tf.Ay, {
            title: et.intl.string(et.t["3o2ojh"]),
            value: !t && !n,
            onChange: (t) => {
                !t && (0, tN.w)()
                    ? tA.A.showAgeVerificationGetStartedModal({ entryPoint: tE.q1.MESSAGE_REQUESTS_SETTINGS })
                    : th.ES.updateControlledSetting(e, !t);
            },
            disabled: t,
            note: et.intl.format(et.t.IoztJ0, { helpdeskArticle: tp.A.getArticleURL(R.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
var tS = n(665260),
    tI = n(115063);
function ty() {
    let e = (0, ea.k)() ?? void 0,
        t = th.up.useControlledSetting(e),
        n = i.useMemo(() => (0, tI.Lx)(t), [t]);
    return null == e
        ? null
        : (0, l.jsxs)(tm, {
              children: [
                  (0, l.jsx)(tj.h, {
                      children: (0, l.jsx)(tf.Ay, {
                          title: et.intl.string(et.t["7x9dyE"]),
                          value: n.all,
                          onChange: (t) => th.up.updateControlledSetting(e, t ? R.yKI : R.yKI & ~R.dzt.NO_RELATION),
                      }),
                  }),
                  (0, l.jsx)(tj.h, {
                      children: (0, l.jsx)(tf.Ay, {
                          title: et.intl.string(et.t.NfeuZ3),
                          value: n.all || n.mutualFriends,
                          onChange: (n) =>
                              th.up.updateControlledSetting(
                                  e,
                                  n
                                      ? tS.UI(t, R.dzt.MUTUAL_FRIENDS)
                                      : tS.iE(t, R.dzt.MUTUAL_FRIENDS, R.dzt.NO_RELATION),
                              ),
                      }),
                  }),
                  (0, l.jsx)(tj.h, {
                      children: (0, l.jsx)(tf.Ay, {
                          title: et.intl.string(et.t.qsMfsH),
                          value: n.all || n.mutualGuilds,
                          onChange: (n) =>
                              th.up.updateControlledSetting(
                                  e,
                                  n ? tS.UI(t, R.dzt.MUTUAL_GUILDS) : tS.iE(t, R.dzt.MUTUAL_GUILDS, R.dzt.NO_RELATION),
                              ),
                      }),
                  }),
              ],
          });
}
var t_ = n(444802),
    tb = n(875162),
    tC = n(873298),
    tR = n(389737),
    tL = n(566769),
    tk = n(704724);
function tD() {
    let e = (0, ea.k)(),
        t = (0, tg.xs)(),
        n = [
            { value: tC.TO.BLUR, label: et.intl.string(et.t.S49Uad) },
            { value: tC.TO.BLOCK, label: et.intl.string(et.t["D/157Y"]) },
        ];
    if (null == t || null == e) return null;
    let i = (t) => {
            (0, tk.Jz)(e, t);
        },
        { explicitContentFriendDm: s, explicitContentNonFriendDm: r } = t;
    return (0, l.jsxs)(tR.E, {
        description: et.intl.string(et.t.Wnojv1),
        children: [
            (0, l.jsx)(tL.A, {
                title: et.intl.string(et.t["+uI23H"]),
                value: s,
                onChange: (e) => i({ explicitContentFriendDm: e }),
                options: n,
            }),
            (0, l.jsx)(tL.A, {
                title: et.intl.string(et.t["Yh+HX1"]),
                value: r,
                onChange: (e) => i({ explicitContentNonFriendDm: e }),
                options: n,
            }),
        ],
    });
}
function tU() {
    let e = (0, ea.k)(),
        t = (0, tg.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: n, goreContentNonFriendDm: i } = t,
        s = (t) => {
            (0, tk.qY)(e, t);
        },
        r = [
            { value: tC.TO.BLUR, label: et.intl.string(et.t.S49Uad) },
            { value: tC.TO.BLOCK, label: et.intl.string(et.t["D/157Y"]) },
        ];
    return (0, l.jsxs)(tR.E, {
        description: et.intl.string(et.t.XgH9eh),
        children: [
            (0, l.jsx)(tL.A, {
                title: et.intl.string(et.t["+uI23H"]),
                value: n,
                onChange: (e) => s({ goreContentFriendDm: e }),
                options: r,
            }),
            (0, l.jsx)(tL.A, {
                title: et.intl.string(et.t["Yh+HX1"]),
                value: i,
                onChange: (e) => s({ goreContentNonFriendDm: e }),
                options: r,
            }),
        ],
    });
}
var tP = n(25191);
function tO() {
    let e = (0, t_.WX)(),
        t = [
            {
                id: "explicit-media-redaction",
                title: et.intl.string(et.t.GYpoAq),
                component: () => (0, l.jsx)(tD, {}),
                orientation: "vertical",
            },
            {
                id: "gore-media-redaction",
                title: et.intl.string(et.t["16/3Bi"]),
                component: () => (0, l.jsx)(tU, {}),
                orientation: "vertical",
            },
        ];
    return (0, l.jsxs)(tj.h, {
        children: [
            (0, l.jsx)(tj._, {
                header: et.intl.string(et.t["Hj/But"]),
                description: et.intl.format(et.t["H/Icz+"], { learnMoreLink: tp.A.getArticleURL(e) }),
            }),
            (0, l.jsx)(tb.A, { tabs: t, orientation: "vertical", tabsClassName: tP.v }),
        ],
    });
}
let tF = function () {
    return (0, l.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, l.jsx)(td, {}),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(to, { title: et.intl.string(et.t.xVRG4P), children: (0, l.jsx)(tO, {}) }),
                    (0, l.jsx)(to, {
                        title: et.intl.string(et.t["y62Z/d"]),
                        children: (0, l.jsxs)(tm, { children: [(0, l.jsx)(tv, {}), (0, l.jsx)(tT, {})] }),
                    }),
                    (0, l.jsx)(to, { title: et.intl.string(et.t["1Qn8iV"]), children: (0, l.jsx)(ty, {}) }),
                ],
            }),
        ],
    });
};
function tM() {
    let { hasConsented: e, updateConsent: t } = (0, tg.lH)(R.YAq.PERSONALIZATION);
    return (0, l.jsx)(tj.h, {
        children: (0, l.jsx)(tf.Ay, {
            title: et.intl.string(ee.default.XMPqUx),
            note: et.intl.format(ee.default.Imp6Ns, {
                helpdeskArticle: tp.A.getArticleURL(R.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
function tG() {
    let e = (0, ea.k)() ?? void 0,
        t = th.yH.useControlledSetting(e),
        n = th.kf.useControlledSetting(e);
    return null == e
        ? null
        : (0, l.jsx)(tj.h, {
              children: (0, l.jsx)(tf.Ay, {
                  title: et.intl.string(et.t.CyLYKZ),
                  note: et.intl.format(ee.default["6mK5Pz"], {
                      helpdeskArticle: tp.A.getArticleURL(R.MVz.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !t,
                  onChange: (t) => th.yH.updateControlledSetting(e, !t),
                  disabled: n,
              }),
          });
}
function tV() {
    let e = (0, ea.k)() ?? void 0,
        t = th.kf.useControlledSetting(e);
    return (0, l.jsx)(tj.h, {
        children: (0, l.jsx)(tf.Ay, {
            title: et.intl.string(ee.default.ZhaNu8),
            note: et.intl.format(ee.default.cnCK6b, {
                helpdeskArticle: tp.A.getArticleURL(R.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => th.kf.updateControlledSetting(e, !t),
        }),
    });
}
function tw() {
    let { hasConsented: e, updateConsent: t } = (0, tg.lH)(R.YAq.USAGE_STATISTICS);
    return (0, l.jsx)(tj.h, {
        children: (0, l.jsx)(tf.Ay, {
            title: et.intl.string(ee.default.HjstRR),
            note: et.intl.format(ee.default.Z5yJZy, {
                helpdeskArticle: tp.A.getArticleURL(R.MVz.DATA_PRIVACY_CONTROLS),
            }),
            value: e,
            onChange: t,
        }),
    });
}
let tz = function () {
    return (0, l.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, l.jsx)(td, {}),
            (0, l.jsx)("div", {
                children: (0, l.jsxs)(to, {
                    title: et.intl.string(et.t.SRZyHg),
                    children: [(0, l.jsx)(tw, {}), (0, l.jsx)(tV, {}), (0, l.jsx)(tG, {}), (0, l.jsx)(tM, {})],
                }),
            }),
        ],
    });
};
var tH = n(582394),
    tB = n(141006),
    tY = n(821609);
function tq() {
    let e = et.intl.string(ee.default["8SLtqb"]);
    return (0, l.jsx)(tY.$, {
        icon: tB.y,
        variant: "primary",
        text: e,
        onClick: function () {
            (0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("88647"),
                    n.e("30244"),
                    n.e("95429"),
                    n.e("67113"),
                    n.e("48370"),
                    n.e("72875"),
                ]).then(n.bind(n, 320742));
                return (t) => (0, l.jsx)(e, { ...t });
            }),
                b.default.track(R.HAw.FAMILY_CENTER_ACTION, { action: C.qb.ShowQRCodeModal });
        },
    });
}
var tZ = n(555317);
function tK() {
    let e = (0, D.Li)(),
        t = (0, _.A)(),
        { handleTabChange: n } = k();
    return (0, D.xr)() || (t && e)
        ? null
        : (0, l.jsx)("div", {
              className: tZ.x6,
              children: t
                  ? (0, l.jsx)(tY.$, {
                        variant: "primary",
                        text: et.intl.string(et.t.LhlgY9),
                        onClick: () => n(C.u9.REQUESTS),
                    })
                  : (0, l.jsx)(tq, {}),
          });
}
let tW = function () {
    let e = (0, _.A)(),
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
        className: r()(tZ.kL, e4.a),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", {
                        children: (0, l.jsxs)("div", {
                            className: tZ.TK,
                            children: [
                                (0, l.jsx)(V.D, {
                                    variant: "heading-xl/medium",
                                    children: (0, l.jsx)(ed.F, { children: t }),
                                }),
                                (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(tK, {}),
                ],
            }),
            (0, l.jsx)("div", {
                className: tZ.F0,
                children: (0, l.jsx)("img", {
                    src: e ? "/assets/bc9100f5e54f39a8.svg" : "/assets/12ee06c12c73e78e.svg",
                    alt: et.intl.string(ee.default.ffg6xd),
                }),
            }),
        ],
    });
};
var tX = n(299628),
    tQ = n(445220);
let tJ = function (e) {
    let { icon: t, iconClassName: n, header: i, description: s } = e;
    return (0, l.jsxs)("div", {
        className: r()(tQ.kL, e4.a),
        children: [
            (0, l.jsx)("div", {
                className: tQ.n1,
                children: (0, l.jsx)(t, {
                    className: r()(tQ.Kk, n),
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
                        className: tQ.wx,
                        children: (0, l.jsx)(ed.F, { children: i }),
                    }),
                    (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
                ],
            }),
        ],
    });
};
var t$ = n(847374),
    t0 = n(349288),
    t3 = n(308528),
    t2 = n(922529),
    t1 = n(780964),
    t9 = n(830543),
    t8 = n(766075),
    t5 = n(219893),
    t7 = n(936926),
    t4 = n(465323),
    t6 = n(17928),
    ne = n(617617),
    nt = n(361157);
function nn(e) {
    let t = (0, t6.bG)([y.A], () => y.A.getMonthlyPurchases());
    return (function (e, t) {
        if (null == e) return { kind: "off" };
        if (0 === e.amount) return { kind: "blocked" };
        let n = e.currency,
            l = (0, $.CE)((0, $.$g)(e.amount, n), eg.WT.MONTH, 1);
        if (t >= e.amount) return { kind: "spent", monthlyText: l };
        let i = t4.yR[e.currency] ?? 2,
            s = e.amount - t;
        return s <= 10 * 10 ** i
            ? {
                  kind: "close-to-limit",
                  monthlyText: l,
                  remainingText: et.intl.formatToPlainString(ee.default["+Q+bU1"], { amount: (0, $.$g)(s, n) }),
              }
            : { kind: "on", monthlyText: l };
    })(e, t?.total_amount ?? 0);
}
var nl = n(534654),
    ni = n(980707),
    ns = n(477782),
    nr = n(943255),
    na = n(922016),
    nd = n(408278),
    nc = n(365199),
    nu = n(243721),
    no = n(95396),
    nx = n(624411);
function nm(e) {
    let { closePopout: t, onEdit: n, onDelete: i } = e;
    return (0, l.jsxs)(ni.W, {
        "data-menu-migrated": !0,
        "aria-label": et.intl.string(et.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, l.jsx)(ns.Dr, { id: "edit", label: et.intl.string(ee.default.b3DPqg), action: n }),
            (0, l.jsx)(ns.Dr, { id: "delete", label: et.intl.string(ee.default.d8pizZ), color: "danger", action: i }),
        ],
    });
}
function nh(e) {
    let { rule: t, teenId: s, readOnly: r = !1 } = e,
        a = i.useRef(null),
        d = t?.enabled ?? !0,
        u = (0, t5.li)(t),
        o = (0, t5.n1)(t.days);
    function x() {
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("76035"), n.e("39231")]).then(n.bind(n, 154434));
            return (n) => (0, l.jsx)(e, { ...n, teenId: s, rule: t });
        });
    }
    function m() {
        (0, no.CS)(s, t.ruleId);
    }
    return (0, l.jsxs)(c.B, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        children: [
            (0, l.jsx)("div", { className: nx.X, children: (0, l.jsx)(nr.Z, { size: "md" }) }),
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
                    !r &&
                        (0, l.jsx)(na.Y, {
                            targetElementRef: a,
                            renderPopout: (e) => (0, l.jsx)(nm, { ...e, onEdit: x, onDelete: m }),
                            position: "bottom",
                            align: "right",
                            animation: na.Y.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, l.jsx)(nd.K, {
                                    buttonRef: a,
                                    size: "sm",
                                    icon: nc.j,
                                    variant: "icon-only",
                                    "aria-label": et.intl.string(et.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    onClick: (e) => {
                                        e.stopPropagation(), t(e);
                                    },
                                });
                            },
                        }),
                    (0, l.jsx)("div", {
                        className: nx.m,
                        children: (0, l.jsx)(nu.d, {
                            checked: d,
                            label: et.intl.string(ee.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: function () {
                                (0, no.Um)(s, t.ruleId, { enabled: !d });
                            },
                            hasIcon: !0,
                            disabled: r,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var nj = n(587349);
function nf(e) {
    let { title: t, subtitle: n, buttonText: i, onButtonPress: s, readOnly: r = !1 } = e;
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
                className: r ? nj.nh : void 0,
                children: (0, l.jsx)(tY.$, { text: i, onClick: s, variant: "secondary", size: "sm", disabled: r }),
            }),
        ],
    });
}
function ng(e, t, i) {
    return (0, l.jsx)(nf, {
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
                                children: et.intl.string(ee.default.Q2msVQ),
                            }),
                        ],
                    });
                case "blocked":
                    return (0, l.jsx)(G.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        tag: "span",
                        children: et.intl.string(ee.default.FUu2b0),
                    });
            }
        })(t),
        buttonText: et.intl.string(et.t.bt75uw),
        onButtonPress: () => {
            (0, Y.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("47872"), n.e("87096")]).then(n.bind(n, 638155));
                return (n) => (0, l.jsx)(t, { ...n, teenId: e });
            });
        },
        readOnly: i,
    });
}
function nv(e) {
    let { teenId: t } = e;
    return ng(
        t,
        nn(
            (0, t6.bG)(
                [ne.A],
                () => {
                    let e = ne.A.settings.safetySettings?.spendingLimitSettings?.oneTimePurchaseLimit;
                    return null == e ? null : { amount: Number(e.amount), currency: e.currency };
                },
                void 0,
                nt.Ky,
            ),
        ),
        !0,
    );
}
function nA(e) {
    let { teenId: t } = e,
        n = th.fD.useControlledSetting(t);
    return ng(t, nn(n));
}
function nE(e) {
    let { teenId: t, readOnly: s = !1 } = e,
        r = (0, z.y3)(),
        a = r?.restrictedSchedule?.rules ?? [],
        d = (0, t5.I2)(a),
        [u, o] = i.useState(d.length > 0);
    function x() {
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("76035"), n.e("39231")]).then(n.bind(n, 154434));
            return (n) => (0, l.jsx)(e, { ...n, teenId: t });
        });
    }
    return (i.useEffect(() => {
        d.length > 0 && o(!0);
    }, [d.length]),
    0 === d.length)
        ? (0, l.jsx)(nf, {
              title: et.intl.string(ee.default["1Op+NP"]),
              buttonText: et.intl.string(ee.default.OwFF4o),
              onButtonPress: x,
              readOnly: s,
          })
        : (0, l.jsxs)(c.B, {
              direction: "vertical",
              gap: 0,
              children: [
                  (0, l.jsxs)(O.D, {
                      className: nj.dV,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, l.jsx)("div", {
                              className: nj.WB,
                              children: (0, l.jsxs)(c.B, {
                                  direction: "vertical",
                                  gap: 4,
                                  children: [
                                      (0, l.jsx)(G.E, {
                                          variant: "text-md/medium",
                                          children: et.intl.string(ee.default["1Op+NP"]),
                                      }),
                                      (0, l.jsx)(G.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: et.intl.formatToPlainString(ee.default.XfwcpX, { count: d.length }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: nj.pt,
                              children: (0, l.jsx)(t$.a, {
                                  size: "sm",
                                  color: "currentColor",
                                  className: `${nj.ai} ${u ? nj.hg : ""}`,
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
                                  children: d.map((e) => (0, l.jsx)(nh, { rule: e, teenId: t, readOnly: s }, e.ruleId)),
                              }),
                              (0, l.jsx)("div", {
                                  className: s ? nj.nh : void 0,
                                  children: (0, l.jsx)(tY.$, {
                                      text: et.intl.string(ee.default.OwFF4o),
                                      onClick: x,
                                      variant: "secondary",
                                      size: "sm",
                                      disabled: s,
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
function nN() {
    let e = (0, D.vx)(),
        t = (0, z.y3)(),
        n = (0, t7.Vh)({ location: "TimeControlsRow" });
    function i() {
        (0, t8.openUserSettings)(t1.X.CONTENT_AND_SOCIAL_PANEL);
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
                            (0, l.jsx)(G.E, {
                                variant: "text-sm/semibold",
                                children: et.intl.string(ee.default.ahKIJO),
                            }),
                            (0, l.jsx)(G.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children: et.intl.format(ee.default.X9rW0j, {
                                    openSettingsHook: (e, t) => (0, l.jsx)(t0.Anchor, { onClick: i, children: e }, t),
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(tY.$, {
                        text: et.intl.formatToPlainString(ee.default.ggcjPR, { count: e.length }),
                        onClick: function () {
                            (0, t9.default)(), t3.A.openPrivateChannel({ recipientIds: e });
                        },
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            n &&
                t?.id != null &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(t2.A, { className: nj.yF }),
                        (0, l.jsx)(nv, { teenId: t.id }),
                        (0, l.jsx)(t2.A, { className: nj.yF }),
                        (0, l.jsx)(nE, { teenId: t.id, readOnly: !0 }),
                    ],
                }),
        ],
    });
}
function np() {
    let e = (0, z.y3)(),
        t = (0, z.tl)(),
        { handleTabChange: n } = k(),
        s = (0, t7.Vh)({ location: "TimeControlsRow" });
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
                        (0, l.jsx)(G.E, { variant: "text-sm/semibold", children: et.intl.string(ee.default.ahKIJO) }),
                        (0, l.jsx)(G.E, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: et.intl.string(ee.default.Sv236e),
                        }),
                    ],
                }),
                (0, l.jsx)(nf, {
                    title: et.intl.string(et.t["+o1pDZ"]),
                    buttonText: et.intl.string(et.t.bt75uw),
                    onButtonPress: () => {
                        n(C.u9.CONTENT_AND_SOCIAL);
                    },
                }),
                (0, l.jsx)(t2.A, { className: nj.yF }),
                (0, l.jsx)(nf, {
                    title: et.intl.string(et.t.OAuOHD),
                    buttonText: et.intl.string(et.t.bt75uw),
                    onButtonPress: () => {
                        n(C.u9.DATA_AND_PRIVACY);
                    },
                }),
                s &&
                    e?.id != null &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(t2.A, { className: nj.yF }),
                            (0, l.jsx)(nA, { teenId: e.id }),
                            (0, l.jsx)(t2.A, { className: nj.yF }),
                            (0, l.jsx)(nE, { teenId: e.id }),
                        ],
                    }),
            ],
        })
    );
}
function nT() {
    let e = (0, nl.A)();
    return 0 === (0, D.vx)().length
        ? null
        : (0, l.jsx)("div", { className: nj.kL, children: e ? (0, l.jsx)(nN, {}) : (0, l.jsx)(np, {}) });
}
var nS = n(175524);
let nI = function () {
    let e = (0, D.vx)().length > 0,
        t = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        n = (0, ei.y)(et.intl.string(ee.default["5RZ8Tq"]), et.intl.string(ee.default.bmhCnL)),
        i = (0, ei.y)(et.intl.string(ee.default.XKnFFq), et.intl.string(ee.default["68zfxD"])),
        s = (0, ei.y)(et.intl.string(ee.default["Rm/6a0"]), et.intl.string(ee.default["1xPTwE"]));
    return void 0 === t
        ? null
        : (0, l.jsxs)("div", {
              className: nS.kL,
              children: [
                  e
                      ? null
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", { className: nS.vK, children: (0, l.jsx)(tW, {}) }),
                                (0, l.jsxs)("div", {
                                    className: nS.yk,
                                    children: [
                                        (0, l.jsx)(tJ, {
                                            icon: tH.M,
                                            header: et.intl.string(ee.default["001l3m"]),
                                            description: n,
                                        }),
                                        (0, l.jsx)(tJ, {
                                            icon: X.b,
                                            header: et.intl.string(ee.default.yipAeP),
                                            description: i,
                                        }),
                                        (0, l.jsx)(tJ, {
                                            icon: tB.y,
                                            header: et.intl.string(ee.default.hhOuMe),
                                            description: s,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  e ? (0, l.jsx)(ts, {}) : (0, l.jsx)(tX.A, { showSectionDescriptions: !0 }),
                  (0, l.jsx)(nT, {}),
              ],
          });
};
n(801541);
var ny = n(889137),
    n_ = n(837381),
    nb = n(475825),
    nC = n(260762),
    nR = n(485947),
    nL = n(426190),
    nk = n(789645),
    nD = n(990078),
    nU = n(665566);
function nP(e) {
    let { icon: t, tooltip: n, onClick: i, className: s } = e;
    return (0, l.jsx)(nD.m, {
        text: n,
        children: (0, l.jsx)(O.D, {
            "aria-label": n,
            onClick: function (e) {
                e.preventDefault(), e.stopPropagation(), i(e);
            },
            className: r()(nU.hP, s),
            children: (0, l.jsx)(t, { className: nU.Kk, color: "currentColor" }),
        }),
    });
}
var nO = n(854627),
    nF = n(19575),
    nM = n(486241);
let nG = nF.Ay.getEnableHardwareAcceleration() ? eG.Js : eG.eu;
function nV(e) {
    let { otherUser: t, status: n } = e,
        i = (0, D.XC)(t.id, n),
        {
            avatarSrc: s,
            avatarDecorationSrc: r,
            eventHandlers: a,
        } = (0, nO.A)({ userId: t.id, size: P._3.SIZE_40, animateOnHover: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ...a,
                children: (0, l.jsx)(nG, {
                    className: nM.my,
                    src: s,
                    avatarDecoration: r,
                    size: P._3.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, l.jsxs)("div", {
                className: nM.yt,
                children: [
                    (0, l.jsx)("div", { className: nM.Vx, children: (0, l.jsx)(eJ.A, { user: t }) }),
                    (0, l.jsx)(G.E, { color: "text-muted", variant: "text-xs/normal", children: i }),
                ],
            }),
        ],
    });
}
var nw = n(528218);
function nz(e) {
    let { user: t } = e,
        s = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        r = i.useCallback(() => {
            B()(void 0 !== s, "User must be logged in to accept a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("53385"), n.e("55738"), n.e("43139")]).then(
                        n.bind(n, 179950),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: s, otherUser: t });
                });
        }, [s, t]);
    return (0, l.jsxs)("div", {
        className: nw.kL,
        children: [
            (0, l.jsx)("div", { className: nw.zH, children: (0, l.jsx)(nV, { otherUser: t, status: C.Ef.ACTIVE }) }),
            (0, l.jsx)("div", {
                className: nw.o1,
                children: (0, l.jsx)(nP, { icon: nk.P, tooltip: et.intl.string(ee.default.l20ZZp), onClick: r }),
            }),
        ],
    });
}
var nH = n(933832);
function nB(e) {
    let { user: t } = e,
        s = (0, _.A)(),
        r = (0, D.xr)(),
        a = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        c = i.useCallback(() => {
            B()(void 0 !== a, "User must be logged in to accept a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("53385"), n.e("55738"), n.e("31385")]).then(
                        n.bind(n, 58144),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                });
        }, [a, t]),
        u = i.useCallback(() => {
            B()(void 0 !== a, "User must be logged in to decline a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("53385"), n.e("55738"), n.e("84811")]).then(
                        n.bind(n, 389094),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                });
        }, [a, t]),
        o = i.useCallback(() => {
            B()(void 0 !== a, "User must be logged in to decline a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("53385"), n.e("55738"), n.e("17219")]).then(
                        n.bind(n, 187278),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                });
        }, [a, t]);
    return (0, l.jsxs)("div", {
        className: nw.kL,
        children: [
            (0, l.jsx)("div", { className: nw.zH, children: (0, l.jsx)(nV, { otherUser: t, status: C.Ef.PENDING }) }),
            (0, l.jsx)("div", {
                className: nw.o1,
                children: s
                    ? (0, l.jsx)(nP, { icon: nk.P, tooltip: et.intl.string(ee.default.e5iHmZ), onClick: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              r
                                  ? null
                                  : (0, l.jsx)(nP, {
                                        icon: nH.A,
                                        tooltip: et.intl.string(ee.default.krWQZK),
                                        onClick: c,
                                    }),
                              (0, l.jsx)(nP, { icon: nk.P, tooltip: et.intl.string(ee.default.bBDeNI), onClick: u }),
                          ],
                      }),
            }),
        ],
    });
}
var nY = n(615300),
    nq = n(187322),
    nZ = n(975732),
    nK = n(789392);
let nW = function (e) {
    let { userId: t, children: n, isLast: s, className: a } = e,
        [d, c] = i.useState(!1),
        { analyticsLocations: u } = (0, v.Ay)(),
        o = i.useCallback(() => {
            (0, nZ.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u });
        }, [t, u]);
    function x() {
        c(!0);
    }
    function m() {
        c(!1);
    }
    return (0, l.jsx)(n_.tG, {
        id: t,
        children: (e) =>
            (0, l.jsx)(nq.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(nY.A.div, {
                    style: { opacity: 1 },
                    className: r()(nK.KG, a, { [nK.HV]: s, [nK.vu]: d }),
                    onMouseEnter: x,
                    onMouseLeave: m,
                    onClick: o,
                    ...e,
                    children: n(d),
                }),
            }),
    });
};
var nX = n(327337),
    nQ = n(19331);
let nJ = "/assets/922a2ee66ef62b5b.svg";
function n$(e) {
    let { header: t, description: n, stepNumber: i } = e;
    return (0, l.jsxs)("div", {
        className: nQ.PM,
        children: [
            (0, l.jsx)("div", {
                className: nQ.CD,
                children: (0, l.jsx)(V.D, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, l.jsx)(ed.F, { children: i }),
                }),
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(V.D, { variant: "heading-sm/bold", children: (0, l.jsx)(ed.F, { children: t }) }),
                    (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
                ],
            }),
        ],
    });
}
function n0() {
    return (0, l.jsxs)("div", {
        className: r()(nQ.aP, e4.a, nQ.dO, nQ.p2),
        children: [
            (0, l.jsxs)("div", {
                className: nQ.Np,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(V.D, {
                                className: e0.QB,
                                variant: "heading-xl/medium",
                                children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default.pHEnV5) }),
                            }),
                            (0, l.jsx)(G.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: e0.SX,
                                children: et.intl.string(ee.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, l.jsx)("img", { className: nQ._u, src: nJ, alt: et.intl.string(ee.default["r+PDmu"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: nQ.Ci,
                children: [
                    (0, l.jsx)(n$, {
                        header: et.intl.string(ee.default["7xxAni"]),
                        description: et.intl.string(ee.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, l.jsx)(n$, {
                        header: et.intl.string(ee.default["AXgx+a"]),
                        description: et.intl.string(ee.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, l.jsx)(n$, {
                        header: et.intl.string(ee.default.MZn1tG),
                        description: et.intl.string(ee.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function n3() {
    let e = (0, D.xr)();
    return (0, l.jsxs)("div", {
        className: r()(nQ.aP, e4.a, nQ.dO),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(V.D, {
                        className: e0.QB,
                        variant: "heading-xl/medium",
                        children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default.zUCWEL) }),
                    }),
                    (0, l.jsx)(G.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: e0.SX,
                        children: et.intl.format(ee.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, l.jsx)(tq, {}),
                ],
            }),
            (0, l.jsx)("img", { className: nQ._u, src: nJ, alt: et.intl.string(ee.default["r+PDmu"]) }),
        ],
    });
}
function n2(e) {
    let { sectionType: t, sectionTitle: n, requests: s } = e,
        r = i.useRef(null),
        a = `${t}-list`,
        d = (0, nC.A)(a),
        c = i.useCallback(
            (e) => {
                let { row: n, listIndex: i } = e,
                    r = s[n],
                    a = i === s.length;
                return null == r
                    ? null
                    : (0, l.jsx)(
                          nW,
                          {
                              userId: r.id,
                              isLast: a,
                              children: () =>
                                  t === C.Ef.ACTIVE ? (0, l.jsx)(nz, { user: r }) : (0, l.jsx)(nB, { user: r }),
                          },
                          r.id,
                      );
            },
            [s, t],
        ),
        u = i.useCallback(
            () =>
                (0, l.jsx)(
                    nR.A,
                    {
                        children: (0, l.jsx)(G.E, {
                            className: e0.QB,
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
        className: nQ.uW,
        children: (0, l.jsx)(n_.hD, {
            navigator: d,
            children: (0, l.jsx)(n_.PR, {
                children: (e) => {
                    let { ref: t, role: i, ...d } = e;
                    return (0, l.jsx)(
                        nb.OZ,
                        {
                            innerRole: i,
                            innerAriaLabel: n,
                            ref: (e) => {
                                (r.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            sectionHeight: C.h4,
                            rowHeight: C.Gg,
                            renderSection: u,
                            renderRow: c,
                            sections: [s.length],
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
function n1() {
    let e = (0, _.A)(),
        t = (0, D.GR)(),
        n = e ? C.Y7 : C.kp,
        i = { count: t.length, max: n },
        s = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["+tnO34"], i),
            et.intl.formatToPlainString(ee.default["pu6/U0"], i),
        );
    return t.length > 0
        ? (0, l.jsx)(n2, { sectionType: C.Ef.ACTIVE, sectionTitle: s, requests: t })
        : (0, l.jsxs)("div", {
              className: nQ.uW,
              children: [
                  (0, l.jsx)(G.E, { className: e0.QB, variant: "eyebrow", color: "text-default", children: s }),
                  (0, l.jsx)("div", {
                      className: nQ.aP,
                      children: (0, l.jsx)(e3, { text: et.intl.string(ee.default.C4ScLD) }),
                  }),
              ],
          });
}
function n9() {
    let e = (0, D.xr)(),
        t = (0, _.A)() ? C.Y7 : C.kp,
        n = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["1/PzIj"], { maxConnections: t }),
            et.intl.formatToPlainString(ee.default.RcTgiE, { maxConnections: t }),
        );
    return e
        ? (0, l.jsx)("div", {
              className: nQ.rv,
              children: (0, l.jsx)(G.E, { variant: "text-xxs/medium", color: "text-muted", children: n }),
          })
        : null;
}
function n8() {
    let e = (0, nL.N)(),
        t = (0, nL.z)(),
        n = (0, ny.YW)({ helpline: e, throughline: t })
            .with({ helpline: !0 }, () =>
                et.intl.format(ee.default["KOwsf/"], {
                    helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                }),
            )
            .with({ throughline: !0 }, () => et.intl.format(ee.default["6tsC8u"], { helpLink: nX.CL }))
            .otherwise(() => null);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: e0.QX,
              children: [
                  (0, l.jsx)(V.D, {
                      className: nQ.rH,
                      variant: "heading-sm/semibold",
                      children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default["7/tVhv"]) }),
                  }),
                  (0, l.jsx)(G.E, { variant: "text-xs/medium", color: "text-muted", children: n }),
              ],
          });
}
function n5() {
    let e = (0, D.xk)(C.Ef.PENDING),
        t = (0, ei.y)(
            et.intl.formatToPlainString(ee.default.IkAgkG, { count: e.length }),
            et.intl.formatToPlainString(ee.default.Q8XnAa, { count: e.length }),
        );
    return 0 === e.length ? null : (0, l.jsx)(n2, { sectionType: C.Ef.PENDING, sectionTitle: t, requests: e });
}
let n7 = function () {
    let e = (0, _.A)();
    return (0, l.jsxs)("div", {
        className: nQ.kL,
        children: [
            e ? (0, l.jsx)(n0, {}) : (0, l.jsx)(n3, {}),
            (0, l.jsx)(n1, {}),
            (0, l.jsx)(n5, {}),
            (0, l.jsx)(n9, {}),
            (0, l.jsx)(n8, {}),
        ],
    });
};
var n4 = n(936504),
    n6 = n(946015),
    le = n(270003),
    lt = n(993077),
    ln = n(935286),
    ll = n(840559),
    li = n(997187),
    ls = n(723923),
    lr = n(192280);
let la = function () {
    let e = T.dm.useSetting(),
        { categories: t, initialized: n } = (0, t6.cf)([li.A], () => li.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == n && (0, ll.cR)();
        }, [n]),
        (0, l.jsx)("div", {
            className: lr.kL,
            children: (0, l.jsxs)(le.n, {
                label: et.intl.string(ee.default.USIXU7),
                children: [
                    (0, l.jsx)(nu.d, {
                        checked: e,
                        description: et.intl.string(ee.default["5MdB3j"]),
                        onChange: T.dm.updateSetting,
                        label: et.intl.string(ee.default.zkEceS),
                    }),
                    e
                        ? (0, l.jsx)(lt.Z, {
                              className: lr.MT,
                              type: lt.Z.Types.CUSTOM,
                              outline: !0,
                              children: (0, l.jsxs)(n6.s, {
                                  justify: n6.s.Justify.END,
                                  children: [
                                      (0, l.jsx)(n6.s.Child, {
                                          children: (0, l.jsx)(G.E, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: et.intl.string(ee.default.xAVm7K),
                                          }),
                                      }),
                                      (0, l.jsx)(O.D, {
                                          children: (0, l.jsx)(n4.N_, {
                                              onClick: t9.default,
                                              to: { pathname: R.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: et.intl.string(ee.default.cUIXFY),
                                          }),
                                      }),
                                      (0, l.jsx)(x.fk, { icon: ln.E, className: lr.UE, disableColor: !0 }),
                                  ],
                              }),
                          })
                        : null,
                    (0, l.jsx)(nu.d, {
                        checked: !!t[ls.HO.FAMILY_CENTER_DIGEST],
                        description: et.intl.string(ee.default.y34S46),
                        onChange: function (e) {
                            (0, ll.CA)(ls.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: et.intl.string(ee.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
var ld = n(731738),
    lc = n(964486),
    lu = n(612200),
    lo = n(807393),
    lx = n(210714),
    lm = n(33666),
    lh = n(204925);
function lj(e) {
    let { location: t, onMountEffect: n } = e,
        l = (0, lm.A)(),
        s = (0, D.W1)(),
        { familyCenterInitialized: r, isLoading: a } = (0, d.cf)([y.A], () => ({
            familyCenterInitialized: y.A.getIsInitialized(),
            isLoading: y.A.isLoading(),
        })),
        c = (0, ea.k)(),
        { selectedTab: u, handleTabChange: o } = k(),
        x = eK.default.getCurrentUser(),
        m = null != l,
        h = r && null != x && !m;
    (0, lc.Ay)(() => {
        (0, lx.d)("family-center"), null != n && n();
    });
    let j = { isConsideredAdult: "adult" === l, numOfAcceptedRequests: s, selectedTab: u, selectedTeenId: c },
        f = i.useRef(j);
    return (
        i.useEffect(() => {
            f.current = j;
        }),
        i.useEffect(() => {
            if (r && m) {
                let { isConsideredAdult: e, numOfAcceptedRequests: n, selectedTab: l, selectedTeenId: i } = f.current;
                b.default.track(R.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: n,
                    selected_teen_id: i,
                    initial_page: C.zu[l],
                    source: C.iN[t],
                }),
                    lo.A.increment({ name: ld.K.FAMILY_CENTER_VIEW });
            }
        }, [r, m, t]),
        i.useEffect(() => {
            h && (0, lu.yO)(lh.w_.FAMILY_CENTER);
        }, [h]),
        { isLoading: a, selectedTab: u, handleTabChange: o, showAgeGateModal: h }
    );
}
var lf = n(556493);
let lg = {
        [C.u9.REQUESTS]: n7,
        [C.u9.ACTIVITY]: nI,
        [C.u9.SETTINGS]: la,
        [C.u9.CONTENT_AND_SOCIAL]: tF,
        [C.u9.DATA_AND_PRIVACY]: tz,
        [C.u9.SCREEN_TIME_CONTROLS]: la,
    },
    lv = { [C.u9.REQUESTS]: n7, [C.u9.ACTIVITY]: nI, [C.u9.CONTENT_AND_SOCIAL]: tF, [C.u9.DATA_AND_PRIVACY]: tz };
function lA() {
    return (0, l.jsx)(c.B, { justify: "center", align: "center", className: lf.g4, children: (0, l.jsx)(u.y, {}) });
}
function lE(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, D.VT)(),
        s = (0, _.A)();
    return [C.u9.CONTENT_AND_SOCIAL, C.u9.DATA_AND_PRIVACY, C.u9.SCREEN_TIME_CONTROLS].includes(t)
        ? null
        : (0, l.jsxs)(o.V, {
              className: lf.c5,
              "aria-label": et.intl.string(ee.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, l.jsx)(o.V.Item, {
                      className: lf.jA,
                      id: C.u9.ACTIVITY,
                      children: et.intl.string(ee.default.bdBmqy),
                  }),
                  (0, l.jsxs)(o.V.Item, {
                      className: lf.jA,
                      id: C.u9.REQUESTS,
                      "aria-label": et.intl.string(ee.default["gVWG+6"]),
                      children: [
                          et.intl.string(ee.default["gVWG+6"]),
                          i > 0 ? (0, l.jsx)(x.hV, { className: lf.qS, count: i }) : null,
                      ],
                  }),
                  s
                      ? (0, l.jsx)(o.V.Item, {
                            className: lf.jA,
                            id: C.u9.SETTINGS,
                            children: et.intl.string(et.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function lN(e) {
    let { theme: t, section: n, handleItemSelect: i } = e,
        s = (0, E.GV)(),
        d = (0, D.VT)();
    return (0, l.jsx)(m.N, {
        theme: t,
        children: (e) =>
            (0, l.jsxs)(N.A, {
                className: r()(e, lf.ZB),
                scrollable: a.Fr,
                role: "navigation",
                "aria-labelledby": s,
                toolbar: !0,
                children: [
                    (0, l.jsx)(N.A.Icon, { icon: h.n, "aria-hidden": !0 }),
                    (0, l.jsx)(N.A.Title, { id: s, children: et.intl.string(ee.default.RZqaJn) }),
                    (0, l.jsx)(N.A.Divider, {}),
                    (0, l.jsxs)(o.V, {
                        "aria-label": et.intl.string(ee.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, l.jsx)(o.V.Item, {
                                id: C.u9.ACTIVITY,
                                className: lf.AS,
                                children: et.intl.string(ee.default.bdBmqy),
                            }),
                            (0, l.jsxs)(o.V.Item, {
                                id: C.u9.REQUESTS,
                                className: lf.AS,
                                "aria-label": et.intl.string(ee.default["gVWG+6"]),
                                children: [
                                    et.intl.string(ee.default["gVWG+6"]),
                                    d > 0 ? (0, l.jsx)(x.hV, { className: lf.qS, count: d }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function lp() {
    let e = (0, E.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: s,
            showAgeGateModal: r,
        } = lj({
            location: C.MH.SETTINGS,
            onMountEffect: () => {
                I.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            (0, S._)(L[n]);
        }, [n]),
        r)
    )
        return null;
    let a = lg[n];
    return (0, l.jsxs)("main", {
        className: lf.kL,
        "aria-label": et.intl.string(ee.default.RZqaJn),
        children: [
            (0, l.jsx)(A.HI, { location: et.intl.string(ee.default.RZqaJn) }),
            (0, l.jsx)(lE, {
                section: n,
                handleItemSelect: function (e) {
                    s(e);
                },
            }),
            (0, l.jsx)(o.V.Panel, {
                id: n,
                "aria-labelledby": e,
                className: lf.Us,
                children: t ? (0, l.jsx)(lA, {}) : (0, l.jsx)(a, {}),
            }),
        ],
    });
}
function lT() {
    let { analyticsLocations: e } = (0, v.Ay)(g.A.FAMILY_CENTER),
        t = (0, _.A)(),
        n = (0, d.bG)([y.A], () => y.A.getIsInitialized()),
        s = (0, d.bG)([p.A], () => p.A.theme),
        a = (0, E.GV)(),
        {
            isLoading: c,
            selectedTab: u,
            handleTabChange: x,
            showAgeGateModal: m,
        } = lj({
            location: C.MH.SIDENAV,
            onMountEffect: () => {
                f.I(R.BVt.FAMILY_CENTER), !y.A.isLoading() && y.A.canRefetch() && I.Ay.initialPageLoad();
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
        N = lv[h];
    return (0, l.jsx)(v.f5, {
        value: e,
        children: (0, l.jsxs)("main", {
            className: r()(lf.kL, lf.ei),
            "aria-label": et.intl.string(ee.default.RZqaJn),
            children: [
                (0, l.jsx)(A.HI, { location: et.intl.string(ee.default.RZqaJn) }),
                (0, l.jsx)(lN, {
                    theme: s,
                    section: h,
                    handleItemSelect: function (e) {
                        x(e);
                    },
                }),
                (0, l.jsx)(o.V.Panel, {
                    id: h,
                    "aria-labelledby": a,
                    className: lf.Om,
                    children: (0, l.jsx)(j.Ip, {
                        children: (0, l.jsx)("div", {
                            className: lf.O4,
                            children: c ? (0, l.jsx)(lA, {}) : (0, l.jsx)(N, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
