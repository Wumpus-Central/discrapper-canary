var A = t(855986),
    n = t(462887),
    l = t(736653),
    T = t(775602);
t.d(
    e,
    {},
    {
        T: function (_, e) {
            let t = (0, l.Ay)(),
                N = (0, A.bG)([T.Ay], () => T.Ay.useReducedMotion);
            return null == _
                ? null
                : (0, n.M)(t) || e
                  ? N
                      ? _.darkStaticUrl
                      : _.darkUrl
                  : N
                    ? _.lightStaticUrl
                    : _.lightUrl;
        },
    },
);
