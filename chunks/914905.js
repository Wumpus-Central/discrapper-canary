"use strict";
n.d(t, { A: () => L, J: () => D }), n(323874), n(14289), n(35956);
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
    T = n(661191),
    S = n(851023),
    y = n(349688),
    v = n(985018),
    N = n(156544);
let C = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function R(e) {
    let { alt: t, spoiler: n, renderContent: s, size: o } = e,
        [l, u] = i.useState(!1);
    return (0, r.jsx)(g.Bs.Provider, {
        value: !n,
        children: (0, r.jsx)(g.Ay, {
            containerStyles:
                o === y.L.CLIP ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, boxShadow: "none" } : void 0,
            type: g.Ay.Types.ATTACHMENT,
            onReveal: () => u(!0),
            className: a()(N.spoilerContainer, {
                [N.sizeXSmall]: o === y.L.XSMALL,
                [N.sizeXXSmall]: o === y.L.XXSMALL,
            }),
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: N.spoilerWrapper,
                    children: [
                        s(e),
                        (0, r.jsxs)("div", {
                            className: N.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, r.jsx)("span", { className: N.altTag, children: v.intl.string(v.t.QEW81z) })
                                    : null,
                                l && n
                                    ? (0, r.jsx)("span", {
                                          className: N.altTag,
                                          children: v.intl.string(v.t["F+x38C"]),
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
    let { file: t, alt: n, spoiler: s, size: o = y.L.MEDIUM, onMouseEnter: l } = e,
        [c, d] = i.useState(),
        [_, f] = i.useState({ width: 0, height: 0 }),
        p = o === y.L.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === C.includes(t.type)) return;
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
                          className: a()(N.media, {
                              [N.spoiler]: e,
                              [N.imageSmall]: p,
                              [N.sizeXSmall]: o === y.L.XSMALL,
                              [N.sizeXXSmall]: o === y.L.XXSMALL,
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
        g = t?.name != null ? t.name : v.intl.string(v.t.lduvqL),
        A =
            null != n && "" !== n
                ? v.intl.formatToPlainString(v.t["8TRAzR"], { filename: g, alt: n })
                : v.intl.formatToPlainString(v.t.lXoOEZ, { filename: g });
    return (0, r.jsx)("div", {
        onMouseEnter: l,
        className: a()(N.mediaContainer, { [N.imageSmall]: p }),
        children: (0, r.jsx)(u.DUT, {
            onClick: m,
            className: N.clickableMedia,
            "aria-label": A,
            tabIndex: -1,
            children: (0, r.jsx)(R, { size: o, alt: n, spoiler: s, renderContent: h }),
        }),
    });
}
function b(e) {
    let {
            file: t,
            alt: n,
            spoiler: s,
            size: o = y.L.MEDIUM,
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
            className: N.mediaContainer,
            children: [
                (0, r.jsx)(R, {
                    size: o,
                    alt: n,
                    spoiler: s,
                    renderContent: (e) =>
                        (0, r.jsx)(m.A, {
                            ref: h,
                            src: _,
                            className: a()(N.media, {
                                [N.spoiler]: e,
                                [N.sizeClip]: o === y.L.CLIP,
                                [N.sizeXSmall]: o === y.L.XSMALL,
                                [N.sizeXXSmall]: o === y.L.XXSMALL,
                            }),
                            onError: u,
                            preload: "none",
                            "aria-hidden": !0,
                        }),
                }),
                null != c &&
                    (0, r.jsx)("div", {
                        className: N.clipOverlayHeader,
                        inert: !0,
                        children: (0, r.jsx)(p.A, {
                            title: c.name,
                            createdAt: T.default.extractTimestamp(c.id),
                            participantIds: c.users,
                            applicationId: c.applicationId,
                            guildId: d,
                        }),
                    }),
            ],
        })
    );
}
function D(e) {
    let { upload: t, size: n = y.L.MEDIUM, onMouseEnter: s, clip: o, guildId: l } = e,
        [u, c] = i.useState(!1);
    return t.isImage && t.item.platform === _.xz.WEB
        ? (0, r.jsx)(O, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: s })
        : !u && t.isVideo && t.item.platform === _.xz.WEB
          ? (0, r.jsx)(b, {
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
                className: a()(N.icon, N[t.classification ?? ""], {
                    [N.imageSmall]: n === y.L.SMALL,
                    [N.sizeXSmall]: n === y.L.XSMALL,
                    [N.sizeXXSmall]: n === y.L.XXSMALL,
                }),
                children: (0, r.jsx)("div", {
                    className: N.tags,
                    children: t.spoiler
                        ? (0, r.jsx)("span", { className: N.altTag, children: v.intl.string(v.t["F+x38C"]) })
                        : null,
                }),
            });
}
function L(e) {
    let {
            channelId: t,
            draftType: n,
            upload: s,
            keyboardModeEnabled: _,
            label: p,
            size: m = y.L.MEDIUM,
            canEdit: E = !0,
            hideFileName: g = !1,
            clip: I,
        } = e,
        C = null != I,
        { newEmbedUi: R } = f.Q.useConfig({ location: "ChannelAttachmentUpload" }),
        O = (m = C && !R ? y.L.CLIP : m) === y.L.SMALL,
        b = (0, o.bG)([A.A], () => A.A.getChannel(t)?.guild_id),
        L = (e) => {
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
    return (0, r.jsxs)(y.A, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [
                E
                    ? (0, r.jsx)(S.A, {
                          className: a()({ [N.action]: O }),
                          tooltip: C ? v.intl.string(v.t.MYgdY2) : v.intl.string(v.t.cuurzA),
                          onClick: () => c.A.update(t, s.id, n, { spoiler: !s.spoiler }),
                          children: s.spoiler
                              ? (0, r.jsx)(u.G3N, {
                                    size: "md",
                                    color: "currentColor",
                                    className: a()({ [N.actionBarIcon]: O }),
                                })
                              : (0, r.jsx)(u.bMW, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: a()({ [N.actionBarIcon]: O }),
                                }),
                      })
                    : null,
                E && !C
                    ? (0, r.jsx)(S.A, {
                          className: a()({ [N.action]: O }),
                          tooltip: v.intl.string(v.t.Y8ujqr),
                          onClick: L,
                          children: (0, r.jsx)(u.R2l, {
                              size: "xs",
                              color: "currentColor",
                              className: a()({ [N.actionBarIcon]: O }),
                          }),
                      })
                    : null,
                (0, r.jsx)(S.A, {
                    className: a()({ [N.action]: O }),
                    tooltip: C ? v.intl.string(v.t.MskAXa) : v.intl.string(v.t.vN7REz),
                    onClick: () => c.A.remove(t, s.id, n),
                    dangerous: !0,
                    children: (0, r.jsx)(u.ucK, {
                        size: "md",
                        color: "currentColor",
                        className: a()({ [N.actionBarIcon]: O }),
                    }),
                }),
            ],
        }),
        draftType: n,
        id: s.id,
        channelId: t,
        handleEditModal: L,
        keyboardModeEnabled: _,
        size: m,
        className: a()({ [N.attachmentItemSmall]: O }),
        children: [
            (0, r.jsx)(D, { upload: s, size: m, clip: R ? I : void 0, guildId: b }),
            !g &&
                (!C || R) &&
                (0, r.jsx)("div", {
                    className: N.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(u.Text, {
                        className: N.filename,
                        variant: "text-sm/normal",
                        children: null != p ? p : C ? I.name : s.filename,
                    }),
                }),
            C &&
                !R &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.A, {
                            className: N.clipsFooter,
                            createdAt: T.default.extractTimestamp(I.id),
                            participantIds: I.users,
                            applicationId: I.applicationId,
                            title: I.name,
                            guildId: b,
                        }),
                        (0, r.jsx)(u.LpS, {
                            color: l.A.colors.BACKGROUND_BRAND.css,
                            className: N.clipsBadge,
                            text: v.intl.string(v.t.oA4afG),
                        }),
                    ],
                }),
        ],
    });
}
