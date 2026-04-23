"use strict";
var n = r(64700),
    o = r(655972),
    a = r.n(o),
    i = r(205662),
    l = r(981735),
    s = r(920385),
    u = r(717519),
    c = r(708005),
    p = r(55897),
    d = r(865889),
    f = function (e) {
        var t = e.onChange,
            r = e.onSwatchHover,
            o = e.colors,
            a = e.hex,
            f = e.rgb,
            h = e.styles,
            b = void 0 === h ? {} : h,
            v = e.className,
            g = (0, i.default)(
                (0, s.A)(
                    {
                        default: {
                            Compact: { background: "#f6f6f6", radius: "4px" },
                            compact: { paddingTop: "5px", paddingLeft: "5px", boxSizing: "initial", width: "240px" },
                            clear: { clear: "both" },
                        },
                    },
                    b,
                ),
            ),
            x = function (e, r) {
                e.hex ? u.qt(e.hex) && t({ hex: e.hex, source: "hex" }, r) : t(e, r);
            };
        return n.createElement(
            c.H1,
            { style: g.Compact, styles: b },
            n.createElement(
                "div",
                { style: g.compact, className: "compact-picker " + (void 0 === v ? "" : v) },
                n.createElement(
                    "div",
                    null,
                    (0, l.A)(o, function (e) {
                        return n.createElement(p.A, {
                            key: e,
                            color: e,
                            active: e.toLowerCase() === a,
                            onClick: x,
                            onSwatchHover: r,
                        });
                    }),
                    n.createElement("div", { style: g.clear }),
                ),
                n.createElement(d.A, { hex: a, rgb: f, onChange: x }),
            ),
        );
    };
(f.propTypes = { colors: a().arrayOf(a().string), styles: a().object }),
    (f.defaultProps = {
        colors: [
            "#4D4D4D",
            "#999999",
            "#FFFFFF",
            "#F44E3B",
            "#FE9200",
            "#FCDC00",
            "#DBDF00",
            "#A4DD00",
            "#68CCCA",
            "#73D8FF",
            "#AEA1FF",
            "#FDA1FF",
            "#333333",
            "#808080",
            "#cccccc",
            "#D33115",
            "#E27300",
            "#FCC400",
            "#B0BC00",
            "#68BC00",
            "#16A5A5",
            "#009CE0",
            "#7B64FF",
            "#FA28FF",
            "#000000",
            "#666666",
            "#B3B3B3",
            "#9F0500",
            "#C45100",
            "#FB9E00",
            "#808900",
            "#194D33",
            "#0C797D",
            "#0062B1",
            "#653294",
            "#AB149E",
        ],
        styles: {},
    }),
    (0, c.Q$)(f);
