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
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(480210),
    o = n(442837),
    c = n(481060),
    d = n(23645),
    u = n(53281),
    m = n(678135),
    p = n(594174),
    h = n(373071),
    x = n(489495),
    g = n(189),
    f = n(664046),
    b = n(346537),
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
function _(e, t) {
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
let y = {
        [x.cq.THUMBNAIL]: null,
        [x.cq.STATIC]: null,
        [x.cq.REDUCED_MOTION]: null,
    },
    C = "debug",
    S = (e) => {
        let { effect: t } = e,
            { upsertConfig: n } = (0, h.n6)(),
            r = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
            [S, E] = l.useState(!0),
            O = l.useRef({}),
            [T, N] = l.useState(!1),
            [P, I] = l.useState(!1),
            [w, k] = l.useState([]),
            [R, A] = l.useState(y),
            Z = l.useRef([]),
            [D, L] = l.useState(t.name),
            M = D.toLowerCase().replace(/\s+/g, "_"),
            U = l.useMemo(
                () => ({
                    id: C,
                    skuId: C,
                    title: C,
                    description: C,
                    accessibilityLabel: C,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: w,
                    animationType: s.y.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [w],
            ),
            F = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            B = (e, t) => {
                let n = F(t);
                null != n &&
                    (0, x.i0)(n, (t) => {
                        A((a) => _(j({}, a), { [e]: (0, x.z)(t, n) }));
                    });
            };
        l.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 &&
                k(
                    [...e].map((e) => {
                        if (null != e.base64) {
                            let t = (0, x.$j)(e.base64);
                            (e.src = t), Z.current.push(t);
                        }
                        return e;
                    }),
                );
        }, [t.config.effects]),
            l.useEffect(() => {
                let e = t.config.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, n] = e;
                        if (null != n) {
                            let e = (0, x.$j)(n.base64);
                            (n.src = e), Z.current.push(e), A((e) => _(j({}, e), { [t]: n }));
                        }
                    });
            }, [t.config.stillFrames]);
        let G = {
                effect: t,
                upsertConfig: n,
            },
            z = l.useRef(G);
        return (l.useEffect(() => {
            z.current = G;
        }),
        l.useEffect(() => {
            let { effect: e, upsertConfig: t } = z.current;
            e.readonly ||
                t({
                    skuId: e.skuId,
                    name: D,
                    config: {
                        effects: w,
                        stillFrames: R,
                    },
                });
        }, [w, R, D]),
        l.useEffect(
            () => () => {
                Z.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (Z.current = []);
            },
            [],
        ),
        null == r)
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                  className: f.root,
                  children: [
                      (0, a.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, a.jsx)(u.Z, {
                                  ref: (e) => {
                                      O.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = F(e);
                                      null != t &&
                                          (0, x.i0)(t, async (e) => {
                                              let n = await (0, x.Xv)(e, t, w.length);
                                              k((e) => [...e, n]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.Z, {
                                  ref: (e) => {
                                      O.current.thumbnail = e;
                                  },
                                  onChange: (e) => B(x.cq.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.Z, {
                                  ref: (e) => {
                                      O.current.static = e;
                                  },
                                  onChange: (e) => B(x.cq.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.Z, {
                                  ref: (e) => {
                                      O.current.reducedMotion = e;
                                  },
                                  onChange: (e) => B(x.cq.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: f.grid,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: i()(f.col, f.preview),
                                  children: [
                                      (0, a.jsx)("img", {
                                          src: T ? b : v,
                                          alt: "",
                                          width: 450,
                                      }),
                                      S && (0, a.jsx)(g.Z, { config: U }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: f.col,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: i()(f.col, f.section),
                                          children: [
                                              (0, a.jsx)(c.Text, {
                                                  variant: "text-md/normal",
                                                  children: "Profile Effect Name",
                                              }),
                                              (0, a.jsx)("input", {
                                                  type: "text",
                                                  value: D,
                                                  className: f.input,
                                                  onChange: (e) => {
                                                      L(e.target.value);
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: f.grid,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: f.row,
                                                  children: [
                                                      (0, a.jsx)(c.Text, {
                                                          variant: "text-md/normal",
                                                          children: "Dark Theme",
                                                      }),
                                                      (0, a.jsx)("input", {
                                                          type: "checkbox",
                                                          checked: T,
                                                          className: f.checkBox,
                                                          onChange: () => {
                                                              N(!T);
                                                          },
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: f.row,
                                                  children: [
                                                      (0, a.jsx)(c.Text, {
                                                          variant: "text-md/normal",
                                                          children: "Show User Profile",
                                                      }),
                                                      (0, a.jsx)("input", {
                                                          type: "checkbox",
                                                          checked: P,
                                                          className: f.checkBox,
                                                          onChange: () => {
                                                              I(!P);
                                                          },
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: f.row,
                                          children: [
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => {
                                                      var e;
                                                      return null == (e = O.current.animated)
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
                                          className: f.row,
                                          children: [
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => {
                                                      var e;
                                                      return null == (e = O.current.thumbnail)
                                                          ? void 0
                                                          : e.activateUploadDialogue();
                                                  },
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => {
                                                      var e;
                                                      return null == (e = O.current.static)
                                                          ? void 0
                                                          : e.activateUploadDialogue();
                                                  },
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => {
                                                      var e;
                                                      return null == (e = O.current.reducedMotion)
                                                          ? void 0
                                                          : e.activateUploadDialogue();
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)("div", {
                                          className: f.bottomControls,
                                          children: (0, a.jsx)("div", {
                                              className: f.row,
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
                                          className: i()(f.bottomControls, f.shareSection),
                                          children: [
                                              (0, a.jsx)(c.Text, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  variant: "text-sm/bold",
                                                  color: "text-danger",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: f.row,
                                                  children: [
                                                      (0, a.jsx)(d.Z, {
                                                          fileContents: () => (0, x.yR)(t.name, w),
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
                                                                  _(j({}, t), {
                                                                      name: D,
                                                                      config: _(j({}, t.config), {
                                                                          effects: w,
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
                                          className: f.section,
                                          children: [
                                              (0, a.jsx)(c.Heading, {
                                                  variant: "heading-lg/bold",
                                                  children: "Still Frames",
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: f.stillFramesContainer,
                                                  children: Object.entries(R).map((e) => {
                                                      let [t, n] = e;
                                                      return (0, a.jsxs)(
                                                          "div",
                                                          {
                                                              className: f.stillFramePreviewContainer,
                                                              children: [
                                                                  (0, a.jsx)(c.Heading, {
                                                                      variant: "heading-sm/bold",
                                                                      children: t,
                                                                  }),
                                                                  (0, a.jsx)("img", {
                                                                      src: null == n ? void 0 : n.src,
                                                                      className: f.stillFramePreview,
                                                                      alt: "",
                                                                  }),
                                                                  null != n &&
                                                                      (0, a.jsx)(c.Button, {
                                                                          variant: "critical-secondary",
                                                                          size: "sm",
                                                                          text: "Clear",
                                                                          onClick: () => {
                                                                              A((e) => _(j({}, e), { [t]: null }));
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
                                      w.some((e) => {
                                          var t;
                                          return (null != (t = e.randomizedSources) ? t : []).length > 0;
                                      }) &&
                                          (0, a.jsxs)("div", {
                                              className: i()(f.section, f.randomizedRules),
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
                                                  className: i()(f.userProfilePreview, f.preview),
                                                  children: [
                                                      (0, a.jsx)(m.Z, {
                                                          user: r,
                                                          pendingAvatar: void 0,
                                                          pendingProfileEffect: null,
                                                          canUsePremiumCustomization: !0,
                                                          isTryItOut: !0,
                                                      }),
                                                      (0, a.jsx)(g.Z, { config: U }),
                                                  ],
                                              }),
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: i()(f.grid, f.layers),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: f.dangerControls,
                                          children: (0, a.jsx)(c.Button, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  k([]), A(y);
                                              },
                                          }),
                                      }),
                                      w.map((e, t) =>
                                          (0, a.jsxs)(
                                              "div",
                                              {
                                                  className: f.layerForm,
                                                  children: [
                                                      (0, a.jsxs)("div", {
                                                          className: f.layerPreviewContainer,
                                                          children: [
                                                              (0, a.jsx)(c.Heading, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, a.jsx)("img", {
                                                                  src: e.src,
                                                                  className: f.layerPreview,
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
                                                                                              className: f.layerPreview,
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
                                                          className: i()(f.grid, f.section),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: f.col,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: f.input,
                                                                          onChange: (e) => {
                                                                              k((n) => {
                                                                                  let a = [...n],
                                                                                      l = n[t];
                                                                                  return (
                                                                                      (l.start = +e.target.value),
                                                                                      (a[t] = l),
                                                                                      a
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, a.jsxs)("div", {
                                                                  className: f.col,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: f.input,
                                                                          onChange: (e) => {
                                                                              k((n) => {
                                                                                  let a = [...n],
                                                                                      l = n[t];
                                                                                  return (
                                                                                      (l.duration = +e.target.value),
                                                                                      (a[t] = l),
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
                                                          className: i()(f.grid, f.section),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: f.col,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: f.checkBox,
                                                                          onChange: (e) => {
                                                                              k((n) => {
                                                                                  let a = [...n],
                                                                                      l = n[t];
                                                                                  return (
                                                                                      (l.loop = e.target.checked),
                                                                                      (a[t] = l),
                                                                                      a
                                                                                  );
                                                                              });
                                                                          },
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, a.jsx)("div", {
                                                                  className: f.col,
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
                                                                                  className: f.input,
                                                                                  onChange: (e) => {
                                                                                      k((n) => {
                                                                                          let a = [...n],
                                                                                              l = n[t];
                                                                                          return (
                                                                                              (l.loopDelay =
                                                                                                  +e.target.value),
                                                                                              (a[t] = l),
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
                                                                  O.current["randomized-".concat(t)] = e;
                                                              },
                                                              onChange: (e) =>
                                                                  ((e, t) => {
                                                                      let n = F(e);
                                                                      null != n &&
                                                                          (0, x.i0)(n, (e) => {
                                                                              k((a) => {
                                                                                  let l = [...a],
                                                                                      r = a[t];
                                                                                  if (null == r) return a;
                                                                                  let i = j({}, r);
                                                                                  return (
                                                                                      null == i.randomizedSources &&
                                                                                          (i.randomizedSources = []),
                                                                                      i.randomizedSources.push({
                                                                                          src: e,
                                                                                          filename: n.name,
                                                                                      }),
                                                                                      (l[t] = i),
                                                                                      l
                                                                                  );
                                                                              });
                                                                          });
                                                                  })(e, t),
                                                              multiple: !1,
                                                          }),
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                          className: i()(f.row, f.end),
                                                          children: [
                                                              (0, a.jsx)(c.Button, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () => {
                                                                      var e;
                                                                      return null ==
                                                                          (e = O.current["randomized-".concat(t)])
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
