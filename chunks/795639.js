n.d(t, { _: () => E });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
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
    v = n(70097),
    C = n(374794),
    _ = n(470623),
    b = n(983200),
    j = n(127654),
    N = n(809639),
    T = n(388032),
    I = n(580267);
let S = [
        {
            name: 'Media Post Thumbnail',
            extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp']
        }
    ],
    w = (0, p.hQ)();
function y(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: r } = e,
        l = (0, b.tu)({
            numAttachments: t.length,
            containerWidth: n,
            containerHeight: r
        });
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) => {
            var n;
            return (0, i.jsx)(
                'div',
                {
                    style: l[t],
                    children:
                        !0 === e.isVideo
                            ? (0, i.jsx)(v.Z, {
                                  src: e.src,
                                  className: I.thumbnail,
                                  'aria-hidden': !0
                              })
                            : (0, i.jsx)('img', {
                                  src: e.src,
                                  className: I.thumbnail,
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
    let { parentChannel: l } = e,
        { textAreaState: s } = (0, _.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.X),
        p = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        v = (0, N.Z)(l, null === (t = s.textValue) || void 0 === t ? void 0 : t.trim()),
        b = r.useMemo(() => v.find((e) => e.isThumbnail), [v]),
        E = null != v && v.length > 0,
        R = r.useMemo(() => {
            let e = (null == v ? void 0 : v.length) > 1 ? 1.15 : 1;
            return {
                width: 153 * e,
                height: 86 * e
            };
        }, [v]),
        P = r.useCallback(
            (e) => {
                null != b && m.Z.remove(l.id, b.id, g.Ie.CREATE_FORUM_POST.drafts.type),
                    (0, j.d)(e.currentTarget.files, l, g.Ie.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0
                    }),
                    (e.currentTarget.value = null);
            },
            [l, b]
        ),
        k = (e) => {
            e.stopPropagation(),
                (null == b ? void 0 : b.upload) != null &&
                    (0, u.ZDy)(async () => {
                        let e = b.upload;
                        o()(null != e, 'upload should not be null');
                        let { default: t } = await Promise.resolve().then(n.bind(n, 95152));
                        return (n) =>
                            (0, i.jsx)(t, {
                                ...n,
                                upload: e,
                                channelId: l.id,
                                draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
                                onSubmit: (t) => {
                                    let { name: n, description: i, spoiler: r } = t;
                                    m.Z.update(l.id, e.id, g.Ie.CREATE_FORUM_POST.drafts.type, {
                                        filename: n,
                                        description: i,
                                        spoiler: r
                                    });
                                },
                                disableSpoiler: !0
                            });
                    });
        },
        Z = (0, i.jsx)(C.Z, {
            color: u.Ttl.CUSTOM,
            className: a()(I.uploadFileInputContainer),
            innerClassName: I.uploadThumbnailContainer,
            onChange: P,
            multiple: !1,
            'aria-hidden': !0,
            filters: S,
            'aria-describedby': w,
            'aria-label': E ? T.intl.string(T.t.MxJI3d) : T.intl.string(T.t.CbiofX),
            children: E
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(y, {
                              mediaAttachments: v,
                              containerWidth: R.width,
                              containerHeight: R.height
                          }),
                          (0, i.jsxs)('div', {
                              className: a()(I.changeThumbnailLabelContainer, { [I.changeThumbnailLabelOverflow]: (null == v ? void 0 : v.length) > 2 }),
                              children: [
                                  (0, i.jsx)(u.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'header-secondary',
                                      children: T.intl.string(T.t.MxJI3d)
                                  }),
                                  null == b &&
                                      (0, i.jsx)(u.vdY, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: I.editIcon
                                      })
                              ]
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.FmF, {
                              size: 'custom',
                              width: 39,
                              height: 39,
                              color: 'currentColor',
                              className: I.uploadIcon
                          }),
                          (0, i.jsx)(u.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: T.intl.string(T.t.CbiofX)
                          })
                      ]
                  })
        });
    return (0, i.jsx)('div', {
        className: I.thumbnailContainer,
        style: R,
        children:
            null != b
                ? (0, i.jsx)(f.Z, {
                      actions: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.Z, {
                                  className: I.action,
                                  tooltip: T.intl.string(T.t.Y8ujqq),
                                  onClick: k,
                                  children: (0, i.jsx)(u.vdY, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              }),
                              (0, i.jsx)(x.Z, {
                                  className: I.action,
                                  tooltip: T.intl.string(T.t.vN7REx),
                                  onClick: () => m.Z.remove(l.id, b.id, g.Ie.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, i.jsx)(u.XHJ, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                          ]
                      }),
                      draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
                      id: b.id,
                      channelId: l.id,
                      handleEditModal: k,
                      keyboardModeEnabled: p,
                      size: f.q.SMALL,
                      className: I.attachmentListItem,
                      children: Z
                  })
                : (0, i.jsx)(i.Fragment, { children: Z })
    });
};
