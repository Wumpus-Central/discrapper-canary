n.d(t, { $q: () => u, E9: () => O, H2: () => I, W0: () => A, j3: () => T, j6: () => S, jA: () => N, tQ: () => c });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(378570),
    s = n(495544),
    _ = n(312006),
    l = n(571909),
    o = n(366098),
    E = n(652215),
    d = n(231723);
function c(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("24170"), n.e("68883"), n.e("61489")]).then(n.bind(n, 873033));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === E.BRT.POPOUT ? d.KX : d.SY },
    );
}
function u(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("24170"), n.e("19457")]).then(n.bind(n, 25997));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === E.BRT.POPOUT ? d.KX : d.SY },
    );
}
function I(e) {}
function A(e, t) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await n.e("34070").then(n.bind(n, 200629));
        return (n) => (0, i.jsx)(r, { ...n, channel: e, onAccept: t });
    });
}
function T(e, t) {
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("24170"), n.e("14239")]).then(n.bind(n, 118101));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === E.BRT.POPOUT ? d.KX : d.SY },
    );
}
function S(e) {
    let t = s.default.getId(),
        n = (0, o.G1)(e),
        i = (0, o.Gc)(e);
    return !_.Ay.isModerator(t, e) && (n > 0 || i > 0);
}
function N(e, t) {
    t !== e.id && (0, l.ek)(!0), (0, a.iN)(e.id);
}
function O(e, t) {
    return (
        (0, r.openModalLazy)(async () => {
            let { default: r } = await n.e("12963").then(n.bind(n, 24814));
            return (n) => (0, i.jsx)(r, { channel: e, onConfirm: t, ...n });
        }),
        !0
    );
}
