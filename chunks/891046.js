"use strict";
n.d(t, { A: () => H });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(602137),
    o = n(311907),
    d = n(827734),
    c = n(397927),
    u = n(147192),
    m = n(47167),
    h = n(810181),
    x = n(234914),
    g = n(930125),
    f = n(282108),
    _ = n(77350),
    p = n(294520),
    j = n(863439),
    b = n(291812),
    v = n(652176),
    A = n(253932),
    C = n(761640),
    T = n(734057),
    N = n(576705),
    S = n(994500),
    y = n(435470),
    E = n(473503),
    I = n(256265),
    R = n(710948),
    M = n(835369),
    w = n(414368),
    k = n(715493),
    L = n(313880),
    P = n(52933),
    D = n(848551),
    O = n(505234),
    F = n(253913),
    U = n(652215),
    G = n(985018),
    z = n(15175);
let H = i.memo(function (e) {
    let {
            id: t,
            threadId: n,
            goToThread: i,
            overrideMedia: s,
            className: a,
            coords: r,
            gridCoords: d,
            gridSectionBoundaries: c,
            observePostVisibilityAnalytics: u,
        } = e,
        m = (0, o.bG)([T.A], () => T.A.getChannel(n));
    return null == m
        ? null
        : (0, l.jsx)(B, {
              id: t,
              channel: m,
              goToThread: i,
              overrideMedia: s,
              className: a,
              coords: r,
              gridCoords: d,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: c,
          });
});
function B(e) {
    let {
            id: t,
            channel: n,
            goToThread: s,
            overrideMedia: u,
            className: h,
            coords: x,
            gridCoords: g,
            gridSectionBoundaries: f,
            observePostVisibilityAnalytics: _,
        } = e,
        p = n.id,
        j = i.useRef(null),
        b = (0, o.bG)([C.Ay], () => C.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: v, loaded: A } = (0, E.OA)(n),
        T = (0, m.Ay)(n),
        { messageCountText: N } = (0, y.k6)(n),
        { isNew: S, hasUnreads: I } = (0, y.X5)(n),
        R = i.useRef(null),
        { handleLeftClick: k, handleRightClick: P } = (0, O.A)({ facepileRef: R, goToThread: s, channel: n });
    i.useEffect(() => {
        _?.(j.current, p);
    }, [_, p]);
    let U = (0, y.Mw)(n, r.T.CREATION_DATE, F.EG.POSTED_DURATION_AGO),
        H = (0, M.hf)(n),
        { onFocus: B, ...W } = (0, D.E)({ id: t, row: g.row, column: g.column, section: g.section, boundaries: f });
    return (0, l.jsxs)("li", {
        ref: j,
        onClick: k,
        onFocus: B,
        onContextMenu: P,
        className: a()(z.kL, h, { [z.nT]: b }),
        style: { ...x },
        children: [
            (0, l.jsx)(c.DUT, {
                onClick: k,
                focusProps: { ringTarget: j },
                onContextMenu: P,
                "aria-label": G.intl.formatToPlainString(G.t.pgYN6c, { title: T ?? "", count: N }),
                className: z.Kv,
                ...W,
            }),
            (0, l.jsxs)("div", {
                className: z.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: z.Y6,
                        children: [
                            (0, l.jsxs)("div", {
                                className: z.wO,
                                children: [
                                    (0, l.jsx)(L.A, { channel: n, message: v }),
                                    (0, l.jsx)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: z.SD,
                                        children: U,
                                    }),
                                ],
                            }),
                            S
                                ? (0, l.jsx)(c.LpS, {
                                      className: z.Ad,
                                      color: d.A.unsafe_rawColors.BRAND_260.css,
                                      text: G.intl.string(G.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, l.jsx)(c.Fmo, {
                        children: (0, l.jsx)(c.Heading, {
                            variant: "heading-md/extrabold",
                            className: z.DD,
                            color: I ? "text-strong" : "text-muted",
                            style: { width: `${x.width - 2 * w.qf}px` },
                            children: H,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: z.PU,
                children: (0, l.jsx)(c.M1G, {
                    children: (0, l.jsx)(V, {
                        channel: n,
                        firstMessage: v,
                        isFirstMessageLoaded: A,
                        overrideMedia: u,
                        coords: x,
                    }),
                }),
            }),
            (0, l.jsx)("div", {
                className: z.qr,
                children: (0, l.jsx)(c.M1G, {
                    children: (0, l.jsx)(K, { channel: n, firstMessage: v, facepileRef: R }),
                }),
            }),
        ],
    });
}
function V(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: i, overrideMedia: s, coords: a } = e,
        { isBlocked: r, isIgnored: d } = (0, o.cf)([S.A], () => ({
            isBlocked: null != n && S.A.isBlockedForMessage(n),
            isIgnored: null != n && S.A.isIgnoredForMessage(n),
        }));
    return r
        ? (0, l.jsx)(Y, { message: G.intl.string(G.t.Lkp2fB), containerWidth: a.width, channel: t })
        : d
          ? (0, l.jsx)(Y, { message: G.intl.string(G.t.yWK7ZM), containerWidth: a.width, channel: t })
          : (0, l.jsx)(W, { channel: t, firstMessage: n, isFirstMessageLoaded: i, overrideMedia: s, coords: a });
}
function W(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: i, overrideMedia: s, coords: a } = e,
        r = (0, o.bG)([T.A], () => T.A.getChannel(t.parent_id)),
        { firstMedia: d } = (0, y.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: c } = (0, y.X5)(t),
        u = (0, o.bG)([N.A], () => N.A.can(U.xBc.MANAGE_MESSAGES, t)),
        m = A.kt.useSetting(),
        h = A.gs.useSetting(),
        x = (0, j.A)(h, u),
        g = (0, I.no)(n, r, !1),
        f = t.isMediaPost(),
        [_, p] = (0, w.tm)(a.width - 2 * w.IZ, f ? w.PL.SIXTEEN_BY_NINE : w.PL.THREE_BY_TWO);
    return n?.blocked || null == (s ?? d)
        ? (0, l.jsx)(Q, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: i,
              containerWidth: a.width,
              hasUnreads: c,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(J, {
                      mediaAttachments: g,
                      globalSpoilerRenderSetting: x,
                      containerWidth: _,
                      containerHeight: p,
                      canAutoPlay: m,
                      shouldMaintainAspectRatio: f,
                  }),
                  (0, l.jsx)("div", {
                      className: z.GA,
                      children: (0, l.jsx)(P.Ay, { channel: t, tagsClassName: z.uU }),
                  }),
              ],
          });
}
function K(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        s = (0, h.m)(t.id),
        a = i?.reactions != null && i.reactions.length > 0;
    return (0, l.jsxs)("div", {
        className: z.GD,
        children: [
            (0, l.jsxs)("div", {
                className: z.QW,
                children: [
                    (0, l.jsx)("div", {
                        className: z.mz,
                        children: (0, l.jsx)(M.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    s.length > 0
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("span", { className: z.xE, children: "•" }),
                                  (0, l.jsxs)("div", {
                                      className: z.IW,
                                      children: [
                                          (0, l.jsx)(M.gL, { channel: t, userIds: s, facepileRef: n }),
                                          (0, l.jsx)("div", {
                                              className: z.r$,
                                              children: (0, l.jsx)(c.nvX, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, l.jsx)(u.Ay, { channel: t, className: z.mD, renderDots: !1 }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, l.jsxs)("div", {
                className: z.QW,
                children: [
                    a || null == i ? null : (0, l.jsx)(M.NA, { firstMessage: i, channel: t }),
                    null == i ? null : (0, l.jsx)(M.cn, { firstMessage: i, channel: t }),
                ],
            }),
        ],
    });
}
let q = (e) => e.preventDefault(),
    $ = i.memo(function (e) {
        return (0, l.jsx)(l.Fragment, { children: (0, v.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }) });
    }),
    J = i.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: s,
                containerHeight: r,
                canAutoPlay: o,
                shouldMaintainAspectRatio: d = !1,
            } = e,
            { containsVideo: u, containsGif: m } = i.useMemo(() => (0, I.$2)(t), [t]),
            h = i.useMemo(() => t.slice(k.xA, k.lV), [t]),
            j = (0, k.eX)({ numAttachments: h.length, containerWidth: s, containerHeight: r }),
            b = (0, k.p2)({ imageContainerStyles: j, containerWidth: s, containerHeight: r }),
            v = (0, f.O8)(g.v.GUILD),
            A = i.useMemo(
                () =>
                    h.map((e, t) => {
                        let [i, s] = (0, p.K6)(e, !n, v),
                            r = (0, p.rx)(s),
                            h = {
                                ...b[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && i ? r : e.alt,
                                onClick: q,
                                shouldRenderAccessory: !m && !u,
                            },
                            g = (0, _.ge)(e.src) ? `${e.src}?format=png` : e.src,
                            f = o && !i ? e.src : g;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: z.UV,
                                style: j[t],
                                children: [
                                    d
                                        ? (0, l.jsx)(x.A, {
                                              ...h,
                                              src: f,
                                              backgroundSrc: g,
                                              aspectRatio: h.maxWidth / h.maxHeight,
                                              alt: h.alt ?? "",
                                              className: a()(z.EN, { [z.cd]: i }),
                                              imageChildClassName: z.Rp,
                                          })
                                        : e.src.startsWith("data:")
                                          ? (0, l.jsx)(c._V3, {
                                                ...h,
                                                className: z.il,
                                                imageClassName: a()(z.LW, { [z.cd]: i }),
                                            })
                                          : (0, l.jsx)($, {
                                                ...h,
                                                autoPlay: o && !i,
                                                containerClassName: z.EK,
                                                imageClassName: a()(z.rp, { [z.cd]: i }),
                                                responsive: !0,
                                            }),
                                    i &&
                                        (0, l.jsx)("div", {
                                            className: z.X,
                                            children: (0, l.jsx)(R.A, { obscureReason: s, iconClassname: z.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, m, u, n, j, b, h, d, v],
            );
        return (0, l.jsxs)("div", {
            className: z.pV,
            style: { width: s, height: r },
            children: [
                A,
                (m || u) &&
                    (0, l.jsxs)("div", {
                        className: z.vz,
                        children: [
                            u &&
                                (0, l.jsx)(c.udU, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: z.cU,
                                }),
                            m &&
                                (0, l.jsx)(c.Osp, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: z.cU,
                                }),
                        ],
                    }),
                t.length > k.Mm &&
                    (0, l.jsx)(X, {
                        text: (t.length - k.Mm).toString(),
                        icon: c.xfq,
                        pillClassName: z.v3,
                        iconClassName: z.In,
                        textClassName: z.EY,
                    }),
            ],
        });
    });
function X(e) {
    let { text: t, icon: n, pillClassName: i, iconClassName: s, textClassName: a } = e;
    return (0, l.jsxs)("div", {
        className: i,
        children: [
            (0, l.jsx)(n, { className: s, color: "currentColor" }),
            (0, l.jsxs)(c.Text, { variant: "text-xs/medium", className: a, children: ["+", t] }),
        ],
    });
}
function Q(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: s, containerWidth: r, hasUnreads: o } = e,
        d = A.hH.useSetting(),
        [u, m] = (0, w.tm)(r - 2 * w.IZ),
        { content: h } = (0, y.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: x } = (0, P.BA)({ channel: t, isNew: !1 }),
        g = i.useMemo(() => ({ width: u, height: m }), [u, m]),
        f = o ? z.kR : z.b8;
    return (0, l.jsxs)("div", {
        className: z.Cv,
        style: g,
        children: [
            (0, l.jsxs)("div", {
                className: z.Qs,
                children: [
                    s &&
                        null == n &&
                        (0, l.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: G.intl.string(G.t.mE3KJN),
                        }),
                    s && null != n && (0, l.jsx)(b.Ay, { message: n, content: h, className: f, compact: d }),
                ],
            }),
            (0, l.jsx)("div", {
                className: a()(z.kh, { [z.ZH]: !x }),
                children: x ? (0, l.jsx)(P.Ay, { channel: t, tagsClassName: z.uU }) : null,
            }),
        ],
    });
}
function Y(e) {
    let { message: t, containerWidth: n, channel: s } = e,
        [r, o] = (0, w.tm)(n - 2 * w.IZ),
        { shouldRenderTagsRow: d } = (0, P.BA)({ channel: s, isNew: !1 }),
        u = i.useMemo(() => ({ width: r, height: o }), [r, o]);
    return (0, l.jsxs)("div", {
        className: z.Cv,
        style: u,
        children: [
            (0, l.jsx)("div", {
                className: z.Qs,
                children: (0, l.jsx)(c.Text, {
                    className: z.Wv,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, l.jsx)("div", {
                className: a()(z.kh, { [z.ZH]: !d }),
                children: d ? (0, l.jsx)(P.Ay, { channel: s, tagsClassName: z.uU }) : null,
            }),
        ],
    });
}
