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
    s = n(82659),
    c = n(481060),
    u = n(493683),
    d = n(493773),
    p = n(100527),
    h = n(906732),
    f = n(43267),
    m = n(933557),
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
    let { channel: t, previewIcon: n, onIconChange: i, onIconRemove: l, analyticsLocations: o, petite: s = !1, className: u, allowRemovingIcon: d = !0 } = e,
        m = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, f.x)(t, 120) : null,
        { analyticsLocations: g } = (0, h.ZP)(o, p.Z.GROUP_DM_ICON_EDITOR),
        b = s ? 32 : 64;
    return (0, r.jsxs)('div', {
        className: a()(x.iconSection, u),
        children: [
            (0, r.jsxs)(c.P3F, {
                className: a()(x.iconContainer, { [x.petite]: s }),
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
                              children: (0, r.jsx)(c.BFJ, {
                                  size: 'custom',
                                  width: b,
                                  height: b,
                                  color: 'currentColor'
                              })
                          }),
                    (0, r.jsx)('div', {
                        className: x.pencilIconWrapper,
                        children: (0, r.jsx)(c.vdY, {
                            color: 'currentColor',
                            size: s ? 'xs' : 'refresh_sm'
                        })
                    })
                ]
            }),
            null != m && d
                ? (0, r.jsx)(c.Avr, {
                      variant: 'critical',
                      onClick: l,
                      'aria-label': C.intl.string(C.t['uY+Nk5']),
                      text: C.intl.string(C.t['uY+Nk5']),
                      textVariant: 'text-sm/medium',
                      size: 'sm',
                      role: 'button',
                      type: 'button'
                  })
                : null
        ]
    });
}
let E = function (e) {
    let { channelId: t, onClose: n, transitionState: l, setHasPendingChanges: a, closeOrShowDiscardChangesAlert: f, location: E } = e,
        S = (0, o.e7)([g.Z], () => g.Z.getChannel(t)),
        P = null == S ? void 0 : S.name,
        I = (0, m.cO)(S),
        [Z, T] = i.useState(null != P ? P : ''),
        [N, A] = i.useState(void 0),
        w = void 0 !== N,
        { analyticsLocations: R } = (0, h.ZP)(E, p.Z.GROUP_DM_EDIT_MODAL),
        M = {
            channel_id: t,
            channel_type: null == S ? void 0 : S.type,
            location: E,
            location_stack: R,
            old_name_set: '' !== P,
            old_icon_set: (null == S ? void 0 : S.icon) != null
        };
    return (i.useEffect(() => {
        a(Z !== P || w);
    }, [Z, P, w, a]),
    (0, d.ZP)(
        () => (
            b.default.track(y.rMx.GDM_EDIT_INTERACTED, j(v({}, M), { action: 'opened' })),
            () => {
                b.default.track(y.rMx.GDM_EDIT_INTERACTED, j(v({}, M), { action: 'dismissed' }));
            }
        )
    ),
    null == S)
        ? null
        : (0, r.jsx)(h.Gt, {
              value: R,
              children: (0, r.jsx)('form', {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let r = Z !== P,
                          i = void 0 !== N;
                      if (
                          (b.default.track(
                              y.rMx.GDM_EDIT_INTERACTED,
                              j(v({}, M), {
                                  action: 'saved',
                                  new_name_set: '' !== Z,
                                  new_icon_set: (i ? N : null == S ? void 0 : S.icon) != null,
                                  name_changed: r,
                                  icon_changed: i
                              })
                          ),
                          r || i)
                      ) {
                          let e = {};
                          (r && (e.name = Z), i && (e.icon = N), u.Z.updateChannel(t, e, E).catch(_.g6));
                      }
                      n();
                  },
                  children: (0, r.jsx)(s.Modal, {
                      title: C.intl.string(C.t['5Q9+/P']),
                      actions: [
                          {
                              text: C.intl.string(C.t['ETE/oK']),
                              variant: 'secondary',
                              onClick: f
                          },
                          {
                              text: C.intl.string(C.t.R3BPHx),
                              variant: 'primary',
                              type: 'submit',
                              disabled: Z === P && !w
                          }
                      ],
                      onClose: () => Promise.resolve(f()),
                      transitionState: l,
                      children: (0, r.jsxs)('div', {
                          className: x.modalContent,
                          children: [
                              (0, r.jsx)(O, {
                                  channel: S,
                                  previewIcon: N,
                                  onIconChange: (e) => A(e.imageUri),
                                  onIconRemove: () => A(null),
                                  analyticsLocations: R
                              }),
                              (0, r.jsx)(c.oil, {
                                  'aria-label': C.intl.string(C.t.GEGW3N),
                                  placeholder: null != I ? I : '',
                                  value: Z,
                                  onChange: T,
                                  autoFocus: !0
                              })
                          ]
                      })
                  })
              })
          });
};
