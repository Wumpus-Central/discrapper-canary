var i = n(855986),
    l = n(808728),
    s = n(576705),
    a = n(526132);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.A;
    return null == e
        ? []
        : t
              .getChannels(e)
              [l.I].filter((e) => (0, a.n)(e.channel, n))
              .map((e) => e.channel);
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, i.yK)([s.A, l.A], () => r(e, l.A, s.A));
        },
        b: r,
    },
);
