n.d(t, { $q: () => u, E9: () => O, H2: () => I, W0: () => T, j3: () => A, j6: () => S, jA: () => N, tQ: () => c });
var i = n(627968);
n(64700);
var a = n(192308),
    r = n(378570),
    _ = n(495544),
    s = n(312006),
    l = n(571909),
    o = n(366098),
    E = n(652215),
    d = n(231723);
function c(e, t) {
    (0, a.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("61659"),
                n.e("16384"),
                n.e("88826"),
                n.e("28510"),
                n.e("63397"),
                n.e("19675"),
                n.e("40841"),
                n.e("17764"),
                n.e("18930"),
                n.e("88941"),
                n.e("58337"),
                n.e("61379"),
                n.e("43039"),
                n.e("32551"),
                n.e("11523"),
                n.e("8891"),
                n.e("20683"),
                n.e("63095"),
                n.e("19871"),
                n.e("24170"),
                n.e("61156"),
                n.e("94503"),
                n.e("16767"),
                n.e("6841"),
                n.e("80007"),
                n.e("83420"),
                n.e("97073"),
                n.e("49347"),
                n.e("70089"),
                n.e("70160"),
                n.e("54450"),
                n.e("13085"),
                n.e("33778"),
            ]).then(n.bind(n, 873033));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === E.BRT.POPOUT ? d.KX : d.SY },
    );
}
function u(e, t) {
    (0, a.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("19871"), n.e("24170"), n.e("94503"), n.e("35934")]).then(
                n.bind(n, 25997),
            );
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === E.BRT.POPOUT ? d.KX : d.SY },
    );
}
function I(e) {}
function T(e, t) {
    (0, a.openModalLazy)(async () => {
        let { default: a } = await Promise.all([
            n.e("40841"),
            n.e("19675"),
            n.e("58337"),
            n.e("11523"),
            n.e("20683"),
            n.e("83420"),
            n.e("97073"),
            n.e("70089"),
            n.e("34070"),
        ]).then(n.bind(n, 200629));
        return (n) => (0, i.jsx)(a, { ...n, channel: e, onAccept: t });
    });
}
function A(e, t) {
    (0, a.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("19871"), n.e("24170"), n.e("94503"), n.e("70102")]).then(
                n.bind(n, 118101),
            );
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
        },
        { contextKey: t === E.BRT.POPOUT ? d.KX : d.SY },
    );
}
function S(e) {
    let t = _.default.getId(),
        n = (0, o.G1)(e),
        i = (0, o.Gc)(e);
    return !s.Ay.isModerator(t, e) && (n > 0 || i > 0);
}
function N(e, t) {
    t !== e.id && (0, l.ek)(!0), (0, r.iN)(e.id);
}
function O(e, t) {
    return (
        (0, a.openModalLazy)(async () => {
            let { default: a } = await n.e("12963").then(n.bind(n, 24814));
            return (n) => (0, i.jsx)(a, { channel: e, onConfirm: t, ...n });
        }),
        !0
    );
}
