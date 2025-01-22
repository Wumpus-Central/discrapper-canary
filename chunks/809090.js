r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(686546),
    c = r(768581),
    d = r(895924),
    f = r(131754),
    p = r(970952);
function h(e) {
    let { section: n, isSelected: r, width: i, height: s, className: h, selectable: _ = !1, isSquircle: m, onFocus: g, onBlur: E, onMouseOver: v, onMouseLeave: y, ...b } = e,
        [I, T] = o.useState(!1),
        S = o.useCallback(() => {
            T(!0), null == g || g();
        }, [g]),
        A = o.useCallback(() => {
            T(!1), null == E || E();
        }, [E]),
        C = o.useCallback(() => {
            T(!0), null == v || v();
        }, [v]),
        N = o.useCallback(() => {
            T(!1), null == y || y();
        }, [y]),
        R = o.useMemo(() => {
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
            return p;
        }, [n, i]);
    return (0, a.jsx)('div', {
        ...b,
        className: l()(f.wrapper, h, {
            [f.selectable]: _,
            [f.selected]: _ && r
        }),
        onFocus: S,
        onBlur: A,
        onMouseOver: C,
        onMouseLeave: N,
        children: (0, a.jsx)(u.ZP, {
            className: f.mask,
            mask: m || (_ && (r || I)) ? u.QS.SQUIRCLE : u.QS.AVATAR_DEFAULT,
            width: i,
            height: s,
            children: (0, a.jsx)('img', {
                alt: '',
                className: f.icon,
                style: {
                    width: i,
                    height: s
                },
                src: R
            })
        })
    });
}
