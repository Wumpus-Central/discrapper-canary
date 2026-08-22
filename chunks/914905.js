"use strict";
n.d(t, { A: () => L, J: () => M }), n(323874), n(14289), n(35956);
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(939249),
    u = n(192308),
    c = n(952270),
    d = n(39623),
    h = n(22231),
    m = n(241326),
    f = n(834730),
    p = n(608299),
    g = n(565150),
    x = n(478531),
    A = n(607470),
    C = n(256905),
    E = n(302031),
    I = n(734057),
    y = n(515718),
    v = n(851023),
    S = n(215497),
    N = n(375708),
    _ = n(711918),
    T = n(429955);
let j = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function b(e) {
    let { alt: t, spoiler: n, renderContent: s, size: a } = e,
        [o, u] = i.useState(!1);
    return (0, l.jsx)(E.Bs.Provider, {
        value: !n,
        children: (0, l.jsx)(E.Ay, {
            type: E.Ay.Types.ATTACHMENT,
            onReveal: () => u(!0),
            className: r()(T.spoilerContainer, {
                [T.sizeXSmall]: a === S.L.XSMALL,
                [T.sizeXXSmall]: a === S.L.XXSMALL,
            }),
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: T.spoilerWrapper,
                    children: [
                        s(e),
                        (0, l.jsxs)("div", {
                            className: T.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, l.jsx)("span", { className: T.altTag, children: N.intl.string(N.t.QEW81z) })
                                    : null,
                                o && n
                                    ? (0, l.jsx)("span", {
                                          className: T.altTag,
                                          children: N.intl.string(N.t["F+x38C"]),
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
    let { file: t, alt: n, spoiler: s, size: a = S.L.MEDIUM, onMouseEnter: u } = e,
        [c, d] = i.useState(),
        [h, m] = i.useState({ width: 0, height: 0 }),
        f = a === S.L.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === j.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, y.z$)(n.width, n.height);
                m({ width: e, height: t });
            }),
            (n.src = e),
            () => {
                d(void 0), m({ width: 0, height: 0 }), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let p = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == c
                    ? (0, l.jsx)(l.Fragment, {})
                    : (0, l.jsx)("img", {
                          src: c,
                          className: r()(T.media, {
                              [T.spoiler]: e,
                              [T.imageSmall]: f,
                              [T.sizeXSmall]: a === S.L.XSMALL,
                              [T.sizeXXSmall]: a === S.L.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: n ?? "",
                          style: t ? h : {},
                      });
            },
            [c, f, a, n, h],
        ),
        g = i.useCallback(() => {
            null != c &&
                (0, C.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: c }],
                    shouldHideMediaOptions: !0,
                });
        }, [c]),
        x = t?.name != null ? t.name : N.intl.string(N.t.lduvqL),
        A =
            null != n && "" !== n
                ? N.intl.formatToPlainString(N.t["8TRAzR"], { filename: x, alt: n })
                : N.intl.formatToPlainString(N.t.lXoOEZ, { filename: x });
    return (0, l.jsx)("div", {
        onMouseEnter: u,
        className: r()(T.mediaContainer, { [T.imageSmall]: f }),
        children: (0, l.jsx)(o.D, {
            onClick: g,
            className: T.clickableMedia,
            "aria-label": A,
            tabIndex: -1,
            children: (0, l.jsx)(b, { size: a, alt: n, spoiler: s, renderContent: p }),
        }),
    });
}
function O(e) {
    let {
            file: t,
            alt: n,
            spoiler: s,
            size: a = S.L.MEDIUM,
            onMouseEnter: o,
            onVideoLoadError: u,
            clip: c,
            guildId: d,
        } = e,
        [h, m] = i.useState(),
        f = i.useRef(null);
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
            className: T.mediaContainer,
            children: [
                (0, l.jsx)(b, {
                    size: a,
                    alt: n,
                    spoiler: s,
                    renderContent: (e) =>
                        (0, l.jsx)(A.A, {
                            ref: f,
                            src: h,
                            className: r()(T.media, {
                                [T.spoiler]: e,
                                [T.sizeXSmall]: a === S.L.XSMALL,
                                [T.sizeXXSmall]: a === S.L.XXSMALL,
                            }),
                            onError: u,
                            preload: "none",
                            "aria-hidden": !0,
                        }),
                }),
                null != c &&
                    (0, l.jsx)("div", {
                        className: T.clipOverlayHeader,
                        inert: !0,
                        children: (0, l.jsx)(x.A, {
                            className: T.clipOverlayHeaderContent,
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
function M(e) {
    let { upload: t, size: n = S.L.MEDIUM, onMouseEnter: s, clip: a, guildId: o } = e,
        [u, c] = i.useState(!1);
    return t.isImage && t.item.platform === g.xz.WEB
        ? (0, l.jsx)(R, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: s })
        : !u && t.isVideo && t.item.platform === g.xz.WEB
          ? (0, l.jsx)(O, {
                file: t.item.file,
                size: n,
                alt: t.description,
                spoiler: t.spoiler,
                onMouseEnter: s,
                onVideoLoadError: () => c(!0),
                clip: a,
                guildId: o,
            })
          : (0, l.jsx)("div", {
                onMouseEnter: s,
                className: r()(T.icon, T[t.classification ?? ""], {
                    [T.imageSmall]: n === S.L.SMALL,
                    [T.sizeXSmall]: n === S.L.XSMALL,
                    [T.sizeXXSmall]: n === S.L.XXSMALL,
                }),
                children: (0, l.jsx)("div", {
                    className: T.tags,
                    children: t.spoiler
                        ? (0, l.jsx)("span", { className: T.altTag, children: N.intl.string(N.t["F+x38C"]) })
                        : null,
                }),
            });
}
function L(e) {
    let {
            channelId: t,
            draftType: s,
            upload: o,
            keyboardModeEnabled: g,
            label: x,
            size: A = S.L.MEDIUM,
            canEdit: C = !0,
            hideFileName: E = !1,
            clip: y,
        } = e,
        j = null != y,
        b = A === S.L.SMALL,
        R = (0, a.bG)([I.A], () => I.A.getChannel(t)?.guild_id);
    function O() {
        p.A.remove(t, o.id, s);
    }
    function L(e) {
        (e.stopPropagation(), j)
            ? (0, u.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("459368"),
                      n.e("251714"),
                      n.e("860350"),
                      n.e("180644"),
                      n.e("821717"),
                      n.e("269714"),
                      n.e("19385"),
                      n.e("398104"),
                      n.e("875842"),
                      n.e("883952"),
                      n.e("858337"),
                      n.e("736926"),
                      n.e("220287"),
                      n.e("3131"),
                      n.e("203930"),
                      n.e("903663"),
                      n.e("647177"),
                      n.e("169201"),
                      n.e("8563"),
                      n.e("469985"),
                      n.e("127272"),
                      n.e("466147"),
                      n.e("838090"),
                      n.e("501962"),
                      n.e("901922"),
                      n.e("237715"),
                      n.e("974049"),
                      n.e("280559"),
                      n.e("895008"),
                      n.e("489492"),
                      n.e("29621"),
                  ]).then(n.bind(n, 723028));
                  return (n) => (0, l.jsx)(e, { ...n, channelId: t, clipId: y.id, onEdit: O });
              })
            : (0, u.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("142753"),
                      n.e("734879"),
                      n.e("268582"),
                      n.e("68532"),
                      n.e("570698"),
                  ]).then(n.bind(n, 427281));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          upload: o,
                          onSubmit: (e) => {
                              let { name: n, description: l, spoiler: i } = e;
                              p.A.update(t, o.id, s, { filename: n, description: l, spoiler: i });
                          },
                      });
              });
    }
    return (0, l.jsxs)(S.A, {
        actions: (0, l.jsxs)(i.Fragment, {
            children: [
                C
                    ? (0, l.jsx)(v.A, {
                          className: r()({ [T.action]: b }),
                          tooltip: j ? N.intl.string(N.t.MYgdY2) : N.intl.string(N.t.cuurzA),
                          onClick: () => p.A.update(t, o.id, s, { spoiler: !o.spoiler }),
                          children: o.spoiler
                              ? (0, l.jsx)(c.EyeSlashIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: r()({ [T.actionBarIcon]: b }),
                                })
                              : (0, l.jsx)(d.EyeIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: r()({ [T.actionBarIcon]: b }),
                                }),
                      })
                    : null,
                C
                    ? (0, l.jsx)(v.A, {
                          className: r()({ [T.action]: b }),
                          tooltip: j ? N.intl.string(_.default.V8YlF7) : N.intl.string(N.t.Y8ujqr),
                          onClick: L,
                          children: (0, l.jsx)(h.PencilIcon, {
                              size: "xs",
                              color: "currentColor",
                              className: r()({ [T.actionBarIcon]: b }),
                          }),
                      })
                    : null,
                (0, l.jsx)(v.A, {
                    className: r()({ [T.action]: b }),
                    tooltip: j ? N.intl.string(N.t.MskAXa) : N.intl.string(N.t.vN7REz),
                    onClick: O,
                    dangerous: !0,
                    children: (0, l.jsx)(m.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: r()({ [T.actionBarIcon]: b }),
                    }),
                }),
            ],
        }),
        draftType: s,
        id: o.id,
        channelId: t,
        handleEditModal: L,
        keyboardModeEnabled: g,
        size: A,
        className: r()({ [T.attachmentItemSmall]: b }),
        children: [
            (0, l.jsx)(M, { upload: o, size: A, clip: y, guildId: R }),
            !E &&
                (0, l.jsx)("div", {
                    className: T.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, l.jsx)(f.E, {
                        className: T.filename,
                        variant: "text-sm/normal",
                        children: null != x ? x : j ? y.name : o.filename,
                    }),
                }),
        ],
    });
}
