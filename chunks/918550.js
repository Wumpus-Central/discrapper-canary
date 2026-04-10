n.d(t, { A: () => N }), n(321073), n(323874), n(14289), n(35956);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(575593),
    o = n(854284),
    d = n(311907),
    c = n(732955),
    u = n(397927),
    m = n(900686),
    h = n(817363),
    x = n(287070),
    p = n(239606),
    g = n(287809),
    f = n(816866),
    v = n(87558),
    _ = n(643084),
    b = n(525221),
    j = n(778765),
    A = n(73269);
let C = { [v.qH.THUMBNAIL]: null, [v.qH.STATIC]: null, [v.qH.REDUCED_MOTION]: null },
    y = "debug",
    S = "reduced-motion-preview-modal",
    E = (e) => {
        let { transitionState: t, onClose: n, frameSrc: i, theme: s } = e;
        return (0, a.jsx)(c.dWK, {
            transitionState: t,
            size: "md",
            onClose: n,
            maxHeight: "viewport",
            children: (0, a.jsxs)("div", {
                className: b.Xd,
                children: [
                    (0, a.jsx)("div", {
                        className: b.y6,
                        children: (0, a.jsx)(u.K0, {
                            "aria-label": "Close",
                            onClick: n,
                            icon: u.d$L,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: b.rU,
                        children: [
                            (0, a.jsx)(u.NPJ, {
                                theme: s,
                                children: (e) =>
                                    (0, a.jsx)("img", {
                                        src: A.A,
                                        alt: "",
                                        className: l()(b.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != i &&
                                "" !== i &&
                                (0, a.jsx)("img", { src: i, className: b.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    T = (e) => {
        let { type: t, frame: n, theme: i, onClear: s } = e,
            r = t === v.qH.REDUCED_MOTION,
            o = r ? A.A : j.A,
            d = (0, a.jsx)(u.NPJ, {
                theme: i,
                children: (e) =>
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("img", { src: o, alt: "", className: l()(b.aM, e), "aria-hidden": !0 }),
                            n?.src != null &&
                                "" !== n.src &&
                                (0, a.jsx)("img", { src: n.src, className: l()(b.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, a.jsxs)("div", {
            className: b.pK,
            children: [
                (0, a.jsx)(u.Heading, { variant: "heading-sm/bold", children: t }),
                r
                    ? (0, a.jsx)(u.DUT, {
                          className: l()(b.zd, b.eB),
                          onClick: () => {
                              (0, u.kBI)(S)
                                  ? (0, u.OoC)(S)
                                  : (0, u.mMO)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, a.jsx)(E, { ...e, frameSrc: n?.src ?? null, theme: i }),
                                            ),
                                        { modalKey: S, onCloseRequest: () => (0, u.OoC)(S) },
                                    );
                          },
                          children: d,
                      })
                    : (0, a.jsx)("div", { className: b.zd, children: d }),
                null != n &&
                    (0, a.jsx)(u.Button, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: s }),
            ],
        });
    },
    N = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: n } = (0, f.wu)(),
            s = (0, d.bG)([g.default], () => g.default.getCurrentUser()),
            [c, A] = i.useState(!0),
            S = i.useRef({}),
            [E, N] = i.useState(!1),
            [I, k] = i.useState(!1),
            [O, R] = i.useState(8),
            [w, D] = i.useState([]),
            [M, P] = i.useState(C),
            L = i.useRef([]),
            [U, B] = i.useState(t.name),
            G = U.toLowerCase().replace(/\s+/g, "_"),
            F = i.useMemo(
                () => ({
                    type: r.R.PROFILE_EFFECT,
                    skuId: y,
                    title: y,
                    description: y,
                    accessibilityLabel: y,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: w,
                    animationType: o.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [w],
            ),
            V = E ? u.LU0.themes.DARKER : u.LU0.themes.LIGHT,
            W = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            H = (e, t) => {
                let n = W(t);
                null != n &&
                    (0, v.Mz)(n, (t) => {
                        P((a) => ({ ...a, [e]: (0, v.GT)(t, n) }));
                    });
            };
        i.useEffect(() => {
            let e = t.effects;
            e.length > 0 && D(e);
        }, [t.effects]),
            i.useEffect(() => {
                let e = t.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, n] = e;
                        if (null != n) {
                            if ("" !== n.src && null != n.src && ("" === n.base64 || null == n.base64))
                                P((e) => ({ ...e, [t]: n }));
                            else if ("" !== n.base64 && null != n.base64) {
                                let e = (0, v.fB)(n.base64);
                                (n.src = e), L.current.push(e), P((e) => ({ ...e, [t]: n }));
                            }
                        }
                    });
            }, [t.stillFrames]);
        let K = { profileEffect: t, upsertProfileEffect: n },
            z = i.useRef(K);
        return (i.useEffect(() => {
            z.current = K;
        }),
        i.useEffect(() => {
            let { profileEffect: e, upsertProfileEffect: t } = z.current;
            e.readonly || t({ skuId: e.skuId, name: U, effects: w, stillFrames: M });
        }, [w, M, U]),
        i.useEffect(
            () => () => {
                L.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (L.current = []);
            },
            [],
        ),
        null == s)
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                  className: b.zr,
                  children: [
                      (0, a.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, a.jsx)(h.A, {
                                  ref: (e) => {
                                      S.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = W(e);
                                      null != t &&
                                          (0, v.Mz)(t, async (e) => {
                                              let n = await (0, v.Ay)(e, t, w.length);
                                              D((e) => [...e, n]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, a.jsx)(h.A, {
                                  ref: (e) => {
                                      S.current.thumbnail = e;
                                  },
                                  onChange: (e) => H(v.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(h.A, {
                                  ref: (e) => {
                                      S.current.static = e;
                                  },
                                  onChange: (e) => H(v.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(h.A, {
                                  ref: (e) => {
                                      S.current.reducedMotion = e;
                                  },
                                  onChange: (e) => H(v.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: b.Vg,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: l()(b.nM, b.uW),
                                  children: [
                                      (0, a.jsx)(u.Text, {
                                          variant: "text-md/normal",
                                          children: "Profile Effect Name",
                                      }),
                                      (0, a.jsx)("input", {
                                          type: "text",
                                          value: U,
                                          className: b.hF,
                                          onChange: (e) => {
                                              B(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: b.nM,
                                  children: [
                                      (0, a.jsx)(u.Text, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, a.jsx)("input", {
                                          type: "checkbox",
                                          checked: E,
                                          className: b.OO,
                                          onChange: () => {
                                              N(!E);
                                          },
                                      }),
                                      (0, a.jsx)(u.Text, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, a.jsx)("input", {
                                          type: "checkbox",
                                          checked: I,
                                          className: b.OO,
                                          onChange: () => {
                                              k(!I);
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: b.nM,
                                  children: [
                                      (0, a.jsx)(u.Text, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, a.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: O,
                                          onChange: (e) => R(+e.target.value),
                                      }),
                                      (0, a.jsxs)(u.Text, { variant: "text-sm/normal", children: [O, "px"] }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: l()(b.nz, b.VH),
                                  style: { borderRadius: O },
                                  children: [
                                      I
                                          ? (0, a.jsx)("div", {
                                                className: b.jq,
                                                children: (0, a.jsx)(p.A, {
                                                    user: s,
                                                    currentUser: s,
                                                    transitionState: u.ip4.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: b.JB,
                                                }),
                                            })
                                          : (0, a.jsx)(u.NPJ, {
                                                theme: V,
                                                children: (e) =>
                                                    (0, a.jsx)("div", {
                                                        className: l()(b.aM, e),
                                                        children: (0, a.jsx)("img", { src: j.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      c &&
                                          (0, a.jsx)("div", {
                                              className: b.KJ,
                                              children: (0, a.jsx)(_.A, { profileEffect: F }),
                                          }),
                                  ],
                              }),
                              (0, a.jsx)("div", {
                                  children:
                                      I &&
                                      (0, a.jsxs)("div", {
                                          className: l()(b.f5, b.VH),
                                          style: { borderRadius: O },
                                          children: [
                                              (0, a.jsx)(x.A, {
                                                  user: s,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, a.jsx)(_.A, { profileEffect: F }),
                                          ],
                                      }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: b.nz,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: b.nM,
                                          children: [
                                              (0, a.jsx)(u.Button, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => S.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(u.Text, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: b.nM,
                                          children: [
                                              (0, a.jsx)(u.Button, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => S.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(u.Button, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => S.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(u.Button, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => S.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)("div", {
                                          className: b.q6,
                                          children: (0, a.jsx)("div", {
                                              className: b.nM,
                                              children: (0, a.jsx)(u.Button, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      A(!1), setTimeout(() => A(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: l()(b.q6, b.XA),
                                          children: [
                                              (0, a.jsx)(u.Text, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, a.jsx)(u.Text, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: b.nM,
                                                  children: [
                                                      (0, a.jsx)(m.A, {
                                                          fileContents: () => (0, v.rs)(w),
                                                          contentType: "text/plain",
                                                          fileName: `${G}_timing_config.txt`,
                                                          children: (0, a.jsx)(u.Button, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, a.jsx)(m.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: U,
                                                                  readonly: !1,
                                                                  effects: w,
                                                                  stillFrames: M,
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${G}_config.txt`,
                                                          children: (0, a.jsx)(u.Button, {
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
                                          className: b.uW,
                                          children: [
                                              (0, a.jsx)(u.Heading, {
                                                  variant: "heading-lg/bold",
                                                  children: "Still Frames",
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: b.mv,
                                                  children: Object.entries(M).map((e) => {
                                                      let [t, n] = e;
                                                      return (0, a.jsx)(
                                                          T,
                                                          {
                                                              type: t,
                                                              frame: n,
                                                              theme: V,
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
                                      w.some((e) => (e.randomizedSources ?? []).length > 0) &&
                                          (0, a.jsxs)("div", {
                                              className: l()(b.uW, b.l7),
                                              children: [
                                                  (0, a.jsx)(u.Text, {
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
                                  className: l()(b.Vg, b.ZF),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: b.cD,
                                          children: (0, a.jsx)(u.Button, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  D([]), P(C);
                                              },
                                          }),
                                      }),
                                      w.map((e, t) =>
                                          (0, a.jsxs)(
                                              "div",
                                              {
                                                  className: b.ec,
                                                  children: [
                                                      (0, a.jsxs)("div", {
                                                          className: b.D1,
                                                          children: [
                                                              (0, a.jsx)(u.Heading, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, a.jsx)("img", {
                                                                  src: e.src,
                                                                  className: b.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, a.jsxs)(a.Fragment, {
                                                                      children: [
                                                                          (0, a.jsx)(u.Heading, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, a.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, a.jsx)(u.Heading, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, a.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: b.oq,
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
                                                          className: l()(b.Vg, b.uW),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: b.nz,
                                                                  children: [
                                                                      (0, a.jsx)(u.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: b.hF,
                                                                          onChange: (e) => {
                                                                              D((n) => {
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
                                                                  className: b.nz,
                                                                  children: [
                                                                      (0, a.jsx)(u.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: b.hF,
                                                                          onChange: (e) => {
                                                                              D((n) => {
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
                                                          className: l()(b.Vg, b.uW),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: b.nz,
                                                                  children: [
                                                                      (0, a.jsx)(u.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: b.OO,
                                                                          onChange: (e) => {
                                                                              D((n) => {
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
                                                                  className: b.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, a.jsxs)(a.Fragment, {
                                                                          children: [
                                                                              (0, a.jsx)(u.Text, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, a.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: b.hF,
                                                                                  onChange: (e) => {
                                                                                      D((n) => {
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
                                                          children: (0, a.jsx)(h.A, {
                                                              ref: (e) => {
                                                                  S.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let n;
                                                                  null != (n = W(e)) &&
                                                                      (0, v.Mz)(n, (e) => {
                                                                          D((a) => {
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
                                                          className: l()(b.nM, b._N),
                                                          children: [
                                                              (0, a.jsx)(u.Button, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      S.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, a.jsx)(u.Button, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      D((t) => t.filter((t) => t !== e));
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
