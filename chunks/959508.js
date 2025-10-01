n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(28664),
    c = n(481060),
    d = n(603211),
    u = n(710344),
    m = n(637853),
    g = n(259580),
    p = n(823379),
    f = n(889369),
    h = n(570961),
    x = n(208665),
    b = n(976983),
    j = n(290511),
    v = n(388032),
    _ = n(457663);
let O = { optionErrors: [] };
function y(e) {
    var t;
    let {
            guild: n,
            prompt: l,
            disableAutofocus: u,
            promptIndex: b,
            dragIndex: y,
            includeCount: E,
            singleColumn: I,
            onPromptDragComplete: S,
            onPromptDragStart: T,
            onPromptDragReset: P,
        } = e,
        w = (0, a.e7)([f.Z], () => f.Z.editedDefaultChannelIds),
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
        L = (0, a.cj)([x.Z], () => {
            var e;
            return null != (e = x.Z.errors[b]) ? e : O;
        }),
        [k, G] = i.useState(!1),
        [M, U] = i.useState(!1),
        B = null != (t = L.options) ? t : L.optionErrors.filter(p.lm)[0],
        F = L.config,
        H = l.options.length >= j.fY,
        z = (0, m.kl)(n.id, Array.from(w), [l]).length - w.size,
        V = i.useRef(null),
        W = i.useRef(b);
    return (i.useEffect(() => {
        W.current = b;
    }),
    i.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === W.current && !u) {
                var e;
                null == (e = V.current) || e.focus();
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
                  className: s()(_.container, {
                      [_.dropIndicatorBefore]: null != Z && b < Z,
                      [_.dropIndicatorAfter]: null != Z && b > Z,
                      [_.containerFocused]: M,
                  }),
                  ref: (e) => {
                      R(D(e));
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: _.dragContainer,
                          onMouseEnter: () => A(!0),
                          onMouseLeave: () => A(!1),
                          children: (0, r.jsx)(c.Vni, {
                              size: "xs",
                              color: "currentColor",
                              className: _.dragIcon,
                          }),
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: v.intl.format(v.t.yjS3zs, { index: b + 1 }),
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "text-lg/semibold",
                          color: "text-default",
                          children: l.title,
                      }),
                      (0, r.jsx)(c.P3F, {
                          className: _.collapseButton,
                          onClick: () => G(!1),
                          children: (0, r.jsx)(g.Z, {
                              direction: g.Z.Directions.DOWN,
                              height: 16,
                              width: 16,
                          }),
                      }),
                      (0, r.jsx)(o.u, {
                          asContainer: !0,
                          text: v.intl.string(v.t["Ku+86e"]),
                          children: (0, r.jsx)("div", {
                              className: _.closeIcon,
                              children: (0, r.jsx)(c.hU, {
                                  size: "sm",
                                  icon: c.XHJ,
                                  variant: "icon-only",
                                  onClick: () => (0, h.fi)(n, l.id),
                                  "aria-label": v.intl.string(v.t["Ku+86e"]),
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
                  className: s()(_.container, {
                      [_.dropIndicatorBefore]: null != Z && b < Z,
                      [_.dropIndicatorAfter]: null != Z && b > Z,
                      [_.containerFocused]: M,
                  }),
                  ref: (e) => {
                      R(D(e));
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: _.dragContainer,
                          onMouseEnter: () => A(!0),
                          onMouseLeave: () => A(!1),
                          children: (0, r.jsx)(c.Vni, {
                              size: "xs",
                              color: "currentColor",
                              className: _.dragIcon,
                          }),
                      }),
                      (0, r.jsxs)(c.Kqy, {
                          gap: 16,
                          children: [
                              (0, r.jsx)(c.oil, {
                                  label: v.intl.formatToPlainString(v.t.yjS3zs, { index: b + 1 }),
                                  inputRef: V,
                                  value: l.title,
                                  onChange: (e) => (0, h.Kk)(n, l.id, { title: e }),
                                  placeholder: v.intl.string(v.t.QMCuCg),
                                  maxLength: j.iU,
                                  error: L.title,
                              }),
                              (0, r.jsx)(C, {
                                  prompt: l,
                                  guild: n,
                              }),
                              (0, r.jsxs)(c.xJW, {
                                  title: H
                                      ? v.intl.formatToPlainString(v.t.AbvhZG, {
                                            count: l.options.length,
                                            total: j.qm,
                                        })
                                      : v.intl.formatToPlainString(v.t.b7VxYW, {
                                            count: l.options.length,
                                            total: j.qm,
                                        }),
                                  children: [
                                      (0, r.jsx)(N, {
                                          guild: n,
                                          prompt: l,
                                          promptIndex: b,
                                          errors: L,
                                          singleColumn: I,
                                      }),
                                      null != B ? (0, r.jsx)(c.pdY, { error: B }) : null,
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: _.buttons,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: _.checkboxes,
                                  children: [
                                      (0, r.jsx)(c.XZJ, {
                                          checked: !l.singleSelect,
                                          onChange: (e) => (0, h.Kk)(n, l.id, { singleSelect: !e }),
                                          label: v.intl.string(v.t.uCebZW),
                                      }),
                                      l.inOnboarding
                                          ? (0, r.jsx)(c.XZJ, {
                                                checked: l.inOnboarding && l.required,
                                                onChange: (e) => (0, h.Kk)(n, l.id, { required: e }),
                                                disabled: !l.inOnboarding,
                                                label: E
                                                    ? v.intl.formatToPlainString(v.t["0re8T0"], { count: z })
                                                    : v.intl.string(v.t.Ur8Vrq),
                                            })
                                          : null,
                                  ],
                              }),
                              (0, r.jsx)(c.P3F, {
                                  className: _.collapseButton,
                                  onClick: () => G(!0),
                                  children: (0, r.jsx)(g.Z, {
                                      direction: g.Z.Directions.UP,
                                      height: 16,
                                      width: 16,
                                  }),
                              }),
                              (0, r.jsx)(o.u, {
                                  asContainer: !0,
                                  text: v.intl.string(v.t["Ku+86e"]),
                                  children: (0, r.jsx)("div", {
                                      className: _.closeIcon,
                                      children: (0, r.jsx)(c.hU, {
                                          size: "sm",
                                          icon: c.XHJ,
                                          variant: "icon-only",
                                          onClick: () => (0, h.fi)(n, l.id),
                                          "aria-label": v.intl.string(v.t["Ku+86e"]),
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
        [l, s] = i.useState(!1);
    if (
        (i.useEffect(() => {
            !l && t.title.length > 0 && s(!0);
        }, [l, t]),
        l)
    )
        return null;
    function a(e) {
        return (0, r.jsx)(c.P3F, {
            className: _.example,
            onClick: () => (0, h.Kk)(n, t.id, { title: e }),
            children: (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                children: e,
            }),
        });
    }
    return (0, r.jsxs)("div", {
        className: _.examplesSection,
        children: [
            (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: v.intl.string(v.t.ECnSLi),
            }),
            (0, r.jsxs)("div", {
                className: _.examples,
                children: [
                    a(v.intl.string(v.t["7GZMJS"])),
                    a(v.intl.string(v.t.nItydn)),
                    a(v.intl.string(v.t.evuYbm)),
                    a(v.intl.string(v.t.XWRuOj)),
                ],
            }),
        ],
    });
}
function N(e) {
    let { guild: t, prompt: n, promptIndex: i, singleColumn: l, errors: s } = e,
        {
            handleDragStart: a,
            handleDragReset: o,
            handleDragComplete: c,
        } = (0, u.Z)(n.options, (e) => (0, h.Kk)(t, n.id, { options: e }));
    return (0, r.jsxs)("div", {
        className: _.options,
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
                        onDragStart: a,
                        onDragComplete: c,
                        onDragReset: o,
                        hasError: null != s.optionErrors[d],
                    },
                    e.id,
                ),
            ),
            n.options.length < j.qm
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
