n.d(t, { default: () => O }), n(388685);
var r = n(200651),
    l = n(192379),
    o = n(442837),
    a = n(481060),
    i = n(493683),
    c = n(493773),
    s = n(100527),
    u = n(906732),
    d = n(43267),
    p = n(933557),
    h = n(313201),
    m = n(592125),
    f = n(626135),
    _ = n(140106),
    b = n(981631),
    y = n(388032),
    v = n(168949);
function g(e) {
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
function x(e) {
    let { channel: t, previewIcon: n, onIconChange: l, onIconRemove: o, analyticsLocations: i } = e,
        c = void 0 !== n ? n : null != t.icon ? (0, d.x)(t, 120) : null,
        { analyticsLocations: p } = (0, u.ZP)(i, s.Z.GROUP_DM_ICON_EDITOR);
    return (0, r.jsxs)('div', {
        className: v.iconSection,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: v.iconContainer,
                'aria-label': y.NW.string(y.t['0qPSMT']),
                onClick: () => (0, _.ND)(l, p),
                children: [
                    null != c
                        ? (0, r.jsx)('img', {
                              src: c,
                              alt: '',
                              className: v.iconImage
                          })
                        : (0, r.jsx)('div', {
                              className: v.iconPlaceholder,
                              children: (0, r.jsx)(a.BFJ, {
                                  size: 'custom',
                                  width: 64,
                                  height: 64,
                                  color: 'currentColor'
                              })
                          }),
                    (0, r.jsx)('div', {
                        className: v.pencilIconWrapper,
                        children: (0, r.jsx)(a.vdY, {
                            color: 'currentColor',
                            size: 'refresh_sm'
                        })
                    })
                ]
            }),
            null != c
                ? (0, r.jsx)(a.P3F, {
                      onClick: o,
                      'aria-label': y.NW.string(y.t['uY+Nk5']),
                      style: { cursor: 'pointer' },
                      children: (0, r.jsx)(a.Text, {
                          variant: 'text-sm/medium',
                          color: 'text-danger',
                          children: y.NW.string(y.t['uY+Nk5'])
                      })
                  })
                : null
        ]
    });
}
let O = function (e) {
    let { channelId: t, onClose: n, transitionState: d, setHasPendingChanges: O, closeOrShowDiscardChangesAlert: N, location: P } = e,
        D = (0, h.Dt)(),
        w = (0, o.e7)([m.Z], () => m.Z.getChannel(t)),
        C = null == w ? void 0 : w.name,
        I = (0, p.cO)(w),
        [k, W] = l.useState(null != C ? C : ''),
        [E, T] = l.useState(void 0),
        R = void 0 !== E,
        { analyticsLocations: S } = (0, u.ZP)(P, s.Z.GROUP_DM_EDIT_MODAL),
        Z = {
            channel_id: t,
            channel_type: null == w ? void 0 : w.type,
            location: P,
            location_stack: S,
            old_name_set: '' !== C,
            old_icon_set: (null == w ? void 0 : w.icon) != null
        };
    return (l.useEffect(() => {
        O(k !== C || R);
    }, [k, C, R, O]),
    (0, c.ZP)(
        () => (
            f.default.track(b.rMx.GDM_EDIT_INTERACTED, j(g({}, Z), { action: 'opened' })),
            () => {
                f.default.track(b.rMx.GDM_EDIT_INTERACTED, j(g({}, Z), { action: 'dismissed' }));
            }
        )
    ),
    null == w)
        ? null
        : (0, r.jsx)(u.Gt, {
              value: S,
              children: (0, r.jsx)('form', {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let r = k !== C,
                          l = void 0 !== E;
                      f.default.track(
                          b.rMx.GDM_EDIT_INTERACTED,
                          j(g({}, Z), {
                              action: 'saved',
                              new_name_set: '' !== k,
                              new_icon_set: (l ? E : null == w ? void 0 : w.icon) != null,
                              name_changed: r,
                              icon_changed: l
                          })
                      ),
                          r && i.Z.setName(t, k),
                          l && i.Z.setIcon(t, E, P).catch(_.es),
                          n();
                  },
                  children: (0, r.jsxs)(a.Y0X, {
                      transitionState: d,
                      'aria-labelledby': D,
                      children: [
                          (0, r.jsxs)(a.xBx, {
                              separator: !0,
                              className: v.header,
                              children: [
                                  (0, r.jsx)(a.X6q, {
                                      id: D,
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      children: y.NW.string(y.t['5Q9+/P'])
                                  }),
                                  (0, r.jsx)(a.olH, {
                                      onClick: N,
                                      className: v.closeButtonWrapper
                                  })
                              ]
                          }),
                          (0, r.jsxs)(a.hzk, {
                              className: v.modalContent,
                              children: [
                                  (0, r.jsx)(x, {
                                      channel: w,
                                      previewIcon: E,
                                      onIconChange: (e) => T(e.imageUri),
                                      onIconRemove: () => T(null),
                                      analyticsLocations: S
                                  }),
                                  (0, r.jsx)(a.oil, {
                                      'aria-label': y.NW.string(y.t.GEGW3N),
                                      placeholder: null != I ? I : '',
                                      value: k,
                                      onChange: W,
                                      autoFocus: !0
                                  })
                              ]
                          }),
                          (0, r.jsxs)(a.mzw, {
                              children: [
                                  (0, r.jsx)(a.zxk, {
                                      type: 'submit',
                                      disabled: k === C && !R,
                                      children: y.NW.string(y.t.R3BPHx)
                                  }),
                                  (0, r.jsx)(a.zxk, {
                                      onClick: N,
                                      look: a.zxk.Looks.LINK,
                                      color: a.zxk.Colors.PRIMARY,
                                      innerClassName: v.cancelButton,
                                      children: y.NW.string(y.t['ETE/oK'])
                                  })
                              ]
                          })
                      ]
                  })
              })
          });
};
