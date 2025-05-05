n.d(t, {
    Z: () => D,
    r: () => w
}),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(953529);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(166459),
    u = n(95152),
    d = n(476326),
    f = n(543651),
    _ = n(377171),
    p = n(95398),
    h = n(70097),
    m = n(592125),
    g = n(956664),
    E = n(709054),
    b = n(273031),
    y = n(859235),
    O = n(388032),
    v = n(739846);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif', 'video/quicktime', 'video/mp4'];
function C(e) {
    let { alt: t, spoiler: n, renderContent: a, size: o } = e,
        [s, l] = i.useState(!1);
    return (0, r.jsx)(p.aQ.Provider, {
        value: !n,
        children: (0, r.jsx)(p.ZP, {
            containerStyles:
                o === y.q.CLIP
                    ? {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          boxShadow: 'none'
                      }
                    : void 0,
            type: p.ZP.Types.ATTACHMENT,
            onReveal: () => l(!0),
            className: v.spoilerContainer,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: v.spoilerWrapper,
                    children: [
                        a(e),
                        (0, r.jsxs)('div', {
                            className: v.tags,
                            children: [
                                null != t && '' !== t
                                    ? (0, r.jsx)('span', {
                                          className: v.altTag,
                                          children: O.intl.string(O.t.QEW819)
                                      })
                                    : null,
                                s && n
                                    ? (0, r.jsx)('span', {
                                          className: v.altTag,
                                          children: O.intl.string(O.t['F+x38P'])
                                      })
                                    : null
                            ]
                        })
                    ]
                })
        })
    });
}
function R(e) {
    let { file: t, alt: n, spoiler: a, size: s = y.q.MEDIUM, onMouseEnter: c } = e,
        [u, d] = i.useState(),
        [f, _] = i.useState({
            width: 0,
            height: 0
        }),
        p = s === y.q.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === N.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, g.zp)(n.width, n.height);
                _({
                    width: e,
                    height: t
                });
            }),
            (n.src = e),
            () => {
                d(void 0),
                    _({
                        width: 0,
                        height: 0
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
                    : (0, r.jsx)('img', {
                          src: u,
                          className: o()(v.media, {
                              [v.spoiler]: e,
                              [v.imageSmall]: p
                          }),
                          'aria-hidden': !0,
                          alt: null != n ? n : '',
                          style: t ? f : {}
                      });
            },
            [u, p, n, f]
        ),
        m = i.useCallback(() => {
            null != u &&
                (0, l.h7j)((e) =>
                    (0, r.jsx)(
                        l.Y0X,
                        A(S({ className: v.__invalid_modal }, e), {
                            size: l.CgR.DYNAMIC,
                            'aria-label': O.intl.string(O.t.X4IxWF),
                            children: h(!1, !0)
                        })
                    )
                );
        }, [u, h]);
    return (0, r.jsx)('div', {
        onMouseEnter: c,
        className: o()(v.mediaContainer, { [v.imageSmall]: p }),
        children: (0, r.jsx)(l.P3F, {
            onClick: m,
            className: v.clickableMedia,
            children: (0, r.jsx)(C, {
                size: s,
                alt: n,
                spoiler: a,
                renderContent: h
            })
        })
    });
}
function P(e) {
    let { file: t, alt: n, spoiler: a, size: s = y.q.MEDIUM, onMouseEnter: l, onVideoLoadError: c } = e,
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
        (0, r.jsx)('div', {
            onMouseEnter: l,
            className: v.mediaContainer,
            children: (0, r.jsx)(C, {
                size: s,
                alt: n,
                spoiler: a,
                renderContent: (e) =>
                    (0, r.jsx)(h.Z, {
                        ref: f,
                        src: u,
                        className: o()(v.media, {
                            [v.spoiler]: e,
                            [v.sizeClip]: s === y.q.CLIP
                        }),
                        onError: c,
                        preload: 'none',
                        'aria-hidden': !0
                    })
            })
        })
    );
}
function w(e) {
    var t;
    let { upload: n, size: a = y.q.MEDIUM, onMouseEnter: s } = e,
        [l, c] = i.useState(!1),
        u = a === y.q.SMALL;
    return n.isImage && n.item.platform === d.ow.WEB
        ? (0, r.jsx)(R, {
              file: n.item.file,
              alt: n.description,
              spoiler: n.spoiler,
              size: a,
              onMouseEnter: s
          })
        : !l && n.isVideo && n.item.platform === d.ow.WEB
          ? (0, r.jsx)(P, {
                file: n.item.file,
                size: a,
                alt: n.description,
                spoiler: n.spoiler,
                onMouseEnter: s,
                onVideoLoadError: () => c(!0)
            })
          : (0, r.jsx)('div', {
                onMouseEnter: s,
                className: o()(v.icon, v.__invalid_imageContainer, {
                    [v[null != (t = n.classification) ? t : '']]: !0,
                    [v.imageSmall]: u
                }),
                children: (0, r.jsx)('div', {
                    className: v.tags,
                    children: n.spoiler
                        ? (0, r.jsx)('span', {
                              className: v.altTag,
                              children: O.intl.string(O.t['F+x38P'])
                          })
                        : null
                })
            });
}
function D(e) {
    let { channelId: t, draftType: n, upload: a, keyboardModeEnabled: d, label: p, size: h = y.q.MEDIUM, canEdit: g = !0, hideFileName: I = !1, clip: T } = e,
        N = null != T,
        C = (h = N ? y.q.CLIP : h) === y.q.SMALL,
        R = (0, s.e7)([m.Z], () => {
            var e;
            return null == (e = m.Z.getChannel(t)) ? void 0 : e.guild_id;
        }),
        P = (e) => {
            e.stopPropagation(),
                (0, l.h7j)((e) =>
                    (0, r.jsx)(
                        u.default,
                        A(S({}, e), {
                            draftType: n,
                            upload: a,
                            channelId: t,
                            onSubmit: (e) => {
                                let { name: r, description: i, spoiler: o } = e;
                                c.Z.update(t, a.id, n, {
                                    filename: r,
                                    description: i,
                                    spoiler: o
                                });
                            }
                        })
                    )
                );
        };
    return (0, r.jsxs)(y.Z, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [
                g
                    ? (0, r.jsx)(b.Z, {
                          className: o()({ [v.action]: C }),
                          tooltip: N ? O.intl.string(O.t.MYgdY2) : O.intl.string(O.t.cuurzM),
                          onClick: () => c.Z.update(t, a.id, n, { spoiler: !a.spoiler }),
                          children: a.spoiler
                              ? (0, r.jsx)(l.kZF, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: o()({ [v.actionBarIcon]: C })
                                })
                              : (0, r.jsx)(l.tEF, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: o()({ [v.actionBarIcon]: C })
                                })
                      })
                    : null,
                g && !N
                    ? (0, r.jsx)(b.Z, {
                          className: o()({ [v.action]: C }),
                          tooltip: O.intl.string(O.t.Y8ujqq),
                          onClick: P,
                          children: (0, r.jsx)(l.vdY, {
                              size: 'xs',
                              color: 'currentColor',
                              className: o()({ [v.actionBarIcon]: C })
                          })
                      })
                    : null,
                (0, r.jsx)(b.Z, {
                    className: o()({ [v.action]: C }),
                    tooltip: N ? O.intl.string(O.t.MskAXV) : O.intl.string(O.t.vN7REx),
                    onClick: () => c.Z.remove(t, a.id, n),
                    dangerous: !0,
                    children: (0, r.jsx)(l.XHJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()({ [v.actionBarIcon]: C })
                    })
                })
            ]
        }),
        draftType: n,
        id: a.id,
        channelId: t,
        handleEditModal: P,
        keyboardModeEnabled: d,
        size: h,
        className: o()({ [v.attachmentItemSmall]: C }),
        children: [
            (0, r.jsx)(w, {
                upload: a,
                size: h
            }),
            !I &&
                !N &&
                (0, r.jsx)('div', {
                    className: v.filenameContainer,
                    children: (0, r.jsx)(l.Text, {
                        className: v.filename,
                        variant: 'text-sm/normal',
                        children: null != p ? p : a.filename
                    })
                }),
            N &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.Z, {
                            className: v.clipsFooter,
                            createdAt: E.default.extractTimestamp(T.id),
                            participantIds: T.users,
                            applicationId: T.applicationId,
                            title: T.name,
                            guildId: R
                        }),
                        (0, r.jsx)(l.IGR, {
                            color: _.Z.BG_BRAND,
                            className: v.clipsBadge,
                            text: O.intl.string(O.t.oA4afH)
                        })
                    ]
                })
        ]
    });
}
