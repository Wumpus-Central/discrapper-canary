"use strict";
n.d(t, { A: () => z });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(602137),
    o = n(311907),
    d = n(827734),
    c = n(397927),
    u = n(147192),
    m = n(810181),
    h = n(234914),
    x = n(930125),
    g = n(282108),
    f = n(77350),
    p = n(294520),
    _ = n(863439),
    j = n(291812),
    b = n(652176),
    v = n(253932),
    A = n(761640),
    C = n(734057),
    T = n(576705),
    N = n(994500),
    S = n(435470),
    y = n(473503),
    E = n(256265),
    I = n(710948),
    R = n(835369),
    M = n(414368),
    k = n(715493),
    w = n(313880),
    L = n(52933),
    P = n(848551),
    D = n(505234),
    O = n(253913),
    F = n(652215),
    U = n(985018),
    G = n(368964);
let z = i.memo(function (e) {
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
        m = (0, o.bG)([C.A], () => C.A.getChannel(n));
    return null == m
        ? null
        : (0, l.jsx)(H, {
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
function H(e) {
    let {
            id: t,
            channel: n,
            goToThread: s,
            overrideMedia: u,
            className: m,
            coords: h,
            gridCoords: x,
            gridSectionBoundaries: g,
            observePostVisibilityAnalytics: f,
        } = e,
        p = n.id,
        _ = i.useRef(null),
        j = (0, o.bG)([A.Ay], () => A.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: b, loaded: v } = (0, y.OA)(n),
        { messageCountText: C } = (0, S.k6)(n),
        { isNew: T, hasUnreads: N } = (0, S.X5)(n),
        E = i.useRef(null),
        { handleLeftClick: I, handleRightClick: k } = (0, D.A)({ facepileRef: E, goToThread: s, channel: n });
    i.useEffect(() => {
        f?.(_.current, p);
    }, [f, p]);
    let L = (0, S.Mw)(n, r.T.CREATION_DATE, O.EG.POSTED_DURATION_AGO),
        F = (0, R.hf)(n),
        { onFocus: z, ...H } = (0, P.E)({ id: t, row: x.row, column: x.column, section: x.section, boundaries: g });
    return (0, l.jsxs)("li", {
        ref: _,
        onClick: I,
        onFocus: z,
        onContextMenu: k,
        className: a()(G.kL, m, { [G.nT]: j }),
        style: { ...h },
        children: [
            (0, l.jsx)(c.DUT, {
                onClick: I,
                focusProps: { ringTarget: _ },
                onContextMenu: k,
                "aria-label": U.intl.formatToPlainString(U.t.pgYN6c, { title: n.name, count: C }),
                className: G.Kv,
                ...H,
            }),
            (0, l.jsxs)("div", {
                className: G.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: G.Y6,
                        children: [
                            (0, l.jsxs)("div", {
                                className: G.wO,
                                children: [
                                    (0, l.jsx)(w.A, { channel: n, message: b }),
                                    (0, l.jsx)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: G.SD,
                                        children: L,
                                    }),
                                ],
                            }),
                            T
                                ? (0, l.jsx)(c.LpS, {
                                      className: G.Ad,
                                      color: d.A.unsafe_rawColors.BRAND_260.css,
                                      text: U.intl.string(U.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, l.jsx)(c.Fmo, {
                        children: (0, l.jsx)(c.Heading, {
                            variant: "heading-md/extrabold",
                            className: G.DD,
                            color: N ? "text-strong" : "text-muted",
                            style: { width: `${h.width - 2 * M.qf}px` },
                            children: F,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: G.PU,
                children: (0, l.jsx)(c.M1G, {
                    children: (0, l.jsx)(B, {
                        channel: n,
                        firstMessage: b,
                        isFirstMessageLoaded: v,
                        overrideMedia: u,
                        coords: h,
                    }),
                }),
            }),
            (0, l.jsx)("div", {
                className: G.qr,
                children: (0, l.jsx)(c.M1G, {
                    children: (0, l.jsx)(W, { channel: n, firstMessage: b, facepileRef: E }),
                }),
            }),
        ],
    });
}
function B(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: i, overrideMedia: s, coords: a } = e,
        { isBlocked: r, isIgnored: d } = (0, o.cf)([N.A], () => ({
            isBlocked: null != n && N.A.isBlockedForMessage(n),
            isIgnored: null != n && N.A.isIgnoredForMessage(n),
        }));
    return r
        ? (0, l.jsx)(Q, { message: U.intl.string(U.t.Lkp2fB), containerWidth: a.width, channel: t })
        : d
          ? (0, l.jsx)(Q, { message: U.intl.string(U.t.yWK7ZM), containerWidth: a.width, channel: t })
          : (0, l.jsx)(V, { channel: t, firstMessage: n, isFirstMessageLoaded: i, overrideMedia: s, coords: a });
}
function V(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: i, overrideMedia: s, coords: a } = e,
        r = (0, o.bG)([C.A], () => C.A.getChannel(t.parent_id)),
        { firstMedia: d } = (0, S.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: c } = (0, S.X5)(t),
        u = (0, o.bG)([T.A], () => T.A.can(F.xBc.MANAGE_MESSAGES, t)),
        m = v.kt.useSetting(),
        h = v.gs.useSetting(),
        x = (0, _.A)(h, u),
        g = (0, E.no)(n, r, !1),
        f = t.isMediaPost(),
        [p, j] = (0, M.tm)(a.width - 2 * M.IZ, f ? M.PL.SIXTEEN_BY_NINE : M.PL.THREE_BY_TWO);
    return n?.blocked || null == (s ?? d)
        ? (0, l.jsx)(X, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: i,
              containerWidth: a.width,
              hasUnreads: c,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)($, {
                      mediaAttachments: g,
                      globalSpoilerRenderSetting: x,
                      containerWidth: p,
                      containerHeight: j,
                      canAutoPlay: m,
                      shouldMaintainAspectRatio: f,
                  }),
                  (0, l.jsx)("div", {
                      className: G.GA,
                      children: (0, l.jsx)(L.Ay, { channel: t, tagsClassName: G.uU }),
                  }),
              ],
          });
}
function W(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        s = (0, m.m)(t.id),
        a = i?.reactions != null && i.reactions.length > 0;
    return (0, l.jsxs)("div", {
        className: G.GD,
        children: [
            (0, l.jsxs)("div", {
                className: G.QW,
                children: [
                    (0, l.jsx)("div", {
                        className: G.mz,
                        children: (0, l.jsx)(R.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    s.length > 0
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("span", { className: G.xE, children: "•" }),
                                  (0, l.jsxs)("div", {
                                      className: G.IW,
                                      children: [
                                          (0, l.jsx)(R.gL, { channel: t, userIds: s, facepileRef: n }),
                                          (0, l.jsx)("div", {
                                              className: G.r$,
                                              children: (0, l.jsx)(c.nvX, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, l.jsx)(u.Ay, { channel: t, className: G.mD, renderDots: !1 }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, l.jsxs)("div", {
                className: G.QW,
                children: [
                    a || null == i ? null : (0, l.jsx)(R.NA, { firstMessage: i, channel: t }),
                    null == i ? null : (0, l.jsx)(R.cn, { firstMessage: i, channel: t }),
                ],
            }),
        ],
    });
}
let K = (e) => e.preventDefault(),
    q = i.memo(function (e) {
        return (0, l.jsx)(l.Fragment, { children: (0, b.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }) });
    }),
    $ = i.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: s,
                containerHeight: r,
                canAutoPlay: o,
                shouldMaintainAspectRatio: d = !1,
            } = e,
            { containsVideo: u, containsGif: m } = i.useMemo(() => (0, E.$2)(t), [t]),
            _ = i.useMemo(() => t.slice(k.xA, k.lV), [t]),
            j = (0, k.eX)({ numAttachments: _.length, containerWidth: s, containerHeight: r }),
            b = (0, k.p2)({ imageContainerStyles: j, containerWidth: s, containerHeight: r }),
            v = (0, g.O8)(x.v.GUILD),
            A = i.useMemo(
                () =>
                    _.map((e, t) => {
                        let [i, s] = (0, p.K6)(e, !n, v),
                            r = (0, p.rx)(s),
                            x = {
                                ...b[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && i ? r : e.alt,
                                onClick: K,
                                shouldRenderAccessory: !m && !u,
                            },
                            g = (0, f.ge)(e.src) ? `${e.src}?format=png` : e.src,
                            _ = o && !i ? e.src : g;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: G.UV,
                                style: j[t],
                                children: [
                                    d
                                        ? (0, l.jsx)(h.A, {
                                              ...x,
                                              src: _,
                                              backgroundSrc: g,
                                              aspectRatio: x.maxWidth / x.maxHeight,
                                              alt: x.alt ?? "",
                                              className: a()(G.EN, { [G.cd]: i }),
                                              imageChildClassName: G.Rp,
                                          })
                                        : e.src.startsWith("data:")
                                          ? (0, l.jsx)(c._V3, {
                                                ...x,
                                                className: G.il,
                                                imageClassName: a()(G.LW, { [G.cd]: i }),
                                            })
                                          : (0, l.jsx)(q, {
                                                ...x,
                                                autoPlay: o && !i,
                                                containerClassName: G.EK,
                                                imageClassName: a()(G.rp, { [G.cd]: i }),
                                                responsive: !0,
                                            }),
                                    i &&
                                        (0, l.jsx)("div", {
                                            className: G.X,
                                            children: (0, l.jsx)(I.A, { obscureReason: s, iconClassname: G.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, m, u, n, j, b, _, d, v],
            );
        return (0, l.jsxs)("div", {
            className: G.pV,
            style: { width: s, height: r },
            children: [
                A,
                (m || u) &&
                    (0, l.jsxs)("div", {
                        className: G.vz,
                        children: [
                            u &&
                                (0, l.jsx)(c.udU, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: G.cU,
                                }),
                            m &&
                                (0, l.jsx)(c.Osp, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: G.cU,
                                }),
                        ],
                    }),
                t.length > k.Mm &&
                    (0, l.jsx)(J, {
                        text: (t.length - k.Mm).toString(),
                        icon: c.xfq,
                        pillClassName: G.v3,
                        iconClassName: G.In,
                        textClassName: G.EY,
                    }),
            ],
        });
    });
function J(e) {
    let { text: t, icon: n, pillClassName: i, iconClassName: s, textClassName: a } = e;
    return (0, l.jsxs)("div", {
        className: i,
        children: [
            (0, l.jsx)(n, { className: s, color: "currentColor" }),
            (0, l.jsxs)(c.Text, { variant: "text-xs/medium", className: a, children: ["+", t] }),
        ],
    });
}
function X(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: s, containerWidth: r, hasUnreads: o } = e,
        d = v.hH.useSetting(),
        [u, m] = (0, M.tm)(r - 2 * M.IZ),
        { content: h } = (0, S.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: x } = (0, L.BA)({ channel: t, isNew: !1 }),
        g = i.useMemo(() => ({ width: u, height: m }), [u, m]),
        f = o ? G.kR : G.b8;
    return (0, l.jsxs)("div", {
        className: G.Cv,
        style: g,
        children: [
            (0, l.jsxs)("div", {
                className: G.Qs,
                children: [
                    s &&
                        null == n &&
                        (0, l.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: U.intl.string(U.t.mE3KJN),
                        }),
                    s && null != n && (0, l.jsx)(j.Ay, { message: n, content: h, className: f, compact: d }),
                ],
            }),
            (0, l.jsx)("div", {
                className: a()(G.kh, { [G.ZH]: !x }),
                children: x ? (0, l.jsx)(L.Ay, { channel: t, tagsClassName: G.uU }) : null,
            }),
        ],
    });
}
function Q(e) {
    let { message: t, containerWidth: n, channel: s } = e,
        [r, o] = (0, M.tm)(n - 2 * M.IZ),
        { shouldRenderTagsRow: d } = (0, L.BA)({ channel: s, isNew: !1 }),
        u = i.useMemo(() => ({ width: r, height: o }), [r, o]);
    return (0, l.jsxs)("div", {
        className: G.Cv,
        style: u,
        children: [
            (0, l.jsx)("div", {
                className: G.Qs,
                children: (0, l.jsx)(c.Text, {
                    className: G.Wv,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, l.jsx)("div", {
                className: a()(G.kh, { [G.ZH]: !d }),
                children: d ? (0, l.jsx)(L.Ay, { channel: s, tagsClassName: G.uU }) : null,
            }),
        ],
    });
}
