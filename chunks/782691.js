n.d(t, { Z: () => C }),
    n(388685),
    n(704826),
    n(35282),
    n(539854),
    n(49124),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(979554),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(23645),
    f = n(53281),
    _ = n(678135),
    p = n(594174),
    h = n(373071),
    m = n(489495),
    g = n(189),
    E = n(558270),
    b = n(346537),
    y = n(830318);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = {
        [m.cq.THUMBNAIL]: null,
        [m.cq.STATIC]: null,
        [m.cq.REDUCED_MOTION]: null,
    },
    A = "debug",
    C = (e) => {
        let { effect: t } = e,
            { upsertConfig: n } = (0, h.n6)(),
            a = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
            [O, I] = i.useState(!0),
            C = i.useRef(null),
            [N, R] = i.useState(!1),
            [P, w] = i.useState(!1),
            [D, x] = i.useState([]),
            [L, j] = i.useState(S),
            M = i.useRef([]),
            [k, U] = i.useState(t.name),
            G = k.toLowerCase().replace(/\s+/g, "_"),
            B = i.useMemo(
                () => ({
                    type: s.Z.PROFILE_EFFECT,
                    id: A,
                    skuId: A,
                    title: A,
                    description: A,
                    accessibilityLabel: A,
                    reducedMotionSrc: "",
                    effects: D,
                    animationType: 0,
                }),
                [D],
            ),
            Z = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            V = (e, t) => {
                let n = Z(t);
                null != n &&
                    (0, m.i0)(n, (t) => {
                        j((r) => T(v({}, r), { [e]: (0, m.z)(t, n) }));
                    });
            },
            F = (e) => {
                let t = Z(e);
                null != t &&
                    (0, m.i0)(t, async (e) => {
                        let n = await (0, m.Xv)(e, t, D.length);
                        x((e) => [...e, n]);
                    });
            },
            H = (e, t) => {
                let n = Z(e);
                null != n &&
                    (0, m.i0)(n, (e) => {
                        x((r) => {
                            let i = [...r],
                                a = r[t];
                            if (null == a) return r;
                            let o = v({}, a);
                            return (
                                null == o.randomizedSources && (o.randomizedSources = []),
                                o.randomizedSources.push({
                                    src: e,
                                    filename: n.name,
                                }),
                                (i[t] = o),
                                i
                            );
                        });
                    });
            },
            Y = () => {
                x([]), j(S);
            },
            W = (e) => {
                j((t) => T(v({}, t), { [e]: null }));
            },
            K = () =>
                JSON.stringify(
                    T(v({}, t), {
                        name: k,
                        config: T(v({}, t.config), {
                            effects: D,
                            stillFrames: L,
                        }),
                    }),
                );
        i.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 &&
                x(
                    [...e].map((e) => {
                        if (null != e.base64) {
                            let t = (0, m.$j)(e.base64);
                            (e.src = t), M.current.push(t);
                        }
                        return e;
                    }),
                );
        }, [t.config.effects]),
            i.useEffect(() => {
                let e = t.config.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, n] = e;
                        if (null != n) {
                            let e = (0, m.$j)(n.base64);
                            (n.src = e), M.current.push(e), j((e) => T(v({}, e), { [t]: n }));
                        }
                    });
            }, [t.config.stillFrames]);
        let z = {
                effect: t,
                upsertConfig: n,
            },
            q = i.useRef(z);
        return (i.useEffect(() => {
            q.current = z;
        }),
        i.useEffect(() => {
            let { effect: e, upsertConfig: t } = q.current;
            e.readonly ||
                t({
                    id: e.id,
                    name: k,
                    config: {
                        effects: D,
                        stillFrames: L,
                    },
                });
        }, [D, L, k]),
        i.useEffect(
            () => () => {
                M.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (M.current = []);
            },
            [],
        ),
        null == a)
            ? (0, r.jsx)("div", {})
            : (0, r.jsx)("div", {
                  className: E.root,
                  children: (0, r.jsxs)("div", {
                      className: E.grid,
                      children: [
                          (0, r.jsxs)("div", {
                              className: o()(E.col, E.preview),
                              children: [
                                  (0, r.jsx)("img", {
                                      src: N ? b : y,
                                      alt: "",
                                      width: 450,
                                  }),
                                  O && (0, r.jsx)(g.Z, { config: B }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: E.col,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: o()(E.col, E.section),
                                      children: [
                                          (0, r.jsx)(u.Text, {
                                              variant: "text-md/normal",
                                              children: "Profile Effect Name",
                                          }),
                                          (0, r.jsx)("input", {
                                              type: "text",
                                              value: k,
                                              className: E.input,
                                              onChange: (e) => {
                                                  U(e.target.value);
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: E.grid,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: E.row,
                                              children: [
                                                  (0, r.jsx)(u.Text, {
                                                      variant: "text-md/normal",
                                                      children: "Dark Theme",
                                                  }),
                                                  (0, r.jsx)("input", {
                                                      type: "checkbox",
                                                      checked: N,
                                                      className: E.checkBox,
                                                      onChange: () => {
                                                          R(!N);
                                                      },
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: E.row,
                                              children: [
                                                  (0, r.jsx)(u.Text, {
                                                      variant: "text-md/normal",
                                                      children: "Show User Profile",
                                                  }),
                                                  (0, r.jsx)("input", {
                                                      type: "checkbox",
                                                      checked: P,
                                                      className: E.checkBox,
                                                      onChange: () => {
                                                          w(!P);
                                                      },
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: E.row,
                                      children: [
                                          (0, r.jsxs)(c.zx, {
                                              color: c.Tt.GREEN,
                                              children: [
                                                  "Upload Animated Layer",
                                                  (0, r.jsx)(f.Z, {
                                                      ref: C,
                                                      onChange: F,
                                                      multiple: !1,
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(u.Text, {
                                              variant: "text-sm/semibold",
                                              children: "Make sure to upload the bottommost layer first!",
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: E.row,
                                      children: [
                                          (0, r.jsxs)(c.zx, {
                                              color: c.Tt.GREEN,
                                              children: [
                                                  "Upload thumbnail.png",
                                                  (0, r.jsx)(f.Z, {
                                                      ref: C,
                                                      onChange: (e) => V(m.cq.THUMBNAIL, e),
                                                      multiple: !1,
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsxs)(c.zx, {
                                              color: c.Tt.GREEN,
                                              children: [
                                                  "Upload static.png",
                                                  (0, r.jsx)(f.Z, {
                                                      ref: C,
                                                      onChange: (e) => V(m.cq.STATIC, e),
                                                      multiple: !1,
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsxs)(c.zx, {
                                              color: c.Tt.GREEN,
                                              children: [
                                                  "Upload reduced_motion.png",
                                                  (0, r.jsx)(f.Z, {
                                                      ref: C,
                                                      onChange: (e) => V(m.cq.REDUCED_MOTION, e),
                                                      multiple: !1,
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("div", {
                                      className: E.bottomControls,
                                      children: (0, r.jsx)("div", {
                                          className: E.row,
                                          children: (0, r.jsx)(u.zxk, {
                                              variant: "primary",
                                              text: "Replay Animation",
                                              onClick: () => {
                                                  I(!1), setTimeout(() => I(!0), 100);
                                              },
                                          }),
                                      }),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: o()(E.bottomControls, E.shareSection),
                                      children: [
                                          (0, r.jsx)(u.Text, {
                                              variant: "text-sm/semibold",
                                              children: "Please download both configs for the drop package!",
                                          }),
                                          (0, r.jsx)(u.Text, {
                                              variant: "text-sm/bold",
                                              color: "text-danger",
                                              children: "WARNING: The full config is really big :0",
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: E.row,
                                              children: [
                                                  (0, r.jsx)(d.Z, {
                                                      fileContents: () => (0, m.yR)(D),
                                                      contentType: "text/plain",
                                                      fileName: "".concat(G, "_timing_config.txt"),
                                                      children: (0, r.jsx)(u.zxk, {
                                                          variant: "primary",
                                                          size: "sm",
                                                          text: "Download Timing Config",
                                                      }),
                                                  }),
                                                  (0, r.jsx)(d.Z, {
                                                      fileContents: K,
                                                      contentType: "text/plain",
                                                      fileName: "".concat(G, "_config.txt"),
                                                      children: (0, r.jsx)(u.zxk, {
                                                          variant: "primary",
                                                          size: "sm",
                                                          text: "Download Full Config",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: E.section,
                                      children: [
                                          (0, r.jsx)(u.X6q, {
                                              variant: "heading-lg/bold",
                                              children: "Still Frames",
                                          }),
                                          (0, r.jsx)("div", {
                                              className: E.stillFramesContainer,
                                              children: Object.entries(L).map((e) => {
                                                  let [t, n] = e;
                                                  return (0, r.jsxs)(
                                                      "div",
                                                      {
                                                          className: E.stillFramePreviewContainer,
                                                          children: [
                                                              (0, r.jsx)(u.X6q, {
                                                                  variant: "heading-sm/bold",
                                                                  children: t,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: null == n ? void 0 : n.src,
                                                                  className: E.stillFramePreview,
                                                                  alt: "",
                                                              }),
                                                              null != n &&
                                                                  (0, r.jsx)(c.zx, {
                                                                      size: c.Ph.TINY,
                                                                      color: c.Tt.RED,
                                                                      look: c.iL.OUTLINED,
                                                                      onClick: () => W(t),
                                                                      children: "Clear",
                                                                  }),
                                                          ],
                                                      },
                                                      t,
                                                  );
                                              }),
                                          }),
                                      ],
                                  }),
                                  D.some((e) => {
                                      var t;
                                      return (null != (t = e.randomizedSources) ? t : []).length > 0;
                                  }) &&
                                      (0, r.jsxs)("div", {
                                          className: o()(E.section, E.randomizedRules),
                                          children: [
                                              (0, r.jsx)(u.Text, {
                                                  variant: "text-md/bold",
                                                  children: "Rules of Randomized Effects",
                                              }),
                                              (0, r.jsxs)("ol", {
                                                  children: [
                                                      (0, r.jsx)("li", {
                                                          children:
                                                              "When an effect has randomization, all layers with random options must have the same number of options.",
                                                      }),
                                                      (0, r.jsx)("li", {
                                                          children:
                                                              "The duration for the random options of a layer must be the same",
                                                      }),
                                                      (0, r.jsx)("li", {
                                                          children:
                                                              "If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)",
                                                      }),
                                                      (0, r.jsx)("li", {
                                                          children:
                                                              'Click "Replay Animation" to "reroll" the randomization',
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  (0, r.jsx)("div", {
                                      children:
                                          P &&
                                          (0, r.jsxs)("div", {
                                              className: o()(E.userProfilePreview, E.preview),
                                              children: [
                                                  (0, r.jsx)(_.Z, {
                                                      user: a,
                                                      pendingAvatar: void 0,
                                                      pendingProfileEffectId: null,
                                                      canUsePremiumCustomization: !0,
                                                      isTryItOutFlow: !0,
                                                  }),
                                                  (0, r.jsx)(g.Z, { config: B }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: o()(E.grid, E.layers),
                              children: [
                                  (0, r.jsx)("div", {
                                      className: E.dangerControls,
                                      children: (0, r.jsx)(u.zxk, {
                                          variant: "critical-secondary",
                                          text: "Clear Assets",
                                          onClick: Y,
                                      }),
                                  }),
                                  D.map((e, t) =>
                                      (0, r.jsxs)(
                                          "div",
                                          {
                                              className: E.layerForm,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: E.layerPreviewContainer,
                                                      children: [
                                                          (0, r.jsx)(u.X6q, {
                                                              variant: "heading-md/bold",
                                                              children: e.name,
                                                          }),
                                                          (0, r.jsx)("img", {
                                                              src: e.src,
                                                              className: E.layerPreview,
                                                              alt: "",
                                                          }),
                                                          null != e.randomizedSources &&
                                                              (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)(u.X6q, {
                                                                          variant: "heading-md/bold",
                                                                          children: "Alternatives",
                                                                      }),
                                                                      e.randomizedSources.map((e, t) => {
                                                                          var n;
                                                                          return (0, r.jsxs)(
                                                                              "div",
                                                                              {
                                                                                  children: [
                                                                                      null != e.filename &&
                                                                                          (0, r.jsx)(u.X6q, {
                                                                                              variant:
                                                                                                  "heading-sm/semibold",
                                                                                              children: e.filename,
                                                                                          }),
                                                                                      (0, r.jsx)("img", {
                                                                                          src: e.src,
                                                                                          className: E.layerPreview,
                                                                                          alt: "",
                                                                                      }),
                                                                                  ],
                                                                              },
                                                                              null != (n = e.filename)
                                                                                  ? n
                                                                                  : "randomized-".concat(t),
                                                                          );
                                                                      }),
                                                                  ],
                                                              }),
                                                      ],
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: o()(E.grid, E.section),
                                                      children: [
                                                          (0, r.jsxs)("div", {
                                                              className: E.col,
                                                              children: [
                                                                  (0, r.jsx)(u.Text, {
                                                                      variant: "text-md/bold",
                                                                      children: "Start",
                                                                  }),
                                                                  (0, r.jsx)("input", {
                                                                      type: "number",
                                                                      value: e.start,
                                                                      className: E.input,
                                                                      onChange: (e) => {
                                                                          x((n) => {
                                                                              let r = [...n],
                                                                                  i = n[t];
                                                                              return (
                                                                                  (i.start = +e.target.value),
                                                                                  (r[t] = i),
                                                                                  r
                                                                              );
                                                                          });
                                                                      },
                                                                      contentEditable: !0,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: E.col,
                                                              children: [
                                                                  (0, r.jsx)(u.Text, {
                                                                      variant: "text-md/bold",
                                                                      children: "Duration",
                                                                  }),
                                                                  (0, r.jsx)("input", {
                                                                      type: "number",
                                                                      value: e.duration,
                                                                      className: E.input,
                                                                      onChange: (e) => {
                                                                          x((n) => {
                                                                              let r = [...n],
                                                                                  i = n[t];
                                                                              return (
                                                                                  (i.duration = +e.target.value),
                                                                                  (r[t] = i),
                                                                                  r
                                                                              );
                                                                          });
                                                                      },
                                                                      contentEditable: !0,
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: o()(E.grid, E.section),
                                                      children: [
                                                          (0, r.jsxs)("div", {
                                                              className: E.col,
                                                              children: [
                                                                  (0, r.jsx)(u.Text, {
                                                                      variant: "text-md/bold",
                                                                      children: "Loop",
                                                                  }),
                                                                  (0, r.jsx)("input", {
                                                                      type: "checkbox",
                                                                      checked: e.loop,
                                                                      className: E.checkBox,
                                                                      onChange: (e) => {
                                                                          x((n) => {
                                                                              let r = [...n],
                                                                                  i = n[t];
                                                                              return (
                                                                                  (i.loop = e.target.checked),
                                                                                  (r[t] = i),
                                                                                  r
                                                                              );
                                                                          });
                                                                      },
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)("div", {
                                                              className: E.col,
                                                              children:
                                                                  e.loop &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(u.Text, {
                                                                              variant: "text-md/bold",
                                                                              children: "Loop Delay",
                                                                          }),
                                                                          (0, r.jsx)("input", {
                                                                              type: "number",
                                                                              value: e.loopDelay,
                                                                              className: E.input,
                                                                              onChange: (e) => {
                                                                                  x((n) => {
                                                                                      let r = [...n],
                                                                                          i = n[t];
                                                                                      return (
                                                                                          (i.loopDelay =
                                                                                              +e.target.value),
                                                                                          (r[t] = i),
                                                                                          r
                                                                                      );
                                                                                  });
                                                                              },
                                                                              contentEditable: !0,
                                                                          }),
                                                                      ],
                                                                  }),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: o()(E.row, E.end),
                                                      children: [
                                                          (0, r.jsxs)("div", {
                                                              className: E.uploadButton,
                                                              children: [
                                                                  (0, r.jsx)(u.Text, {
                                                                      variant: "text-sm/normal",
                                                                      color: "always-white",
                                                                      children: "Add Alternative",
                                                                  }),
                                                                  (0, r.jsx)(f.Z, {
                                                                      ref: C,
                                                                      onChange: (e) => H(e, t),
                                                                      multiple: !1,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(u.zxk, {
                                                              variant: "critical-secondary",
                                                              text: "Remove Layer",
                                                              onClick: () => {
                                                                  x((t) => t.filter((t) => t !== e));
                                                              },
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          },
                                          t,
                                      ),
                                  ),
                              ],
                          }),
                      ],
                  }),
              });
    };
