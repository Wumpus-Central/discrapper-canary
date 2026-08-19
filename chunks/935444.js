"use strict";
n.d(t, { mf: () => d, yK: () => a });
var i = n(310784),
    r = n.n(i);
let a = [
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
    s = [0, 45, 90, 135, 180, 225, 270, 315],
    l = [20, 40, 60, 80],
    o = ["analogous", "complementary", "split-complementary", "triadic"];
function d() {
    let e = l[Math.floor(Math.random() * l.length)],
        t = s[Math.floor(Math.random() * s.length)];
    if ("path1" == (0.2 > Math.random() ? "path1" : "path2")) {
        let n = Math.floor(Math.random() * a.length),
            i = Math.floor(Math.random() * a.length);
        for (; i === n; ) i = Math.floor(Math.random() * a.length);
        return { type: "gradient", colors: [a[n], a[i]], angle: t, intensity: e, gradientType: "two-color" };
    }
    {
        let n = a[Math.floor(Math.random() * a.length)],
            i = o[Math.floor(Math.random() * o.length)];
        return {
            type: "gradient",
            colors: (function (e, t) {
                try {
                    let n = r()(e),
                        i = n.get("hsl.h"),
                        a = n.get("hsl.s"),
                        s = n.get("hsl.l");
                    switch (t) {
                        case "analogous":
                            return [
                                r()
                                    .hsl(i - 30, a, s)
                                    .hex(),
                                e,
                                r()
                                    .hsl(i + 30, a, s)
                                    .hex(),
                            ];
                        case "complementary":
                            let l;
                            return (
                                (l = r()
                                    .hsl((i + 180) % 360, a, s)
                                    .hex()),
                                [e, r().mix(e, l, 0.5).hex(), l]
                            );
                        case "split-complementary":
                            return [
                                e,
                                r()
                                    .hsl((i + 150) % 360, a, s)
                                    .hex(),
                                r()
                                    .hsl((i + 210) % 360, a, s)
                                    .hex(),
                            ];
                        case "triadic":
                            return [
                                e,
                                r()
                                    .hsl((i + 120) % 360, a, s)
                                    .hex(),
                                r()
                                    .hsl((i + 240) % 360, a, s)
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
