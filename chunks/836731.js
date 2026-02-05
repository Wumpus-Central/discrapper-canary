n.d(t, { GT: () => N, L4: () => m, Wi: () => I, bM: () => T, ff: () => S, t: () => h }), n(938796);
var l,
    r = n(64700),
    a = n(665260),
    i = n(417597),
    s = n(709977),
    o = n(773669),
    E = n(696451),
    u = n(71393),
    c = n(287809),
    _ = n(661191);
n(266047), n(221950);
var d = n(340837);
let g = { month: "short", day: "numeric", year: "numeric" },
    A = { month: "numeric", day: "numeric", year: "numeric" };
var T =
    (((l = {})[(l.NO_GATE = 0)] = "NO_GATE"),
    (l[(l.NO_AGREEMENT = 1)] = "NO_AGREEMENT"),
    (l[(l.AGREED = 2)] = "AGREED"),
    l);
function I(e, t) {
    let n = (0, i.bG)([c.default], () => c.default.getUser(e), [e]),
        l = (0, i.bG)([E.Ay], () => E.Ay.getMember(t, e), [t, e]),
        r = (0, i.bG)([u.A], () => u.A.getGuild(t), [t]);
    return (0, s.Qd)(r)
        ? null == n || null == l || null == r
            ? 1
            : (0, a.Lt)(l.flags ?? 0, d.D.BYPASSES_VERIFICATION) ||
                (0, a.Lt)(l.flags ?? 0, d.D.COMPLETED_ONBOARDING) ||
                (null != l.isPending && !l.isPending)
              ? 2
              : 1
        : 0;
}
function N(e, t) {
    let n = (0, i.bG)([c.default], () => c.default.getUser(e), [e]),
        l = (0, i.bG)([E.Ay], () => E.Ay.getMember(t, e), [t, e]);
    if (null == n || null == l) return !1;
    let r = (0, a.Lt)(l.flags ?? 0, d.D.BYPASSES_VERIFICATION),
        s = n?.isPhoneVerified() || n?.isStaff(),
        o = l?.joinedAt != null;
    return n.verified || s || o || r;
}
function h(e) {
    let t = (0, i.bG)([o.default], () => o.default.locale);
    return r.useMemo(() => new Date(_.default.extractTimestamp(e)).toLocaleDateString(t, g), [e, t]);
}
function m(e) {
    let t = (0, i.bG)([o.default], () => o.default.locale);
    return r.useMemo(() => new Date(_.default.extractTimestamp(e)).toLocaleDateString(t, A), [e, t]);
}
function S(e, t) {
    let n = (0, i.bG)([o.default], () => o.default.locale),
        l = (0, i.bG)([E.Ay], () => E.Ay.getMember(t, e), [t, e]),
        a = l?.joinedAt;
    return r.useMemo(() => (null == a ? "" : new Date(a).toLocaleDateString(n, g)), [a, n]);
}
