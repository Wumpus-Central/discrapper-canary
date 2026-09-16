i.d(t, { default: () => t6 });
var n,
    s = i(477900),
    r = i(582128),
    a = i(284009),
    l = i.n(a),
    c = i(562708),
    d = i(334279),
    o = i(702841),
    u = i(778712),
    m = i(231723),
    p = i(224640),
    x = i(793574),
    g = i(688810),
    v = i(139286),
    h = i(252732),
    f = i(101058),
    E = i(836602),
    N = i(903209),
    j = i(652165),
    I = i(287809),
    A = i(174459),
    R = i(839534),
    C = i(440938),
    y = i(298072),
    k = i(993408),
    _ = i(503089),
    T = i(331884),
    O = i(652215),
    L = i(623373),
    P = i(536572),
    S = i(177366),
    b = i(575593);
function D(e, t) {
    return e.type === b.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e;
}
var B = i(212407),
    w = i(935094),
    M = i(503698),
    F = i.n(M),
    U = i(939249),
    G = i(834730),
    H = i(297264),
    z = i(456839),
    V = i(758836),
    W = i(375708),
    X = i(690901);
function Y(e) {
    let { name: t, typeLabel: i } = e;
    return (0, s.jsxs)(G.E, {
        variant: "text-sm/medium",
        className: X.mC,
        "aria-live": "polite",
        children: [
            (0, s.jsx)("span", { className: X.kx, children: t }),
            null != i && (0, s.jsx)("span", { className: X.FP, children: i }),
        ],
    });
}
let Z = { [b.R.AVATAR_DECORATION]: !0, [b.R.PROFILE_FRAME]: !0 };
function K(e) {
    let { item: t, index: i, isSelected: n, setSelected: a, label: l, trackedSkuId: c, onTrackClick: d } = e,
        o = r.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        u = r.useCallback(() => {
            (d(V.sH.BUNDLE_VIEW_PRODUCT, c), a(i));
        }, [d, c, a, i]),
        m = !0 === Z[t.type];
    return (0, s.jsx)(U.D, {
        tag: "div",
        role: "radio",
        "aria-checked": n,
        tabIndex: n ? 0 : -1,
        className: F()(X.xn, { [X.Y4]: n, [X.u8]: m }),
        onClick: u,
        "aria-label": l,
        children: (0, s.jsx)("div", { className: X.Yf, children: (0, s.jsx)(z.O, { product: o }) }),
    });
}
var $ = i(442759),
    q = i(344346),
    J = i(139136),
    Q = i(395744),
    ee = i(929283),
    et = i(650228);
function ei(e) {
    let {
        item: t,
        user: i,
        bundleFirstAvatarDecoration: n,
        isBundle: r,
        pendingAvatarSrc: a,
        pendingAvatarDecoration: l,
        pendingDisplayNameStyles: c,
        pendingGlobalName: d,
    } = e;
    switch (t.type) {
        case b.R.AVATAR_DECORATION:
            return (0, s.jsx)("div", {
                className: et.h1,
                children: (0, s.jsx)(ee.i, { user: i, item: t, avatarSrcOverride: a, isHighlighted: !0 }),
            });
        case b.R.PROFILE_EFFECT:
            return (0, s.jsx)("div", {
                className: r ? et.sm : et.VY,
                children: (0, s.jsx)(J.A, {
                    skuId: t.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case b.R.PROFILE_FRAME:
            return (0, s.jsx)("div", { className: r ? et.ob : et.fE, children: (0, s.jsx)(Q.A, { frame: t }) });
        case b.R.NAMEPLATE:
            return (0, s.jsx)("div", {
                className: et.Dz,
                children: (0, s.jsx)(q.A, {
                    className: et.M4,
                    nameplate: t,
                    user: i,
                    nameplatePreviewSize: "large",
                    pendingAvatarDecoration: n ?? l,
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
function en(e) {
    let { user: t, selectedProduct: i, previewingProduct: n, selectedBundleSlide: r, pendingProfile: a } = e,
        l = n ?? i,
        { firstAvatarDecoration: c } = (0, $.f5)(l),
        { pendingChanges: d, pendingAvatarSrc: o } = a,
        u = l.items[r] ?? l.items[0];
    return null == u
        ? null
        : (0, s.jsx)(ei, {
              item: u,
              user: t,
              bundleFirstAvatarDecoration: c,
              isBundle: (0, k.aw)(l),
              pendingAvatarSrc: o,
              pendingAvatarDecoration: d.pendingAvatarDecoration,
              pendingDisplayNameStyles: d.pendingDisplayNameStyles,
              pendingGlobalName: d.pendingGlobalName,
          });
}
var es = i(846957);
function er(e) {
    let { selectedProduct: t, previewingProduct: i } = e;
    return (0, s.jsx)(es.B, { product: i ?? t });
}
var ea = i(975571);
function el(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) return W.intl.formatToPlainString(W.t["/0Yndu"], { num: e.bundledProducts?.length });
    let i = e.bundledProducts ?? [],
        n = [],
        s = !1;
    for (let e of i)
        switch (e.type) {
            case b.R.AVATAR_DECORATION:
                n.push(W.intl.formatToPlainString(W.t.Ntv9Jt, { itemName: e.name }));
                break;
            case b.R.PROFILE_EFFECT:
                n.push(W.intl.formatToPlainString(W.t["3Y8q7a"], { itemName: e.name }));
                break;
            case b.R.NAMEPLATE:
                (n.push(W.intl.formatToPlainString(W.t["2keXky"], { itemName: e.name })), (s = !0));
        }
    if (s) {
        let e = n.join(", ").replace(/, ([^,]*)$/, " & $1");
        return W.intl.formatToPlainString(W.t.Ofrqj6, { joinedItems: e });
    }
    let r = n.join(" & ");
    return W.intl.formatToPlainString(W.t.Ofrqj6, { joinedItems: r });
}
i(321073);
var ec = i(740076),
    ed = i(661847),
    eo = i(422460);
function eu(e) {
    let { skuId: t } = e;
    return (0, V.EZ)(t)
        ? (0, s.jsx)(G.E, {
              variant: "text-sm/normal",
              className: eo.CU,
              children: W.intl.format(W.t.Q1scdE, {
                  helpdeskArticle: ea.A.getArticleURL(O.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function em(e) {
    let { productRecord: t, productName: i, selectedProduct: n, previewingVariantIndexProps: a } = e,
        { previewingVariantIndex: l, handleEntering: c, handleLeaving: d } = a,
        o = D(t, l) ?? n,
        u = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (0, r.useMemo)(() => {
                if (null != e && null != e.summary && "" !== e.summary) {
                    if (e.type === b.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                        let i = el(e, t);
                        return e.summary.replace("{joinedItems}", i);
                    }
                    return e.summary;
                }
                switch (e?.type) {
                    case b.R.AVATAR_DECORATION:
                        return W.intl.string(W.t["3lv7q2"]);
                    case b.R.PROFILE_EFFECT:
                        return W.intl.string(W.t.VhJL72);
                    case b.R.NAMEPLATE:
                        return W.intl.string(W.t.ik37EZ);
                    case b.R.PROFILE_FRAME:
                        return W.intl.string(W.t.fWzWPp);
                    case b.R.BUNDLE:
                        return el(e, t);
                    default:
                        return "";
                }
            }, [e, t]);
        })(o, !1),
        { disabledReason: m } = (0, ec.I)(n.skuId),
        p = (0, y.Q)(t),
        x = (0, L.B1)(t),
        g = x ? t.variants[l ?? p] : null,
        v = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            null != v.current && ((v.current.tabIndex = -1), v.current.focus());
        }, []),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: eo.sn,
                    children: [
                        (0, s.jsx)(H.D, { ref: v, variant: "heading-xl/bold", className: eo.R_, children: i }),
                        (0, s.jsx)(G.E, { variant: "text-sm/normal", children: u }),
                        (0, s.jsx)(eu, { skuId: o.skuId }),
                        null !== m && (0, s.jsx)(G.E, { variant: "text-xs/normal", className: eo.H$, children: m }),
                    ],
                }),
                x &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != g &&
                                (0, s.jsx)(G.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: eo.a9,
                                    lineClamp: 1,
                                    children: W.intl.format(W.t.EcaRWt, {
                                        value: (0, s.jsx)("span", { className: eo.I8, children: g.variantLabel }),
                                    }),
                                }),
                            (0, s.jsx)("div", {
                                className: eo._x,
                                children: (0, s.jsx)(ed.A, {
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
var ep =
        (((n = {}).COLLECTIBLE = "COLLECTIBLE"),
        (n.BUNDLE = "BUNDLE"),
        (n.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (n.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (n.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        n),
    ex = i(97808),
    eg = i(346055),
    ev = i(993077),
    eh = i(245604),
    ef = i(460905),
    eE = i(262295),
    eN = i(685073),
    ej = i(320095),
    eI = i(963852),
    eA = i(763754),
    eR = i(20851),
    eC = i(986687),
    ey = i(158045),
    ek = i(780898),
    e_ = i(158008);
function eT(e) {
    let { user: t, innerClassName: i } = e;
    return (0, s.jsx)("div", {
        className: e_.mV,
        children: (0, s.jsx)(eE.A, {
            avatar: (0, s.jsx)(ex.eu, {
                src: t.avatarSrc,
                size: u._3.SIZE_32,
                "aria-label": t.name,
                status: O.clD.ONLINE,
            }),
            name: t.name,
            innerClassName: F()(e_.$L, i),
        }),
    });
}
function eO(e) {
    let { user: t, nameplate: i, avatarDecoration: n, pendingDisplayNameStyles: r, pendingGlobalName: a } = e,
        l = (0, ek.Ov)();
    return (0, s.jsx)("div", {
        className: e_.nJ,
        role: "img",
        "aria-label": W.intl.formatToPlainString(W.t["95pCSf"], { a11y_text: i.label }),
        children: (0, s.jsxs)(eg.M, {
            children: [
                (0, s.jsx)(eT, { user: l.mallow, innerClassName: e_.ab }),
                (0, s.jsxs)(G.E, {
                    variant: "text-sm/semibold",
                    className: e_.OS,
                    children: [W.intl.string(W.t["yzW/fZ"]), " - 3"],
                }),
                (0, s.jsx)(eT, { user: l.phibi, innerClassName: e_.e9 }),
                (0, s.jsx)("div", {
                    className: e_.mV,
                    children: (0, s.jsx)(q.A, {
                        className: e_.M4,
                        innerClassName: e_.e9,
                        user: t,
                        nameplate: i,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: n,
                        pendingDisplayNameStyles: r,
                        pendingGlobalName: a,
                        hideDecorators: !0,
                    }),
                }),
                (0, s.jsx)(eT, { user: l.locke, innerClassName: e_.e9 }),
                (0, s.jsxs)(G.E, {
                    variant: "text-sm/semibold",
                    className: e_.OS,
                    children: [W.intl.string(W.t["NG43/6"]), " - 12"],
                }),
                (0, s.jsx)(eT, { user: l.boom, innerClassName: e_.bD }),
                (0, s.jsx)(eT, { user: l.cherry, innerClassName: e_.bD }),
            ],
        }),
    });
}
function eL(e) {
    let {
            user: t,
            avatarDecoration: i,
            pendingAvatarSrc: n,
            pendingPrimaryGuildId: r,
            pendingDisplayNameStyles: a,
            pendingGlobalName: l,
        } = e,
        c = (function (e) {
            let { author: t } = e;
            return (0, ej.rh)({
                ...(0, eI.Ay)({ author: t, channelId: "1337", content: W.intl.string(W.t.d5YwK5) }),
                state: O.cmJ.SENT,
                id: "0",
            });
        })({ author: t }),
        d = (0, eN.gS)(r),
        o = (0, eA.p_)(c),
        u = {
            ...o,
            nick:
                void 0 !== l
                    ? (0, h.eh)({ pendingNickname: void 0, pendingGlobalName: l, user: t, guildMember: null })
                    : o.nick,
            primaryGuild: void 0 !== r ? d : o.primaryGuild,
            displayNameStyles: void 0 !== a ? a : o.displayNameStyles,
        };
    return (0, s.jsx)("div", {
        role: "img",
        "aria-label": W.intl.string(W.t["TN+ZvB"]),
        children: (0, s.jsx)(eg.M, {
            children: (0, s.jsxs)(ev.Z, {
                className: e_.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, s.jsx)(
                        eR.A,
                        {
                            className: e_.G5,
                            author: u,
                            message: c,
                            avatarDecorationOverride: i ?? null,
                            avatarOverride: n,
                        },
                        c.id,
                    ),
                    (0, s.jsxs)("div", {
                        className: e_.lG,
                        children: [
                            (0, s.jsx)(eh.U, { size: "md", color: "currentColor", className: e_.hq }),
                            (0, s.jsx)(ef.n, { size: "md", color: "currentColor", className: e_.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eP(e) {
    let { product: t, user: i, pendingProfile: n, activeBundleSlide: r } = e,
        a = ey.Ay.canUsePremiumProfileCustomization(i),
        { pendingAvatar: l, ...c } = n.pendingChanges,
        d = n.pendingAvatarSrc,
        o = t.type === b.R.BUNDLE ? t.items[r ?? 0] : void 0,
        u = o?.type ?? t.type,
        m = u === b.R.AVATAR_DECORATION,
        p = u === b.R.PROFILE_EFFECT,
        { firstAvatarDecoration: x, firstProfileEffect: g, firstNameplate: v, firstProfileFrame: h } = (0, $.f5)(t),
        f = o?.type === b.R.AVATAR_DECORATION ? o : x,
        E = o?.type === b.R.PROFILE_EFFECT ? o : g,
        N = o?.type === b.R.PROFILE_FRAME ? o : h,
        j = o?.type === b.R.NAMEPLATE ? o : v;
    if (u === b.R.NAMEPLATE && null != j)
        return (0, s.jsx)("div", {
            className: e_.Zj,
            children: (0, s.jsx)(eO, {
                user: i,
                nameplate: j,
                avatarDecoration: f ?? c.pendingAvatarDecoration,
                pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                pendingGlobalName: c.pendingGlobalName,
            }),
        });
    return (0, s.jsx)("div", {
        className: m ? e_.RA : e_.hZ,
        children: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(eC.A, {
                    ...c,
                    pendingAvatar: d,
                    user: i,
                    canUsePremiumCustomization: a,
                    pendingAvatarDecoration: f ?? c.pendingAvatarDecoration,
                    pendingProfileEffect: E ?? c.pendingProfileEffect,
                    profileEffectRestartKey: r,
                    pendingProfileFrame: N ?? c.pendingProfileFrame,
                    disabledInputs: !0,
                    hideMessageInput: !p,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? e_.oB : void 0,
                }),
                m &&
                    (0, s.jsx)(eL, {
                        user: i,
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
function eS(e) {
    let { user: t, pendingProfile: i, selectedProduct: n, previewingProduct: r, selectedBundleSlide: a } = e;
    return (0, s.jsx)(eP, { user: t, pendingProfile: i, product: r ?? n, activeBundleSlide: a });
}
var eb = i(478016),
    eD = i(661531),
    eB = i(219882),
    ew = i(224016),
    eM = i(202541),
    eF = i(549848);
function eU() {
    let e = [
        W.intl.string(W.t.E1NP2x),
        W.intl.string(W.t.kpMomJ),
        (0, eB.M6)({
            legacyCopy: W.intl.string(W.t.xT1Vfn),
            rolloutCopy: W.intl.formatToPlainString(W.t.IDAfOy, {
                maxFileSize: (0, ey.EJ)(eM.PremiumTypes.TIER_2, { useSpace: !1 }),
            }),
        }),
        W.intl.string(W.t.myyAEr),
        W.intl.string(W.t.zTk8Ul),
    ];
    return (0, s.jsxs)("div", {
        className: eF.kL,
        children: [
            (0, s.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eF.ym,
            }),
            (0, s.jsx)(ew.A, { color: "white" }),
            (0, s.jsx)("div", {
                className: eF.PX,
                children: e.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: eF.UJ,
                            children: [
                                (0, s.jsx)(eb.U, { color: eD.A.colors.WHITE }),
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
var eG = i(17928),
    eH = i(576052),
    ez = i(35929);
function eV(e) {
    let { user: t } = e,
        i = ey.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: n, ...r } = (0, eG.cf)([E.A], () => E.A.getPendingChanges()),
        a = (0, f.V7)({ userId: t.id, image: n });
    return (0, s.jsx)("div", {
        className: ez.k,
        children: (0, s.jsx)(eC.A, {
            ...r,
            pendingAvatar: a,
            user: t,
            pendingBadges: [(0, eH._)()],
            canUsePremiumCustomization: i,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
}
var eW = i(165416);
function eX(e) {
    let { user: t, productRecord: i, isClosing: n, isOrbCheckoutModalOpen: r } = e;
    return i.skuId === V.Dp.ORB_PROFILE_BADGE
        ? n || r
            ? null
            : (0, s.jsx)(eV, { user: t })
        : (0, V.EZ)(i.skuId)
          ? (0, s.jsx)(eU, {})
          : (0, s.jsx)(es.B, { product: i, className: eW.M });
}
let eY = {
    [ep.COLLECTIBLE]: { LeftPreview: en, Info: em, RightPreview: eS },
    [ep.BUNDLE]: {
        LeftPreview: en,
        Info: function (e) {
            let {
                    productRecord: t,
                    productName: i,
                    selectedBundleSlide: n,
                    setSelectedBundleSlide: a,
                    onTrackClick: l,
                } = e,
                c = t.items,
                d = t.bundledProducts,
                o = d?.[n]?.name,
                u = c[n]?.type,
                m = null != u ? (0, k.Dm)(u) : null,
                p = W.intl.string(W.t.cTbdgu),
                x = r.useRef(null),
                g = r.useCallback(
                    (e) => {
                        c.length <= 1 ||
                            ("ArrowLeft" === e.key || "ArrowUp" === e.key
                                ? (e.preventDefault(), a((e) => (e - 1 + c.length) % c.length))
                                : "ArrowRight" === e.key || "ArrowDown" === e.key
                                  ? (e.preventDefault(), a((e) => (e + 1) % c.length))
                                  : "Home" === e.key
                                    ? (e.preventDefault(), a(0))
                                    : "End" === e.key && (e.preventDefault(), a(c.length - 1)));
                    },
                    [c.length, a],
                );
            r.useEffect(() => {
                let e = x.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let t = e.querySelectorAll('[role="radio"]');
                t[n]?.focus();
            }, [n]);
            let v = r.useRef(null);
            return (
                r.useLayoutEffect(() => {
                    null != v.current && ((v.current.tabIndex = -1), v.current.focus());
                }, []),
                (0, s.jsxs)("div", {
                    className: X.Qf,
                    children: [
                        (0, s.jsx)(H.D, { ref: v, variant: "heading-xl/bold", className: X.R_, title: i, children: i }),
                        (0, s.jsx)(G.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: W.intl.format(W.t["1tUCAO"], { count: c.length }),
                        }),
                        (0, s.jsxs)("div", {
                            className: X.hZ,
                            children: [
                                (0, s.jsx)("div", {
                                    className: X.vg,
                                    children: (0, s.jsx)("div", {
                                        ref: x,
                                        className: X.hK,
                                        role: "radiogroup",
                                        "aria-label": p,
                                        tabIndex: -1,
                                        onKeyDown: g,
                                        children: c.map((e, t) => {
                                            let i = d?.[t]?.name ?? e.skuId,
                                                r = d?.[t]?.skuId ?? e.skuId;
                                            return (0, s.jsx)(
                                                K,
                                                {
                                                    item: e,
                                                    index: t,
                                                    isSelected: t === n,
                                                    setSelected: a,
                                                    label: i,
                                                    trackedSkuId: r,
                                                    onTrackClick: l,
                                                },
                                                e.skuId,
                                            );
                                        }),
                                    }),
                                }),
                                null != o && (0, s.jsx)(Y, { name: o, typeLabel: m }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: eS,
    },
    [ep.EXTERNAL_ORB_BADGE]: { LeftPreview: er, Info: em, RightPreview: eX },
    [ep.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: er, Info: em, RightPreview: eX },
    [ep.EXTERNAL_GENERIC]: { LeftPreview: er, Info: em, RightPreview: eX },
};
function eZ(e) {
    var t;
    return eY[
        ((t = e),
        (0, V.pQ)(t.skuId)
            ? t.skuId === V.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, V.EZ)(t.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, k.aw)(t)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var eK = i(223311),
    e$ = i(679116),
    eq = i(268959),
    eJ = i(866665),
    eQ = i(508770),
    e0 = i(278416);
let e1 = (e) => {
    let { promotion: t } = e;
    return (0, s.jsx)(eJ.m, {
        position: "top",
        asContainer: !0,
        text: W.intl.formatToPlainString(W.t.cNtuKF, { offerName: t.displayName }),
        children: (0, s.jsx)(eQ.E, {
            type: { text: W.intl.string(W.t["nb5PC/"]) },
            variant: "expressive",
            icon: e0.TagIcon,
        }),
    });
};
var e2 = i(252125);
function e8(e) {
    let t,
        i,
        { productRecord: n, selectedProduct: r, selectedBundleSlide: a } = e,
        l = ((t = (0, eK.A)(O.FYj)), (0, e$.L)(r, t)),
        c = n.type === b.R.BUNDLE ? (n.items[a] ?? n.items[0]) : void 0;
    return (
        (i =
            null != c &&
            !n.hideBadge &&
            null == n.badgeOverride &&
            (0, L.JQ)({ skuId: c.skuId, type: c.type, items: [c] })
                ? (0, s.jsx)(eq.s, {})
                : (0, s.jsx)(eq.A, { skuId: n.skuId })),
        (0, s.jsxs)("div", { className: e2.N, children: [i, null != l && (0, s.jsx)(e1, { promotion: l })] })
    );
}
var e6 = i(462887),
    e5 = i(821609),
    e3 = i(318254),
    e9 = i(825484),
    e7 = i(331322),
    e4 = i(736653),
    te = i(44120),
    tt = i(465794),
    ti = i(757036),
    tn = i(761705),
    ts = i(580630),
    tr = i(4227),
    ta = i(466459),
    tl = i(758461),
    tc = i(885574),
    td = i(495900);
function to(e) {
    let { className: t, isPartiallyPurchased: i } = e;
    return i
        ? (0, s.jsx)(eJ.m, {
              position: "top",
              align: "left",
              text: W.intl.string(W.t.y1VWkZ),
              children: (0, s.jsxs)("div", {
                  className: F()(td.GX, t),
                  children: [
                      (0, s.jsx)("span", {
                          className: td.P0,
                          children: (0, s.jsx)(tc.CircleInformationIcon, {
                              size: "md",
                              color: "currentColor",
                              className: td.G,
                          }),
                      }),
                      (0, s.jsx)(G.E, { variant: "text-md/semibold", children: W.intl.string(W.t.BEjTij) }),
                  ],
              }),
          })
        : (0, s.jsx)(G.E, { variant: "text-md/semibold", className: t, children: W.intl.string(W.t["6cfuDj"]) });
}
var tu = i(878112),
    tm = i(572595),
    tp = i(206835),
    tx = i(450481);
let tg = function (e) {
    let { product: t, onSuccess: i, onTrackClick: n } = e,
        { handleUseNow: r, isApplying: a, canUseNow: l } = (0, tx.p)({ product: t, onSuccess: i }),
        c = (0, tp.A)();
    return l
        ? (0, s.jsx)(e5.$, {
              variant: "primary",
              onClick: () => {
                  (n?.(V.sH.USE_NOW), r());
              },
              loading: a,
              text: W.intl.string(W.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, s.jsx)(e5.$, {
              variant: "primary",
              onClick: () => {
                  (n?.(V.sH.EDIT_PROFILE), c(), i?.());
              },
              text: W.intl.string(W.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tv = i(561769),
    th = i(140735),
    tf = i(826706);
function tE(e) {
    let {
            price: { amount: t, currency: i },
            className: n,
            variant: r = "heading-md/semibold",
        } = e,
        a = (0, ts.RS)(t, i);
    return (0, s.jsxs)(G.E, {
        variant: r,
        className: F()(tf.v, n),
        children: [
            (0, s.jsx)(th.A, { children: W.intl.format(W.t["2CEGln"], { price: a }) }),
            (0, s.jsx)("span", { "aria-hidden": !0, children: a }),
        ],
    });
}
var tN = i(219103),
    tj = i(282968);
function tI(e) {
    let {
            product: t,
            hasShopDiscount: i,
            discountSource: n,
            discount: r,
            className: a,
            hideStrikethroughPrice: l = !1,
            discountIconDisplayMode: c,
            discountIconSize: d = "md",
        } = e,
        o = (0, k.WD)(t, { hasShopDiscount: i, discount: r });
    if (null == o) return null;
    let { defaultPrice: u, showDefaultPriceOnly: m } = o;
    if (m)
        return (0, s.jsx)("div", {
            className: F()(tj.kG, a),
            children: (0, s.jsx)(tN.x, { priceAmount: u.amount, priceCurrency: u.currency }),
        });
    let { showDiscountPrice: p, originalPrice: x, finalPrice: g } = o;
    return (0, s.jsxs)("div", {
        className: F()(tj.kG, a),
        children: [
            l ? null : (0, s.jsx)(tE, { price: x, className: tj.q9 }),
            (0, s.jsx)(tN.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
                discount: r,
                className: tj.q9,
                discountIconConfig: p && null != c ? { displayMode: c, source: n ?? k.D0.NITRO, size: d } : void 0,
            }),
        ],
    });
}
var tA = i(403581),
    tR = i(75678),
    tC = i(843625);
function ty(e) {
    let { text: t, onTrackClick: i } = e,
        { analyticsLocations: n } = (0, g.Ay)(),
        a = r.useRef(null);
    return (0, s.jsx)(U.D, {
        className: tC.F,
        innerRef: a,
        onClick: () => {
            (i?.(V.sH.SUBSCRIBE_NOW),
                (0, tR.A)({ subscriptionTier: eM.pe.TIER_2, analyticsLocations: n, returnRef: a }));
        },
        children: t,
    });
}
var tk = i(329986);
function t_(e) {
    let { product: t, onTrackClick: i } = e,
        n = (0, k.yt)(t, O.lid.PREMIUM_TIER_2);
    if (null == n) return null;
    let r = (0, ts.RS)(n.amount, n.currency);
    return (0, s.jsxs)("div", {
        className: tk.k,
        children: [
            (0, s.jsx)(eJ.m, {
                text: W.intl.string(W.t.MPFyJ5),
                "aria-label": W.intl.string(W.t.X3Ekj8),
                children: (0, s.jsx)(tA.t, { size: "md", color: "currentColor", className: tk.o }),
            }),
            (0, s.jsx)(G.E, {
                variant: "text-xs/medium",
                children: W.intl.format(W.t.Sv8iic, {
                    price: r,
                    subscribeNowHook: (e) => (0, s.jsx)(ty, { text: e, onTrackClick: i }),
                }),
            }),
        ],
    });
}
var tT = i(818348),
    tO = i(426919);
function tL(e) {
    let { orbPrice: t, isProductDisabled: i, hasSufficientOrbs: n, discount: r } = e,
        a = i ? W.intl.string(W.t.wu4gyV) : W.intl.string(W.t.eFNRzU),
        l = i || !n;
    return (0, s.jsxs)("div", {
        className: tO.eg,
        children: [
            (0, s.jsx)("div", {
                className: tO.zR,
                children: (0, s.jsx)(G.E, { variant: "text-xs/normal", className: l ? tO.r9 : void 0, children: a }),
            }),
            (0, s.jsx)(tN.x, {
                priceAmount: t.amount,
                priceCurrency: t.currency,
                discount: r,
                className: l ? tO.r9 : void 0,
            }),
        ],
    });
}
function tP(e) {
    let {
        prices: t,
        hasShopDiscount: i,
        discountSource: n,
        discount: r,
        product: a,
        hasSufficientOrbs: l,
        onTrackClick: c,
        isProductDisabled: d,
    } = e;
    return 0 === t.length
        ? null
        : t[0].currency === tT.Yr.DISCORD_ORB
          ? (0, s.jsx)(tL, { orbPrice: t[0], isProductDisabled: d, hasSufficientOrbs: l, discount: r })
          : (0, s.jsxs)("div", {
                className: tO.eg,
                children: [
                    (0, s.jsxs)("div", {
                        className: tO.pw,
                        children: [
                            (0, s.jsx)(tI, {
                                product: a,
                                discount: r,
                                hasShopDiscount: i,
                                discountSource: n,
                                hideStrikethroughPrice: !i,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            i ? null : (0, s.jsx)(t_, { product: a, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tT.Yr.DISCORD_ORB &&
                        (0, s.jsx)(tN.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: d || !l ? tO.r9 : void 0,
                        }),
                ],
            });
}
var tS = i(347722),
    tb = i(57020),
    tD = i(61750),
    tB = i(543080);
function tw(e) {
    let {
            user: t,
            productRecord: i,
            selectedProduct: n,
            category: a,
            shouldCheckoutWithOrbs: l,
            tab: c,
            giftRecipient: d,
            giftingOrigin: u,
            analyticsLocations: m,
            returnRef: p,
            onClose: x,
            onTrackClick: g,
        } = e,
        { cardId: v, sessionId: h, tilePosition: f } = (0, C.uM)() ?? {},
        E = (0, ti.L)(eM.PremiumTypes.TIER_2),
        N = (0, k.xM)(t),
        I = ey.Ay.canUseShopDiscounts(t),
        A = (0, tl.hS)(n),
        y = (0, tl.jo)(n),
        _ = (0, ta.h)(i),
        { isPurchased: T, isPartiallyOwnedBundle: L } = (0, ta.h)(n),
        { isDisabled: P } = (0, ec.I)(n.skuId),
        S = (0, k.Zu)({ product: n, isPartiallyOwnedBundle: L, isPurchased: T }),
        b = (0, o.bG)([tr.A], () => tr.A.isClaiming === n?.skuId),
        D = (0, e4.Ay)(),
        B = (0, e6.M)(D),
        w = (0, k.G0)(n),
        M = (0, k.yt)(n, O.lid.DEFAULT),
        U = M?.amount === 0,
        H = (0, tS.X)(n),
        z = y ? tv.Hi.FIAT : c === V.G2.ORBS && l ? tv.Hi.ORBS : void 0,
        { checkoutEligiblePrices: X, hasSufficientOrbs: Y } = (0, tb.F)({
            product: n,
            hasShopDiscount: I,
            prioritizedCurrency: z,
        }),
        Z = r.useMemo(() => (0, k.fT)(n, I, X[0]?.currency), [n, I, X]),
        K = r.useMemo(() => X.some((e) => e.currency === tT.Yr.DISCORD_ORB), [X]);
    (0, tn.W)({ disableFetch: !K });
    let $ = r.useCallback(() => {
        (g(V.sH.BUY_WITH_FIAT),
            (0, te.A)({
                skuId: n.skuId,
                analyticsLocations: m,
                discoverySessionId: h,
                onClose: (e) => (e ? x() : (0, tT.tE)()),
            }));
    }, [m, x, n.skuId, g, h]);
    return (0, s.jsxs)("div", {
        className: tB.iw,
        children: [
            _.isPurchased || _.isPartiallyOwnedBundle
                ? (0, s.jsx)(to, { className: tB.On, isPartiallyPurchased: L })
                : w
                  ? (0, s.jsxs)("div", {
                        className: tB.pq,
                        children: [
                            (0, s.jsx)(G.E, { variant: "text-md/semibold", children: W.intl.string(W.t.rt69oo) }),
                            !T &&
                                (0, s.jsx)(G.E, {
                                    className: F()(tB.ed, !B && tB.un),
                                    variant: "text-xxs/normal",
                                    children: W.intl.string(W.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, s.jsx)(tP, {
                        prices: X,
                        product: n,
                        hasShopDiscount: I,
                        discountSource: N,
                        discount: Z,
                        hasSufficientOrbs: Y,
                        isProductDisabled: P,
                        onTrackClick: g,
                    }),
            (0, s.jsx)(e7.B, {
                direction: "vertical",
                gap: 8,
                children: (function () {
                    if (w && !E && !U) {
                        var e;
                        return (
                            (e = W.intl.string(W.t.sEAnVH)),
                            (0, s.jsx)(tt.A, {
                                subscriptionTier: eM.pe.TIER_2,
                                fullWidth: !0,
                                buttonTextOverride: e,
                                onClick: () => {
                                    (g(V.sH.UNLOCK_WITH_NITRO), (0, tm.M)());
                                },
                                onSubscribeModalClose: () => {
                                    (0, tm.t)({
                                        product: i,
                                        category: a,
                                        shouldCheckoutWithOrbs: l,
                                        returnRef: p,
                                        analyticsLocations: m,
                                        tab: c,
                                        giftRecipient: d,
                                        giftingOrigin: u,
                                        cardId: v,
                                        sessionId: h,
                                        tilePosition: f,
                                    });
                                },
                            })
                        );
                    }
                    return S
                        ? T
                            ? H
                                ? (0, s.jsxs)(e9.e, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, s.jsx)(tg, { product: n, onSuccess: x, onTrackClick: g }),
                                          (0, s.jsx)(tu.A, {
                                              primary: !0,
                                              product: n,
                                              onSuccess: x,
                                              giftRecipient: d,
                                              giftingOrigin: u,
                                              onTrackClick: g,
                                          }),
                                      ],
                                  })
                                : (0, s.jsx)(tg, { product: n, onSuccess: x, onTrackClick: g })
                            : w
                              ? (0, s.jsx)(e5.$, {
                                    loading: b,
                                    loadingStartedLabel: W.intl.string(W.t["TYw+9s"]),
                                    loadingFinishedLabel: W.intl.string(W.t.Pg1UP5),
                                    onClick: async () => {
                                        (g(V.sH.ADD_TO_COLLECTION),
                                            await (0, R.iJ)(n.skuId),
                                            x(),
                                            (0, tD.A)({
                                                product: n,
                                                analyticsLocations: m,
                                                purchaseType: V.gs.PREMIUM_PURCHASE,
                                            }));
                                    },
                                    text: W.intl.string(W.t.zp6caO),
                                    fullWidth: !0,
                                })
                              : (0, s.jsx)(s.Fragment, {
                                    children: X.map((e, t) => {
                                        let i,
                                            a,
                                            l,
                                            c,
                                            o,
                                            p = 0 === t,
                                            v =
                                                e.currency === tT.Yr.DISCORD_ORB
                                                    ? ((i = P ? W.intl.string(W.t.cTdr3x) : W.intl.string(W.t.zqh7ZM)),
                                                      (a = !Y || P),
                                                      (l = W.intl.formatToPlainString(W.t.yi41qQ, {
                                                          orbPrice: e.amount,
                                                      })),
                                                      (c = a ? `${l}, ${i}` : l),
                                                      (0, s.jsx)(eJ.m, {
                                                          position: "top",
                                                          text: i,
                                                          shouldShow: a,
                                                          "aria-label": !1,
                                                          children: (0, s.jsx)(e5.$, {
                                                              variant: p ? "primary" : "secondary",
                                                              onClick: function () {
                                                                  (g(V.sH.BUY_WITH_ORBS),
                                                                      (0, j.B4)({
                                                                          skuId: n.skuId,
                                                                          onComplete: (e) => {
                                                                              ((0, R.gB)(),
                                                                                  x(),
                                                                                  (0, tD.A)({
                                                                                      product: n,
                                                                                      analyticsLocations: m,
                                                                                      itemConsumed:
                                                                                          e?.entitlements?.[0]
                                                                                              ?.consumed,
                                                                                      purchaseType: V.gs.ORB,
                                                                                  }));
                                                                          },
                                                                          analyticsLocations: m,
                                                                          discoverySessionId: h,
                                                                      }));
                                                              },
                                                              disabled: a,
                                                              "aria-label": c,
                                                              text: W.intl.format(W.t.JC15qj, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, s.jsx)(e3.C, {
                                                                          className: tB.fN,
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                              }),
                                                              fullWidth: !0,
                                                          }),
                                                      }))
                                                    : ((o =
                                                          A ??
                                                          W.intl.formatToPlainString(W.t["cNSL/j"], {
                                                              price: (0, ts.$g)(e.amount, e.currency),
                                                          })),
                                                      (0, s.jsxs)(e9.e, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, s.jsx)(e5.$, {
                                                                  variant: p ? "primary" : "secondary",
                                                                  onClick: $,
                                                                  text: o,
                                                                  fullWidth: !0,
                                                              }),
                                                              H &&
                                                                  (0, s.jsx)(tu.A, {
                                                                      primary: p,
                                                                      product: n,
                                                                      onSuccess: x,
                                                                      giftRecipient: d,
                                                                      giftingOrigin: u,
                                                                      onTrackClick: g,
                                                                  }),
                                                          ],
                                                      }));
                                        return (0, s.jsx)(r.Fragment, { children: v }, e.currency);
                                    }),
                                })
                        : H
                          ? (0, s.jsx)(tu.A, {
                                primary: !0,
                                product: n,
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
var tM = i(634656);
function tF(e) {
    let {
            productRecord: t,
            selectedProduct: i,
            previewingProduct: n,
            user: r,
            selectedBundleSlide: a,
            pendingProfile: l,
        } = e,
        c = eZ(t);
    return (0, s.jsxs)("div", {
        className: F()(tM.wd, { [tM.E7]: null != c.LeftPreview }),
        children: [
            (0, s.jsx)("div", {
                className: tM.dL,
                children: (0, s.jsx)(e8, { productRecord: t, selectedProduct: i, selectedBundleSlide: a }),
            }),
            null != c.LeftPreview &&
                (0, s.jsx)("div", {
                    className: tM._E,
                    children: (0, s.jsx)(c.LeftPreview, {
                        user: r,
                        selectedProduct: i,
                        previewingProduct: n,
                        productRecord: t,
                        selectedBundleSlide: a,
                        pendingProfile: l,
                    }),
                }),
            (0, s.jsx)("div", { className: tM.F_, children: (0, s.jsx)(c.Info, { ...e }) }),
            (0, s.jsx)(tw, { ...e }),
        ],
    });
}
var tU = i(529756),
    tG = i(408278),
    tH = i(972213),
    tz = i(156248),
    tV = i(139146),
    tW = i(60465),
    tX = i(976860),
    tY = i(402860),
    tZ = i(50920),
    tK = i(365491),
    t$ = i(668953),
    tq = i(881636),
    tJ = i(807562);
function tQ(e) {
    let { goPrev: t, goNext: i } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: tJ.Y,
                children: (0, s.jsx)(tG.K, {
                    "aria-label": W.intl.string(W.t["3NdvMK"]),
                    onClick: t,
                    icon: t$.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, s.jsx)("div", {
                className: tJ.K,
                children: (0, s.jsx)(tG.K, {
                    "aria-label": W.intl.string(W.t.RYIeOX),
                    onClick: i,
                    icon: tq.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var t0 = i(48062);
function t1(e) {
    let {
            user: t,
            pendingProfile: i,
            productRecord: n,
            previewingProduct: a,
            selectedProduct: l,
            selectedVariantIndex: c,
            selectedBundleSlide: d,
            setSelectedBundleSlide: o,
            isClosing: u,
            isOrbCheckoutModalOpen: m,
            pdpBackground: p,
            category: x,
            tab: g,
            onClose: v,
            onTrackClick: h,
        } = e,
        f = eZ(n),
        E = (0, k.aw)(l),
        N = E ? l.items.length : 0,
        j = (function () {
            let e = (0, tZ.a)("CollectiblesPdpNavigateToCollection"),
                { sessionId: t } = (0, C.uM)() ?? {},
                i = (0, tK.v)((e) => e.reset);
            return r.useCallback(
                (n, s) => {
                    if (
                        (A.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: t,
                            sku_id: n.skuId,
                            cta_name: s,
                        }),
                        (0, tY.closeUserProfileModal)(),
                        (0, tW.p)(),
                        e && !0 !== n.isOrbsExclusive)
                    )
                        return void (0, tX.pX)(O.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n.skuId));
                    i();
                    let r = !0 === n.isOrbsExclusive ? V.G2.ORBS : V.G2.CATALOG;
                    (0, tX.pX)(`${O.BVt.COLLECTIBLES_SHOP_WITH_TAB(r)}&${V.P1}=${n.skuId}`);
                },
                [e, t, i],
            );
        })(),
        I = r.useCallback(() => {
            (h(V.sH.GO_TO_COLLECTION), v(), j(x, "go_to_collection_button"));
        }, [x, v, h, j]),
        R = r.useCallback(() => {
            N <= 1 || o((e) => (e - 1 + N) % N);
        }, [N, o]),
        y = r.useCallback(() => {
            N <= 1 || o((e) => (e + 1) % N);
        }, [N, o]),
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
        T = r.useCallback(() => {
            (h(V.sH.CLOSE_DETAIL), v());
        }, [h, v]),
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
            className: F()(t0.i1, (0, V.EZ)(l.skuId) ? t0.bF : l.type === b.R.AVATAR_DECORATION ? t0.Jq : t0.eF),
            style: null != p ? { backgroundImage: `url(${p})` } : void 0,
            onKeyDown: _,
            children: [
                (0, s.jsx)("div", {
                    className: t0.GV,
                    children: (0, s.jsx)(eJ.m, {
                        text: W.intl.string(W.t["Hr/q/6"]),
                        children: (0, s.jsx)(e5.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: tU.c,
                            text: x.name,
                            onClick: I,
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: t0.KR,
                    ref: L,
                    children: (0, s.jsx)(f.RightPreview, {
                        user: t,
                        pendingProfile: i,
                        productRecord: n,
                        selectedProduct: l,
                        previewingProduct: a,
                        selectedBundleSlide: d,
                        isClosing: u,
                        isOrbCheckoutModalOpen: m,
                    }),
                }),
                E && N > 1 && (0, s.jsx)(tQ, { goPrev: R, goNext: y }),
                (0, s.jsxs)("div", {
                    className: t0.VG,
                    children: [
                        (0, s.jsx)(tV.R, {
                            product: n,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(tz.H, {
                            skuId: l.skuId,
                            product: l,
                            productName: (0, P.VG)(l),
                            tab: g,
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(tG.K, {
                            "aria-label": W.intl.string(W.t.cpT0Cq),
                            onClick: T,
                            icon: tH.XLargeIcon,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var t2 = i(80801);
let t8 = (0, u.FT)(u._3.SIZE_152),
    t6 = function (e) {
        let {
                transitionState: t,
                onClose: i,
                product: n,
                category: a,
                returnRef: u,
                analyticsSource: b,
                analyticsLocations: M,
                shouldCheckoutWithOrbs: F,
                tab: U,
                giftRecipient: G,
                giftingOrigin: H,
            } = e,
            z = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
            V = (0, o.cf)([E.A], () => E.A.getPendingChanges()),
            W = (0, w.f)(n),
            { previewingVariantIndex: X } = W,
            Y = (0, y.Q)(n),
            Z = D(n, X),
            K = (0, L.rb)(n, Y);
        l()(null != K, "Selected product should not be null");
        let { analyticsLocations: $ } = (0, g.Ay)([...M, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, S.Yr)(K.skuId);
        let q = (0, B.U1)(a),
            [J, Q] = r.useState(0);
        r.useEffect(() => {
            null != z && (0, N.A)(z.id, z.getAvatarURL(void 0, 80));
        }, [z]);
        let ee = r.useMemo(() => (0, k.V6)(n.type, n.skuId), [n.type, n.skuId]);
        r.useEffect(() => {
            (A.default.track(O.HAw.OPEN_MODAL, {
                type: O.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: b,
                location_stack: $,
                sku_id: K.skuId,
                product_type: ee,
            }),
                (0, R.RD)(K.skuId));
        }, [b, $, K.skuId, ee]);
        let { cardId: et, sessionId: ei, tilePosition: en } = (0, C.uM)() ?? {},
            es = r.useMemo(() => (0, L.v8)(n), [n]),
            er = (function (e) {
                let { skuId: t, productSkuIds: i, analyticsLocations: n } = e,
                    { cardId: s, sessionId: a } = (0, C.uM)() ?? {},
                    l = (0, T.o)(),
                    c = (0, k.xM)(l);
                return r.useCallback(
                    (e, r) => {
                        A.default.track(O.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: r ?? t,
                            cta: e,
                            shop_session_id: a,
                            card_id: s,
                            product_sku_ids: i,
                            location_stack: n,
                            discount_source: (0, k.b_)(c),
                        });
                    },
                    [t, n, s, i, a, c],
                );
            })({ skuId: K.skuId, productSkuIds: es, analyticsLocations: $ });
        (0, v.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: K.skuId,
                card_id: et,
                shop_session_id: ei,
                position_in_section: en,
                product_sku_ids: es,
                location_stack: $,
            },
        });
        let ea = (0, j.o6)(),
            el = t === m.ip.EXITING,
            ec = (0, _.c)("product_details_modal");
        if (null == z || (n.skuId === d.j.PREMIUM_TIER_2_1_DAY && !ec)) return null;
        let ed = {
                pendingChanges: V,
                pendingAvatarSrc:
                    void 0 !== V.pendingAvatar
                        ? (0, h.sv)((0, f.V7)({ userId: z.id, image: V.pendingAvatar, size: t8 }), null, z, {
                              size: t8,
                          })
                        : void 0,
            },
            eo = (0, P.VG)(n),
            eu = {
                user: z,
                pendingProfile: ed,
                productRecord: n,
                productName: eo,
                selectedProduct: K,
                previewingProduct: Z ?? null,
                category: a,
                selectedVariantIndex: Y,
                previewingVariantIndexProps: W,
                selectedBundleSlide: J,
                setSelectedBundleSlide: Q,
                tab: U,
                shouldCheckoutWithOrbs: F,
                giftRecipient: G?.id !== z.id ? G : void 0,
                giftingOrigin: G?.id !== z.id ? H : void 0,
                analyticsLocations: $,
                returnRef: u,
                onClose: i,
                onTrackClick: er,
            };
        return (0, s.jsx)(g.f5, {
            value: $,
            children: (0, s.jsx)(p.d, {
                returnRef: u,
                transitionState: t,
                onClose: i,
                size: "xl",
                paddingSize: "sm",
                "aria-label": eo,
                children: (0, s.jsx)("div", {
                    className: t2.C,
                    children: (0, s.jsxs)("div", {
                        className: t2.j,
                        children: [
                            (0, s.jsx)(tF, { ...eu }),
                            (0, s.jsx)(t1, { ...eu, isClosing: el, isOrbCheckoutModalOpen: ea, pdpBackground: q }),
                        ],
                    }),
                }),
            }),
        });
    };
