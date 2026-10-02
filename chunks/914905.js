(n.d(t, { A: () => O, J: () => w }), n(323874), n(14289), n(35956));
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(939249),
    u = n(192308),
    c = n(952270),
    d = n(39623),
    h = n(22231),
    m = n(241326),
    p = n(834730),
    f = n(608299),
    g = n(478531),
    x = n(607470),
    E = n(274652),
    S = n(256905),
    y = n(302031),
    C = n(734057),
    A = n(515718),
    b = n(851023),
    I = n(215497),
    v = n(375708),
    N = n(268378),
    T = n(429955);
let j = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function k(e) {
    let { alt: t, spoiler: n, renderContent: r, size: a } = e,
        [o, u] = i.useState(!1);
    return (0, l.jsx)(y.Bs.Provider, {
        value: !n,
        children: (0, l.jsx)(y.Ay, {
            type: y.Ay.Types.ATTACHMENT,
            onReveal: () => u(!0),
            className: s()(T.spoilerContainer, {
                [T.sizeXSmall]: a === I.L.XSMALL,
                [T.sizeXXSmall]: a === I.L.XXSMALL,
            }),
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: T.spoilerWrapper,
                    children: [
                        r(e),
                        (0, l.jsxs)("div", {
                            className: T.tags,
                            children: [
                                null != t && "" !== t
                                    ? (0, l.jsx)("span", { className: T.altTag, children: v.intl.string(v.t.QEW81z) })
                                    : null,
                                o && n
                                    ? (0, l.jsx)("span", {
                                          className: T.altTag,
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
function _(e) {
    let { file: t, alt: n, spoiler: r, size: a = I.L.MEDIUM, onMouseEnter: u } = e,
        [c, d] = i.useState(),
        [h, m] = i.useState({ width: 0, height: 0 }),
        p = a === I.L.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === j.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, A.z$)(n.width, n.height);
                m({ width: e, height: t });
            }),
            (n.src = e),
            () => {
                (d(void 0), m({ width: 0, height: 0 }), URL.revokeObjectURL(e));
            }
        );
    }, [t]);
    let f = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == c
                    ? (0, l.jsx)(l.Fragment, {})
                    : (0, l.jsx)("img", {
                          src: c,
                          className: s()(T.media, {
                              [T.spoiler]: e,
                              [T.imageSmall]: p,
                              [T.sizeXSmall]: a === I.L.XSMALL,
                              [T.sizeXXSmall]: a === I.L.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: n ?? "",
                          style: t ? h : {},
                      });
            },
            [c, p, a, n, h],
        ),
        g = i.useCallback(() => {
            null != c &&
                (0, S.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: c }],
                    shouldHideMediaOptions: !0,
                });
        }, [c]),
        x = t?.name != null ? t.name : v.intl.string(v.t.lduvqL),
        E =
            null != n && "" !== n
                ? v.intl.formatToPlainString(v.t["8TRAzR"], { filename: x, alt: n })
                : v.intl.formatToPlainString(v.t.lXoOEZ, { filename: x });
    return (0, l.jsx)("div", {
        onMouseEnter: u,
        className: s()(T.mediaContainer, { [T.imageSmall]: p }),
        children: (0, l.jsx)(o.D, {
            onClick: g,
            className: T.clickableMedia,
            "aria-label": E,
            tabIndex: -1,
            children: (0, l.jsx)(k, { size: a, alt: n, spoiler: r, renderContent: f }),
        }),
    });
}
function R(e) {
    let {
            file: t,
            alt: n,
            spoiler: r,
            size: a = I.L.MEDIUM,
            onMouseEnter: o,
            onVideoLoadError: u,
            clip: c,
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
                    (m(void 0), URL.revokeObjectURL(e));
                }
            );
        }, [t]),
        (0, l.jsxs)("div", {
            onMouseEnter: o,
            className: T.mediaContainer,
            children: [
                (0, l.jsx)(k, {
                    size: a,
                    alt: n,
                    spoiler: r,
                    renderContent: (e) =>
                        (0, l.jsx)(x.A, {
                            ref: p,
                            src: h,
                            className: s()(T.media, {
                                [T.spoiler]: e,
                                [T.sizeXSmall]: a === I.L.XSMALL,
                                [T.sizeXXSmall]: a === I.L.XXSMALL,
                            }),
                            onError: u,
                            preload: "metadata",
                            "aria-hidden": !0,
                        }),
                }),
                null != c &&
                    (0, l.jsx)("div", {
                        className: T.clipOverlayHeader,
                        inert: !0,
                        children: (0, l.jsx)(g.A, {
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
function w(e) {
    let { upload: t, size: n = I.L.MEDIUM, onMouseEnter: r, clip: a, guildId: o } = e,
        [u, c] = i.useState(!1);
    return t.isImage && t.item.platform === E.x.WEB
        ? (0, l.jsx)(_, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: r })
        : !u && t.isVideo && t.item.platform === E.x.WEB
          ? (0, l.jsx)(R, {
                file: t.item.file,
                size: n,
                alt: t.description,
                spoiler: t.spoiler,
                onMouseEnter: r,
                onVideoLoadError: () => c(!0),
                clip: a,
                guildId: o,
            })
          : (0, l.jsx)("div", {
                onMouseEnter: r,
                className: s()(T.icon, T[t.classification ?? ""], {
                    [T.imageSmall]: n === I.L.SMALL,
                    [T.sizeXSmall]: n === I.L.XSMALL,
                    [T.sizeXXSmall]: n === I.L.XXSMALL,
                }),
                children: (0, l.jsx)("div", {
                    className: T.tags,
                    children: t.spoiler
                        ? (0, l.jsx)("span", { className: T.altTag, children: v.intl.string(v.t["F+x38C"]) })
                        : null,
                }),
            });
}
function O(e) {
    let {
            channelId: t,
            draftType: r,
            upload: o,
            keyboardModeEnabled: g,
            label: x,
            size: E = I.L.MEDIUM,
            canEdit: S = !0,
            hideFileName: y = !1,
            clip: A,
        } = e,
        j = null != A,
        k = E === I.L.SMALL,
        _ = (0, a.bG)([C.A], () => C.A.getChannel(t)?.guild_id);
    function R() {
        f.A.remove(t, o.id, r);
    }
    function O(e) {
        (e.stopPropagation(), j)
            ? (0, u.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("459368"),
                      n.e("821717"),
                      n.e("269714"),
                      n.e("19385"),
                      n.e("718955"),
                      n.e("679502"),
                      n.e("94954"),
                      n.e("571247"),
                      n.e("498167"),
                      n.e("875842"),
                      n.e("858337"),
                      n.e("3131"),
                      n.e("736926"),
                      n.e("203930"),
                      n.e("220287"),
                      n.e("903663"),
                      n.e("647177"),
                      n.e("653516"),
                      n.e("127272"),
                      n.e("480436"),
                      n.e("466147"),
                      n.e("507406"),
                      n.e("838090"),
                      n.e("664430"),
                      n.e("501962"),
                      n.e("901922"),
                      n.e("746623"),
                      n.e("974049"),
                      n.e("280559"),
                      n.e("415809"),
                      n.e("237715"),
                      n.e("895008"),
                      n.e("793784"),
                      n.e("565977"),
                      n.e("29621"),
                  ]).then(n.bind(n, 723028));
                  return (n) => (0, l.jsx)(e, { ...n, channelId: t, clipId: A.id, onEdit: R });
              })
            : (0, u.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("142753"),
                      n.e("865429"),
                      n.e("268582"),
                      n.e("24889"),
                      n.e("68532"),
                      n.e("570698"),
                  ]).then(n.bind(n, 427281));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          upload: o,
                          onSubmit: (e) => {
                              let { name: n, description: l, spoiler: i } = e;
                              f.A.update(t, o.id, r, { filename: n, description: l, spoiler: i });
                          },
                      });
              });
    }
    return (0, l.jsxs)(I.A, {
        actions: (0, l.jsxs)(i.Fragment, {
            children: [
                S
                    ? (0, l.jsx)(b.A, {
                          className: s()({ [T.action]: k }),
                          tooltip: j ? v.intl.string(v.t.MYgdY2) : v.intl.string(v.t.cuurzA),
                          onClick: () => {
                              f.A.update(t, o.id, r, { spoiler: !o.spoiler });
                          },
                          children: o.spoiler
                              ? (0, l.jsx)(c.EyeSlashIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: s()({ [T.actionBarIcon]: k }),
                                })
                              : (0, l.jsx)(d.EyeIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: s()({ [T.actionBarIcon]: k }),
                                }),
                      })
                    : null,
                S
                    ? (0, l.jsx)(b.A, {
                          className: s()({ [T.action]: k }),
                          tooltip: j ? v.intl.string(N.default.V8YlF7) : v.intl.string(v.t.Y8ujqr),
                          onClick: O,
                          children: (0, l.jsx)(h.PencilIcon, {
                              size: "xs",
                              color: "currentColor",
                              className: s()({ [T.actionBarIcon]: k }),
                          }),
                      })
                    : null,
                (0, l.jsx)(b.A, {
                    className: s()({ [T.action]: k }),
                    tooltip: j ? v.intl.string(v.t.MskAXa) : v.intl.string(v.t.vN7REz),
                    onClick: R,
                    dangerous: !0,
                    children: (0, l.jsx)(m.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: s()({ [T.actionBarIcon]: k }),
                    }),
                }),
            ],
        }),
        draftType: r,
        id: o.id,
        channelId: t,
        handleEditModal: O,
        keyboardModeEnabled: g,
        size: E,
        className: s()({ [T.attachmentItemSmall]: k }),
        children: [
            (0, l.jsx)(w, { upload: o, size: E, clip: A, guildId: _ }),
            !y &&
                (0, l.jsx)("div", {
                    className: T.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, l.jsx)(p.E, {
                        className: T.filename,
                        variant: "text-sm/normal",
                        children: null != x ? x : j ? A.name : o.filename,
                    }),
                }),
        ],
    });
}
