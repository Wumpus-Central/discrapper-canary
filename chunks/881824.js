r.d(n, {
    $Q: function () {
        return E;
    },
    Ev: function () {
        return g;
    },
    Gy: function () {
        return S;
    },
    R5: function () {
        return y;
    },
    T: function () {
        return p;
    },
    Us: function () {
        return T;
    },
    Zl: function () {
        return b;
    },
    vu: function () {
        return I;
    }
});
var i = r(200651);
r(192379);
var a = r(952265),
    s = r(359110),
    o = r(314897),
    l = r(88751),
    u = r(427679),
    c = r(513449),
    d = r(930180),
    f = r(981631),
    _ = r(602091);
function h(e) {
    let n = o.default.getId(),
        r = l.ZP.isModerator(n, e.id),
        i = u.Z.isLive(e.id);
    r && !i ? p(e) : r && i && m(e);
}
function p(e, n) {
    (0, a.ZD)(
        async () => {
            let { default: n } = await Promise.all([r.e('99008'), r.e('64295')]).then(r.bind(r, 581355));
            return (r) =>
                (0, i.jsx)(n, {
                    ...r,
                    channel: e
                });
        },
        { contextKey: n === f.IlC.POPOUT ? _.u1 : _.z1 }
    );
}
function m(e) {
    (0, a.ZD)(async () => {
        let { default: n } = await r.e('84686').then(r.bind(r, 665111));
        return (r) =>
            (0, i.jsx)(n, {
                ...r,
                channel: e
            });
    });
}
function g(e, n) {
    (0, a.ZD)(
        async () => {
            let { default: n } = await r.e('2634').then(r.bind(r, 548841));
            return (r) =>
                (0, i.jsx)(n, {
                    ...r,
                    channel: e
                });
        },
        { contextKey: n === f.IlC.POPOUT ? _.u1 : _.z1 }
    );
}
function E(e) {}
function v(e) {
    (0, s.Kh)(e.id);
}
function I(e, n) {
    (0, a.ZD)(async () => {
        let { default: a } = await r.e('1906').then(r.bind(r, 854510));
        return (r) =>
            (0, i.jsx)(a, {
                ...r,
                channel: e,
                onAccept: n
            });
    });
}
function T(e, n) {
    (0, a.ZD)(
        async () => {
            let { default: n } = await r.e('85885').then(r.bind(r, 124779));
            return (r) =>
                (0, i.jsx)(n, {
                    ...r,
                    channel: e
                });
        },
        { contextKey: n === f.IlC.POPOUT ? _.u1 : _.z1 }
    );
}
function b(e) {
    let n = o.default.getId(),
        r = (0, d.Z7)(e),
        i = (0, d.wK)(e);
    return !l.ZP.isModerator(n, e) && (r > 0 || i > 0);
}
function y(e, n) {
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    n !== e.id && (0, c.Ku)(!0), v(e), n !== e.id && r && h(e);
}
function S(e, n) {
    return (
        (0, a.ZD)(async () => {
            let { default: a } = await r.e('65045').then(r.bind(r, 143782));
            return (r) =>
                (0, i.jsx)(a, {
                    channel: e,
                    onConfirm: n,
                    ...r
                });
        }),
        !0
    );
}
