l.d(t, { A: () => nd, p: () => nr });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(607399),
    d = l(702841),
    c = l(331322),
    u = l(289873),
    o = l(761508),
    h = l(777666);
if (21552 == l.j) var x = l(43990);
if (21552 == l.j) var m = l(177953);
if (21552 == l.j) var g = l(364522);
var j = l(944791),
    f = l(793574),
    v = l(688810),
    A = l(726249),
    E = l(915089),
    N = l(742589),
    p = l(363195),
    T = l(253932),
    S = l(178241),
    y = l(899847),
    C = l(695515),
    _ = l(438732),
    I = l(954571),
    b = l(191627),
    R = l(652215);
let L = {
        [b.u9.ACTIVITY]: "family_center_activity_tab",
        [b.u9.REQUESTS]: "family_center_requests_tab",
        [b.u9.SETTINGS]: "family_center_settings_tab",
        [b.u9.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
        [b.u9.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
        [b.u9.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
    },
    D = () => ({
        selectedTab: (0, d.bG)([C.A], () => C.A.getSelectedTab()),
        handleTabChange: (e) => {
            y.Ay.selectTab(e), I.default.track(R.HAw.FAMILY_CENTER_ACTION, { action: b.qb.TabChange, tab: e });
        },
    });
var k = l(834981),
    M = l(843282),
    U = l(778712),
    w = l(939249),
    O = l(548411),
    P = l(661531),
    G = l(834730),
    V = l(534514),
    F = l(10005),
    H = l(153739),
    z = l(284009),
    Z = l.n(z),
    B = l(192308),
    Y = l(885574),
    q = l(691540),
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
            (0, n.jsx)(V.D, {
                variant: "heading-xxl/medium",
                color: i > 0 ? "text-brand" : "text-muted",
                children: (0, n.jsx)(ei.F, { children: s }),
            }),
            (0, n.jsx)(G.E, { variant: "text-sm/semibold", className: es.io, children: t }),
        ],
    });
};
var er = l(781696),
    ed = l(714991),
    ec = l(23339),
    eu = l(97808),
    eo = l(260509),
    eh = l(904425);
let ex = (e) => {
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
            className: eh.k,
            children: (0, n.jsxs)("div", {
                style: { fontSize: r },
                children: [
                    null != a ? (0, n.jsx)("div", { className: eh.X, "aria-hidden": !0, children: a }) : null,
                    null != s ? (0, n.jsx)(eu.eu, { src: s, size: U._3.SIZE_40, "aria-hidden": !0 }) : null,
                ],
            }),
        })
    );
};
var em = l(602339),
    eg = l(985018),
    ej = l(751406);
let ef = [18, 18, 16, 16, 14, 12, 10],
    ev = i.memo((e) => {
        let { guildId: t, className: l, customSubtext: i } = e,
            s = (0, d.bG)([C.A], () => C.A.getGuild(t));
        if (void 0 === s) return null;
        let r = s.features.has(R.GuildFeatures.VERIFIED) || s.features.has(R.GuildFeatures.PARTNERED),
            { name: c } = s;
        return (0, n.jsxs)("div", {
            className: a()(ej.kL, l),
            children: [
                (0, n.jsx)(ex, { guildId: t }),
                (0, n.jsxs)("div", {
                    className: ej.$z,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ej.wx,
                            children: [
                                r
                                    ? (0, n.jsx)(ed.A, {
                                          guild: s,
                                          tooltipPosition: "bottom",
                                          tooltipColor: er.ST.Colors.PRIMARY,
                                          className: ej.n2,
                                      })
                                    : null,
                                (0, n.jsx)(G.E, { variant: "text-md/semibold", children: c }),
                            ],
                        }),
                        (0, n.jsx)(G.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children:
                                null != i
                                    ? i
                                    : void 0 !== s.approximateMemberCount
                                      ? eg.intl.format(em.default["5JmNgg"], { members: s.approximateMemberCount })
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
    eC = l(898461),
    e_ = l(203632),
    eI = l(486020),
    eb = l(788868),
    eR = l(893458);
let eL = (e) => {
        let { displayName: t, product: l } = e,
            i = ((e) => {
                if (0 === e.items.length) return null;
                let t = e.items[0];
                return (0, eC.T)(t)
                    ? (0, eI.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 })
                    : null;
            })(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: eR._P });
    },
    eD = (e) => {
        let { displayName: t, nameplateData: l } = e,
            { staticImageUrl: i } = (0, eS.K)(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: eR.M4 });
    },
    ek = (e) => {
        let { displayName: t, product: l } = e,
            i = ((e) => {
                if (0 === e.items.length) return null;
                let t = e.items[0];
                return (0, e_.C3)(t) ? t.thumbnailPreviewSrc : null;
            })(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: eR._P });
    },
    eM = (e) => {
        let { subscriptionPlanId: t } = e;
        if (null == t) return (0, n.jsx)("div", { className: eR.T8, children: (0, n.jsx)(eE.U, {}) });
        let l = ((e) => {
            if (null == e) return !1;
            let t = eb.hd[e];
            return t?.skuId === eb.pe.GUILD;
        })(t);
        return (0, n.jsx)("div", {
            className: eR.T8,
            children: l
                ? (0, n.jsx)(eN._, { size: "custom", width: 20, height: 20 })
                : (0, n.jsx)(ep.t, { size: "custom", width: 20, height: 20 }),
        });
    },
    eU = (e) => {
        let { displayName: t, product: l } = e;
        if (null == l) return (0, n.jsx)("div", { className: eR.T8, children: (0, n.jsx)(eE.U, {}) });
        switch (l.type) {
            case eA.R.AVATAR_DECORATION:
                return (0, n.jsx)(eL, { displayName: t, product: l });
            case eA.R.NAMEPLATE:
                let i = (0, ey.EQ)(l);
                return null != i ? (0, n.jsx)(eD, { displayName: t, nameplateData: i }) : null;
            case eA.R.PROFILE_EFFECT:
                return (0, n.jsx)(ek, { displayName: t, product: l });
            default:
                return (0, n.jsx)("div", { className: eR.T8, children: (0, n.jsx)(eE.U, {}) });
        }
    },
    ew = i.memo((e) => {
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
                                    return eg.intl.string(em.default.obi47v);
                                case eA.R.PROFILE_EFFECT:
                                    return eg.intl.string(em.default.RX8BMR);
                                case eA.R.NAMEPLATE:
                                    return eg.intl.string(em.default.nNGEHk);
                                case eA.R.BUNDLE:
                                    return eg.intl.string(em.default.VS1fKo);
                                default:
                                    return "";
                            }
                        })(e.type));
                else if (i && null != t) {
                    let e = eb.hd[t];
                    l = e?.name;
                }
                return { displayName: l, typeName: n, isSubscription: i };
            })(d ?? null, l);
        if ((null != t && !o && null == d) || null == c) return null;
        let h = (0, ee.$g)(i, s);
        return (0, n.jsxs)("div", {
            className: a()(eR.kL, r),
            children: [
                o ? (0, n.jsx)(eM, { subscriptionPlanId: l }) : (0, n.jsx)(eU, { displayName: c, product: d ?? null }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(G.E, { variant: "text-md/semibold", children: null != u ? `${c} • ${u}` : c }),
                        (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: h }),
                    ],
                }),
            ],
        });
    });
ew.displayName = "FamilyCenterActivityPurchaseRow";
var eO = l(287809),
    eP = l(427262),
    eG = l(283900),
    eV = l(914518);
let eF = i.memo((e) => {
    let { userId: t, subText: l, className: i } = e,
        s = (0, d.bG)([eO.default], () => eO.default.getUser(t));
    return void 0 === s
        ? null
        : (0, n.jsxs)("div", {
              className: a()(eV.k, i),
              children: [
                  (0, n.jsx)(eG.H, { user: s, avatarSize: U._3.SIZE_40 }),
                  (0, n.jsx)("div", {
                      children: (0, n.jsxs)("div", {
                          className: eV.$,
                          children: [
                              (0, n.jsx)(G.E, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: eP.Ay.getName(s),
                              }),
                              null != l &&
                                  (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                          ],
                      }),
                  }),
              ],
          });
});
eF.displayName = "FamilyCenterActivityUserRow";
var eH = l(475833),
    ez = l(768869),
    eZ = l(818050);
let eB = (e) => {
    let { text: t, className: l } = e;
    return (0, n.jsxs)("div", {
        className: a()(l, ez.I),
        children: [
            (0, n.jsx)("img", { className: ez.S, src: "/assets/f47ef22a8aeff32a.svg", alt: "" }),
            (0, n.jsx)(G.E, { className: eZ.Ot, variant: "text-sm/medium", color: "text-muted", children: t }),
        ],
    });
};
var eY = l(459192),
    eq = l(494596);
let eK = (e) => {
    let { userId: t, dmsSent: l, callCount: i } = e,
        s = (0, d.bG)([eO.default], () => eO.default.getUser(t));
    return void 0 === s
        ? null
        : (0, n.jsx)(eY.u, {
              title: s.username,
              body: (0, Q.fq)(l, i),
              asContainer: !0,
              children: (0, n.jsx)("div", {
                  className: eq.k,
                  children: (0, n.jsx)(eG.H, { user: s, avatarSize: U._3.SIZE_40 }),
              }),
          });
};
var eX = l(833802);
let eW = () => {
    let e = (0, d.bG)([C.A], () => C.A.getTopUserActivities()),
        t = (0, d.bG)([C.A], () => C.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, n.jsxs)("div", {
              className: eX.kL,
              children: [
                  e.length > 0 &&
                      (0, n.jsxs)("div", {
                          className: eX.A2,
                          children: [
                              (0, n.jsx)(V.D, {
                                  variant: "text-md/medium",
                                  className: eX.bV,
                                  children: eg.intl.string(em.default.BxbvS7),
                              }),
                              (0, n.jsx)("div", {
                                  className: eX.Ce,
                                  children:
                                      1 === e.length
                                          ? (0, n.jsx)(eF, {
                                                userId: e[0].user_id,
                                                subText: (0, Q.fq)(e[0].dms_sent, e[0].call_count),
                                                className: eX.q3,
                                            })
                                          : e.map((e) =>
                                                (0, n.jsx)(
                                                    eK,
                                                    { userId: e.user_id, dmsSent: e.dms_sent, callCount: e.call_count },
                                                    e.user_id,
                                                ),
                                            ),
                              }),
                          ],
                      }),
                  t.length > 0 &&
                      (0, n.jsxs)("div", {
                          className: eX.A2,
                          children: [
                              (0, n.jsx)(V.D, {
                                  variant: "text-md/medium",
                                  className: eX.bV,
                                  children: eg.intl.string(em.default.Lq9Set),
                              }),
                              1 === t.length
                                  ? (0, n.jsx)(ev, {
                                        guildId: t[0].guild_id,
                                        customSubtext: (0, Q.fq)(t[0].messages_sent, t[0].call_count),
                                        className: eX._S,
                                    })
                                  : (0, n.jsx)("div", {
                                        className: eX.Ce,
                                        children: t.map((e) => {
                                            let t = C.A.getGuild(e.guild_id),
                                                l = t?.name ?? "Unknown Server";
                                            return (0, n.jsx)(
                                                eY.u,
                                                {
                                                    title: l,
                                                    body: (0, Q.fq)(e.messages_sent, e.call_count) ?? null,
                                                    asContainer: !0,
                                                    children: (0, n.jsx)(ex, { guildId: e?.guild_id }),
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
var eJ = l(990021),
    eQ = l(453287);
function e$() {
    let e = i.useCallback(() => {
        (0, B.openModalLazy)(async () => {
            let { default: e } = await l.e("60106").then(l.bind(l, 853809));
            return (t) => (0, n.jsx)(e, { ...t });
        });
    }, []);
    return (0, n.jsx)(w.D, {
        className: eJ.YL,
        onClick: e,
        children: (0, n.jsx)(Y.m, { size: "custom", color: "currentColor", className: eJ.Kk, width: 15, height: 15 }),
    });
}
function e0(e) {
    let { displayType: t } = e,
        l = i.useCallback(() => {
            (0, q.P0)((0, K.o)(eg.intl.string(em.default.Wu8BK2), X.Ck.FAILURE));
        }, []),
        s = (0, _.A)(),
        r = (0, d.yK)([C.A], () => C.A.getActionsForDisplayType(t)),
        c = et(t),
        o = el(t),
        { loadMore: h, isMoreLoading: x } = (0, F.A)({ onError: l }),
        m = (0, Q.kN)().get(t),
        [g, j] = i.useState(b.PH),
        f = i.useCallback(() => {
            j((e) => e + b.PH), h(t);
        }, [t, h]);
    Z()(m, `No text for action type: ${t}`);
    let v = t === b.NV.PURCHASES && null != o ? m.sectionHeader(o) : m.sectionHeader(c),
        A = i.useCallback(
            (e) => {
                let { row: t } = e,
                    l = r[t];
                if ((0, Q.aq)(l)) {
                    let e = J.default.extractTimestamp(l.event_id),
                        t = (0, Q.i6)(e, m.timestampFormatter);
                    return (0, n.jsx)(eF, { userId: l.entity_id, subText: t }, l.event_id);
                }
                if ((0, Q.Is)(l)) return (0, n.jsx)(ev, { guildId: l.entity_id }, l.event_id);
                if ((0, Q.u7)(l)) {
                    let e = C.A.getPurchaseInfo(l.entity_id);
                    return null == e
                        ? null
                        : (0, n.jsx)(
                              ew,
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
                        (0, n.jsx)(G.E, { className: eJ.bV, variant: "text-md/semibold", children: v }),
                        void 0 !== m.sectionDescription
                            ? (0, n.jsx)(G.E, {
                                  className: eJ.yV,
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
    let N = r.slice(0, g);
    return (0, n.jsxs)("div", {
        className: eJ.A2,
        children: [
            E(),
            (0, n.jsx)("div", {
                className: eJ.o1,
                style: { maxHeight: 65 * N.length },
                children: N.map((e, t) => A({ row: t })),
            }),
            N.length < c
                ? (0, n.jsx)(w.D, {
                      className: a()(eJ.FQ, { [eJ.r9]: x }),
                      onClick: f,
                      role: "button",
                      "aria-disabled": x,
                      children: x
                          ? (0, n.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, className: eJ.u1 })
                          : (0, n.jsx)(G.E, {
                                className: eJ.UX,
                                variant: "text-sm/bold",
                                children: eg.intl.format(em.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - N.length, b.PH)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let e2 = () => {
        let e = (0, _.A)(),
            t = (0, k.vx)(),
            l = (0, $.y)(
                eg.intl.formatToPlainString(em.default["7hqFl9"], { activeLinks: t.length }),
                eg.intl.string(em.default["Q/D/0Q"]),
            ),
            i = (0, Q.cV)(!!e),
            s = (0, k.v4)(i);
        return e && t.length > 1
            ? (0, n.jsx)(G.E, { variant: "eyebrow", children: s })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      e ? null : (0, n.jsx)(W.b, { size: "xs", color: "currentColor", className: eJ.Kk }),
                      (0, n.jsx)(G.E, { variant: "eyebrow", children: l }),
                  ],
              });
    },
    e1 = i.memo((e) => {
        let { userId: t, subText: l, avatarSize: i = U._3.SIZE_40, hideUserTag: s = !1 } = e,
            a = (0, H.F7)(t);
        return void 0 === a
            ? null
            : (0, n.jsxs)("div", {
                  className: eJ.iO,
                  children: [
                      (0, n.jsx)(eG.H, { user: a, avatarSize: i }),
                      (0, n.jsxs)("div", {
                          className: eJ.TK,
                          children: [
                              (0, n.jsx)(eH.A, { user: a, hideUserTag: s }),
                              void 0 !== l
                                  ? (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: l })
                                  : null,
                          ],
                      }),
                  ],
              });
    });
e1.displayName = "FamilyCenterActivityCardAccountRow";
let e5 = () => {
        let e = (0, k.GR)(),
            t = (0, d.bG)([C.A], () => C.A.getSelectedTeenId()),
            { selectTeenUser: l } = (0, F.A)({}),
            s = e.map((e) => ({ label: e.id, value: e.id })),
            a = i.useCallback((e) => (0, n.jsx)(e1, { userId: e.value, avatarSize: U._3.SIZE_24 }), []);
        return (0, n.jsx)(M.Pw, {
            className: eJ.Lt,
            renderOptionLabel: a,
            renderOptionValue: (e) => {
                let [t] = e;
                return a(t);
            },
            serialize: (e) => e,
            select: (e) => {
                l(e), I.default.track(R.HAw.FAMILY_CENTER_ACTION, { action: b.qb.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: s,
            "data-migration-pending": !0,
        });
    },
    e3 = () => {
        let e = (0, en.k)(),
            t = (0, _.A)(),
            l = (0, k.vx)(),
            i = (0, Q.cV)(!!t),
            s = (0, k.v4)(i);
        return null === e ? null : t && 1 !== l.length ? (0, n.jsx)(e5, {}) : (0, n.jsx)(e1, { userId: e, subText: s });
    },
    e4 = () => {
        let e = (0, Q.Mo)(),
            t = (0, d.bG)([C.A], () => Object.values(b.NV).some((e) => C.A.getTotalForDisplayType(e) > 0)),
            l = (0, Q.jp)(),
            i = (0, k.v4)(l);
        return (0, n.jsxs)("div", {
            className: eJ.kL,
            children: [
                (0, n.jsxs)("div", { className: eJ.vF, children: [(0, n.jsx)(e2, {}), (0, n.jsx)(e$, {})] }),
                (0, n.jsxs)("div", {
                    className: eQ.a,
                    children: [
                        (0, n.jsx)("div", { className: eJ.wx, children: (0, n.jsx)(e3, {}) }),
                        (0, n.jsxs)(c.B, {
                            gap: 32,
                            padding: 32,
                            fullWidth: !1,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eJ.O2,
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
                                    className: eJ.RJ,
                                    children: [
                                        (0, n.jsx)(eW, {}),
                                        t
                                            ? e.map((e) => {
                                                  let [t] = e;
                                                  return (0, n.jsx)(e0, { displayType: t }, `${t}-list`);
                                              })
                                            : (0, n.jsx)(eB, { className: eJ.RL, text: i ?? "" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
var e9 = l(336541);
let e6 = () => {
        let e = (0, k.vx)(),
            t = (0, H.y3)(),
            { selectTeenUser: l } = (0, F.A)({}),
            s = e.map((e) => ({ label: e, value: e })),
            r = i.useCallback(
                (e) => (0, n.jsx)(e1, { userId: e.value, avatarSize: U._3.SIZE_24, hideUserTag: !0 }),
                [],
            );
        return 0 === e.length
            ? null
            : (0, n.jsx)("div", {
                  className: a()(e9.Gq, { [e9.wS]: e.length > 1 }),
                  children:
                      e.length > 1
                          ? (0, n.jsx)(M.Pw, {
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
                          : (0, n.jsx)(e1, { userId: e[0], avatarSize: U._3.SIZE_24, hideUserTag: !0 }),
              });
    },
    e8 = () => {
        let { selectedTab: e, handleTabChange: t } = D(),
            l = i.useCallback(() => {
                t(b.u9.ACTIVITY);
            }, [t]);
        return (0, n.jsxs)(c.B, {
            gap: 32,
            children: [
                (0, n.jsxs)(w.D, {
                    className: e9.Gv,
                    onClick: l,
                    "aria-label": eg.intl.string(eg.t.ybUZql),
                    children: [
                        (0, n.jsx)(O.Z, { size: "sm", color: P.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        (0, n.jsx)(G.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: eg.intl.string(eg.t["13/7kX"]),
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
                            className: e9.gn,
                            children: [
                                (0, n.jsx)(G.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: eg.intl.string(em.default.RZqaJn),
                                }),
                                (0, n.jsx)(V.D, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: eg.intl.string(
                                        e === b.u9.CONTENT_AND_SOCIAL ? eg.t["+o1pDZ"] : eg.t.OAuOHD,
                                    ),
                                }),
                            ],
                        }),
                        (0, n.jsx)(e6, {}),
                    ],
                }),
            ],
        });
    };
var e7 = l(404778),
    te = l(628630);
let tt = function (e) {
    let { children: t, title: l, description: i } = e;
    return (0, n.jsxs)("div", {
        className: te.L1,
        children: [
            (null != l || null != i) &&
                (0, n.jsxs)("div", {
                    className: te.Km,
                    children: [
                        null != l &&
                            (0, n.jsx)(V.D, { variant: "heading-lg/semibold", color: "text-strong", children: l }),
                        null != i && (0, n.jsx)(G.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                    ],
                }),
            (0, n.jsx)("div", { className: te.Yq, children: t }),
            (0, n.jsx)(e7.c, { className: te.yj }),
        ],
    });
};
var tl = l(884307);
function tn(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: tl.y, children: t });
}
var ti = l(93857),
    ts = l(106148),
    ta = l(650832),
    tr = l(171316);
function td() {
    let e = (0, tr.KK)(),
        t = (0, en.k)() ?? void 0,
        l = (0, tr.NZ)();
    return (0, n.jsx)(ts.h, {
        children: (0, n.jsx)(ta.Ay, {
            title: l ? eg.intl.string(eg.t.PMsfcH) : eg.intl.string(eg.t.RAQUSN),
            note: l ? eg.intl.string(eg.t.XXGmuB) : eg.intl.string(eg.t.wbYDfT),
            value: !e,
            onChange: (e) => {
                ti.yr.updateControlledSetting(t, !e);
            },
        }),
    });
}
var tc = l(139716),
    tu = l(847599),
    to = l(152076),
    th = l(975571);
function tx() {
    let e = (0, en.k)() ?? void 0,
        t = (0, tr.KK)(),
        l = ti.ES.useControlledSetting(e);
    return (0, n.jsx)(ts.h, {
        children: (0, n.jsx)(ta.Ay, {
            title: eg.intl.string(eg.t["3o2ojh"]),
            value: !t && !l,
            onChange: (t) => {
                !t && (0, to.w)()
                    ? tc.A.showAgeVerificationGetStartedModal({ entryPoint: tu.q1.MESSAGE_REQUESTS_SETTINGS })
                    : ti.ES.updateControlledSetting(e, !t);
            },
            disabled: t,
            note: eg.intl.format(eg.t.IoztJ0, { helpdeskArticle: th.A.getArticleURL(R.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
var tm = l(665260),
    tg = l(115063);
function tj() {
    let e = (0, en.k)() ?? void 0,
        t = ti.up.useControlledSetting(e),
        l = i.useMemo(() => (0, tg.Lx)(t), [t]);
    return null == e
        ? null
        : (0, n.jsxs)(tn, {
              children: [
                  (0, n.jsx)(ts.h, {
                      children: (0, n.jsx)(ta.Ay, {
                          title: eg.intl.string(eg.t["7x9dyE"]),
                          value: l.all,
                          onChange: (t) => ti.up.updateControlledSetting(e, t ? R.yKI : R.yKI & ~R.dzt.NO_RELATION),
                      }),
                  }),
                  (0, n.jsx)(ts.h, {
                      children: (0, n.jsx)(ta.Ay, {
                          title: eg.intl.string(eg.t.NfeuZ3),
                          value: l.all || l.mutualFriends,
                          onChange: (l) =>
                              ti.up.updateControlledSetting(
                                  e,
                                  l
                                      ? tm.UI(t, R.dzt.MUTUAL_FRIENDS)
                                      : tm.iE(t, R.dzt.MUTUAL_FRIENDS, R.dzt.NO_RELATION),
                              ),
                      }),
                  }),
                  (0, n.jsx)(ts.h, {
                      children: (0, n.jsx)(ta.Ay, {
                          title: eg.intl.string(eg.t.qsMfsH),
                          value: l.all || l.mutualGuilds,
                          onChange: (l) =>
                              ti.up.updateControlledSetting(
                                  e,
                                  l ? tm.UI(t, R.dzt.MUTUAL_GUILDS) : tm.iE(t, R.dzt.MUTUAL_GUILDS, R.dzt.NO_RELATION),
                              ),
                      }),
                  }),
              ],
          });
}
var tf = l(444802),
    tv = l(397620),
    tA = l(873298),
    tE = l(562783),
    tN = l(533517),
    tp = l(704724);
function tT() {
    let e = (0, en.k)(),
        t = (0, tr.xs)(),
        l = [
            { value: tA.TO.BLUR, label: eg.intl.string(eg.t.S49Uad) },
            { value: tA.TO.BLOCK, label: eg.intl.string(eg.t["D/157Y"]) },
        ];
    if (null == t || null == e) return null;
    let i = (t) => {
            (0, tp.Jz)(e, t);
        },
        { explicitContentFriendDm: s, explicitContentNonFriendDm: a } = t;
    return (0, n.jsxs)(tE.E, {
        description: eg.intl.string(eg.t.Wnojv1),
        children: [
            (0, n.jsx)(tN.A, {
                title: eg.intl.string(eg.t["+uI23H"]),
                value: s,
                onChange: (e) => i({ explicitContentFriendDm: e }),
                options: l,
            }),
            (0, n.jsx)(tN.A, {
                title: eg.intl.string(eg.t["Yh+HX1"]),
                value: a,
                onChange: (e) => i({ explicitContentNonFriendDm: e }),
                options: l,
            }),
        ],
    });
}
function tS() {
    let e = (0, en.k)(),
        t = (0, tr.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: l, goreContentNonFriendDm: i } = t,
        s = (t) => {
            (0, tp.qY)(e, t);
        },
        a = [
            { value: tA.TO.BLUR, label: eg.intl.string(eg.t.S49Uad) },
            { value: tA.TO.BLOCK, label: eg.intl.string(eg.t["D/157Y"]) },
        ];
    return (0, n.jsxs)(tE.E, {
        description: eg.intl.string(eg.t.XgH9eh),
        children: [
            (0, n.jsx)(tN.A, {
                title: eg.intl.string(eg.t["+uI23H"]),
                value: l,
                onChange: (e) => s({ goreContentFriendDm: e }),
                options: a,
            }),
            (0, n.jsx)(tN.A, {
                title: eg.intl.string(eg.t["Yh+HX1"]),
                value: i,
                onChange: (e) => s({ goreContentNonFriendDm: e }),
                options: a,
            }),
        ],
    });
}
var ty = l(25191);
function tC() {
    let e = (0, tf.WX)(),
        t = [
            {
                id: "explicit-media-redaction",
                title: eg.intl.string(eg.t.GYpoAq),
                component: () => (0, n.jsx)(tT, {}),
                orientation: "vertical",
            },
            {
                id: "gore-media-redaction",
                title: eg.intl.string(eg.t["16/3Bi"]),
                component: () => (0, n.jsx)(tS, {}),
                orientation: "vertical",
            },
        ];
    return (0, n.jsxs)(ts.h, {
        children: [
            (0, n.jsx)(ts._, {
                header: eg.intl.string(eg.t["Hj/But"]),
                description: eg.intl.format(eg.t["H/Icz+"], { learnMoreLink: th.A.getArticleURL(e) }),
            }),
            (0, n.jsx)(tv.A, { tabs: t, orientation: "vertical", tabsClassName: ty.v }),
        ],
    });
}
let t_ = () =>
    (0, n.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, n.jsx)(e8, {}),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(tt, { title: eg.intl.string(eg.t.xVRG4P), children: (0, n.jsx)(tC, {}) }),
                    (0, n.jsx)(tt, {
                        title: eg.intl.string(eg.t["y62Z/d"]),
                        children: (0, n.jsxs)(tn, { children: [(0, n.jsx)(td, {}), (0, n.jsx)(tx, {})] }),
                    }),
                    (0, n.jsx)(tt, { title: eg.intl.string(eg.t["1Qn8iV"]), children: (0, n.jsx)(tj, {}) }),
                ],
            }),
        ],
    });
function tI() {
    let { hasConsented: e, updateConsent: t } = (0, tr.lH)(R.YAq.PERSONALIZATION);
    return (0, n.jsx)(ts.h, {
        children: (0, n.jsx)(ta.Ay, {
            title: eg.intl.string(em.default.XMPqUx),
            note: eg.intl.format(em.default.Imp6Ns, {
                helpdeskArticle: th.A.getArticleURL(R.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
function tb() {
    let e = (0, en.k)() ?? void 0,
        t = ti.yH.useControlledSetting(e),
        l = ti.kf.useControlledSetting(e);
    return null == e
        ? null
        : (0, n.jsx)(ts.h, {
              children: (0, n.jsx)(ta.Ay, {
                  title: eg.intl.string(eg.t.CyLYKZ),
                  note: eg.intl.format(em.default["6mK5Pz"], {
                      helpdeskArticle: th.A.getArticleURL(R.MVz.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !t,
                  onChange: (t) => ti.yH.updateControlledSetting(e, !t),
                  disabled: l,
              }),
          });
}
function tR() {
    let e = (0, en.k)() ?? void 0,
        t = ti.kf.useControlledSetting(e);
    return (0, n.jsx)(ts.h, {
        children: (0, n.jsx)(ta.Ay, {
            title: eg.intl.string(em.default.ZhaNu8),
            note: eg.intl.format(em.default.cnCK6b, {
                helpdeskArticle: th.A.getArticleURL(R.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => ti.kf.updateControlledSetting(e, !t),
        }),
    });
}
function tL() {
    let { hasConsented: e, updateConsent: t } = (0, tr.lH)(R.YAq.USAGE_STATISTICS);
    return (0, n.jsx)(ts.h, {
        children: (0, n.jsx)(ta.Ay, {
            title: eg.intl.string(em.default.HjstRR),
            note: eg.intl.format(em.default.Z5yJZy, {
                helpdeskArticle: th.A.getArticleURL(R.MVz.DATA_PRIVACY_CONTROLS),
            }),
            value: e,
            onChange: t,
        }),
    });
}
let tD = () =>
    (0, n.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, n.jsx)(e8, {}),
            (0, n.jsx)("div", {
                children: (0, n.jsxs)(tt, {
                    title: eg.intl.string(eg.t.SRZyHg),
                    children: [(0, n.jsx)(tL, {}), (0, n.jsx)(tR, {}), (0, n.jsx)(tb, {}), (0, n.jsx)(tI, {})],
                }),
            }),
        ],
    });
var tk = l(582394),
    tM = l(141006),
    tU = l(821609);
function tw() {
    let e = eg.intl.string(em.default["8SLtqb"]);
    return (0, n.jsx)(tU.$, {
        icon: tM.y,
        variant: "primary",
        text: e,
        onClick: () => {
            (0, B.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("53242"), l.e("84268")]).then(l.bind(l, 320742));
                return (t) => (0, n.jsx)(e, { ...t });
            }),
                I.default.track(R.HAw.FAMILY_CENTER_ACTION, { action: b.qb.ShowQRCodeModal });
        },
    });
}
var tO = l(555317);
let tP = () => {
        let e = (0, k.Li)(),
            t = (0, _.A)(),
            { handleTabChange: l } = D();
        return (0, k.xr)() || (t && e)
            ? null
            : (0, n.jsx)("div", {
                  className: tO.x6,
                  children: t
                      ? (0, n.jsx)(tU.$, {
                            variant: "primary",
                            text: eg.intl.string(eg.t.LhlgY9),
                            onClick: () => l(b.u9.REQUESTS),
                        })
                      : (0, n.jsx)(tw, {}),
              });
    },
    tG = () => {
        let e = (0, _.A)(),
            t = (0, $.y)(eg.intl.string(em.default["T7GyW+"]), eg.intl.string(em.default.goKE2b)),
            l = (0, $.y)(
                eg.intl.format(em.default.MXjDSv, {
                    articleLink: "https://support.discord.com/hc/articles/14155060633623",
                }),
                eg.intl.format(em.default.EMCf6j, {
                    articleLink: "https://support.discord.com/hc/articles/14155043715735",
                }),
            );
        return (0, n.jsxs)("div", {
            className: a()(tO.kL, eQ.a),
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)("div", {
                            children: (0, n.jsxs)("div", {
                                className: tO.TK,
                                children: [
                                    (0, n.jsx)(V.D, {
                                        variant: "heading-xl/medium",
                                        children: (0, n.jsx)(ei.F, { children: t }),
                                    }),
                                    (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                                ],
                            }),
                        }),
                        (0, n.jsx)(tP, {}),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: tO.F0,
                    children: (0, n.jsx)("img", {
                        src: e ? "/assets/bc9100f5e54f39a8.svg" : "/assets/12ee06c12c73e78e.svg",
                        alt: eg.intl.string(em.default.ffg6xd),
                    }),
                }),
            ],
        });
    };
var tV = l(299628),
    tF = l(119e3);
let tH = () => {
    let e = eg.intl.string(em.default.tr8Gni),
        t = (0, $.y)(eg.intl.string(em.default["3xKGSE"]), eg.intl.string(em.default.XbgrG7));
    return (0, n.jsxs)(c.B, {
        className: a()(tF.k, eQ.a),
        gap: 24,
        padding: 24,
        children: [
            (0, n.jsxs)(c.B, {
                gap: 8,
                children: [
                    (0, n.jsx)(V.D, { variant: "heading-md/bold", children: (0, n.jsx)(ei.F, { children: e }) }),
                    (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: t }),
                ],
            }),
            (0, n.jsx)(tV.A, {}),
        ],
    });
};
var tz = l(445220);
let tZ = (e) => {
    let { icon: t, iconClassName: l, header: i, description: s } = e;
    return (0, n.jsxs)("div", {
        className: a()(tz.kL, eQ.a),
        children: [
            (0, n.jsx)("div", {
                className: tz.n1,
                children: (0, n.jsx)(t, {
                    className: a()(tz.Kk, l),
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(V.D, {
                        variant: "heading-md/bold",
                        className: tz.wx,
                        children: (0, n.jsx)(ei.F, { children: i }),
                    }),
                    (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
                ],
            }),
        ],
    });
};
var tB = l(847374),
    tY = l(349288),
    tq = l(308528),
    tK = l(922529),
    tX = l(780964),
    tW = l(779733),
    tJ = l(858897),
    tQ = l(219893),
    t$ = l(936926),
    t0 = l(534654),
    t2 = l(550079),
    t1 = l(477782),
    t5 = l(943255),
    t3 = l(922016),
    t4 = l(408278),
    t9 = l(365199),
    t6 = l(243721),
    t8 = l(95396),
    t7 = l(624411);
function le(e) {
    let { closePopout: t, onEdit: l, onDelete: i } = e;
    return (0, n.jsxs)(t2.W, {
        "data-menu-migrated": !0,
        "aria-label": eg.intl.string(eg.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, n.jsx)(t1.Dr, { id: "edit", label: eg.intl.string(em.default.b3DPqg), action: l }),
            (0, n.jsx)(t1.Dr, { id: "delete", label: eg.intl.string(em.default.d8pizZ), color: "danger", action: i }),
        ],
    });
}
function lt(e) {
    let { rule: t, teenId: s, readOnly: a = !1 } = e,
        r = i.useRef(null),
        d = t?.enabled ?? !0,
        u = (0, tQ.li)(t),
        o = (0, tQ.n1)(t.days),
        h = () => {
            (0, B.openModalLazy)(async () => {
                let { default: e } = await l.e("39231").then(l.bind(l, 154434));
                return (l) => (0, n.jsx)(e, { ...l, teenId: s, rule: t });
            });
        },
        x = () => {
            (0, t8.CS)(s, t.ruleId);
        };
    return (0, n.jsxs)(c.B, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        padding: { top: 8, bottom: 8 },
        children: [
            (0, n.jsx)("div", { className: t7.X, children: (0, n.jsx)(t5.Z, { size: "md" }) }),
            (0, n.jsxs)(c.B, {
                direction: "vertical",
                style: { flex: 1, minWidth: 0 },
                gap: 4,
                children: [
                    (0, n.jsx)(G.E, { variant: "text-md/medium", children: u }),
                    (0, n.jsx)(G.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
                ],
            }),
            (0, n.jsxs)(c.B, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                fullWidth: !1,
                children: [
                    !a &&
                        (0, n.jsx)(t3.Y, {
                            targetElementRef: r,
                            renderPopout: (e) => (0, n.jsx)(le, { ...e, onEdit: h, onDelete: x }),
                            position: "bottom",
                            align: "right",
                            animation: t3.Y.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, n.jsx)(t4.K, {
                                    buttonRef: r,
                                    size: "sm",
                                    icon: t9.j,
                                    variant: "icon-only",
                                    "aria-label": eg.intl.string(eg.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    onClick: (e) => {
                                        e.stopPropagation(), t(e);
                                    },
                                });
                            },
                        }),
                    (0, n.jsx)("div", {
                        className: t7.m,
                        children: (0, n.jsx)(t6.d, {
                            checked: d,
                            label: eg.intl.string(em.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: () => {
                                (0, t8.Um)(s, t.ruleId, { enabled: !d });
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
var ll = l(587349);
let ln = (e) => {
        let { title: t, buttonText: l, onButtonPress: i, readOnly: s = !1 } = e;
        return (0, n.jsxs)(c.B, {
            padding: { top: 12, bottom: 12 },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, n.jsx)(G.E, { variant: "text-md/medium", children: t }),
                (0, n.jsx)("div", {
                    className: s ? ll.nh : void 0,
                    children: (0, n.jsx)(tU.$, { text: l, onClick: i, variant: "secondary", size: "sm", disabled: s }),
                }),
            ],
        });
    },
    li = (e) => {
        let { teenId: t, readOnly: s = !1 } = e,
            a = (0, H.y3)(),
            r = a?.restrictedSchedule?.rules ?? [],
            d = (0, tQ.I2)(r),
            [u, o] = i.useState(d.length > 0);
        i.useEffect(() => {
            d.length > 0 && o(!0);
        }, [d.length]);
        let h = () => {
            (0, B.openModalLazy)(async () => {
                let { default: e } = await l.e("39231").then(l.bind(l, 154434));
                return (l) => (0, n.jsx)(e, { ...l, teenId: t });
            });
        };
        return 0 === d.length
            ? (0, n.jsx)(ln, {
                  title: eg.intl.string(em.default["1Op+NP"]),
                  buttonText: eg.intl.string(em.default.OwFF4o),
                  onButtonPress: h,
                  readOnly: s,
              })
            : (0, n.jsxs)(c.B, {
                  direction: "vertical",
                  gap: 0,
                  children: [
                      (0, n.jsxs)(w.D, {
                          className: ll.dV,
                          onClick: () => o((e) => !e),
                          children: [
                              (0, n.jsx)("div", {
                                  className: ll.WB,
                                  children: (0, n.jsxs)(c.B, {
                                      direction: "vertical",
                                      gap: 4,
                                      children: [
                                          (0, n.jsx)(G.E, {
                                              variant: "text-md/medium",
                                              children: eg.intl.string(em.default["1Op+NP"]),
                                          }),
                                          (0, n.jsx)(G.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children: eg.intl.formatToPlainString(em.default.XfwcpX, {
                                                  count: d.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: ll.pt,
                                  children: (0, n.jsx)(tB.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      className: `${ll.ai} ${u ? ll.hg : ""}`,
                                  }),
                              }),
                          ],
                      }),
                      u &&
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  d.map((e) => (0, n.jsx)(lt, { rule: e, teenId: t, readOnly: s }, e.ruleId)),
                                  (0, n.jsx)(c.B, {
                                      className: `${ll.Dp} ${s ? ll.nh : ""}`,
                                      children: (0, n.jsx)(tU.$, {
                                          text: eg.intl.string(em.default.OwFF4o),
                                          onClick: h,
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
    ls = () => {
        let e = (0, k.vx)(),
            t = (0, H.y3)(),
            l = (0, t$.Vh)({ location: "TimeControlsRow" }),
            i = () => {
                (0, tJ.openUserSettings)(tX.X.CONTENT_AND_SOCIAL_PANEL);
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
                                (0, n.jsx)(G.E, {
                                    variant: "text-sm/semibold",
                                    children: eg.intl.string(em.default.ahKIJO),
                                }),
                                (0, n.jsx)(G.E, {
                                    variant: "text-md/medium",
                                    color: "text-muted",
                                    children: eg.intl.format(em.default.X9rW0j, {
                                        openSettingsHook: (e, t) =>
                                            (0, n.jsx)(tY.Anchor, { onClick: i, children: e }, t),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(tU.$, {
                            text: eg.intl.formatToPlainString(em.default.ggcjPR, { count: e.length }),
                            onClick: () => {
                                (0, tW.default)(), tq.A.openPrivateChannel({ recipientIds: e });
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
                            (0, n.jsx)(tK.A, { className: ll.yF }),
                            (0, n.jsx)(li, { teenId: t.id, readOnly: !0 }),
                        ],
                    }),
            ],
        });
    },
    la = () => {
        let e = (0, H.y3)(),
            t = (0, H.tl)(),
            { handleTabChange: l } = D(),
            s = (0, t$.Vh)({ location: "TimeControlsRow" });
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
                        (0, n.jsx)(G.E, { variant: "text-sm/semibold", children: eg.intl.string(em.default.ahKIJO) }),
                        (0, n.jsx)(G.E, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: eg.intl.string(em.default.Sv236e),
                        }),
                    ],
                }),
                (0, n.jsx)(ln, {
                    title: eg.intl.string(eg.t["+o1pDZ"]),
                    buttonText: eg.intl.string(eg.t.bt75uw),
                    onButtonPress: () => a(b.u9.CONTENT_AND_SOCIAL),
                }),
                (0, n.jsx)(tK.A, { className: ll.yF }),
                (0, n.jsx)(ln, {
                    title: eg.intl.string(eg.t.OAuOHD),
                    buttonText: eg.intl.string(eg.t.bt75uw),
                    onButtonPress: () => a(b.u9.DATA_AND_PRIVACY),
                }),
                s &&
                    e?.id != null &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(tK.A, { className: ll.yF }), (0, n.jsx)(li, { teenId: e.id })],
                    }),
            ],
        });
    },
    lr = () => {
        let e = (0, t0.A)();
        return 0 === (0, k.vx)().length
            ? null
            : (0, n.jsx)("div", { className: ll.kL, children: e ? (0, n.jsx)(ls, {}) : (0, n.jsx)(la, {}) });
    };
var ld = l(175524);
let lc = () => {
    let e = (0, k.vx)().length > 0,
        t = (0, d.bG)([eO.default], () => eO.default.getCurrentUser()),
        l = (0, $.y)(eg.intl.string(em.default["5RZ8Tq"]), eg.intl.string(em.default.bmhCnL)),
        i = (0, $.y)(eg.intl.string(em.default.XKnFFq), eg.intl.string(em.default["68zfxD"])),
        s = (0, $.y)(eg.intl.string(em.default["Rm/6a0"]), eg.intl.string(em.default["1xPTwE"]));
    return void 0 === t
        ? null
        : (0, n.jsxs)("div", {
              className: ld.kL,
              children: [
                  e
                      ? null
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", { className: ld.vK, children: (0, n.jsx)(tG, {}) }),
                                (0, n.jsxs)("div", {
                                    className: ld.yk,
                                    children: [
                                        (0, n.jsx)(tZ, {
                                            icon: tk.M,
                                            header: eg.intl.string(em.default["001l3m"]),
                                            description: l,
                                        }),
                                        (0, n.jsx)(tZ, {
                                            icon: W.b,
                                            header: eg.intl.string(em.default.yipAeP),
                                            description: i,
                                        }),
                                        (0, n.jsx)(tZ, {
                                            icon: tM.y,
                                            header: eg.intl.string(em.default.hhOuMe),
                                            description: s,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  e ? (0, n.jsx)(e4, {}) : (0, n.jsx)(tH, {}),
                  (0, n.jsx)(lr, {}),
              ],
          });
};
l(801541);
var lu = l(889137),
    lo = l(837381),
    lh = l(475825),
    lx = l(260762),
    lm = l(485947),
    lg = l(426190),
    lj = l(789645),
    lf = l(990078),
    lv = l(665566);
function lA(e) {
    let { icon: t, tooltip: l, onClick: i, className: s } = e;
    return (0, n.jsx)(lf.m, {
        text: l,
        children: (0, n.jsx)(w.D, {
            "aria-label": l,
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), i(e);
            },
            className: a()(lv.hP, s),
            children: (0, n.jsx)(t, { className: lv.Kk, color: "currentColor" }),
        }),
    });
}
var lE = l(854627),
    lN = l(19575),
    lp = l(486241);
let lT = lN.Ay.getEnableHardwareAcceleration() ? eu.Js : eu.eu;
function lS(e) {
    let { otherUser: t, status: l } = e,
        i = (0, k.XC)(t.id, l),
        {
            avatarSrc: s,
            avatarDecorationSrc: a,
            eventHandlers: r,
        } = (0, lE.A)({ userId: t.id, size: U._3.SIZE_40, animateOnHover: !0 });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ...r,
                children: (0, n.jsx)(lT, {
                    className: lp.my,
                    src: s,
                    avatarDecoration: a,
                    size: U._3.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, n.jsxs)("div", {
                className: lp.yt,
                children: [
                    (0, n.jsx)("div", { className: lp.Vx, children: (0, n.jsx)(eH.A, { user: t }) }),
                    (0, n.jsx)(G.E, { color: "text-muted", variant: "text-xs/normal", children: i }),
                ],
            }),
        ],
    });
}
var ly = l(528218);
function lC(e) {
    let { user: t } = e,
        s = (0, d.bG)([eO.default], () => eO.default.getCurrentUser()),
        a = i.useCallback(() => {
            Z()(void 0 !== s, "User must be logged in to accept a link request"),
                (0, B.openModalLazy)(async () => {
                    let { default: e } = await l.e("43139").then(l.bind(l, 179950));
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: s, otherUser: t });
                });
        }, [s, t]);
    return (0, n.jsxs)("div", {
        className: ly.kL,
        children: [
            (0, n.jsx)("div", { className: ly.zH, children: (0, n.jsx)(lS, { otherUser: t, status: b.Ef.ACTIVE }) }),
            (0, n.jsx)("div", {
                className: ly.o1,
                children: (0, n.jsx)(lA, { icon: lj.P, tooltip: eg.intl.string(em.default.l20ZZp), onClick: a }),
            }),
        ],
    });
}
var l_ = l(933832);
function lI(e) {
    let { user: t } = e,
        s = (0, _.A)(),
        a = (0, k.xr)(),
        r = (0, d.bG)([eO.default], () => eO.default.getCurrentUser()),
        c = i.useCallback(() => {
            Z()(void 0 !== r, "User must be logged in to accept a link request"),
                (0, B.openModalLazy)(async () => {
                    let { default: e } = await l.e("31385").then(l.bind(l, 58144));
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: r, otherUser: t });
                });
        }, [r, t]),
        u = i.useCallback(() => {
            Z()(void 0 !== r, "User must be logged in to decline a link request"),
                (0, B.openModalLazy)(async () => {
                    let { default: e } = await l.e("84811").then(l.bind(l, 389094));
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: r, otherUser: t });
                });
        }, [r, t]),
        o = i.useCallback(() => {
            Z()(void 0 !== r, "User must be logged in to decline a link request"),
                (0, B.openModalLazy)(async () => {
                    let { default: e } = await l.e("17219").then(l.bind(l, 187278));
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: r, otherUser: t });
                });
        }, [r, t]);
    return (0, n.jsxs)("div", {
        className: ly.kL,
        children: [
            (0, n.jsx)("div", { className: ly.zH, children: (0, n.jsx)(lS, { otherUser: t, status: b.Ef.PENDING }) }),
            (0, n.jsx)("div", {
                className: ly.o1,
                children: s
                    ? (0, n.jsx)(lA, { icon: lj.P, tooltip: eg.intl.string(em.default.e5iHmZ), onClick: o })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              a
                                  ? null
                                  : (0, n.jsx)(lA, {
                                        icon: l_.A,
                                        tooltip: eg.intl.string(em.default.krWQZK),
                                        onClick: c,
                                    }),
                              (0, n.jsx)(lA, { icon: lj.P, tooltip: eg.intl.string(em.default.bBDeNI), onClick: u }),
                          ],
                      }),
            }),
        ],
    });
}
var lb = l(615300),
    lR = l(187322),
    lL = l(975732),
    lD = l(789392);
let lk = (e) => {
    let { userId: t, children: l, isLast: s, className: r } = e,
        [d, c] = i.useState(!1),
        { analyticsLocations: u } = (0, v.Ay)(),
        o = i.useCallback(() => {
            (0, lL.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u });
        }, [t, u]),
        h = () => {
            c(!0);
        },
        x = () => {
            c(!1);
        };
    return (0, n.jsx)(lo.tG, {
        id: t,
        children: (e) =>
            (0, n.jsx)(lR.vN, {
                offset: { left: -8, right: -8 },
                children: (0, n.jsx)(lb.A.div, {
                    style: { opacity: 1 },
                    className: a()(lD.KG, r, { [lD.HV]: s, [lD.vu]: d }),
                    onMouseEnter: h,
                    onMouseLeave: x,
                    onClick: o,
                    ...e,
                    children: l(d),
                }),
            }),
    });
};
var lM = l(327337),
    lU = l(19331);
let lw = "/assets/922a2ee66ef62b5b.svg";
function lO(e) {
    let { header: t, description: l, stepNumber: i } = e;
    return (0, n.jsxs)("div", {
        className: lU.PM,
        children: [
            (0, n.jsx)("div", {
                className: lU.CD,
                children: (0, n.jsx)(V.D, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, n.jsx)(ei.F, { children: i }),
                }),
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(V.D, { variant: "heading-sm/bold", children: (0, n.jsx)(ei.F, { children: t }) }),
                    (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                ],
            }),
        ],
    });
}
function lP() {
    return (0, n.jsxs)("div", {
        className: a()(lU.aP, eQ.a, lU.dO, lU.p2),
        children: [
            (0, n.jsxs)("div", {
                className: lU.Np,
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(V.D, {
                                className: eZ.QB,
                                variant: "heading-xl/medium",
                                children: (0, n.jsx)(ei.F, { children: eg.intl.string(em.default.pHEnV5) }),
                            }),
                            (0, n.jsx)(G.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: eZ.SX,
                                children: eg.intl.string(em.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)("img", { className: lU._u, src: lw, alt: eg.intl.string(em.default["r+PDmu"]) }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lU.Ci,
                children: [
                    (0, n.jsx)(lO, {
                        header: eg.intl.string(em.default["7xxAni"]),
                        description: eg.intl.string(em.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, n.jsx)(lO, {
                        header: eg.intl.string(em.default["AXgx+a"]),
                        description: eg.intl.string(em.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, n.jsx)(lO, {
                        header: eg.intl.string(em.default.MZn1tG),
                        description: eg.intl.string(em.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function lG() {
    let e = (0, k.xr)();
    return (0, n.jsxs)("div", {
        className: a()(lU.aP, eQ.a, lU.dO),
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(V.D, {
                        className: eZ.QB,
                        variant: "heading-xl/medium",
                        children: (0, n.jsx)(ei.F, { children: eg.intl.string(em.default.zUCWEL) }),
                    }),
                    (0, n.jsx)(G.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: eZ.SX,
                        children: eg.intl.format(em.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, n.jsx)(tw, {}),
                ],
            }),
            (0, n.jsx)("img", { className: lU._u, src: lw, alt: eg.intl.string(em.default["r+PDmu"]) }),
        ],
    });
}
function lV(e) {
    let { sectionType: t, sectionTitle: l, requests: s } = e,
        a = i.useRef(null),
        r = `${t}-list`,
        d = (0, lx.A)(r),
        c = i.useCallback(
            (e) => {
                let { row: l, listIndex: i } = e,
                    a = s[l],
                    r = i === s.length;
                return null == a
                    ? null
                    : (0, n.jsx)(
                          lk,
                          {
                              userId: a.id,
                              isLast: r,
                              children: () =>
                                  t === b.Ef.ACTIVE ? (0, n.jsx)(lC, { user: a }) : (0, n.jsx)(lI, { user: a }),
                          },
                          a.id,
                      );
            },
            [s, t],
        ),
        u = i.useCallback(
            () =>
                (0, n.jsx)(
                    lm.A,
                    {
                        children: (0, n.jsx)(G.E, {
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
        className: lU.uW,
        children: (0, n.jsx)(lo.hD, {
            navigator: d,
            children: (0, n.jsx)(lo.PR, {
                children: (e) => {
                    let { ref: t, role: i, ...d } = e;
                    return (0, n.jsx)(
                        lh.OZ,
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
let lF = () => {
        let e = (0, _.A)(),
            t = (0, k.GR)(),
            l = e ? b.Y7 : b.kp,
            i = { count: t.length, max: l },
            s = (0, $.y)(
                eg.intl.formatToPlainString(em.default["+tnO34"], i),
                eg.intl.formatToPlainString(em.default["pu6/U0"], i),
            );
        return t.length > 0
            ? (0, n.jsx)(lV, { sectionType: b.Ef.ACTIVE, sectionTitle: s, requests: t })
            : (0, n.jsxs)("div", {
                  className: lU.uW,
                  children: [
                      (0, n.jsx)(G.E, { className: eZ.QB, variant: "eyebrow", color: "text-default", children: s }),
                      (0, n.jsx)("div", {
                          className: lU.aP,
                          children: (0, n.jsx)(eB, { text: eg.intl.string(em.default.C4ScLD) }),
                      }),
                  ],
              });
    },
    lH = () => {
        let e = (0, k.xr)(),
            t = (0, _.A)() ? b.Y7 : b.kp,
            l = (0, $.y)(
                eg.intl.formatToPlainString(em.default["1/PzIj"], { maxConnections: t }),
                eg.intl.formatToPlainString(em.default.RcTgiE, { maxConnections: t }),
            );
        return e
            ? (0, n.jsx)("div", {
                  className: lU.rv,
                  children: (0, n.jsx)(G.E, { variant: "text-xxs/medium", color: "text-muted", children: l }),
              })
            : null;
    },
    lz = () => {
        let e = (0, lg.N)(),
            t = (0, lg.z)(),
            l = (0, lu.YW)({ helpline: e, throughline: t })
                .with({ helpline: !0 }, () =>
                    eg.intl.format(em.default["KOwsf/"], {
                        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                    }),
                )
                .with({ throughline: !0 }, () => eg.intl.format(em.default["6tsC8u"], { helpLink: lM.CL }))
                .otherwise(() => null);
        return null == l
            ? null
            : (0, n.jsxs)("div", {
                  className: eZ.QX,
                  children: [
                      (0, n.jsx)(V.D, {
                          className: lU.rH,
                          variant: "heading-sm/semibold",
                          children: (0, n.jsx)(ei.F, { children: eg.intl.string(em.default["7/tVhv"]) }),
                      }),
                      (0, n.jsx)(G.E, { variant: "text-xs/medium", color: "text-muted", children: l }),
                  ],
              });
    },
    lZ = () => {
        let e = (0, k.xk)(b.Ef.PENDING),
            t = (0, $.y)(
                eg.intl.formatToPlainString(em.default.IkAgkG, { count: e.length }),
                eg.intl.formatToPlainString(em.default.Q8XnAa, { count: e.length }),
            );
        return 0 === e.length ? null : (0, n.jsx)(lV, { sectionType: b.Ef.PENDING, sectionTitle: t, requests: e });
    },
    lB = () => {
        let e = (0, _.A)();
        return (0, n.jsxs)("div", {
            className: lU.kL,
            children: [
                e ? (0, n.jsx)(lP, {}) : (0, n.jsx)(lG, {}),
                (0, n.jsx)(lF, {}),
                (0, n.jsx)(lZ, {}),
                (0, n.jsx)(lH, {}),
                (0, n.jsx)(lz, {}),
            ],
        });
    };
var lY = l(936504),
    lq = l(946015),
    lK = l(17928),
    lX = l(270003),
    lW = l(359778),
    lJ = l(935286),
    lQ = l(100406),
    l$ = l(878460),
    l0 = l(431144),
    l2 = l(192280);
let l1 = () => {
    let e = T.dm.useSetting(),
        { categories: t, initialized: l } = (0, lK.cf)([l$.A], () => l$.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == l && (0, lQ.cR)();
        }, [l]),
        (0, n.jsx)("div", {
            className: l2.kL,
            children: (0, n.jsxs)(lX.n, {
                label: eg.intl.string(em.default.USIXU7),
                children: [
                    (0, n.jsx)(t6.d, {
                        checked: e,
                        description: eg.intl.string(em.default["5MdB3j"]),
                        onChange: T.dm.updateSetting,
                        label: eg.intl.string(em.default.zkEceS),
                    }),
                    e
                        ? (0, n.jsx)(lW.Z, {
                              className: l2.MT,
                              type: lW.Z.Types.CUSTOM,
                              outline: !0,
                              children: (0, n.jsxs)(lq.s, {
                                  justify: lq.s.Justify.END,
                                  children: [
                                      (0, n.jsx)(lq.s.Child, {
                                          children: (0, n.jsx)(G.E, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: eg.intl.string(em.default.xAVm7K),
                                          }),
                                      }),
                                      (0, n.jsx)(w.D, {
                                          children: (0, n.jsx)(lY.N_, {
                                              onClick: tW.default,
                                              to: { pathname: R.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: eg.intl.string(em.default.cUIXFY),
                                          }),
                                      }),
                                      (0, n.jsx)(h.fk, { icon: lJ.E, className: l2.UE, disableColor: !0 }),
                                  ],
                              }),
                          })
                        : null,
                    (0, n.jsx)(t6.d, {
                        checked: !!t[l0.HO.FAMILY_CENTER_DIGEST],
                        description: eg.intl.string(em.default.y34S46),
                        onChange: function (e) {
                            (0, lQ.CA)(l0.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: eg.intl.string(em.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
var l5 = l(731738),
    l3 = l(964486),
    l4 = l(612200),
    l9 = l(831062),
    l6 = l(210714),
    l8 = l(33666),
    l7 = l(204925);
function ne(e) {
    let { location: t, onMountEffect: l } = e,
        n = (0, l8.A)(),
        s = (0, k.W1)(),
        { familyCenterInitialized: a, isLoading: r } = (0, d.cf)([C.A], () => ({
            familyCenterInitialized: C.A.getIsInitialized(),
            isLoading: C.A.isLoading(),
        })),
        c = (0, en.k)(),
        { selectedTab: u, handleTabChange: o } = D(),
        h = eO.default.getCurrentUser(),
        x = null != n,
        m = a && null != h && !x;
    (0, l3.Ay)(() => {
        (0, l6.d)("family-center"), null != l && l();
    });
    let g = { isConsideredAdult: "adult" === n, numOfAcceptedRequests: s, selectedTab: u, selectedTeenId: c },
        j = i.useRef(g);
    return (
        i.useEffect(() => {
            j.current = g;
        }),
        i.useEffect(() => {
            if (a && x) {
                let { isConsideredAdult: e, numOfAcceptedRequests: l, selectedTab: n, selectedTeenId: i } = j.current;
                I.default.track(R.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: l,
                    selected_teen_id: i,
                    initial_page: b.zu[n],
                    source: b.iN[t],
                }),
                    l9.A.increment({ name: l5.K.FAMILY_CENTER_VIEW });
            }
        }, [a, x, t]),
        i.useEffect(() => {
            m && (0, l4.yO)(l7.w_.FAMILY_CENTER);
        }, [m]),
        { isLoading: r, selectedTab: u, handleTabChange: o, showAgeGateModal: m }
    );
}
var nt = l(556493);
let nl = {
        [b.u9.REQUESTS]: lB,
        [b.u9.ACTIVITY]: lc,
        [b.u9.SETTINGS]: l1,
        [b.u9.CONTENT_AND_SOCIAL]: t_,
        [b.u9.DATA_AND_PRIVACY]: tD,
        [b.u9.SCREEN_TIME_CONTROLS]: l1,
    },
    nn = { [b.u9.REQUESTS]: lB, [b.u9.ACTIVITY]: lc, [b.u9.CONTENT_AND_SOCIAL]: t_, [b.u9.DATA_AND_PRIVACY]: tD };
function ni() {
    return (0, n.jsx)(c.B, { justify: "center", align: "center", className: nt.g4, children: (0, n.jsx)(u.y, {}) });
}
function ns(e) {
    let { section: t, handleItemSelect: l } = e,
        i = (0, k.VT)(),
        s = (0, _.A)();
    return [b.u9.CONTENT_AND_SOCIAL, b.u9.DATA_AND_PRIVACY, b.u9.SCREEN_TIME_CONTROLS].includes(t)
        ? null
        : (0, n.jsxs)(o.V, {
              className: nt.c5,
              "aria-label": eg.intl.string(em.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: l,
              children: [
                  (0, n.jsx)(o.V.Item, {
                      className: nt.jA,
                      id: b.u9.ACTIVITY,
                      children: eg.intl.string(em.default.bdBmqy),
                  }),
                  (0, n.jsxs)(o.V.Item, {
                      className: nt.jA,
                      id: b.u9.REQUESTS,
                      "aria-label": eg.intl.string(em.default["gVWG+6"]),
                      children: [
                          eg.intl.string(em.default["gVWG+6"]),
                          i > 0 ? (0, n.jsx)(h.hV, { className: nt.qS, count: i }) : null,
                      ],
                  }),
                  s
                      ? (0, n.jsx)(o.V.Item, {
                            className: nt.jA,
                            id: b.u9.SETTINGS,
                            children: eg.intl.string(eg.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function na(e) {
    let { theme: t, section: l, handleItemSelect: i } = e,
        s = (0, E.GV)(),
        d = (0, k.VT)();
    return (0, n.jsx)(x.N, {
        theme: t,
        children: (e) =>
            (0, n.jsxs)(N.A, {
                className: a()(e, nt.ZB),
                scrollable: r.Fr,
                role: "navigation",
                "aria-labelledby": s,
                toolbar: !0,
                children: [
                    (0, n.jsx)(N.A.Icon, { icon: m.n, "aria-hidden": !0 }),
                    (0, n.jsx)(N.A.Title, { id: s, children: eg.intl.string(em.default.RZqaJn) }),
                    (0, n.jsx)(N.A.Divider, {}),
                    (0, n.jsxs)(o.V, {
                        "aria-label": eg.intl.string(em.default.RZqaJn),
                        selectedItem: l,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, n.jsx)(o.V.Item, {
                                id: b.u9.ACTIVITY,
                                className: nt.AS,
                                children: eg.intl.string(em.default.bdBmqy),
                            }),
                            (0, n.jsxs)(o.V.Item, {
                                id: b.u9.REQUESTS,
                                className: nt.AS,
                                "aria-label": eg.intl.string(em.default["gVWG+6"]),
                                children: [
                                    eg.intl.string(em.default["gVWG+6"]),
                                    d > 0 ? (0, n.jsx)(h.hV, { className: nt.qS, count: d }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function nr() {
    let e = (0, E.GV)(),
        {
            isLoading: t,
            selectedTab: l,
            handleTabChange: s,
            showAgeGateModal: a,
        } = ne({
            location: b.MH.SETTINGS,
            onMountEffect: () => {
                y.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            (0, S._)(L[l]);
        }, [l]),
        a)
    )
        return null;
    let r = nl[l];
    return (0, n.jsxs)("main", {
        className: nt.kL,
        "aria-label": eg.intl.string(em.default.RZqaJn),
        children: [
            (0, n.jsx)(A.HI, { location: eg.intl.string(em.default.RZqaJn) }),
            (0, n.jsx)(ns, {
                section: l,
                handleItemSelect: (e) => {
                    s(e);
                },
            }),
            (0, n.jsx)(o.V.Panel, {
                id: l,
                "aria-labelledby": e,
                className: nt.Us,
                children: t ? (0, n.jsx)(ni, {}) : (0, n.jsx)(r, {}),
            }),
        ],
    });
}
function nd() {
    let { analyticsLocations: e } = (0, v.Ay)(f.A.FAMILY_CENTER),
        t = (0, _.A)(),
        l = (0, d.bG)([C.A], () => C.A.getIsInitialized()),
        s = (0, d.bG)([p.A], () => p.A.theme),
        r = (0, E.GV)(),
        {
            isLoading: c,
            selectedTab: u,
            handleTabChange: h,
            showAgeGateModal: x,
        } = ne({
            location: b.MH.SIDENAV,
            onMountEffect: () => {
                j.I(R.BVt.FAMILY_CENTER), !C.A.isLoading() && C.A.canRefetch() && y.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            let e = T.dm.getSetting();
            l && t && void 0 === e && T.dm.updateSetting(!0);
        }, [l, t]),
        x)
    )
        return null;
    let m = u !== b.u9.SETTINGS && u !== b.u9.SCREEN_TIME_CONTROLS ? u : b.u9.ACTIVITY,
        N = nn[m];
    return (0, n.jsx)(v.f5, {
        value: e,
        children: (0, n.jsxs)("main", {
            className: a()(nt.kL, nt.ei),
            "aria-label": eg.intl.string(em.default.RZqaJn),
            children: [
                (0, n.jsx)(A.HI, { location: eg.intl.string(em.default.RZqaJn) }),
                (0, n.jsx)(na, {
                    theme: s,
                    section: m,
                    handleItemSelect: (e) => {
                        h(e);
                    },
                }),
                (0, n.jsx)(o.V.Panel, {
                    id: m,
                    "aria-labelledby": r,
                    className: nt.Om,
                    children: (0, n.jsx)(g.Ip, {
                        children: (0, n.jsx)("div", {
                            className: nt.O4,
                            children: c ? (0, n.jsx)(ni, {}) : (0, n.jsx)(N, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
