var l = n(855986),
    r = n(462887),
    i = n(736653),
    u = n(775602);
n.d(
    t,
    {},
    {
        T: function (e, t) {
            let n = (0, i.Ay)(),
                o = (0, l.bG)([u.Ay], () => u.Ay.useReducedMotion);
            return null == e
                ? null
                : (0, r.M)(n) || t
                  ? o
                      ? e.darkStaticUrl
                      : e.darkUrl
                  : o
                    ? e.lightStaticUrl
                    : e.lightUrl;
        },
    },
);
