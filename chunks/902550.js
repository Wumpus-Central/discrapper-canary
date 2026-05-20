a.d(t, { default: () => eC });
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
    g = a(140735),
    m = a(939249),
    f = a(391242),
    x = a(373495),
    C = a(192308),
    E = a(793574),
    p = a(688810),
    j = a(753838),
    T = a(946274),
    N = a(702211),
    R = a(699576),
    y = a(392107),
    _ = a(241326),
    v = a(452027),
    F = a(289873),
    b = a(287809),
    S = a(101058),
    L = a(636537),
    w = a(765178),
    H = a(228366),
    I = a(157559),
    M = a(913122);
let U = () => ({ isFetching: !1, lastFetchedAt: null, error: null }),
    k = [],
    D = U();
class P extends s.Ay.Store {
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
        return k;
    }
}
let O = new P(H.h, {
    RECENT_AVATARS_FETCH_START: function () {
        (D.isFetching = !0), (D.error = null);
    },
    RECENT_AVATARS_FETCH_SUCCESS: function (e) {
        let { avatars: t } = e;
        (k = t), (D.isFetching = !1), (D.lastFetchedAt = Date.now());
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
        k = k.filter((e) => e.id !== t);
    },
    LOGOUT: function () {
        (k = []), (D = U());
    },
});
var G = a(652215),
    z = a(375708);
async function V() {
    if (O.shouldFetch) {
        H.h.dispatch({ type: "RECENT_AVATARS_FETCH_START" });
        try {
            let e = await L.Bo.get({ url: G.Rsh.RECENT_AVATARS, rejectWithError: !0 });
            H.h.dispatch({
                type: "RECENT_AVATARS_FETCH_SUCCESS",
                avatars: e.body.avatars.map((e) => {
                    let { storage_hash: t, ...a } = e;
                    return { ...a, storageHash: t };
                }),
            });
        } catch (e) {
            H.h.dispatch({ type: "RECENT_AVATARS_FETCH_FAILURE", error: new M.LG(e) });
        }
    }
}
async function B(e) {
    try {
        await L.Bo.del({ url: G.Rsh.RECENT_AVATARS_DELETE(e), rejectWithError: !0 }),
            await H.h.dispatch({ type: "RECENT_AVATAR_DELETE", avatarId: e }),
            w.O.announce(z.intl.string(z.t.YJPieI));
    } catch (e) {
        I.A.show({ title: z.intl.string(z.t.iufib1), body: z.intl.string(z.t["/ZNT+0"]) });
    }
}
var q = a(778712),
    J = a(595535),
    W = a(915710);
function X(e) {
    let { className: t, size: a = J.q } = e,
        n = (0, q.FT)(a);
    return (0, l.jsx)("svg", {
        width: n,
        height: n,
        viewBox: `0 0 ${n} ${n}`,
        className: i()(W.R, t),
        "aria-hidden": !0,
        children: (0, l.jsx)("path", {
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
    let { avatar: t, index: a, onSelectRecentAvatar: r, onDeleteRecentAvatar: i, avatarButtonRef: s } = e,
        { id: o, storageHash: u, description: d = z.intl.string(z.t.lqaIxI) } = t,
        { avatarSrc: A, eventHandlers: g } = (0, Z.A)({ avatarId: o, storageHash: u }),
        { onMouseEnter: f, onMouseLeave: x } = g,
        C = n.useRef(null),
        E = d ?? u.substring(0, 6).toUpperCase(),
        p = z.intl.formatToPlainString(z.t.tmJ75y, { orderNumber: a + 1, description: E }),
        j = z.intl.formatToPlainString(z.t.pBzwhc, { orderNumber: a + 1, description: E });
    return (0, l.jsxs)("div", {
        className: $.ge,
        children: [
            (0, l.jsx)(m.D, {
                onClick: () => r(t),
                onMouseEnter: f,
                onMouseLeave: x,
                className: $.Hk,
                "aria-label": p,
                innerRef: s,
                children: (0, l.jsx)("img", { src: A, alt: d, className: $.Hc }),
            }),
            (0, l.jsx)(c.m, {
                text: z.intl.string(z.t.N86XcP),
                anchorRef: C,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, l.jsx)(h.vN, {
                    children: (0, l.jsx)("button", {
                        type: "button",
                        ref: C,
                        "aria-label": j,
                        onClick: (e) => i(e, a, o, u, j),
                        className: $.G5,
                        children: (0, l.jsx)(_.u, { size: "xs", color: "currentColor", className: $.fy }),
                    }),
                }),
            }),
        ],
    });
}
function Q(e) {
    let { avatars: t, onComplete: r, setFetchError: c, className: o } = e,
        u = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
        d = n.useRef([]),
        h = n.useRef(null),
        A = n.useRef(t.length),
        m = n.useRef(null),
        [f, E] = n.useState(!1),
        [p, j] = n.useState(!1),
        T = t.length,
        N = Math.max(6 - T, 0),
        R = (0, x.k)(),
        y = n.useCallback(
            async (e) => {
                if (null == u || f) return;
                E(!0), c(null);
                let { id: t, storageHash: n, description: i } = e,
                    s = (0, S.Xp)({
                        userId: u.id,
                        avatarId: t,
                        storageHash: n,
                        size: G.XAf,
                        canAnimate: !0,
                        allowWebp: !1,
                    });
                try {
                    let t = await fetch(s),
                        c = await t.blob(),
                        { filename: o, type: u } = (0, S.yM)(n, i);
                    (0, C.openModalLazy)(
                        async () => {
                            let { default: t } = await Promise.all([
                                a.e("8516"),
                                a.e("11377"),
                                a.e("98398"),
                                a.e("25812"),
                                a.e("8308"),
                                a.e("43662"),
                                a.e("24199"),
                                a.e("88941"),
                                a.e("43437"),
                                a.e("43039"),
                                a.e("48804"),
                                a.e("88077"),
                                a.e("18401"),
                                a.e("66900"),
                                a.e("13681"),
                                a.e("55314"),
                                a.e("89094"),
                                a.e("29177"),
                                a.e("32551"),
                                a.e("31658"),
                                a.e("46270"),
                                a.e("21690"),
                                a.e("44376"),
                                a.e("45723"),
                                a.e("70697"),
                                a.e("18546"),
                                a.e("38835"),
                                a.e("58164"),
                                a.e("71470"),
                                a.e("37490"),
                                a.e("50342"),
                                a.e("63726"),
                                a.e("7406"),
                                a.e("55524"),
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
                                    uploadType: K.HL.AVATAR,
                                    showUpsellHeader: !0,
                                    ...a,
                                });
                        },
                        { contextKey: R },
                    );
                } catch (e) {
                    c(z.intl.string(z.t.fZRH9P));
                } finally {
                    E(!1);
                }
            },
            [R, f, r, c, u],
        ),
        _ = n.useCallback(
            (e, n, r, i, s) => {
                let c = n + 1 < t.length ? n + 1 : n - 1;
                (m.current = c >= 0 ? d.current[c] : h.current),
                    e.shiftKey
                        ? B(r)
                        : (j(!0),
                          (0, C.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([a.e("42317"), a.e("26563")]).then(
                                  a.bind(a, 555251),
                              );
                              return (t) => {
                                  let { onClose: a, ...n } = t;
                                  return (0, l.jsx)(e, {
                                      avatarId: r,
                                      storageHash: i,
                                      avatarDescription: s,
                                      onConfirmDelete: () => B(r),
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
                    null != m.current &&
                    requestAnimationFrame(() => {
                        m.current?.focus();
                    }),
                (A.current = t.length));
        }, [t.length, p]),
        (0, l.jsx)("div", {
            className: i()($.AU, o),
            children: (0, l.jsxs)("div", {
                className: $.mE,
                children: [
                    T > 0 &&
                        (0, l.jsx)("ul", {
                            "aria-label": z.intl.string(z.t.lsU63N),
                            className: $.xL,
                            children: t.map((e, t) =>
                                (0, l.jsx)(
                                    "li",
                                    {
                                        children: (0, l.jsx)(Y, {
                                            avatar: e,
                                            index: t,
                                            onSelectRecentAvatar: y,
                                            onDeleteRecentAvatar: _,
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
                            className: $.wh,
                            tabIndex: -1,
                            ref: h,
                            children: [
                                (0, l.jsxs)(g.A, {
                                    children: [
                                        0 === T &&
                                            (0, l.jsxs)(l.Fragment, { children: [z.intl.string(z.t.x0DsRS), " "] }),
                                        z.intl.format(z.t["8W2HO3"], { numberOfEmptyAvatarSlots: N }),
                                    ],
                                }),
                                [...Array(N)].map((e, t) => (0, l.jsx)(X, { className: $.rZ }, t)),
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
            avatars: r,
            loading: c,
            error: o,
        } = (0, s.cf)([O], () => ({ avatars: O.getAvatars(), loading: O.isFetching, error: O.fetchError })),
        [u, d] = n.useState(null),
        h = u ?? o?.message;
    return (
        n.useEffect(() => {
            V();
        }, []),
        (0, l.jsx)("div", {
            className: i()($.kL, t),
            children: (0, l.jsx)(v.D, {
                label: z.intl.string(z.t.Bnq9zK),
                description: z.intl.format(z.t["+CyJu3"], { recentAvatarsLimit: 6 }),
                errorMessage: h,
                children: c
                    ? (0, l.jsx)(F.y, { className: $.u1 })
                    : (0, l.jsx)(Q, {
                          avatars: r,
                          onComplete: a,
                          setFetchError: d,
                          className: null != h ? $.JD : void 0,
                      }),
            }),
        })
    );
}
var et = a(45837),
    ea = a(71393),
    el = a(967198),
    en = a(174459),
    er = a(473145),
    ei = a(428262);
function es(e, t) {
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
function eh(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, l.jsx)("div", {
        className: eu.p8,
        children: ed.map((e) =>
            (0, l.jsx)("div", { className: eu.nX, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function eA(e) {
    let { guildFeature: t, guild: a } = e;
    if (null == t || null == a) return;
    let l = (0, er.Ys)(t),
        n = a.features.has(t);
    if (null == l) return;
    let r = (0, er.gb)(l);
    return n
        ? z.intl.formatToPlainString(z.t.u3L3TX, { levelName: r })
        : z.intl.formatToPlainString(z.t["r/v25U"], { levelName: r });
}
function eg(e) {
    let { guildFeature: t, guild: a } = e;
    return (0, l.jsx)("div", {
        className: eu.x9,
        children: (0, l.jsx)(j.A, { guildFeature: t, guild: a, hideTooltip: !0 }),
    });
}
function em(e) {
    let { icon: t, label: a, guildFeature: n, guild: r, shouldShowPremiumIcon: s } = e,
        o = null != r && null != n;
    return (0, l.jsxs)("div", {
        className: i()(eu.q3, { [eu.j5]: o }),
        "aria-hidden": !0,
        children: [
            (0, l.jsxs)("div", {
                className: eu.Mn,
                children: [
                    t,
                    (0, l.jsxs)(u.E, {
                        variant: "text-sm/semibold",
                        className: i()(eu.xo, { [eu.Fy]: s }),
                        children: [
                            s &&
                                (0, l.jsx)(c.m, {
                                    asContainer: !0,
                                    text: z.intl.string(z.t["5AFxuK"]),
                                    children: (0, l.jsx)(d.t, { size: "xs", color: "currentColor", className: eu.T$ }),
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
function ef(e) {
    let {
            label: t,
            uploadType: a,
            guild: n,
            maxFileSizeBytes: r,
            filters: s,
            handleOpenImageEditingModal: c,
            handleFileSizeError: o,
        } = e,
        u = a === K.HL.BANNER,
        d = es(a, { isGIF: !1 }),
        m = eA({ guildFeature: d, guild: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.vN, {
                within: !0,
                children: (0, l.jsxs)("div", {
                    className: i()(eu.uK, eu.kU),
                    children: [
                        (0, l.jsx)(em, {
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
            null != m && (0, l.jsx)(g.A, { children: m }),
        ],
    });
}
function ex(e) {
    let { uploadType: t, guild: a, handleOpenGIFPickerModal: n } = e,
        { shouldAnimate: r, onMouseEnter: i, onMouseLeave: s } = (0, et.A)(),
        c = t === K.HL.AVATAR || t === K.HL.BANNER,
        o = es(t, { isGIF: !0 }),
        u = eA({ guildFeature: o, guild: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(m.D, {
                className: eu.uK,
                onClick: n,
                "aria-label": z.intl.string(z.t["xsC+/y"]),
                onMouseEnter: i,
                onMouseLeave: s,
                children: [
                    (0, l.jsx)(eh, { shouldAnimate: r }),
                    (0, l.jsx)(em, {
                        icon: (0, l.jsx)(f.O, { size: "md", color: "currentColor" }),
                        label: z.intl.string(z.t["xsC+/y"]),
                        guildFeature: o,
                        guild: a,
                        shouldShowPremiumIcon: c,
                    }),
                ],
            }),
            null != u && (0, l.jsx)(g.A, { children: u }),
        ],
    });
}
function eC(e) {
    let {
            transitionState: t,
            onClose: r,
            onComplete: i,
            onFileSelected: c,
            uploadType: d,
            maxFileSizeBytes: h,
            showUpsellHeader: A,
            filters: g,
            analyticsLocation: m,
            analyticsLocations: f = [],
            imageSpecifications: j,
            modalTitle: T = z.intl.string(z.t.DToW4e),
            uploadOptionTitle: _ = z.intl.string(z.t["MsUY/S"]),
            allowRecentAvatarsSelection: v = !0,
        } = e,
        F = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
        S = (0, s.bG)([el.A], () => el.A.getGuildId()),
        L = (0, s.bG)([ea.A], () => ea.A.getGuild(S)),
        w = (0, x.k)(),
        H = d === K.HL.AVATAR || d === K.HL.BANNER,
        I = !ei.Ay.canUseAnimatedAvatar(F) && d === K.HL.AVATAR,
        M = (0, N.b)(!H),
        { analyticsLocations: U } = (0, p.Ay)(f, E.A.SELECT_IMAGE_MODAL),
        k = n.useCallback(
            (e) => {
                let { assetOrigin: t = y.E.NEW_ASSET, imageUri: a, file: l, originalAsset: n, isFromTenor: s = !1 } = e;
                r(), i({ assetOrigin: t, imageUri: a, file: l, originalAsset: n, isFromTenor: s });
            },
            [r, i],
        ),
        D = n.useCallback(
            (e, t) => {
                if ((c?.(t), t.type === eo.a.MP4)) return k({ imageUri: e, file: t });
                (0, C.openModalLazy)(
                    async () => {
                        let { default: n } = await Promise.all([
                            a.e("8516"),
                            a.e("11377"),
                            a.e("98398"),
                            a.e("25812"),
                            a.e("8308"),
                            a.e("43662"),
                            a.e("24199"),
                            a.e("88941"),
                            a.e("43437"),
                            a.e("43039"),
                            a.e("48804"),
                            a.e("88077"),
                            a.e("18401"),
                            a.e("66900"),
                            a.e("13681"),
                            a.e("55314"),
                            a.e("89094"),
                            a.e("29177"),
                            a.e("32551"),
                            a.e("31658"),
                            a.e("46270"),
                            a.e("21690"),
                            a.e("44376"),
                            a.e("45723"),
                            a.e("70697"),
                            a.e("18546"),
                            a.e("38835"),
                            a.e("58164"),
                            a.e("71470"),
                            a.e("37490"),
                            a.e("50342"),
                            a.e("63726"),
                            a.e("7406"),
                            a.e("55524"),
                            a.e("89908"),
                            a.e("74571"),
                            a.e("50348"),
                        ]).then(a.bind(a, 142630));
                        return (a) =>
                            (0, l.jsx)(n, {
                                imageUri: e,
                                file: t,
                                onCrop: k,
                                uploadType: d,
                                showUpsellHeader: A,
                                analyticsPage: m?.page,
                                ...a,
                            });
                    },
                    { contextKey: w },
                );
            },
            [m?.page, w, k, c, A, d],
        ),
        P = n.useCallback(() => {
            (0, ec.A)(h);
        }, [h]),
        O = n.useCallback(() => {
            (0, C.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        a.e("11377"),
                        a.e("71934"),
                        a.e("8516"),
                        a.e("98398"),
                        a.e("25812"),
                        a.e("8308"),
                        a.e("4067"),
                        a.e("24199"),
                        a.e("88941"),
                        a.e("43437"),
                        a.e("43039"),
                        a.e("88077"),
                        a.e("18401"),
                        a.e("66900"),
                        a.e("13681"),
                        a.e("55314"),
                        a.e("89094"),
                        a.e("29177"),
                        a.e("32551"),
                        a.e("31658"),
                        a.e("46270"),
                        a.e("21690"),
                        a.e("44376"),
                        a.e("70653"),
                        a.e("45723"),
                        a.e("70697"),
                        a.e("18546"),
                        a.e("38835"),
                        a.e("31825"),
                        a.e("68647"),
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
                                return k({ imageUri: t, file: a, isFromTenor: !0 });
                            },
                            showUpsellHeader: A,
                            analyticsPage: m?.page,
                            ...t,
                        });
                },
                { contextKey: w },
            );
        }, [m?.page, w, k, A, d]);
    n.useEffect(() => {
        I &&
            en.default.track(G.HAw.PREMIUM_UPSELL_VIEWED, {
                type: G.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: U,
            }),
            en.default.track(G.HAw.OPEN_MODAL, {
                type: G.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: m,
                location_stack: U,
                upload_type: d,
            });
    }, [I, m, U, d]);
    let V = A && M,
        B = v && d === K.HL.AVATAR;
    return (0, l.jsx)(o.Modal, {
        transitionState: t,
        onClose: r,
        size: "md",
        title: T,
        actions: [],
        children: (0, l.jsxs)("div", {
            className: eu.jE,
            children: [
                (0, l.jsxs)("div", {
                    className: eu.pd,
                    children: [
                        (0, l.jsxs)("ul", {
                            className: eu.f9,
                            "aria-label": z.intl.string(z.t.iBnqtQ),
                            children: [
                                (0, l.jsx)("li", {
                                    children: (0, l.jsx)(ef, {
                                        label: _,
                                        uploadType: d,
                                        guild: L,
                                        handleOpenImageEditingModal: D,
                                        maxFileSizeBytes: h,
                                        filters: g,
                                        handleFileSizeError: P,
                                    }),
                                }),
                                (0, l.jsx)("li", {
                                    children: (0, l.jsx)(ex, { uploadType: d, guild: L, handleOpenGIFPickerModal: O }),
                                }),
                            ],
                        }),
                        null != j
                            ? (0, l.jsx)(u.E, {
                                  className: eu.KQ,
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: j,
                              })
                            : null,
                    ],
                }),
                B && (0, l.jsx)(ee, { onComplete: k }),
                V && (0, l.jsx)(R.A, { uploadType: d, showUpsell: !0, position: "inline", className: eu.Lu }),
            ],
        }),
    });
}
