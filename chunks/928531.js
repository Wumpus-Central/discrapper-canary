n.d(t, { yx: () => _, yv: () => I });
var i = n(435558),
    l = n.n(i),
    r = n(5180),
    s = n(749884),
    a = n(366811),
    o = n(309010),
    d = n(711014),
    c = n(619921),
    u = n(265422),
    A = n(652215);
let h = l().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = d.Ay.getFlattenedGuildIds(),
        n = (function (e) {
            let t = a.A.getState().guildId;
            if (null == t) return -2;
            if ((0, r.ai)(t)) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n;
        })(t);
    if ((-1 !== (n += e) || (0, s.J)() || (n += e), -3 === n && (n = t.length - 1), n >= t.length || -2 === n))
        return void (0, u.a)(c.A.getHomeLink());
    let i = -1 === n ? A.YYv : t[n],
        l = o.Ay.getChannelId(i);
    (0, u.i)(i, l === i ? null : l, !1);
}, A.ugG);
var E = n(114129),
    g = n(442325);
function C(e, t) {
    return !!e.includes("tab") && !!g.A.isEnabled() && !(g.A.getTabs().length <= 1) && ((0, E.TC)(t), !0);
}
let _ = {
        binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
        comboKeysBindGlobal: !0,
        action: (e, t) => (e.preventDefault(), e.stopPropagation(), C(t, 1) || h(), !1),
    },
    I = {
        binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
        comboKeysBindGlobal: !0,
        action: (e, t) => (e.preventDefault(), e.stopPropagation(), C(t, -1) || h(-1), !1),
    };
