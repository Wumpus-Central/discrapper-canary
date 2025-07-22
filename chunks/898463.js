(n.d(t, {
    Z: () => L,
    r: () => D
}),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(953529));
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
    m = n(312097),
    g = n(592125),
    E = n(956664),
    b = n(709054),
    y = n(273031),
    O = n(859235),
    v = n(388032),
    I = n(739846);
function T(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            }));
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif', 'video/quicktime', 'video/mp4'];
function R(e) {
    let { alt: t, spoiler: n, renderContent: a, size: o } = e,
        [s, l] = i.useState(!1);
    return (0, r.jsx)(p.aQ.Provider, {
        value: !n,
        children: (0, r.jsx)(p.ZP, {
            containerStyles:
                o === O.q.CLIP
                    ? {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          boxShadow: 'none'
                      }
                    : void 0,
            type: p.ZP.Types.ATTACHMENT,
            onReveal: () => l(!0),
            className: I.spoilerContainer,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: I.spoilerWrapper,
                    children: [
                        a(e),
                        (0, r.jsxs)('div', {
                            className: I.tags,
                            children: [
                                null != t && '' !== t
                                    ? (0, r.jsx)('span', {
                                          className: I.altTag,
                                          children: v.intl.string(v.t.QEW819)
                                      })
                                    : null,
                                s && n
                                    ? (0, r.jsx)('span', {
                                          className: I.altTag,
                                          children: v.intl.string(v.t['F+x38P'])
                                      })
                                    : null
                            ]
                        })
                    ]
                })
        })
    });
}
function P(e) {
    let { file: t, alt: n, spoiler: a, size: s = O.q.MEDIUM, onMouseEnter: c } = e,
        [u, d] = i.useState(),
        [f, _] = i.useState({
            width: 0,
            height: 0
        }),
        p = s === O.q.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === C.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, E.zp)(n.width, n.height);
                _({
                    width: e,
                    height: t
                });
            }),
            (n.src = e),
            () => {
                (d(void 0),
                    _({
                        width: 0,
                        height: 0
                    }),
                    URL.revokeObjectURL(e));
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
                          className: o()(I.media, {
                              [I.spoiler]: e,
                              [I.imageSmall]: p
                          }),
                          'aria-hidden': !0,
                          alt: null != n ? n : '',
                          style: t ? f : {}
                      });
            },
            [u, p, n, f]
        ),
        g = i.useCallback(() => {
            null != u &&
                (0, m.K)({
                    location: 'ChannelAttachmentUpload',
                    items: [
                        {
                            type: 'IMAGE',
                            url: u
                        }
                    ],
                    shouldHideMediaOptions: !0
                });
        }, [u]);
    return (0, r.jsx)('div', {
        onMouseEnter: c,
        className: o()(I.mediaContainer, { [I.imageSmall]: p }),
        children: (0, r.jsx)(l.P3F, {
            onClick: g,
            className: I.clickableMedia,
            children: (0, r.jsx)(R, {
                size: s,
                alt: n,
                spoiler: a,
                renderContent: h
            })
        })
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
                    (d(void 0), URL.revokeObjectURL(e));
                }
            );
        }, [t]),
        (0, r.jsx)('div', {
            onMouseEnter: l,
            className: I.mediaContainer,
            children: (0, r.jsx)(R, {
                size: s,
                alt: n,
                spoiler: a,
                renderContent: (e) =>
                    (0, r.jsx)(h.Z, {
                        ref: f,
                        src: u,
                        className: o()(I.media, {
                            [I.spoiler]: e,
                            [I.sizeClip]: s === O.q.CLIP
                        }),
                        onError: c,
                        preload: 'none',
                        'aria-hidden': !0
                    })
            })
        })
    );
}
function D(e) {
    var t;
    let { upload: n, size: a = O.q.MEDIUM, onMouseEnter: s } = e,
        [l, c] = i.useState(!1),
        u = a === O.q.SMALL;
    return n.isImage && n.item.platform === d.ow.WEB
        ? (0, r.jsx)(P, {
              file: n.item.file,
              alt: n.description,
              spoiler: n.spoiler,
              size: a,
              onMouseEnter: s
          })
        : !l && n.isVideo && n.item.platform === d.ow.WEB
          ? (0, r.jsx)(w, {
                file: n.item.file,
                size: a,
                alt: n.description,
                spoiler: n.spoiler,
                onMouseEnter: s,
                onVideoLoadError: () => c(!0)
            })
          : (0, r.jsx)('div', {
                onMouseEnter: s,
                className: o()(I.icon, I.__invalid_imageContainer, {
                    [I[null != (t = n.classification) ? t : '']]: !0,
                    [I.imageSmall]: u
                }),
                children: (0, r.jsx)('div', {
                    className: I.tags,
                    children: n.spoiler
                        ? (0, r.jsx)('span', {
                              className: I.altTag,
                              children: v.intl.string(v.t['F+x38P'])
                          })
                        : null
                })
            });
}
function L(e) {
    let { channelId: t, draftType: n, upload: a, keyboardModeEnabled: d, label: p, size: h = O.q.MEDIUM, canEdit: m = !0, hideFileName: E = !1, clip: T } = e,
        A = null != T,
        C = (h = A ? O.q.CLIP : h) === O.q.SMALL,
        R = (0, s.e7)([g.Z], () => {
            var e;
            return null == (e = g.Z.getChannel(t)) ? void 0 : e.guild_id;
        }),
        P = (e) => {
            (e.stopPropagation(),
                (0, l.h7j)((e) =>
                    (0, r.jsx)(
                        u.default,
                        N(S({}, e), {
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
                ));
        };
    return (0, r.jsxs)(O.Z, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [
                m
                    ? (0, r.jsx)(y.Z, {
                          className: o()({ [I.action]: C }),
                          tooltip: A ? v.intl.string(v.t.MYgdY2) : v.intl.string(v.t.cuurzM),
                          onClick: () => c.Z.update(t, a.id, n, { spoiler: !a.spoiler }),
                          children: a.spoiler
                              ? (0, r.jsx)(l.kZF, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: o()({ [I.actionBarIcon]: C })
                                })
                              : (0, r.jsx)(l.tEF, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: o()({ [I.actionBarIcon]: C })
                                })
                      })
                    : null,
                m && !A
                    ? (0, r.jsx)(y.Z, {
                          className: o()({ [I.action]: C }),
                          tooltip: v.intl.string(v.t.Y8ujqq),
                          onClick: P,
                          children: (0, r.jsx)(l.vdY, {
                              size: 'xs',
                              color: 'currentColor',
                              className: o()({ [I.actionBarIcon]: C })
                          })
                      })
                    : null,
                (0, r.jsx)(y.Z, {
                    className: o()({ [I.action]: C }),
                    tooltip: A ? v.intl.string(v.t.MskAXV) : v.intl.string(v.t.vN7REx),
                    onClick: () => c.Z.remove(t, a.id, n),
                    dangerous: !0,
                    children: (0, r.jsx)(l.XHJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()({ [I.actionBarIcon]: C })
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
        className: o()({ [I.attachmentItemSmall]: C }),
        children: [
            (0, r.jsx)(D, {
                upload: a,
                size: h
            }),
            !E &&
                !A &&
                (0, r.jsx)('div', {
                    className: I.filenameContainer,
                    children: (0, r.jsx)(l.Text, {
                        className: I.filename,
                        variant: 'text-sm/normal',
                        children: null != p ? p : a.filename
                    })
                }),
            A &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.Z, {
                            className: I.clipsFooter,
                            createdAt: b.default.extractTimestamp(T.id),
                            participantIds: T.users,
                            applicationId: T.applicationId,
                            title: T.name,
                            guildId: R
                        }),
                        (0, r.jsx)(l.IGR, {
                            color: _.Z.BG_BRAND,
                            className: I.clipsBadge,
                            text: v.intl.string(v.t.oA4afH)
                        })
                    ]
                })
        ]
    });
}
