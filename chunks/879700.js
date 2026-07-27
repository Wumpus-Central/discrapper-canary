n.d(t, { default: () => nl });
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
    E = n(688810),
    g = n(139286),
    v = n(252732),
    h = n(101058),
    N = n(836602),
    f = n(903209),
    A = n(652165),
    R = n(287809),
    I = n(174459),
    _ = n(34332),
    j = n(440938),
    C = n(298072),
    k = n(993408),
    T = n(503089),
    O = n(331884),
    L = n(652215),
    y = n(623373),
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
function $(e) {
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
let X = { [S.R.AVATAR_DECORATION]: !0, [S.R.PROFILE_FRAME]: !0 };
function Y(e) {
    let { item: t, index: n, isSelected: i, setSelected: a, label: l, trackedSkuId: c, onTrackClick: o } = e,
        d = s.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        u = s.useCallback(() => {
            o(z.sH.BUNDLE_VIEW_PRODUCT, c), a(n);
        }, [o, c, a, n]),
        m = !0 === X[t.type];
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
              isBundle: (0, k.aw)(l),
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
                  helpdeskArticle: ea.A.getArticleURL(L.MVz.FRACTIONAL_PREMIUM_ABOUT),
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
        x = (0, y.B1)(t),
        E = x ? t.variants[l ?? p] : null,
        g = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            null != g.current && ((g.current.tabIndex = -1), g.current.focus());
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: ed.sn,
                    children: [
                        (0, r.jsx)(w.D, { ref: g, variant: "heading-xl/bold", className: ed.R_, children: n }),
                        (0, r.jsx)(F.E, { variant: "text-sm/normal", children: u }),
                        (0, r.jsx)(eu, { skuId: d.skuId }),
                        null !== m && (0, r.jsx)(F.E, { variant: "text-xs/normal", className: ed.H$, children: m }),
                    ],
                }),
                x &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != E &&
                                (0, r.jsx)(F.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: ed.a9,
                                    lineClamp: 1,
                                    children: K.intl.format(K.t.EcaRWt, {
                                        value: (0, r.jsx)("span", { className: ed.I8, children: E.variantLabel }),
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
    eE = n(346055),
    eg = n(993077),
    ev = n(245604),
    eh = n(460905),
    eN = n(262295),
    ef = n(685073),
    eA = n(320095),
    eR = n(963852),
    eI = n(763754),
    e_ = n(20851),
    ej = n(986687),
    eC = n(428262),
    ek = n(780898),
    eT = n(907609);
function eO(e) {
    let { user: t, innerClassName: n } = e;
    return (0, r.jsx)("div", {
        className: eT.mV,
        children: (0, r.jsx)(eN.A, {
            avatar: (0, r.jsx)(ex.eu, {
                src: t.avatarSrc,
                size: u._3.SIZE_32,
                "aria-label": t.name,
                status: L.clD.ONLINE,
            }),
            name: t.name,
            innerClassName: G()(eT.$L, n),
        }),
    });
}
function eL(e) {
    let { user: t, nameplate: n, avatarDecoration: i, pendingDisplayNameStyles: s, pendingGlobalName: a } = e,
        l = (0, ek.Ov)();
    return (0, r.jsx)("div", {
        className: eT.nJ,
        role: "img",
        "aria-label": K.intl.formatToPlainString(K.t["95pCSf"], { a11y_text: n.label }),
        children: (0, r.jsxs)(eE.M, {
            children: [
                (0, r.jsx)(eO, { user: l.mallow, innerClassName: eT.ab }),
                (0, r.jsxs)(F.E, {
                    variant: "text-sm/semibold",
                    className: eT.OS,
                    children: [K.intl.string(K.t["yzW/fZ"]), " - 3"],
                }),
                (0, r.jsx)(eO, { user: l.phibi, innerClassName: eT.e9 }),
                (0, r.jsx)("div", {
                    className: eT.mV,
                    children: (0, r.jsx)(Z.A, {
                        className: eT.M4,
                        innerClassName: eT.e9,
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
                (0, r.jsx)(eO, { user: l.locke, innerClassName: eT.e9 }),
                (0, r.jsxs)(F.E, {
                    variant: "text-sm/semibold",
                    className: eT.OS,
                    children: [K.intl.string(K.t["NG43/6"]), " - 12"],
                }),
                (0, r.jsx)(eO, { user: l.boom, innerClassName: eT.bD }),
                (0, r.jsx)(eO, { user: l.cherry, innerClassName: eT.bD }),
            ],
        }),
    });
}
function ey(e) {
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
                state: L.cmJ.SENT,
                id: "0",
            });
        })({ author: t }),
        o = (0, ef.gS)(s),
        d = (0, eI.p_)(c),
        u = {
            ...d,
            nick:
                void 0 !== l
                    ? (0, v.eh)({ pendingNickname: void 0, pendingGlobalName: l, user: t, guildMember: null })
                    : d.nick,
            primaryGuild: void 0 !== s ? o : d.primaryGuild,
            displayNameStyles: void 0 !== a ? a : d.displayNameStyles,
        };
    return (0, r.jsx)("div", {
        role: "img",
        "aria-label": K.intl.string(K.t["TN+ZvB"]),
        children: (0, r.jsx)(eE.M, {
            children: (0, r.jsxs)(eg.Z, {
                className: eT.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(
                        e_.A,
                        {
                            className: eT.G5,
                            author: u,
                            message: c,
                            avatarDecorationOverride: n ?? null,
                            avatarOverride: i,
                        },
                        c.id,
                    ),
                    (0, r.jsxs)("div", {
                        className: eT.lG,
                        children: [
                            (0, r.jsx)(ev.U, { size: "md", color: "currentColor", className: eT.hq }),
                            (0, r.jsx)(eh.n, { size: "md", color: "currentColor", className: eT.hq }),
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
        { firstAvatarDecoration: x, firstProfileEffect: E, firstNameplate: g, firstProfileFrame: v } = (0, q.f5)(t),
        h = d?.type === S.R.AVATAR_DECORATION ? d : x,
        N = d?.type === S.R.PROFILE_EFFECT ? d : E,
        f = d?.type === S.R.PROFILE_FRAME ? d : v,
        A = d?.type === S.R.NAMEPLATE ? d : g;
    if (u === S.R.NAMEPLATE && null != A)
        return (0, r.jsx)("div", {
            className: eT.Zj,
            children: (0, r.jsx)(eL, {
                user: n,
                nameplate: A,
                avatarDecoration: h ?? c.pendingAvatarDecoration,
                pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                pendingGlobalName: c.pendingGlobalName,
            }),
        });
    return (0, r.jsx)("div", {
        className: m ? eT.RA : eT.hZ,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ej.A, {
                    ...c,
                    pendingAvatar: o,
                    user: n,
                    canUsePremiumCustomization: a,
                    pendingAvatarDecoration: h ?? c.pendingAvatarDecoration,
                    pendingProfileEffect: N ?? c.pendingProfileEffect,
                    profileEffectRestartKey: s,
                    pendingProfileFrame: f ?? c.pendingProfileFrame,
                    disabledInputs: !0,
                    hideMessageInput: !p,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? eT.oB : void 0,
                }),
                m &&
                    (0, r.jsx)(ey, {
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
        a = (0, h.V7)({ userId: t.id, image: i });
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
                m = null != u ? (0, k.Dm)(u) : null,
                p = K.intl.string(K.t.cTbdgu),
                x = s.useRef(null),
                E = s.useCallback(
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
            let g = s.useRef(null);
            return (
                s.useLayoutEffect(() => {
                    null != g.current && ((g.current.tabIndex = -1), g.current.focus());
                }, []),
                (0, r.jsxs)("div", {
                    className: W.Qf,
                    children: [
                        (0, r.jsx)(w.D, { ref: g, variant: "heading-xl/bold", className: W.R_, title: n, children: n }),
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
                                        onKeyDown: E,
                                        children: c.map((e, t) => {
                                            let n = o?.[t]?.name ?? e.skuId,
                                                s = o?.[t]?.skuId ?? e.skuId;
                                            return (0, r.jsx)(
                                                Y,
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
                                null != d && (0, r.jsx)($, { name: d, typeLabel: m }),
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
            : (0, k.aw)(t)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var e$ = n(13875),
    eX = n(629042),
    eY = n(110629),
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
        a = (0, e$.Do)("CollectiblesShopProductDetailsModal") && i.type === S.R.PROFILE_FRAME,
        l = (0, eX.SV)(i),
        c = n.type === S.R.BUNDLE ? (n.items[s] ?? n.items[0]) : void 0,
        o =
            null != c &&
            !n.hideBadge &&
            null == n.badgeOverride &&
            (0, y.JQ)({ skuId: c.skuId, type: c.type, items: [c] });
    return (
        (t = a
            ? (0, r.jsx)(eY.A, { location: "CollectiblesShopProductDetailsModal" })
            : o
              ? (0, r.jsx)(eq.s, {})
              : (0, r.jsx)(eq.A, { skuId: n.skuId })),
        (0, r.jsxs)("div", { className: e1.N, children: [t, null != l && (0, r.jsx)(e0, { promotion: l })] })
    );
}
var e7 = n(462887),
    e3 = n(821609),
    e6 = n(318254),
    e9 = n(825484),
    e4 = n(331322),
    e5 = n(736653),
    e8 = n(44120),
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
        ? (0, r.jsx)(e3.$, {
              variant: "primary",
              onClick: () => {
                  i?.(z.sH.USE_NOW), s();
              },
              loading: a,
              text: K.intl.string(K.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, r.jsx)(e3.$, {
              variant: "primary",
              onClick: () => {
                  i?.(z.sH.EDIT_PROFILE), c(), n?.();
              },
              text: K.intl.string(K.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tE = n(770948);
let tg = function (e) {
    let { analyticsLocations: t, children: n } = e;
    return (0, r.jsx)(E.f5, {
        value: [...t, x.A.PROFILE_FRAMES_EA_MARKETING],
        children: (0, r.jsxs)("div", {
            className: tE.k,
            children: [
                (0, r.jsx)(F.E, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: K.intl.format(K.t["3cglst"], {
                        articleURL: ea.A.getArticleURL(L.MVz.SHOP_FRAMES_EARLY_ACCESS),
                    }),
                }),
                n,
            ],
        }),
    });
};
var tv = n(561769),
    th = n(140735),
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
            (0, r.jsx)(th.A, { children: K.intl.format(K.t["2CEGln"], { price: a }) }),
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
        d = (0, k.WD)(t, { hasShopDiscount: n, discount: s });
    if (null == d) return null;
    let { defaultPrice: u, showDefaultPriceOnly: m } = d;
    if (m)
        return (0, r.jsx)("div", {
            className: G()(tR.kG, a),
            children: (0, r.jsx)(tA.x, { priceAmount: u.amount, priceCurrency: u.currency }),
        });
    let { showDiscountPrice: p, originalPrice: x, finalPrice: E } = d;
    return (0, r.jsxs)("div", {
        className: G()(tR.kG, a),
        children: [
            l ? null : (0, r.jsx)(tf, { price: x, className: tR.q9 }),
            (0, r.jsx)(tA.x, {
                priceAmount: E.amount,
                priceCurrency: E.currency,
                discount: s,
                className: tR.q9,
                discountIconConfig: p && null != c ? { displayMode: c, source: i ?? k.D0.NITRO, size: o } : void 0,
            }),
        ],
    });
}
var t_ = n(403581),
    tj = n(532794),
    tC = n(202541),
    tk = n(868534);
function tT(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, E.Ay)(),
        a = s.useRef(null);
    return (0, r.jsx)(H.D, {
        className: tk.F,
        innerRef: a,
        onClick: () => {
            n?.(z.sH.SUBSCRIBE_NOW), (0, tj.A)({ subscriptionTier: tC.pe.TIER_2, analyticsLocations: i, returnRef: a });
        },
        children: t,
    });
}
var tO = n(25537);
function tL(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, k.yt)(t, L.lid.PREMIUM_TIER_2);
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
                    subscribeNowHook: (e) => (0, r.jsx)(tT, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var ty = n(818348),
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
        : t[0].currency === ty.Yr.DISCORD_ORB
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
                            n ? null : (0, r.jsx)(tL, { product: a, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === ty.Yr.DISCORD_ORB &&
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
            onTrackClick: E,
        } = e,
        { cardId: g, sessionId: v, tilePosition: h } = (0, j.uM)() ?? {},
        N = (0, tt.L)(tC.PremiumTypes.TIER_2),
        f = (0, k.xM)(t),
        R = (0, e$.Do)("CollectiblesShopProductDetailsModal") && i.type === S.R.PROFILE_FRAME,
        I = eC.Ay.canUseShopDiscounts(t) || R,
        C = (0, eX.VZ)(i),
        T = (0, eX.Nc)(i),
        O = (0, ts.h)(n),
        { isPurchased: y, isPartiallyOwnedBundle: b } = (0, ts.h)(i),
        { isDisabled: P } = (0, ec.I)(i.skuId),
        D = (0, k.Zu)({ product: i, isPartiallyOwnedBundle: b, isPurchased: y }),
        B = (0, d.bG)([tr.A], () => tr.A.isClaiming === i?.skuId),
        U = (0, e5.Ay)(),
        M = (0, e7.M)(U),
        H = (0, k.G0)(i),
        w = (0, k.yt)(i, L.lid.DEFAULT),
        V = w?.amount === 0,
        W = (0, tD.X)(i),
        $ = T ? tv.Hi.FIAT : c === z.G2.ORBS && l ? tv.Hi.ORBS : void 0,
        { checkoutEligiblePrices: X, hasSufficientOrbs: Y } = (0, tB.F)({
            product: i,
            hasShopDiscount: I,
            prioritizedCurrency: $,
        }),
        q = s.useMemo(() => (0, k.fT)(i, I, X[0]?.currency), [i, I, X]),
        Z = (0, ta.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        J = s.useMemo(() => X.some((e) => e.currency === ty.Yr.DISCORD_ORB), [X]);
    (0, tn.W)({ disableFetch: !J });
    let Q = s.useCallback(() => {
        E(z.sH.BUY_WITH_FIAT),
            (0, e8.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: v,
                onClose: (e) => (e ? x() : (0, ty.tE)()),
            });
    }, [m, x, i.skuId, E, v]);
    function ee(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = (0, r.jsx)(te.A, {
                subscriptionTier: tC.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    E(z.sH.UNLOCK_WITH_NITRO), (0, tu.M)();
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
                        cardId: g,
                        sessionId: v,
                        tilePosition: h,
                    });
                },
            });
        return t ? (0, r.jsx)(tg, { analyticsLocations: m, children: i }) : i;
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
                            !y &&
                                (0, r.jsx)(F.E, {
                                    className: G()(tM.ed, !M && tM.un),
                                    variant: "text-xxs/normal",
                                    children: K.intl.string(K.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, r.jsx)(tS, {
                        prices: X,
                        product: i,
                        hasShopDiscount: I,
                        discountSource: f,
                        discount: q,
                        hasSufficientOrbs: Y,
                        isProductDisabled: P,
                        onTrackClick: E,
                    }),
            (0, r.jsx)(e4.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !H || N || V
                        ? D
                            ? y
                                ? W
                                    ? (0, r.jsxs)(e9.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(tx, { product: i, onSuccess: x, onTrackClick: E }),
                                              (0, r.jsx)(td.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: x,
                                                  giftRecipient: o,
                                                  giftingOrigin: u,
                                                  onTrackClick: E,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(tx, { product: i, onSuccess: x, onTrackClick: E })
                                : Z
                                  ? ee(K.intl.string(K.t["9wfL34"]), !0)
                                  : H
                                    ? (0, r.jsx)(e3.$, {
                                          loading: B,
                                          loadingStartedLabel: K.intl.string(K.t["TYw+9s"]),
                                          loadingFinishedLabel: K.intl.string(K.t.Pg1UP5),
                                          onClick: async () => {
                                              E(z.sH.ADD_TO_COLLECTION),
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
                                          children: X.map((e, t) => {
                                              let n,
                                                  a,
                                                  l,
                                                  c,
                                                  d,
                                                  p = 0 === t,
                                                  g =
                                                      e.currency === ty.Yr.DISCORD_ORB
                                                          ? ((n = P
                                                                ? K.intl.string(K.t.cTdr3x)
                                                                : K.intl.string(K.t.zqh7ZM)),
                                                            (a = !Y || P),
                                                            (l = K.intl.formatToPlainString(K.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (c = a ? `${l}, ${n}` : l),
                                                            (0, r.jsx)(eZ.m, {
                                                                position: "top",
                                                                text: n,
                                                                shouldShow: a,
                                                                "aria-label": !1,
                                                                children: (0, r.jsx)(e3.$, {
                                                                    variant: p ? "primary" : "secondary",
                                                                    onClick: function () {
                                                                        E(z.sH.BUY_WITH_ORBS),
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
                                                                                discoverySessionId: v,
                                                                            });
                                                                    },
                                                                    disabled: a,
                                                                    "aria-label": c,
                                                                    text: K.intl.format(K.t.JC15qj, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, r.jsx)(e6.C, {
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
                                                                    (0, r.jsx)(e3.$, {
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
                                                                            onTrackClick: E,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, r.jsx)(s.Fragment, { children: g }, e.currency);
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
                                    onTrackClick: E,
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
    tK = n(646101),
    tW = n(691540),
    t$ = n(857250),
    tX = n(97483),
    tY = n(173936),
    tq = n(957565),
    tZ = n(573749);
function tJ(e) {
    let { skuId: t, tab: n, onTrackClick: i } = e,
        a = s.useCallback(() => {
            I.default.track(L.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                i?.(z.sH.COPY_LINK),
                (0, tq.C)((0, tZ.o)(t, n), () => (0, tW.P0)((0, t$.o)(K.intl.string(K.t["L/PwZf"]), tX.Ck.SUCCESS)));
        }, [t, n, i]);
    return (0, r.jsx)(tV.K, {
        "aria-label": K.intl.string(K.t.WqhZss),
        onClick: a,
        icon: tY.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var tQ = n(427209),
    t0 = n(192308),
    t1 = n(294454);
function t2(e) {
    let { skuId: t, product: i, productName: a, tab: l, onTrackClick: c } = e,
        o = s.useCallback(() => {
            I.default.track(L.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                c?.(z.sH.SHARE_LINK),
                ((e) => {
                    let { skuId: t, product: i, productName: s, tab: a, source: l } = e;
                    (0, t0.openModalLazy)(
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
                                n.e("3361"),
                            ]).then(n.bind(n, 44632));
                            return (n) =>
                                (0, r.jsx)(e, { ...n, skuId: t, product: i, productName: s, tab: a, source: l });
                        },
                        { stackingBehavior: "stack", modalKey: t1.aU },
                    );
                })({ skuId: t, product: i, productName: a, tab: l, source: "collectibles-shop-pdp" });
        }, [t, i, a, l, c]);
    return (0, r.jsx)(eZ.m, {
        text: K.intl.string(K.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, r.jsx)(tV.K, {
            "aria-label": K.intl.string(K.t.Ej3B3Y),
            onClick: o,
            icon: tQ.A,
            variant: "overlay-secondary",
            size: "sm",
        }),
    });
}
var t7 = n(139146),
    t3 = n(60465),
    t6 = n(976860),
    t9 = n(975732),
    t4 = n(50920),
    t5 = n(23161),
    t8 = n(668953),
    ne = n(881636),
    nt = n(962437);
function nn(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: nt.Y,
                children: (0, r.jsx)(tV.K, {
                    "aria-label": K.intl.string(K.t["3NdvMK"]),
                    onClick: t,
                    icon: t8.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, r.jsx)("div", {
                className: nt.K,
                children: (0, r.jsx)(tV.K, {
                    "aria-label": K.intl.string(K.t.RYIeOX),
                    onClick: n,
                    icon: ne.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var ni = n(343601);
function nr(e) {
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
            tab: E,
            onClose: g,
            onTrackClick: v,
        } = e,
        h = eW(i),
        N = (0, tK.x)("CollectiblesShopProductDetailsModal"),
        f = (0, k.aw)(l),
        A = f ? l.items.length : 0,
        R = (function () {
            let e = (0, t4.a)("CollectiblesPdpNavigateToCollection"),
                { sessionId: t } = (0, j.uM)() ?? {},
                n = (0, t5.v)((e) => e.reset);
            return s.useCallback(
                (i, r) => {
                    if (
                        (I.default.track(L.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: t,
                            sku_id: i.skuId,
                            cta_name: r,
                        }),
                        (0, t9.closeUserProfileModal)(),
                        (0, t3.p)(),
                        e && !0 !== i.isOrbsExclusive)
                    )
                        return void (0, t6.pX)(L.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(i.skuId));
                    n();
                    let s = !0 === i.isOrbsExclusive ? z.G2.ORBS : z.G2.CATALOG;
                    (0, t6.pX)(`${L.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)}&${z.P1}=${i.skuId}`);
                },
                [e, t, n],
            );
        })(),
        _ = s.useCallback(() => {
            v(z.sH.GO_TO_COLLECTION), g(), R(x, "go_to_collection_button");
        }, [x, g, v, R]),
        C = s.useCallback(() => {
            A <= 1 || d((e) => (e - 1 + A) % A);
        }, [A, d]),
        T = s.useCallback(() => {
            A <= 1 || d((e) => (e + 1) % A);
        }, [A, d]),
        O = s.useCallback(
            (e) => {
                if (A <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), C())
                        : "ArrowRight" === e.key && (e.preventDefault(), T()));
            },
            [A, C, T],
        ),
        y = s.useCallback(() => {
            v(z.sH.CLOSE_DETAIL), g();
        }, [v, g]),
        P = s.useRef(null),
        D = s.useRef(!0);
    return (
        s.useLayoutEffect(() => {
            if (D.current) {
                D.current = !1;
                return;
            }
            let e = P.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [o]),
        (0, r.jsxs)("div", {
            className: G()(ni.i1, (0, z.EZ)(l.skuId) ? ni.bF : l.type === S.R.AVATAR_DECORATION ? ni.Jq : ni.eF),
            style: null != p ? { backgroundImage: `url(${p})` } : void 0,
            onKeyDown: O,
            children: [
                (0, r.jsx)("div", {
                    className: ni.GV,
                    children: (0, r.jsx)(eZ.m, {
                        text: K.intl.string(K.t["Hr/q/6"]),
                        children: (0, r.jsx)(e3.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: tw.f,
                            text: x.name,
                            onClick: _,
                        }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ni.KR,
                    ref: P,
                    children: (0, r.jsx)(h.RightPreview, {
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
                f && A > 1 && (0, r.jsx)(nn, { goPrev: C, goNext: T }),
                (0, r.jsxs)("div", {
                    className: ni.VG,
                    children: [
                        (0, r.jsx)(t7.R, {
                            product: i,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: v,
                        }),
                        N
                            ? (0, r.jsx)(t2, {
                                  skuId: l.skuId,
                                  product: l,
                                  productName: (0, b.VG)(l),
                                  tab: E,
                                  onTrackClick: v,
                              })
                            : (0, r.jsx)(tJ, { skuId: l.skuId, tab: E, onTrackClick: v }),
                        (0, r.jsx)(tV.K, {
                            "aria-label": K.intl.string(K.t.cpT0Cq),
                            onClick: y,
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
var ns = n(118342);
let na = (0, u.FT)(u._3.SIZE_152),
    nl = function (e) {
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
            $ = (0, C.Q)(i),
            X = D(i, W),
            Y = (0, y.rb)(i, $);
        l()(null != Y, "Selected product should not be null");
        let { analyticsLocations: q } = (0, E.Ay)([...M, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, P.Yr)(Y.skuId);
        let Z = (0, B.U1)(a),
            [J, Q] = s.useState(0);
        s.useEffect(() => {
            null != V && (0, f.A)(V.id, V.getAvatarURL(void 0, 80));
        }, [V]);
        let ee = s.useMemo(() => (0, k.V6)(i.type, i.skuId), [i.type, i.skuId]);
        s.useEffect(() => {
            I.default.track(L.HAw.OPEN_MODAL, {
                type: L.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: S,
                location_stack: q,
                sku_id: Y.skuId,
                product_type: ee,
            }),
                (0, _.RD)(Y.skuId);
        }, [S, q, Y.skuId, ee]);
        let { cardId: et, sessionId: en, tilePosition: ei } = (0, j.uM)() ?? {},
            er = s.useMemo(() => (0, y.v8)(i), [i]),
            es = (function (e) {
                let { skuId: t, productSkuIds: n, analyticsLocations: i } = e,
                    { cardId: r, sessionId: a } = (0, j.uM)() ?? {},
                    l = (0, O.o)(),
                    c = (0, k.xM)(l);
                return s.useCallback(
                    (e, s) => {
                        I.default.track(L.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: s ?? t,
                            cta: e,
                            shop_session_id: a,
                            card_id: r,
                            product_sku_ids: n,
                            location_stack: i,
                            discount_source: (0, k.b_)(c),
                        });
                    },
                    [t, i, r, n, a, c],
                );
            })({ skuId: Y.skuId, productSkuIds: er, analyticsLocations: q });
        (0, g.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: Y.skuId,
                card_id: et,
                shop_session_id: en,
                position_in_section: ei,
                product_sku_ids: er,
                location_stack: q,
            },
        });
        let ea = (0, A.o6)(),
            el = t === m.ip.EXITING,
            ec = (0, T.c)("product_details_modal");
        if (null == V || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !ec)) return null;
        let eo = {
                pendingChanges: z,
                pendingAvatarSrc:
                    void 0 !== z.pendingAvatar
                        ? (0, v.sv)((0, h.V7)({ userId: V.id, image: z.pendingAvatar, size: na }), null, V, {
                              size: na,
                          })
                        : void 0,
            },
            ed = (0, b.VG)(i),
            eu = {
                user: V,
                pendingProfile: eo,
                productRecord: i,
                productName: ed,
                selectedProduct: Y,
                previewingProduct: X ?? null,
                category: a,
                selectedVariantIndex: $,
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
        return (0, r.jsx)(E.f5, {
            value: q,
            children: (0, r.jsx)(p.d, {
                returnRef: u,
                transitionState: t,
                onClose: n,
                size: "xl",
                paddingSize: "sm",
                "aria-label": ed,
                children: (0, r.jsx)("div", {
                    className: ns.C,
                    children: (0, r.jsxs)("div", {
                        className: ns.j,
                        children: [
                            (0, r.jsx)(tF, { ...eu }),
                            (0, r.jsx)(nr, { ...eu, isClosing: el, isOrbCheckoutModalOpen: ea, pdpBackground: Z }),
                        ],
                    }),
                }),
            }),
        });
    };
