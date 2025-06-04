n.d(t, { Z: () => S }), n(388685), n(704826), n(35282), n(539854), n(49124), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(979554),
    o = n(442837),
    c = n(481060),
    d = n(23645),
    u = n(53281),
    m = n(678135),
    g = n(594174),
    p = n(373071),
    h = n(489495),
    f = n(189),
    b = n(662583),
    _ = n(346537),
    x = n(830318);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = {
        [h.cq.THUMBNAIL]: null,
        [h.cq.STATIC]: null,
        [h.cq.REDUCED_MOTION]: null
    },
    O = 'debug',
    S = (e) => {
        let { effect: t, back: n, skipStore: s = !1 } = e,
            { upsertConfig: S } = (0, p.n6)(),
            v = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
            [T, I] = r.useState(!0),
            N = r.useRef(null),
            [y, A] = r.useState(!1),
            [P, R] = r.useState(!1),
            [D, Z] = r.useState([]),
            [w, k] = r.useState(j),
            L = r.useRef([]),
            [B, M] = r.useState(t.name),
            U = B.toLowerCase().replace(/\s+/g, '_'),
            V = r.useMemo(
                () => ({
                    type: a.Z.PROFILE_EFFECT,
                    id: O,
                    skuId: O,
                    title: O,
                    description: O,
                    accessibilityLabel: O,
                    reducedMotionSrc: '',
                    effects: D,
                    animationType: 0
                }),
                [D]
            ),
            G = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            F = (e, t) => {
                let n = G(t);
                null != n &&
                    (0, h.i0)(n, (t) => {
                        k((i) => C(E({}, i), { [e]: (0, h.z)(t, n) }));
                    });
            },
            H = (e, t) => {
                let n = G(e);
                null != n &&
                    (0, h.i0)(n, (e) => {
                        Z((i) => {
                            let r = [...i],
                                s = i[t];
                            if (null == s) return i;
                            let l = E({}, s);
                            return (
                                null == l.randomizedSources && (l.randomizedSources = []),
                                l.randomizedSources.push({
                                    src: e,
                                    filename: n.name
                                }),
                                (r[t] = l),
                                r
                            );
                        });
                    });
            },
            z = (e) => {
                k((t) => C(E({}, t), { [e]: null }));
            };
        r.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 &&
                Z(
                    [...e].map((e) => {
                        if (null != e.base64) {
                            let t = (0, h.$j)(e.base64);
                            (e.src = t), L.current.push(t);
                        }
                        return e;
                    })
                );
        }, [t.config.effects]),
            r.useEffect(() => {
                let e = t.config.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, n] = e;
                        if (null != n) {
                            let e = (0, h.$j)(n.base64);
                            (n.src = e), L.current.push(e), k((e) => C(E({}, e), { [t]: n }));
                        }
                    });
            }, [t.config.stillFrames]);
        let Y = {
                effect: t,
                upsertConfig: S
            },
            W = r.useRef(Y);
        return (r.useEffect(() => {
            W.current = Y;
        }),
        r.useEffect(() => {
            if (s) return;
            let { effect: e, upsertConfig: t } = W.current;
            t({
                id: e.id,
                name: B,
                config: {
                    effects: D,
                    stillFrames: w
                }
            });
        }, [s, D, w, B]),
        r.useEffect(
            () => () => {
                L.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (L.current = []);
            },
            []
        ),
        null == v)
            ? (0, i.jsx)('div', {})
            : (0, i.jsxs)('div', {
                  className: b.root,
                  children: [
                      (0, i.jsx)('div', {
                          className: b.row,
                          children: (0, i.jsx)(c.zxk, {
                              onClick: n,
                              children: 'Back'
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: b.grid,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: l()(b.col, b.preview),
                                  children: [
                                      (0, i.jsx)('img', {
                                          src: y ? _ : x,
                                          alt: '',
                                          width: 450
                                      }),
                                      T && (0, i.jsx)(f.Z, { config: V })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: b.col,
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: l()(b.col, b.section),
                                          children: [
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  children: 'Profile Effect Name'
                                              }),
                                              (0, i.jsx)('input', {
                                                  type: 'text',
                                                  value: B,
                                                  className: b.input,
                                                  onChange: (e) => {
                                                      M(e.target.value);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: b.grid,
                                          children: [
                                              (0, i.jsxs)('div', {
                                                  className: b.row,
                                                  children: [
                                                      (0, i.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          children: 'Dark Theme'
                                                      }),
                                                      (0, i.jsx)('input', {
                                                          type: 'checkbox',
                                                          checked: y,
                                                          className: b.checkBox,
                                                          onChange: () => {
                                                              A(!y);
                                                          }
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsxs)('div', {
                                                  className: b.row,
                                                  children: [
                                                      (0, i.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          children: 'Show User Profile'
                                                      }),
                                                      (0, i.jsx)('input', {
                                                          type: 'checkbox',
                                                          checked: P,
                                                          className: b.checkBox,
                                                          onChange: () => {
                                                              R(!P);
                                                          }
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: b.row,
                                          children: [
                                              (0, i.jsxs)(c.zxk, {
                                                  color: c.Ttl.GREEN,
                                                  children: [
                                                      'Upload Animated Layer',
                                                      (0, i.jsx)(u.Z, {
                                                          ref: N,
                                                          onChange: (e) => {
                                                              let t = G(e);
                                                              null != t &&
                                                                  (0, h.i0)(t, async (e) => {
                                                                      let n = await (0, h.Xv)(e, t, D.length);
                                                                      Z((e) => [...e, n]);
                                                                  });
                                                          },
                                                          multiple: !1
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-sm/semibold',
                                                  children: 'Make sure to upload the bottommost layer first!'
                                              })
                                          ]
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: b.row,
                                          children: [
                                              (0, i.jsxs)(c.zxk, {
                                                  color: c.Ttl.GREEN,
                                                  children: [
                                                      'Upload thumbnail.png',
                                                      (0, i.jsx)(u.Z, {
                                                          ref: N,
                                                          onChange: (e) => F(h.cq.THUMBNAIL, e),
                                                          multiple: !1
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsxs)(c.zxk, {
                                                  color: c.Ttl.GREEN,
                                                  children: [
                                                      'Upload static.png',
                                                      (0, i.jsx)(u.Z, {
                                                          ref: N,
                                                          onChange: (e) => F(h.cq.STATIC, e),
                                                          multiple: !1
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsxs)(c.zxk, {
                                                  color: c.Ttl.GREEN,
                                                  children: [
                                                      'Upload reduced_motion.png',
                                                      (0, i.jsx)(u.Z, {
                                                          ref: N,
                                                          onChange: (e) => F(h.cq.REDUCED_MOTION, e),
                                                          multiple: !1
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, i.jsx)('div', {
                                          className: b.bottomControls,
                                          children: (0, i.jsx)('div', {
                                              className: b.row,
                                              children: (0, i.jsx)(c.zxk, {
                                                  color: c.Ttl.BRAND,
                                                  onClick: () => {
                                                      I(!1), setTimeout(() => I(!0), 100);
                                                  },
                                                  children: 'Replay Animation'
                                              })
                                          })
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: l()(b.bottomControls, b.shareSection),
                                          children: [
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-sm/semibold',
                                                  children: 'Please download both configs for the drop package!'
                                              }),
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-sm/bold',
                                                  color: 'text-danger',
                                                  children: 'WARNING: The full config is really big :0'
                                              }),
                                              (0, i.jsxs)('div', {
                                                  className: b.row,
                                                  children: [
                                                      (0, i.jsx)(d.Z, {
                                                          fileContents: () => (0, h.yR)(D),
                                                          contentType: 'text/plain',
                                                          fileName: ''.concat(U, '_timing_config.txt'),
                                                          children: (0, i.jsx)(c.zxk, {
                                                              size: c.PhG.SMALL,
                                                              color: c.Ttl.BRAND,
                                                              children: 'Download Timing Config'
                                                          })
                                                      }),
                                                      (0, i.jsx)(d.Z, {
                                                          fileContents: () =>
                                                              JSON.stringify(
                                                                  C(E({}, t), {
                                                                      name: B,
                                                                      config: C(E({}, t.config), {
                                                                          effects: D,
                                                                          stillFrames: w
                                                                      })
                                                                  })
                                                              ),
                                                          contentType: 'text/plain',
                                                          fileName: ''.concat(U, '_config.txt'),
                                                          children: (0, i.jsx)(c.zxk, {
                                                              size: c.PhG.SMALL,
                                                              color: c.Ttl.BRAND,
                                                              children: 'Download Full Config'
                                                          })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: b.section,
                                          children: [
                                              (0, i.jsx)(c.X6q, {
                                                  variant: 'heading-lg/bold',
                                                  children: 'Still Frames'
                                              }),
                                              (0, i.jsx)('div', {
                                                  className: b.stillFramesContainer,
                                                  children: Object.entries(w).map((e) => {
                                                      let [t, n] = e;
                                                      return (0, i.jsxs)(
                                                          'div',
                                                          {
                                                              className: b.stillFramePreviewContainer,
                                                              children: [
                                                                  (0, i.jsx)(c.X6q, {
                                                                      variant: 'heading-sm/bold',
                                                                      children: t
                                                                  }),
                                                                  (0, i.jsx)('img', {
                                                                      src: null == n ? void 0 : n.src,
                                                                      className: b.stillFramePreview,
                                                                      alt: ''
                                                                  }),
                                                                  null != n &&
                                                                      (0, i.jsx)(c.zxk, {
                                                                          size: c.PhG.TINY,
                                                                          color: c.Ttl.RED,
                                                                          look: c.iLD.OUTLINED,
                                                                          onClick: () => z(t),
                                                                          children: 'Clear'
                                                                      })
                                                              ]
                                                          },
                                                          t
                                                      );
                                                  })
                                              })
                                          ]
                                      }),
                                      D.some((e) => {
                                          var t;
                                          return (null != (t = e.randomizedSources) ? t : []).length > 0;
                                      }) &&
                                          (0, i.jsxs)('div', {
                                              className: l()(b.section, b.randomizedRules),
                                              children: [
                                                  (0, i.jsx)(c.Text, {
                                                      variant: 'text-md/bold',
                                                      children: 'Rules of Randomized Effects'
                                                  }),
                                                  (0, i.jsxs)('ol', {
                                                      children: [(0, i.jsx)('li', { children: 'When an effect has randomization, all layers with random options must have the same number of options.' }), (0, i.jsx)('li', { children: 'The duration for the random options of a layer must be the same' }), (0, i.jsx)('li', { children: 'If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)' }), (0, i.jsx)('li', { children: 'Click "Replay Animation" to "reroll" the randomization' })]
                                                  })
                                              ]
                                          }),
                                      (0, i.jsx)('div', {
                                          children:
                                              P &&
                                              (0, i.jsxs)('div', {
                                                  className: l()(b.userProfilePreview, b.preview),
                                                  children: [
                                                      (0, i.jsx)(m.Z, {
                                                          user: v,
                                                          pendingAvatar: void 0,
                                                          pendingProfileEffectId: null,
                                                          canUsePremiumCustomization: !0,
                                                          isTryItOutFlow: !0
                                                      }),
                                                      (0, i.jsx)(f.Z, { config: V })
                                                  ]
                                              })
                                      })
                                  ]
                              }),
                              (0, i.jsxs)('div', {
                                  className: l()(b.grid, b.layers),
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: b.dangerControls,
                                          children: (0, i.jsx)(c.zxk, {
                                              color: c.Ttl.RED,
                                              look: c.iLD.OUTLINED,
                                              onClick: () => {
                                                  Z([]), k(j);
                                              },
                                              children: 'Clear Assets'
                                          })
                                      }),
                                      D.map((e, t) =>
                                          (0, i.jsxs)(
                                              'div',
                                              {
                                                  className: b.layerForm,
                                                  children: [
                                                      (0, i.jsxs)('div', {
                                                          className: b.layerPreviewContainer,
                                                          children: [
                                                              (0, i.jsx)(c.X6q, {
                                                                  variant: 'heading-md/bold',
                                                                  children: e.name
                                                              }),
                                                              (0, i.jsx)('img', {
                                                                  src: e.src,
                                                                  className: b.layerPreview,
                                                                  alt: ''
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)(c.X6q, {
                                                                              variant: 'heading-md/bold',
                                                                              children: 'Alternatives'
                                                                          }),
                                                                          e.randomizedSources.map((e, t) => {
                                                                              var n;
                                                                              return (0, i.jsxs)(
                                                                                  'div',
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, i.jsx)(c.X6q, {
                                                                                                  variant: 'heading-sm/semibold',
                                                                                                  children: e.filename
                                                                                              }),
                                                                                          (0, i.jsx)('img', {
                                                                                              src: e.src,
                                                                                              className: b.layerPreview,
                                                                                              alt: ''
                                                                                          })
                                                                                      ]
                                                                                  },
                                                                                  null != (n = e.filename) ? n : 'randomized-'.concat(t)
                                                                              );
                                                                          })
                                                                      ]
                                                                  })
                                                          ]
                                                      }),
                                                      (0, i.jsxs)('div', {
                                                          className: l()(b.grid, b.section),
                                                          children: [
                                                              (0, i.jsxs)('div', {
                                                                  className: b.col,
                                                                  children: [
                                                                      (0, i.jsx)(c.Text, {
                                                                          variant: 'text-md/bold',
                                                                          children: 'Start'
                                                                      }),
                                                                      (0, i.jsx)('input', {
                                                                          type: 'number',
                                                                          value: e.start,
                                                                          className: b.input,
                                                                          onChange: (e) => {
                                                                              Z((n) => {
                                                                                  let i = [...n],
                                                                                      r = n[t];
                                                                                  return (r.start = +e.target.value), (i[t] = r), i;
                                                                              });
                                                                          },
                                                                          contentEditable: !0
                                                                      })
                                                                  ]
                                                              }),
                                                              (0, i.jsxs)('div', {
                                                                  className: b.col,
                                                                  children: [
                                                                      (0, i.jsx)(c.Text, {
                                                                          variant: 'text-md/bold',
                                                                          children: 'Duration'
                                                                      }),
                                                                      (0, i.jsx)('input', {
                                                                          type: 'number',
                                                                          value: e.duration,
                                                                          className: b.input,
                                                                          onChange: (e) => {
                                                                              Z((n) => {
                                                                                  let i = [...n],
                                                                                      r = n[t];
                                                                                  return (r.duration = +e.target.value), (i[t] = r), i;
                                                                              });
                                                                          },
                                                                          contentEditable: !0
                                                                      })
                                                                  ]
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsxs)('div', {
                                                          className: l()(b.grid, b.section),
                                                          children: [
                                                              (0, i.jsxs)('div', {
                                                                  className: b.col,
                                                                  children: [
                                                                      (0, i.jsx)(c.Text, {
                                                                          variant: 'text-md/bold',
                                                                          children: 'Loop'
                                                                      }),
                                                                      (0, i.jsx)('input', {
                                                                          type: 'checkbox',
                                                                          checked: e.loop,
                                                                          className: b.checkBox,
                                                                          onChange: (e) => {
                                                                              Z((n) => {
                                                                                  let i = [...n],
                                                                                      r = n[t];
                                                                                  return (r.loop = e.target.checked), (i[t] = r), i;
                                                                              });
                                                                          }
                                                                      })
                                                                  ]
                                                              }),
                                                              (0, i.jsx)('div', {
                                                                  className: b.col,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, i.jsxs)(i.Fragment, {
                                                                          children: [
                                                                              (0, i.jsx)(c.Text, {
                                                                                  variant: 'text-md/bold',
                                                                                  children: 'Loop Delay'
                                                                              }),
                                                                              (0, i.jsx)('input', {
                                                                                  type: 'number',
                                                                                  value: e.loopDelay,
                                                                                  className: b.input,
                                                                                  onChange: (e) => {
                                                                                      Z((n) => {
                                                                                          let i = [...n],
                                                                                              r = n[t];
                                                                                          return (r.loopDelay = +e.target.value), (i[t] = r), i;
                                                                                      });
                                                                                  },
                                                                                  contentEditable: !0
                                                                              })
                                                                          ]
                                                                      })
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsxs)('div', {
                                                          className: l()(b.row, b.end),
                                                          children: [
                                                              (0, i.jsxs)('div', {
                                                                  className: b.uploadButton,
                                                                  children: [
                                                                      (0, i.jsx)(c.Text, {
                                                                          variant: 'text-sm/normal',
                                                                          color: 'always-white',
                                                                          children: 'Add Alternative'
                                                                      }),
                                                                      (0, i.jsx)(u.Z, {
                                                                          ref: N,
                                                                          onChange: (e) => H(e, t),
                                                                          multiple: !1
                                                                      })
                                                                  ]
                                                              }),
                                                              (0, i.jsx)(c.zxk, {
                                                                  color: c.Ttl.RED,
                                                                  look: c.iLD.LINK,
                                                                  onClick: () => {
                                                                      Z((t) => t.filter((t) => t !== e));
                                                                  },
                                                                  children: 'Remove Layer'
                                                              })
                                                          ]
                                                      })
                                                  ]
                                              },
                                              t
                                          )
                                      )
                                  ]
                              })
                          ]
                      })
                  ]
              });
    };
