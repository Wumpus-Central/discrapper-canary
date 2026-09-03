n.d(t, { A: () => M, J: () => L }), n(323874), n(14289), n(35956);
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
    S = n(851023),
    v = n(215497),
    N = n(375708),
    _ = n(268378),
    j = n(429955);
let T = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function b(e) {
    let { alt: t, spoiler: n, renderContent: s, size: a } = e,
        [o, u] = i.useState(!1);
    return (0, l.jsx)(E.Bs.Provider, {
        value: !n,
        children: (0, l.jsx)(E.Ay, {
            type: E.Ay.Types.ATTACHMENT,
            onReveal: () => u(!0),
            className: r()(j.spoilerContainer, {
                [j.sizeXSmall]: a === v.L.XSMALL,
                [j.sizeXXSmall]: a === v.L.XXSMALL,
            }),
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: j.spoilerWrapper,
                    children: [
                        s(e),
                        (0, l.jsxs)("div", {
                            className: j.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, l.jsx)("span", { className: j.altTag, children: N.intl.string(N.t.QEW81z) })
                                    : null,
                                o && n
                                    ? (0, l.jsx)("span", {
                                          className: j.altTag,
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
    let { file: t, alt: n, spoiler: s, size: a = v.L.MEDIUM, onMouseEnter: u } = e,
        [c, d] = i.useState(),
        [h, m] = i.useState({ width: 0, height: 0 }),
        f = a === v.L.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === T.includes(t.type)) return;
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
                          className: r()(j.media, {
                              [j.spoiler]: e,
                              [j.imageSmall]: f,
                              [j.sizeXSmall]: a === v.L.XSMALL,
                              [j.sizeXXSmall]: a === v.L.XXSMALL,
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
        className: r()(j.mediaContainer, { [j.imageSmall]: f }),
        children: (0, l.jsx)(o.D, {
            onClick: g,
            className: j.clickableMedia,
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
            size: a = v.L.MEDIUM,
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
            className: j.mediaContainer,
            children: [
                (0, l.jsx)(b, {
                    size: a,
                    alt: n,
                    spoiler: s,
                    renderContent: (e) =>
                        (0, l.jsx)(A.A, {
                            ref: f,
                            src: h,
                            className: r()(j.media, {
                                [j.spoiler]: e,
                                [j.sizeXSmall]: a === v.L.XSMALL,
                                [j.sizeXXSmall]: a === v.L.XXSMALL,
                            }),
                            onError: u,
                            preload: "none",
                            "aria-hidden": !0,
                        }),
                }),
                null != c &&
                    (0, l.jsx)("div", {
                        className: j.clipOverlayHeader,
                        inert: !0,
                        children: (0, l.jsx)(x.A, {
                            className: j.clipOverlayHeaderContent,
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
function L(e) {
    let { upload: t, size: n = v.L.MEDIUM, onMouseEnter: s, clip: a, guildId: o } = e,
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
                className: r()(j.icon, j[t.classification ?? ""], {
                    [j.imageSmall]: n === v.L.SMALL,
                    [j.sizeXSmall]: n === v.L.XSMALL,
                    [j.sizeXXSmall]: n === v.L.XXSMALL,
                }),
                children: (0, l.jsx)("div", {
                    className: j.tags,
                    children: t.spoiler
                        ? (0, l.jsx)("span", { className: j.altTag, children: N.intl.string(N.t["F+x38C"]) })
                        : null,
                }),
            });
}
function M(e) {
    let {
            channelId: t,
            draftType: s,
            upload: o,
            keyboardModeEnabled: g,
            label: x,
            size: A = v.L.MEDIUM,
            canEdit: C = !0,
            hideFileName: E = !1,
            clip: y,
        } = e,
        T = null != y,
        b = A === v.L.SMALL,
        R = (0, a.bG)([I.A], () => I.A.getChannel(t)?.guild_id);
    function O() {
        p.A.remove(t, o.id, s);
    }
    function M(e) {
        (e.stopPropagation(), T)
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
                      n.e("3131"),
                      n.e("220287"),
                      n.e("203930"),
                      n.e("903663"),
                      n.e("8563"),
                      n.e("647177"),
                      n.e("169201"),
                      n.e("111527"),
                      n.e("127272"),
                      n.e("466147"),
                      n.e("838090"),
                      n.e("501962"),
                      n.e("901922"),
                      n.e("736926"),
                      n.e("746623"),
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
                      n.e("456506"),
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
    return (0, l.jsxs)(v.A, {
        actions: (0, l.jsxs)(i.Fragment, {
            children: [
                C
                    ? (0, l.jsx)(S.A, {
                          className: r()({ [j.action]: b }),
                          tooltip: T ? N.intl.string(N.t.MYgdY2) : N.intl.string(N.t.cuurzA),
                          onClick: () => p.A.update(t, o.id, s, { spoiler: !o.spoiler }),
                          children: o.spoiler
                              ? (0, l.jsx)(c.EyeSlashIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: r()({ [j.actionBarIcon]: b }),
                                })
                              : (0, l.jsx)(d.EyeIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: r()({ [j.actionBarIcon]: b }),
                                }),
                      })
                    : null,
                C
                    ? (0, l.jsx)(S.A, {
                          className: r()({ [j.action]: b }),
                          tooltip: T ? N.intl.string(_.default.V8YlF7) : N.intl.string(N.t.Y8ujqr),
                          onClick: M,
                          children: (0, l.jsx)(h.PencilIcon, {
                              size: "xs",
                              color: "currentColor",
                              className: r()({ [j.actionBarIcon]: b }),
                          }),
                      })
                    : null,
                (0, l.jsx)(S.A, {
                    className: r()({ [j.action]: b }),
                    tooltip: T ? N.intl.string(N.t.MskAXa) : N.intl.string(N.t.vN7REz),
                    onClick: O,
                    dangerous: !0,
                    children: (0, l.jsx)(m.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: r()({ [j.actionBarIcon]: b }),
                    }),
                }),
            ],
        }),
        draftType: s,
        id: o.id,
        channelId: t,
        handleEditModal: M,
        keyboardModeEnabled: g,
        size: A,
        className: r()({ [j.attachmentItemSmall]: b }),
        children: [
            (0, l.jsx)(L, { upload: o, size: A, clip: y, guildId: R }),
            !E &&
                (0, l.jsx)("div", {
                    className: j.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, l.jsx)(f.E, {
                        className: j.filename,
                        variant: "text-sm/normal",
                        children: null != x ? x : T ? y.name : o.filename,
                    }),
                }),
        ],
    });
}
