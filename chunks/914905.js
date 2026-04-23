"use strict";
n.d(t, { A: () => U, J: () => k }), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(827734),
    u = n(939249),
    c = n(192308),
    d = n(952270),
    _ = n(39623),
    f = n(22231),
    p = n(241326),
    h = n(834730),
    E = n(777666),
    m = n(608299),
    g = n(427281),
    A = n(565150),
    I = n(672477),
    T = n(67281),
    S = n(458517),
    y = n(607470),
    N = n(256905),
    v = n(302031),
    C = n(734057),
    O = n(515718),
    R = n(851023),
    b = n(349688),
    D = n(985018),
    L = n(443024);
let w = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function M(e) {
    let { alt: t, spoiler: n, renderContent: s, size: o } = e,
        [l, u] = i.useState(!1);
    return (0, r.jsx)(v.Bs.Provider, {
        value: !n,
        children: (0, r.jsx)(v.Ay, {
            containerStyles:
                o === b.L.CLIP ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, boxShadow: "none" } : void 0,
            type: v.Ay.Types.ATTACHMENT,
            onReveal: () => u(!0),
            className: a()(L.spoilerContainer, {
                [L.sizeXSmall]: o === b.L.XSMALL,
                [L.sizeXXSmall]: o === b.L.XXSMALL,
            }),
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: L.spoilerWrapper,
                    children: [
                        s(e),
                        (0, r.jsxs)("div", {
                            className: L.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, r.jsx)("span", { className: L.altTag, children: D.intl.string(D.t.QEW81z) })
                                    : null,
                                l && n
                                    ? (0, r.jsx)("span", {
                                          className: L.altTag,
                                          children: D.intl.string(D.t["F+x38C"]),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function P(e) {
    let { file: t, alt: n, spoiler: s, size: o = b.L.MEDIUM, onMouseEnter: l } = e,
        [c, d] = i.useState(),
        [_, f] = i.useState({ width: 0, height: 0 }),
        p = o === b.L.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === w.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, O.z$)(n.width, n.height);
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
                          className: a()(L.media, {
                              [L.spoiler]: e,
                              [L.imageSmall]: p,
                              [L.sizeXSmall]: o === b.L.XSMALL,
                              [L.sizeXXSmall]: o === b.L.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: n ?? "",
                          style: t ? _ : {},
                      });
            },
            [c, p, o, n, _],
        ),
        E = i.useCallback(() => {
            null != c &&
                (0, N.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: c }],
                    shouldHideMediaOptions: !0,
                });
        }, [c]),
        m = t?.name != null ? t.name : D.intl.string(D.t.lduvqL),
        g =
            null != n && "" !== n
                ? D.intl.formatToPlainString(D.t["8TRAzR"], { filename: m, alt: n })
                : D.intl.formatToPlainString(D.t.lXoOEZ, { filename: m });
    return (0, r.jsx)("div", {
        onMouseEnter: l,
        className: a()(L.mediaContainer, { [L.imageSmall]: p }),
        children: (0, r.jsx)(u.D, {
            onClick: E,
            className: L.clickableMedia,
            "aria-label": g,
            tabIndex: -1,
            children: (0, r.jsx)(M, { size: o, alt: n, spoiler: s, renderContent: h }),
        }),
    });
}
function x(e) {
    let {
            file: t,
            alt: n,
            spoiler: s,
            size: o = b.L.MEDIUM,
            onMouseEnter: l,
            onVideoLoadError: u,
            clip: c,
            guildId: d,
        } = e,
        [_, f] = i.useState(),
        p = i.useRef(null);
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
            className: L.mediaContainer,
            children: [
                (0, r.jsx)(M, {
                    size: o,
                    alt: n,
                    spoiler: s,
                    renderContent: (e) =>
                        (0, r.jsx)(y.A, {
                            ref: p,
                            src: _,
                            className: a()(L.media, {
                                [L.spoiler]: e,
                                [L.sizeClip]: o === b.L.CLIP,
                                [L.sizeXSmall]: o === b.L.XSMALL,
                                [L.sizeXXSmall]: o === b.L.XXSMALL,
                            }),
                            onError: u,
                            preload: "none",
                            "aria-hidden": !0,
                        }),
                }),
                null != c &&
                    (0, r.jsx)("div", {
                        className: L.clipOverlayHeader,
                        inert: !0,
                        children: (0, r.jsx)(T.A, {
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
function k(e) {
    let { upload: t, size: n = b.L.MEDIUM, onMouseEnter: s, clip: o, guildId: l } = e,
        [u, c] = i.useState(!1);
    return t.isImage && t.item.platform === A.xz.WEB
        ? (0, r.jsx)(P, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: s })
        : !u && t.isVideo && t.item.platform === A.xz.WEB
          ? (0, r.jsx)(x, {
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
                className: a()(L.icon, L[t.classification ?? ""], {
                    [L.imageSmall]: n === b.L.SMALL,
                    [L.sizeXSmall]: n === b.L.XSMALL,
                    [L.sizeXXSmall]: n === b.L.XXSMALL,
                }),
                children: (0, r.jsx)("div", {
                    className: L.tags,
                    children: t.spoiler
                        ? (0, r.jsx)("span", { className: L.altTag, children: D.intl.string(D.t["F+x38C"]) })
                        : null,
                }),
            });
}
function U(e) {
    let {
            channelId: t,
            draftType: n,
            upload: s,
            keyboardModeEnabled: u,
            label: A,
            size: T = b.L.MEDIUM,
            canEdit: y = !0,
            hideFileName: N = !1,
            clip: v,
        } = e,
        O = null != v,
        { newEmbedUi: w } = I.Q.useConfig({ location: "ChannelAttachmentUpload" }),
        M = (T = O && !w ? b.L.CLIP : T) === b.L.SMALL,
        P = (0, o.bG)([C.A], () => C.A.getChannel(t)?.guild_id),
        x = (e) => {
            e.stopPropagation(),
                (0, c.openModal)((e) =>
                    (0, r.jsx)(g.default, {
                        ...e,
                        draftType: n,
                        upload: s,
                        channelId: t,
                        onSubmit: (e) => {
                            let { name: r, description: i, spoiler: a } = e;
                            m.A.update(t, s.id, n, { filename: r, description: i, spoiler: a });
                        },
                    }),
                );
        };
    return (0, r.jsxs)(b.A, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [
                y
                    ? (0, r.jsx)(R.A, {
                          className: a()({ [L.action]: M }),
                          tooltip: O ? D.intl.string(D.t.MYgdY2) : D.intl.string(D.t.cuurzA),
                          onClick: () => m.A.update(t, s.id, n, { spoiler: !s.spoiler }),
                          children: s.spoiler
                              ? (0, r.jsx)(d.G, {
                                    size: "md",
                                    color: "currentColor",
                                    className: a()({ [L.actionBarIcon]: M }),
                                })
                              : (0, r.jsx)(_.b, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: a()({ [L.actionBarIcon]: M }),
                                }),
                      })
                    : null,
                y && !O
                    ? (0, r.jsx)(R.A, {
                          className: a()({ [L.action]: M }),
                          tooltip: D.intl.string(D.t.Y8ujqr),
                          onClick: x,
                          children: (0, r.jsx)(f.R, {
                              size: "xs",
                              color: "currentColor",
                              className: a()({ [L.actionBarIcon]: M }),
                          }),
                      })
                    : null,
                (0, r.jsx)(R.A, {
                    className: a()({ [L.action]: M }),
                    tooltip: O ? D.intl.string(D.t.MskAXa) : D.intl.string(D.t.vN7REz),
                    onClick: () => m.A.remove(t, s.id, n),
                    dangerous: !0,
                    children: (0, r.jsx)(p.u, {
                        size: "md",
                        color: "currentColor",
                        className: a()({ [L.actionBarIcon]: M }),
                    }),
                }),
            ],
        }),
        draftType: n,
        id: s.id,
        channelId: t,
        handleEditModal: x,
        keyboardModeEnabled: u,
        size: T,
        className: a()({ [L.attachmentItemSmall]: M }),
        children: [
            (0, r.jsx)(k, { upload: s, size: T, clip: w ? v : void 0, guildId: P }),
            !N &&
                (!O || w) &&
                (0, r.jsx)("div", {
                    className: L.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(h.E, {
                        className: L.filename,
                        variant: "text-sm/normal",
                        children: null != A ? A : O ? v.name : s.filename,
                    }),
                }),
            O &&
                !w &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(S.A, {
                            className: L.clipsFooter,
                            createdAt: v.createdAt,
                            participantIds: v.users,
                            applicationId: v.applicationId,
                            title: v.name,
                            guildId: P,
                        }),
                        (0, r.jsx)(E.Lp, {
                            color: l.A.colors.BACKGROUND_BRAND.css,
                            className: L.clipsBadge,
                            text: D.intl.string(D.t.oA4afG),
                        }),
                    ],
                }),
        ],
    });
}
