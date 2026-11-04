var n = t(477900);
t(582128);
var i = t(69282),
    s = t(657048),
    r = t(63104);
t.d(
    l,
    {},
    {
        A: function (e) {
            let { guildId: l, role: t, size: a, className: o } = e,
                d = (0, i.Xx)({ guildId: l, roleId: t.id, size: a });
            return null != d
                ? (0, n.jsx)(s.A, { className: o, ...d })
                : (0, n.jsx)(r.A, { color: t.colorString, className: o, size: a });
        },
    },
);
