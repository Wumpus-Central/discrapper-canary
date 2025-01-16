r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(686546),
    c = r(768581),
    d = r(895924),
    f = r(131754),
    _ = r(970952);
function h(e) {
    let { section: n, isSelected: r, width: i, height: o, className: h, selectable: p = !1, isSquircle: m, onFocus: g, onBlur: E, onMouseOver: v, onMouseLeave: I, ...T } = e,
        [b, y] = s.useState(!1),
        S = s.useCallback(() => {
            y(!0), null == g || g();
        }, [g]),
        A = s.useCallback(() => {
            y(!1), null == E || E();
        }, [E]),
        N = s.useCallback(() => {
            y(!0), null == v || v();
        }, [v]),
        C = s.useCallback(() => {
            y(!1), null == I || I();
        }, [I]),
        R = s.useMemo(() => {
            if (n.type === d.Qi.APPLICATION) {
                var e;
                return c.ZP.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon,
                    bot: null === (e = n.application) || void 0 === e ? void 0 : e.bot,
                    botIconFirst: !0,
                    size: i
                });
            }
            return _;
        }, [n, i]);
    return (0, a.jsx)('div', {
        ...T,
        className: l()(f.wrapper, h, {
            [f.selectable]: p,
            [f.selected]: p && r
        }),
        onFocus: S,
        onBlur: A,
        onMouseOver: N,
        onMouseLeave: C,
        children: (0, a.jsx)(u.ZP, {
            className: f.mask,
            mask: m || (p && (r || b)) ? u.QS.SQUIRCLE : u.QS.AVATAR_DEFAULT,
            width: i,
            height: o,
            children: (0, a.jsx)('img', {
                alt: '',
                className: f.icon,
                style: {
                    width: i,
                    height: o
                },
                src: R
            })
        })
    });
}
