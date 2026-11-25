t.d(n, { default: () => td });
var i,
    s = t(477900),
    r = t(582128),
    l = t(284009),
    a = t.n(l),
    c = t(613412),
    d = t(334279),
    o = t(164636),
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
    L = t(442372),
    P = t(623373),
    b = t(536572),
    S = t(177366),
    D = t(575593);
function w(e, n) {
    return e.type === D.R.VARIANTS_GROUP ? (null != n ? e.variants?.[n] : void 0) : e;
}
var B = t(212407),
    F = t(935094),
    M = t(503698),
    G = t.n(M),
    U = t(834730),
    H = t(939249),
    z = t(534514),
    V = t(14702),
    W = t(818296),
    X = t(288106),
    q = t(604913);
t(321073);
var $ = t(792996);
function Y(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) return $.intl.formatToPlainString($.t["/0Yndu"], { num: e.bundledProducts?.length });
    let t = e.bundledProducts ?? [],
        i = [],
        s = !1;
    for (let e of t)
        switch (e.type) {
            case D.R.AVATAR_DECORATION:
                i.push($.intl.formatToPlainString($.t.Ntv9Jt, { itemName: e.name }));
                break;
            case D.R.PROFILE_EFFECT:
                i.push($.intl.formatToPlainString($.t["3Y8q7a"], { itemName: e.name }));
                break;
            case D.R.NAMEPLATE:
                (i.push($.intl.formatToPlainString($.t["2keXky"], { itemName: e.name })), (s = !0));
        }
    if (s) {
        let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
        return $.intl.formatToPlainString($.t.Ofrqj6, { joinedItems: e });
    }
    let r = i.join(" & ");
    return $.intl.formatToPlainString($.t.Ofrqj6, { joinedItems: r });
}
var K = t(306396);
function Z(e) {
    return (0, C.aw)(e)
        ? $.intl.formatToPlainString($.t["1tUCAO"], { count: e.items.length })
        : (function (e) {
              let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (null != e && null != e.summary && "" !== e.summary) {
                  if (e.type === D.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                      let t = Y(e, n);
                      return e.summary.replace("{joinedItems}", t);
                  }
                  return e.summary;
              }
              switch (e?.type) {
                  case D.R.AVATAR_DECORATION:
                      return $.intl.string($.t["3lv7q2"]);
                  case D.R.PROFILE_EFFECT:
                      return $.intl.string($.t.VhJL72);
                  case D.R.NAMEPLATE:
                      return $.intl.string($.t.ik37EZ);
                  case D.R.PROFILE_FRAME:
                      return $.intl.string($.t.fWzWPp);
                  case D.R.BUNDLE:
                      return Y(e, n);
                  default:
                      return "";
              }
          })(e);
}
function J(e) {
    let n = (0, W.g)(e);
    if (null != n) {
        let t = Z(e);
        switch (n.tenantMetadata?.collectibles?.type) {
            case q.hE.COLLECT_AND_CLAIM:
                if (n.rewardStatus !== X.GM.IN_PROGRESS) return t;
                if ((0, C.aw)(e))
                    return $.intl.formatToPlainString($.t["vI+3Ok"], {
                        itemCount: (0, K.oO)(e, n.tenantMetadata.collectibles.collectionId),
                    });
                return $.intl.formatToPlainString($.t.wBhFsO, { itemDescription: t.replace(/\.$/, "") });
            case q.hE.TARGETED_OFFER:
            default:
                return t;
        }
    }
    return Z(e);
}
var Q = t(758836),
    ee = t(690901);
function en(e) {
    let { name: n, typeLabel: t } = e;
    return (0, s.jsxs)(U.E, {
        variant: "body-sm/medium",
        className: ee.mC,
        "aria-live": "polite",
        children: [
            (0, s.jsx)("span", { className: ee.kx, children: n }),
            null != t && (0, s.jsx)("span", { className: ee.FP, children: t }),
        ],
    });
}
let et = { [D.R.AVATAR_DECORATION]: !0, [D.R.PROFILE_FRAME]: !0 };
function ei(e) {
    let { item: n, index: t, isSelected: i, setSelected: l, label: a, trackedSkuId: c, onTrackClick: d } = e,
        o = r.useMemo(() => ({ skuId: n.skuId, type: n.type, items: [n] }), [n]),
        u = r.useCallback(() => {
            (d(Q.sH.BUNDLE_VIEW_PRODUCT, c), l(t));
        }, [d, c, l, t]),
        m = !0 === et[n.type];
    return (0, s.jsx)(H.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: G()(ee.xn, { [ee.Y4]: i, [ee.u8]: m }),
        onClick: u,
        "aria-label": a,
        children: (0, s.jsx)("div", { className: ee.Yf, children: (0, s.jsx)(V.O, { product: o }) }),
    });
}
var es = t(442759),
    er = t(872200),
    el = t(139136),
    ea = t(395744),
    ec = t(929283),
    ed = t(650228);
function eo(e) {
    let {
        item: n,
        user: t,
        bundleFirstAvatarDecoration: i,
        isBundle: r,
        pendingAvatarSrc: l,
        pendingAvatarDecoration: a,
        pendingDisplayNameStyles: c,
        pendingGlobalName: d,
    } = e;
    switch (n.type) {
        case D.R.AVATAR_DECORATION:
            return (0, s.jsx)("div", {
                className: ed.h1,
                children: (0, s.jsx)(ec.i, { user: t, item: n, avatarSrcOverride: l, isHighlighted: !0 }),
            });
        case D.R.PROFILE_EFFECT:
            return (0, s.jsx)("div", {
                className: r ? ed.sm : ed.VY,
                children: (0, s.jsx)(el.A, {
                    skuId: n.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case D.R.PROFILE_FRAME:
            return (0, s.jsx)("div", { className: r ? ed.ob : ed.fE, children: (0, s.jsx)(ea.A, { frame: n }) });
        case D.R.NAMEPLATE:
            return (0, s.jsx)("div", {
                className: ed.Dz,
                children: (0, s.jsx)(er.A, {
                    className: ed.M4,
                    nameplate: n,
                    user: t,
                    nameplatePreviewSize: "large",
                    pendingAvatarDecoration: i ?? a,
                    pendingDisplayNameStyles: c,
                    pendingGlobalName: d,
                    isHighlighted: !0,
                    hideDecorators: !0,
                }),
            });
        default:
            return null;
    }
}
function eu(e) {
    let { user: n, selectedProduct: t, previewingProduct: i, selectedBundleSlide: r, pendingProfile: l } = e,
        a = i ?? t,
        { firstAvatarDecoration: c } = (0, es.f5)(a),
        { pendingChanges: d, pendingAvatarSrc: o } = l,
        u = a.items[r] ?? a.items[0];
    return null == u
        ? null
        : (0, s.jsx)(eo, {
              item: u,
              user: n,
              bundleFirstAvatarDecoration: c,
              isBundle: (0, C.aw)(a),
              pendingAvatarSrc: o,
              pendingAvatarDecoration: d.pendingAvatarDecoration,
              pendingDisplayNameStyles: d.pendingDisplayNameStyles,
              pendingGlobalName: d.pendingGlobalName,
          });
}
var em = t(846957);
function ep(e) {
    let { selectedProduct: n, previewingProduct: t } = e;
    return (0, s.jsx)(em.B, { product: t ?? n });
}
var ef = t(975571),
    eE = t(740076),
    eg = t(784054),
    eh = t(422460);
function ex(e) {
    let { skuId: n } = e;
    return (0, Q.EZ)(n)
        ? (0, s.jsx)(U.E, {
              variant: "body-sm/normal",
              className: eh.CU,
              children: $.intl.format($.t.Q1scdE, {
                  helpdeskArticle: ef.A.getArticleURL(O.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function ev(e) {
    let { productRecord: n, productName: t, selectedProduct: i, previewingVariantIndexProps: l } = e,
        { previewingVariantIndex: a, handleEntering: c, handleLeaving: d } = l,
        o = w(n, a) ?? i,
        u = J(o),
        { disabledReason: m } = (0, eE.I)(i.skuId),
        p = (0, R.Q)(n),
        f = (0, P.B1)(n),
        E = f ? n.variants[a ?? p] : null,
        g = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            null != g.current && ((g.current.tabIndex = -1), g.current.focus());
        }, [n.skuId]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: eh.sn,
                    children: [
                        (0, s.jsx)(z.D, { ref: g, variant: "heading-xl/semibold", className: eh.R_, children: t }),
                        (0, s.jsx)(U.E, { variant: "body-sm/normal", children: u }),
                        (0, s.jsx)(ex, { skuId: o.skuId }),
                        null !== m && (0, s.jsx)(U.E, { variant: "body-xs/normal", className: eh.H$, children: m }),
                    ],
                }),
                f &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != E &&
                                (0, s.jsx)(U.E, {
                                    variant: "body-xs/medium",
                                    color: "text-subtle",
                                    className: eh.a9,
                                    lineClamp: 1,
                                    children: $.intl.format($.t.EcaRWt, {
                                        value: (0, s.jsx)("span", { className: eh.I8, children: E.variantLabel }),
                                    }),
                                }),
                            (0, s.jsx)("div", {
                                className: eh._x,
                                children: (0, s.jsx)(eg.A, {
                                    skuId: n.skuId,
                                    onVariantEnter: c,
                                    onVariantExit: d,
                                    wrap: !0,
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
var eI =
        (((i = {}).COLLECTIBLE = "COLLECTIBLE"),
        (i.BUNDLE = "BUNDLE"),
        (i.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (i.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (i.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        i),
    eN = t(97808),
    eA = t(346055),
    ej = t(993077),
    ey = t(245604),
    ek = t(460905),
    eR = t(262295),
    eC = t(685073),
    e_ = t(432005),
    eT = t(963852),
    eO = t(763754),
    eL = t(20851),
    eP = t(641318),
    eb = t(448645),
    eS = t(780898),
    eD = t(158008);
function ew(e) {
    let { user: n, innerClassName: t } = e;
    return (0, s.jsx)("div", {
        className: eD.mV,
        children: (0, s.jsx)(eR.A, {
            avatar: (0, s.jsx)(eN.eu, {
                src: n.avatarSrc,
                size: u._3.SIZE_32,
                "aria-label": n.name,
                status: O.clD.ONLINE,
            }),
            name: n.name,
            innerClassName: G()(eD.$L, t),
        }),
    });
}
function eB(e) {
    let { user: n, nameplate: t, avatarDecoration: i, pendingDisplayNameStyles: r, pendingGlobalName: l } = e,
        a = (0, eS.Ov)();
    return (0, s.jsx)("div", {
        className: eD.nJ,
        role: "img",
        "aria-label": $.intl.formatToPlainString($.t["95pCSf"], { a11y_text: t.label }),
        children: (0, s.jsxs)(eA.M, {
            children: [
                (0, s.jsx)(ew, { user: a.mallow, innerClassName: eD.ab }),
                (0, s.jsxs)(U.E, {
                    variant: "body-sm/semibold",
                    className: eD.OS,
                    children: [$.intl.string($.t["yzW/fZ"]), " - 3"],
                }),
                (0, s.jsx)(ew, { user: a.phibi, innerClassName: eD.e9 }),
                (0, s.jsx)("div", {
                    className: eD.mV,
                    children: (0, s.jsx)(er.A, {
                        className: eD.M4,
                        innerClassName: eD.e9,
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
                (0, s.jsx)(ew, { user: a.locke, innerClassName: eD.e9 }),
                (0, s.jsxs)(U.E, {
                    variant: "body-sm/semibold",
                    className: eD.OS,
                    children: [$.intl.string($.t["NG43/6"]), " - 12"],
                }),
                (0, s.jsx)(ew, { user: a.boom, innerClassName: eD.bD }),
                (0, s.jsx)(ew, { user: a.cherry, innerClassName: eD.bD }),
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
                ...(0, eT.Ay)({ author: n, channelId: "1337", content: $.intl.string($.t.d5YwK5) }),
                state: O.cmJ.SENT,
                id: "0",
            });
        })({ author: n }),
        d = (0, eC.gS)(r),
        o = (0, eO.p_)(c),
        u = {
            ...o,
            nick:
                void 0 !== a
                    ? (0, h.eh)({ pendingNickname: void 0, pendingGlobalName: a, user: n, guildMember: null })
                    : o.nick,
            primaryGuild: void 0 !== r ? d : o.primaryGuild,
            displayNameStyles: void 0 !== l ? l : o.displayNameStyles,
        };
    return (0, s.jsx)("div", {
        role: "img",
        "aria-label": $.intl.string($.t["TN+ZvB"]),
        children: (0, s.jsx)(eA.M, {
            children: (0, s.jsxs)(ej.Z, {
                className: eD.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, s.jsx)(
                        eL.A,
                        {
                            className: eD.G5,
                            author: u,
                            message: c,
                            avatarDecorationOverride: t ?? null,
                            avatarOverride: i,
                        },
                        c.id,
                    ),
                    (0, s.jsxs)("div", {
                        className: eD.lG,
                        children: [
                            (0, s.jsx)(ey.CirclePlusIcon, { size: "md", color: "currentColor", className: eD.hq }),
                            (0, s.jsx)(ek.ReactionIcon, { size: "md", color: "currentColor", className: eD.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eM(e) {
    let { product: n, user: t, pendingProfile: i, activeBundleSlide: r } = e,
        l = eb.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: a, ...c } = i.pendingChanges,
        d = i.pendingAvatarSrc,
        o = n.type === D.R.BUNDLE ? n.items[r ?? 0] : void 0,
        u = o?.type ?? n.type,
        m = u === D.R.AVATAR_DECORATION,
        p = u === D.R.PROFILE_EFFECT || u === D.R.PROFILE_FRAME,
        { firstAvatarDecoration: f, firstProfileEffect: E, firstNameplate: g, firstProfileFrame: h } = (0, es.f5)(n),
        x = o?.type === D.R.AVATAR_DECORATION ? o : f,
        v = o?.type === D.R.PROFILE_EFFECT ? o : E,
        I = o?.type === D.R.PROFILE_FRAME ? o : h,
        N = o?.type === D.R.NAMEPLATE ? o : g;
    if (u === D.R.NAMEPLATE && null != N)
        return (0, s.jsx)("div", {
            className: eD.Zj,
            children: (0, s.jsx)(eB, {
                user: t,
                nameplate: N,
                avatarDecoration: x ?? c.pendingAvatarDecoration,
                pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                pendingGlobalName: c.pendingGlobalName,
            }),
        });
    return (0, s.jsx)("div", {
        className: m ? eD.RA : eD.hZ,
        children: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(eP.A, {
                    ...c,
                    pendingAvatar: d,
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
                    className: m ? eD.oB : void 0,
                }),
                m &&
                    (0, s.jsx)(eF, {
                        user: t,
                        avatarDecoration: x,
                        pendingAvatarSrc: d,
                        pendingPrimaryGuildId: c.pendingPrimaryGuildId,
                        pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                        pendingGlobalName: c.pendingGlobalName,
                    }),
            ],
        }),
    });
}
function eG(e) {
    let { user: n, pendingProfile: t, selectedProduct: i, previewingProduct: r, selectedBundleSlide: l } = e;
    return (0, s.jsx)(eM, { user: n, pendingProfile: t, product: r ?? i, activeBundleSlide: l });
}
var eU = t(478016),
    eH = t(646514),
    ez = t(219882),
    eV = t(224016),
    eW = t(682901),
    eX = t(549848);
function eq() {
    let e = [
        $.intl.string($.t.E1NP2x),
        $.intl.string($.t.kpMomJ),
        (0, ez.M6)({
            legacyCopy: $.intl.string($.t.xT1Vfn),
            rolloutCopy: $.intl.formatToPlainString($.t.IDAfOy, {
                maxFileSize: (0, eb.EJ)(eW.PremiumTypes.TIER_2, { useSpace: !1 }),
            }),
        }),
        $.intl.string($.t.myyAEr),
        $.intl.string($.t.zTk8Ul),
    ];
    return (0, s.jsxs)("div", {
        className: eX.kL,
        children: [
            (0, s.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eX.ym,
            }),
            (0, s.jsx)(eV.A, { color: "white" }),
            (0, s.jsx)("div", {
                className: eX.PX,
                children: e.map((e, n) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: eX.UJ,
                            children: [
                                (0, s.jsx)(eU.CheckmarkSmallIcon, { color: eH.A.colors.WHITE }),
                                (0, s.jsx)(U.E, {
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
var e$ = t(855986),
    eY = t(132198),
    eK = t(35929);
function eZ(e) {
    let { user: n } = e,
        t = eb.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: i, ...r } = (0, e$.cf)([v.A], () => v.A.getPendingChanges()),
        l = (0, x.V7)({ userId: n.id, image: i });
    return (0, s.jsx)("div", {
        className: eK.k,
        children: (0, s.jsx)(eP.A, {
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
var eJ = t(165416);
function eQ(e) {
    let { user: n, productRecord: t, isClosing: i, isOrbCheckoutModalOpen: r } = e;
    return t.skuId === Q.Dp.ORB_PROFILE_BADGE
        ? i || r
            ? null
            : (0, s.jsx)(eZ, { user: n })
        : (0, Q.EZ)(t.skuId)
          ? (0, s.jsx)(eq, {})
          : (0, s.jsx)(em.B, { product: t, className: eJ.M });
}
let e0 = {
    [eI.COLLECTIBLE]: { LeftPreview: eu, Info: ev, RightPreview: eG },
    [eI.BUNDLE]: {
        LeftPreview: eu,
        Info: function (e) {
            let {
                    productRecord: n,
                    productName: t,
                    selectedBundleSlide: i,
                    setSelectedBundleSlide: l,
                    onTrackClick: a,
                } = e,
                c = n.items,
                d = n.bundledProducts,
                o = d?.[i]?.name,
                u = c[i]?.type,
                m = null != u ? (0, C.Dm)(u) : null,
                p = $.intl.string($.t.cTbdgu),
                f = J(n),
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
                    className: ee.Qf,
                    children: [
                        (0, s.jsx)(z.D, {
                            ref: h,
                            variant: "heading-xl/semibold",
                            className: ee.R_,
                            title: t,
                            children: t,
                        }),
                        (0, s.jsx)(U.E, { variant: "body-sm/medium", color: "text-default", children: f }),
                        (0, s.jsxs)("div", {
                            className: ee.hZ,
                            children: [
                                (0, s.jsx)("div", {
                                    className: ee.vg,
                                    children: (0, s.jsx)("div", {
                                        ref: E,
                                        className: ee.hK,
                                        role: "radiogroup",
                                        "aria-label": p,
                                        tabIndex: -1,
                                        onKeyDown: g,
                                        children: c.map((e, n) => {
                                            let t = d?.[n]?.name ?? e.skuId,
                                                r = d?.[n]?.skuId ?? e.skuId;
                                            return (0, s.jsx)(
                                                ei,
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
                                null != o && (0, s.jsx)(en, { name: o, typeLabel: m }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: eG,
    },
    [eI.EXTERNAL_ORB_BADGE]: { LeftPreview: ep, Info: ev, RightPreview: eQ },
    [eI.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: ep, Info: ev, RightPreview: eQ },
    [eI.EXTERNAL_GENERIC]: { LeftPreview: ep, Info: ev, RightPreview: eQ },
};
function e1(e) {
    var n;
    return e0[
        ((n = e),
        (0, Q.pQ)(n.skuId)
            ? n.skuId === Q.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, Q.EZ)(n.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, C.aw)(n)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var e8 = t(347478),
    e2 = t(664749),
    e6 = t(470085),
    e4 = t(325802),
    e5 = t(252125);
function e3(e) {
    let n,
        { productRecord: t, selectedProduct: i, selectedBundleSlide: r } = e,
        l = (0, W.g)(i),
        a = (0, e8.$)(l),
        c = (0, e2.fP)(l) ? Q.Hi.FIAT : void 0,
        d = t.type === D.R.BUNDLE ? (t.items[r] ?? t.items[0]) : void 0;
    return (
        (n =
            null != d &&
            !t.hideBadge &&
            null == t.badgeOverride &&
            (0, P.JQ)({ skuId: d.skuId, type: d.type, items: [d] })
                ? (0, s.jsx)(e6.s, {})
                : (0, s.jsx)(e6.A, { skuId: t.skuId, prioritizedCurrency: c })),
        (0, s.jsxs)("div", { className: e5.N, children: [n, null != l && a && (0, s.jsx)(e4.A, { promotion: l })] })
    );
}
var e9 = t(462887),
    e7 = t(866665),
    ne = t(821609),
    nn = t(318254),
    nt = t(825484),
    ni = t(331322),
    ns = t(736653),
    nr = t(44120),
    nl = t(465794),
    na = t(757036),
    nc = t(672619),
    nd = t(580630),
    no = t(4227),
    nu = t(466459),
    nm = t(314458),
    np = t(885574),
    nf = t(495900);
function nE(e) {
    let { className: n, isPartiallyPurchased: t } = e;
    return t
        ? (0, s.jsx)(e7.m, {
              position: "top",
              align: "left",
              text: $.intl.string($.t.y1VWkZ),
              children: (0, s.jsxs)("div", {
                  className: G()(nf.GX, n),
                  children: [
                      (0, s.jsx)("span", {
                          className: nf.P0,
                          children: (0, s.jsx)(np.CircleInformationIcon, {
                              size: "md",
                              color: "currentColor",
                              className: nf.G,
                          }),
                      }),
                      (0, s.jsx)(U.E, { variant: "body-md/semibold", children: $.intl.string($.t.BEjTij) }),
                  ],
              }),
          })
        : (0, s.jsx)(U.E, { variant: "body-md/semibold", className: n, children: $.intl.string($.t["6cfuDj"]) });
}
var ng = t(878112),
    nh = t(572595),
    nx = t(722258),
    nv = t(206835),
    nI = t(450481);
let nN = function (e) {
    let { product: n, onSuccess: t, onTrackClick: i } = e,
        { handleUseNow: r, isApplying: l, canUseNow: a } = (0, nI.p)({ product: n, onSuccess: t }),
        c = (0, nv.A)();
    return a
        ? (0, s.jsx)(ne.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(Q.sH.USE_NOW), r());
              },
              loading: l,
              text: $.intl.string($.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, s.jsx)(ne.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(Q.sH.EDIT_PROFILE), c(), t?.());
              },
              text: $.intl.string($.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var nA = t(506742),
    nj = t(219103),
    ny = t(282968);
function nk(e) {
    let {
            product: n,
            promoPrice: t,
            hasShopDiscount: i,
            discountSource: r,
            discount: l,
            className: a,
            hideStrikethroughPrice: c = !1,
            discountIconDisplayMode: d,
            discountIconSize: o = "md",
        } = e,
        u = (0, C.WD)(n, { hasShopDiscount: i, discount: l });
    if (null == u) return null;
    let { defaultPrice: m, showDefaultPriceOnly: p } = u;
    if (p)
        return (0, s.jsx)("div", {
            className: G()(ny.kG, a),
            children: (0, s.jsx)(nj.x, { priceAmount: m.amount, priceCurrency: m.currency }),
        });
    let { showDiscountPrice: f, originalPrice: E, finalPrice: g } = u,
        h = f && null != d ? { displayMode: d, source: r ?? C.D0.NITRO, size: o } : void 0;
    return null != t
        ? (0, s.jsxs)("div", {
              className: G()(ny.kG, a),
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
              className: G()(ny.kG, a),
              children: [
                  c ? null : (0, s.jsx)(nA.a, { price: E, className: ny.q9 }),
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
var nR = t(403581),
    nC = t(181170),
    n_ = t(778705),
    nT = t(843625);
function nO(e) {
    let { text: n, onTrackClick: t } = e,
        { analyticsLocations: i } = (0, E.Ay)(),
        l = r.useRef(null);
    return (0, s.jsx)(H.D, {
        className: nT.F,
        innerRef: l,
        onClick: () => {
            (t?.(Q.sH.SUBSCRIBE_NOW),
                (0, n_.A)({ subscriptionTier: eW.pe.TIER_2, analyticsLocations: i, returnRef: l }));
        },
        children: n,
    });
}
var nL = t(329986);
function nP(e) {
    let { product: n, onTrackClick: t } = e,
        i = (0, nC.vF)(n.skuId, "collectibles_shop_nitro_price_upsell"),
        r = (0, C.yt)(n, O.lid.PREMIUM_TIER_2);
    if (null == r) return null;
    let l = (0, nC.f3)({ storefrontPrices: i, premiumPrice: r }) ?? r,
        a = (0, nd.RS)(l.amount, l.currency);
    return (0, s.jsxs)("div", {
        className: nL.k,
        children: [
            (0, s.jsx)(e7.m, {
                text: $.intl.string($.t.MPFyJ5),
                "aria-label": $.intl.string($.t.X3Ekj8),
                children: (0, s.jsx)(nR.NitroWheelIcon, { size: "md", color: "currentColor", className: nL.o }),
            }),
            (0, s.jsx)(U.E, {
                variant: "body-xs/medium",
                children: $.intl.format($.t.Sv8iic, {
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
        l = t ? $.intl.string($.t.wu4gyV) : $.intl.string($.t.eFNRzU),
        a = t || !i;
    return (0, s.jsxs)("div", {
        className: nS.eg,
        children: [
            (0, s.jsx)("div", {
                className: nS.zR,
                children: (0, s.jsx)(U.E, { variant: "body-xs/normal", className: a ? nS.r9 : void 0, children: l }),
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
        onTrackClick: d,
        isProductDisabled: o,
    } = e;
    return 0 === n.length
        ? null
        : n[0].currency === nb.Yr.DISCORD_ORB
          ? (0, s.jsx)(nD, { orbPrice: n[0], isProductDisabled: o, hasSufficientOrbs: c, discount: l })
          : (0, s.jsxs)("div", {
                className: nS.eg,
                children: [
                    (0, s.jsxs)("div", {
                        className: nS.pw,
                        children: [
                            (0, s.jsx)(nk, {
                                product: a,
                                promoPrice: null != t[0] ? n[0] : null,
                                discount: l,
                                hasShopDiscount: i,
                                discountSource: r,
                                hideStrikethroughPrice: !i,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            i ? null : (0, s.jsx)(nP, { product: a, onTrackClick: d }),
                        ],
                    }),
                    n.length > 1 &&
                        n[1].currency === nb.Yr.DISCORD_ORB &&
                        (0, s.jsx)(nj.x, {
                            priceAmount: n[1].amount,
                            priceCurrency: n[1].currency,
                            className: o || !c ? nS.r9 : void 0,
                        }),
                ],
            });
}
var nB = t(347722),
    nF = t(57020),
    nM = t(61750),
    nG = t(773669),
    nU = t(478168),
    nH = t(497901),
    nz = t(651365),
    nV = t(305037),
    nW = t(248180),
    nX = t(669470),
    nq = t(22007),
    n$ = t(865830),
    nY = t(543080);
function nK(e) {
    var n;
    let t,
        i,
        {
            user: l,
            productRecord: a,
            selectedProduct: c,
            tab: d,
            giftRecipient: u,
            giftingOrigin: m,
            analyticsLocations: p,
            returnRef: f,
            onClose: E,
            onTrackClick: g,
        } = e,
        { cardId: h, sessionId: x, tilePosition: v } = (0, k.uM)() ?? {},
        I = (0, na.L)(eW.PremiumTypes.TIER_2),
        A = (0, C.xM)(l),
        j = eb.Ay.canUseShopDiscounts(l),
        R = (0, W.g)(c),
        _ = (0, nm.K)(c),
        T = (0, e2.fP)(R),
        L = (0, nu.h)(a),
        { isPurchased: P, isPartiallyOwnedBundle: b } = (0, nu.h)(c),
        { isDisabled: S } = (0, eE.I)(c.skuId),
        D = (0, C.Zu)({ product: c, isPartiallyOwnedBundle: b, isPurchased: P }),
        w = (0, o.bG)([no.A], () => no.A.isClaiming === c?.skuId),
        B = (0, ns.Ay)(),
        F = (0, e9.M)(B),
        M = (0, C.G0)(c),
        H = (0, C.yt)(c, O.lid.DEFAULT),
        z = H?.amount === 0,
        V = (0, nB.X)(c),
        Y = T ? Q.Hi.FIAT : void 0,
        {
            checkoutEligiblePrices: K,
            checkoutEligibleFormerPrices: Z,
            hasSufficientOrbs: J,
        } = (0, nF.F)({ product: c, hasShopDiscount: j, prioritizedCurrency: Y }),
        ee =
            ((n = c.skuId),
            (t = (0, nH.A)(R?.endsAt)),
            (i = (0, nU.w)(R, n)),
            (function (e) {
                let { promotion: n, daysRemaining: t, sequencedOfferValues: i = null } = e;
                if (null == n) return null;
                let s = null != t && t > 0 ? $.intl.formatToPlainString($.t.w4GEvw, { days: t }) : null;
                switch (n.tenantMetadata?.collectibles?.type) {
                    case q.hE.COLLECTION_SALE:
                        let r, l;
                        return (
                            (r = (0, nW.G)(n)),
                            (l = n.displayName),
                            null == r || null == l
                                ? null
                                : {
                                      label: $.intl.formatToPlainString($.t.nebE6s, {
                                          promotionName: l,
                                          percentage: r,
                                      }),
                                      countdown: s,
                                  }
                        );
                    case q.hE.COLLECT_AND_CLAIM:
                        let a;
                        if (n.rewardStatus !== X.GM.IN_PROGRESS) return null;
                        return null == (a = n.progress)
                            ? null
                            : {
                                  label: $.intl.formatToPlainString($.t["8XhAe3"], {
                                      current: a.current,
                                      target: a.target,
                                  }),
                                  countdown: s,
                              };
                    case q.hE.COLLECTION_SEQUENCED_OFFER:
                        return null != i
                            ? (function (e, n) {
                                  let { orbsBack: t, locale: i, isPurchased: s, now: r } = n,
                                      l = e.tenantMetadata?.collectibles?.blocks?.[nz.D.PDP_PRICING_TAG];
                                  if (null == l || s || !(0, nX.IT)(e)) return null;
                                  let a = (0, nV.o)({ block: l, promotion: e, locale: i, orbsBack: t, now: r });
                                  return null == a
                                      ? null
                                      : {
                                            label: a.label,
                                            countdown: a.countdown,
                                            style: l.style,
                                            Icon: (0, nq.s)(l.icon),
                                        };
                              })(n, i)
                            : null;
                    case q.hE.TARGETED_OFFER:
                    default:
                        return null;
                }
            })({
                promotion: R,
                daysRemaining: t,
                sequencedOfferValues: {
                    orbsBack: i,
                    locale: (0, e$.bG)([nG.default], () => nG.default.locale),
                    isPurchased: P,
                },
            })),
        en = r.useMemo(() => (0, C.fT)(c, j, K[0]?.currency), [c, j, K]),
        et = r.useMemo(() => K.some((e) => e.currency === nb.Yr.DISCORD_ORB), [K]);
    (0, nc.W0)({ disableFetch: !et });
    let ei = r.useCallback(() => {
        (g(Q.sH.BUY_WITH_FIAT),
            (0, nr.A)({
                skuId: c.skuId,
                analyticsLocations: p,
                discoverySessionId: x,
                onClose: (e) => (e ? E() : (0, nb.tE)()),
            }));
    }, [p, E, c.skuId, g, x]);
    return (0, s.jsxs)("div", {
        className: nY.iw,
        children: [
            L.isPurchased || L.isPartiallyOwnedBundle
                ? (0, s.jsx)(nE, { className: nY.On, isPartiallyPurchased: b })
                : M
                  ? (0, s.jsxs)("div", {
                        className: nY.pq,
                        children: [
                            (0, s.jsx)(U.E, { variant: "body-md/semibold", children: $.intl.string($.t.rt69oo) }),
                            !P &&
                                (0, s.jsx)(U.E, {
                                    className: G()(nY.ed, !F && nY.un),
                                    variant: "footnote/normal",
                                    children: $.intl.string($.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, s.jsx)(nw, {
                        prices: K,
                        formerPrices: Z,
                        product: c,
                        hasShopDiscount: j,
                        discountSource: A,
                        discount: en,
                        hasSufficientOrbs: J,
                        isProductDisabled: S,
                        onTrackClick: g,
                    }),
            null != ee && (0, s.jsx)(n$.Q, { ...ee }),
            (0, s.jsx)(ni.B, {
                direction: "vertical",
                gap: 8,
                children: (function () {
                    if (M && !I && !z) {
                        var e;
                        return (
                            (e = $.intl.string($.t.sEAnVH)),
                            (0, s.jsx)(nl.A, {
                                subscriptionTier: eW.pe.TIER_2,
                                fullWidth: !0,
                                buttonTextOverride: e,
                                onClick: () => {
                                    (g(Q.sH.UNLOCK_WITH_NITRO), (0, nh.M)());
                                },
                                onSubscribeModalClose: () => {
                                    (0, nx.B)({
                                        skuId: a.skuId,
                                        initialVariantSkuId: c.skuId,
                                        returnRef: f,
                                        analyticsLocations: p,
                                        tab: d,
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
                        ? P
                            ? V
                                ? (0, s.jsxs)(nt.e, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, s.jsx)(nN, { product: c, onSuccess: E, onTrackClick: g }),
                                          (0, s.jsx)(ng.A, {
                                              primary: !0,
                                              product: c,
                                              onSuccess: E,
                                              giftRecipient: u,
                                              giftingOrigin: m,
                                              onTrackClick: g,
                                          }),
                                      ],
                                  })
                                : (0, s.jsx)(nN, { product: c, onSuccess: E, onTrackClick: g })
                            : M
                              ? (0, s.jsx)(ne.$, {
                                    loading: w,
                                    loadingStartedLabel: $.intl.string($.t["TYw+9s"]),
                                    loadingFinishedLabel: $.intl.string($.t.Pg1UP5),
                                    onClick: async () => {
                                        (g(Q.sH.ADD_TO_COLLECTION),
                                            await (0, y.iJ)(c.skuId),
                                            E(),
                                            (0, nM.A)({
                                                product: c,
                                                analyticsLocations: p,
                                                purchaseType: Q.gs.PREMIUM_PURCHASE,
                                            }));
                                    },
                                    text: $.intl.string($.t.zp6caO),
                                    fullWidth: !0,
                                })
                              : (0, s.jsx)(s.Fragment, {
                                    children: K.map((e, n) => {
                                        let t,
                                            i,
                                            l,
                                            a,
                                            d,
                                            o = 0 === n,
                                            f =
                                                e.currency === nb.Yr.DISCORD_ORB
                                                    ? ((t = S ? $.intl.string($.t.cTdr3x) : $.intl.string($.t.zqh7ZM)),
                                                      (i = !J || S),
                                                      (l = $.intl.formatToPlainString($.t.yi41qQ, {
                                                          orbPrice: e.amount,
                                                      })),
                                                      (a = i ? `${l}, ${t}` : l),
                                                      (0, s.jsx)(e7.m, {
                                                          position: "top",
                                                          text: t,
                                                          shouldShow: i,
                                                          "aria-label": !1,
                                                          children: (0, s.jsx)(ne.$, {
                                                              variant: o ? "primary" : "secondary",
                                                              onClick: function () {
                                                                  (g(Q.sH.BUY_WITH_ORBS),
                                                                      (0, N.B4)({
                                                                          skuId: c.skuId,
                                                                          onComplete: (e) => {
                                                                              ((0, y.gB)(),
                                                                                  E(),
                                                                                  (0, nM.A)({
                                                                                      product: c,
                                                                                      analyticsLocations: p,
                                                                                      itemConsumed:
                                                                                          e?.entitlements?.[0]
                                                                                              ?.consumed,
                                                                                      purchaseType: Q.gs.ORB,
                                                                                  }));
                                                                          },
                                                                          analyticsLocations: p,
                                                                          discoverySessionId: x,
                                                                      }));
                                                              },
                                                              disabled: i,
                                                              "aria-label": a,
                                                              text: $.intl.format($.t.JC15qj, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, s.jsx)(nn.OrbsIcon, {
                                                                          className: nY.fN,
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                              }),
                                                              fullWidth: !0,
                                                          }),
                                                      }))
                                                    : ((d =
                                                          _ ??
                                                          $.intl.formatToPlainString($.t["cNSL/j"], {
                                                              price: (0, nd.$g)(e.amount, e.currency),
                                                          })),
                                                      (0, s.jsxs)(nt.e, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, s.jsx)(ne.$, {
                                                                  variant: o ? "primary" : "secondary",
                                                                  onClick: ei,
                                                                  text: d,
                                                                  fullWidth: !0,
                                                              }),
                                                              V &&
                                                                  (0, s.jsx)(ng.A, {
                                                                      primary: o,
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
                        : V
                          ? (0, s.jsx)(ng.A, {
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
var nZ = t(634656);
function nJ(e) {
    let { leftPanelFooter: n, ...t } = e,
        {
            productRecord: i,
            selectedProduct: r,
            previewingProduct: l,
            user: a,
            selectedBundleSlide: c,
            pendingProfile: d,
        } = t,
        o = e1(i);
    return (0, s.jsxs)("div", {
        className: G()(nZ.wd, { [nZ.E7]: null != o.LeftPreview }),
        children: [
            (0, s.jsx)("div", {
                className: nZ.dL,
                children: (0, s.jsx)(e3, { productRecord: i, selectedProduct: r, selectedBundleSlide: c }),
            }),
            null != o.LeftPreview &&
                (0, s.jsx)("div", {
                    className: nZ._E,
                    children: (0, s.jsx)(o.LeftPreview, {
                        user: a,
                        selectedProduct: r,
                        previewingProduct: l,
                        productRecord: i,
                        selectedBundleSlide: c,
                        pendingProfile: d,
                    }),
                }),
            (0, s.jsx)("div", { className: nZ.F_, children: (0, s.jsx)(o.Info, { ...t }) }),
            (0, s.jsx)(nK, { ...t }),
            n,
        ],
    });
}
var nQ = t(529756),
    n0 = t(408278),
    n1 = t(972213),
    n8 = t(60831),
    n2 = t(301198),
    n6 = t(60465),
    n4 = t(976860),
    n5 = t(38145),
    n3 = t(365491),
    n9 = t(668953),
    n7 = t(881636),
    te = t(807562);
function tn(e) {
    let { goPrev: n, goNext: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: te.Y,
                children: (0, s.jsx)(n0.K, {
                    "aria-label": $.intl.string($.t["3NdvMK"]),
                    onClick: n,
                    icon: n9.ChevronLargeLeftIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, s.jsx)("div", {
                className: te.K,
                children: (0, s.jsx)(n0.K, {
                    "aria-label": $.intl.string($.t.RYIeOX),
                    onClick: t,
                    icon: n7.ChevronLargeRightIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var tt = t(844222),
    ti = t(48062);
function ts(e) {
    return null != e ? { backgroundImage: `url(${e})` } : void 0;
}
let tr = (e) => {
    let { src: n } = e,
        { reducedMotion: t } = r.useContext(tt.C),
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
    let d = r.useCallback(() => {
        c(null);
    }, []);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != a && (0, s.jsx)("div", { className: G()(ti.Tp, ti.Mh), style: ts(a.src), "aria-hidden": !0 }, a.id),
            (0, s.jsx)(
                "div",
                { className: G()(ti.Tp, null != a && ti.ln), style: ts(i.src), onAnimationEnd: d, "aria-hidden": !0 },
                i.id,
            ),
        ],
    });
};
function tl(e) {
    let {
            user: n,
            pendingProfile: t,
            productRecord: i,
            previewingProduct: l,
            selectedProduct: a,
            selectedVariantIndex: c,
            selectedBundleSlide: d,
            setSelectedBundleSlide: o,
            isClosing: u,
            isOrbCheckoutModalOpen: m,
            pdpBackground: p,
            category: f,
            tab: E,
            onClose: g,
            onTrackClick: h,
        } = e,
        x = e1(i),
        v = (0, C.aw)(a),
        I = v ? a.items.length : 0,
        N = (function () {
            let { sessionId: e } = (0, k.uM)() ?? {},
                n = (0, n3.vs)((e) => e.reset);
            return r.useCallback(
                (t, i) => {
                    if (
                        (j.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: e,
                            sku_id: t.skuId,
                            cta_name: i,
                        }),
                        (0, n5.M)(),
                        (0, n6.p)(),
                        !0 !== t.isOrbsExclusive)
                    )
                        return void (0, n4.pX)(O.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
                    n();
                    let s = O.BVt.COLLECTIBLES_SHOP_WITH_TAB(Q.G2.ORBS);
                    (0, n4.pX)(`${s}&${Q.P1}=${t.skuId}`);
                },
                [e, n],
            );
        })(),
        A = r.useCallback(() => {
            (h(Q.sH.GO_TO_COLLECTION), g(), N(f, "go_to_collection_button"));
        }, [f, g, h, N]),
        y = r.useCallback(() => {
            I <= 1 || o((e) => (e - 1 + I) % I);
        }, [I, o]),
        R = r.useCallback(() => {
            I <= 1 || o((e) => (e + 1) % I);
        }, [I, o]),
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
            (h(Q.sH.CLOSE_DETAIL), g());
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
        }, [d]),
        (0, s.jsxs)("div", {
            className: G()(ti.i1, (0, Q.EZ)(a.skuId) ? ti.bF : a.type === D.R.AVATAR_DECORATION ? ti.Jq : ti.eF),
            onKeyDown: _,
            children: [
                (0, s.jsx)(tr, { src: p }),
                (0, s.jsx)("div", {
                    className: ti.GV,
                    children: (0, s.jsx)(e7.m, {
                        text: $.intl.string($.t["Hr/q/6"]),
                        children: (0, s.jsx)(ne.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: nQ.CollectionIcon,
                            text: f.name,
                            onClick: A,
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: ti.KR,
                    ref: L,
                    children: (0, s.jsx)(x.RightPreview, {
                        user: n,
                        pendingProfile: t,
                        productRecord: i,
                        selectedProduct: a,
                        previewingProduct: l,
                        selectedBundleSlide: d,
                        isClosing: u,
                        isOrbCheckoutModalOpen: m,
                    }),
                }),
                v && I > 1 && (0, s.jsx)(tn, { goPrev: y, goNext: R }),
                (0, s.jsxs)("div", {
                    className: ti.VG,
                    children: [
                        (0, s.jsx)(n2.R, {
                            product: i,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(n8.H, {
                            skuId: a.skuId,
                            product: a,
                            productName: (0, b.VG)(a),
                            tab: E,
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(n0.K, {
                            "aria-label": $.intl.string($.t.cpT0Cq),
                            onClick: T,
                            icon: n1.XLargeIcon,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var ta = t(80801);
let tc = (0, u.FT)(u._3.SIZE_152),
    td = function (e) {
        let {
                transitionState: n,
                onClose: t,
                product: i,
                category: l,
                returnRef: u,
                analyticsSource: D,
                analyticsLocations: M,
                tab: G,
                giftRecipient: U,
                giftingOrigin: H,
                leftPanelFooter: z,
                footer: V,
                isSwapping: W = !1,
            } = e,
            X = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
            q = (0, o.cf)([v.A], () => v.A.getPendingChanges()),
            $ = (0, F.f)(i),
            { previewingVariantIndex: Y } = $,
            K = (0, R.Q)(i),
            Z = w(i, Y),
            J = (0, P.rb)(i, K);
        a()(null != J, "Selected product should not be null");
        let { analyticsLocations: Q } = (0, E.Ay)([...M, f.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, S.Yr)(J.skuId);
        let ee = (0, B.U1)(l),
            [en] = r.useState(Math.random),
            [et, ei] = r.useState({ skuId: i.skuId, index: 0 }),
            es = et.skuId === i.skuId ? et.index : 0,
            er = r.useCallback(
                (e) =>
                    ei((n) => {
                        let t = n.skuId === i.skuId ? n.index : 0;
                        return { skuId: i.skuId, index: "function" == typeof e ? e(t) : e };
                    }),
                [i.skuId],
            );
        r.useEffect(() => {
            null != X && (0, I.A)(X.id, X.getAvatarURL(void 0, 80));
        }, [X]);
        let el = r.useMemo(() => (0, C.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            (j.default.track(O.HAw.OPEN_MODAL, {
                type: O.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: D,
                location_stack: Q,
                sku_id: J.skuId,
                product_type: el,
            }),
                (0, y.RD)(J.skuId));
        }, [D, Q, J.skuId, el]);
        let { cardId: ea, sessionId: ec, tilePosition: ed } = (0, k.uM)() ?? {},
            eo = r.useMemo(() => (0, P.v8)(i), [i]),
            eu = (function (e) {
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
            })({ skuId: J.skuId, productSkuIds: eo, analyticsLocations: Q });
        (0, g.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: J.skuId,
                card_id: ea,
                shop_session_id: ec,
                position_in_section: ed,
                product_sku_ids: eo,
                location_stack: Q,
            },
        });
        let em = (0, N.o6)(),
            ep = n === m.ip.EXITING,
            ef = (0, _.c)("product_details_modal");
        if (null == X || (i.skuId === d.j.PREMIUM_TIER_2_1_DAY && !ef)) return null;
        let eE = {
                pendingChanges: q,
                pendingAvatarSrc:
                    void 0 !== q.pendingAvatar
                        ? (0, h.sv)((0, x.V7)({ userId: X.id, image: q.pendingAvatar, size: tc }), null, X, {
                              size: tc,
                          })
                        : void 0,
            },
            eg = (0, b.VG)(i),
            eh = {
                user: X,
                pendingProfile: eE,
                productRecord: i,
                productName: eg,
                selectedProduct: J,
                previewingProduct: Z ?? null,
                category: l,
                selectedVariantIndex: K,
                previewingVariantIndexProps: $,
                selectedBundleSlide: es,
                setSelectedBundleSlide: er,
                tab: G,
                giftRecipient: U?.id !== X.id ? U : void 0,
                giftingOrigin: U?.id !== X.id ? H : void 0,
                analyticsLocations: Q,
                returnRef: u,
                onClose: t,
                onTrackClick: eu,
            };
        return (0, s.jsx)(E.f5, {
            value: Q,
            children: (0, s.jsx)(p.d, {
                returnRef: u,
                transitionState: n,
                onClose: t,
                size: "xl",
                paddingSize: "sm",
                "aria-label": eg,
                children: (0, s.jsxs)("div", {
                    className: ta.C,
                    "data-testid": "collectibles-shop-product-details-modal",
                    "data-has-footer": null != V,
                    children: [
                        (0, s.jsx)("div", {
                            className: ta.j,
                            "data-swapping": W,
                            "aria-busy": W,
                            children: (0, s.jsxs)(L.A.Provider, {
                                value: en,
                                children: [
                                    (0, s.jsx)(nJ, { ...eh, leftPanelFooter: z }),
                                    (0, s.jsx)(tl, {
                                        ...eh,
                                        isClosing: ep,
                                        isOrbCheckoutModalOpen: em,
                                        pdpBackground: ee,
                                    }),
                                ],
                            }),
                        }),
                        V,
                    ],
                }),
            }),
        });
    };
