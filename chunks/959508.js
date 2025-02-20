n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(603211),
    d = n(710344),
    u = n(637853),
    m = n(107862),
    p = n(259580),
    g = n(823379),
    h = n(889369),
    f = n(570961),
    b = n(208665),
    x = n(976983),
    j = n(290511),
    N = n(388032),
    v = n(417257);
let _ = { optionErrors: [] };
function O(e) {
    var t;
    let { guild: n, prompt: s, disableAutofocus: d, promptIndex: x, dragIndex: O, includeCount: I, singleColumn: E, onPromptDragComplete: S, onPromptDragStart: T, onPromptDragReset: P } = e,
        { dropdownsAllowed: w } = (0, m.Ug)(n.id),
        R = (0, l.e7)([h.Z], () => h.Z.editedDefaultChannelIds),
        D = w ? j.qm : j.M$,
        {
            drag: Z,
            dragSourcePosition: A,
            drop: k,
            setIsDraggable: W
        } = (0, c.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: O,
            optionId: s.id,
            onDragStart: T,
            onDragComplete: S,
            onDragReset: P
        }),
        L = (0, l.cj)([b.Z], () => {
            var e;
            return null !== (e = b.Z.errors[x]) && void 0 !== e ? e : _;
        }),
        [M, U] = i.useState(!1),
        [G, B] = i.useState(!1),
        F = null !== (t = L.options) && void 0 !== t ? t : L.optionErrors.filter(g.lm)[0],
        z = L.config,
        H = w && s.options.length >= j.fY,
        V = (0, u.kl)(n.id, Array.from(R), [s]).length - R.size,
        Y = i.useRef(null),
        K = i.useRef(x);
    return (i.useEffect(() => {
        K.current = x;
    }),
    i.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === K.current && !d) {
                var e;
                null === (e = Y.current) || void 0 === e || e.focus();
            }
        }, 0);
    }, [d]),
    M)
        ? (0, r.jsx)(o.tEY, {
              children: (0, r.jsxs)('div', {
                  tabIndex: 0,
                  onFocus: () => B(!0),
                  onBlur: () => B(!1),
                  onMouseLeave: () => B(!1),
                  className: a()(v.container, {
                      [v.dropIndicatorBefore]: null != A && x < A,
                      [v.dropIndicatorAfter]: null != A && x > A,
                      [v.containerFocused]: G
                  }),
                  ref: (e) => Z(k(e)),
                  children: [
                      (0, r.jsx)('div', {
                          className: v.dragContainer,
                          onMouseEnter: () => W(!0),
                          onMouseLeave: () => W(!1),
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
                          children: N.NW.format(N.t.yjS3zs, { index: x + 1 })
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: 'text-lg/semibold',
                          color: 'text-normal',
                          children: s.title
                      }),
                      (0, r.jsx)(o.P3F, {
                          className: v.collapseButton,
                          onClick: () => U(!1),
                          children: (0, r.jsx)(p.Z, {
                              direction: p.Z.Directions.DOWN,
                              height: 16,
                              width: 16
                          })
                      }),
                      (0, r.jsx)(o.DY3, {
                          text: N.NW.string(N.t['Ku+86e']),
                          className: v.removeButton,
                          children: (0, r.jsx)(o.P3F, {
                              className: v.closeIcon,
                              onClick: () => (0, f.fi)(n, s.id),
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
                  onFocus: () => B(!0),
                  onBlur: () => B(!1),
                  className: a()(v.container, {
                      [v.dropIndicatorBefore]: null != A && x < A,
                      [v.dropIndicatorAfter]: null != A && x > A,
                      [v.containerFocused]: G
                  }),
                  ref: (e) => Z(k(e)),
                  children: [
                      (0, r.jsx)('div', {
                          className: v.dragContainer,
                          onMouseEnter: () => W(!0),
                          onMouseLeave: () => W(!1),
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
                          children: N.NW.format(N.t.yjS3zs, { index: x + 1 })
                      }),
                      (0, r.jsx)(o.oil, {
                          className: v.title,
                          inputClassName: v.titleInput,
                          inputRef: Y,
                          value: s.title,
                          onChange: (e) => (0, f.Kk)(n, s.id, { title: e }),
                          placeholder: N.NW.string(N.t.QMCuCg),
                          maxLength: j.iU,
                          error: L.title
                      }),
                      (0, r.jsx)(y, {
                          prompt: s,
                          guild: n
                      }),
                      (0, r.jsx)(o.Text, {
                          className: v.optionsHeader,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: H
                              ? N.NW.formatToPlainString(N.t.AbvhZG, {
                                    count: s.options.length,
                                    total: D
                                })
                              : N.NW.formatToPlainString(N.t.b7VxYW, {
                                    count: s.options.length,
                                    total: D
                                })
                      }),
                      (0, r.jsx)(C, {
                          guild: n,
                          prompt: s,
                          promptIndex: x,
                          errors: L,
                          singleColumn: E
                      }),
                      null != F ? (0, r.jsx)(o.pdY, { error: F }) : null,
                      (0, r.jsxs)('div', {
                          className: v.buttons,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: v.checkboxes,
                                  children: [
                                      (0, r.jsx)(o.XZJ, {
                                          size: 20,
                                          type: o.XZJ.Types.INVERTED,
                                          value: !s.singleSelect,
                                          onChange: (e, t) => (0, f.Kk)(n, s.id, { singleSelect: !t }),
                                          children: (0, r.jsx)(o.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'interactive-normal',
                                              children: N.NW.string(N.t.uCebZW)
                                          })
                                      }),
                                      s.inOnboarding
                                          ? (0, r.jsx)(o.XZJ, {
                                                size: 20,
                                                type: o.XZJ.Types.INVERTED,
                                                value: s.inOnboarding && s.required,
                                                onChange: (e, t) => (0, f.Kk)(n, s.id, { required: t }),
                                                disabled: !s.inOnboarding,
                                                children: (0, r.jsx)(o.Text, {
                                                    variant: 'text-sm/normal',
                                                    color: 'interactive-normal',
                                                    children: I ? N.NW.formatToPlainString(N.t['0re8T0'], { count: V }) : N.NW.string(N.t.Ur8Vrq)
                                                })
                                            })
                                          : null
                                  ]
                              }),
                              (0, r.jsx)(o.P3F, {
                                  className: v.collapseButton,
                                  onClick: () => U(!0),
                                  children: (0, r.jsx)(p.Z, {
                                      direction: p.Z.Directions.UP,
                                      height: 16,
                                      width: 16
                                  })
                              }),
                              (0, r.jsx)(o.DY3, {
                                  text: N.NW.string(N.t['Ku+86e']),
                                  className: v.removeButton,
                                  children: (0, r.jsx)(o.P3F, {
                                      className: v.closeIcon,
                                      onClick: () => (0, f.fi)(n, s.id),
                                      children: (0, r.jsx)(o.XHJ, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      })
                                  })
                              })
                          ]
                      }),
                      null != z ? (0, r.jsx)(o.pdY, { error: z }) : null
                  ]
              })
          });
}
function y(e) {
    let { prompt: t, guild: n } = e,
        [s, a] = i.useState(!1);
    if (
        (i.useEffect(() => {
            !s && t.title.length > 0 && a(!0);
        }, [s, t]),
        s)
    )
        return null;
    function l(e) {
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
                children: N.NW.string(N.t.ECnSLi)
            }),
            (0, r.jsxs)('div', {
                className: v.examples,
                children: [l(N.NW.string(N.t['7GZMJS'])), l(N.NW.string(N.t.nItydn)), l(N.NW.string(N.t.evuYbm)), l(N.NW.string(N.t.XWRuOj))]
            })
        ]
    });
}
function C(e) {
    let { guild: t, prompt: n, promptIndex: i, singleColumn: s, errors: a } = e,
        { dropdownsAllowed: l } = (0, m.Ug)(t.id),
        o = l ? j.qm : j.M$,
        { handleDragStart: c, handleDragReset: u, handleDragComplete: p } = (0, d.Z)(n.options, (e) => (0, f.Kk)(t, n.id, { options: e }));
    return (0, r.jsxs)('div', {
        className: v.options,
        children: [
            n.options.map((e, l) =>
                (0, r.jsx)(
                    x.Z,
                    {
                        guild: t,
                        prompt: n,
                        promptIndex: i,
                        singleColumn: s,
                        option: e,
                        onDragStart: c,
                        onDragComplete: p,
                        onDragReset: u,
                        hasError: null != a.optionErrors[l]
                    },
                    e.id
                )
            ),
            n.options.length < o
                ? (0, r.jsx)(x.B, {
                      guild: t,
                      prompt: n,
                      promptIndex: i,
                      singleColumn: s
                  })
                : null
        ]
    });
}
