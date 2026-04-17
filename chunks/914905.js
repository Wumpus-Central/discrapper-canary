"use strict";
n.d(t, { A: () => D, J: () => b }), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(827734),
    u = n(397927),
    c = n(608299),
    d = n(427281),
    _ = n(565150),
    f = n(672477),
    p = n(67281),
    h = n(458517),
    m = n(607470),
    E = n(256905),
    g = n(302031),
    A = n(734057),
    I = n(515718),
    T = n(851023),
    S = n(349688),
    y = n(985018),
    v = n(443024);
let N = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function C(e) {
    let { alt: t, spoiler: n, renderContent: s, size: o } = e,
        [l, u] = i.useState(!1);
    return (0, r.jsx)(g.Bs.Provider, {
        value: !n,
        children: (0, r.jsx)(g.Ay, {
            containerStyles:
                o === S.L.CLIP ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, boxShadow: "none" } : void 0,
            type: g.Ay.Types.ATTACHMENT,
            onReveal: () => u(!0),
            className: a()(v.spoilerContainer, {
                [v.sizeXSmall]: o === S.L.XSMALL,
                [v.sizeXXSmall]: o === S.L.XXSMALL,
            }),
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: v.spoilerWrapper,
                    children: [
                        s(e),
                        (0, r.jsxs)("div", {
                            className: v.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, r.jsx)("span", { className: v.altTag, children: y.intl.string(y.t.QEW81z) })
                                    : null,
                                l && n
                                    ? (0, r.jsx)("span", {
                                          className: v.altTag,
                                          children: y.intl.string(y.t["F+x38C"]),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function R(e) {
    let { file: t, alt: n, spoiler: s, size: o = S.L.MEDIUM, onMouseEnter: l } = e,
        [c, d] = i.useState(),
        [_, f] = i.useState({ width: 0, height: 0 }),
        p = o === S.L.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === N.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, I.z$)(n.width, n.height);
                f({ width: e, height: t });
            }),
            (n.src = e),
            () => {
                d(void 0), f({ width: 0, height: 0 }), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let h = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == c
                    ? (0, r.jsx)(r.Fragment, {})
                    : (0, r.jsx)("img", {
                          src: c,
                          className: a()(v.media, {
                              [v.spoiler]: e,
                              [v.imageSmall]: p,
                              [v.sizeXSmall]: o === S.L.XSMALL,
                              [v.sizeXXSmall]: o === S.L.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: n ?? "",
                          style: t ? _ : {},
                      });
            },
            [c, p, o, n, _],
        ),
        m = i.useCallback(() => {
            null != c &&
                (0, E.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: c }],
                    shouldHideMediaOptions: !0,
                });
        }, [c]),
        g = t?.name != null ? t.name : y.intl.string(y.t.lduvqL),
        A =
            null != n && "" !== n
                ? y.intl.formatToPlainString(y.t["8TRAzR"], { filename: g, alt: n })
                : y.intl.formatToPlainString(y.t.lXoOEZ, { filename: g });
    return (0, r.jsx)("div", {
        onMouseEnter: l,
        className: a()(v.mediaContainer, { [v.imageSmall]: p }),
        children: (0, r.jsx)(u.DUT, {
            onClick: m,
            className: v.clickableMedia,
            "aria-label": A,
            tabIndex: -1,
            children: (0, r.jsx)(C, { size: o, alt: n, spoiler: s, renderContent: h }),
        }),
    });
}
function O(e) {
    let {
            file: t,
            alt: n,
            spoiler: s,
            size: o = S.L.MEDIUM,
            onMouseEnter: l,
            onVideoLoadError: u,
            clip: c,
            guildId: d,
        } = e,
        [_, f] = i.useState(),
        h = i.useRef(null);
    return (
        i.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return (
                f(e),
                () => {
                    f(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, r.jsxs)("div", {
            onMouseEnter: l,
            className: v.mediaContainer,
            children: [
                (0, r.jsx)(C, {
                    size: o,
                    alt: n,
                    spoiler: s,
                    renderContent: (e) =>
                        (0, r.jsx)(m.A, {
                            ref: h,
                            src: _,
                            className: a()(v.media, {
                                [v.spoiler]: e,
                                [v.sizeClip]: o === S.L.CLIP,
                                [v.sizeXSmall]: o === S.L.XSMALL,
                                [v.sizeXXSmall]: o === S.L.XXSMALL,
                            }),
                            onError: u,
                            preload: "none",
                            "aria-hidden": !0,
                        }),
                }),
                null != c &&
                    (0, r.jsx)("div", {
                        className: v.clipOverlayHeader,
                        inert: !0,
                        children: (0, r.jsx)(p.A, {
                            title: c.name,
                            createdAt: c.createdAt,
                            participantIds: c.users,
                            applicationId: c.applicationId,
                            guildId: d,
                        }),
                    }),
            ],
        })
    );
}
function b(e) {
    let { upload: t, size: n = S.L.MEDIUM, onMouseEnter: s, clip: o, guildId: l } = e,
        [u, c] = i.useState(!1);
    return t.isImage && t.item.platform === _.xz.WEB
        ? (0, r.jsx)(R, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: s })
        : !u && t.isVideo && t.item.platform === _.xz.WEB
          ? (0, r.jsx)(O, {
                file: t.item.file,
                size: n,
                alt: t.description,
                spoiler: t.spoiler,
                onMouseEnter: s,
                onVideoLoadError: () => c(!0),
                clip: o,
                guildId: l,
            })
          : (0, r.jsx)("div", {
                onMouseEnter: s,
                className: a()(v.icon, v[t.classification ?? ""], {
                    [v.imageSmall]: n === S.L.SMALL,
                    [v.sizeXSmall]: n === S.L.XSMALL,
                    [v.sizeXXSmall]: n === S.L.XXSMALL,
                }),
                children: (0, r.jsx)("div", {
                    className: v.tags,
                    children: t.spoiler
                        ? (0, r.jsx)("span", { className: v.altTag, children: y.intl.string(y.t["F+x38C"]) })
                        : null,
                }),
            });
}
function D(e) {
    let {
            channelId: t,
            draftType: n,
            upload: s,
            keyboardModeEnabled: _,
            label: p,
            size: m = S.L.MEDIUM,
            canEdit: E = !0,
            hideFileName: g = !1,
            clip: I,
        } = e,
        N = null != I,
        { newEmbedUi: C } = f.Q.useConfig({ location: "ChannelAttachmentUpload" }),
        R = (m = N && !C ? S.L.CLIP : m) === S.L.SMALL,
        O = (0, o.bG)([A.A], () => A.A.getChannel(t)?.guild_id),
        D = (e) => {
            e.stopPropagation(),
                (0, u.qfG)((e) =>
                    (0, r.jsx)(d.default, {
                        ...e,
                        draftType: n,
                        upload: s,
                        channelId: t,
                        onSubmit: (e) => {
                            let { name: r, description: i, spoiler: a } = e;
                            c.A.update(t, s.id, n, { filename: r, description: i, spoiler: a });
                        },
                    }),
                );
        };
    return (0, r.jsxs)(S.A, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [
                E
                    ? (0, r.jsx)(T.A, {
                          className: a()({ [v.action]: R }),
                          tooltip: N ? y.intl.string(y.t.MYgdY2) : y.intl.string(y.t.cuurzA),
                          onClick: () => c.A.update(t, s.id, n, { spoiler: !s.spoiler }),
                          children: s.spoiler
                              ? (0, r.jsx)(u.G3N, {
                                    size: "md",
                                    color: "currentColor",
                                    className: a()({ [v.actionBarIcon]: R }),
                                })
                              : (0, r.jsx)(u.bMW, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: a()({ [v.actionBarIcon]: R }),
                                }),
                      })
                    : null,
                E && !N
                    ? (0, r.jsx)(T.A, {
                          className: a()({ [v.action]: R }),
                          tooltip: y.intl.string(y.t.Y8ujqr),
                          onClick: D,
                          children: (0, r.jsx)(u.R2l, {
                              size: "xs",
                              color: "currentColor",
                              className: a()({ [v.actionBarIcon]: R }),
                          }),
                      })
                    : null,
                (0, r.jsx)(T.A, {
                    className: a()({ [v.action]: R }),
                    tooltip: N ? y.intl.string(y.t.MskAXa) : y.intl.string(y.t.vN7REz),
                    onClick: () => c.A.remove(t, s.id, n),
                    dangerous: !0,
                    children: (0, r.jsx)(u.ucK, {
                        size: "md",
                        color: "currentColor",
                        className: a()({ [v.actionBarIcon]: R }),
                    }),
                }),
            ],
        }),
        draftType: n,
        id: s.id,
        channelId: t,
        handleEditModal: D,
        keyboardModeEnabled: _,
        size: m,
        className: a()({ [v.attachmentItemSmall]: R }),
        children: [
            (0, r.jsx)(b, { upload: s, size: m, clip: C ? I : void 0, guildId: O }),
            !g &&
                (!N || C) &&
                (0, r.jsx)("div", {
                    className: v.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(u.Text, {
                        className: v.filename,
                        variant: "text-sm/normal",
                        children: null != p ? p : N ? I.name : s.filename,
                    }),
                }),
            N &&
                !C &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.A, {
                            className: v.clipsFooter,
                            createdAt: I.createdAt,
                            participantIds: I.users,
                            applicationId: I.applicationId,
                            title: I.name,
                            guildId: O,
                        }),
                        (0, r.jsx)(u.LpS, {
                            color: l.A.colors.BACKGROUND_BRAND.css,
                            className: v.clipsBadge,
                            text: y.intl.string(y.t.oA4afG),
                        }),
                    ],
                }),
        ],
    });
}
