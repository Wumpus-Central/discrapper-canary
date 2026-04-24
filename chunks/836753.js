n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(228366),
    r = n(272355),
    a = n(960736),
    o = n(954571),
    d = n(972387),
    c = n(539895),
    u = n(652215);
let _ = "INVITE_MODAL_KEY";
class h extends r.A {
    _initialize() {
        s.h.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            s.h.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    _terminate() {
        (0, l.closeModal)(_),
            s.h.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            s.h.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    handleOpenModal(e) {
        let { context: t } = e;
        c.A.isOpen() &&
            !(0, l.hasModalOpen)(_) &&
            (0, l.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("95208"),
                        n.e("72401"),
                        n.e("47886"),
                        n.e("55540"),
                        n.e("98657"),
                    ]).then(n.bind(n, 57375));
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                {
                    modalKey: _,
                    contextKey: (0, l.modalContextFromAppContext)(t),
                    onCloseRequest: () => {
                        let e = (0, a.p9)(),
                            t = (0, a.xD)();
                        o.default.track(u.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: e, guild_id: t }),
                            d.A.close(c.A.getProps().invite?.code ?? e);
                    },
                },
            );
    }
    handleCloseModal(e) {
        (0, l.closeModal)(_);
    }
}
let p = new h();
