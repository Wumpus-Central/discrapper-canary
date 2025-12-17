n.d(t, {
    Z: () => x,
    r: () => D,
}),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(481060),
    u = n(166459),
    d = n(403592),
    f = n(476326),
    p = n(543651),
    _ = n(70097),
    m = n(312097),
    h = n(411405),
    g = n(592125),
    E = n(956664),
    b = n(709054),
    y = n(273031),
    O = n(859235),
    v = n(388032),
    S = n(278048);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "video/quicktime", "video/mp4"];
function P(e) {
    let { alt: t, spoiler: n, renderContent: a, size: s } = e,
        [l, c] = i.useState(!1);
    return (0, r.jsx)(h.aQ.Provider, {
        value: !n,
        children: (0, r.jsx)(h.ZP, {
            containerStyles:
                s === O.q.CLIP
                    ? {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          boxShadow: "none",
                      }
                    : void 0,
            type: h.ZP.Types.ATTACHMENT,
            onReveal: () => c(!0),
            className: o()(S.spoilerContainer, {
                [S.sizeXSmall]: s === O.q.XSMALL,
                [S.sizeXXSmall]: s === O.q.XXSMALL,
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
                                    ? (0, r.jsx)("span", {
                                          className: S.altTag,
                                          children: v.intl.string(v.t.QEW81z),
                                      })
                                    : null,
                                l && n
                                    ? (0, r.jsx)("span", {
                                          className: S.altTag,
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
function R(e) {
    let { file: t, alt: n, spoiler: a, size: s = O.q.MEDIUM, onMouseEnter: l } = e,
        [u, d] = i.useState(),
        [f, p] = i.useState({
            width: 0,
            height: 0,
        }),
        _ = s === O.q.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === N.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, E.zp)(n.width, n.height);
                p({
                    width: e,
                    height: t,
                });
            }),
            (n.src = e),
            () => {
                d(void 0),
                    p({
                        width: 0,
                        height: 0,
                    }),
                    URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let h = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == u
                    ? (0, r.jsx)(r.Fragment, {})
                    : (0, r.jsx)("img", {
                          src: u,
                          className: o()(S.media, {
                              [S.spoiler]: e,
                              [S.imageSmall]: _,
                              [S.sizeXSmall]: s === O.q.XSMALL,
                              [S.sizeXXSmall]: s === O.q.XXSMALL,
                          }),
                          "aria-hidden": !0,
                          alt: null != n ? n : "",
                          style: t ? f : {},
                      });
            },
            [u, _, s, n, f],
        ),
        g = i.useCallback(() => {
            null != u &&
                (0, m.K)({
                    location: "ChannelAttachmentUpload",
                    items: [
                        {
                            type: "IMAGE",
                            url: u,
                        },
                    ],
                    shouldHideMediaOptions: !0,
                });
        }, [u]),
        b = (null == t ? void 0 : t.name) != null ? t.name : v.intl.string(v.t.lduvqL),
        y =
            null != n && "" !== n
                ? v.intl.formatToPlainString(v.t["8TRAzR"], {
                      filename: b,
                      alt: n,
                  })
                : v.intl.formatToPlainString(v.t.lXoOEZ, { filename: b });
    return (0, r.jsx)("div", {
        onMouseEnter: l,
        className: o()(S.mediaContainer, { [S.imageSmall]: _ }),
        children: (0, r.jsx)(c.P3F, {
            onClick: g,
            className: S.clickableMedia,
            "aria-label": y,
            children: (0, r.jsx)(P, {
                size: s,
                alt: n,
                spoiler: a,
                renderContent: h,
            }),
        }),
    });
}
function w(e) {
    let { file: t, alt: n, spoiler: a, size: s = O.q.MEDIUM, onMouseEnter: l, onVideoLoadError: c } = e,
        [u, d] = i.useState(),
        f = i.useRef(null);
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
            children: (0, r.jsx)(P, {
                size: s,
                alt: n,
                spoiler: a,
                renderContent: (e) =>
                    (0, r.jsx)(_.Z, {
                        ref: f,
                        src: u,
                        className: o()(S.media, {
                            [S.spoiler]: e,
                            [S.sizeClip]: s === O.q.CLIP,
                            [S.sizeXSmall]: s === O.q.XSMALL,
                            [S.sizeXXSmall]: s === O.q.XXSMALL,
                        }),
                        onError: c,
                        preload: "none",
                        "aria-hidden": !0,
                    }),
            }),
        })
    );
}
function D(e) {
    var t;
    let { upload: n, size: a = O.q.MEDIUM, onMouseEnter: s } = e,
        [l, c] = i.useState(!1);
    return n.isImage && n.item.platform === f.ow.WEB
        ? (0, r.jsx)(R, {
              file: n.item.file,
              alt: n.description,
              spoiler: n.spoiler,
              size: a,
              onMouseEnter: s,
          })
        : !l && n.isVideo && n.item.platform === f.ow.WEB
          ? (0, r.jsx)(w, {
                file: n.item.file,
                size: a,
                alt: n.description,
                spoiler: n.spoiler,
                onMouseEnter: s,
                onVideoLoadError: () => c(!0),
            })
          : (0, r.jsx)("div", {
                onMouseEnter: s,
                className: o()(S.icon, S[null != (t = n.classification) ? t : ""], {
                    [S.imageSmall]: a === O.q.SMALL,
                    [S.sizeXSmall]: a === O.q.XSMALL,
                    [S.sizeXXSmall]: a === O.q.XXSMALL,
                }),
                children: (0, r.jsx)("div", {
                    className: S.tags,
                    children: n.spoiler
                        ? (0, r.jsx)("span", {
                              className: S.altTag,
                              children: v.intl.string(v.t["F+x38C"]),
                          })
                        : null,
                }),
            });
}
function x(e) {
    let {
            channelId: t,
            draftType: n,
            upload: a,
            keyboardModeEnabled: f,
            label: _,
            size: m = O.q.MEDIUM,
            canEdit: h = !0,
            hideFileName: E = !1,
            clip: I,
        } = e,
        C = null != I,
        N = (m = C ? O.q.CLIP : m) === O.q.SMALL,
        P = (0, s.e7)([g.Z], () => {
            var e;
            return null == (e = g.Z.getChannel(t)) ? void 0 : e.guild_id;
        }),
        R = (e) => {
            e.stopPropagation(),
                (0, c.h7j)((e) =>
                    (0, r.jsx)(
                        d.default,
                        A(T({}, e), {
                            draftType: n,
                            upload: a,
                            channelId: t,
                            onSubmit: (e) => {
                                let { name: r, description: i, spoiler: o } = e;
                                u.Z.update(t, a.id, n, {
                                    filename: r,
                                    description: i,
                                    spoiler: o,
                                });
                            },
                        }),
                    ),
                );
        };
    return (0, r.jsxs)(O.Z, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [
                h
                    ? (0, r.jsx)(y.Z, {
                          className: o()({ [S.action]: N }),
                          tooltip: C ? v.intl.string(v.t.MYgdY2) : v.intl.string(v.t.cuurzA),
                          onClick: () => u.Z.update(t, a.id, n, { spoiler: !a.spoiler }),
                          children: a.spoiler
                              ? (0, r.jsx)(c.kZF, {
                                    size: "md",
                                    color: "currentColor",
                                    className: o()({ [S.actionBarIcon]: N }),
                                })
                              : (0, r.jsx)(c.tEF, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: o()({ [S.actionBarIcon]: N }),
                                }),
                      })
                    : null,
                h && !C
                    ? (0, r.jsx)(y.Z, {
                          className: o()({ [S.action]: N }),
                          tooltip: v.intl.string(v.t.Y8ujqr),
                          onClick: R,
                          children: (0, r.jsx)(c.vdY, {
                              size: "xs",
                              color: "currentColor",
                              className: o()({ [S.actionBarIcon]: N }),
                          }),
                      })
                    : null,
                (0, r.jsx)(y.Z, {
                    className: o()({ [S.action]: N }),
                    tooltip: C ? v.intl.string(v.t.MskAXa) : v.intl.string(v.t.vN7REz),
                    onClick: () => u.Z.remove(t, a.id, n),
                    dangerous: !0,
                    children: (0, r.jsx)(c.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: o()({ [S.actionBarIcon]: N }),
                    }),
                }),
            ],
        }),
        draftType: n,
        id: a.id,
        channelId: t,
        handleEditModal: R,
        keyboardModeEnabled: f,
        size: m,
        className: o()({ [S.attachmentItemSmall]: N }),
        children: [
            (0, r.jsx)(D, {
                upload: a,
                size: m,
            }),
            !E &&
                !C &&
                (0, r.jsx)("div", {
                    className: S.filenameContainer,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(c.Text, {
                        className: S.filename,
                        variant: "text-sm/normal",
                        children: null != _ ? _ : a.filename,
                    }),
                }),
            C &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.Z, {
                            className: S.clipsFooter,
                            createdAt: b.default.extractTimestamp(I.id),
                            participantIds: I.users,
                            applicationId: I.applicationId,
                            title: I.name,
                            guildId: P,
                        }),
                        (0, r.jsx)(c.IGR, {
                            color: l.Z.colors.BACKGROUND_BRAND.css,
                            className: S.clipsBadge,
                            text: v.intl.string(v.t.oA4afG),
                        }),
                    ],
                }),
        ],
    });
}
