n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var a = n(192308),
    r = n(228366),
    s = n(272355),
    l = n(960736),
    o = n(954571),
    d = n(972387),
    c = n(539895),
    _ = n(652215);
let E = "INVITE_MODAL_KEY";
class u extends s.A {
    _initialize() {
        r.h.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            r.h.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    _terminate() {
        (0, a.closeModal)(E),
            r.h.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            r.h.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    handleOpenModal(e) {
        let { context: t } = e;
        c.A.isOpen() &&
            !(0, a.hasModalOpen)(E) &&
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("73607"),
                        n.e("90261"),
                        n.e("42105"),
                        n.e("90738"),
                        n.e("6445"),
                        n.e("89603"),
                        n.e("43437"),
                        n.e("86127"),
                        n.e("53917"),
                        n.e("9640"),
                        n.e("88599"),
                        n.e("63235"),
                        n.e("74810"),
                        n.e("90664"),
                        n.e("72401"),
                        n.e("15109"),
                        n.e("91643"),
                        n.e("63497"),
                        n.e("74337"),
                        n.e("40247"),
                        n.e("7265"),
                        n.e("81079"),
                        n.e("46658"),
                        n.e("55540"),
                    ]).then(n.bind(n, 57375));
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                {
                    modalKey: E,
                    contextKey: (0, a.modalContextFromAppContext)(t),
                    onCloseRequest: () => {
                        let e = (0, l.p9)(),
                            t = (0, l.xD)();
                        o.default.track(_.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: e, guild_id: t }),
                            d.A.close(c.A.getProps().invite?.code ?? e);
                    },
                },
            );
    }
    handleCloseModal(e) {
        (0, a.closeModal)(E);
    }
}
let A = new u();
