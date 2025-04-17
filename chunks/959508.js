n.d(t, { Z: () => O }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
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
    N = n(388032),
    _ = n(434840);
let v = { optionErrors: [] };
function O(e) {
    var t;
    let { guild: n, prompt: s, disableAutofocus: d, promptIndex: b, dragIndex: O, includeCount: I, singleColumn: E, onPromptDragComplete: S, onPromptDragStart: T, onPromptDragReset: P } = e,
        { dropdownsAllowed: w } = (0, m.Ug)(n.id),
        R = (0, a.e7)([h.Z], () => h.Z.editedDefaultChannelIds),
        Z = w ? j.qm : j.M$,
        {
            drag: D,
            dragSourcePosition: A,
            drop: W,
            setIsDraggable: k
        } = (0, c.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: O,
            optionId: s.id,
            onDragStart: T,
            onDragComplete: S,
            onDragReset: P
        }),
        L = (0, a.cj)([x.Z], () => {
            var e;
            return null != (e = x.Z.errors[b]) ? e : v;
        }),
        [M, G] = i.useState(!1),
        [U, B] = i.useState(!1),
        F = null != (t = L.options) ? t : L.optionErrors.filter(p.lm)[0],
        z = L.config,
        H = w && s.options.length >= j.fY,
        V = (0, u.kl)(n.id, Array.from(R), [s]).length - R.size,
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
    M)
        ? (0, r.jsx)(o.tEY, {
              children: (0, r.jsxs)('div', {
                  tabIndex: 0,
                  onFocus: () => B(!0),
                  onBlur: () => B(!1),
                  onMouseLeave: () => B(!1),
                  className: l()(_.container, {
                      [_.dropIndicatorBefore]: null != A && b < A,
                      [_.dropIndicatorAfter]: null != A && b > A,
                      [_.containerFocused]: U
                  }),
                  ref: (e) => {
                      D(W(e));
                  },
                  children: [
                      (0, r.jsx)('div', {
                          className: _.dragContainer,
                          onMouseEnter: () => k(!0),
                          onMouseLeave: () => k(!1),
                          children: (0, r.jsx)(o.Vni, {
                              size: 'xs',
                              color: 'currentColor',
                              className: _.dragIcon
                          })
                      }),
                      (0, r.jsx)(o.Text, {
                          className: _.questionNumber,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: N.NW.format(N.t.yjS3zs, { index: b + 1 })
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: 'text-lg/semibold',
                          color: 'text-normal',
                          children: s.title
                      }),
                      (0, r.jsx)(o.P3F, {
                          className: _.collapseButton,
                          onClick: () => G(!1),
                          children: (0, r.jsx)(g.Z, {
                              direction: g.Z.Directions.DOWN,
                              height: 16,
                              width: 16
                          })
                      }),
                      (0, r.jsx)(o.DY3, {
                          text: N.NW.string(N.t['Ku+86e']),
                          className: _.removeButton,
                          children: (0, r.jsx)(o.P3F, {
                              className: _.closeIcon,
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
                  className: l()(_.container, {
                      [_.dropIndicatorBefore]: null != A && b < A,
                      [_.dropIndicatorAfter]: null != A && b > A,
                      [_.containerFocused]: U
                  }),
                  ref: (e) => {
                      D(W(e));
                  },
                  children: [
                      (0, r.jsx)('div', {
                          className: _.dragContainer,
                          onMouseEnter: () => k(!0),
                          onMouseLeave: () => k(!1),
                          children: (0, r.jsx)(o.Vni, {
                              size: 'xs',
                              color: 'currentColor',
                              className: _.dragIcon
                          })
                      }),
                      (0, r.jsx)(o.Text, {
                          className: _.questionNumber,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: N.NW.format(N.t.yjS3zs, { index: b + 1 })
                      }),
                      (0, r.jsx)(o.oil, {
                          className: _.title,
                          inputClassName: _.titleInput,
                          inputRef: Y,
                          value: s.title,
                          onChange: (e) => (0, f.Kk)(n, s.id, { title: e }),
                          placeholder: N.NW.string(N.t.QMCuCg),
                          maxLength: j.iU,
                          error: L.title
                      }),
                      (0, r.jsx)(C, {
                          prompt: s,
                          guild: n
                      }),
                      (0, r.jsx)(o.Text, {
                          className: _.optionsHeader,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: H
                              ? N.NW.formatToPlainString(N.t.AbvhZG, {
                                    count: s.options.length,
                                    total: Z
                                })
                              : N.NW.formatToPlainString(N.t.b7VxYW, {
                                    count: s.options.length,
                                    total: Z
                                })
                      }),
                      (0, r.jsx)(y, {
                          guild: n,
                          prompt: s,
                          promptIndex: b,
                          errors: L,
                          singleColumn: E
                      }),
                      null != F ? (0, r.jsx)(o.pdY, { error: F }) : null,
                      (0, r.jsxs)('div', {
                          className: _.buttons,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: _.checkboxes,
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
                                  className: _.collapseButton,
                                  onClick: () => G(!0),
                                  children: (0, r.jsx)(g.Z, {
                                      direction: g.Z.Directions.UP,
                                      height: 16,
                                      width: 16
                                  })
                              }),
                              (0, r.jsx)(o.DY3, {
                                  text: N.NW.string(N.t['Ku+86e']),
                                  className: _.removeButton,
                                  children: (0, r.jsx)(o.P3F, {
                                      className: _.closeIcon,
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
function C(e) {
    let { prompt: t, guild: n } = e,
        [s, l] = i.useState(!1);
    if (
        (i.useEffect(() => {
            !s && t.title.length > 0 && l(!0);
        }, [s, t]),
        s)
    )
        return null;
    function a(e) {
        return (0, r.jsx)(o.P3F, {
            className: _.example,
            onClick: () => (0, f.Kk)(n, t.id, { title: e }),
            children: (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                children: e
            })
        });
    }
    return (0, r.jsxs)('div', {
        className: _.examplesSection,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: N.NW.string(N.t.ECnSLi)
            }),
            (0, r.jsxs)('div', {
                className: _.examples,
                children: [a(N.NW.string(N.t['7GZMJS'])), a(N.NW.string(N.t.nItydn)), a(N.NW.string(N.t.evuYbm)), a(N.NW.string(N.t.XWRuOj))]
            })
        ]
    });
}
function y(e) {
    let { guild: t, prompt: n, promptIndex: i, singleColumn: s, errors: l } = e,
        { dropdownsAllowed: a } = (0, m.Ug)(t.id),
        o = a ? j.qm : j.M$,
        { handleDragStart: c, handleDragReset: u, handleDragComplete: g } = (0, d.Z)(n.options, (e) => (0, f.Kk)(t, n.id, { options: e }));
    return (0, r.jsxs)('div', {
        className: _.options,
        children: [
            n.options.map((e, a) =>
                (0, r.jsx)(
                    b.Z,
                    {
                        guild: t,
                        prompt: n,
                        promptIndex: i,
                        singleColumn: s,
                        option: e,
                        onDragStart: c,
                        onDragComplete: g,
                        onDragReset: u,
                        hasError: null != l.optionErrors[a]
                    },
                    e.id
                )
            ),
            n.options.length < o
                ? (0, r.jsx)(b.B, {
                      guild: t,
                      prompt: n,
                      promptIndex: i,
                      singleColumn: s
                  })
                : null
        ]
    });
}
