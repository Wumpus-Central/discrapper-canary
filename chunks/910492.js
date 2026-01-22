n.d(t, {
    O: () => _,
    q: () => p,
});
var r = n(735438),
    i = n.n(r),
    a = n(265422),
    s = n(851109),
    o = n(734057),
    l = n(186111),
    c = n(309010),
    u = n(203982),
    d = n(652215);
let f = () => {
        let { notificationCenterVariant: e } = (0, s.GE)({
            location: "TOGGLE_INBOX",
        });
        if ("sidebar" !== e) return;
        let t = c.A.getChannelId(),
            n = o.A.getChannel(t);
        return window.location.pathname.startsWith(d.BVt.CHANNEL(d.gNP)) && null != n
            ? (0, a.i)(n.guild_id, t)
            : (0, a.a)(d.BVt.CHANNEL(d.gNP, null != t ? t : void 0));
    },
    p = {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () => !(l.A.getLayers().length > 0) && (f(), u._.dispatch(d.jej.TOGGLE_INBOX), !1),
    },
    _ = {
        binds: ["mod+shift+e"],
        comboKeysBindGlobal: !0,
        action: i().debounce(
            () => {
                if (u._.hasSubscribers(d.jej.MARK_TOP_INBOX_CHANNEL_READ))
                    return u._.dispatch(d.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            {
                leading: !0,
            },
        ),
    };
