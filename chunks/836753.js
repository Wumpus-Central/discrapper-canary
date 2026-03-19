"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(73153),
    r = n(272355),
    a = n(960736),
    o = n(954571),
    c = n(972387),
    d = n(539895),
    u = n(652215);
let h = "INVITE_MODAL_KEY";
class A extends r.A {
    _initialize() {
        l.h.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            l.h.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    _terminate() {
        (0, s.OoC)(h),
            l.h.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            l.h.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
    }
    handleOpenModal(e) {
        let { context: t } = e;
        d.A.isOpen() &&
            !(0, s.kBI)(h) &&
            (0, s.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("83155"), n.e("2257")]).then(n.bind(n, 563038));
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                {
                    modalKey: h,
                    contextKey: (0, s.TId)(t),
                    onCloseRequest: () => {
                        let e = (0, a.p9)(),
                            t = (0, a.xD)();
                        o.default.track(u.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: e, guild_id: t }), c.A.close();
                    },
                },
            );
    }
    handleCloseModal() {
        (0, s.OoC)(h);
    }
}
let m = new A();
