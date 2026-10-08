n.d(t, { A: () => C });
var i = n(739187),
    r = n(857250),
    a = n(97483),
    s = n(73153),
    l = n(574172),
    o = n(869146),
    d = n(625180),
    c = n(991690),
    u = n(439372),
    _ = n(462972),
    E = n(308277),
    A = n(174459),
    h = n(91242),
    f = n(457827),
    I = n(652215);
class p extends u.A {
    static displayName = "FramesManager";
    actions = {
        RPC_APP_DISCONNECTED: (e) => {
            this.handleRPCDisconnect(e);
        },
        FRAME_LAUNCH: (e) => {
            let { applicationId: t, analyticsContext: n } = e;
            (0, _.Pd)(t, n);
        },
        FRAME_LAUNCH_FAIL: (e) => {
            let { applicationId: t, error: n, analyticsContext: i } = e;
            (0, _.ms)(t, n, i);
        },
        FRAME_STOP: (e) => {
            let { applicationId: t } = e;
            (0, _.iG)(t);
        },
        VOICE_CHANNEL_SELECT: (e) => {
            this.handleVoiceChannelSelect(e);
        },
        CHANNEL_DELETE: (e) => {
            let { channel: t } = e;
            for (let e of h.A.getFramesForChannel(t.id)) (0, f.r)(e.id);
        },
        GUILD_DELETE: (e) => {
            let { guild: t } = e;
            if (!("unavailable" in t) || !0 !== t.unavailable)
                for (let e of h.A.getAllFrames())
                    e.surface.type !== c.U.MAIN &&
                        e.surface.type !== c.U.OVERLAY &&
                        e.surface.guildId === t.id &&
                        (0, f.r)(e.id);
        },
        CHANNEL_UPDATES: (e) => {
            let { channels: t } = e;
            for (let e of t)
                for (let t of h.A.getFramesForChannel(e.id)) t.applicationId !== e.application_id && (0, f.r)(t.id);
        },
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t, currentVoiceChannelId: n } = e;
        if (null != n && n !== t)
            for (let e of h.A.getFramesForSurface({ type: c.U.VOICE_CHANNEL, channelId: n })) (0, f.r)(e.id);
    };
    handleRPCDisconnect = (e) => {
        let { reason: t } = e;
        if (null == t || !(0, E.A)(e)) return;
        let n = h.A.getFrameByEmbeddedContext(e.context, e.source.iframeId);
        null != n &&
            ((0, f.r)(n.id),
            t.code !== I.YI$.CLOSE_NORMAL &&
                (A.default.track(I.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: n.applicationId,
                }),
                this.showRPCDisconnectErrorUI(t)));
    };
}
var T = n(165610),
    m = n(392164),
    g = n(660183);
let S = !1,
    N = !1,
    C = new (class extends p {
        static displayName = "FramesWebManager";
        _initialize() {
            (super._initialize(),
                o.A.addChangeListener(this.handlePopoutWindowUpdate),
                s.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen),
                s.h.subscribe("FRAME_LAUNCH", this.handleFrameLaunch),
                s.h.subscribe("LOGOUT", this.handleLogout),
                s.h.subscribe("FRAME_POP_IN", this.handlePopInFrame));
        }
        _terminate() {
            (super._terminate(),
                o.A.removeChangeListener(this.handlePopoutWindowUpdate),
                s.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen),
                s.h.unsubscribe("FRAME_LAUNCH", this.handleFrameLaunch),
                s.h.unsubscribe("LOGOUT", this.handleLogout),
                s.h.unsubscribe("FRAME_POP_IN", this.handlePopInFrame));
        }
        handlePopoutWindowOpen = (e) => {
            let { key: t } = e;
            t === I.MLl.ACTIVITY_POPOUT && (N = !1);
        };
        handlePopoutWindowUpdate = () => {
            let e = S,
                t = o.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT);
            if ((!e || t || N || d.A.clearMainFrameSlot(), (S = t), !o.A.getWindowOpen(m.f)))
                for (let e of h.A.getFramesForSurface(T.ZN)) (0, T.zB)(e) === m.f && (0, f.r)(e.id);
        };
        handleLogout = () => {
            for (let e of h.A.getFramesForSurface(T.ZN)) (0, f.r)(e.id);
        };
        handleFrameLaunch = (e) => {
            let { frameId: t, hostWindowKey: n } = e;
            n !== m.f || o.A.getWindowOpen(m.f) || (0, f.r)(t);
        };
        handlePopInFrame = () => {
            ((N = !0), l.close(I.MLl.ACTIVITY_POPOUT));
            let e = h.A.getMainFrame();
            null != e && (e.intent === T.sV.MAIN ? d.A.resetFrameLayoutModes(e.id) : d.A.clearMainFrameSlot());
        };
        showRPCDisconnectErrorUI(e) {
            let { code: t, message: n } = e,
                s = `${g.intl.formatToPlainString(g.t.hbiAO6, { code: t })}: ${n}`;
            (0, i.P)((0, r.o)(s, a.Ck.FAILURE));
        }
    })();
