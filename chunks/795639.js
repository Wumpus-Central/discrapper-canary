n.d(t, { _: () => P }), n(781311), n(953529);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(94171),
    d = n(399606),
    u = n(481060),
    m = n(166459),
    h = n(607070),
    g = n(541716),
    f = n(273031),
    x = n(859235),
    p = n(313201),
    b = n(70097),
    j = n(374794),
    v = n(470623),
    _ = n(983200),
    C = n(127654),
    y = n(124252),
    O = n(388032),
    w = n(554010);
let S = [
        {
            name: 'Media Post Thumbnail',
            extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp']
        }
    ],
    N = (0, p.hQ)();
function T(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: i } = e,
        a = (0, _.tu)({
            numAttachments: t.length,
            containerWidth: n,
            containerHeight: i
        });
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) => {
            var n;
            return (0, r.jsx)(
                'div',
                {
                    style: a[t],
                    children:
                        !0 === e.isVideo
                            ? (0, r.jsx)(b.Z, {
                                  src: e.src,
                                  className: w.thumbnail,
                                  'aria-hidden': !0
                              })
                            : (0, r.jsx)('img', {
                                  src: e.src,
                                  className: w.thumbnail,
                                  'aria-hidden': !0,
                                  alt: null != (n = null == e ? void 0 : e.alt) ? n : ''
                              })
                },
                e.src
            );
        })
    });
}
let P = (e) => {
    var t;
    let { parentChannel: a } = e,
        { textAreaState: s } = (0, v.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.X),
        p = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        b = (0, y.Z)(a, null == (t = s.textValue) ? void 0 : t.trim()),
        _ = i.useMemo(() => b.find((e) => e.isThumbnail), [b]),
        P = null != b && b.length > 0,
        I = i.useMemo(() => {
            let e = (null == b ? void 0 : b.length) > 1 ? 1.15 : 1;
            return {
                width: 153 * e,
                height: 86 * e
            };
        }, [b]),
        E = i.useCallback(
            (e) => {
                null != _ && m.Z.remove(a.id, _.id, g.Ie.CREATE_FORUM_POST.drafts.type),
                    (0, C.d)(e.currentTarget.files, a, g.Ie.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0
                    }),
                    (e.currentTarget.value = null);
            },
            [a, _]
        ),
        R = (e) => {
            e.stopPropagation(),
                (null == _ ? void 0 : _.upload) != null &&
                    (0, u.ZDy)(async () => {
                        let e = _.upload;
                        o()(null != e, 'upload should not be null');
                        let { default: t } = await Promise.resolve().then(n.bind(n, 95152));
                        return (n) => {
                            var i, l;
                            return (0, r.jsx)(
                                t,
                                ((i = (function (e) {
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
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (l = l =
                                    {
                                        upload: e,
                                        channelId: a.id,
                                        draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
                                        onSubmit: (t) => {
                                            let { name: n, description: r, spoiler: i } = t;
                                            m.Z.update(a.id, e.id, g.Ie.CREATE_FORUM_POST.drafts.type, {
                                                filename: n,
                                                description: r,
                                                spoiler: i
                                            });
                                        },
                                        disableSpoiler: !0
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                i)
                            );
                        };
                    });
        },
        k = (0, r.jsx)(j.Z, {
            color: u.Ttl.CUSTOM,
            className: w.uploadFileInputContainer,
            innerClassName: w.uploadThumbnailContainer,
            onChange: E,
            multiple: !1,
            'aria-hidden': !0,
            filters: S,
            'aria-describedby': N,
            'aria-label': P ? O.intl.string(O.t.MxJI3d) : O.intl.string(O.t.CbiofX),
            children: P
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(T, {
                              mediaAttachments: b,
                              containerWidth: I.width,
                              containerHeight: I.height
                          }),
                          (0, r.jsxs)('div', {
                              className: l()(w.changeThumbnailLabelContainer, { [w.changeThumbnailLabelOverflow]: (null == b ? void 0 : b.length) > 2 }),
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'header-secondary',
                                      children: O.intl.string(O.t.MxJI3d)
                                  }),
                                  null == _ &&
                                      (0, r.jsx)(u.vdY, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: w.editIcon
                                      })
                              ]
                          })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.FmF, {
                              size: 'custom',
                              width: 39,
                              height: 39,
                              color: 'currentColor',
                              className: w.uploadIcon
                          }),
                          (0, r.jsx)(u.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: O.intl.string(O.t.CbiofX)
                          })
                      ]
                  })
        });
    return (0, r.jsx)('div', {
        className: w.thumbnailContainer,
        style: I,
        children:
            null != _
                ? (0, r.jsx)(x.Z, {
                      actions: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.Z, {
                                  className: w.action,
                                  tooltip: O.intl.string(O.t.Y8ujqq),
                                  onClick: R,
                                  children: (0, r.jsx)(u.vdY, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              }),
                              (0, r.jsx)(f.Z, {
                                  className: w.action,
                                  tooltip: O.intl.string(O.t.vN7REx),
                                  onClick: () => m.Z.remove(a.id, _.id, g.Ie.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, r.jsx)(u.XHJ, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                          ]
                      }),
                      draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
                      id: _.id,
                      channelId: a.id,
                      handleEditModal: R,
                      keyboardModeEnabled: p,
                      size: x.q.SMALL,
                      className: w.attachmentListItem,
                      children: k
                  })
                : k
    });
};
