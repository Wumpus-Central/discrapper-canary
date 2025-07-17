(n.d(t, {
    B: () => E,
    default: () => S
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(493683),
    d = n(493773),
    p = n(100527),
    h = n(906732),
    f = n(43267),
    m = n(933557),
    g = n(313201),
    b = n(592125),
    _ = n(626135),
    y = n(140106),
    C = n(981631),
    x = n(388032),
    v = n(285580);
function O(e) {
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
function E(e) {
    let { channel: t, previewIcon: n, onIconChange: i, onIconRemove: l, analyticsLocations: o, petite: s = !1, className: u, allowRemovingIcon: d = !0 } = e,
        m = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, f.x)(t, 120) : null,
        { analyticsLocations: g } = (0, h.ZP)(o, p.Z.GROUP_DM_ICON_EDITOR),
        b = s ? 32 : 64;
    return (0, r.jsxs)('div', {
        className: a()(v.iconSection, u),
        children: [
            (0, r.jsxs)(c.P3F, {
                className: a()(v.iconContainer, { [v.petite]: s }),
                'aria-label': x.intl.string(x.t['0qPSMT']),
                onClick: () => (0, y.ND)(i, g),
                children: [
                    null != m
                        ? (0, r.jsx)('img', {
                              src: m,
                              alt: '',
                              className: v.iconImage
                          })
                        : (0, r.jsx)('div', {
                              className: v.iconPlaceholder,
                              children: (0, r.jsx)(c.BFJ, {
                                  size: 'custom',
                                  width: b,
                                  height: b,
                                  color: 'currentColor'
                              })
                          }),
                    (0, r.jsx)('div', {
                        className: v.pencilIconWrapper,
                        children: (0, r.jsx)(c.vdY, {
                            color: 'currentColor',
                            size: s ? 'xs' : 'refresh_sm'
                        })
                    })
                ]
            }),
            null != m && d
                ? (0, r.jsx)(c.P3F, {
                      onClick: l,
                      'aria-label': x.intl.string(x.t['uY+Nk5']),
                      style: { cursor: 'pointer' },
                      children: (0, r.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          color: 'text-danger',
                          children: x.intl.string(x.t['uY+Nk5'])
                      })
                  })
                : null
        ]
    });
}
let S = function (e) {
    let { channelId: t, onClose: n, transitionState: l, setHasPendingChanges: a, closeOrShowDiscardChangesAlert: f, location: S } = e,
        P = (0, g.Dt)(),
        I = (0, o.e7)([b.Z], () => b.Z.getChannel(t)),
        Z = null == I ? void 0 : I.name,
        T = (0, m.cO)(I),
        [N, A] = i.useState(null != Z ? Z : ''),
        [w, R] = i.useState(void 0),
        M = void 0 !== w,
        { analyticsLocations: D } = (0, h.ZP)(S, p.Z.GROUP_DM_EDIT_MODAL),
        L = {
            channel_id: t,
            channel_type: null == I ? void 0 : I.type,
            location: S,
            location_stack: D,
            old_name_set: '' !== Z,
            old_icon_set: (null == I ? void 0 : I.icon) != null
        };
    return (i.useEffect(() => {
        a(N !== Z || M);
    }, [N, Z, M, a]),
    (0, d.ZP)(
        () => (
            _.default.track(C.rMx.GDM_EDIT_INTERACTED, j(O({}, L), { action: 'opened' })),
            () => {
                _.default.track(C.rMx.GDM_EDIT_INTERACTED, j(O({}, L), { action: 'dismissed' }));
            }
        )
    ),
    null == I)
        ? null
        : (0, r.jsx)(h.Gt, {
              value: D,
              children: (0, r.jsx)('form', {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let r = N !== Z,
                          i = void 0 !== w;
                      if (
                          (_.default.track(
                              C.rMx.GDM_EDIT_INTERACTED,
                              j(O({}, L), {
                                  action: 'saved',
                                  new_name_set: '' !== N,
                                  new_icon_set: (i ? w : null == I ? void 0 : I.icon) != null,
                                  name_changed: r,
                                  icon_changed: i
                              })
                          ),
                          r || i)
                      ) {
                          let e = {};
                          (r && (e.name = N), i && (e.icon = w), u.Z.updateChannel(t, e, S).catch(y.g6));
                      }
                      n();
                  },
                  children: (0, r.jsxs)(c.Y0X, {
                      transitionState: l,
                      'aria-labelledby': P,
                      className: v.modal,
                      parentComponent: 'GdmEditModal',
                      children: [
                          (0, r.jsxs)(c.xBx, {
                              separator: !0,
                              className: v.header,
                              children: [
                                  (0, r.jsx)(c.X6q, {
                                      id: P,
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      children: x.intl.string(x.t['5Q9+/P'])
                                  }),
                                  (0, r.jsx)(c.olH, {
                                      onClick: f,
                                      className: v.closeButton
                                  })
                              ]
                          }),
                          (0, r.jsxs)(c.hzk, {
                              className: v.modalContent,
                              children: [
                                  (0, r.jsx)(E, {
                                      channel: I,
                                      previewIcon: w,
                                      onIconChange: (e) => R(e.imageUri),
                                      onIconRemove: () => R(null),
                                      analyticsLocations: D
                                  }),
                                  (0, r.jsx)(c.oil, {
                                      'aria-label': x.intl.string(x.t.GEGW3N),
                                      placeholder: null != T ? T : '',
                                      value: N,
                                      onChange: A,
                                      autoFocus: !0
                                  })
                              ]
                          }),
                          (0, r.jsxs)(c.mzw, {
                              className: v.footer,
                              children: [
                                  (0, r.jsx)(c.zxk, {
                                      variant: 'primary',
                                      text: x.intl.string(x.t.R3BPHx),
                                      type: 'submit',
                                      disabled: N === Z && !M
                                  }),
                                  (0, r.jsx)(s.zx, {
                                      onClick: f,
                                      look: s.zx.Looks.LINK,
                                      color: s.zx.Colors.PRIMARY,
                                      innerClassName: v.cancelButton,
                                      children: x.intl.string(x.t['ETE/oK'])
                                  })
                              ]
                          })
                      ]
                  })
              })
          });
};
