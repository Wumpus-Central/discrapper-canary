n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(73153),
    a = n(272355),
    r = n(960736),
    o = n(954571),
    d = n(972387),
    c = n(539895),
    u = n(652215);
let h = "INVITE_MODAL_KEY";
class A extends a.A {
    _initialize() {
        s.h.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            s.h.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    _terminate() {
        (0, l.OoC)(h),
            s.h.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            s.h.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    handleOpenModal(e) {
        let { context: t } = e;
        c.A.isOpen() &&
            !(0, l.kBI)(h) &&
            (0, l.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("64161"), n.e("83155"), n.e("64252")]).then(
                        n.bind(n, 563038),
                    );
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                {
                    modalKey: h,
                    contextKey: (0, l.TId)(t),
                    onCloseRequest: () => {
                        let e = (0, r.p9)(),
                            t = (0, r.xD)();
                        o.default.track(u.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: e, guild_id: t }),
                            d.A.close(c.A.getProps().invite?.code ?? e);
                    },
                },
            );
    }
    handleCloseModal(e) {
        (0, l.OoC)(h);
    }
}
let _ = new A();
