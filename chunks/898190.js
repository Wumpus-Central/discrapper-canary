var e = c(582128),
    s = c(181940);
c.d(
    t,
    {},
    {
        A: function (a, t) {
            let { isLoading: c, error: i, onToggle: p } = (0, s.A)(a, t);
            return { isLoading: c, error: i, onDeactivate: e.useCallback(() => p(!1), [p]) };
        },
    },
);
