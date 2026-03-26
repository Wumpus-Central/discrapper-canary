n.d(t, { A: () => E }), n(321073), n(323874), n(14289), n(35956);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(854284),
    o = n(311907),
    d = n(732955),
    c = n(397927),
    u = n(900686),
    m = n(817363),
    h = n(287070),
    x = n(239606),
    p = n(287809),
    g = n(816866),
    _ = n(87558),
    f = n(643084),
    v = n(525221),
    b = n(778765),
    j = n(73269);
let A = { [_.qH.THUMBNAIL]: null, [_.qH.STATIC]: null, [_.qH.REDUCED_MOTION]: null },
    C = "debug",
    y = "reduced-motion-preview-modal",
    T = (e) => {
        let { transitionState: t, onClose: n, frameSrc: i, theme: s } = e;
        return (0, a.jsx)(d.dWK, {
            transitionState: t,
            size: "md",
            onClose: n,
            maxHeight: "viewport",
            children: (0, a.jsxs)("div", {
                className: v.Xd,
                children: [
                    (0, a.jsx)("div", {
                        className: v.y6,
                        children: (0, a.jsx)(c.K0, {
                            "aria-label": "Close",
                            onClick: n,
                            icon: c.d$L,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: v.rU,
                        children: [
                            (0, a.jsx)(c.NPJ, {
                                theme: s,
                                children: (e) =>
                                    (0, a.jsx)("img", {
                                        src: j.A,
                                        alt: "",
                                        className: l()(v.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != i &&
                                "" !== i &&
                                (0, a.jsx)("img", { src: i, className: v.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    S = (e) => {
        let { type: t, frame: n, theme: i, onClear: s } = e,
            r = t === _.qH.REDUCED_MOTION,
            o = r ? j.A : b.A,
            d = (0, a.jsx)(c.NPJ, {
                theme: i,
                children: (e) =>
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("img", { src: o, alt: "", className: l()(v.aM, e), "aria-hidden": !0 }),
                            n?.src != null &&
                                "" !== n.src &&
                                (0, a.jsx)("img", { src: n.src, className: l()(v.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, a.jsxs)("div", {
            className: v.pK,
            children: [
                (0, a.jsx)(c.Heading, { variant: "heading-sm/bold", children: t }),
                r
                    ? (0, a.jsx)(c.DUT, {
                          className: l()(v.zd, v.eB),
                          onClick: () => {
                              (0, c.kBI)(y)
                                  ? (0, c.OoC)(y)
                                  : (0, c.mMO)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, a.jsx)(T, { ...e, frameSrc: n?.src ?? null, theme: i }),
                                            ),
                                        { modalKey: y, onCloseRequest: () => (0, c.OoC)(y) },
                                    );
                          },
                          children: d,
                      })
                    : (0, a.jsx)("div", { className: v.zd, children: d }),
                null != n &&
                    (0, a.jsx)(c.Button, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: s }),
            ],
        });
    },
    E = (e) => {
        let { effect: t } = e,
            { upsertConfig: n } = (0, g.wu)(),
            s = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
            [d, j] = i.useState(!0),
            y = i.useRef({}),
            [T, E] = i.useState(!1),
            [N, I] = i.useState(!1),
            [k, O] = i.useState(8),
            [R, w] = i.useState([]),
            [D, P] = i.useState(A),
            M = i.useRef([]),
            [L, U] = i.useState(t.name),
            B = L.toLowerCase().replace(/\s+/g, "_"),
            G = i.useMemo(
                () => ({
                    id: C,
                    skuId: C,
                    title: C,
                    description: C,
                    accessibilityLabel: C,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: R,
                    animationType: r.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [R],
            ),
            F = T ? c.LU0.themes.DARKER : c.LU0.themes.LIGHT,
            V = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            W = (e, t) => {
                let n = V(t);
                null != n &&
                    (0, _.Mz)(n, (t) => {
                        P((a) => ({ ...a, [e]: (0, _.GT)(t, n) }));
                    });
            };
        i.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 && w(e);
        }, [t.config.effects]),
            i.useEffect(() => {
                let e = t.config.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, n] = e;
                        if (null != n) {
                            if ("" !== n.src && null != n.src && ("" === n.base64 || null == n.base64))
                                P((e) => ({ ...e, [t]: n }));
                            else if ("" !== n.base64 && null != n.base64) {
                                let e = (0, _.fB)(n.base64);
                                (n.src = e), M.current.push(e), P((e) => ({ ...e, [t]: n }));
                            }
                        }
                    });
            }, [t.config.stillFrames]);
        let H = { effect: t, upsertConfig: n },
            K = i.useRef(H);
        return (i.useEffect(() => {
            K.current = H;
        }),
        i.useEffect(() => {
            let { effect: e, upsertConfig: t } = K.current;
            e.readonly || t({ skuId: e.skuId, name: L, config: { effects: R, stillFrames: D } });
        }, [R, D, L]),
        i.useEffect(
            () => () => {
                M.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (M.current = []);
            },
            [],
        ),
        null == s)
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                  className: v.zr,
                  children: [
                      (0, a.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, a.jsx)(m.A, {
                                  ref: (e) => {
                                      y.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = V(e);
                                      null != t &&
                                          (0, _.Mz)(t, async (e) => {
                                              let n = await (0, _.Ay)(e, t, R.length);
                                              w((e) => [...e, n]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, a.jsx)(m.A, {
                                  ref: (e) => {
                                      y.current.thumbnail = e;
                                  },
                                  onChange: (e) => W(_.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(m.A, {
                                  ref: (e) => {
                                      y.current.static = e;
                                  },
                                  onChange: (e) => W(_.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(m.A, {
                                  ref: (e) => {
                                      y.current.reducedMotion = e;
                                  },
                                  onChange: (e) => W(_.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: v.Vg,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: l()(v.nM, v.uW),
                                  children: [
                                      (0, a.jsx)(c.Text, {
                                          variant: "text-md/normal",
                                          children: "Profile Effect Name",
                                      }),
                                      (0, a.jsx)("input", {
                                          type: "text",
                                          value: L,
                                          className: v.hF,
                                          onChange: (e) => {
                                              U(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: v.nM,
                                  children: [
                                      (0, a.jsx)(c.Text, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, a.jsx)("input", {
                                          type: "checkbox",
                                          checked: T,
                                          className: v.OO,
                                          onChange: () => {
                                              E(!T);
                                          },
                                      }),
                                      (0, a.jsx)(c.Text, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, a.jsx)("input", {
                                          type: "checkbox",
                                          checked: N,
                                          className: v.OO,
                                          onChange: () => {
                                              I(!N);
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: v.nM,
                                  children: [
                                      (0, a.jsx)(c.Text, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, a.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: k,
                                          onChange: (e) => O(+e.target.value),
                                      }),
                                      (0, a.jsxs)(c.Text, { variant: "text-sm/normal", children: [k, "px"] }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: l()(v.nz, v.VH),
                                  style: { borderRadius: k },
                                  children: [
                                      N
                                          ? (0, a.jsx)("div", {
                                                className: v.jq,
                                                children: (0, a.jsx)(x.A, {
                                                    user: s,
                                                    currentUser: s,
                                                    transitionState: c.ip4.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: v.JB,
                                                }),
                                            })
                                          : (0, a.jsx)(c.NPJ, {
                                                theme: F,
                                                children: (e) =>
                                                    (0, a.jsx)("div", {
                                                        className: l()(v.aM, e),
                                                        children: (0, a.jsx)("img", { src: b.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      d &&
                                          (0, a.jsx)("div", {
                                              className: v.KJ,
                                              children: (0, a.jsx)(f.A, { config: G }),
                                          }),
                                  ],
                              }),
                              (0, a.jsx)("div", {
                                  children:
                                      N &&
                                      (0, a.jsxs)("div", {
                                          className: l()(v.f5, v.VH),
                                          style: { borderRadius: k },
                                          children: [
                                              (0, a.jsx)(h.A, {
                                                  user: s,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, a.jsx)(f.A, { config: G }),
                                          ],
                                      }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: v.nz,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: v.nM,
                                          children: [
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => y.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: v.nM,
                                          children: [
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => y.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => y.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => y.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)("div", {
                                          className: v.q6,
                                          children: (0, a.jsx)("div", {
                                              className: v.nM,
                                              children: (0, a.jsx)(c.Button, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      j(!1), setTimeout(() => j(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: l()(v.q6, v.XA),
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
                                                  className: v.nM,
                                                  children: [
                                                      (0, a.jsx)(u.A, {
                                                          fileContents: () => (0, _.rs)(R),
                                                          contentType: "text/plain",
                                                          fileName: `${B}_timing_config.txt`,
                                                          children: (0, a.jsx)(c.Button, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, a.jsx)(u.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: L,
                                                                  readonly: !1,
                                                                  config: { ...t.config, effects: R, stillFrames: D },
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${B}_config.txt`,
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
                                          className: v.uW,
                                          children: [
                                              (0, a.jsx)(c.Heading, {
                                                  variant: "heading-lg/bold",
                                                  children: "Still Frames",
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: v.mv,
                                                  children: Object.entries(D).map((e) => {
                                                      let [t, n] = e;
                                                      return (0, a.jsx)(
                                                          S,
                                                          {
                                                              type: t,
                                                              frame: n,
                                                              theme: F,
                                                              onClear: () => {
                                                                  P((e) => ({ ...e, [t]: null }));
                                                              },
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      R.some((e) => (e.randomizedSources ?? []).length > 0) &&
                                          (0, a.jsxs)("div", {
                                              className: l()(v.uW, v.l7),
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
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: l()(v.Vg, v.ZF),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: v.cD,
                                          children: (0, a.jsx)(c.Button, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  w([]), P(A);
                                              },
                                          }),
                                      }),
                                      R.map((e, t) =>
                                          (0, a.jsxs)(
                                              "div",
                                              {
                                                  className: v.ec,
                                                  children: [
                                                      (0, a.jsxs)("div", {
                                                          className: v.D1,
                                                          children: [
                                                              (0, a.jsx)(c.Heading, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, a.jsx)("img", {
                                                                  src: e.src,
                                                                  className: v.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, a.jsxs)(a.Fragment, {
                                                                      children: [
                                                                          (0, a.jsx)(c.Heading, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, a.jsxs)(
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
                                                                                              className: v.oq,
                                                                                              alt: "",
                                                                                          }),
                                                                                      ],
                                                                                  },
                                                                                  e.filename ?? `randomized-${t}`,
                                                                              ),
                                                                          ),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                          className: l()(v.Vg, v.uW),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: v.nz,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: v.hF,
                                                                          onChange: (e) => {
                                                                              w((n) => {
                                                                                  let a = [...n],
                                                                                      i = n[t];
                                                                                  return (
                                                                                      (i.start = +e.target.value),
                                                                                      (a[t] = i),
                                                                                      a
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, a.jsxs)("div", {
                                                                  className: v.nz,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: v.hF,
                                                                          onChange: (e) => {
                                                                              w((n) => {
                                                                                  let a = [...n],
                                                                                      i = n[t];
                                                                                  return (
                                                                                      (i.duration = +e.target.value),
                                                                                      (a[t] = i),
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
                                                          className: l()(v.Vg, v.uW),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: v.nz,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: v.OO,
                                                                          onChange: (e) => {
                                                                              w((n) => {
                                                                                  let a = [...n],
                                                                                      i = n[t];
                                                                                  return (
                                                                                      (i.loop = e.target.checked),
                                                                                      (a[t] = i),
                                                                                      a
                                                                                  );
                                                                              });
                                                                          },
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, a.jsx)("div", {
                                                                  className: v.nz,
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
                                                                                  className: v.hF,
                                                                                  onChange: (e) => {
                                                                                      w((n) => {
                                                                                          let a = [...n],
                                                                                              i = n[t];
                                                                                          return (
                                                                                              (i.loopDelay =
                                                                                                  +e.target.value),
                                                                                              (a[t] = i),
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
                                                          children: (0, a.jsx)(m.A, {
                                                              ref: (e) => {
                                                                  y.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let n;
                                                                  null != (n = V(e)) &&
                                                                      (0, _.Mz)(n, (e) => {
                                                                          w((a) => {
                                                                              let i = [...a],
                                                                                  s = a[t];
                                                                              if (null == s) return a;
                                                                              let l = { ...s };
                                                                              return (
                                                                                  null == l.randomizedSources &&
                                                                                      (l.randomizedSources = []),
                                                                                  l.randomizedSources.push({
                                                                                      src: e,
                                                                                      filename: n.name,
                                                                                  }),
                                                                                  (i[t] = l),
                                                                                  i
                                                                              );
                                                                          });
                                                                      });
                                                              },
                                                              multiple: !1,
                                                          }),
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                          className: l()(v.nM, v._N),
                                                          children: [
                                                              (0, a.jsx)(c.Button, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      y.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, a.jsx)(c.Button, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      w((t) => t.filter((t) => t !== e));
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
