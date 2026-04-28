a.d(t, { default: () => ep });
var n = a(627968),
    l = a(64700),
    s = a(503698),
    r = a.n(s),
    i = a(17928),
    c = a(990078),
    o = a(189213),
    u = a(834730),
    d = a(403581),
    A = a(187322),
    h = a(750943),
    f = a(140735),
    g = a(939249),
    m = a(391242),
    x = a(373495),
    p = a(192308),
    C = a(793574),
    E = a(688810),
    N = a(753838),
    j = a(946274),
    T = a(702211),
    R = a(699576),
    y = a(392107),
    b = a(241326),
    v = a(452027),
    _ = a(289873),
    F = a(287809),
    L = a(101058),
    S = a(636537),
    H = a(765178),
    w = a(228366),
    I = a(157559),
    M = a(845584);
let k = () => ({ isFetching: !1, lastFetchedAt: null, error: null }),
    U = [],
    D = k();
class P extends i.Ay.Store {
    static displayName = "RecentAvatarsStore";
    get isFetching() {
        return D.isFetching;
    }
    get fetchError() {
        return D.error;
    }
    get shouldFetch() {
        return Date.now() - (D.lastFetchedAt ?? 0) > 3e5 && !D.isFetching;
    }
    getAvatars() {
        return U;
    }
}
let O = new P(w.h, {
    RECENT_AVATARS_FETCH_START: function () {
        (D.isFetching = !0), (D.error = null);
    },
    RECENT_AVATARS_FETCH_SUCCESS: function (e) {
        let { avatars: t } = e;
        (U = t), (D.isFetching = !1), (D.lastFetchedAt = Date.now());
    },
    RECENT_AVATARS_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        (D.isFetching = !1), (D.error = t);
    },
    RECENT_AVATARS_UPDATE: function () {
        D.lastFetchedAt = 0;
    },
    RECENT_AVATAR_DELETE: function (e) {
        let { avatarId: t } = e;
        U = U.filter((e) => e.id !== t);
    },
    LOGOUT: function () {
        (U = []), (D = k());
    },
});
var G = a(652215),
    V = a(985018);
async function z() {
    if (O.shouldFetch) {
        w.h.dispatch({ type: "RECENT_AVATARS_FETCH_START" });
        try {
            let e = await S.Bo.get({ url: G.Rsh.RECENT_AVATARS, rejectWithError: !0 });
            w.h.dispatch({
                type: "RECENT_AVATARS_FETCH_SUCCESS",
                avatars: e.body.avatars.map((e) => {
                    let { storage_hash: t, ...a } = e;
                    return { ...a, storageHash: t };
                }),
            });
        } catch (e) {
            w.h.dispatch({ type: "RECENT_AVATARS_FETCH_FAILURE", error: new M.LG(e) });
        }
    }
}
async function B(e) {
    try {
        await S.Bo.del({ url: G.Rsh.RECENT_AVATARS_DELETE(e), rejectWithError: !0 }),
            await w.h.dispatch({ type: "RECENT_AVATAR_DELETE", avatarId: e }),
            H.O.announce(V.intl.string(V.t.YJPieI));
    } catch (e) {
        I.A.show({ title: V.intl.string(V.t.iufib1), body: V.intl.string(V.t["/ZNT+0"]) });
    }
}
var J = a(778712),
    q = a(595535),
    W = a(915710);
function X(e) {
    let { className: t, size: a = q.q } = e,
        l = (0, J.FT)(a);
    return (0, n.jsx)("svg", {
        width: l,
        height: l,
        viewBox: `0 0 ${l} ${l}`,
        className: r()(W.R, t),
        "aria-hidden": !0,
        children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M44.4505 50.6604C44.3703 50.7187 44.2897 50.7766 44.2088 50.8341C43.105 51.6191 41.9418 52.3261 40.7273 52.9469C36.9087 54.8989 32.583 56 28 56C23.417 56 19.0913 54.8989 15.2727 52.9469C15.2661 52.9436 15.2595 52.9402 15.253 52.9368C13.9566 52.2728 12.7189 51.5108 11.5495 50.6604C9.38994 49.0899 7.46354 47.2183 5.832 45.1072C5.467 44.6349 5.11675 44.1506 4.78196 43.6551C1.76288 39.1862 0 33.799 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 34.442 53.8244 40.376 50.168 45.1072C48.5365 47.2183 46.6101 49.0899 44.4505 50.6604ZM40.2456 47.3651C36.7036 49.6096 32.5036 50.9091 28 50.9091C23.4964 50.9091 19.2964 49.6096 15.7544 47.3651L16.3313 41.5957C16.3944 40.965 15.6427 40.6731 15.2985 41.2054C14.56 42.3472 13.7498 43.7851 13.0644 45.3716C11.1151 43.6941 9.4513 41.6942 8.15574 39.4546C12.1168 32.607 19.5204 28 28 28C36.4796 28 43.8832 32.607 47.8443 39.4546C46.5487 41.6942 44.8849 43.6941 42.9356 45.3716C42.2502 43.7851 41.44 42.3472 40.7015 41.2054C40.3573 40.6731 39.6056 40.965 39.6687 41.5957L40.2456 47.3651ZM28 25.4545C32.9204 25.4545 36.9091 21.4658 36.9091 16.5455C36.9091 11.6251 32.9204 7.63636 28 7.63636C23.0796 7.63636 19.0909 11.6251 19.0909 16.5455C19.0909 21.4658 23.0796 25.4545 28 25.4545Z",
        }),
    });
}
var Z = a(656925),
    K = a(339984),
    $ = a(712839);
function Y(e) {
    let { avatar: t, index: a, onSelectRecentAvatar: s, onDeleteRecentAvatar: r, avatarButtonRef: i } = e,
        { id: o, storageHash: u, description: d = V.intl.string(V.t.lqaIxI) } = t,
        { avatarSrc: h, eventHandlers: f } = (0, Z.A)({ avatarId: o, storageHash: u }),
        { onMouseEnter: m, onMouseLeave: x } = f,
        p = l.useRef(null),
        C = d ?? u.substring(0, 6).toUpperCase(),
        E = V.intl.formatToPlainString(V.t.tmJ75y, { orderNumber: a + 1, description: C }),
        N = V.intl.formatToPlainString(V.t.pBzwhc, { orderNumber: a + 1, description: C });
    return (0, n.jsxs)("div", {
        className: $.ge,
        children: [
            (0, n.jsx)(g.D, {
                onClick: () => s(t),
                onMouseEnter: m,
                onMouseLeave: x,
                className: $.Hk,
                "aria-label": E,
                innerRef: i,
                children: (0, n.jsx)("img", { src: h, alt: d, className: $.Hc }),
            }),
            (0, n.jsx)(c.m, {
                text: V.intl.string(V.t.N86XcP),
                anchorRef: p,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(A.vN, {
                    children: (0, n.jsx)("button", {
                        type: "button",
                        ref: p,
                        "aria-label": N,
                        onClick: (e) => r(e, a, o, u, N),
                        className: $.G5,
                        children: (0, n.jsx)(b.u, { size: "xs", color: "currentColor", className: $.fy }),
                    }),
                }),
            }),
        ],
    });
}
function Q(e) {
    let { avatars: t, onComplete: s, setFetchError: c, className: o } = e,
        u = (0, i.bG)([F.default], () => F.default.getCurrentUser()),
        d = l.useRef([]),
        A = l.useRef(null),
        h = l.useRef(t.length),
        g = l.useRef(null),
        [m, C] = l.useState(!1),
        [E, N] = l.useState(!1),
        j = t.length,
        T = Math.max(6 - j, 0),
        R = (0, x.k)(),
        y = l.useCallback(
            async (e) => {
                if (null == u || m) return;
                C(!0), c(null);
                let { id: t, storageHash: l, description: r } = e,
                    i = (0, L.Xp)({
                        userId: u.id,
                        avatarId: t,
                        storageHash: l,
                        size: G.XAf,
                        canAnimate: !0,
                        allowWebp: !1,
                    });
                try {
                    let t = await fetch(i),
                        c = await t.blob(),
                        { filename: o, type: u } = (0, L.yM)(l, r);
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: t } = await Promise.all([
                                a.e("24199"),
                                a.e("58710"),
                                a.e("1040"),
                                a.e("45723"),
                                a.e("2956"),
                                a.e("74571"),
                                a.e("77455"),
                            ]).then(a.bind(a, 142630));
                            return (a) =>
                                (0, n.jsx)(t, {
                                    imageUri: i,
                                    file: new File([c], o, { type: u }),
                                    originalAsset: e,
                                    onCrop: s,
                                    uploadType: K.HL.AVATAR,
                                    showUpsellHeader: !0,
                                    ...a,
                                });
                        },
                        { contextKey: R },
                    );
                } catch (e) {
                    c(V.intl.string(V.t.fZRH9P));
                } finally {
                    C(!1);
                }
            },
            [R, m, s, c, u],
        ),
        b = l.useCallback(
            (e, l, s, r, i) => {
                let c = l + 1 < t.length ? l + 1 : l - 1;
                (g.current = c >= 0 ? d.current[c] : A.current),
                    e.shiftKey
                        ? B(s)
                        : (N(!0),
                          (0, p.openModalLazy)(async () => {
                              let { default: e } = await a.e("26563").then(a.bind(a, 555251));
                              return (t) => {
                                  let { onClose: a, ...l } = t;
                                  return (0, n.jsx)(e, {
                                      avatarId: s,
                                      storageHash: r,
                                      avatarDescription: i,
                                      onConfirmDelete: () => B(s),
                                      onClose: async () => {
                                          await a(),
                                              requestAnimationFrame(() => {
                                                  N(!1);
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
            E ||
                (t.length < h.current &&
                    null != g.current &&
                    requestAnimationFrame(() => {
                        g.current?.focus();
                    }),
                (h.current = t.length));
        }, [t.length, E]),
        (0, n.jsx)("div", {
            className: r()($.AU, o),
            children: (0, n.jsxs)("div", {
                className: $.mE,
                children: [
                    j > 0 &&
                        (0, n.jsx)("ul", {
                            "aria-label": V.intl.string(V.t.lsU63N),
                            className: $.xL,
                            children: t.map((e, t) =>
                                (0, n.jsx)(
                                    "li",
                                    {
                                        children: (0, n.jsx)(Y, {
                                            avatar: e,
                                            index: t,
                                            onSelectRecentAvatar: y,
                                            onDeleteRecentAvatar: b,
                                            avatarButtonRef: (e) => {
                                                d.current[t] = e;
                                            },
                                        }),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    T > 0 &&
                        (0, n.jsxs)("div", {
                            className: $.wh,
                            tabIndex: -1,
                            ref: A,
                            children: [
                                (0, n.jsxs)(f.A, {
                                    children: [
                                        0 === j &&
                                            (0, n.jsxs)(n.Fragment, { children: [V.intl.string(V.t.x0DsRS), " "] }),
                                        V.intl.format(V.t["8W2HO3"], { numberOfEmptyAvatarSlots: T }),
                                    ],
                                }),
                                [...Array(T)].map((e, t) => (0, n.jsx)(X, { className: $.rZ }, t)),
                            ],
                        }),
                ],
            }),
        })
    );
}
function ee(e) {
    let { className: t, onComplete: a } = e,
        {
            avatars: s,
            loading: c,
            error: o,
        } = (0, i.cf)([O], () => ({ avatars: O.getAvatars(), loading: O.isFetching, error: O.fetchError })),
        [u, d] = l.useState(null),
        A = u ?? o?.message;
    return (
        l.useEffect(() => {
            z();
        }, []),
        (0, n.jsx)("div", {
            className: r()($.kL, t),
            children: (0, n.jsx)(v.D, {
                label: V.intl.string(V.t.Bnq9zK),
                description: V.intl.format(V.t["+CyJu3"], { recentAvatarsLimit: 6 }),
                errorMessage: A,
                children: c
                    ? (0, n.jsx)(_.y, { className: $.u1 })
                    : (0, n.jsx)(Q, {
                          avatars: s,
                          onComplete: a,
                          setFetchError: d,
                          className: null != A ? $.JD : void 0,
                      }),
            }),
        })
    );
}
var et = a(45837),
    ea = a(71393),
    en = a(967198),
    el = a(954571),
    es = a(473145),
    er = a(927578);
function ei(e, t) {
    let { isGIF: a } = t;
    if (e === K.HL.GUILD_BANNER) return a ? G.GuildFeatures.ANIMATED_BANNER : G.GuildFeatures.BANNER;
}
var ec = a(2553),
    eo = a(693591),
    eu = a(294891);
let ed = [
    { gif: a(203736), png: a(775788) },
    { gif: a(640237), png: a(689006) },
    { gif: a(964805), png: a(533798) },
    { gif: a(322821), png: a(891814) },
];
function eA(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, n.jsx)("div", {
        className: eu.p8,
        children: ed.map((e) =>
            (0, n.jsx)("div", { className: eu.nX, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function eh(e) {
    let { guildFeature: t, guild: a } = e;
    if (null == t || null == a) return;
    let n = (0, es.Ys)(t),
        l = a.features.has(t);
    if (null == n) return;
    let s = (0, es.gb)(n);
    return l
        ? V.intl.formatToPlainString(V.t.u3L3TX, { levelName: s })
        : V.intl.formatToPlainString(V.t["r/v25U"], { levelName: s });
}
function ef(e) {
    let { guildFeature: t, guild: a } = e;
    return (0, n.jsx)("div", {
        className: eu.x9,
        children: (0, n.jsx)(N.A, { guildFeature: t, guild: a, hideTooltip: !0 }),
    });
}
function eg(e) {
    let { icon: t, label: a, guildFeature: l, guild: s, shouldShowPremiumIcon: i } = e,
        o = null != s && null != l;
    return (0, n.jsxs)("div", {
        className: r()(eu.q3, { [eu.j5]: o }),
        "aria-hidden": !0,
        children: [
            (0, n.jsxs)("div", {
                className: eu.Mn,
                children: [
                    t,
                    (0, n.jsxs)(u.E, {
                        variant: "text-sm/semibold",
                        className: r()(eu.xo, { [eu.Fy]: i }),
                        children: [
                            i &&
                                (0, n.jsx)(c.m, {
                                    asContainer: !0,
                                    text: V.intl.string(V.t["5AFxuK"]),
                                    children: (0, n.jsx)(d.t, { size: "xs", color: "currentColor", className: eu.T$ }),
                                }),
                            a,
                        ],
                    }),
                ],
            }),
            o && (0, n.jsx)(ef, { guild: s, guildFeature: l }),
        ],
    });
}
function em(e) {
    let {
            label: t,
            uploadType: a,
            guild: l,
            maxFileSizeBytes: s,
            filters: i,
            handleOpenImageEditingModal: c,
            handleFileSizeError: o,
        } = e,
        u = a === K.HL.BANNER,
        d = ei(a, { isGIF: !1 }),
        g = eh({ guildFeature: d, guild: l });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(A.vN, {
                within: !0,
                children: (0, n.jsxs)("div", {
                    className: r()(eu.uK, eu.kU),
                    children: [
                        (0, n.jsx)(eg, {
                            icon: (0, n.jsx)(h.X, { size: "md", color: "currentColor" }),
                            label: t,
                            guildFeature: d,
                            guild: l,
                            shouldShowPremiumIcon: u,
                        }),
                        (0, n.jsx)(j.Ay, {
                            "aria-label": t,
                            tabIndex: 0,
                            onChange: c,
                            maxFileSizeBytes: s,
                            onFileSizeError: o,
                            filters: i,
                            multiple: !1,
                        }),
                    ],
                }),
            }),
            null != g && (0, n.jsx)(f.A, { children: g }),
        ],
    });
}
function ex(e) {
    let { uploadType: t, guild: a, handleOpenGIFPickerModal: l } = e,
        { shouldAnimate: s, onMouseEnter: r, onMouseLeave: i } = (0, et.A)(),
        c = t === K.HL.AVATAR || t === K.HL.BANNER,
        o = ei(t, { isGIF: !0 }),
        u = eh({ guildFeature: o, guild: a });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(g.D, {
                className: eu.uK,
                onClick: l,
                "aria-label": V.intl.string(V.t["xsC+/y"]),
                onMouseEnter: r,
                onMouseLeave: i,
                children: [
                    (0, n.jsx)(eA, { shouldAnimate: s }),
                    (0, n.jsx)(eg, {
                        icon: (0, n.jsx)(m.O, { size: "md", color: "currentColor" }),
                        label: V.intl.string(V.t["xsC+/y"]),
                        guildFeature: o,
                        guild: a,
                        shouldShowPremiumIcon: c,
                    }),
                ],
            }),
            null != u && (0, n.jsx)(f.A, { children: u }),
        ],
    });
}
function ep(e) {
    let {
            transitionState: t,
            onClose: s,
            onComplete: r,
            uploadType: c,
            maxFileSizeBytes: d,
            showUpsellHeader: A,
            filters: h,
            analyticsLocation: f,
            analyticsLocations: g = [],
            imageSpecifications: m,
            modalTitle: N = V.intl.string(V.t.DToW4e),
            uploadOptionTitle: j = V.intl.string(V.t["MsUY/S"]),
            allowRecentAvatarsSelection: b = !0,
        } = e,
        v = (0, i.bG)([F.default], () => F.default.getCurrentUser()),
        _ = (0, i.bG)([en.A], () => en.A.getGuildId()),
        L = (0, i.bG)([ea.A], () => ea.A.getGuild(_)),
        S = (0, x.k)(),
        H = c === K.HL.AVATAR || c === K.HL.BANNER,
        w = !er.Ay.canUseAnimatedAvatar(v) && c === K.HL.AVATAR,
        I = (0, T.b)(!H),
        { analyticsLocations: M } = (0, E.Ay)(g, C.A.SELECT_IMAGE_MODAL),
        k = l.useCallback(
            (e) => {
                let { assetOrigin: t = y.E.NEW_ASSET, imageUri: a, file: n, originalAsset: l, isFromTenor: i = !1 } = e;
                s(), r({ assetOrigin: t, imageUri: a, file: n, originalAsset: l, isFromTenor: i });
            },
            [s, r],
        ),
        U = l.useCallback(
            (e, t) => {
                if (t.type === eo.a.MP4) return k({ imageUri: e, file: t });
                (0, p.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            a.e("24199"),
                            a.e("58710"),
                            a.e("1040"),
                            a.e("45723"),
                            a.e("2956"),
                            a.e("74571"),
                            a.e("77455"),
                        ]).then(a.bind(a, 142630));
                        return (a) =>
                            (0, n.jsx)(l, {
                                imageUri: e,
                                file: t,
                                onCrop: k,
                                uploadType: c,
                                showUpsellHeader: A,
                                analyticsPage: f?.page,
                                ...a,
                            });
                    },
                    { contextKey: S },
                );
            },
            [f?.page, S, k, A, c],
        ),
        D = l.useCallback(() => {
            (0, ec.A)(d);
        }, [d]),
        P = l.useCallback(() => {
            (0, p.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        a.e("24199"),
                        a.e("58710"),
                        a.e("31825"),
                        a.e("8971"),
                        a.e("1040"),
                        a.e("45723"),
                        a.e("23945"),
                    ]).then(a.bind(a, 672547));
                    return (t) =>
                        (0, n.jsx)(e, {
                            uploadType: c,
                            onComplete: (e) => {
                                let { imageUri: t, file: a } = e;
                                return k({ imageUri: t, file: a, isFromTenor: !0 });
                            },
                            showUpsellHeader: A,
                            analyticsPage: f?.page,
                            ...t,
                        });
                },
                { contextKey: S },
            );
        }, [f?.page, S, k, A, c]);
    l.useEffect(() => {
        w &&
            el.default.track(G.HAw.PREMIUM_UPSELL_VIEWED, {
                type: G.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: M,
            }),
            el.default.track(G.HAw.OPEN_MODAL, {
                type: G.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: f,
                location_stack: M,
                upload_type: c,
            });
    }, [w, f, M, c]);
    let O = A && I,
        z = b && c === K.HL.AVATAR;
    return (0, n.jsx)(o.Modal, {
        transitionState: t,
        onClose: s,
        size: "md",
        title: N,
        actions: [],
        children: (0, n.jsxs)("div", {
            className: eu.jE,
            children: [
                (0, n.jsxs)("div", {
                    className: eu.pd,
                    children: [
                        (0, n.jsxs)("ul", {
                            className: eu.f9,
                            "aria-label": V.intl.string(V.t.iBnqtQ),
                            children: [
                                (0, n.jsx)("li", {
                                    children: (0, n.jsx)(em, {
                                        label: j,
                                        uploadType: c,
                                        guild: L,
                                        handleOpenImageEditingModal: U,
                                        maxFileSizeBytes: d,
                                        filters: h,
                                        handleFileSizeError: D,
                                    }),
                                }),
                                (0, n.jsx)("li", {
                                    children: (0, n.jsx)(ex, { uploadType: c, guild: L, handleOpenGIFPickerModal: P }),
                                }),
                            ],
                        }),
                        null != m
                            ? (0, n.jsx)(u.E, {
                                  className: eu.KQ,
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: m,
                              })
                            : null,
                    ],
                }),
                z && (0, n.jsx)(ee, { onComplete: k }),
                O && (0, n.jsx)(R.A, { uploadType: c, showUpsell: !0, position: "inline", className: eu.Lu }),
            ],
        }),
    });
}
