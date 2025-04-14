n.d(t, {
    N2: () => j,
    Ol: () => O,
    ZP: () => y
}),
    n(388685);
var r,
    l = n(200651),
    o = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    c = n.n(s),
    u = n(608787),
    C = n(481060),
    d = n(553826),
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
var O = (((r = {})[(r.ALL = 0)] = 'ALL'), (r[(r['1_HOUR'] = 1)] = '1_HOUR'), (r[(r['24_HOURS'] = 2)] = '24_HOURS'), (r[(r['7_DAYS'] = 3)] = '7_DAYS'), (r[(r['2_WEEKS'] = 4)] = '2_WEEKS'), (r[(r['4_WEEKS'] = 5)] = '4_WEEKS'), (r[(r['3_MONTHS'] = 6)] = '3_MONTHS'), (r[(r.CUSTOM = 7)] = 'CUSTOM'), r);
function y(e) {
    let { startDateLabel: t, endDateLabel: n, afterDate: r, beforeDate: i, selectedOption: s, isCustomDateRange: u, menuName: j, onClose: O, onSelectDateOption: y, onToggleCustomDateRange: v, onSelectStartDate: N, onSelectEndDate: _ } = e,
        H = [
            {
                id: 0,
                option: null,
                label: b.NW.string(b.t.jelCiY)
            },
            {
                id: 1,
                option: {
                    input: 1,
                    unit: 'h'
                },
                label: b.NW.string(b.t['91RDqq'])
            },
            {
                id: 2,
                option: {
                    input: 24,
                    unit: 'h'
                },
                label: b.NW.string(b.t['Lj/1Tk'])
            },
            {
                id: 3,
                option: {
                    input: 7,
                    unit: 'd'
                },
                label: b.NW.string(b.t.NnUMSU)
            },
            {
                id: 4,
                option: {
                    input: 2,
                    unit: 'w'
                },
                label: b.NW.string(b.t.hY3XWF)
            },
            {
                id: 5,
                option: {
                    input: 4,
                    unit: 'w'
                },
                label: b.NW.string(b.t.kQTwT0)
            },
            {
                id: 6,
                option: {
                    input: 3,
                    unit: 'M'
                },
                label: b.NW.string(b.t.EPuP0t)
            }
        ],
        [w, S] = o.useState(!1),
        D = 7 !== s ? null : null != t && null != n ? ''.concat(t, ' - ').concat(n) : null != t ? b.NW.formatToPlainString(b.t.ClmSzc, { date: t }) : null != n ? b.NW.formatToPlainString(b.t.YvNhsb, { date: n }) : null,
        Z = o.useCallback(() => {
            S(!0), v();
        }, [v]),
        L = o.useCallback(
            (e) => {
                N(e);
            },
            [N]
        ),
        R = o.useCallback(
            (e) => {
                _(e);
            },
            [_]
        ),
        P = o.useCallback(() => {
            null == i && null == r && y(0, null), S(!1);
        }, [r, i, y]);
    return (0, l.jsx)(C.v2r, {
        navId: 'member-safety-guild-member-'.concat(j, '-menu'),
        onClose: O,
        'aria-label': b.NW.string(b.t.k9m8Rk),
        onSelect: m.dG4,
        children: (0, l.jsx)(C.kSQ, {
            children: w
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(C.sNh, {
                              id: 'back',
                              action: P,
                              render: (e) =>
                                  (0, l.jsxs)(
                                      'span',
                                      h(f({}, e), {
                                          className: p.nagivateBackContainer,
                                          children: [
                                              (0, l.jsx)(C.V7D, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: 16,
                                                  height: 16
                                              }),
                                              (0, l.jsx)(C.Text, {
                                                  variant: 'eyebrow',
                                                  color: 'header-primary',
                                                  children: b.NW.string(b.t.BTfN6u)
                                              })
                                          ]
                                      })
                                  )
                          }),
                          (0, l.jsx)(C.sNh, {
                              id: 'after-date-menu-item',
                              label: b.NW.string(b.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: p.calendarContainer,
                              children: (0, l.jsx)(C.sNh, {
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
                          (0, l.jsx)(C.sNh, {
                              id: 'before-date-menu-item',
                              label: b.NW.string(b.t.jF54hY),
                              subtext: n,
                              subMenuClassName: p.calendarContainer,
                              children: (0, l.jsx)(C.sNh, {
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
                          H.map((e) => {
                              let { id: t, option: n, label: r } = e;
                              return (0, l.jsx)(
                                  C.k5B,
                                  {
                                      group: 'member-safety-guild-member-'.concat(j, '-menu'),
                                      id: 'guild-member-'.concat(j, '-option-').concat(t),
                                      label: r,
                                      action: () => y(t, n),
                                      checked: t === s
                                  },
                                  'option-'.concat(t)
                              );
                          }),
                          (0, l.jsx)(C.Clw, {}),
                          (0, l.jsx)(C.sNh, {
                              id: 'guild-member-'.concat(j, '-custom-option}'),
                              action: Z,
                              render: (e) =>
                                  (0, l.jsxs)('div', {
                                      className: a()(p.otherDatesContainer, { [p.focused]: e.isFocused }),
                                      children: [
                                          (0, l.jsxs)('div', {
                                              className: p.leftContainer,
                                              children: [
                                                  (0, l.jsx)(C.Text, {
                                                      className: a()(p.otherDateLabel, { [p.focused]: e.isFocused }),
                                                      variant: 'text-sm/medium',
                                                      children: b.NW.string(b.t.BTfN6u)
                                                  }),
                                                  null != D &&
                                                      (0, l.jsx)(C.Text, {
                                                          className: a()(p.otherDateLabel, { [p.focused]: e.isFocused }),
                                                          color: 'text-muted',
                                                          variant: 'text-xxs/medium',
                                                          children: D
                                                      })
                                              ]
                                          }),
                                          7 === s
                                              ? (0, l.jsx)(d.Z, {
                                                    foreground: p.radioSelection,
                                                    width: 18,
                                                    height: 18
                                                })
                                              : (0, l.jsx)(C.Fbu, {
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
