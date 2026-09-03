a.d(t, { default: () => ep });
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
    E = a(192308),
    g = a(793574),
    x = a(688810),
    C = a(753838),
    p = a(946274),
    R = a(10392),
    T = a(82498),
    j = a(702211),
    N = a(699576),
    _ = a(469054),
    v = a(866665),
    y = a(259678),
    F = a(241326),
    L = a(297264),
    S = a(289873),
    b = a(695366),
    I = a(661531),
    M = a(287809),
    H = a(101058),
    U = a(636537),
    w = a(765178),
    k = a(228366),
    D = a(157559),
    P = a(913122);
function O() {
    return { isFetching: !1, lastFetchedAt: null, error: null };
}
let G = [],
    z = O();
class V extends i.Ay.Store {
    static displayName = "RecentAvatarsStore";
    get isFetching() {
        return z.isFetching;
    }
    get fetchError() {
        return z.error;
    }
    get shouldFetch() {
        return Date.now() - (z.lastFetchedAt ?? 0) > 3e5 && !z.isFetching;
    }
    getAvatars() {
        return G;
    }
}
let B = new V(k.h, {
    RECENT_AVATARS_FETCH_START: function () {
        (z.isFetching = !0), (z.error = null);
    },
    RECENT_AVATARS_FETCH_SUCCESS: function (e) {
        let { avatars: t } = e;
        (G = t), (z.isFetching = !1), (z.lastFetchedAt = Date.now());
    },
    RECENT_AVATARS_FETCH_FAILURE: function (e) {
        let { error: t } = e;
        (z.isFetching = !1), (z.error = t);
    },
    RECENT_AVATARS_UPDATE: function () {
        z.lastFetchedAt = 0;
    },
    RECENT_AVATAR_DELETE: function (e) {
        let { avatarId: t } = e;
        G = G.filter((e) => e.id !== t);
    },
    LOGOUT: function () {
        (G = []), (z = O());
    },
});
var q = a(652215),
    J = a(375708);
async function X() {
    if (B.shouldFetch) {
        k.h.dispatch({ type: "RECENT_AVATARS_FETCH_START" });
        try {
            let e = await U.Bo.get({ url: q.Rsh.RECENT_AVATARS, rejectWithError: !0 });
            k.h.dispatch({
                type: "RECENT_AVATARS_FETCH_SUCCESS",
                avatars: e.body.avatars.map((e) => {
                    let { storage_hash: t, ...a } = e;
                    return { ...a, storageHash: t };
                }),
            });
        } catch (e) {
            k.h.dispatch({ type: "RECENT_AVATARS_FETCH_FAILURE", error: new P.LG(e) });
        }
    }
}
async function K(e) {
    try {
        await U.Bo.del({ url: q.Rsh.RECENT_AVATARS_DELETE(e), rejectWithError: !0 }),
            await k.h.dispatch({ type: "RECENT_AVATAR_DELETE", avatarId: e }),
            w.O.announce(J.intl.string(J.t.YJPieI));
    } catch (e) {
        D.A.show({ title: J.intl.string(J.t.iufib1), body: J.intl.string(J.t["/ZNT+0"]) });
    }
}
var W = a(778712),
    Z = a(595535),
    $ = a(486863);
function Y(e) {
    let { className: t, size: a = Z.q } = e,
        l = (0, W.FT)(a);
    return (0, n.jsx)("svg", {
        width: l,
        height: l,
        viewBox: `0 0 ${l} ${l}`,
        className: s()($.R, t),
        "aria-hidden": !0,
        children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M44.4505 50.6604C44.3703 50.7187 44.2897 50.7766 44.2088 50.8341C43.105 51.6191 41.9418 52.3261 40.7273 52.9469C36.9087 54.8989 32.583 56 28 56C23.417 56 19.0913 54.8989 15.2727 52.9469C15.2661 52.9436 15.2595 52.9402 15.253 52.9368C13.9566 52.2728 12.7189 51.5108 11.5495 50.6604C9.38994 49.0899 7.46354 47.2183 5.832 45.1072C5.467 44.6349 5.11675 44.1506 4.78196 43.6551C1.76288 39.1862 0 33.799 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 34.442 53.8244 40.376 50.168 45.1072C48.5365 47.2183 46.6101 49.0899 44.4505 50.6604ZM40.2456 47.3651C36.7036 49.6096 32.5036 50.9091 28 50.9091C23.4964 50.9091 19.2964 49.6096 15.7544 47.3651L16.3313 41.5957C16.3944 40.965 15.6427 40.6731 15.2985 41.2054C14.56 42.3472 13.7498 43.7851 13.0644 45.3716C11.1151 43.6941 9.4513 41.6942 8.15574 39.4546C12.1168 32.607 19.5204 28 28 28C36.4796 28 43.8832 32.607 47.8443 39.4546C46.5487 41.6942 44.8849 43.6941 42.9356 45.3716C42.2502 43.7851 41.44 42.3472 40.7015 41.2054C40.3573 40.6731 39.6056 40.965 39.6687 41.5957L40.2456 47.3651ZM28 25.4545C32.9204 25.4545 36.9091 21.4658 36.9091 16.5455C36.9091 11.6251 32.9204 7.63636 28 7.63636C23.0796 7.63636 19.0909 11.6251 19.0909 16.5455C19.0909 21.4658 23.0796 25.4545 28 25.4545Z",
        }),
    });
}
var Q = a(656925),
    ee = a(339984),
    et = a(421184);
function ea(e) {
    let { avatar: t, index: a, onSelectRecentAvatar: r, onDeleteRecentAvatar: s, avatarButtonRef: i } = e,
        { id: c, storageHash: u, description: d = J.intl.string(J.t.lqaIxI) } = t,
        { avatarSrc: h, eventHandlers: A } = (0, Q.A)({ avatarId: c, storageHash: u }),
        { onMouseEnter: m, onMouseLeave: f } = A,
        E = l.useRef(null),
        g = d ?? u.substring(0, 6).toUpperCase(),
        x = J.intl.formatToPlainString(J.t.tmJ75y, { orderNumber: a + 1, description: g }),
        C = J.intl.formatToPlainString(J.t.pBzwhc, { orderNumber: a + 1, description: g });
    return (0, n.jsxs)("div", {
        className: et.ge,
        children: [
            (0, n.jsx)(o.D, {
                onClick: () => r(t),
                onMouseEnter: m,
                onMouseLeave: f,
                className: et.Hk,
                "aria-label": x,
                innerRef: i,
                children: (0, n.jsx)("img", { src: h, alt: d, className: et.Hc }),
            }),
            (0, n.jsx)(v.m, {
                text: J.intl.string(J.t.N86XcP),
                anchorRef: E,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(y.vN, {
                    children: (0, n.jsx)("button", {
                        type: "button",
                        ref: E,
                        "aria-label": C,
                        onClick: (e) => s(e, a, c, u, C),
                        className: et.G5,
                        children: (0, n.jsx)(F.TrashIcon, { size: "xs", color: "currentColor", className: et.fy }),
                    }),
                }),
            }),
        ],
    });
}
function en(e) {
    let { avatars: t, onComplete: r, setFetchError: c, className: o, returnRef: u } = e,
        d = (0, i.bG)([M.default], () => M.default.getCurrentUser()),
        A = l.useRef([]),
        m = l.useRef(null),
        g = l.useRef(t.length),
        x = l.useRef(null),
        [C, p] = l.useState(!1),
        [R, T] = l.useState(!1),
        j = t.length,
        N = Math.max(6 - j, 0),
        _ = (0, f.k)(),
        v = l.useCallback(
            async (e) => {
                if (null == d || C) return;
                p(!0), c(null);
                let { id: t, storageHash: l, description: s } = e,
                    i = (0, H.Xp)({ userId: d.id, avatarId: t, storageHash: l, size: q.XAf, canAnimate: !0 });
                try {
                    let t = await fetch(i),
                        c = await t.blob(),
                        { filename: o, type: d } = (0, H.yM)(l, s);
                    (0, E.openModalLazy)(
                        async () => {
                            let { default: t } = await Promise.all([
                                a.e("722514"),
                                a.e("490978"),
                                a.e("196063"),
                                a.e("392028"),
                                a.e("124054"),
                                a.e("398791"),
                                a.e("655327"),
                                a.e("67702"),
                                a.e("1214"),
                                a.e("424199"),
                                a.e("188941"),
                                a.e("543039"),
                                a.e("721690"),
                                a.e("827708"),
                                a.e("295366"),
                                a.e("343437"),
                                a.e("948804"),
                                a.e("136022"),
                                a.e("988077"),
                                a.e("832817"),
                                a.e("561216"),
                                a.e("60898"),
                                a.e("343550"),
                                a.e("552712"),
                                a.e("829177"),
                                a.e("232551"),
                                a.e("892340"),
                                a.e("313681"),
                                a.e("417286"),
                                a.e("444376"),
                                a.e("770697"),
                                a.e("318546"),
                                a.e("894747"),
                                a.e("34472"),
                                a.e("165595"),
                                a.e("588940"),
                                a.e("858164"),
                                a.e("571470"),
                                a.e("837490"),
                                a.e("50342"),
                                a.e("463726"),
                                a.e("507406"),
                                a.e("455524"),
                                a.e("489908"),
                                a.e("574571"),
                                a.e("750348"),
                            ]).then(a.bind(a, 142630));
                            return (a) =>
                                (0, n.jsx)(t, {
                                    imageUri: i,
                                    file: new File([c], o, { type: d }),
                                    originalAsset: e,
                                    onCrop: r,
                                    uploadType: ee.HL.AVATAR,
                                    showUpsellHeader: !0,
                                    returnRef: u,
                                    ...a,
                                });
                        },
                        { contextKey: _ },
                    );
                } catch (e) {
                    c(J.intl.string(J.t.fZRH9P));
                } finally {
                    p(!1);
                }
            },
            [_, C, r, u, c, d],
        ),
        y = l.useCallback(
            (e, l, r, s, i) => {
                let c = l + 1 < t.length ? l + 1 : l - 1;
                (x.current = c >= 0 ? A.current[c] : m.current),
                    e.shiftKey
                        ? K(r)
                        : (T(!0),
                          (0, E.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([a.e("206130"), a.e("48944")]).then(
                                  a.bind(a, 555251),
                              );
                              return (t) => {
                                  let { onClose: a, ...l } = t;
                                  return (0, n.jsx)(e, {
                                      avatarId: r,
                                      storageHash: s,
                                      avatarDescription: i,
                                      onConfirmDelete: () => K(r),
                                      onClose: async () => {
                                          await a(),
                                              requestAnimationFrame(() => {
                                                  T(!1);
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
            R ||
                (t.length < g.current &&
                    null != x.current &&
                    requestAnimationFrame(() => {
                        x.current?.focus();
                    }),
                (g.current = t.length));
        }, [t.length, R]),
        (0, n.jsx)("div", {
            className: s()(et.AU, o),
            children: (0, n.jsxs)("div", {
                className: et.mE,
                children: [
                    j > 0 &&
                        (0, n.jsx)("ul", {
                            "aria-label": J.intl.string(J.t.lsU63N),
                            className: et.xL,
                            children: t.map((e, t) =>
                                (0, n.jsx)(
                                    "li",
                                    {
                                        children: (0, n.jsx)(ea, {
                                            avatar: e,
                                            index: t,
                                            onSelectRecentAvatar: v,
                                            onDeleteRecentAvatar: y,
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
                            className: et.wh,
                            tabIndex: -1,
                            ref: m,
                            children: [
                                (0, n.jsxs)(h.A, {
                                    children: [
                                        0 === j &&
                                            (0, n.jsxs)(n.Fragment, { children: [J.intl.string(J.t.x0DsRS), " "] }),
                                        J.intl.format(J.t["8W2HO3"], { numberOfEmptyAvatarSlots: N }),
                                    ],
                                }),
                                [...Array(N)].map((e, t) => (0, n.jsx)(Y, { className: et.rZ }, t)),
                            ],
                        }),
                ],
            }),
        })
    );
}
function el(e) {
    let { className: t, onComplete: a, returnRef: r } = e,
        {
            avatars: c,
            loading: o,
            error: d,
        } = (0, i.cf)([B], () => ({ avatars: B.getAvatars(), loading: B.isFetching, error: B.fetchError })),
        [h, A] = l.useState(null),
        m = h ?? d?.message;
    return (
        l.useEffect(() => {
            X();
        }, []),
        (0, n.jsxs)("div", {
            className: s()(et.kL, t),
            children: [
                (0, n.jsxs)("div", {
                    className: et.xk,
                    children: [
                        (0, n.jsx)(L.D, { variant: "text-md/medium", children: J.intl.string(J.t.Bnq9zK) }),
                        (0, n.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: J.intl.format(J.t["+CyJu3"], { recentAvatarsLimit: 6 }),
                        }),
                    ],
                }),
                o
                    ? (0, n.jsx)(S.y, { className: et.u1 })
                    : (0, n.jsx)(en, { avatars: c, onComplete: a, setFetchError: A, returnRef: r }),
                null != m &&
                    (0, n.jsxs)("div", {
                        className: et.gJ,
                        role: "alert",
                        children: [
                            (0, n.jsx)(b.E, { size: "xs", color: I.A.colors.TEXT_FEEDBACK_CRITICAL }),
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
var er = a(45837),
    es = a(71393),
    ei = a(967198),
    ec = a(174459),
    eo = a(473145),
    eu = a(158045);
function ed(e, t) {
    let { isGIF: a } = t;
    if (e === ee.HL.GUILD_BANNER) return a ? q.GuildFeatures.ANIMATED_BANNER : q.GuildFeatures.BANNER;
}
var eh = a(2553),
    eA = a(693591),
    em = a(925356);
let ef = [
    { gif: a(203736), png: a(775788) },
    { gif: a(640237), png: a(689006) },
    { gif: a(964805), png: a(533798) },
    { gif: a(322821), png: a(891814) },
];
function eE(e) {
    let { shouldAnimate: t } = e;
    return (0, n.jsx)("div", {
        className: em.p8,
        children: ef.map((e) =>
            (0, n.jsx)("div", { className: em.nX, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function eg(e) {
    let {
            className: t,
            onClick: a,
            onMouseEnter: r,
            onMouseLeave: i,
            guildFeature: c,
            guild: A,
            icon: m,
            label: f,
            shouldShowPremiumIcon: E,
            children: g,
        } = e,
        x = l.useId(),
        p = (function (e) {
            let { guildFeature: t, guild: a } = e;
            if (null == t || null == a) return;
            let n = (0, eo.Ys)(t),
                l = a.features.has(t);
            if (null == n) return;
            let r = (0, eo.gb)(n);
            return l
                ? J.intl.formatToPlainString(J.t.u3L3TX, { levelName: r })
                : J.intl.formatToPlainString(J.t["r/v25U"], { levelName: r });
        })({ guildFeature: c, guild: A }),
        R = null != A && null != c;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.D, {
                className: t,
                onClick: a,
                onMouseEnter: r,
                onMouseLeave: i,
                "aria-describedby": null != p ? x : void 0,
                children: [
                    g,
                    (0, n.jsxs)("div", {
                        className: s()(em.q3, { [em.j5]: R }),
                        children: [
                            (0, n.jsxs)("div", {
                                className: em.Mn,
                                children: [
                                    m,
                                    (0, n.jsxs)(u.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        className: s()(em.xo, { [em.Fy]: E }),
                                        children: [
                                            E &&
                                                (0, n.jsx)(d.t, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: em.T$,
                                                }),
                                            f,
                                        ],
                                    }),
                                    E && (0, n.jsx)(h.A, { children: `, ${J.intl.string(J.t["5AFxuK"])}` }),
                                ],
                            }),
                            R &&
                                (0, n.jsx)("div", {
                                    className: em.x9,
                                    "aria-hidden": !0,
                                    children: (0, n.jsx)(C.A, { guildFeature: c, guild: A, hideTooltip: !0 }),
                                }),
                        ],
                    }),
                ],
            }),
            null != p && (0, n.jsx)(h.A, { id: x, children: p }),
        ],
    });
}
function ex(e) {
    let {
            label: t,
            uploadType: a,
            guild: r,
            maxFileSizeBytes: i,
            filters: c,
            handleOpenImageEditingModal: o,
            handleFileSizeError: u,
        } = e,
        d = a === ee.HL.BANNER,
        h = ed(a, { isGIF: !1 }),
        m = l.useRef(null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: em.ls,
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
            (0, n.jsx)(eg, {
                className: s()(em.uK, em.kU),
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
function eC(e) {
    let { uploadType: t, guild: a, handleOpenGIFPickerModal: l } = e,
        { shouldAnimate: r, onMouseEnter: s, onMouseLeave: i } = (0, er.A)(),
        c = t === ee.HL.AVATAR || t === ee.HL.BANNER,
        o = ed(t, { isGIF: !0 });
    return (0, n.jsx)(eg, {
        className: em.uK,
        onClick: l,
        onMouseEnter: s,
        onMouseLeave: i,
        guildFeature: o,
        guild: a,
        icon: (0, n.jsx)(m.O, { size: "md", color: "currentColor" }),
        label: J.intl.string(J.t["xsC+/y"]),
        shouldShowPremiumIcon: c,
        children: (0, n.jsx)(eE, { shouldAnimate: r }),
    });
}
function ep(e) {
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
            imageSpecifications: v,
            modalTitle: y = J.intl.string(J.t.DToW4e),
            uploadOptionTitle: F = J.intl.string(J.t["MsUY/S"]),
            allowRecentAvatarsSelection: L = !0,
            returnRef: S,
        } = e,
        b = (0, i.bG)([M.default], () => M.default.getCurrentUser()),
        I = (0, i.bG)([ei.A], () => ei.A.getGuildId()),
        H = (0, i.bG)([es.A], () => es.A.getGuild(I)),
        U = (0, f.k)(),
        w = d === ee.HL.AVATAR || d === ee.HL.BANNER,
        k = !eu.Ay.canUseAnimatedAvatar(b) && d === ee.HL.AVATAR,
        D = (0, j.b)(!w),
        { analyticsLocations: P } = (0, x.Ay)(p, g.A.SELECT_IMAGE_MODAL),
        O = l.useCallback(
            (e) => {
                let {
                    assetOrigin: t = _.E.NEW_ASSET,
                    imageUri: a,
                    staticImageUri: n = a,
                    file: l,
                    originalAsset: i,
                    isFromTenor: c = !1,
                } = e;
                r(), s({ assetOrigin: t, imageUri: a, staticImageUri: n, file: l, originalAsset: i, isFromTenor: c });
            },
            [r, s],
        ),
        G = l.useCallback(
            (e, t) => {
                if ((o?.(t), t.type === eA.a.MP4)) return O({ imageUri: e, file: t });
                (0, E.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            a.e("722514"),
                            a.e("490978"),
                            a.e("196063"),
                            a.e("392028"),
                            a.e("124054"),
                            a.e("398791"),
                            a.e("655327"),
                            a.e("67702"),
                            a.e("1214"),
                            a.e("424199"),
                            a.e("188941"),
                            a.e("543039"),
                            a.e("721690"),
                            a.e("827708"),
                            a.e("295366"),
                            a.e("343437"),
                            a.e("948804"),
                            a.e("136022"),
                            a.e("988077"),
                            a.e("832817"),
                            a.e("561216"),
                            a.e("60898"),
                            a.e("343550"),
                            a.e("552712"),
                            a.e("829177"),
                            a.e("232551"),
                            a.e("892340"),
                            a.e("313681"),
                            a.e("417286"),
                            a.e("444376"),
                            a.e("770697"),
                            a.e("318546"),
                            a.e("894747"),
                            a.e("34472"),
                            a.e("165595"),
                            a.e("588940"),
                            a.e("858164"),
                            a.e("571470"),
                            a.e("837490"),
                            a.e("50342"),
                            a.e("463726"),
                            a.e("507406"),
                            a.e("455524"),
                            a.e("489908"),
                            a.e("574571"),
                            a.e("750348"),
                        ]).then(a.bind(a, 142630));
                        return (a) =>
                            (0, n.jsx)(l, {
                                imageUri: e,
                                file: t,
                                onCrop: O,
                                uploadType: d,
                                showUpsellHeader: A,
                                analyticsPage: C?.page,
                                returnRef: S,
                                ...a,
                            });
                    },
                    { contextKey: U },
                );
            },
            [C?.page, U, O, o, S, A, d],
        ),
        z = l.useCallback(() => {
            (0, eh.A)(h);
        }, [h]),
        V = l.useCallback(() => {
            (0, E.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        a.e("582012"),
                        a.e("401317"),
                        a.e("781821"),
                        a.e("722514"),
                        a.e("490978"),
                        a.e("196063"),
                        a.e("392028"),
                        a.e("124054"),
                        a.e("398791"),
                        a.e("655327"),
                        a.e("67702"),
                        a.e("942030"),
                        a.e("424199"),
                        a.e("188941"),
                        a.e("543039"),
                        a.e("721690"),
                        a.e("827708"),
                        a.e("295366"),
                        a.e("343437"),
                        a.e("136022"),
                        a.e("988077"),
                        a.e("832817"),
                        a.e("561216"),
                        a.e("60898"),
                        a.e("343550"),
                        a.e("552712"),
                        a.e("829177"),
                        a.e("232551"),
                        a.e("482815"),
                        a.e("170653"),
                        a.e("892340"),
                        a.e("313681"),
                        a.e("417286"),
                        a.e("444376"),
                        a.e("770697"),
                        a.e("318546"),
                        a.e("894747"),
                        a.e("34472"),
                        a.e("631825"),
                        a.e("165595"),
                        a.e("515168"),
                        a.e("588940"),
                        a.e("377766"),
                        a.e("88160"),
                        a.e("858164"),
                        a.e("571470"),
                        a.e("837490"),
                        a.e("463726"),
                        a.e("750348"),
                        a.e("475104"),
                    ]).then(a.bind(a, 672547));
                    return (t) =>
                        (0, n.jsx)(e, {
                            uploadType: d,
                            onComplete: (e) => {
                                let { imageUri: t, staticImageUri: a, file: n } = e;
                                return O({ imageUri: t, staticImageUri: a, file: n, isFromTenor: !0 });
                            },
                            showUpsellHeader: A,
                            analyticsPage: C?.page,
                            returnRef: S,
                            ...t,
                        });
                },
                { contextKey: U },
            );
        }, [C?.page, U, O, S, A, d]);
    l.useEffect(() => {
        k &&
            (ec.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: q.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: P,
            }),
            (0, R.sq)(q.U7l.PREMIUM_UPSELL_VIEWED, P, () => (0, T.uq)(q.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL))),
            ec.default.track(q.HAw.OPEN_MODAL, {
                type: q.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: C,
                location_stack: P,
                upload_type: d,
            });
    }, [k, C, P, d]);
    let B = A && D,
        X = L && d === ee.HL.AVATAR;
    return (0, n.jsx)(c.Modal, {
        transitionState: t,
        onClose: r,
        size: "md",
        title: y,
        actions: [],
        returnRef: S,
        children: (0, n.jsxs)("div", {
            className: em.jE,
            children: [
                (0, n.jsxs)("div", {
                    className: em.pd,
                    children: [
                        (0, n.jsxs)("ul", {
                            className: em.f9,
                            "aria-label": J.intl.string(J.t.iBnqtQ),
                            children: [
                                (0, n.jsx)("li", {
                                    children: (0, n.jsx)(ex, {
                                        label: F,
                                        uploadType: d,
                                        guild: H,
                                        handleOpenImageEditingModal: G,
                                        maxFileSizeBytes: h,
                                        filters: m,
                                        handleFileSizeError: z,
                                    }),
                                }),
                                (0, n.jsx)("li", {
                                    children: (0, n.jsx)(eC, { uploadType: d, guild: H, handleOpenGIFPickerModal: V }),
                                }),
                            ],
                        }),
                        null != v
                            ? (0, n.jsx)(u.E, {
                                  className: em.KQ,
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: v,
                              })
                            : null,
                    ],
                }),
                X && (0, n.jsx)(el, { onComplete: O, returnRef: S }),
                B && (0, n.jsx)(N.A, { uploadType: d, showUpsell: !0, position: "inline", className: em.Lu }),
            ],
        }),
    });
}
