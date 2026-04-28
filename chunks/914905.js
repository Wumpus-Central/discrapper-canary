"use strict";
n.d(t, { A: () => D, J: () => P }), n(323874), n(14289), n(35956);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(661531),
    c = n(939249),
    u = n(192308),
    d = n(952270),
    h = n(39623),
    m = n(22231),
    p = n(241326),
    f = n(834730),
    g = n(777666),
    _ = n(608299),
    x = n(427281),
    C = n(565150),
    A = n(672477),
    E = n(401648),
    I = n(458517),
    v = n(607470),
    y = n(256905),
    b = n(302031),
    S = n(734057),
    N = n(515718),
    j = n(851023),
    T = n(215497),
    w = n(985018),
    R = n(443024);
let L = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function k(e) {
    let { alt: t, spoiler: n, renderContent: s, size: r } = e,
        [o, c] = i.useState(!1);
    return (0, l.jsx)(b.Bs.Provider, {
        value: !n,
        children: (0, l.jsx)(b.Ay, {
            containerStyles:
                r === T.L.CLIP ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, boxShadow: "none" } : void 0,
            type: b.Ay.Types.ATTACHMENT,
            onReveal: () => c(!0),
            className: a()(R.spoilerContainer, {
                [R.sizeXSmall]: r === T.L.XSMALL,
                [R.sizeXXSmall]: r === T.L.XXSMALL,
            }),
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: R.spoilerWrapper,
                    children: [
                        s(e),
                        (0, l.jsxs)("div", {
                            className: R.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, l.jsx)("span", { className: R.altTag, children: w.intl.string(w.t.QEW81z) })
                                    : null,
                                o && n
                                    ? (0, l.jsx)("span", {
                                          className: R.altTag,
                                          children: w.intl.string(w.t["F+x38C"]),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function O(e) {
    let { file: t, alt: n, spoiler: s, size: r = T.L.MEDIUM, onMouseEnter: o } = e,
        [u, d] = i.useState(),
        [h, m] = i.useState({ width: 0, height: 0 }),
        p = r === T.L.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === L.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, N.z$)(n.width, n.height);
                m({ width: e, height: t });
            }),
            (n.src = e),
            () => {
                d(void 0), m({ width: 0, height: 0 }), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let f = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == u
                    ? (0, l.jsx)(l.Fragment, {})
                    : (0, l.jsx)("img", {
                          src: u,
                          className: a()(R.media, {
                              [R.spoiler]: e,
                              [R.imageSmall]: p,
                              [R.sizeXSmall]: r === T.L.XSMALL,
                              [R.sizeXXSmall]: r === T.L.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: n ?? "",
                          style: t ? h : {},
                      });
            },
            [u, p, r, n, h],
        ),
        g = i.useCallback(() => {
            null != u &&
                (0, y.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: u }],
                    shouldHideMediaOptions: !0,
                });
        }, [u]),
        _ = t?.name != null ? t.name : w.intl.string(w.t.lduvqL),
        x =
            null != n && "" !== n
                ? w.intl.formatToPlainString(w.t["8TRAzR"], { filename: _, alt: n })
                : w.intl.formatToPlainString(w.t.lXoOEZ, { filename: _ });
    return (0, l.jsx)("div", {
        onMouseEnter: o,
        className: a()(R.mediaContainer, { [R.imageSmall]: p }),
        children: (0, l.jsx)(c.D, {
            onClick: g,
            className: R.clickableMedia,
            "aria-label": x,
            tabIndex: -1,
            children: (0, l.jsx)(k, { size: r, alt: n, spoiler: s, renderContent: f }),
        }),
    });
}
function M(e) {
    let {
            file: t,
            alt: n,
            spoiler: s,
            size: r = T.L.MEDIUM,
            onMouseEnter: o,
            onVideoLoadError: c,
            clip: u,
            guildId: d,
        } = e,
        [h, m] = i.useState(),
        p = i.useRef(null);
    return (
        i.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return (
                m(e),
                () => {
                    m(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, l.jsxs)("div", {
            onMouseEnter: o,
            className: R.mediaContainer,
            children: [
                (0, l.jsx)(k, {
                    size: r,
                    alt: n,
                    spoiler: s,
                    renderContent: (e) =>
                        (0, l.jsx)(v.A, {
                            ref: p,
                            src: h,
                            className: a()(R.media, {
                                [R.spoiler]: e,
                                [R.sizeClip]: r === T.L.CLIP,
                                [R.sizeXSmall]: r === T.L.XSMALL,
                                [R.sizeXXSmall]: r === T.L.XXSMALL,
                            }),
                            onError: c,
                            preload: "none",
                            "aria-hidden": !0,
                        }),
                }),
                null != u &&
                    (0, l.jsx)("div", {
                        className: R.clipOverlayHeader,
                        inert: !0,
                        children: (0, l.jsx)(E.A, {
                            title: u.name,
                            createdAt: u.createdAt,
                            participantIds: u.users,
                            applicationId: u.applicationId,
                            guildId: d,
                        }),
                    }),
            ],
        })
    );
}
function P(e) {
    let { upload: t, size: n = T.L.MEDIUM, onMouseEnter: s, clip: r, guildId: o } = e,
        [c, u] = i.useState(!1);
    return t.isImage && t.item.platform === C.xz.WEB
        ? (0, l.jsx)(O, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: s })
        : !c && t.isVideo && t.item.platform === C.xz.WEB
          ? (0, l.jsx)(M, {
                file: t.item.file,
                size: n,
                alt: t.description,
                spoiler: t.spoiler,
                onMouseEnter: s,
                onVideoLoadError: () => u(!0),
                clip: r,
                guildId: o,
            })
          : (0, l.jsx)("div", {
                onMouseEnter: s,
                className: a()(R.icon, R[t.classification ?? ""], {
                    [R.imageSmall]: n === T.L.SMALL,
                    [R.sizeXSmall]: n === T.L.XSMALL,
                    [R.sizeXXSmall]: n === T.L.XXSMALL,
                }),
                children: (0, l.jsx)("div", {
                    className: R.tags,
                    children: t.spoiler
                        ? (0, l.jsx)("span", { className: R.altTag, children: w.intl.string(w.t["F+x38C"]) })
                        : null,
                }),
            });
}
function D(e) {
    let {
            channelId: t,
            draftType: n,
            upload: s,
            keyboardModeEnabled: c,
            label: C,
            size: E = T.L.MEDIUM,
            canEdit: v = !0,
            hideFileName: y = !1,
            clip: b,
        } = e,
        N = null != b,
        { newEmbedUi: L } = A.Q.useConfig({ location: "ChannelAttachmentUpload" }),
        k = (E = N && !L ? T.L.CLIP : E) === T.L.SMALL,
        O = (0, r.bG)([S.A], () => S.A.getChannel(t)?.guild_id),
        M = (e) => {
            e.stopPropagation(),
                (0, u.openModal)((e) =>
                    (0, l.jsx)(x.default, {
                        ...e,
                        draftType: n,
                        upload: s,
                        channelId: t,
                        onSubmit: (e) => {
                            let { name: l, description: i, spoiler: a } = e;
                            _.A.update(t, s.id, n, { filename: l, description: i, spoiler: a });
                        },
                    }),
                );
        };
    return (0, l.jsxs)(T.A, {
        actions: (0, l.jsxs)(i.Fragment, {
            children: [
                v
                    ? (0, l.jsx)(j.A, {
                          className: a()({ [R.action]: k }),
                          tooltip: N ? w.intl.string(w.t.MYgdY2) : w.intl.string(w.t.cuurzA),
                          onClick: () => _.A.update(t, s.id, n, { spoiler: !s.spoiler }),
                          children: s.spoiler
                              ? (0, l.jsx)(d.G, {
                                    size: "md",
                                    color: "currentColor",
                                    className: a()({ [R.actionBarIcon]: k }),
                                })
                              : (0, l.jsx)(h.b, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: a()({ [R.actionBarIcon]: k }),
                                }),
                      })
                    : null,
                v && !N
                    ? (0, l.jsx)(j.A, {
                          className: a()({ [R.action]: k }),
                          tooltip: w.intl.string(w.t.Y8ujqr),
                          onClick: M,
                          children: (0, l.jsx)(m.R, {
                              size: "xs",
                              color: "currentColor",
                              className: a()({ [R.actionBarIcon]: k }),
                          }),
                      })
                    : null,
                (0, l.jsx)(j.A, {
                    className: a()({ [R.action]: k }),
                    tooltip: N ? w.intl.string(w.t.MskAXa) : w.intl.string(w.t.vN7REz),
                    onClick: () => _.A.remove(t, s.id, n),
                    dangerous: !0,
                    children: (0, l.jsx)(p.u, {
                        size: "md",
                        color: "currentColor",
                        className: a()({ [R.actionBarIcon]: k }),
                    }),
                }),
            ],
        }),
        draftType: n,
        id: s.id,
        channelId: t,
        handleEditModal: M,
        keyboardModeEnabled: c,
        size: E,
        className: a()({ [R.attachmentItemSmall]: k }),
        children: [
            (0, l.jsx)(P, { upload: s, size: E, clip: L ? b : void 0, guildId: O }),
            !y &&
                (!N || L) &&
                (0, l.jsx)("div", {
                    className: R.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, l.jsx)(f.E, {
                        className: R.filename,
                        variant: "text-sm/normal",
                        children: null != C ? C : N ? b.name : s.filename,
                    }),
                }),
            N &&
                !L &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(I.A, {
                            className: R.clipsFooter,
                            createdAt: b.createdAt,
                            participantIds: b.users,
                            applicationId: b.applicationId,
                            title: b.name,
                            guildId: O,
                        }),
                        (0, l.jsx)(g.Lp, {
                            color: o.A.colors.BACKGROUND_BRAND.css,
                            className: R.clipsBadge,
                            text: w.intl.string(w.t.oA4afG),
                        }),
                    ],
                }),
        ],
    });
}
