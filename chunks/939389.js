n.d(t, {
    $R: () => f,
    JC: () => c,
    PW: () => m,
    yv: () => u,
}),
    n(388685),
    n(473749);
var r = n(447543),
    o = n(960904),
    l = n(830121),
    i = n(701190),
    a = n(771845),
    s = n(591759);
let c = (e) => null != e.text;
function u(e) {
    let t = 0 | e,
        n = Math.floor(t / 3600),
        r = Math.floor((t % 3600) / 60),
        o = t % 60;
    return n > 0
        ? "".concat(n, ":").concat(String(r).padStart(2, "0"), ":").concat(String(o).padStart(2, "0"))
        : "".concat(r, ":").concat(String(o).padStart(2, "0"));
}
async function d(e) {
    try {
        var t;
        let n = (0, l.zO)(e);
        if (null == n || n.type !== o.g.INVITE) return !1;
        let s = i.Z.getInvite(n.code);
        if (null == s) {
            let { invite: e } = await r.ZP.resolveInvite(n.code, "Markdown Link");
            s = e;
        }
        if (null == s) return !1;
        let c = a.ZP.getFlattenedGuildIds(),
            u = null == s || null == (t = s.guild) ? void 0 : t.id;
        return null != u && c.includes(u);
    } catch (e) {
        return !1;
    }
}
async function m(e) {
    try {
        if (s.Z.isDiscordUrl(e)) return !0;
        return await d(e);
    } catch (e) {
        return !1;
    }
}
function f(e, t, n) {
    return e ? (t.timestampSec >= t.duration ? 0 : t.timestampSec) : Math.max(t.timestampSec, n.progressSeconds);
}
