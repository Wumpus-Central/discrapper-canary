"use strict";
n.d(t, { A: () => O, J: () => R }), n(323874), n(14289), n(35956);
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
    p = n(607470),
    h = n(256905),
    m = n(302031),
    g = n(734057),
    E = n(515718),
    A = n(661191),
    I = n(851023),
    T = n(349688),
    y = n(985018),
    S = n(76397);
let v = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function C(e) {
    let { alt: t, spoiler: n, renderContent: a, size: o } = e,
        [l, u] = i.useState(!1);
    return (0, r.jsx)(m.Bs.Provider, {
        value: !n,
        children: (0, r.jsx)(m.Ay, {
            containerStyles:
                o === T.L.CLIP ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, boxShadow: "none" } : void 0,
            type: m.Ay.Types.ATTACHMENT,
            onReveal: () => u(!0),
            className: s()(S.spoilerContainer, {
                [S.sizeXSmall]: o === T.L.XSMALL,
                [S.sizeXXSmall]: o === T.L.XXSMALL,
            }),
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: S.spoilerWrapper,
                    children: [
                        a(e),
                        (0, r.jsxs)("div", {
                            className: S.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, r.jsx)("span", { className: S.altTag, children: y.intl.string(y.t.QEW81z) })
                                    : null,
                                l && n
                                    ? (0, r.jsx)("span", {
                                          className: S.altTag,
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
function b(e) {
    let { file: t, alt: n, spoiler: a, size: o = T.L.MEDIUM, onMouseEnter: l } = e,
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
                let { width: e, height: t } = (0, E.z$)(n.width, n.height);
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
                          className: s()(S.media, {
                              [S.spoiler]: e,
                              [S.imageSmall]: p,
                              [S.sizeXSmall]: o === T.L.XSMALL,
                              [S.sizeXXSmall]: o === T.L.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: n ?? "",
                          style: t ? _ : {},
                      });
            },
            [c, p, o, n, _],
        ),
        g = i.useCallback(() => {
            null != c &&
                (0, h.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: c }],
                    shouldHideMediaOptions: !0,
                });
        }, [c]),
        A = t?.name != null ? t.name : y.intl.string(y.t.lduvqL),
        I =
            null != n && "" !== n
                ? y.intl.formatToPlainString(y.t["8TRAzR"], { filename: A, alt: n })
                : y.intl.formatToPlainString(y.t.lXoOEZ, { filename: A });
    return (0, r.jsx)("div", {
        onMouseEnter: l,
        className: s()(S.mediaContainer, { [S.imageSmall]: p }),
        children: (0, r.jsx)(u.DUT, {
            onClick: g,
            className: S.clickableMedia,
            "aria-label": I,
            children: (0, r.jsx)(C, { size: o, alt: n, spoiler: a, renderContent: m }),
        }),
    });
}
function N(e) {
    let { file: t, alt: n, spoiler: a, size: o = T.L.MEDIUM, onMouseEnter: l, onVideoLoadError: u } = e,
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
            className: S.mediaContainer,
            children: (0, r.jsx)(C, {
                size: o,
                alt: n,
                spoiler: a,
                renderContent: (e) =>
                    (0, r.jsx)(p.A, {
                        ref: _,
                        src: c,
                        className: s()(S.media, {
                            [S.spoiler]: e,
                            [S.sizeClip]: o === T.L.CLIP,
                            [S.sizeXSmall]: o === T.L.XSMALL,
                            [S.sizeXXSmall]: o === T.L.XXSMALL,
                        }),
                        onError: u,
                        preload: "none",
                        "aria-hidden": !0,
                    }),
            }),
        })
    );
}
function R(e) {
    let { upload: t, size: n = T.L.MEDIUM, onMouseEnter: a } = e,
        [o, l] = i.useState(!1);
    return t.isImage && t.item.platform === _.xz.WEB
        ? (0, r.jsx)(b, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: a })
        : !o && t.isVideo && t.item.platform === _.xz.WEB
          ? (0, r.jsx)(N, {
                file: t.item.file,
                size: n,
                alt: t.description,
                spoiler: t.spoiler,
                onMouseEnter: a,
                onVideoLoadError: () => l(!0),
            })
          : (0, r.jsx)("div", {
                onMouseEnter: a,
                className: s()(S.icon, S[t.classification ?? ""], {
                    [S.imageSmall]: n === T.L.SMALL,
                    [S.sizeXSmall]: n === T.L.XSMALL,
                    [S.sizeXXSmall]: n === T.L.XXSMALL,
                }),
                children: (0, r.jsx)("div", {
                    className: S.tags,
                    children: t.spoiler
                        ? (0, r.jsx)("span", { className: S.altTag, children: y.intl.string(y.t["F+x38C"]) })
                        : null,
                }),
            });
}
function O(e) {
    let {
            channelId: t,
            draftType: n,
            upload: a,
            keyboardModeEnabled: _,
            label: p,
            size: h = T.L.MEDIUM,
            canEdit: m = !0,
            hideFileName: E = !1,
            clip: v,
        } = e,
        C = null != v,
        b = (h = C ? T.L.CLIP : h) === T.L.SMALL,
        N = (0, o.bG)([g.A], () => g.A.getChannel(t)?.guild_id),
        O = (e) => {
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
    return (0, r.jsxs)(T.A, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [
                m
                    ? (0, r.jsx)(I.A, {
                          className: s()({ [S.action]: b }),
                          tooltip: C ? y.intl.string(y.t.MYgdY2) : y.intl.string(y.t.cuurzA),
                          onClick: () => c.A.update(t, a.id, n, { spoiler: !a.spoiler }),
                          children: a.spoiler
                              ? (0, r.jsx)(u.G3N, {
                                    size: "md",
                                    color: "currentColor",
                                    className: s()({ [S.actionBarIcon]: b }),
                                })
                              : (0, r.jsx)(u.bMW, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: s()({ [S.actionBarIcon]: b }),
                                }),
                      })
                    : null,
                m && !C
                    ? (0, r.jsx)(I.A, {
                          className: s()({ [S.action]: b }),
                          tooltip: y.intl.string(y.t.Y8ujqr),
                          onClick: O,
                          children: (0, r.jsx)(u.R2l, {
                              size: "xs",
                              color: "currentColor",
                              className: s()({ [S.actionBarIcon]: b }),
                          }),
                      })
                    : null,
                (0, r.jsx)(I.A, {
                    className: s()({ [S.action]: b }),
                    tooltip: C ? y.intl.string(y.t.MskAXa) : y.intl.string(y.t.vN7REz),
                    onClick: () => c.A.remove(t, a.id, n),
                    dangerous: !0,
                    children: (0, r.jsx)(u.ucK, {
                        size: "md",
                        color: "currentColor",
                        className: s()({ [S.actionBarIcon]: b }),
                    }),
                }),
            ],
        }),
        draftType: n,
        id: a.id,
        channelId: t,
        handleEditModal: O,
        keyboardModeEnabled: _,
        size: h,
        className: s()({ [S.attachmentItemSmall]: b }),
        children: [
            (0, r.jsx)(R, { upload: a, size: h }),
            !E &&
                !C &&
                (0, r.jsx)("div", {
                    className: S.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(u.Text, {
                        className: S.filename,
                        variant: "text-sm/normal",
                        children: null != p ? p : a.filename,
                    }),
                }),
            C &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.A, {
                            className: S.clipsFooter,
                            createdAt: A.default.extractTimestamp(v.id),
                            participantIds: v.users,
                            applicationId: v.applicationId,
                            title: v.name,
                            guildId: N,
                        }),
                        (0, r.jsx)(u.LpS, {
                            color: l.A.colors.BACKGROUND_BRAND.css,
                            className: S.clipsBadge,
                            text: y.intl.string(y.t.oA4afG),
                        }),
                    ],
                }),
        ],
    });
}
