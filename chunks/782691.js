n.d(t, { Z: () => P }),
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
    b = n(189),
    x = n(75266),
    g = n(346537),
    v = n(830318),
    j = n(678718),
    y = n(405733);
function C(e) {
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
let S = {
        [f.cq.THUMBNAIL]: null,
        [f.cq.STATIC]: null,
        [f.cq.REDUCED_MOTION]: null,
    },
    E = "debug",
    T = "reduced-motion-preview-modal",
    O = (e) => {
        let { transitionState: t, onClose: n, frameSrc: r, placeholderSrc: i } = e;
        return (0, a.jsx)(c.Y0X, {
            transitionState: t,
            size: c.CgR.MEDIUM,
            parentComponent: "ReducedMotionPreviewModal",
            children: (0, a.jsxs)(c.hzk, {
                className: x.reducedMotionModalContent,
                children: [
                    (0, a.jsx)("div", {
                        className: x.reducedMotionModalCloseButton,
                        children: (0, a.jsx)(c.hU, {
                            "aria-label": "Close",
                            onClick: n,
                            icon: c.Uz9,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: x.reducedMotionModalWrapper,
                        children: [
                            (0, a.jsx)("img", {
                                src: i,
                                alt: "",
                                className: x.reducedMotionModalPlaceholder,
                                "aria-hidden": !0,
                            }),
                            null != r &&
                                "" !== r &&
                                (0, a.jsx)("img", {
                                    src: r,
                                    className: x.reducedMotionModalFrame,
                                    alt: "Reduced motion preview",
                                }),
                        ],
                    }),
                ],
            }),
        });
    },
    N = (e) => {
        let { type: t, frame: n, showDarkTheme: r, onClear: i } = e,
            s = t === f.cq.REDUCED_MOTION,
            o = s ? (r ? j : y) : r ? g : v,
            d = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("img", {
                        src: o,
                        alt: "",
                        className: x.stillFramePlaceholder,
                        "aria-hidden": !0,
                    }),
                    (null == n ? void 0 : n.src) != null &&
                        "" !== n.src &&
                        (0, a.jsx)("img", {
                            src: n.src,
                            className: x.stillFramePreview,
                            alt: "",
                        }),
                ],
            });
        return (0, a.jsxs)("div", {
            className: x.stillFramePreviewContainer,
            children: [
                (0, a.jsx)(c.Heading, {
                    variant: "heading-sm/bold",
                    children: t,
                }),
                s
                    ? (0, a.jsx)(c.P3F, {
                          className: l()(x.stillFramePreviewWrapper, x.stillFramePreviewClickable),
                          onClick: () => {
                              (0, c.nfh)(T)
                                  ? (0, c.Mr3)(T)
                                  : (0, c.ZDy)(
                                        () =>
                                            Promise.resolve((e) => {
                                                var t;
                                                return (0, a.jsx)(
                                                    O,
                                                    _(C({}, e), {
                                                        frameSrc: null != (t = null == n ? void 0 : n.src) ? t : null,
                                                        placeholderSrc: o,
                                                    }),
                                                );
                                            }),
                                        {
                                            modalKey: T,
                                            onCloseRequest: () => (0, c.Mr3)(T),
                                        },
                                    );
                          },
                          children: d,
                      })
                    : (0, a.jsx)("div", {
                          className: x.stillFramePreviewWrapper,
                          children: d,
                      }),
                null != n &&
                    (0, a.jsx)(c.Button, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: "Clear",
                        onClick: i,
                    }),
            ],
        });
    },
    P = (e) => {
        let { effect: t } = e,
            { upsertConfig: n } = (0, h.n6)(),
            i = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
            [j, y] = r.useState(!0),
            T = r.useRef({}),
            [O, P] = r.useState(!1),
            [w, I] = r.useState(!1),
            [k, R] = r.useState([]),
            [A, Z] = r.useState(S),
            D = r.useRef([]),
            [M, L] = r.useState(t.name),
            U = M.toLowerCase().replace(/\s+/g, "_"),
            B = r.useMemo(
                () => ({
                    id: E,
                    skuId: E,
                    title: E,
                    description: E,
                    accessibilityLabel: E,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: k,
                    animationType: s.y.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [k],
            ),
            F = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            G = (e, t) => {
                let n = F(t);
                null != n &&
                    (0, f.i0)(n, (t) => {
                        Z((a) => _(C({}, a), { [e]: (0, f.z)(t, n) }));
                    });
            };
        r.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 && R(e);
        }, [t.config.effects]),
            r.useEffect(() => {
                let e = t.config.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, n] = e;
                        if (null != n) {
                            if ("" !== n.src && null != n.src && ("" === n.base64 || null == n.base64))
                                Z((e) => _(C({}, e), { [t]: n }));
                            else if ("" !== n.base64 && null != n.base64) {
                                let e = (0, f.$j)(n.base64);
                                (n.src = e), D.current.push(e), Z((e) => _(C({}, e), { [t]: n }));
                            }
                        }
                    });
            }, [t.config.stillFrames]);
        let V = {
                effect: t,
                upsertConfig: n,
            },
            W = r.useRef(V);
        return (r.useEffect(() => {
            W.current = V;
        }),
        r.useEffect(() => {
            let { effect: e, upsertConfig: t } = W.current;
            e.readonly ||
                t({
                    skuId: e.skuId,
                    name: M,
                    config: {
                        effects: k,
                        stillFrames: A,
                    },
                });
        }, [k, A, M]),
        r.useEffect(
            () => () => {
                D.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (D.current = []);
            },
            [],
        ),
        null == i)
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                  className: x.root,
                  children: [
                      (0, a.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, a.jsx)(u.Z, {
                                  ref: (e) => {
                                      T.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = F(e);
                                      null != t &&
                                          (0, f.i0)(t, async (e) => {
                                              let n = await (0, f.Xv)(e, t, k.length);
                                              R((e) => [...e, n]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.Z, {
                                  ref: (e) => {
                                      T.current.thumbnail = e;
                                  },
                                  onChange: (e) => G(f.cq.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.Z, {
                                  ref: (e) => {
                                      T.current.static = e;
                                  },
                                  onChange: (e) => G(f.cq.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.Z, {
                                  ref: (e) => {
                                      T.current.reducedMotion = e;
                                  },
                                  onChange: (e) => G(f.cq.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: x.grid,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: l()(x.col, x.preview),
                                  children: [
                                      (0, a.jsx)("img", {
                                          src: O ? g : v,
                                          alt: "",
                                          width: 450,
                                      }),
                                      j &&
                                          (0, a.jsx)("div", {
                                              className: x.profileEffectPreviewContent,
                                              children: (0, a.jsx)(b.Z, { config: B }),
                                          }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: x.col,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: l()(x.col, x.section),
                                          children: [
                                              (0, a.jsx)(c.Text, {
                                                  variant: "text-md/normal",
                                                  children: "Profile Effect Name",
                                              }),
                                              (0, a.jsx)("input", {
                                                  type: "text",
                                                  value: M,
                                                  className: x.input,
                                                  onChange: (e) => {
                                                      L(e.target.value);
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: x.grid,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: x.row,
                                                  children: [
                                                      (0, a.jsx)(c.Text, {
                                                          variant: "text-md/normal",
                                                          children: "Dark Theme",
                                                      }),
                                                      (0, a.jsx)("input", {
                                                          type: "checkbox",
                                                          checked: O,
                                                          className: x.checkBox,
                                                          onChange: () => {
                                                              P(!O);
                                                          },
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: x.row,
                                                  children: [
                                                      (0, a.jsx)(c.Text, {
                                                          variant: "text-md/normal",
                                                          children: "Show User Profile",
                                                      }),
                                                      (0, a.jsx)("input", {
                                                          type: "checkbox",
                                                          checked: w,
                                                          className: x.checkBox,
                                                          onChange: () => {
                                                              I(!w);
                                                          },
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: x.row,
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
                                          className: x.row,
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
                                          className: x.bottomControls,
                                          children: (0, a.jsx)("div", {
                                              className: x.row,
                                              children: (0, a.jsx)(c.Button, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      y(!1), setTimeout(() => y(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: l()(x.bottomControls, x.shareSection),
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
                                                  className: x.row,
                                                  children: [
                                                      (0, a.jsx)(d.Z, {
                                                          fileContents: () => (0, f.yR)(t.name, k),
                                                          contentType: "text/plain",
                                                          fileName: "".concat(U, "_timing_config.txt"),
                                                          children: (0, a.jsx)(c.Button, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, a.jsx)(d.Z, {
                                                          fileContents: () =>
                                                              JSON.stringify(
                                                                  _(C({}, t), {
                                                                      name: M,
                                                                      readonly: !1,
                                                                      config: _(C({}, t.config), {
                                                                          effects: k,
                                                                          stillFrames: A,
                                                                      }),
                                                                  }),
                                                              ),
                                                          contentType: "text/plain",
                                                          fileName: "".concat(U, "_config.txt"),
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
                                          className: x.section,
                                          children: [
                                              (0, a.jsx)(c.Heading, {
                                                  variant: "heading-lg/bold",
                                                  children: "Still Frames",
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: x.stillFramesContainer,
                                                  children: Object.entries(A).map((e) => {
                                                      let [t, n] = e;
                                                      return (0, a.jsx)(
                                                          N,
                                                          {
                                                              type: t,
                                                              frame: n,
                                                              showDarkTheme: O,
                                                              onClear: () => {
                                                                  Z((e) => _(C({}, e), { [t]: null }));
                                                              },
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      k.some((e) => {
                                          var t;
                                          return (null != (t = e.randomizedSources) ? t : []).length > 0;
                                      }) &&
                                          (0, a.jsxs)("div", {
                                              className: l()(x.section, x.randomizedRules),
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
                                              w &&
                                              (0, a.jsxs)("div", {
                                                  className: l()(x.userProfilePreview, x.preview),
                                                  children: [
                                                      (0, a.jsx)(m.Z, {
                                                          user: i,
                                                          pendingAvatar: void 0,
                                                          pendingProfileEffect: null,
                                                          canUsePremiumCustomization: !0,
                                                          isTryItOut: !0,
                                                      }),
                                                      (0, a.jsx)(b.Z, { config: B }),
                                                  ],
                                              }),
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: l()(x.grid, x.layers),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: x.dangerControls,
                                          children: (0, a.jsx)(c.Button, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  R([]), Z(S);
                                              },
                                          }),
                                      }),
                                      k.map((e, t) =>
                                          (0, a.jsxs)(
                                              "div",
                                              {
                                                  className: x.layerForm,
                                                  children: [
                                                      (0, a.jsxs)("div", {
                                                          className: x.layerPreviewContainer,
                                                          children: [
                                                              (0, a.jsx)(c.Heading, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, a.jsx)("img", {
                                                                  src: e.src,
                                                                  className: x.layerPreview,
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
                                                                                              className: x.layerPreview,
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
                                                          className: l()(x.grid, x.section),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: x.col,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: x.input,
                                                                          onChange: (e) => {
                                                                              R((n) => {
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
                                                                  className: x.col,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: x.input,
                                                                          onChange: (e) => {
                                                                              R((n) => {
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
                                                          className: l()(x.grid, x.section),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: x.col,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: x.checkBox,
                                                                          onChange: (e) => {
                                                                              R((n) => {
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
                                                                  className: x.col,
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
                                                                                  className: x.input,
                                                                                  onChange: (e) => {
                                                                                      R((n) => {
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
                                                                      let n = F(e);
                                                                      null != n &&
                                                                          (0, f.i0)(n, (e) => {
                                                                              R((a) => {
                                                                                  let r = [...a],
                                                                                      i = a[t];
                                                                                  if (null == i) return a;
                                                                                  let l = C({}, i);
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
                                                          className: l()(x.row, x.end),
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
                                                                      R((t) => t.filter((t) => t !== e));
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
