n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(73153),
    l = n(272355),
    s = n(961350),
    o = n(734057),
    d = n(528767),
    u = n(105530),
    c = n(652215);
let A = "STAGE_INVITED_TO_SPEAK_MODAL";
class h extends l.A {
    _initialize() {
        a.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        a.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e,
            a = s.default.getId(),
            l = d.A.getSession()?.sessionId,
            h = t.find((e) => e.userId === a && e.sessionId === l);
        if (null == h) return;
        let _ = h.channelId;
        if (null == _) {
            (0, r.hasModalOpen)(A) && (0, r.closeModal)(A);
            return;
        }
        let E = o.A.getChannel(_);
        if (!E?.isGuildStageVoice()) return;
        let p = (0, u.eY)(h) === u.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        if (null != E && p) {
            if ((0, r.hasModalOpen)(A)) return;
            (0, r.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("90037").then(n.bind(n, 427412));
                    return (t) => (0, i.jsx)(e, { ...t, channel: E });
                },
                { modalKey: A, onCloseRequest: c.FXj },
            );
        }
    };
}
let _ = new h();
