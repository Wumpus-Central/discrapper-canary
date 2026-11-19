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
    f = t(793574),
    E = t(688810),
    g = t(139286),
    h = t(468450),
    x = t(101058),
    v = t(836602),
    I = t(917445),
    N = t(652165),
    A = t(287809),
    j = t(129230),
    y = t(969935),
    k = t(857512),
    R = t(298072),
    C = t(993408),
    _ = t(503089),
    T = t(331884),
    O = t(652215),
    L = t(623373),
    b = t(536572),
    P = t(177366),
    S = t(575593);
function D(e, n) {
    return e.type === S.R.VARIANTS_GROUP ? (null != n ? e.variants?.[n] : void 0) : e;
}
var w = t(212407),
    B = t(935094),
    F = t(503698),
    M = t.n(F),
    G = t(834730),
    U = t(939249),
    H = t(534514),
    z = t(14702),
    V = t(818296),
    W = t(288106),
    X = t(604913);
t(321073);
var q = t(792996);
function $(e) {
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
var Y = t(306396);
function K(e) {
    return (0, C.aw)(e)
        ? q.intl.formatToPlainString(q.t["1tUCAO"], { count: e.items.length })
        : (function (e) {
              let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (null != e && null != e.summary && "" !== e.summary) {
                  if (e.type === S.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                      let t = $(e, n);
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
                      return $(e, n);
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
                if ((0, C.aw)(e))
                    return q.intl.formatToPlainString(q.t["vI+3Ok"], {
                        itemCount: (0, Y.oO)(e, n.tenantMetadata.collectibles.collectionId),
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
              isBundle: (0, C.aw)(a),
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
    ef = t(740076),
    eE = t(784054),
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
        { disabledReason: m } = (0, ef.I)(i.skuId),
        p = (0, R.Q)(n),
        f = (0, L.B1)(n),
        E = f ? n.variants[a ?? p] : null,
        g = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            null != g.current && ((g.current.tabIndex = -1), g.current.focus());
        }, [n.skuId]),
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
                f &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != E &&
                                (0, s.jsx)(G.E, {
                                    variant: "body-xs/medium",
                                    color: "text-subtle",
                                    className: eg.a9,
                                    lineClamp: 1,
                                    children: q.intl.format(q.t.EcaRWt, {
                                        value: (0, s.jsx)("span", { className: eg.I8, children: E.variantLabel }),
                                    }),
                                }),
                            (0, s.jsx)("div", {
                                className: eg._x,
                                children: (0, s.jsx)(eE.A, {
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
    eI = t(97808),
    eN = t(346055),
    eA = t(993077),
    ej = t(245604),
    ey = t(460905),
    ek = t(262295),
    eR = t(685073),
    eC = t(432005),
    e_ = t(963852),
    eT = t(763754),
    eO = t(20851),
    eL = t(641318),
    eb = t(448645),
    eP = t(780898),
    eS = t(158008);
function eD(e) {
    let { user: n, innerClassName: t } = e;
    return (0, s.jsx)("div", {
        className: eS.mV,
        children: (0, s.jsx)(ek.A, {
            avatar: (0, s.jsx)(eI.eu, {
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
        a = (0, eP.Ov)();
    return (0, s.jsx)("div", {
        className: eS.nJ,
        role: "img",
        "aria-label": q.intl.formatToPlainString(q.t["95pCSf"], { a11y_text: t.label }),
        children: (0, s.jsxs)(eN.M, {
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
function eB(e) {
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
            return (0, eC.rh)({
                ...(0, e_.Ay)({ author: n, channelId: "1337", content: q.intl.string(q.t.d5YwK5) }),
                state: O.cmJ.SENT,
                id: "0",
            });
        })({ author: n }),
        o = (0, eR.gS)(r),
        d = (0, eT.p_)(c),
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
        children: (0, s.jsx)(eN.M, {
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
function eF(e) {
    let { product: n, user: t, pendingProfile: i, activeBundleSlide: r } = e,
        l = eb.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: a, ...c } = i.pendingChanges,
        o = i.pendingAvatarSrc,
        d = n.type === S.R.BUNDLE ? n.items[r ?? 0] : void 0,
        u = d?.type ?? n.type,
        m = u === S.R.AVATAR_DECORATION,
        p = u === S.R.PROFILE_EFFECT || u === S.R.PROFILE_FRAME,
        { firstAvatarDecoration: f, firstProfileEffect: E, firstNameplate: g, firstProfileFrame: h } = (0, ei.f5)(n),
        x = d?.type === S.R.AVATAR_DECORATION ? d : f,
        v = d?.type === S.R.PROFILE_EFFECT ? d : E,
        I = d?.type === S.R.PROFILE_FRAME ? d : h,
        N = d?.type === S.R.NAMEPLATE ? d : g;
    if (u === S.R.NAMEPLATE && null != N)
        return (0, s.jsx)("div", {
            className: eS.Zj,
            children: (0, s.jsx)(ew, {
                user: t,
                nameplate: N,
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
                    pendingProfileFrame: I ?? c.pendingProfileFrame,
                    disabledInputs: !0,
                    hideMessageInput: !p,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? eS.oB : void 0,
                }),
                m &&
                    (0, s.jsx)(eB, {
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
    return (0, s.jsx)(eF, { user: n, pendingProfile: t, product: r ?? i, activeBundleSlide: l });
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
                maxFileSize: (0, eb.EJ)(eV.PremiumTypes.TIER_2, { useSpace: !1 }),
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
    e$ = t(132198),
    eY = t(35929);
function eK(e) {
    let { user: n } = e,
        t = eb.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: i, ...r } = (0, eq.cf)([v.A], () => v.A.getPendingChanges()),
        l = (0, x.V7)({ userId: n.id, image: i });
    return (0, s.jsx)("div", {
        className: eY.k,
        children: (0, s.jsx)(eL.A, {
            ...r,
            pendingAvatar: l,
            user: n,
            pendingBadges: [(0, e$._)()],
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
                m = null != u ? (0, C.Dm)(u) : null,
                p = q.intl.string(q.t.cTbdgu),
                f = Z(n),
                E = r.useRef(null),
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
                let e = E.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let n = e.querySelectorAll('[role="radio"]');
                n[i]?.focus();
            }, [i]);
            let h = r.useRef(null);
            return (
                r.useLayoutEffect(() => {
                    null != h.current && ((h.current.tabIndex = -1), h.current.focus());
                }, [n.skuId]),
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
                        (0, s.jsx)(G.E, { variant: "body-sm/medium", color: "text-default", children: f }),
                        (0, s.jsxs)("div", {
                            className: Q.hZ,
                            children: [
                                (0, s.jsx)("div", {
                                    className: Q.vg,
                                    children: (0, s.jsx)("div", {
                                        ref: E,
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
            : (0, C.aw)(n)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var e1 = t(347478),
    e8 = t(664749),
    e2 = t(470085),
    e6 = t(325802),
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
                ? (0, s.jsx)(e2.s, {})
                : (0, s.jsx)(e2.A, { skuId: t.skuId, prioritizedCurrency: c })),
        (0, s.jsxs)("div", { className: e4.N, children: [n, null != l && a && (0, s.jsx)(e6.A, { promotion: l })] })
    );
}
var e3 = t(462887),
    e9 = t(866665),
    e7 = t(821609),
    ne = t(318254),
    nn = t(825484),
    nt = t(331322),
    ni = t(736653),
    ns = t(44120),
    nr = t(465794),
    nl = t(757036),
    na = t(672619),
    nc = t(580630),
    no = t(4227),
    nd = t(466459),
    nu = t(314458),
    nm = t(885574),
    np = t(495900);
function nf(e) {
    let { className: n, isPartiallyPurchased: t } = e;
    return t
        ? (0, s.jsx)(e9.m, {
              position: "top",
              align: "left",
              text: q.intl.string(q.t.y1VWkZ),
              children: (0, s.jsxs)("div", {
                  className: M()(np.GX, n),
                  children: [
                      (0, s.jsx)("span", {
                          className: np.P0,
                          children: (0, s.jsx)(nm.CircleInformationIcon, {
                              size: "md",
                              color: "currentColor",
                              className: np.G,
                          }),
                      }),
                      (0, s.jsx)(G.E, { variant: "body-md/semibold", children: q.intl.string(q.t.BEjTij) }),
                  ],
              }),
          })
        : (0, s.jsx)(G.E, { variant: "body-md/semibold", className: n, children: q.intl.string(q.t["6cfuDj"]) });
}
var nE = t(878112),
    ng = t(572595),
    nh = t(722258),
    nx = t(206835),
    nv = t(450481);
let nI = function (e) {
    let { product: n, onSuccess: t, onTrackClick: i } = e,
        { handleUseNow: r, isApplying: l, canUseNow: a } = (0, nv.p)({ product: n, onSuccess: t }),
        c = (0, nx.A)();
    return a
        ? (0, s.jsx)(e7.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(J.sH.USE_NOW), r());
              },
              loading: l,
              text: q.intl.string(q.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, s.jsx)(e7.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(J.sH.EDIT_PROFILE), c(), t?.());
              },
              text: q.intl.string(q.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var nN = t(506742),
    nA = t(219103),
    nj = t(282968);
function ny(e) {
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
        u = (0, C.WD)(n, { hasShopDiscount: i, discount: l });
    if (null == u) return null;
    let { defaultPrice: m, showDefaultPriceOnly: p } = u;
    if (p)
        return (0, s.jsx)("div", {
            className: M()(nj.kG, a),
            children: (0, s.jsx)(nA.x, { priceAmount: m.amount, priceCurrency: m.currency }),
        });
    let { showDiscountPrice: f, originalPrice: E, finalPrice: g } = u,
        h = f && null != o ? { displayMode: o, source: r ?? C.D0.NITRO, size: d } : void 0;
    return null != t
        ? (0, s.jsxs)("div", {
              className: M()(nj.kG, a),
              children: [
                  (0, s.jsx)(nN.a, { price: g, className: nj.q9 }),
                  (0, s.jsx)(nA.x, {
                      priceAmount: t.amount,
                      priceCurrency: t.currency,
                      className: nj.q9,
                      discountIconConfig: h,
                  }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: M()(nj.kG, a),
              children: [
                  c ? null : (0, s.jsx)(nN.a, { price: E, className: nj.q9 }),
                  (0, s.jsx)(nA.x, {
                      priceAmount: g.amount,
                      priceCurrency: g.currency,
                      discount: l,
                      className: nj.q9,
                      discountIconConfig: h,
                  }),
              ],
          });
}
var nk = t(403581),
    nR = t(181170),
    nC = t(778705),
    n_ = t(843625);
function nT(e) {
    let { text: n, onTrackClick: t } = e,
        { analyticsLocations: i } = (0, E.Ay)(),
        l = r.useRef(null);
    return (0, s.jsx)(U.D, {
        className: n_.F,
        innerRef: l,
        onClick: () => {
            (t?.(J.sH.SUBSCRIBE_NOW),
                (0, nC.A)({ subscriptionTier: eV.pe.TIER_2, analyticsLocations: i, returnRef: l }));
        },
        children: n,
    });
}
var nO = t(329986);
function nL(e) {
    let { product: n, onTrackClick: t } = e,
        i = (0, nR.vF)(n.skuId, "collectibles_shop_nitro_price_upsell"),
        r = (0, C.yt)(n, O.lid.PREMIUM_TIER_2);
    if (null == r) return null;
    let l = (0, nR.f3)({ storefrontPrices: i, premiumPrice: r }) ?? r,
        a = (0, nc.RS)(l.amount, l.currency);
    return (0, s.jsxs)("div", {
        className: nO.k,
        children: [
            (0, s.jsx)(e9.m, {
                text: q.intl.string(q.t.MPFyJ5),
                "aria-label": q.intl.string(q.t.X3Ekj8),
                children: (0, s.jsx)(nk.NitroWheelIcon, { size: "md", color: "currentColor", className: nO.o }),
            }),
            (0, s.jsx)(G.E, {
                variant: "body-xs/medium",
                children: q.intl.format(q.t.Sv8iic, {
                    price: a,
                    subscribeNowHook: (e) => (0, s.jsx)(nT, { text: e, onTrackClick: t }),
                }),
            }),
        ],
    });
}
var nb = t(818348),
    nP = t(426919);
function nS(e) {
    let { orbPrice: n, isProductDisabled: t, hasSufficientOrbs: i, discount: r } = e,
        l = t ? q.intl.string(q.t.wu4gyV) : q.intl.string(q.t.eFNRzU),
        a = t || !i;
    return (0, s.jsxs)("div", {
        className: nP.eg,
        children: [
            (0, s.jsx)("div", {
                className: nP.zR,
                children: (0, s.jsx)(G.E, { variant: "body-xs/normal", className: a ? nP.r9 : void 0, children: l }),
            }),
            (0, s.jsx)(nA.x, {
                priceAmount: n.amount,
                priceCurrency: n.currency,
                discount: r,
                className: a ? nP.r9 : void 0,
            }),
        ],
    });
}
function nD(e) {
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
          ? (0, s.jsx)(nS, { orbPrice: n[0], isProductDisabled: d, hasSufficientOrbs: c, discount: l })
          : (0, s.jsxs)("div", {
                className: nP.eg,
                children: [
                    (0, s.jsxs)("div", {
                        className: nP.pw,
                        children: [
                            (0, s.jsx)(ny, {
                                product: a,
                                promoPrice: null != t[0] ? n[0] : null,
                                discount: l,
                                hasShopDiscount: i,
                                discountSource: r,
                                hideStrikethroughPrice: !i,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            i ? null : (0, s.jsx)(nL, { product: a, onTrackClick: o }),
                        ],
                    }),
                    n.length > 1 &&
                        n[1].currency === nb.Yr.DISCORD_ORB &&
                        (0, s.jsx)(nA.x, {
                            priceAmount: n[1].amount,
                            priceCurrency: n[1].currency,
                            className: d || !c ? nP.r9 : void 0,
                        }),
                ],
            });
}
var nw = t(347722),
    nB = t(57020),
    nF = t(61750),
    nM = t(773669),
    nG = t(478168),
    nU = t(497901),
    nH = t(651365),
    nz = t(305037),
    nV = t(248180),
    nW = t(669470),
    nX = t(22007),
    nq = t(865830),
    n$ = t(543080);
function nY(e) {
    var n;
    let t,
        i,
        {
            user: l,
            productRecord: a,
            selectedProduct: c,
            tab: o,
            giftRecipient: u,
            giftingOrigin: m,
            analyticsLocations: p,
            returnRef: f,
            onClose: E,
            onTrackClick: g,
        } = e,
        { cardId: h, sessionId: x, tilePosition: v } = (0, k.uM)() ?? {},
        I = (0, nl.L)(eV.PremiumTypes.TIER_2),
        A = (0, C.xM)(l),
        j = eb.Ay.canUseShopDiscounts(l),
        R = (0, V.g)(c),
        _ = (0, nu.K)(c),
        T = (0, e8.fP)(R),
        L = (0, nd.h)(a),
        { isPurchased: b, isPartiallyOwnedBundle: P } = (0, nd.h)(c),
        { isDisabled: S } = (0, ef.I)(c.skuId),
        D = (0, C.Zu)({ product: c, isPartiallyOwnedBundle: P, isPurchased: b }),
        w = (0, d.bG)([no.A], () => no.A.isClaiming === c?.skuId),
        B = (0, ni.Ay)(),
        F = (0, e3.M)(B),
        U = (0, C.G0)(c),
        H = (0, C.yt)(c, O.lid.DEFAULT),
        z = H?.amount === 0,
        $ = (0, nw.X)(c),
        Y = T ? J.Hi.FIAT : void 0,
        {
            checkoutEligiblePrices: K,
            checkoutEligibleFormerPrices: Z,
            hasSufficientOrbs: Q,
        } = (0, nB.F)({ product: c, hasShopDiscount: j, prioritizedCurrency: Y }),
        ee =
            ((n = c.skuId),
            (t = (0, nU.A)(R?.endsAt)),
            (i = (0, nG.w)(R, n)),
            (function (e) {
                let { promotion: n, daysRemaining: t, sequencedOfferValues: i = null } = e;
                if (null == n) return null;
                let s = null != t && t > 0 ? q.intl.formatToPlainString(q.t.w4GEvw, { days: t }) : null;
                switch (n.tenantMetadata?.collectibles?.type) {
                    case X.hE.COLLECTION_SALE:
                        let r, l;
                        return (
                            (r = (0, nV.G)(n)),
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
                                      l = e.tenantMetadata?.collectibles?.blocks?.[nH.D.PDP_PRICING_TAG];
                                  if (null == l || s || !(0, nW.IT)(e)) return null;
                                  let a = (0, nz.o)({ block: l, promotion: e, locale: i, orbsBack: t, now: r });
                                  return null == a
                                      ? null
                                      : {
                                            label: a.label,
                                            countdown: a.countdown,
                                            style: l.style,
                                            Icon: (0, nX.s)(l.icon),
                                        };
                              })(n, i)
                            : null;
                    case X.hE.TARGETED_OFFER:
                    default:
                        return null;
                }
            })({
                promotion: R,
                daysRemaining: t,
                sequencedOfferValues: {
                    orbsBack: i,
                    locale: (0, eq.bG)([nM.default], () => nM.default.locale),
                    isPurchased: b,
                },
            })),
        en = r.useMemo(() => (0, C.fT)(c, j, K[0]?.currency), [c, j, K]),
        et = r.useMemo(() => K.some((e) => e.currency === nb.Yr.DISCORD_ORB), [K]);
    (0, na.W0)({ disableFetch: !et });
    let ei = r.useCallback(() => {
        (g(J.sH.BUY_WITH_FIAT),
            (0, ns.A)({
                skuId: c.skuId,
                analyticsLocations: p,
                discoverySessionId: x,
                onClose: (e) => (e ? E() : (0, nb.tE)()),
            }));
    }, [p, E, c.skuId, g, x]);
    return (0, s.jsxs)("div", {
        className: n$.iw,
        children: [
            L.isPurchased || L.isPartiallyOwnedBundle
                ? (0, s.jsx)(nf, { className: n$.On, isPartiallyPurchased: P })
                : U
                  ? (0, s.jsxs)("div", {
                        className: n$.pq,
                        children: [
                            (0, s.jsx)(G.E, { variant: "body-md/semibold", children: q.intl.string(q.t.rt69oo) }),
                            !b &&
                                (0, s.jsx)(G.E, {
                                    className: M()(n$.ed, !F && n$.un),
                                    variant: "footnote/normal",
                                    children: q.intl.string(q.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, s.jsx)(nD, {
                        prices: K,
                        formerPrices: Z,
                        product: c,
                        hasShopDiscount: j,
                        discountSource: A,
                        discount: en,
                        hasSufficientOrbs: Q,
                        isProductDisabled: S,
                        onTrackClick: g,
                    }),
            null != ee && (0, s.jsx)(nq.Q, { ...ee }),
            (0, s.jsx)(nt.B, {
                direction: "vertical",
                gap: 8,
                children: (function () {
                    if (U && !I && !z) {
                        var e;
                        return (
                            (e = q.intl.string(q.t.sEAnVH)),
                            (0, s.jsx)(nr.A, {
                                subscriptionTier: eV.pe.TIER_2,
                                fullWidth: !0,
                                buttonTextOverride: e,
                                onClick: () => {
                                    (g(J.sH.UNLOCK_WITH_NITRO), (0, ng.M)());
                                },
                                onSubscribeModalClose: () => {
                                    (0, nh.B)({
                                        skuId: a.skuId,
                                        initialVariantSkuId: c.skuId,
                                        returnRef: f,
                                        analyticsLocations: p,
                                        tab: o,
                                        giftRecipient: u,
                                        giftingOrigin: m,
                                        cardId: h,
                                        sessionId: x,
                                        tilePosition: v,
                                    });
                                },
                            })
                        );
                    }
                    return D
                        ? b
                            ? $
                                ? (0, s.jsxs)(nn.e, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, s.jsx)(nI, { product: c, onSuccess: E, onTrackClick: g }),
                                          (0, s.jsx)(nE.A, {
                                              primary: !0,
                                              product: c,
                                              onSuccess: E,
                                              giftRecipient: u,
                                              giftingOrigin: m,
                                              onTrackClick: g,
                                          }),
                                      ],
                                  })
                                : (0, s.jsx)(nI, { product: c, onSuccess: E, onTrackClick: g })
                            : U
                              ? (0, s.jsx)(e7.$, {
                                    loading: w,
                                    loadingStartedLabel: q.intl.string(q.t["TYw+9s"]),
                                    loadingFinishedLabel: q.intl.string(q.t.Pg1UP5),
                                    onClick: async () => {
                                        (g(J.sH.ADD_TO_COLLECTION),
                                            await (0, y.iJ)(c.skuId),
                                            E(),
                                            (0, nF.A)({
                                                product: c,
                                                analyticsLocations: p,
                                                purchaseType: J.gs.PREMIUM_PURCHASE,
                                            }));
                                    },
                                    text: q.intl.string(q.t.zp6caO),
                                    fullWidth: !0,
                                })
                              : (0, s.jsx)(s.Fragment, {
                                    children: K.map((e, n) => {
                                        let t,
                                            i,
                                            l,
                                            a,
                                            o,
                                            d = 0 === n,
                                            f =
                                                e.currency === nb.Yr.DISCORD_ORB
                                                    ? ((t = S ? q.intl.string(q.t.cTdr3x) : q.intl.string(q.t.zqh7ZM)),
                                                      (i = !Q || S),
                                                      (l = q.intl.formatToPlainString(q.t.yi41qQ, {
                                                          orbPrice: e.amount,
                                                      })),
                                                      (a = i ? `${l}, ${t}` : l),
                                                      (0, s.jsx)(e9.m, {
                                                          position: "top",
                                                          text: t,
                                                          shouldShow: i,
                                                          "aria-label": !1,
                                                          children: (0, s.jsx)(e7.$, {
                                                              variant: d ? "primary" : "secondary",
                                                              onClick: function () {
                                                                  (g(J.sH.BUY_WITH_ORBS),
                                                                      (0, N.B4)({
                                                                          skuId: c.skuId,
                                                                          onComplete: (e) => {
                                                                              ((0, y.gB)(),
                                                                                  E(),
                                                                                  (0, nF.A)({
                                                                                      product: c,
                                                                                      analyticsLocations: p,
                                                                                      itemConsumed:
                                                                                          e?.entitlements?.[0]
                                                                                              ?.consumed,
                                                                                      purchaseType: J.gs.ORB,
                                                                                  }));
                                                                          },
                                                                          analyticsLocations: p,
                                                                          discoverySessionId: x,
                                                                      }));
                                                              },
                                                              disabled: i,
                                                              "aria-label": a,
                                                              text: q.intl.format(q.t.JC15qj, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, s.jsx)(ne.OrbsIcon, {
                                                                          className: n$.fN,
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                              }),
                                                              fullWidth: !0,
                                                          }),
                                                      }))
                                                    : ((o =
                                                          _ ??
                                                          q.intl.formatToPlainString(q.t["cNSL/j"], {
                                                              price: (0, nc.$g)(e.amount, e.currency),
                                                          })),
                                                      (0, s.jsxs)(nn.e, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, s.jsx)(e7.$, {
                                                                  variant: d ? "primary" : "secondary",
                                                                  onClick: ei,
                                                                  text: o,
                                                                  fullWidth: !0,
                                                              }),
                                                              $ &&
                                                                  (0, s.jsx)(nE.A, {
                                                                      primary: d,
                                                                      product: c,
                                                                      onSuccess: E,
                                                                      giftRecipient: u,
                                                                      giftingOrigin: m,
                                                                      onTrackClick: g,
                                                                  }),
                                                          ],
                                                      }));
                                        return (0, s.jsx)(r.Fragment, { children: f }, e.currency);
                                    }),
                                })
                        : $
                          ? (0, s.jsx)(nE.A, {
                                primary: !0,
                                product: c,
                                onSuccess: E,
                                fullWidth: !0,
                                giftRecipient: u,
                                giftingOrigin: m,
                                onTrackClick: g,
                            })
                          : null;
                })(),
            }),
        ],
    });
}
var nK = t(634656);
function nZ(e) {
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
        className: M()(nK.wd, { [nK.E7]: null != d.LeftPreview }),
        children: [
            (0, s.jsx)("div", {
                className: nK.dL,
                children: (0, s.jsx)(e5, { productRecord: i, selectedProduct: r, selectedBundleSlide: c }),
            }),
            null != d.LeftPreview &&
                (0, s.jsx)("div", {
                    className: nK._E,
                    children: (0, s.jsx)(d.LeftPreview, {
                        user: a,
                        selectedProduct: r,
                        previewingProduct: l,
                        productRecord: i,
                        selectedBundleSlide: c,
                        pendingProfile: o,
                    }),
                }),
            (0, s.jsx)("div", { className: nK.F_, children: (0, s.jsx)(d.Info, { ...t }) }),
            (0, s.jsx)(nY, { ...t }),
            n,
        ],
    });
}
var nJ = t(529756),
    nQ = t(408278),
    n0 = t(972213),
    n1 = t(60831),
    n8 = t(301198),
    n2 = t(60465),
    n6 = t(976860),
    n4 = t(38145),
    n5 = t(365491),
    n3 = t(668953),
    n9 = t(881636),
    n7 = t(807562);
function te(e) {
    let { goPrev: n, goNext: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: n7.Y,
                children: (0, s.jsx)(nQ.K, {
                    "aria-label": q.intl.string(q.t["3NdvMK"]),
                    onClick: n,
                    icon: n3.ChevronLargeLeftIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, s.jsx)("div", {
                className: n7.K,
                children: (0, s.jsx)(nQ.K, {
                    "aria-label": q.intl.string(q.t.RYIeOX),
                    onClick: t,
                    icon: n9.ChevronLargeRightIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var tn = t(844222),
    tt = t(48062);
function ti(e) {
    return null != e ? { backgroundImage: `url(${e})` } : void 0;
}
let ts = (e) => {
    let { src: n } = e,
        { reducedMotion: t } = r.useContext(tn.C),
        [i, l] = r.useState({ src: n, id: 0 }),
        [a, c] = r.useState(null);
    r.useEffect(() => {
        if (n === i.src) return;
        let e = () => {
            (c(t.enabled ? null : i), l({ src: n, id: i.id + 1 }));
        };
        if (null == n) return void e();
        let s = !1,
            r = new Image(),
            a = () => {
                s || e();
            };
        return (
            (r.onload = a),
            (r.onerror = a),
            (r.src = n),
            () => {
                ((s = !0), (r.onload = null), (r.onerror = null));
            }
        );
    }, [n, i, t.enabled]);
    let o = r.useCallback(() => {
        c(null);
    }, []);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != a && (0, s.jsx)("div", { className: M()(tt.Tp, tt.Mh), style: ti(a.src), "aria-hidden": !0 }, a.id),
            (0, s.jsx)(
                "div",
                { className: M()(tt.Tp, null != a && tt.ln), style: ti(i.src), onAnimationEnd: o, "aria-hidden": !0 },
                i.id,
            ),
        ],
    });
};
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
            category: f,
            tab: E,
            onClose: g,
            onTrackClick: h,
        } = e,
        x = e0(i),
        v = (0, C.aw)(a),
        I = v ? a.items.length : 0,
        N = (function () {
            let { sessionId: e } = (0, k.uM)() ?? {},
                n = (0, n5.vs)((e) => e.reset);
            return r.useCallback(
                (t, i) => {
                    if (
                        (j.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: e,
                            sku_id: t.skuId,
                            cta_name: i,
                        }),
                        (0, n4.M)(),
                        (0, n2.p)(),
                        !0 !== t.isOrbsExclusive)
                    )
                        return void (0, n6.pX)(O.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
                    n();
                    let s = O.BVt.COLLECTIBLES_SHOP_WITH_TAB(J.G2.ORBS);
                    (0, n6.pX)(`${s}&${J.P1}=${t.skuId}`);
                },
                [e, n],
            );
        })(),
        A = r.useCallback(() => {
            (h(J.sH.GO_TO_COLLECTION), g(), N(f, "go_to_collection_button"));
        }, [f, g, h, N]),
        y = r.useCallback(() => {
            I <= 1 || d((e) => (e - 1 + I) % I);
        }, [I, d]),
        R = r.useCallback(() => {
            I <= 1 || d((e) => (e + 1) % I);
        }, [I, d]),
        _ = r.useCallback(
            (e) => {
                if (I <= 1) return;
                let n = e.target;
                "INPUT" === n.tagName ||
                    "TEXTAREA" === n.tagName ||
                    n.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), y())
                        : "ArrowRight" === e.key && (e.preventDefault(), R()));
            },
            [I, y, R],
        ),
        T = r.useCallback(() => {
            (h(J.sH.CLOSE_DETAIL), g());
        }, [h, g]),
        L = r.useRef(null),
        P = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (P.current) {
                P.current = !1;
                return;
            }
            let e = L.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [o]),
        (0, s.jsxs)("div", {
            className: M()(tt.i1, (0, J.EZ)(a.skuId) ? tt.bF : a.type === S.R.AVATAR_DECORATION ? tt.Jq : tt.eF),
            onKeyDown: _,
            children: [
                (0, s.jsx)(ts, { src: p }),
                (0, s.jsx)("div", {
                    className: tt.GV,
                    children: (0, s.jsx)(e9.m, {
                        text: q.intl.string(q.t["Hr/q/6"]),
                        children: (0, s.jsx)(e7.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: nJ.CollectionIcon,
                            text: f.name,
                            onClick: A,
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: tt.KR,
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
                v && I > 1 && (0, s.jsx)(te, { goPrev: y, goNext: R }),
                (0, s.jsxs)("div", {
                    className: tt.VG,
                    children: [
                        (0, s.jsx)(n8.R, {
                            product: i,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(n1.H, {
                            skuId: a.skuId,
                            product: a,
                            productName: (0, b.VG)(a),
                            tab: E,
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(nQ.K, {
                            "aria-label": q.intl.string(q.t.cpT0Cq),
                            onClick: T,
                            icon: n0.XLargeIcon,
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
                analyticsLocations: F,
                tab: M,
                giftRecipient: G,
                giftingOrigin: U,
                leftPanelFooter: H,
                footer: z,
                isSwapping: V = !1,
            } = e,
            W = (0, d.bG)([A.default], () => A.default.getCurrentUser()),
            X = (0, d.cf)([v.A], () => v.A.getPendingChanges()),
            q = (0, B.f)(i),
            { previewingVariantIndex: $ } = q,
            Y = (0, R.Q)(i),
            K = D(i, $),
            Z = (0, L.rb)(i, Y);
        a()(null != Z, "Selected product should not be null");
        let { analyticsLocations: J } = (0, E.Ay)([...F, f.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, P.Yr)(Z.skuId);
        let Q = (0, w.U1)(l),
            [ee, en] = r.useState({ skuId: i.skuId, index: 0 }),
            et = ee.skuId === i.skuId ? ee.index : 0,
            ei = r.useCallback(
                (e) =>
                    en((n) => {
                        let t = n.skuId === i.skuId ? n.index : 0;
                        return { skuId: i.skuId, index: "function" == typeof e ? e(t) : e };
                    }),
                [i.skuId],
            );
        r.useEffect(() => {
            null != W && (0, I.A)(W.id, W.getAvatarURL(void 0, 80));
        }, [W]);
        let es = r.useMemo(() => (0, C.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            (j.default.track(O.HAw.OPEN_MODAL, {
                type: O.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: S,
                location_stack: J,
                sku_id: Z.skuId,
                product_type: es,
            }),
                (0, y.RD)(Z.skuId));
        }, [S, J, Z.skuId, es]);
        let { cardId: er, sessionId: el, tilePosition: ea } = (0, k.uM)() ?? {},
            ec = r.useMemo(() => (0, L.v8)(i), [i]),
            eo = (function (e) {
                let { skuId: n, productSkuIds: t, analyticsLocations: i } = e,
                    { cardId: s, sessionId: l } = (0, k.uM)() ?? {},
                    a = (0, T.o)(),
                    c = (0, C.xM)(a);
                return r.useCallback(
                    (e, r) => {
                        j.default.track(O.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: r ?? n,
                            cta: e,
                            shop_session_id: l,
                            card_id: s,
                            product_sku_ids: t,
                            location_stack: i,
                            discount_source: (0, C.b_)(c),
                        });
                    },
                    [n, i, s, t, l, c],
                );
            })({ skuId: Z.skuId, productSkuIds: ec, analyticsLocations: J });
        (0, g.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: Z.skuId,
                card_id: er,
                shop_session_id: el,
                position_in_section: ea,
                product_sku_ids: ec,
                location_stack: J,
            },
        });
        let ed = (0, N.o6)(),
            eu = n === m.ip.EXITING,
            em = (0, _.c)("product_details_modal");
        if (null == W || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !em)) return null;
        let ep = {
                pendingChanges: X,
                pendingAvatarSrc:
                    void 0 !== X.pendingAvatar
                        ? (0, h.sv)((0, x.V7)({ userId: W.id, image: X.pendingAvatar, size: ta }), null, W, {
                              size: ta,
                          })
                        : void 0,
            },
            ef = (0, b.VG)(i),
            eE = {
                user: W,
                pendingProfile: ep,
                productRecord: i,
                productName: ef,
                selectedProduct: Z,
                previewingProduct: K ?? null,
                category: l,
                selectedVariantIndex: Y,
                previewingVariantIndexProps: q,
                selectedBundleSlide: et,
                setSelectedBundleSlide: ei,
                tab: M,
                giftRecipient: G?.id !== W.id ? G : void 0,
                giftingOrigin: G?.id !== W.id ? U : void 0,
                analyticsLocations: J,
                returnRef: u,
                onClose: t,
                onTrackClick: eo,
            };
        return (0, s.jsx)(E.f5, {
            value: J,
            children: (0, s.jsx)(p.d, {
                returnRef: u,
                transitionState: n,
                onClose: t,
                size: "xl",
                paddingSize: "sm",
                "aria-label": ef,
                children: (0, s.jsxs)("div", {
                    className: tl.C,
                    "data-testid": "collectibles-shop-product-details-modal",
                    "data-has-footer": null != z,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tl.j,
                            "data-swapping": V,
                            "aria-busy": V,
                            children: [
                                (0, s.jsx)(nZ, { ...eE, leftPanelFooter: H }),
                                (0, s.jsx)(tr, { ...eE, isClosing: eu, isOrbCheckoutModalOpen: ed, pdpBackground: Q }),
                            ],
                        }),
                        z,
                    ],
                }),
            }),
        });
    };
