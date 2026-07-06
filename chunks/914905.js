"use strict";
n.d(t, { A: () => P, J: () => w }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(939249),
    u = n(192308),
    c = n(952270),
    d = n(39623),
    _ = n(22231),
    h = n(241326),
    f = n(834730),
    E = n(608299),
    p = n(565150),
    m = n(783384),
    g = n(607470),
    A = n(256905),
    I = n(302031),
    T = n(734057),
    S = n(515718),
    N = n(851023),
    C = n(215497),
    y = n(375708),
    O = n(16590),
    R = n(443024);
let v = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function b(e) {
    let { alt: t, spoiler: n, renderContent: s, size: o } = e,
        [l, u] = r.useState(!1);
    return (0, i.jsx)(I.Bs.Provider, {
        value: !n,
        children: (0, i.jsx)(I.Ay, {
            type: I.Ay.Types.ATTACHMENT,
            onReveal: () => u(!0),
            className: a()(R.spoilerContainer, {
                [R.sizeXSmall]: o === C.L.XSMALL,
                [R.sizeXXSmall]: o === C.L.XXSMALL,
            }),
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: R.spoilerWrapper,
                    children: [
                        s(e),
                        (0, i.jsxs)("div", {
                            className: R.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, i.jsx)("span", { className: R.altTag, children: y.intl.string(y.t.QEW81z) })
                                    : null,
                                l && n
                                    ? (0, i.jsx)("span", {
                                          className: R.altTag,
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
function L(e) {
    let { file: t, alt: n, spoiler: s, size: o = C.L.MEDIUM, onMouseEnter: u } = e,
        [c, d] = r.useState(),
        [_, h] = r.useState({ width: 0, height: 0 }),
        f = o === C.L.SMALL;
    r.useEffect(() => {
        if (null == t || !1 === v.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, S.z$)(n.width, n.height);
                h({ width: e, height: t });
            }),
            (n.src = e),
            () => {
                d(void 0), h({ width: 0, height: 0 }), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let E = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == c
                    ? (0, i.jsx)(i.Fragment, {})
                    : (0, i.jsx)("img", {
                          src: c,
                          className: a()(R.media, {
                              [R.spoiler]: e,
                              [R.imageSmall]: f,
                              [R.sizeXSmall]: o === C.L.XSMALL,
                              [R.sizeXXSmall]: o === C.L.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: n ?? "",
                          style: t ? _ : {},
                      });
            },
            [c, f, o, n, _],
        ),
        p = r.useCallback(() => {
            null != c &&
                (0, A.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: c }],
                    shouldHideMediaOptions: !0,
                });
        }, [c]),
        m = t?.name != null ? t.name : y.intl.string(y.t.lduvqL),
        g =
            null != n && "" !== n
                ? y.intl.formatToPlainString(y.t["8TRAzR"], { filename: m, alt: n })
                : y.intl.formatToPlainString(y.t.lXoOEZ, { filename: m });
    return (0, i.jsx)("div", {
        onMouseEnter: u,
        className: a()(R.mediaContainer, { [R.imageSmall]: f }),
        children: (0, i.jsx)(l.D, {
            onClick: p,
            className: R.clickableMedia,
            "aria-label": g,
            tabIndex: -1,
            children: (0, i.jsx)(b, { size: o, alt: n, spoiler: s, renderContent: E }),
        }),
    });
}
function D(e) {
    let {
            file: t,
            alt: n,
            spoiler: s,
            size: o = C.L.MEDIUM,
            onMouseEnter: l,
            onVideoLoadError: u,
            clip: c,
            guildId: d,
        } = e,
        [_, h] = r.useState(),
        f = r.useRef(null);
    return (
        r.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return (
                h(e),
                () => {
                    h(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, i.jsxs)("div", {
            onMouseEnter: l,
            className: R.mediaContainer,
            children: [
                (0, i.jsx)(b, {
                    size: o,
                    alt: n,
                    spoiler: s,
                    renderContent: (e) =>
                        (0, i.jsx)(g.A, {
                            ref: f,
                            src: _,
                            className: a()(R.media, {
                                [R.spoiler]: e,
                                [R.sizeXSmall]: o === C.L.XSMALL,
                                [R.sizeXXSmall]: o === C.L.XXSMALL,
                            }),
                            onError: u,
                            preload: "none",
                            "aria-hidden": !0,
                        }),
                }),
                null != c &&
                    (0, i.jsx)("div", {
                        className: R.clipOverlayHeader,
                        inert: !0,
                        children: (0, i.jsx)(m.A, {
                            className: R.clipOverlayHeaderContent,
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
function w(e) {
    let { upload: t, size: n = C.L.MEDIUM, onMouseEnter: s, clip: o, guildId: l } = e,
        [u, c] = r.useState(!1);
    return t.isImage && t.item.platform === p.xz.WEB
        ? (0, i.jsx)(L, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: s })
        : !u && t.isVideo && t.item.platform === p.xz.WEB
          ? (0, i.jsx)(D, {
                file: t.item.file,
                size: n,
                alt: t.description,
                spoiler: t.spoiler,
                onMouseEnter: s,
                onVideoLoadError: () => c(!0),
                clip: o,
                guildId: l,
            })
          : (0, i.jsx)("div", {
                onMouseEnter: s,
                className: a()(R.icon, R[t.classification ?? ""], {
                    [R.imageSmall]: n === C.L.SMALL,
                    [R.sizeXSmall]: n === C.L.XSMALL,
                    [R.sizeXXSmall]: n === C.L.XXSMALL,
                }),
                children: (0, i.jsx)("div", {
                    className: R.tags,
                    children: t.spoiler
                        ? (0, i.jsx)("span", { className: R.altTag, children: y.intl.string(y.t["F+x38C"]) })
                        : null,
                }),
            });
}
function P(e) {
    let {
            channelId: t,
            draftType: s,
            upload: l,
            keyboardModeEnabled: p,
            label: m,
            size: g = C.L.MEDIUM,
            canEdit: A = !0,
            hideFileName: I = !1,
            clip: S,
        } = e,
        v = null != S,
        b = g === C.L.SMALL,
        L = (0, o.bG)([T.A], () => T.A.getChannel(t)?.guild_id);
    function D() {
        E.A.remove(t, l.id, s);
    }
    let P = (e) => {
        (e.stopPropagation(), v)
            ? (0, u.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("50884"),
                      n.e("97782"),
                      n.e("16227"),
                      n.e("23549"),
                      n.e("93594"),
                      n.e("75842"),
                      n.e("83952"),
                      n.e("20287"),
                      n.e("3131"),
                      n.e("47177"),
                      n.e("8563"),
                      n.e("27272"),
                      n.e("1962"),
                      n.e("1922"),
                      n.e("36926"),
                      n.e("37715"),
                      n.e("74049"),
                      n.e("80559"),
                      n.e("69201"),
                      n.e("95008"),
                      n.e("1830"),
                      n.e("29621"),
                  ]).then(n.bind(n, 723028));
                  return (n) => (0, i.jsx)(e, { ...n, channelId: t, clipId: S.id, onEdit: D });
              })
            : (0, u.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("57328"), n.e("68532"), n.e("70698")]).then(
                      n.bind(n, 427281),
                  );
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          upload: l,
                          onSubmit: (e) => {
                              let { name: n, description: i, spoiler: r } = e;
                              E.A.update(t, l.id, s, { filename: n, description: i, spoiler: r });
                          },
                      });
              });
    };
    return (0, i.jsxs)(C.A, {
        actions: (0, i.jsxs)(r.Fragment, {
            children: [
                A
                    ? (0, i.jsx)(N.A, {
                          className: a()({ [R.action]: b }),
                          tooltip: v ? y.intl.string(y.t.MYgdY2) : y.intl.string(y.t.cuurzA),
                          onClick: () => E.A.update(t, l.id, s, { spoiler: !l.spoiler }),
                          children: l.spoiler
                              ? (0, i.jsx)(c.G, {
                                    size: "md",
                                    color: "currentColor",
                                    className: a()({ [R.actionBarIcon]: b }),
                                })
                              : (0, i.jsx)(d.b, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: a()({ [R.actionBarIcon]: b }),
                                }),
                      })
                    : null,
                A
                    ? (0, i.jsx)(N.A, {
                          className: a()({ [R.action]: b }),
                          tooltip: v ? y.intl.string(O.default.V8YlF7) : y.intl.string(y.t.Y8ujqr),
                          onClick: P,
                          children: (0, i.jsx)(_.R, {
                              size: "xs",
                              color: "currentColor",
                              className: a()({ [R.actionBarIcon]: b }),
                          }),
                      })
                    : null,
                (0, i.jsx)(N.A, {
                    className: a()({ [R.action]: b }),
                    tooltip: v ? y.intl.string(y.t.MskAXa) : y.intl.string(y.t.vN7REz),
                    onClick: D,
                    dangerous: !0,
                    children: (0, i.jsx)(h.u, {
                        size: "md",
                        color: "currentColor",
                        className: a()({ [R.actionBarIcon]: b }),
                    }),
                }),
            ],
        }),
        draftType: s,
        id: l.id,
        channelId: t,
        handleEditModal: P,
        keyboardModeEnabled: p,
        size: g,
        className: a()({ [R.attachmentItemSmall]: b }),
        children: [
            (0, i.jsx)(w, { upload: l, size: g, clip: S, guildId: L }),
            !I &&
                (0, i.jsx)("div", {
                    className: R.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(f.E, {
                        className: R.filename,
                        variant: "text-sm/normal",
                        children: null != m ? m : v ? S.name : l.filename,
                    }),
                }),
        ],
    });
}
