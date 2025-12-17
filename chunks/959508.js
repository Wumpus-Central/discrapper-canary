n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(28664),
    c = n(481060),
    d = n(603211),
    u = n(710344),
    g = n(637853),
    f = n(259580),
    m = n(823379),
    b = n(889369),
    p = n(570961),
    h = n(208665),
    x = n(976983),
    j = n(290511),
    v = n(388032),
    O = n(529650);
let C = { optionErrors: [] };
function y(e) {
    var t;
    let {
            guild: n,
            prompt: l,
            disableAutofocus: u,
            promptIndex: x,
            dragIndex: y,
            includeCount: I,
            singleColumn: S,
            onPromptDragComplete: _,
            onPromptDragStart: T,
            onPromptDragReset: P,
        } = e,
        w = (0, s.e7)([b.Z], () => b.Z.editedDefaultChannelIds),
        {
            drag: Z,
            dragSourcePosition: R,
            drop: D,
            setIsDraggable: A,
        } = (0, d.Z)({
            type: "ONBOARDING_PROMPT_CARD",
            index: y,
            optionId: l.id,
            onDragStart: T,
            onDragComplete: _,
            onDragReset: P,
        }),
        L = (0, s.cj)([h.Z], () => {
            var e;
            return null != (e = h.Z.errors[x]) ? e : C;
        }),
        [k, G] = i.useState(!1),
        [M, U] = i.useState(!1),
        B = null != (t = L.options) ? t : L.optionErrors.filter(m.lm)[0],
        F = L.config,
        H = l.options.length >= j.fY,
        W = (0, g.kl)(n.id, Array.from(w), [l]).length - w.size,
        z = i.useRef(null),
        V = i.useRef(x);
    return (i.useEffect(() => {
        V.current = x;
    }),
    i.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === V.current && !u) {
                var e;
                null == (e = z.current) || e.focus();
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
                  className: a()(O.container, {
                      [O.dropIndicatorBefore]: null != R && x < R,
                      [O.dropIndicatorAfter]: null != R && x > R,
                      [O.containerFocused]: M,
                  }),
                  ref: (e) => {
                      Z(D(e));
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: O.dragContainer,
                          onMouseEnter: () => A(!0),
                          onMouseLeave: () => A(!1),
                          children: (0, r.jsx)(c.Vni, {
                              size: "xs",
                              color: "currentColor",
                              className: O.dragIcon,
                          }),
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: v.intl.format(v.t.yjS3zs, { index: x + 1 }),
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "text-lg/semibold",
                          color: "text-default",
                          children: l.title,
                      }),
                      (0, r.jsx)(c.P3F, {
                          className: O.collapseButton,
                          onClick: () => G(!1),
                          children: (0, r.jsx)(f.Z, {
                              direction: f.Z.Directions.DOWN,
                              height: 16,
                              width: 16,
                          }),
                      }),
                      (0, r.jsx)(o.u, {
                          asContainer: !0,
                          text: v.intl.string(v.t["Ku+86R"]),
                          children: (0, r.jsx)("div", {
                              className: O.closeIcon,
                              children: (0, r.jsx)(c.hU, {
                                  size: "sm",
                                  icon: c.XHJ,
                                  variant: "icon-only",
                                  onClick: () => (0, p.fi)(n, l.id),
                                  "aria-label": v.intl.string(v.t["Ku+86R"]),
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
                  className: a()(O.container, {
                      [O.dropIndicatorBefore]: null != R && x < R,
                      [O.dropIndicatorAfter]: null != R && x > R,
                      [O.containerFocused]: M,
                  }),
                  ref: (e) => {
                      Z(D(e));
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: O.dragContainer,
                          onMouseEnter: () => A(!0),
                          onMouseLeave: () => A(!1),
                          children: (0, r.jsx)(c.Vni, {
                              size: "xs",
                              color: "currentColor",
                              className: O.dragIcon,
                          }),
                      }),
                      (0, r.jsxs)(c.Kqy, {
                          gap: 16,
                          children: [
                              (0, r.jsx)(c.oil, {
                                  label: v.intl.formatToPlainString(v.t.yjS3zs, { index: x + 1 }),
                                  inputRef: z,
                                  value: l.title,
                                  onChange: (e) => (0, p.Kk)(n, l.id, { title: e }),
                                  placeholder: v.intl.string(v.t.QMCuCo),
                                  maxLength: j.iU,
                                  error: L.title,
                              }),
                              (0, r.jsx)(N, {
                                  prompt: l,
                                  guild: n,
                              }),
                              (0, r.jsx)(c.gNt, {
                                  errorMessage: B,
                                  label: H
                                      ? v.intl.formatToPlainString(v.t.AbvhZD, {
                                            count: l.options.length,
                                            total: j.qm,
                                        })
                                      : v.intl.formatToPlainString(v.t.b7VxYX, {
                                            count: l.options.length,
                                            total: j.qm,
                                        }),
                                  children: (0, r.jsx)(E, {
                                      guild: n,
                                      prompt: l,
                                      promptIndex: x,
                                      errors: L,
                                      singleColumn: S,
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: O.buttons,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: O.checkboxes,
                                  children: [
                                      (0, r.jsx)(c.Checkbox, {
                                          checked: !l.singleSelect,
                                          onChange: (e) => (0, p.Kk)(n, l.id, { singleSelect: !e }),
                                          label: v.intl.string(v.t.uCebZa),
                                      }),
                                      l.inOnboarding
                                          ? (0, r.jsx)(c.Checkbox, {
                                                checked: !!(l.inOnboarding && l.required),
                                                onChange: (e) => (0, p.Kk)(n, l.id, { required: e }),
                                                disabled: !l.inOnboarding,
                                                label: I
                                                    ? v.intl.formatToPlainString(v.t["0re8T6"], { count: W })
                                                    : v.intl.string(v.t.Ur8Vrt),
                                            })
                                          : null,
                                  ],
                              }),
                              (0, r.jsx)(c.P3F, {
                                  className: O.collapseButton,
                                  onClick: () => G(!0),
                                  children: (0, r.jsx)(f.Z, {
                                      direction: f.Z.Directions.UP,
                                      height: 16,
                                      width: 16,
                                  }),
                              }),
                              (0, r.jsx)(o.u, {
                                  asContainer: !0,
                                  text: v.intl.string(v.t["Ku+86R"]),
                                  children: (0, r.jsx)("div", {
                                      className: O.closeIcon,
                                      children: (0, r.jsx)(c.hU, {
                                          size: "sm",
                                          icon: c.XHJ,
                                          variant: "icon-only",
                                          onClick: () => (0, p.fi)(n, l.id),
                                          "aria-label": v.intl.string(v.t["Ku+86R"]),
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
        return (0, r.jsx)(c.P3F, {
            className: O.example,
            onClick: () => (0, p.Kk)(n, t.id, { title: e }),
            children: (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                children: e,
            }),
        });
    }
    return (0, r.jsxs)("div", {
        className: O.examplesSection,
        children: [
            (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: v.intl.string(v.t.ECnSLl),
            }),
            (0, r.jsxs)("div", {
                className: O.examples,
                children: [
                    s(v.intl.string(v.t["7GZMJa"])),
                    s(v.intl.string(v.t.nItydm)),
                    s(v.intl.string(v.t.evuYbq)),
                    s(v.intl.string(v.t.XWRuOp)),
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
        } = (0, u.Z)(n.options, (e) => (0, p.Kk)(t, n.id, { options: e }));
    return (0, r.jsxs)("div", {
        className: O.options,
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
