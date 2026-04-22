a.d(t, { A: () => P }), a(321073), a(323874), a(14289), a(35956);
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(575593),
    o = a(854284),
    d = a(311907),
    c = a(224640),
    u = a(408278),
    m = a(972213),
    h = a(43990),
    p = a(192308),
    x = a(534514),
    g = a(939249),
    v = a(821609),
    b = a(827734),
    _ = a(834730),
    f = a(231723),
    j = a(900686),
    A = a(817363),
    y = a(287070),
    C = a(239606),
    E = a(287809),
    S = a(816866),
    N = a(87558),
    k = a(643084),
    I = a(314485),
    D = a(778765),
    T = a(73269);
let w = { [N.qH.THUMBNAIL]: null, [N.qH.STATIC]: null, [N.qH.REDUCED_MOTION]: null },
    O = "debug",
    R = "reduced-motion-preview-modal",
    L = (e) => {
        let { transitionState: t, onClose: a, frameSrc: l, theme: i } = e;
        return (0, n.jsx)(c.d, {
            transitionState: t,
            size: "md",
            onClose: a,
            maxHeight: "viewport",
            children: (0, n.jsxs)("div", {
                className: I.Xd,
                children: [
                    (0, n.jsx)("div", {
                        className: I.y6,
                        children: (0, n.jsx)(u.K, {
                            "aria-label": "Close",
                            onClick: a,
                            icon: m.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: I.rU,
                        children: [
                            (0, n.jsx)(h.N, {
                                theme: i,
                                children: (e) =>
                                    (0, n.jsx)("img", {
                                        src: T.A,
                                        alt: "",
                                        className: s()(I.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != l &&
                                "" !== l &&
                                (0, n.jsx)("img", { src: l, className: I.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    M = (e) => {
        let { type: t, frame: a, theme: l, onClear: i } = e,
            r = t === N.qH.REDUCED_MOTION,
            o = r ? T.A : D.A,
            d = (0, n.jsx)(h.N, {
                theme: l,
                children: (e) =>
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("img", { src: o, alt: "", className: s()(I.aM, e), "aria-hidden": !0 }),
                            a?.src != null &&
                                "" !== a.src &&
                                (0, n.jsx)("img", { src: a.src, className: s()(I.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, n.jsxs)("div", {
            className: I.pK,
            children: [
                (0, n.jsx)(x.D, { variant: "heading-sm/bold", children: t }),
                r
                    ? (0, n.jsx)(g.D, {
                          className: s()(I.zd, I.eB),
                          onClick: () => {
                              (0, p.hasModalOpen)(R)
                                  ? (0, p.closeModal)(R)
                                  : (0, p.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, n.jsx)(L, { ...e, frameSrc: a?.src ?? null, theme: l }),
                                            ),
                                        { modalKey: R, onCloseRequest: () => (0, p.closeModal)(R) },
                                    );
                          },
                          children: d,
                      })
                    : (0, n.jsx)("div", { className: I.zd, children: d }),
                null != a && (0, n.jsx)(v.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: i }),
            ],
        });
    },
    P = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, S.wu)(),
            i = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
            [c, u] = l.useState(!0),
            m = l.useRef({}),
            [p, g] = l.useState(!1),
            [T, R] = l.useState(!1),
            [L, P] = l.useState(8),
            [U, B] = l.useState([]),
            [G, F] = l.useState(w),
            V = l.useRef([]),
            [$, W] = l.useState(t.name),
            H = $.toLowerCase().replace(/\s+/g, "_"),
            z = l.useMemo(
                () => ({
                    type: r.R.PROFILE_EFFECT,
                    skuId: O,
                    title: O,
                    description: O,
                    accessibilityLabel: O,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: U,
                    animationType: o.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [U],
            ),
            K = p ? b.A.themes.DARKER : b.A.themes.LIGHT,
            Y = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            q = (e, t) => {
                let a = Y(t);
                null != a &&
                    (0, N.Mz)(a, (t) => {
                        F((n) => ({ ...n, [e]: (0, N.GT)(t, a) }));
                    });
            };
        l.useEffect(() => {
            let e = t.effects;
            e.length > 0 && B(e);
        }, [t.effects]),
            l.useEffect(() => {
                let e = t.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, a] = e;
                        if (null != a) {
                            if ("" !== a.src && null != a.src && ("" === a.base64 || null == a.base64))
                                F((e) => ({ ...e, [t]: a }));
                            else if ("" !== a.base64 && null != a.base64) {
                                let e = (0, N.fB)(a.base64);
                                (a.src = e), V.current.push(e), F((e) => ({ ...e, [t]: a }));
                            }
                        }
                    });
            }, [t.stillFrames]);
        let J = { profileEffect: t, upsertProfileEffect: a },
            Q = l.useRef(J);
        return (l.useEffect(() => {
            Q.current = J;
        }),
        l.useEffect(() => {
            let { profileEffect: e, upsertProfileEffect: t } = Q.current;
            e.readonly || t({ skuId: e.skuId, name: $, effects: U, stillFrames: G });
        }, [U, G, $]),
        l.useEffect(
            () => () => {
                V.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (V.current = []);
            },
            [],
        ),
        null == i)
            ? (0, n.jsx)("div", {})
            : (0, n.jsxs)("div", {
                  className: I.zr,
                  children: [
                      (0, n.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, n.jsx)(A.A, {
                                  ref: (e) => {
                                      m.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = Y(e);
                                      null != t &&
                                          (0, N.Mz)(t, async (e) => {
                                              let a = await (0, N.Ay)(e, t, U.length);
                                              B((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, n.jsx)(A.A, {
                                  ref: (e) => {
                                      m.current.thumbnail = e;
                                  },
                                  onChange: (e) => q(N.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, n.jsx)(A.A, {
                                  ref: (e) => {
                                      m.current.static = e;
                                  },
                                  onChange: (e) => q(N.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, n.jsx)(A.A, {
                                  ref: (e) => {
                                      m.current.reducedMotion = e;
                                  },
                                  onChange: (e) => q(N.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, n.jsxs)("div", {
                          className: I.Vg,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: s()(I.nM, I.uW),
                                  children: [
                                      (0, n.jsx)(_.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, n.jsx)("input", {
                                          type: "text",
                                          value: $,
                                          className: I.hF,
                                          onChange: (e) => {
                                              W(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, n.jsxs)("div", {
                                  className: I.nM,
                                  children: [
                                      (0, n.jsx)(_.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, n.jsx)("input", {
                                          type: "checkbox",
                                          checked: p,
                                          className: I.OO,
                                          onChange: () => {
                                              g(!p);
                                          },
                                      }),
                                      (0, n.jsx)(_.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, n.jsx)("input", {
                                          type: "checkbox",
                                          checked: T,
                                          className: I.OO,
                                          onChange: () => {
                                              R(!T);
                                          },
                                      }),
                                  ],
                              }),
                              (0, n.jsxs)("div", {
                                  className: I.nM,
                                  children: [
                                      (0, n.jsx)(_.E, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, n.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: L,
                                          onChange: (e) => P(+e.target.value),
                                      }),
                                      (0, n.jsxs)(_.E, { variant: "text-sm/normal", children: [L, "px"] }),
                                  ],
                              }),
                              (0, n.jsxs)("div", {
                                  className: s()(I.nz, I.VH),
                                  style: { borderRadius: L },
                                  children: [
                                      T
                                          ? (0, n.jsx)("div", {
                                                className: I.jq,
                                                children: (0, n.jsx)(C.A, {
                                                    user: i,
                                                    currentUser: i,
                                                    transitionState: f.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: I.JB,
                                                }),
                                            })
                                          : (0, n.jsx)(h.N, {
                                                theme: K,
                                                children: (e) =>
                                                    (0, n.jsx)("div", {
                                                        className: s()(I.aM, e),
                                                        children: (0, n.jsx)("img", { src: D.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      c &&
                                          (0, n.jsx)("div", {
                                              className: I.KJ,
                                              children: (0, n.jsx)(k.A, { profileEffect: z }),
                                          }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  children:
                                      T &&
                                      (0, n.jsxs)("div", {
                                          className: s()(I.f5, I.VH),
                                          style: { borderRadius: L },
                                          children: [
                                              (0, n.jsx)(y.A, {
                                                  user: i,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, n.jsx)(k.A, { profileEffect: z }),
                                          ],
                                      }),
                              }),
                              (0, n.jsxs)("div", {
                                  className: I.nz,
                                  children: [
                                      (0, n.jsxs)("div", {
                                          className: I.nM,
                                          children: [
                                              (0, n.jsx)(v.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => m.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, n.jsx)(_.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: I.nM,
                                          children: [
                                              (0, n.jsx)(v.$, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => m.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, n.jsx)(v.$, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => m.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, n.jsx)(v.$, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => m.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, n.jsx)("div", {
                                          className: I.q6,
                                          children: (0, n.jsx)("div", {
                                              className: I.nM,
                                              children: (0, n.jsx)(v.$, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      u(!1), setTimeout(() => u(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: s()(I.q6, I.XA),
                                          children: [
                                              (0, n.jsx)(_.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, n.jsx)(_.E, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, n.jsxs)("div", {
                                                  className: I.nM,
                                                  children: [
                                                      (0, n.jsx)(j.A, {
                                                          fileContents: () => (0, N.rs)(U),
                                                          contentType: "text/plain",
                                                          fileName: `${H}_timing_config.txt`,
                                                          children: (0, n.jsx)(v.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, n.jsx)(j.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: $,
                                                                  readonly: !1,
                                                                  effects: U,
                                                                  stillFrames: G,
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${H}_config.txt`,
                                                          children: (0, n.jsx)(v.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Full Config",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: I.uW,
                                          children: [
                                              (0, n.jsx)(x.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, n.jsx)("div", {
                                                  className: I.mv,
                                                  children: Object.entries(G).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, n.jsx)(
                                                          M,
                                                          {
                                                              type: t,
                                                              frame: a,
                                                              theme: K,
                                                              onClear: () => {
                                                                  F((e) => ({ ...e, [t]: null }));
                                                              },
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      U.some((e) => (e.randomizedSources ?? []).length > 0) &&
                                          (0, n.jsxs)("div", {
                                              className: s()(I.uW, I.l7),
                                              children: [
                                                  (0, n.jsx)(_.E, {
                                                      variant: "text-md/bold",
                                                      children: "Rules of Randomized Effects",
                                                  }),
                                                  (0, n.jsxs)("ol", {
                                                      children: [
                                                          (0, n.jsx)("li", {
                                                              children:
                                                                  "When an effect has randomization, all layers with random options must have the same number of options.",
                                                          }),
                                                          (0, n.jsx)("li", {
                                                              children:
                                                                  "The duration for the random options of a layer must be the same",
                                                          }),
                                                          (0, n.jsx)("li", {
                                                              children:
                                                                  "If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)",
                                                          }),
                                                          (0, n.jsx)("li", {
                                                              children:
                                                                  'Click "Replay Animation" to "reroll" the randomization',
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              (0, n.jsxs)("div", {
                                  className: s()(I.Vg, I.ZF),
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: I.cD,
                                          children: (0, n.jsx)(v.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  B([]), F(w);
                                              },
                                          }),
                                      }),
                                      U.map((e, t) =>
                                          (0, n.jsxs)(
                                              "div",
                                              {
                                                  className: I.ec,
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: I.D1,
                                                          children: [
                                                              (0, n.jsx)(x.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, n.jsx)("img", {
                                                                  src: e.src,
                                                                  className: I.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, n.jsxs)(n.Fragment, {
                                                                      children: [
                                                                          (0, n.jsx)(x.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, n.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, n.jsx)(x.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, n.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: I.oq,
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
                                                      (0, n.jsxs)("div", {
                                                          className: s()(I.Vg, I.uW),
                                                          children: [
                                                              (0, n.jsxs)("div", {
                                                                  className: I.nz,
                                                                  children: [
                                                                      (0, n.jsx)(_.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, n.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: I.hF,
                                                                          onChange: (e) => {
                                                                              B((a) => {
                                                                                  let n = [...a],
                                                                                      l = a[t];
                                                                                  return (
                                                                                      (l.start = +e.target.value),
                                                                                      (n[t] = l),
                                                                                      n
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, n.jsxs)("div", {
                                                                  className: I.nz,
                                                                  children: [
                                                                      (0, n.jsx)(_.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, n.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: I.hF,
                                                                          onChange: (e) => {
                                                                              B((a) => {
                                                                                  let n = [...a],
                                                                                      l = a[t];
                                                                                  return (
                                                                                      (l.duration = +e.target.value),
                                                                                      (n[t] = l),
                                                                                      n
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                      (0, n.jsxs)("div", {
                                                          className: s()(I.Vg, I.uW),
                                                          children: [
                                                              (0, n.jsxs)("div", {
                                                                  className: I.nz,
                                                                  children: [
                                                                      (0, n.jsx)(_.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, n.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: I.OO,
                                                                          onChange: (e) => {
                                                                              B((a) => {
                                                                                  let n = [...a],
                                                                                      l = a[t];
                                                                                  return (
                                                                                      (l.loop = e.target.checked),
                                                                                      (n[t] = l),
                                                                                      n
                                                                                  );
                                                                              });
                                                                          },
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, n.jsx)("div", {
                                                                  className: I.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, n.jsxs)(n.Fragment, {
                                                                          children: [
                                                                              (0, n.jsx)(_.E, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, n.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: I.hF,
                                                                                  onChange: (e) => {
                                                                                      B((a) => {
                                                                                          let n = [...a],
                                                                                              l = a[t];
                                                                                          return (
                                                                                              (l.loopDelay =
                                                                                                  +e.target.value),
                                                                                              (n[t] = l),
                                                                                              n
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
                                                      (0, n.jsx)("div", {
                                                          style: { display: "none" },
                                                          children: (0, n.jsx)(A.A, {
                                                              ref: (e) => {
                                                                  m.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = Y(e)) &&
                                                                      (0, N.Mz)(a, (e) => {
                                                                          B((n) => {
                                                                              let l = [...n],
                                                                                  i = n[t];
                                                                              if (null == i) return n;
                                                                              let s = { ...i };
                                                                              return (
                                                                                  null == s.randomizedSources &&
                                                                                      (s.randomizedSources = []),
                                                                                  s.randomizedSources.push({
                                                                                      src: e,
                                                                                      filename: a.name,
                                                                                  }),
                                                                                  (l[t] = s),
                                                                                  l
                                                                              );
                                                                          });
                                                                      });
                                                              },
                                                              multiple: !1,
                                                          }),
                                                      }),
                                                      (0, n.jsxs)("div", {
                                                          className: s()(I.nM, I._N),
                                                          children: [
                                                              (0, n.jsx)(v.$, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      m.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, n.jsx)(v.$, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      B((t) => t.filter((t) => t !== e));
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
