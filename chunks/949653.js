n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var s = n(397927),
    i = n(573648),
    o = n(414121),
    a = n(975571),
    c = n(236863),
    l = n(652215),
    d = n(544105),
    f = n(985018),
    b = n(552762),
    u = n(326513);

function p() {
    return (0, r.jsxs)("div", {
        className: b.rV,
        children: [
            (0, r.jsxs)("div", {
                className: b.bF,
                children: [
                    (0, r.jsxs)(s.Heading, {
                        className: b.n5,
                        variant: "text-lg/semibold",
                        children: [
                            (0, r.jsx)("div", {
                                className: b.YD,
                                children: (0, r.jsx)("img", {
                                    src: i.A.get(l.fg2.XBOX).icon.whiteSVG,
                                    alt: "",
                                }),
                            }),
                            f.intl.string(f.t["12Kx2v"]),
                        ],
                    }),
                    (0, r.jsx)(s.Text, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "text-default",
                        children: f.intl.string(f.t.M5yEcb),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, r.jsx)(s.MzZ, {
                            href: a.A.getArticleURL(l.MVz.XBOX_CONNECTION),
                            children: f.intl.string(f.t.hvVgAZ),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(o.Ay, {
                className: b.C9,
                text: d.EY,
                size: 90,
            }),
        ],
    });
}

function g(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(c.b, {
        img: (0, r.jsx)("img", {
            src: u.A,
            width: "124",
            height: "160",
            alt: "",
        }),
        title: f.intl.string(f.t["7QsHmh"]),
        body: f.intl.string(f.t.byYNPX),
        content: (0, r.jsx)(p, {}),
        onClose: t,
    });
}
