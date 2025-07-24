(n.d(t, {
    B: () => O,
    default: () => E
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
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
    let { channel: t, previewIcon: n, onIconChange: i, onIconRemove: l, analyticsLocations: o, petite: c = !1, className: u, allowRemovingIcon: f = !0 } = e,
        m = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, h.x)(t, 120) : null,
        { analyticsLocations: g } = (0, p.ZP)(o, d.Z.GROUP_DM_ICON_EDITOR),
        b = c ? 32 : 64;
    return (0, r.jsxs)('div', {
        className: a()(x.iconSection, u),
        children: [
            (0, r.jsxs)(s.P3F, {
                className: a()(x.iconContainer, { [x.petite]: c }),
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
                ? (0, r.jsx)(s.Avr, {
                      variant: 'critical',
                      onClick: l,
                      'aria-label': C.intl.string(C.t['uY+Nk5']),
                      text: C.intl.string(C.t['uY+Nk5']),
                      textVariant: 'text-sm/medium',
                      size: 'sm'
                  })
                : null
        ]
    });
}
let E = function (e) {
    let { channelId: t, onClose: n, transitionState: l, setHasPendingChanges: a, closeOrShowDiscardChangesAlert: h, location: E } = e,
        S = (0, m.Dt)(),
        P = (0, o.e7)([g.Z], () => g.Z.getChannel(t)),
        I = null == P ? void 0 : P.name,
        Z = (0, f.cO)(P),
        [T, N] = i.useState(null != I ? I : ''),
        [A, w] = i.useState(void 0),
        R = void 0 !== A,
        { analyticsLocations: M } = (0, p.ZP)(E, d.Z.GROUP_DM_EDIT_MODAL),
        D = {
            channel_id: t,
            channel_type: null == P ? void 0 : P.type,
            location: E,
            location_stack: M,
            old_name_set: '' !== I,
            old_icon_set: (null == P ? void 0 : P.icon) != null
        };
    return (i.useEffect(() => {
        a(T !== I || R);
    }, [T, I, R, a]),
    (0, u.ZP)(
        () => (
            b.default.track(y.rMx.GDM_EDIT_INTERACTED, j(v({}, D), { action: 'opened' })),
            () => {
                b.default.track(y.rMx.GDM_EDIT_INTERACTED, j(v({}, D), { action: 'dismissed' }));
            }
        )
    ),
    null == P)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: M,
              children: (0, r.jsx)('form', {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let r = T !== I,
                          i = void 0 !== A;
                      if (
                          (b.default.track(
                              y.rMx.GDM_EDIT_INTERACTED,
                              j(v({}, D), {
                                  action: 'saved',
                                  new_name_set: '' !== T,
                                  new_icon_set: (i ? A : null == P ? void 0 : P.icon) != null,
                                  name_changed: r,
                                  icon_changed: i
                              })
                          ),
                          r || i)
                      ) {
                          let e = {};
                          (r && (e.name = T), i && (e.icon = A), c.Z.updateChannel(t, e, E).catch(_.g6));
                      }
                      n();
                  },
                  children: (0, r.jsxs)(s.Y0X, {
                      transitionState: l,
                      'aria-labelledby': S,
                      className: x.modal,
                      parentComponent: 'GdmEditModal',
                      children: [
                          (0, r.jsxs)(s.xBx, {
                              separator: !0,
                              className: x.header,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      id: S,
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
                                      channel: P,
                                      previewIcon: A,
                                      onIconChange: (e) => w(e.imageUri),
                                      onIconRemove: () => w(null),
                                      analyticsLocations: M
                                  }),
                                  (0, r.jsx)(s.oil, {
                                      'aria-label': C.intl.string(C.t.GEGW3N),
                                      placeholder: null != Z ? Z : '',
                                      value: T,
                                      onChange: N,
                                      autoFocus: !0
                                  })
                              ]
                          }),
                          (0, r.jsx)(s.mzw, {
                              className: x.footer,
                              children: (0, r.jsxs)(s.hE2, {
                                  fullWidth: !0,
                                  children: [
                                      (0, r.jsx)(s.zxk, {
                                          variant: 'secondary',
                                          onClick: h,
                                          text: C.intl.string(C.t['ETE/oK'])
                                      }),
                                      (0, r.jsx)(s.zxk, {
                                          variant: 'primary',
                                          text: C.intl.string(C.t.R3BPHx),
                                          type: 'submit',
                                          disabled: T === I && !R
                                      })
                                  ]
                              })
                          })
                      ]
                  })
              })
          });
};
