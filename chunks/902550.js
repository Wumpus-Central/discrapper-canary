a.d(t, { default: () => eE });
var n = a(477900),
    l = a(582128),
    r = a(503698),
    s = a.n(r),
    i = a(17928),
    c = a(189213),
    o = a(939249),
    u = a(834730),
    d = a(403581),
    h = a(140735),
    A = a(750943),
    m = a(391242),
    f = a(638495),
    g = a(192308),
    x = a(793574),
    E = a(688810),
    C = a(753838),
    p = a(946274),
    j = a(702211),
    R = a(699576),
    T = a(392107),
    N = a(866665),
    v = a(259678),
    y = a(241326),
    _ = a(297264),
    F = a(289873),
    L = a(695366),
    S = a(661531),
    b = a(287809),
    I = a(101058),
    w = a(562465),
    H = a(765178),
    M = a(228366),
    k = a(157559),
    U = a(913122);
function D() {
    return { isFetching: !1, lastFetchedAt: null, error: null };
}
let P = [],
    O = D();
class G extends i.Ay.Store {
    static displayName = "RecentAvatarsStore";
    get isFetching() {
        return O.isFetching;
    }
    get fetchError() {
        return O.error;
    }
    get shouldFetch() {
        return Date.now() - (O.lastFetchedAt ?? 0) > 3e5 && !O.isFetching;
    }
    getAvatars() {
        return P;
    }
}
let z = new G(M.h, {
    RECENT_AVATARS_FETCH_START: function () {
        (O.isFetching = !0), (O.error = null);
    },
    RECENT_AVATARS_FETCH_SUCCESS: function (e) {
        let { avatars: t } = e;
        (P = t), (O.isFetching = !1), (O.lastFetchedAt = Date.now());
    },
    RECENT_AVATARS_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        (O.isFetching = !1), (O.error = t);
    },
    RECENT_AVATARS_UPDATE: function () {
        O.lastFetchedAt = 0;
    },
    RECENT_AVATAR_DELETE: function (e) {
        let { avatarId: t } = e;
        P = P.filter((e) => e.id !== t);
    },
    LOGOUT: function () {
        (P = []), (O = D());
    },
});
var V = a(652215),
    B = a(375708);
async function q() {
    if (z.shouldFetch) {
        M.h.dispatch({ type: "RECENT_AVATARS_FETCH_START" });
        try {
            let e = await w.Bo.get({ url: V.Rsh.RECENT_AVATARS, rejectWithError: !0 });
            M.h.dispatch({
                type: "RECENT_AVATARS_FETCH_SUCCESS",
                avatars: e.body.avatars.map((e) => {
                    let { storage_hash: t, ...a } = e;
                    return { ...a, storageHash: t };
                }),
            });
        } catch (e) {
            M.h.dispatch({ type: "RECENT_AVATARS_FETCH_FAILURE", error: new U.LG(e) });
        }
    }
}
async function J(e) {
    try {
        await w.Bo.del({ url: V.Rsh.RECENT_AVATARS_DELETE(e), rejectWithError: !0 }),
            await M.h.dispatch({ type: "RECENT_AVATAR_DELETE", avatarId: e }),
            H.O.announce(B.intl.string(B.t.YJPieI));
    } catch (e) {
        k.A.show({ title: B.intl.string(B.t.iufib1), body: B.intl.string(B.t["/ZNT+0"]) });
    }
}
var X = a(778712),
    K = a(595535),
    Z = a(222262);
function W(e) {
    let { className: t, size: a = K.q } = e,
        l = (0, X.FT)(a);
    return (0, n.jsx)("svg", {
        width: l,
        height: l,
        viewBox: `0 0 ${l} ${l}`,
        className: s()(Z.R, t),
        "aria-hidden": !0,
        children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M44.4505 50.6604C44.3703 50.7187 44.2897 50.7766 44.2088 50.8341C43.105 51.6191 41.9418 52.3261 40.7273 52.9469C36.9087 54.8989 32.583 56 28 56C23.417 56 19.0913 54.8989 15.2727 52.9469C15.2661 52.9436 15.2595 52.9402 15.253 52.9368C13.9566 52.2728 12.7189 51.5108 11.5495 50.6604C9.38994 49.0899 7.46354 47.2183 5.832 45.1072C5.467 44.6349 5.11675 44.1506 4.78196 43.6551C1.76288 39.1862 0 33.799 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 34.442 53.8244 40.376 50.168 45.1072C48.5365 47.2183 46.6101 49.0899 44.4505 50.6604ZM40.2456 47.3651C36.7036 49.6096 32.5036 50.9091 28 50.9091C23.4964 50.9091 19.2964 49.6096 15.7544 47.3651L16.3313 41.5957C16.3944 40.965 15.6427 40.6731 15.2985 41.2054C14.56 42.3472 13.7498 43.7851 13.0644 45.3716C11.1151 43.6941 9.4513 41.6942 8.15574 39.4546C12.1168 32.607 19.5204 28 28 28C36.4796 28 43.8832 32.607 47.8443 39.4546C46.5487 41.6942 44.8849 43.6941 42.9356 45.3716C42.2502 43.7851 41.44 42.3472 40.7015 41.2054C40.3573 40.6731 39.6056 40.965 39.6687 41.5957L40.2456 47.3651ZM28 25.4545C32.9204 25.4545 36.9091 21.4658 36.9091 16.5455C36.9091 11.6251 32.9204 7.63636 28 7.63636C23.0796 7.63636 19.0909 11.6251 19.0909 16.5455C19.0909 21.4658 23.0796 25.4545 28 25.4545Z",
        }),
    });
}
var $ = a(656925),
    Y = a(339984),
    Q = a(929759);
function ee(e) {
    let { avatar: t, index: a, onSelectRecentAvatar: r, onDeleteRecentAvatar: s, avatarButtonRef: i } = e,
        { id: c, storageHash: u, description: d = B.intl.string(B.t.lqaIxI) } = t,
        { avatarSrc: h, eventHandlers: A } = (0, $.A)({ avatarId: c, storageHash: u }),
        { onMouseEnter: m, onMouseLeave: f } = A,
        g = l.useRef(null),
        x = d ?? u.substring(0, 6).toUpperCase(),
        E = B.intl.formatToPlainString(B.t.tmJ75y, { orderNumber: a + 1, description: x }),
        C = B.intl.formatToPlainString(B.t.pBzwhc, { orderNumber: a + 1, description: x });
    return (0, n.jsxs)("div", {
        className: Q.ge,
        children: [
            (0, n.jsx)(o.D, {
                onClick: () => r(t),
                onMouseEnter: m,
                onMouseLeave: f,
                className: Q.Hk,
                "aria-label": E,
                innerRef: i,
                children: (0, n.jsx)("img", { src: h, alt: d, className: Q.Hc }),
            }),
            (0, n.jsx)(N.m, {
                text: B.intl.string(B.t.N86XcP),
                anchorRef: g,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(v.vN, {
                    children: (0, n.jsx)("button", {
                        type: "button",
                        ref: g,
                        "aria-label": C,
                        onClick: (e) => s(e, a, c, u, C),
                        className: Q.G5,
                        children: (0, n.jsx)(y.u, { size: "xs", color: "currentColor", className: Q.fy }),
                    }),
                }),
            }),
        ],
    });
}
function et(e) {
    let { avatars: t, onComplete: r, setFetchError: c, className: o, returnRef: u } = e,
        d = (0, i.bG)([b.default], () => b.default.getCurrentUser()),
        A = l.useRef([]),
        m = l.useRef(null),
        x = l.useRef(t.length),
        E = l.useRef(null),
        [C, p] = l.useState(!1),
        [j, R] = l.useState(!1),
        T = t.length,
        N = Math.max(6 - T, 0),
        v = (0, f.k)(),
        y = l.useCallback(
            async (e) => {
                if (null == d || C) return;
                p(!0), c(null);
                let { id: t, storageHash: l, description: s } = e,
                    i = (0, I.Xp)({ userId: d.id, avatarId: t, storageHash: l, size: V.XAf, canAnimate: !0 });
                try {
                    let t = await fetch(i),
                        c = await t.blob(),
                        { filename: o, type: d } = (0, I.yM)(l, s);
                    (0, g.openModalLazy)(
                        async () => {
                            let { default: t } = await Promise.all([
                                a.e("14520"),
                                a.e("42083"),
                                a.e("97250"),
                                a.e("43437"),
                                a.e("58164"),
                                a.e("71470"),
                                a.e("37490"),
                                a.e("50342"),
                                a.e("63726"),
                                a.e("7406"),
                                a.e("55524"),
                                a.e("89908"),
                                a.e("74571"),
                                a.e("27967"),
                            ]).then(a.bind(a, 142630));
                            return (a) =>
                                (0, n.jsx)(t, {
                                    imageUri: i,
                                    file: new File([c], o, { type: d }),
                                    originalAsset: e,
                                    onCrop: r,
                                    uploadType: Y.HL.AVATAR,
                                    showUpsellHeader: !0,
                                    returnRef: u,
                                    ...a,
                                });
                        },
                        { contextKey: v },
                    );
                } catch (e) {
                    c(B.intl.string(B.t.fZRH9P));
                } finally {
                    p(!1);
                }
            },
            [v, C, r, u, c, d],
        ),
        _ = l.useCallback(
            (e, l, r, s, i) => {
                let c = l + 1 < t.length ? l + 1 : l - 1;
                (E.current = c >= 0 ? A.current[c] : m.current),
                    e.shiftKey
                        ? J(r)
                        : (R(!0),
                          (0, g.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([a.e("16741"), a.e("48944")]).then(
                                  a.bind(a, 555251),
                              );
                              return (t) => {
                                  let { onClose: a, ...l } = t;
                                  return (0, n.jsx)(e, {
                                      avatarId: r,
                                      storageHash: s,
                                      avatarDescription: i,
                                      onConfirmDelete: () => J(r),
                                      onClose: async () => {
                                          await a(),
                                              requestAnimationFrame(() => {
                                                  R(!1);
                                              });
                                      },
                                      ...l,
                                  });
                              };
                          }));
            },
            [t],
        );
    return (
        l.useEffect(() => {
            j ||
                (t.length < x.current &&
                    null != E.current &&
                    requestAnimationFrame(() => {
                        E.current?.focus();
                    }),
                (x.current = t.length));
        }, [t.length, j]),
        (0, n.jsx)("div", {
            className: s()(Q.AU, o),
            children: (0, n.jsxs)("div", {
                className: Q.mE,
                children: [
                    T > 0 &&
                        (0, n.jsx)("ul", {
                            "aria-label": B.intl.string(B.t.lsU63N),
                            className: Q.xL,
                            children: t.map((e, t) =>
                                (0, n.jsx)(
                                    "li",
                                    {
                                        children: (0, n.jsx)(ee, {
                                            avatar: e,
                                            index: t,
                                            onSelectRecentAvatar: y,
                                            onDeleteRecentAvatar: _,
                                            avatarButtonRef: (e) => {
                                                A.current[t] = e;
                                            },
                                        }),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    N > 0 &&
                        (0, n.jsxs)("div", {
                            className: Q.wh,
                            tabIndex: -1,
                            ref: m,
                            children: [
                                (0, n.jsxs)(h.A, {
                                    children: [
                                        0 === T &&
                                            (0, n.jsxs)(n.Fragment, { children: [B.intl.string(B.t.x0DsRS), " "] }),
                                        B.intl.format(B.t["8W2HO3"], { numberOfEmptyAvatarSlots: N }),
                                    ],
                                }),
                                [...Array(N)].map((e, t) => (0, n.jsx)(W, { className: Q.rZ }, t)),
                            ],
                        }),
                ],
            }),
        })
    );
}
function ea(e) {
    let { className: t, onComplete: a, returnRef: r } = e,
        {
            avatars: c,
            loading: o,
            error: d,
        } = (0, i.cf)([z], () => ({ avatars: z.getAvatars(), loading: z.isFetching, error: z.fetchError })),
        [h, A] = l.useState(null),
        m = h ?? d?.message;
    return (
        l.useEffect(() => {
            q();
        }, []),
        (0, n.jsxs)("div", {
            className: s()(Q.kL, t),
            children: [
                (0, n.jsxs)("div", {
                    className: Q.xk,
                    children: [
                        (0, n.jsx)(_.D, { variant: "text-md/medium", children: B.intl.string(B.t.Bnq9zK) }),
                        (0, n.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: B.intl.format(B.t["+CyJu3"], { recentAvatarsLimit: 6 }),
                        }),
                    ],
                }),
                o
                    ? (0, n.jsx)(F.y, { className: Q.u1 })
                    : (0, n.jsx)(et, { avatars: c, onComplete: a, setFetchError: A, returnRef: r }),
                null != m &&
                    (0, n.jsxs)("div", {
                        className: Q.gJ,
                        role: "alert",
                        children: [
                            (0, n.jsx)(L.E, { size: "xs", color: S.A.colors.TEXT_FEEDBACK_CRITICAL }),
                            (0, n.jsx)(u.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                children: m,
                            }),
                        ],
                    }),
            ],
        })
    );
}
var en = a(45837),
    el = a(71393),
    er = a(967198),
    es = a(174459),
    ei = a(473145),
    ec = a(428262);
function eo(e, t) {
    let { isGIF: a } = t;
    if (e === Y.HL.GUILD_BANNER) return a ? V.GuildFeatures.ANIMATED_BANNER : V.GuildFeatures.BANNER;
}
var eu = a(2553),
    ed = a(693591),
    eh = a(499267);
let eA = [
    { gif: a(981355), png: a(775788) },
    { gif: a(640237), png: a(689006) },
    { gif: a(964805), png: a(533798) },
    { gif: a(322821), png: a(891814) },
];
function em(e) {
    let { shouldAnimate: t } = e;
    return (0, n.jsx)("div", {
        className: eh.p8,
        children: eA.map((e) =>
            (0, n.jsx)("div", { className: eh.nX, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function ef(e) {
    let {
            className: t,
            onClick: a,
            onMouseEnter: r,
            onMouseLeave: i,
            guildFeature: c,
            guild: A,
            icon: m,
            label: f,
            shouldShowPremiumIcon: g,
            children: x,
        } = e,
        E = l.useId(),
        p = (function (e) {
            let { guildFeature: t, guild: a } = e;
            if (null == t || null == a) return;
            let n = (0, ei.Ys)(t),
                l = a.features.has(t);
            if (null == n) return;
            let r = (0, ei.gb)(n);
            return l
                ? B.intl.formatToPlainString(B.t.u3L3TX, { levelName: r })
                : B.intl.formatToPlainString(B.t["r/v25U"], { levelName: r });
        })({ guildFeature: c, guild: A }),
        j = null != A && null != c;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.D, {
                className: t,
                onClick: a,
                onMouseEnter: r,
                onMouseLeave: i,
                "aria-describedby": null != p ? E : void 0,
                children: [
                    x,
                    (0, n.jsxs)("div", {
                        className: s()(eh.q3, { [eh.j5]: j }),
                        children: [
                            (0, n.jsxs)("div", {
                                className: eh.Mn,
                                children: [
                                    m,
                                    (0, n.jsxs)(u.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        className: s()(eh.xo, { [eh.Fy]: g }),
                                        children: [
                                            g &&
                                                (0, n.jsx)(d.t, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: eh.T$,
                                                }),
                                            f,
                                        ],
                                    }),
                                    g && (0, n.jsx)(h.A, { children: `, ${B.intl.string(B.t["5AFxuK"])}` }),
                                ],
                            }),
                            j &&
                                (0, n.jsx)("div", {
                                    className: eh.x9,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(C.A, { guildFeature: c, guild: A, hideTooltip: !0 }),
                                }),
                        ],
                    }),
                ],
            }),
            null != p && (0, n.jsx)(h.A, { id: E, children: p }),
        ],
    });
}
function eg(e) {
    let {
            label: t,
            uploadType: a,
            guild: r,
            maxFileSizeBytes: i,
            filters: c,
            handleOpenImageEditingModal: o,
            handleFileSizeError: u,
        } = e,
        d = a === Y.HL.BANNER,
        h = eo(a, { isGIF: !1 }),
        m = l.useRef(null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: eh.ls,
                children: (0, n.jsx)(p.Ay, {
                    ref: m,
                    onChange: o,
                    maxFileSizeBytes: i,
                    onFileSizeError: u,
                    filters: c,
                    multiple: !1,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, n.jsx)(ef, {
                className: s()(eh.uK, eh.kU),
                onClick: function () {
                    m.current?.activateUploadDialogue();
                },
                guildFeature: h,
                guild: r,
                icon: (0, n.jsx)(A.X, { size: "md", color: "currentColor" }),
                label: t,
                shouldShowPremiumIcon: d,
            }),
        ],
    });
}
function ex(e) {
    let { uploadType: t, guild: a, handleOpenGIFPickerModal: l } = e,
        { shouldAnimate: r, onMouseEnter: s, onMouseLeave: i } = (0, en.A)(),
        c = t === Y.HL.AVATAR || t === Y.HL.BANNER,
        o = eo(t, { isGIF: !0 });
    return (0, n.jsx)(ef, {
        className: eh.uK,
        onClick: l,
        onMouseEnter: s,
        onMouseLeave: i,
        guildFeature: o,
        guild: a,
        icon: (0, n.jsx)(m.O, { size: "md", color: "currentColor" }),
        label: B.intl.string(B.t["xsC+/y"]),
        shouldShowPremiumIcon: c,
        children: (0, n.jsx)(em, { shouldAnimate: r }),
    });
}
function eE(e) {
    let {
            transitionState: t,
            onClose: r,
            onComplete: s,
            onFileSelected: o,
            uploadType: d,
            maxFileSizeBytes: h,
            showUpsellHeader: A,
            filters: m,
            analyticsLocation: C,
            analyticsLocations: p = [],
            imageSpecifications: N,
            modalTitle: v = B.intl.string(B.t.DToW4e),
            uploadOptionTitle: y = B.intl.string(B.t["MsUY/S"]),
            allowRecentAvatarsSelection: _ = !0,
            returnRef: F,
        } = e,
        L = (0, i.bG)([b.default], () => b.default.getCurrentUser()),
        S = (0, i.bG)([er.A], () => er.A.getGuildId()),
        I = (0, i.bG)([el.A], () => el.A.getGuild(S)),
        w = (0, f.k)(),
        H = d === Y.HL.AVATAR || d === Y.HL.BANNER,
        M = !ec.Ay.canUseAnimatedAvatar(L) && d === Y.HL.AVATAR,
        k = (0, j.b)(!H),
        { analyticsLocations: U } = (0, E.Ay)(p, x.A.SELECT_IMAGE_MODAL),
        D = l.useCallback(
            (e) => {
                let { assetOrigin: t = T.E.NEW_ASSET, imageUri: a, file: n, originalAsset: l, isFromTenor: i = !1 } = e;
                r(), s({ assetOrigin: t, imageUri: a, file: n, originalAsset: l, isFromTenor: i });
            },
            [r, s],
        ),
        P = l.useCallback(
            (e, t) => {
                if ((o?.(t), t.type === ed.a.MP4)) return D({ imageUri: e, file: t });
                (0, g.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            a.e("14520"),
                            a.e("42083"),
                            a.e("97250"),
                            a.e("43437"),
                            a.e("58164"),
                            a.e("71470"),
                            a.e("37490"),
                            a.e("50342"),
                            a.e("63726"),
                            a.e("7406"),
                            a.e("55524"),
                            a.e("89908"),
                            a.e("74571"),
                            a.e("27967"),
                        ]).then(a.bind(a, 142630));
                        return (a) =>
                            (0, n.jsx)(l, {
                                imageUri: e,
                                file: t,
                                onCrop: D,
                                uploadType: d,
                                showUpsellHeader: A,
                                analyticsPage: C?.page,
                                returnRef: F,
                                ...a,
                            });
                    },
                    { contextKey: w },
                );
            },
            [C?.page, w, D, o, F, A, d],
        ),
        O = l.useCallback(() => {
            (0, eu.A)(h);
        }, [h]),
        G = l.useCallback(() => {
            (0, g.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        a.e("14520"),
                        a.e("42083"),
                        a.e("97250"),
                        a.e("16507"),
                        a.e("43437"),
                        a.e("58164"),
                        a.e("71470"),
                        a.e("37490"),
                        a.e("63726"),
                        a.e("27967"),
                        a.e("75104"),
                    ]).then(a.bind(a, 672547));
                    return (t) =>
                        (0, n.jsx)(e, {
                            uploadType: d,
                            onComplete: (e) => {
                                let { imageUri: t, file: a } = e;
                                return D({ imageUri: t, file: a, isFromTenor: !0 });
                            },
                            showUpsellHeader: A,
                            analyticsPage: C?.page,
                            returnRef: F,
                            ...t,
                        });
                },
                { contextKey: w },
            );
        }, [C?.page, w, D, F, A, d]);
    l.useEffect(() => {
        M &&
            es.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                type: V.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: U,
            }),
            es.default.track(V.HAw.OPEN_MODAL, {
                type: V.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: C,
                location_stack: U,
                upload_type: d,
            });
    }, [M, C, U, d]);
    let z = A && k,
        q = _ && d === Y.HL.AVATAR;
    return (0, n.jsx)(c.Modal, {
        transitionState: t,
        onClose: r,
        size: "md",
        title: v,
        actions: [],
        returnRef: F,
        children: (0, n.jsxs)("div", {
            className: eh.jE,
            children: [
                (0, n.jsxs)("div", {
                    className: eh.pd,
                    children: [
                        (0, n.jsxs)("ul", {
                            className: eh.f9,
                            "aria-label": B.intl.string(B.t.iBnqtQ),
                            children: [
                                (0, n.jsx)("li", {
                                    children: (0, n.jsx)(eg, {
                                        label: y,
                                        uploadType: d,
                                        guild: I,
                                        handleOpenImageEditingModal: P,
                                        maxFileSizeBytes: h,
                                        filters: m,
                                        handleFileSizeError: O,
                                    }),
                                }),
                                (0, n.jsx)("li", {
                                    children: (0, n.jsx)(ex, { uploadType: d, guild: I, handleOpenGIFPickerModal: G }),
                                }),
                            ],
                        }),
                        null != N
                            ? (0, n.jsx)(u.E, {
                                  className: eh.KQ,
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N,
                              })
                            : null,
                    ],
                }),
                q && (0, n.jsx)(ea, { onComplete: D, returnRef: F }),
                z && (0, n.jsx)(R.A, { uploadType: d, showUpsell: !0, position: "inline", className: eh.Lu }),
            ],
        }),
    });
}
