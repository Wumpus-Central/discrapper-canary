"use strict";
n.d(t, { $q: () => f, E9: () => I, H2: () => p, W0: () => m, j3: () => E, j6: () => g, jA: () => A, tQ: () => _ });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(378570),
    a = n(961350),
    o = n(312006),
    l = n(571909),
    u = n(366098),
    c = n(652215),
    d = n(231723);
function _(e, t) {
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("3795"), n.e("86317")]).then(n.bind(n, 467164));
            return (n) => (0, r.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === c.BRT.POPOUT ? d.KX : d.SY },
    );
}
function f(e, t) {
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("3795"), n.e("35934")]).then(n.bind(n, 25997));
            return (n) => (0, r.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === c.BRT.POPOUT ? d.KX : d.SY },
    );
}
function p(e) {}
function h(e) {
    (0, s.iN)(e.id);
}
function m(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e("34070").then(n.bind(n, 200629));
        return (n) => (0, r.jsx)(i, { ...n, channel: e, onAccept: t });
    });
}
function E(e, t) {
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("3795"), n.e("70102")]).then(n.bind(n, 118101));
            return (n) => (0, r.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === c.BRT.POPOUT ? d.KX : d.SY },
    );
}
function g(e) {
    let t = a.default.getId(),
        n = (0, u.G1)(e),
        r = (0, u.Gc)(e);
    return !o.Ay.isModerator(t, e) && (n > 0 || r > 0);
}
function A(e, t) {
    t !== e.id && (0, l.ek)(!0), h(e);
}
function I(e, t) {
    return (
        (0, i.openModalLazy)(async () => {
            let { default: i } = await n.e("12963").then(n.bind(n, 24814));
            return (n) => (0, r.jsx)(i, { channel: e, onConfirm: t, ...n });
        }),
        !0
    );
}
