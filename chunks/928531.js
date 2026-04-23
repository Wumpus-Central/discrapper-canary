n.d(t, { yx: () => C, yv: () => S });
var i = n(735438),
    r = n.n(i),
    s = n(554146),
    l = n(771781),
    o = n(826673),
    a = n(181079),
    d = n(379587),
    c = n(832275),
    _ = n(366811),
    u = n(309010),
    g = n(967198),
    h = n(711014),
    A = n(287809),
    p = n(619921),
    I = n(265422),
    E = n(652215);
let b = r().throttle(function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = h.Ay.getFlattenedGuildIds(),
            { enabled: n } = d.o.getConfig({ location: "navigateToServer" }),
            i = (0, l.dD)(s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
            r = (0, o.k8)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO),
            b = (function (e) {
                let t = _.A.getState().guildId;
                if (null == t) return -2;
                if (t === E.YYv) return -1;
                let n = e.indexOf(t);
                return -1 === n ? -2 : n;
            })(t);
        if (
            (-1 !== (b += e) ||
                (0, c.J)(a.A, A.default, g.A, {
                    favoritesGuildXPEnabled: n,
                    isMenuItemDCSelected: i,
                    isIntroDCDismissed: r,
                }) ||
                (b += e),
            -3 === b && (b = t.length - 1),
            b >= t.length || -2 === b)
        )
            return void (0, I.a)(p.A.getHomeLink());
        let C = -1 === b ? E.YYv : t[b],
            S = u.A.getChannelId(C);
        (0, I.i)(C, S === C ? null : S, !1);
    }, E.ugG),
    C = {
        binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), b(), !1),
    },
    S = {
        binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), b(-1), !1),
    };
