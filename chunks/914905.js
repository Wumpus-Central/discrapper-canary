"use strict";
n.d(t, { A: () => D, J: () => P }), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(827734),
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
    A = n(565150),
    C = n(672477),
    E = n(67281),
    I = n(458517),
    v = n(607470),
    y = n(256905),
    S = n(302031),
    b = n(734057),
    N = n(515718),
    T = n(851023),
    j = n(349688),
    R = n(985018),
    w = n(443024);
let L = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function M(e) {
    let { alt: t, spoiler: n, renderContent: s, size: a } = e,
        [o, c] = l.useState(!1);
    return (0, i.jsx)(S.Bs.Provider, {
        value: !n,
        children: (0, i.jsx)(S.Ay, {
            containerStyles:
                a === j.L.CLIP ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, boxShadow: "none" } : void 0,
            type: S.Ay.Types.ATTACHMENT,
            onReveal: () => c(!0),
            className: r()(w.spoilerContainer, {
                [w.sizeXSmall]: a === j.L.XSMALL,
                [w.sizeXXSmall]: a === j.L.XXSMALL,
            }),
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: w.spoilerWrapper,
                    children: [
                        s(e),
                        (0, i.jsxs)("div", {
                            className: w.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, i.jsx)("span", { className: w.altTag, children: R.intl.string(R.t.QEW81z) })
                                    : null,
                                o && n
                                    ? (0, i.jsx)("span", {
                                          className: w.altTag,
                                          children: R.intl.string(R.t["F+x38C"]),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function k(e) {
    let { file: t, alt: n, spoiler: s, size: a = j.L.MEDIUM, onMouseEnter: o } = e,
        [u, d] = l.useState(),
        [h, m] = l.useState({ width: 0, height: 0 }),
        p = a === j.L.SMALL;
    l.useEffect(() => {
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
    let f = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == u
                    ? (0, i.jsx)(i.Fragment, {})
                    : (0, i.jsx)("img", {
                          src: u,
                          className: r()(w.media, {
                              [w.spoiler]: e,
                              [w.imageSmall]: p,
                              [w.sizeXSmall]: a === j.L.XSMALL,
                              [w.sizeXXSmall]: a === j.L.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: n ?? "",
                          style: t ? h : {},
                      });
            },
            [u, p, a, n, h],
        ),
        g = l.useCallback(() => {
            null != u &&
                (0, y.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: u }],
                    shouldHideMediaOptions: !0,
                });
        }, [u]),
        _ = t?.name != null ? t.name : R.intl.string(R.t.lduvqL),
        x =
            null != n && "" !== n
                ? R.intl.formatToPlainString(R.t["8TRAzR"], { filename: _, alt: n })
                : R.intl.formatToPlainString(R.t.lXoOEZ, { filename: _ });
    return (0, i.jsx)("div", {
        onMouseEnter: o,
        className: r()(w.mediaContainer, { [w.imageSmall]: p }),
        children: (0, i.jsx)(c.D, {
            onClick: g,
            className: w.clickableMedia,
            "aria-label": x,
            tabIndex: -1,
            children: (0, i.jsx)(M, { size: a, alt: n, spoiler: s, renderContent: f }),
        }),
    });
}
function O(e) {
    let {
            file: t,
            alt: n,
            spoiler: s,
            size: a = j.L.MEDIUM,
            onMouseEnter: o,
            onVideoLoadError: c,
            clip: u,
            guildId: d,
        } = e,
        [h, m] = l.useState(),
        p = l.useRef(null);
    return (
        l.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return (
                m(e),
                () => {
                    m(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, i.jsxs)("div", {
            onMouseEnter: o,
            className: w.mediaContainer,
            children: [
                (0, i.jsx)(M, {
                    size: a,
                    alt: n,
                    spoiler: s,
                    renderContent: (e) =>
                        (0, i.jsx)(v.A, {
                            ref: p,
                            src: h,
                            className: r()(w.media, {
                                [w.spoiler]: e,
                                [w.sizeClip]: a === j.L.CLIP,
                                [w.sizeXSmall]: a === j.L.XSMALL,
                                [w.sizeXXSmall]: a === j.L.XXSMALL,
                            }),
                            onError: c,
                            preload: "none",
                            "aria-hidden": !0,
                        }),
                }),
                null != u &&
                    (0, i.jsx)("div", {
                        className: w.clipOverlayHeader,
                        inert: !0,
                        children: (0, i.jsx)(E.A, {
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
    let { upload: t, size: n = j.L.MEDIUM, onMouseEnter: s, clip: a, guildId: o } = e,
        [c, u] = l.useState(!1);
    return t.isImage && t.item.platform === A.xz.WEB
        ? (0, i.jsx)(k, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: s })
        : !c && t.isVideo && t.item.platform === A.xz.WEB
          ? (0, i.jsx)(O, {
                file: t.item.file,
                size: n,
                alt: t.description,
                spoiler: t.spoiler,
                onMouseEnter: s,
                onVideoLoadError: () => u(!0),
                clip: a,
                guildId: o,
            })
          : (0, i.jsx)("div", {
                onMouseEnter: s,
                className: r()(w.icon, w[t.classification ?? ""], {
                    [w.imageSmall]: n === j.L.SMALL,
                    [w.sizeXSmall]: n === j.L.XSMALL,
                    [w.sizeXXSmall]: n === j.L.XXSMALL,
                }),
                children: (0, i.jsx)("div", {
                    className: w.tags,
                    children: t.spoiler
                        ? (0, i.jsx)("span", { className: w.altTag, children: R.intl.string(R.t["F+x38C"]) })
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
            label: A,
            size: E = j.L.MEDIUM,
            canEdit: v = !0,
            hideFileName: y = !1,
            clip: S,
        } = e,
        N = null != S,
        { newEmbedUi: L } = C.Q.useConfig({ location: "ChannelAttachmentUpload" }),
        M = (E = N && !L ? j.L.CLIP : E) === j.L.SMALL,
        k = (0, a.bG)([b.A], () => b.A.getChannel(t)?.guild_id),
        O = (e) => {
            e.stopPropagation(),
                (0, u.openModal)((e) =>
                    (0, i.jsx)(x.default, {
                        ...e,
                        draftType: n,
                        upload: s,
                        channelId: t,
                        onSubmit: (e) => {
                            let { name: i, description: l, spoiler: r } = e;
                            _.A.update(t, s.id, n, { filename: i, description: l, spoiler: r });
                        },
                    }),
                );
        };
    return (0, i.jsxs)(j.A, {
        actions: (0, i.jsxs)(l.Fragment, {
            children: [
                v
                    ? (0, i.jsx)(T.A, {
                          className: r()({ [w.action]: M }),
                          tooltip: N ? R.intl.string(R.t.MYgdY2) : R.intl.string(R.t.cuurzA),
                          onClick: () => _.A.update(t, s.id, n, { spoiler: !s.spoiler }),
                          children: s.spoiler
                              ? (0, i.jsx)(d.G, {
                                    size: "md",
                                    color: "currentColor",
                                    className: r()({ [w.actionBarIcon]: M }),
                                })
                              : (0, i.jsx)(h.b, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: r()({ [w.actionBarIcon]: M }),
                                }),
                      })
                    : null,
                v && !N
                    ? (0, i.jsx)(T.A, {
                          className: r()({ [w.action]: M }),
                          tooltip: R.intl.string(R.t.Y8ujqr),
                          onClick: O,
                          children: (0, i.jsx)(m.R, {
                              size: "xs",
                              color: "currentColor",
                              className: r()({ [w.actionBarIcon]: M }),
                          }),
                      })
                    : null,
                (0, i.jsx)(T.A, {
                    className: r()({ [w.action]: M }),
                    tooltip: N ? R.intl.string(R.t.MskAXa) : R.intl.string(R.t.vN7REz),
                    onClick: () => _.A.remove(t, s.id, n),
                    dangerous: !0,
                    children: (0, i.jsx)(p.u, {
                        size: "md",
                        color: "currentColor",
                        className: r()({ [w.actionBarIcon]: M }),
                    }),
                }),
            ],
        }),
        draftType: n,
        id: s.id,
        channelId: t,
        handleEditModal: O,
        keyboardModeEnabled: c,
        size: E,
        className: r()({ [w.attachmentItemSmall]: M }),
        children: [
            (0, i.jsx)(P, { upload: s, size: E, clip: L ? S : void 0, guildId: k }),
            !y &&
                (!N || L) &&
                (0, i.jsx)("div", {
                    className: w.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(f.E, {
                        className: w.filename,
                        variant: "text-sm/normal",
                        children: null != A ? A : N ? S.name : s.filename,
                    }),
                }),
            N &&
                !L &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(I.A, {
                            className: w.clipsFooter,
                            createdAt: S.createdAt,
                            participantIds: S.users,
                            applicationId: S.applicationId,
                            title: S.name,
                            guildId: k,
                        }),
                        (0, i.jsx)(g.Lp, {
                            color: o.A.colors.BACKGROUND_BRAND.css,
                            className: w.clipsBadge,
                            text: R.intl.string(R.t.oA4afG),
                        }),
                    ],
                }),
        ],
    });
}
