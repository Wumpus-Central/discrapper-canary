n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(892491),
    l = n(73153),
    s = n(272355),
    o = n(36149),
    d = n(662502),
    u = n(260509),
    c = n(309010),
    A = n(967198),
    h = n(323073),
    _ = n(329972),
    E = n(784578),
    p = n(204925),
    m = n(652215),
    g = n(835002);
class I extends s.A {
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
        (0, h.kK)(t, n);
    }
    handleConnectionOpen() {
        let e = A.A.getGuildId(),
            t = c.A.getChannelId();
        (0, h.kK)(e, t);
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("10136"), n.e("75714")]).then(n.bind(n, 776971));
                return (n) => (0, i.jsx)(e, { source: t, ...n });
            },
            { modalKey: p.Uy, onCloseRequest: m.tEg, backdropStyle: (0, o.lU)(t) ? a.F.LIGHTBOX : void 0 },
        );
    }
    handleAgeGateSuccess() {
        d.A.showSuccessToast(g.OB.EXISTING_USER_AGE_GATE_SUCCESS), (0, r.closeModal)(p.Uy);
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, r.updateModal)(p.Uy, (e) => (0, i.jsx)(E.default, { underageMessage: t, ...e }));
    }
    handleAgeGateModalClose() {
        (0, r.closeModal)(p.Uy);
    }
    handleGuildUpdate(e) {
        let { guild: t } = e,
            n = A.A.getGuildId();
        if (
            null != n &&
            t.id === n &&
            (t.owner_configured_content_level === m.ftr.AGE_RESTRICTED ||
                ((0, _.v)("age_gate_manager") && u.uA.has(t.nsfw_level)))
        )
            return void (0, h.kK)(t.id, null);
    }
}
let C = new I();
