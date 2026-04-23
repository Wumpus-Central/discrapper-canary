l.d(t, { mf: () => c });
var a = l(310784),
    n = l.n(a);
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
    r = [0, 45, 90, 135, 180, 225, 270, 315],
    i = [20, 40, 60, 80],
    o = ["analogous", "complementary", "split-complementary", "triadic"];
function c() {
    let e = i[Math.floor(Math.random() * i.length)],
        t = r[Math.floor(Math.random() * r.length)];
    if ("path1" == (0.2 > Math.random() ? "path1" : "path2")) {
        let l = Math.floor(Math.random() * s.length),
            a = Math.floor(Math.random() * s.length);
        for (; a === l; ) a = Math.floor(Math.random() * s.length);
        return { type: "gradient", colors: [s[l], s[a]], angle: t, intensity: e, gradientType: "two-color" };
    }
    {
        let l = s[Math.floor(Math.random() * s.length)],
            a = o[Math.floor(Math.random() * o.length)];
        return {
            type: "gradient",
            colors: (function (e, t) {
                try {
                    let l = n()(e),
                        a = l.get("hsl.h"),
                        s = l.get("hsl.s"),
                        r = l.get("hsl.l");
                    switch (t) {
                        case "analogous":
                            return [
                                n()
                                    .hsl(a - 30, s, r)
                                    .hex(),
                                e,
                                n()
                                    .hsl(a + 30, s, r)
                                    .hex(),
                            ];
                        case "complementary":
                            let i;
                            return (
                                (i = n()
                                    .hsl((a + 180) % 360, s, r)
                                    .hex()),
                                [e, n().mix(e, i, 0.5).hex(), i]
                            );
                        case "split-complementary":
                            return [
                                e,
                                n()
                                    .hsl((a + 150) % 360, s, r)
                                    .hex(),
                                n()
                                    .hsl((a + 210) % 360, s, r)
                                    .hex(),
                            ];
                        case "triadic":
                            return [
                                e,
                                n()
                                    .hsl((a + 120) % 360, s, r)
                                    .hex(),
                                n()
                                    .hsl((a + 240) % 360, s, r)
                                    .hex(),
                            ];
                        default:
                            return [e];
                    }
                } catch {
                    return [e];
                }
            })(l, a),
            angle: t,
            intensity: e,
            gradientType: a,
        };
    }
}
