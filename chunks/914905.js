"use strict";
n.d(t, { A: () => b, J: () => O }), n(323874), n(14289), n(35956);
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
    f = n(458517),
    p = n(607470),
    h = n(256905),
    m = n(302031),
    E = n(734057),
    g = n(515718),
    A = n(661191),
    I = n(851023),
    T = n(349688),
    S = n(985018),
    y = n(156544);
let v = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function N(e) {
    let { alt: t, spoiler: n, renderContent: s, size: o } = e,
        [l, u] = i.useState(!1);
    return (0, r.jsx)(m.Bs.Provider, {
        value: !n,
        children: (0, r.jsx)(m.Ay, {
            containerStyles:
                o === T.L.CLIP ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, boxShadow: "none" } : void 0,
            type: m.Ay.Types.ATTACHMENT,
            onReveal: () => u(!0),
            className: a()(y.spoilerContainer, {
                [y.sizeXSmall]: o === T.L.XSMALL,
                [y.sizeXXSmall]: o === T.L.XXSMALL,
            }),
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: y.spoilerWrapper,
                    children: [
                        s(e),
                        (0, r.jsxs)("div", {
                            className: y.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, r.jsx)("span", { className: y.altTag, children: S.intl.string(S.t.QEW81z) })
                                    : null,
                                l && n
                                    ? (0, r.jsx)("span", {
                                          className: y.altTag,
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
function C(e) {
    let { file: t, alt: n, spoiler: s, size: o = T.L.MEDIUM, onMouseEnter: l } = e,
        [c, d] = i.useState(),
        [_, f] = i.useState({ width: 0, height: 0 }),
        p = o === T.L.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === v.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, g.z$)(n.width, n.height);
                f({ width: e, height: t });
            }),
            (n.src = e),
            () => {
                d(void 0), f({ width: 0, height: 0 }), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let m = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == c
                    ? (0, r.jsx)(r.Fragment, {})
                    : (0, r.jsx)("img", {
                          src: c,
                          className: a()(y.media, {
                              [y.spoiler]: e,
                              [y.imageSmall]: p,
                              [y.sizeXSmall]: o === T.L.XSMALL,
                              [y.sizeXXSmall]: o === T.L.XXSMALL,
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
                (0, h.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: c }],
                    shouldHideMediaOptions: !0,
                });
        }, [c]),
        A = t?.name != null ? t.name : S.intl.string(S.t.lduvqL),
        I =
            null != n && "" !== n
                ? S.intl.formatToPlainString(S.t["8TRAzR"], { filename: A, alt: n })
                : S.intl.formatToPlainString(S.t.lXoOEZ, { filename: A });
    return (0, r.jsx)("div", {
        onMouseEnter: l,
        className: a()(y.mediaContainer, { [y.imageSmall]: p }),
        children: (0, r.jsx)(u.DUT, {
            onClick: E,
            className: y.clickableMedia,
            "aria-label": I,
            children: (0, r.jsx)(N, { size: o, alt: n, spoiler: s, renderContent: m }),
        }),
    });
}
function R(e) {
    let { file: t, alt: n, spoiler: s, size: o = T.L.MEDIUM, onMouseEnter: l, onVideoLoadError: u } = e,
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
            className: y.mediaContainer,
            children: (0, r.jsx)(N, {
                size: o,
                alt: n,
                spoiler: s,
                renderContent: (e) =>
                    (0, r.jsx)(p.A, {
                        ref: _,
                        src: c,
                        className: a()(y.media, {
                            [y.spoiler]: e,
                            [y.sizeClip]: o === T.L.CLIP,
                            [y.sizeXSmall]: o === T.L.XSMALL,
                            [y.sizeXXSmall]: o === T.L.XXSMALL,
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
    let { upload: t, size: n = T.L.MEDIUM, onMouseEnter: s } = e,
        [o, l] = i.useState(!1);
    return t.isImage && t.item.platform === _.xz.WEB
        ? (0, r.jsx)(C, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: s })
        : !o && t.isVideo && t.item.platform === _.xz.WEB
          ? (0, r.jsx)(R, {
                file: t.item.file,
                size: n,
                alt: t.description,
                spoiler: t.spoiler,
                onMouseEnter: s,
                onVideoLoadError: () => l(!0),
            })
          : (0, r.jsx)("div", {
                onMouseEnter: s,
                className: a()(y.icon, y[t.classification ?? ""], {
                    [y.imageSmall]: n === T.L.SMALL,
                    [y.sizeXSmall]: n === T.L.XSMALL,
                    [y.sizeXXSmall]: n === T.L.XXSMALL,
                }),
                children: (0, r.jsx)("div", {
                    className: y.tags,
                    children: t.spoiler
                        ? (0, r.jsx)("span", { className: y.altTag, children: S.intl.string(S.t["F+x38C"]) })
                        : null,
                }),
            });
}
function b(e) {
    let {
            channelId: t,
            draftType: n,
            upload: s,
            keyboardModeEnabled: _,
            label: p,
            size: h = T.L.MEDIUM,
            canEdit: m = !0,
            hideFileName: g = !1,
            clip: v,
        } = e,
        N = null != v,
        C = (h = N ? T.L.CLIP : h) === T.L.SMALL,
        R = (0, o.bG)([E.A], () => E.A.getChannel(t)?.guild_id),
        b = (e) => {
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
    return (0, r.jsxs)(T.A, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [
                m
                    ? (0, r.jsx)(I.A, {
                          className: a()({ [y.action]: C }),
                          tooltip: N ? S.intl.string(S.t.MYgdY2) : S.intl.string(S.t.cuurzA),
                          onClick: () => c.A.update(t, s.id, n, { spoiler: !s.spoiler }),
                          children: s.spoiler
                              ? (0, r.jsx)(u.G3N, {
                                    size: "md",
                                    color: "currentColor",
                                    className: a()({ [y.actionBarIcon]: C }),
                                })
                              : (0, r.jsx)(u.bMW, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: a()({ [y.actionBarIcon]: C }),
                                }),
                      })
                    : null,
                m && !N
                    ? (0, r.jsx)(I.A, {
                          className: a()({ [y.action]: C }),
                          tooltip: S.intl.string(S.t.Y8ujqr),
                          onClick: b,
                          children: (0, r.jsx)(u.R2l, {
                              size: "xs",
                              color: "currentColor",
                              className: a()({ [y.actionBarIcon]: C }),
                          }),
                      })
                    : null,
                (0, r.jsx)(I.A, {
                    className: a()({ [y.action]: C }),
                    tooltip: N ? S.intl.string(S.t.MskAXa) : S.intl.string(S.t.vN7REz),
                    onClick: () => c.A.remove(t, s.id, n),
                    dangerous: !0,
                    children: (0, r.jsx)(u.ucK, {
                        size: "md",
                        color: "currentColor",
                        className: a()({ [y.actionBarIcon]: C }),
                    }),
                }),
            ],
        }),
        draftType: n,
        id: s.id,
        channelId: t,
        handleEditModal: b,
        keyboardModeEnabled: _,
        size: h,
        className: a()({ [y.attachmentItemSmall]: C }),
        children: [
            (0, r.jsx)(O, { upload: s, size: h }),
            !g &&
                !N &&
                (0, r.jsx)("div", {
                    className: y.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(u.Text, {
                        className: y.filename,
                        variant: "text-sm/normal",
                        children: null != p ? p : s.filename,
                    }),
                }),
            N &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.A, {
                            className: y.clipsFooter,
                            createdAt: A.default.extractTimestamp(v.id),
                            participantIds: v.users,
                            applicationId: v.applicationId,
                            title: v.name,
                            guildId: R,
                        }),
                        (0, r.jsx)(u.LpS, {
                            color: l.A.colors.BACKGROUND_BRAND.css,
                            className: y.clipsBadge,
                            text: S.intl.string(S.t.oA4afG),
                        }),
                    ],
                }),
        ],
    });
}
