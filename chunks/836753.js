"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
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
                        n.e("61806"),
                        n.e("34079"),
                        n.e("10273"),
                        n.e("51316"),
                        n.e("88968"),
                        n.e("31880"),
                        n.e("75230"),
                        n.e("88599"),
                        n.e("9640"),
                        n.e("63235"),
                        n.e("72401"),
                        n.e("5871"),
                        n.e("40247"),
                        n.e("7265"),
                        n.e("81079"),
                        n.e("1352"),
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
