"use strict";
n.d(t, { yx: () => E, yv: () => A });
var i = n(435558),
    r = n.n(i),
    a = n(832275),
    s = n(366811),
    l = n(309010),
    o = n(711014),
    d = n(619921),
    c = n(265422),
    u = n(652215);
let _ = r().throttle(function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = o.Ay.getFlattenedGuildIds(),
            n = (function (e) {
                let t = s.A.getState().guildId;
                if (null == t) return -2;
                if (t === u.YYv) return -1;
                let n = e.indexOf(t);
                return -1 === n ? -2 : n;
            })(t);
        if ((-1 !== (n += e) || (0, a.J)() || (n += e), -3 === n && (n = t.length - 1), n >= t.length || -2 === n))
            return void (0, c.a)(d.A.getHomeLink());
        let i = -1 === n ? u.YYv : t[n],
            r = l.Ay.getChannelId(i);
        (0, c.i)(i, r === i ? null : r, !1);
    }, u.ugG),
    E = {
        binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), _(), !1),
    },
    A = {
        binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), _(-1), !1),
    };
