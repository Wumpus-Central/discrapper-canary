t.d(n, { A: () => m });
var l = t(627968),
    a = t(64700),
    s = t(989349),
    i = t.n(s),
    r = t(582306),
    d = t(666944),
    u = t(123292),
    c = t(696986),
    o = t(974930),
    x = t(691885),
    h = t(375708);
function g(e) {
    let { startDate: n, recurrenceRule: t, onRecurrenceChange: s } = e,
        i = a.useMemo(() => (0, o.z7)(n, t), [t, n]),
        r = (0, o.Xx)(n);
    return (0, l.jsx)(x.l, {
        label: h.intl.string(h.t["59TVxL"]),
        required: !0,
        placeholder: "gaming",
        options: r,
        onSelectionChange: s,
        value: i,
        selectionMode: "single",
        fullWidth: !0,
    });
}
var j = t(184248);
function m(e) {
    let {
        className: n,
        onScheduleChange: t,
        onRecurrenceChange: a,
        onTimeChange: s,
        timeSelected: x = !0,
        schedule: m,
        recurrenceRule: D,
        showEndDate: v = !1,
        requireEndDate: f = !1,
        disableStartDateTime: p = !1,
    } = e;
    if (null == m) return null;
    let C = null,
        b = m.startDate,
        k = i()(),
        q = i()().add(o.IS, "days"),
        y = i()().add(o.Xy, "days");
    function z(e) {
        t({ ...m, endDate: e });
    }
    return (
        null != D && (q.add(o.Ze, "years"), y.add(o.Ze, "years")),
        v &&
            (C =
                null != m.endDate || f
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: j.U,
                                  children: [
                                      (0, l.jsx)(r.J, {
                                          label: h.intl.string(h.t.CTLgZJ),
                                          required: f,
                                          value: m.endDate,
                                          onSelect: z,
                                          minDate: m.startDate,
                                          maxDate: y,
                                      }),
                                      (0, l.jsx)(d.c, {
                                          label: h.intl.string(h.t.j2RuXF),
                                          required: f,
                                          value: m.endDate,
                                          onChange: z,
                                      }),
                                  ],
                              }),
                              f
                                  ? null
                                  : (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(u.Q, {
                                                onClick: function () {
                                                    z(void 0);
                                                },
                                                text: h.intl.string(h.t.petdfk),
                                                size: "sm",
                                            }),
                                            (0, l.jsx)(c.h, { size: 24 }),
                                        ],
                                    }),
                          ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(u.Q, {
                                  onClick: function () {
                                      z(i()(m.startDate).add(1, "hour"));
                                  },
                                  text: h.intl.string(h.t.ncdPcn),
                                  size: "sm",
                              }),
                              (0, l.jsx)(c.h, { size: 24 }),
                          ],
                      })),
        (0, l.jsxs)("div", {
            className: n,
            children: [
                (0, l.jsxs)("div", {
                    className: j.U,
                    children: [
                        (0, l.jsx)(r.J, {
                            label: h.intl.string(h.t.kKOIwJ),
                            required: !0,
                            value: m.startDate,
                            onSelect: function (e) {
                                t({ ...m, startDate: e });
                            },
                            minDate: k,
                            maxDate: q,
                            disabled: p,
                        }),
                        (0, l.jsx)(d.c, {
                            label: h.intl.string(h.t["6dGmCD"]),
                            required: !0,
                            value: m.startDate,
                            onChange: function (e) {
                                e.isValid() && (s?.(!0), t({ ...m, startDate: e }));
                            },
                            hideValue: !x,
                            disabled: p,
                        }),
                    ],
                }),
                C,
                null != b && null != a && (0, l.jsx)(g, { onRecurrenceChange: a, startDate: b, recurrenceRule: D }),
            ],
        })
    );
}
