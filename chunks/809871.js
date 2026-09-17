n.d(t, { A: () => m });
var i = n(691540),
    r = n(857250),
    a = n(97483),
    s = n(228366),
    l = n(574172),
    o = n(869146),
    d = n(625180),
    c = n(439372),
    u = n(957292),
    _ = n(174459),
    E = n(91242),
    A = n(165610),
    h = n(652215),
    I = n(613057);
class f extends c.A {
    static displayName = "FramesManager";
    actions = {
        RPC_APP_DISCONNECTED: (e) => {
            this.handleRPCDisconnect(e);
        },
        FRAME_LAUNCH: (e) => {
            let { applicationId: t, analyticsContext: n } = e;
            (0, u.Pd)(t, n);
        },
        FRAME_LAUNCH_FAIL: (e) => {
            let { applicationId: t, error: n, analyticsContext: i } = e;
            (0, u.ms)(t, n, i);
        },
        FRAME_STOP: (e) => {
            let { applicationId: t } = e;
            (0, u.iG)(t);
        },
        VOICE_CHANNEL_SELECT: (e) => {
            this.handleVoiceChannelSelect(e);
        },
        CHANNEL_DELETE: (e) => {
            let { channel: t } = e;
            for (let e of E.A.getFramesForChannel(t.id)) this.leaveFrame(e.id);
        },
        CHANNEL_UPDATES: (e) => {
            let { channels: t } = e;
            for (let e of t)
                for (let t of E.A.getFramesForChannel(e.id))
                    t.applicationId !== e.application_id && this.leaveFrame(t.id);
        },
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t, currentVoiceChannelId: n } = e;
        if (null != n && n !== t)
            for (let e of E.A.getFramesForSurface({ type: A.U4.VOICE_CHANNEL, channelId: n })) this.leaveFrame(e.id);
    };
    handleRPCDisconnect = (e) => {
        let { reason: t, source: n } = e;
        if (null == t || n.type !== I.z4.POST_MESSAGE) return;
        let i = E.A.getFrameByIframeId(n.iframeId);
        null != i &&
            (this.leaveFrame(i.id),
            t.code !== h.YI$.CLOSE_NORMAL &&
                (_.default.track(h.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i.applicationId,
                }),
                this.showRPCDisconnectErrorUI(t)));
    };
    leaveFrame(e) {
        let t = E.A.getFrame(e);
        null != t && s.h.dispatch({ type: "FRAME_STOP", applicationId: t.applicationId, frameId: t.id });
    }
}
var p = n(375708);
let T = !1,
    g = !1,
    m = new (class extends f {
        static displayName = "FramesWebManager";
        _initialize() {
            (super._initialize(),
                o.A.addChangeListener(this.handlePopoutWindowUpdate),
                s.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen));
        }
        _terminate() {
            (super._terminate(),
                o.A.removeChangeListener(this.handlePopoutWindowUpdate),
                s.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen));
        }
        handlePopoutWindowOpen = (e) => {
            let { key: t } = e;
            t === h.MLl.ACTIVITY_POPOUT && (g = !1);
        };
        handlePopoutWindowUpdate = () => {
            let e = T,
                t = o.A.getWindowOpen(h.MLl.ACTIVITY_POPOUT);
            (!e || t || g || d.A.clearMainFrameSlot(), (T = t));
        };
        popInFrame = () => {
            ((g = !0), l.close(h.MLl.ACTIVITY_POPOUT));
            let e = E.A.getMainFrame();
            null != e && (e.intent === A.sV.MAIN ? d.A.resetFrameLayoutModes(e.id) : d.A.clearMainFrameSlot());
        };
        showRPCDisconnectErrorUI(e) {
            let { code: t, message: n } = e,
                s = `${p.intl.formatToPlainString(p.t.hbiAO6, { code: t })}: ${n}`;
            (0, i.P0)((0, r.o)(s, a.Ck.FAILURE));
        }
    })();
