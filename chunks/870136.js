var e = u(855986),
    r = u(696451),
    i = u(287809),
    c = u(316031);
function l(n, t, u) {
    return null != t && null != n ? u.getMember(t, n) : null;
}
function a(n) {
    return [n?.communicationDisabledUntil ?? null, (0, c.Z)(n)];
}
function d(n, t) {
    return a((0, e.bG)([r.Ay], () => l(n, t, r.Ay), [t, n]));
}
u.d(
    t,
    {},
    {
        Ay: d,
        U0: function (n, t) {
            return a(l(n, t, r.Ay));
        },
        c: function (n) {
            let t = (0, e.bG)([i.default], () => i.default.getCurrentUser());
            return d(t?.id, n);
        },
    },
);
