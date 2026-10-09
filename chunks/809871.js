n.d(t, { A: () => S });
var i = n(858899),
    r = n(73153),
    a = n(574172),
    s = n(869146),
    l = n(625180),
    o = n(991690),
    d = n(439372),
    c = n(462972),
    u = n(308277),
    _ = n(174459),
    E = n(91242),
    A = n(457827),
    h = n(652215);
class f extends d.A {
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
            for (let e of E.A.getFramesForChannel(t.id)) (0, A.r)(e.id);
        },
        GUILD_DELETE: (e) => {
            let { guild: t } = e;
            if (!("unavailable" in t) || !0 !== t.unavailable)
                for (let e of E.A.getAllFrames())
                    e.surface.type !== o.U.MAIN &&
                        e.surface.type !== o.U.OVERLAY &&
                        e.surface.guildId === t.id &&
                        (0, A.r)(e.id);
        },
        CHANNEL_UPDATES: (e) => {
            let { channels: t } = e;
            for (let e of t)
                for (let t of E.A.getFramesForChannel(e.id)) t.applicationId !== e.application_id && (0, A.r)(t.id);
        },
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t, currentVoiceChannelId: n } = e;
        if (null != n && n !== t)
            for (let e of E.A.getFramesForSurface({ type: o.U.VOICE_CHANNEL, channelId: n })) (0, A.r)(e.id);
    };
    handleRPCDisconnect = (e) => {
        let { reason: t } = e;
        if (null == t || !(0, u.A)(e)) return;
        let n = E.A.getFrameByEmbeddedContext(e.context, e.source.iframeId);
        null != n &&
            ((0, A.r)(n.id),
            t.code !== h.YI$.CLOSE_NORMAL &&
                (_.default.track(h.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: n.applicationId,
                }),
                this.showRPCDisconnectErrorUI(t)));
    };
}
var I = n(165610),
    p = n(392164),
    T = n(660183);
let m = !1,
    g = !1,
    S = new (class extends f {
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
            t === h.MLl.ACTIVITY_POPOUT && (g = !1);
        };
        handlePopoutWindowUpdate = () => {
            let e = m,
                t = s.A.getWindowOpen(h.MLl.ACTIVITY_POPOUT);
            if ((!e || t || g || l.A.clearMainFrameSlot(), (m = t), !s.A.getWindowOpen(p.f)))
                for (let e of E.A.getFramesForSurface(I.ZN)) (0, I.zB)(e) === p.f && (0, A.r)(e.id);
        };
        handleLogout = () => {
            for (let e of E.A.getFramesForSurface(I.ZN)) (0, A.r)(e.id);
        };
        handleFrameLaunch = (e) => {
            let { frameId: t, hostWindowKey: n } = e;
            n !== p.f || s.A.getWindowOpen(p.f) || (0, A.r)(t);
        };
        handlePopInFrame = () => {
            ((g = !0), a.close(h.MLl.ACTIVITY_POPOUT));
            let e = E.A.getMainFrame();
            null != e && (e.intent === I.sV.MAIN ? l.A.resetFrameLayoutModes(e.id) : l.A.clearMainFrameSlot());
        };
        showRPCDisconnectErrorUI(e) {
            let { code: t, message: n } = e,
                r = `${T.intl.formatToPlainString(T.t.hbiAO6, { code: t })}: ${n}`;
            (0, i.P0)({ text: r, variant: "critical" });
        }
    })();
