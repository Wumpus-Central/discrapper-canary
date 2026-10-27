n.d(t, { yx: () => I, yv: () => p });
var i = n(435558),
    r = n.n(i),
    a = n(5180),
    s = n(749884),
    l = n(366811),
    o = n(309010),
    d = n(711014),
    c = n(619921),
    u = n(265422),
    _ = n(652215);
let E = r().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = d.Ay.getFlattenedGuildIds(),
        n = (function (e) {
            let t = l.A.getState().guildId;
            if (null == t) return -2;
            if ((0, a.ai)(t)) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n;
        })(t);
    if ((-1 !== (n += e) || (0, s.J)() || (n += e), -3 === n && (n = t.length - 1), n >= t.length || -2 === n))
        return void (0, u.a)(c.A.getHomeLink());
    let i = -1 === n ? _.YYv : t[n],
        r = o.Ay.getChannelId(i);
    (0, u.i)(i, r === i ? null : r, !1);
}, _.ugG);
var A = n(114129),
    h = n(442325);
function f(e, t) {
    return !!e.includes("tab") && !!h.A.isEnabled() && !(h.A.getTabs().length <= 1) && ((0, A.TC)(t), !0);
}
let I = {
        binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
        comboKeysBindGlobal: !0,
        action: (e, t) => (e.preventDefault(), e.stopPropagation(), f(t, 1) || E(), !1),
    },
    p = {
        binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
        comboKeysBindGlobal: !0,
        action: (e, t) => (e.preventDefault(), e.stopPropagation(), f(t, -1) || E(-1), !1),
    };
