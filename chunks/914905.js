"use strict";
n.d(t, { A: () => w, J: () => L }), n(323874), n(14289), n(35956);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(939249),
    c = n(192308),
    u = n(952270),
    d = n(39623),
    h = n(22231),
    m = n(241326),
    p = n(834730),
    f = n(608299),
    g = n(427281),
    x = n(565150),
    C = n(401648),
    A = n(607470),
    E = n(256905),
    I = n(302031),
    y = n(734057),
    v = n(515718),
    S = n(851023),
    N = n(215497),
    j = n(985018),
    _ = n(443024);
let T = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function b(e) {
    let { alt: t, spoiler: n, renderContent: s, size: r } = e,
        [o, c] = i.useState(!1);
    return (0, l.jsx)(I.Bs.Provider, {
        value: !n,
        children: (0, l.jsx)(I.Ay, {
            type: I.Ay.Types.ATTACHMENT,
            onReveal: () => c(!0),
            className: a()(_.spoilerContainer, {
                [_.sizeXSmall]: r === N.L.XSMALL,
                [_.sizeXXSmall]: r === N.L.XXSMALL,
            }),
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: _.spoilerWrapper,
                    children: [
                        s(e),
                        (0, l.jsxs)("div", {
                            className: _.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, l.jsx)("span", { className: _.altTag, children: j.intl.string(j.t.QEW81z) })
                                    : null,
                                o && n
                                    ? (0, l.jsx)("span", {
                                          className: _.altTag,
                                          children: j.intl.string(j.t["F+x38C"]),
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
    let { file: t, alt: n, spoiler: s, size: r = N.L.MEDIUM, onMouseEnter: c } = e,
        [u, d] = i.useState(),
        [h, m] = i.useState({ width: 0, height: 0 }),
        p = r === N.L.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === T.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, v.z$)(n.width, n.height);
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
                          className: a()(_.media, {
                              [_.spoiler]: e,
                              [_.imageSmall]: p,
                              [_.sizeXSmall]: r === N.L.XSMALL,
                              [_.sizeXXSmall]: r === N.L.XXSMALL,
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
                (0, E.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: u }],
                    shouldHideMediaOptions: !0,
                });
        }, [u]),
        x = t?.name != null ? t.name : j.intl.string(j.t.lduvqL),
        C =
            null != n && "" !== n
                ? j.intl.formatToPlainString(j.t["8TRAzR"], { filename: x, alt: n })
                : j.intl.formatToPlainString(j.t.lXoOEZ, { filename: x });
    return (0, l.jsx)("div", {
        onMouseEnter: c,
        className: a()(_.mediaContainer, { [_.imageSmall]: p }),
        children: (0, l.jsx)(o.D, {
            onClick: g,
            className: _.clickableMedia,
            "aria-label": C,
            tabIndex: -1,
            children: (0, l.jsx)(b, { size: r, alt: n, spoiler: s, renderContent: f }),
        }),
    });
}
function O(e) {
    let {
            file: t,
            alt: n,
            spoiler: s,
            size: r = N.L.MEDIUM,
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
            className: _.mediaContainer,
            children: [
                (0, l.jsx)(b, {
                    size: r,
                    alt: n,
                    spoiler: s,
                    renderContent: (e) =>
                        (0, l.jsx)(A.A, {
                            ref: p,
                            src: h,
                            className: a()(_.media, {
                                [_.spoiler]: e,
                                [_.sizeXSmall]: r === N.L.XSMALL,
                                [_.sizeXXSmall]: r === N.L.XXSMALL,
                            }),
                            onError: c,
                            preload: "none",
                            "aria-hidden": !0,
                        }),
                }),
                null != u &&
                    (0, l.jsx)("div", {
                        className: _.clipOverlayHeader,
                        inert: !0,
                        children: (0, l.jsx)(C.A, {
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
function L(e) {
    let { upload: t, size: n = N.L.MEDIUM, onMouseEnter: s, clip: r, guildId: o } = e,
        [c, u] = i.useState(!1);
    return t.isImage && t.item.platform === x.xz.WEB
        ? (0, l.jsx)(R, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: s })
        : !c && t.isVideo && t.item.platform === x.xz.WEB
          ? (0, l.jsx)(O, {
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
                className: a()(_.icon, _[t.classification ?? ""], {
                    [_.imageSmall]: n === N.L.SMALL,
                    [_.sizeXSmall]: n === N.L.XSMALL,
                    [_.sizeXXSmall]: n === N.L.XXSMALL,
                }),
                children: (0, l.jsx)("div", {
                    className: _.tags,
                    children: t.spoiler
                        ? (0, l.jsx)("span", { className: _.altTag, children: j.intl.string(j.t["F+x38C"]) })
                        : null,
                }),
            });
}
function w(e) {
    let {
            channelId: t,
            draftType: n,
            upload: s,
            keyboardModeEnabled: o,
            label: x,
            size: C = N.L.MEDIUM,
            canEdit: A = !0,
            hideFileName: E = !1,
            clip: I,
        } = e,
        v = null != I,
        T = C === N.L.SMALL,
        b = (0, r.bG)([y.A], () => y.A.getChannel(t)?.guild_id),
        R = (e) => {
            e.stopPropagation(),
                (0, c.openModal)((e) =>
                    (0, l.jsx)(g.default, {
                        ...e,
                        draftType: n,
                        upload: s,
                        channelId: t,
                        onSubmit: (e) => {
                            let { name: l, description: i, spoiler: a } = e;
                            f.A.update(t, s.id, n, { filename: l, description: i, spoiler: a });
                        },
                    }),
                );
        };
    return (0, l.jsxs)(N.A, {
        actions: (0, l.jsxs)(i.Fragment, {
            children: [
                A
                    ? (0, l.jsx)(S.A, {
                          className: a()({ [_.action]: T }),
                          tooltip: v ? j.intl.string(j.t.MYgdY2) : j.intl.string(j.t.cuurzA),
                          onClick: () => f.A.update(t, s.id, n, { spoiler: !s.spoiler }),
                          children: s.spoiler
                              ? (0, l.jsx)(u.G, {
                                    size: "md",
                                    color: "currentColor",
                                    className: a()({ [_.actionBarIcon]: T }),
                                })
                              : (0, l.jsx)(d.b, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: a()({ [_.actionBarIcon]: T }),
                                }),
                      })
                    : null,
                A && !v
                    ? (0, l.jsx)(S.A, {
                          className: a()({ [_.action]: T }),
                          tooltip: j.intl.string(j.t.Y8ujqr),
                          onClick: R,
                          children: (0, l.jsx)(h.R, {
                              size: "xs",
                              color: "currentColor",
                              className: a()({ [_.actionBarIcon]: T }),
                          }),
                      })
                    : null,
                (0, l.jsx)(S.A, {
                    className: a()({ [_.action]: T }),
                    tooltip: v ? j.intl.string(j.t.MskAXa) : j.intl.string(j.t.vN7REz),
                    onClick: () => f.A.remove(t, s.id, n),
                    dangerous: !0,
                    children: (0, l.jsx)(m.u, {
                        size: "md",
                        color: "currentColor",
                        className: a()({ [_.actionBarIcon]: T }),
                    }),
                }),
            ],
        }),
        draftType: n,
        id: s.id,
        channelId: t,
        handleEditModal: R,
        keyboardModeEnabled: o,
        size: C,
        className: a()({ [_.attachmentItemSmall]: T }),
        children: [
            (0, l.jsx)(L, { upload: s, size: C, clip: I, guildId: b }),
            !E &&
                (0, l.jsx)("div", {
                    className: _.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, l.jsx)(p.E, {
                        className: _.filename,
                        variant: "text-sm/normal",
                        children: null != x ? x : v ? I.name : s.filename,
                    }),
                }),
        ],
    });
}
