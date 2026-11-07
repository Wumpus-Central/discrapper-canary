var A = _(855986),
    n = _(462887),
    l = _(736653),
    T = _(775602);
_.d(
    e,
    {},
    {
        T: function (t, e) {
            let _ = (0, l.Ay)(),
                N = (0, A.bG)([T.Ay], () => T.Ay.useReducedMotion);
            return null == t
                ? null
                : (0, n.M)(_) || e
                  ? N
                      ? t.darkStaticUrl
                      : t.darkUrl
                  : N
                    ? t.lightStaticUrl
                    : t.lightUrl;
        },
    },
);
