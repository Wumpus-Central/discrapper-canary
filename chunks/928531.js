"use strict";
n.d(t, { yx: () => I, yv: () => T });
var i = n(735438),
    r = n.n(i),
    s = n(554146),
    a = n(558845),
    o = n(826673),
    l = n(181079),
    u = n(379587),
    c = n(832275),
    d = n(366811),
    _ = n(309010),
    f = n(967198),
    h = n(711014),
    p = n(287809),
    E = n(619921),
    m = n(265422),
    g = n(652215);
let A = r().throttle(function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = h.Ay.getFlattenedGuildIds(),
            { enabled: n } = u.o.getConfig({ location: "navigateToServer" }),
            i = (0, a.dD)(s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
            r = (0, o.k8)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO),
            A = (function (e) {
                let t = d.A.getState().guildId;
                if (null == t) return -2;
                if (t === g.YYv) return -1;
                let n = e.indexOf(t);
                return -1 === n ? -2 : n;
            })(t);
        if (
            (-1 !== (A += e) ||
                (0, c.J)(l.A, p.default, f.A, {
                    favoritesGuildXPEnabled: n,
                    isMenuItemDCSelected: i,
                    isIntroDCDismissed: r,
                }) ||
                (A += e),
            -3 === A && (A = t.length - 1),
            A >= t.length || -2 === A)
        )
            return void (0, m.a)(E.A.getHomeLink());
        let I = -1 === A ? g.YYv : t[A],
            T = _.A.getChannelId(I);
        (0, m.i)(I, T === I ? null : T, !1);
    }, g.ugG),
    I = {
        binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), A(), !1),
    },
    T = {
        binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), A(-1), !1),
    };
