l.d(t, { A: () => v });
var n = l(627968),
    i = l(64700),
    s = l(989349),
    a = l.n(s),
    r = l(582306),
    d = l(666944),
    o = l(123292),
    c = l(696986),
    u = l(974930),
    x = l(691885),
    h = l(985018);
function m(e) {
    let { startDate: t, recurrenceRule: l, onRecurrenceChange: s } = e,
        a = i.useMemo(() => (0, u.z7)(t, l), [l, t]),
        r = (0, u.Xx)(t);
    return (0, n.jsx)(x.l, {
        label: h.intl.string(h.t["59TVxL"]),
        required: !0,
        placeholder: "gaming",
        options: r,
        onSelectionChange: s,
        value: a,
        selectionMode: "single",
        fullWidth: !0,
    });
}
var g = l(184248);
function v(e) {
    let {
        className: t,
        onScheduleChange: l,
        onRecurrenceChange: i,
        onTimeChange: s,
        timeSelected: x = !0,
        schedule: v,
        recurrenceRule: j,
        showEndDate: E = !1,
        requireEndDate: A = !1,
        disableStartDateTime: p = !1,
    } = e;
    if (null == v) return null;
    let N = null,
        f = v.startDate,
        C = a()(),
        y = a()().add(u.IS, "days"),
        b = a()().add(u.Xy, "days");
    null != j && (y.add(u.Ze, "years"), b.add(u.Ze, "years"));
    let I = (e) => {
        l({ ...v, endDate: e });
    };
    return (
        E &&
            (N =
                null != v.endDate || A
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: g.U,
                                  children: [
                                      (0, n.jsx)(r.J, {
                                          label: h.intl.string(h.t.CTLgZJ),
                                          required: A,
                                          value: v.endDate,
                                          onSelect: I,
                                          minDate: v.startDate,
                                          maxDate: b,
                                      }),
                                      (0, n.jsx)(d.c, {
                                          label: h.intl.string(h.t.j2RuXF),
                                          required: A,
                                          value: v.endDate,
                                          onChange: I,
                                      }),
                                  ],
                              }),
                              A
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(o.Q, {
                                                onClick: () => {
                                                    I(void 0);
                                                },
                                                text: h.intl.string(h.t.petdfk),
                                                size: "sm",
                                            }),
                                            (0, n.jsx)(c.h, { size: 24 }),
                                        ],
                                    }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(o.Q, {
                                  onClick: () => {
                                      I(a()(v.startDate).add(1, "hour"));
                                  },
                                  text: h.intl.string(h.t.ncdPcn),
                                  size: "sm",
                              }),
                              (0, n.jsx)(c.h, { size: 24 }),
                          ],
                      })),
        (0, n.jsxs)("div", {
            className: t,
            children: [
                (0, n.jsxs)("div", {
                    className: g.U,
                    children: [
                        (0, n.jsx)(r.J, {
                            label: h.intl.string(h.t.kKOIwJ),
                            required: !0,
                            value: v.startDate,
                            onSelect: (e) => {
                                l({ ...v, startDate: e });
                            },
                            minDate: C,
                            maxDate: y,
                            disabled: p,
                        }),
                        (0, n.jsx)(d.c, {
                            label: h.intl.string(h.t["6dGmCD"]),
                            required: !0,
                            value: v.startDate,
                            onChange: (e) => {
                                e.isValid() && (s?.(!0), l({ ...v, startDate: e }));
                            },
                            hideValue: !x,
                            disabled: p,
                        }),
                    ],
                }),
                N,
                null != f && null != i && (0, n.jsx)(m, { onRecurrenceChange: i, startDate: f, recurrenceRule: j }),
            ],
        })
    );
}
