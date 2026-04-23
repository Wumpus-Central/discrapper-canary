n.d(t, { GT: () => N, L4: () => m, Wi: () => I, bM: () => T, ff: () => O, t: () => G }), n(938796);
var l,
    a = n(64700),
    r = n(665260),
    i = n(417597),
    s = n(709977),
    E = n(773669),
    _ = n(696451),
    u = n(71393),
    o = n(287809),
    c = n(661191);
n(266047), n(221950);
var d = n(340837);
let A = { month: "short", day: "numeric", year: "numeric" },
    g = { month: "numeric", day: "numeric", year: "numeric" };
var T =
    (((l = {})[(l.NO_GATE = 0)] = "NO_GATE"),
    (l[(l.NO_AGREEMENT = 1)] = "NO_AGREEMENT"),
    (l[(l.AGREED = 2)] = "AGREED"),
    l);
function I(e, t) {
    let n = (0, i.bG)([o.default], () => o.default.getUser(e), [e]),
        l = (0, i.bG)([_.Ay], () => _.Ay.getMember(t, e), [t, e]),
        a = (0, i.bG)([u.A], () => u.A.getGuild(t), [t]);
    return (0, s.Qd)(a)
        ? null == n || null == l || null == a
            ? 1
            : (0, r.Lt)(l.flags ?? 0, d.D.BYPASSES_VERIFICATION) ||
                (0, r.Lt)(l.flags ?? 0, d.D.COMPLETED_ONBOARDING) ||
                (null != l.isPending && !l.isPending)
              ? 2
              : 1
        : 0;
}
function N(e, t) {
    let n = (0, i.bG)([o.default], () => o.default.getUser(e), [e]),
        l = (0, i.bG)([_.Ay], () => _.Ay.getMember(t, e), [t, e]);
    if (null == n || null == l) return !1;
    let a = (0, r.Lt)(l.flags ?? 0, d.D.BYPASSES_VERIFICATION),
        s = n?.isPhoneVerified() || n?.isStaff(),
        E = l?.joinedAt != null;
    return n.verified || s || E || a;
}
function G(e) {
    let t = (0, i.bG)([E.default], () => E.default.locale);
    return a.useMemo(() => new Date(c.default.extractTimestamp(e)).toLocaleDateString(t, A), [e, t]);
}
function m(e) {
    let t = (0, i.bG)([E.default], () => E.default.locale);
    return a.useMemo(() => new Date(c.default.extractTimestamp(e)).toLocaleDateString(t, g), [e, t]);
}
function O(e, t) {
    let n = (0, i.bG)([E.default], () => E.default.locale),
        l = (0, i.bG)([_.Ay], () => _.Ay.getMember(t, e), [t, e]),
        r = l?.joinedAt;
    return a.useMemo(() => (null == r ? "" : new Date(r).toLocaleDateString(n, A)), [r, n]);
}
