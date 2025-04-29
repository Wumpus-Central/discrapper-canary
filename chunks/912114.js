n.d(t, {
    B: () => O,
    default: () => E
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(493683),
    u = n(493773),
    d = n(100527),
    p = n(906732),
    h = n(43267),
    f = n(933557),
    m = n(313201),
    g = n(592125),
    b = n(626135),
    _ = n(140106),
    y = n(981631),
    C = n(388032),
    x = n(285580);
function v(e) {
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
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { channel: t, previewIcon: n, onIconChange: i, onIconRemove: l, analyticsLocations: a, petite: c = !1, className: u, allowRemovingIcon: f = !0 } = e,
        m = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, h.x)(t, 120) : null,
        { analyticsLocations: g } = (0, p.ZP)(a, d.Z.GROUP_DM_ICON_EDITOR),
        b = c ? 32 : 64;
    return (0, r.jsxs)('div', {
        className: o()(x.iconSection, u),
        children: [
            (0, r.jsxs)(s.P3F, {
                className: o()(x.iconContainer, { [x.petite]: c }),
                'aria-label': C.intl.string(C.t['0qPSMT']),
                onClick: () => (0, _.ND)(i, g),
                children: [
                    null != m
                        ? (0, r.jsx)('img', {
                              src: m,
                              alt: '',
                              className: x.iconImage
                          })
                        : (0, r.jsx)('div', {
                              className: x.iconPlaceholder,
                              children: (0, r.jsx)(s.BFJ, {
                                  size: 'custom',
                                  width: b,
                                  height: b,
                                  color: 'currentColor'
                              })
                          }),
                    (0, r.jsx)('div', {
                        className: x.pencilIconWrapper,
                        children: (0, r.jsx)(s.vdY, {
                            color: 'currentColor',
                            size: c ? 'xs' : 'refresh_sm'
                        })
                    })
                ]
            }),
            null != m && f
                ? (0, r.jsx)(s.P3F, {
                      onClick: l,
                      'aria-label': C.intl.string(C.t['uY+Nk5']),
                      style: { cursor: 'pointer' },
                      children: (0, r.jsx)(s.Text, {
                          variant: 'text-sm/medium',
                          color: 'text-danger',
                          children: C.intl.string(C.t['uY+Nk5'])
                      })
                  })
                : null
        ]
    });
}
let E = function (e) {
    let { channelId: t, onClose: n, transitionState: l, setHasPendingChanges: o, closeOrShowDiscardChangesAlert: h, location: E } = e,
        I = (0, m.Dt)(),
        S = (0, a.e7)([g.Z], () => g.Z.getChannel(t)),
        P = null == S ? void 0 : S.name,
        Z = (0, f.cO)(S),
        [N, T] = i.useState(null != P ? P : ''),
        [A, w] = i.useState(void 0),
        R = void 0 !== A,
        { analyticsLocations: k } = (0, p.ZP)(E, d.Z.GROUP_DM_EDIT_MODAL),
        M = {
            channel_id: t,
            channel_type: null == S ? void 0 : S.type,
            location: E,
            location_stack: k,
            old_name_set: '' !== P,
            old_icon_set: (null == S ? void 0 : S.icon) != null
        };
    return (i.useEffect(() => {
        o(N !== P || R);
    }, [N, P, R, o]),
    (0, u.ZP)(
        () => (
            b.default.track(y.rMx.GDM_EDIT_INTERACTED, j(v({}, M), { action: 'opened' })),
            () => {
                b.default.track(y.rMx.GDM_EDIT_INTERACTED, j(v({}, M), { action: 'dismissed' }));
            }
        )
    ),
    null == S)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: k,
              children: (0, r.jsx)('form', {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let r = N !== P,
                          i = void 0 !== A;
                      b.default.track(
                          y.rMx.GDM_EDIT_INTERACTED,
                          j(v({}, M), {
                              action: 'saved',
                              new_name_set: '' !== N,
                              new_icon_set: (i ? A : null == S ? void 0 : S.icon) != null,
                              name_changed: r,
                              icon_changed: i
                          })
                      ),
                          r && c.Z.setName(t, N),
                          i && c.Z.setIcon(t, A, E).catch(_.es),
                          n();
                  },
                  children: (0, r.jsxs)(s.Y0X, {
                      transitionState: l,
                      'aria-labelledby': I,
                      className: x.modal,
                      children: [
                          (0, r.jsxs)(s.xBx, {
                              separator: !0,
                              className: x.header,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      id: I,
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      children: C.intl.string(C.t['5Q9+/P'])
                                  }),
                                  (0, r.jsx)(s.olH, {
                                      onClick: h,
                                      className: x.closeButton
                                  })
                              ]
                          }),
                          (0, r.jsxs)(s.hzk, {
                              className: x.modalContent,
                              children: [
                                  (0, r.jsx)(O, {
                                      channel: S,
                                      previewIcon: A,
                                      onIconChange: (e) => w(e.imageUri),
                                      onIconRemove: () => w(null),
                                      analyticsLocations: k
                                  }),
                                  (0, r.jsx)(s.oil, {
                                      'aria-label': C.intl.string(C.t.GEGW3N),
                                      placeholder: null != Z ? Z : '',
                                      value: N,
                                      onChange: T,
                                      autoFocus: !0
                                  })
                              ]
                          }),
                          (0, r.jsxs)(s.mzw, {
                              className: x.footer,
                              children: [
                                  (0, r.jsx)(s.zxk, {
                                      type: 'submit',
                                      disabled: N === P && !R,
                                      children: C.intl.string(C.t.R3BPHx)
                                  }),
                                  (0, r.jsx)(s.zxk, {
                                      onClick: h,
                                      look: s.zxk.Looks.LINK,
                                      color: s.zxk.Colors.PRIMARY,
                                      innerClassName: x.cancelButton,
                                      children: C.intl.string(C.t['ETE/oK'])
                                  })
                              ]
                          })
                      ]
                  })
              })
          });
};
