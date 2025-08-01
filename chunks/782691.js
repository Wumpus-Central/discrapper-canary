(n.d(t, { Z: () => S }), n(388685), n(704826), n(35282), n(539854), n(49124), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(979554),
    o = n(442837),
    c = n(755721),
    d = n(481060),
    u = n(23645),
    m = n(53281),
    p = n(678135),
    g = n(594174),
    h = n(373071),
    f = n(489495),
    b = n(189),
    x = n(662583),
    _ = n(346537),
    j = n(830318);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
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
let E = {
        [f.cq.THUMBNAIL]: null,
        [f.cq.STATIC]: null,
        [f.cq.REDUCED_MOTION]: null
    },
    v = 'debug',
    S = (e) => {
        let { effect: t } = e,
            { upsertConfig: n } = (0, h.n6)(),
            s = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
            [S, T] = r.useState(!0),
            N = r.useRef(null),
            [I, y] = r.useState(!1),
            [A, P] = r.useState(!1),
            [R, D] = r.useState([]),
            [Z, w] = r.useState(E),
            k = r.useRef([]),
            [L, B] = r.useState(t.name),
            M = L.toLowerCase().replace(/\s+/g, '_'),
            U = r.useMemo(
                () => ({
                    type: l.Z.PROFILE_EFFECT,
                    id: v,
                    skuId: v,
                    title: v,
                    description: v,
                    accessibilityLabel: v,
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
                    (0, f.i0)(n, (t) => {
                        w((i) => C(O({}, i), { [e]: (0, f.z)(t, n) }));
                    });
            },
            F = (e, t) => {
                let n = V(e);
                null != n &&
                    (0, f.i0)(n, (e) => {
                        D((i) => {
                            let r = [...i],
                                s = i[t];
                            if (null == s) return i;
                            let a = O({}, s);
                            return (
                                null == a.randomizedSources && (a.randomizedSources = []),
                                a.randomizedSources.push({
                                    src: e,
                                    filename: n.name
                                }),
                                (r[t] = a),
                                r
                            );
                        });
                    });
            },
            H = (e) => {
                w((t) => C(O({}, t), { [e]: null }));
            };
        (r.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 &&
                D(
                    [...e].map((e) => {
                        if (null != e.base64) {
                            let t = (0, f.$j)(e.base64);
                            ((e.src = t), k.current.push(t));
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
                            let e = (0, f.$j)(n.base64);
                            ((n.src = e), k.current.push(e), w((e) => C(O({}, e), { [t]: n })));
                        }
                    });
            }, [t.config.stillFrames]));
        let W = {
                effect: t,
                upsertConfig: n
            },
            z = r.useRef(W);
        return (r.useEffect(() => {
            z.current = W;
        }),
        r.useEffect(() => {
            let { effect: e, upsertConfig: t } = z.current;
            e.readonly ||
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
                (k.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (k.current = []));
            },
            []
        ),
        null == s)
            ? (0, i.jsx)('div', {})
            : (0, i.jsx)('div', {
                  className: x.root,
                  children: (0, i.jsxs)('div', {
                      className: x.grid,
                      children: [
                          (0, i.jsxs)('div', {
                              className: a()(x.col, x.preview),
                              children: [
                                  (0, i.jsx)('img', {
                                      src: I ? _ : j,
                                      alt: '',
                                      width: 450
                                  }),
                                  S && (0, i.jsx)(b.Z, { config: U })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: x.col,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: a()(x.col, x.section),
                                      children: [
                                          (0, i.jsx)(d.Text, {
                                              variant: 'text-md/normal',
                                              children: 'Profile Effect Name'
                                          }),
                                          (0, i.jsx)('input', {
                                              type: 'text',
                                              value: L,
                                              className: x.input,
                                              onChange: (e) => {
                                                  B(e.target.value);
                                              }
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: x.grid,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: x.row,
                                              children: [
                                                  (0, i.jsx)(d.Text, {
                                                      variant: 'text-md/normal',
                                                      children: 'Dark Theme'
                                                  }),
                                                  (0, i.jsx)('input', {
                                                      type: 'checkbox',
                                                      checked: I,
                                                      className: x.checkBox,
                                                      onChange: () => {
                                                          y(!I);
                                                      }
                                                  })
                                              ]
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: x.row,
                                              children: [
                                                  (0, i.jsx)(d.Text, {
                                                      variant: 'text-md/normal',
                                                      children: 'Show User Profile'
                                                  }),
                                                  (0, i.jsx)('input', {
                                                      type: 'checkbox',
                                                      checked: A,
                                                      className: x.checkBox,
                                                      onChange: () => {
                                                          P(!A);
                                                      }
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: x.row,
                                      children: [
                                          (0, i.jsxs)(c.zx, {
                                              color: c.Tt.GREEN,
                                              children: [
                                                  'Upload Animated Layer',
                                                  (0, i.jsx)(m.Z, {
                                                      ref: N,
                                                      onChange: (e) => {
                                                          let t = V(e);
                                                          null != t &&
                                                              (0, f.i0)(t, async (e) => {
                                                                  let n = await (0, f.Xv)(e, t, R.length);
                                                                  D((e) => [...e, n]);
                                                              });
                                                      },
                                                      multiple: !1
                                                  })
                                              ]
                                          }),
                                          (0, i.jsx)(d.Text, {
                                              variant: 'text-sm/semibold',
                                              children: 'Make sure to upload the bottommost layer first!'
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: x.row,
                                      children: [
                                          (0, i.jsxs)(c.zx, {
                                              color: c.Tt.GREEN,
                                              children: [
                                                  'Upload thumbnail.png',
                                                  (0, i.jsx)(m.Z, {
                                                      ref: N,
                                                      onChange: (e) => G(f.cq.THUMBNAIL, e),
                                                      multiple: !1
                                                  })
                                              ]
                                          }),
                                          (0, i.jsxs)(c.zx, {
                                              color: c.Tt.GREEN,
                                              children: [
                                                  'Upload static.png',
                                                  (0, i.jsx)(m.Z, {
                                                      ref: N,
                                                      onChange: (e) => G(f.cq.STATIC, e),
                                                      multiple: !1
                                                  })
                                              ]
                                          }),
                                          (0, i.jsxs)(c.zx, {
                                              color: c.Tt.GREEN,
                                              children: [
                                                  'Upload reduced_motion.png',
                                                  (0, i.jsx)(m.Z, {
                                                      ref: N,
                                                      onChange: (e) => G(f.cq.REDUCED_MOTION, e),
                                                      multiple: !1
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)('div', {
                                      className: x.bottomControls,
                                      children: (0, i.jsx)('div', {
                                          className: x.row,
                                          children: (0, i.jsx)(d.zxk, {
                                              variant: 'primary',
                                              text: 'Replay Animation',
                                              onClick: () => {
                                                  (T(!1), setTimeout(() => T(!0), 100));
                                              }
                                          })
                                      })
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: a()(x.bottomControls, x.shareSection),
                                      children: [
                                          (0, i.jsx)(d.Text, {
                                              variant: 'text-sm/semibold',
                                              children: 'Please download both configs for the drop package!'
                                          }),
                                          (0, i.jsx)(d.Text, {
                                              variant: 'text-sm/bold',
                                              color: 'text-danger',
                                              children: 'WARNING: The full config is really big :0'
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: x.row,
                                              children: [
                                                  (0, i.jsx)(u.Z, {
                                                      fileContents: () => (0, f.yR)(R),
                                                      contentType: 'text/plain',
                                                      fileName: ''.concat(M, '_timing_config.txt'),
                                                      children: (0, i.jsx)(d.zxk, {
                                                          variant: 'primary',
                                                          size: 'sm',
                                                          text: 'Download Timing Config'
                                                      })
                                                  }),
                                                  (0, i.jsx)(u.Z, {
                                                      fileContents: () =>
                                                          JSON.stringify(
                                                              C(O({}, t), {
                                                                  name: L,
                                                                  config: C(O({}, t.config), {
                                                                      effects: R,
                                                                      stillFrames: Z
                                                                  })
                                                              })
                                                          ),
                                                      contentType: 'text/plain',
                                                      fileName: ''.concat(M, '_config.txt'),
                                                      children: (0, i.jsx)(d.zxk, {
                                                          variant: 'primary',
                                                          size: 'sm',
                                                          text: 'Download Full Config'
                                                      })
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: x.section,
                                      children: [
                                          (0, i.jsx)(d.X6q, {
                                              variant: 'heading-lg/bold',
                                              children: 'Still Frames'
                                          }),
                                          (0, i.jsx)('div', {
                                              className: x.stillFramesContainer,
                                              children: Object.entries(Z).map((e) => {
                                                  let [t, n] = e;
                                                  return (0, i.jsxs)(
                                                      'div',
                                                      {
                                                          className: x.stillFramePreviewContainer,
                                                          children: [
                                                              (0, i.jsx)(d.X6q, {
                                                                  variant: 'heading-sm/bold',
                                                                  children: t
                                                              }),
                                                              (0, i.jsx)('img', {
                                                                  src: null == n ? void 0 : n.src,
                                                                  className: x.stillFramePreview,
                                                                  alt: ''
                                                              }),
                                                              null != n &&
                                                                  (0, i.jsx)(c.zx, {
                                                                      size: c.Ph.TINY,
                                                                      color: c.Tt.RED,
                                                                      look: c.iL.OUTLINED,
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
                                          className: a()(x.section, x.randomizedRules),
                                          children: [
                                              (0, i.jsx)(d.Text, {
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
                                              className: a()(x.userProfilePreview, x.preview),
                                              children: [
                                                  (0, i.jsx)(p.Z, {
                                                      user: s,
                                                      pendingAvatar: void 0,
                                                      pendingProfileEffectId: null,
                                                      canUsePremiumCustomization: !0,
                                                      isTryItOutFlow: !0
                                                  }),
                                                  (0, i.jsx)(b.Z, { config: U })
                                              ]
                                          })
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: a()(x.grid, x.layers),
                              children: [
                                  (0, i.jsx)('div', {
                                      className: x.dangerControls,
                                      children: (0, i.jsx)(d.zxk, {
                                          variant: 'critical-secondary',
                                          text: 'Clear Assets',
                                          onClick: () => {
                                              (D([]), w(E));
                                          }
                                      })
                                  }),
                                  R.map((e, t) =>
                                      (0, i.jsxs)(
                                          'div',
                                          {
                                              className: x.layerForm,
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: x.layerPreviewContainer,
                                                      children: [
                                                          (0, i.jsx)(d.X6q, {
                                                              variant: 'heading-md/bold',
                                                              children: e.name
                                                          }),
                                                          (0, i.jsx)('img', {
                                                              src: e.src,
                                                              className: x.layerPreview,
                                                              alt: ''
                                                          }),
                                                          null != e.randomizedSources &&
                                                              (0, i.jsxs)(i.Fragment, {
                                                                  children: [
                                                                      (0, i.jsx)(d.X6q, {
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
                                                                                          (0, i.jsx)(d.X6q, {
                                                                                              variant: 'heading-sm/semibold',
                                                                                              children: e.filename
                                                                                          }),
                                                                                      (0, i.jsx)('img', {
                                                                                          src: e.src,
                                                                                          className: x.layerPreview,
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
                                                      className: a()(x.grid, x.section),
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: x.col,
                                                              children: [
                                                                  (0, i.jsx)(d.Text, {
                                                                      variant: 'text-md/bold',
                                                                      children: 'Start'
                                                                  }),
                                                                  (0, i.jsx)('input', {
                                                                      type: 'number',
                                                                      value: e.start,
                                                                      className: x.input,
                                                                      onChange: (e) => {
                                                                          D((n) => {
                                                                              let i = [...n],
                                                                                  r = n[t];
                                                                              return ((r.start = +e.target.value), (i[t] = r), i);
                                                                          });
                                                                      },
                                                                      contentEditable: !0
                                                                  })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: x.col,
                                                              children: [
                                                                  (0, i.jsx)(d.Text, {
                                                                      variant: 'text-md/bold',
                                                                      children: 'Duration'
                                                                  }),
                                                                  (0, i.jsx)('input', {
                                                                      type: 'number',
                                                                      value: e.duration,
                                                                      className: x.input,
                                                                      onChange: (e) => {
                                                                          D((n) => {
                                                                              let i = [...n],
                                                                                  r = n[t];
                                                                              return ((r.duration = +e.target.value), (i[t] = r), i);
                                                                          });
                                                                      },
                                                                      contentEditable: !0
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsxs)('div', {
                                                      className: a()(x.grid, x.section),
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: x.col,
                                                              children: [
                                                                  (0, i.jsx)(d.Text, {
                                                                      variant: 'text-md/bold',
                                                                      children: 'Loop'
                                                                  }),
                                                                  (0, i.jsx)('input', {
                                                                      type: 'checkbox',
                                                                      checked: e.loop,
                                                                      className: x.checkBox,
                                                                      onChange: (e) => {
                                                                          D((n) => {
                                                                              let i = [...n],
                                                                                  r = n[t];
                                                                              return ((r.loop = e.target.checked), (i[t] = r), i);
                                                                          });
                                                                      }
                                                                  })
                                                              ]
                                                          }),
                                                          (0, i.jsx)('div', {
                                                              className: x.col,
                                                              children:
                                                                  e.loop &&
                                                                  (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)(d.Text, {
                                                                              variant: 'text-md/bold',
                                                                              children: 'Loop Delay'
                                                                          }),
                                                                          (0, i.jsx)('input', {
                                                                              type: 'number',
                                                                              value: e.loopDelay,
                                                                              className: x.input,
                                                                              onChange: (e) => {
                                                                                  D((n) => {
                                                                                      let i = [...n],
                                                                                          r = n[t];
                                                                                      return ((r.loopDelay = +e.target.value), (i[t] = r), i);
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
                                                      className: a()(x.row, x.end),
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: x.uploadButton,
                                                              children: [
                                                                  (0, i.jsx)(d.Text, {
                                                                      variant: 'text-sm/normal',
                                                                      color: 'always-white',
                                                                      children: 'Add Alternative'
                                                                  }),
                                                                  (0, i.jsx)(m.Z, {
                                                                      ref: N,
                                                                      onChange: (e) => F(e, t),
                                                                      multiple: !1
                                                                  })
                                                              ]
                                                          }),
                                                          (0, i.jsx)(d.zxk, {
                                                              variant: 'critical-secondary',
                                                              text: 'Remove Layer',
                                                              onClick: () => {
                                                                  D((t) => t.filter((t) => t !== e));
                                                              }
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
              });
    };
