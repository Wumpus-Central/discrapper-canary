n.d(t, {
    N2: function () {
        return f;
    },
    Ol: function () {
        return l;
    },
    ZP: function () {
        return H;
    }
}),
    n(47120);
var l,
    o,
    i = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    c = n(913527),
    C = n.n(c),
    d = n(608787),
    u = n(481060),
    m = n(553826),
    h = n(981631),
    x = n(388032),
    b = n(722166);
let f = 'MMM Do, YYYY',
    g = C()('2015-05-15').local(),
    p = (0, d.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    });
((o = l || (l = {}))[(o.ALL = 0)] = 'ALL'), (o[(o['1_HOUR'] = 1)] = '1_HOUR'), (o[(o['24_HOURS'] = 2)] = '24_HOURS'), (o[(o['7_DAYS'] = 3)] = '7_DAYS'), (o[(o['2_WEEKS'] = 4)] = '2_WEEKS'), (o[(o['4_WEEKS'] = 5)] = '4_WEEKS'), (o[(o['3_MONTHS'] = 6)] = '3_MONTHS'), (o[(o.CUSTOM = 7)] = 'CUSTOM');
function H(e) {
    let { startDateLabel: t, endDateLabel: n, afterDate: l, beforeDate: o, selectedOption: r, isCustomDateRange: c, menuName: d, onClose: f, onSelectDateOption: H, onToggleCustomDateRange: j, onSelectStartDate: v, onSelectEndDate: N } = e,
        L = [
            {
                id: 0,
                option: null,
                label: x.intl.string(x.t.jelCiY)
            },
            {
                id: 1,
                option: {
                    input: 1,
                    unit: 'h'
                },
                label: x.intl.string(x.t['91RDqq'])
            },
            {
                id: 2,
                option: {
                    input: 24,
                    unit: 'h'
                },
                label: x.intl.string(x.t['Lj/1Tk'])
            },
            {
                id: 3,
                option: {
                    input: 7,
                    unit: 'd'
                },
                label: x.intl.string(x.t.NnUMSU)
            },
            {
                id: 4,
                option: {
                    input: 2,
                    unit: 'w'
                },
                label: x.intl.string(x.t.hY3XWF)
            },
            {
                id: 5,
                option: {
                    input: 4,
                    unit: 'w'
                },
                label: x.intl.string(x.t.kQTwT0)
            },
            {
                id: 6,
                option: {
                    input: 3,
                    unit: 'M'
                },
                label: x.intl.string(x.t.EPuP0t)
            }
        ],
        [I, _] = a.useState(!1),
        M = (function () {
            if (7 !== r) return null;
            if (null != t && null != n) return ''.concat(t, ' - ').concat(n);
            if (null != t) return x.intl.formatToPlainString(x.t.ClmSzc, { date: t });
            if (null != n) return x.intl.formatToPlainString(x.t.YvNhsb, { date: n });
            return null;
        })(),
        Z = a.useCallback(() => {
            _(!0), j();
        }, [j]),
        R = a.useCallback(
            (e) => {
                v(e);
            },
            [v]
        ),
        D = a.useCallback(
            (e) => {
                N(e);
            },
            [N]
        ),
        S = a.useCallback(() => {
            null == o && null == l && H(0, null), _(!1);
        }, [l, o, H]);
    return (0, i.jsx)(u.Menu, {
        navId: 'member-safety-guild-member-'.concat(d, '-menu'),
        onClose: f,
        'aria-label': x.intl.string(x.t.k9m8Rk),
        onSelect: h.dG4,
        children: (0, i.jsx)(u.MenuGroup, {
            children: I
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.MenuItem, {
                              id: 'back',
                              action: S,
                              render: (e) =>
                                  (0, i.jsxs)('span', {
                                      ...e,
                                      className: b.nagivateBackContainer,
                                      children: [
                                          (0, i.jsx)(u.ChevronSmallLeftIcon, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 16,
                                              height: 16
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              variant: 'eyebrow',
                                              color: 'header-primary',
                                              children: x.intl.string(x.t.BTfN6u)
                                          })
                                      ]
                                  })
                          }),
                          (0, i.jsx)(u.MenuItem, {
                              id: 'after-date-menu-item',
                              label: x.intl.string(x.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: b.calendarContainer,
                              children: (0, i.jsx)(u.MenuItem, {
                                  id: 'after-date-picker',
                                  render: (e) =>
                                      (0, i.jsx)(p, {
                                          ...e,
                                          calendarClassName: b.calendar,
                                          value: c && null != l ? C()(l) : void 0,
                                          onSelect: R,
                                          maxDate: C()().local(),
                                          minDate: g
                                      })
                              })
                          }),
                          (0, i.jsx)(u.MenuItem, {
                              id: 'before-date-menu-item',
                              label: x.intl.string(x.t.jF54hY),
                              subtext: n,
                              subMenuClassName: b.calendarContainer,
                              children: (0, i.jsx)(u.MenuItem, {
                                  id: 'before-date-picker',
                                  render: (e) =>
                                      (0, i.jsx)(p, {
                                          ...e,
                                          calendarClassName: b.calendar,
                                          value: c && null != o ? C()(o) : void 0,
                                          onSelect: D,
                                          maxDate: C()().local(),
                                          minDate: c && null != l ? C()(l) : g
                                      })
                              })
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          L.map((e) => {
                              let { id: t, option: n, label: l } = e;
                              return (0, i.jsx)(
                                  u.MenuRadioItem,
                                  {
                                      group: 'member-safety-guild-member-'.concat(d, '-menu'),
                                      id: 'guild-member-'.concat(d, '-option-').concat(t),
                                      label: l,
                                      action: () => H(t, n),
                                      checked: t === r
                                  },
                                  'option-'.concat(t)
                              );
                          }),
                          (0, i.jsx)(u.MenuSeparator, {}),
                          (0, i.jsx)(u.MenuItem, {
                              id: 'guild-member-'.concat(d, '-custom-option}'),
                              action: Z,
                              render: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: s()(b.otherDatesContainer, { [b.focused]: e.isFocused }),
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: b.leftContainer,
                                              children: [
                                                  (0, i.jsx)(u.Text, {
                                                      className: s()(b.otherDateLabel, { [b.focused]: e.isFocused }),
                                                      variant: 'text-sm/medium',
                                                      children: x.intl.string(x.t.BTfN6u)
                                                  }),
                                                  null != M &&
                                                      (0, i.jsx)(u.Text, {
                                                          className: s()(b.otherDateLabel, { [b.focused]: e.isFocused }),
                                                          color: 'text-muted',
                                                          variant: 'text-xxs/medium',
                                                          children: M
                                                      })
                                              ]
                                          }),
                                          7 === r
                                              ? (0, i.jsx)(m.Z, {
                                                    foreground: b.radioSelection,
                                                    width: 18,
                                                    height: 18
                                                })
                                              : (0, i.jsx)(u.ChevronSmallRightIcon, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 16,
                                                    height: 16,
                                                    className: s()(b.otherDateLabel, { [b.focused]: e.isFocused })
                                                })
                                      ]
                                  })
                          })
                      ]
                  })
        })
    });
}
