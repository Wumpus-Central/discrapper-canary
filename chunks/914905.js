"use strict";
n.d(t, { A: () => x, J: () => U }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(661531),
    d = n(939249),
    _ = n(192308),
    u = n(952270),
    c = n(39623),
    E = n(22231),
    h = n(241326),
    m = n(834730),
    f = n(777666),
    g = n(608299),
    p = n(427281),
    A = n(565150),
    I = n(672477),
    T = n(401648),
    S = n(458517),
    N = n(607470),
    C = n(256905),
    R = n(302031),
    O = n(734057),
    y = n(515718),
    v = n(851023),
    D = n(215497),
    L = n(985018),
    b = n(443024);
let w = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function P(e) {
    let { alt: t, spoiler: n, renderContent: s, size: o } = e,
        [l, d] = r.useState(!1);
    return (0, i.jsx)(R.Bs.Provider, {
        value: !n,
        children: (0, i.jsx)(R.Ay, {
            containerStyles:
                o === D.L.CLIP ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, boxShadow: "none" } : void 0,
            type: R.Ay.Types.ATTACHMENT,
            onReveal: () => d(!0),
            className: a()(b.spoilerContainer, {
                [b.sizeXSmall]: o === D.L.XSMALL,
                [b.sizeXXSmall]: o === D.L.XXSMALL,
            }),
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: b.spoilerWrapper,
                    children: [
                        s(e),
                        (0, i.jsxs)("div", {
                            className: b.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, i.jsx)("span", { className: b.altTag, children: L.intl.string(L.t.QEW81z) })
                                    : null,
                                l && n
                                    ? (0, i.jsx)("span", {
                                          className: b.altTag,
                                          children: L.intl.string(L.t["F+x38C"]),
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
    let { file: t, alt: n, spoiler: s, size: o = D.L.MEDIUM, onMouseEnter: l } = e,
        [_, u] = r.useState(),
        [c, E] = r.useState({ width: 0, height: 0 }),
        h = o === D.L.SMALL;
    r.useEffect(() => {
        if (null == t || !1 === w.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        u(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, y.z$)(n.width, n.height);
                E({ width: e, height: t });
            }),
            (n.src = e),
            () => {
                u(void 0), E({ width: 0, height: 0 }), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let m = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == _
                    ? (0, i.jsx)(i.Fragment, {})
                    : (0, i.jsx)("img", {
                          src: _,
                          className: a()(b.media, {
                              [b.spoiler]: e,
                              [b.imageSmall]: h,
                              [b.sizeXSmall]: o === D.L.XSMALL,
                              [b.sizeXXSmall]: o === D.L.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: n ?? "",
                          style: t ? c : {},
                      });
            },
            [_, h, o, n, c],
        ),
        f = r.useCallback(() => {
            null != _ &&
                (0, C.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: _ }],
                    shouldHideMediaOptions: !0,
                });
        }, [_]),
        g = t?.name != null ? t.name : L.intl.string(L.t.lduvqL),
        p =
            null != n && "" !== n
                ? L.intl.formatToPlainString(L.t["8TRAzR"], { filename: g, alt: n })
                : L.intl.formatToPlainString(L.t.lXoOEZ, { filename: g });
    return (0, i.jsx)("div", {
        onMouseEnter: l,
        className: a()(b.mediaContainer, { [b.imageSmall]: h }),
        children: (0, i.jsx)(d.D, {
            onClick: f,
            className: b.clickableMedia,
            "aria-label": p,
            tabIndex: -1,
            children: (0, i.jsx)(P, { size: o, alt: n, spoiler: s, renderContent: m }),
        }),
    });
}
function M(e) {
    let {
            file: t,
            alt: n,
            spoiler: s,
            size: o = D.L.MEDIUM,
            onMouseEnter: l,
            onVideoLoadError: d,
            clip: _,
            guildId: u,
        } = e,
        [c, E] = r.useState(),
        h = r.useRef(null);
    return (
        r.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return (
                E(e),
                () => {
                    E(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, i.jsxs)("div", {
            onMouseEnter: l,
            className: b.mediaContainer,
            children: [
                (0, i.jsx)(P, {
                    size: o,
                    alt: n,
                    spoiler: s,
                    renderContent: (e) =>
                        (0, i.jsx)(N.A, {
                            ref: h,
                            src: c,
                            className: a()(b.media, {
                                [b.spoiler]: e,
                                [b.sizeClip]: o === D.L.CLIP,
                                [b.sizeXSmall]: o === D.L.XSMALL,
                                [b.sizeXXSmall]: o === D.L.XXSMALL,
                            }),
                            onError: d,
                            preload: "none",
                            "aria-hidden": !0,
                        }),
                }),
                null != _ &&
                    (0, i.jsx)("div", {
                        className: b.clipOverlayHeader,
                        inert: !0,
                        children: (0, i.jsx)(T.A, {
                            title: _.name,
                            createdAt: _.createdAt,
                            participantIds: _.users,
                            applicationId: _.applicationId,
                            guildId: u,
                        }),
                    }),
            ],
        })
    );
}
function U(e) {
    let { upload: t, size: n = D.L.MEDIUM, onMouseEnter: s, clip: o, guildId: l } = e,
        [d, _] = r.useState(!1);
    return t.isImage && t.item.platform === A.xz.WEB
        ? (0, i.jsx)(k, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: s })
        : !d && t.isVideo && t.item.platform === A.xz.WEB
          ? (0, i.jsx)(M, {
                file: t.item.file,
                size: n,
                alt: t.description,
                spoiler: t.spoiler,
                onMouseEnter: s,
                onVideoLoadError: () => _(!0),
                clip: o,
                guildId: l,
            })
          : (0, i.jsx)("div", {
                onMouseEnter: s,
                className: a()(b.icon, b[t.classification ?? ""], {
                    [b.imageSmall]: n === D.L.SMALL,
                    [b.sizeXSmall]: n === D.L.XSMALL,
                    [b.sizeXXSmall]: n === D.L.XXSMALL,
                }),
                children: (0, i.jsx)("div", {
                    className: b.tags,
                    children: t.spoiler
                        ? (0, i.jsx)("span", { className: b.altTag, children: L.intl.string(L.t["F+x38C"]) })
                        : null,
                }),
            });
}
function x(e) {
    let {
            channelId: t,
            draftType: n,
            upload: s,
            keyboardModeEnabled: d,
            label: A,
            size: T = D.L.MEDIUM,
            canEdit: N = !0,
            hideFileName: C = !1,
            clip: R,
        } = e,
        y = null != R,
        { newEmbedUi: w } = I.Q.useConfig({ location: "ChannelAttachmentUpload" }),
        P = (T = y && !w ? D.L.CLIP : T) === D.L.SMALL,
        k = (0, o.bG)([O.A], () => O.A.getChannel(t)?.guild_id),
        M = (e) => {
            e.stopPropagation(),
                (0, _.openModal)((e) =>
                    (0, i.jsx)(p.default, {
                        ...e,
                        draftType: n,
                        upload: s,
                        channelId: t,
                        onSubmit: (e) => {
                            let { name: i, description: r, spoiler: a } = e;
                            g.A.update(t, s.id, n, { filename: i, description: r, spoiler: a });
                        },
                    }),
                );
        };
    return (0, i.jsxs)(D.A, {
        actions: (0, i.jsxs)(r.Fragment, {
            children: [
                N
                    ? (0, i.jsx)(v.A, {
                          className: a()({ [b.action]: P }),
                          tooltip: y ? L.intl.string(L.t.MYgdY2) : L.intl.string(L.t.cuurzA),
                          onClick: () => g.A.update(t, s.id, n, { spoiler: !s.spoiler }),
                          children: s.spoiler
                              ? (0, i.jsx)(u.G, {
                                    size: "md",
                                    color: "currentColor",
                                    className: a()({ [b.actionBarIcon]: P }),
                                })
                              : (0, i.jsx)(c.b, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: a()({ [b.actionBarIcon]: P }),
                                }),
                      })
                    : null,
                N && !y
                    ? (0, i.jsx)(v.A, {
                          className: a()({ [b.action]: P }),
                          tooltip: L.intl.string(L.t.Y8ujqr),
                          onClick: M,
                          children: (0, i.jsx)(E.R, {
                              size: "xs",
                              color: "currentColor",
                              className: a()({ [b.actionBarIcon]: P }),
                          }),
                      })
                    : null,
                (0, i.jsx)(v.A, {
                    className: a()({ [b.action]: P }),
                    tooltip: y ? L.intl.string(L.t.MskAXa) : L.intl.string(L.t.vN7REz),
                    onClick: () => g.A.remove(t, s.id, n),
                    dangerous: !0,
                    children: (0, i.jsx)(h.u, {
                        size: "md",
                        color: "currentColor",
                        className: a()({ [b.actionBarIcon]: P }),
                    }),
                }),
            ],
        }),
        draftType: n,
        id: s.id,
        channelId: t,
        handleEditModal: M,
        keyboardModeEnabled: d,
        size: T,
        className: a()({ [b.attachmentItemSmall]: P }),
        children: [
            (0, i.jsx)(U, { upload: s, size: T, clip: w ? R : void 0, guildId: k }),
            !C &&
                (!y || w) &&
                (0, i.jsx)("div", {
                    className: b.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(m.E, {
                        className: b.filename,
                        variant: "text-sm/normal",
                        children: null != A ? A : y ? R.name : s.filename,
                    }),
                }),
            y &&
                !w &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(S.A, {
                            className: b.clipsFooter,
                            createdAt: R.createdAt,
                            participantIds: R.users,
                            applicationId: R.applicationId,
                            title: R.name,
                            guildId: k,
                        }),
                        (0, i.jsx)(f.Lp, {
                            color: l.A.colors.BACKGROUND_BRAND.css,
                            className: b.clipsBadge,
                            text: L.intl.string(L.t.oA4afG),
                        }),
                    ],
                }),
        ],
    });
}
