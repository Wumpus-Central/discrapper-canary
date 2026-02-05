n.d(t, { O: () => m, q: () => _ });
var i = n(735438),
    s = n.n(i),
    r = n(265422),
    a = n(851109),
    l = n(734057),
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
                let { notificationCenterVariant: e } = (0, a.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = c.A.getChannelId(),
                    n = l.A.getChannel(t);
                return window.location.pathname.startsWith(u.BVt.CHANNEL(u.gNP)) && null != n
                    ? (0, r.i)(n.guild_id, t)
                    : (0, r.a)(u.BVt.CHANNEL(u.gNP, t ?? void 0));
            })(),
            d._.dispatch(u.jej.TOGGLE_INBOX),
            !1),
    },
    m = {
        binds: ["mod+shift+e"],
        comboKeysBindGlobal: !0,
        action: s().debounce(
            () => {
                if (d._.hasSubscribers(u.jej.MARK_TOP_INBOX_CHANNEL_READ))
                    return d._.dispatch(u.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            { leading: !0 },
        ),
    };
