n.d(t, {
    mf: () => c,
});
var r = n(310784),
    i = n.n(r);
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
    o = [20, 40, 60, 80],
    l = ["analogous", "complementary", "split-complementary", "triadic"];

function c() {
    let e = o[Math.floor(Math.random() * o.length)],
        t = s[Math.floor(Math.random() * s.length)];
    if ("path1" == (0.2 > Math.random() ? "path1" : "path2")) {
        let n = Math.floor(Math.random() * a.length),
            r = Math.floor(Math.random() * a.length);
        for (; r === n; ) r = Math.floor(Math.random() * a.length);
        return {
            type: "gradient",
            colors: [a[n], a[r]],
            angle: t,
            intensity: e,
            gradientType: "two-color",
        };
    }
    {
        let n = a[Math.floor(Math.random() * a.length)],
            r = l[Math.floor(Math.random() * l.length)];
        return {
            type: "gradient",
            colors: _(n, r),
            angle: t,
            intensity: e,
            gradientType: r,
        };
    }
}

function u(e, t, n, r) {
    return [
        i()
            .hsl(r - 30, t, n)
            .hex(),
        e,
        i()
            .hsl(r + 30, t, n)
            .hex(),
    ];
}

function d(e, t, n, r) {
    let a = (r + 180) % 360,
        s = i().hsl(a, t, n).hex();
    return [e, i().mix(e, s, 0.5).hex(), s];
}

function f(e, t, n, r) {
    let a = (r + 150) % 360,
        s = (r + 210) % 360;
    return [e, i().hsl(a, t, n).hex(), i().hsl(s, t, n).hex()];
}

function p(e, t, n, r) {
    let a = (r + 120) % 360,
        s = (r + 240) % 360;
    return [e, i().hsl(a, t, n).hex(), i().hsl(s, t, n).hex()];
}

function _(e, t) {
    try {
        let n = i()(e),
            r = n.get("hsl.h"),
            a = n.get("hsl.s"),
            s = n.get("hsl.l");
        switch (t) {
            case "analogous":
                return u(e, a, s, r);
            case "complementary":
                return d(e, a, s, r);
            case "split-complementary":
                return f(e, a, s, r);
            case "triadic":
                return p(e, a, s, r);
            default:
                return [e];
        }
    } catch (t) {
        return [e];
    }
}
