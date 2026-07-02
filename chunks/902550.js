a.d(t, { default: () => ep });
var l = a(627968),
    n = a(64700),
    r = a(503698),
    i = a.n(r),
    s = a(17928),
    c = a(990078),
    o = a(189213),
    u = a(834730),
    d = a(403581),
    h = a(187322),
    A = a(750943),
    m = a(140735),
    x = a(939249),
    g = a(391242),
    f = a(638495),
    E = a(192308),
    C = a(793574),
    p = a(688810),
    j = a(753838),
    T = a(946274),
    N = a(702211),
    R = a(699576),
    y = a(392107),
    v = a(241326),
    _ = a(534514),
    F = a(289873),
    S = a(695366),
    b = a(661531),
    L = a(287809),
    w = a(101058),
    I = a(636537),
    H = a(765178),
    M = a(228366),
    k = a(157559),
    U = a(913122);
function D() {
    return { isFetching: !1, lastFetchedAt: null, error: null };
}
let P = [],
    O = D();
class G extends s.Ay.Store {
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
            let e = await I.Bo.get({ url: V.Rsh.RECENT_AVATARS, rejectWithError: !0 });
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
        await I.Bo.del({ url: V.Rsh.RECENT_AVATARS_DELETE(e), rejectWithError: !0 }),
            await M.h.dispatch({ type: "RECENT_AVATAR_DELETE", avatarId: e }),
            H.O.announce(B.intl.string(B.t.YJPieI));
    } catch (e) {
        k.A.show({ title: B.intl.string(B.t.iufib1), body: B.intl.string(B.t["/ZNT+0"]) });
    }
}
var X = a(778712),
    K = a(595535),
    Z = a(915710);
function W(e) {
    let { className: t, size: a = K.q } = e,
        n = (0, X.FT)(a);
    return (0, l.jsx)("svg", {
        width: n,
        height: n,
        viewBox: `0 0 ${n} ${n}`,
        className: i()(Z.R, t),
        "aria-hidden": !0,
        children: (0, l.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M44.4505 50.6604C44.3703 50.7187 44.2897 50.7766 44.2088 50.8341C43.105 51.6191 41.9418 52.3261 40.7273 52.9469C36.9087 54.8989 32.583 56 28 56C23.417 56 19.0913 54.8989 15.2727 52.9469C15.2661 52.9436 15.2595 52.9402 15.253 52.9368C13.9566 52.2728 12.7189 51.5108 11.5495 50.6604C9.38994 49.0899 7.46354 47.2183 5.832 45.1072C5.467 44.6349 5.11675 44.1506 4.78196 43.6551C1.76288 39.1862 0 33.799 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 34.442 53.8244 40.376 50.168 45.1072C48.5365 47.2183 46.6101 49.0899 44.4505 50.6604ZM40.2456 47.3651C36.7036 49.6096 32.5036 50.9091 28 50.9091C23.4964 50.9091 19.2964 49.6096 15.7544 47.3651L16.3313 41.5957C16.3944 40.965 15.6427 40.6731 15.2985 41.2054C14.56 42.3472 13.7498 43.7851 13.0644 45.3716C11.1151 43.6941 9.4513 41.6942 8.15574 39.4546C12.1168 32.607 19.5204 28 28 28C36.4796 28 43.8832 32.607 47.8443 39.4546C46.5487 41.6942 44.8849 43.6941 42.9356 45.3716C42.2502 43.7851 41.44 42.3472 40.7015 41.2054C40.3573 40.6731 39.6056 40.965 39.6687 41.5957L40.2456 47.3651ZM28 25.4545C32.9204 25.4545 36.9091 21.4658 36.9091 16.5455C36.9091 11.6251 32.9204 7.63636 28 7.63636C23.0796 7.63636 19.0909 11.6251 19.0909 16.5455C19.0909 21.4658 23.0796 25.4545 28 25.4545Z",
        }),
    });
}
var $ = a(656925),
    Y = a(339984),
    Q = a(712839);
function ee(e) {
    let { avatar: t, index: a, onSelectRecentAvatar: r, onDeleteRecentAvatar: i, avatarButtonRef: s } = e,
        { id: o, storageHash: u, description: d = B.intl.string(B.t.lqaIxI) } = t,
        { avatarSrc: A, eventHandlers: m } = (0, $.A)({ avatarId: o, storageHash: u }),
        { onMouseEnter: g, onMouseLeave: f } = m,
        E = n.useRef(null),
        C = d ?? u.substring(0, 6).toUpperCase(),
        p = B.intl.formatToPlainString(B.t.tmJ75y, { orderNumber: a + 1, description: C }),
        j = B.intl.formatToPlainString(B.t.pBzwhc, { orderNumber: a + 1, description: C });
    return (0, l.jsxs)("div", {
        className: Q.ge,
        children: [
            (0, l.jsx)(x.D, {
                onClick: () => r(t),
                onMouseEnter: g,
                onMouseLeave: f,
                className: Q.Hk,
                "aria-label": p,
                innerRef: s,
                children: (0, l.jsx)("img", { src: A, alt: d, className: Q.Hc }),
            }),
            (0, l.jsx)(c.m, {
                text: B.intl.string(B.t.N86XcP),
                anchorRef: E,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, l.jsx)(h.vN, {
                    children: (0, l.jsx)("button", {
                        type: "button",
                        ref: E,
                        "aria-label": j,
                        onClick: (e) => i(e, a, o, u, j),
                        className: Q.G5,
                        children: (0, l.jsx)(v.u, { size: "xs", color: "currentColor", className: Q.fy }),
                    }),
                }),
            }),
        ],
    });
}
function et(e) {
    let { avatars: t, onComplete: r, setFetchError: c, className: o } = e,
        u = (0, s.bG)([L.default], () => L.default.getCurrentUser()),
        d = n.useRef([]),
        h = n.useRef(null),
        A = n.useRef(t.length),
        x = n.useRef(null),
        [g, C] = n.useState(!1),
        [p, j] = n.useState(!1),
        T = t.length,
        N = Math.max(6 - T, 0),
        R = (0, f.k)(),
        y = n.useCallback(
            async (e) => {
                if (null == u || g) return;
                C(!0), c(null);
                let { id: t, storageHash: n, description: i } = e,
                    s = (0, w.Xp)({ userId: u.id, avatarId: t, storageHash: n, size: V.XAf, canAnimate: !0 });
                try {
                    let t = await fetch(s),
                        c = await t.blob(),
                        { filename: o, type: u } = (0, w.yM)(n, i);
                    (0, E.openModalLazy)(
                        async () => {
                            let { default: t } = await Promise.all([
                                a.e("78104"),
                                a.e("62280"),
                                a.e("21866"),
                                a.e("43437"),
                                a.e("58164"),
                                a.e("71470"),
                                a.e("37490"),
                                a.e("50342"),
                                a.e("63726"),
                                a.e("55524"),
                                a.e("7406"),
                                a.e("89908"),
                                a.e("74571"),
                                a.e("50348"),
                            ]).then(a.bind(a, 142630));
                            return (a) =>
                                (0, l.jsx)(t, {
                                    imageUri: s,
                                    file: new File([c], o, { type: u }),
                                    originalAsset: e,
                                    onCrop: r,
                                    uploadType: Y.HL.AVATAR,
                                    showUpsellHeader: !0,
                                    ...a,
                                });
                        },
                        { contextKey: R },
                    );
                } catch (e) {
                    c(B.intl.string(B.t.fZRH9P));
                } finally {
                    C(!1);
                }
            },
            [R, g, r, c, u],
        ),
        v = n.useCallback(
            (e, n, r, i, s) => {
                let c = n + 1 < t.length ? n + 1 : n - 1;
                (x.current = c >= 0 ? d.current[c] : h.current),
                    e.shiftKey
                        ? J(r)
                        : (j(!0),
                          (0, E.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([a.e("42317"), a.e("26563")]).then(
                                  a.bind(a, 555251),
                              );
                              return (t) => {
                                  let { onClose: a, ...n } = t;
                                  return (0, l.jsx)(e, {
                                      avatarId: r,
                                      storageHash: i,
                                      avatarDescription: s,
                                      onConfirmDelete: () => J(r),
                                      onClose: async () => {
                                          await a(),
                                              requestAnimationFrame(() => {
                                                  j(!1);
                                              });
                                      },
                                      ...n,
                                  });
                              };
                          }));
            },
            [t],
        );
    return (
        n.useEffect(() => {
            p ||
                (t.length < A.current &&
                    null != x.current &&
                    requestAnimationFrame(() => {
                        x.current?.focus();
                    }),
                (A.current = t.length));
        }, [t.length, p]),
        (0, l.jsx)("div", {
            className: i()(Q.AU, o),
            children: (0, l.jsxs)("div", {
                className: Q.mE,
                children: [
                    T > 0 &&
                        (0, l.jsx)("ul", {
                            "aria-label": B.intl.string(B.t.lsU63N),
                            className: Q.xL,
                            children: t.map((e, t) =>
                                (0, l.jsx)(
                                    "li",
                                    {
                                        children: (0, l.jsx)(ee, {
                                            avatar: e,
                                            index: t,
                                            onSelectRecentAvatar: y,
                                            onDeleteRecentAvatar: v,
                                            avatarButtonRef: (e) => {
                                                d.current[t] = e;
                                            },
                                        }),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    N > 0 &&
                        (0, l.jsxs)("div", {
                            className: Q.wh,
                            tabIndex: -1,
                            ref: h,
                            children: [
                                (0, l.jsxs)(m.A, {
                                    children: [
                                        0 === T &&
                                            (0, l.jsxs)(l.Fragment, { children: [B.intl.string(B.t.x0DsRS), " "] }),
                                        B.intl.format(B.t["8W2HO3"], { numberOfEmptyAvatarSlots: N }),
                                    ],
                                }),
                                [...Array(N)].map((e, t) => (0, l.jsx)(W, { className: Q.rZ }, t)),
                            ],
                        }),
                ],
            }),
        })
    );
}
function ea(e) {
    let { className: t, onComplete: a } = e,
        {
            avatars: r,
            loading: c,
            error: o,
        } = (0, s.cf)([z], () => ({ avatars: z.getAvatars(), loading: z.isFetching, error: z.fetchError })),
        [d, h] = n.useState(null),
        A = d ?? o?.message;
    return (
        n.useEffect(() => {
            q();
        }, []),
        (0, l.jsxs)("div", {
            className: i()(Q.kL, t),
            children: [
                (0, l.jsxs)("div", {
                    className: Q.xk,
                    children: [
                        (0, l.jsx)(_.D, { variant: "text-md/medium", children: B.intl.string(B.t.Bnq9zK) }),
                        (0, l.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: B.intl.format(B.t["+CyJu3"], { recentAvatarsLimit: 6 }),
                        }),
                    ],
                }),
                c
                    ? (0, l.jsx)(F.y, { className: Q.u1 })
                    : (0, l.jsx)(et, { avatars: r, onComplete: a, setFetchError: h }),
                null != A &&
                    (0, l.jsxs)("div", {
                        className: Q.gJ,
                        role: "alert",
                        children: [
                            (0, l.jsx)(S.E, { size: "xs", color: b.A.colors.TEXT_FEEDBACK_CRITICAL }),
                            (0, l.jsx)(u.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                children: A,
                            }),
                        ],
                    }),
            ],
        })
    );
}
var el = a(45837),
    en = a(71393),
    er = a(967198),
    ei = a(174459),
    es = a(473145),
    ec = a(428262);
function eo(e, t) {
    let { isGIF: a } = t;
    if (e === Y.HL.GUILD_BANNER) return a ? V.GuildFeatures.ANIMATED_BANNER : V.GuildFeatures.BANNER;
}
var eu = a(2553),
    ed = a(693591),
    eh = a(294891);
let eA = [
    { gif: a(981355), png: a(775788) },
    { gif: a(640237), png: a(689006) },
    { gif: a(964805), png: a(533798) },
    { gif: a(322821), png: a(891814) },
];
function em(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, l.jsx)("div", {
        className: eh.p8,
        children: eA.map((e) =>
            (0, l.jsx)("div", { className: eh.nX, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function ex(e) {
    let { guildFeature: t, guild: a } = e;
    if (null == t || null == a) return;
    let l = (0, es.Ys)(t),
        n = a.features.has(t);
    if (null == l) return;
    let r = (0, es.gb)(l);
    return n
        ? B.intl.formatToPlainString(B.t.u3L3TX, { levelName: r })
        : B.intl.formatToPlainString(B.t["r/v25U"], { levelName: r });
}
function eg(e) {
    let { guildFeature: t, guild: a } = e;
    return (0, l.jsx)("div", {
        className: eh.x9,
        children: (0, l.jsx)(j.A, { guildFeature: t, guild: a, hideTooltip: !0 }),
    });
}
function ef(e) {
    let { icon: t, label: a, guildFeature: n, guild: r, shouldShowPremiumIcon: s } = e,
        o = null != r && null != n;
    return (0, l.jsxs)("div", {
        className: i()(eh.q3, { [eh.j5]: o }),
        "aria-hidden": !0,
        children: [
            (0, l.jsxs)("div", {
                className: eh.Mn,
                children: [
                    t,
                    (0, l.jsxs)(u.E, {
                        variant: "text-sm/semibold",
                        className: i()(eh.xo, { [eh.Fy]: s }),
                        children: [
                            s &&
                                (0, l.jsx)(c.m, {
                                    asContainer: !0,
                                    text: B.intl.string(B.t["5AFxuK"]),
                                    children: (0, l.jsx)(d.t, { size: "xs", color: "currentColor", className: eh.T$ }),
                                }),
                            a,
                        ],
                    }),
                ],
            }),
            o && (0, l.jsx)(eg, { guild: r, guildFeature: n }),
        ],
    });
}
function eE(e) {
    let {
            label: t,
            uploadType: a,
            guild: n,
            maxFileSizeBytes: r,
            filters: s,
            handleOpenImageEditingModal: c,
            handleFileSizeError: o,
        } = e,
        u = a === Y.HL.BANNER,
        d = eo(a, { isGIF: !1 }),
        x = ex({ guildFeature: d, guild: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.vN, {
                within: !0,
                children: (0, l.jsxs)("div", {
                    className: i()(eh.uK, eh.kU),
                    children: [
                        (0, l.jsx)(ef, {
                            icon: (0, l.jsx)(A.X, { size: "md", color: "currentColor" }),
                            label: t,
                            guildFeature: d,
                            guild: n,
                            shouldShowPremiumIcon: u,
                        }),
                        (0, l.jsx)(T.Ay, {
                            "aria-label": t,
                            tabIndex: 0,
                            onChange: c,
                            maxFileSizeBytes: r,
                            onFileSizeError: o,
                            filters: s,
                            multiple: !1,
                        }),
                    ],
                }),
            }),
            null != x && (0, l.jsx)(m.A, { children: x }),
        ],
    });
}
function eC(e) {
    let { uploadType: t, guild: a, handleOpenGIFPickerModal: n } = e,
        { shouldAnimate: r, onMouseEnter: i, onMouseLeave: s } = (0, el.A)(),
        c = t === Y.HL.AVATAR || t === Y.HL.BANNER,
        o = eo(t, { isGIF: !0 }),
        u = ex({ guildFeature: o, guild: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(x.D, {
                className: eh.uK,
                onClick: n,
                "aria-label": B.intl.string(B.t["xsC+/y"]),
                onMouseEnter: i,
                onMouseLeave: s,
                children: [
                    (0, l.jsx)(em, { shouldAnimate: r }),
                    (0, l.jsx)(ef, {
                        icon: (0, l.jsx)(g.O, { size: "md", color: "currentColor" }),
                        label: B.intl.string(B.t["xsC+/y"]),
                        guildFeature: o,
                        guild: a,
                        shouldShowPremiumIcon: c,
                    }),
                ],
            }),
            null != u && (0, l.jsx)(m.A, { children: u }),
        ],
    });
}
function ep(e) {
    let {
            transitionState: t,
            onClose: r,
            onComplete: i,
            onFileSelected: c,
            uploadType: d,
            maxFileSizeBytes: h,
            showUpsellHeader: A,
            filters: m,
            analyticsLocation: x,
            analyticsLocations: g = [],
            imageSpecifications: j,
            modalTitle: T = B.intl.string(B.t.DToW4e),
            uploadOptionTitle: v = B.intl.string(B.t["MsUY/S"]),
            allowRecentAvatarsSelection: _ = !0,
        } = e,
        F = (0, s.bG)([L.default], () => L.default.getCurrentUser()),
        S = (0, s.bG)([er.A], () => er.A.getGuildId()),
        b = (0, s.bG)([en.A], () => en.A.getGuild(S)),
        w = (0, f.k)(),
        I = d === Y.HL.AVATAR || d === Y.HL.BANNER,
        H = !ec.Ay.canUseAnimatedAvatar(F) && d === Y.HL.AVATAR,
        M = (0, N.b)(!I),
        { analyticsLocations: k } = (0, p.Ay)(g, C.A.SELECT_IMAGE_MODAL),
        U = n.useCallback(
            (e) => {
                let { assetOrigin: t = y.E.NEW_ASSET, imageUri: a, file: l, originalAsset: n, isFromTenor: s = !1 } = e;
                r(), i({ assetOrigin: t, imageUri: a, file: l, originalAsset: n, isFromTenor: s });
            },
            [r, i],
        ),
        D = n.useCallback(
            (e, t) => {
                if ((c?.(t), t.type === ed.a.MP4)) return U({ imageUri: e, file: t });
                (0, E.openModalLazy)(
                    async () => {
                        let { default: n } = await Promise.all([
                            a.e("78104"),
                            a.e("62280"),
                            a.e("21866"),
                            a.e("43437"),
                            a.e("58164"),
                            a.e("71470"),
                            a.e("37490"),
                            a.e("50342"),
                            a.e("63726"),
                            a.e("55524"),
                            a.e("7406"),
                            a.e("89908"),
                            a.e("74571"),
                            a.e("50348"),
                        ]).then(a.bind(a, 142630));
                        return (a) =>
                            (0, l.jsx)(n, {
                                imageUri: e,
                                file: t,
                                onCrop: U,
                                uploadType: d,
                                showUpsellHeader: A,
                                analyticsPage: x?.page,
                                ...a,
                            });
                    },
                    { contextKey: w },
                );
            },
            [x?.page, w, U, c, A, d],
        ),
        P = n.useCallback(() => {
            (0, eu.A)(h);
        }, [h]),
        O = n.useCallback(() => {
            (0, E.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        a.e("78104"),
                        a.e("62280"),
                        a.e("21866"),
                        a.e("4067"),
                        a.e("43437"),
                        a.e("58164"),
                        a.e("71470"),
                        a.e("37490"),
                        a.e("63726"),
                        a.e("50348"),
                        a.e("75104"),
                    ]).then(a.bind(a, 672547));
                    return (t) =>
                        (0, l.jsx)(e, {
                            uploadType: d,
                            onComplete: (e) => {
                                let { imageUri: t, file: a } = e;
                                return U({ imageUri: t, file: a, isFromTenor: !0 });
                            },
                            showUpsellHeader: A,
                            analyticsPage: x?.page,
                            ...t,
                        });
                },
                { contextKey: w },
            );
        }, [x?.page, w, U, A, d]);
    n.useEffect(() => {
        H &&
            ei.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                type: V.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: k,
            }),
            ei.default.track(V.HAw.OPEN_MODAL, {
                type: V.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: x,
                location_stack: k,
                upload_type: d,
            });
    }, [H, x, k, d]);
    let G = A && M,
        z = _ && d === Y.HL.AVATAR;
    return (0, l.jsx)(o.Modal, {
        transitionState: t,
        onClose: r,
        size: "md",
        title: T,
        actions: [],
        children: (0, l.jsxs)("div", {
            className: eh.jE,
            children: [
                (0, l.jsxs)("div", {
                    className: eh.pd,
                    children: [
                        (0, l.jsxs)("ul", {
                            className: eh.f9,
                            "aria-label": B.intl.string(B.t.iBnqtQ),
                            children: [
                                (0, l.jsx)("li", {
                                    children: (0, l.jsx)(eE, {
                                        label: v,
                                        uploadType: d,
                                        guild: b,
                                        handleOpenImageEditingModal: D,
                                        maxFileSizeBytes: h,
                                        filters: m,
                                        handleFileSizeError: P,
                                    }),
                                }),
                                (0, l.jsx)("li", {
                                    children: (0, l.jsx)(eC, { uploadType: d, guild: b, handleOpenGIFPickerModal: O }),
                                }),
                            ],
                        }),
                        null != j
                            ? (0, l.jsx)(u.E, {
                                  className: eh.KQ,
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: j,
                              })
                            : null,
                    ],
                }),
                z && (0, l.jsx)(ea, { onComplete: U }),
                G && (0, l.jsx)(R.A, { uploadType: d, showUpsell: !0, position: "inline", className: eh.Lu }),
            ],
        }),
    });
}
