(n.d(t, { Z: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(603211),
    u = n(710344),
    m = n(637853),
    g = n(259580),
    p = n(823379),
    h = n(889369),
    f = n(570961),
    x = n(208665),
    b = n(976983),
    j = n(290511),
    v = n(388032),
    _ = n(434840);
let O = { optionErrors: [] };
function y(e) {
    var t;
    let { guild: n, prompt: l, disableAutofocus: u, promptIndex: b, dragIndex: y, includeCount: I, singleColumn: E, onPromptDragComplete: S, onPromptDragStart: T, onPromptDragReset: P } = e,
        w = (0, s.e7)([h.Z], () => h.Z.editedDefaultChannelIds),
        {
            drag: R,
            dragSourcePosition: Z,
            drop: D,
            setIsDraggable: A
        } = (0, d.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: y,
            optionId: l.id,
            onDragStart: T,
            onDragComplete: S,
            onDragReset: P
        }),
        k = (0, s.cj)([x.Z], () => {
            var e;
            return null != (e = x.Z.errors[b]) ? e : O;
        }),
        [L, M] = i.useState(!1),
        [G, U] = i.useState(!1),
        B = null != (t = k.options) ? t : k.optionErrors.filter(p.lm)[0],
        F = k.config,
        H = l.options.length >= j.fY,
        z = (0, m.kl)(n.id, Array.from(w), [l]).length - w.size,
        W = i.useRef(null),
        V = i.useRef(b);
    return (i.useEffect(() => {
        V.current = b;
    }),
    i.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === V.current && !u) {
                var e;
                null == (e = W.current) || e.focus();
            }
        }, 0);
    }, [u]),
    L)
        ? (0, r.jsx)(c.tEY, {
              children: (0, r.jsxs)('div', {
                  tabIndex: 0,
                  onFocus: () => U(!0),
                  onBlur: () => U(!1),
                  onMouseLeave: () => U(!1),
                  className: a()(_.container, {
                      [_.dropIndicatorBefore]: null != Z && b < Z,
                      [_.dropIndicatorAfter]: null != Z && b > Z,
                      [_.containerFocused]: G
                  }),
                  ref: (e) => {
                      R(D(e));
                  },
                  children: [
                      (0, r.jsx)('div', {
                          className: _.dragContainer,
                          onMouseEnter: () => A(!0),
                          onMouseLeave: () => A(!1),
                          children: (0, r.jsx)(c.Vni, {
                              size: 'xs',
                              color: 'currentColor',
                              className: _.dragIcon
                          })
                      }),
                      (0, r.jsx)(c.Text, {
                          className: _.questionNumber,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: v.intl.format(v.t.yjS3zs, { index: b + 1 })
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: 'text-lg/semibold',
                          color: 'text-default',
                          children: l.title
                      }),
                      (0, r.jsx)(c.P3F, {
                          className: _.collapseButton,
                          onClick: () => M(!1),
                          children: (0, r.jsx)(g.Z, {
                              direction: g.Z.Directions.DOWN,
                              height: 16,
                              width: 16
                          })
                      }),
                      (0, r.jsx)(c.DY3, {
                          text: v.intl.string(v.t['Ku+86e']),
                          className: _.removeButton,
                          children: (0, r.jsx)(c.P3F, {
                              className: _.closeIcon,
                              onClick: () => (0, f.fi)(n, l.id),
                              children: (0, r.jsx)(c.XHJ, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                      })
                  ]
              })
          })
        : (0, r.jsx)(c.tEY, {
              children: (0, r.jsxs)('div', {
                  tabIndex: 0,
                  onFocus: () => U(!0),
                  onBlur: () => U(!1),
                  className: a()(_.container, {
                      [_.dropIndicatorBefore]: null != Z && b < Z,
                      [_.dropIndicatorAfter]: null != Z && b > Z,
                      [_.containerFocused]: G
                  }),
                  ref: (e) => {
                      R(D(e));
                  },
                  children: [
                      (0, r.jsx)('div', {
                          className: _.dragContainer,
                          onMouseEnter: () => A(!0),
                          onMouseLeave: () => A(!1),
                          children: (0, r.jsx)(c.Vni, {
                              size: 'xs',
                              color: 'currentColor',
                              className: _.dragIcon
                          })
                      }),
                      (0, r.jsx)(c.Text, {
                          className: _.questionNumber,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: v.intl.format(v.t.yjS3zs, { index: b + 1 })
                      }),
                      (0, r.jsx)(o.Is, {
                          className: _.title,
                          inputClassName: _.titleInput,
                          inputRef: W,
                          value: l.title,
                          onChange: (e) => (0, f.Kk)(n, l.id, { title: e }),
                          placeholder: v.intl.string(v.t.QMCuCg),
                          maxLength: j.iU,
                          error: k.title
                      }),
                      (0, r.jsx)(C, {
                          prompt: l,
                          guild: n
                      }),
                      (0, r.jsx)(c.Text, {
                          className: _.optionsHeader,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: H
                              ? v.intl.formatToPlainString(v.t.AbvhZG, {
                                    count: l.options.length,
                                    total: j.qm
                                })
                              : v.intl.formatToPlainString(v.t.b7VxYW, {
                                    count: l.options.length,
                                    total: j.qm
                                })
                      }),
                      (0, r.jsx)(N, {
                          guild: n,
                          prompt: l,
                          promptIndex: b,
                          errors: k,
                          singleColumn: E
                      }),
                      null != B ? (0, r.jsx)(c.pdY, { error: B }) : null,
                      (0, r.jsxs)('div', {
                          className: _.buttons,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: _.checkboxes,
                                  children: [
                                      (0, r.jsx)(c.XZJ, {
                                          size: 20,
                                          type: c.XZJ.Types.INVERTED,
                                          value: !l.singleSelect,
                                          onChange: (e, t) => (0, f.Kk)(n, l.id, { singleSelect: !t }),
                                          children: (0, r.jsx)(c.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'interactive-normal',
                                              children: v.intl.string(v.t.uCebZW)
                                          })
                                      }),
                                      l.inOnboarding
                                          ? (0, r.jsx)(c.XZJ, {
                                                size: 20,
                                                type: c.XZJ.Types.INVERTED,
                                                value: l.inOnboarding && l.required,
                                                onChange: (e, t) => (0, f.Kk)(n, l.id, { required: t }),
                                                disabled: !l.inOnboarding,
                                                children: (0, r.jsx)(c.Text, {
                                                    variant: 'text-sm/normal',
                                                    color: 'interactive-normal',
                                                    children: I ? v.intl.formatToPlainString(v.t['0re8T0'], { count: z }) : v.intl.string(v.t.Ur8Vrq)
                                                })
                                            })
                                          : null
                                  ]
                              }),
                              (0, r.jsx)(c.P3F, {
                                  className: _.collapseButton,
                                  onClick: () => M(!0),
                                  children: (0, r.jsx)(g.Z, {
                                      direction: g.Z.Directions.UP,
                                      height: 16,
                                      width: 16
                                  })
                              }),
                              (0, r.jsx)(c.DY3, {
                                  text: v.intl.string(v.t['Ku+86e']),
                                  className: _.removeButton,
                                  children: (0, r.jsx)(c.P3F, {
                                      className: _.closeIcon,
                                      onClick: () => (0, f.fi)(n, l.id),
                                      children: (0, r.jsx)(c.XHJ, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      })
                                  })
                              })
                          ]
                      }),
                      null != F ? (0, r.jsx)(c.pdY, { error: F }) : null
                  ]
              })
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
            className: _.example,
            onClick: () => (0, f.Kk)(n, t.id, { title: e }),
            children: (0, r.jsx)(c.Text, {
                variant: 'text-xs/normal',
                children: e
            })
        });
    }
    return (0, r.jsxs)('div', {
        className: _.examplesSection,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: v.intl.string(v.t.ECnSLi)
            }),
            (0, r.jsxs)('div', {
                className: _.examples,
                children: [s(v.intl.string(v.t['7GZMJS'])), s(v.intl.string(v.t.nItydn)), s(v.intl.string(v.t.evuYbm)), s(v.intl.string(v.t.XWRuOj))]
            })
        ]
    });
}
function N(e) {
    let { guild: t, prompt: n, promptIndex: i, singleColumn: l, errors: a } = e,
        { handleDragStart: s, handleDragReset: o, handleDragComplete: c } = (0, u.Z)(n.options, (e) => (0, f.Kk)(t, n.id, { options: e }));
    return (0, r.jsxs)('div', {
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
                        onDragStart: s,
                        onDragComplete: c,
                        onDragReset: o,
                        hasError: null != a.optionErrors[d]
                    },
                    e.id
                )
            ),
            n.options.length < j.qm
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
