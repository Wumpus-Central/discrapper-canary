n.d(t, { W: () => u });
var i = n(91242),
    r = n(855687),
    a = n(71393),
    l = n(576705),
    s = n(636401),
    o = n(569475),
    d = n(652215);
function u() {
    let e = i.A.getConnectedFrame();
    if (null != e) return { frame: e, channel: void 0, guild: void 0 };
    let t = (0, o.A)();
    if (null == t) throw new s.A({ errorCode: d.Lw6.INVALID_CHANNEL }, "Invalid channel");
    let n = a.A.getGuild(t.getGuildId());
    if (null == n) throw new s.A({ errorCode: d.Lw6.INVALID_CHANNEL }, `Invalid guild ${t.getGuildId()}`);
    if (!(0, r.K)(l.A, n, t))
        throw new s.A({ errorCode: d.Lw6.INVALID_PERMISSIONS }, `No invite permissions for ${t.id}`);
    return { frame: void 0, channel: t, guild: n };
}
