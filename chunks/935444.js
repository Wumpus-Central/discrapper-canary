"use strict";
l.d(t, { mf: () => c });
var n = l(310784),
    a = l.n(n);
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
    i = [0, 45, 90, 135, 180, 225, 270, 315],
    r = [20, 40, 60, 80],
    o = ["analogous", "complementary", "split-complementary", "triadic"];
function c() {
    let e = r[Math.floor(Math.random() * r.length)],
        t = i[Math.floor(Math.random() * i.length)];
    if ("path1" == (0.2 > Math.random() ? "path1" : "path2")) {
        let l = Math.floor(Math.random() * s.length),
            n = Math.floor(Math.random() * s.length);
        for (; n === l; ) n = Math.floor(Math.random() * s.length);
        return { type: "gradient", colors: [s[l], s[n]], angle: t, intensity: e, gradientType: "two-color" };
    }
    {
        let l = s[Math.floor(Math.random() * s.length)],
            n = o[Math.floor(Math.random() * o.length)];
        return {
            type: "gradient",
            colors: (function (e, t) {
                try {
                    let l = a()(e),
                        n = l.get("hsl.h"),
                        s = l.get("hsl.s"),
                        i = l.get("hsl.l");
                    switch (t) {
                        case "analogous":
                            return [
                                a()
                                    .hsl(n - 30, s, i)
                                    .hex(),
                                e,
                                a()
                                    .hsl(n + 30, s, i)
                                    .hex(),
                            ];
                        case "complementary":
                            let r;
                            return (
                                (r = a()
                                    .hsl((n + 180) % 360, s, i)
                                    .hex()),
                                [e, a().mix(e, r, 0.5).hex(), r]
                            );
                        case "split-complementary":
                            return [
                                e,
                                a()
                                    .hsl((n + 150) % 360, s, i)
                                    .hex(),
                                a()
                                    .hsl((n + 210) % 360, s, i)
                                    .hex(),
                            ];
                        case "triadic":
                            return [
                                e,
                                a()
                                    .hsl((n + 120) % 360, s, i)
                                    .hex(),
                                a()
                                    .hsl((n + 240) % 360, s, i)
                                    .hex(),
                            ];
                        default:
                            return [e];
                    }
                } catch {
                    return [e];
                }
            })(l, n),
            angle: t,
            intensity: e,
            gradientType: n,
        };
    }
}
