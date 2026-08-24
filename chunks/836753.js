"use strict";
n.d(t, { A: () => A });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(228366),
    s = n(272355),
    l = n(960736),
    o = n(174459),
    d = n(972387),
    c = n(539895),
    u = n(652215);
let _ = "INVITE_MODAL_KEY";
class E extends s.A {
    _initialize() {
        a.h.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            a.h.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    _terminate() {
        (0, r.closeModal)(_),
            a.h.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            a.h.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    handleOpenModal(e) {
        let { context: t } = e;
        c.A.isOpen() &&
            !(0, r.hasModalOpen)(_) &&
            (0, r.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("531198"),
                        n.e("444038"),
                        n.e("816027"),
                        n.e("458855"),
                        n.e("305161"),
                        n.e("807432"),
                        n.e("601495"),
                        n.e("88599"),
                        n.e("709640"),
                        n.e("163235"),
                        n.e("772401"),
                        n.e("705871"),
                        n.e("807265"),
                        n.e("840247"),
                        n.e("581079"),
                        n.e("901352"),
                    ]).then(n.bind(n, 777307));
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                {
                    modalKey: _,
                    contextKey: (0, r.modalContextFromAppContext)(t),
                    onCloseRequest: () => {
                        let e = (0, l.p9)(),
                            t = (0, l.xD)();
                        o.default.track(u.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: e, guild_id: t }),
                            d.A.close(c.A.getProps().invite?.code ?? e);
                    },
                },
            );
    }
    handleCloseModal(e) {
        (0, r.closeModal)(_);
    }
}
let A = new E();
