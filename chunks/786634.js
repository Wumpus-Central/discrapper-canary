"use strict";
var n = r(64700),
    o = r(655972),
    a = r.n(o),
    i = r(205662),
    l = r(981735),
    s = r(920385),
    u = r(920515),
    c = r(708005),
    p = r(872342),
    d = function (e) {
        var t = e.width,
            r = e.onChange,
            o = e.onSwatchHover,
            a = e.colors,
            u = e.hex,
            c = e.circleSize,
            d = e.styles,
            f = e.circleSpacing,
            h = e.className,
            b = (0, i.default)(
                (0, s.A)(
                    {
                        default: {
                            card: { width: t, display: "flex", flexWrap: "wrap", marginRight: -f, marginBottom: -f },
                        },
                    },
                    void 0 === d ? {} : d,
                ),
            ),
            v = function (e, t) {
                return r({ hex: e, source: "hex" }, t);
            };
        return n.createElement(
            "div",
            { style: b.card, className: "circle-picker " + (void 0 === h ? "" : h) },
            (0, l.A)(a, function (e) {
                return n.createElement(p.A, {
                    key: e,
                    color: e,
                    onClick: v,
                    onSwatchHover: o,
                    active: u === e.toLowerCase(),
                    circleSize: c,
                    circleSpacing: f,
                });
            }),
        );
    };
(d.propTypes = {
    width: a().oneOfType([a().string, a().number]),
    circleSize: a().number,
    circleSpacing: a().number,
    styles: a().object,
}),
    (d.defaultProps = {
        width: 252,
        circleSize: 28,
        circleSpacing: 14,
        colors: [
            u.wv["500"],
            u.Vu["500"],
            u.Zp["500"],
            u.Jc["500"],
            u.xV["500"],
            u.z1["500"],
            u.tD["500"],
            u.Q_["500"],
            u.$S["500"],
            u.wL["500"],
            u.EM["500"],
            u.Gg["500"],
            u.D9["500"],
            u.Gi["500"],
            u.T_["500"],
            u.jr["500"],
            u.Xk["500"],
            u.U6["500"],
        ],
        styles: {},
    }),
    (0, c.Q$)(d);
