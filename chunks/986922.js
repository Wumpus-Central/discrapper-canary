l.d(t, { A: () => no, p: () => nu });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(607399),
    d = l(702841),
    c = l(331322),
    u = l(289873),
    o = l(761508),
    x = l(777666);
if (21552 == l.j) var h = l(43990);
if (21552 == l.j) var m = l(177953);
if (21552 == l.j) var j = l(364522);
var g = l(944791),
    f = l(793574),
    v = l(688810),
    A = l(726249),
    E = l(915089),
    N = l(742589),
    p = l(363195),
    T = l(885386),
    S = l(669067),
    y = l(899847),
    C = l(695515),
    I = l(438732),
    _ = l(174459),
    b = l(191627),
    L = l(652215);
let R = {
        [b.u9.ACTIVITY]: "family_center_activity_tab",
        [b.u9.REQUESTS]: "family_center_requests_tab",
        [b.u9.SETTINGS]: "family_center_settings_tab",
        [b.u9.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
        [b.u9.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
        [b.u9.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
    },
    k = () => ({
        selectedTab: (0, d.bG)([C.A], () => C.A.getSelectedTab()),
        handleTabChange: (e) => {
            y.Ay.selectTab(e), _.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: b.qb.TabChange, tab: e });
        },
    });
var D = l(834981),
    U = l(843282),
    M = l(778712),
    P = l(939249),
    O = l(548411),
    G = l(661531),
    F = l(834730),
    w = l(534514),
    V = l(10005),
    z = l(153739),
    H = l(284009),
    B = l.n(H),
    Y = l(192308),
    q = l(885574),
    Z = l(691540),
    K = l(857250),
    X = l(97483),
    W = l(39623),
    J = l(935208),
    Q = l(923531),
    $ = l(294433),
    ee = l(580630);
function et(e) {
    return (0, d.bG)([C.A], () => C.A.getTotalForDisplayType(e));
}
function el(e) {
    let t = et(e) ?? 0;
    if (e === b.NV.TOTAL_VOICE_MINUTES) return (0, Q.hO)(t);
    if (e === b.NV.PURCHASES) {
        let e = C.A.getTotalSpendAmount(),
            t = C.A.getTotalSpendCurrency();
        if (null != e && null != t) return (0, ee.RS)(e, t);
    }
    return t;
}
var en = l(500470),
    ei = l(707554),
    es = l(474063);
let ea = (e) => {
    let { header: t, displayType: l } = e,
        i = et(l),
        s = el(l);
    return (0, n.jsxs)("div", {
        className: es.hJ,
        children: [
            (0, n.jsx)(w.D, {
                variant: "heading-xxl/medium",
                color: i > 0 ? "text-brand" : "text-muted",
                children: (0, n.jsx)(ei.F, { children: s }),
            }),
            (0, n.jsx)(F.E, { variant: "text-sm/semibold", className: es.io, children: t }),
        ],
    });
};
var er = l(781696),
    ed = l(714991),
    ec = l(23339),
    eu = l(97808),
    eo = l(260509),
    ex = l(904425);
let eh = (e) => {
    let { guildId: t } = e,
        l = (0, d.bG)([C.A], () => C.A.getGuild(t));
    if (void 0 === l) return null;
    let { name: i } = l,
        s = (0, eo.Iv)(l, 40, !0),
        a = null,
        r = 10;
    return (
        null == l.icon && null != i && (r = ef[(a = (0, ec.oN)(i)).length - 1] ?? ef[ef.length - 1]),
        (0, n.jsx)("div", {
            className: ex.k,
            children: (0, n.jsxs)("div", {
                style: { fontSize: r },
                children: [
                    null != a ? (0, n.jsx)("div", { className: ex.X, "aria-hidden": !0, children: a }) : null,
                    null != s ? (0, n.jsx)(eu.eu, { src: s, size: M._3.SIZE_40, "aria-hidden": !0 }) : null,
                ],
            }),
        })
    );
};
var em = l(602339),
    ej = l(375708),
    eg = l(751406);
let ef = [18, 18, 16, 16, 14, 12, 10],
    ev = i.memo((e) => {
        let { guildId: t, className: l, customSubtext: i } = e,
            s = (0, d.bG)([C.A], () => C.A.getGuild(t));
        if (void 0 === s) return null;
        let r = s.features.has(L.GuildFeatures.VERIFIED) || s.features.has(L.GuildFeatures.PARTNERED),
            { name: c } = s;
        return (0, n.jsxs)("div", {
            className: a()(eg.kL, l),
            children: [
                (0, n.jsx)(eh, { guildId: t }),
                (0, n.jsxs)("div", {
                    className: eg.$z,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eg.wx,
                            children: [
                                r
                                    ? (0, n.jsx)(ed.A, {
                                          guild: s,
                                          tooltipPosition: "bottom",
                                          tooltipColor: er.ST.Colors.PRIMARY,
                                          className: eg.n2,
                                      })
                                    : null,
                                (0, n.jsx)(F.E, { variant: "text-md/semibold", children: c }),
                            ],
                        }),
                        (0, n.jsx)(F.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children:
                                null != i
                                    ? i
                                    : void 0 !== s.approximateMemberCount
                                      ? ej.intl.format(em.default["5JmNgg"], { members: s.approximateMemberCount })
                                      : null,
                        }),
                    ],
                }),
            ],
        });
    });
ev.displayName = "FamilyCenterActivityGuildRow";
var eA = l(575593),
    eE = l(34188),
    eN = l(104510),
    ep = l(403581),
    eT = l(821701),
    eS = l(253292),
    ey = l(780898),
    eC = l(361628),
    eI = l(665411),
    e_ = l(898461),
    eb = l(203632),
    eL = l(486020),
    eR = l(788868),
    ek = l(893458);
let eD = (e) => {
        let { displayName: t, product: l } = e,
            i = ((e) => {
                if (0 === e.items.length) return null;
                let t = e.items[0];
                return (0, e_.T)(t)
                    ? (0, eL.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 })
                    : null;
            })(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: ek._P });
    },
    eU = (e) => {
        let { displayName: t, nameplateData: l } = e,
            { staticImageUrl: i } = (0, eS.K)(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: ek.M4 });
    },
    eM = (e) => {
        let { displayName: t, product: l } = e,
            i = ((e) => {
                if (0 === e.items.length) return null;
                let t = e.items[0];
                return (0, eb.C3)(t) ? t.thumbnailPreviewSrc : null;
            })(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: ek._P });
    },
    eP = (e) => {
        let { product: t } = e,
            l = (0, eC.A)(t.skuId, "FamilyCenterActivityPurchaseRow");
        return null == l
            ? null
            : (0, n.jsx)("div", {
                  className: ek.pI,
                  children: (0, n.jsx)("div", { className: ek.ZS, children: (0, n.jsx)(eI.A, { frame: l }) }),
              });
    },
    eO = (e) => {
        let { subscriptionPlanId: t } = e;
        if (null == t) return (0, n.jsx)("div", { className: ek.T8, children: (0, n.jsx)(eE.U, {}) });
        let l = ((e) => {
            if (null == e) return !1;
            let t = eR.hd[e];
            return t?.skuId === eR.pe.GUILD;
        })(t);
        return (0, n.jsx)("div", {
            className: ek.T8,
            children: l
                ? (0, n.jsx)(eN._, { size: "custom", width: 20, height: 20 })
                : (0, n.jsx)(ep.t, { size: "custom", width: 20, height: 20 }),
        });
    },
    eG = (e) => {
        let { displayName: t, product: l } = e;
        if (null == l) return (0, n.jsx)("div", { className: ek.T8, children: (0, n.jsx)(eE.U, {}) });
        switch (l.type) {
            case eA.R.AVATAR_DECORATION:
                return (0, n.jsx)(eD, { displayName: t, product: l });
            case eA.R.NAMEPLATE:
                let i = (0, ey.EQ)(l);
                return null != i ? (0, n.jsx)(eU, { displayName: t, nameplateData: i }) : null;
            case eA.R.PROFILE_EFFECT:
                return (0, n.jsx)(eM, { displayName: t, product: l });
            case eA.R.PROFILE_FRAME:
                return (0, n.jsx)(eP, { product: l });
            default:
                return (0, n.jsx)("div", { className: ek.T8, children: (0, n.jsx)(eE.U, {}) });
        }
    },
    eF = i.memo((e) => {
        let { skuId: t, subscriptionPlanId: l, total: i, currency: s, className: r } = e,
            { product: d } = (0, eT.A)(t),
            {
                displayName: c,
                typeName: u,
                isSubscription: o,
            } = ((e, t) => {
                let l,
                    n,
                    i = null != t;
                if (null != e)
                    (l = e.name),
                        (n = ((e) => {
                            switch (e) {
                                case eA.R.AVATAR_DECORATION:
                                    return ej.intl.string(em.default.obi47v);
                                case eA.R.PROFILE_EFFECT:
                                    return ej.intl.string(em.default.RX8BMR);
                                case eA.R.NAMEPLATE:
                                    return ej.intl.string(em.default.nNGEHk);
                                case eA.R.BUNDLE:
                                    return ej.intl.string(em.default.VS1fKo);
                                case eA.R.PROFILE_FRAME:
                                    return ej.intl.string(em.default.JiIY1l);
                                default:
                                    return "";
                            }
                        })(e.type));
                else if (i && null != t) {
                    let e = eR.hd[t];
                    l = e?.name;
                }
                return { displayName: l, typeName: n, isSubscription: i };
            })(d ?? null, l);
        if ((null != t && !o && null == d) || null == c) return null;
        let x = (0, ee.$g)(i, s);
        return (0, n.jsxs)("div", {
            className: a()(ek.kL, r),
            children: [
                o ? (0, n.jsx)(eO, { subscriptionPlanId: l }) : (0, n.jsx)(eG, { displayName: c, product: d ?? null }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(F.E, {
                            variant: "text-md/semibold",
                            children: null != u ? `${c} \u{2022} ${u}` : c,
                        }),
                        (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-subtle", children: x }),
                    ],
                }),
            ],
        });
    });
eF.displayName = "FamilyCenterActivityPurchaseRow";
var ew = l(287809),
    eV = l(427262),
    ez = l(283900),
    eH = l(914518);
let eB = i.memo((e) => {
    let { userId: t, subText: l, className: i } = e,
        s = (0, d.bG)([ew.default], () => ew.default.getUser(t));
    return void 0 === s
        ? null
        : (0, n.jsxs)("div", {
              className: a()(eH.k, i),
              children: [
                  (0, n.jsx)(ez.H, { user: s, avatarSize: M._3.SIZE_40 }),
                  (0, n.jsx)("div", {
                      children: (0, n.jsxs)("div", {
                          className: eH.$,
                          children: [
                              (0, n.jsx)(F.E, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: eV.Ay.getName(s),
                              }),
                              null != l &&
                                  (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                          ],
                      }),
                  }),
              ],
          });
});
eB.displayName = "FamilyCenterActivityUserRow";
var eY = l(475833),
    eq = l(768869),
    eZ = l(818050);
let eK = (e) => {
    let { text: t, className: l } = e;
    return (0, n.jsxs)("div", {
        className: a()(l, eq.I),
        children: [
            (0, n.jsx)("img", { className: eq.S, src: "/assets/f47ef22a8aeff32a.svg", alt: "" }),
            (0, n.jsx)(F.E, { className: eZ.Ot, variant: "text-sm/medium", color: "text-muted", children: t }),
        ],
    });
};
var eX = l(459192),
    eW = l(494596);
let eJ = (e) => {
    let { userId: t, dmsSent: l, callCount: i } = e,
        s = (0, d.bG)([ew.default], () => ew.default.getUser(t));
    return void 0 === s
        ? null
        : (0, n.jsx)(eX.u, {
              title: s.username,
              body: (0, Q.fq)(l, i),
              asContainer: !0,
              children: (0, n.jsx)("div", {
                  className: eW.k,
                  children: (0, n.jsx)(ez.H, { user: s, avatarSize: M._3.SIZE_40 }),
              }),
          });
};
var eQ = l(833802);
let e$ = () => {
    let e = (0, d.bG)([C.A], () => C.A.getTopUserActivities()),
        t = (0, d.bG)([C.A], () => C.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, n.jsxs)("div", {
              className: eQ.kL,
              children: [
                  e.length > 0 &&
                      (0, n.jsxs)("div", {
                          className: eQ.A2,
                          children: [
                              (0, n.jsx)(w.D, {
                                  variant: "text-md/medium",
                                  className: eQ.bV,
                                  children: ej.intl.string(em.default.BxbvS7),
                              }),
                              (0, n.jsx)("div", {
                                  className: eQ.Ce,
                                  children:
                                      1 === e.length
                                          ? (0, n.jsx)(eB, {
                                                userId: e[0].user_id,
                                                subText: (0, Q.fq)(e[0].dms_sent, e[0].call_count),
                                                className: eQ.q3,
                                            })
                                          : e.map((e) =>
                                                (0, n.jsx)(
                                                    eJ,
                                                    { userId: e.user_id, dmsSent: e.dms_sent, callCount: e.call_count },
                                                    e.user_id,
                                                ),
                                            ),
                              }),
                          ],
                      }),
                  t.length > 0 &&
                      (0, n.jsxs)("div", {
                          className: eQ.A2,
                          children: [
                              (0, n.jsx)(w.D, {
                                  variant: "text-md/medium",
                                  className: eQ.bV,
                                  children: ej.intl.string(em.default.Lq9Set),
                              }),
                              1 === t.length
                                  ? (0, n.jsx)(ev, {
                                        guildId: t[0].guild_id,
                                        customSubtext: (0, Q.fq)(t[0].messages_sent, t[0].call_count),
                                        className: eQ._S,
                                    })
                                  : (0, n.jsx)("div", {
                                        className: eQ.Ce,
                                        children: t.map((e) => {
                                            let t = C.A.getGuild(e.guild_id),
                                                l = t?.name ?? "Unknown Server";
                                            return (0, n.jsx)(
                                                eX.u,
                                                {
                                                    title: l,
                                                    body: (0, Q.fq)(e.messages_sent, e.call_count) ?? null,
                                                    asContainer: !0,
                                                    children: (0, n.jsx)(eh, { guildId: e?.guild_id }),
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
var e0 = l(990021),
    e3 = l(453287);
function e1() {
    let e = i.useCallback(() => {
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([l.e("3083"), l.e("60106")]).then(l.bind(l, 853809));
            return (t) => (0, n.jsx)(e, { ...t });
        });
    }, []);
    return (0, n.jsx)(P.D, {
        className: e0.YL,
        onClick: e,
        children: (0, n.jsx)(q.m, { size: "custom", color: "currentColor", className: e0.Kk, width: 15, height: 15 }),
    });
}
function e2(e) {
    let { displayType: t } = e,
        l = i.useCallback(() => {
            (0, Z.P0)((0, K.o)(ej.intl.string(em.default.Wu8BK2), X.Ck.FAILURE));
        }, []),
        s = (0, I.A)(),
        r = (0, d.yK)([C.A], () => C.A.getActionsForDisplayType(t)),
        c = et(t),
        o = el(t),
        { loadMore: x, isMoreLoading: h } = (0, V.A)({ onError: l }),
        m = (0, Q.kN)().get(t),
        [j, g] = i.useState(b.PH),
        f = i.useCallback(() => {
            g((e) => e + b.PH), x(t);
        }, [t, x]);
    B()(m, `No text for action type: ${t}`);
    let v = t === b.NV.PURCHASES && null != o ? m.sectionHeader(o) : m.sectionHeader(c),
        A = i.useCallback(
            (e) => {
                let { row: t } = e,
                    l = r[t];
                if ((0, Q.aq)(l)) {
                    let e = J.default.extractTimestamp(l.event_id),
                        t = (0, Q.i6)(e, m.timestampFormatter);
                    return (0, n.jsx)(eB, { userId: l.entity_id, subText: t }, l.event_id);
                }
                if ((0, Q.Is)(l)) return (0, n.jsx)(ev, { guildId: l.entity_id }, l.event_id);
                if ((0, Q.u7)(l)) {
                    let e = C.A.getPurchaseInfo(l.entity_id);
                    return null == e
                        ? null
                        : (0, n.jsx)(
                              eF,
                              {
                                  skuId: e.sku_id,
                                  subscriptionPlanId: e.subscription_plan_id,
                                  total: e.total,
                                  currency: e.currency,
                              },
                              l.event_id,
                          );
                }
                return null;
            },
            [r, m.timestampFormatter],
        ),
        E = i.useCallback(
            () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(F.E, { className: e0.bV, variant: "text-md/semibold", children: v }),
                        void 0 !== m.sectionDescription
                            ? (0, n.jsx)(F.E, {
                                  className: e0.yV,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: m.sectionDescription(s ?? !1),
                              })
                            : null,
                    ],
                }),
            [v, m, s],
        );
    if (0 === r.length) return null;
    let N = r.slice(0, j);
    return (0, n.jsxs)("div", {
        className: e0.A2,
        children: [
            E(),
            (0, n.jsx)("div", {
                className: e0.o1,
                style: { maxHeight: 65 * N.length },
                children: N.map((e, t) => A({ row: t })),
            }),
            N.length < c
                ? (0, n.jsx)(P.D, {
                      className: a()(e0.FQ, { [e0.r9]: h }),
                      onClick: f,
                      role: "button",
                      "aria-disabled": h,
                      children: h
                          ? (0, n.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, className: e0.u1 })
                          : (0, n.jsx)(F.E, {
                                className: e0.UX,
                                variant: "text-sm/bold",
                                children: ej.intl.format(em.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - N.length, b.PH)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let e9 = () => {
        let e = (0, I.A)(),
            t = (0, D.vx)(),
            l = (0, $.y)(
                ej.intl.formatToPlainString(em.default["7hqFl9"], { activeLinks: t.length }),
                ej.intl.string(em.default["Q/D/0Q"]),
            ),
            i = (0, Q.cV)(!!e),
            s = (0, D.v4)(i);
        return e && t.length > 1
            ? (0, n.jsx)(F.E, { variant: "eyebrow", children: s })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      e ? null : (0, n.jsx)(W.b, { size: "xs", color: "currentColor", className: e0.Kk }),
                      (0, n.jsx)(F.E, { variant: "eyebrow", children: l }),
                  ],
              });
    },
    e8 = i.memo((e) => {
        let { userId: t, subText: l, avatarSize: i = M._3.SIZE_40, hideUserTag: s = !1 } = e,
            a = (0, z.F7)(t);
        return void 0 === a
            ? null
            : (0, n.jsxs)("div", {
                  className: e0.iO,
                  children: [
                      (0, n.jsx)(ez.H, { user: a, avatarSize: i }),
                      (0, n.jsxs)("div", {
                          className: e0.TK,
                          children: [
                              (0, n.jsx)(eY.A, { user: a, hideUserTag: s }),
                              void 0 !== l
                                  ? (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-muted", children: l })
                                  : null,
                          ],
                      }),
                  ],
              });
    });
e8.displayName = "FamilyCenterActivityCardAccountRow";
let e7 = () => {
        let e = (0, D.GR)(),
            t = (0, d.bG)([C.A], () => C.A.getSelectedTeenId()),
            { selectTeenUser: l } = (0, V.A)({}),
            s = e.map((e) => ({ label: e.id, value: e.id })),
            a = i.useCallback((e) => (0, n.jsx)(e8, { userId: e.value, avatarSize: M._3.SIZE_24 }), []);
        return (0, n.jsx)(U.Pw, {
            className: e0.Lt,
            renderOptionLabel: a,
            renderOptionValue: (e) => {
                let [t] = e;
                return a(t);
            },
            serialize: (e) => e,
            select: (e) => {
                l(e), _.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: b.qb.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: s,
            "data-migration-pending": !0,
        });
    },
    e4 = () => {
        let e = (0, en.k)(),
            t = (0, I.A)(),
            l = (0, D.vx)(),
            i = (0, Q.cV)(!!t),
            s = (0, D.v4)(i);
        return null === e ? null : t && 1 !== l.length ? (0, n.jsx)(e7, {}) : (0, n.jsx)(e8, { userId: e, subText: s });
    },
    e5 = () => {
        let e = (0, Q.Mo)(),
            t = (0, d.bG)([C.A], () => Object.values(b.NV).some((e) => C.A.getTotalForDisplayType(e) > 0)),
            l = (0, Q.jp)(),
            i = (0, D.v4)(l);
        return (0, n.jsxs)("div", {
            className: e0.kL,
            children: [
                (0, n.jsxs)("div", { className: e0.vF, children: [(0, n.jsx)(e9, {}), (0, n.jsx)(e1, {})] }),
                (0, n.jsxs)("div", {
                    className: e3.a,
                    children: [
                        (0, n.jsx)("div", { className: e0.wx, children: (0, n.jsx)(e4, {}) }),
                        (0, n.jsxs)(c.B, {
                            gap: 32,
                            padding: 32,
                            fullWidth: !1,
                            children: [
                                (0, n.jsx)("div", {
                                    className: e0.O2,
                                    children: e.map((e) => {
                                        let [t, l] = e;
                                        return (0, n.jsx)(
                                            ea,
                                            { displayType: t, header: l.tooltipHeader() },
                                            `counter-${t}`,
                                        );
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: e0.RJ,
                                    children: [
                                        (0, n.jsx)(e$, {}),
                                        t
                                            ? e.map((e) => {
                                                  let [t] = e;
                                                  return (0, n.jsx)(e2, { displayType: t }, `${t}-list`);
                                              })
                                            : (0, n.jsx)(eK, { className: e0.RL, text: i ?? "" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
var e6 = l(336541);
let te = () => {
        let e = (0, D.vx)(),
            t = (0, z.y3)(),
            { selectTeenUser: l } = (0, V.A)({}),
            s = e.map((e) => ({ label: e, value: e })),
            r = i.useCallback(
                (e) => (0, n.jsx)(e8, { userId: e.value, avatarSize: M._3.SIZE_24, hideUserTag: !0 }),
                [],
            );
        return 0 === e.length
            ? null
            : (0, n.jsx)("div", {
                  className: a()(e6.Gq, { [e6.wS]: e.length > 1 }),
                  children:
                      e.length > 1
                          ? (0, n.jsx)(U.Pw, {
                                renderOptionLabel: r,
                                renderOptionValue: (e) => {
                                    let [t] = e;
                                    return r(t);
                                },
                                serialize: (e) => e,
                                select: (e) => {
                                    l(e);
                                },
                                isSelected: (e) => e === t?.id,
                                options: s,
                                "data-migration-pending": !0,
                            })
                          : (0, n.jsx)(e8, { userId: e[0], avatarSize: M._3.SIZE_24, hideUserTag: !0 }),
              });
    },
    tt = () => {
        let { selectedTab: e, handleTabChange: t } = k(),
            l = i.useCallback(() => {
                t(b.u9.ACTIVITY);
            }, [t]);
        return (0, n.jsxs)(c.B, {
            gap: 32,
            children: [
                (0, n.jsxs)(P.D, {
                    className: e6.Gv,
                    onClick: l,
                    "aria-label": ej.intl.string(ej.t.ybUZql),
                    children: [
                        (0, n.jsx)(O.Z, { size: "sm", color: G.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        (0, n.jsx)(F.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ej.intl.string(ej.t["13/7kX"]),
                        }),
                    ],
                }),
                (0, n.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    children: [
                        (0, n.jsxs)(c.B, {
                            gap: 4,
                            className: e6.gn,
                            children: [
                                (0, n.jsx)(F.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: ej.intl.string(em.default.RZqaJn),
                                }),
                                (0, n.jsx)(w.D, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: ej.intl.string(
                                        e === b.u9.CONTENT_AND_SOCIAL ? ej.t["+o1pDZ"] : ej.t.OAuOHD,
                                    ),
                                }),
                            ],
                        }),
                        (0, n.jsx)(te, {}),
                    ],
                }),
            ],
        });
    };
var tl = l(404778),
    tn = l(628630);
let ti = function (e) {
    let { children: t, title: l, description: i } = e;
    return (0, n.jsxs)("div", {
        className: tn.L1,
        children: [
            (null != l || null != i) &&
                (0, n.jsxs)("div", {
                    className: tn.Km,
                    children: [
                        null != l &&
                            (0, n.jsx)(w.D, { variant: "heading-lg/semibold", color: "text-strong", children: l }),
                        null != i && (0, n.jsx)(F.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                    ],
                }),
            (0, n.jsx)("div", { className: tn.Yq, children: t }),
            (0, n.jsx)(tl.c, { className: tn.yj }),
        ],
    });
};
var ts = l(884307);
function ta(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: ts.y, children: t });
}
var tr = l(389462),
    td = l(464946),
    tc = l(750994),
    tu = l(171316);
function to() {
    let e = (0, tu.KK)(),
        t = (0, en.k)() ?? void 0,
        l = (0, tu.NZ)();
    return (0, n.jsx)(td.h, {
        children: (0, n.jsx)(tc.Ay, {
            title: l ? ej.intl.string(ej.t.PMsfcH) : ej.intl.string(ej.t.RAQUSN),
            note: l ? ej.intl.string(ej.t.XXGmuB) : ej.intl.string(ej.t.wbYDfT),
            value: !e,
            onChange: (e) => {
                tr.yr.updateControlledSetting(t, !e);
            },
        }),
    });
}
var tx = l(139716),
    th = l(847599),
    tm = l(953298),
    tj = l(975571);
function tg() {
    let e = (0, en.k)() ?? void 0,
        t = (0, tu.KK)(),
        l = tr.ES.useControlledSetting(e);
    return (0, n.jsx)(td.h, {
        children: (0, n.jsx)(tc.Ay, {
            title: ej.intl.string(ej.t["3o2ojh"]),
            value: !t && !l,
            onChange: (t) => {
                !t && (0, tm.w)()
                    ? tx.A.showAgeVerificationGetStartedModal({ entryPoint: th.q1.MESSAGE_REQUESTS_SETTINGS })
                    : tr.ES.updateControlledSetting(e, !t);
            },
            disabled: t,
            note: ej.intl.format(ej.t.IoztJ0, { helpdeskArticle: tj.A.getArticleURL(L.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
var tf = l(665260),
    tv = l(115063);
function tA() {
    let e = (0, en.k)() ?? void 0,
        t = tr.up.useControlledSetting(e),
        l = i.useMemo(() => (0, tv.Lx)(t), [t]);
    return null == e
        ? null
        : (0, n.jsxs)(ta, {
              children: [
                  (0, n.jsx)(td.h, {
                      children: (0, n.jsx)(tc.Ay, {
                          title: ej.intl.string(ej.t["7x9dyE"]),
                          value: l.all,
                          onChange: (t) => tr.up.updateControlledSetting(e, t ? L.yKI : L.yKI & ~L.dzt.NO_RELATION),
                      }),
                  }),
                  (0, n.jsx)(td.h, {
                      children: (0, n.jsx)(tc.Ay, {
                          title: ej.intl.string(ej.t.NfeuZ3),
                          value: l.all || l.mutualFriends,
                          onChange: (l) =>
                              tr.up.updateControlledSetting(
                                  e,
                                  l
                                      ? tf.UI(t, L.dzt.MUTUAL_FRIENDS)
                                      : tf.iE(t, L.dzt.MUTUAL_FRIENDS, L.dzt.NO_RELATION),
                              ),
                      }),
                  }),
                  (0, n.jsx)(td.h, {
                      children: (0, n.jsx)(tc.Ay, {
                          title: ej.intl.string(ej.t.qsMfsH),
                          value: l.all || l.mutualGuilds,
                          onChange: (l) =>
                              tr.up.updateControlledSetting(
                                  e,
                                  l ? tf.UI(t, L.dzt.MUTUAL_GUILDS) : tf.iE(t, L.dzt.MUTUAL_GUILDS, L.dzt.NO_RELATION),
                              ),
                      }),
                  }),
              ],
          });
}
var tE = l(444802),
    tN = l(875162),
    tp = l(873298),
    tT = l(389737),
    tS = l(566769),
    ty = l(704724);
function tC() {
    let e = (0, en.k)(),
        t = (0, tu.xs)(),
        l = [
            { value: tp.TO.BLUR, label: ej.intl.string(ej.t.S49Uad) },
            { value: tp.TO.BLOCK, label: ej.intl.string(ej.t["D/157Y"]) },
        ];
    if (null == t || null == e) return null;
    let i = (t) => {
            (0, ty.Jz)(e, t);
        },
        { explicitContentFriendDm: s, explicitContentNonFriendDm: a } = t;
    return (0, n.jsxs)(tT.E, {
        description: ej.intl.string(ej.t.Wnojv1),
        children: [
            (0, n.jsx)(tS.A, {
                title: ej.intl.string(ej.t["+uI23H"]),
                value: s,
                onChange: (e) => i({ explicitContentFriendDm: e }),
                options: l,
            }),
            (0, n.jsx)(tS.A, {
                title: ej.intl.string(ej.t["Yh+HX1"]),
                value: a,
                onChange: (e) => i({ explicitContentNonFriendDm: e }),
                options: l,
            }),
        ],
    });
}
function tI() {
    let e = (0, en.k)(),
        t = (0, tu.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: l, goreContentNonFriendDm: i } = t,
        s = (t) => {
            (0, ty.qY)(e, t);
        },
        a = [
            { value: tp.TO.BLUR, label: ej.intl.string(ej.t.S49Uad) },
            { value: tp.TO.BLOCK, label: ej.intl.string(ej.t["D/157Y"]) },
        ];
    return (0, n.jsxs)(tT.E, {
        description: ej.intl.string(ej.t.XgH9eh),
        children: [
            (0, n.jsx)(tS.A, {
                title: ej.intl.string(ej.t["+uI23H"]),
                value: l,
                onChange: (e) => s({ goreContentFriendDm: e }),
                options: a,
            }),
            (0, n.jsx)(tS.A, {
                title: ej.intl.string(ej.t["Yh+HX1"]),
                value: i,
                onChange: (e) => s({ goreContentNonFriendDm: e }),
                options: a,
            }),
        ],
    });
}
var t_ = l(25191);
function tb() {
    let e = (0, tE.WX)(),
        t = [
            {
                id: "explicit-media-redaction",
                title: ej.intl.string(ej.t.GYpoAq),
                component: () => (0, n.jsx)(tC, {}),
                orientation: "vertical",
            },
            {
                id: "gore-media-redaction",
                title: ej.intl.string(ej.t["16/3Bi"]),
                component: () => (0, n.jsx)(tI, {}),
                orientation: "vertical",
            },
        ];
    return (0, n.jsxs)(td.h, {
        children: [
            (0, n.jsx)(td._, {
                header: ej.intl.string(ej.t["Hj/But"]),
                description: ej.intl.format(ej.t["H/Icz+"], { learnMoreLink: tj.A.getArticleURL(e) }),
            }),
            (0, n.jsx)(tN.A, { tabs: t, orientation: "vertical", tabsClassName: t_.v }),
        ],
    });
}
let tL = () =>
    (0, n.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, n.jsx)(tt, {}),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(ti, { title: ej.intl.string(ej.t.xVRG4P), children: (0, n.jsx)(tb, {}) }),
                    (0, n.jsx)(ti, {
                        title: ej.intl.string(ej.t["y62Z/d"]),
                        children: (0, n.jsxs)(ta, { children: [(0, n.jsx)(to, {}), (0, n.jsx)(tg, {})] }),
                    }),
                    (0, n.jsx)(ti, { title: ej.intl.string(ej.t["1Qn8iV"]), children: (0, n.jsx)(tA, {}) }),
                ],
            }),
        ],
    });
function tR() {
    let { hasConsented: e, updateConsent: t } = (0, tu.lH)(L.YAq.PERSONALIZATION);
    return (0, n.jsx)(td.h, {
        children: (0, n.jsx)(tc.Ay, {
            title: ej.intl.string(em.default.XMPqUx),
            note: ej.intl.format(em.default.Imp6Ns, {
                helpdeskArticle: tj.A.getArticleURL(L.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
function tk() {
    let e = (0, en.k)() ?? void 0,
        t = tr.yH.useControlledSetting(e),
        l = tr.kf.useControlledSetting(e);
    return null == e
        ? null
        : (0, n.jsx)(td.h, {
              children: (0, n.jsx)(tc.Ay, {
                  title: ej.intl.string(ej.t.CyLYKZ),
                  note: ej.intl.format(em.default["6mK5Pz"], {
                      helpdeskArticle: tj.A.getArticleURL(L.MVz.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !t,
                  onChange: (t) => tr.yH.updateControlledSetting(e, !t),
                  disabled: l,
              }),
          });
}
function tD() {
    let e = (0, en.k)() ?? void 0,
        t = tr.kf.useControlledSetting(e);
    return (0, n.jsx)(td.h, {
        children: (0, n.jsx)(tc.Ay, {
            title: ej.intl.string(em.default.ZhaNu8),
            note: ej.intl.format(em.default.cnCK6b, {
                helpdeskArticle: tj.A.getArticleURL(L.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => tr.kf.updateControlledSetting(e, !t),
        }),
    });
}
function tU() {
    let { hasConsented: e, updateConsent: t } = (0, tu.lH)(L.YAq.USAGE_STATISTICS);
    return (0, n.jsx)(td.h, {
        children: (0, n.jsx)(tc.Ay, {
            title: ej.intl.string(em.default.HjstRR),
            note: ej.intl.format(em.default.Z5yJZy, {
                helpdeskArticle: tj.A.getArticleURL(L.MVz.DATA_PRIVACY_CONTROLS),
            }),
            value: e,
            onChange: t,
        }),
    });
}
let tM = () =>
    (0, n.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, n.jsx)(tt, {}),
            (0, n.jsx)("div", {
                children: (0, n.jsxs)(ti, {
                    title: ej.intl.string(ej.t.SRZyHg),
                    children: [(0, n.jsx)(tU, {}), (0, n.jsx)(tD, {}), (0, n.jsx)(tk, {}), (0, n.jsx)(tR, {})],
                }),
            }),
        ],
    });
var tP = l(582394),
    tO = l(141006),
    tG = l(821609);
function tF() {
    let e = ej.intl.string(em.default["8SLtqb"]);
    return (0, n.jsx)(tG.$, {
        icon: tO.y,
        variant: "primary",
        text: e,
        onClick: () => {
            (0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    l.e("11377"),
                    l.e("30244"),
                    l.e("95429"),
                    l.e("98189"),
                    l.e("48370"),
                    l.e("72875"),
                ]).then(l.bind(l, 320742));
                return (t) => (0, n.jsx)(e, { ...t });
            }),
                _.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: b.qb.ShowQRCodeModal });
        },
    });
}
var tw = l(555317);
let tV = () => {
        let e = (0, D.Li)(),
            t = (0, I.A)(),
            { handleTabChange: l } = k();
        return (0, D.xr)() || (t && e)
            ? null
            : (0, n.jsx)("div", {
                  className: tw.x6,
                  children: t
                      ? (0, n.jsx)(tG.$, {
                            variant: "primary",
                            text: ej.intl.string(ej.t.LhlgY9),
                            onClick: () => l(b.u9.REQUESTS),
                        })
                      : (0, n.jsx)(tF, {}),
              });
    },
    tz = () => {
        let e = (0, I.A)(),
            t = (0, $.y)(ej.intl.string(em.default["T7GyW+"]), ej.intl.string(em.default.goKE2b)),
            l = (0, $.y)(
                ej.intl.format(em.default.MXjDSv, {
                    articleLink: "https://support.discord.com/hc/articles/14155060633623",
                }),
                ej.intl.format(em.default.EMCf6j, {
                    articleLink: "https://support.discord.com/hc/articles/14155043715735",
                }),
            );
        return (0, n.jsxs)("div", {
            className: a()(tw.kL, e3.a),
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)("div", {
                            children: (0, n.jsxs)("div", {
                                className: tw.TK,
                                children: [
                                    (0, n.jsx)(w.D, {
                                        variant: "heading-xl/medium",
                                        children: (0, n.jsx)(ei.F, { children: t }),
                                    }),
                                    (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                                ],
                            }),
                        }),
                        (0, n.jsx)(tV, {}),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: tw.F0,
                    children: (0, n.jsx)("img", {
                        src: e ? "/assets/bc9100f5e54f39a8.svg" : "/assets/12ee06c12c73e78e.svg",
                        alt: ej.intl.string(em.default.ffg6xd),
                    }),
                }),
            ],
        });
    };
var tH = l(299628),
    tB = l(119e3);
let tY = () => {
    let e = ej.intl.string(em.default.tr8Gni),
        t = (0, $.y)(ej.intl.string(em.default["3xKGSE"]), ej.intl.string(em.default.XbgrG7));
    return (0, n.jsxs)(c.B, {
        className: a()(tB.k, e3.a),
        gap: 24,
        padding: 24,
        children: [
            (0, n.jsxs)(c.B, {
                gap: 8,
                children: [
                    (0, n.jsx)(w.D, { variant: "heading-md/bold", children: (0, n.jsx)(ei.F, { children: e }) }),
                    (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-muted", children: t }),
                ],
            }),
            (0, n.jsx)(tH.A, {}),
        ],
    });
};
var tq = l(445220);
let tZ = (e) => {
    let { icon: t, iconClassName: l, header: i, description: s } = e;
    return (0, n.jsxs)("div", {
        className: a()(tq.kL, e3.a),
        children: [
            (0, n.jsx)("div", {
                className: tq.n1,
                children: (0, n.jsx)(t, {
                    className: a()(tq.Kk, l),
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(w.D, {
                        variant: "heading-md/bold",
                        className: tq.wx,
                        children: (0, n.jsx)(ei.F, { children: i }),
                    }),
                    (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
                ],
            }),
        ],
    });
};
var tK = l(847374),
    tX = l(349288),
    tW = l(308528),
    tJ = l(922529),
    tQ = l(780964),
    t$ = l(830543),
    t0 = l(766075),
    t3 = l(219893),
    t1 = l(936926),
    t2 = l(534654),
    t9 = l(980707),
    t8 = l(477782),
    t7 = l(943255),
    t4 = l(922016),
    t5 = l(408278),
    t6 = l(365199),
    le = l(243721),
    lt = l(95396),
    ll = l(624411);
function ln(e) {
    let { closePopout: t, onEdit: l, onDelete: i } = e;
    return (0, n.jsxs)(t9.W, {
        "data-menu-migrated": !0,
        "aria-label": ej.intl.string(ej.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, n.jsx)(t8.Dr, { id: "edit", label: ej.intl.string(em.default.b3DPqg), action: l }),
            (0, n.jsx)(t8.Dr, { id: "delete", label: ej.intl.string(em.default.d8pizZ), color: "danger", action: i }),
        ],
    });
}
function li(e) {
    let { rule: t, teenId: s, readOnly: a = !1 } = e,
        r = i.useRef(null),
        d = t?.enabled ?? !0,
        u = (0, t3.li)(t),
        o = (0, t3.n1)(t.days),
        x = () => {
            (0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("76035"), l.e("39231")]).then(l.bind(l, 154434));
                return (l) => (0, n.jsx)(e, { ...l, teenId: s, rule: t });
            });
        },
        h = () => {
            (0, lt.CS)(s, t.ruleId);
        };
    return (0, n.jsxs)(c.B, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        children: [
            (0, n.jsx)("div", { className: ll.X, children: (0, n.jsx)(t7.Z, { size: "md" }) }),
            (0, n.jsxs)(c.B, {
                direction: "vertical",
                style: { flex: 1, minWidth: 0 },
                gap: 4,
                children: [
                    (0, n.jsx)(F.E, { variant: "text-md/medium", children: u }),
                    (0, n.jsx)(F.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
                ],
            }),
            (0, n.jsxs)(c.B, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                fullWidth: !1,
                children: [
                    !a &&
                        (0, n.jsx)(t4.Y, {
                            targetElementRef: r,
                            renderPopout: (e) => (0, n.jsx)(ln, { ...e, onEdit: x, onDelete: h }),
                            position: "bottom",
                            align: "right",
                            animation: t4.Y.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, n.jsx)(t5.K, {
                                    buttonRef: r,
                                    size: "sm",
                                    icon: t6.j,
                                    variant: "icon-only",
                                    "aria-label": ej.intl.string(ej.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    onClick: (e) => {
                                        e.stopPropagation(), t(e);
                                    },
                                });
                            },
                        }),
                    (0, n.jsx)("div", {
                        className: ll.m,
                        children: (0, n.jsx)(le.d, {
                            checked: d,
                            label: ej.intl.string(em.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: () => {
                                (0, lt.Um)(s, t.ruleId, { enabled: !d });
                            },
                            hasIcon: !0,
                            disabled: a,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ls = l(587349);
let la = (e) => {
        let { title: t, buttonText: l, onButtonPress: i, readOnly: s = !1 } = e;
        return (0, n.jsxs)(c.B, {
            padding: { top: 12, bottom: 12 },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, n.jsx)(F.E, { variant: "text-md/medium", children: t }),
                (0, n.jsx)("div", {
                    className: s ? ls.nh : void 0,
                    children: (0, n.jsx)(tG.$, { text: l, onClick: i, variant: "secondary", size: "sm", disabled: s }),
                }),
            ],
        });
    },
    lr = (e) => {
        let { teenId: t, readOnly: s = !1 } = e,
            a = (0, z.y3)(),
            r = a?.restrictedSchedule?.rules ?? [],
            d = (0, t3.I2)(r),
            [u, o] = i.useState(d.length > 0);
        i.useEffect(() => {
            d.length > 0 && o(!0);
        }, [d.length]);
        let x = () => {
            (0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("76035"), l.e("39231")]).then(l.bind(l, 154434));
                return (l) => (0, n.jsx)(e, { ...l, teenId: t });
            });
        };
        return 0 === d.length
            ? (0, n.jsx)(la, {
                  title: ej.intl.string(em.default["1Op+NP"]),
                  buttonText: ej.intl.string(em.default.OwFF4o),
                  onButtonPress: x,
                  readOnly: s,
              })
            : (0, n.jsxs)(c.B, {
                  direction: "vertical",
                  gap: 0,
                  children: [
                      (0, n.jsxs)(P.D, {
                          className: ls.dV,
                          onClick: () => o((e) => !e),
                          children: [
                              (0, n.jsx)("div", {
                                  className: ls.WB,
                                  children: (0, n.jsxs)(c.B, {
                                      direction: "vertical",
                                      gap: 4,
                                      children: [
                                          (0, n.jsx)(F.E, {
                                              variant: "text-md/medium",
                                              children: ej.intl.string(em.default["1Op+NP"]),
                                          }),
                                          (0, n.jsx)(F.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children: ej.intl.formatToPlainString(em.default.XfwcpX, {
                                                  count: d.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ls.pt,
                                  children: (0, n.jsx)(tK.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      className: `${ls.ai} ${u ? ls.hg : ""}`,
                                  }),
                              }),
                          ],
                      }),
                      u &&
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(c.B, {
                                      direction: "vertical",
                                      gap: 16,
                                      padding: { top: 24, bottom: 24 },
                                      children: d.map((e) =>
                                          (0, n.jsx)(li, { rule: e, teenId: t, readOnly: s }, e.ruleId),
                                      ),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: s ? ls.nh : void 0,
                                      children: (0, n.jsx)(tG.$, {
                                          text: ej.intl.string(em.default.OwFF4o),
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
    },
    ld = () => {
        let e = (0, D.vx)(),
            t = (0, z.y3)(),
            l = (0, t1.Vh)({ location: "TimeControlsRow" }),
            i = () => {
                (0, t0.openUserSettings)(tQ.X.CONTENT_AND_SOCIAL_PANEL);
            };
        return (0, n.jsxs)(c.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, n.jsxs)(c.B, {
                    padding: { bottom: 12 },
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    gap: 32,
                    children: [
                        (0, n.jsxs)(c.B, {
                            direction: "vertical",
                            gap: 4,
                            children: [
                                (0, n.jsx)(F.E, {
                                    variant: "text-sm/semibold",
                                    children: ej.intl.string(em.default.ahKIJO),
                                }),
                                (0, n.jsx)(F.E, {
                                    variant: "text-md/medium",
                                    color: "text-muted",
                                    children: ej.intl.format(em.default.X9rW0j, {
                                        openSettingsHook: (e, t) =>
                                            (0, n.jsx)(tX.Anchor, { onClick: i, children: e }, t),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(tG.$, {
                            text: ej.intl.formatToPlainString(em.default.ggcjPR, { count: e.length }),
                            onClick: () => {
                                (0, t$.default)(), tW.A.openPrivateChannel({ recipientIds: e });
                            },
                            variant: "secondary",
                            size: "sm",
                        }),
                    ],
                }),
                l &&
                    t?.id != null &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(tJ.A, { className: ls.yF }),
                            (0, n.jsx)(lr, { teenId: t.id, readOnly: !0 }),
                        ],
                    }),
            ],
        });
    },
    lc = () => {
        let e = (0, z.y3)(),
            t = (0, z.tl)(),
            { handleTabChange: l } = k(),
            s = (0, t1.Vh)({ location: "TimeControlsRow" });
        i.useEffect(() => {
            e?.id != null && t && y.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]);
        let a = (e) => {
            l(e);
        };
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(c.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(F.E, { variant: "text-sm/semibold", children: ej.intl.string(em.default.ahKIJO) }),
                        (0, n.jsx)(F.E, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: ej.intl.string(em.default.Sv236e),
                        }),
                    ],
                }),
                (0, n.jsx)(la, {
                    title: ej.intl.string(ej.t["+o1pDZ"]),
                    buttonText: ej.intl.string(ej.t.bt75uw),
                    onButtonPress: () => a(b.u9.CONTENT_AND_SOCIAL),
                }),
                (0, n.jsx)(tJ.A, { className: ls.yF }),
                (0, n.jsx)(la, {
                    title: ej.intl.string(ej.t.OAuOHD),
                    buttonText: ej.intl.string(ej.t.bt75uw),
                    onButtonPress: () => a(b.u9.DATA_AND_PRIVACY),
                }),
                s &&
                    e?.id != null &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(tJ.A, { className: ls.yF }), (0, n.jsx)(lr, { teenId: e.id })],
                    }),
            ],
        });
    },
    lu = () => {
        let e = (0, t2.A)();
        return 0 === (0, D.vx)().length
            ? null
            : (0, n.jsx)("div", { className: ls.kL, children: e ? (0, n.jsx)(ld, {}) : (0, n.jsx)(lc, {}) });
    };
var lo = l(175524);
let lx = () => {
    let e = (0, D.vx)().length > 0,
        t = (0, d.bG)([ew.default], () => ew.default.getCurrentUser()),
        l = (0, $.y)(ej.intl.string(em.default["5RZ8Tq"]), ej.intl.string(em.default.bmhCnL)),
        i = (0, $.y)(ej.intl.string(em.default.XKnFFq), ej.intl.string(em.default["68zfxD"])),
        s = (0, $.y)(ej.intl.string(em.default["Rm/6a0"]), ej.intl.string(em.default["1xPTwE"]));
    return void 0 === t
        ? null
        : (0, n.jsxs)("div", {
              className: lo.kL,
              children: [
                  e
                      ? null
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", { className: lo.vK, children: (0, n.jsx)(tz, {}) }),
                                (0, n.jsxs)("div", {
                                    className: lo.yk,
                                    children: [
                                        (0, n.jsx)(tZ, {
                                            icon: tP.M,
                                            header: ej.intl.string(em.default["001l3m"]),
                                            description: l,
                                        }),
                                        (0, n.jsx)(tZ, {
                                            icon: W.b,
                                            header: ej.intl.string(em.default.yipAeP),
                                            description: i,
                                        }),
                                        (0, n.jsx)(tZ, {
                                            icon: tO.y,
                                            header: ej.intl.string(em.default.hhOuMe),
                                            description: s,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  e ? (0, n.jsx)(e5, {}) : (0, n.jsx)(tY, {}),
                  (0, n.jsx)(lu, {}),
              ],
          });
};
l(801541);
var lh = l(889137),
    lm = l(837381),
    lj = l(475825),
    lg = l(260762),
    lf = l(485947),
    lv = l(426190),
    lA = l(789645),
    lE = l(990078),
    lN = l(665566);
function lp(e) {
    let { icon: t, tooltip: l, onClick: i, className: s } = e;
    return (0, n.jsx)(lE.m, {
        text: l,
        children: (0, n.jsx)(P.D, {
            "aria-label": l,
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), i(e);
            },
            className: a()(lN.hP, s),
            children: (0, n.jsx)(t, { className: lN.Kk, color: "currentColor" }),
        }),
    });
}
var lT = l(854627),
    lS = l(19575),
    ly = l(486241);
let lC = lS.Ay.getEnableHardwareAcceleration() ? eu.Js : eu.eu;
function lI(e) {
    let { otherUser: t, status: l } = e,
        i = (0, D.XC)(t.id, l),
        {
            avatarSrc: s,
            avatarDecorationSrc: a,
            eventHandlers: r,
        } = (0, lT.A)({ userId: t.id, size: M._3.SIZE_40, animateOnHover: !0 });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ...r,
                children: (0, n.jsx)(lC, {
                    className: ly.my,
                    src: s,
                    avatarDecoration: a,
                    size: M._3.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, n.jsxs)("div", {
                className: ly.yt,
                children: [
                    (0, n.jsx)("div", { className: ly.Vx, children: (0, n.jsx)(eY.A, { user: t }) }),
                    (0, n.jsx)(F.E, { color: "text-muted", variant: "text-xs/normal", children: i }),
                ],
            }),
        ],
    });
}
var l_ = l(528218);
function lb(e) {
    let { user: t } = e,
        s = (0, d.bG)([ew.default], () => ew.default.getCurrentUser()),
        a = i.useCallback(() => {
            B()(void 0 !== s, "User must be logged in to accept a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([l.e("53385"), l.e("55738"), l.e("43139")]).then(
                        l.bind(l, 179950),
                    );
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: s, otherUser: t });
                });
        }, [s, t]);
    return (0, n.jsxs)("div", {
        className: l_.kL,
        children: [
            (0, n.jsx)("div", { className: l_.zH, children: (0, n.jsx)(lI, { otherUser: t, status: b.Ef.ACTIVE }) }),
            (0, n.jsx)("div", {
                className: l_.o1,
                children: (0, n.jsx)(lp, { icon: lA.P, tooltip: ej.intl.string(em.default.l20ZZp), onClick: a }),
            }),
        ],
    });
}
var lL = l(933832);
function lR(e) {
    let { user: t } = e,
        s = (0, I.A)(),
        a = (0, D.xr)(),
        r = (0, d.bG)([ew.default], () => ew.default.getCurrentUser()),
        c = i.useCallback(() => {
            B()(void 0 !== r, "User must be logged in to accept a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([l.e("53385"), l.e("55738"), l.e("31385")]).then(
                        l.bind(l, 58144),
                    );
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: r, otherUser: t });
                });
        }, [r, t]),
        u = i.useCallback(() => {
            B()(void 0 !== r, "User must be logged in to decline a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([l.e("53385"), l.e("55738"), l.e("84811")]).then(
                        l.bind(l, 389094),
                    );
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: r, otherUser: t });
                });
        }, [r, t]),
        o = i.useCallback(() => {
            B()(void 0 !== r, "User must be logged in to decline a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([l.e("53385"), l.e("55738"), l.e("17219")]).then(
                        l.bind(l, 187278),
                    );
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: r, otherUser: t });
                });
        }, [r, t]);
    return (0, n.jsxs)("div", {
        className: l_.kL,
        children: [
            (0, n.jsx)("div", { className: l_.zH, children: (0, n.jsx)(lI, { otherUser: t, status: b.Ef.PENDING }) }),
            (0, n.jsx)("div", {
                className: l_.o1,
                children: s
                    ? (0, n.jsx)(lp, { icon: lA.P, tooltip: ej.intl.string(em.default.e5iHmZ), onClick: o })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              a
                                  ? null
                                  : (0, n.jsx)(lp, {
                                        icon: lL.A,
                                        tooltip: ej.intl.string(em.default.krWQZK),
                                        onClick: c,
                                    }),
                              (0, n.jsx)(lp, { icon: lA.P, tooltip: ej.intl.string(em.default.bBDeNI), onClick: u }),
                          ],
                      }),
            }),
        ],
    });
}
var lk = l(615300),
    lD = l(187322),
    lU = l(975732),
    lM = l(789392);
let lP = (e) => {
    let { userId: t, children: l, isLast: s, className: r } = e,
        [d, c] = i.useState(!1),
        { analyticsLocations: u } = (0, v.Ay)(),
        o = i.useCallback(() => {
            (0, lU.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u });
        }, [t, u]),
        x = () => {
            c(!0);
        },
        h = () => {
            c(!1);
        };
    return (0, n.jsx)(lm.tG, {
        id: t,
        children: (e) =>
            (0, n.jsx)(lD.vN, {
                offset: { left: -8, right: -8 },
                children: (0, n.jsx)(lk.A.div, {
                    style: { opacity: 1 },
                    className: a()(lM.KG, r, { [lM.HV]: s, [lM.vu]: d }),
                    onMouseEnter: x,
                    onMouseLeave: h,
                    onClick: o,
                    ...e,
                    children: l(d),
                }),
            }),
    });
};
var lO = l(327337),
    lG = l(19331);
let lF = "/assets/922a2ee66ef62b5b.svg";
function lw(e) {
    let { header: t, description: l, stepNumber: i } = e;
    return (0, n.jsxs)("div", {
        className: lG.PM,
        children: [
            (0, n.jsx)("div", {
                className: lG.CD,
                children: (0, n.jsx)(w.D, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, n.jsx)(ei.F, { children: i }),
                }),
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(w.D, { variant: "heading-sm/bold", children: (0, n.jsx)(ei.F, { children: t }) }),
                    (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                ],
            }),
        ],
    });
}
function lV() {
    return (0, n.jsxs)("div", {
        className: a()(lG.aP, e3.a, lG.dO, lG.p2),
        children: [
            (0, n.jsxs)("div", {
                className: lG.Np,
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(w.D, {
                                className: eZ.QB,
                                variant: "heading-xl/medium",
                                children: (0, n.jsx)(ei.F, { children: ej.intl.string(em.default.pHEnV5) }),
                            }),
                            (0, n.jsx)(F.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: eZ.SX,
                                children: ej.intl.string(em.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)("img", { className: lG._u, src: lF, alt: ej.intl.string(em.default["r+PDmu"]) }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lG.Ci,
                children: [
                    (0, n.jsx)(lw, {
                        header: ej.intl.string(em.default["7xxAni"]),
                        description: ej.intl.string(em.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, n.jsx)(lw, {
                        header: ej.intl.string(em.default["AXgx+a"]),
                        description: ej.intl.string(em.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, n.jsx)(lw, {
                        header: ej.intl.string(em.default.MZn1tG),
                        description: ej.intl.string(em.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function lz() {
    let e = (0, D.xr)();
    return (0, n.jsxs)("div", {
        className: a()(lG.aP, e3.a, lG.dO),
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(w.D, {
                        className: eZ.QB,
                        variant: "heading-xl/medium",
                        children: (0, n.jsx)(ei.F, { children: ej.intl.string(em.default.zUCWEL) }),
                    }),
                    (0, n.jsx)(F.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: eZ.SX,
                        children: ej.intl.format(em.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, n.jsx)(tF, {}),
                ],
            }),
            (0, n.jsx)("img", { className: lG._u, src: lF, alt: ej.intl.string(em.default["r+PDmu"]) }),
        ],
    });
}
function lH(e) {
    let { sectionType: t, sectionTitle: l, requests: s } = e,
        a = i.useRef(null),
        r = `${t}-list`,
        d = (0, lg.A)(r),
        c = i.useCallback(
            (e) => {
                let { row: l, listIndex: i } = e,
                    a = s[l],
                    r = i === s.length;
                return null == a
                    ? null
                    : (0, n.jsx)(
                          lP,
                          {
                              userId: a.id,
                              isLast: r,
                              children: () =>
                                  t === b.Ef.ACTIVE ? (0, n.jsx)(lb, { user: a }) : (0, n.jsx)(lR, { user: a }),
                          },
                          a.id,
                      );
            },
            [s, t],
        ),
        u = i.useCallback(
            () =>
                (0, n.jsx)(
                    lf.A,
                    {
                        children: (0, n.jsx)(F.E, {
                            className: eZ.QB,
                            variant: "eyebrow",
                            color: "text-default",
                            children: l,
                        }),
                    },
                    "title",
                ),
            [l],
        );
    return (0, n.jsx)("div", {
        className: lG.uW,
        children: (0, n.jsx)(lm.hD, {
            navigator: d,
            children: (0, n.jsx)(lm.PR, {
                children: (e) => {
                    let { ref: t, role: i, ...d } = e;
                    return (0, n.jsx)(
                        lj.OZ,
                        {
                            innerRole: i,
                            innerAriaLabel: l,
                            ref: (e) => {
                                (a.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            sectionHeight: b.h4,
                            rowHeight: b.Gg,
                            renderSection: u,
                            renderRow: c,
                            sections: [s.length],
                            chunkSize: 30,
                            fade: !0,
                            ...d,
                        },
                        r,
                    );
                },
            }),
        }),
    });
}
let lB = () => {
        let e = (0, I.A)(),
            t = (0, D.GR)(),
            l = e ? b.Y7 : b.kp,
            i = { count: t.length, max: l },
            s = (0, $.y)(
                ej.intl.formatToPlainString(em.default["+tnO34"], i),
                ej.intl.formatToPlainString(em.default["pu6/U0"], i),
            );
        return t.length > 0
            ? (0, n.jsx)(lH, { sectionType: b.Ef.ACTIVE, sectionTitle: s, requests: t })
            : (0, n.jsxs)("div", {
                  className: lG.uW,
                  children: [
                      (0, n.jsx)(F.E, { className: eZ.QB, variant: "eyebrow", color: "text-default", children: s }),
                      (0, n.jsx)("div", {
                          className: lG.aP,
                          children: (0, n.jsx)(eK, { text: ej.intl.string(em.default.C4ScLD) }),
                      }),
                  ],
              });
    },
    lY = () => {
        let e = (0, D.xr)(),
            t = (0, I.A)() ? b.Y7 : b.kp,
            l = (0, $.y)(
                ej.intl.formatToPlainString(em.default["1/PzIj"], { maxConnections: t }),
                ej.intl.formatToPlainString(em.default.RcTgiE, { maxConnections: t }),
            );
        return e
            ? (0, n.jsx)("div", {
                  className: lG.rv,
                  children: (0, n.jsx)(F.E, { variant: "text-xxs/medium", color: "text-muted", children: l }),
              })
            : null;
    },
    lq = () => {
        let e = (0, lv.N)(),
            t = (0, lv.z)(),
            l = (0, lh.YW)({ helpline: e, throughline: t })
                .with({ helpline: !0 }, () =>
                    ej.intl.format(em.default["KOwsf/"], {
                        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                    }),
                )
                .with({ throughline: !0 }, () => ej.intl.format(em.default["6tsC8u"], { helpLink: lO.CL }))
                .otherwise(() => null);
        return null == l
            ? null
            : (0, n.jsxs)("div", {
                  className: eZ.QX,
                  children: [
                      (0, n.jsx)(w.D, {
                          className: lG.rH,
                          variant: "heading-sm/semibold",
                          children: (0, n.jsx)(ei.F, { children: ej.intl.string(em.default["7/tVhv"]) }),
                      }),
                      (0, n.jsx)(F.E, { variant: "text-xs/medium", color: "text-muted", children: l }),
                  ],
              });
    },
    lZ = () => {
        let e = (0, D.xk)(b.Ef.PENDING),
            t = (0, $.y)(
                ej.intl.formatToPlainString(em.default.IkAgkG, { count: e.length }),
                ej.intl.formatToPlainString(em.default.Q8XnAa, { count: e.length }),
            );
        return 0 === e.length ? null : (0, n.jsx)(lH, { sectionType: b.Ef.PENDING, sectionTitle: t, requests: e });
    },
    lK = () => {
        let e = (0, I.A)();
        return (0, n.jsxs)("div", {
            className: lG.kL,
            children: [
                e ? (0, n.jsx)(lV, {}) : (0, n.jsx)(lz, {}),
                (0, n.jsx)(lB, {}),
                (0, n.jsx)(lZ, {}),
                (0, n.jsx)(lY, {}),
                (0, n.jsx)(lq, {}),
            ],
        });
    };
var lX = l(936504),
    lW = l(946015),
    lJ = l(17928),
    lQ = l(270003),
    l$ = l(359778),
    l0 = l(935286),
    l3 = l(840559),
    l1 = l(997187),
    l2 = l(723923),
    l9 = l(192280);
let l8 = () => {
    let e = T.dm.useSetting(),
        { categories: t, initialized: l } = (0, lJ.cf)([l1.A], () => l1.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == l && (0, l3.cR)();
        }, [l]),
        (0, n.jsx)("div", {
            className: l9.kL,
            children: (0, n.jsxs)(lQ.n, {
                label: ej.intl.string(em.default.USIXU7),
                children: [
                    (0, n.jsx)(le.d, {
                        checked: e,
                        description: ej.intl.string(em.default["5MdB3j"]),
                        onChange: T.dm.updateSetting,
                        label: ej.intl.string(em.default.zkEceS),
                    }),
                    e
                        ? (0, n.jsx)(l$.Z, {
                              className: l9.MT,
                              type: l$.Z.Types.CUSTOM,
                              outline: !0,
                              children: (0, n.jsxs)(lW.s, {
                                  justify: lW.s.Justify.END,
                                  children: [
                                      (0, n.jsx)(lW.s.Child, {
                                          children: (0, n.jsx)(F.E, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: ej.intl.string(em.default.xAVm7K),
                                          }),
                                      }),
                                      (0, n.jsx)(P.D, {
                                          children: (0, n.jsx)(lX.N_, {
                                              onClick: t$.default,
                                              to: { pathname: L.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: ej.intl.string(em.default.cUIXFY),
                                          }),
                                      }),
                                      (0, n.jsx)(x.fk, { icon: l0.E, className: l9.UE, disableColor: !0 }),
                                  ],
                              }),
                          })
                        : null,
                    (0, n.jsx)(le.d, {
                        checked: !!t[l2.HO.FAMILY_CENTER_DIGEST],
                        description: ej.intl.string(em.default.y34S46),
                        onChange: function (e) {
                            (0, l3.CA)(l2.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: ej.intl.string(em.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
var l7 = l(731738),
    l4 = l(964486),
    l5 = l(612200),
    l6 = l(807393),
    ne = l(210714),
    nt = l(33666),
    nl = l(204925);
function nn(e) {
    let { location: t, onMountEffect: l } = e,
        n = (0, nt.A)(),
        s = (0, D.W1)(),
        { familyCenterInitialized: a, isLoading: r } = (0, d.cf)([C.A], () => ({
            familyCenterInitialized: C.A.getIsInitialized(),
            isLoading: C.A.isLoading(),
        })),
        c = (0, en.k)(),
        { selectedTab: u, handleTabChange: o } = k(),
        x = ew.default.getCurrentUser(),
        h = null != n,
        m = a && null != x && !h;
    (0, l4.Ay)(() => {
        (0, ne.d)("family-center"), null != l && l();
    });
    let j = { isConsideredAdult: "adult" === n, numOfAcceptedRequests: s, selectedTab: u, selectedTeenId: c },
        g = i.useRef(j);
    return (
        i.useEffect(() => {
            g.current = j;
        }),
        i.useEffect(() => {
            if (a && h) {
                let { isConsideredAdult: e, numOfAcceptedRequests: l, selectedTab: n, selectedTeenId: i } = g.current;
                _.default.track(L.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: l,
                    selected_teen_id: i,
                    initial_page: b.zu[n],
                    source: b.iN[t],
                }),
                    l6.A.increment({ name: l7.K.FAMILY_CENTER_VIEW });
            }
        }, [a, h, t]),
        i.useEffect(() => {
            m && (0, l5.yO)(nl.w_.FAMILY_CENTER);
        }, [m]),
        { isLoading: r, selectedTab: u, handleTabChange: o, showAgeGateModal: m }
    );
}
var ni = l(556493);
let ns = {
        [b.u9.REQUESTS]: lK,
        [b.u9.ACTIVITY]: lx,
        [b.u9.SETTINGS]: l8,
        [b.u9.CONTENT_AND_SOCIAL]: tL,
        [b.u9.DATA_AND_PRIVACY]: tM,
        [b.u9.SCREEN_TIME_CONTROLS]: l8,
    },
    na = { [b.u9.REQUESTS]: lK, [b.u9.ACTIVITY]: lx, [b.u9.CONTENT_AND_SOCIAL]: tL, [b.u9.DATA_AND_PRIVACY]: tM };
function nr() {
    return (0, n.jsx)(c.B, { justify: "center", align: "center", className: ni.g4, children: (0, n.jsx)(u.y, {}) });
}
function nd(e) {
    let { section: t, handleItemSelect: l } = e,
        i = (0, D.VT)(),
        s = (0, I.A)();
    return [b.u9.CONTENT_AND_SOCIAL, b.u9.DATA_AND_PRIVACY, b.u9.SCREEN_TIME_CONTROLS].includes(t)
        ? null
        : (0, n.jsxs)(o.V, {
              className: ni.c5,
              "aria-label": ej.intl.string(em.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: l,
              children: [
                  (0, n.jsx)(o.V.Item, {
                      className: ni.jA,
                      id: b.u9.ACTIVITY,
                      children: ej.intl.string(em.default.bdBmqy),
                  }),
                  (0, n.jsxs)(o.V.Item, {
                      className: ni.jA,
                      id: b.u9.REQUESTS,
                      "aria-label": ej.intl.string(em.default["gVWG+6"]),
                      children: [
                          ej.intl.string(em.default["gVWG+6"]),
                          i > 0 ? (0, n.jsx)(x.hV, { className: ni.qS, count: i }) : null,
                      ],
                  }),
                  s
                      ? (0, n.jsx)(o.V.Item, {
                            className: ni.jA,
                            id: b.u9.SETTINGS,
                            children: ej.intl.string(ej.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function nc(e) {
    let { theme: t, section: l, handleItemSelect: i } = e,
        s = (0, E.GV)(),
        d = (0, D.VT)();
    return (0, n.jsx)(h.N, {
        theme: t,
        children: (e) =>
            (0, n.jsxs)(N.A, {
                className: a()(e, ni.ZB),
                scrollable: r.Fr,
                role: "navigation",
                "aria-labelledby": s,
                toolbar: !0,
                children: [
                    (0, n.jsx)(N.A.Icon, { icon: m.n, "aria-hidden": !0 }),
                    (0, n.jsx)(N.A.Title, { id: s, children: ej.intl.string(em.default.RZqaJn) }),
                    (0, n.jsx)(N.A.Divider, {}),
                    (0, n.jsxs)(o.V, {
                        "aria-label": ej.intl.string(em.default.RZqaJn),
                        selectedItem: l,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, n.jsx)(o.V.Item, {
                                id: b.u9.ACTIVITY,
                                className: ni.AS,
                                children: ej.intl.string(em.default.bdBmqy),
                            }),
                            (0, n.jsxs)(o.V.Item, {
                                id: b.u9.REQUESTS,
                                className: ni.AS,
                                "aria-label": ej.intl.string(em.default["gVWG+6"]),
                                children: [
                                    ej.intl.string(em.default["gVWG+6"]),
                                    d > 0 ? (0, n.jsx)(x.hV, { className: ni.qS, count: d }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function nu() {
    let e = (0, E.GV)(),
        {
            isLoading: t,
            selectedTab: l,
            handleTabChange: s,
            showAgeGateModal: a,
        } = nn({
            location: b.MH.SETTINGS,
            onMountEffect: () => {
                y.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            (0, S._)(R[l]);
        }, [l]),
        a)
    )
        return null;
    let r = ns[l];
    return (0, n.jsxs)("main", {
        className: ni.kL,
        "aria-label": ej.intl.string(em.default.RZqaJn),
        children: [
            (0, n.jsx)(A.HI, { location: ej.intl.string(em.default.RZqaJn) }),
            (0, n.jsx)(nd, {
                section: l,
                handleItemSelect: (e) => {
                    s(e);
                },
            }),
            (0, n.jsx)(o.V.Panel, {
                id: l,
                "aria-labelledby": e,
                className: ni.Us,
                children: t ? (0, n.jsx)(nr, {}) : (0, n.jsx)(r, {}),
            }),
        ],
    });
}
function no() {
    let { analyticsLocations: e } = (0, v.Ay)(f.A.FAMILY_CENTER),
        t = (0, I.A)(),
        l = (0, d.bG)([C.A], () => C.A.getIsInitialized()),
        s = (0, d.bG)([p.A], () => p.A.theme),
        r = (0, E.GV)(),
        {
            isLoading: c,
            selectedTab: u,
            handleTabChange: x,
            showAgeGateModal: h,
        } = nn({
            location: b.MH.SIDENAV,
            onMountEffect: () => {
                g.I(L.BVt.FAMILY_CENTER), !C.A.isLoading() && C.A.canRefetch() && y.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            let e = T.dm.getSetting();
            l && t && void 0 === e && T.dm.updateSetting(!0);
        }, [l, t]),
        h)
    )
        return null;
    let m = u !== b.u9.SETTINGS && u !== b.u9.SCREEN_TIME_CONTROLS ? u : b.u9.ACTIVITY,
        N = na[m];
    return (0, n.jsx)(v.f5, {
        value: e,
        children: (0, n.jsxs)("main", {
            className: a()(ni.kL, ni.ei),
            "aria-label": ej.intl.string(em.default.RZqaJn),
            children: [
                (0, n.jsx)(A.HI, { location: ej.intl.string(em.default.RZqaJn) }),
                (0, n.jsx)(nc, {
                    theme: s,
                    section: m,
                    handleItemSelect: (e) => {
                        x(e);
                    },
                }),
                (0, n.jsx)(o.V.Panel, {
                    id: m,
                    "aria-labelledby": r,
                    className: ni.Om,
                    children: (0, n.jsx)(j.Ip, {
                        children: (0, n.jsx)("div", {
                            className: ni.O4,
                            children: c ? (0, n.jsx)(nr, {}) : (0, n.jsx)(N, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
