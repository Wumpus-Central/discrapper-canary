n.d(t, { _: () => T }), n(566702), n(266796);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(512722),
    o = n.n(s),
    c = n(788347),
    d = n(399606),
    u = n(481060),
    m = n(166459),
    h = n(607070),
    g = n(541716),
    f = n(273031),
    p = n(859235),
    x = n(313201),
    b = n(70097),
    j = n(374794),
    v = n(470623),
    C = n(983200),
    _ = n(127654),
    y = n(124252),
    N = n(388032),
    O = n(554010);
let w = [
        {
            name: 'Media Post Thumbnail',
            extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp']
        }
    ],
    S = (0, x.hQ)();
function P(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: a } = e,
        i = (0, C.tu)({
            numAttachments: t.length,
            containerWidth: n,
            containerHeight: a
        });
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) => {
            var n;
            return (0, r.jsx)(
                'div',
                {
                    style: i[t],
                    children:
                        !0 === e.isVideo
                            ? (0, r.jsx)(b.Z, {
                                  src: e.src,
                                  className: O.thumbnail,
                                  'aria-hidden': !0
                              })
                            : (0, r.jsx)('img', {
                                  src: e.src,
                                  className: O.thumbnail,
                                  'aria-hidden': !0,
                                  alt: null != (n = null == e ? void 0 : e.alt) ? n : ''
                              })
                },
                e.src
            );
        })
    });
}
let T = (e) => {
    var t;
    let { parentChannel: i } = e,
        { textAreaState: s } = (0, v.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.X),
        x = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        b = (0, y.Z)(i, null == (t = s.textValue) ? void 0 : t.trim()),
        C = a.useMemo(() => b.find((e) => e.isThumbnail), [b]),
        T = null != b && b.length > 0,
        I = a.useMemo(() => {
            let e = (null == b ? void 0 : b.length) > 1 ? 1.15 : 1;
            return {
                width: 153 * e,
                height: 86 * e
            };
        }, [b]),
        E = a.useCallback(
            (e) => {
                null != C && m.Z.remove(i.id, C.id, g.Ie.CREATE_FORUM_POST.drafts.type),
                    (0, _.d)(e.currentTarget.files, i, g.Ie.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0
                    }),
                    (e.currentTarget.value = null);
            },
            [i, C]
        ),
        k = (e) => {
            e.stopPropagation(),
                (null == C ? void 0 : C.upload) != null &&
                    (0, u.ZDy)(async () => {
                        let e = C.upload;
                        o()(null != e, 'upload should not be null');
                        let { default: t } = await Promise.resolve().then(n.bind(n, 95152));
                        return (n) => {
                            var a, l;
                            return (0, r.jsx)(
                                t,
                                ((a = (function (e) {
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
                                        channelId: i.id,
                                        draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
                                        onSubmit: (t) => {
                                            let { name: n, description: r, spoiler: a } = t;
                                            m.Z.update(i.id, e.id, g.Ie.CREATE_FORUM_POST.drafts.type, {
                                                filename: n,
                                                description: r,
                                                spoiler: a
                                            });
                                        },
                                        disableSpoiler: !0
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                a)
                            );
                        };
                    });
        },
        R = (0, r.jsx)(j.Z, {
            color: u.Ttl.CUSTOM,
            className: O.uploadFileInputContainer,
            innerClassName: O.uploadThumbnailContainer,
            onChange: E,
            multiple: !1,
            'aria-hidden': !0,
            filters: w,
            'aria-describedby': S,
            'aria-label': T ? N.NW.string(N.t.MxJI3d) : N.NW.string(N.t.CbiofX),
            children: T
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(P, {
                              mediaAttachments: b,
                              containerWidth: I.width,
                              containerHeight: I.height
                          }),
                          (0, r.jsxs)('div', {
                              className: l()(O.changeThumbnailLabelContainer, { [O.changeThumbnailLabelOverflow]: (null == b ? void 0 : b.length) > 2 }),
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'header-secondary',
                                      children: N.NW.string(N.t.MxJI3d)
                                  }),
                                  null == C &&
                                      (0, r.jsx)(u.vdY, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: O.editIcon
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
                              className: O.uploadIcon
                          }),
                          (0, r.jsx)(u.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: N.NW.string(N.t.CbiofX)
                          })
                      ]
                  })
        });
    return (0, r.jsx)('div', {
        className: O.thumbnailContainer,
        style: I,
        children:
            null != C
                ? (0, r.jsx)(p.Z, {
                      actions: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.Z, {
                                  className: O.action,
                                  tooltip: N.NW.string(N.t.Y8ujqq),
                                  onClick: k,
                                  children: (0, r.jsx)(u.vdY, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              }),
                              (0, r.jsx)(f.Z, {
                                  className: O.action,
                                  tooltip: N.NW.string(N.t.vN7REx),
                                  onClick: () => m.Z.remove(i.id, C.id, g.Ie.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, r.jsx)(u.XHJ, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                          ]
                      }),
                      draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
                      id: C.id,
                      channelId: i.id,
                      handleEditModal: k,
                      keyboardModeEnabled: x,
                      size: p.q.SMALL,
                      className: O.attachmentListItem,
                      children: R
                  })
                : R
    });
};
