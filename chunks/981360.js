n.d(t, { default: () => nn });
var i,
    s = n(477900),
    r = n(582128),
    l = n(284009),
    a = n.n(l),
    c = n(562708),
    d = n(334279),
    o = n(702841),
    u = n(778712),
    m = n(231723),
    p = n(224640),
    x = n(793574),
    g = n(688810),
    E = n(139286),
    h = n(252732),
    f = n(101058),
    v = n(836602),
    N = n(903209),
    A = n(652165),
    j = n(287809),
    I = n(174459),
    R = n(839534),
    C = n(440938),
    y = n(298072),
    _ = n(993408),
    T = n(503089),
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
    G = n(834730),
    U = n(939249),
    H = n(297264),
    z = n(14702),
    V = n(818296),
    X = n(288106),
    W = n(604913),
    Z = n(773669);
n(321073);
var K = n(375708);
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) return K.intl.formatToPlainString(K.t["/0Yndu"], { num: e.bundledProducts?.length });
    let n = e.bundledProducts ?? [],
        i = [],
        s = !1;
    for (let e of n)
        switch (e.type) {
            case D.R.AVATAR_DECORATION:
                i.push(K.intl.formatToPlainString(K.t.Ntv9Jt, { itemName: e.name }));
                break;
            case D.R.PROFILE_EFFECT:
                i.push(K.intl.formatToPlainString(K.t["3Y8q7a"], { itemName: e.name }));
                break;
            case D.R.NAMEPLATE:
                (i.push(K.intl.formatToPlainString(K.t["2keXky"], { itemName: e.name })), (s = !0));
        }
    if (s) {
        let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
        return K.intl.formatToPlainString(K.t.Ofrqj6, { joinedItems: e });
    }
    let r = i.join(" & ");
    return K.intl.formatToPlainString(K.t.Ofrqj6, { joinedItems: r });
}
var $ = n(306396);
function q(e, t) {
    return e.endsAt?.toLocaleDateString(t, { month: "numeric", day: "numeric" }) ?? null;
}
function J(e) {
    return (0, _.aw)(e)
        ? K.intl.formatToPlainString(K.t["1tUCAO"], { count: e.items.length })
        : (function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (null != e && null != e.summary && "" !== e.summary) {
                  if (e.type === D.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                      let n = Y(e, t);
                      return e.summary.replace("{joinedItems}", n);
                  }
                  return e.summary;
              }
              switch (e?.type) {
                  case D.R.AVATAR_DECORATION:
                      return K.intl.string(K.t["3lv7q2"]);
                  case D.R.PROFILE_EFFECT:
                      return K.intl.string(K.t.VhJL72);
                  case D.R.NAMEPLATE:
                      return K.intl.string(K.t.ik37EZ);
                  case D.R.PROFILE_FRAME:
                      return K.intl.string(K.t.fWzWPp);
                  case D.R.BUNDLE:
                      return Y(e, t);
                  default:
                      return "";
              }
          })(e);
}
function Q(e) {
    let t = (0, V.g)(e);
    return null != t
        ? (function (e, t) {
              let n = J(e);
              switch (t.tenantMetadata?.collectibles?.type) {
                  case W.hE.COLLECT_AND_CLAIM: {
                      let i, s;
                      if (t.rewardStatus !== X.GM.IN_PROGRESS) return n;
                      let r = Z.default.locale,
                          l = (0, $.oO)(e, t.tenantMetadata.collectibles.collectionId);
                      return (
                          ((0, _.aw)(e)
                              ? null != (i = q(t, r))
                                  ? K.intl.formatToPlainString(K.t["vI+3Ok"], { itemCount: l, endDate: i })
                                  : null
                              : null != (s = q(t, r))
                                ? K.intl.formatToPlainString(K.t.wBhFsO, {
                                      itemDescription: n.replace(/\.$/, ""),
                                      endDate: s,
                                  })
                                : null) ?? n
                      );
                  }
                  case W.hE.TARGETED_OFFER:
                  default:
                      return n;
              }
          })(e, t)
        : J(e);
}
var ee = n(758836),
    et = n(690901);
function en(e) {
    let { name: t, typeLabel: n } = e;
    return (0, s.jsxs)(G.E, {
        variant: "text-sm/medium",
        className: et.mC,
        "aria-live": "polite",
        children: [
            (0, s.jsx)("span", { className: et.kx, children: t }),
            null != n && (0, s.jsx)("span", { className: et.FP, children: n }),
        ],
    });
}
let ei = { [D.R.AVATAR_DECORATION]: !0, [D.R.PROFILE_FRAME]: !0 };
function es(e) {
    let { item: t, index: n, isSelected: i, setSelected: l, label: a, trackedSkuId: c, onTrackClick: d } = e,
        o = r.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        u = r.useCallback(() => {
            (d(ee.sH.BUNDLE_VIEW_PRODUCT, c), l(n));
        }, [d, c, l, n]),
        m = !0 === ei[t.type];
    return (0, s.jsx)(U.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: F()(et.xn, { [et.Y4]: i, [et.u8]: m }),
        onClick: u,
        "aria-label": a,
        children: (0, s.jsx)("div", { className: et.Yf, children: (0, s.jsx)(z.O, { product: o }) }),
    });
}
var er = n(442759),
    el = n(344346),
    ea = n(139136),
    ec = n(395744),
    ed = n(929283),
    eo = n(650228);
function eu(e) {
    let {
        item: t,
        user: n,
        bundleFirstAvatarDecoration: i,
        isBundle: r,
        pendingAvatarSrc: l,
        pendingAvatarDecoration: a,
        pendingDisplayNameStyles: c,
        pendingGlobalName: d,
    } = e;
    switch (t.type) {
        case D.R.AVATAR_DECORATION:
            return (0, s.jsx)("div", {
                className: eo.h1,
                children: (0, s.jsx)(ed.i, { user: n, item: t, avatarSrcOverride: l, isHighlighted: !0 }),
            });
        case D.R.PROFILE_EFFECT:
            return (0, s.jsx)("div", {
                className: r ? eo.sm : eo.VY,
                children: (0, s.jsx)(ea.A, {
                    skuId: t.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case D.R.PROFILE_FRAME:
            return (0, s.jsx)("div", { className: r ? eo.ob : eo.fE, children: (0, s.jsx)(ec.A, { frame: t }) });
        case D.R.NAMEPLATE:
            return (0, s.jsx)("div", {
                className: eo.Dz,
                children: (0, s.jsx)(el.A, {
                    className: eo.M4,
                    nameplate: t,
                    user: n,
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
function em(e) {
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: r, pendingProfile: l } = e,
        a = i ?? n,
        { firstAvatarDecoration: c } = (0, er.f5)(a),
        { pendingChanges: d, pendingAvatarSrc: o } = l,
        u = a.items[r] ?? a.items[0];
    return null == u
        ? null
        : (0, s.jsx)(eu, {
              item: u,
              user: t,
              bundleFirstAvatarDecoration: c,
              isBundle: (0, _.aw)(a),
              pendingAvatarSrc: o,
              pendingAvatarDecoration: d.pendingAvatarDecoration,
              pendingDisplayNameStyles: d.pendingDisplayNameStyles,
              pendingGlobalName: d.pendingGlobalName,
          });
}
var ep = n(846957);
function ex(e) {
    let { selectedProduct: t, previewingProduct: n } = e;
    return (0, s.jsx)(ep.B, { product: n ?? t });
}
var eg = n(975571),
    eE = n(740076),
    eh = n(661847),
    ef = n(422460);
function ev(e) {
    let { skuId: t } = e;
    return (0, ee.EZ)(t)
        ? (0, s.jsx)(G.E, {
              variant: "text-sm/normal",
              className: ef.CU,
              children: K.intl.format(K.t.Q1scdE, {
                  helpdeskArticle: eg.A.getArticleURL(O.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function eN(e) {
    let { productRecord: t, productName: n, selectedProduct: i, previewingVariantIndexProps: l } = e,
        { previewingVariantIndex: a, handleEntering: c, handleLeaving: d } = l,
        o = b(t, a) ?? i,
        u = Q(o),
        { disabledReason: m } = (0, eE.I)(i.skuId),
        p = (0, y.Q)(t),
        x = (0, L.B1)(t),
        g = x ? t.variants[a ?? p] : null,
        E = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            null != E.current && ((E.current.tabIndex = -1), E.current.focus());
        }, []),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: ef.sn,
                    children: [
                        (0, s.jsx)(H.D, { ref: E, variant: "heading-xl/bold", className: ef.R_, children: n }),
                        (0, s.jsx)(G.E, { variant: "text-sm/normal", children: u }),
                        (0, s.jsx)(ev, { skuId: o.skuId }),
                        null !== m && (0, s.jsx)(G.E, { variant: "text-xs/normal", className: ef.H$, children: m }),
                    ],
                }),
                x &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != g &&
                                (0, s.jsx)(G.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: ef.a9,
                                    lineClamp: 1,
                                    children: K.intl.format(K.t.EcaRWt, {
                                        value: (0, s.jsx)("span", { className: ef.I8, children: g.variantLabel }),
                                    }),
                                }),
                            (0, s.jsx)("div", {
                                className: ef._x,
                                children: (0, s.jsx)(eh.A, {
                                    skuId: t.skuId,
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
var eA =
        (((i = {}).COLLECTIBLE = "COLLECTIBLE"),
        (i.BUNDLE = "BUNDLE"),
        (i.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (i.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (i.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        i),
    ej = n(97808),
    eI = n(346055),
    eR = n(993077),
    eC = n(245604),
    ey = n(460905),
    e_ = n(262295),
    eT = n(685073),
    ek = n(320095),
    eO = n(963852),
    eL = n(763754),
    eP = n(20851),
    eS = n(986687),
    eD = n(158045),
    eb = n(780898),
    ew = n(158008);
function eM(e) {
    let { user: t, innerClassName: n } = e;
    return (0, s.jsx)("div", {
        className: ew.mV,
        children: (0, s.jsx)(e_.A, {
            avatar: (0, s.jsx)(ej.eu, {
                src: t.avatarSrc,
                size: u._3.SIZE_32,
                "aria-label": t.name,
                status: O.clD.ONLINE,
            }),
            name: t.name,
            innerClassName: F()(ew.$L, n),
        }),
    });
}
function eB(e) {
    let { user: t, nameplate: n, avatarDecoration: i, pendingDisplayNameStyles: r, pendingGlobalName: l } = e,
        a = (0, eb.Ov)();
    return (0, s.jsx)("div", {
        className: ew.nJ,
        role: "img",
        "aria-label": K.intl.formatToPlainString(K.t["95pCSf"], { a11y_text: n.label }),
        children: (0, s.jsxs)(eI.M, {
            children: [
                (0, s.jsx)(eM, { user: a.mallow, innerClassName: ew.ab }),
                (0, s.jsxs)(G.E, {
                    variant: "text-sm/semibold",
                    className: ew.OS,
                    children: [K.intl.string(K.t["yzW/fZ"]), " - 3"],
                }),
                (0, s.jsx)(eM, { user: a.phibi, innerClassName: ew.e9 }),
                (0, s.jsx)("div", {
                    className: ew.mV,
                    children: (0, s.jsx)(el.A, {
                        className: ew.M4,
                        innerClassName: ew.e9,
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
                (0, s.jsx)(eM, { user: a.locke, innerClassName: ew.e9 }),
                (0, s.jsxs)(G.E, {
                    variant: "text-sm/semibold",
                    className: ew.OS,
                    children: [K.intl.string(K.t["NG43/6"]), " - 12"],
                }),
                (0, s.jsx)(eM, { user: a.boom, innerClassName: ew.bD }),
                (0, s.jsx)(eM, { user: a.cherry, innerClassName: ew.bD }),
            ],
        }),
    });
}
function eF(e) {
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
            return (0, ek.rh)({
                ...(0, eO.Ay)({ author: t, channelId: "1337", content: K.intl.string(K.t.d5YwK5) }),
                state: O.cmJ.SENT,
                id: "0",
            });
        })({ author: t }),
        d = (0, eT.gS)(r),
        o = (0, eL.p_)(c),
        u = {
            ...o,
            nick:
                void 0 !== a
                    ? (0, h.eh)({ pendingNickname: void 0, pendingGlobalName: a, user: t, guildMember: null })
                    : o.nick,
            primaryGuild: void 0 !== r ? d : o.primaryGuild,
            displayNameStyles: void 0 !== l ? l : o.displayNameStyles,
        };
    return (0, s.jsx)("div", {
        role: "img",
        "aria-label": K.intl.string(K.t["TN+ZvB"]),
        children: (0, s.jsx)(eI.M, {
            children: (0, s.jsxs)(eR.Z, {
                className: ew.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, s.jsx)(
                        eP.A,
                        {
                            className: ew.G5,
                            author: u,
                            message: c,
                            avatarDecorationOverride: n ?? null,
                            avatarOverride: i,
                        },
                        c.id,
                    ),
                    (0, s.jsxs)("div", {
                        className: ew.lG,
                        children: [
                            (0, s.jsx)(eC.U, { size: "md", color: "currentColor", className: ew.hq }),
                            (0, s.jsx)(ey.n, { size: "md", color: "currentColor", className: ew.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eG(e) {
    let { product: t, user: n, pendingProfile: i, activeBundleSlide: r } = e,
        l = eD.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: a, ...c } = i.pendingChanges,
        d = i.pendingAvatarSrc,
        o = t.type === D.R.BUNDLE ? t.items[r ?? 0] : void 0,
        u = o?.type ?? t.type,
        m = u === D.R.AVATAR_DECORATION,
        p = u === D.R.PROFILE_EFFECT || u === D.R.PROFILE_FRAME,
        { firstAvatarDecoration: x, firstProfileEffect: g, firstNameplate: E, firstProfileFrame: h } = (0, er.f5)(t),
        f = o?.type === D.R.AVATAR_DECORATION ? o : x,
        v = o?.type === D.R.PROFILE_EFFECT ? o : g,
        N = o?.type === D.R.PROFILE_FRAME ? o : h,
        A = o?.type === D.R.NAMEPLATE ? o : E;
    if (u === D.R.NAMEPLATE && null != A)
        return (0, s.jsx)("div", {
            className: ew.Zj,
            children: (0, s.jsx)(eB, {
                user: n,
                nameplate: A,
                avatarDecoration: f ?? c.pendingAvatarDecoration,
                pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                pendingGlobalName: c.pendingGlobalName,
            }),
        });
    return (0, s.jsx)("div", {
        className: m ? ew.RA : ew.hZ,
        children: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(eS.A, {
                    ...c,
                    pendingAvatar: d,
                    user: n,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: f ?? c.pendingAvatarDecoration,
                    pendingProfileEffect: v ?? c.pendingProfileEffect,
                    profileEffectRestartKey: r,
                    pendingProfileFrame: N ?? c.pendingProfileFrame,
                    disabledInputs: !0,
                    hideMessageInput: !p,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? ew.oB : void 0,
                }),
                m &&
                    (0, s.jsx)(eF, {
                        user: n,
                        avatarDecoration: f,
                        pendingAvatarSrc: d,
                        pendingPrimaryGuildId: c.pendingPrimaryGuildId,
                        pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                        pendingGlobalName: c.pendingGlobalName,
                    }),
            ],
        }),
    });
}
function eU(e) {
    let { user: t, pendingProfile: n, selectedProduct: i, previewingProduct: r, selectedBundleSlide: l } = e;
    return (0, s.jsx)(eG, { user: t, pendingProfile: n, product: r ?? i, activeBundleSlide: l });
}
var eH = n(478016),
    ez = n(661531),
    eV = n(219882),
    eX = n(224016),
    eW = n(202541),
    eZ = n(549848);
function eK() {
    let e = [
        K.intl.string(K.t.E1NP2x),
        K.intl.string(K.t.kpMomJ),
        (0, eV.M6)({
            legacyCopy: K.intl.string(K.t.xT1Vfn),
            rolloutCopy: K.intl.formatToPlainString(K.t.IDAfOy, {
                maxFileSize: (0, eD.EJ)(eW.PremiumTypes.TIER_2, { useSpace: !1 }),
            }),
        }),
        K.intl.string(K.t.myyAEr),
        K.intl.string(K.t.zTk8Ul),
    ];
    return (0, s.jsxs)("div", {
        className: eZ.kL,
        children: [
            (0, s.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eZ.ym,
            }),
            (0, s.jsx)(eX.A, { color: "white" }),
            (0, s.jsx)("div", {
                className: eZ.PX,
                children: e.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: eZ.UJ,
                            children: [
                                (0, s.jsx)(eH.U, { color: ez.A.colors.WHITE }),
                                (0, s.jsx)(G.E, {
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
var eY = n(17928),
    e$ = n(132198),
    eq = n(35929);
function eJ(e) {
    let { user: t } = e,
        n = eD.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...r } = (0, eY.cf)([v.A], () => v.A.getPendingChanges()),
        l = (0, f.V7)({ userId: t.id, image: i });
    return (0, s.jsx)("div", {
        className: eq.k,
        children: (0, s.jsx)(eS.A, {
            ...r,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, e$._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
}
var eQ = n(165416);
function e0(e) {
    let { user: t, productRecord: n, isClosing: i, isOrbCheckoutModalOpen: r } = e;
    return n.skuId === ee.Dp.ORB_PROFILE_BADGE
        ? i || r
            ? null
            : (0, s.jsx)(eJ, { user: t })
        : (0, ee.EZ)(n.skuId)
          ? (0, s.jsx)(eK, {})
          : (0, s.jsx)(ep.B, { product: n, className: eQ.M });
}
let e1 = {
    [eA.COLLECTIBLE]: { LeftPreview: em, Info: eN, RightPreview: eU },
    [eA.BUNDLE]: {
        LeftPreview: em,
        Info: function (e) {
            let {
                    productRecord: t,
                    productName: n,
                    selectedBundleSlide: i,
                    setSelectedBundleSlide: l,
                    onTrackClick: a,
                } = e,
                c = t.items,
                d = t.bundledProducts,
                o = d?.[i]?.name,
                u = c[i]?.type,
                m = null != u ? (0, _.Dm)(u) : null,
                p = K.intl.string(K.t.cTbdgu),
                x = Q(t),
                g = r.useRef(null),
                E = r.useCallback(
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
            let h = r.useRef(null);
            return (
                r.useLayoutEffect(() => {
                    null != h.current && ((h.current.tabIndex = -1), h.current.focus());
                }, []),
                (0, s.jsxs)("div", {
                    className: et.Qf,
                    children: [
                        (0, s.jsx)(H.D, {
                            ref: h,
                            variant: "heading-xl/bold",
                            className: et.R_,
                            title: n,
                            children: n,
                        }),
                        (0, s.jsx)(G.E, { variant: "text-sm/medium", color: "text-default", children: x }),
                        (0, s.jsxs)("div", {
                            className: et.hZ,
                            children: [
                                (0, s.jsx)("div", {
                                    className: et.vg,
                                    children: (0, s.jsx)("div", {
                                        ref: g,
                                        className: et.hK,
                                        role: "radiogroup",
                                        "aria-label": p,
                                        tabIndex: -1,
                                        onKeyDown: E,
                                        children: c.map((e, t) => {
                                            let n = d?.[t]?.name ?? e.skuId,
                                                r = d?.[t]?.skuId ?? e.skuId;
                                            return (0, s.jsx)(
                                                es,
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
                                null != o && (0, s.jsx)(en, { name: o, typeLabel: m }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: eU,
    },
    [eA.EXTERNAL_ORB_BADGE]: { LeftPreview: ex, Info: eN, RightPreview: e0 },
    [eA.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: ex, Info: eN, RightPreview: e0 },
    [eA.EXTERNAL_GENERIC]: { LeftPreview: ex, Info: eN, RightPreview: e0 },
};
function e2(e) {
    var t;
    return e1[
        ((t = e),
        (0, ee.pQ)(t.skuId)
            ? t.skuId === ee.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, ee.EZ)(t.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, _.aw)(t)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var e8 = n(268959),
    e6 = n(866665),
    e5 = n(508770),
    e3 = n(278416);
let e9 = (e) => {
    let { promotion: t } = e;
    return (0, s.jsx)(e6.m, {
        position: "top",
        asContainer: !0,
        text: K.intl.formatToPlainString(K.t.cNtuKF, { offerName: t.displayName }),
        children: (0, s.jsx)(e5.E, {
            type: { text: K.intl.string(K.t["nb5PC/"]) },
            variant: "expressive",
            icon: e3.TagIcon,
        }),
    });
};
var e7 = n(252125);
function e4(e) {
    let t,
        { productRecord: n, selectedProduct: i, selectedBundleSlide: r } = e,
        l = (0, V.g)(i),
        a = (function (e) {
            switch (e?.tenantMetadata?.collectibles?.type) {
                case W.hE.COLLECT_AND_CLAIM:
                    return e.rewardStatus === X.GM.IN_PROGRESS;
                case W.hE.TARGETED_OFFER:
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
                ? (0, s.jsx)(e8.s, {})
                : (0, s.jsx)(e8.A, { skuId: n.skuId })),
        (0, s.jsxs)("div", { className: e7.N, children: [t, null != l && a && (0, s.jsx)(e9, { promotion: l })] })
    );
}
var te = n(462887),
    tt = n(821609),
    tn = n(318254),
    ti = n(825484),
    ts = n(331322),
    tr = n(736653),
    tl = n(44120),
    ta = n(465794),
    tc = n(757036),
    td = n(761705),
    to = n(580630),
    tu = n(4227),
    tm = n(466459),
    tp = n(518865),
    tx = n(885574),
    tg = n(495900);
function tE(e) {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, s.jsx)(e6.m, {
              position: "top",
              align: "left",
              text: K.intl.string(K.t.y1VWkZ),
              children: (0, s.jsxs)("div", {
                  className: F()(tg.GX, t),
                  children: [
                      (0, s.jsx)("span", {
                          className: tg.P0,
                          children: (0, s.jsx)(tx.CircleInformationIcon, {
                              size: "md",
                              color: "currentColor",
                              className: tg.G,
                          }),
                      }),
                      (0, s.jsx)(G.E, { variant: "text-md/semibold", children: K.intl.string(K.t.BEjTij) }),
                  ],
              }),
          })
        : (0, s.jsx)(G.E, { variant: "text-md/semibold", className: t, children: K.intl.string(K.t["6cfuDj"]) });
}
var th = n(878112),
    tf = n(572595),
    tv = n(206835),
    tN = n(450481);
let tA = function (e) {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: r, isApplying: l, canUseNow: a } = (0, tN.p)({ product: t, onSuccess: n }),
        c = (0, tv.A)();
    return a
        ? (0, s.jsx)(tt.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(ee.sH.USE_NOW), r());
              },
              loading: l,
              text: K.intl.string(K.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, s.jsx)(tt.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(ee.sH.EDIT_PROFILE), c(), n?.());
              },
              text: K.intl.string(K.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tj = n(561769),
    tI = n(140735),
    tR = n(826706);
function tC(e) {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: r = "heading-md/semibold",
        } = e,
        l = (0, to.RS)(t, n);
    return (0, s.jsxs)(G.E, {
        variant: r,
        className: F()(tR.v, i),
        children: [
            (0, s.jsx)(tI.A, { children: K.intl.format(K.t["2CEGln"], { price: l }) }),
            (0, s.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var ty = n(219103),
    t_ = n(282968);
function tT(e) {
    let {
            product: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: r,
            className: l,
            hideStrikethroughPrice: a = !1,
            discountIconDisplayMode: c,
            discountIconSize: d = "md",
        } = e,
        o = (0, _.WD)(t, { hasShopDiscount: n, discount: r });
    if (null == o) return null;
    let { defaultPrice: u, showDefaultPriceOnly: m } = o;
    if (m)
        return (0, s.jsx)("div", {
            className: F()(t_.kG, l),
            children: (0, s.jsx)(ty.x, { priceAmount: u.amount, priceCurrency: u.currency }),
        });
    let { showDiscountPrice: p, originalPrice: x, finalPrice: g } = o;
    return (0, s.jsxs)("div", {
        className: F()(t_.kG, l),
        children: [
            a ? null : (0, s.jsx)(tC, { price: x, className: t_.q9 }),
            (0, s.jsx)(ty.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
                discount: r,
                className: t_.q9,
                discountIconConfig: p && null != c ? { displayMode: c, source: i ?? _.D0.NITRO, size: d } : void 0,
            }),
        ],
    });
}
var tk = n(403581),
    tO = n(75678),
    tL = n(843625);
function tP(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, g.Ay)(),
        l = r.useRef(null);
    return (0, s.jsx)(U.D, {
        className: tL.F,
        innerRef: l,
        onClick: () => {
            (n?.(ee.sH.SUBSCRIBE_NOW),
                (0, tO.A)({ subscriptionTier: eW.pe.TIER_2, analyticsLocations: i, returnRef: l }));
        },
        children: t,
    });
}
var tS = n(329986);
function tD(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, _.yt)(t, O.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let r = (0, to.RS)(i.amount, i.currency);
    return (0, s.jsxs)("div", {
        className: tS.k,
        children: [
            (0, s.jsx)(e6.m, {
                text: K.intl.string(K.t.MPFyJ5),
                "aria-label": K.intl.string(K.t.X3Ekj8),
                children: (0, s.jsx)(tk.t, { size: "md", color: "currentColor", className: tS.o }),
            }),
            (0, s.jsx)(G.E, {
                variant: "text-xs/medium",
                children: K.intl.format(K.t.Sv8iic, {
                    price: r,
                    subscribeNowHook: (e) => (0, s.jsx)(tP, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var tb = n(818348),
    tw = n(426919);
function tM(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i, discount: r } = e,
        l = n ? K.intl.string(K.t.wu4gyV) : K.intl.string(K.t.eFNRzU),
        a = n || !i;
    return (0, s.jsxs)("div", {
        className: tw.eg,
        children: [
            (0, s.jsx)("div", {
                className: tw.zR,
                children: (0, s.jsx)(G.E, { variant: "text-xs/normal", className: a ? tw.r9 : void 0, children: l }),
            }),
            (0, s.jsx)(ty.x, {
                priceAmount: t.amount,
                priceCurrency: t.currency,
                discount: r,
                className: a ? tw.r9 : void 0,
            }),
        ],
    });
}
function tB(e) {
    let {
        prices: t,
        hasShopDiscount: n,
        discountSource: i,
        discount: r,
        product: l,
        hasSufficientOrbs: a,
        onTrackClick: c,
        isProductDisabled: d,
    } = e;
    return 0 === t.length
        ? null
        : t[0].currency === tb.Yr.DISCORD_ORB
          ? (0, s.jsx)(tM, { orbPrice: t[0], isProductDisabled: d, hasSufficientOrbs: a, discount: r })
          : (0, s.jsxs)("div", {
                className: tw.eg,
                children: [
                    (0, s.jsxs)("div", {
                        className: tw.pw,
                        children: [
                            (0, s.jsx)(tT, {
                                product: l,
                                discount: r,
                                hasShopDiscount: n,
                                discountSource: i,
                                hideStrikethroughPrice: !n,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            n ? null : (0, s.jsx)(tD, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tb.Yr.DISCORD_ORB &&
                        (0, s.jsx)(ty.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: d || !a ? tw.r9 : void 0,
                        }),
                ],
            });
}
var tF = n(347722),
    tG = n(497901),
    tU = n(57020),
    tH = n(61750),
    tz = n(808598),
    tV = n(543080);
function tX(e) {
    let { label: t, countdown: n } = e;
    return (0, s.jsxs)("div", {
        className: tV.lo,
        children: [
            (0, s.jsxs)("div", {
                className: tV.fZ,
                children: [
                    (0, s.jsx)(e3.TagIcon, { size: "xs", color: "currentColor", className: tV.CE }),
                    (0, s.jsx)(G.E, { variant: "text-xs/medium", color: "none", children: t }),
                ],
            }),
            null != n && (0, s.jsx)(G.E, { variant: "text-xs/medium", color: "none", children: n }),
        ],
    });
}
function tW(e) {
    let {
            user: t,
            productRecord: n,
            selectedProduct: i,
            category: l,
            shouldCheckoutWithOrbs: a,
            tab: c,
            giftRecipient: d,
            giftingOrigin: u,
            analyticsLocations: m,
            returnRef: p,
            onClose: x,
            onTrackClick: g,
        } = e,
        { cardId: E, sessionId: h, tilePosition: f } = (0, C.uM)() ?? {},
        v = (0, tc.L)(eW.PremiumTypes.TIER_2),
        N = (0, _.xM)(t),
        j = eD.Ay.canUseShopDiscounts(t),
        I = (0, V.g)(i),
        y = (0, tG.A)(I?.endsAt),
        T = (0, tp.MX)(I),
        k = (0, tp.Jl)(I),
        L = r.useMemo(
            () =>
                null != I
                    ? (function (e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, tz.X)(e.endsAt);
                          switch (e.tenantMetadata?.collectibles?.type) {
                              case W.hE.COLLECT_AND_CLAIM:
                                  if (e.rewardStatus !== X.GM.IN_PROGRESS) return null;
                                  let n = e.progress;
                                  if (null == n) return null;
                                  let i =
                                      null != t && t > 0 ? K.intl.formatToPlainString(K.t.w4GEvw, { days: t }) : null;
                                  return {
                                      label: K.intl.formatToPlainString(K.t.d9KbHK, {
                                          current: n.current,
                                          target: n.target,
                                      }),
                                      countdown: i,
                                  };
                              case W.hE.TARGETED_OFFER:
                              default:
                                  return null;
                          }
                      })(I, y)
                    : null,
            [I, y],
        ),
        P = (0, tm.h)(n),
        { isPurchased: S, isPartiallyOwnedBundle: D } = (0, tm.h)(i),
        { isDisabled: b } = (0, eE.I)(i.skuId),
        w = (0, _.Zu)({ product: i, isPartiallyOwnedBundle: D, isPurchased: S }),
        M = (0, o.bG)([tu.A], () => tu.A.isClaiming === i?.skuId),
        B = (0, tr.Ay)(),
        U = (0, te.M)(B),
        H = (0, _.G0)(i),
        z = (0, _.yt)(i, O.lid.DEFAULT),
        Z = z?.amount === 0,
        Y = (0, tF.X)(i),
        $ = k ? tj.Hi.FIAT : c === ee.G2.ORBS && a ? tj.Hi.ORBS : void 0,
        { checkoutEligiblePrices: q, hasSufficientOrbs: J } = (0, tU.F)({
            product: i,
            hasShopDiscount: j,
            prioritizedCurrency: $,
        }),
        Q = r.useMemo(() => (0, _.fT)(i, j, q[0]?.currency), [i, j, q]),
        et = r.useMemo(() => q.some((e) => e.currency === tb.Yr.DISCORD_ORB), [q]);
    (0, td.W)({ disableFetch: !et });
    let en = r.useCallback(() => {
        (g(ee.sH.BUY_WITH_FIAT),
            (0, tl.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: h,
                onClose: (e) => (e ? x() : (0, tb.tE)()),
            }));
    }, [m, x, i.skuId, g, h]);
    return (0, s.jsxs)("div", {
        className: tV.iw,
        children: [
            P.isPurchased || P.isPartiallyOwnedBundle
                ? (0, s.jsx)(tE, { className: tV.On, isPartiallyPurchased: D })
                : H
                  ? (0, s.jsxs)("div", {
                        className: tV.pq,
                        children: [
                            (0, s.jsx)(G.E, { variant: "text-md/semibold", children: K.intl.string(K.t.rt69oo) }),
                            !S &&
                                (0, s.jsx)(G.E, {
                                    className: F()(tV.ed, !U && tV.un),
                                    variant: "text-xxs/normal",
                                    children: K.intl.string(K.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, s.jsx)(tB, {
                        prices: q,
                        product: i,
                        hasShopDiscount: j,
                        discountSource: N,
                        discount: Q,
                        hasSufficientOrbs: J,
                        isProductDisabled: b,
                        onTrackClick: g,
                    }),
            null != L && (0, s.jsx)(tX, { ...L }),
            (0, s.jsx)(ts.B, {
                direction: "vertical",
                gap: 8,
                children: (function () {
                    if (H && !v && !Z) {
                        var e;
                        return (
                            (e = K.intl.string(K.t.sEAnVH)),
                            (0, s.jsx)(ta.A, {
                                subscriptionTier: eW.pe.TIER_2,
                                fullWidth: !0,
                                buttonTextOverride: e,
                                onClick: () => {
                                    (g(ee.sH.UNLOCK_WITH_NITRO), (0, tf.M)());
                                },
                                onSubscribeModalClose: () => {
                                    (0, tf.t)({
                                        product: n,
                                        category: l,
                                        shouldCheckoutWithOrbs: a,
                                        returnRef: p,
                                        analyticsLocations: m,
                                        tab: c,
                                        giftRecipient: d,
                                        giftingOrigin: u,
                                        cardId: E,
                                        sessionId: h,
                                        tilePosition: f,
                                    });
                                },
                            })
                        );
                    }
                    return w
                        ? S
                            ? Y
                                ? (0, s.jsxs)(ti.e, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, s.jsx)(tA, { product: i, onSuccess: x, onTrackClick: g }),
                                          (0, s.jsx)(th.A, {
                                              primary: !0,
                                              product: i,
                                              onSuccess: x,
                                              giftRecipient: d,
                                              giftingOrigin: u,
                                              onTrackClick: g,
                                          }),
                                      ],
                                  })
                                : (0, s.jsx)(tA, { product: i, onSuccess: x, onTrackClick: g })
                            : H
                              ? (0, s.jsx)(tt.$, {
                                    loading: M,
                                    loadingStartedLabel: K.intl.string(K.t["TYw+9s"]),
                                    loadingFinishedLabel: K.intl.string(K.t.Pg1UP5),
                                    onClick: async () => {
                                        (g(ee.sH.ADD_TO_COLLECTION),
                                            await (0, R.iJ)(i.skuId),
                                            x(),
                                            (0, tH.A)({
                                                product: i,
                                                analyticsLocations: m,
                                                purchaseType: ee.gs.PREMIUM_PURCHASE,
                                            }));
                                    },
                                    text: K.intl.string(K.t.zp6caO),
                                    fullWidth: !0,
                                })
                              : (0, s.jsx)(s.Fragment, {
                                    children: q.map((e, t) => {
                                        let n,
                                            l,
                                            a,
                                            c,
                                            o,
                                            p = 0 === t,
                                            E =
                                                e.currency === tb.Yr.DISCORD_ORB
                                                    ? ((n = b ? K.intl.string(K.t.cTdr3x) : K.intl.string(K.t.zqh7ZM)),
                                                      (l = !J || b),
                                                      (a = K.intl.formatToPlainString(K.t.yi41qQ, {
                                                          orbPrice: e.amount,
                                                      })),
                                                      (c = l ? `${a}, ${n}` : a),
                                                      (0, s.jsx)(e6.m, {
                                                          position: "top",
                                                          text: n,
                                                          shouldShow: l,
                                                          "aria-label": !1,
                                                          children: (0, s.jsx)(tt.$, {
                                                              variant: p ? "primary" : "secondary",
                                                              onClick: function () {
                                                                  (g(ee.sH.BUY_WITH_ORBS),
                                                                      (0, A.B4)({
                                                                          skuId: i.skuId,
                                                                          onComplete: (e) => {
                                                                              ((0, R.gB)(),
                                                                                  x(),
                                                                                  (0, tH.A)({
                                                                                      product: i,
                                                                                      analyticsLocations: m,
                                                                                      itemConsumed:
                                                                                          e?.entitlements?.[0]
                                                                                              ?.consumed,
                                                                                      purchaseType: ee.gs.ORB,
                                                                                  }));
                                                                          },
                                                                          analyticsLocations: m,
                                                                          discoverySessionId: h,
                                                                      }));
                                                              },
                                                              disabled: l,
                                                              "aria-label": c,
                                                              text: K.intl.format(K.t.JC15qj, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, s.jsx)(tn.C, {
                                                                          className: tV.fN,
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                              }),
                                                              fullWidth: !0,
                                                          }),
                                                      }))
                                                    : ((o =
                                                          T ??
                                                          K.intl.formatToPlainString(K.t["cNSL/j"], {
                                                              price: (0, to.$g)(e.amount, e.currency),
                                                          })),
                                                      (0, s.jsxs)(ti.e, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, s.jsx)(tt.$, {
                                                                  variant: p ? "primary" : "secondary",
                                                                  onClick: en,
                                                                  text: o,
                                                                  fullWidth: !0,
                                                              }),
                                                              Y &&
                                                                  (0, s.jsx)(th.A, {
                                                                      primary: p,
                                                                      product: i,
                                                                      onSuccess: x,
                                                                      giftRecipient: d,
                                                                      giftingOrigin: u,
                                                                      onTrackClick: g,
                                                                  }),
                                                          ],
                                                      }));
                                        return (0, s.jsx)(r.Fragment, { children: E }, e.currency);
                                    }),
                                })
                        : Y
                          ? (0, s.jsx)(th.A, {
                                primary: !0,
                                product: i,
                                onSuccess: x,
                                fullWidth: !0,
                                giftRecipient: d,
                                giftingOrigin: u,
                                onTrackClick: g,
                            })
                          : null;
                })(),
            }),
        ],
    });
}
var tZ = n(634656);
function tK(e) {
    let {
            productRecord: t,
            selectedProduct: n,
            previewingProduct: i,
            user: r,
            selectedBundleSlide: l,
            pendingProfile: a,
        } = e,
        c = e2(t);
    return (0, s.jsxs)("div", {
        className: F()(tZ.wd, { [tZ.E7]: null != c.LeftPreview }),
        children: [
            (0, s.jsx)("div", {
                className: tZ.dL,
                children: (0, s.jsx)(e4, { productRecord: t, selectedProduct: n, selectedBundleSlide: l }),
            }),
            null != c.LeftPreview &&
                (0, s.jsx)("div", {
                    className: tZ._E,
                    children: (0, s.jsx)(c.LeftPreview, {
                        user: r,
                        selectedProduct: n,
                        previewingProduct: i,
                        productRecord: t,
                        selectedBundleSlide: l,
                        pendingProfile: a,
                    }),
                }),
            (0, s.jsx)("div", { className: tZ.F_, children: (0, s.jsx)(c.Info, { ...e }) }),
            (0, s.jsx)(tW, { ...e }),
        ],
    });
}
var tY = n(529756),
    t$ = n(408278),
    tq = n(972213),
    tJ = n(156248),
    tQ = n(139146),
    t0 = n(60465),
    t1 = n(976860),
    t2 = n(402860),
    t8 = n(365491),
    t6 = n(668953),
    t5 = n(881636),
    t3 = n(807562);
function t9(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: t3.Y,
                children: (0, s.jsx)(t$.K, {
                    "aria-label": K.intl.string(K.t["3NdvMK"]),
                    onClick: t,
                    icon: t6.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, s.jsx)("div", {
                className: t3.K,
                children: (0, s.jsx)(t$.K, {
                    "aria-label": K.intl.string(K.t.RYIeOX),
                    onClick: n,
                    icon: t5.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var t7 = n(48062);
function t4(e) {
    let {
            user: t,
            pendingProfile: n,
            productRecord: i,
            previewingProduct: l,
            selectedProduct: a,
            selectedVariantIndex: c,
            selectedBundleSlide: d,
            setSelectedBundleSlide: o,
            isClosing: u,
            isOrbCheckoutModalOpen: m,
            pdpBackground: p,
            category: x,
            tab: g,
            onClose: E,
            onTrackClick: h,
        } = e,
        f = e2(i),
        v = (0, _.aw)(a),
        N = v ? a.items.length : 0,
        A = (function () {
            let { sessionId: e } = (0, C.uM)() ?? {},
                t = (0, t8.v)((e) => e.reset);
            return r.useCallback(
                (n, i) => {
                    if (
                        (I.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: e,
                            sku_id: n.skuId,
                            cta_name: i,
                        }),
                        (0, t2.closeUserProfileModal)(),
                        (0, t0.p)(),
                        !0 !== n.isOrbsExclusive)
                    )
                        return void (0, t1.pX)(O.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n.skuId));
                    t();
                    let s = O.BVt.COLLECTIBLES_SHOP_WITH_TAB(ee.G2.ORBS);
                    (0, t1.pX)(`${s}&${ee.P1}=${n.skuId}`);
                },
                [e, t],
            );
        })(),
        j = r.useCallback(() => {
            (h(ee.sH.GO_TO_COLLECTION), E(), A(x, "go_to_collection_button"));
        }, [x, E, h, A]),
        R = r.useCallback(() => {
            N <= 1 || o((e) => (e - 1 + N) % N);
        }, [N, o]),
        y = r.useCallback(() => {
            N <= 1 || o((e) => (e + 1) % N);
        }, [N, o]),
        T = r.useCallback(
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
            (h(ee.sH.CLOSE_DETAIL), E());
        }, [h, E]),
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
        }, [d]),
        (0, s.jsxs)("div", {
            className: F()(t7.i1, (0, ee.EZ)(a.skuId) ? t7.bF : a.type === D.R.AVATAR_DECORATION ? t7.Jq : t7.eF),
            style: null != p ? { backgroundImage: `url(${p})` } : void 0,
            onKeyDown: T,
            children: [
                (0, s.jsx)("div", {
                    className: t7.GV,
                    children: (0, s.jsx)(e6.m, {
                        text: K.intl.string(K.t["Hr/q/6"]),
                        children: (0, s.jsx)(tt.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: tY.c,
                            text: x.name,
                            onClick: j,
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: t7.KR,
                    ref: L,
                    children: (0, s.jsx)(f.RightPreview, {
                        user: t,
                        pendingProfile: n,
                        productRecord: i,
                        selectedProduct: a,
                        previewingProduct: l,
                        selectedBundleSlide: d,
                        isClosing: u,
                        isOrbCheckoutModalOpen: m,
                    }),
                }),
                v && N > 1 && (0, s.jsx)(t9, { goPrev: R, goNext: y }),
                (0, s.jsxs)("div", {
                    className: t7.VG,
                    children: [
                        (0, s.jsx)(tQ.R, {
                            product: i,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(tJ.H, {
                            skuId: a.skuId,
                            product: a,
                            productName: (0, P.VG)(a),
                            tab: g,
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(t$.K, {
                            "aria-label": K.intl.string(K.t.cpT0Cq),
                            onClick: k,
                            icon: tq.XLargeIcon,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var ne = n(80801);
let nt = (0, u.FT)(u._3.SIZE_152),
    nn = function (e) {
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
            z = (0, o.bG)([j.default], () => j.default.getCurrentUser()),
            V = (0, o.cf)([v.A], () => v.A.getPendingChanges()),
            X = (0, M.f)(i),
            { previewingVariantIndex: W } = X,
            Z = (0, y.Q)(i),
            K = b(i, W),
            Y = (0, L.rb)(i, Z);
        a()(null != Y, "Selected product should not be null");
        let { analyticsLocations: $ } = (0, g.Ay)([...B, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, S.Yr)(Y.skuId);
        let q = (0, w.U1)(l),
            [J, Q] = r.useState(0);
        r.useEffect(() => {
            null != z && (0, N.A)(z.id, z.getAvatarURL(void 0, 80));
        }, [z]);
        let ee = r.useMemo(() => (0, _.V6)(i.type, i.skuId), [i.type, i.skuId]);
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
                    c = (0, _.xM)(a);
                return r.useCallback(
                    (e, r) => {
                        I.default.track(O.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: r ?? t,
                            cta: e,
                            shop_session_id: l,
                            card_id: s,
                            product_sku_ids: n,
                            location_stack: i,
                            discount_source: (0, _.b_)(c),
                        });
                    },
                    [t, i, s, n, l, c],
                );
            })({ skuId: Y.skuId, productSkuIds: es, analyticsLocations: $ });
        (0, E.A)({
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
        let el = (0, A.o6)(),
            ea = t === m.ip.EXITING,
            ec = (0, T.c)("product_details_modal");
        if (null == z || (i.skuId === d.j.PREMIUM_TIER_2_1_DAY && !ec)) return null;
        let ed = {
                pendingChanges: V,
                pendingAvatarSrc:
                    void 0 !== V.pendingAvatar
                        ? (0, h.sv)((0, f.V7)({ userId: z.id, image: V.pendingAvatar, size: nt }), null, z, {
                              size: nt,
                          })
                        : void 0,
            },
            eo = (0, P.VG)(i),
            eu = {
                user: z,
                pendingProfile: ed,
                productRecord: i,
                productName: eo,
                selectedProduct: Y,
                previewingProduct: K ?? null,
                category: l,
                selectedVariantIndex: Z,
                previewingVariantIndexProps: X,
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
                "aria-label": eo,
                children: (0, s.jsx)("div", {
                    className: ne.C,
                    children: (0, s.jsxs)("div", {
                        className: ne.j,
                        children: [
                            (0, s.jsx)(tK, { ...eu }),
                            (0, s.jsx)(t4, { ...eu, isClosing: ea, isOrbCheckoutModalOpen: el, pdpBackground: q }),
                        ],
                    }),
                }),
            }),
        });
    };
