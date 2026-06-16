"use strict";
n.d(t, { mf: () => u, yK: () => s });
var i = n(310784),
    r = n.n(i);
let s = [
        "#94E0CF",
        "#9AF0B1",
        "#9A90FF",
        "#9A53FF",
        "#FDA6E4",
        "#FFE6C0",
        "#EFB4AA",
        "#56B69F",
        "#29C566",
        "#5348CA",
        "#6D24D4",
        "#CA48C8",
        "#F0AE29",
        "#DF4232",
    ],
    a = [0, 45, 90, 135, 180, 225, 270, 315],
    o = [20, 40, 60, 80],
    l = ["analogous", "complementary", "split-complementary", "triadic"];
function u() {
    let e = o[Math.floor(Math.random() * o.length)],
        t = a[Math.floor(Math.random() * a.length)];
    if ("path1" == (0.2 > Math.random() ? "path1" : "path2")) {
        let n = Math.floor(Math.random() * s.length),
            i = Math.floor(Math.random() * s.length);
        for (; i === n; ) i = Math.floor(Math.random() * s.length);
        return { type: "gradient", colors: [s[n], s[i]], angle: t, intensity: e, gradientType: "two-color" };
    }
    {
        let n = s[Math.floor(Math.random() * s.length)],
            i = l[Math.floor(Math.random() * l.length)];
        return {
            type: "gradient",
            colors: (function (e, t) {
                try {
                    let n = r()(e),
                        i = n.get("hsl.h"),
                        s = n.get("hsl.s"),
                        a = n.get("hsl.l");
                    switch (t) {
                        case "analogous":
                            return [
                                r()
                                    .hsl(i - 30, s, a)
                                    .hex(),
                                e,
                                r()
                                    .hsl(i + 30, s, a)
                                    .hex(),
                            ];
                        case "complementary":
                            let o;
                            return (
                                (o = r()
                                    .hsl((i + 180) % 360, s, a)
                                    .hex()),
                                [e, r().mix(e, o, 0.5).hex(), o]
                            );
                        case "split-complementary":
                            return [
                                e,
                                r()
                                    .hsl((i + 150) % 360, s, a)
                                    .hex(),
                                r()
                                    .hsl((i + 210) % 360, s, a)
                                    .hex(),
                            ];
                        case "triadic":
                            return [
                                e,
                                r()
                                    .hsl((i + 120) % 360, s, a)
                                    .hex(),
                                r()
                                    .hsl((i + 240) % 360, s, a)
                                    .hex(),
                            ];
                        default:
                            return [e];
                    }
                } catch {
                    return [e];
                }
            })(n, i),
            angle: t,
            intensity: e,
            gradientType: i,
        };
    }
}
