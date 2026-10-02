e.d(n, { OI: () => P, lE: () => C, v6: () => O });
var I = e(582128),
    u = e(478104),
    N = e(17928),
    s = e(73153),
    E = e(617617),
    c = e(573163),
    l = e(935208),
    i = e(335385),
    o = e(313007),
    r = e(790782);
function A(t, n, e) {
    return e || 0 === t
        ? null
        : null != n && (l.default.getNonTimestampBits(n) & u.I.NEEDS_INPUT) != 0
          ? u.I.NEEDS_INPUT
          : u.I.FINISHED;
}
function C(t) {
    return (0, N.bG)(
        [c.Ay, E.A],
        () =>
            null == t
                ? null
                : A(
                      c.Ay.getMentionCount(t, r.P.CONJURING_PROJECT),
                      c.Ay.ackMessageId(t, r.P.CONJURING_PROJECT),
                      (0, o.cI)(E.A.settings, t),
                  ),
        [t],
    );
}
function P() {
    return (0, N.cf)([c.Ay, E.A], () => {
        let t = !1,
            n = 0;
        for (let e of c.Ay.getResourceIds(r.P.CONJURING_PROJECT)) {
            let I = A(
                c.Ay.getMentionCount(e, r.P.CONJURING_PROJECT),
                c.Ay.ackMessageId(e, r.P.CONJURING_PROJECT),
                (0, o.cI)(E.A.settings, e),
            );
            null != I && ((t = !0), I === u.I.NEEDS_INPUT && n++);
        }
        return { hasUnread: t, badgeCount: n };
    });
}
function O(t) {
    let n = (0, N.bG)([c.Ay], () => null != t && c.Ay.getMentionCount(t, r.P.CONJURING_PROJECT) > 0, [t]),
        e = (0, i.A)();
    I.useEffect(() => {
        null != t && n && e && s.h.dispatch({ type: "VIBEGRATIONS_PROJECT_ACK", projectId: t });
    }, [t, n, e]);
}
