"use strict";
n.d(t, { A: () => P, J: () => M }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(939249),
    d = n(192308),
    c = n(952270),
    u = n(39623),
    _ = n(22231),
    E = n(241326),
    A = n(834730),
    h = n(608299),
    I = n(565150),
    f = n(783384),
    p = n(607470),
    T = n(256905),
    m = n(302031),
    g = n(734057),
    S = n(515718),
    N = n(851023),
    C = n(215497),
    R = n(375708),
    O = n(16590),
    L = n(443024);
let y = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function D(e) {
    let { alt: t, spoiler: n, renderContent: a, size: l } = e,
        [o, d] = r.useState(!1);
    return (0, i.jsx)(m.Bs.Provider, {
        value: !n,
        children: (0, i.jsx)(m.Ay, {
            type: m.Ay.Types.ATTACHMENT,
            onReveal: () => d(!0),
            className: s()(L.spoilerContainer, {
                [L.sizeXSmall]: l === C.L.XSMALL,
                [L.sizeXXSmall]: l === C.L.XXSMALL,
            }),
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: L.spoilerWrapper,
                    children: [
                        a(e),
                        (0, i.jsxs)("div", {
                            className: L.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, i.jsx)("span", { className: L.altTag, children: R.intl.string(R.t.QEW81z) })
                                    : null,
                                o && n
                                    ? (0, i.jsx)("span", {
                                          className: L.altTag,
                                          children: R.intl.string(R.t["F+x38C"]),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        }),
    });
}
function v(e) {
    let { file: t, alt: n, spoiler: a, size: l = C.L.MEDIUM, onMouseEnter: d } = e,
        [c, u] = r.useState(),
        [_, E] = r.useState({ width: 0, height: 0 }),
        A = l === C.L.SMALL;
    r.useEffect(() => {
        if (null == t || !1 === y.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        u(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, S.z$)(n.width, n.height);
                E({ width: e, height: t });
            }),
            (n.src = e),
            () => {
                u(void 0), E({ width: 0, height: 0 }), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let h = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == c
                    ? (0, i.jsx)(i.Fragment, {})
                    : (0, i.jsx)("img", {
                          src: c,
                          className: s()(L.media, {
                              [L.spoiler]: e,
                              [L.imageSmall]: A,
                              [L.sizeXSmall]: l === C.L.XSMALL,
                              [L.sizeXXSmall]: l === C.L.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: n ?? "",
                          style: t ? _ : {},
                      });
            },
            [c, A, l, n, _],
        ),
        I = r.useCallback(() => {
            null != c &&
                (0, T.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: c }],
                    shouldHideMediaOptions: !0,
                });
        }, [c]),
        f = t?.name != null ? t.name : R.intl.string(R.t.lduvqL),
        p =
            null != n && "" !== n
                ? R.intl.formatToPlainString(R.t["8TRAzR"], { filename: f, alt: n })
                : R.intl.formatToPlainString(R.t.lXoOEZ, { filename: f });
    return (0, i.jsx)("div", {
        onMouseEnter: d,
        className: s()(L.mediaContainer, { [L.imageSmall]: A }),
        children: (0, i.jsx)(o.D, {
            onClick: I,
            className: L.clickableMedia,
            "aria-label": p,
            tabIndex: -1,
            children: (0, i.jsx)(D, { size: l, alt: n, spoiler: a, renderContent: h }),
        }),
    });
}
function b(e) {
    let {
            file: t,
            alt: n,
            spoiler: a,
            size: l = C.L.MEDIUM,
            onMouseEnter: o,
            onVideoLoadError: d,
            clip: c,
            guildId: u,
        } = e,
        [_, E] = r.useState(),
        A = r.useRef(null);
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
            onMouseEnter: o,
            className: L.mediaContainer,
            children: [
                (0, i.jsx)(D, {
                    size: l,
                    alt: n,
                    spoiler: a,
                    renderContent: (e) =>
                        (0, i.jsx)(p.A, {
                            ref: A,
                            src: _,
                            className: s()(L.media, {
                                [L.spoiler]: e,
                                [L.sizeXSmall]: l === C.L.XSMALL,
                                [L.sizeXXSmall]: l === C.L.XXSMALL,
                            }),
                            onError: d,
                            preload: "none",
                            "aria-hidden": !0,
                        }),
                }),
                null != c &&
                    (0, i.jsx)("div", {
                        className: L.clipOverlayHeader,
                        inert: !0,
                        children: (0, i.jsx)(f.A, {
                            className: L.clipOverlayHeaderContent,
                            title: c.name,
                            createdAt: c.createdAt,
                            participantIds: c.users,
                            applicationId: c.applicationId,
                            guildId: u,
                        }),
                    }),
            ],
        })
    );
}
function M(e) {
    let { upload: t, size: n = C.L.MEDIUM, onMouseEnter: a, clip: l, guildId: o } = e,
        [d, c] = r.useState(!1);
    return t.isImage && t.item.platform === I.xz.WEB
        ? (0, i.jsx)(v, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: a })
        : !d && t.isVideo && t.item.platform === I.xz.WEB
          ? (0, i.jsx)(b, {
                file: t.item.file,
                size: n,
                alt: t.description,
                spoiler: t.spoiler,
                onMouseEnter: a,
                onVideoLoadError: () => c(!0),
                clip: l,
                guildId: o,
            })
          : (0, i.jsx)("div", {
                onMouseEnter: a,
                className: s()(L.icon, L[t.classification ?? ""], {
                    [L.imageSmall]: n === C.L.SMALL,
                    [L.sizeXSmall]: n === C.L.XSMALL,
                    [L.sizeXXSmall]: n === C.L.XXSMALL,
                }),
                children: (0, i.jsx)("div", {
                    className: L.tags,
                    children: t.spoiler
                        ? (0, i.jsx)("span", { className: L.altTag, children: R.intl.string(R.t["F+x38C"]) })
                        : null,
                }),
            });
}
function P(e) {
    let {
            channelId: t,
            draftType: a,
            upload: o,
            keyboardModeEnabled: I,
            label: f,
            size: p = C.L.MEDIUM,
            canEdit: T = !0,
            hideFileName: m = !1,
            clip: S,
        } = e,
        y = null != S,
        D = p === C.L.SMALL,
        v = (0, l.bG)([g.A], () => g.A.getChannel(t)?.guild_id);
    function b() {
        h.A.remove(t, o.id, a);
    }
    function P(e) {
        (e.stopPropagation(), y)
            ? (0, d.openModalLazy)(async () => {
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
                      n.e("69985"),
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
                  return (n) => (0, i.jsx)(e, { ...n, channelId: t, clipId: S.id, onEdit: b });
              })
            : (0, d.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("30593"),
                      n.e("57328"),
                      n.e("8891"),
                      n.e("68532"),
                      n.e("70698"),
                  ]).then(n.bind(n, 427281));
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          upload: o,
                          onSubmit: (e) => {
                              let { name: n, description: i, spoiler: r } = e;
                              h.A.update(t, o.id, a, { filename: n, description: i, spoiler: r });
                          },
                      });
              });
    }
    return (0, i.jsxs)(C.A, {
        actions: (0, i.jsxs)(r.Fragment, {
            children: [
                T
                    ? (0, i.jsx)(N.A, {
                          className: s()({ [L.action]: D }),
                          tooltip: y ? R.intl.string(R.t.MYgdY2) : R.intl.string(R.t.cuurzA),
                          onClick: () => h.A.update(t, o.id, a, { spoiler: !o.spoiler }),
                          children: o.spoiler
                              ? (0, i.jsx)(c.G, {
                                    size: "md",
                                    color: "currentColor",
                                    className: s()({ [L.actionBarIcon]: D }),
                                })
                              : (0, i.jsx)(u.b, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: s()({ [L.actionBarIcon]: D }),
                                }),
                      })
                    : null,
                T
                    ? (0, i.jsx)(N.A, {
                          className: s()({ [L.action]: D }),
                          tooltip: y ? R.intl.string(O.default.V8YlF7) : R.intl.string(R.t.Y8ujqr),
                          onClick: P,
                          children: (0, i.jsx)(_.R, {
                              size: "xs",
                              color: "currentColor",
                              className: s()({ [L.actionBarIcon]: D }),
                          }),
                      })
                    : null,
                (0, i.jsx)(N.A, {
                    className: s()({ [L.action]: D }),
                    tooltip: y ? R.intl.string(R.t.MskAXa) : R.intl.string(R.t.vN7REz),
                    onClick: b,
                    dangerous: !0,
                    children: (0, i.jsx)(E.u, {
                        size: "md",
                        color: "currentColor",
                        className: s()({ [L.actionBarIcon]: D }),
                    }),
                }),
            ],
        }),
        draftType: a,
        id: o.id,
        channelId: t,
        handleEditModal: P,
        keyboardModeEnabled: I,
        size: p,
        className: s()({ [L.attachmentItemSmall]: D }),
        children: [
            (0, i.jsx)(M, { upload: o, size: p, clip: S, guildId: v }),
            !m &&
                (0, i.jsx)("div", {
                    className: L.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(A.E, {
                        className: L.filename,
                        variant: "text-sm/normal",
                        children: null != f ? f : y ? S.name : o.filename,
                    }),
                }),
        ],
    });
}
