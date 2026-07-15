"use strict";
n.d(t, { yx: () => m, yv: () => g });
var i = n(435558),
    r = n.n(i),
    a = n(554146),
    s = n(558845),
    l = n(826673),
    o = n(181079),
    d = n(379587),
    c = n(832275),
    u = n(366811),
    _ = n(309010),
    E = n(967198),
    A = n(711014),
    h = n(287809),
    I = n(619921),
    f = n(265422),
    p = n(652215);
let T = r().throttle(function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = A.Ay.getFlattenedGuildIds(),
            { enabled: n } = d.o.getConfig({ location: "navigateToServer" }),
            i = (0, s.dD)(a.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
            r = (0, l.k8)(a.M.FAVORITES_SERVER_ONBOARDING_INTRO),
            T = (function (e) {
                let t = u.A.getState().guildId;
                if (null == t) return -2;
                if (t === p.YYv) return -1;
                let n = e.indexOf(t);
                return -1 === n ? -2 : n;
            })(t);
        if (
            (-1 !== (T += e) ||
                (0, c.J)(o.A, h.default, E.A, {
                    favoritesGuildXPEnabled: n,
                    isMenuItemDCSelected: i,
                    isIntroDCDismissed: r,
                }) ||
                (T += e),
            -3 === T && (T = t.length - 1),
            T >= t.length || -2 === T)
        )
            return void (0, f.a)(I.A.getHomeLink());
        let m = -1 === T ? p.YYv : t[T],
            g = _.A.getChannelId(m);
        (0, f.i)(m, g === m ? null : g, !1);
    }, p.ugG),
    m = {
        binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), T(), !1),
    },
    g = {
        binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), T(-1), !1),
    };
