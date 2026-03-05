n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(73153),
    a = n(272355),
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
class E extends a.A {
    _initialize() {
        l.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            l.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect),
            l.h.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            l.h.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            l.h.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            l.h.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            l.h.subscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    _terminate() {
        l.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            l.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect),
            l.h.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            l.h.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            l.h.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            l.h.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            l.h.unsubscribe("GUILD_UPDATE", this.handleGuildUpdate);
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
        (0, r.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("10136"), n.e("6179")]).then(n.bind(n, 776971));
                return (n) => (0, i.jsx)(e, { source: t, ...n });
            },
            { modalKey: m.Uy, onCloseRequest: g.tEg, backdropStyle: (0, s.lU)(t) ? r.F2Z.LIGHTBOX : void 0 },
        );
    }
    handleAgeGateSuccess() {
        o.A.showSuccessToast(p.OB.EXISTING_USER_AGE_GATE_SUCCESS), (0, r.OoC)(m.Uy);
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, r.zbz)(m.Uy, (e) => (0, i.jsx)(_.default, { underageMessage: t, ...e }));
    }
    handleAgeGateModalClose() {
        (0, r.OoC)(m.Uy);
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
