_.d(E, { Wx: () => a, g0: () => N, qC: () => D });
var t,
    u = _(656),
    i = _(484051),
    c = _(961943),
    A = _(612200),
    e = _(323073),
    o = _(398884),
    r = _(772366),
    S = _(207560),
    l = _(652215),
    O = _(204925),
    a =
        (((t = {}).PROCEED = "PROCEED"),
        (t.AGE_GATE_SHOWN = "AGE_GATE_SHOWN"),
        (t.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN"),
        t);
function D(n) {
    let { guild: E, isMember: _, onConfirm: t } = n;
    return (
        null != E &&
        !_ &&
        !!(0, e.zS)(E) &&
        !!(0, S.u0)() &&
        (function (n) {
            let { onConfirm: E } = n;
            return !!(0, i.x)(c.A4) && ((0, u.DO)({ onConfirm: E }), !0);
        })({ onConfirm: t })
    );
}
function G(n) {
    return null != n && (0, o.Sn)();
}
function C(n) {
    (0, r.A)({
        analyticsSource: { page: l.liQ.INVITE_EMBED },
        analyticsLocation: { page: l.liQ.INVITE_EMBED, section: l.JJy.GUILD_CAP_UPSELL_MODAL },
        analyticsLocations: n,
    });
}
function N(n) {
    let { guildId: E, guild: _, isMember: t, analyticsLocations: u, onGateConfirm: i } = n;
    return D({
        guild: _,
        isMember: t,
        onConfirm: function () {
            G(E) ? C(u) : i();
        },
    })
        ? "AGE_GATE_SHOWN"
        : null != _ && !t && (0, e.xq)() && (0, e.zS)(_)
          ? ((0, A.yO)(O.w_.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN")
          : G(E)
            ? (C(u), "GUILD_CAP_SHOWN")
            : "PROCEED";
}
