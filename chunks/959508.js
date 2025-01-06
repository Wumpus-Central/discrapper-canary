n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
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
    _ = n(388032),
    I = n(530961);
let N = { optionErrors: [] };
function T(e) {
    var t;
    let { guild: n, prompt: l, disableAutofocus: d, promptIndex: C, dragIndex: T, includeCount: S, singleColumn: E, onPromptDragComplete: R, onPromptDragStart: y, onPromptDragReset: A } = e,
        { dropdownsAllowed: Z } = (0, m.Ug)(n.id),
        L = (0, s.e7)([x.Z], () => x.Z.editedDefaultChannelIds),
        D = Z ? v.qm : v.M$,
        {
            drag: O,
            dragSourcePosition: P,
            drop: k,
            setIsDraggable: M
        } = (0, c.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: T,
            optionId: l.id,
            onDragStart: y,
            onDragComplete: R,
            onDragReset: A
        }),
        w = (0, s.cj)([f.Z], () => {
            var e;
            return null !== (e = f.Z.errors[C]) && void 0 !== e ? e : N;
        }),
        [B, U] = r.useState(!1),
        [G, F] = r.useState(!1),
        H = null !== (t = w.options) && void 0 !== t ? t : w.optionErrors.filter(g.lm)[0],
        z = w.config,
        W = Z && l.options.length >= v.fY,
        V = (0, u.kl)(n.id, Array.from(L), [l]).length - L.size,
        Y = r.useRef(null);
    return (r.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === C && !d) {
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
                  className: a()(I.container, {
                      [I.dropIndicatorBefore]: null != P && C < P,
                      [I.dropIndicatorAfter]: null != P && C > P,
                      [I.containerFocused]: G
                  }),
                  ref: (e) => O(k(e)),
                  children: [
                      (0, i.jsx)('div', {
                          className: I.dragContainer,
                          onMouseEnter: () => M(!0),
                          onMouseLeave: () => M(!1),
                          children: (0, i.jsx)(o.DragIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: I.dragIcon
                          })
                      }),
                      (0, i.jsx)(o.Text, {
                          className: I.questionNumber,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: _.intl.format(_.t.yjS3zs, { index: C + 1 })
                      }),
                      (0, i.jsx)(o.Text, {
                          variant: 'text-lg/semibold',
                          color: 'text-normal',
                          children: l.title
                      }),
                      (0, i.jsx)(o.Clickable, {
                          className: I.collapseButton,
                          onClick: () => U(!1),
                          children: (0, i.jsx)(h.Z, {
                              direction: h.Z.Directions.DOWN,
                              height: 16,
                              width: 16
                          })
                      }),
                      (0, i.jsx)(o.TooltipContainer, {
                          text: _.intl.string(_.t['Ku+86e']),
                          className: I.removeButton,
                          children: (0, i.jsx)(o.Clickable, {
                              className: I.closeIcon,
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
                  className: a()(I.container, {
                      [I.dropIndicatorBefore]: null != P && C < P,
                      [I.dropIndicatorAfter]: null != P && C > P,
                      [I.containerFocused]: G
                  }),
                  ref: (e) => O(k(e)),
                  children: [
                      (0, i.jsx)('div', {
                          className: I.dragContainer,
                          onMouseEnter: () => M(!0),
                          onMouseLeave: () => M(!1),
                          children: (0, i.jsx)(o.DragIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: I.dragIcon
                          })
                      }),
                      (0, i.jsx)(o.Text, {
                          className: I.questionNumber,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: _.intl.format(_.t.yjS3zs, { index: C + 1 })
                      }),
                      (0, i.jsx)(o.TextInput, {
                          className: I.title,
                          inputClassName: I.titleInput,
                          inputRef: Y,
                          value: l.title,
                          onChange: (e) => (0, p.Kk)(n, l.id, { title: e }),
                          placeholder: _.intl.string(_.t.QMCuCg),
                          maxLength: v.iU,
                          error: w.title
                      }),
                      (0, i.jsx)(j, {
                          prompt: l,
                          guild: n
                      }),
                      (0, i.jsx)(o.Text, {
                          className: I.optionsHeader,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: W
                              ? _.intl.formatToPlainString(_.t.AbvhZG, {
                                    count: l.options.length,
                                    total: D
                                })
                              : _.intl.formatToPlainString(_.t.b7VxYW, {
                                    count: l.options.length,
                                    total: D
                                })
                      }),
                      (0, i.jsx)(b, {
                          guild: n,
                          prompt: l,
                          promptIndex: C,
                          errors: w,
                          singleColumn: E
                      }),
                      null != H ? (0, i.jsx)(o.InputError, { error: H }) : null,
                      (0, i.jsxs)('div', {
                          className: I.buttons,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: I.checkboxes,
                                  children: [
                                      (0, i.jsx)(o.Checkbox, {
                                          size: 20,
                                          type: o.Checkbox.Types.INVERTED,
                                          value: !l.singleSelect,
                                          onChange: (e, t) => (0, p.Kk)(n, l.id, { singleSelect: !t }),
                                          children: (0, i.jsx)(o.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'interactive-normal',
                                              children: _.intl.string(_.t.uCebZW)
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
                                                    children: S ? _.intl.formatToPlainString(_.t['0re8T0'], { count: V }) : _.intl.string(_.t.Ur8Vrq)
                                                })
                                            })
                                          : null
                                  ]
                              }),
                              (0, i.jsx)(o.Clickable, {
                                  className: I.collapseButton,
                                  onClick: () => U(!0),
                                  children: (0, i.jsx)(h.Z, {
                                      direction: h.Z.Directions.UP,
                                      height: 16,
                                      width: 16
                                  })
                              }),
                              (0, i.jsx)(o.TooltipContainer, {
                                  text: _.intl.string(_.t['Ku+86e']),
                                  className: I.removeButton,
                                  children: (0, i.jsx)(o.Clickable, {
                                      className: I.closeIcon,
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
        [l, a] = r.useState(!1);
    if (
        (r.useEffect(() => {
            !l && t.title.length > 0 && a(!0);
        }, [l, t]),
        l)
    )
        return null;
    function s(e) {
        return (0, i.jsx)(o.Clickable, {
            className: I.example,
            onClick: () => (0, p.Kk)(n, t.id, { title: e }),
            children: (0, i.jsx)(o.Text, {
                variant: 'text-xs/normal',
                children: e
            })
        });
    }
    return (0, i.jsxs)('div', {
        className: I.examplesSection,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: _.intl.string(_.t.ECnSLi)
            }),
            (0, i.jsxs)('div', {
                className: I.examples,
                children: [s(_.intl.string(_.t['7GZMJS'])), s(_.intl.string(_.t.nItydn)), s(_.intl.string(_.t.evuYbm)), s(_.intl.string(_.t.XWRuOj))]
            })
        ]
    });
}
function b(e) {
    let { guild: t, prompt: n, promptIndex: r, singleColumn: l, errors: a } = e,
        { dropdownsAllowed: s } = (0, m.Ug)(t.id),
        o = s ? v.qm : v.M$,
        { handleDragStart: c, handleDragReset: u, handleDragComplete: h } = (0, d.Z)(n.options, (e) => (0, p.Kk)(t, n.id, { options: e }));
    return (0, i.jsxs)('div', {
        className: I.options,
        children: [
            n.options.map((e, s) =>
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
                        hasError: null != a.optionErrors[s]
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
