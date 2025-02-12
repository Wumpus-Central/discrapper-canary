n.d(t, {
    $Q: () => g,
    Ev: () => m,
    Gy: () => b,
    R5: () => T,
    T: () => p,
    Us: () => y,
    Zl: () => I,
    vu: () => v
});
var i = n(200651);
n(192379);
var r = n(952265),
    a = n(359110),
    s = n(314897),
    o = n(88751),
    l = n(427679),
    u = n(513449),
    c = n(930180),
    d = n(981631),
    f = n(602091);
function _(e) {
    let t = s.default.getId(),
        n = o.ZP.isModerator(t, e.id),
        i = l.Z.isLive(e.id);
    n && !i ? p(e) : n && i && h(e);
}
function p(e, t) {
    (0, r.ZD)(
        async () => {
            let { default: t } = await Promise.all([n.e('68241'), n.e('34946')]).then(n.bind(n, 581355));
            return (n) =>
                (0, i.jsx)(t, {
                    ...n,
                    channel: e
                });
        },
        { contextKey: t === d.IlC.POPOUT ? f.u1 : f.z1 }
    );
}
function h(e) {
    (0, r.ZD)(async () => {
        let { default: t } = await n.e('84686').then(n.bind(n, 665111));
        return (n) =>
            (0, i.jsx)(t, {
                ...n,
                channel: e
            });
    });
}
function m(e, t) {
    (0, r.ZD)(
        async () => {
            let { default: t } = await n.e('2634').then(n.bind(n, 548841));
            return (n) =>
                (0, i.jsx)(t, {
                    ...n,
                    channel: e
                });
        },
        { contextKey: t === d.IlC.POPOUT ? f.u1 : f.z1 }
    );
}
function g(e) {}
function E(e) {
    (0, a.Kh)(e.id);
}
function v(e, t) {
    (0, r.ZD)(async () => {
        let { default: r } = await n.e('1906').then(n.bind(n, 854510));
        return (n) =>
            (0, i.jsx)(r, {
                ...n,
                channel: e,
                onAccept: t
            });
    });
}
function y(e, t) {
    (0, r.ZD)(
        async () => {
            let { default: t } = await n.e('85885').then(n.bind(n, 124779));
            return (n) =>
                (0, i.jsx)(t, {
                    ...n,
                    channel: e
                });
        },
        { contextKey: t === d.IlC.POPOUT ? f.u1 : f.z1 }
    );
}
function I(e) {
    let t = s.default.getId(),
        n = (0, c.Z7)(e),
        i = (0, c.wK)(e);
    return !o.ZP.isModerator(t, e) && (n > 0 || i > 0);
}
function T(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    t !== e.id && (0, u.Ku)(!0), E(e), t !== e.id && n && _(e);
}
function b(e, t) {
    return (
        (0, r.ZD)(async () => {
            let { default: r } = await n.e('65045').then(n.bind(n, 143782));
            return (n) =>
                (0, i.jsx)(r, {
                    channel: e,
                    onConfirm: t,
                    ...n
                });
        }),
        !0
    );
}
