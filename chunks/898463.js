n.d(t, {
    Z: () => R,
    r: () => C
}),
    n(47120),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(166459),
    c = n(95152),
    d = n(476326),
    f = n(543651),
    _ = n(377171),
    p = n(95398),
    h = n(70097),
    m = n(592125),
    g = n(956664),
    E = n(709054),
    v = n(273031),
    y = n(859235),
    I = n(388032),
    T = n(709198);
let b = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif', 'video/quicktime', 'video/mp4'];
function S(e) {
    let { alt: t, spoiler: n, renderContent: a, size: s } = e,
        [o, l] = r.useState(!1);
    return (0, i.jsx)(p.a.Provider, {
        value: !n,
        children: (0, i.jsx)(p.Z, {
            containerStyles:
                s === y.q.CLIP
                    ? {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          boxShadow: 'none'
                      }
                    : void 0,
            type: p.Z.Types.ATTACHMENT,
            onReveal: () => l(!0),
            className: T.spoilerContainer,
            children: (e) =>
                (0, i.jsxs)('div', {
                    className: T.spoilerWrapper,
                    children: [
                        a(e),
                        (0, i.jsxs)('div', {
                            className: T.tags,
                            children: [
                                null != t && '' !== t
                                    ? (0, i.jsx)('span', {
                                          className: T.altTag,
                                          children: I.intl.string(I.t.QEW819)
                                      })
                                    : null,
                                o && n
                                    ? (0, i.jsx)('span', {
                                          className: T.altTag,
                                          children: I.intl.string(I.t['F+x38P'])
                                      })
                                    : null
                            ]
                        })
                    ]
                })
        })
    });
}
function A(e) {
    let { file: t, alt: n, spoiler: a, size: o = y.q.MEDIUM, onMouseEnter: u } = e,
        [c, d] = r.useState(),
        [f, _] = r.useState({
            width: 0,
            height: 0
        }),
        p = o === y.q.SMALL;
    r.useEffect(() => {
        if (null == t || !1 === b.includes(t.type)) return;
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
    let h = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == c
                    ? (0, i.jsx)(i.Fragment, {})
                    : (0, i.jsx)('img', {
                          src: c,
                          className: s()(T.media, {
                              [T.spoiler]: e,
                              [T.imageSmall]: p
                          }),
                          'aria-hidden': !0,
                          alt: null != n ? n : '',
                          style: t ? f : {}
                      });
            },
            [c, p, n, f]
        ),
        m = r.useCallback(() => {
            null != c &&
                (0, l.h7j)((e) =>
                    (0, i.jsx)(l.Y0X, {
                        className: T.__invalid_modal,
                        ...e,
                        size: l.CgR.DYNAMIC,
                        'aria-label': I.intl.string(I.t.X4IxWF),
                        children: h(!1, !0)
                    })
                );
        }, [c, h]);
    return (0, i.jsx)('div', {
        onMouseEnter: u,
        className: s()(T.mediaContainer, { [T.imageSmall]: p }),
        children: (0, i.jsx)(l.P3F, {
            onClick: m,
            className: T.clickableMedia,
            children: (0, i.jsx)(S, {
                size: o,
                alt: n,
                spoiler: a,
                renderContent: h
            })
        })
    });
}
function N(e) {
    let { file: t, alt: n, spoiler: a, size: o = y.q.MEDIUM, onMouseEnter: l, onVideoLoadError: u } = e,
        [c, d] = r.useState(),
        f = r.useRef(null);
    return (
        r.useEffect(() => {
            if (null == t) return;
            let e = URL.createObjectURL(t);
            return (
                d(e),
                () => {
                    d(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, i.jsx)('div', {
            onMouseEnter: l,
            className: T.mediaContainer,
            children: (0, i.jsx)(S, {
                size: o,
                alt: n,
                spoiler: a,
                renderContent: (e) =>
                    (0, i.jsx)(h.Z, {
                        ref: f,
                        src: c,
                        className: s()(T.media, {
                            [T.spoiler]: e,
                            [T.sizeClip]: o === y.q.CLIP
                        }),
                        onError: u,
                        preload: 'none',
                        'aria-hidden': !0
                    })
            })
        })
    );
}
function C(e) {
    var t;
    let { upload: n, size: a = y.q.MEDIUM, onMouseEnter: o } = e,
        [l, u] = r.useState(!1),
        c = a === y.q.SMALL;
    return n.isImage && n.item.platform === d.ow.WEB
        ? (0, i.jsx)(A, {
              file: n.item.file,
              alt: n.description,
              spoiler: n.spoiler,
              size: a,
              onMouseEnter: o
          })
        : !l && n.isVideo && n.item.platform === d.ow.WEB
          ? (0, i.jsx)(N, {
                file: n.item.file,
                size: a,
                alt: n.description,
                spoiler: n.spoiler,
                onMouseEnter: o,
                onVideoLoadError: () => u(!0)
            })
          : (0, i.jsx)('div', {
                onMouseEnter: o,
                className: s()(T.icon, T.__invalid_imageContainer, {
                    [T[null !== (t = n.classification) && void 0 !== t ? t : '']]: !0,
                    [T.imageSmall]: c
                }),
                children: (0, i.jsx)('div', {
                    className: T.tags,
                    children: n.spoiler
                        ? (0, i.jsx)('span', {
                              className: T.altTag,
                              children: I.intl.string(I.t['F+x38P'])
                          })
                        : null
                })
            });
}
function R(e) {
    let { channelId: t, draftType: n, upload: a, keyboardModeEnabled: d, label: p, size: h = y.q.MEDIUM, canEdit: g = !0, hideFileName: b = !1, clip: S } = e,
        A = null != S,
        N = (h = A ? y.q.CLIP : h) === y.q.SMALL,
        R = (0, o.e7)([m.Z], () => {
            var e;
            return null === (e = m.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
        }),
        O = (e) => {
            e.stopPropagation(),
                (0, l.h7j)((e) =>
                    (0, i.jsx)(c.default, {
                        ...e,
                        draftType: n,
                        upload: a,
                        channelId: t,
                        onSubmit: (e) => {
                            let { name: i, description: r, spoiler: s } = e;
                            u.Z.update(t, a.id, n, {
                                filename: i,
                                description: r,
                                spoiler: s
                            });
                        }
                    })
                );
        };
    return (0, i.jsxs)(y.Z, {
        actions: (0, i.jsxs)(r.Fragment, {
            children: [
                g
                    ? (0, i.jsx)(v.Z, {
                          className: s()({ [T.action]: N }),
                          tooltip: A ? I.intl.string(I.t.MYgdY2) : I.intl.string(I.t.cuurzM),
                          onClick: () => u.Z.update(t, a.id, n, { spoiler: !a.spoiler }),
                          children: a.spoiler
                              ? (0, i.jsx)(l.kZF, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: s()({ [T.actionBarIcon]: N })
                                })
                              : (0, i.jsx)(l.tEF, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: s()({ [T.actionBarIcon]: N })
                                })
                      })
                    : null,
                g && !A
                    ? (0, i.jsx)(v.Z, {
                          className: s()({ [T.action]: N }),
                          tooltip: I.intl.string(I.t.Y8ujqq),
                          onClick: O,
                          children: (0, i.jsx)(l.vdY, {
                              size: 'xs',
                              color: 'currentColor',
                              className: s()({ [T.actionBarIcon]: N })
                          })
                      })
                    : null,
                (0, i.jsx)(v.Z, {
                    className: s()({ [T.action]: N }),
                    tooltip: A ? I.intl.string(I.t.MskAXV) : I.intl.string(I.t.vN7REx),
                    onClick: () => u.Z.remove(t, a.id, n),
                    dangerous: !0,
                    children: (0, i.jsx)(l.XHJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()({ [T.actionBarIcon]: N })
                    })
                })
            ]
        }),
        draftType: n,
        id: a.id,
        channelId: t,
        handleEditModal: O,
        keyboardModeEnabled: d,
        size: h,
        className: s()({ [T.attachmentItemSmall]: N }),
        children: [
            (0, i.jsx)(C, {
                upload: a,
                size: h
            }),
            !b &&
                !A &&
                (0, i.jsx)('div', {
                    className: T.filenameContainer,
                    children: (0, i.jsx)(l.Text, {
                        className: T.filename,
                        variant: 'text-sm/normal',
                        children: null != p ? p : a.filename
                    })
                }),
            A &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(f.Z, {
                            className: T.clipsFooter,
                            createdAt: E.default.extractTimestamp(S.id),
                            participantIds: S.users,
                            applicationId: S.applicationId,
                            title: S.name,
                            guildId: R
                        }),
                        (0, i.jsx)(l.IGR, {
                            color: _.Z.BG_BRAND,
                            className: T.clipsBadge,
                            text: I.intl.string(I.t.oA4afH)
                        })
                    ]
                })
        ]
    });
}
