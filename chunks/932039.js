n.d(t, {
    N2: () => j,
    Ol: () => v,
    ZP: () => O
}),
    n(388685);
var r,
    l = n(255367),
    o = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    c = n.n(s),
    u = n(608787),
    d = n(481060),
    C = n(553826),
    m = n(981631),
    b = n(388032),
    p = n(958404);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = 'MMM Do, YYYY',
    g = c()('2015-05-15').local(),
    x = (0, u.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
        webpackId: 547800
    });
var v = (((r = {})[(r.ALL = 0)] = 'ALL'), (r[(r['1_HOUR'] = 1)] = '1_HOUR'), (r[(r['24_HOURS'] = 2)] = '24_HOURS'), (r[(r['7_DAYS'] = 3)] = '7_DAYS'), (r[(r['2_WEEKS'] = 4)] = '2_WEEKS'), (r[(r['4_WEEKS'] = 5)] = '4_WEEKS'), (r[(r['3_MONTHS'] = 6)] = '3_MONTHS'), (r[(r.CUSTOM = 7)] = 'CUSTOM'), r);
function O(e) {
    let { startDateLabel: t, endDateLabel: n, afterDate: r, beforeDate: i, selectedOption: s, isCustomDateRange: u, menuName: j, onClose: v, onSelectDateOption: O, onToggleCustomDateRange: y, onSelectStartDate: _, onSelectEndDate: H } = e,
        w = [
            {
                id: 0,
                option: null,
                label: b.intl.string(b.t.jelCiY)
            },
            {
                id: 1,
                option: {
                    input: 1,
                    unit: 'h'
                },
                label: b.intl.string(b.t['91RDqq'])
            },
            {
                id: 2,
                option: {
                    input: 24,
                    unit: 'h'
                },
                label: b.intl.string(b.t['Lj/1Tk'])
            },
            {
                id: 3,
                option: {
                    input: 7,
                    unit: 'd'
                },
                label: b.intl.string(b.t.NnUMSU)
            },
            {
                id: 4,
                option: {
                    input: 2,
                    unit: 'w'
                },
                label: b.intl.string(b.t.hY3XWF)
            },
            {
                id: 5,
                option: {
                    input: 4,
                    unit: 'w'
                },
                label: b.intl.string(b.t.kQTwT0)
            },
            {
                id: 6,
                option: {
                    input: 3,
                    unit: 'M'
                },
                label: b.intl.string(b.t.EPuP0t)
            }
        ],
        [N, S] = o.useState(!1),
        D = 7 !== s ? null : null != t && null != n ? ''.concat(t, ' - ').concat(n) : null != t ? b.intl.formatToPlainString(b.t.ClmSzc, { date: t }) : null != n ? b.intl.formatToPlainString(b.t.YvNhsb, { date: n }) : null,
        Z = o.useCallback(() => {
            S(!0), y();
        }, [y]),
        L = o.useCallback(
            (e) => {
                _(e);
            },
            [_]
        ),
        R = o.useCallback(
            (e) => {
                H(e);
            },
            [H]
        ),
        P = o.useCallback(() => {
            null == i && null == r && O(0, null), S(!1);
        }, [r, i, O]);
    return (0, l.jsx)(d.v2r, {
        navId: 'member-safety-guild-member-'.concat(j, '-menu'),
        onClose: v,
        'aria-label': b.intl.string(b.t.k9m8Rk),
        onSelect: m.dG4,
        children: (0, l.jsx)(d.kSQ, {
            children: N
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.sNh, {
                              id: 'back',
                              action: P,
                              render: (e) =>
                                  (0, l.jsxs)(
                                      'span',
                                      h(f({}, e), {
                                          className: p.nagivateBackContainer,
                                          children: [
                                              (0, l.jsx)(d.V7D, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: 16,
                                                  height: 16
                                              }),
                                              (0, l.jsx)(d.Text, {
                                                  variant: 'eyebrow',
                                                  color: 'header-primary',
                                                  children: b.intl.string(b.t.BTfN6u)
                                              })
                                          ]
                                      })
                                  )
                          }),
                          (0, l.jsx)(d.sNh, {
                              id: 'after-date-menu-item',
                              label: b.intl.string(b.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: p.calendarContainer,
                              children: (0, l.jsx)(d.sNh, {
                                  id: 'after-date-picker',
                                  render: (e) =>
                                      (0, l.jsx)(
                                          x,
                                          h(f({}, e), {
                                              calendarClassName: p.calendar,
                                              value: u && null != r ? c()(r) : void 0,
                                              onSelect: L,
                                              maxDate: c()().local(),
                                              minDate: g
                                          })
                                      )
                              })
                          }),
                          (0, l.jsx)(d.sNh, {
                              id: 'before-date-menu-item',
                              label: b.intl.string(b.t.jF54hY),
                              subtext: n,
                              subMenuClassName: p.calendarContainer,
                              children: (0, l.jsx)(d.sNh, {
                                  id: 'before-date-picker',
                                  render: (e) =>
                                      (0, l.jsx)(
                                          x,
                                          h(f({}, e), {
                                              calendarClassName: p.calendar,
                                              value: u && null != i ? c()(i) : void 0,
                                              onSelect: R,
                                              maxDate: c()().local(),
                                              minDate: u && null != r ? c()(r) : g
                                          })
                                      )
                              })
                          })
                      ]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          w.map((e) => {
                              let { id: t, option: n, label: r } = e;
                              return (0, l.jsx)(
                                  d.k5B,
                                  {
                                      group: 'member-safety-guild-member-'.concat(j, '-menu'),
                                      id: 'guild-member-'.concat(j, '-option-').concat(t),
                                      label: r,
                                      action: () => O(t, n),
                                      checked: t === s
                                  },
                                  'option-'.concat(t)
                              );
                          }),
                          (0, l.jsx)(d.Clw, {}),
                          (0, l.jsx)(d.sNh, {
                              id: 'guild-member-'.concat(j, '-custom-option}'),
                              action: Z,
                              render: (e) =>
                                  (0, l.jsxs)('div', {
                                      className: a()(p.otherDatesContainer, { [p.focused]: e.isFocused }),
                                      children: [
                                          (0, l.jsxs)('div', {
                                              className: p.leftContainer,
                                              children: [
                                                  (0, l.jsx)(d.Text, {
                                                      className: a()(p.otherDateLabel, { [p.focused]: e.isFocused }),
                                                      variant: 'text-sm/medium',
                                                      children: b.intl.string(b.t.BTfN6u)
                                                  }),
                                                  null != D &&
                                                      (0, l.jsx)(d.Text, {
                                                          className: a()(p.otherDateLabel, { [p.focused]: e.isFocused }),
                                                          color: 'text-muted',
                                                          variant: 'text-xxs/medium',
                                                          children: D
                                                      })
                                              ]
                                          }),
                                          7 === s
                                              ? (0, l.jsx)(C.Z, {
                                                    foreground: p.radioSelection,
                                                    width: 18,
                                                    height: 18
                                                })
                                              : (0, l.jsx)(d.Fbu, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 16,
                                                    height: 16,
                                                    className: a()(p.otherDateLabel, { [p.focused]: e.isFocused })
                                                })
                                      ]
                                  })
                          })
                      ]
                  })
        })
    });
}
