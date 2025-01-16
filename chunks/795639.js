n.d(t, {
    _: function () {
        return E;
    }
});
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(232713),
    d = n(399606),
    u = n(481060),
    m = n(166459),
    h = n(607070),
    g = n(541716),
    x = n(273031),
    f = n(859235),
    p = n(313201),
    C = n(70097),
    v = n(374794),
    b = n(470623),
    j = n(983200),
    _ = n(127654),
    I = n(124252),
    T = n(388032),
    N = n(681519);
let S = [
        {
            name: 'Media Post Thumbnail',
            extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp']
        }
    ],
    w = (0, p.hQ)();
function y(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: i } = e,
        r = (0, j.tu)({
            numAttachments: t.length,
            containerWidth: n,
            containerHeight: i
        });
    return (0, a.jsx)(a.Fragment, {
        children: t.map((e, t) => {
            var n;
            return (0, a.jsx)(
                'div',
                {
                    style: r[t],
                    children:
                        !0 === e.isVideo
                            ? (0, a.jsx)(C.Z, {
                                  src: e.src,
                                  className: N.thumbnail,
                                  'aria-hidden': !0
                              })
                            : (0, a.jsx)('img', {
                                  src: e.src,
                                  className: N.thumbnail,
                                  'aria-hidden': !0,
                                  alt: null !== (n = null == e ? void 0 : e.alt) && void 0 !== n ? n : ''
                              })
                },
                e.src
            );
        })
    });
}
let E = (e) => {
    var t;
    let { parentChannel: r } = e,
        { textAreaState: s } = (0, b.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.X),
        p = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        C = (0, I.Z)(r, null === (t = s.textValue) || void 0 === t ? void 0 : t.trim()),
        j = i.useMemo(() => C.find((e) => e.isThumbnail), [C]),
        E = null != C && C.length > 0,
        R = i.useMemo(() => {
            let e = (null == C ? void 0 : C.length) > 1 ? 1.15 : 1;
            return {
                width: 153 * e,
                height: 86 * e
            };
        }, [C]),
        P = i.useCallback(
            (e) => {
                null != j && m.Z.remove(r.id, j.id, g.Ie.CREATE_FORUM_POST.drafts.type),
                    (0, _.d)(e.currentTarget.files, r, g.Ie.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0
                    }),
                    (e.currentTarget.value = null);
            },
            [r, j]
        ),
        M = (e) => {
            if ((e.stopPropagation(), (null == j ? void 0 : j.upload) != null))
                (0, u.openModalLazy)(async () => {
                    let e = j.upload;
                    o()(null != e, 'upload should not be null');
                    let { default: t } = await Promise.resolve().then(n.bind(n, 95152));
                    return (n) =>
                        (0, a.jsx)(t, {
                            ...n,
                            upload: e,
                            channelId: r.id,
                            draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
                            onSubmit: (t) => {
                                let { name: n, description: a, spoiler: i } = t;
                                m.Z.update(r.id, e.id, g.Ie.CREATE_FORUM_POST.drafts.type, {
                                    filename: n,
                                    description: a,
                                    spoiler: i
                                });
                            },
                            disableSpoiler: !0
                        });
                });
        },
        k = (0, a.jsx)(v.Z, {
            color: u.ButtonColors.CUSTOM,
            className: l()(N.uploadFileInputContainer),
            innerClassName: N.uploadThumbnailContainer,
            onChange: P,
            multiple: !1,
            'aria-hidden': !0,
            filters: S,
            'aria-describedby': w,
            'aria-label': E ? T.intl.string(T.t.MxJI3d) : T.intl.string(T.t.CbiofX),
            children: E
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(y, {
                              mediaAttachments: C,
                              containerWidth: R.width,
                              containerHeight: R.height
                          }),
                          (0, a.jsxs)('div', {
                              className: l()(N.changeThumbnailLabelContainer, { [N.changeThumbnailLabelOverflow]: (null == C ? void 0 : C.length) > 2 }),
                              children: [
                                  (0, a.jsx)(u.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'header-secondary',
                                      children: T.intl.string(T.t.MxJI3d)
                                  }),
                                  null == j &&
                                      (0, a.jsx)(u.PencilIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: N.editIcon
                                      })
                              ]
                          })
                      ]
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(u.ImagePlusIcon, {
                              size: 'custom',
                              width: 39,
                              height: 39,
                              color: 'currentColor',
                              className: N.uploadIcon
                          }),
                          (0, a.jsx)(u.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: T.intl.string(T.t.CbiofX)
                          })
                      ]
                  })
        });
    return (0, a.jsx)('div', {
        className: N.thumbnailContainer,
        style: R,
        children:
            null != j
                ? (0, a.jsx)(f.Z, {
                      actions: (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(x.Z, {
                                  className: N.action,
                                  tooltip: T.intl.string(T.t.Y8ujqq),
                                  onClick: M,
                                  children: (0, a.jsx)(u.PencilIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              }),
                              (0, a.jsx)(x.Z, {
                                  className: N.action,
                                  tooltip: T.intl.string(T.t.vN7REx),
                                  onClick: () => m.Z.remove(r.id, j.id, g.Ie.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, a.jsx)(u.TrashIcon, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                          ]
                      }),
                      draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
                      id: j.id,
                      channelId: r.id,
                      handleEditModal: M,
                      keyboardModeEnabled: p,
                      size: f.q.SMALL,
                      className: N.attachmentListItem,
                      children: k
                  })
                : (0, a.jsx)(a.Fragment, { children: k })
    });
};
