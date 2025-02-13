n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(603211),
    d = n(710344),
    u = n(637853),
    m = n(107862),
    h = n(259580),
    g = n(823379),
    x = n(889369),
    p = n(570961),
    _ = n(208665),
    C = n(976983),
    f = n(290511),
    v = n(388032),
    N = n(212604);
let j = { optionErrors: [] };
function I(e) {
    var t;
    let { guild: n, prompt: l, disableAutofocus: d, promptIndex: C, dragIndex: I, includeCount: T, singleColumn: S, onPromptDragComplete: R, onPromptDragStart: Z, onPromptDragReset: y } = e,
        { dropdownsAllowed: A } = (0, m.Ug)(n.id),
        L = (0, a.e7)([x.Z], () => x.Z.editedDefaultChannelIds),
        D = A ? f.qm : f.M$,
        {
            drag: k,
            dragSourcePosition: O,
            drop: P,
            setIsDraggable: w
        } = (0, c.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: I,
            optionId: l.id,
            onDragStart: Z,
            onDragComplete: R,
            onDragReset: y
        }),
        M = (0, a.cj)([_.Z], () => {
            var e;
            return null !== (e = _.Z.errors[C]) && void 0 !== e ? e : j;
        }),
        [U, G] = r.useState(!1),
        [B, F] = r.useState(!1),
        z = null !== (t = M.options) && void 0 !== t ? t : M.optionErrors.filter(g.lm)[0],
        H = M.config,
        V = A && l.options.length >= f.fY,
        W = (0, u.kl)(n.id, Array.from(L), [l]).length - L.size,
        Y = r.useRef(null),
        K = r.useRef(C);
    return (r.useEffect(() => {
        K.current = C;
    }),
    r.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === K.current && !d) {
                var e;
                null === (e = Y.current) || void 0 === e || e.focus();
            }
        }, 0);
    }, [d]),
    U)
        ? (0, i.jsx)(o.tEY, {
              children: (0, i.jsxs)('div', {
                  tabIndex: 0,
                  onFocus: () => F(!0),
                  onBlur: () => F(!1),
                  onMouseLeave: () => F(!1),
                  className: s()(N.container, {
                      [N.dropIndicatorBefore]: null != O && C < O,
                      [N.dropIndicatorAfter]: null != O && C > O,
                      [N.containerFocused]: B
                  }),
                  ref: (e) => k(P(e)),
                  children: [
                      (0, i.jsx)('div', {
                          className: N.dragContainer,
                          onMouseEnter: () => w(!0),
                          onMouseLeave: () => w(!1),
                          children: (0, i.jsx)(o.Vni, {
                              size: 'xs',
                              color: 'currentColor',
                              className: N.dragIcon
                          })
                      }),
                      (0, i.jsx)(o.Text, {
                          className: N.questionNumber,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: v.intl.format(v.t.yjS3zs, { index: C + 1 })
                      }),
                      (0, i.jsx)(o.Text, {
                          variant: 'text-lg/semibold',
                          color: 'text-normal',
                          children: l.title
                      }),
                      (0, i.jsx)(o.P3F, {
                          className: N.collapseButton,
                          onClick: () => G(!1),
                          children: (0, i.jsx)(h.Z, {
                              direction: h.Z.Directions.DOWN,
                              height: 16,
                              width: 16
                          })
                      }),
                      (0, i.jsx)(o.DY3, {
                          text: v.intl.string(v.t['Ku+86e']),
                          className: N.removeButton,
                          children: (0, i.jsx)(o.P3F, {
                              className: N.closeIcon,
                              onClick: () => (0, p.fi)(n, l.id),
                              children: (0, i.jsx)(o.XHJ, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                      })
                  ]
              })
          })
        : (0, i.jsx)(o.tEY, {
              children: (0, i.jsxs)('div', {
                  tabIndex: 0,
                  onFocus: () => F(!0),
                  onBlur: () => F(!1),
                  className: s()(N.container, {
                      [N.dropIndicatorBefore]: null != O && C < O,
                      [N.dropIndicatorAfter]: null != O && C > O,
                      [N.containerFocused]: B
                  }),
                  ref: (e) => k(P(e)),
                  children: [
                      (0, i.jsx)('div', {
                          className: N.dragContainer,
                          onMouseEnter: () => w(!0),
                          onMouseLeave: () => w(!1),
                          children: (0, i.jsx)(o.Vni, {
                              size: 'xs',
                              color: 'currentColor',
                              className: N.dragIcon
                          })
                      }),
                      (0, i.jsx)(o.Text, {
                          className: N.questionNumber,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: v.intl.format(v.t.yjS3zs, { index: C + 1 })
                      }),
                      (0, i.jsx)(o.oil, {
                          className: N.title,
                          inputClassName: N.titleInput,
                          inputRef: Y,
                          value: l.title,
                          onChange: (e) => (0, p.Kk)(n, l.id, { title: e }),
                          placeholder: v.intl.string(v.t.QMCuCg),
                          maxLength: f.iU,
                          error: M.title
                      }),
                      (0, i.jsx)(E, {
                          prompt: l,
                          guild: n
                      }),
                      (0, i.jsx)(o.Text, {
                          className: N.optionsHeader,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: V
                              ? v.intl.formatToPlainString(v.t.AbvhZG, {
                                    count: l.options.length,
                                    total: D
                                })
                              : v.intl.formatToPlainString(v.t.b7VxYW, {
                                    count: l.options.length,
                                    total: D
                                })
                      }),
                      (0, i.jsx)(b, {
                          guild: n,
                          prompt: l,
                          promptIndex: C,
                          errors: M,
                          singleColumn: S
                      }),
                      null != z ? (0, i.jsx)(o.pdY, { error: z }) : null,
                      (0, i.jsxs)('div', {
                          className: N.buttons,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: N.checkboxes,
                                  children: [
                                      (0, i.jsx)(o.XZJ, {
                                          size: 20,
                                          type: o.XZJ.Types.INVERTED,
                                          value: !l.singleSelect,
                                          onChange: (e, t) => (0, p.Kk)(n, l.id, { singleSelect: !t }),
                                          children: (0, i.jsx)(o.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'interactive-normal',
                                              children: v.intl.string(v.t.uCebZW)
                                          })
                                      }),
                                      l.inOnboarding
                                          ? (0, i.jsx)(o.XZJ, {
                                                size: 20,
                                                type: o.XZJ.Types.INVERTED,
                                                value: l.inOnboarding && l.required,
                                                onChange: (e, t) => (0, p.Kk)(n, l.id, { required: t }),
                                                disabled: !l.inOnboarding,
                                                children: (0, i.jsx)(o.Text, {
                                                    variant: 'text-sm/normal',
                                                    color: 'interactive-normal',
                                                    children: T ? v.intl.formatToPlainString(v.t['0re8T0'], { count: W }) : v.intl.string(v.t.Ur8Vrq)
                                                })
                                            })
                                          : null
                                  ]
                              }),
                              (0, i.jsx)(o.P3F, {
                                  className: N.collapseButton,
                                  onClick: () => G(!0),
                                  children: (0, i.jsx)(h.Z, {
                                      direction: h.Z.Directions.UP,
                                      height: 16,
                                      width: 16
                                  })
                              }),
                              (0, i.jsx)(o.DY3, {
                                  text: v.intl.string(v.t['Ku+86e']),
                                  className: N.removeButton,
                                  children: (0, i.jsx)(o.P3F, {
                                      className: N.closeIcon,
                                      onClick: () => (0, p.fi)(n, l.id),
                                      children: (0, i.jsx)(o.XHJ, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      })
                                  })
                              })
                          ]
                      }),
                      null != H ? (0, i.jsx)(o.pdY, { error: H }) : null
                  ]
              })
          });
}
function E(e) {
    let { prompt: t, guild: n } = e,
        [l, s] = r.useState(!1);
    if (
        (r.useEffect(() => {
            !l && t.title.length > 0 && s(!0);
        }, [l, t]),
        l)
    )
        return null;
    function a(e) {
        return (0, i.jsx)(o.P3F, {
            className: N.example,
            onClick: () => (0, p.Kk)(n, t.id, { title: e }),
            children: (0, i.jsx)(o.Text, {
                variant: 'text-xs/normal',
                children: e
            })
        });
    }
    return (0, i.jsxs)('div', {
        className: N.examplesSection,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: v.intl.string(v.t.ECnSLi)
            }),
            (0, i.jsxs)('div', {
                className: N.examples,
                children: [a(v.intl.string(v.t['7GZMJS'])), a(v.intl.string(v.t.nItydn)), a(v.intl.string(v.t.evuYbm)), a(v.intl.string(v.t.XWRuOj))]
            })
        ]
    });
}
function b(e) {
    let { guild: t, prompt: n, promptIndex: r, singleColumn: l, errors: s } = e,
        { dropdownsAllowed: a } = (0, m.Ug)(t.id),
        o = a ? f.qm : f.M$,
        { handleDragStart: c, handleDragReset: u, handleDragComplete: h } = (0, d.Z)(n.options, (e) => (0, p.Kk)(t, n.id, { options: e }));
    return (0, i.jsxs)('div', {
        className: N.options,
        children: [
            n.options.map((e, a) =>
                (0, i.jsx)(
                    C.Z,
                    {
                        guild: t,
                        prompt: n,
                        promptIndex: r,
                        singleColumn: l,
                        option: e,
                        onDragStart: c,
                        onDragComplete: h,
                        onDragReset: u,
                        hasError: null != s.optionErrors[a]
                    },
                    e.id
                )
            ),
            n.options.length < o
                ? (0, i.jsx)(C.B, {
                      guild: t,
                      prompt: n,
                      promptIndex: r,
                      singleColumn: l
                  })
                : null
        ]
    });
}
