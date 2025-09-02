n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(28664),
    c = n(755721),
    d = n(481060),
    u = n(603211),
    m = n(710344),
    g = n(637853),
    p = n(259580),
    f = n(823379),
    h = n(889369),
    b = n(570961),
    x = n(208665),
    j = n(976983),
    _ = n(290511),
    v = n(388032),
    O = n(814939);
let y = { optionErrors: [] };
function C(e) {
    var t;
    let {
            guild: n,
            prompt: l,
            disableAutofocus: m,
            promptIndex: j,
            dragIndex: C,
            includeCount: I,
            singleColumn: S,
            onPromptDragComplete: T,
            onPromptDragStart: P,
            onPromptDragReset: w,
        } = e,
        R = (0, s.e7)([h.Z], () => h.Z.editedDefaultChannelIds),
        {
            drag: Z,
            dragSourcePosition: D,
            drop: A,
            setIsDraggable: L,
        } = (0, u.Z)({
            type: "ONBOARDING_PROMPT_CARD",
            index: C,
            optionId: l.id,
            onDragStart: P,
            onDragComplete: T,
            onDragReset: w,
        }),
        k = (0, s.cj)([x.Z], () => {
            var e;
            return null != (e = x.Z.errors[j]) ? e : y;
        }),
        [M, G] = i.useState(!1),
        [U, B] = i.useState(!1),
        F = null != (t = k.options) ? t : k.optionErrors.filter(f.lm)[0],
        H = k.config,
        z = l.options.length >= _.fY,
        W = (0, g.kl)(n.id, Array.from(R), [l]).length - R.size,
        V = i.useRef(null),
        K = i.useRef(j);
    return (i.useEffect(() => {
        K.current = j;
    }),
    i.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === K.current && !m) {
                var e;
                null == (e = V.current) || e.focus();
            }
        }, 0);
    }, [m]),
    M)
        ? (0, r.jsx)(d.tEY, {
              children: (0, r.jsxs)("div", {
                  tabIndex: 0,
                  onFocus: () => B(!0),
                  onBlur: () => B(!1),
                  onMouseLeave: () => B(!1),
                  className: a()(O.container, {
                      [O.dropIndicatorBefore]: null != D && j < D,
                      [O.dropIndicatorAfter]: null != D && j > D,
                      [O.containerFocused]: U,
                  }),
                  ref: (e) => {
                      Z(A(e));
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: O.dragContainer,
                          onMouseEnter: () => L(!0),
                          onMouseLeave: () => L(!1),
                          children: (0, r.jsx)(d.Vni, {
                              size: "xs",
                              color: "currentColor",
                              className: O.dragIcon,
                          }),
                      }),
                      (0, r.jsx)(d.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: v.intl.format(v.t.yjS3zs, { index: j + 1 }),
                      }),
                      (0, r.jsx)(d.Text, {
                          variant: "text-lg/semibold",
                          color: "text-default",
                          children: l.title,
                      }),
                      (0, r.jsx)(d.P3F, {
                          className: O.collapseButton,
                          onClick: () => G(!1),
                          children: (0, r.jsx)(p.Z, {
                              direction: p.Z.Directions.DOWN,
                              height: 16,
                              width: 16,
                          }),
                      }),
                      (0, r.jsx)(o.u, {
                          asContainer: !0,
                          text: v.intl.string(v.t["Ku+86e"]),
                          children: (0, r.jsx)(d.P3F, {
                              className: O.closeIcon,
                              onClick: () => (0, b.fi)(n, l.id),
                              children: (0, r.jsx)(d.XHJ, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                          }),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(d.tEY, {
              children: (0, r.jsxs)("div", {
                  tabIndex: 0,
                  onFocus: () => B(!0),
                  onBlur: () => B(!1),
                  className: a()(O.container, {
                      [O.dropIndicatorBefore]: null != D && j < D,
                      [O.dropIndicatorAfter]: null != D && j > D,
                      [O.containerFocused]: U,
                  }),
                  ref: (e) => {
                      Z(A(e));
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: O.dragContainer,
                          onMouseEnter: () => L(!0),
                          onMouseLeave: () => L(!1),
                          children: (0, r.jsx)(d.Vni, {
                              size: "xs",
                              color: "currentColor",
                              className: O.dragIcon,
                          }),
                      }),
                      (0, r.jsxs)(d.Kqy, {
                          gap: 16,
                          children: [
                              (0, r.jsx)(d.xJW, {
                                  title: v.intl.format(v.t.yjS3zs, { index: j + 1 }),
                                  children: (0, r.jsx)(d.oil, {
                                      inputRef: V,
                                      value: l.title,
                                      onChange: (e) => (0, b.Kk)(n, l.id, { title: e }),
                                      placeholder: v.intl.string(v.t.QMCuCg),
                                      maxLength: _.iU,
                                      error: k.title,
                                  }),
                              }),
                              (0, r.jsx)(N, {
                                  prompt: l,
                                  guild: n,
                              }),
                              (0, r.jsxs)(d.xJW, {
                                  title: z
                                      ? v.intl.formatToPlainString(v.t.AbvhZG, {
                                            count: l.options.length,
                                            total: _.qm,
                                        })
                                      : v.intl.formatToPlainString(v.t.b7VxYW, {
                                            count: l.options.length,
                                            total: _.qm,
                                        }),
                                  children: [
                                      (0, r.jsx)(E, {
                                          guild: n,
                                          prompt: l,
                                          promptIndex: j,
                                          errors: k,
                                          singleColumn: S,
                                      }),
                                      null != F ? (0, r.jsx)(d.pdY, { error: F }) : null,
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: O.buttons,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: O.checkboxes,
                                  children: [
                                      (0, r.jsx)(c.$q, {
                                          size: 20,
                                          type: c.M0.INVERTED,
                                          value: !l.singleSelect,
                                          onChange: (e, t) => (0, b.Kk)(n, l.id, { singleSelect: !t }),
                                          children: (0, r.jsx)(d.Text, {
                                              variant: "text-sm/normal",
                                              color: "interactive-normal",
                                              children: v.intl.string(v.t.uCebZW),
                                          }),
                                      }),
                                      l.inOnboarding
                                          ? (0, r.jsx)(c.$q, {
                                                size: 20,
                                                type: c.M0.INVERTED,
                                                value: l.inOnboarding && l.required,
                                                onChange: (e, t) => (0, b.Kk)(n, l.id, { required: t }),
                                                disabled: !l.inOnboarding,
                                                children: (0, r.jsx)(d.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "interactive-normal",
                                                    children: I
                                                        ? v.intl.formatToPlainString(v.t["0re8T0"], { count: W })
                                                        : v.intl.string(v.t.Ur8Vrq),
                                                }),
                                            })
                                          : null,
                                  ],
                              }),
                              (0, r.jsx)(d.P3F, {
                                  className: O.collapseButton,
                                  onClick: () => G(!0),
                                  children: (0, r.jsx)(p.Z, {
                                      direction: p.Z.Directions.UP,
                                      height: 16,
                                      width: 16,
                                  }),
                              }),
                              (0, r.jsx)(o.u, {
                                  asContainer: !0,
                                  text: v.intl.string(v.t["Ku+86e"]),
                                  children: (0, r.jsx)(d.P3F, {
                                      className: O.closeIcon,
                                      onClick: () => (0, b.fi)(n, l.id),
                                      children: (0, r.jsx)(d.XHJ, {
                                          size: "xs",
                                          color: "currentColor",
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      null != H ? (0, r.jsx)(d.pdY, { error: H }) : null,
                  ],
              }),
          });
}
function N(e) {
    let { prompt: t, guild: n } = e,
        [l, a] = i.useState(!1);
    if (
        (i.useEffect(() => {
            !l && t.title.length > 0 && a(!0);
        }, [l, t]),
        l)
    )
        return null;
    function s(e) {
        return (0, r.jsx)(d.P3F, {
            className: O.example,
            onClick: () => (0, b.Kk)(n, t.id, { title: e }),
            children: (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                children: e,
            }),
        });
    }
    return (0, r.jsxs)("div", {
        className: O.examplesSection,
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: v.intl.string(v.t.ECnSLi),
            }),
            (0, r.jsxs)("div", {
                className: O.examples,
                children: [
                    s(v.intl.string(v.t["7GZMJS"])),
                    s(v.intl.string(v.t.nItydn)),
                    s(v.intl.string(v.t.evuYbm)),
                    s(v.intl.string(v.t.XWRuOj)),
                ],
            }),
        ],
    });
}
function E(e) {
    let { guild: t, prompt: n, promptIndex: i, singleColumn: l, errors: a } = e,
        {
            handleDragStart: s,
            handleDragReset: o,
            handleDragComplete: c,
        } = (0, m.Z)(n.options, (e) => (0, b.Kk)(t, n.id, { options: e }));
    return (0, r.jsxs)("div", {
        className: O.options,
        children: [
            n.options.map((e, d) =>
                (0, r.jsx)(
                    j.Z,
                    {
                        guild: t,
                        prompt: n,
                        promptIndex: i,
                        singleColumn: l,
                        option: e,
                        onDragStart: s,
                        onDragComplete: c,
                        onDragReset: o,
                        hasError: null != a.optionErrors[d],
                    },
                    e.id,
                ),
            ),
            n.options.length < _.qm
                ? (0, r.jsx)(j.B, {
                      guild: t,
                      prompt: n,
                      promptIndex: i,
                      singleColumn: l,
                  })
                : null,
        ],
    });
}
