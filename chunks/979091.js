n.d(t, { A: () => m });
var l = n(627968),
    a = n(64700),
    s = n(989349),
    i = n.n(s),
    r = n(582306),
    d = n(666944),
    u = n(123292),
    c = n(696986),
    o = n(647090),
    x = n(691885),
    h = n(375708);
function g(e) {
    let { startDate: t, recurrenceRule: n, onRecurrenceChange: s } = e,
        i = a.useMemo(() => (0, o.z7)(t, n), [n, t]),
        r = (0, o.Xx)(t);
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
var j = n(184248);
function m(e) {
    let {
        className: t,
        onScheduleChange: n,
        onRecurrenceChange: a,
        onTimeChange: s,
        timeSelected: x = !0,
        schedule: m,
        recurrenceRule: D,
        showEndDate: v = !1,
        requireEndDate: p = !1,
        disableStartDateTime: C = !1,
    } = e;
    if (null == m) return null;
    let b = null,
        f = m.startDate,
        k = i()(),
        q = i()().add(o.IS, "days"),
        y = i()().add(o.Xy, "days");
    function z(e) {
        n({ ...m, endDate: e });
    }
    return (
        null != D && (q.add(o.Ze, "years"), y.add(o.Ze, "years")),
        v &&
            (b =
                null != m.endDate || p
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: j.U,
                                  children: [
                                      (0, l.jsx)(r.J, {
                                          label: h.intl.string(h.t.CTLgZJ),
                                          required: p,
                                          value: m.endDate,
                                          onSelect: z,
                                          minDate: m.startDate,
                                          maxDate: y,
                                      }),
                                      (0, l.jsx)(d.c, {
                                          label: h.intl.string(h.t.j2RuXF),
                                          required: p,
                                          value: m.endDate,
                                          onChange: z,
                                      }),
                                  ],
                              }),
                              p
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
                                  onClick: () => {
                                      z(i()(m.startDate).add(1, "hour"));
                                  },
                                  text: h.intl.string(h.t.ncdPcn),
                                  size: "sm",
                              }),
                              (0, l.jsx)(c.h, { size: 24 }),
                          ],
                      })),
        (0, l.jsxs)("div", {
            className: t,
            children: [
                (0, l.jsxs)("div", {
                    className: j.U,
                    children: [
                        (0, l.jsx)(r.J, {
                            label: h.intl.string(h.t.kKOIwJ),
                            required: !0,
                            value: m.startDate,
                            onSelect: function (e) {
                                n({ ...m, startDate: e });
                            },
                            minDate: k,
                            maxDate: q,
                            disabled: C,
                        }),
                        (0, l.jsx)(d.c, {
                            label: h.intl.string(h.t["6dGmCD"]),
                            required: !0,
                            value: m.startDate,
                            onChange: function (e) {
                                e.isValid() && (s?.(!0), n({ ...m, startDate: e }));
                            },
                            hideValue: !x,
                            disabled: C,
                        }),
                    ],
                }),
                b,
                null != f && null != a && (0, l.jsx)(g, { onRecurrenceChange: a, startDate: f, recurrenceRule: D }),
            ],
        })
    );
}
