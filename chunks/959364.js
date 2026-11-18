t.d(n, { default: () => tc });
var i,
    s = t(477900),
    r = t(582128),
    l = t(284009),
    a = t.n(l),
    c = t(613412),
    o = t(334279),
    d = t(164636),
    u = t(778712),
    m = t(231723),
    p = t(224640),
    E = t(793574),
    f = t(688810),
    g = t(139286),
    h = t(468450),
    x = t(101058),
    v = t(836602),
    N = t(917445),
    I = t(652165),
    A = t(287809),
    j = t(129230),
    y = t(969935),
    R = t(857512),
    C = t(298072),
    _ = t(993408),
    T = t(503089),
    k = t(331884),
    O = t(652215),
    L = t(623373),
    P = t(536572),
    b = t(177366),
    S = t(575593);
function D(e, n) {
    return e.type === S.R.VARIANTS_GROUP ? (null != n ? e.variants?.[n] : void 0) : e;
}
var w = t(212407),
    F = t(935094),
    B = t(503698),
    M = t.n(B),
    G = t(834730),
    U = t(939249),
    H = t(534514),
    z = t(14702),
    V = t(818296),
    W = t(288106),
    X = t(604913);
t(321073);
var q = t(792996);
function Y(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) return q.intl.formatToPlainString(q.t["/0Yndu"], { num: e.bundledProducts?.length });
    let t = e.bundledProducts ?? [],
        i = [],
        s = !1;
    for (let e of t)
        switch (e.type) {
            case S.R.AVATAR_DECORATION:
                i.push(q.intl.formatToPlainString(q.t.Ntv9Jt, { itemName: e.name }));
                break;
            case S.R.PROFILE_EFFECT:
                i.push(q.intl.formatToPlainString(q.t["3Y8q7a"], { itemName: e.name }));
                break;
            case S.R.NAMEPLATE:
                (i.push(q.intl.formatToPlainString(q.t["2keXky"], { itemName: e.name })), (s = !0));
        }
    if (s) {
        let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
        return q.intl.formatToPlainString(q.t.Ofrqj6, { joinedItems: e });
    }
    let r = i.join(" & ");
    return q.intl.formatToPlainString(q.t.Ofrqj6, { joinedItems: r });
}
var $ = t(306396);
function K(e) {
    return (0, _.aw)(e)
        ? q.intl.formatToPlainString(q.t["1tUCAO"], { count: e.items.length })
        : (function (e) {
              let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (null != e && null != e.summary && "" !== e.summary) {
                  if (e.type === S.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                      let t = Y(e, n);
                      return e.summary.replace("{joinedItems}", t);
                  }
                  return e.summary;
              }
              switch (e?.type) {
                  case S.R.AVATAR_DECORATION:
                      return q.intl.string(q.t["3lv7q2"]);
                  case S.R.PROFILE_EFFECT:
                      return q.intl.string(q.t.VhJL72);
                  case S.R.NAMEPLATE:
                      return q.intl.string(q.t.ik37EZ);
                  case S.R.PROFILE_FRAME:
                      return q.intl.string(q.t.fWzWPp);
                  case S.R.BUNDLE:
                      return Y(e, n);
                  default:
                      return "";
              }
          })(e);
}
function Z(e) {
    let n = (0, V.g)(e);
    if (null != n) {
        let t = K(e);
        switch (n.tenantMetadata?.collectibles?.type) {
            case X.hE.COLLECT_AND_CLAIM:
                if (n.rewardStatus !== W.GM.IN_PROGRESS) return t;
                if ((0, _.aw)(e))
                    return q.intl.formatToPlainString(q.t["vI+3Ok"], {
                        itemCount: (0, $.oO)(e, n.tenantMetadata.collectibles.collectionId),
                    });
                return q.intl.formatToPlainString(q.t.wBhFsO, { itemDescription: t.replace(/\.$/, "") });
            case X.hE.TARGETED_OFFER:
            default:
                return t;
        }
    }
    return K(e);
}
var J = t(758836),
    Q = t(690901);
function ee(e) {
    let { name: n, typeLabel: t } = e;
    return (0, s.jsxs)(G.E, {
        variant: "body-sm/medium",
        className: Q.mC,
        "aria-live": "polite",
        children: [
            (0, s.jsx)("span", { className: Q.kx, children: n }),
            null != t && (0, s.jsx)("span", { className: Q.FP, children: t }),
        ],
    });
}
let en = { [S.R.AVATAR_DECORATION]: !0, [S.R.PROFILE_FRAME]: !0 };
function et(e) {
    let { item: n, index: t, isSelected: i, setSelected: l, label: a, trackedSkuId: c, onTrackClick: o } = e,
        d = r.useMemo(() => ({ skuId: n.skuId, type: n.type, items: [n] }), [n]),
        u = r.useCallback(() => {
            (o(J.sH.BUNDLE_VIEW_PRODUCT, c), l(t));
        }, [o, c, l, t]),
        m = !0 === en[n.type];
    return (0, s.jsx)(U.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: M()(Q.xn, { [Q.Y4]: i, [Q.u8]: m }),
        onClick: u,
        "aria-label": a,
        children: (0, s.jsx)("div", { className: Q.Yf, children: (0, s.jsx)(z.O, { product: d }) }),
    });
}
var ei = t(442759),
    es = t(872200),
    er = t(139136),
    el = t(395744),
    ea = t(929283),
    ec = t(650228);
function eo(e) {
    let {
        item: n,
        user: t,
        bundleFirstAvatarDecoration: i,
        isBundle: r,
        pendingAvatarSrc: l,
        pendingAvatarDecoration: a,
        pendingDisplayNameStyles: c,
        pendingGlobalName: o,
    } = e;
    switch (n.type) {
        case S.R.AVATAR_DECORATION:
            return (0, s.jsx)("div", {
                className: ec.h1,
                children: (0, s.jsx)(ea.i, { user: t, item: n, avatarSrcOverride: l, isHighlighted: !0 }),
            });
        case S.R.PROFILE_EFFECT:
            return (0, s.jsx)("div", {
                className: r ? ec.sm : ec.VY,
                children: (0, s.jsx)(er.A, {
                    skuId: n.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case S.R.PROFILE_FRAME:
            return (0, s.jsx)("div", { className: r ? ec.ob : ec.fE, children: (0, s.jsx)(el.A, { frame: n }) });
        case S.R.NAMEPLATE:
            return (0, s.jsx)("div", {
                className: ec.Dz,
                children: (0, s.jsx)(es.A, {
                    className: ec.M4,
                    nameplate: n,
                    user: t,
                    nameplatePreviewSize: "large",
                    pendingAvatarDecoration: i ?? a,
                    pendingDisplayNameStyles: c,
                    pendingGlobalName: o,
                    isHighlighted: !0,
                    hideDecorators: !0,
                }),
            });
        default:
            return null;
    }
}
function ed(e) {
    let { user: n, selectedProduct: t, previewingProduct: i, selectedBundleSlide: r, pendingProfile: l } = e,
        a = i ?? t,
        { firstAvatarDecoration: c } = (0, ei.f5)(a),
        { pendingChanges: o, pendingAvatarSrc: d } = l,
        u = a.items[r] ?? a.items[0];
    return null == u
        ? null
        : (0, s.jsx)(eo, {
              item: u,
              user: n,
              bundleFirstAvatarDecoration: c,
              isBundle: (0, _.aw)(a),
              pendingAvatarSrc: d,
              pendingAvatarDecoration: o.pendingAvatarDecoration,
              pendingDisplayNameStyles: o.pendingDisplayNameStyles,
              pendingGlobalName: o.pendingGlobalName,
          });
}
var eu = t(846957);
function em(e) {
    let { selectedProduct: n, previewingProduct: t } = e;
    return (0, s.jsx)(eu.B, { product: t ?? n });
}
var ep = t(975571),
    eE = t(740076),
    ef = t(784054),
    eg = t(422460);
function eh(e) {
    let { skuId: n } = e;
    return (0, J.EZ)(n)
        ? (0, s.jsx)(G.E, {
              variant: "body-sm/normal",
              className: eg.CU,
              children: q.intl.format(q.t.Q1scdE, {
                  helpdeskArticle: ep.A.getArticleURL(O.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function ex(e) {
    let { productRecord: n, productName: t, selectedProduct: i, previewingVariantIndexProps: l } = e,
        { previewingVariantIndex: a, handleEntering: c, handleLeaving: o } = l,
        d = D(n, a) ?? i,
        u = Z(d),
        { disabledReason: m } = (0, eE.I)(i.skuId),
        p = (0, C.Q)(n),
        E = (0, L.B1)(n),
        f = E ? n.variants[a ?? p] : null,
        g = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            null != g.current && ((g.current.tabIndex = -1), g.current.focus());
        }, []),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: eg.sn,
                    children: [
                        (0, s.jsx)(H.D, { ref: g, variant: "heading-xl/semibold", className: eg.R_, children: t }),
                        (0, s.jsx)(G.E, { variant: "body-sm/normal", children: u }),
                        (0, s.jsx)(eh, { skuId: d.skuId }),
                        null !== m && (0, s.jsx)(G.E, { variant: "body-xs/normal", className: eg.H$, children: m }),
                    ],
                }),
                E &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != f &&
                                (0, s.jsx)(G.E, {
                                    variant: "body-xs/medium",
                                    color: "text-subtle",
                                    className: eg.a9,
                                    lineClamp: 1,
                                    children: q.intl.format(q.t.EcaRWt, {
                                        value: (0, s.jsx)("span", { className: eg.I8, children: f.variantLabel }),
                                    }),
                                }),
                            (0, s.jsx)("div", {
                                className: eg._x,
                                children: (0, s.jsx)(ef.A, {
                                    skuId: n.skuId,
                                    onVariantEnter: c,
                                    onVariantExit: o,
                                    wrap: !0,
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
var ev =
        (((i = {}).COLLECTIBLE = "COLLECTIBLE"),
        (i.BUNDLE = "BUNDLE"),
        (i.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (i.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (i.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        i),
    eN = t(97808),
    eI = t(346055),
    eA = t(993077),
    ej = t(245604),
    ey = t(460905),
    eR = t(262295),
    eC = t(685073),
    e_ = t(432005),
    eT = t(963852),
    ek = t(763754),
    eO = t(20851),
    eL = t(641318),
    eP = t(448645),
    eb = t(780898),
    eS = t(158008);
function eD(e) {
    let { user: n, innerClassName: t } = e;
    return (0, s.jsx)("div", {
        className: eS.mV,
        children: (0, s.jsx)(eR.A, {
            avatar: (0, s.jsx)(eN.eu, {
                src: n.avatarSrc,
                size: u._3.SIZE_32,
                "aria-label": n.name,
                status: O.clD.ONLINE,
            }),
            name: n.name,
            innerClassName: M()(eS.$L, t),
        }),
    });
}
function ew(e) {
    let { user: n, nameplate: t, avatarDecoration: i, pendingDisplayNameStyles: r, pendingGlobalName: l } = e,
        a = (0, eb.Ov)();
    return (0, s.jsx)("div", {
        className: eS.nJ,
        role: "img",
        "aria-label": q.intl.formatToPlainString(q.t["95pCSf"], { a11y_text: t.label }),
        children: (0, s.jsxs)(eI.M, {
            children: [
                (0, s.jsx)(eD, { user: a.mallow, innerClassName: eS.ab }),
                (0, s.jsxs)(G.E, {
                    variant: "body-sm/semibold",
                    className: eS.OS,
                    children: [q.intl.string(q.t["yzW/fZ"]), " - 3"],
                }),
                (0, s.jsx)(eD, { user: a.phibi, innerClassName: eS.e9 }),
                (0, s.jsx)("div", {
                    className: eS.mV,
                    children: (0, s.jsx)(es.A, {
                        className: eS.M4,
                        innerClassName: eS.e9,
                        user: n,
                        nameplate: t,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: i,
                        pendingDisplayNameStyles: r,
                        pendingGlobalName: l,
                        hideDecorators: !0,
                    }),
                }),
                (0, s.jsx)(eD, { user: a.locke, innerClassName: eS.e9 }),
                (0, s.jsxs)(G.E, {
                    variant: "body-sm/semibold",
                    className: eS.OS,
                    children: [q.intl.string(q.t["NG43/6"]), " - 12"],
                }),
                (0, s.jsx)(eD, { user: a.boom, innerClassName: eS.bD }),
                (0, s.jsx)(eD, { user: a.cherry, innerClassName: eS.bD }),
            ],
        }),
    });
}
function eF(e) {
    let {
            user: n,
            avatarDecoration: t,
            pendingAvatarSrc: i,
            pendingPrimaryGuildId: r,
            pendingDisplayNameStyles: l,
            pendingGlobalName: a,
        } = e,
        c = (function (e) {
            let { author: n } = e;
            return (0, e_.rh)({
                ...(0, eT.Ay)({ author: n, channelId: "1337", content: q.intl.string(q.t.d5YwK5) }),
                state: O.cmJ.SENT,
                id: "0",
            });
        })({ author: n }),
        o = (0, eC.gS)(r),
        d = (0, ek.p_)(c),
        u = {
            ...d,
            nick:
                void 0 !== a
                    ? (0, h.eh)({ pendingNickname: void 0, pendingGlobalName: a, user: n, guildMember: null })
                    : d.nick,
            primaryGuild: void 0 !== r ? o : d.primaryGuild,
            displayNameStyles: void 0 !== l ? l : d.displayNameStyles,
        };
    return (0, s.jsx)("div", {
        role: "img",
        "aria-label": q.intl.string(q.t["TN+ZvB"]),
        children: (0, s.jsx)(eI.M, {
            children: (0, s.jsxs)(eA.Z, {
                className: eS.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, s.jsx)(
                        eO.A,
                        {
                            className: eS.G5,
                            author: u,
                            message: c,
                            avatarDecorationOverride: t ?? null,
                            avatarOverride: i,
                        },
                        c.id,
                    ),
                    (0, s.jsxs)("div", {
                        className: eS.lG,
                        children: [
                            (0, s.jsx)(ej.CirclePlusIcon, { size: "md", color: "currentColor", className: eS.hq }),
                            (0, s.jsx)(ey.ReactionIcon, { size: "md", color: "currentColor", className: eS.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eB(e) {
    let { product: n, user: t, pendingProfile: i, activeBundleSlide: r } = e,
        l = eP.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: a, ...c } = i.pendingChanges,
        o = i.pendingAvatarSrc,
        d = n.type === S.R.BUNDLE ? n.items[r ?? 0] : void 0,
        u = d?.type ?? n.type,
        m = u === S.R.AVATAR_DECORATION,
        p = u === S.R.PROFILE_EFFECT || u === S.R.PROFILE_FRAME,
        { firstAvatarDecoration: E, firstProfileEffect: f, firstNameplate: g, firstProfileFrame: h } = (0, ei.f5)(n),
        x = d?.type === S.R.AVATAR_DECORATION ? d : E,
        v = d?.type === S.R.PROFILE_EFFECT ? d : f,
        N = d?.type === S.R.PROFILE_FRAME ? d : h,
        I = d?.type === S.R.NAMEPLATE ? d : g;
    if (u === S.R.NAMEPLATE && null != I)
        return (0, s.jsx)("div", {
            className: eS.Zj,
            children: (0, s.jsx)(ew, {
                user: t,
                nameplate: I,
                avatarDecoration: x ?? c.pendingAvatarDecoration,
                pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                pendingGlobalName: c.pendingGlobalName,
            }),
        });
    return (0, s.jsx)("div", {
        className: m ? eS.RA : eS.hZ,
        children: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(eL.A, {
                    ...c,
                    pendingAvatar: o,
                    user: t,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: x ?? c.pendingAvatarDecoration,
                    pendingProfileEffect: v ?? c.pendingProfileEffect,
                    profileEffectRestartKey: r,
                    pendingProfileFrame: N ?? c.pendingProfileFrame,
                    disabledInputs: !0,
                    hideMessageInput: !p,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? eS.oB : void 0,
                }),
                m &&
                    (0, s.jsx)(eF, {
                        user: t,
                        avatarDecoration: x,
                        pendingAvatarSrc: o,
                        pendingPrimaryGuildId: c.pendingPrimaryGuildId,
                        pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                        pendingGlobalName: c.pendingGlobalName,
                    }),
            ],
        }),
    });
}
function eM(e) {
    let { user: n, pendingProfile: t, selectedProduct: i, previewingProduct: r, selectedBundleSlide: l } = e;
    return (0, s.jsx)(eB, { user: n, pendingProfile: t, product: r ?? i, activeBundleSlide: l });
}
var eG = t(478016),
    eU = t(646514),
    eH = t(219882),
    ez = t(224016),
    eV = t(682901),
    eW = t(549848);
function eX() {
    let e = [
        q.intl.string(q.t.E1NP2x),
        q.intl.string(q.t.kpMomJ),
        (0, eH.M6)({
            legacyCopy: q.intl.string(q.t.xT1Vfn),
            rolloutCopy: q.intl.formatToPlainString(q.t.IDAfOy, {
                maxFileSize: (0, eP.EJ)(eV.PremiumTypes.TIER_2, { useSpace: !1 }),
            }),
        }),
        q.intl.string(q.t.myyAEr),
        q.intl.string(q.t.zTk8Ul),
    ];
    return (0, s.jsxs)("div", {
        className: eW.kL,
        children: [
            (0, s.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eW.ym,
            }),
            (0, s.jsx)(ez.A, { color: "white" }),
            (0, s.jsx)("div", {
                className: eW.PX,
                children: e.map((e, n) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: eW.UJ,
                            children: [
                                (0, s.jsx)(eG.CheckmarkSmallIcon, { color: eU.A.colors.WHITE }),
                                (0, s.jsx)(G.E, {
                                    variant: "body-sm/medium",
                                    color: "text-overlay-light",
                                    children: e,
                                }),
                            ],
                        },
                        n,
                    ),
                ),
            }),
        ],
    });
}
var eq = t(855986),
    eY = t(132198),
    e$ = t(35929);
function eK(e) {
    let { user: n } = e,
        t = eP.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: i, ...r } = (0, eq.cf)([v.A], () => v.A.getPendingChanges()),
        l = (0, x.V7)({ userId: n.id, image: i });
    return (0, s.jsx)("div", {
        className: e$.k,
        children: (0, s.jsx)(eL.A, {
            ...r,
            pendingAvatar: l,
            user: n,
            pendingBadges: [(0, eY._)()],
            canUsePremiumCustomization: t,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
}
var eZ = t(165416);
function eJ(e) {
    let { user: n, productRecord: t, isClosing: i, isOrbCheckoutModalOpen: r } = e;
    return t.skuId === J.Dp.ORB_PROFILE_BADGE
        ? i || r
            ? null
            : (0, s.jsx)(eK, { user: n })
        : (0, J.EZ)(t.skuId)
          ? (0, s.jsx)(eX, {})
          : (0, s.jsx)(eu.B, { product: t, className: eZ.M });
}
let eQ = {
    [ev.COLLECTIBLE]: { LeftPreview: ed, Info: ex, RightPreview: eM },
    [ev.BUNDLE]: {
        LeftPreview: ed,
        Info: function (e) {
            let {
                    productRecord: n,
                    productName: t,
                    selectedBundleSlide: i,
                    setSelectedBundleSlide: l,
                    onTrackClick: a,
                } = e,
                c = n.items,
                o = n.bundledProducts,
                d = o?.[i]?.name,
                u = c[i]?.type,
                m = null != u ? (0, _.Dm)(u) : null,
                p = q.intl.string(q.t.cTbdgu),
                E = Z(n),
                f = r.useRef(null),
                g = r.useCallback(
                    (e) => {
                        c.length <= 1 ||
                            ("ArrowLeft" === e.key || "ArrowUp" === e.key
                                ? (e.preventDefault(), l((e) => (e - 1 + c.length) % c.length))
                                : "ArrowRight" === e.key || "ArrowDown" === e.key
                                  ? (e.preventDefault(), l((e) => (e + 1) % c.length))
                                  : "Home" === e.key
                                    ? (e.preventDefault(), l(0))
                                    : "End" === e.key && (e.preventDefault(), l(c.length - 1)));
                    },
                    [c.length, l],
                );
            r.useEffect(() => {
                let e = f.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let n = e.querySelectorAll('[role="radio"]');
                n[i]?.focus();
            }, [i]);
            let h = r.useRef(null);
            return (
                r.useLayoutEffect(() => {
                    null != h.current && ((h.current.tabIndex = -1), h.current.focus());
                }, []),
                (0, s.jsxs)("div", {
                    className: Q.Qf,
                    children: [
                        (0, s.jsx)(H.D, {
                            ref: h,
                            variant: "heading-xl/semibold",
                            className: Q.R_,
                            title: t,
                            children: t,
                        }),
                        (0, s.jsx)(G.E, { variant: "body-sm/medium", color: "text-default", children: E }),
                        (0, s.jsxs)("div", {
                            className: Q.hZ,
                            children: [
                                (0, s.jsx)("div", {
                                    className: Q.vg,
                                    children: (0, s.jsx)("div", {
                                        ref: f,
                                        className: Q.hK,
                                        role: "radiogroup",
                                        "aria-label": p,
                                        tabIndex: -1,
                                        onKeyDown: g,
                                        children: c.map((e, n) => {
                                            let t = o?.[n]?.name ?? e.skuId,
                                                r = o?.[n]?.skuId ?? e.skuId;
                                            return (0, s.jsx)(
                                                et,
                                                {
                                                    item: e,
                                                    index: n,
                                                    isSelected: n === i,
                                                    setSelected: l,
                                                    label: t,
                                                    trackedSkuId: r,
                                                    onTrackClick: a,
                                                },
                                                e.skuId,
                                            );
                                        }),
                                    }),
                                }),
                                null != d && (0, s.jsx)(ee, { name: d, typeLabel: m }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: eM,
    },
    [ev.EXTERNAL_ORB_BADGE]: { LeftPreview: em, Info: ex, RightPreview: eJ },
    [ev.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: em, Info: ex, RightPreview: eJ },
    [ev.EXTERNAL_GENERIC]: { LeftPreview: em, Info: ex, RightPreview: eJ },
};
function e0(e) {
    var n;
    return eQ[
        ((n = e),
        (0, J.pQ)(n.skuId)
            ? n.skuId === J.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, J.EZ)(n.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, _.aw)(n)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var e1 = t(347478),
    e8 = t(664749),
    e6 = t(470085),
    e2 = t(325802),
    e4 = t(252125);
function e5(e) {
    let n,
        { productRecord: t, selectedProduct: i, selectedBundleSlide: r } = e,
        l = (0, V.g)(i),
        a = (0, e1.$)(l),
        c = (0, e8.fP)(l) ? J.Hi.FIAT : void 0,
        o = t.type === S.R.BUNDLE ? (t.items[r] ?? t.items[0]) : void 0;
    return (
        (n =
            null != o &&
            !t.hideBadge &&
            null == t.badgeOverride &&
            (0, L.JQ)({ skuId: o.skuId, type: o.type, items: [o] })
                ? (0, s.jsx)(e6.s, {})
                : (0, s.jsx)(e6.A, { skuId: t.skuId, prioritizedCurrency: c })),
        (0, s.jsxs)("div", { className: e4.N, children: [n, null != l && a && (0, s.jsx)(e2.A, { promotion: l })] })
    );
}
var e3 = t(248295),
    e9 = t(462887),
    e7 = t(278416),
    ne = t(866665),
    nn = t(821609),
    nt = t(318254),
    ni = t(825484),
    ns = t(331322),
    nr = t(736653),
    nl = t(44120),
    na = t(465794),
    nc = t(757036),
    no = t(672619),
    nd = t(580630),
    nu = t(4227),
    nm = t(466459),
    np = t(314458),
    nE = t(885574),
    nf = t(495900);
function ng(e) {
    let { className: n, isPartiallyPurchased: t } = e;
    return t
        ? (0, s.jsx)(ne.m, {
              position: "top",
              align: "left",
              text: q.intl.string(q.t.y1VWkZ),
              children: (0, s.jsxs)("div", {
                  className: M()(nf.GX, n),
                  children: [
                      (0, s.jsx)("span", {
                          className: nf.P0,
                          children: (0, s.jsx)(nE.CircleInformationIcon, {
                              size: "md",
                              color: "currentColor",
                              className: nf.G,
                          }),
                      }),
                      (0, s.jsx)(G.E, { variant: "body-md/semibold", children: q.intl.string(q.t.BEjTij) }),
                  ],
              }),
          })
        : (0, s.jsx)(G.E, { variant: "body-md/semibold", className: n, children: q.intl.string(q.t["6cfuDj"]) });
}
var nh = t(878112),
    nx = t(572595),
    nv = t(206835),
    nN = t(450481);
let nI = function (e) {
    let { product: n, onSuccess: t, onTrackClick: i } = e,
        { handleUseNow: r, isApplying: l, canUseNow: a } = (0, nN.p)({ product: n, onSuccess: t }),
        c = (0, nv.A)();
    return a
        ? (0, s.jsx)(nn.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(J.sH.USE_NOW), r());
              },
              loading: l,
              text: q.intl.string(q.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, s.jsx)(nn.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(J.sH.EDIT_PROFILE), c(), t?.());
              },
              text: q.intl.string(q.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var nA = t(506742),
    nj = t(219103),
    ny = t(282968);
function nR(e) {
    let {
            product: n,
            promoPrice: t,
            hasShopDiscount: i,
            discountSource: r,
            discount: l,
            className: a,
            hideStrikethroughPrice: c = !1,
            discountIconDisplayMode: o,
            discountIconSize: d = "md",
        } = e,
        u = (0, _.WD)(n, { hasShopDiscount: i, discount: l });
    if (null == u) return null;
    let { defaultPrice: m, showDefaultPriceOnly: p } = u;
    if (p)
        return (0, s.jsx)("div", {
            className: M()(ny.kG, a),
            children: (0, s.jsx)(nj.x, { priceAmount: m.amount, priceCurrency: m.currency }),
        });
    let { showDiscountPrice: E, originalPrice: f, finalPrice: g } = u,
        h = E && null != o ? { displayMode: o, source: r ?? _.D0.NITRO, size: d } : void 0;
    return null != t
        ? (0, s.jsxs)("div", {
              className: M()(ny.kG, a),
              children: [
                  (0, s.jsx)(nA.a, { price: g, className: ny.q9 }),
                  (0, s.jsx)(nj.x, {
                      priceAmount: t.amount,
                      priceCurrency: t.currency,
                      className: ny.q9,
                      discountIconConfig: h,
                  }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: M()(ny.kG, a),
              children: [
                  c ? null : (0, s.jsx)(nA.a, { price: f, className: ny.q9 }),
                  (0, s.jsx)(nj.x, {
                      priceAmount: g.amount,
                      priceCurrency: g.currency,
                      discount: l,
                      className: ny.q9,
                      discountIconConfig: h,
                  }),
              ],
          });
}
var nC = t(403581),
    n_ = t(181170),
    nT = t(778705),
    nk = t(843625);
function nO(e) {
    let { text: n, onTrackClick: t } = e,
        { analyticsLocations: i } = (0, f.Ay)(),
        l = r.useRef(null);
    return (0, s.jsx)(U.D, {
        className: nk.F,
        innerRef: l,
        onClick: () => {
            (t?.(J.sH.SUBSCRIBE_NOW),
                (0, nT.A)({ subscriptionTier: eV.pe.TIER_2, analyticsLocations: i, returnRef: l }));
        },
        children: n,
    });
}
var nL = t(329986);
function nP(e) {
    let { product: n, onTrackClick: t } = e,
        i = (0, n_.vF)(n.skuId, "collectibles_shop_nitro_price_upsell"),
        r = (0, _.yt)(n, O.lid.PREMIUM_TIER_2);
    if (null == r) return null;
    let l = (0, n_.f3)({ storefrontPrices: i, premiumPrice: r }) ?? r,
        a = (0, nd.RS)(l.amount, l.currency);
    return (0, s.jsxs)("div", {
        className: nL.k,
        children: [
            (0, s.jsx)(ne.m, {
                text: q.intl.string(q.t.MPFyJ5),
                "aria-label": q.intl.string(q.t.X3Ekj8),
                children: (0, s.jsx)(nC.NitroWheelIcon, { size: "md", color: "currentColor", className: nL.o }),
            }),
            (0, s.jsx)(G.E, {
                variant: "body-xs/medium",
                children: q.intl.format(q.t.Sv8iic, {
                    price: a,
                    subscribeNowHook: (e) => (0, s.jsx)(nO, { text: e, onTrackClick: t }),
                }),
            }),
        ],
    });
}
var nb = t(818348),
    nS = t(426919);
function nD(e) {
    let { orbPrice: n, isProductDisabled: t, hasSufficientOrbs: i, discount: r } = e,
        l = t ? q.intl.string(q.t.wu4gyV) : q.intl.string(q.t.eFNRzU),
        a = t || !i;
    return (0, s.jsxs)("div", {
        className: nS.eg,
        children: [
            (0, s.jsx)("div", {
                className: nS.zR,
                children: (0, s.jsx)(G.E, { variant: "body-xs/normal", className: a ? nS.r9 : void 0, children: l }),
            }),
            (0, s.jsx)(nj.x, {
                priceAmount: n.amount,
                priceCurrency: n.currency,
                discount: r,
                className: a ? nS.r9 : void 0,
            }),
        ],
    });
}
function nw(e) {
    let {
        prices: n,
        formerPrices: t,
        hasShopDiscount: i,
        discountSource: r,
        discount: l,
        product: a,
        hasSufficientOrbs: c,
        onTrackClick: o,
        isProductDisabled: d,
    } = e;
    return 0 === n.length
        ? null
        : n[0].currency === nb.Yr.DISCORD_ORB
          ? (0, s.jsx)(nD, { orbPrice: n[0], isProductDisabled: d, hasSufficientOrbs: c, discount: l })
          : (0, s.jsxs)("div", {
                className: nS.eg,
                children: [
                    (0, s.jsxs)("div", {
                        className: nS.pw,
                        children: [
                            (0, s.jsx)(nR, {
                                product: a,
                                promoPrice: null != t[0] ? n[0] : null,
                                discount: l,
                                hasShopDiscount: i,
                                discountSource: r,
                                hideStrikethroughPrice: !i,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            i ? null : (0, s.jsx)(nP, { product: a, onTrackClick: o }),
                        ],
                    }),
                    n.length > 1 &&
                        n[1].currency === nb.Yr.DISCORD_ORB &&
                        (0, s.jsx)(nj.x, {
                            priceAmount: n[1].amount,
                            priceCurrency: n[1].currency,
                            className: d || !c ? nS.r9 : void 0,
                        }),
                ],
            });
}
var nF = t(347722),
    nB = t(57020),
    nM = t(61750),
    nG = t(773669),
    nU = t(478168),
    nH = t(497901),
    nz = t(651365),
    nV = t(614050),
    nW = t(324157),
    nX = t(808598),
    nq = t(248180),
    nY = t(669470),
    n$ = t(22007),
    nK = t(543080);
let nZ = (e) => {
    let { label: n, countdown: t, style: i, Icon: r = e7.TagIcon } = e;
    return (0, s.jsxs)("div", {
        className: M()(nK.lo, { [nK.x]: i === e3.t.BLUE }),
        children: [
            (0, s.jsxs)("div", {
                className: nK.fZ,
                children: [
                    null != r && (0, s.jsx)(r, { size: "xs", color: "currentColor", className: nK.CE }),
                    (0, s.jsx)(G.E, { variant: "body-xs/semibold", color: "none", children: n }),
                ],
            }),
            null != t && (0, s.jsx)(G.E, { variant: "footnote/medium", color: "none", className: nK.qy, children: t }),
        ],
    });
};
function nJ(e) {
    var n;
    let t,
        i,
        {
            user: l,
            productRecord: a,
            selectedProduct: c,
            category: o,
            tab: u,
            giftRecipient: m,
            giftingOrigin: p,
            analyticsLocations: E,
            returnRef: f,
            onClose: g,
            onTrackClick: h,
        } = e,
        { cardId: x, sessionId: v, tilePosition: N } = (0, R.uM)() ?? {},
        A = (0, nc.L)(eV.PremiumTypes.TIER_2),
        j = (0, _.xM)(l),
        C = eP.Ay.canUseShopDiscounts(l),
        T = (0, V.g)(c),
        k = (0, np.K)(c),
        L = (0, e8.fP)(T),
        P = (0, nm.h)(a),
        { isPurchased: b, isPartiallyOwnedBundle: S } = (0, nm.h)(c),
        { isDisabled: D } = (0, eE.I)(c.skuId),
        w = (0, _.Zu)({ product: c, isPartiallyOwnedBundle: S, isPurchased: b }),
        F = (0, d.bG)([nu.A], () => nu.A.isClaiming === c?.skuId),
        B = (0, nr.Ay)(),
        U = (0, e9.M)(B),
        H = (0, _.G0)(c),
        z = (0, _.yt)(c, O.lid.DEFAULT),
        Y = z?.amount === 0,
        $ = (0, nF.X)(c),
        K = L ? J.Hi.FIAT : void 0,
        {
            checkoutEligiblePrices: Z,
            checkoutEligibleFormerPrices: Q,
            hasSufficientOrbs: ee,
        } = (0, nB.F)({ product: c, hasShopDiscount: C, prioritizedCurrency: K }),
        en =
            ((n = c.skuId),
            (t = (0, nH.A)(T?.endsAt)),
            (i = (0, nU.w)(T, n)),
            (function (e) {
                let { promotion: n, daysRemaining: t, sequencedOfferValues: i = null } = e;
                if (null == n) return null;
                let s = null != t && t > 0 ? q.intl.formatToPlainString(q.t.w4GEvw, { days: t }) : null;
                switch (n.tenantMetadata?.collectibles?.type) {
                    case X.hE.COLLECTION_SALE:
                        let r, l;
                        return (
                            (r = (0, nq.G)(n)),
                            (l = n.displayName),
                            null == r || null == l
                                ? null
                                : {
                                      label: q.intl.formatToPlainString(q.t.nebE6s, {
                                          promotionName: l,
                                          percentage: r,
                                      }),
                                      countdown: s,
                                  }
                        );
                    case X.hE.COLLECT_AND_CLAIM:
                        let a;
                        if (n.rewardStatus !== W.GM.IN_PROGRESS) return null;
                        return null == (a = n.progress)
                            ? null
                            : {
                                  label: q.intl.formatToPlainString(q.t["8XhAe3"], {
                                      current: a.current,
                                      target: a.target,
                                  }),
                                  countdown: s,
                              };
                    case X.hE.COLLECTION_SEQUENCED_OFFER:
                        return null != i
                            ? (function (e, n) {
                                  let { orbsBack: t, locale: i, isPurchased: s, now: r } = n,
                                      l = e.tenantMetadata?.collectibles?.blocks?.[nz.D.PDP_PRICING_TAG];
                                  if (null == l || s || !(0, nY.IT)(e)) return null;
                                  let a = (function (e) {
                                      let { block: n, promotion: t, locale: i, orbsBack: s, now: r = Date.now() } = e;
                                      if (null != t.endsAt && t.endsAt.getTime() <= r) return null;
                                      let l = t.tenantMetadata?.collectibles,
                                          a = (0, nW.FV)(n.label, {
                                              locale: i,
                                              endsAt: t.endsAt,
                                              redemptionEndsAt: t.redemptionEndsAt,
                                              promotionDisplayName: t.displayName,
                                              position: l?.type === X.hE.COLLECTION_SEQUENCED_OFFER ? l.position : null,
                                              discountPercent: (0, nq.G)(t),
                                              orbsBack: s,
                                          });
                                      return null == a
                                          ? null
                                          : {
                                                label: a,
                                                countdown: (function (e, n, t) {
                                                    switch (e) {
                                                        case nV.c.HOURS: {
                                                            let e = (0, nX.p)(n, t);
                                                            return null != e
                                                                ? q.intl.formatToPlainString(q.t["anAI9+"], {
                                                                      hours: e,
                                                                  })
                                                                : null;
                                                        }
                                                        case nV.c.DAYS: {
                                                            let e = (0, nX.X)(n, t);
                                                            return null != e
                                                                ? q.intl.formatToPlainString(q.t.w4GEvw, { days: e })
                                                                : null;
                                                        }
                                                        case nV.c.NONE:
                                                        default:
                                                            return null;
                                                    }
                                                })(n.countdownUnit, t.endsAt, new Date(r)),
                                            };
                                  })({ block: l, promotion: e, locale: i, orbsBack: t, now: r });
                                  return null == a
                                      ? null
                                      : {
                                            label: a.label,
                                            countdown: a.countdown,
                                            style: l.style,
                                            Icon: (0, n$.s)(l.icon),
                                        };
                              })(n, i)
                            : null;
                    case X.hE.TARGETED_OFFER:
                    default:
                        return null;
                }
            })({
                promotion: T,
                daysRemaining: t,
                sequencedOfferValues: {
                    orbsBack: i,
                    locale: (0, eq.bG)([nG.default], () => nG.default.locale),
                    isPurchased: b,
                },
            })),
        et = r.useMemo(() => (0, _.fT)(c, C, Z[0]?.currency), [c, C, Z]),
        ei = r.useMemo(() => Z.some((e) => e.currency === nb.Yr.DISCORD_ORB), [Z]);
    (0, no.W0)({ disableFetch: !ei });
    let es = r.useCallback(() => {
        (h(J.sH.BUY_WITH_FIAT),
            (0, nl.A)({
                skuId: c.skuId,
                analyticsLocations: E,
                discoverySessionId: v,
                onClose: (e) => (e ? g() : (0, nb.tE)()),
            }));
    }, [E, g, c.skuId, h, v]);
    return (0, s.jsxs)("div", {
        className: nK.iw,
        children: [
            P.isPurchased || P.isPartiallyOwnedBundle
                ? (0, s.jsx)(ng, { className: nK.On, isPartiallyPurchased: S })
                : H
                  ? (0, s.jsxs)("div", {
                        className: nK.pq,
                        children: [
                            (0, s.jsx)(G.E, { variant: "body-md/semibold", children: q.intl.string(q.t.rt69oo) }),
                            !b &&
                                (0, s.jsx)(G.E, {
                                    className: M()(nK.ed, !U && nK.un),
                                    variant: "footnote/normal",
                                    children: q.intl.string(q.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, s.jsx)(nw, {
                        prices: Z,
                        formerPrices: Q,
                        product: c,
                        hasShopDiscount: C,
                        discountSource: j,
                        discount: et,
                        hasSufficientOrbs: ee,
                        isProductDisabled: D,
                        onTrackClick: h,
                    }),
            null != en && (0, s.jsx)(nZ, { ...en }),
            (0, s.jsx)(ns.B, {
                direction: "vertical",
                gap: 8,
                children: (function () {
                    if (H && !A && !Y) {
                        var e;
                        return (
                            (e = q.intl.string(q.t.sEAnVH)),
                            (0, s.jsx)(na.A, {
                                subscriptionTier: eV.pe.TIER_2,
                                fullWidth: !0,
                                buttonTextOverride: e,
                                onClick: () => {
                                    (h(J.sH.UNLOCK_WITH_NITRO), (0, nx.M)());
                                },
                                onSubscribeModalClose: () => {
                                    (0, nx.t)({
                                        product: a,
                                        category: o,
                                        returnRef: f,
                                        analyticsLocations: E,
                                        tab: u,
                                        giftRecipient: m,
                                        giftingOrigin: p,
                                        cardId: x,
                                        sessionId: v,
                                        tilePosition: N,
                                    });
                                },
                            })
                        );
                    }
                    return w
                        ? b
                            ? $
                                ? (0, s.jsxs)(ni.e, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, s.jsx)(nI, { product: c, onSuccess: g, onTrackClick: h }),
                                          (0, s.jsx)(nh.A, {
                                              primary: !0,
                                              product: c,
                                              onSuccess: g,
                                              giftRecipient: m,
                                              giftingOrigin: p,
                                              onTrackClick: h,
                                          }),
                                      ],
                                  })
                                : (0, s.jsx)(nI, { product: c, onSuccess: g, onTrackClick: h })
                            : H
                              ? (0, s.jsx)(nn.$, {
                                    loading: F,
                                    loadingStartedLabel: q.intl.string(q.t["TYw+9s"]),
                                    loadingFinishedLabel: q.intl.string(q.t.Pg1UP5),
                                    onClick: async () => {
                                        (h(J.sH.ADD_TO_COLLECTION),
                                            await (0, y.iJ)(c.skuId),
                                            g(),
                                            (0, nM.A)({
                                                product: c,
                                                analyticsLocations: E,
                                                purchaseType: J.gs.PREMIUM_PURCHASE,
                                            }));
                                    },
                                    text: q.intl.string(q.t.zp6caO),
                                    fullWidth: !0,
                                })
                              : (0, s.jsx)(s.Fragment, {
                                    children: Z.map((e, n) => {
                                        let t,
                                            i,
                                            l,
                                            a,
                                            o,
                                            d = 0 === n,
                                            u =
                                                e.currency === nb.Yr.DISCORD_ORB
                                                    ? ((t = D ? q.intl.string(q.t.cTdr3x) : q.intl.string(q.t.zqh7ZM)),
                                                      (i = !ee || D),
                                                      (l = q.intl.formatToPlainString(q.t.yi41qQ, {
                                                          orbPrice: e.amount,
                                                      })),
                                                      (a = i ? `${l}, ${t}` : l),
                                                      (0, s.jsx)(ne.m, {
                                                          position: "top",
                                                          text: t,
                                                          shouldShow: i,
                                                          "aria-label": !1,
                                                          children: (0, s.jsx)(nn.$, {
                                                              variant: d ? "primary" : "secondary",
                                                              onClick: function () {
                                                                  (h(J.sH.BUY_WITH_ORBS),
                                                                      (0, I.B4)({
                                                                          skuId: c.skuId,
                                                                          onComplete: (e) => {
                                                                              ((0, y.gB)(),
                                                                                  g(),
                                                                                  (0, nM.A)({
                                                                                      product: c,
                                                                                      analyticsLocations: E,
                                                                                      itemConsumed:
                                                                                          e?.entitlements?.[0]
                                                                                              ?.consumed,
                                                                                      purchaseType: J.gs.ORB,
                                                                                  }));
                                                                          },
                                                                          analyticsLocations: E,
                                                                          discoverySessionId: v,
                                                                      }));
                                                              },
                                                              disabled: i,
                                                              "aria-label": a,
                                                              text: q.intl.format(q.t.JC15qj, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, s.jsx)(nt.OrbsIcon, {
                                                                          className: nK.fN,
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                              }),
                                                              fullWidth: !0,
                                                          }),
                                                      }))
                                                    : ((o =
                                                          k ??
                                                          q.intl.formatToPlainString(q.t["cNSL/j"], {
                                                              price: (0, nd.$g)(e.amount, e.currency),
                                                          })),
                                                      (0, s.jsxs)(ni.e, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, s.jsx)(nn.$, {
                                                                  variant: d ? "primary" : "secondary",
                                                                  onClick: es,
                                                                  text: o,
                                                                  fullWidth: !0,
                                                              }),
                                                              $ &&
                                                                  (0, s.jsx)(nh.A, {
                                                                      primary: d,
                                                                      product: c,
                                                                      onSuccess: g,
                                                                      giftRecipient: m,
                                                                      giftingOrigin: p,
                                                                      onTrackClick: h,
                                                                  }),
                                                          ],
                                                      }));
                                        return (0, s.jsx)(r.Fragment, { children: u }, e.currency);
                                    }),
                                })
                        : $
                          ? (0, s.jsx)(nh.A, {
                                primary: !0,
                                product: c,
                                onSuccess: g,
                                fullWidth: !0,
                                giftRecipient: m,
                                giftingOrigin: p,
                                onTrackClick: h,
                            })
                          : null;
                })(),
            }),
        ],
    });
}
var nQ = t(634656);
function n0(e) {
    let { leftPanelFooter: n, ...t } = e,
        {
            productRecord: i,
            selectedProduct: r,
            previewingProduct: l,
            user: a,
            selectedBundleSlide: c,
            pendingProfile: o,
        } = t,
        d = e0(i);
    return (0, s.jsxs)("div", {
        className: M()(nQ.wd, { [nQ.E7]: null != d.LeftPreview }),
        children: [
            (0, s.jsx)("div", {
                className: nQ.dL,
                children: (0, s.jsx)(e5, { productRecord: i, selectedProduct: r, selectedBundleSlide: c }),
            }),
            null != d.LeftPreview &&
                (0, s.jsx)("div", {
                    className: nQ._E,
                    children: (0, s.jsx)(d.LeftPreview, {
                        user: a,
                        selectedProduct: r,
                        previewingProduct: l,
                        productRecord: i,
                        selectedBundleSlide: c,
                        pendingProfile: o,
                    }),
                }),
            (0, s.jsx)("div", { className: nQ.F_, children: (0, s.jsx)(d.Info, { ...t }) }),
            (0, s.jsx)(nJ, { ...t }),
            n,
        ],
    });
}
var n1 = t(529756),
    n8 = t(408278),
    n6 = t(972213),
    n2 = t(60831),
    n4 = t(301198),
    n5 = t(60465),
    n3 = t(976860),
    n9 = t(38145),
    n7 = t(365491),
    te = t(668953),
    tn = t(881636),
    tt = t(807562);
function ti(e) {
    let { goPrev: n, goNext: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: tt.Y,
                children: (0, s.jsx)(n8.K, {
                    "aria-label": q.intl.string(q.t["3NdvMK"]),
                    onClick: n,
                    icon: te.ChevronLargeLeftIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, s.jsx)("div", {
                className: tt.K,
                children: (0, s.jsx)(n8.K, {
                    "aria-label": q.intl.string(q.t.RYIeOX),
                    onClick: t,
                    icon: tn.ChevronLargeRightIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var ts = t(48062);
function tr(e) {
    let {
            user: n,
            pendingProfile: t,
            productRecord: i,
            previewingProduct: l,
            selectedProduct: a,
            selectedVariantIndex: c,
            selectedBundleSlide: o,
            setSelectedBundleSlide: d,
            isClosing: u,
            isOrbCheckoutModalOpen: m,
            pdpBackground: p,
            category: E,
            tab: f,
            onClose: g,
            onTrackClick: h,
        } = e,
        x = e0(i),
        v = (0, _.aw)(a),
        N = v ? a.items.length : 0,
        I = (function () {
            let { sessionId: e } = (0, R.uM)() ?? {},
                n = (0, n7.vs)((e) => e.reset);
            return r.useCallback(
                (t, i) => {
                    if (
                        (j.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: e,
                            sku_id: t.skuId,
                            cta_name: i,
                        }),
                        (0, n9.M)(),
                        (0, n5.p)(),
                        !0 !== t.isOrbsExclusive)
                    )
                        return void (0, n3.pX)(O.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
                    n();
                    let s = O.BVt.COLLECTIBLES_SHOP_WITH_TAB(J.G2.ORBS);
                    (0, n3.pX)(`${s}&${J.P1}=${t.skuId}`);
                },
                [e, n],
            );
        })(),
        A = r.useCallback(() => {
            (h(J.sH.GO_TO_COLLECTION), g(), I(E, "go_to_collection_button"));
        }, [E, g, h, I]),
        y = r.useCallback(() => {
            N <= 1 || d((e) => (e - 1 + N) % N);
        }, [N, d]),
        C = r.useCallback(() => {
            N <= 1 || d((e) => (e + 1) % N);
        }, [N, d]),
        T = r.useCallback(
            (e) => {
                if (N <= 1) return;
                let n = e.target;
                "INPUT" === n.tagName ||
                    "TEXTAREA" === n.tagName ||
                    n.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), y())
                        : "ArrowRight" === e.key && (e.preventDefault(), C()));
            },
            [N, y, C],
        ),
        k = r.useCallback(() => {
            (h(J.sH.CLOSE_DETAIL), g());
        }, [h, g]),
        L = r.useRef(null),
        b = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (b.current) {
                b.current = !1;
                return;
            }
            let e = L.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [o]),
        (0, s.jsxs)("div", {
            className: M()(ts.i1, (0, J.EZ)(a.skuId) ? ts.bF : a.type === S.R.AVATAR_DECORATION ? ts.Jq : ts.eF),
            style: null != p ? { backgroundImage: `url(${p})` } : void 0,
            onKeyDown: T,
            children: [
                (0, s.jsx)("div", {
                    className: ts.GV,
                    children: (0, s.jsx)(ne.m, {
                        text: q.intl.string(q.t["Hr/q/6"]),
                        children: (0, s.jsx)(nn.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: n1.CollectionIcon,
                            text: E.name,
                            onClick: A,
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: ts.KR,
                    ref: L,
                    children: (0, s.jsx)(x.RightPreview, {
                        user: n,
                        pendingProfile: t,
                        productRecord: i,
                        selectedProduct: a,
                        previewingProduct: l,
                        selectedBundleSlide: o,
                        isClosing: u,
                        isOrbCheckoutModalOpen: m,
                    }),
                }),
                v && N > 1 && (0, s.jsx)(ti, { goPrev: y, goNext: C }),
                (0, s.jsxs)("div", {
                    className: ts.VG,
                    children: [
                        (0, s.jsx)(n4.R, {
                            product: i,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(n2.H, {
                            skuId: a.skuId,
                            product: a,
                            productName: (0, P.VG)(a),
                            tab: f,
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(n8.K, {
                            "aria-label": q.intl.string(q.t.cpT0Cq),
                            onClick: k,
                            icon: n6.XLargeIcon,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var tl = t(80801);
let ta = (0, u.FT)(u._3.SIZE_152),
    tc = function (e) {
        let {
                transitionState: n,
                onClose: t,
                product: i,
                category: l,
                returnRef: u,
                analyticsSource: S,
                analyticsLocations: B,
                tab: M,
                giftRecipient: G,
                giftingOrigin: U,
                leftPanelFooter: H,
                footer: z,
            } = e,
            V = (0, d.bG)([A.default], () => A.default.getCurrentUser()),
            W = (0, d.cf)([v.A], () => v.A.getPendingChanges()),
            X = (0, F.f)(i),
            { previewingVariantIndex: q } = X,
            Y = (0, C.Q)(i),
            $ = D(i, q),
            K = (0, L.rb)(i, Y);
        a()(null != K, "Selected product should not be null");
        let { analyticsLocations: Z } = (0, f.Ay)([...B, E.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, b.Yr)(K.skuId);
        let J = (0, w.U1)(l),
            [Q, ee] = r.useState(0);
        r.useEffect(() => {
            null != V && (0, N.A)(V.id, V.getAvatarURL(void 0, 80));
        }, [V]);
        let en = r.useMemo(() => (0, _.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            (j.default.track(O.HAw.OPEN_MODAL, {
                type: O.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: S,
                location_stack: Z,
                sku_id: K.skuId,
                product_type: en,
            }),
                (0, y.RD)(K.skuId));
        }, [S, Z, K.skuId, en]);
        let { cardId: et, sessionId: ei, tilePosition: es } = (0, R.uM)() ?? {},
            er = r.useMemo(() => (0, L.v8)(i), [i]),
            el = (function (e) {
                let { skuId: n, productSkuIds: t, analyticsLocations: i } = e,
                    { cardId: s, sessionId: l } = (0, R.uM)() ?? {},
                    a = (0, k.o)(),
                    c = (0, _.xM)(a);
                return r.useCallback(
                    (e, r) => {
                        j.default.track(O.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: r ?? n,
                            cta: e,
                            shop_session_id: l,
                            card_id: s,
                            product_sku_ids: t,
                            location_stack: i,
                            discount_source: (0, _.b_)(c),
                        });
                    },
                    [n, i, s, t, l, c],
                );
            })({ skuId: K.skuId, productSkuIds: er, analyticsLocations: Z });
        (0, g.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: K.skuId,
                card_id: et,
                shop_session_id: ei,
                position_in_section: es,
                product_sku_ids: er,
                location_stack: Z,
            },
        });
        let ea = (0, I.o6)(),
            ec = n === m.ip.EXITING,
            eo = (0, T.c)("product_details_modal");
        if (null == V || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !eo)) return null;
        let ed = {
                pendingChanges: W,
                pendingAvatarSrc:
                    void 0 !== W.pendingAvatar
                        ? (0, h.sv)((0, x.V7)({ userId: V.id, image: W.pendingAvatar, size: ta }), null, V, {
                              size: ta,
                          })
                        : void 0,
            },
            eu = (0, P.VG)(i),
            em = {
                user: V,
                pendingProfile: ed,
                productRecord: i,
                productName: eu,
                selectedProduct: K,
                previewingProduct: $ ?? null,
                category: l,
                selectedVariantIndex: Y,
                previewingVariantIndexProps: X,
                selectedBundleSlide: Q,
                setSelectedBundleSlide: ee,
                tab: M,
                giftRecipient: G?.id !== V.id ? G : void 0,
                giftingOrigin: G?.id !== V.id ? U : void 0,
                analyticsLocations: Z,
                returnRef: u,
                onClose: t,
                onTrackClick: el,
            };
        return (0, s.jsx)(f.f5, {
            value: Z,
            children: (0, s.jsx)(p.d, {
                returnRef: u,
                transitionState: n,
                onClose: t,
                size: "xl",
                paddingSize: "sm",
                "aria-label": eu,
                children: (0, s.jsxs)("div", {
                    className: tl.C,
                    "data-testid": "collectibles-shop-product-details-modal",
                    "data-has-footer": null != z,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tl.j,
                            children: [
                                (0, s.jsx)(n0, { ...em, leftPanelFooter: H }),
                                (0, s.jsx)(tr, { ...em, isClosing: ec, isOrbCheckoutModalOpen: ea, pdpBackground: J }),
                            ],
                        }),
                        z,
                    ],
                }),
            }),
        });
    };
