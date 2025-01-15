n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
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
    f = n(208665),
    C = n(976983),
    v = n(290511),
    I = n(388032),
    N = n(354046);
let _ = { optionErrors: [] };
function T(e) {
    var t;
    let { guild: n, prompt: l, disableAutofocus: d, promptIndex: C, dragIndex: T, includeCount: E, singleColumn: S, onPromptDragComplete: R, onPromptDragStart: y, onPromptDragReset: A } = e,
        { dropdownsAllowed: Z } = (0, m.Ug)(n.id),
        L = (0, a.e7)([x.Z], () => x.Z.editedDefaultChannelIds),
        D = Z ? v.qm : v.M$,
        {
            drag: O,
            dragSourcePosition: M,
            drop: P,
            setIsDraggable: k
        } = (0, c.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: T,
            optionId: l.id,
            onDragStart: y,
            onDragComplete: R,
            onDragReset: A
        }),
        w = (0, a.cj)([f.Z], () => {
            var e;
            return null !== (e = f.Z.errors[C]) && void 0 !== e ? e : _;
        }),
        [B, U] = r.useState(!1),
        [G, F] = r.useState(!1),
        H = null !== (t = w.options) && void 0 !== t ? t : w.optionErrors.filter(g.lm)[0],
        z = w.config,
        V = Z && l.options.length >= v.fY,
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
    B)
        ? (0, i.jsx)(o.FocusRing, {
              children: (0, i.jsxs)('div', {
                  tabIndex: 0,
                  onFocus: () => F(!0),
                  onBlur: () => F(!1),
                  onMouseLeave: () => F(!1),
                  className: s()(N.container, {
                      [N.dropIndicatorBefore]: null != M && C < M,
                      [N.dropIndicatorAfter]: null != M && C > M,
                      [N.containerFocused]: G
                  }),
                  ref: (e) => O(P(e)),
                  children: [
                      (0, i.jsx)('div', {
                          className: N.dragContainer,
                          onMouseEnter: () => k(!0),
                          onMouseLeave: () => k(!1),
                          children: (0, i.jsx)(o.DragIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: N.dragIcon
                          })
                      }),
                      (0, i.jsx)(o.Text, {
                          className: N.questionNumber,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: I.intl.format(I.t.yjS3zs, { index: C + 1 })
                      }),
                      (0, i.jsx)(o.Text, {
                          variant: 'text-lg/semibold',
                          color: 'text-normal',
                          children: l.title
                      }),
                      (0, i.jsx)(o.Clickable, {
                          className: N.collapseButton,
                          onClick: () => U(!1),
                          children: (0, i.jsx)(h.Z, {
                              direction: h.Z.Directions.DOWN,
                              height: 16,
                              width: 16
                          })
                      }),
                      (0, i.jsx)(o.TooltipContainer, {
                          text: I.intl.string(I.t['Ku+86e']),
                          className: N.removeButton,
                          children: (0, i.jsx)(o.Clickable, {
                              className: N.closeIcon,
                              onClick: () => (0, p.fi)(n, l.id),
                              children: (0, i.jsx)(o.TrashIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                      })
                  ]
              })
          })
        : (0, i.jsx)(o.FocusRing, {
              children: (0, i.jsxs)('div', {
                  tabIndex: 0,
                  onFocus: () => F(!0),
                  onBlur: () => F(!1),
                  className: s()(N.container, {
                      [N.dropIndicatorBefore]: null != M && C < M,
                      [N.dropIndicatorAfter]: null != M && C > M,
                      [N.containerFocused]: G
                  }),
                  ref: (e) => O(P(e)),
                  children: [
                      (0, i.jsx)('div', {
                          className: N.dragContainer,
                          onMouseEnter: () => k(!0),
                          onMouseLeave: () => k(!1),
                          children: (0, i.jsx)(o.DragIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: N.dragIcon
                          })
                      }),
                      (0, i.jsx)(o.Text, {
                          className: N.questionNumber,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: I.intl.format(I.t.yjS3zs, { index: C + 1 })
                      }),
                      (0, i.jsx)(o.TextInput, {
                          className: N.title,
                          inputClassName: N.titleInput,
                          inputRef: Y,
                          value: l.title,
                          onChange: (e) => (0, p.Kk)(n, l.id, { title: e }),
                          placeholder: I.intl.string(I.t.QMCuCg),
                          maxLength: v.iU,
                          error: w.title
                      }),
                      (0, i.jsx)(j, {
                          prompt: l,
                          guild: n
                      }),
                      (0, i.jsx)(o.Text, {
                          className: N.optionsHeader,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: V
                              ? I.intl.formatToPlainString(I.t.AbvhZG, {
                                    count: l.options.length,
                                    total: D
                                })
                              : I.intl.formatToPlainString(I.t.b7VxYW, {
                                    count: l.options.length,
                                    total: D
                                })
                      }),
                      (0, i.jsx)(b, {
                          guild: n,
                          prompt: l,
                          promptIndex: C,
                          errors: w,
                          singleColumn: S
                      }),
                      null != H ? (0, i.jsx)(o.InputError, { error: H }) : null,
                      (0, i.jsxs)('div', {
                          className: N.buttons,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: N.checkboxes,
                                  children: [
                                      (0, i.jsx)(o.Checkbox, {
                                          size: 20,
                                          type: o.Checkbox.Types.INVERTED,
                                          value: !l.singleSelect,
                                          onChange: (e, t) => (0, p.Kk)(n, l.id, { singleSelect: !t }),
                                          children: (0, i.jsx)(o.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'interactive-normal',
                                              children: I.intl.string(I.t.uCebZW)
                                          })
                                      }),
                                      l.inOnboarding
                                          ? (0, i.jsx)(o.Checkbox, {
                                                size: 20,
                                                type: o.Checkbox.Types.INVERTED,
                                                value: l.inOnboarding && l.required,
                                                onChange: (e, t) => (0, p.Kk)(n, l.id, { required: t }),
                                                disabled: !l.inOnboarding,
                                                children: (0, i.jsx)(o.Text, {
                                                    variant: 'text-sm/normal',
                                                    color: 'interactive-normal',
                                                    children: E ? I.intl.formatToPlainString(I.t['0re8T0'], { count: W }) : I.intl.string(I.t.Ur8Vrq)
                                                })
                                            })
                                          : null
                                  ]
                              }),
                              (0, i.jsx)(o.Clickable, {
                                  className: N.collapseButton,
                                  onClick: () => U(!0),
                                  children: (0, i.jsx)(h.Z, {
                                      direction: h.Z.Directions.UP,
                                      height: 16,
                                      width: 16
                                  })
                              }),
                              (0, i.jsx)(o.TooltipContainer, {
                                  text: I.intl.string(I.t['Ku+86e']),
                                  className: N.removeButton,
                                  children: (0, i.jsx)(o.Clickable, {
                                      className: N.closeIcon,
                                      onClick: () => (0, p.fi)(n, l.id),
                                      children: (0, i.jsx)(o.TrashIcon, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      })
                                  })
                              })
                          ]
                      }),
                      null != z ? (0, i.jsx)(o.InputError, { error: z }) : null
                  ]
              })
          });
}
function j(e) {
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
        return (0, i.jsx)(o.Clickable, {
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
                children: I.intl.string(I.t.ECnSLi)
            }),
            (0, i.jsxs)('div', {
                className: N.examples,
                children: [a(I.intl.string(I.t['7GZMJS'])), a(I.intl.string(I.t.nItydn)), a(I.intl.string(I.t.evuYbm)), a(I.intl.string(I.t.XWRuOj))]
            })
        ]
    });
}
function b(e) {
    let { guild: t, prompt: n, promptIndex: r, singleColumn: l, errors: s } = e,
        { dropdownsAllowed: a } = (0, m.Ug)(t.id),
        o = a ? v.qm : v.M$,
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
