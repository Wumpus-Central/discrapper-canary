var A = _(855986),
    n = _(462887),
    l = _(736653),
    r = _(775602);
_.d(
    t,
    {},
    {
        T: function (e, t) {
            let _ = (0, l.Ay)(),
                E = (0, A.bG)([r.Ay], () => r.Ay.useReducedMotion);
            return null == e
                ? null
                : (0, n.M)(_) || t
                  ? E
                      ? e.darkStaticUrl
                      : e.darkUrl
                  : E
                    ? e.lightStaticUrl
                    : e.lightUrl;
        },
    },
);
