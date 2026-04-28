n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var i = n(192308),
    s = n(228366),
    r = n(272355),
    a = n(960736),
    o = n(954571),
    u = n(972387),
    d = n(539895),
    c = n(652215);
let h = "INVITE_MODAL_KEY";
class A extends r.A {
    _initialize() {
        s.h.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            s.h.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    _terminate() {
        (0, i.closeModal)(h),
            s.h.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            s.h.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    handleOpenModal(e) {
        let { context: t } = e;
        d.A.isOpen() &&
            !(0, i.hasModalOpen)(h) &&
            (0, i.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("63546"),
                        n.e("47042"),
                        n.e("61748"),
                        n.e("84200"),
                        n.e("74275"),
                        n.e("73432"),
                        n.e("48486"),
                        n.e("25385"),
                        n.e("71470"),
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
                        n.e("14020"),
                        n.e("91643"),
                        n.e("74337"),
                        n.e("63497"),
                        n.e("58838"),
                        n.e("38714"),
                        n.e("69237"),
                        n.e("54360"),
                        n.e("40247"),
                        n.e("7265"),
                        n.e("81079"),
                        n.e("78124"),
                        n.e("46658"),
                        n.e("55540"),
                    ]).then(n.bind(n, 57375));
                    return (t) => (0, l.jsx)(e, { ...t });
                },
                {
                    modalKey: h,
                    contextKey: (0, i.modalContextFromAppContext)(t),
                    onCloseRequest: () => {
                        let e = (0, a.p9)(),
                            t = (0, a.xD)();
                        o.default.track(c.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: e, guild_id: t }),
                            u.A.close(d.A.getProps().invite?.code ?? e);
                    },
                },
            );
    }
    handleCloseModal(e) {
        (0, i.closeModal)(h);
    }
}
let m = new A();
