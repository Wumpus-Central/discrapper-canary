"use strict";
n.d(t, { A: () => M, J: () => w }), n(323874), n(14289), n(35956);
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
    f = n(241326),
    h = n(834730),
    p = n(608299),
    E = n(565150),
    m = n(401648),
    g = n(607470),
    A = n(256905),
    I = n(302031),
    T = n(734057),
    S = n(515718),
    N = n(851023),
    y = n(215497),
    C = n(375708),
    v = n(16590),
    O = n(443024);
let R = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function b(e) {
    let { alt: t, spoiler: n, renderContent: s, size: o } = e,
        [l, u] = r.useState(!1);
    return (0, i.jsx)(I.Bs.Provider, {
        value: !n,
        children: (0, i.jsx)(I.Ay, {
            type: I.Ay.Types.ATTACHMENT,
            onReveal: () => u(!0),
            className: a()(O.spoilerContainer, {
                [O.sizeXSmall]: o === y.L.XSMALL,
                [O.sizeXXSmall]: o === y.L.XXSMALL,
            }),
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: O.spoilerWrapper,
                    children: [
                        s(e),
                        (0, i.jsxs)("div", {
                            className: O.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, i.jsx)("span", { className: O.altTag, children: C.intl.string(C.t.QEW81z) })
                                    : null,
                                l && n
                                    ? (0, i.jsx)("span", {
                                          className: O.altTag,
                                          children: C.intl.string(C.t["F+x38C"]),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function D(e) {
    let { file: t, alt: n, spoiler: s, size: o = y.L.MEDIUM, onMouseEnter: u } = e,
        [c, d] = r.useState(),
        [_, f] = r.useState({ width: 0, height: 0 }),
        h = o === y.L.SMALL;
    r.useEffect(() => {
        if (null == t || !1 === R.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, S.z$)(n.width, n.height);
                f({ width: e, height: t });
            }),
            (n.src = e),
            () => {
                d(void 0), f({ width: 0, height: 0 }), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let p = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == c
                    ? (0, i.jsx)(i.Fragment, {})
                    : (0, i.jsx)("img", {
                          src: c,
                          className: a()(O.media, {
                              [O.spoiler]: e,
                              [O.imageSmall]: h,
                              [O.sizeXSmall]: o === y.L.XSMALL,
                              [O.sizeXXSmall]: o === y.L.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: n ?? "",
                          style: t ? _ : {},
                      });
            },
            [c, h, o, n, _],
        ),
        E = r.useCallback(() => {
            null != c &&
                (0, A.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: c }],
                    shouldHideMediaOptions: !0,
                });
        }, [c]),
        m = t?.name != null ? t.name : C.intl.string(C.t.lduvqL),
        g =
            null != n && "" !== n
                ? C.intl.formatToPlainString(C.t["8TRAzR"], { filename: m, alt: n })
                : C.intl.formatToPlainString(C.t.lXoOEZ, { filename: m });
    return (0, i.jsx)("div", {
        onMouseEnter: u,
        className: a()(O.mediaContainer, { [O.imageSmall]: h }),
        children: (0, i.jsx)(l.D, {
            onClick: E,
            className: O.clickableMedia,
            "aria-label": g,
            tabIndex: -1,
            children: (0, i.jsx)(b, { size: o, alt: n, spoiler: s, renderContent: p }),
        }),
    });
}
function L(e) {
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
        [_, f] = r.useState(),
        h = r.useRef(null);
    return (
        r.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return (
                f(e),
                () => {
                    f(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, i.jsxs)("div", {
            onMouseEnter: l,
            className: O.mediaContainer,
            children: [
                (0, i.jsx)(b, {
                    size: o,
                    alt: n,
                    spoiler: s,
                    renderContent: (e) =>
                        (0, i.jsx)(g.A, {
                            ref: h,
                            src: _,
                            className: a()(O.media, {
                                [O.spoiler]: e,
                                [O.sizeXSmall]: o === y.L.XSMALL,
                                [O.sizeXXSmall]: o === y.L.XXSMALL,
                            }),
                            onError: u,
                            preload: "none",
                            "aria-hidden": !0,
                        }),
                }),
                null != c &&
                    (0, i.jsx)("div", {
                        className: O.clipOverlayHeader,
                        inert: !0,
                        children: (0, i.jsx)(m.A, {
                            className: O.clipOverlayHeaderContent,
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
    let { upload: t, size: n = y.L.MEDIUM, onMouseEnter: s, clip: o, guildId: l } = e,
        [u, c] = r.useState(!1);
    return t.isImage && t.item.platform === E.xz.WEB
        ? (0, i.jsx)(D, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: s })
        : !u && t.isVideo && t.item.platform === E.xz.WEB
          ? (0, i.jsx)(L, {
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
                className: a()(O.icon, O[t.classification ?? ""], {
                    [O.imageSmall]: n === y.L.SMALL,
                    [O.sizeXSmall]: n === y.L.XSMALL,
                    [O.sizeXXSmall]: n === y.L.XXSMALL,
                }),
                children: (0, i.jsx)("div", {
                    className: O.tags,
                    children: t.spoiler
                        ? (0, i.jsx)("span", { className: O.altTag, children: C.intl.string(C.t["F+x38C"]) })
                        : null,
                }),
            });
}
function M(e) {
    let {
            channelId: t,
            draftType: s,
            upload: l,
            keyboardModeEnabled: E,
            label: m,
            size: g = y.L.MEDIUM,
            canEdit: A = !0,
            hideFileName: I = !1,
            clip: S,
        } = e,
        R = null != S,
        b = g === y.L.SMALL,
        D = (0, o.bG)([T.A], () => T.A.getChannel(t)?.guild_id);
    function L() {
        p.A.remove(t, l.id, s);
    }
    let M = (e) => {
        (e.stopPropagation(), R)
            ? (0, u.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("52197"),
                      n.e("71104"),
                      n.e("56386"),
                      n.e("19397"),
                      n.e("8516"),
                      n.e("64422"),
                      n.e("88623"),
                      n.e("34530"),
                      n.e("75842"),
                      n.e("20287"),
                      n.e("83952"),
                      n.e("18024"),
                      n.e("16916"),
                      n.e("44326"),
                      n.e("39894"),
                      n.e("22266"),
                      n.e("30920"),
                      n.e("60249"),
                      n.e("1962"),
                      n.e("84783"),
                      n.e("88990"),
                      n.e("37715"),
                      n.e("80559"),
                      n.e("95008"),
                      n.e("74049"),
                      n.e("86745"),
                      n.e("29621"),
                  ]).then(n.bind(n, 723028));
                  return (n) => (0, i.jsx)(e, { ...n, channelId: t, clipId: S.id, onEdit: L });
              })
            : (0, u.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("19397"), n.e("70698")]).then(n.bind(n, 427281));
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          draftType: s,
                          upload: l,
                          channelId: t,
                          onSubmit: (e) => {
                              let { name: n, description: i, spoiler: r } = e;
                              p.A.update(t, l.id, s, { filename: n, description: i, spoiler: r });
                          },
                      });
              });
    };
    return (0, i.jsxs)(y.A, {
        actions: (0, i.jsxs)(r.Fragment, {
            children: [
                A
                    ? (0, i.jsx)(N.A, {
                          className: a()({ [O.action]: b }),
                          tooltip: R ? C.intl.string(C.t.MYgdY2) : C.intl.string(C.t.cuurzA),
                          onClick: () => p.A.update(t, l.id, s, { spoiler: !l.spoiler }),
                          children: l.spoiler
                              ? (0, i.jsx)(c.G, {
                                    size: "md",
                                    color: "currentColor",
                                    className: a()({ [O.actionBarIcon]: b }),
                                })
                              : (0, i.jsx)(d.b, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: a()({ [O.actionBarIcon]: b }),
                                }),
                      })
                    : null,
                A
                    ? (0, i.jsx)(N.A, {
                          className: a()({ [O.action]: b }),
                          tooltip: R ? C.intl.string(v.default.V8YlF7) : C.intl.string(C.t.Y8ujqr),
                          onClick: M,
                          children: (0, i.jsx)(_.R, {
                              size: "xs",
                              color: "currentColor",
                              className: a()({ [O.actionBarIcon]: b }),
                          }),
                      })
                    : null,
                (0, i.jsx)(N.A, {
                    className: a()({ [O.action]: b }),
                    tooltip: R ? C.intl.string(C.t.MskAXa) : C.intl.string(C.t.vN7REz),
                    onClick: L,
                    dangerous: !0,
                    children: (0, i.jsx)(f.u, {
                        size: "md",
                        color: "currentColor",
                        className: a()({ [O.actionBarIcon]: b }),
                    }),
                }),
            ],
        }),
        draftType: s,
        id: l.id,
        channelId: t,
        handleEditModal: M,
        keyboardModeEnabled: E,
        size: g,
        className: a()({ [O.attachmentItemSmall]: b }),
        children: [
            (0, i.jsx)(w, { upload: l, size: g, clip: S, guildId: D }),
            !I &&
                (0, i.jsx)("div", {
                    className: O.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(h.E, {
                        className: O.filename,
                        variant: "text-sm/normal",
                        children: null != m ? m : R ? S.name : l.filename,
                    }),
                }),
        ],
    });
}
