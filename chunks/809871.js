n.d(t, { A: () => S });
var i = n(691540),
    r = n(857250),
    a = n(97483),
    s = n(228366),
    l = n(574172),
    o = n(869146),
    d = n(625180),
    c = n(991690),
    u = n(439372),
    _ = n(957292),
    E = n(174459),
    A = n(91242),
    h = n(652215),
    I = n(613057);
class f extends u.A {
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
            for (let e of A.A.getFramesForChannel(t.id)) this.leaveFrame(e.id);
        },
        CHANNEL_UPDATES: (e) => {
            let { channels: t } = e;
            for (let e of t)
                for (let t of A.A.getFramesForChannel(e.id))
                    t.applicationId !== e.application_id && this.leaveFrame(t.id);
        },
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t, currentVoiceChannelId: n } = e;
        if (null != n && n !== t)
            for (let e of A.A.getFramesForSurface({ type: c.U.VOICE_CHANNEL, channelId: n })) this.leaveFrame(e.id);
    };
    handleRPCDisconnect = (e) => {
        let { reason: t, source: n } = e;
        if (null == t || n.type !== I.z4.POST_MESSAGE) return;
        let i = A.A.getFrameByIframeId(n.iframeId);
        null != i &&
            (this.leaveFrame(i.id),
            t.code !== h.YI$.CLOSE_NORMAL &&
                (E.default.track(h.HAw.ACTIVITY_CLOSED_RPC_ERROR, {
                    rpc_close_code: t.code,
                    rpc_message: t.message,
                    application_id: i.applicationId,
                }),
                this.showRPCDisconnectErrorUI(t)));
    };
    leaveFrame(e) {
        let t = A.A.getFrame(e);
        null != t && s.h.dispatch({ type: "FRAME_STOP", applicationId: t.applicationId, frameId: t.id });
    }
}
var p = n(165610),
    T = n(375708);
let g = !1,
    m = !1,
    S = new (class extends f {
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
            t === h.MLl.ACTIVITY_POPOUT && (m = !1);
        };
        handlePopoutWindowUpdate = () => {
            let e = g,
                t = o.A.getWindowOpen(h.MLl.ACTIVITY_POPOUT);
            (!e || t || m || d.A.clearMainFrameSlot(), (g = t));
        };
        popInFrame = () => {
            ((m = !0), l.close(h.MLl.ACTIVITY_POPOUT));
            let e = A.A.getMainFrame();
            null != e && (e.intent === p.sV.MAIN ? d.A.resetFrameLayoutModes(e.id) : d.A.clearMainFrameSlot());
        };
        showRPCDisconnectErrorUI(e) {
            let { code: t, message: n } = e,
                s = `${T.intl.formatToPlainString(T.t.hbiAO6, { code: t })}: ${n}`;
            (0, i.P0)((0, r.o)(s, a.Ck.FAILURE));
        }
    })();
