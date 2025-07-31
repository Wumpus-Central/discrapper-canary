(n.d(t, { _: () => I }), n(781311), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(94171),
    d = n(399606),
    u = n(755721),
    m = n(481060),
    h = n(166459),
    g = n(607070),
    f = n(541716),
    x = n(273031),
    p = n(859235),
    b = n(313201),
    j = n(70097),
    v = n(374794),
    _ = n(470623),
    C = n(983200),
    y = n(127654),
    w = n(124252),
    T = n(388032),
    O = n(554010);
let S = [
        {
            name: 'Media Post Thumbnail',
            extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp']
        }
    ],
    N = (0, b.hQ)();
function P(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: i } = e,
        a = (0, C.tu)({
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
                            ? (0, r.jsx)(j.Z, {
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
let I = (e) => {
    var t;
    let { parentChannel: a } = e,
        { textAreaState: s } = (0, _.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.X),
        b = (0, d.e7)([g.Z], () => g.Z.keyboardModeEnabled),
        j = (0, w.Z)(a, null == (t = s.textValue) ? void 0 : t.trim()),
        C = i.useMemo(() => j.find((e) => e.isThumbnail), [j]),
        I = null != j && j.length > 0,
        E = i.useMemo(() => {
            let e = (null == j ? void 0 : j.length) > 1 ? 1.15 : 1;
            return {
                width: 153 * e,
                height: 86 * e
            };
        }, [j]),
        R = i.useCallback(
            (e) => {
                (null != C && h.Z.remove(a.id, C.id, f.Ie.CREATE_FORUM_POST.drafts.type),
                    (0, y.d)(e.currentTarget.files, a, f.Ie.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0
                    }),
                    (e.currentTarget.value = null));
            },
            [a, C]
        ),
        M = (e) => {
            (e.stopPropagation(),
                (null == C ? void 0 : C.upload) != null &&
                    (0, m.ZDy)(async () => {
                        let e = C.upload;
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
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                ((r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r));
                                            }));
                                    }
                                    return e;
                                })({}, n)),
                                (l = l =
                                    {
                                        upload: e,
                                        channelId: a.id,
                                        draftType: f.Ie.CREATE_FORUM_POST.drafts.type,
                                        onSubmit: (t) => {
                                            let { name: n, description: r, spoiler: i } = t;
                                            h.Z.update(a.id, e.id, f.Ie.CREATE_FORUM_POST.drafts.type, {
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
                    }));
        },
        Z = (0, r.jsx)(v.Z, {
            color: u.Tt.CUSTOM,
            className: O.uploadFileInputContainer,
            innerClassName: O.uploadThumbnailContainer,
            onChange: R,
            multiple: !1,
            'aria-hidden': !0,
            filters: S,
            'aria-describedby': N,
            'aria-label': I ? T.intl.string(T.t.MxJI3d) : T.intl.string(T.t.CbiofX),
            children: I
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(P, {
                              mediaAttachments: j,
                              containerWidth: E.width,
                              containerHeight: E.height
                          }),
                          (0, r.jsxs)('div', {
                              className: l()(O.changeThumbnailLabelContainer, { [O.changeThumbnailLabelOverflow]: (null == j ? void 0 : j.length) > 2 }),
                              children: [
                                  (0, r.jsx)(m.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'header-secondary',
                                      children: T.intl.string(T.t.MxJI3d)
                                  }),
                                  null == C &&
                                      (0, r.jsx)(m.vdY, {
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
                          (0, r.jsx)(m.FmF, {
                              size: 'custom',
                              width: 39,
                              height: 39,
                              color: 'currentColor',
                              className: O.uploadIcon
                          }),
                          (0, r.jsx)(m.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: T.intl.string(T.t.CbiofX)
                          })
                      ]
                  })
        });
    return (0, r.jsx)('div', {
        className: O.thumbnailContainer,
        style: E,
        children:
            null != C
                ? (0, r.jsx)(p.Z, {
                      actions: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(x.Z, {
                                  className: O.action,
                                  tooltip: T.intl.string(T.t.Y8ujqq),
                                  onClick: M,
                                  children: (0, r.jsx)(m.vdY, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              }),
                              (0, r.jsx)(x.Z, {
                                  className: O.action,
                                  tooltip: T.intl.string(T.t.vN7REx),
                                  onClick: () => h.Z.remove(a.id, C.id, f.Ie.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, r.jsx)(m.XHJ, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                          ]
                      }),
                      draftType: f.Ie.CREATE_FORUM_POST.drafts.type,
                      id: C.id,
                      channelId: a.id,
                      handleEditModal: M,
                      keyboardModeEnabled: b,
                      size: p.q.SMALL,
                      className: O.attachmentListItem,
                      children: Z
                  })
                : Z
    });
};
