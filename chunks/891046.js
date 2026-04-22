"use strict";
n.d(t, { A: () => Y });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(602137),
    o = n(311907),
    d = n(827734),
    c = n(939249),
    u = n(834730),
    m = n(777666),
    h = n(707554),
    g = n(534514),
    x = n(247928),
    f = n(863610),
    _ = n(673698),
    p = n(782134),
    j = n(391242),
    b = n(191023),
    v = n(147192),
    C = n(47167),
    A = n(810181),
    N = n(234914),
    S = n(930125),
    E = n(282108),
    T = n(77350),
    y = n(294520),
    I = n(863439),
    w = n(291812),
    R = n(652176),
    k = n(253932),
    M = n(761640),
    L = n(734057),
    D = n(576705),
    P = n(994500),
    O = n(435470),
    F = n(473503),
    U = n(256265),
    z = n(710948),
    G = n(835369),
    B = n(414368),
    H = n(715493),
    V = n(313880),
    W = n(52933),
    q = n(848551),
    $ = n(505234),
    K = n(253913),
    X = n(652215),
    J = n(985018),
    Q = n(602823);
let Y = a.memo(function (e) {
    let {
            id: t,
            threadId: n,
            goToThread: a,
            overrideMedia: s,
            className: i,
            coords: r,
            gridCoords: d,
            gridSectionBoundaries: c,
            observePostVisibilityAnalytics: u,
        } = e,
        m = (0, o.bG)([L.A], () => L.A.getChannel(n));
    return null == m
        ? null
        : (0, l.jsx)(Z, {
              id: t,
              channel: m,
              goToThread: a,
              overrideMedia: s,
              className: i,
              coords: r,
              gridCoords: d,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: c,
          });
});
function Z(e) {
    let {
            id: t,
            channel: n,
            goToThread: s,
            overrideMedia: f,
            className: _,
            coords: p,
            gridCoords: j,
            gridSectionBoundaries: b,
            observePostVisibilityAnalytics: v,
        } = e,
        A = n.id,
        N = a.useRef(null),
        S = (0, o.bG)([M.Ay], () => M.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: E, loaded: T } = (0, F.OA)(n),
        y = (0, C.Ay)(n),
        { messageCountText: I } = (0, O.k6)(n),
        { isNew: w, hasUnreads: R } = (0, O.X5)(n),
        k = a.useRef(null),
        { handleLeftClick: L, handleRightClick: D } = (0, $.A)({ facepileRef: k, goToThread: s, channel: n });
    a.useEffect(() => {
        v?.(N.current, A);
    }, [v, A]);
    let P = (0, O.Mw)(n, r.T.CREATION_DATE, K.EG.POSTED_DURATION_AGO),
        U = (0, G.hf)(n),
        { onFocus: z, ...H } = (0, q.E)({ id: t, row: j.row, column: j.column, section: j.section, boundaries: b });
    return (0, l.jsxs)("li", {
        ref: N,
        onClick: L,
        onFocus: z,
        onContextMenu: D,
        className: i()(Q.kL, _, { [Q.nT]: S }),
        style: { ...p },
        children: [
            (0, l.jsx)(c.D, {
                onClick: L,
                focusProps: { ringTarget: N },
                onContextMenu: D,
                "aria-label": J.intl.formatToPlainString(J.t.pgYN6c, { title: y ?? "", count: I }),
                className: Q.Kv,
                ...H,
            }),
            (0, l.jsxs)("div", {
                className: Q.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: Q.Y6,
                        children: [
                            (0, l.jsxs)("div", {
                                className: Q.wO,
                                children: [
                                    (0, l.jsx)(V.A, { channel: n, message: E }),
                                    (0, l.jsx)(u.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: Q.SD,
                                        children: P,
                                    }),
                                ],
                            }),
                            w
                                ? (0, l.jsx)(m.Lp, {
                                      className: Q.Ad,
                                      color: d.A.unsafe_rawColors.BRAND_260.css,
                                      text: J.intl.string(J.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, l.jsx)(h.F, {
                        children: (0, l.jsx)(g.D, {
                            variant: "heading-md/extrabold",
                            className: Q.DD,
                            color: R ? "text-strong" : "text-muted",
                            style: { width: `${p.width - 2 * B.qf}px` },
                            children: U,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: Q.PU,
                children: (0, l.jsx)(x.M, {
                    children: (0, l.jsx)(ee, {
                        channel: n,
                        firstMessage: E,
                        isFirstMessageLoaded: T,
                        overrideMedia: f,
                        coords: p,
                    }),
                }),
            }),
            (0, l.jsx)("div", {
                className: Q.qr,
                children: (0, l.jsx)(x.M, {
                    children: (0, l.jsx)(en, { channel: n, firstMessage: E, facepileRef: k }),
                }),
            }),
        ],
    });
}
function ee(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: a, overrideMedia: s, coords: i } = e,
        { isBlocked: r, isIgnored: d } = (0, o.cf)([P.A], () => ({
            isBlocked: null != n && P.A.isBlockedForMessage(n),
            isIgnored: null != n && P.A.isIgnoredForMessage(n),
        }));
    return r
        ? (0, l.jsx)(eo, { message: J.intl.string(J.t.Lkp2fB), containerWidth: i.width, channel: t })
        : d
          ? (0, l.jsx)(eo, { message: J.intl.string(J.t.yWK7ZM), containerWidth: i.width, channel: t })
          : (0, l.jsx)(et, { channel: t, firstMessage: n, isFirstMessageLoaded: a, overrideMedia: s, coords: i });
}
function et(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: a, overrideMedia: s, coords: i } = e,
        r = (0, o.bG)([L.A], () => L.A.getChannel(t.parent_id)),
        { firstMedia: d } = (0, O.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: c } = (0, O.X5)(t),
        u = (0, o.bG)([D.A], () => D.A.can(X.xBc.MANAGE_MESSAGES, t)),
        m = k.kt.useSetting(),
        h = k.gs.useSetting(),
        g = (0, I.A)(h, u),
        x = (0, U.no)(n, r, !1),
        f = t.isMediaPost(),
        [_, p] = (0, B.tm)(i.width - 2 * B.IZ, f ? B.PL.SIXTEEN_BY_NINE : B.PL.THREE_BY_TWO);
    return n?.blocked || null == (s ?? d)
        ? (0, l.jsx)(er, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: a,
              containerWidth: i.width,
              hasUnreads: c,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(es, {
                      mediaAttachments: x,
                      globalSpoilerRenderSetting: g,
                      containerWidth: _,
                      containerHeight: p,
                      canAutoPlay: m,
                      shouldMaintainAspectRatio: f,
                  }),
                  (0, l.jsx)("div", {
                      className: Q.GA,
                      children: (0, l.jsx)(W.Ay, { channel: t, tagsClassName: Q.uU }),
                  }),
              ],
          });
}
function en(e) {
    let { channel: t, facepileRef: n, firstMessage: a } = e,
        s = (0, A.m)(t.id),
        i = a?.reactions != null && a.reactions.length > 0;
    return (0, l.jsxs)("div", {
        className: Q.GD,
        children: [
            (0, l.jsxs)("div", {
                className: Q.QW,
                children: [
                    (0, l.jsx)("div", {
                        className: Q.mz,
                        children: (0, l.jsx)(G.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    s.length > 0
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("span", { className: Q.xE, children: "•" }),
                                  (0, l.jsxs)("div", {
                                      className: Q.IW,
                                      children: [
                                          (0, l.jsx)(G.gL, { channel: t, userIds: s, facepileRef: n }),
                                          (0, l.jsx)("div", {
                                              className: Q.r$,
                                              children: (0, l.jsx)(f.n, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, l.jsx)(v.Ay, { channel: t, className: Q.mD, renderDots: !1 }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, l.jsxs)("div", {
                className: Q.QW,
                children: [
                    i || null == a ? null : (0, l.jsx)(G.NA, { firstMessage: a, channel: t }),
                    null == a ? null : (0, l.jsx)(G.cn, { firstMessage: a, channel: t }),
                ],
            }),
        ],
    });
}
let el = (e) => e.preventDefault(),
    ea = a.memo(function (e) {
        return (0, l.jsx)(l.Fragment, { children: (0, R.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }) });
    }),
    es = a.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: s,
                containerHeight: r,
                canAutoPlay: o,
                shouldMaintainAspectRatio: d = !1,
            } = e,
            { containsVideo: c, containsGif: u } = a.useMemo(() => (0, U.$2)(t), [t]),
            m = a.useMemo(() => t.slice(H.xA, H.lV), [t]),
            h = (0, H.eX)({ numAttachments: m.length, containerWidth: s, containerHeight: r }),
            g = (0, H.p2)({ imageContainerStyles: h, containerWidth: s, containerHeight: r }),
            x = (0, E.O8)(S.v.GUILD),
            f = a.useMemo(
                () =>
                    m.map((e, t) => {
                        let [a, s] = (0, y.K6)(e, !n, x),
                            r = (0, y.rx)(s),
                            m = {
                                ...g[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && a ? r : e.alt,
                                onClick: el,
                                shouldRenderAccessory: !u && !c,
                            },
                            f = (0, T.ge)(e.src) ? `${e.src}?format=png` : e.src,
                            p = o && !a ? e.src : f;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: Q.UV,
                                style: h[t],
                                children: [
                                    d
                                        ? (0, l.jsx)(N.A, {
                                              ...m,
                                              src: p,
                                              backgroundSrc: f,
                                              aspectRatio: m.maxWidth / m.maxHeight,
                                              alt: m.alt ?? "",
                                              className: i()(Q.EN, { [Q.cd]: a }),
                                              imageChildClassName: Q.Rp,
                                          })
                                        : e.src.startsWith("data:")
                                          ? (0, l.jsx)(_._, {
                                                ...m,
                                                className: Q.il,
                                                imageClassName: i()(Q.LW, { [Q.cd]: a }),
                                            })
                                          : (0, l.jsx)(ea, {
                                                ...m,
                                                autoPlay: o && !a,
                                                containerClassName: Q.EK,
                                                imageClassName: i()(Q.rp, { [Q.cd]: a }),
                                                responsive: !0,
                                            }),
                                    a &&
                                        (0, l.jsx)("div", {
                                            className: Q.X,
                                            children: (0, l.jsx)(z.A, { obscureReason: s, iconClassname: Q.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, u, c, n, h, g, m, d, x],
            );
        return (0, l.jsxs)("div", {
            className: Q.pV,
            style: { width: s, height: r },
            children: [
                f,
                (u || c) &&
                    (0, l.jsxs)("div", {
                        className: Q.vz,
                        children: [
                            c &&
                                (0, l.jsx)(p.u, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: Q.cU,
                                }),
                            u &&
                                (0, l.jsx)(j.O, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: Q.cU,
                                }),
                        ],
                    }),
                t.length > H.Mm &&
                    (0, l.jsx)(ei, {
                        text: (t.length - H.Mm).toString(),
                        icon: b.x,
                        pillClassName: Q.v3,
                        iconClassName: Q.In,
                        textClassName: Q.EY,
                    }),
            ],
        });
    });
function ei(e) {
    let { text: t, icon: n, pillClassName: a, iconClassName: s, textClassName: i } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)(n, { className: s, color: "currentColor" }),
            (0, l.jsxs)(u.E, { variant: "text-xs/medium", className: i, children: ["+", t] }),
        ],
    });
}
function er(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: s, containerWidth: r, hasUnreads: o } = e,
        d = k.hH.useSetting(),
        [c, m] = (0, B.tm)(r - 2 * B.IZ),
        { content: h } = (0, O.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: g } = (0, W.BA)({ channel: t, isNew: !1 }),
        x = a.useMemo(() => ({ width: c, height: m }), [c, m]),
        f = o ? Q.kR : Q.b8;
    return (0, l.jsxs)("div", {
        className: Q.Cv,
        style: x,
        children: [
            (0, l.jsxs)("div", {
                className: Q.Qs,
                children: [
                    s &&
                        null == n &&
                        (0, l.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: J.intl.string(J.t.mE3KJN),
                        }),
                    s && null != n && (0, l.jsx)(w.Ay, { message: n, content: h, className: f, compact: d }),
                ],
            }),
            (0, l.jsx)("div", {
                className: i()(Q.kh, { [Q.ZH]: !g }),
                children: g ? (0, l.jsx)(W.Ay, { channel: t, tagsClassName: Q.uU }) : null,
            }),
        ],
    });
}
function eo(e) {
    let { message: t, containerWidth: n, channel: s } = e,
        [r, o] = (0, B.tm)(n - 2 * B.IZ),
        { shouldRenderTagsRow: d } = (0, W.BA)({ channel: s, isNew: !1 }),
        c = a.useMemo(() => ({ width: r, height: o }), [r, o]);
    return (0, l.jsxs)("div", {
        className: Q.Cv,
        style: c,
        children: [
            (0, l.jsx)("div", {
                className: Q.Qs,
                children: (0, l.jsx)(u.E, {
                    className: Q.Wv,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, l.jsx)("div", {
                className: i()(Q.kh, { [Q.ZH]: !d }),
                children: d ? (0, l.jsx)(W.Ay, { channel: s, tagsClassName: Q.uU }) : null,
            }),
        ],
    });
}
