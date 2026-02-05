n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(73153),
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
    p = n(652215),
    g = n(835002);
class E extends l.A {
    _initialize() {
        a.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            a.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect),
            a.h.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            a.h.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            a.h.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            a.h.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            a.h.subscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    _terminate() {
        a.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            a.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect),
            a.h.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            a.h.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            a.h.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            a.h.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            a.h.unsubscribe("GUILD_UPDATE", this.handleGuildUpdate);
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
                let { default: e } = await Promise.all([n.e("10136"), n.e("40709")]).then(n.bind(n, 776971));
                return (n) => (0, i.jsx)(e, { source: t, ...n });
            },
            { modalKey: m.Uy, onCloseRequest: p.tEg, backdropStyle: (0, s.lU)(t) ? r.F2Z.LIGHTBOX : void 0 },
        );
    }
    handleAgeGateSuccess() {
        o.A.showSuccessToast(g.OB.EXISTING_USER_AGE_GATE_SUCCESS), (0, r.OoC)(m.Uy);
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
            (t.owner_configured_content_level === p.ftr.AGE_RESTRICTED ||
                ((0, h.v)("age_gate_manager") && d.uA.has(t.nsfw_level)))
        )
            return void (0, A.kK)(t.id, null);
    }
}
let f = new E();
