i.d(t, { x: () => e$, A: () => eQ });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    c = i(990078),
    d = i(534514),
    o = i(696986),
    u = i(707554),
    m = i(123292),
    x = i(885574),
    h = i(331322),
    g = i(821609),
    j = i(512950),
    v = i(834730),
    p = i(241524),
    _ = i(915089),
    f = i(164956),
    N = i(615405),
    A = i(486020),
    b = i(500345),
    I = i(599941),
    C = i(915869),
    E = i(700206),
    T = i(320137),
    S = i(881288),
    L = i(417360),
    k = i(14486),
    y = i(35275),
    R = i(939249),
    G = i(807973),
    D = i(898612),
    P = i(963027),
    O = i(262763),
    M = i(976860),
    U = i(734057),
    F = i(977997),
    w = i(499211),
    V = i(652215);
function z(e, t) {
    let i = (0, r.bG)([U.A], () => U.A.getChannel(t)),
        { needSubscriptionToAccess: l } = (0, w.A)(i?.id);
    if (null == i || l || i.isObfuscated()) return null;
    let n = i.isGuildVocal();
    return {
        navigateToChannel: () => {
            n
                ? O.A.handleVoiceConnect({
                      channel: i,
                      connected: F.A.isInChannel(i.id),
                      needSubscriptionToAccess: !1,
                      routeDirectlyToChannel: !0,
                  })
                : (0, M.pX)(V.BVt.CHANNEL(e, i.id));
        },
        ariaLabel: (0, P.Ay)({ channel: i }),
    };
}
var B = i(740012);
function Y(e) {
    let { benefit: t, guildId: i } = e,
        n = z(i, t.ref_id),
        s = (0, l.jsx)(G.A, { guildId: i, emojiId: t.emoji_id, emojiName: t.emoji_name }),
        r =
            null != n
                ? (0, l.jsx)(R.D, {
                      className: B.__invalid_channelLink,
                      onClick: n.navigateToChannel,
                      "aria-label": n.ariaLabel,
                      role: "link",
                      children: (0, l.jsx)(v.E, {
                          variant: "text-md/medium",
                          color: "text-strong",
                          className: a()(B.UU, B.F$),
                          children: (0, D.A)(t),
                      }),
                  })
                : (0, l.jsx)(v.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      className: B.UU,
                      children: (0, D.A)(t),
                  });
    return (0, l.jsxs)("div", {
        className: B.kL,
        children: [
            (0, l.jsxs)("div", {
                className: B.op,
                children: [
                    r,
                    (0, l.jsx)(v.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: B.qq, children: s }),
        ],
    });
}
var H = i(724609),
    X = i(580630),
    W = i(23339),
    K = i(319060),
    q = i(2242);
let $ = (0, W.xI)(K.A.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE),
    Z = (0, W.xI)(K.A.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE);
function Q() {
    return (0, p.A)(q.Yl) ? Z : $;
}
var J = i(375708),
    ee = i(461144);
let et = (e) => {
    let { listingName: t } = e;
    return (0, l.jsx)(d.D, {
        variant: "text-md/normal",
        color: "interactive-text-active",
        className: ee.KR,
        children: t,
    });
};
function ei(e) {
    let { image: t } = e;
    return null == t ? null : (0, l.jsx)("img", { src: t, alt: "", className: ee.ah });
}
let el = (e) => {
    let { listingId: t, isListingPublished: i } = e,
        n = Q(),
        [s] = C.tx(t),
        [a] = C.lK(t, n),
        [r] = C.A_(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(et, { listingName: s }),
            (0, l.jsx)(ei, { image: a }),
            !i && (0, l.jsx)("div", { className: ee.U0, children: (0, l.jsx)(H.k, {}) }),
            (0, l.jsx)(v.E, {
                variant: "heading-xl/semibold",
                className: ee.Us,
                tag: "div",
                children: (0, X.$g)(r.price, r.currency),
            }),
            (0, l.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "interactive-text-default",
                className: ee.gV,
                children: J.intl.format(J.t.isLGyX, {
                    period: (0, b.cV)({ interval: r.interval, interval_count: r.interval_count }),
                }),
            }),
        ],
    });
};
var en = i(900797),
    es = i(847374),
    ea = i(886782);
let er = (e) => {
    let { listingId: t, isListingPublished: i, expanded: n, onToggleExpanded: s } = e,
        a = Q(),
        [r] = C.tx(t),
        [c] = C.lK(t, a),
        [d] = C.A_(t);
    return (0, l.jsxs)("div", {
        className: ea.kL,
        children: [
            (0, l.jsx)(ei, { image: c }),
            (0, l.jsxs)("div", {
                className: ea.nj,
                children: [
                    (0, l.jsx)(et, { listingName: r }),
                    (0, l.jsxs)("div", {
                        className: ea.VS,
                        children: [
                            !i && (0, l.jsx)(H.k, {}),
                            (0, l.jsxs)(v.E, {
                                variant: "text-xs/normal",
                                className: ea.Us,
                                children: [
                                    (0, X.$g)(d.price, d.currency),
                                    " ",
                                    J.intl.format(J.t.isLGyX, {
                                        period: (0, b.cV)({ interval: d.interval, interval_count: d.interval_count }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(R.D, {
                onClick: s,
                children: n
                    ? (0, l.jsx)(en.t, { size: "md", color: "currentColor", className: ea.Rm })
                    : (0, l.jsx)(es.a, { size: "md", color: "currentColor", className: ea.Rm }),
            }),
        ],
    });
};
var ec = i(284009),
    ed = i.n(ec),
    eo = i(989349),
    eu = i.n(eo),
    em = i(228366),
    ex = i(73825),
    eh = i(688810),
    eg = i(202384),
    ej = i(513461),
    ev = i(212455),
    ep = i(51758),
    e_ = i(857071),
    ef = i(192308),
    eN = i(663288),
    eA = i(937008),
    eb = i(491057),
    eI = i(97352),
    eC = i(975571),
    eE = i(624456),
    eT = i(695825),
    eS = i(701273),
    eL = i(71393);
i(321073);
let ek = ["a", "b", "c", "d"],
    ey = (e) => e;
function eR(e, t) {
    let i = {},
        l = Math.min(e.length, ek.length);
    for (let n = 0; n < l; ++n) i[ek[n]] = (i, l) => t(e[n], l);
    return i;
}
class eG {
    items;
    constructor(e) {
        this.items = e;
    }
    asString() {
        return this.transformed(ey);
    }
    isEmpty() {
        return 0 === this.items.length;
    }
    transformed(e) {
        switch (this.items.length) {
            case 0:
                return "";
            case 1:
                return e(this.items[0], "");
            case 2:
                return J.intl.format(J.t.GENERIC_FORMATTED_LIST_TWO, eR(this.items, e));
            case 3:
                return J.intl.format(J.t.GENERIC_FORMATTED_LIST_THREE, eR(this.items, e));
            default:
                return J.intl.format(J.t.GENERIC_FORMATTED_LIST_FOUR, eR(this.items, e));
        }
    }
}
var eD = i(207816);
let eP = (e) => {
    let { onClose: t, listing: i, guildId: s } = e,
        a = (0, r.bG)([eL.A], () => eL.A.getGuild(s), [s]),
        c = (function (e) {
            let { includeFlairAsBenefit: t, listing: i, guildId: l } = e,
                s = 0,
                a = 0;
            for (let e of i.role_benefits.benefits) (0, b.B1)(e) ? (s += 1) : (0, b.b1)(e) && (a += 1);
            let r = i.role_id,
                c = (0, T.A)(l).filter((e) => e.roles.includes(r)).length;
            return n.useMemo(() => {
                let e = [];
                return (
                    !0 === t && e.push(J.intl.string(J.t.EhdV2x)),
                    0 !== s && e.push(J.intl.formatToPlainString(J.t["p/l+BI"], { channelCount: s })),
                    0 !== a && e.push(J.intl.formatToPlainString(J.t.eXP5vt, { benefitCount: a })),
                    0 !== c && e.push(J.intl.formatToPlainString(J.t.YjmQwW, { emojiCount: c })),
                    new eG(e)
                );
            }, [s, a, c, t]);
        })({ listing: i, guildId: s });
    return (0, l.jsxs)("div", {
        className: eD.RP,
        children: [
            (0, l.jsx)(d.D, {
                className: eD.RS,
                variant: "heading-lg/extrabold",
                children: J.intl.format(J.t.I5dYFs, { serverName: a?.name, tierName: i.name }),
            }),
            !c.isEmpty() &&
                (0, l.jsx)(v.E, {
                    className: eD.sT,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: J.intl.format(J.t.TnhFHv, { benefits: c.asString() }),
                }),
            (0, l.jsxs)("div", {
                className: eD.o1,
                children: [
                    (0, l.jsx)(g.$, {
                        variant: "primary",
                        text: J.intl.string(J.t.WWvswD),
                        fullWidth: !0,
                        onClick: () => (0, eS.A)("role_sub_mweb_success_modal"),
                    }),
                    (0, l.jsx)(g.$, {
                        variant: "secondary",
                        text: J.intl.string(J.t.y84Dhr),
                        fullWidth: !0,
                        onClick: () => t(!0),
                    }),
                ],
            }),
        ],
    });
};
var eO = i(789645),
    eM = i(565645),
    eU = i(166532),
    eF = i(371794),
    ew = i(147925),
    eV = i(500174);
function ez(e) {
    let { benefit: t, guildId: i, onClick: n } = e,
        s = z(i, t.ref_id),
        a = (0, l.jsx)(G.A, { guildId: i, emojiId: t.emoji_id, emojiName: t.emoji_name });
    return (0, l.jsxs)(R.D, {
        className: eV.kL,
        onClick: () => {
            s?.navigateToChannel(), n();
        },
        "aria-label": s?.ariaLabel,
        role: "link",
        children: [
            (0, l.jsx)("div", { className: eV.qq, children: a }),
            (0, l.jsxs)("div", {
                className: eV.op,
                children: [
                    (0, l.jsx)(v.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: eV.UU,
                        children: (0, D.A)(t),
                    }),
                    (0, l.jsx)(v.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, l.jsx)(ew.A, { direction: ew.A.Directions.RIGHT, className: eV.OW }),
        ],
    });
}
var eB = i(28008),
    eY = i(575650);
let eH = (e) => {
        let { onClose: t, listing: i, step: n, guildId: s } = e,
            r = (0, I.Tq)(s),
            c = (0, p.A)(q.TQ),
            d = (() => {
                if (c) return null;
                let e =
                    r?.cover_image_asset?.application_id != null
                        ? (0, eF.YE)(r.cover_image_asset.application_id, r.cover_image_asset, 440)
                        : void 0;
                return null == e && n !== eU.pn.CONFIRM
                    ? null
                    : null == e
                      ? (0, l.jsx)("div", { className: eB.gI })
                      : (0, l.jsx)("img", { src: e, alt: "", className: eB.F0 });
            })();
        return (0, l.jsxs)("div", {
            className: a()(eB.N1, { [eY.GI]: null != d, [eB.TP]: c || null == d }),
            children: [
                d,
                (() => {
                    if (n !== eU.pn.CONFIRM) return null;
                    let e = null == i.image_asset ? void 0 : (0, eF.YE)(i.application_id, i.image_asset, 80);
                    return (0, l.jsx)("div", {
                        className: eB.z9,
                        children: (0, l.jsx)("img", { src: e, alt: "", className: eB.ah }),
                    });
                })(),
                (0, l.jsx)(R.D, {
                    className: eB.G3,
                    onClick: () => t(!1),
                    "aria-label": J.intl.string(J.t.cpT0Cq),
                    children: (0, l.jsx)(eO.P, { size: "md", color: "currentColor", className: eB.ut }),
                }),
            ],
        });
    },
    eX = (e) => {
        let { onClose: t, listing: i, guildId: n } = e,
            s = (0, r.bG)([eL.A], () => eL.A.getGuild(n), [n]),
            a = (0, T.A)(n).filter((e) => e.roles.includes(i.role_id)),
            c = i.role_benefits.benefits.filter(b.B1).slice(0, null === a.length ? 4 : 3),
            o = (0, L.A)(c).slice(0, null === a.length ? 4 : 3);
        return (0, l.jsxs)("div", {
            className: eB.RP,
            children: [
                (0, l.jsx)(d.D, {
                    className: eB.RS,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: J.intl.format(J.t["1HIsTk"], { serverName: s?.name }),
                }),
                (0, l.jsx)(v.E, {
                    className: eB.sT,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: J.intl.format(J.t.oi3gip, { tier: i.name }),
                }),
                o.length > 0 &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: eB.n2,
                                children: J.intl.string(J.t.w0CQ01),
                            }),
                            (0, l.jsx)("div", {
                                className: eB.M3,
                                children: o.map((e) =>
                                    (0, l.jsx)(ez, { benefit: e, guildId: n, onClick: () => t(!0) }, (0, b.nh)(e)),
                                ),
                            }),
                        ],
                    }),
                (() => {
                    if (0 === a.length) return null;
                    let e = a[0];
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(v.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: eB.n2,
                                children: J.intl.string(J.t["6Y1FLi"]),
                            }),
                            (0, l.jsxs)("div", {
                                className: eB.DI,
                                children: [
                                    (0, l.jsx)(eM.A, {
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated ?? !1,
                                        className: eB.mp,
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)(v.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                className: eB.cC,
                                                children: J.intl.string(J.t.PrKk4n),
                                            }),
                                            (0, l.jsx)(v.E, {
                                                color: "interactive-text-default",
                                                variant: "text-sm/normal",
                                                children: J.intl.format(J.t["2ICUkG"], { count: a.length }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                })(),
                (0, l.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: eB.EJ,
                    children: (0, l.jsx)(g.$, {
                        variant: "primary",
                        text: J.intl.string(J.t["Ph+ecI"]),
                        onClick: () => t(!0),
                    }),
                }),
            ],
        });
    };
var eW = i(631616);
let eK = (e) => {
        let { benefits: t, header: i, guildId: s } = e,
            [a, r] = n.useState(!1),
            c = a ? t : t.slice(0, 5),
            u = t.length > 5,
            m = t.length - 5,
            x = J.intl.formatToPlainString(J.t.XSdy72, { numTruncated: m }),
            h = (0, _.GV)();
        return 0 === t.length
            ? null
            : (0, l.jsxs)("div", {
                  className: eW.uO,
                  children: [
                      (0, l.jsx)(d.D, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: eW.bV,
                          id: h,
                          children: i,
                      }),
                      (0, l.jsx)(o.h, { size: 12 }),
                      (0, l.jsx)("ul", {
                          className: eW.Pp,
                          "aria-labelledby": h,
                          children: c.map((e, t) =>
                              (0, l.jsx)(
                                  "li",
                                  { children: (0, l.jsx)(Y, { guildId: s, benefit: e }, (0, b.nh)(e)) },
                                  t,
                              ),
                          ),
                      }),
                      u && (0, l.jsx)(eZ, { isViewAll: a, onToggle: () => r((e) => !e), showMoreText: x }),
                  ],
              });
    },
    eq = (e) => {
        let { guildId: t, listingId: i } = e,
            n = (0, T.A)(t),
            [s] = C.UN(i, t),
            a = n.filter((e) => s.has(e.id));
        return 0 === a.length
            ? null
            : (0, l.jsxs)("div", {
                  className: eW.uO,
                  children: [
                      (0, l.jsx)(d.D, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: eW.bV,
                          children: J.intl.format(J.t.NAnXEo, { count: a.length }),
                      }),
                      (0, l.jsx)(o.h, { size: 12 }),
                      (0, l.jsx)("div", {
                          className: eW.vX,
                          children: a.map((e, t) =>
                              (0, l.jsx)(
                                  c.m,
                                  {
                                      text: e.name,
                                      "aria-label": !1,
                                      children: (0, l.jsx)("img", {
                                          className: eW.x6,
                                          src: A.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 24 }),
                                          width: 24,
                                          height: 24,
                                          alt: e.name,
                                      }),
                                  },
                                  e.id ?? t,
                              ),
                          ),
                      }),
                  ],
              });
    },
    e$ = (e) => {
        let { listingId: t, guildId: i, className: n } = e,
            s = (0, S.A)(i, t),
            [r] = C.lZ(t),
            c = (0, L.A)(r),
            [m] = C.$O(t),
            x = C.It(t, i),
            [h] = C.UN(t, i);
        return null == s && 0 === c.length && 0 === m.length && 0 === h.size
            ? null
            : (0, l.jsxs)("div", {
                  className: a()(eW.bp, n),
                  children: [
                      null != s &&
                          (0, l.jsxs)(u.F, {
                              component: (0, l.jsx)(d.D, {
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  className: eW.bV,
                                  children: J.intl.string(J.t.FJZmYx),
                              }),
                              children: [
                                  (0, l.jsx)(o.h, { size: 8 }),
                                  (0, l.jsx)(k.A, { role: x, guildId: i, className: eW.gP }),
                              ],
                          }),
                      (0, l.jsx)(eK, { header: J.intl.string(J.t.LtfhAj), benefits: c, guildId: i }),
                      (0, l.jsx)(eK, { header: J.intl.string(J.t["8oxWpO"]), benefits: m, guildId: i }),
                      (0, l.jsx)(eq, { guildId: i, listingId: t }),
                  ],
              });
    },
    eZ = (e) => {
        let { onToggle: t, isViewAll: i, showMoreText: n } = e,
            s = i ? J.intl.string(J.t["r/xxPU"]) : n;
        return (0, l.jsx)(m.Q, { text: s, onClick: t, textVariant: "text-xs/medium", variant: "secondary" });
    },
    eQ = (e) => {
        let t,
            { listingId: s, guildId: d, groupListingId: o, analyticsLocation: m } = e,
            _ = (0, I.dB)(s),
            {
                openModal: A,
                canOpenModal: T,
                cannotOpenReason: S,
                isCheckingTrialEligibility: L,
            } = ((e, t, s, a) => {
                let c,
                    d = (0, r.bG)([e_.A], () => e_.A.isLurking(t)),
                    o = (0, ep.H)(t),
                    u = (0, r.bG)([ev.A], () => (null != t ? ev.A.getRequest(t) : null)),
                    m = u?.applicationStatus === ej.B5.SUBMITTED,
                    x = e?.subscription_plans[0],
                    h = x?.id,
                    g = e?.published === !0,
                    j = x?.sku_id,
                    v = (0, r.bG)([eI.A], () => (null != h ? eI.A.get(h) : null)),
                    { activeSubscription: _, activeSubscriptionPlanFromStore: f } = (0, E.A)(s),
                    N = null == _ || null != f,
                    A = (0, I.cY)(s, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
                    C = (0, eE.l)(_),
                    T = null != C,
                    S = !!_?.hasActiveTrial,
                    { loading: L, getTrialPurchaseEligibility: k } = (() => {
                        let [e, t] = n.useState(!1),
                            [i, l] = n.useState(null);
                        return {
                            loading: e,
                            error: i,
                            getTrialPurchaseEligibility: n.useCallback(async (e, i, n) => {
                                t(!0), l(null);
                                try {
                                    return await (0, eT.KD)(e, i, n);
                                } catch (e) {
                                    l(e);
                                } finally {
                                    t(!1);
                                }
                            }, []),
                        };
                    })(),
                    y = (0, I.dL)(e?.id),
                    { analyticsLocations: R } = (0, eh.Ay)(),
                    G = _?.isPurchasedViaAppleGeneric,
                    D = !d && null != v && N && !m && !T && !S && !G;
                m || (d && !o)
                    ? (c = J.intl.string(J.t.pQK5ho))
                    : C === h
                      ? (c = J.intl.formatToPlainString(J.t.UlBRTl, {
                            changeDate: null != _ ? eu()(_.currentPeriodEnd).format("MMM DD, YYYY") : "",
                        }))
                      : T
                        ? (c = J.intl.string(J.t.ePFYOS))
                        : S
                          ? (c = J.intl.string(J.t["0lPoT2"]))
                          : G && (c = J.intl.string(J.t.cEMaCt));
                let P = (0, p.A)(q.Yl);
                n.useEffect(() => {
                    g &&
                        null != j &&
                        em.h.wait(() => {
                            (0, ex.ur)(j);
                        });
                }, [g, j]);
                let O = n.useCallback(async () => {
                        let n, s;
                        if (
                            (ed()(null != e, "No subscription listing"),
                            ed()(null != x, "No subscription plan"),
                            ed()(g, "Cannot purchase this unpublished plan"),
                            y?.active_trial != null)
                        ) {
                            let i = await k(t, e.id, y.active_trial.id);
                            i?.is_eligible === !0 ? (n = y?.active_trial?.id) : (s = J.intl.string(J.t.vuvsK5));
                        }
                        !(function (e) {
                            let {
                                initialPlanId: t,
                                activeSubscription: n,
                                trialId: s,
                                trialFooterMessageOverride: a,
                                onClose: r,
                                analyticsObject: c,
                                analyticsLocation: d,
                                analyticsLocations: o,
                                analyticsSubscriptionType: u,
                                renderHeader: m,
                                renderPurchaseConfirmation: x,
                                planGroup: h,
                                reviewWarningMessage: g,
                                skuId: j,
                            } = e;
                            (0, ef.openModalLazy)(
                                async () => {
                                    let { PaymentContextProvider: e } = await Promise.resolve().then(i.bind(i, 834252)),
                                        { PaymentModal: v } = await Promise.resolve().then(i.bind(i, 546042)),
                                        { STEPS: p } = await Promise.all([
                                            i.e("8516"),
                                            i.e("23309"),
                                            i.e("11377"),
                                            i.e("63897"),
                                            i.e("44057"),
                                            i.e("21856"),
                                            i.e("8694"),
                                            i.e("9045"),
                                            i.e("39053"),
                                            i.e("62175"),
                                            i.e("93213"),
                                            i.e("13600"),
                                            i.e("8739"),
                                            i.e("61402"),
                                        ]).then(i.bind(i, 864353));
                                    return (i) => {
                                        let { onClose: _, ...f } = i;
                                        return (0, l.jsx)(e, {
                                            activeSubscription: n,
                                            stepConfigs: p,
                                            skuIDs: [j],
                                            unifiedCheckoutFlow: eN.CL.GUILD_ROLE_CHECKOUT,
                                            children: (0, l.jsx)(eb.Qt, {
                                                children: (0, l.jsx)(eA.dX, {
                                                    children: (0, l.jsx)(v, {
                                                        ...f,
                                                        initialPlanId: t,
                                                        onClose: (e) => {
                                                            _(), r?.(e);
                                                        },
                                                        analyticsLocations: o,
                                                        analyticsObject: c,
                                                        analyticsLocation: d,
                                                        analyticsSubscriptionType: u,
                                                        skuId: j,
                                                        renderHeader: m,
                                                        renderPurchaseConfirmation: x,
                                                        planGroup: h,
                                                        trialId: s,
                                                        trialFooterMessageOverride: a,
                                                        reviewWarningMessage: g,
                                                    }),
                                                }),
                                            }),
                                        });
                                    };
                                },
                                {
                                    onCloseCallback: () => {
                                        r?.(!1);
                                    },
                                    onCloseRequest: V.tEg,
                                },
                            );
                        })({
                            activeSubscription: _,
                            analyticsSubscriptionType: V.rzx.GUILD,
                            trialId: n,
                            trialFooterMessageOverride:
                                y?.active_trial != null
                                    ? J.intl.format(J.t.zyGyNk, {
                                          buttonText: J.intl.string(J.t.BEeXib),
                                          interval: (0, b.Gg)(x),
                                          days: 1,
                                          contactLink: V.X7G.CONTACT,
                                          cancelSubscriptionArticle: eC.A.getArticleURL(V.MVz.ROLE_SUBSCRIPTION_CANCEL),
                                          helpdeskArticle: eC.A.getArticleURL(V.MVz.ROLE_SUBSCRIPTION_TRIAL),
                                          paidServiceTermsArticle: eC.A.getArticleURL(V.MVz.PAID_TERMS),
                                          tierName: x.name,
                                      })
                                    : void 0,
                            analyticsLocations: R,
                            analyticsLocation: a,
                            renderHeader: (i, n, s) => (0, l.jsx)(eH, { onClose: n, listing: e, step: s, guildId: t }),
                            initialPlanId: x.id,
                            skuId: x.sku_id,
                            planGroup: A,
                            renderPurchaseConfirmation: (i, n) =>
                                P
                                    ? (0, l.jsx)(eP, { listing: e, onClose: n, guildId: t })
                                    : (0, l.jsx)(eX, { listing: e, onClose: n, guildId: t }),
                            reviewWarningMessage: s,
                        });
                    }, [g, e, x, _, A, t, R, a, k, y, P]),
                    M = n.useCallback(() => {
                        (0, eg.Ze)(t);
                    }, [t]);
                return { openModal: o ? M : O, canOpenModal: D, cannotOpenReason: c, isCheckingTrialEligibility: L };
            })(_, d, o, m),
            k = (0, r.bG)([N.A], () => N.A.isSyncing),
            { activeSubscription: R, activeSubscriptionListing: G } = (0, E.A)(o),
            D = G?.id === s,
            P = R?.status === V.Dmq.CANCELED,
            [O, M] = n.useState(!1),
            [U, F] = n.useState(!1),
            w = n.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), F(t);
            }, []),
            [z] = C.tx(s),
            [B] = C.I8(s),
            [Y] = C.V_(s),
            [H] = C.hh(s),
            X =
                ((t = (0, I.dL)(s)),
                n.useMemo(
                    () =>
                        null != t &&
                        (null == t.max_num_active_trial_users ||
                            t.max_num_active_trial_users > (t.num_active_trial_users ?? 0)),
                    [t],
                )),
            W = null != Y && null == R && X,
            K = (0, p.A)(q.Yl),
            [$, Z] = n.useState(!1),
            Q = $ || !K,
            ee = (0, r.bG)([f.A], () => f.A.isViewingServerShop(d)),
            et = _?.published === !0,
            ei = _?.soft_deleted === !0,
            en = J.intl.string(J.t.KzmEA9);
        return (et || ee) && !ei
            ? (0, l.jsxs)("article", {
                  className: eW.kL,
                  "aria-label": z,
                  children: [
                      W &&
                          (0, l.jsxs)("div", {
                              className: a()(eW.G_, eW.rF),
                              children: [
                                  J.intl.format(J.t.L2ouip, {
                                      trialPeriodDuration: (0, b.Gg)({
                                          interval: Y.interval,
                                          interval_count: Y.interval_count,
                                      }),
                                  }),
                                  (0, l.jsx)(c.m, {
                                      text: J.intl.formatToPlainString(J.t.FYyR4o, { activeTrialUserLimit: H ?? 0 }),
                                      children: (0, l.jsx)(x.m, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: eW.Xz,
                                      }),
                                  }),
                              ],
                          }),
                      (0, l.jsxs)("div", {
                          className: W ? void 0 : eW.e1,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: eW.Og,
                                  children: [
                                      K
                                          ? (0, l.jsx)(er, {
                                                listingId: s,
                                                isListingPublished: et,
                                                expanded: Q,
                                                onToggleExpanded: () => Z((e) => !e),
                                            })
                                          : (0, l.jsx)(el, { listingId: s, isListingPublished: et }),
                                      Q &&
                                          (0, l.jsxs)(h.B, {
                                              gap: 16,
                                              children: [
                                                  K && (0, l.jsx)("div", { className: eW.yF }),
                                                  D
                                                      ? (0, l.jsx)(g.$, {
                                                            disabled: !0,
                                                            fullWidth: !0,
                                                            variant: P ? "secondary" : "primary",
                                                            text: P
                                                                ? J.intl.string(J.t.iKHmu0)
                                                                : J.intl.string(J.t.XvAuMo),
                                                        })
                                                      : (0, l.jsxs)(l.Fragment, {
                                                            children: [
                                                                T
                                                                    ? null
                                                                    : (0, l.jsx)(j.p, {
                                                                          className: eW.Ht,
                                                                          messageType: j.Y.INFO,
                                                                          children: S,
                                                                      }),
                                                                (0, l.jsx)(g.$, {
                                                                    fullWidth: !0,
                                                                    text: J.intl.string(J.t.fM5ZsX),
                                                                    disabled: !T || k,
                                                                    loading: L,
                                                                    onClick: A,
                                                                    icon: y.A,
                                                                    variant: "primary",
                                                                }),
                                                            ],
                                                        }),
                                                  (0, l.jsxs)(h.B, {
                                                      gap: 8,
                                                      align: "center",
                                                      children: [
                                                          (0, l.jsx)(v.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-default",
                                                              className: a()((!U || !O) && eW.Zp),
                                                              children: (0, l.jsx)("div", { ref: w, children: B }),
                                                          }),
                                                          U &&
                                                              (0, l.jsx)(eZ, {
                                                                  isViewAll: O,
                                                                  onToggle: () => M((e) => !e),
                                                                  showMoreText: en,
                                                              }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              Q && (0, l.jsx)(u.F, { children: (0, l.jsx)(e$, { listingId: s, guildId: d }) }),
                          ],
                      }),
                  ],
              })
            : null;
    };
