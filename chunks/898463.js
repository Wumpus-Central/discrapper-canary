r.d(n, {
    Z: function () {
        return M;
    },
    r: function () {
        return P;
    }
});
var i = r(47120);
var a = r(315314);
var s = r(610138);
var o = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(200651),
    d = r(192379),
    f = r(120356),
    _ = r.n(f),
    h = r(442837),
    p = r(481060),
    m = r(166459),
    g = r(95152),
    E = r(476326),
    v = r(543651),
    I = r(377171),
    T = r(95398),
    b = r(70097),
    y = r(592125),
    S = r(956664),
    A = r(709054),
    N = r(273031),
    C = r(859235),
    R = r(388032),
    O = r(26577);
let D = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/quicktime', 'video/mp4'];
function L(e) {
    let { alt: n, spoiler: r, renderContent: i, size: a } = e,
        [s, o] = d.useState(!1);
    return (0, c.jsx)(T.a.Provider, {
        value: !r,
        children: (0, c.jsx)(T.Z, {
            containerStyles:
                a === C.q.CLIP
                    ? {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          boxShadow: 'none'
                      }
                    : void 0,
            type: T.Z.Types.ATTACHMENT,
            onReveal: () => o(!0),
            className: O.spoilerContainer,
            children: (e) =>
                (0, c.jsxs)('div', {
                    className: O.spoilerWrapper,
                    children: [
                        i(e),
                        (0, c.jsxs)('div', {
                            className: O.tags,
                            children: [
                                null != n && '' !== n
                                    ? (0, c.jsx)('span', {
                                          className: O.altTag,
                                          children: R.intl.string(R.t.QEW819)
                                      })
                                    : null,
                                s && r
                                    ? (0, c.jsx)('span', {
                                          className: O.altTag,
                                          children: R.intl.string(R.t['F+x38P'])
                                      })
                                    : null
                            ]
                        })
                    ]
                })
        })
    });
}
function x(e) {
    let { file: n, alt: r, spoiler: i, size: a = C.q.MEDIUM, onMouseEnter: s } = e,
        [o, l] = d.useState(),
        [u, f] = d.useState({
            width: 0,
            height: 0
        }),
        h = a === C.q.SMALL;
    d.useEffect(() => {
        if (null == n || !1 === D.includes(n.type)) return;
        let e = URL.createObjectURL(n);
        l(e);
        let r = new Image();
        return (
            (r.onload = () => {
                let { width: e, height: n } = (0, S.zp)(r.width, r.height);
                f({
                    width: e,
                    height: n
                });
            }),
            (r.src = e),
            () => {
                l(void 0),
                    f({
                        width: 0,
                        height: 0
                    }),
                    URL.revokeObjectURL(e);
            }
        );
    }, [n]);
    let m = d.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null == o
                    ? (0, c.jsx)(c.Fragment, {})
                    : (0, c.jsx)('img', {
                          src: o,
                          className: _()(O.media, {
                              [O.spoiler]: e,
                              [O.imageSmall]: h
                          }),
                          'aria-hidden': !0,
                          alt: null != r ? r : '',
                          style: n ? u : {}
                      });
            },
            [o, h, r, u]
        ),
        g = d.useCallback(() => {
            if (null != o)
                (0, p.openModal)((e) =>
                    (0, c.jsx)(p.ModalRoot, {
                        className: O.__invalid_modal,
                        ...e,
                        size: p.ModalSize.DYNAMIC,
                        'aria-label': R.intl.string(R.t.X4IxWF),
                        children: m(!1, !0)
                    })
                );
        }, [o, m]);
    return (0, c.jsx)('div', {
        onMouseEnter: s,
        className: _()(O.mediaContainer, { [O.imageSmall]: h }),
        children: (0, c.jsx)(p.Clickable, {
            onClick: g,
            className: O.clickableMedia,
            children: (0, c.jsx)(L, {
                size: a,
                alt: r,
                spoiler: i,
                renderContent: m
            })
        })
    });
}
function w(e) {
    let { file: n, alt: r, spoiler: i, size: a = C.q.MEDIUM, onMouseEnter: s, onVideoLoadError: o } = e,
        [l, u] = d.useState(),
        f = d.useRef(null);
    return (
        d.useEffect(() => {
            if (null == n) return;
            let e = URL.createObjectURL(n);
            return (
                u(e),
                () => {
                    u(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [n]),
        (0, c.jsx)('div', {
            onMouseEnter: s,
            className: O.mediaContainer,
            children: (0, c.jsx)(L, {
                size: a,
                alt: r,
                spoiler: i,
                renderContent: (e) =>
                    (0, c.jsx)(b.Z, {
                        ref: f,
                        src: l,
                        className: _()(O.media, {
                            [O.spoiler]: e,
                            [O.sizeClip]: a === C.q.CLIP
                        }),
                        onError: o,
                        preload: 'none',
                        'aria-hidden': !0
                    })
            })
        })
    );
}
function P(e) {
    var n;
    let { upload: r, size: i = C.q.MEDIUM, onMouseEnter: a } = e,
        [s, o] = d.useState(!1),
        l = i === C.q.SMALL;
    return r.isImage && r.item.platform === E.ow.WEB
        ? (0, c.jsx)(x, {
              file: r.item.file,
              alt: r.description,
              spoiler: r.spoiler,
              size: i,
              onMouseEnter: a
          })
        : !s && r.isVideo && r.item.platform === E.ow.WEB
          ? (0, c.jsx)(w, {
                file: r.item.file,
                size: i,
                alt: r.description,
                spoiler: r.spoiler,
                onMouseEnter: a,
                onVideoLoadError: () => o(!0)
            })
          : (0, c.jsx)('div', {
                onMouseEnter: a,
                className: _()(O.icon, O.__invalid_imageContainer, {
                    [O[null !== (n = r.classification) && void 0 !== n ? n : '']]: !0,
                    [O.imageSmall]: l
                }),
                children: (0, c.jsx)('div', {
                    className: O.tags,
                    children: r.spoiler
                        ? (0, c.jsx)('span', {
                              className: O.altTag,
                              children: R.intl.string(R.t['F+x38P'])
                          })
                        : null
                })
            });
}
function M(e) {
    let { channelId: n, draftType: r, upload: i, keyboardModeEnabled: a, label: s, size: o = C.q.MEDIUM, canEdit: l = !0, hideFileName: u = !1, clip: f } = e,
        E = null != f,
        T = (o = E ? C.q.CLIP : o) === C.q.SMALL,
        b = (0, h.e7)([y.Z], () => {
            var e;
            return null === (e = y.Z.getChannel(n)) || void 0 === e ? void 0 : e.guild_id;
        }),
        S = (e) => {
            e.stopPropagation(),
                (0, p.openModal)((e) =>
                    (0, c.jsx)(g.default, {
                        ...e,
                        draftType: r,
                        upload: i,
                        channelId: n,
                        onSubmit: (e) => {
                            let { name: a, description: s, spoiler: o } = e;
                            m.Z.update(n, i.id, r, {
                                filename: a,
                                description: s,
                                spoiler: o
                            });
                        }
                    })
                );
        };
    return (0, c.jsxs)(C.Z, {
        actions: (0, c.jsxs)(d.Fragment, {
            children: [
                l
                    ? (0, c.jsx)(N.Z, {
                          className: _()({ [O.action]: T }),
                          tooltip: E ? R.intl.string(R.t.MYgdY2) : R.intl.string(R.t.cuurzM),
                          onClick: () => m.Z.update(n, i.id, r, { spoiler: !i.spoiler }),
                          children: i.spoiler
                              ? (0, c.jsx)(p.EyeSlashIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: _()({ [O.actionBarIcon]: T })
                                })
                              : (0, c.jsx)(p.EyeIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: _()({ [O.actionBarIcon]: T })
                                })
                      })
                    : null,
                l && !E
                    ? (0, c.jsx)(N.Z, {
                          className: _()({ [O.action]: T }),
                          tooltip: R.intl.string(R.t.Y8ujqq),
                          onClick: S,
                          children: (0, c.jsx)(p.PencilIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: _()({ [O.actionBarIcon]: T })
                          })
                      })
                    : null,
                (0, c.jsx)(N.Z, {
                    className: _()({ [O.action]: T }),
                    tooltip: E ? R.intl.string(R.t.MskAXV) : R.intl.string(R.t.vN7REx),
                    onClick: () => m.Z.remove(n, i.id, r),
                    dangerous: !0,
                    children: (0, c.jsx)(p.TrashIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: _()({ [O.actionBarIcon]: T })
                    })
                })
            ]
        }),
        draftType: r,
        id: i.id,
        channelId: n,
        handleEditModal: S,
        keyboardModeEnabled: a,
        size: o,
        className: _()({ [O.attachmentItemSmall]: T }),
        children: [
            (0, c.jsx)(P, {
                upload: i,
                size: o
            }),
            !u &&
                !E &&
                (0, c.jsx)('div', {
                    className: O.filenameContainer,
                    children: (0, c.jsx)(p.Text, {
                        className: O.filename,
                        variant: 'text-sm/normal',
                        children: null != s ? s : i.filename
                    })
                }),
            E &&
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)(v.Z, {
                            className: O.clipsFooter,
                            createdAt: A.default.extractTimestamp(f.id),
                            participantIds: f.users,
                            applicationId: f.applicationId,
                            title: f.name,
                            guildId: b
                        }),
                        (0, c.jsx)(p.TextBadge, {
                            color: I.Z.BG_BRAND,
                            className: O.clipsBadge,
                            text: R.intl.string(R.t.oA4afH)
                        })
                    ]
                })
        ]
    });
}
