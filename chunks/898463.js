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
var o = r(610138);
var s = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(200651),
    d = r(192379),
    f = r(120356),
    p = r.n(f),
    h = r(442837),
    _ = r(481060),
    m = r(166459),
    g = r(95152),
    E = r(476326),
    v = r(543651),
    y = r(377171),
    b = r(95398),
    I = r(70097),
    T = r(592125),
    S = r(956664),
    A = r(709054),
    C = r(273031),
    N = r(859235),
    R = r(388032),
    O = r(26577);
let D = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif', 'video/quicktime', 'video/mp4'];
function L(e) {
    let { alt: n, spoiler: r, renderContent: i, size: a } = e,
        [o, s] = d.useState(!1);
    return (0, c.jsx)(b.a.Provider, {
        value: !r,
        children: (0, c.jsx)(b.Z, {
            containerStyles:
                a === N.q.CLIP
                    ? {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          boxShadow: 'none'
                      }
                    : void 0,
            type: b.Z.Types.ATTACHMENT,
            onReveal: () => s(!0),
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
                                o && r
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
    let { file: n, alt: r, spoiler: i, size: a = N.q.MEDIUM, onMouseEnter: o } = e,
        [s, l] = d.useState(),
        [u, f] = d.useState({
            width: 0,
            height: 0
        }),
        h = a === N.q.SMALL;
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
                return null == s
                    ? (0, c.jsx)(c.Fragment, {})
                    : (0, c.jsx)('img', {
                          src: s,
                          className: p()(O.media, {
                              [O.spoiler]: e,
                              [O.imageSmall]: h
                          }),
                          'aria-hidden': !0,
                          alt: null != r ? r : '',
                          style: n ? u : {}
                      });
            },
            [s, h, r, u]
        ),
        g = d.useCallback(() => {
            if (null != s)
                (0, _.openModal)((e) =>
                    (0, c.jsx)(_.ModalRoot, {
                        className: O.__invalid_modal,
                        ...e,
                        size: _.ModalSize.DYNAMIC,
                        'aria-label': R.intl.string(R.t.X4IxWF),
                        children: m(!1, !0)
                    })
                );
        }, [s, m]);
    return (0, c.jsx)('div', {
        onMouseEnter: o,
        className: p()(O.mediaContainer, { [O.imageSmall]: h }),
        children: (0, c.jsx)(_.Clickable, {
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
    let { file: n, alt: r, spoiler: i, size: a = N.q.MEDIUM, onMouseEnter: o, onVideoLoadError: s } = e,
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
            onMouseEnter: o,
            className: O.mediaContainer,
            children: (0, c.jsx)(L, {
                size: a,
                alt: r,
                spoiler: i,
                renderContent: (e) =>
                    (0, c.jsx)(I.Z, {
                        ref: f,
                        src: l,
                        className: p()(O.media, {
                            [O.spoiler]: e,
                            [O.sizeClip]: a === N.q.CLIP
                        }),
                        onError: s,
                        preload: 'none',
                        'aria-hidden': !0
                    })
            })
        })
    );
}
function P(e) {
    var n;
    let { upload: r, size: i = N.q.MEDIUM, onMouseEnter: a } = e,
        [o, s] = d.useState(!1),
        l = i === N.q.SMALL;
    return r.isImage && r.item.platform === E.ow.WEB
        ? (0, c.jsx)(x, {
              file: r.item.file,
              alt: r.description,
              spoiler: r.spoiler,
              size: i,
              onMouseEnter: a
          })
        : !o && r.isVideo && r.item.platform === E.ow.WEB
          ? (0, c.jsx)(w, {
                file: r.item.file,
                size: i,
                alt: r.description,
                spoiler: r.spoiler,
                onMouseEnter: a,
                onVideoLoadError: () => s(!0)
            })
          : (0, c.jsx)('div', {
                onMouseEnter: a,
                className: p()(O.icon, O.__invalid_imageContainer, {
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
    let { channelId: n, draftType: r, upload: i, keyboardModeEnabled: a, label: o, size: s = N.q.MEDIUM, canEdit: l = !0, hideFileName: u = !1, clip: f } = e,
        E = null != f,
        b = (s = E ? N.q.CLIP : s) === N.q.SMALL,
        I = (0, h.e7)([T.Z], () => {
            var e;
            return null === (e = T.Z.getChannel(n)) || void 0 === e ? void 0 : e.guild_id;
        }),
        S = (e) => {
            e.stopPropagation(),
                (0, _.openModal)((e) =>
                    (0, c.jsx)(g.default, {
                        ...e,
                        draftType: r,
                        upload: i,
                        channelId: n,
                        onSubmit: (e) => {
                            let { name: a, description: o, spoiler: s } = e;
                            m.Z.update(n, i.id, r, {
                                filename: a,
                                description: o,
                                spoiler: s
                            });
                        }
                    })
                );
        };
    return (0, c.jsxs)(N.Z, {
        actions: (0, c.jsxs)(d.Fragment, {
            children: [
                l
                    ? (0, c.jsx)(C.Z, {
                          className: p()({ [O.action]: b }),
                          tooltip: E ? R.intl.string(R.t.MYgdY2) : R.intl.string(R.t.cuurzM),
                          onClick: () => m.Z.update(n, i.id, r, { spoiler: !i.spoiler }),
                          children: i.spoiler
                              ? (0, c.jsx)(_.EyeSlashIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: p()({ [O.actionBarIcon]: b })
                                })
                              : (0, c.jsx)(_.EyeIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: p()({ [O.actionBarIcon]: b })
                                })
                      })
                    : null,
                l && !E
                    ? (0, c.jsx)(C.Z, {
                          className: p()({ [O.action]: b }),
                          tooltip: R.intl.string(R.t.Y8ujqq),
                          onClick: S,
                          children: (0, c.jsx)(_.PencilIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: p()({ [O.actionBarIcon]: b })
                          })
                      })
                    : null,
                (0, c.jsx)(C.Z, {
                    className: p()({ [O.action]: b }),
                    tooltip: E ? R.intl.string(R.t.MskAXV) : R.intl.string(R.t.vN7REx),
                    onClick: () => m.Z.remove(n, i.id, r),
                    dangerous: !0,
                    children: (0, c.jsx)(_.TrashIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: p()({ [O.actionBarIcon]: b })
                    })
                })
            ]
        }),
        draftType: r,
        id: i.id,
        channelId: n,
        handleEditModal: S,
        keyboardModeEnabled: a,
        size: s,
        className: p()({ [O.attachmentItemSmall]: b }),
        children: [
            (0, c.jsx)(P, {
                upload: i,
                size: s
            }),
            !u &&
                !E &&
                (0, c.jsx)('div', {
                    className: O.filenameContainer,
                    children: (0, c.jsx)(_.Text, {
                        className: O.filename,
                        variant: 'text-sm/normal',
                        children: null != o ? o : i.filename
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
                            guildId: I
                        }),
                        (0, c.jsx)(_.TextBadge, {
                            color: y.Z.BG_BRAND,
                            className: O.clipsBadge,
                            text: R.intl.string(R.t.oA4afH)
                        })
                    ]
                })
        ]
    });
}
