n.d(t, { $q: () => E, E9: () => p, W0: () => A, j3: () => h, j6: () => I, jA: () => f, tQ: () => _ });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(231723),
    s = n(378570),
    l = n(280450),
    o = n(312006),
    d = n(571909),
    c = n(366098),
    u = n(652215);
function _(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("142753"),
                n.e("415695"),
                n.e("638781"),
                n.e("730931"),
                n.e("401425"),
                n.e("370017"),
                n.e("352456"),
                n.e("454048"),
                n.e("188941"),
                n.e("543039"),
                n.e("593600"),
                n.e("161379"),
                n.e("611523"),
                n.e("897073"),
                n.e("232551"),
                n.e("268582"),
                n.e("463095"),
                n.e("858337"),
                n.e("856753"),
                n.e("820683"),
                n.e("643104"),
                n.e("847158"),
                n.e("449347"),
                n.e("670089"),
                n.e("870160"),
                n.e("454450"),
                n.e("713085"),
                n.e("233778"),
            ]).then(n.bind(n, 95414));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === u.BRT.POPOUT ? a.KX : a.SY },
    );
}
function E(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("856753"), n.e("535934")]).then(n.bind(n, 25997));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === u.BRT.POPOUT ? a.KX : a.SY },
    );
}
function A(e, t) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await Promise.all([
            n.e("401425"),
            n.e("370017"),
            n.e("593600"),
            n.e("611523"),
            n.e("897073"),
            n.e("858337"),
            n.e("820683"),
            n.e("643104"),
            n.e("847158"),
            n.e("670089"),
            n.e("634070"),
        ]).then(n.bind(n, 200629));
        return (n) => (0, i.jsx)(r, { ...n, channel: e, onAccept: t });
    });
}
function h(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("856753"), n.e("370102")]).then(n.bind(n, 118101));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === u.BRT.POPOUT ? a.KX : a.SY },
    );
}
function I(e) {
    let t = l.default.getId(),
        n = (0, c.G1)(e),
        i = (0, c.Gc)(e);
    return !o.Ay.isModerator(t, e) && (n > 0 || i > 0);
}
function f(e, t) {
    (t !== e.id && (0, d.ek)(!0), (0, s.iN)(e.id));
}
function p(e, t) {
    return (
        (0, r.openModalLazy)(async () => {
            let { default: r } = await n.e("412963").then(n.bind(n, 24814));
            return (n) => (0, i.jsx)(r, { channel: e, onConfirm: t, ...n });
        }),
        !0
    );
}
