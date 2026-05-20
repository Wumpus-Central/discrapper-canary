"use strict";
n.d(t, { $q: () => f, E9: () => A, H2: () => h, W0: () => p, j3: () => E, j6: () => m, jA: () => g, tQ: () => _ });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(378570),
    a = n(495544),
    o = n(312006),
    l = n(571909),
    u = n(366098),
    c = n(652215),
    d = n(231723);
function _(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("8802"),
                n.e("18320"),
                n.e("79093"),
                n.e("35177"),
                n.e("8516"),
                n.e("67485"),
                n.e("4512"),
                n.e("18930"),
                n.e("88941"),
                n.e("61379"),
                n.e("43039"),
                n.e("32551"),
                n.e("11523"),
                n.e("8891"),
                n.e("63095"),
                n.e("56753"),
                n.e("61156"),
                n.e("16767"),
                n.e("6841"),
                n.e("58337"),
                n.e("97073"),
                n.e("20683"),
                n.e("83420"),
                n.e("80007"),
                n.e("49347"),
                n.e("70089"),
                n.e("70160"),
                n.e("54450"),
                n.e("13085"),
                n.e("33778"),
            ]).then(n.bind(n, 873033));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === c.BRT.POPOUT ? d.KX : d.SY },
    );
}
function f(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("56753"), n.e("35934")]).then(n.bind(n, 25997));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === c.BRT.POPOUT ? d.KX : d.SY },
    );
}
function h(e) {}
function p(e, t) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("67485"),
            n.e("18320"),
            n.e("11523"),
            n.e("58337"),
            n.e("97073"),
            n.e("20683"),
            n.e("83420"),
            n.e("70089"),
            n.e("34070"),
        ]).then(n.bind(n, 200629));
        return (n) => (0, i.jsx)(r, { ...n, channel: e, onAccept: t });
    });
}
function E(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("56753"), n.e("70102")]).then(n.bind(n, 118101));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === c.BRT.POPOUT ? d.KX : d.SY },
    );
}
function m(e) {
    let t = a.default.getId(),
        n = (0, u.G1)(e),
        i = (0, u.Gc)(e);
    return !o.Ay.isModerator(t, e) && (n > 0 || i > 0);
}
function g(e, t) {
    t !== e.id && (0, l.ek)(!0), (0, s.iN)(e.id);
}
function A(e, t) {
    return (
        (0, r.openModalLazy)(async () => {
            let { default: r } = await n.e("12963").then(n.bind(n, 24814));
            return (n) => (0, i.jsx)(r, { channel: e, onConfirm: t, ...n });
        }),
        !0
    );
}
