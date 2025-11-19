n.d(t, {
    G6: () => m,
    JC: () => u,
    PW: () => f,
    yv: () => d,
}),
    n(388685);
var r = n(473749),
    o = n(447543),
    l = n(960904),
    i = n(830121),
    a = n(701190),
    s = n(771845),
    c = n(591759);
let u = (e) => null != e.text;
function d(e) {
    let t = 0 | Math.round(e),
        n = t % 60;
    return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"));
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2000,
        [o, l] = (0, r.useState)(e),
        i = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(
            () => () => {
                null != i.current && clearTimeout(i.current);
            },
            [e],
        ),
        [
            o,
            () => {
                l(t),
                    null != i.current && clearTimeout(i.current),
                    (i.current = setTimeout(() => {
                        l(e);
                    }, n));
            },
        ]
    );
}
async function p(e) {
    try {
        var t;
        let n = (0, i.zO)(e);
        if (null == n || n.type !== l.g.INVITE) return !1;
        let r = a.Z.getInvite(n.code);
        if (null == r) {
            let { invite: e } = await o.ZP.resolveInvite(n.code, "Markdown Link");
            r = e;
        }
        if (null == r) return !1;
        let c = s.ZP.getFlattenedGuildIds(),
            u = null == r || null == (t = r.guild) ? void 0 : t.id;
        return null != u && c.includes(u);
    } catch (e) {
        return !1;
    }
}
async function f(e) {
    try {
        if (c.Z.isDiscordUrl(e)) return !0;
        return await p(e);
    } catch (e) {
        return !1;
    }
}
