n.d(t, { default: () => t5 });
var i,
    r = n(627968),
    s = n(64700),
    a = n(284009),
    l = n.n(a),
    c = n(562708),
    o = n(334279),
    d = n(702841),
    u = n(778712),
    m = n(231723),
    p = n(224640),
    x = n(793574),
    g = n(688810),
    E = n(139286),
    h = n(252732),
    v = n(101058),
    N = n(836602),
    f = n(903209),
    A = n(652165),
    R = n(287809),
    I = n(174459),
    _ = n(34332),
    j = n(440938),
    C = n(298072),
    T = n(993408),
    k = n(503089),
    O = n(331884),
    y = n(652215),
    L = n(623373),
    b = n(536572),
    P = n(177366),
    S = n(575593);
function D(e, t) {
    return e.type === S.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e;
}
var B = n(212407),
    U = n(935094),
    M = n(503698),
    G = n.n(M),
    H = n(939249),
    F = n(834730),
    w = n(297264),
    V = n(14702),
    z = n(758836),
    K = n(375708),
    W = n(777940);
function X(e) {
    let { name: t, typeLabel: n } = e;
    return (0, r.jsxs)(F.E, {
        variant: "text-sm/medium",
        className: W.mC,
        "aria-live": "polite",
        children: [
            (0, r.jsx)("span", { className: W.kx, children: t }),
            null != n && (0, r.jsx)("span", { className: W.FP, children: n }),
        ],
    });
}
let Y = { [S.R.AVATAR_DECORATION]: !0, [S.R.PROFILE_FRAME]: !0 };
function $(e) {
    let { item: t, index: n, isSelected: i, setSelected: a, label: l, trackedSkuId: c, onTrackClick: o } = e,
        d = s.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        u = s.useCallback(() => {
            o(z.sH.BUNDLE_VIEW_PRODUCT, c), a(n);
        }, [o, c, a, n]),
        m = !0 === Y[t.type];
    return (0, r.jsx)(H.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: G()(W.xn, { [W.Y4]: i, [W.u8]: m }),
        onClick: u,
        "aria-label": l,
        children: (0, r.jsx)("div", { className: W.Yf, children: (0, r.jsx)(V.O, { product: d }) }),
    });
}
var q = n(442759),
    Z = n(344346),
    J = n(139136),
    Q = n(395744),
    ee = n(929283),
    et = n(387417);
function en(e) {
    let {
        item: t,
        user: n,
        bundleFirstAvatarDecoration: i,
        isBundle: s,
        pendingAvatarSrc: a,
        pendingAvatarDecoration: l,
        pendingDisplayNameStyles: c,
        pendingGlobalName: o,
    } = e;
    switch (t.type) {
        case S.R.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: et.h1,
                children: (0, r.jsx)(ee.i, { user: n, item: t, avatarSrcOverride: a, isHighlighted: !0 }),
            });
        case S.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: s ? et.sm : et.VY,
                children: (0, r.jsx)(J.A, {
                    skuId: t.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case S.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: s ? et.ob : et.fE, children: (0, r.jsx)(Q.A, { frame: t }) });
        case S.R.NAMEPLATE:
            return (0, r.jsx)("div", {
                className: et.Dz,
                children: (0, r.jsx)(Z.A, {
                    className: et.M4,
                    nameplate: t,
                    user: n,
                    nameplatePreviewSize: "large",
                    pendingAvatarDecoration: i ?? l,
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
function ei(e) {
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: s, pendingProfile: a } = e,
        l = i ?? n,
        { firstAvatarDecoration: c } = (0, q.f5)(l),
        { pendingChanges: o, pendingAvatarSrc: d } = a,
        u = l.items[s] ?? l.items[0];
    return null == u
        ? null
        : (0, r.jsx)(en, {
              item: u,
              user: t,
              bundleFirstAvatarDecoration: c,
              isBundle: (0, T.aw)(l),
              pendingAvatarSrc: d,
              pendingAvatarDecoration: o.pendingAvatarDecoration,
              pendingDisplayNameStyles: o.pendingDisplayNameStyles,
              pendingGlobalName: o.pendingGlobalName,
          });
}
var er = n(846957);
function es(e) {
    let { selectedProduct: t, previewingProduct: n } = e;
    return (0, r.jsx)(er.B, { product: n ?? t });
}
var ea = n(975571);
function el(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) return K.intl.formatToPlainString(K.t["/0Yndu"], { num: e.bundledProducts?.length });
    let n = e.bundledProducts ?? [],
        i = [],
        r = !1;
    for (let e of n)
        switch (e.type) {
            case S.R.AVATAR_DECORATION:
                i.push(K.intl.formatToPlainString(K.t.Ntv9Jt, { itemName: e.name }));
                break;
            case S.R.PROFILE_EFFECT:
                i.push(K.intl.formatToPlainString(K.t["3Y8q7a"], { itemName: e.name }));
                break;
            case S.R.NAMEPLATE:
                i.push(K.intl.formatToPlainString(K.t["2keXky"], { itemName: e.name })), (r = !0);
        }
    if (r) {
        let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
        return K.intl.formatToPlainString(K.t.Ofrqj6, { joinedItems: e });
    }
    let s = i.join(" & ");
    return K.intl.formatToPlainString(K.t.Ofrqj6, { joinedItems: s });
}
n(321073);
var ec = n(740076),
    eo = n(661847),
    ed = n(186077);
function eu(e) {
    let { skuId: t } = e;
    return (0, z.EZ)(t)
        ? (0, r.jsx)(F.E, {
              variant: "text-sm/normal",
              className: ed.CU,
              children: K.intl.format(K.t.Q1scdE, {
                  helpdeskArticle: ea.A.getArticleURL(y.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function em(e) {
    let { productRecord: t, productName: n, selectedProduct: i, previewingVariantIndexProps: a } = e,
        { previewingVariantIndex: l, handleEntering: c, handleLeaving: o } = a,
        d = D(t, l) ?? i,
        u = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (0, s.useMemo)(() => {
                if (null != e && null != e.summary && "" !== e.summary) {
                    if (e.type === S.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                        let n = el(e, t);
                        return e.summary.replace("{joinedItems}", n);
                    }
                    return e.summary;
                }
                switch (e?.type) {
                    case S.R.AVATAR_DECORATION:
                        return K.intl.string(K.t["3lv7q2"]);
                    case S.R.PROFILE_EFFECT:
                        return K.intl.string(K.t.VhJL72);
                    case S.R.NAMEPLATE:
                        return K.intl.string(K.t.ik37EZ);
                    case S.R.PROFILE_FRAME:
                        return K.intl.string(K.t.fWzWPp);
                    case S.R.BUNDLE:
                        return el(e, t);
                    default:
                        return "";
                }
            }, [e, t]);
        })(d, !1),
        { disabledReason: m } = (0, ec.I)(i.skuId),
        p = (0, C.Q)(t),
        x = (0, L.B1)(t),
        g = x ? t.variants[l ?? p] : null,
        E = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            null != E.current && ((E.current.tabIndex = -1), E.current.focus());
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: ed.sn,
                    children: [
                        (0, r.jsx)(w.D, { ref: E, variant: "heading-xl/bold", className: ed.R_, children: n }),
                        (0, r.jsx)(F.E, { variant: "text-sm/normal", children: u }),
                        (0, r.jsx)(eu, { skuId: d.skuId }),
                        null !== m && (0, r.jsx)(F.E, { variant: "text-xs/normal", className: ed.H$, children: m }),
                    ],
                }),
                x &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != g &&
                                (0, r.jsx)(F.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: ed.a9,
                                    lineClamp: 1,
                                    children: K.intl.format(K.t.EcaRWt, {
                                        value: (0, r.jsx)("span", { className: ed.I8, children: g.variantLabel }),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                className: ed._x,
                                children: (0, r.jsx)(eo.A, {
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
var ep =
        (((i = {}).COLLECTIBLE = "COLLECTIBLE"),
        (i.BUNDLE = "BUNDLE"),
        (i.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (i.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (i.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        i),
    ex = n(97808),
    eg = n(346055),
    eE = n(993077),
    eh = n(245604),
    ev = n(460905),
    eN = n(262295),
    ef = n(685073),
    eA = n(320095),
    eR = n(963852),
    eI = n(763754),
    e_ = n(20851),
    ej = n(986687),
    eC = n(428262),
    eT = n(780898),
    ek = n(907609);
function eO(e) {
    let { user: t, innerClassName: n } = e;
    return (0, r.jsx)("div", {
        className: ek.mV,
        children: (0, r.jsx)(eN.A, {
            avatar: (0, r.jsx)(ex.eu, {
                src: t.avatarSrc,
                size: u._3.SIZE_32,
                "aria-label": t.name,
                status: y.clD.ONLINE,
            }),
            name: t.name,
            innerClassName: G()(ek.$L, n),
        }),
    });
}
function ey(e) {
    let { user: t, nameplate: n, avatarDecoration: i, pendingDisplayNameStyles: s, pendingGlobalName: a } = e,
        l = (0, eT.Ov)();
    return (0, r.jsx)("div", {
        className: ek.nJ,
        role: "img",
        "aria-label": K.intl.formatToPlainString(K.t["95pCSf"], { a11y_text: n.label }),
        children: (0, r.jsxs)(eg.M, {
            children: [
                (0, r.jsx)(eO, { user: l.mallow, innerClassName: ek.ab }),
                (0, r.jsxs)(F.E, {
                    variant: "text-sm/semibold",
                    className: ek.OS,
                    children: [K.intl.string(K.t["yzW/fZ"]), " - 3"],
                }),
                (0, r.jsx)(eO, { user: l.phibi, innerClassName: ek.e9 }),
                (0, r.jsx)("div", {
                    className: ek.mV,
                    children: (0, r.jsx)(Z.A, {
                        className: ek.M4,
                        innerClassName: ek.e9,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: i,
                        pendingDisplayNameStyles: s,
                        pendingGlobalName: a,
                        hideDecorators: !0,
                    }),
                }),
                (0, r.jsx)(eO, { user: l.locke, innerClassName: ek.e9 }),
                (0, r.jsxs)(F.E, {
                    variant: "text-sm/semibold",
                    className: ek.OS,
                    children: [K.intl.string(K.t["NG43/6"]), " - 12"],
                }),
                (0, r.jsx)(eO, { user: l.boom, innerClassName: ek.bD }),
                (0, r.jsx)(eO, { user: l.cherry, innerClassName: ek.bD }),
            ],
        }),
    });
}
function eL(e) {
    let {
            user: t,
            avatarDecoration: n,
            pendingAvatarSrc: i,
            pendingPrimaryGuildId: s,
            pendingDisplayNameStyles: a,
            pendingGlobalName: l,
        } = e,
        c = (function (e) {
            let { author: t } = e;
            return (0, eA.rh)({
                ...(0, eR.Ay)({ author: t, channelId: "1337", content: K.intl.string(K.t.d5YwK5) }),
                state: y.cmJ.SENT,
                id: "0",
            });
        })({ author: t }),
        o = (0, ef.gS)(s),
        d = (0, eI.p_)(c),
        u = {
            ...d,
            nick:
                void 0 !== l
                    ? (0, h.eh)({ pendingNickname: void 0, pendingGlobalName: l, user: t, guildMember: null })
                    : d.nick,
            primaryGuild: void 0 !== s ? o : d.primaryGuild,
            displayNameStyles: void 0 !== a ? a : d.displayNameStyles,
        };
    return (0, r.jsx)("div", {
        role: "img",
        "aria-label": K.intl.string(K.t["TN+ZvB"]),
        children: (0, r.jsx)(eg.M, {
            children: (0, r.jsxs)(eE.Z, {
                className: ek.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(
                        e_.A,
                        {
                            className: ek.G5,
                            author: u,
                            message: c,
                            avatarDecorationOverride: n ?? null,
                            avatarOverride: i,
                        },
                        c.id,
                    ),
                    (0, r.jsxs)("div", {
                        className: ek.lG,
                        children: [
                            (0, r.jsx)(eh.U, { size: "md", color: "currentColor", className: ek.hq }),
                            (0, r.jsx)(ev.n, { size: "md", color: "currentColor", className: ek.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eb(e) {
    let { product: t, user: n, pendingProfile: i, activeBundleSlide: s } = e,
        a = eC.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: l, ...c } = i.pendingChanges,
        o = i.pendingAvatarSrc,
        d = t.type === S.R.BUNDLE ? t.items[s ?? 0] : void 0,
        u = d?.type ?? t.type,
        m = u === S.R.AVATAR_DECORATION,
        p = u === S.R.PROFILE_EFFECT,
        { firstAvatarDecoration: x, firstProfileEffect: g, firstNameplate: E, firstProfileFrame: h } = (0, q.f5)(t),
        v = d?.type === S.R.AVATAR_DECORATION ? d : x,
        N = d?.type === S.R.PROFILE_EFFECT ? d : g,
        f = d?.type === S.R.PROFILE_FRAME ? d : h,
        A = d?.type === S.R.NAMEPLATE ? d : E;
    if (u === S.R.NAMEPLATE && null != A)
        return (0, r.jsx)("div", {
            className: ek.Zj,
            children: (0, r.jsx)(ey, {
                user: n,
                nameplate: A,
                avatarDecoration: v ?? c.pendingAvatarDecoration,
                pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                pendingGlobalName: c.pendingGlobalName,
            }),
        });
    return (0, r.jsx)("div", {
        className: m ? ek.RA : ek.hZ,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ej.A, {
                    ...c,
                    pendingAvatar: o,
                    user: n,
                    canUsePremiumCustomization: a,
                    pendingAvatarDecoration: v ?? c.pendingAvatarDecoration,
                    pendingProfileEffect: N ?? c.pendingProfileEffect,
                    profileEffectRestartKey: s,
                    pendingProfileFrame: f ?? c.pendingProfileFrame,
                    disabledInputs: !0,
                    hideMessageInput: !p,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? ek.oB : void 0,
                }),
                m &&
                    (0, r.jsx)(eL, {
                        user: n,
                        avatarDecoration: v,
                        pendingAvatarSrc: o,
                        pendingPrimaryGuildId: c.pendingPrimaryGuildId,
                        pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                        pendingGlobalName: c.pendingGlobalName,
                    }),
            ],
        }),
    });
}
function eP(e) {
    let { user: t, pendingProfile: n, selectedProduct: i, previewingProduct: s, selectedBundleSlide: a } = e;
    return (0, r.jsx)(eb, { user: t, pendingProfile: n, product: s ?? i, activeBundleSlide: a });
}
var eS = n(478016),
    eD = n(661531),
    eB = n(224016),
    eU = n(792249);
function eM() {
    let e = [K.t.E1NP2x, K.t.kpMomJ, K.t.xT1Vfn, K.t.myyAEr, K.t.zTk8Ul];
    return (0, r.jsxs)("div", {
        className: eU.kL,
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eU.ym,
            }),
            (0, r.jsx)(eB.A, { color: "white" }),
            (0, r.jsx)("div", {
                className: eU.PX,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: eU.UJ,
                            children: [
                                (0, r.jsx)(eS.U, { color: eD.A.colors.WHITE }),
                                (0, r.jsx)(F.E, {
                                    variant: "text-sm/medium",
                                    color: "text-overlay-light",
                                    children: K.intl.string(e),
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
var eG = n(17928),
    eH = n(132198),
    eF = n(176890);
function ew(e) {
    let { user: t } = e,
        n = eC.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...s } = (0, eG.cf)([N.A], () => N.A.getPendingChanges()),
        a = (0, v.V7)({ userId: t.id, image: i });
    return (0, r.jsx)("div", {
        className: eF.k,
        children: (0, r.jsx)(ej.A, {
            ...s,
            pendingAvatar: a,
            user: t,
            pendingBadges: [(0, eH._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
}
var eV = n(933595);
function ez(e) {
    let { user: t, productRecord: n, isClosing: i, isOrbCheckoutModalOpen: s } = e;
    return n.skuId === z.Dp.ORB_PROFILE_BADGE
        ? i || s
            ? null
            : (0, r.jsx)(ew, { user: t })
        : (0, z.EZ)(n.skuId)
          ? (0, r.jsx)(eM, {})
          : (0, r.jsx)(er.B, { product: n, className: eV.M });
}
let eK = {
    [ep.COLLECTIBLE]: { LeftPreview: ei, Info: em, RightPreview: eP },
    [ep.BUNDLE]: {
        LeftPreview: ei,
        Info: function (e) {
            let {
                    productRecord: t,
                    productName: n,
                    selectedBundleSlide: i,
                    setSelectedBundleSlide: a,
                    onTrackClick: l,
                } = e,
                c = t.items,
                o = t.bundledProducts,
                d = o?.[i]?.name,
                u = c[i]?.type,
                m = null != u ? (0, T.Dm)(u) : null,
                p = K.intl.string(K.t.cTbdgu),
                x = s.useRef(null),
                g = s.useCallback(
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
            s.useEffect(() => {
                let e = x.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let t = e.querySelectorAll('[role="radio"]');
                t[i]?.focus();
            }, [i]);
            let E = s.useRef(null);
            return (
                s.useLayoutEffect(() => {
                    null != E.current && ((E.current.tabIndex = -1), E.current.focus());
                }, []),
                (0, r.jsxs)("div", {
                    className: W.Qf,
                    children: [
                        (0, r.jsx)(w.D, { ref: E, variant: "heading-xl/bold", className: W.R_, title: n, children: n }),
                        (0, r.jsx)(F.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: K.intl.format(K.t["1tUCAO"], { count: c.length }),
                        }),
                        (0, r.jsxs)("div", {
                            className: W.hZ,
                            children: [
                                (0, r.jsx)("div", {
                                    className: W.vg,
                                    children: (0, r.jsx)("div", {
                                        ref: x,
                                        className: W.hK,
                                        role: "radiogroup",
                                        "aria-label": p,
                                        tabIndex: -1,
                                        onKeyDown: g,
                                        children: c.map((e, t) => {
                                            let n = o?.[t]?.name ?? e.skuId,
                                                s = o?.[t]?.skuId ?? e.skuId;
                                            return (0, r.jsx)(
                                                $,
                                                {
                                                    item: e,
                                                    index: t,
                                                    isSelected: t === i,
                                                    setSelected: a,
                                                    label: n,
                                                    trackedSkuId: s,
                                                    onTrackClick: l,
                                                },
                                                e.skuId,
                                            );
                                        }),
                                    }),
                                }),
                                null != d && (0, r.jsx)(X, { name: d, typeLabel: m }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: eP,
    },
    [ep.EXTERNAL_ORB_BADGE]: { LeftPreview: es, Info: em, RightPreview: ez },
    [ep.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: es, Info: em, RightPreview: ez },
    [ep.EXTERNAL_GENERIC]: { LeftPreview: es, Info: em, RightPreview: ez },
};
function eW(e) {
    var t;
    return eK[
        ((t = e),
        (0, z.pQ)(t.skuId)
            ? t.skuId === z.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, z.EZ)(t.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, T.aw)(t)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var eX = n(13875),
    eY = n(629042),
    e$ = n(110629),
    eq = n(268959),
    eZ = n(866665),
    eJ = n(508770),
    eQ = n(278416);
let e0 = (e) => {
    let { promotion: t } = e;
    return (0, r.jsx)(eZ.m, {
        position: "top",
        asContainer: !0,
        text: K.intl.formatToPlainString(K.t.cNtuKF, { offerName: t.displayName }),
        children: (0, r.jsx)(eJ.E, { type: { text: K.intl.string(K.t["nb5PC/"]) }, variant: "expressive", icon: eQ.g }),
    });
};
var e1 = n(609225);
function e2(e) {
    let t,
        { productRecord: n, selectedProduct: i, selectedBundleSlide: s } = e,
        a = (0, eX.Do)("CollectiblesShopProductDetailsModal") && i.type === S.R.PROFILE_FRAME,
        l = (0, eY.SV)(i),
        c = n.type === S.R.BUNDLE ? (n.items[s] ?? n.items[0]) : void 0,
        o =
            null != c &&
            !n.hideBadge &&
            null == n.badgeOverride &&
            (0, L.JQ)({ skuId: c.skuId, type: c.type, items: [c] });
    return (
        (t = a
            ? (0, r.jsx)(e$.A, { location: "CollectiblesShopProductDetailsModal" })
            : o
              ? (0, r.jsx)(eq.s, {})
              : (0, r.jsx)(eq.A, { skuId: n.skuId })),
        (0, r.jsxs)("div", { className: e1.N, children: [t, null != l && (0, r.jsx)(e0, { promotion: l })] })
    );
}
var e7 = n(462887),
    e6 = n(821609),
    e3 = n(318254),
    e9 = n(825484),
    e4 = n(331322),
    e8 = n(736653),
    e5 = n(44120),
    te = n(465794),
    tt = n(757036),
    tn = n(761705),
    ti = n(580630),
    tr = n(4227),
    ts = n(466459),
    ta = n(395068),
    tl = n(885574),
    tc = n(847927);
function to(e) {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(eZ.m, {
              position: "top",
              align: "left",
              text: K.intl.string(K.t.y1VWkZ),
              children: (0, r.jsxs)("div", {
                  className: G()(tc.GX, t),
                  children: [
                      (0, r.jsx)("span", {
                          className: tc.P0,
                          children: (0, r.jsx)(tl.m, { size: "md", color: "currentColor", className: tc.G }),
                      }),
                      (0, r.jsx)(F.E, { variant: "text-md/semibold", children: K.intl.string(K.t.BEjTij) }),
                  ],
              }),
          })
        : (0, r.jsx)(F.E, { variant: "text-md/semibold", className: t, children: K.intl.string(K.t["6cfuDj"]) });
}
var td = n(878112),
    tu = n(572595),
    tm = n(206835),
    tp = n(450481);
let tx = function (e) {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: s, isApplying: a, canUseNow: l } = (0, tp.p)({ product: t, onSuccess: n }),
        c = (0, tm.A)();
    return l
        ? (0, r.jsx)(e6.$, {
              variant: "primary",
              onClick: () => {
                  i?.(z.sH.USE_NOW), s();
              },
              loading: a,
              text: K.intl.string(K.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, r.jsx)(e6.$, {
              variant: "primary",
              onClick: () => {
                  i?.(z.sH.EDIT_PROFILE), c(), n?.();
              },
              text: K.intl.string(K.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tg = n(770948);
let tE = function (e) {
    let { analyticsLocations: t, children: n } = e;
    return (0, r.jsx)(g.f5, {
        value: [...t, x.A.PROFILE_FRAMES_EA_MARKETING],
        children: (0, r.jsxs)("div", {
            className: tg.k,
            children: [
                (0, r.jsx)(F.E, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: K.intl.format(K.t["3cglst"], {
                        articleURL: ea.A.getArticleURL(y.MVz.SHOP_FRAMES_EARLY_ACCESS),
                    }),
                }),
                n,
            ],
        }),
    });
};
var th = n(561769),
    tv = n(140735),
    tN = n(273267);
function tf(e) {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: s = "heading-md/semibold",
        } = e,
        a = (0, ti.RS)(t, n);
    return (0, r.jsxs)(F.E, {
        variant: s,
        className: G()(tN.v, i),
        children: [
            (0, r.jsx)(tv.A, { children: K.intl.format(K.t["2CEGln"], { price: a }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: a }),
        ],
    });
}
var tA = n(219103),
    tR = n(794231);
function tI(e) {
    let {
            product: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: s,
            className: a,
            hideStrikethroughPrice: l = !1,
            discountIconDisplayMode: c,
            discountIconSize: o = "md",
        } = e,
        d = (0, T.WD)(t, { hasShopDiscount: n, discount: s });
    if (null == d) return null;
    let { defaultPrice: u, showDefaultPriceOnly: m } = d;
    if (m)
        return (0, r.jsx)("div", {
            className: G()(tR.kG, a),
            children: (0, r.jsx)(tA.x, { priceAmount: u.amount, priceCurrency: u.currency }),
        });
    let { showDiscountPrice: p, originalPrice: x, finalPrice: g } = d;
    return (0, r.jsxs)("div", {
        className: G()(tR.kG, a),
        children: [
            l ? null : (0, r.jsx)(tf, { price: x, className: tR.q9 }),
            (0, r.jsx)(tA.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
                discount: s,
                className: tR.q9,
                discountIconConfig: p && null != c ? { displayMode: c, source: i ?? T.D0.NITRO, size: o } : void 0,
            }),
        ],
    });
}
var t_ = n(403581),
    tj = n(532794),
    tC = n(202541),
    tT = n(868534);
function tk(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, g.Ay)(),
        a = s.useRef(null);
    return (0, r.jsx)(H.D, {
        className: tT.F,
        innerRef: a,
        onClick: () => {
            n?.(z.sH.SUBSCRIBE_NOW), (0, tj.A)({ subscriptionTier: tC.pe.TIER_2, analyticsLocations: i, returnRef: a });
        },
        children: t,
    });
}
var tO = n(25537);
function ty(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, T.yt)(t, y.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let s = (0, ti.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: tO.k,
        children: [
            (0, r.jsx)(eZ.m, {
                text: K.intl.string(K.t.MPFyJ5),
                "aria-label": K.intl.string(K.t.X3Ekj8),
                children: (0, r.jsx)(t_.t, { size: "md", color: "currentColor", className: tO.o }),
            }),
            (0, r.jsx)(F.E, {
                variant: "text-xs/medium",
                children: K.intl.format(K.t.Sv8iic, {
                    price: s,
                    subscribeNowHook: (e) => (0, r.jsx)(tk, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var tL = n(818348),
    tb = n(224506);
function tP(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i, discount: s } = e,
        a = n ? K.intl.string(K.t.wu4gyV) : K.intl.string(K.t.eFNRzU),
        l = n || !i;
    return (0, r.jsxs)("div", {
        className: tb.eg,
        children: [
            (0, r.jsx)("div", {
                className: tb.zR,
                children: (0, r.jsx)(F.E, { variant: "text-xs/normal", className: l ? tb.r9 : void 0, children: a }),
            }),
            (0, r.jsx)(tA.x, {
                priceAmount: t.amount,
                priceCurrency: t.currency,
                discount: s,
                className: l ? tb.r9 : void 0,
            }),
        ],
    });
}
function tS(e) {
    let {
        prices: t,
        hasShopDiscount: n,
        discountSource: i,
        discount: s,
        product: a,
        hasSufficientOrbs: l,
        onTrackClick: c,
        isProductDisabled: o,
    } = e;
    return 0 === t.length
        ? null
        : t[0].currency === tL.Yr.DISCORD_ORB
          ? (0, r.jsx)(tP, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: l, discount: s })
          : (0, r.jsxs)("div", {
                className: tb.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: tb.pw,
                        children: [
                            (0, r.jsx)(tI, {
                                product: a,
                                discount: s,
                                hasShopDiscount: n,
                                discountSource: i,
                                hideStrikethroughPrice: !n,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            n ? null : (0, r.jsx)(ty, { product: a, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tL.Yr.DISCORD_ORB &&
                        (0, r.jsx)(tA.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !l ? tb.r9 : void 0,
                        }),
                ],
            });
}
var tD = n(347722),
    tB = n(57020),
    tU = n(61750),
    tM = n(727205);
function tG(e) {
    let {
            user: t,
            productRecord: n,
            selectedProduct: i,
            category: a,
            shouldCheckoutWithOrbs: l,
            tab: c,
            giftRecipient: o,
            giftingOrigin: u,
            analyticsLocations: m,
            returnRef: p,
            onClose: x,
            onTrackClick: g,
        } = e,
        { cardId: E, sessionId: h, tilePosition: v } = (0, j.uM)() ?? {},
        N = (0, tt.L)(tC.PremiumTypes.TIER_2),
        f = (0, T.xM)(t),
        R = (0, eX.Do)("CollectiblesShopProductDetailsModal") && i.type === S.R.PROFILE_FRAME,
        I = eC.Ay.canUseShopDiscounts(t) || R,
        C = (0, eY.VZ)(i),
        k = (0, eY.Nc)(i),
        O = (0, ts.h)(n),
        { isPurchased: L, isPartiallyOwnedBundle: b } = (0, ts.h)(i),
        { isDisabled: P } = (0, ec.I)(i.skuId),
        D = (0, T.Zu)({ product: i, isPartiallyOwnedBundle: b, isPurchased: L }),
        B = (0, d.bG)([tr.A], () => tr.A.isClaiming === i?.skuId),
        U = (0, e8.Ay)(),
        M = (0, e7.M)(U),
        H = (0, T.G0)(i),
        w = (0, T.yt)(i, y.lid.DEFAULT),
        V = w?.amount === 0,
        W = (0, tD.X)(i),
        X = k ? th.Hi.FIAT : c === z.G2.ORBS && l ? th.Hi.ORBS : void 0,
        { checkoutEligiblePrices: Y, hasSufficientOrbs: $ } = (0, tB.F)({
            product: i,
            hasShopDiscount: I,
            prioritizedCurrency: X,
        }),
        q = s.useMemo(() => (0, T.fT)(i, I, Y[0]?.currency), [i, I, Y]),
        Z = (0, ta.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        J = s.useMemo(() => Y.some((e) => e.currency === tL.Yr.DISCORD_ORB), [Y]);
    (0, tn.W)({ disableFetch: !J });
    let Q = s.useCallback(() => {
        g(z.sH.BUY_WITH_FIAT),
            (0, e5.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: h,
                onClose: (e) => (e ? x() : (0, tL.tE)()),
            });
    }, [m, x, i.skuId, g, h]);
    function ee(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = (0, r.jsx)(te.A, {
                subscriptionTier: tC.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    g(z.sH.UNLOCK_WITH_NITRO), (0, tu.M)();
                },
                onSubscribeModalClose: () => {
                    (0, tu.t)({
                        product: n,
                        category: a,
                        shouldCheckoutWithOrbs: l,
                        returnRef: p,
                        analyticsLocations: m,
                        tab: c,
                        giftRecipient: o,
                        giftingOrigin: u,
                        cardId: E,
                        sessionId: h,
                        tilePosition: v,
                    });
                },
            });
        return t ? (0, r.jsx)(tE, { analyticsLocations: m, children: i }) : i;
    }
    return (0, r.jsxs)("div", {
        className: tM.iw,
        children: [
            O.isPurchased || O.isPartiallyOwnedBundle
                ? (0, r.jsx)(to, { className: tM.On, isPartiallyPurchased: b })
                : H
                  ? (0, r.jsxs)("div", {
                        className: tM.pq,
                        children: [
                            (0, r.jsx)(F.E, { variant: "text-md/semibold", children: K.intl.string(K.t.rt69oo) }),
                            !L &&
                                (0, r.jsx)(F.E, {
                                    className: G()(tM.ed, !M && tM.un),
                                    variant: "text-xxs/normal",
                                    children: K.intl.string(K.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, r.jsx)(tS, {
                        prices: Y,
                        product: i,
                        hasShopDiscount: I,
                        discountSource: f,
                        discount: q,
                        hasSufficientOrbs: $,
                        isProductDisabled: P,
                        onTrackClick: g,
                    }),
            (0, r.jsx)(e4.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !H || N || V
                        ? D
                            ? L
                                ? W
                                    ? (0, r.jsxs)(e9.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(tx, { product: i, onSuccess: x, onTrackClick: g }),
                                              (0, r.jsx)(td.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: x,
                                                  giftRecipient: o,
                                                  giftingOrigin: u,
                                                  onTrackClick: g,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(tx, { product: i, onSuccess: x, onTrackClick: g })
                                : Z
                                  ? ee(K.intl.string(K.t["9wfL34"]), !0)
                                  : H
                                    ? (0, r.jsx)(e6.$, {
                                          loading: B,
                                          loadingStartedLabel: K.intl.string(K.t["TYw+9s"]),
                                          loadingFinishedLabel: K.intl.string(K.t.Pg1UP5),
                                          onClick: async () => {
                                              g(z.sH.ADD_TO_COLLECTION),
                                                  await (0, _.iJ)(i.skuId),
                                                  x(),
                                                  (0, tU.A)({
                                                      product: i,
                                                      analyticsLocations: m,
                                                      purchaseType: z.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: K.intl.string(K.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, r.jsx)(r.Fragment, {
                                          children: Y.map((e, t) => {
                                              let n,
                                                  a,
                                                  l,
                                                  c,
                                                  d,
                                                  p = 0 === t,
                                                  E =
                                                      e.currency === tL.Yr.DISCORD_ORB
                                                          ? ((n = P
                                                                ? K.intl.string(K.t.cTdr3x)
                                                                : K.intl.string(K.t.zqh7ZM)),
                                                            (a = !$ || P),
                                                            (l = K.intl.formatToPlainString(K.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (c = a ? `${l}, ${n}` : l),
                                                            (0, r.jsx)(eZ.m, {
                                                                position: "top",
                                                                text: n,
                                                                shouldShow: a,
                                                                "aria-label": !1,
                                                                children: (0, r.jsx)(e6.$, {
                                                                    variant: p ? "primary" : "secondary",
                                                                    onClick: function () {
                                                                        g(z.sH.BUY_WITH_ORBS),
                                                                            (0, A.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, _.gB)(),
                                                                                        x(),
                                                                                        (0, tU.A)({
                                                                                            product: i,
                                                                                            analyticsLocations: m,
                                                                                            itemConsumed:
                                                                                                e?.entitlements?.[0]
                                                                                                    ?.consumed,
                                                                                            purchaseType: z.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: m,
                                                                                discoverySessionId: h,
                                                                            });
                                                                    },
                                                                    disabled: a,
                                                                    "aria-label": c,
                                                                    text: K.intl.format(K.t.JC15qj, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, r.jsx)(e3.C, {
                                                                                className: tM.fN,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            }))
                                                          : ((d =
                                                                C ??
                                                                K.intl.formatToPlainString(K.t["cNSL/j"], {
                                                                    price: (0, ti.$g)(e.amount, e.currency),
                                                                })),
                                                            (0, r.jsxs)(e9.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(e6.$, {
                                                                        variant: p ? "primary" : "secondary",
                                                                        onClick: Q,
                                                                        text: d,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    W &&
                                                                        (0, r.jsx)(td.A, {
                                                                            primary: p,
                                                                            product: i,
                                                                            onSuccess: x,
                                                                            giftRecipient: o,
                                                                            giftingOrigin: u,
                                                                            onTrackClick: g,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, r.jsx)(s.Fragment, { children: E }, e.currency);
                                          }),
                                      })
                            : W
                              ? (0, r.jsx)(td.A, {
                                    primary: !0,
                                    product: i,
                                    onSuccess: x,
                                    fullWidth: !0,
                                    giftRecipient: o,
                                    giftingOrigin: u,
                                    onTrackClick: g,
                                })
                              : null
                        : ee(K.intl.string(K.t.sEAnVH)),
            }),
        ],
    });
}
var tH = n(607487);
function tF(e) {
    let {
            productRecord: t,
            selectedProduct: n,
            previewingProduct: i,
            user: s,
            selectedBundleSlide: a,
            pendingProfile: l,
        } = e,
        c = eW(t);
    return (0, r.jsxs)("div", {
        className: G()(tH.wd, { [tH.E7]: null != c.LeftPreview }),
        children: [
            (0, r.jsx)("div", {
                className: tH.dL,
                children: (0, r.jsx)(e2, { productRecord: t, selectedProduct: n, selectedBundleSlide: a }),
            }),
            null != c.LeftPreview &&
                (0, r.jsx)("div", {
                    className: tH._E,
                    children: (0, r.jsx)(c.LeftPreview, {
                        user: s,
                        selectedProduct: n,
                        previewingProduct: i,
                        productRecord: t,
                        selectedBundleSlide: a,
                        pendingProfile: l,
                    }),
                }),
            (0, r.jsx)("div", { className: tH.F_, children: (0, r.jsx)(c.Info, { ...e }) }),
            (0, r.jsx)(tG, { ...e }),
        ],
    });
}
var tw = n(685761),
    tV = n(408278),
    tz = n(972213),
    tK = n(427209),
    tW = n(192308),
    tX = n(294454);
function tY(e) {
    let { skuId: t, product: i, productName: a, tab: l, onTrackClick: c } = e,
        o = s.useCallback(() => {
            I.default.track(y.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                c?.(z.sH.SHARE_LINK),
                ((e) => {
                    let { skuId: t, product: i, productName: s, tab: a, source: l } = e;
                    (0, tW.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("69977"),
                                n.e("14131"),
                                n.e("73883"),
                                n.e("73216"),
                                n.e("69604"),
                                n.e("44780"),
                                n.e("65617"),
                                n.e("36946"),
                                n.e("92639"),
                                n.e("90480"),
                                n.e("44385"),
                                n.e("40963"),
                                n.e("56169"),
                                n.e("23601"),
                                n.e("2617"),
                            ]).then(n.bind(n, 32672));
                            return (n) =>
                                (0, r.jsx)(e, { ...n, skuId: t, product: i, productName: s, tab: a, source: l });
                        },
                        { stackingBehavior: "stack", modalKey: tX.aU },
                    );
                })({ skuId: t, product: i, productName: a, tab: l, source: "collectibles-shop-pdp" });
        }, [t, i, a, l, c]);
    return (0, r.jsx)(eZ.m, {
        text: K.intl.string(K.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, r.jsx)(tV.K, {
            "aria-label": K.intl.string(K.t.Ej3B3Y),
            onClick: o,
            icon: tK.A,
            variant: "overlay-secondary",
            size: "sm",
        }),
    });
}
var t$ = n(139146),
    tq = n(60465),
    tZ = n(976860),
    tJ = n(975732),
    tQ = n(50920),
    t0 = n(23161),
    t1 = n(668953),
    t2 = n(881636),
    t7 = n(962437);
function t6(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: t7.Y,
                children: (0, r.jsx)(tV.K, {
                    "aria-label": K.intl.string(K.t["3NdvMK"]),
                    onClick: t,
                    icon: t1.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, r.jsx)("div", {
                className: t7.K,
                children: (0, r.jsx)(tV.K, {
                    "aria-label": K.intl.string(K.t.RYIeOX),
                    onClick: n,
                    icon: t2.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var t3 = n(343601);
function t9(e) {
    let {
            user: t,
            pendingProfile: n,
            productRecord: i,
            previewingProduct: a,
            selectedProduct: l,
            selectedVariantIndex: c,
            selectedBundleSlide: o,
            setSelectedBundleSlide: d,
            isClosing: u,
            isOrbCheckoutModalOpen: m,
            pdpBackground: p,
            category: x,
            tab: g,
            onClose: E,
            onTrackClick: h,
        } = e,
        v = eW(i),
        N = (0, T.aw)(l),
        f = N ? l.items.length : 0,
        A = (function () {
            let e = (0, tQ.a)("CollectiblesPdpNavigateToCollection"),
                { sessionId: t } = (0, j.uM)() ?? {},
                n = (0, t0.v)((e) => e.reset);
            return s.useCallback(
                (i, r) => {
                    if (
                        (I.default.track(y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: t,
                            sku_id: i.skuId,
                            cta_name: r,
                        }),
                        (0, tJ.closeUserProfileModal)(),
                        (0, tq.p)(),
                        e && !0 !== i.isOrbsExclusive)
                    )
                        return void (0, tZ.pX)(y.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(i.skuId));
                    n();
                    let s = !0 === i.isOrbsExclusive ? z.G2.ORBS : z.G2.CATALOG;
                    (0, tZ.pX)(`${y.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)}&${z.P1}=${i.skuId}`);
                },
                [e, t, n],
            );
        })(),
        R = s.useCallback(() => {
            h(z.sH.GO_TO_COLLECTION), E(), A(x, "go_to_collection_button");
        }, [x, E, h, A]),
        _ = s.useCallback(() => {
            f <= 1 || d((e) => (e - 1 + f) % f);
        }, [f, d]),
        C = s.useCallback(() => {
            f <= 1 || d((e) => (e + 1) % f);
        }, [f, d]),
        k = s.useCallback(
            (e) => {
                if (f <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), _())
                        : "ArrowRight" === e.key && (e.preventDefault(), C()));
            },
            [f, _, C],
        ),
        O = s.useCallback(() => {
            h(z.sH.CLOSE_DETAIL), E();
        }, [h, E]),
        L = s.useRef(null),
        P = s.useRef(!0);
    return (
        s.useLayoutEffect(() => {
            if (P.current) {
                P.current = !1;
                return;
            }
            let e = L.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [o]),
        (0, r.jsxs)("div", {
            className: G()(t3.i1, (0, z.EZ)(l.skuId) ? t3.bF : l.type === S.R.AVATAR_DECORATION ? t3.Jq : t3.eF),
            style: null != p ? { backgroundImage: `url(${p})` } : void 0,
            onKeyDown: k,
            children: [
                (0, r.jsx)("div", {
                    className: t3.GV,
                    children: (0, r.jsx)(eZ.m, {
                        text: K.intl.string(K.t["Hr/q/6"]),
                        children: (0, r.jsx)(e6.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: tw.f,
                            text: x.name,
                            onClick: R,
                        }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: t3.KR,
                    ref: L,
                    children: (0, r.jsx)(v.RightPreview, {
                        user: t,
                        pendingProfile: n,
                        productRecord: i,
                        selectedProduct: l,
                        previewingProduct: a,
                        selectedBundleSlide: o,
                        isClosing: u,
                        isOrbCheckoutModalOpen: m,
                    }),
                }),
                N && f > 1 && (0, r.jsx)(t6, { goPrev: _, goNext: C }),
                (0, r.jsxs)("div", {
                    className: t3.VG,
                    children: [
                        (0, r.jsx)(t$.R, {
                            product: i,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: h,
                        }),
                        (0, r.jsx)(tY, {
                            skuId: l.skuId,
                            product: l,
                            productName: (0, b.VG)(l),
                            tab: g,
                            onTrackClick: h,
                        }),
                        (0, r.jsx)(tV.K, {
                            "aria-label": K.intl.string(K.t.cpT0Cq),
                            onClick: O,
                            icon: tz.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var t4 = n(118342);
let t8 = (0, u.FT)(u._3.SIZE_152),
    t5 = function (e) {
        let {
                transitionState: t,
                onClose: n,
                product: i,
                category: a,
                returnRef: u,
                analyticsSource: S,
                analyticsLocations: M,
                shouldCheckoutWithOrbs: G,
                tab: H,
                giftRecipient: F,
                giftingOrigin: w,
            } = e,
            V = (0, d.bG)([R.default], () => R.default.getCurrentUser()),
            z = (0, d.cf)([N.A], () => N.A.getPendingChanges()),
            K = (0, U.f)(i),
            { previewingVariantIndex: W } = K,
            X = (0, C.Q)(i),
            Y = D(i, W),
            $ = (0, L.rb)(i, X);
        l()(null != $, "Selected product should not be null");
        let { analyticsLocations: q } = (0, g.Ay)([...M, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, P.Yr)($.skuId);
        let Z = (0, B.U1)(a),
            [J, Q] = s.useState(0);
        s.useEffect(() => {
            null != V && (0, f.A)(V.id, V.getAvatarURL(void 0, 80));
        }, [V]);
        let ee = s.useMemo(() => (0, T.V6)(i.type, i.skuId), [i.type, i.skuId]);
        s.useEffect(() => {
            I.default.track(y.HAw.OPEN_MODAL, {
                type: y.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: S,
                location_stack: q,
                sku_id: $.skuId,
                product_type: ee,
            }),
                (0, _.RD)($.skuId);
        }, [S, q, $.skuId, ee]);
        let { cardId: et, sessionId: en, tilePosition: ei } = (0, j.uM)() ?? {},
            er = s.useMemo(() => (0, L.v8)(i), [i]),
            es = (function (e) {
                let { skuId: t, productSkuIds: n, analyticsLocations: i } = e,
                    { cardId: r, sessionId: a } = (0, j.uM)() ?? {},
                    l = (0, O.o)(),
                    c = (0, T.xM)(l);
                return s.useCallback(
                    (e, s) => {
                        I.default.track(y.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: s ?? t,
                            cta: e,
                            shop_session_id: a,
                            card_id: r,
                            product_sku_ids: n,
                            location_stack: i,
                            discount_source: (0, T.b_)(c),
                        });
                    },
                    [t, i, r, n, a, c],
                );
            })({ skuId: $.skuId, productSkuIds: er, analyticsLocations: q });
        (0, E.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: $.skuId,
                card_id: et,
                shop_session_id: en,
                position_in_section: ei,
                product_sku_ids: er,
                location_stack: q,
            },
        });
        let ea = (0, A.o6)(),
            el = t === m.ip.EXITING,
            ec = (0, k.c)("product_details_modal");
        if (null == V || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !ec)) return null;
        let eo = {
                pendingChanges: z,
                pendingAvatarSrc:
                    void 0 !== z.pendingAvatar
                        ? (0, h.sv)((0, v.V7)({ userId: V.id, image: z.pendingAvatar, size: t8 }), null, V, {
                              size: t8,
                          })
                        : void 0,
            },
            ed = (0, b.VG)(i),
            eu = {
                user: V,
                pendingProfile: eo,
                productRecord: i,
                productName: ed,
                selectedProduct: $,
                previewingProduct: Y ?? null,
                category: a,
                selectedVariantIndex: X,
                previewingVariantIndexProps: K,
                selectedBundleSlide: J,
                setSelectedBundleSlide: Q,
                tab: H,
                shouldCheckoutWithOrbs: G,
                giftRecipient: F?.id !== V.id ? F : void 0,
                giftingOrigin: F?.id !== V.id ? w : void 0,
                analyticsLocations: q,
                returnRef: u,
                onClose: n,
                onTrackClick: es,
            };
        return (0, r.jsx)(g.f5, {
            value: q,
            children: (0, r.jsx)(p.d, {
                returnRef: u,
                transitionState: t,
                onClose: n,
                size: "xl",
                paddingSize: "sm",
                "aria-label": ed,
                children: (0, r.jsx)("div", {
                    className: t4.C,
                    children: (0, r.jsxs)("div", {
                        className: t4.j,
                        children: [
                            (0, r.jsx)(tF, { ...eu }),
                            (0, r.jsx)(t9, { ...eu, isClosing: el, isOrbCheckoutModalOpen: ea, pdpBackground: Z }),
                        ],
                    }),
                }),
            }),
        });
    };
