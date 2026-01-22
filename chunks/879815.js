n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(108531),
    l = n(311907),
    c = n(397927),
    u = n(796104),
    d = n(719718),
    f = n(113493),
    p = n(101492),
    _ = n(532294),
    h = n(420627);

function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
let E = {
        tension: 1200,
        friction: 70,
    },
    b = {
        [_.P7.WELCOME]: c.fAJ,
        [_.P7.MESSAGES]: c.oyn,
        [_.P7.EMOJIS]: c.nm2,
        [_.P7.VOICE]: c.cNw,
        [_.P7.GUILDS]: c.RR9,
        [_.P7.FRIENDS]: c.$yI,
        [_.P7.GAMING]: c._xR,
        [_.P7.QUESTS]: c.r2v,
        [_.P7.END]: c.MZT,
    };

function y(e) {
    let { isSelected: t, icon: n, color: a, onClick: s } = e,
        [l, u] = i.useState(!1),
        d = (0, c.zhh)({
            from: {
                scale: 0,
            },
            to: {
                scale: 1,
            },
            config: E,
        }),
        f = n;
    return (0, r.jsx)(o.animated.div, {
        style: g({}, d),
        children: (0, r.jsx)(c.DUT, {
            onClick: s,
            className: h.vk,
            onMouseEnter: () => u(!0),
            onMouseLeave: () => u(!1),
            children: (0, r.jsx)(f, {
                colorClass: h.gM,
                color: a,
                style: {
                    opacity: t || l ? 1 : 0.5,
                },
            }),
        }),
    });
}

function O() {
    let e = (0, p.A)();
    return (0, f.A)(e).map((e) => ({
        slide: e,
        icon: b[e],
    }));
}

function A(e) {
    let { activeSlide: t, setActiveSlide: n, color: a, className: o } = e,
        c = Number.parseInt(t.toString(), 10),
        f = (0, l.bG)([d.A], () => Number.parseInt(d.A.highestSlideSeen)),
        p = O();
    return (
        i.useEffect(() => {
            c > f && (0, u.Rq)("".concat(c));
        }, [c, f]),
        (0, r.jsx)("div", {
            className: s()(h.kL, o),
            children: p.map((e, t) => {
                let { icon: i, slide: s } = e,
                    o = Number.parseInt(s, 10);
                return f >= o
                    ? (0, r.jsx)(
                          y,
                          {
                              isSelected: c === o,
                              icon: i,
                              onClick: () => n(s),
                              color: a,
                          },
                          "step-indicator-".concat(t),
                      )
                    : (0, r.jsx)(
                          "div",
                          {
                              className: h.Gc,
                              style: {
                                  borderColor: a,
                                  opacity: 0.5,
                              },
                          },
                          "step-indicator-".concat(t),
                      );
            }),
        })
    );
}
