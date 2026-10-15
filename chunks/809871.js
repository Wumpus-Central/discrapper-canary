n.d(t, { A: () => N });
var i = n(858899),
    r = n(73153),
    a = n(574172),
    s = n(869146),
    l = n(625180),
    o = n(991690),
    d = n(439372),
    c = n(462972),
    u = n(308277),
    _ = n(95701),
    E = n(174459),
    A = n(91242),
    h = n(457827),
    f = n(652215);
class I extends d.A {
    static displayName = "FramesManager";
    actions = {
        RPC_APP_DISCONNECTED: (e) => {
            this.handleRPCDisconnect(e);
        },
        FRAME_LAUNCH: (e) => {
            let { applicationId: t, analyticsContext: n } = e;
            (0, c.Pd)(t, n);
        },
        FRAME_LAUNCH_FAIL: (e) => {
            let { applicationId: t, error: n, analyticsContext: i } = e;
            (0, c.ms)(t, n, i);
        },
        FRAME_STOP: (e) => {
            let { applicationId: t } = e;
            (0, c.iG)(t);
        },
        VOICE_CHANNEL_SELECT: (e) => {
            this.handleVoiceChannelSelect(e);
        },
        CHANNEL_DELETE: (e) => {
            let { channel: t } = e;
            for (let e of A.A.getFramesForChannel(t.id)) (0, h.r)(e.id);
        },
        GUILD_DELETE: (e) => {
            let { guild: t } = e;
            if (!("unavailable" in t) || !0 !== t.unavailable)
                for (let e of A.A.getAllFrames())
                    e.surface.type !== o.U.MAIN &&
                        e.surface.type !== o.U.OVERLAY &&
                        e.surface.guildId === t.id &&
                        (0, h.r)(e.id);
        },
        CHANNEL_UPDATES: (e) => {
            let { channels: t } = e;
            for (let e of t)
                if (!(0, _.Gw)(e.type))
                    for (let t of A.A.getFramesForChannel(e.id))
                        t.surface.type !== o.U.MAIN && t.applicationId !== e.application_id && (0, h.r)(t.id);
        },
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t, currentVoiceChannelId: n } = e;
        if (null != n && n !== t)
            for (let e of A.A.getFramesForSurface({ type: o.U.VOICE_CHANNEL, channelId: n })) (0, h.r)(e.id);
    };
    handleRPCDisconnect = (e) => {
        let { reason: t } = e;
        if (null == t || !(0, u.A)(e)) return;
        let n = A.A.getFrameByEmbeddedContext(e.context, e.source.iframeId);
        null != n &&
            ((0, h.r)(n.id),
            t.code !== f.YI$.CLOSE_NORMAL &&
                (E.default.track(f.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: n.applicationId,
                }),
                this.showRPCDisconnectErrorUI(t)));
    };
}
var p = n(165610),
    T = n(392164),
    m = n(660183);
let g = !1,
    S = !1,
    N = new (class extends I {
        static displayName = "FramesWebManager";
        _initialize() {
            (super._initialize(),
                s.A.addChangeListener(this.handlePopoutWindowUpdate),
                r.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen),
                r.h.subscribe("FRAME_LAUNCH", this.handleFrameLaunch),
                r.h.subscribe("LOGOUT", this.handleLogout),
                r.h.subscribe("FRAME_POP_IN", this.handlePopInFrame));
        }
        _terminate() {
            (super._terminate(),
                s.A.removeChangeListener(this.handlePopoutWindowUpdate),
                r.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen),
                r.h.unsubscribe("FRAME_LAUNCH", this.handleFrameLaunch),
                r.h.unsubscribe("LOGOUT", this.handleLogout),
                r.h.unsubscribe("FRAME_POP_IN", this.handlePopInFrame));
        }
        handlePopoutWindowOpen = (e) => {
            let { key: t } = e;
            t === f.MLl.ACTIVITY_POPOUT && (S = !1);
        };
        handlePopoutWindowUpdate = () => {
            let e = g,
                t = s.A.getWindowOpen(f.MLl.ACTIVITY_POPOUT);
            if ((!e || t || S || l.A.clearMainFrameSlot(), (g = t), !s.A.getWindowOpen(T.f)))
                for (let e of A.A.getFramesForSurface(p.ZN)) (0, p.zB)(e) === T.f && (0, h.r)(e.id);
        };
        handleLogout = () => {
            for (let e of A.A.getFramesForSurface(p.ZN)) (0, h.r)(e.id);
        };
        handleFrameLaunch = (e) => {
            let { frameId: t, hostWindowKey: n } = e;
            n !== T.f || s.A.getWindowOpen(T.f) || (0, h.r)(t);
        };
        handlePopInFrame = () => {
            ((S = !0), a.close(f.MLl.ACTIVITY_POPOUT));
            let e = A.A.getMainFrame();
            null != e && (e.intent === p.sV.MAIN ? l.A.resetFrameLayoutModes(e.id) : l.A.clearMainFrameSlot());
        };
        showRPCDisconnectErrorUI(e) {
            let { code: t, message: n } = e,
                r = `${m.intl.formatToPlainString(m.t.hbiAO6, { code: t })}: ${n}`;
            (0, i.P0)({ text: r, variant: "critical" });
        }
    })();
