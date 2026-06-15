n.d(t, { yx: () => p, yv: () => S });
var i = n(735438),
    l = n.n(i),
    r = n(554146),
    s = n(558845),
    o = n(826673),
    a = n(181079),
    d = n(379587),
    c = n(832275),
    u = n(366811),
    h = n(309010),
    A = n(967198),
    E = n(711014),
    g = n(287809),
    C = n(619921),
    _ = n(265422),
    I = n(652215);
let T = l().throttle(function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = E.Ay.getFlattenedGuildIds(),
            { enabled: n } = d.o.getConfig({ location: "navigateToServer" }),
            i = (0, s.dD)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
            l = (0, o.k8)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO),
            T = (function (e) {
                let t = u.A.getState().guildId;
                if (null == t) return -2;
                if (t === I.YYv) return -1;
                let n = e.indexOf(t);
                return -1 === n ? -2 : n;
            })(t);
        if (
            (-1 !== (T += e) ||
                (0, c.J)(a.A, g.default, A.A, {
                    favoritesGuildXPEnabled: n,
                    isMenuItemDCSelected: i,
                    isIntroDCDismissed: l,
                }) ||
                (T += e),
            -3 === T && (T = t.length - 1),
            T >= t.length || -2 === T)
        )
            return void (0, _.a)(C.A.getHomeLink());
        let p = -1 === T ? I.YYv : t[T],
            S = h.A.getChannelId(p);
        (0, _.i)(p, S === p ? null : S, !1);
    }, I.ugG),
    p = {
        binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), T(), !1),
    },
    S = {
        binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), T(-1), !1),
    };
