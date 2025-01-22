r.d(n, {
    Dv: function () {
        return u;
    },
    G2: function () {
        return m;
    },
    IG: function () {
        return h;
    },
    NG: function () {
        return f;
    },
    OV: function () {
        return d;
    },
    fW: function () {
        return g;
    },
    lB: function () {
        return _;
    },
    mA: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(377171),
    l = r(647186);
let u = {
    ROUND: l.baseShapeRound,
    ROUND_LEFT: l.baseShapeRoundLeft,
    ROUND_RIGHT: l.baseShapeRoundRight,
    SQUARE: ''
};
function c(e) {
    switch (e) {
        case 1:
        case 4:
        case 6:
            return 1;
        default:
            return;
    }
}
function d(e) {
    return e < 10 ? 16 : e < 100 ? 22 : 30;
}
function f(e) {
    return e < 1000 ? ''.concat(e) : ''.concat(Math.min(Math.floor(e / 1000), 9), 'k+');
}
let p = (e) => {
        let { count: n, color: r = s.Z.STATUS_DANGER, disableColor: a = !1, shape: p = u.ROUND, className: h, style: _, ...m } = e;
        return (0, i.jsx)('div', {
            className: o()(h, l.numberBadge, p),
            style: {
                backgroundColor: a ? void 0 : r,
                width: d(n),
                paddingRight: c(n),
                ..._
            },
            ...m,
            children: f(n)
        });
    },
    h = (e) => {
        let { text: n, className: r, color: a = s.Z.STATUS_DANGER, shape: c = u.ROUND, disableColor: d = !1, style: f, ...p } = e;
        return (0, i.jsx)('div', {
            className: o()(r, l.textBadge, c),
            style: {
                backgroundColor: d ? void 0 : a,
                ...f
            },
            ...p,
            children: n
        });
    },
    _ = (e) => {
        let { text: n, className: r, ...a } = e;
        return (0, i.jsx)(h, {
            className: o()(l.premiumBadge, r),
            text: n,
            ...a
        });
    },
    m = (e) => {
        let { icon: n, className: r, color: a = s.Z.STATUS_DANGER, shape: c = u.ROUND, disableColor: d = !1, style: f } = e;
        return (0, i.jsx)('div', {
            className: o()(r, l.iconBadge, c),
            style: {
                backgroundColor: d ? void 0 : a,
                ...f
            },
            children: (0, i.jsx)(n, {
                className: l.icon,
                color: 'currentColor'
            })
        });
    },
    g = (e) => {
        let { className: n, color: r = s.Z.INTERACTIVE_ACTIVE, shape: a = u.ROUND, disableColor: c = !1, style: d, ...f } = e;
        return (0, i.jsx)('div', {
            className: o()(n, l.circleBadge, a),
            style: {
                backgroundColor: c ? void 0 : r,
                ...d
            },
            ...f
        });
    };
