l.d(t, {
    N2: () => g,
    Ol: () => b,
    ZP: () => f
}),
    l(47120);
var n,
    a = l(200651),
    i = l(192379),
    o = l(120356),
    s = l.n(o),
    r = l(913527),
    c = l.n(r),
    d = l(608787),
    C = l(481060),
    u = l(553826),
    m = l(981631),
    h = l(388032),
    x = l(722166);
let g = 'MMM Do, YYYY',
    p = c()('2015-05-15').local(),
    _ = (0, d.Un)({
        createPromise: () => Promise.resolve().then(l.bind(l, 547800)),
        webpackId: 547800
    });
var b = (((n = {})[(n.ALL = 0)] = 'ALL'), (n[(n['1_HOUR'] = 1)] = '1_HOUR'), (n[(n['24_HOURS'] = 2)] = '24_HOURS'), (n[(n['7_DAYS'] = 3)] = '7_DAYS'), (n[(n['2_WEEKS'] = 4)] = '2_WEEKS'), (n[(n['4_WEEKS'] = 5)] = '4_WEEKS'), (n[(n['3_MONTHS'] = 6)] = '3_MONTHS'), (n[(n.CUSTOM = 7)] = 'CUSTOM'), n);
function f(e) {
    let { startDateLabel: t, endDateLabel: l, afterDate: n, beforeDate: o, selectedOption: r, isCustomDateRange: d, menuName: g, onClose: b, onSelectDateOption: f, onToggleCustomDateRange: j, onSelectStartDate: H, onSelectEndDate: v } = e,
        N = [
            {
                id: 0,
                option: null,
                label: h.intl.string(h.t.jelCiY)
            },
            {
                id: 1,
                option: {
                    input: 1,
                    unit: 'h'
                },
                label: h.intl.string(h.t['91RDqq'])
            },
            {
                id: 2,
                option: {
                    input: 24,
                    unit: 'h'
                },
                label: h.intl.string(h.t['Lj/1Tk'])
            },
            {
                id: 3,
                option: {
                    input: 7,
                    unit: 'd'
                },
                label: h.intl.string(h.t.NnUMSU)
            },
            {
                id: 4,
                option: {
                    input: 2,
                    unit: 'w'
                },
                label: h.intl.string(h.t.hY3XWF)
            },
            {
                id: 5,
                option: {
                    input: 4,
                    unit: 'w'
                },
                label: h.intl.string(h.t.kQTwT0)
            },
            {
                id: 6,
                option: {
                    input: 3,
                    unit: 'M'
                },
                label: h.intl.string(h.t.EPuP0t)
            }
        ],
        [Z, L] = i.useState(!1),
        R = 7 !== r ? null : null != t && null != l ? ''.concat(t, ' - ').concat(l) : null != t ? h.intl.formatToPlainString(h.t.ClmSzc, { date: t }) : null != l ? h.intl.formatToPlainString(h.t.YvNhsb, { date: l }) : null,
        I = i.useCallback(() => {
            L(!0), j();
        }, [j]),
        M = i.useCallback(
            (e) => {
                H(e);
            },
            [H]
        ),
        V = i.useCallback(
            (e) => {
                v(e);
            },
            [v]
        ),
        D = i.useCallback(() => {
            null == o && null == n && f(0, null), L(!1);
        }, [n, o, f]);
    return (0, a.jsx)(C.v2r, {
        navId: 'member-safety-guild-member-'.concat(g, '-menu'),
        onClose: b,
        'aria-label': h.intl.string(h.t.k9m8Rk),
        onSelect: m.dG4,
        children: (0, a.jsx)(C.kSQ, {
            children: Z
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(C.sNh, {
                              id: 'back',
                              action: D,
                              render: (e) =>
                                  (0, a.jsxs)('span', {
                                      ...e,
                                      className: x.nagivateBackContainer,
                                      children: [
                                          (0, a.jsx)(C.V7D, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 16,
                                              height: 16
                                          }),
                                          (0, a.jsx)(C.Text, {
                                              variant: 'eyebrow',
                                              color: 'header-primary',
                                              children: h.intl.string(h.t.BTfN6u)
                                          })
                                      ]
                                  })
                          }),
                          (0, a.jsx)(C.sNh, {
                              id: 'after-date-menu-item',
                              label: h.intl.string(h.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: x.calendarContainer,
                              children: (0, a.jsx)(C.sNh, {
                                  id: 'after-date-picker',
                                  render: (e) =>
                                      (0, a.jsx)(_, {
                                          ...e,
                                          calendarClassName: x.calendar,
                                          value: d && null != n ? c()(n) : void 0,
                                          onSelect: M,
                                          maxDate: c()().local(),
                                          minDate: p
                                      })
                              })
                          }),
                          (0, a.jsx)(C.sNh, {
                              id: 'before-date-menu-item',
                              label: h.intl.string(h.t.jF54hY),
                              subtext: l,
                              subMenuClassName: x.calendarContainer,
                              children: (0, a.jsx)(C.sNh, {
                                  id: 'before-date-picker',
                                  render: (e) =>
                                      (0, a.jsx)(_, {
                                          ...e,
                                          calendarClassName: x.calendar,
                                          value: d && null != o ? c()(o) : void 0,
                                          onSelect: V,
                                          maxDate: c()().local(),
                                          minDate: d && null != n ? c()(n) : p
                                      })
                              })
                          })
                      ]
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          N.map((e) => {
                              let { id: t, option: l, label: n } = e;
                              return (0, a.jsx)(
                                  C.k5B,
                                  {
                                      group: 'member-safety-guild-member-'.concat(g, '-menu'),
                                      id: 'guild-member-'.concat(g, '-option-').concat(t),
                                      label: n,
                                      action: () => f(t, l),
                                      checked: t === r
                                  },
                                  'option-'.concat(t)
                              );
                          }),
                          (0, a.jsx)(C.Clw, {}),
                          (0, a.jsx)(C.sNh, {
                              id: 'guild-member-'.concat(g, '-custom-option}'),
                              action: I,
                              render: (e) =>
                                  (0, a.jsxs)('div', {
                                      className: s()(x.otherDatesContainer, { [x.focused]: e.isFocused }),
                                      children: [
                                          (0, a.jsxs)('div', {
                                              className: x.leftContainer,
                                              children: [
                                                  (0, a.jsx)(C.Text, {
                                                      className: s()(x.otherDateLabel, { [x.focused]: e.isFocused }),
                                                      variant: 'text-sm/medium',
                                                      children: h.intl.string(h.t.BTfN6u)
                                                  }),
                                                  null != R &&
                                                      (0, a.jsx)(C.Text, {
                                                          className: s()(x.otherDateLabel, { [x.focused]: e.isFocused }),
                                                          color: 'text-muted',
                                                          variant: 'text-xxs/medium',
                                                          children: R
                                                      })
                                              ]
                                          }),
                                          7 === r
                                              ? (0, a.jsx)(u.Z, {
                                                    foreground: x.radioSelection,
                                                    width: 18,
                                                    height: 18
                                                })
                                              : (0, a.jsx)(C.Fbu, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 16,
                                                    height: 16,
                                                    className: s()(x.otherDateLabel, { [x.focused]: e.isFocused })
                                                })
                                      ]
                                  })
                          })
                      ]
                  })
        })
    });
}
