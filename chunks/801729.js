n.d(t, {
    Dv: () => l,
    G2: () => h,
    IG: () => _,
    NG: () => d,
    OV: () => c,
    fW: () => m,
    lB: () => p,
    mA: () => f
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(377171),
    o = n(262883);
let l = {
    ROUND: o.baseShapeRound,
    ROUND_LEFT: o.baseShapeRoundLeft,
    ROUND_RIGHT: o.baseShapeRoundRight,
    SQUARE: ''
};
function u(e) {
    switch (e) {
        case 1:
        case 4:
        case 6:
            return 1;
        default:
            return;
    }
}
function c(e) {
    return e < 10 ? 16 : e < 100 ? 22 : 30;
}
function d(e) {
    return e < 1000 ? ''.concat(e) : ''.concat(Math.min(Math.floor(e / 1000), 9), 'k+');
}
let f = (e) => {
        let { count: t, color: n = s.Z.STATUS_DANGER, disableColor: r = !1, shape: f = l.ROUND, className: _, style: p, ...h } = e;
        return (0, i.jsx)('div', {
            className: a()(_, o.numberBadge, f),
            style: {
                backgroundColor: r ? void 0 : n,
                width: c(t),
                paddingRight: u(t),
                ...p
            },
            ...h,
            children: d(t)
        });
    },
    _ = (e) => {
        let { text: t, className: n, color: r = s.Z.STATUS_DANGER, shape: u = l.ROUND, disableColor: c = !1, style: d, ...f } = e;
        return (0, i.jsx)('div', {
            className: a()(n, o.textBadge, u),
            style: {
                backgroundColor: c ? void 0 : r,
                ...d
            },
            ...f,
            children: t
        });
    },
    p = (e) => {
        let { text: t, className: n, ...r } = e;
        return (0, i.jsx)(_, {
            className: a()(o.premiumBadge, n),
            text: t,
            ...r
        });
    },
    h = (e) => {
        let { icon: t, className: n, color: r = s.Z.STATUS_DANGER, shape: u = l.ROUND, disableColor: c = !1, style: d } = e;
        return (0, i.jsx)('div', {
            className: a()(n, o.iconBadge, u),
            style: {
                backgroundColor: c ? void 0 : r,
                ...d
            },
            children: (0, i.jsx)(t, {
                className: o.icon,
                color: 'currentColor'
            })
        });
    },
    m = (e) => {
        let { className: t, color: n = s.Z.INTERACTIVE_ACTIVE, shape: r = l.ROUND, disableColor: u = !1, style: c, ...d } = e;
        return (0, i.jsx)('div', {
            className: a()(t, o.circleBadge, r),
            style: {
                backgroundColor: u ? void 0 : n,
                ...c
            },
            ...d
        });
    };
