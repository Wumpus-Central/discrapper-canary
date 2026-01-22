n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(73153),
    a = n(272355),
    s = n(36149),
    o = n(662502),
    c = n(260509),
    u = n(309010),
    d = n(967198),
    p = n(323073),
    f = n(329972),
    h = n(784578),
    A = n(204925),
    g = n(652215),
    m = n(835002);

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
class _ extends a.A {
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
        (0, p.kK)(t, n);
    }
    handleConnectionOpen() {
        let e = d.A.getGuildId(),
            t = u.A.getChannelId();
        (0, p.kK)(e, t);
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, i.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("10136"), n.e("40709")]).then(n.bind(n, 776971));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        b(
                            {
                                source: t,
                            },
                            n,
                        ),
                    );
            },
            {
                modalKey: A.Uy,
                onCloseRequest: g.tEg,
                backdropStyle: (0, s.lU)(t) ? i.F2Z.LIGHTBOX : void 0,
            },
        );
    }
    handleAgeGateSuccess() {
        o.A.showSuccessToast(m.OB.EXISTING_USER_AGE_GATE_SUCCESS), (0, i.OoC)(A.Uy);
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, i.zbz)(A.Uy, (e) =>
            (0, r.jsx)(
                h.default,
                b(
                    {
                        underageMessage: t,
                    },
                    e,
                ),
            ),
        );
    }
    handleAgeGateModalClose() {
        (0, i.OoC)(A.Uy);
    }
    handleGuildUpdate(e) {
        let { guild: t } = e,
            n = d.A.getGuildId();
        if (
            null != n &&
            t.id === n &&
            (t.owner_configured_content_level === g.ftr.AGE_RESTRICTED ||
                ((0, f.v)("age_gate_manager") && c.uA.has(t.nsfw_level)))
        )
            return void (0, p.kK)(t.id, null);
    }
}
let E = new _();
