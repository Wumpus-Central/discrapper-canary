var e = i(477900);
i(582128);
var n = i(682163),
    d = i(258576),
    t = i(792996);
i.d(
    a,
    {},
    {
        A: function (l, a) {
            return [
                ...(null != l
                    ? [
                          {
                              label: t.intl.string(d.default.Bz4S5B),
                              options: [{ id: l.value, label: l.label, value: l.value, leading: l.leading }],
                          },
                      ]
                    : []),
                {
                    label: t.intl.string(d.default.Uugfhl),
                    options: a.map((l) => ({
                        id: l.id,
                        label: l.name,
                        value: l.id,
                        leading: (0, e.jsx)(n.Ay, { guild: l, size: n.Ay.Sizes.MINI, active: !0 }),
                    })),
                },
            ];
        },
    },
);
