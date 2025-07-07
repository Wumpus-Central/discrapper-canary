(n.d(t, { Z: () => S }), n(388685), n(704826), n(35282), n(539854), n(49124), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749));
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
    p = n(594174),
    g = n(373071),
    h = n(489495),
    f = n(189),
    b = n(662583),
    x = n(346537),
    _ = n(830318);
function E(e) {
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
let O = {
        [h.cq.THUMBNAIL]: null,
        [h.cq.STATIC]: null,
        [h.cq.REDUCED_MOTION]: null
    },
    C = 'debug',
    S = (e) => {
        let { effect: t } = e,
            { upsertConfig: n } = (0, g.n6)(),
            s = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
            [S, v] = r.useState(!0),
            T = r.useRef(null),
            [N, I] = r.useState(!1),
            [y, A] = r.useState(!1),
            [P, R] = r.useState([]),
            [D, Z] = r.useState(O),
            w = r.useRef([]),
            [k, L] = r.useState(t.name),
            B = k.toLowerCase().replace(/\s+/g, '_'),
            M = r.useMemo(
                () => ({
                    type: a.Z.PROFILE_EFFECT,
                    id: C,
                    skuId: C,
                    title: C,
                    description: C,
                    accessibilityLabel: C,
                    reducedMotionSrc: '',
                    effects: P,
                    animationType: 0
                }),
                [P]
            ),
            U = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            V = (e, t) => {
                let n = U(t);
                null != n &&
                    (0, h.i0)(n, (t) => {
                        Z((i) => j(E({}, i), { [e]: (0, h.z)(t, n) }));
                    });
            },
            G = (e, t) => {
                let n = U(e);
                null != n &&
                    (0, h.i0)(n, (e) => {
                        R((i) => {
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
            F = (e) => {
                Z((t) => j(E({}, t), { [e]: null }));
            };
        (r.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 &&
                R(
                    [...e].map((e) => {
                        if (null != e.base64) {
                            let t = (0, h.$j)(e.base64);
                            ((e.src = t), w.current.push(t));
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
                            ((n.src = e), w.current.push(e), Z((e) => j(E({}, e), { [t]: n })));
                        }
                    });
            }, [t.config.stillFrames]));
        let H = {
                effect: t,
                upsertConfig: n
            },
            z = r.useRef(H);
        return (r.useEffect(() => {
            z.current = H;
        }),
        r.useEffect(() => {
            let { effect: e, upsertConfig: t } = z.current;
            e.readonly ||
                t({
                    id: e.id,
                    name: k,
                    config: {
                        effects: P,
                        stillFrames: D
                    }
                });
        }, [P, D, k]),
        r.useEffect(
            () => () => {
                (w.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (w.current = []));
            },
            []
        ),
        null == s)
            ? (0, i.jsx)('div', {})
            : (0, i.jsx)('div', {
                  className: b.root,
                  children: (0, i.jsxs)('div', {
                      className: b.grid,
                      children: [
                          (0, i.jsxs)('div', {
                              className: l()(b.col, b.preview),
                              children: [
                                  (0, i.jsx)('img', {
                                      src: N ? x : _,
                                      alt: '',
                                      width: 450
                                  }),
                                  S && (0, i.jsx)(f.Z, { config: M })
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
                                              value: k,
                                              className: b.input,
                                              onChange: (e) => {
                                                  L(e.target.value);
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
                                                          I(!N);
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
                                                      checked: y,
                                                      className: b.checkBox,
                                                      onChange: () => {
                                                          A(!y);
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
                                                      ref: T,
                                                      onChange: (e) => {
                                                          let t = U(e);
                                                          null != t &&
                                                              (0, h.i0)(t, async (e) => {
                                                                  let n = await (0, h.Xv)(e, t, P.length);
                                                                  R((e) => [...e, n]);
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
                                                      ref: T,
                                                      onChange: (e) => V(h.cq.THUMBNAIL, e),
                                                      multiple: !1
                                                  })
                                              ]
                                          }),
                                          (0, i.jsxs)(c.zxk, {
                                              color: c.Ttl.GREEN,
                                              children: [
                                                  'Upload static.png',
                                                  (0, i.jsx)(u.Z, {
                                                      ref: T,
                                                      onChange: (e) => V(h.cq.STATIC, e),
                                                      multiple: !1
                                                  })
                                              ]
                                          }),
                                          (0, i.jsxs)(c.zxk, {
                                              color: c.Ttl.GREEN,
                                              children: [
                                                  'Upload reduced_motion.png',
                                                  (0, i.jsx)(u.Z, {
                                                      ref: T,
                                                      onChange: (e) => V(h.cq.REDUCED_MOTION, e),
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
                                                  (v(!1), setTimeout(() => v(!0), 100));
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
                                                      fileContents: () => (0, h.yR)(P),
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
                                                                  name: k,
                                                                  config: j(E({}, t.config), {
                                                                      effects: P,
                                                                      stillFrames: D
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
                                              children: Object.entries(D).map((e) => {
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
                                                                      onClick: () => F(t),
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
                                  P.some((e) => {
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
                                          y &&
                                          (0, i.jsxs)('div', {
                                              className: l()(b.userProfilePreview, b.preview),
                                              children: [
                                                  (0, i.jsx)(m.Z, {
                                                      user: s,
                                                      pendingAvatar: void 0,
                                                      pendingProfileEffectId: null,
                                                      canUsePremiumCustomization: !0,
                                                      isTryItOutFlow: !0
                                                  }),
                                                  (0, i.jsx)(f.Z, { config: M })
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
                                              (R([]), Z(O));
                                          },
                                          children: 'Clear Assets'
                                      })
                                  }),
                                  P.map((e, t) =>
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
                                                                          R((n) => {
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
                                                                          R((n) => {
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
                                                                          R((n) => {
                                                                              let i = [...n],
                                                                                  r = n[t];
                                                                              return ((r.loop = e.target.checked), (i[t] = r), i);
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
                                                                                  R((n) => {
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
                                                                      ref: T,
                                                                      onChange: (e) => G(e, t),
                                                                      multiple: !1
                                                                  })
                                                              ]
                                                          }),
                                                          (0, i.jsx)(c.zxk, {
                                                              color: c.Ttl.RED,
                                                              look: c.iLD.LINK,
                                                              onClick: () => {
                                                                  R((t) => t.filter((t) => t !== e));
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
              });
    };
