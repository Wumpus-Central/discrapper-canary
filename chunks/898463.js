n.d(t, {
    Z: () => D,
    r: () => w
}),
    n(47120),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(166459),
    u = n(95152),
    d = n(476326),
    f = n(543651),
    p = n(377171),
    _ = n(95398),
    h = n(70097),
    m = n(592125),
    g = n(956664),
    E = n(709054),
    v = n(273031),
    b = n(859235),
    y = n(388032),
    O = n(298553);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
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
function N(e, t) {
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
let A = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif', 'video/quicktime', 'video/mp4'];
function C(e) {
    let { alt: t, spoiler: n, renderContent: o, size: a } = e,
        [s, l] = i.useState(!1);
    return (0, r.jsx)(_.a.Provider, {
        value: !n,
        children: (0, r.jsx)(_.Z, {
            containerStyles:
                a === b.q.CLIP
                    ? {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          boxShadow: 'none'
                      }
                    : void 0,
            type: _.Z.Types.ATTACHMENT,
            onReveal: () => l(!0),
            className: O.spoilerContainer,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: O.spoilerWrapper,
                    children: [
                        o(e),
                        (0, r.jsxs)('div', {
                            className: O.tags,
                            children: [
                                null != t && '' !== t
                                    ? (0, r.jsx)('span', {
                                          className: O.altTag,
                                          children: y.NW.string(y.t.QEW819)
                                      })
                                    : null,
                                s && n
                                    ? (0, r.jsx)('span', {
                                          className: O.altTag,
                                          children: y.NW.string(y.t['F+x38P'])
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
    let { file: t, alt: n, spoiler: o, size: s = b.q.MEDIUM, onMouseEnter: c } = e,
        [u, d] = i.useState(),
        [f, p] = i.useState({
            width: 0,
            height: 0
        }),
        _ = s === b.q.SMALL;
    i.useEffect(() => {
        if (null == t || !1 === A.includes(t.type)) return;
        let e = URL.createObjectURL(t);
        d(e);
        let n = new Image();
        return (
            (n.onload = () => {
                let { width: e, height: t } = (0, g.zp)(n.width, n.height);
                p({
                    width: e,
                    height: t
                });
            }),
            (n.src = e),
            () => {
                d(void 0),
                    p({
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
                          className: a()(O.media, {
                              [O.spoiler]: e,
                              [O.imageSmall]: _
                          }),
                          'aria-hidden': !0,
                          alt: null != n ? n : '',
                          style: t ? f : {}
                      });
            },
            [u, _, n, f]
        ),
        m = i.useCallback(() => {
            null != u &&
                (0, l.h7j)((e) =>
                    (0, r.jsx)(
                        l.Y0X,
                        N(I({ className: O.__invalid_modal }, e), {
                            size: l.CgR.DYNAMIC,
                            'aria-label': y.NW.string(y.t.X4IxWF),
                            children: h(!1, !0)
                        })
                    )
                );
        }, [u, h]);
    return (0, r.jsx)('div', {
        onMouseEnter: c,
        className: a()(O.mediaContainer, { [O.imageSmall]: _ }),
        children: (0, r.jsx)(l.P3F, {
            onClick: m,
            className: O.clickableMedia,
            children: (0, r.jsx)(C, {
                size: s,
                alt: n,
                spoiler: o,
                renderContent: h
            })
        })
    });
}
function P(e) {
    let { file: t, alt: n, spoiler: o, size: s = b.q.MEDIUM, onMouseEnter: l, onVideoLoadError: c } = e,
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
            className: O.mediaContainer,
            children: (0, r.jsx)(C, {
                size: s,
                alt: n,
                spoiler: o,
                renderContent: (e) =>
                    (0, r.jsx)(h.Z, {
                        ref: f,
                        src: u,
                        className: a()(O.media, {
                            [O.spoiler]: e,
                            [O.sizeClip]: s === b.q.CLIP
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
    let { upload: n, size: o = b.q.MEDIUM, onMouseEnter: s } = e,
        [l, c] = i.useState(!1),
        u = o === b.q.SMALL;
    return n.isImage && n.item.platform === d.ow.WEB
        ? (0, r.jsx)(R, {
              file: n.item.file,
              alt: n.description,
              spoiler: n.spoiler,
              size: o,
              onMouseEnter: s
          })
        : !l && n.isVideo && n.item.platform === d.ow.WEB
          ? (0, r.jsx)(P, {
                file: n.item.file,
                size: o,
                alt: n.description,
                spoiler: n.spoiler,
                onMouseEnter: s,
                onVideoLoadError: () => c(!0)
            })
          : (0, r.jsx)('div', {
                onMouseEnter: s,
                className: a()(O.icon, O.__invalid_imageContainer, {
                    [O[null !== (t = n.classification) && void 0 !== t ? t : '']]: !0,
                    [O.imageSmall]: u
                }),
                children: (0, r.jsx)('div', {
                    className: O.tags,
                    children: n.spoiler
                        ? (0, r.jsx)('span', {
                              className: O.altTag,
                              children: y.NW.string(y.t['F+x38P'])
                          })
                        : null
                })
            });
}
function D(e) {
    let { channelId: t, draftType: n, upload: o, keyboardModeEnabled: d, label: _, size: h = b.q.MEDIUM, canEdit: g = !0, hideFileName: S = !1, clip: T } = e,
        A = null != T,
        C = (h = A ? b.q.CLIP : h) === b.q.SMALL,
        R = (0, s.e7)([m.Z], () => {
            var e;
            return null === (e = m.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
        }),
        P = (e) => {
            e.stopPropagation(),
                (0, l.h7j)((e) =>
                    (0, r.jsx)(
                        u.default,
                        N(I({}, e), {
                            draftType: n,
                            upload: o,
                            channelId: t,
                            onSubmit: (e) => {
                                let { name: r, description: i, spoiler: a } = e;
                                c.Z.update(t, o.id, n, {
                                    filename: r,
                                    description: i,
                                    spoiler: a
                                });
                            }
                        })
                    )
                );
        };
    return (0, r.jsxs)(b.Z, {
        actions: (0, r.jsxs)(i.Fragment, {
            children: [
                g
                    ? (0, r.jsx)(v.Z, {
                          className: a()({ [O.action]: C }),
                          tooltip: A ? y.NW.string(y.t.MYgdY2) : y.NW.string(y.t.cuurzM),
                          onClick: () => c.Z.update(t, o.id, n, { spoiler: !o.spoiler }),
                          children: o.spoiler
                              ? (0, r.jsx)(l.kZF, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()({ [O.actionBarIcon]: C })
                                })
                              : (0, r.jsx)(l.tEF, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: a()({ [O.actionBarIcon]: C })
                                })
                      })
                    : null,
                g && !A
                    ? (0, r.jsx)(v.Z, {
                          className: a()({ [O.action]: C }),
                          tooltip: y.NW.string(y.t.Y8ujqq),
                          onClick: P,
                          children: (0, r.jsx)(l.vdY, {
                              size: 'xs',
                              color: 'currentColor',
                              className: a()({ [O.actionBarIcon]: C })
                          })
                      })
                    : null,
                (0, r.jsx)(v.Z, {
                    className: a()({ [O.action]: C }),
                    tooltip: A ? y.NW.string(y.t.MskAXV) : y.NW.string(y.t.vN7REx),
                    onClick: () => c.Z.remove(t, o.id, n),
                    dangerous: !0,
                    children: (0, r.jsx)(l.XHJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()({ [O.actionBarIcon]: C })
                    })
                })
            ]
        }),
        draftType: n,
        id: o.id,
        channelId: t,
        handleEditModal: P,
        keyboardModeEnabled: d,
        size: h,
        className: a()({ [O.attachmentItemSmall]: C }),
        children: [
            (0, r.jsx)(w, {
                upload: o,
                size: h
            }),
            !S &&
                !A &&
                (0, r.jsx)('div', {
                    className: O.filenameContainer,
                    children: (0, r.jsx)(l.Text, {
                        className: O.filename,
                        variant: 'text-sm/normal',
                        children: null != _ ? _ : o.filename
                    })
                }),
            A &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.Z, {
                            className: O.clipsFooter,
                            createdAt: E.default.extractTimestamp(T.id),
                            participantIds: T.users,
                            applicationId: T.applicationId,
                            title: T.name,
                            guildId: R
                        }),
                        (0, r.jsx)(l.IGR, {
                            color: p.Z.BG_BRAND,
                            className: O.clipsBadge,
                            text: y.NW.string(y.t.oA4afH)
                        })
                    ]
                })
        ]
    });
}
