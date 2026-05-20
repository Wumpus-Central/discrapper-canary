"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(228366),
    a = n(272355),
    o = n(960736),
    l = n(174459),
    u = n(972387),
    c = n(539895),
    d = n(652215);
let _ = "INVITE_MODAL_KEY";
class f extends a.A {
    _initialize() {
        s.h.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            s.h.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    _terminate() {
        (0, r.closeModal)(_),
            s.h.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            s.h.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    handleOpenModal(e) {
        let { context: t } = e;
        c.A.isOpen() &&
            !(0, r.hasModalOpen)(_) &&
            (0, r.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("64422"),
                        n.e("12289"),
                        n.e("63897"),
                        n.e("19397"),
                        n.e("74275"),
                        n.e("56386"),
                        n.e("81857"),
                        n.e("43437"),
                        n.e("86127"),
                        n.e("88599"),
                        n.e("53917"),
                        n.e("9640"),
                        n.e("74810"),
                        n.e("63235"),
                        n.e("90664"),
                        n.e("72401"),
                        n.e("15109"),
                        n.e("91643"),
                        n.e("74337"),
                        n.e("5871"),
                        n.e("7265"),
                        n.e("40247"),
                        n.e("25505"),
                        n.e("55540"),
                    ]).then(n.bind(n, 57375));
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                {
                    modalKey: _,
                    contextKey: (0, r.modalContextFromAppContext)(t),
                    onCloseRequest: () => {
                        let e = (0, o.p9)(),
                            t = (0, o.xD)();
                        l.default.track(d.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: e, guild_id: t }),
                            u.A.close(c.A.getProps().invite?.code ?? e);
                    },
                },
            );
    }
    handleCloseModal(e) {
        (0, r.closeModal)(_);
    }
}
let h = new f();
