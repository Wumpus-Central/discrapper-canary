"use strict";
n.d(t, { A: () => D, J: () => O }), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(827734),
    u = n(397927),
    c = n(608299),
    d = n(427281),
    _ = n(565150),
    f = n(458517),
    h = n(607470),
    p = n(256905),
    g = n(302031),
    E = n(734057),
    A = n(515718),
    I = n(661191),
    T = n(851023),
    y = n(349688),
    S = n(985018),
    v = n(76397);
let C = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function b(e) {
    let { alt: t, spoiler: n, renderContent: a, size: o } = e,
        [l, u] = i.useState(!1);
    return (0, r.jsx)(g.Bs.Provider, {
        value: !n,
        children: (0, r.jsx)(g.Ay, {
            containerStyles:
                o === y.L.CLIP ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, boxShadow: "none" } : void 0,
            type: g.Ay.Types.ATTACHMENT,
            onReveal: () => u(!0),
            className: s()(v.spoilerContainer, {
                [v.sizeXSmall]: o === y.L.XSMALL,
                [v.sizeXXSmall]: o === y.L.XXSMALL,
            }),
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: v.spoilerWrapper,
                    children: [
                        a(e),
                        (0, r.jsxs)("div", {
                            className: v.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, r.jsx)("span", { className: v.altTag, children: S.intl.string(S.t.QEW81z) })
                                    : null,
                                l && n
                                    ? (0, r.jsx)("span", {
                                          className: v.altTag,
                                          children: S.intl.string(S.t["F+x38C"]),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function N(e) {
    let { file: t, alt: n, spoiler: a, size: o = y.L.MEDIUM, onMouseEnter: l } = e,
        [c, d] = i.useState(),
        [_, f] = i.useState({ width: 0, height: 0 }),
        h = o === y.L.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === C.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, A.z$)(n.width, n.height);
                f({ width: e, height: t });
            }),
            (n.src = e),
            () => {
                d(void 0), f({ width: 0, height: 0 }), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let g = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == c
                    ? (0, r.jsx)(r.Fragment, {})
                    : (0, r.jsx)("img", {
                          src: c,
                          className: s()(v.media, {
                              [v.spoiler]: e,
                              [v.imageSmall]: h,
                              [v.sizeXSmall]: o === y.L.XSMALL,
                              [v.sizeXXSmall]: o === y.L.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: n ?? "",
                          style: t ? _ : {},
                      });
            },
            [c, h, o, n, _],
        ),
        E = i.useCallback(() => {
            null != c &&
                (0, p.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: c }],
                    shouldHideMediaOptions: !0,
                });
        }, [c]),
        I = t?.name != null ? t.name : S.intl.string(S.t.lduvqL),
        T =
            null != n && "" !== n
                ? S.intl.formatToPlainString(S.t["8TRAzR"], { filename: I, alt: n })
                : S.intl.formatToPlainString(S.t.lXoOEZ, { filename: I });
    return (0, r.jsx)("div", {
        onMouseEnter: l,
        className: s()(v.mediaContainer, { [v.imageSmall]: h }),
        children: (0, r.jsx)(u.DUT, {
            onClick: E,
            className: v.clickableMedia,
            "aria-label": T,
            children: (0, r.jsx)(b, { size: o, alt: n, spoiler: a, renderContent: g }),
        }),
    });
}
function R(e) {
    let { file: t, alt: n, spoiler: a, size: o = y.L.MEDIUM, onMouseEnter: l, onVideoLoadError: u } = e,
        [c, d] = i.useState(),
        _ = i.useRef(null);
    return (
        i.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return (
                d(e),
                () => {
                    d(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, r.jsx)("div", {
            onMouseEnter: l,
            className: v.mediaContainer,
            children: (0, r.jsx)(b, {
                size: o,
                alt: n,
                spoiler: a,
                renderContent: (e) =>
                    (0, r.jsx)(h.A, {
                        ref: _,
                        src: c,
                        className: s()(v.media, {
                            [v.spoiler]: e,
                            [v.sizeClip]: o === y.L.CLIP,
                            [v.sizeXSmall]: o === y.L.XSMALL,
                            [v.sizeXXSmall]: o === y.L.XXSMALL,
                        }),
                        onError: u,
                        preload: "none",
                        "aria-hidden": !0,
                    }),
            }),
        })
    );
}
function O(e) {
    let { upload: t, size: n = y.L.MEDIUM, onMouseEnter: a } = e,
        [o, l] = i.useState(!1);
    return t.isImage && t.item.platform === _.xz.WEB
        ? (0, r.jsx)(N, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: a })
        : !o && t.isVideo && t.item.platform === _.xz.WEB
          ? (0, r.jsx)(R, {
                file: t.item.file,
                size: n,
                alt: t.description,
                spoiler: t.spoiler,
                onMouseEnter: a,
                onVideoLoadError: () => l(!0),
            })
          : (0, r.jsx)("div", {
                onMouseEnter: a,
                className: s()(v.icon, v[t.classification ?? ""], {
                    [v.imageSmall]: n === y.L.SMALL,
                    [v.sizeXSmall]: n === y.L.XSMALL,
                    [v.sizeXXSmall]: n === y.L.XXSMALL,
                }),
                children: (0, r.jsx)("div", {
                    className: v.tags,
                    children: t.spoiler
                        ? (0, r.jsx)("span", { className: v.altTag, children: S.intl.string(S.t["F+x38C"]) })
                        : null,
                }),
            });
}
function D(e) {
    let {
            channelId: t,
            draftType: n,
            upload: a,
            keyboardModeEnabled: _,
            label: h,
            size: p = y.L.MEDIUM,
            canEdit: g = !0,
            hideFileName: A = !1,
            clip: C,
        } = e,
        b = null != C,
        N = (p = b ? y.L.CLIP : p) === y.L.SMALL,
        R = (0, o.bG)([E.A], () => E.A.getChannel(t)?.guild_id),
        D = (e) => {
            e.stopPropagation(),
                (0, u.qfG)((e) =>
                    (0, r.jsx)(d.default, {
                        ...e,
                        draftType: n,
                        upload: a,
                        channelId: t,
                        onSubmit: (e) => {
                            let { name: r, description: i, spoiler: s } = e;
                            c.A.update(t, a.id, n, { filename: r, description: i, spoiler: s });
                        },
                    }),
                );
        };
    return (0, r.jsxs)(y.A, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [
                g
                    ? (0, r.jsx)(T.A, {
                          className: s()({ [v.action]: N }),
                          tooltip: b ? S.intl.string(S.t.MYgdY2) : S.intl.string(S.t.cuurzA),
                          onClick: () => c.A.update(t, a.id, n, { spoiler: !a.spoiler }),
                          children: a.spoiler
                              ? (0, r.jsx)(u.G3N, {
                                    size: "md",
                                    color: "currentColor",
                                    className: s()({ [v.actionBarIcon]: N }),
                                })
                              : (0, r.jsx)(u.bMW, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: s()({ [v.actionBarIcon]: N }),
                                }),
                      })
                    : null,
                g && !b
                    ? (0, r.jsx)(T.A, {
                          className: s()({ [v.action]: N }),
                          tooltip: S.intl.string(S.t.Y8ujqr),
                          onClick: D,
                          children: (0, r.jsx)(u.R2l, {
                              size: "xs",
                              color: "currentColor",
                              className: s()({ [v.actionBarIcon]: N }),
                          }),
                      })
                    : null,
                (0, r.jsx)(T.A, {
                    className: s()({ [v.action]: N }),
                    tooltip: b ? S.intl.string(S.t.MskAXa) : S.intl.string(S.t.vN7REz),
                    onClick: () => c.A.remove(t, a.id, n),
                    dangerous: !0,
                    children: (0, r.jsx)(u.ucK, {
                        size: "md",
                        color: "currentColor",
                        className: s()({ [v.actionBarIcon]: N }),
                    }),
                }),
            ],
        }),
        draftType: n,
        id: a.id,
        channelId: t,
        handleEditModal: D,
        keyboardModeEnabled: _,
        size: p,
        className: s()({ [v.attachmentItemSmall]: N }),
        children: [
            (0, r.jsx)(O, { upload: a, size: p }),
            !A &&
                !b &&
                (0, r.jsx)("div", {
                    className: v.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(u.Text, {
                        className: v.filename,
                        variant: "text-sm/normal",
                        children: null != h ? h : a.filename,
                    }),
                }),
            b &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.A, {
                            className: v.clipsFooter,
                            createdAt: I.default.extractTimestamp(C.id),
                            participantIds: C.users,
                            applicationId: C.applicationId,
                            title: C.name,
                            guildId: R,
                        }),
                        (0, r.jsx)(u.LpS, {
                            color: l.A.colors.BACKGROUND_BRAND.css,
                            className: v.clipsBadge,
                            text: S.intl.string(S.t.oA4afG),
                        }),
                    ],
                }),
        ],
    });
}
