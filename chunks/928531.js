n.d(t, { yx: () => N, yv: () => p });
var i = n(735438),
    l = n.n(i),
    r = n(554146),
    s = n(558845),
    a = n(826673),
    o = n(181079),
    d = n(379587),
    c = n(832275),
    u = n(366811),
    A = n(309010),
    E = n(967198),
    h = n(711014),
    C = n(287809),
    g = n(619921),
    _ = n(265422),
    I = n(652215);
let T = l().throttle(function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = h.Ay.getFlattenedGuildIds(),
            { enabled: n } = d.o.getConfig({ location: "navigateToServer" }),
            i = (0, s.dD)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
            l = (0, a.k8)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO),
            T = (function (e) {
                let t = u.A.getState().guildId;
                if (null == t) return -2;
                if (t === I.YYv) return -1;
                let n = e.indexOf(t);
                return -1 === n ? -2 : n;
            })(t);
        if (
            (-1 !== (T += e) ||
                (0, c.J)(o.A, C.default, E.A, {
                    favoritesGuildXPEnabled: n,
                    isMenuItemDCSelected: i,
                    isIntroDCDismissed: l,
                }) ||
                (T += e),
            -3 === T && (T = t.length - 1),
            T >= t.length || -2 === T)
        )
            return void (0, _.a)(g.A.getHomeLink());
        let N = -1 === T ? I.YYv : t[T],
            p = A.A.getChannelId(N);
        (0, _.i)(N, p === N ? null : p, !1);
    }, I.ugG),
    N = {
        binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), T(), !1),
    },
    p = {
        binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), T(-1), !1),
    };
