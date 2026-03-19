n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(73153),
    l = n(272355),
    s = n(36149),
    o = n(662502),
    d = n(260509),
    c = n(309010),
    u = n(967198),
    A = n(323073),
    h = n(329972),
    _ = n(784578),
    m = n(204925),
    g = n(652215),
    p = n(835002);
class E extends l.A {
    _initialize() {
        r.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            r.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect),
            r.h.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            r.h.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            r.h.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            r.h.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            r.h.subscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    _terminate() {
        r.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            r.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect),
            r.h.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            r.h.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            r.h.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            r.h.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            r.h.unsubscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        (0, A.kK)(t, n);
    }
    handleConnectionOpen() {
        let e = u.A.getGuildId(),
            t = c.A.getChannelId();
        (0, A.kK)(e, t);
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, a.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("10136"), n.e("6179")]).then(n.bind(n, 776971));
                return (n) => (0, i.jsx)(e, { source: t, ...n });
            },
            { modalKey: m.Uy, onCloseRequest: g.tEg, backdropStyle: (0, s.lU)(t) ? a.F2Z.LIGHTBOX : void 0 },
        );
    }
    handleAgeGateSuccess() {
        o.A.showSuccessToast(p.OB.EXISTING_USER_AGE_GATE_SUCCESS), (0, a.OoC)(m.Uy);
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, a.zbz)(m.Uy, (e) => (0, i.jsx)(_.default, { underageMessage: t, ...e }));
    }
    handleAgeGateModalClose() {
        (0, a.OoC)(m.Uy);
    }
    handleGuildUpdate(e) {
        let { guild: t } = e,
            n = u.A.getGuildId();
        if (
            null != n &&
            t.id === n &&
            (t.owner_configured_content_level === g.ftr.AGE_RESTRICTED ||
                ((0, h.v)("age_gate_manager") && d.uA.has(t.nsfw_level)))
        )
            return void (0, A.kK)(t.id, null);
    }
}
let I = new E();
