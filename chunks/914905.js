(n(323874), n(14289), n(35956));
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(855986),
    o = n(939249),
    u = n(834730),
    c = n(192308),
    d = n(952270),
    h = n(39623),
    m = n(22231),
    f = n(241326),
    p = n(608299),
    g = n(478531),
    x = n(607470),
    S = n(274652),
    y = n(256905),
    E = n(302031),
    A = n(734057),
    C = n(515718),
    b = n(851023),
    I = n(198554),
    v = n(792996),
    N = n(683825),
    T = n(429955);
let k = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function j(e) {
    let { alt: t, spoiler: n, renderContent: r, size: a } = e,
        [o, u] = i.useState(!1);
    return (0, l.jsx)(E.Bs.Provider, {
        value: !n,
        children: (0, l.jsx)(E.Ay, {
            type: E.Ay.Types.ATTACHMENT,
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
        f = a === I.L.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === k.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, C.z$)(n.width, n.height);
                m({ width: e, height: t });
            }),
            (n.src = e),
            () => {
                (d(void 0), m({ width: 0, height: 0 }), URL.revokeObjectURL(e));
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
                          className: s()(T.media, {
                              [T.spoiler]: e,
                              [T.imageSmall]: f,
                              [T.sizeXSmall]: a === I.L.XSMALL,
                              [T.sizeXXSmall]: a === I.L.XXSMALL,
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
                (0, y.R)({
                    location: "ChannelAttachmentUpload",
                    items: [{ type: "IMAGE", url: c }],
                    shouldHideMediaOptions: !0,
                });
        }, [c]),
        x = t?.name != null ? t.name : v.intl.string(v.t.lduvqL),
        S =
            null != n && "" !== n
                ? v.intl.formatToPlainString(v.t["8TRAzR"], { filename: x, alt: n })
                : v.intl.formatToPlainString(v.t.lXoOEZ, { filename: x });
    return (0, l.jsx)("div", {
        onMouseEnter: u,
        className: s()(T.mediaContainer, { [T.imageSmall]: f }),
        children: (0, l.jsx)(o.D, {
            onClick: g,
            className: T.clickableMedia,
            "aria-label": S,
            tabIndex: -1,
            children: (0, l.jsx)(j, { size: a, alt: n, spoiler: r, renderContent: p }),
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
        f = i.useRef(null);
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
                (0, l.jsx)(j, {
                    size: a,
                    alt: n,
                    spoiler: r,
                    renderContent: (e) =>
                        (0, l.jsx)(x.A, {
                            ref: f,
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
        [c, d] = i.useState(!1);
    return t.isPreparing
        ? (0, l.jsx)(u.E, { variant: "body-sm/normal", children: v.intl.string(v.t.jfKTes) })
        : t.isImage && t.item.platform === S.x.WEB
          ? (0, l.jsx)(_, { file: t.item.file, alt: t.description, spoiler: t.spoiler, size: n, onMouseEnter: r })
          : !c && t.isVideo && t.item.platform === S.x.WEB
            ? (0, l.jsx)(R, {
                  file: t.item.file,
                  size: n,
                  alt: t.description,
                  spoiler: t.spoiler,
                  onMouseEnter: r,
                  onVideoLoadError: () => d(!0),
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
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    channelId: t,
                    draftType: r,
                    upload: o,
                    keyboardModeEnabled: g,
                    label: x,
                    size: S = I.L.MEDIUM,
                    canEdit: y = !0,
                    hideFileName: E = !1,
                    clip: C,
                } = e,
                k = null != C,
                j = S === I.L.SMALL,
                _ = (0, a.bG)([A.A], () => A.A.getChannel(t)?.guild_id);
            function R() {
                p.A.remove(t, o.id, r);
            }
            function O(e) {
                (e.stopPropagation(), k)
                    ? (0, c.mM)(async () => {
                          let { default: e } = await Promise.all([
                              n.e(409495),
                              n.e(685432),
                              n.e(269714),
                              n.e(19385),
                              n.e(718955),
                              n.e(679502),
                              n.e(126301),
                              n.e(201074),
                              n.e(879641),
                              n.e(498167),
                              n.e(3952),
                              n.e(918024),
                              n.e(124006),
                              n.e(480436),
                              n.e(736926),
                              n.e(858337),
                              n.e(3131),
                              n.e(28852),
                              n.e(220287),
                              n.e(757598),
                              n.e(838090),
                              n.e(177104),
                              n.e(203930),
                              n.e(903663),
                              n.e(901922),
                              n.e(443906),
                              n.e(546601),
                              n.e(507406),
                              n.e(466147),
                              n.e(664430),
                              n.e(501962),
                              n.e(17736),
                              n.e(280559),
                              n.e(974049),
                              n.e(237715),
                              n.e(895008),
                              n.e(377683),
                              n.e(698101),
                              n.e(746623),
                              n.e(306270),
                              n.e(291365),
                              n.e(29621),
                          ]).then(n.bind(n, 723028));
                          return (n) => (0, l.jsx)(e, { ...n, channelId: t, clipId: C.id, onEdit: R });
                      })
                    : (0, c.mM)(async () => {
                          let { default: e } = await Promise.all([
                              n.e(142753),
                              n.e(865429),
                              n.e(268582),
                              n.e(24889),
                              n.e(68532),
                              n.e(669865),
                          ]).then(n.bind(n, 507536));
                          return (n) =>
                              (0, l.jsx)(e, {
                                  ...n,
                                  upload: o,
                                  onSubmit: (e) => {
                                      let { name: n, description: l, spoiler: i } = e;
                                      p.A.update(t, o.id, r, { filename: n, description: l, spoiler: i });
                                  },
                              });
                      });
            }
            return (0, l.jsxs)(I.A, {
                actions: (0, l.jsxs)(i.Fragment, {
                    children: [
                        y
                            ? (0, l.jsx)(b.A, {
                                  className: s()({ [T.action]: j }),
                                  tooltip: k ? v.intl.string(v.t.MYgdY2) : v.intl.string(v.t.cuurzA),
                                  onClick: () => {
                                      p.A.update(t, o.id, r, { spoiler: !o.spoiler });
                                  },
                                  children: o.spoiler
                                      ? (0, l.jsx)(d.EyeSlashIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: s()({ [T.actionBarIcon]: j }),
                                        })
                                      : (0, l.jsx)(h.EyeIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: s()({ [T.actionBarIcon]: j }),
                                        }),
                              })
                            : null,
                        y
                            ? (0, l.jsx)(b.A, {
                                  className: s()({ [T.action]: j }),
                                  tooltip: k ? v.intl.string(N.default.V8YlF7) : v.intl.string(v.t.Y8ujqr),
                                  onClick: O,
                                  children: (0, l.jsx)(m.PencilIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: s()({ [T.actionBarIcon]: j }),
                                  }),
                              })
                            : null,
                        (0, l.jsx)(b.A, {
                            className: s()({ [T.action]: j }),
                            tooltip: k ? v.intl.string(v.t.MskAXa) : v.intl.string(v.t.vN7REz),
                            onClick: R,
                            dangerous: !0,
                            children: (0, l.jsx)(f.TrashIcon, {
                                size: "md",
                                color: "currentColor",
                                className: s()({ [T.actionBarIcon]: j }),
                            }),
                        }),
                    ],
                }),
                draftType: r,
                id: o.id,
                channelId: t,
                handleEditModal: O,
                keyboardModeEnabled: g,
                size: S,
                className: s()({ [T.attachmentItemSmall]: j }),
                children: [
                    (0, l.jsx)(w, { upload: o, size: S, clip: C, guildId: _ }),
                    !E &&
                        (0, l.jsx)("div", {
                            className: T.filenameContainer,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(u.E, {
                                className: T.filename,
                                variant: "body-sm/normal",
                                children: null != x ? x : k ? C.name : o.filename,
                            }),
                        }),
                ],
            });
        },
        J: w,
    },
);
