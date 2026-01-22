n.d(t, {
    GT: () => h,
    L4: () => O,
    Wi: () => f,
    bM: () => T,
    ff: () => N,
    t: () => I,
}),
    n(938796),
    n(896048);
var l,
    r = n(64700),
    a = n(665260),
    i = n(417597),
    s = n(709977),
    o = n(773669),
    c = n(696451),
    u = n(71393),
    E = n(287809),
    d = n(661191);
n(266047), n(221950);
var _ = n(340837);
let g = {
        month: "short",
        day: "numeric",
        year: "numeric",
    },
    A = {
        month: "numeric",
        day: "numeric",
        year: "numeric",
    };
var T =
    (((l = {})[(l.NO_GATE = 0)] = "NO_GATE"),
    (l[(l.NO_AGREEMENT = 1)] = "NO_AGREEMENT"),
    (l[(l.AGREED = 2)] = "AGREED"),
    l);
function f(e, t) {
    var n, l;
    let r = (0, i.bG)([E.default], () => E.default.getUser(e), [e]),
        o = (0, i.bG)([c.Ay], () => c.Ay.getMember(t, e), [t, e]),
        d = (0, i.bG)([u.A], () => u.A.getGuild(t), [t]);
    return (0, s.Qd)(d)
        ? null == r || null == o || null == d
            ? 1
            : (0, a.Lt)(null != (n = o.flags) ? n : 0, _.D.BYPASSES_VERIFICATION) ||
                (0, a.Lt)(null != (l = o.flags) ? l : 0, _.D.COMPLETED_ONBOARDING) ||
                (null != o.isPending && !o.isPending)
              ? 2
              : 1
        : 0;
}
function h(e, t) {
    var n;
    let l = (0, i.bG)([E.default], () => E.default.getUser(e), [e]),
        r = (0, i.bG)([c.Ay], () => c.Ay.getMember(t, e), [t, e]);
    if (null == l || null == r) return !1;
    let s = (0, a.Lt)(null != (n = r.flags) ? n : 0, _.D.BYPASSES_VERIFICATION),
        o = (null == l ? void 0 : l.isPhoneVerified()) || (null == l ? void 0 : l.isStaff()),
        u = (null == r ? void 0 : r.joinedAt) != null;
    return l.verified || o || u || s;
}
function I(e) {
    let t = (0, i.bG)([o.default], () => o.default.locale);
    return r.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, g), [e, t]);
}
function O(e) {
    let t = (0, i.bG)([o.default], () => o.default.locale);
    return r.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, A), [e, t]);
}
function N(e, t) {
    let n = (0, i.bG)([o.default], () => o.default.locale),
        l = (0, i.bG)([c.Ay], () => c.Ay.getMember(t, e), [t, e]),
        a = null == l ? void 0 : l.joinedAt;
    return r.useMemo(() => (null == a ? "" : new Date(a).toLocaleDateString(n, g)), [a, n]);
}
