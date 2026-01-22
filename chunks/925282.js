n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var l = n(33851),
    i = n.n(l),
    o = n(989349),
    a = n.n(o),
    s = n(417597),
    c = n(266047),
    d = n(221950),
    u = n(487518),
    C = n(985018);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function b(e, t) {
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

function m(e) {
    let { guildId: t, onClose: n } = e,
        l = (0, s.bG)([c.A], () => c.A.getSearchStateByGuildId(t), [t], i()),
        { selectedJoinDateOption: o } = l,
        { afterDate: m, beforeDate: p, optionId: j } = o,
        g = j === u.H_.CUSTOM,
        h = g && null != m ? a()(m).format(u.Ti) : null,
        x = g && null != p ? a()(p).format(u.Ti) : null;
    return (0, r.jsx)(u.Ay, {
        startDateLabel: h,
        endDateLabel: x,
        afterDate: m,
        beforeDate: p,
        selectedOption: j,
        isCustomDateRange: g,
        menuName: "joined-date",
        accessibilityLabel: C.intl.string(C.t.XMVinX),
        onClose: n,
        onSelectDateOption: function (e, n) {
            let r = null != n ? a()().subtract(n.input, n.unit).valueOf() : null;
            (0, d.Ld)(
                t,
                b(f({}, l), {
                    selectedJoinDateOption: {
                        optionId: e,
                        afterDate: r,
                        beforeDate: null,
                    },
                }),
            );
        },
        onToggleCustomDateRange: function () {
            (0, d.Ld)(
                t,
                b(f({}, l), {
                    selectedJoinDateOption: {
                        optionId: u.H_.CUSTOM,
                        afterDate: g ? m : null,
                        beforeDate: g ? p : null,
                    },
                }),
            );
        },
        onSelectStartDate: function (e) {
            (0, d.Ld)(
                t,
                b(f({}, l), {
                    selectedJoinDateOption: {
                        optionId: u.H_.CUSTOM,
                        afterDate: e.valueOf(),
                        beforeDate: p,
                    },
                }),
            );
        },
        onSelectEndDate: function (e) {
            (0, d.Ld)(
                t,
                b(f({}, l), {
                    selectedJoinDateOption: {
                        optionId: u.H_.CUSTOM,
                        afterDate: m,
                        beforeDate: e.valueOf(),
                    },
                }),
            );
        },
    });
}
