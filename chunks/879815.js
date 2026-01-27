n.d(t, {
    A: () => y,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(108531),
    o = n(311907),
    c = n(397927),
    u = n(796104),
    d = n(719718),
    m = n(113493),
    f = n(101492),
    p = n(532294),
    h = n(420627);
let b = {
        tension: 1200,
        friction: 70,
    },
    g = {
        [p.P7.WELCOME]: c.fAJ,
        [p.P7.MESSAGES]: c.oyn,
        [p.P7.EMOJIS]: c.nm2,
        [p.P7.VOICE]: c.cNw,
        [p.P7.GUILDS]: c.RR9,
        [p.P7.FRIENDS]: c.$yI,
        [p.P7.GAMING]: c._xR,
        [p.P7.QUESTS]: c.r2v,
        [p.P7.END]: c.MZT,
    };

function x(e) {
    let { isSelected: t, icon: n, color: a, onClick: i } = e,
        [o, u] = l.useState(!1),
        d = (0, c.zhh)({
            from: {
                scale: 0,
            },
            to: {
                scale: 1,
            },
            config: b,
        });
    return (0, r.jsx)(s.animated.div, {
        style: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, d),
        children: (0, r.jsx)(c.DUT, {
            onClick: i,
            className: h.vk,
            onMouseEnter: () => u(!0),
            onMouseLeave: () => u(!1),
            children: (0, r.jsx)(n, {
                colorClass: h.gM,
                color: a,
                style: {
                    opacity: t || o ? 1 : 0.5,
                },
            }),
        }),
    });
}

function y(e) {
    let t,
        { activeSlide: n, setActiveSlide: a, color: s, className: c } = e,
        p = Number.parseInt(n.toString(), 10),
        b = (0, o.bG)([d.A], () => Number.parseInt(d.A.highestSlideSeen)),
        y =
            ((t = (0, f.A)()),
            (0, m.A)(t).map((e) => ({
                slide: e,
                icon: g[e],
            })));
    return (
        l.useEffect(() => {
            p > b && (0, u.Rq)("".concat(p));
        }, [p, b]),
        (0, r.jsx)("div", {
            className: i()(h.kL, c),
            children: y.map((e, t) => {
                let { icon: n, slide: l } = e,
                    i = Number.parseInt(l, 10);
                return b >= i
                    ? (0, r.jsx)(
                          x,
                          {
                              isSelected: p === i,
                              icon: n,
                              onClick: () => a(l),
                              color: s,
                          },
                          "step-indicator-".concat(t),
                      )
                    : (0, r.jsx)(
                          "div",
                          {
                              className: h.Gc,
                              style: {
                                  borderColor: s,
                                  opacity: 0.5,
                              },
                          },
                          "step-indicator-".concat(t),
                      );
            }),
        })
    );
}
