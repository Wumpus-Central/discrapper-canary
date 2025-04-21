n.d(t, { Z: () => C }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(603211),
    d = n(710344),
    u = n(637853),
    m = n(107862),
    g = n(259580),
    p = n(823379),
    h = n(889369),
    f = n(570961),
    x = n(208665),
    b = n(976983),
    j = n(290511),
    _ = n(388032),
    v = n(434840);
let O = { optionErrors: [] };
function C(e) {
    var t;
    let { guild: n, prompt: l, disableAutofocus: d, promptIndex: b, dragIndex: C, includeCount: I, singleColumn: E, onPromptDragComplete: S, onPromptDragStart: T, onPromptDragReset: P } = e,
        { dropdownsAllowed: w } = (0, m.Ug)(n.id),
        R = (0, a.e7)([h.Z], () => h.Z.editedDefaultChannelIds),
        Z = w ? j.qm : j.M$,
        {
            drag: D,
            dragSourcePosition: A,
            drop: k,
            setIsDraggable: L
        } = (0, c.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: C,
            optionId: l.id,
            onDragStart: T,
            onDragComplete: S,
            onDragReset: P
        }),
        M = (0, a.cj)([x.Z], () => {
            var e;
            return null != (e = x.Z.errors[b]) ? e : O;
        }),
        [G, U] = i.useState(!1),
        [B, F] = i.useState(!1),
        z = null != (t = M.options) ? t : M.optionErrors.filter(p.lm)[0],
        H = M.config,
        V = w && l.options.length >= j.fY,
        W = (0, u.kl)(n.id, Array.from(R), [l]).length - R.size,
        Y = i.useRef(null),
        K = i.useRef(b);
    return (i.useEffect(() => {
        K.current = b;
    }),
    i.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === K.current && !d) {
                var e;
                null == (e = Y.current) || e.focus();
            }
        }, 0);
    }, [d]),
    G)
        ? (0, r.jsx)(o.tEY, {
              children: (0, r.jsxs)('div', {
                  tabIndex: 0,
                  onFocus: () => F(!0),
                  onBlur: () => F(!1),
                  onMouseLeave: () => F(!1),
                  className: s()(v.container, {
                      [v.dropIndicatorBefore]: null != A && b < A,
                      [v.dropIndicatorAfter]: null != A && b > A,
                      [v.containerFocused]: B
                  }),
                  ref: (e) => {
                      D(k(e));
                  },
                  children: [
                      (0, r.jsx)('div', {
                          className: v.dragContainer,
                          onMouseEnter: () => L(!0),
                          onMouseLeave: () => L(!1),
                          children: (0, r.jsx)(o.Vni, {
                              size: 'xs',
                              color: 'currentColor',
                              className: v.dragIcon
                          })
                      }),
                      (0, r.jsx)(o.Text, {
                          className: v.questionNumber,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: _.intl.format(_.t.yjS3zs, { index: b + 1 })
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: 'text-lg/semibold',
                          color: 'text-normal',
                          children: l.title
                      }),
                      (0, r.jsx)(o.P3F, {
                          className: v.collapseButton,
                          onClick: () => U(!1),
                          children: (0, r.jsx)(g.Z, {
                              direction: g.Z.Directions.DOWN,
                              height: 16,
                              width: 16
                          })
                      }),
                      (0, r.jsx)(o.DY3, {
                          text: _.intl.string(_.t['Ku+86e']),
                          className: v.removeButton,
                          children: (0, r.jsx)(o.P3F, {
                              className: v.closeIcon,
                              onClick: () => (0, f.fi)(n, l.id),
                              children: (0, r.jsx)(o.XHJ, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                      })
                  ]
              })
          })
        : (0, r.jsx)(o.tEY, {
              children: (0, r.jsxs)('div', {
                  tabIndex: 0,
                  onFocus: () => F(!0),
                  onBlur: () => F(!1),
                  className: s()(v.container, {
                      [v.dropIndicatorBefore]: null != A && b < A,
                      [v.dropIndicatorAfter]: null != A && b > A,
                      [v.containerFocused]: B
                  }),
                  ref: (e) => {
                      D(k(e));
                  },
                  children: [
                      (0, r.jsx)('div', {
                          className: v.dragContainer,
                          onMouseEnter: () => L(!0),
                          onMouseLeave: () => L(!1),
                          children: (0, r.jsx)(o.Vni, {
                              size: 'xs',
                              color: 'currentColor',
                              className: v.dragIcon
                          })
                      }),
                      (0, r.jsx)(o.Text, {
                          className: v.questionNumber,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: _.intl.format(_.t.yjS3zs, { index: b + 1 })
                      }),
                      (0, r.jsx)(o.oil, {
                          className: v.title,
                          inputClassName: v.titleInput,
                          inputRef: Y,
                          value: l.title,
                          onChange: (e) => (0, f.Kk)(n, l.id, { title: e }),
                          placeholder: _.intl.string(_.t.QMCuCg),
                          maxLength: j.iU,
                          error: M.title
                      }),
                      (0, r.jsx)(y, {
                          prompt: l,
                          guild: n
                      }),
                      (0, r.jsx)(o.Text, {
                          className: v.optionsHeader,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: V
                              ? _.intl.formatToPlainString(_.t.AbvhZG, {
                                    count: l.options.length,
                                    total: Z
                                })
                              : _.intl.formatToPlainString(_.t.b7VxYW, {
                                    count: l.options.length,
                                    total: Z
                                })
                      }),
                      (0, r.jsx)(N, {
                          guild: n,
                          prompt: l,
                          promptIndex: b,
                          errors: M,
                          singleColumn: E
                      }),
                      null != z ? (0, r.jsx)(o.pdY, { error: z }) : null,
                      (0, r.jsxs)('div', {
                          className: v.buttons,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: v.checkboxes,
                                  children: [
                                      (0, r.jsx)(o.XZJ, {
                                          size: 20,
                                          type: o.XZJ.Types.INVERTED,
                                          value: !l.singleSelect,
                                          onChange: (e, t) => (0, f.Kk)(n, l.id, { singleSelect: !t }),
                                          children: (0, r.jsx)(o.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'interactive-normal',
                                              children: _.intl.string(_.t.uCebZW)
                                          })
                                      }),
                                      l.inOnboarding
                                          ? (0, r.jsx)(o.XZJ, {
                                                size: 20,
                                                type: o.XZJ.Types.INVERTED,
                                                value: l.inOnboarding && l.required,
                                                onChange: (e, t) => (0, f.Kk)(n, l.id, { required: t }),
                                                disabled: !l.inOnboarding,
                                                children: (0, r.jsx)(o.Text, {
                                                    variant: 'text-sm/normal',
                                                    color: 'interactive-normal',
                                                    children: I ? _.intl.formatToPlainString(_.t['0re8T0'], { count: W }) : _.intl.string(_.t.Ur8Vrq)
                                                })
                                            })
                                          : null
                                  ]
                              }),
                              (0, r.jsx)(o.P3F, {
                                  className: v.collapseButton,
                                  onClick: () => U(!0),
                                  children: (0, r.jsx)(g.Z, {
                                      direction: g.Z.Directions.UP,
                                      height: 16,
                                      width: 16
                                  })
                              }),
                              (0, r.jsx)(o.DY3, {
                                  text: _.intl.string(_.t['Ku+86e']),
                                  className: v.removeButton,
                                  children: (0, r.jsx)(o.P3F, {
                                      className: v.closeIcon,
                                      onClick: () => (0, f.fi)(n, l.id),
                                      children: (0, r.jsx)(o.XHJ, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      })
                                  })
                              })
                          ]
                      }),
                      null != H ? (0, r.jsx)(o.pdY, { error: H }) : null
                  ]
              })
          });
}
function y(e) {
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
        return (0, r.jsx)(o.P3F, {
            className: v.example,
            onClick: () => (0, f.Kk)(n, t.id, { title: e }),
            children: (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                children: e
            })
        });
    }
    return (0, r.jsxs)('div', {
        className: v.examplesSection,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: _.intl.string(_.t.ECnSLi)
            }),
            (0, r.jsxs)('div', {
                className: v.examples,
                children: [a(_.intl.string(_.t['7GZMJS'])), a(_.intl.string(_.t.nItydn)), a(_.intl.string(_.t.evuYbm)), a(_.intl.string(_.t.XWRuOj))]
            })
        ]
    });
}
function N(e) {
    let { guild: t, prompt: n, promptIndex: i, singleColumn: l, errors: s } = e,
        { dropdownsAllowed: a } = (0, m.Ug)(t.id),
        o = a ? j.qm : j.M$,
        { handleDragStart: c, handleDragReset: u, handleDragComplete: g } = (0, d.Z)(n.options, (e) => (0, f.Kk)(t, n.id, { options: e }));
    return (0, r.jsxs)('div', {
        className: v.options,
        children: [
            n.options.map((e, a) =>
                (0, r.jsx)(
                    b.Z,
                    {
                        guild: t,
                        prompt: n,
                        promptIndex: i,
                        singleColumn: l,
                        option: e,
                        onDragStart: c,
                        onDragComplete: g,
                        onDragReset: u,
                        hasError: null != s.optionErrors[a]
                    },
                    e.id
                )
            ),
            n.options.length < o
                ? (0, r.jsx)(b.B, {
                      guild: t,
                      prompt: n,
                      promptIndex: i,
                      singleColumn: l
                  })
                : null
        ]
    });
}
