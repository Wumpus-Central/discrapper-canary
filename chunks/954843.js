n.d(t, { W: () => u });
var r = n(91242),
    i = n(855687),
    l = n(71393),
    a = n(576705),
    s = n(636401),
    o = n(569475),
    c = n(652215);
function u() {
    let e = r.A.getConnectedFrame();
    if (null != e)
        return {
            frame: e,
            channel: void 0,
            guild: void 0,
        };
    let t = (0, o.A)();
    if (null == t) throw new s.A({ errorCode: c.Lw6.INVALID_CHANNEL }, "Invalid channel");
    let n = l.A.getGuild(t.getGuildId());
    if (null == n) throw new s.A({ errorCode: c.Lw6.INVALID_CHANNEL }, "Invalid guild ".concat(t.getGuildId()));
    if (!(0, i.K)(a.A, n, t))
        throw new s.A({ errorCode: c.Lw6.INVALID_PERMISSIONS }, "No invite permissions for ".concat(t.id));
    return {
        frame: void 0,
        channel: t,
        guild: n,
    };
}
