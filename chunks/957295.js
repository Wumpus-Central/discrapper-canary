"use strict";
n.d(t, { A: () => f });
var s = n(627968);
n(64700);
var r = n(397927),
    o = n(573648),
    i = n(414121),
    a = n(975571),
    c = n(61917),
    l = n(652215),
    d = n(544105),
    p = n(985018),
    u = n(682660),
    _ = n(326513);
function b() {
    return (0, s.jsxs)("div", {
        className: u.rV,
        children: [
            (0, s.jsxs)("div", {
                className: u.bF,
                children: [
                    (0, s.jsxs)(r.Heading, {
                        className: u.n5,
                        variant: "text-lg/semibold",
                        children: [
                            (0, s.jsx)("div", {
                                className: u.YD,
                                children: (0, s.jsx)("img", { src: o.A.get(l.fg2.XBOX).icon.whiteSVG, alt: "" }),
                            }),
                            p.intl.string(p.t["12Kx2v"]),
                        ],
                    }),
                    (0, s.jsx)(r.Text, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "text-default",
                        children: p.intl.string(p.t.M5yEcb),
                    }),
                    (0, s.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(r.MzZ, {
                            href: a.A.getArticleURL(l.MVz.XBOX_CONNECTION),
                            children: p.intl.string(p.t.hvVgAZ),
                        }),
                    }),
                ],
            }),
            (0, s.jsx)(i.Ay, { className: u.C9, text: d.EY, size: 90 }),
        ],
    });
}
function f(e) {
    let { onClose: t } = e;
    return (0, s.jsx)(c.b, {
        img: (0, s.jsx)("img", { src: _.A, width: "124", height: "160", alt: "" }),
        title: p.intl.string(p.t["7QsHmh"]),
        body: p.intl.string(p.t.byYNPX),
        content: (0, s.jsx)(b, {}),
        onClose: t,
    });
}
