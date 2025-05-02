n.d(t, { Z: () => O }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(603211),
    u = n(710344),
    d = n(637853),
    m = n(259580),
    g = n(823379),
    p = n(889369),
    f = n(570961),
    h = n(208665),
    x = n(976983),
    b = n(290511),
    j = n(388032),
    _ = n(434840);
let v = { optionErrors: [] };
function O(e) {
    var t;
    let { guild: n, prompt: l, disableAutofocus: u, promptIndex: x, dragIndex: O, includeCount: N, singleColumn: I, onPromptDragComplete: E, onPromptDragStart: S, onPromptDragReset: T } = e,
        P = (0, a.e7)([p.Z], () => p.Z.editedDefaultChannelIds),
        {
            drag: w,
            dragSourcePosition: R,
            drop: Z,
            setIsDraggable: D
        } = (0, c.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: O,
            optionId: l.id,
            onDragStart: S,
            onDragComplete: E,
            onDragReset: T
        }),
        k = (0, a.cj)([h.Z], () => {
            var e;
            return null != (e = h.Z.errors[x]) ? e : v;
        }),
        [A, L] = i.useState(!1),
        [M, G] = i.useState(!1),
        U = null != (t = k.options) ? t : k.optionErrors.filter(g.lm)[0],
        B = k.config,
        F = l.options.length >= b.fY,
        z = (0, d.kl)(n.id, Array.from(P), [l]).length - P.size,
        H = i.useRef(null),
        W = i.useRef(x);
    return (i.useEffect(() => {
        W.current = x;
    }),
    i.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === W.current && !u) {
                var e;
                null == (e = H.current) || e.focus();
            }
        }, 0);
    }, [u]),
    A)
        ? (0, r.jsx)(o.tEY, {
              children: (0, r.jsxs)('div', {
                  tabIndex: 0,
                  onFocus: () => G(!0),
                  onBlur: () => G(!1),
                  onMouseLeave: () => G(!1),
                  className: s()(_.container, {
                      [_.dropIndicatorBefore]: null != R && x < R,
                      [_.dropIndicatorAfter]: null != R && x > R,
                      [_.containerFocused]: M
                  }),
                  ref: (e) => {
                      w(Z(e));
                  },
                  children: [
                      (0, r.jsx)('div', {
                          className: _.dragContainer,
                          onMouseEnter: () => D(!0),
                          onMouseLeave: () => D(!1),
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
                          children: j.intl.format(j.t.yjS3zs, { index: x + 1 })
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: 'text-lg/semibold',
                          color: 'text-normal',
                          children: l.title
                      }),
                      (0, r.jsx)(o.P3F, {
                          className: _.collapseButton,
                          onClick: () => L(!1),
                          children: (0, r.jsx)(m.Z, {
                              direction: m.Z.Directions.DOWN,
                              height: 16,
                              width: 16
                          })
                      }),
                      (0, r.jsx)(o.DY3, {
                          text: j.intl.string(j.t['Ku+86e']),
                          className: _.removeButton,
                          children: (0, r.jsx)(o.P3F, {
                              className: _.closeIcon,
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
                  onFocus: () => G(!0),
                  onBlur: () => G(!1),
                  className: s()(_.container, {
                      [_.dropIndicatorBefore]: null != R && x < R,
                      [_.dropIndicatorAfter]: null != R && x > R,
                      [_.containerFocused]: M
                  }),
                  ref: (e) => {
                      w(Z(e));
                  },
                  children: [
                      (0, r.jsx)('div', {
                          className: _.dragContainer,
                          onMouseEnter: () => D(!0),
                          onMouseLeave: () => D(!1),
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
                          children: j.intl.format(j.t.yjS3zs, { index: x + 1 })
                      }),
                      (0, r.jsx)(o.oil, {
                          className: _.title,
                          inputClassName: _.titleInput,
                          inputRef: H,
                          value: l.title,
                          onChange: (e) => (0, f.Kk)(n, l.id, { title: e }),
                          placeholder: j.intl.string(j.t.QMCuCg),
                          maxLength: b.iU,
                          error: k.title
                      }),
                      (0, r.jsx)(C, {
                          prompt: l,
                          guild: n
                      }),
                      (0, r.jsx)(o.Text, {
                          className: _.optionsHeader,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: F
                              ? j.intl.formatToPlainString(j.t.AbvhZG, {
                                    count: l.options.length,
                                    total: b.qm
                                })
                              : j.intl.formatToPlainString(j.t.b7VxYW, {
                                    count: l.options.length,
                                    total: b.qm
                                })
                      }),
                      (0, r.jsx)(y, {
                          guild: n,
                          prompt: l,
                          promptIndex: x,
                          errors: k,
                          singleColumn: I
                      }),
                      null != U ? (0, r.jsx)(o.pdY, { error: U }) : null,
                      (0, r.jsxs)('div', {
                          className: _.buttons,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: _.checkboxes,
                                  children: [
                                      (0, r.jsx)(o.XZJ, {
                                          size: 20,
                                          type: o.XZJ.Types.INVERTED,
                                          value: !l.singleSelect,
                                          onChange: (e, t) => (0, f.Kk)(n, l.id, { singleSelect: !t }),
                                          children: (0, r.jsx)(o.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'interactive-normal',
                                              children: j.intl.string(j.t.uCebZW)
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
                                                    children: N ? j.intl.formatToPlainString(j.t['0re8T0'], { count: z }) : j.intl.string(j.t.Ur8Vrq)
                                                })
                                            })
                                          : null
                                  ]
                              }),
                              (0, r.jsx)(o.P3F, {
                                  className: _.collapseButton,
                                  onClick: () => L(!0),
                                  children: (0, r.jsx)(m.Z, {
                                      direction: m.Z.Directions.UP,
                                      height: 16,
                                      width: 16
                                  })
                              }),
                              (0, r.jsx)(o.DY3, {
                                  text: j.intl.string(j.t['Ku+86e']),
                                  className: _.removeButton,
                                  children: (0, r.jsx)(o.P3F, {
                                      className: _.closeIcon,
                                      onClick: () => (0, f.fi)(n, l.id),
                                      children: (0, r.jsx)(o.XHJ, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      })
                                  })
                              })
                          ]
                      }),
                      null != B ? (0, r.jsx)(o.pdY, { error: B }) : null
                  ]
              })
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
                children: j.intl.string(j.t.ECnSLi)
            }),
            (0, r.jsxs)('div', {
                className: _.examples,
                children: [a(j.intl.string(j.t['7GZMJS'])), a(j.intl.string(j.t.nItydn)), a(j.intl.string(j.t.evuYbm)), a(j.intl.string(j.t.XWRuOj))]
            })
        ]
    });
}
function y(e) {
    let { guild: t, prompt: n, promptIndex: i, singleColumn: l, errors: s } = e,
        { handleDragStart: a, handleDragReset: o, handleDragComplete: c } = (0, u.Z)(n.options, (e) => (0, f.Kk)(t, n.id, { options: e }));
    return (0, r.jsxs)('div', {
        className: _.options,
        children: [
            n.options.map((e, u) =>
                (0, r.jsx)(
                    x.Z,
                    {
                        guild: t,
                        prompt: n,
                        promptIndex: i,
                        singleColumn: l,
                        option: e,
                        onDragStart: a,
                        onDragComplete: c,
                        onDragReset: o,
                        hasError: null != s.optionErrors[u]
                    },
                    e.id
                )
            ),
            n.options.length < b.qm
                ? (0, r.jsx)(x.B, {
                      guild: t,
                      prompt: n,
                      promptIndex: i,
                      singleColumn: l
                  })
                : null
        ]
    });
}
