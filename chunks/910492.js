n.d(t, {
    O: () => p,
    q: () => _,
});
var r = n(735438),
    i = n.n(r),
    l = n(265422),
    s = n(851109),
    a = n(734057),
    o = n(186111),
    c = n(309010),
    d = n(203982),
    u = n(652215);
let _ = {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(o.A.getLayers().length > 0) &&
            ((() => {
                let { notificationCenterVariant: e } = (0, s.GE)({
                    location: "TOGGLE_INBOX",
                });
                if ("sidebar" !== e) return;
                let t = c.A.getChannelId(),
                    n = a.A.getChannel(t);
                return window.location.pathname.startsWith(u.BVt.CHANNEL(u.gNP)) && null != n
                    ? (0, l.i)(n.guild_id, t)
                    : (0, l.a)(u.BVt.CHANNEL(u.gNP, null != t ? t : void 0));
            })(),
            d._.dispatch(u.jej.TOGGLE_INBOX),
            !1),
    },
    p = {
        binds: ["mod+shift+e"],
        comboKeysBindGlobal: !0,
        action: i().debounce(
            () => {
                if (d._.hasSubscribers(u.jej.MARK_TOP_INBOX_CHANNEL_READ))
                    return d._.dispatch(u.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            {
                leading: !0,
            },
        ),
    };
