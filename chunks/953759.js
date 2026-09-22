n.d(t, { default: () => ns });
var i,
    s = n(477900),
    r = n(582128),
    l = n(284009),
    a = n.n(l),
    c = n(562708),
    o = n(334279),
    d = n(702841),
    u = n(778712),
    m = n(231723),
    p = n(224640),
    x = n(793574),
    g = n(688810),
    f = n(139286),
    E = n(252732),
    h = n(101058),
    v = n(836602),
    N = n(903209),
    j = n(652165),
    A = n(287809),
    I = n(174459),
    R = n(839534),
    C = n(440938),
    y = n(298072),
    T = n(993408),
    _ = n(503089),
    k = n(331884),
    O = n(652215),
    L = n(623373),
    P = n(536572),
    S = n(177366),
    D = n(575593);
function b(e, t) {
    return e.type === D.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e;
}
var w = n(212407),
    M = n(935094),
    B = n(503698),
    F = n.n(B),
    G = n(939249),
    U = n(834730),
    H = n(297264),
    z = n(14702),
    V = n(223311),
    W = n(151115);
function X(e) {
    let t = (0, V.A)(O.FYj);
    return (0, W.L)(e, t);
}
var Z = n(288106),
    K = n(604913),
    Y = n(773669);
n(321073);
var $ = n(375708);
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) return $.intl.formatToPlainString($.t["/0Yndu"], { num: e.bundledProducts?.length });
    let n = e.bundledProducts ?? [],
        i = [],
        s = !1;
    for (let e of n)
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
var J = n(306396);
function Q(e, t) {
    return e.endsAt?.toLocaleDateString(t, { month: "numeric", day: "numeric" }) ?? null;
}
function ee(e) {
    return (0, T.aw)(e)
        ? $.intl.formatToPlainString($.t["1tUCAO"], { count: e.items.length })
        : (function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (null != e && null != e.summary && "" !== e.summary) {
                  if (e.type === D.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                      let n = q(e, t);
                      return e.summary.replace("{joinedItems}", n);
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
                      return q(e, t);
                  default:
                      return "";
              }
          })(e);
}
function et(e) {
    let t = X(e);
    return null != t
        ? (function (e, t) {
              let n = ee(e);
              switch (t.tenantMetadata?.collectibles?.type) {
                  case K.hE.COLLECT_AND_CLAIM: {
                      let i, s;
                      if (t.rewardStatus !== Z.GM.IN_PROGRESS) return n;
                      let r = Y.default.locale,
                          l = (0, J.oO)(e, t.tenantMetadata.collectibles.collectionId);
                      return (
                          ((0, T.aw)(e)
                              ? null != (i = Q(t, r))
                                  ? $.intl.formatToPlainString($.t["vI+3Ok"], { itemCount: l, endDate: i })
                                  : null
                              : null != (s = Q(t, r))
                                ? $.intl.formatToPlainString($.t.wBhFsO, {
                                      itemDescription: n.replace(/\.$/, ""),
                                      endDate: s,
                                  })
                                : null) ?? n
                      );
                  }
                  case K.hE.TARGETED_OFFER:
                  default:
                      return n;
              }
          })(e, t)
        : ee(e);
}
var en = n(758836),
    ei = n(690901);
function es(e) {
    let { name: t, typeLabel: n } = e;
    return (0, s.jsxs)(U.E, {
        variant: "text-sm/medium",
        className: ei.mC,
        "aria-live": "polite",
        children: [
            (0, s.jsx)("span", { className: ei.kx, children: t }),
            null != n && (0, s.jsx)("span", { className: ei.FP, children: n }),
        ],
    });
}
let er = { [D.R.AVATAR_DECORATION]: !0, [D.R.PROFILE_FRAME]: !0 };
function el(e) {
    let { item: t, index: n, isSelected: i, setSelected: l, label: a, trackedSkuId: c, onTrackClick: o } = e,
        d = r.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        u = r.useCallback(() => {
            (o(en.sH.BUNDLE_VIEW_PRODUCT, c), l(n));
        }, [o, c, l, n]),
        m = !0 === er[t.type];
    return (0, s.jsx)(G.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: F()(ei.xn, { [ei.Y4]: i, [ei.u8]: m }),
        onClick: u,
        "aria-label": a,
        children: (0, s.jsx)("div", { className: ei.Yf, children: (0, s.jsx)(z.O, { product: d }) }),
    });
}
var ea = n(442759),
    ec = n(344346),
    eo = n(139136),
    ed = n(395744),
    eu = n(929283),
    em = n(650228);
function ep(e) {
    let {
        item: t,
        user: n,
        bundleFirstAvatarDecoration: i,
        isBundle: r,
        pendingAvatarSrc: l,
        pendingAvatarDecoration: a,
        pendingDisplayNameStyles: c,
        pendingGlobalName: o,
    } = e;
    switch (t.type) {
        case D.R.AVATAR_DECORATION:
            return (0, s.jsx)("div", {
                className: em.h1,
                children: (0, s.jsx)(eu.i, { user: n, item: t, avatarSrcOverride: l, isHighlighted: !0 }),
            });
        case D.R.PROFILE_EFFECT:
            return (0, s.jsx)("div", {
                className: r ? em.sm : em.VY,
                children: (0, s.jsx)(eo.A, {
                    skuId: t.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case D.R.PROFILE_FRAME:
            return (0, s.jsx)("div", { className: r ? em.ob : em.fE, children: (0, s.jsx)(ed.A, { frame: t }) });
        case D.R.NAMEPLATE:
            return (0, s.jsx)("div", {
                className: em.Dz,
                children: (0, s.jsx)(ec.A, {
                    className: em.M4,
                    nameplate: t,
                    user: n,
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
function ex(e) {
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: r, pendingProfile: l } = e,
        a = i ?? n,
        { firstAvatarDecoration: c } = (0, ea.f5)(a),
        { pendingChanges: o, pendingAvatarSrc: d } = l,
        u = a.items[r] ?? a.items[0];
    return null == u
        ? null
        : (0, s.jsx)(ep, {
              item: u,
              user: t,
              bundleFirstAvatarDecoration: c,
              isBundle: (0, T.aw)(a),
              pendingAvatarSrc: d,
              pendingAvatarDecoration: o.pendingAvatarDecoration,
              pendingDisplayNameStyles: o.pendingDisplayNameStyles,
              pendingGlobalName: o.pendingGlobalName,
          });
}
var eg = n(846957);
function ef(e) {
    let { selectedProduct: t, previewingProduct: n } = e;
    return (0, s.jsx)(eg.B, { product: n ?? t });
}
var eE = n(975571),
    eh = n(740076),
    ev = n(661847),
    eN = n(422460);
function ej(e) {
    let { skuId: t } = e;
    return (0, en.EZ)(t)
        ? (0, s.jsx)(U.E, {
              variant: "text-sm/normal",
              className: eN.CU,
              children: $.intl.format($.t.Q1scdE, {
                  helpdeskArticle: eE.A.getArticleURL(O.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function eA(e) {
    let { productRecord: t, productName: n, selectedProduct: i, previewingVariantIndexProps: l } = e,
        { previewingVariantIndex: a, handleEntering: c, handleLeaving: o } = l,
        d = b(t, a) ?? i,
        u = et(d),
        { disabledReason: m } = (0, eh.I)(i.skuId),
        p = (0, y.Q)(t),
        x = (0, L.B1)(t),
        g = x ? t.variants[a ?? p] : null,
        f = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            null != f.current && ((f.current.tabIndex = -1), f.current.focus());
        }, []),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: eN.sn,
                    children: [
                        (0, s.jsx)(H.D, { ref: f, variant: "heading-xl/bold", className: eN.R_, children: n }),
                        (0, s.jsx)(U.E, { variant: "text-sm/normal", children: u }),
                        (0, s.jsx)(ej, { skuId: d.skuId }),
                        null !== m && (0, s.jsx)(U.E, { variant: "text-xs/normal", className: eN.H$, children: m }),
                    ],
                }),
                x &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != g &&
                                (0, s.jsx)(U.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: eN.a9,
                                    lineClamp: 1,
                                    children: $.intl.format($.t.EcaRWt, {
                                        value: (0, s.jsx)("span", { className: eN.I8, children: g.variantLabel }),
                                    }),
                                }),
                            (0, s.jsx)("div", {
                                className: eN._x,
                                children: (0, s.jsx)(ev.A, {
                                    skuId: t.skuId,
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
var eI =
        (((i = {}).COLLECTIBLE = "COLLECTIBLE"),
        (i.BUNDLE = "BUNDLE"),
        (i.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (i.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (i.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        i),
    eR = n(97808),
    eC = n(346055),
    ey = n(993077),
    eT = n(245604),
    e_ = n(460905),
    ek = n(262295),
    eO = n(685073),
    eL = n(320095),
    eP = n(963852),
    eS = n(763754),
    eD = n(20851),
    eb = n(986687),
    ew = n(158045),
    eM = n(780898),
    eB = n(158008);
function eF(e) {
    let { user: t, innerClassName: n } = e;
    return (0, s.jsx)("div", {
        className: eB.mV,
        children: (0, s.jsx)(ek.A, {
            avatar: (0, s.jsx)(eR.eu, {
                src: t.avatarSrc,
                size: u._3.SIZE_32,
                "aria-label": t.name,
                status: O.clD.ONLINE,
            }),
            name: t.name,
            innerClassName: F()(eB.$L, n),
        }),
    });
}
function eG(e) {
    let { user: t, nameplate: n, avatarDecoration: i, pendingDisplayNameStyles: r, pendingGlobalName: l } = e,
        a = (0, eM.Ov)();
    return (0, s.jsx)("div", {
        className: eB.nJ,
        role: "img",
        "aria-label": $.intl.formatToPlainString($.t["95pCSf"], { a11y_text: n.label }),
        children: (0, s.jsxs)(eC.M, {
            children: [
                (0, s.jsx)(eF, { user: a.mallow, innerClassName: eB.ab }),
                (0, s.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: eB.OS,
                    children: [$.intl.string($.t["yzW/fZ"]), " - 3"],
                }),
                (0, s.jsx)(eF, { user: a.phibi, innerClassName: eB.e9 }),
                (0, s.jsx)("div", {
                    className: eB.mV,
                    children: (0, s.jsx)(ec.A, {
                        className: eB.M4,
                        innerClassName: eB.e9,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: i,
                        pendingDisplayNameStyles: r,
                        pendingGlobalName: l,
                        hideDecorators: !0,
                    }),
                }),
                (0, s.jsx)(eF, { user: a.locke, innerClassName: eB.e9 }),
                (0, s.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: eB.OS,
                    children: [$.intl.string($.t["NG43/6"]), " - 12"],
                }),
                (0, s.jsx)(eF, { user: a.boom, innerClassName: eB.bD }),
                (0, s.jsx)(eF, { user: a.cherry, innerClassName: eB.bD }),
            ],
        }),
    });
}
function eU(e) {
    let {
            user: t,
            avatarDecoration: n,
            pendingAvatarSrc: i,
            pendingPrimaryGuildId: r,
            pendingDisplayNameStyles: l,
            pendingGlobalName: a,
        } = e,
        c = (function (e) {
            let { author: t } = e;
            return (0, eL.rh)({
                ...(0, eP.Ay)({ author: t, channelId: "1337", content: $.intl.string($.t.d5YwK5) }),
                state: O.cmJ.SENT,
                id: "0",
            });
        })({ author: t }),
        o = (0, eO.gS)(r),
        d = (0, eS.p_)(c),
        u = {
            ...d,
            nick:
                void 0 !== a
                    ? (0, E.eh)({ pendingNickname: void 0, pendingGlobalName: a, user: t, guildMember: null })
                    : d.nick,
            primaryGuild: void 0 !== r ? o : d.primaryGuild,
            displayNameStyles: void 0 !== l ? l : d.displayNameStyles,
        };
    return (0, s.jsx)("div", {
        role: "img",
        "aria-label": $.intl.string($.t["TN+ZvB"]),
        children: (0, s.jsx)(eC.M, {
            children: (0, s.jsxs)(ey.Z, {
                className: eB.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, s.jsx)(
                        eD.A,
                        {
                            className: eB.G5,
                            author: u,
                            message: c,
                            avatarDecorationOverride: n ?? null,
                            avatarOverride: i,
                        },
                        c.id,
                    ),
                    (0, s.jsxs)("div", {
                        className: eB.lG,
                        children: [
                            (0, s.jsx)(eT.U, { size: "md", color: "currentColor", className: eB.hq }),
                            (0, s.jsx)(e_.n, { size: "md", color: "currentColor", className: eB.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eH(e) {
    let { product: t, user: n, pendingProfile: i, activeBundleSlide: r } = e,
        l = ew.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: a, ...c } = i.pendingChanges,
        o = i.pendingAvatarSrc,
        d = t.type === D.R.BUNDLE ? t.items[r ?? 0] : void 0,
        u = d?.type ?? t.type,
        m = u === D.R.AVATAR_DECORATION,
        p = u === D.R.PROFILE_EFFECT,
        { firstAvatarDecoration: x, firstProfileEffect: g, firstNameplate: f, firstProfileFrame: E } = (0, ea.f5)(t),
        h = d?.type === D.R.AVATAR_DECORATION ? d : x,
        v = d?.type === D.R.PROFILE_EFFECT ? d : g,
        N = d?.type === D.R.PROFILE_FRAME ? d : E,
        j = d?.type === D.R.NAMEPLATE ? d : f;
    if (u === D.R.NAMEPLATE && null != j)
        return (0, s.jsx)("div", {
            className: eB.Zj,
            children: (0, s.jsx)(eG, {
                user: n,
                nameplate: j,
                avatarDecoration: h ?? c.pendingAvatarDecoration,
                pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                pendingGlobalName: c.pendingGlobalName,
            }),
        });
    return (0, s.jsx)("div", {
        className: m ? eB.RA : eB.hZ,
        children: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(eb.A, {
                    ...c,
                    pendingAvatar: o,
                    user: n,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: h ?? c.pendingAvatarDecoration,
                    pendingProfileEffect: v ?? c.pendingProfileEffect,
                    profileEffectRestartKey: r,
                    pendingProfileFrame: N ?? c.pendingProfileFrame,
                    disabledInputs: !0,
                    hideMessageInput: !p,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? eB.oB : void 0,
                }),
                m &&
                    (0, s.jsx)(eU, {
                        user: n,
                        avatarDecoration: h,
                        pendingAvatarSrc: o,
                        pendingPrimaryGuildId: c.pendingPrimaryGuildId,
                        pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                        pendingGlobalName: c.pendingGlobalName,
                    }),
            ],
        }),
    });
}
function ez(e) {
    let { user: t, pendingProfile: n, selectedProduct: i, previewingProduct: r, selectedBundleSlide: l } = e;
    return (0, s.jsx)(eH, { user: t, pendingProfile: n, product: r ?? i, activeBundleSlide: l });
}
var eV = n(478016),
    eW = n(661531),
    eX = n(219882),
    eZ = n(224016),
    eK = n(202541),
    eY = n(549848);
function e$() {
    let e = [
        $.intl.string($.t.E1NP2x),
        $.intl.string($.t.kpMomJ),
        (0, eX.M6)({
            legacyCopy: $.intl.string($.t.xT1Vfn),
            rolloutCopy: $.intl.formatToPlainString($.t.IDAfOy, {
                maxFileSize: (0, ew.EJ)(eK.PremiumTypes.TIER_2, { useSpace: !1 }),
            }),
        }),
        $.intl.string($.t.myyAEr),
        $.intl.string($.t.zTk8Ul),
    ];
    return (0, s.jsxs)("div", {
        className: eY.kL,
        children: [
            (0, s.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eY.ym,
            }),
            (0, s.jsx)(eZ.A, { color: "white" }),
            (0, s.jsx)("div", {
                className: eY.PX,
                children: e.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: eY.UJ,
                            children: [
                                (0, s.jsx)(eV.U, { color: eW.A.colors.WHITE }),
                                (0, s.jsx)(U.E, {
                                    variant: "text-sm/medium",
                                    color: "text-overlay-light",
                                    children: e,
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var eq = n(17928),
    eJ = n(132198),
    eQ = n(35929);
function e0(e) {
    let { user: t } = e,
        n = ew.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...r } = (0, eq.cf)([v.A], () => v.A.getPendingChanges()),
        l = (0, h.V7)({ userId: t.id, image: i });
    return (0, s.jsx)("div", {
        className: eQ.k,
        children: (0, s.jsx)(eb.A, {
            ...r,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, eJ._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
}
var e1 = n(165416);
function e2(e) {
    let { user: t, productRecord: n, isClosing: i, isOrbCheckoutModalOpen: r } = e;
    return n.skuId === en.Dp.ORB_PROFILE_BADGE
        ? i || r
            ? null
            : (0, s.jsx)(e0, { user: t })
        : (0, en.EZ)(n.skuId)
          ? (0, s.jsx)(e$, {})
          : (0, s.jsx)(eg.B, { product: n, className: e1.M });
}
let e8 = {
    [eI.COLLECTIBLE]: { LeftPreview: ex, Info: eA, RightPreview: ez },
    [eI.BUNDLE]: {
        LeftPreview: ex,
        Info: function (e) {
            let {
                    productRecord: t,
                    productName: n,
                    selectedBundleSlide: i,
                    setSelectedBundleSlide: l,
                    onTrackClick: a,
                } = e,
                c = t.items,
                o = t.bundledProducts,
                d = o?.[i]?.name,
                u = c[i]?.type,
                m = null != u ? (0, T.Dm)(u) : null,
                p = $.intl.string($.t.cTbdgu),
                x = et(t),
                g = r.useRef(null),
                f = r.useCallback(
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
                let e = g.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let t = e.querySelectorAll('[role="radio"]');
                t[i]?.focus();
            }, [i]);
            let E = r.useRef(null);
            return (
                r.useLayoutEffect(() => {
                    null != E.current && ((E.current.tabIndex = -1), E.current.focus());
                }, []),
                (0, s.jsxs)("div", {
                    className: ei.Qf,
                    children: [
                        (0, s.jsx)(H.D, {
                            ref: E,
                            variant: "heading-xl/bold",
                            className: ei.R_,
                            title: n,
                            children: n,
                        }),
                        (0, s.jsx)(U.E, { variant: "text-sm/medium", color: "text-default", children: x }),
                        (0, s.jsxs)("div", {
                            className: ei.hZ,
                            children: [
                                (0, s.jsx)("div", {
                                    className: ei.vg,
                                    children: (0, s.jsx)("div", {
                                        ref: g,
                                        className: ei.hK,
                                        role: "radiogroup",
                                        "aria-label": p,
                                        tabIndex: -1,
                                        onKeyDown: f,
                                        children: c.map((e, t) => {
                                            let n = o?.[t]?.name ?? e.skuId,
                                                r = o?.[t]?.skuId ?? e.skuId;
                                            return (0, s.jsx)(
                                                el,
                                                {
                                                    item: e,
                                                    index: t,
                                                    isSelected: t === i,
                                                    setSelected: l,
                                                    label: n,
                                                    trackedSkuId: r,
                                                    onTrackClick: a,
                                                },
                                                e.skuId,
                                            );
                                        }),
                                    }),
                                }),
                                null != d && (0, s.jsx)(es, { name: d, typeLabel: m }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: ez,
    },
    [eI.EXTERNAL_ORB_BADGE]: { LeftPreview: ef, Info: eA, RightPreview: e2 },
    [eI.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: ef, Info: eA, RightPreview: e2 },
    [eI.EXTERNAL_GENERIC]: { LeftPreview: ef, Info: eA, RightPreview: e2 },
};
function e6(e) {
    var t;
    return e8[
        ((t = e),
        (0, en.pQ)(t.skuId)
            ? t.skuId === en.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, en.EZ)(t.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, T.aw)(t)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var e5 = n(268959),
    e3 = n(866665),
    e9 = n(508770),
    e7 = n(278416);
let e4 = (e) => {
    let { promotion: t } = e;
    return (0, s.jsx)(e3.m, {
        position: "top",
        asContainer: !0,
        text: $.intl.formatToPlainString($.t.cNtuKF, { offerName: t.displayName }),
        children: (0, s.jsx)(e9.E, {
            type: { text: $.intl.string($.t["nb5PC/"]) },
            variant: "expressive",
            icon: e7.TagIcon,
        }),
    });
};
var te = n(252125);
function tt(e) {
    let t,
        { productRecord: n, selectedProduct: i, selectedBundleSlide: r } = e,
        l = X(i),
        a = (function (e) {
            switch (e?.tenantMetadata?.collectibles?.type) {
                case K.hE.COLLECT_AND_CLAIM:
                    return e.rewardStatus === Z.GM.IN_PROGRESS;
                case K.hE.TARGETED_OFFER:
                    return !0;
                default:
                    return !1;
            }
        })(l),
        c = n.type === D.R.BUNDLE ? (n.items[r] ?? n.items[0]) : void 0;
    return (
        (t =
            null != c &&
            !n.hideBadge &&
            null == n.badgeOverride &&
            (0, L.JQ)({ skuId: c.skuId, type: c.type, items: [c] })
                ? (0, s.jsx)(e5.s, {})
                : (0, s.jsx)(e5.A, { skuId: n.skuId })),
        (0, s.jsxs)("div", { className: te.N, children: [t, null != l && a && (0, s.jsx)(e4, { promotion: l })] })
    );
}
var tn = n(462887),
    ti = n(821609),
    ts = n(318254),
    tr = n(825484),
    tl = n(331322),
    ta = n(736653),
    tc = n(44120),
    to = n(465794),
    td = n(757036),
    tu = n(761705),
    tm = n(580630),
    tp = n(4227),
    tx = n(466459),
    tg = n(518865),
    tf = n(885574),
    tE = n(495900);
function th(e) {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, s.jsx)(e3.m, {
              position: "top",
              align: "left",
              text: $.intl.string($.t.y1VWkZ),
              children: (0, s.jsxs)("div", {
                  className: F()(tE.GX, t),
                  children: [
                      (0, s.jsx)("span", {
                          className: tE.P0,
                          children: (0, s.jsx)(tf.CircleInformationIcon, {
                              size: "md",
                              color: "currentColor",
                              className: tE.G,
                          }),
                      }),
                      (0, s.jsx)(U.E, { variant: "text-md/semibold", children: $.intl.string($.t.BEjTij) }),
                  ],
              }),
          })
        : (0, s.jsx)(U.E, { variant: "text-md/semibold", className: t, children: $.intl.string($.t["6cfuDj"]) });
}
var tv = n(878112),
    tN = n(572595),
    tj = n(206835),
    tA = n(450481);
let tI = function (e) {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: r, isApplying: l, canUseNow: a } = (0, tA.p)({ product: t, onSuccess: n }),
        c = (0, tj.A)();
    return a
        ? (0, s.jsx)(ti.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(en.sH.USE_NOW), r());
              },
              loading: l,
              text: $.intl.string($.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, s.jsx)(ti.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(en.sH.EDIT_PROFILE), c(), n?.());
              },
              text: $.intl.string($.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tR = n(561769),
    tC = n(140735),
    ty = n(826706);
function tT(e) {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: r = "heading-md/semibold",
        } = e,
        l = (0, tm.RS)(t, n);
    return (0, s.jsxs)(U.E, {
        variant: r,
        className: F()(ty.v, i),
        children: [
            (0, s.jsx)(tC.A, { children: $.intl.format($.t["2CEGln"], { price: l }) }),
            (0, s.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var t_ = n(219103),
    tk = n(282968);
function tO(e) {
    let {
            product: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: r,
            className: l,
            hideStrikethroughPrice: a = !1,
            discountIconDisplayMode: c,
            discountIconSize: o = "md",
        } = e,
        d = (0, T.WD)(t, { hasShopDiscount: n, discount: r });
    if (null == d) return null;
    let { defaultPrice: u, showDefaultPriceOnly: m } = d;
    if (m)
        return (0, s.jsx)("div", {
            className: F()(tk.kG, l),
            children: (0, s.jsx)(t_.x, { priceAmount: u.amount, priceCurrency: u.currency }),
        });
    let { showDiscountPrice: p, originalPrice: x, finalPrice: g } = d;
    return (0, s.jsxs)("div", {
        className: F()(tk.kG, l),
        children: [
            a ? null : (0, s.jsx)(tT, { price: x, className: tk.q9 }),
            (0, s.jsx)(t_.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
                discount: r,
                className: tk.q9,
                discountIconConfig: p && null != c ? { displayMode: c, source: i ?? T.D0.NITRO, size: o } : void 0,
            }),
        ],
    });
}
var tL = n(403581),
    tP = n(75678),
    tS = n(843625);
function tD(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, g.Ay)(),
        l = r.useRef(null);
    return (0, s.jsx)(G.D, {
        className: tS.F,
        innerRef: l,
        onClick: () => {
            (n?.(en.sH.SUBSCRIBE_NOW),
                (0, tP.A)({ subscriptionTier: eK.pe.TIER_2, analyticsLocations: i, returnRef: l }));
        },
        children: t,
    });
}
var tb = n(329986);
function tw(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, T.yt)(t, O.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let r = (0, tm.RS)(i.amount, i.currency);
    return (0, s.jsxs)("div", {
        className: tb.k,
        children: [
            (0, s.jsx)(e3.m, {
                text: $.intl.string($.t.MPFyJ5),
                "aria-label": $.intl.string($.t.X3Ekj8),
                children: (0, s.jsx)(tL.t, { size: "md", color: "currentColor", className: tb.o }),
            }),
            (0, s.jsx)(U.E, {
                variant: "text-xs/medium",
                children: $.intl.format($.t.Sv8iic, {
                    price: r,
                    subscribeNowHook: (e) => (0, s.jsx)(tD, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var tM = n(818348),
    tB = n(426919);
function tF(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i, discount: r } = e,
        l = n ? $.intl.string($.t.wu4gyV) : $.intl.string($.t.eFNRzU),
        a = n || !i;
    return (0, s.jsxs)("div", {
        className: tB.eg,
        children: [
            (0, s.jsx)("div", {
                className: tB.zR,
                children: (0, s.jsx)(U.E, { variant: "text-xs/normal", className: a ? tB.r9 : void 0, children: l }),
            }),
            (0, s.jsx)(t_.x, {
                priceAmount: t.amount,
                priceCurrency: t.currency,
                discount: r,
                className: a ? tB.r9 : void 0,
            }),
        ],
    });
}
function tG(e) {
    let {
        prices: t,
        hasShopDiscount: n,
        discountSource: i,
        discount: r,
        product: l,
        hasSufficientOrbs: a,
        onTrackClick: c,
        isProductDisabled: o,
    } = e;
    return 0 === t.length
        ? null
        : t[0].currency === tM.Yr.DISCORD_ORB
          ? (0, s.jsx)(tF, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: a, discount: r })
          : (0, s.jsxs)("div", {
                className: tB.eg,
                children: [
                    (0, s.jsxs)("div", {
                        className: tB.pw,
                        children: [
                            (0, s.jsx)(tO, {
                                product: l,
                                discount: r,
                                hasShopDiscount: n,
                                discountSource: i,
                                hideStrikethroughPrice: !n,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            n ? null : (0, s.jsx)(tw, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tM.Yr.DISCORD_ORB &&
                        (0, s.jsx)(t_.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !a ? tB.r9 : void 0,
                        }),
                ],
            });
}
var tU = n(347722),
    tH = n(57020),
    tz = n(61750),
    tV = n(58703),
    tW = n(543080);
function tX(e) {
    let { label: t, countdown: n } = e;
    return (0, s.jsxs)("div", {
        className: tW.lo,
        children: [
            (0, s.jsxs)("div", {
                className: tW.fZ,
                children: [
                    (0, s.jsx)(e7.TagIcon, { size: "xs", color: "currentColor", className: tW.CE }),
                    (0, s.jsx)(U.E, { variant: "text-xs/medium", color: "none", children: t }),
                ],
            }),
            null != n && (0, s.jsx)(U.E, { variant: "text-xs/medium", color: "none", children: n }),
        ],
    });
}
function tZ(e) {
    let {
            user: t,
            productRecord: n,
            selectedProduct: i,
            category: l,
            shouldCheckoutWithOrbs: a,
            tab: c,
            giftRecipient: o,
            giftingOrigin: u,
            analyticsLocations: m,
            returnRef: p,
            onClose: x,
            onTrackClick: g,
        } = e,
        { cardId: f, sessionId: E, tilePosition: h } = (0, C.uM)() ?? {},
        v = (0, td.L)(eK.PremiumTypes.TIER_2),
        N = (0, T.xM)(t),
        A = ew.Ay.canUseShopDiscounts(t),
        I = X(i),
        y = (0, tg.MX)(I),
        _ = (0, tg.Jl)(I),
        k = r.useMemo(
            () =>
                null != I
                    ? (function (e) {
                          switch (e.tenantMetadata?.collectibles?.type) {
                              case K.hE.COLLECT_AND_CLAIM:
                                  if (e.rewardStatus !== Z.GM.IN_PROGRESS) return null;
                                  let t = e.progress;
                                  if (null == t) return null;
                                  let n = null != e.endsAt ? Math.ceil((0, tV.c_)(e.endsAt, new Date())) : null,
                                      i =
                                          null != n && n > 0
                                              ? $.intl.formatToPlainString($.t.w4GEvw, { days: n })
                                              : null;
                                  return {
                                      label: $.intl.formatToPlainString($.t.d9KbHK, {
                                          current: t.current,
                                          target: t.target,
                                      }),
                                      countdown: i,
                                  };
                              case K.hE.TARGETED_OFFER:
                              default:
                                  return null;
                          }
                      })(I)
                    : null,
            [I],
        ),
        L = (0, tx.h)(n),
        { isPurchased: P, isPartiallyOwnedBundle: S } = (0, tx.h)(i),
        { isDisabled: D } = (0, eh.I)(i.skuId),
        b = (0, T.Zu)({ product: i, isPartiallyOwnedBundle: S, isPurchased: P }),
        w = (0, d.bG)([tp.A], () => tp.A.isClaiming === i?.skuId),
        M = (0, ta.Ay)(),
        B = (0, tn.M)(M),
        G = (0, T.G0)(i),
        H = (0, T.yt)(i, O.lid.DEFAULT),
        z = H?.amount === 0,
        V = (0, tU.X)(i),
        W = _ ? tR.Hi.FIAT : c === en.G2.ORBS && a ? tR.Hi.ORBS : void 0,
        { checkoutEligiblePrices: Y, hasSufficientOrbs: q } = (0, tH.F)({
            product: i,
            hasShopDiscount: A,
            prioritizedCurrency: W,
        }),
        J = r.useMemo(() => (0, T.fT)(i, A, Y[0]?.currency), [i, A, Y]),
        Q = r.useMemo(() => Y.some((e) => e.currency === tM.Yr.DISCORD_ORB), [Y]);
    (0, tu.W)({ disableFetch: !Q });
    let ee = r.useCallback(() => {
        (g(en.sH.BUY_WITH_FIAT),
            (0, tc.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: E,
                onClose: (e) => (e ? x() : (0, tM.tE)()),
            }));
    }, [m, x, i.skuId, g, E]);
    return (0, s.jsxs)("div", {
        className: tW.iw,
        children: [
            L.isPurchased || L.isPartiallyOwnedBundle
                ? (0, s.jsx)(th, { className: tW.On, isPartiallyPurchased: S })
                : G
                  ? (0, s.jsxs)("div", {
                        className: tW.pq,
                        children: [
                            (0, s.jsx)(U.E, { variant: "text-md/semibold", children: $.intl.string($.t.rt69oo) }),
                            !P &&
                                (0, s.jsx)(U.E, {
                                    className: F()(tW.ed, !B && tW.un),
                                    variant: "text-xxs/normal",
                                    children: $.intl.string($.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, s.jsx)(tG, {
                        prices: Y,
                        product: i,
                        hasShopDiscount: A,
                        discountSource: N,
                        discount: J,
                        hasSufficientOrbs: q,
                        isProductDisabled: D,
                        onTrackClick: g,
                    }),
            null != k && (0, s.jsx)(tX, { ...k }),
            (0, s.jsx)(tl.B, {
                direction: "vertical",
                gap: 8,
                children: (function () {
                    if (G && !v && !z) {
                        var e;
                        return (
                            (e = $.intl.string($.t.sEAnVH)),
                            (0, s.jsx)(to.A, {
                                subscriptionTier: eK.pe.TIER_2,
                                fullWidth: !0,
                                buttonTextOverride: e,
                                onClick: () => {
                                    (g(en.sH.UNLOCK_WITH_NITRO), (0, tN.M)());
                                },
                                onSubscribeModalClose: () => {
                                    (0, tN.t)({
                                        product: n,
                                        category: l,
                                        shouldCheckoutWithOrbs: a,
                                        returnRef: p,
                                        analyticsLocations: m,
                                        tab: c,
                                        giftRecipient: o,
                                        giftingOrigin: u,
                                        cardId: f,
                                        sessionId: E,
                                        tilePosition: h,
                                    });
                                },
                            })
                        );
                    }
                    return b
                        ? P
                            ? V
                                ? (0, s.jsxs)(tr.e, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, s.jsx)(tI, { product: i, onSuccess: x, onTrackClick: g }),
                                          (0, s.jsx)(tv.A, {
                                              primary: !0,
                                              product: i,
                                              onSuccess: x,
                                              giftRecipient: o,
                                              giftingOrigin: u,
                                              onTrackClick: g,
                                          }),
                                      ],
                                  })
                                : (0, s.jsx)(tI, { product: i, onSuccess: x, onTrackClick: g })
                            : G
                              ? (0, s.jsx)(ti.$, {
                                    loading: w,
                                    loadingStartedLabel: $.intl.string($.t["TYw+9s"]),
                                    loadingFinishedLabel: $.intl.string($.t.Pg1UP5),
                                    onClick: async () => {
                                        (g(en.sH.ADD_TO_COLLECTION),
                                            await (0, R.iJ)(i.skuId),
                                            x(),
                                            (0, tz.A)({
                                                product: i,
                                                analyticsLocations: m,
                                                purchaseType: en.gs.PREMIUM_PURCHASE,
                                            }));
                                    },
                                    text: $.intl.string($.t.zp6caO),
                                    fullWidth: !0,
                                })
                              : (0, s.jsx)(s.Fragment, {
                                    children: Y.map((e, t) => {
                                        let n,
                                            l,
                                            a,
                                            c,
                                            d,
                                            p = 0 === t,
                                            f =
                                                e.currency === tM.Yr.DISCORD_ORB
                                                    ? ((n = D ? $.intl.string($.t.cTdr3x) : $.intl.string($.t.zqh7ZM)),
                                                      (l = !q || D),
                                                      (a = $.intl.formatToPlainString($.t.yi41qQ, {
                                                          orbPrice: e.amount,
                                                      })),
                                                      (c = l ? `${a}, ${n}` : a),
                                                      (0, s.jsx)(e3.m, {
                                                          position: "top",
                                                          text: n,
                                                          shouldShow: l,
                                                          "aria-label": !1,
                                                          children: (0, s.jsx)(ti.$, {
                                                              variant: p ? "primary" : "secondary",
                                                              onClick: function () {
                                                                  (g(en.sH.BUY_WITH_ORBS),
                                                                      (0, j.B4)({
                                                                          skuId: i.skuId,
                                                                          onComplete: (e) => {
                                                                              ((0, R.gB)(),
                                                                                  x(),
                                                                                  (0, tz.A)({
                                                                                      product: i,
                                                                                      analyticsLocations: m,
                                                                                      itemConsumed:
                                                                                          e?.entitlements?.[0]
                                                                                              ?.consumed,
                                                                                      purchaseType: en.gs.ORB,
                                                                                  }));
                                                                          },
                                                                          analyticsLocations: m,
                                                                          discoverySessionId: E,
                                                                      }));
                                                              },
                                                              disabled: l,
                                                              "aria-label": c,
                                                              text: $.intl.format($.t.JC15qj, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, s.jsx)(ts.C, {
                                                                          className: tW.fN,
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                              }),
                                                              fullWidth: !0,
                                                          }),
                                                      }))
                                                    : ((d =
                                                          y ??
                                                          $.intl.formatToPlainString($.t["cNSL/j"], {
                                                              price: (0, tm.$g)(e.amount, e.currency),
                                                          })),
                                                      (0, s.jsxs)(tr.e, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, s.jsx)(ti.$, {
                                                                  variant: p ? "primary" : "secondary",
                                                                  onClick: ee,
                                                                  text: d,
                                                                  fullWidth: !0,
                                                              }),
                                                              V &&
                                                                  (0, s.jsx)(tv.A, {
                                                                      primary: p,
                                                                      product: i,
                                                                      onSuccess: x,
                                                                      giftRecipient: o,
                                                                      giftingOrigin: u,
                                                                      onTrackClick: g,
                                                                  }),
                                                          ],
                                                      }));
                                        return (0, s.jsx)(r.Fragment, { children: f }, e.currency);
                                    }),
                                })
                        : V
                          ? (0, s.jsx)(tv.A, {
                                primary: !0,
                                product: i,
                                onSuccess: x,
                                fullWidth: !0,
                                giftRecipient: o,
                                giftingOrigin: u,
                                onTrackClick: g,
                            })
                          : null;
                })(),
            }),
        ],
    });
}
var tK = n(634656);
function tY(e) {
    let {
            productRecord: t,
            selectedProduct: n,
            previewingProduct: i,
            user: r,
            selectedBundleSlide: l,
            pendingProfile: a,
        } = e,
        c = e6(t);
    return (0, s.jsxs)("div", {
        className: F()(tK.wd, { [tK.E7]: null != c.LeftPreview }),
        children: [
            (0, s.jsx)("div", {
                className: tK.dL,
                children: (0, s.jsx)(tt, { productRecord: t, selectedProduct: n, selectedBundleSlide: l }),
            }),
            null != c.LeftPreview &&
                (0, s.jsx)("div", {
                    className: tK._E,
                    children: (0, s.jsx)(c.LeftPreview, {
                        user: r,
                        selectedProduct: n,
                        previewingProduct: i,
                        productRecord: t,
                        selectedBundleSlide: l,
                        pendingProfile: a,
                    }),
                }),
            (0, s.jsx)("div", { className: tK.F_, children: (0, s.jsx)(c.Info, { ...e }) }),
            (0, s.jsx)(tZ, { ...e }),
        ],
    });
}
var t$ = n(529756),
    tq = n(408278),
    tJ = n(972213),
    tQ = n(156248),
    t0 = n(139146),
    t1 = n(60465),
    t2 = n(976860),
    t8 = n(402860),
    t6 = n(50920),
    t5 = n(365491),
    t3 = n(668953),
    t9 = n(881636),
    t7 = n(807562);
function t4(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: t7.Y,
                children: (0, s.jsx)(tq.K, {
                    "aria-label": $.intl.string($.t["3NdvMK"]),
                    onClick: t,
                    icon: t3.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, s.jsx)("div", {
                className: t7.K,
                children: (0, s.jsx)(tq.K, {
                    "aria-label": $.intl.string($.t.RYIeOX),
                    onClick: n,
                    icon: t9.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var ne = n(48062);
function nt(e) {
    let {
            user: t,
            pendingProfile: n,
            productRecord: i,
            previewingProduct: l,
            selectedProduct: a,
            selectedVariantIndex: c,
            selectedBundleSlide: o,
            setSelectedBundleSlide: d,
            isClosing: u,
            isOrbCheckoutModalOpen: m,
            pdpBackground: p,
            category: x,
            tab: g,
            onClose: f,
            onTrackClick: E,
        } = e,
        h = e6(i),
        v = (0, T.aw)(a),
        N = v ? a.items.length : 0,
        j = (function () {
            let e = (0, t6.a)("CollectiblesPdpNavigateToCollection"),
                { sessionId: t } = (0, C.uM)() ?? {},
                n = (0, t5.v)((e) => e.reset);
            return r.useCallback(
                (i, s) => {
                    if (
                        (I.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: t,
                            sku_id: i.skuId,
                            cta_name: s,
                        }),
                        (0, t8.closeUserProfileModal)(),
                        (0, t1.p)(),
                        e && !0 !== i.isOrbsExclusive)
                    )
                        return void (0, t2.pX)(O.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(i.skuId));
                    n();
                    let r = !0 === i.isOrbsExclusive ? en.G2.ORBS : en.G2.CATALOG;
                    (0, t2.pX)(`${O.BVt.COLLECTIBLES_SHOP_WITH_TAB(r)}&${en.P1}=${i.skuId}`);
                },
                [e, t, n],
            );
        })(),
        A = r.useCallback(() => {
            (E(en.sH.GO_TO_COLLECTION), f(), j(x, "go_to_collection_button"));
        }, [x, f, E, j]),
        R = r.useCallback(() => {
            N <= 1 || d((e) => (e - 1 + N) % N);
        }, [N, d]),
        y = r.useCallback(() => {
            N <= 1 || d((e) => (e + 1) % N);
        }, [N, d]),
        _ = r.useCallback(
            (e) => {
                if (N <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), R())
                        : "ArrowRight" === e.key && (e.preventDefault(), y()));
            },
            [N, R, y],
        ),
        k = r.useCallback(() => {
            (E(en.sH.CLOSE_DETAIL), f());
        }, [E, f]),
        L = r.useRef(null),
        S = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (S.current) {
                S.current = !1;
                return;
            }
            let e = L.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [o]),
        (0, s.jsxs)("div", {
            className: F()(ne.i1, (0, en.EZ)(a.skuId) ? ne.bF : a.type === D.R.AVATAR_DECORATION ? ne.Jq : ne.eF),
            style: null != p ? { backgroundImage: `url(${p})` } : void 0,
            onKeyDown: _,
            children: [
                (0, s.jsx)("div", {
                    className: ne.GV,
                    children: (0, s.jsx)(e3.m, {
                        text: $.intl.string($.t["Hr/q/6"]),
                        children: (0, s.jsx)(ti.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: t$.c,
                            text: x.name,
                            onClick: A,
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: ne.KR,
                    ref: L,
                    children: (0, s.jsx)(h.RightPreview, {
                        user: t,
                        pendingProfile: n,
                        productRecord: i,
                        selectedProduct: a,
                        previewingProduct: l,
                        selectedBundleSlide: o,
                        isClosing: u,
                        isOrbCheckoutModalOpen: m,
                    }),
                }),
                v && N > 1 && (0, s.jsx)(t4, { goPrev: R, goNext: y }),
                (0, s.jsxs)("div", {
                    className: ne.VG,
                    children: [
                        (0, s.jsx)(t0.R, {
                            product: i,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: E,
                        }),
                        (0, s.jsx)(tQ.H, {
                            skuId: a.skuId,
                            product: a,
                            productName: (0, P.VG)(a),
                            tab: g,
                            onTrackClick: E,
                        }),
                        (0, s.jsx)(tq.K, {
                            "aria-label": $.intl.string($.t.cpT0Cq),
                            onClick: k,
                            icon: tJ.XLargeIcon,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var nn = n(80801);
let ni = (0, u.FT)(u._3.SIZE_152),
    ns = function (e) {
        let {
                transitionState: t,
                onClose: n,
                product: i,
                category: l,
                returnRef: u,
                analyticsSource: D,
                analyticsLocations: B,
                shouldCheckoutWithOrbs: F,
                tab: G,
                giftRecipient: U,
                giftingOrigin: H,
            } = e,
            z = (0, d.bG)([A.default], () => A.default.getCurrentUser()),
            V = (0, d.cf)([v.A], () => v.A.getPendingChanges()),
            W = (0, M.f)(i),
            { previewingVariantIndex: X } = W,
            Z = (0, y.Q)(i),
            K = b(i, X),
            Y = (0, L.rb)(i, Z);
        a()(null != Y, "Selected product should not be null");
        let { analyticsLocations: $ } = (0, g.Ay)([...B, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, S.Yr)(Y.skuId);
        let q = (0, w.U1)(l),
            [J, Q] = r.useState(0);
        r.useEffect(() => {
            null != z && (0, N.A)(z.id, z.getAvatarURL(void 0, 80));
        }, [z]);
        let ee = r.useMemo(() => (0, T.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            (I.default.track(O.HAw.OPEN_MODAL, {
                type: O.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: D,
                location_stack: $,
                sku_id: Y.skuId,
                product_type: ee,
            }),
                (0, R.RD)(Y.skuId));
        }, [D, $, Y.skuId, ee]);
        let { cardId: et, sessionId: en, tilePosition: ei } = (0, C.uM)() ?? {},
            es = r.useMemo(() => (0, L.v8)(i), [i]),
            er = (function (e) {
                let { skuId: t, productSkuIds: n, analyticsLocations: i } = e,
                    { cardId: s, sessionId: l } = (0, C.uM)() ?? {},
                    a = (0, k.o)(),
                    c = (0, T.xM)(a);
                return r.useCallback(
                    (e, r) => {
                        I.default.track(O.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: r ?? t,
                            cta: e,
                            shop_session_id: l,
                            card_id: s,
                            product_sku_ids: n,
                            location_stack: i,
                            discount_source: (0, T.b_)(c),
                        });
                    },
                    [t, i, s, n, l, c],
                );
            })({ skuId: Y.skuId, productSkuIds: es, analyticsLocations: $ });
        (0, f.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: Y.skuId,
                card_id: et,
                shop_session_id: en,
                position_in_section: ei,
                product_sku_ids: es,
                location_stack: $,
            },
        });
        let el = (0, j.o6)(),
            ea = t === m.ip.EXITING,
            ec = (0, _.c)("product_details_modal");
        if (null == z || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !ec)) return null;
        let eo = {
                pendingChanges: V,
                pendingAvatarSrc:
                    void 0 !== V.pendingAvatar
                        ? (0, E.sv)((0, h.V7)({ userId: z.id, image: V.pendingAvatar, size: ni }), null, z, {
                              size: ni,
                          })
                        : void 0,
            },
            ed = (0, P.VG)(i),
            eu = {
                user: z,
                pendingProfile: eo,
                productRecord: i,
                productName: ed,
                selectedProduct: Y,
                previewingProduct: K ?? null,
                category: l,
                selectedVariantIndex: Z,
                previewingVariantIndexProps: W,
                selectedBundleSlide: J,
                setSelectedBundleSlide: Q,
                tab: G,
                shouldCheckoutWithOrbs: F,
                giftRecipient: U?.id !== z.id ? U : void 0,
                giftingOrigin: U?.id !== z.id ? H : void 0,
                analyticsLocations: $,
                returnRef: u,
                onClose: n,
                onTrackClick: er,
            };
        return (0, s.jsx)(g.f5, {
            value: $,
            children: (0, s.jsx)(p.d, {
                returnRef: u,
                transitionState: t,
                onClose: n,
                size: "xl",
                paddingSize: "sm",
                "aria-label": ed,
                children: (0, s.jsx)("div", {
                    className: nn.C,
                    children: (0, s.jsxs)("div", {
                        className: nn.j,
                        children: [
                            (0, s.jsx)(tY, { ...eu }),
                            (0, s.jsx)(nt, { ...eu, isClosing: ea, isOrbCheckoutModalOpen: el, pdpBackground: q }),
                        ],
                    }),
                }),
            }),
        });
    };
