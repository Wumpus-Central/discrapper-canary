n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(603211),
    d = n(710344),
    u = n(637853),
    m = n(259580),
    g = n(823379),
    p = n(889369),
    h = n(570961),
    f = n(208665),
    b = n(976983),
    x = n(290511),
    j = n(388032),
    v = n(814939);
let _ = { optionErrors: [] };
function O(e) {
    var t;
    let {
            guild: n,
            prompt: l,
            disableAutofocus: d,
            promptIndex: b,
            dragIndex: O,
            includeCount: N,
            singleColumn: E,
            onPromptDragComplete: I,
            onPromptDragStart: S,
            onPromptDragReset: T,
        } = e,
        P = (0, s.e7)([p.Z], () => p.Z.editedDefaultChannelIds),
        {
            drag: w,
            dragSourcePosition: R,
            drop: Z,
            setIsDraggable: D,
        } = (0, c.Z)({
            type: "ONBOARDING_PROMPT_CARD",
            index: O,
            optionId: l.id,
            onDragStart: S,
            onDragComplete: I,
            onDragReset: T,
        }),
        A = (0, s.cj)([f.Z], () => {
            var e;
            return null != (e = f.Z.errors[b]) ? e : _;
        }),
        [L, k] = i.useState(!1),
        [M, G] = i.useState(!1),
        U = null != (t = A.options) ? t : A.optionErrors.filter(g.lm)[0],
        B = A.config,
        F = l.options.length >= x.fY,
        H = (0, u.kl)(n.id, Array.from(P), [l]).length - P.size,
        z = i.useRef(null),
        W = i.useRef(b);
    return (i.useEffect(() => {
        W.current = b;
    }),
    i.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === W.current && !d) {
                var e;
                null == (e = z.current) || e.focus();
            }
        }, 0);
    }, [d]),
    L)
        ? (0, r.jsx)(o.tEY, {
              children: (0, r.jsxs)("div", {
                  tabIndex: 0,
                  onFocus: () => G(!0),
                  onBlur: () => G(!1),
                  onMouseLeave: () => G(!1),
                  className: a()(v.container, {
                      [v.dropIndicatorBefore]: null != R && b < R,
                      [v.dropIndicatorAfter]: null != R && b > R,
                      [v.containerFocused]: M,
                  }),
                  ref: (e) => {
                      w(Z(e));
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: v.dragContainer,
                          onMouseEnter: () => D(!0),
                          onMouseLeave: () => D(!1),
                          children: (0, r.jsx)(o.Vni, {
                              size: "xs",
                              color: "currentColor",
                              className: v.dragIcon,
                          }),
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: j.intl.format(j.t.yjS3zs, { index: b + 1 }),
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: "text-lg/semibold",
                          color: "text-default",
                          children: l.title,
                      }),
                      (0, r.jsx)(o.P3F, {
                          className: v.collapseButton,
                          onClick: () => k(!1),
                          children: (0, r.jsx)(m.Z, {
                              direction: m.Z.Directions.DOWN,
                              height: 16,
                              width: 16,
                          }),
                      }),
                      (0, r.jsx)(o.DY3, {
                          text: j.intl.string(j.t["Ku+86e"]),
                          className: v.removeButton,
                          children: (0, r.jsx)(o.P3F, {
                              className: v.closeIcon,
                              onClick: () => (0, h.fi)(n, l.id),
                              children: (0, r.jsx)(o.XHJ, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                          }),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(o.tEY, {
              children: (0, r.jsxs)("div", {
                  tabIndex: 0,
                  onFocus: () => G(!0),
                  onBlur: () => G(!1),
                  className: a()(v.container, {
                      [v.dropIndicatorBefore]: null != R && b < R,
                      [v.dropIndicatorAfter]: null != R && b > R,
                      [v.containerFocused]: M,
                  }),
                  ref: (e) => {
                      w(Z(e));
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: v.dragContainer,
                          onMouseEnter: () => D(!0),
                          onMouseLeave: () => D(!1),
                          children: (0, r.jsx)(o.Vni, {
                              size: "xs",
                              color: "currentColor",
                              className: v.dragIcon,
                          }),
                      }),
                      (0, r.jsxs)(o.Kqy, {
                          gap: 16,
                          children: [
                              (0, r.jsx)(o.xJW, {
                                  title: j.intl.format(j.t.yjS3zs, { index: b + 1 }),
                                  children: (0, r.jsx)(o.oil, {
                                      inputRef: z,
                                      value: l.title,
                                      onChange: (e) => (0, h.Kk)(n, l.id, { title: e }),
                                      placeholder: j.intl.string(j.t.QMCuCg),
                                      maxLength: x.iU,
                                      error: A.title,
                                  }),
                              }),
                              (0, r.jsx)(y, {
                                  prompt: l,
                                  guild: n,
                              }),
                              (0, r.jsxs)(o.xJW, {
                                  title: F
                                      ? j.intl.formatToPlainString(j.t.AbvhZG, {
                                            count: l.options.length,
                                            total: x.qm,
                                        })
                                      : j.intl.formatToPlainString(j.t.b7VxYW, {
                                            count: l.options.length,
                                            total: x.qm,
                                        }),
                                  children: [
                                      (0, r.jsx)(C, {
                                          guild: n,
                                          prompt: l,
                                          promptIndex: b,
                                          errors: A,
                                          singleColumn: E,
                                      }),
                                      null != U ? (0, r.jsx)(o.pdY, { error: U }) : null,
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: v.buttons,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: v.checkboxes,
                                  children: [
                                      (0, r.jsx)(o.XZJ, {
                                          size: 20,
                                          type: o.XZJ.Types.INVERTED,
                                          value: !l.singleSelect,
                                          onChange: (e, t) => (0, h.Kk)(n, l.id, { singleSelect: !t }),
                                          children: (0, r.jsx)(o.Text, {
                                              variant: "text-sm/normal",
                                              color: "interactive-normal",
                                              children: j.intl.string(j.t.uCebZW),
                                          }),
                                      }),
                                      l.inOnboarding
                                          ? (0, r.jsx)(o.XZJ, {
                                                size: 20,
                                                type: o.XZJ.Types.INVERTED,
                                                value: l.inOnboarding && l.required,
                                                onChange: (e, t) => (0, h.Kk)(n, l.id, { required: t }),
                                                disabled: !l.inOnboarding,
                                                children: (0, r.jsx)(o.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "interactive-normal",
                                                    children: N
                                                        ? j.intl.formatToPlainString(j.t["0re8T0"], { count: H })
                                                        : j.intl.string(j.t.Ur8Vrq),
                                                }),
                                            })
                                          : null,
                                  ],
                              }),
                              (0, r.jsx)(o.P3F, {
                                  className: v.collapseButton,
                                  onClick: () => k(!0),
                                  children: (0, r.jsx)(m.Z, {
                                      direction: m.Z.Directions.UP,
                                      height: 16,
                                      width: 16,
                                  }),
                              }),
                              (0, r.jsx)(o.DY3, {
                                  text: j.intl.string(j.t["Ku+86e"]),
                                  className: v.removeButton,
                                  children: (0, r.jsx)(o.P3F, {
                                      className: v.closeIcon,
                                      onClick: () => (0, h.fi)(n, l.id),
                                      children: (0, r.jsx)(o.XHJ, {
                                          size: "xs",
                                          color: "currentColor",
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      null != B ? (0, r.jsx)(o.pdY, { error: B }) : null,
                  ],
              }),
          });
}
function y(e) {
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
        return (0, r.jsx)(o.P3F, {
            className: v.example,
            onClick: () => (0, h.Kk)(n, t.id, { title: e }),
            children: (0, r.jsx)(o.Text, {
                variant: "text-xs/normal",
                children: e,
            }),
        });
    }
    return (0, r.jsxs)("div", {
        className: v.examplesSection,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: j.intl.string(j.t.ECnSLi),
            }),
            (0, r.jsxs)("div", {
                className: v.examples,
                children: [
                    s(j.intl.string(j.t["7GZMJS"])),
                    s(j.intl.string(j.t.nItydn)),
                    s(j.intl.string(j.t.evuYbm)),
                    s(j.intl.string(j.t.XWRuOj)),
                ],
            }),
        ],
    });
}
function C(e) {
    let { guild: t, prompt: n, promptIndex: i, singleColumn: l, errors: a } = e,
        {
            handleDragStart: s,
            handleDragReset: o,
            handleDragComplete: c,
        } = (0, d.Z)(n.options, (e) => (0, h.Kk)(t, n.id, { options: e }));
    return (0, r.jsxs)("div", {
        className: v.options,
        children: [
            n.options.map((e, d) =>
                (0, r.jsx)(
                    b.Z,
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
            n.options.length < x.qm
                ? (0, r.jsx)(b.B, {
                      guild: t,
                      prompt: n,
                      promptIndex: i,
                      singleColumn: l,
                  })
                : null,
        ],
    });
}
