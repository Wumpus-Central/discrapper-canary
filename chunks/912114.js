n.d(t, {
    B: () => P,
    default: () => D
}),
    n(388685);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    c = n(481060),
    s = n(493683),
    u = n(493773),
    d = n(100527),
    p = n(906732),
    h = n(43267),
    m = n(933557),
    f = n(313201),
    _ = n(592125),
    b = n(626135),
    y = n(140106),
    v = n(981631),
    g = n(388032),
    j = n(285580);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let { channel: t, previewIcon: n, onIconChange: r, onIconRemove: i, analyticsLocations: a, petite: s = !1, className: u, allowRemovingIcon: m = !0 } = e,
        f = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, h.x)(t, 120) : null,
        { analyticsLocations: _ } = (0, p.ZP)(a, d.Z.GROUP_DM_ICON_EDITOR),
        b = s ? 32 : 64;
    return (0, l.jsxs)('div', {
        className: o()(j.iconSection, u),
        children: [
            (0, l.jsxs)(c.P3F, {
                className: o()(j.iconContainer, { [j.petite]: s }),
                'aria-label': g.intl.string(g.t['0qPSMT']),
                onClick: () => (0, y.ND)(r, _),
                children: [
                    null != f
                        ? (0, l.jsx)('img', {
                              src: f,
                              alt: '',
                              className: j.iconImage
                          })
                        : (0, l.jsx)('div', {
                              className: j.iconPlaceholder,
                              children: (0, l.jsx)(c.BFJ, {
                                  size: 'custom',
                                  width: b,
                                  height: b,
                                  color: 'currentColor'
                              })
                          }),
                    (0, l.jsx)('div', {
                        className: j.pencilIconWrapper,
                        children: (0, l.jsx)(c.vdY, {
                            color: 'currentColor',
                            size: s ? 'xs' : 'refresh_sm'
                        })
                    })
                ]
            }),
            null != f && m
                ? (0, l.jsx)(c.P3F, {
                      onClick: i,
                      'aria-label': g.intl.string(g.t['uY+Nk5']),
                      style: { cursor: 'pointer' },
                      children: (0, l.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          color: 'text-danger',
                          children: g.intl.string(g.t['uY+Nk5'])
                      })
                  })
                : null
        ]
    });
}
let D = function (e) {
    let { channelId: t, onClose: n, transitionState: i, setHasPendingChanges: o, closeOrShowDiscardChangesAlert: h, location: D } = e,
        w = (0, f.Dt)(),
        C = (0, a.e7)([_.Z], () => _.Z.getChannel(t)),
        I = null == C ? void 0 : C.name,
        k = (0, m.cO)(C),
        [N, E] = r.useState(null != I ? I : ''),
        [T, R] = r.useState(void 0),
        S = void 0 !== T,
        { analyticsLocations: Z } = (0, p.ZP)(D, d.Z.GROUP_DM_EDIT_MODAL),
        M = {
            channel_id: t,
            channel_type: null == C ? void 0 : C.type,
            location: D,
            location_stack: Z,
            old_name_set: '' !== I,
            old_icon_set: (null == C ? void 0 : C.icon) != null
        };
    return (r.useEffect(() => {
        o(N !== I || S);
    }, [N, I, S, o]),
    (0, u.ZP)(
        () => (
            b.default.track(v.rMx.GDM_EDIT_INTERACTED, O(x({}, M), { action: 'opened' })),
            () => {
                b.default.track(v.rMx.GDM_EDIT_INTERACTED, O(x({}, M), { action: 'dismissed' }));
            }
        )
    ),
    null == C)
        ? null
        : (0, l.jsx)(p.Gt, {
              value: Z,
              children: (0, l.jsx)('form', {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let l = N !== I,
                          r = void 0 !== T;
                      b.default.track(
                          v.rMx.GDM_EDIT_INTERACTED,
                          O(x({}, M), {
                              action: 'saved',
                              new_name_set: '' !== N,
                              new_icon_set: (r ? T : null == C ? void 0 : C.icon) != null,
                              name_changed: l,
                              icon_changed: r
                          })
                      ),
                          l && s.Z.setName(t, N),
                          r && s.Z.setIcon(t, T, D).catch(y.es),
                          n();
                  },
                  children: (0, l.jsxs)(c.Y0X, {
                      transitionState: i,
                      'aria-labelledby': w,
                      children: [
                          (0, l.jsxs)(c.xBx, {
                              separator: !0,
                              className: j.header,
                              children: [
                                  (0, l.jsx)(c.X6q, {
                                      id: w,
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      children: g.intl.string(g.t['5Q9+/P'])
                                  }),
                                  (0, l.jsx)(c.olH, {
                                      onClick: h,
                                      className: j.closeButtonWrapper
                                  })
                              ]
                          }),
                          (0, l.jsxs)(c.hzk, {
                              className: j.modalContent,
                              children: [
                                  (0, l.jsx)(P, {
                                      channel: C,
                                      previewIcon: T,
                                      onIconChange: (e) => R(e.imageUri),
                                      onIconRemove: () => R(null),
                                      analyticsLocations: Z
                                  }),
                                  (0, l.jsx)(c.oil, {
                                      'aria-label': g.intl.string(g.t.GEGW3N),
                                      placeholder: null != k ? k : '',
                                      value: N,
                                      onChange: E,
                                      autoFocus: !0
                                  })
                              ]
                          }),
                          (0, l.jsxs)(c.mzw, {
                              children: [
                                  (0, l.jsx)(c.zxk, {
                                      type: 'submit',
                                      disabled: N === I && !S,
                                      children: g.intl.string(g.t.R3BPHx)
                                  }),
                                  (0, l.jsx)(c.zxk, {
                                      onClick: h,
                                      look: c.zxk.Looks.LINK,
                                      color: c.zxk.Colors.PRIMARY,
                                      innerClassName: j.cancelButton,
                                      children: g.intl.string(g.t['ETE/oK'])
                                  })
                              ]
                          })
                      ]
                  })
              })
          });
};
