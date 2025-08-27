n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(28664),
    c = n(481060),
    d = n(603211),
    u = n(710344),
    m = n(637853),
    g = n(259580),
    p = n(823379),
    h = n(889369),
    f = n(570961),
    b = n(208665),
    x = n(976983),
    j = n(290511),
    _ = n(388032),
    v = n(814939);
let O = { optionErrors: [] };
function y(e) {
    var t;
    let {
            guild: n,
            prompt: l,
            disableAutofocus: u,
            promptIndex: x,
            dragIndex: y,
            includeCount: E,
            singleColumn: I,
            onPromptDragComplete: S,
            onPromptDragStart: T,
            onPromptDragReset: P,
        } = e,
        w = (0, s.e7)([h.Z], () => h.Z.editedDefaultChannelIds),
        {
            drag: R,
            dragSourcePosition: Z,
            drop: D,
            setIsDraggable: A,
        } = (0, d.Z)({
            type: "ONBOARDING_PROMPT_CARD",
            index: y,
            optionId: l.id,
            onDragStart: T,
            onDragComplete: S,
            onDragReset: P,
        }),
        L = (0, s.cj)([b.Z], () => {
            var e;
            return null != (e = b.Z.errors[x]) ? e : O;
        }),
        [k, M] = i.useState(!1),
        [G, U] = i.useState(!1),
        B = null != (t = L.options) ? t : L.optionErrors.filter(p.lm)[0],
        F = L.config,
        H = l.options.length >= j.fY,
        z = (0, m.kl)(n.id, Array.from(w), [l]).length - w.size,
        W = i.useRef(null),
        V = i.useRef(x);
    return (i.useEffect(() => {
        V.current = x;
    }),
    i.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === V.current && !u) {
                var e;
                null == (e = W.current) || e.focus();
            }
        }, 0);
    }, [u]),
    k)
        ? (0, r.jsx)(c.tEY, {
              children: (0, r.jsxs)("div", {
                  tabIndex: 0,
                  onFocus: () => U(!0),
                  onBlur: () => U(!1),
                  onMouseLeave: () => U(!1),
                  className: a()(v.container, {
                      [v.dropIndicatorBefore]: null != Z && x < Z,
                      [v.dropIndicatorAfter]: null != Z && x > Z,
                      [v.containerFocused]: G,
                  }),
                  ref: (e) => {
                      R(D(e));
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: v.dragContainer,
                          onMouseEnter: () => A(!0),
                          onMouseLeave: () => A(!1),
                          children: (0, r.jsx)(c.Vni, {
                              size: "xs",
                              color: "currentColor",
                              className: v.dragIcon,
                          }),
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: _.intl.format(_.t.yjS3zs, { index: x + 1 }),
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "text-lg/semibold",
                          color: "text-default",
                          children: l.title,
                      }),
                      (0, r.jsx)(c.P3F, {
                          className: v.collapseButton,
                          onClick: () => M(!1),
                          children: (0, r.jsx)(g.Z, {
                              direction: g.Z.Directions.DOWN,
                              height: 16,
                              width: 16,
                          }),
                      }),
                      (0, r.jsx)(o.u, {
                          asContainer: !0,
                          text: _.intl.string(_.t["Ku+86e"]),
                          children: (0, r.jsx)(c.P3F, {
                              className: v.closeIcon,
                              onClick: () => (0, f.fi)(n, l.id),
                              children: (0, r.jsx)(c.XHJ, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                          }),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(c.tEY, {
              children: (0, r.jsxs)("div", {
                  tabIndex: 0,
                  onFocus: () => U(!0),
                  onBlur: () => U(!1),
                  className: a()(v.container, {
                      [v.dropIndicatorBefore]: null != Z && x < Z,
                      [v.dropIndicatorAfter]: null != Z && x > Z,
                      [v.containerFocused]: G,
                  }),
                  ref: (e) => {
                      R(D(e));
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: v.dragContainer,
                          onMouseEnter: () => A(!0),
                          onMouseLeave: () => A(!1),
                          children: (0, r.jsx)(c.Vni, {
                              size: "xs",
                              color: "currentColor",
                              className: v.dragIcon,
                          }),
                      }),
                      (0, r.jsxs)(c.Kqy, {
                          gap: 16,
                          children: [
                              (0, r.jsx)(c.xJW, {
                                  title: _.intl.format(_.t.yjS3zs, { index: x + 1 }),
                                  children: (0, r.jsx)(c.oil, {
                                      inputRef: W,
                                      value: l.title,
                                      onChange: (e) => (0, f.Kk)(n, l.id, { title: e }),
                                      placeholder: _.intl.string(_.t.QMCuCg),
                                      maxLength: j.iU,
                                      error: L.title,
                                  }),
                              }),
                              (0, r.jsx)(C, {
                                  prompt: l,
                                  guild: n,
                              }),
                              (0, r.jsxs)(c.xJW, {
                                  title: H
                                      ? _.intl.formatToPlainString(_.t.AbvhZG, {
                                            count: l.options.length,
                                            total: j.qm,
                                        })
                                      : _.intl.formatToPlainString(_.t.b7VxYW, {
                                            count: l.options.length,
                                            total: j.qm,
                                        }),
                                  children: [
                                      (0, r.jsx)(N, {
                                          guild: n,
                                          prompt: l,
                                          promptIndex: x,
                                          errors: L,
                                          singleColumn: I,
                                      }),
                                      null != B ? (0, r.jsx)(c.pdY, { error: B }) : null,
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
                                      (0, r.jsx)(c.XZJ, {
                                          size: 20,
                                          type: c.XZJ.Types.INVERTED,
                                          value: !l.singleSelect,
                                          onChange: (e, t) => (0, f.Kk)(n, l.id, { singleSelect: !t }),
                                          children: (0, r.jsx)(c.Text, {
                                              variant: "text-sm/normal",
                                              color: "interactive-normal",
                                              children: _.intl.string(_.t.uCebZW),
                                          }),
                                      }),
                                      l.inOnboarding
                                          ? (0, r.jsx)(c.XZJ, {
                                                size: 20,
                                                type: c.XZJ.Types.INVERTED,
                                                value: l.inOnboarding && l.required,
                                                onChange: (e, t) => (0, f.Kk)(n, l.id, { required: t }),
                                                disabled: !l.inOnboarding,
                                                children: (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "interactive-normal",
                                                    children: E
                                                        ? _.intl.formatToPlainString(_.t["0re8T0"], { count: z })
                                                        : _.intl.string(_.t.Ur8Vrq),
                                                }),
                                            })
                                          : null,
                                  ],
                              }),
                              (0, r.jsx)(c.P3F, {
                                  className: v.collapseButton,
                                  onClick: () => M(!0),
                                  children: (0, r.jsx)(g.Z, {
                                      direction: g.Z.Directions.UP,
                                      height: 16,
                                      width: 16,
                                  }),
                              }),
                              (0, r.jsx)(o.u, {
                                  asContainer: !0,
                                  text: _.intl.string(_.t["Ku+86e"]),
                                  children: (0, r.jsx)(c.P3F, {
                                      className: v.closeIcon,
                                      onClick: () => (0, f.fi)(n, l.id),
                                      children: (0, r.jsx)(c.XHJ, {
                                          size: "xs",
                                          color: "currentColor",
                                      }),
                                  }),
                              }),
                          ],
                      }),
                      null != F ? (0, r.jsx)(c.pdY, { error: F }) : null,
                  ],
              }),
          });
}
function C(e) {
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
        return (0, r.jsx)(c.P3F, {
            className: v.example,
            onClick: () => (0, f.Kk)(n, t.id, { title: e }),
            children: (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                children: e,
            }),
        });
    }
    return (0, r.jsxs)("div", {
        className: v.examplesSection,
        children: [
            (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: _.intl.string(_.t.ECnSLi),
            }),
            (0, r.jsxs)("div", {
                className: v.examples,
                children: [
                    s(_.intl.string(_.t["7GZMJS"])),
                    s(_.intl.string(_.t.nItydn)),
                    s(_.intl.string(_.t.evuYbm)),
                    s(_.intl.string(_.t.XWRuOj)),
                ],
            }),
        ],
    });
}
function N(e) {
    let { guild: t, prompt: n, promptIndex: i, singleColumn: l, errors: a } = e,
        {
            handleDragStart: s,
            handleDragReset: o,
            handleDragComplete: c,
        } = (0, u.Z)(n.options, (e) => (0, f.Kk)(t, n.id, { options: e }));
    return (0, r.jsxs)("div", {
        className: v.options,
        children: [
            n.options.map((e, d) =>
                (0, r.jsx)(
                    x.Z,
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
            n.options.length < j.qm
                ? (0, r.jsx)(x.B, {
                      guild: t,
                      prompt: n,
                      promptIndex: i,
                      singleColumn: l,
                  })
                : null,
        ],
    });
}
