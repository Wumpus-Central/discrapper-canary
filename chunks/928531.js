n.d(t, { yx: () => _, yv: () => b });
var i = n(735438),
    l = n.n(i),
    s = n(554146),
    r = n(771781),
    a = n(826673),
    o = n(181079),
    d = n(379587),
    c = n(832275),
    u = n(366811),
    h = n(309010),
    g = n(967198),
    A = n(711014),
    E = n(287809),
    p = n(619921),
    I = n(265422),
    C = n(652215);
let m = l().throttle(function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = A.Ay.getFlattenedGuildIds(),
            { enabled: n } = d.o.getConfig({ location: "navigateToServer" }),
            i = (0, r.dD)(s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
            l = (0, a.k8)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO),
            m = (function (e) {
                let t = u.A.getState().guildId;
                if (null == t) return -2;
                if (t === C.YYv) return -1;
                let n = e.indexOf(t);
                return -1 === n ? -2 : n;
            })(t);
        if (
            (-1 !== (m += e) ||
                (0, c.J)(o.A, E.default, g.A, {
                    favoritesGuildXPEnabled: n,
                    isMenuItemDCSelected: i,
                    isIntroDCDismissed: l,
                }) ||
                (m += e),
            -3 === m && (m = t.length - 1),
            m >= t.length || -2 === m)
        )
            return void (0, I.a)(p.A.getHomeLink());
        let _ = -1 === m ? C.YYv : t[m],
            b = h.A.getChannelId(_);
        (0, I.i)(_, b === _ ? null : b, !1);
    }, C.ugG),
    _ = {
        binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), m(), !1),
    },
    b = {
        binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
        comboKeysBindGlobal: !0,
        action: (e) => (e.preventDefault(), e.stopPropagation(), m(-1), !1),
    };
