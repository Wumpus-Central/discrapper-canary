n.d(t, { Z: () => S }), n(388685), n(704826), n(35282), n(539854), n(49124), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(979554),
    o = n(442837),
    c = n(481060),
    d = n(23645),
    u = n(53281),
    m = n(678135),
    p = n(594174),
    g = n(373071),
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
function j(e, t) {
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
let C = {
        [h.cq.THUMBNAIL]: null,
        [h.cq.STATIC]: null,
        [h.cq.REDUCED_MOTION]: null
    },
    O = 'debug',
    S = (e) => {
        let { effect: t, back: n } = e,
            { upsertConfig: s } = (0, g.n6)(),
            S = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
            [v, T] = r.useState(!0),
            I = r.useRef(null),
            [N, y] = r.useState(!1),
            [A, P] = r.useState(!1),
            [R, D] = r.useState([]),
            [Z, w] = r.useState(C),
            k = r.useRef([]),
            [L, M] = r.useState(t.name),
            B = L.toLowerCase().replace(/\s+/g, '_'),
            U = r.useMemo(
                () => ({
                    type: a.Z.PROFILE_EFFECT,
                    id: O,
                    skuId: O,
                    title: O,
                    description: O,
                    accessibilityLabel: O,
                    reducedMotionSrc: '',
                    effects: R,
                    animationType: 0
                }),
                [R]
            ),
            V = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            G = (e, t) => {
                let n = V(t);
                null != n &&
                    (0, h.i0)(n, (t) => {
                        w((i) => j(E({}, i), { [e]: (0, h.z)(t, n) }));
                    });
            },
            F = (e, t) => {
                let n = V(e);
                null != n &&
                    (0, h.i0)(n, (e) => {
                        D((i) => {
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
            H = (e) => {
                w((t) => j(E({}, t), { [e]: null }));
            };
        r.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 &&
                D(
                    [...e].map((e) => {
                        let t = (0, h.$j)(e.base64);
                        return (e.src = t), k.current.push(t), e;
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
                            (n.src = e), k.current.push(e), w((e) => j(E({}, e), { [t]: n }));
                        }
                    });
            }, [t.config.stillFrames]);
        let z = {
                effect: t,
                upsertConfig: s
            },
            W = r.useRef(z);
        return (r.useEffect(() => {
            W.current = z;
        }),
        r.useEffect(() => {
            let { effect: e, upsertConfig: t } = W.current;
            t({
                id: e.id,
                name: L,
                config: {
                    effects: R,
                    stillFrames: Z
                }
            });
        }, [R, Z, L]),
        r.useEffect(
            () => () => {
                k.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (k.current = []);
            },
            []
        ),
        null == S)
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
                                          src: N ? _ : x,
                                          alt: '',
                                          width: 450
                                      }),
                                      v && (0, i.jsx)(f.Z, { config: U })
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
                                                  value: L,
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
                                                          checked: N,
                                                          className: b.checkBox,
                                                          onChange: () => {
                                                              y(!N);
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
                                                          checked: A,
                                                          className: b.checkBox,
                                                          onChange: () => {
                                                              P(!A);
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
                                                          ref: I,
                                                          onChange: (e) => {
                                                              let t = V(e);
                                                              null != t &&
                                                                  (0, h.i0)(t, async (e) => {
                                                                      let n = await (0, h.Xv)(e, t, R.length);
                                                                      D((e) => [...e, n]);
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
                                                          ref: I,
                                                          onChange: (e) => G(h.cq.THUMBNAIL, e),
                                                          multiple: !1
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsxs)(c.zxk, {
                                                  color: c.Ttl.GREEN,
                                                  children: [
                                                      'Upload static.png',
                                                      (0, i.jsx)(u.Z, {
                                                          ref: I,
                                                          onChange: (e) => G(h.cq.STATIC, e),
                                                          multiple: !1
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsxs)(c.zxk, {
                                                  color: c.Ttl.GREEN,
                                                  children: [
                                                      'Upload reduced_motion.png',
                                                      (0, i.jsx)(u.Z, {
                                                          ref: I,
                                                          onChange: (e) => G(h.cq.REDUCED_MOTION, e),
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
                                                      T(!1), setTimeout(() => T(!0), 100);
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
                                                          fileContents: () => (0, h.yR)(R),
                                                          contentType: 'text/plain',
                                                          fileName: ''.concat(B, '_timing_config.txt'),
                                                          children: (0, i.jsx)(c.zxk, {
                                                              size: c.PhG.SMALL,
                                                              color: c.Ttl.BRAND,
                                                              children: 'Download Timing Config'
                                                          })
                                                      }),
                                                      (0, i.jsx)(d.Z, {
                                                          fileContents: () =>
                                                              JSON.stringify(
                                                                  j(E({}, t), {
                                                                      name: L,
                                                                      config: j(E({}, t.config), {
                                                                          effects: R,
                                                                          stillFrames: Z
                                                                      })
                                                                  })
                                                              ),
                                                          contentType: 'text/plain',
                                                          fileName: ''.concat(B, '_config.txt'),
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
                                                  children: Object.entries(Z).map((e) => {
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
                                                                          onClick: () => H(t),
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
                                      R.some((e) => {
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
                                              A &&
                                              (0, i.jsxs)('div', {
                                                  className: l()(b.userProfilePreview, b.preview),
                                                  children: [
                                                      (0, i.jsx)(m.Z, {
                                                          user: S,
                                                          pendingAvatar: void 0,
                                                          pendingProfileEffectId: null,
                                                          canUsePremiumCustomization: !0,
                                                          isTryItOutFlow: !0
                                                      }),
                                                      (0, i.jsx)(f.Z, { config: U })
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
                                                  D([]), w(C);
                                              },
                                              children: 'Clear Assets'
                                          })
                                      }),
                                      R.map((e, t) =>
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
                                                                              D((n) => {
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
                                                                              D((n) => {
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
                                                                              D((n) => {
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
                                                                                      D((n) => {
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
                                                                          ref: I,
                                                                          onChange: (e) => F(e, t),
                                                                          multiple: !1
                                                                      })
                                                                  ]
                                                              }),
                                                              (0, i.jsx)(c.zxk, {
                                                                  color: c.Ttl.RED,
                                                                  look: c.iLD.LINK,
                                                                  onClick: () => {
                                                                      D((t) => t.filter((t) => t !== e));
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
