"use strict";
n.d(t, { $q: () => E, E9: () => T, H2: () => A, W0: () => h, j3: () => I, j6: () => f, jA: () => p, tQ: () => _ });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(378570),
    s = n(280450),
    l = n(312006),
    o = n(571909),
    d = n(366098),
    c = n(652215),
    u = n(231723);
function _(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("79877"),
                n.e("69431"),
                n.e("8574"),
                n.e("87073"),
                n.e("6610"),
                n.e("40548"),
                n.e("13010"),
                n.e("8891"),
                n.e("61156"),
                n.e("58337"),
                n.e("16767"),
                n.e("6841"),
                n.e("56753"),
                n.e("20683"),
                n.e("97073"),
                n.e("80007"),
                n.e("49347"),
                n.e("70089"),
                n.e("70160"),
                n.e("54450"),
                n.e("13085"),
                n.e("33778"),
            ]).then(n.bind(n, 95414));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === c.BRT.POPOUT ? u.KX : u.SY },
    );
}
function E(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("56753"), n.e("35934")]).then(n.bind(n, 25997));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === c.BRT.POPOUT ? u.KX : u.SY },
    );
}
function A(e) {}
function h(e, t) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("6610"),
            n.e("40548"),
            n.e("58337"),
            n.e("20683"),
            n.e("97073"),
            n.e("70089"),
            n.e("34070"),
        ]).then(n.bind(n, 200629));
        return (n) => (0, i.jsx)(r, { ...n, channel: e, onAccept: t });
    });
}
function I(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("56753"), n.e("70102")]).then(n.bind(n, 118101));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === c.BRT.POPOUT ? u.KX : u.SY },
    );
}
function f(e) {
    let t = s.default.getId(),
        n = (0, d.G1)(e),
        i = (0, d.Gc)(e);
    return !l.Ay.isModerator(t, e) && (n > 0 || i > 0);
}
function p(e, t) {
    t !== e.id && (0, o.ek)(!0), (0, a.iN)(e.id);
}
function T(e, t) {
    return (
        (0, r.openModalLazy)(async () => {
            let { default: r } = await n.e("12963").then(n.bind(n, 24814));
            return (n) => (0, i.jsx)(r, { channel: e, onConfirm: t, ...n });
        }),
        !0
    );
}
