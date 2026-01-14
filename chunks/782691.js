n.d(t, { Z: () => S }),
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
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(480210),
    o = n(442837),
    c = n(481060),
    d = n(23645),
    u = n(53281),
    m = n(678135),
    p = n(594174),
    h = n(373071),
    f = n(489495),
    x = n(189),
    b = n(75266),
    g = n(346537),
    v = n(830318);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = {
        [f.cq.THUMBNAIL]: null,
        [f.cq.STATIC]: null,
        [f.cq.REDUCED_MOTION]: null,
    },
    _ = "debug",
    S = (e) => {
        let { effect: t } = e,
            { upsertConfig: n } = (0, h.n6)(),
            i = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
            [S, E] = r.useState(!0),
            T = r.useRef({}),
            [O, N] = r.useState(!1),
            [P, w] = r.useState(!1),
            [I, k] = r.useState([]),
            [R, A] = r.useState(C),
            Z = r.useRef([]),
            [D, L] = r.useState(t.name),
            M = D.toLowerCase().replace(/\s+/g, "_"),
            U = r.useMemo(
                () => ({
                    id: _,
                    skuId: _,
                    title: _,
                    description: _,
                    accessibilityLabel: _,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: I,
                    animationType: s.y.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [I],
            ),
            B = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            F = (e, t) => {
                let n = B(t);
                null != n &&
                    (0, f.i0)(n, (t) => {
                        A((a) => y(j({}, a), { [e]: (0, f.z)(t, n) }));
                    });
            };
        r.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 && k(e);
        }, [t.config.effects]),
            r.useEffect(() => {
                let e = t.config.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, n] = e;
                        if (null != n) {
                            let e = (0, f.$j)(n.base64);
                            (n.src = e), Z.current.push(e), A((e) => y(j({}, e), { [t]: n }));
                        }
                    });
            }, [t.config.stillFrames]);
        let G = {
                effect: t,
                upsertConfig: n,
            },
            V = r.useRef(G);
        return (r.useEffect(() => {
            V.current = G;
        }),
        r.useEffect(() => {
            let { effect: e, upsertConfig: t } = V.current;
            e.readonly ||
                t({
                    skuId: e.skuId,
                    name: D,
                    config: {
                        effects: I,
                        stillFrames: R,
                    },
                });
        }, [I, R, D]),
        r.useEffect(
            () => () => {
                Z.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (Z.current = []);
            },
            [],
        ),
        null == i)
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                  className: b.root,
                  children: [
                      (0, a.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, a.jsx)(u.Z, {
                                  ref: (e) => {
                                      T.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = B(e);
                                      null != t &&
                                          (0, f.i0)(t, async (e) => {
                                              let n = await (0, f.Xv)(e, t, I.length);
                                              k((e) => [...e, n]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.Z, {
                                  ref: (e) => {
                                      T.current.thumbnail = e;
                                  },
                                  onChange: (e) => F(f.cq.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.Z, {
                                  ref: (e) => {
                                      T.current.static = e;
                                  },
                                  onChange: (e) => F(f.cq.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.Z, {
                                  ref: (e) => {
                                      T.current.reducedMotion = e;
                                  },
                                  onChange: (e) => F(f.cq.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: b.grid,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: l()(b.col, b.preview),
                                  children: [
                                      (0, a.jsx)("img", {
                                          src: O ? g : v,
                                          alt: "",
                                          width: 450,
                                      }),
                                      S && (0, a.jsx)(x.Z, { config: U }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: b.col,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: l()(b.col, b.section),
                                          children: [
                                              (0, a.jsx)(c.Text, {
                                                  variant: "text-md/normal",
                                                  children: "Profile Effect Name",
                                              }),
                                              (0, a.jsx)("input", {
                                                  type: "text",
                                                  value: D,
                                                  className: b.input,
                                                  onChange: (e) => {
                                                      L(e.target.value);
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: b.grid,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: b.row,
                                                  children: [
                                                      (0, a.jsx)(c.Text, {
                                                          variant: "text-md/normal",
                                                          children: "Dark Theme",
                                                      }),
                                                      (0, a.jsx)("input", {
                                                          type: "checkbox",
                                                          checked: O,
                                                          className: b.checkBox,
                                                          onChange: () => {
                                                              N(!O);
                                                          },
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: b.row,
                                                  children: [
                                                      (0, a.jsx)(c.Text, {
                                                          variant: "text-md/normal",
                                                          children: "Show User Profile",
                                                      }),
                                                      (0, a.jsx)("input", {
                                                          type: "checkbox",
                                                          checked: P,
                                                          className: b.checkBox,
                                                          onChange: () => {
                                                              w(!P);
                                                          },
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: b.row,
                                          children: [
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => {
                                                      var e;
                                                      return null == (e = T.current.animated)
                                                          ? void 0
                                                          : e.activateUploadDialogue();
                                                  },
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: b.row,
                                          children: [
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => {
                                                      var e;
                                                      return null == (e = T.current.thumbnail)
                                                          ? void 0
                                                          : e.activateUploadDialogue();
                                                  },
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => {
                                                      var e;
                                                      return null == (e = T.current.static)
                                                          ? void 0
                                                          : e.activateUploadDialogue();
                                                  },
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => {
                                                      var e;
                                                      return null == (e = T.current.reducedMotion)
                                                          ? void 0
                                                          : e.activateUploadDialogue();
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)("div", {
                                          className: b.bottomControls,
                                          children: (0, a.jsx)("div", {
                                              className: b.row,
                                              children: (0, a.jsx)(c.Button, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      E(!1), setTimeout(() => E(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: l()(b.bottomControls, b.shareSection),
                                          children: [
                                              (0, a.jsx)(c.Text, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: b.row,
                                                  children: [
                                                      (0, a.jsx)(d.Z, {
                                                          fileContents: () => (0, f.yR)(t.name, I),
                                                          contentType: "text/plain",
                                                          fileName: "".concat(M, "_timing_config.txt"),
                                                          children: (0, a.jsx)(c.Button, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, a.jsx)(d.Z, {
                                                          fileContents: () =>
                                                              JSON.stringify(
                                                                  y(j({}, t), {
                                                                      name: D,
                                                                      readonly: !1,
                                                                      config: y(j({}, t.config), {
                                                                          effects: I,
                                                                          stillFrames: R,
                                                                      }),
                                                                  }),
                                                              ),
                                                          contentType: "text/plain",
                                                          fileName: "".concat(M, "_config.txt"),
                                                          children: (0, a.jsx)(c.Button, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Full Config",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: b.section,
                                          children: [
                                              (0, a.jsx)(c.Heading, {
                                                  variant: "heading-lg/bold",
                                                  children: "Still Frames",
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: b.stillFramesContainer,
                                                  children: Object.entries(R).map((e) => {
                                                      let [t, n] = e;
                                                      return (0, a.jsxs)(
                                                          "div",
                                                          {
                                                              className: b.stillFramePreviewContainer,
                                                              children: [
                                                                  (0, a.jsx)(c.Heading, {
                                                                      variant: "heading-sm/bold",
                                                                      children: t,
                                                                  }),
                                                                  (0, a.jsx)("img", {
                                                                      src: null == n ? void 0 : n.src,
                                                                      className: b.stillFramePreview,
                                                                      alt: "",
                                                                  }),
                                                                  null != n &&
                                                                      (0, a.jsx)(c.Button, {
                                                                          variant: "critical-secondary",
                                                                          size: "sm",
                                                                          text: "Clear",
                                                                          onClick: () => {
                                                                              A((e) => y(j({}, e), { [t]: null }));
                                                                          },
                                                                      }),
                                                              ],
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      I.some((e) => {
                                          var t;
                                          return (null != (t = e.randomizedSources) ? t : []).length > 0;
                                      }) &&
                                          (0, a.jsxs)("div", {
                                              className: l()(b.section, b.randomizedRules),
                                              children: [
                                                  (0, a.jsx)(c.Text, {
                                                      variant: "text-md/bold",
                                                      children: "Rules of Randomized Effects",
                                                  }),
                                                  (0, a.jsxs)("ol", {
                                                      children: [
                                                          (0, a.jsx)("li", {
                                                              children:
                                                                  "When an effect has randomization, all layers with random options must have the same number of options.",
                                                          }),
                                                          (0, a.jsx)("li", {
                                                              children:
                                                                  "The duration for the random options of a layer must be the same",
                                                          }),
                                                          (0, a.jsx)("li", {
                                                              children:
                                                                  "If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)",
                                                          }),
                                                          (0, a.jsx)("li", {
                                                              children:
                                                                  'Click "Replay Animation" to "reroll" the randomization',
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      (0, a.jsx)("div", {
                                          children:
                                              P &&
                                              (0, a.jsxs)("div", {
                                                  className: l()(b.userProfilePreview, b.preview),
                                                  children: [
                                                      (0, a.jsx)(m.Z, {
                                                          user: i,
                                                          pendingAvatar: void 0,
                                                          pendingProfileEffect: null,
                                                          canUsePremiumCustomization: !0,
                                                          isTryItOut: !0,
                                                      }),
                                                      (0, a.jsx)(x.Z, { config: U }),
                                                  ],
                                              }),
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: l()(b.grid, b.layers),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: b.dangerControls,
                                          children: (0, a.jsx)(c.Button, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  k([]), A(C);
                                              },
                                          }),
                                      }),
                                      I.map((e, t) =>
                                          (0, a.jsxs)(
                                              "div",
                                              {
                                                  className: b.layerForm,
                                                  children: [
                                                      (0, a.jsxs)("div", {
                                                          className: b.layerPreviewContainer,
                                                          children: [
                                                              (0, a.jsx)(c.Heading, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, a.jsx)("img", {
                                                                  src: e.src,
                                                                  className: b.layerPreview,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, a.jsxs)(a.Fragment, {
                                                                      children: [
                                                                          (0, a.jsx)(c.Heading, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) => {
                                                                              var n;
                                                                              return (0, a.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, a.jsx)(c.Heading, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, a.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: b.layerPreview,
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
                                                      (0, a.jsxs)("div", {
                                                          className: l()(b.grid, b.section),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: b.col,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: b.input,
                                                                          onChange: (e) => {
                                                                              k((n) => {
                                                                                  let a = [...n],
                                                                                      r = n[t];
                                                                                  return (
                                                                                      (r.start = +e.target.value),
                                                                                      (a[t] = r),
                                                                                      a
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, a.jsxs)("div", {
                                                                  className: b.col,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: b.input,
                                                                          onChange: (e) => {
                                                                              k((n) => {
                                                                                  let a = [...n],
                                                                                      r = n[t];
                                                                                  return (
                                                                                      (r.duration = +e.target.value),
                                                                                      (a[t] = r),
                                                                                      a
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                          className: l()(b.grid, b.section),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: b.col,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: b.checkBox,
                                                                          onChange: (e) => {
                                                                              k((n) => {
                                                                                  let a = [...n],
                                                                                      r = n[t];
                                                                                  return (
                                                                                      (r.loop = e.target.checked),
                                                                                      (a[t] = r),
                                                                                      a
                                                                                  );
                                                                              });
                                                                          },
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, a.jsx)("div", {
                                                                  className: b.col,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, a.jsxs)(a.Fragment, {
                                                                          children: [
                                                                              (0, a.jsx)(c.Text, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, a.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: b.input,
                                                                                  onChange: (e) => {
                                                                                      k((n) => {
                                                                                          let a = [...n],
                                                                                              r = n[t];
                                                                                          return (
                                                                                              (r.loopDelay =
                                                                                                  +e.target.value),
                                                                                              (a[t] = r),
                                                                                              a
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
                                                      (0, a.jsx)("div", {
                                                          style: { display: "none" },
                                                          children: (0, a.jsx)(u.Z, {
                                                              ref: (e) => {
                                                                  T.current["randomized-".concat(t)] = e;
                                                              },
                                                              onChange: (e) =>
                                                                  ((e, t) => {
                                                                      let n = B(e);
                                                                      null != n &&
                                                                          (0, f.i0)(n, (e) => {
                                                                              k((a) => {
                                                                                  let r = [...a],
                                                                                      i = a[t];
                                                                                  if (null == i) return a;
                                                                                  let l = j({}, i);
                                                                                  return (
                                                                                      null == l.randomizedSources &&
                                                                                          (l.randomizedSources = []),
                                                                                      l.randomizedSources.push({
                                                                                          src: e,
                                                                                          filename: n.name,
                                                                                      }),
                                                                                      (r[t] = l),
                                                                                      r
                                                                                  );
                                                                              });
                                                                          });
                                                                  })(e, t),
                                                              multiple: !1,
                                                          }),
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                          className: l()(b.row, b.end),
                                                          children: [
                                                              (0, a.jsx)(c.Button, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () => {
                                                                      var e;
                                                                      return null ==
                                                                          (e = T.current["randomized-".concat(t)])
                                                                          ? void 0
                                                                          : e.activateUploadDialogue();
                                                                  },
                                                              }),
                                                              (0, a.jsx)(c.Button, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      k((t) => t.filter((t) => t !== e));
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
                  ],
              });
    };
