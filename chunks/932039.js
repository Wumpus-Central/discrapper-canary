n.d(t, {
    N2: () => j,
    Ol: () => y,
    ZP: () => v
}),
    n(47120);
var r,
    l = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
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
var y = (((r = {})[(r.ALL = 0)] = 'ALL'), (r[(r['1_HOUR'] = 1)] = '1_HOUR'), (r[(r['24_HOURS'] = 2)] = '24_HOURS'), (r[(r['7_DAYS'] = 3)] = '7_DAYS'), (r[(r['2_WEEKS'] = 4)] = '2_WEEKS'), (r[(r['4_WEEKS'] = 5)] = '4_WEEKS'), (r[(r['3_MONTHS'] = 6)] = '3_MONTHS'), (r[(r.CUSTOM = 7)] = 'CUSTOM'), r);
function v(e) {
    let { startDateLabel: t, endDateLabel: n, afterDate: r, beforeDate: a, selectedOption: s, isCustomDateRange: u, menuName: j, onClose: y, onSelectDateOption: v, onToggleCustomDateRange: O, onSelectStartDate: N, onSelectEndDate: _ } = e,
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
            S(!0), O();
        }, [O]),
        R = o.useCallback(
            (e) => {
                N(e);
            },
            [N]
        ),
        L = o.useCallback(
            (e) => {
                _(e);
            },
            [_]
        ),
        I = o.useCallback(() => {
            null == a && null == r && v(0, null), S(!1);
        }, [r, a, v]);
    return (0, l.jsx)(d.v2r, {
        navId: 'member-safety-guild-member-'.concat(j, '-menu'),
        onClose: y,
        'aria-label': b.NW.string(b.t.k9m8Rk),
        onSelect: m.dG4,
        children: (0, l.jsx)(d.kSQ, {
            children: w
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.sNh, {
                              id: 'back',
                              action: I,
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
                                                  children: b.NW.string(b.t.BTfN6u)
                                              })
                                          ]
                                      })
                                  )
                          }),
                          (0, l.jsx)(d.sNh, {
                              id: 'after-date-menu-item',
                              label: b.NW.string(b.t.RDqVOD),
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
                                              onSelect: R,
                                              maxDate: c()().local(),
                                              minDate: g
                                          })
                                      )
                              })
                          }),
                          (0, l.jsx)(d.sNh, {
                              id: 'before-date-menu-item',
                              label: b.NW.string(b.t.jF54hY),
                              subtext: n,
                              subMenuClassName: p.calendarContainer,
                              children: (0, l.jsx)(d.sNh, {
                                  id: 'before-date-picker',
                                  render: (e) =>
                                      (0, l.jsx)(
                                          x,
                                          h(f({}, e), {
                                              calendarClassName: p.calendar,
                                              value: u && null != a ? c()(a) : void 0,
                                              onSelect: L,
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
                                  d.k5B,
                                  {
                                      group: 'member-safety-guild-member-'.concat(j, '-menu'),
                                      id: 'guild-member-'.concat(j, '-option-').concat(t),
                                      label: r,
                                      action: () => v(t, n),
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
                                      className: i()(p.otherDatesContainer, { [p.focused]: e.isFocused }),
                                      children: [
                                          (0, l.jsxs)('div', {
                                              className: p.leftContainer,
                                              children: [
                                                  (0, l.jsx)(d.Text, {
                                                      className: i()(p.otherDateLabel, { [p.focused]: e.isFocused }),
                                                      variant: 'text-sm/medium',
                                                      children: b.NW.string(b.t.BTfN6u)
                                                  }),
                                                  null != D &&
                                                      (0, l.jsx)(d.Text, {
                                                          className: i()(p.otherDateLabel, { [p.focused]: e.isFocused }),
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
                                                    className: i()(p.otherDateLabel, { [p.focused]: e.isFocused })
                                                })
                                      ]
                                  })
                          })
                      ]
                  })
        })
    });
}
