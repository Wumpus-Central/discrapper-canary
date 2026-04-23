"use strict";
n.d(t, { A: () => g });
var s = n(627968);
n(64700);
var r = n(534514),
    i = n(834730),
    o = n(349288),
    a = n(573648),
    l = n(414121),
    c = n(975571),
    d = n(61917),
    p = n(652215),
    u = n(544105),
    _ = n(985018),
    h = n(822379),
    C = n(326513);
function f() {
    return (0, s.jsxs)("div", {
        className: h.rV,
        children: [
            (0, s.jsxs)("div", {
                className: h.bF,
                children: [
                    (0, s.jsxs)(r.D, {
                        className: h.n5,
                        variant: "text-lg/semibold",
                        children: [
                            (0, s.jsx)("div", {
                                className: h.YD,
                                children: (0, s.jsx)("img", { src: a.A.get(p.fg2.XBOX).icon.whiteSVG, alt: "" }),
                            }),
                            _.intl.string(_.t["12Kx2v"]),
                        ],
                    }),
                    (0, s.jsx)(i.E, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "text-default",
                        children: _.intl.string(_.t.M5yEcb),
                    }),
                    (0, s.jsx)(i.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(o.Anchor, {
                            href: c.A.getArticleURL(p.MVz.XBOX_CONNECTION),
                            children: _.intl.string(_.t.hvVgAZ),
                        }),
                    }),
                ],
            }),
            (0, s.jsx)(l.Ay, { className: h.C9, text: u.EY, size: 90 }),
        ],
    });
}
function g(e) {
    let { onClose: t } = e;
    return (0, s.jsx)(d.b, {
        img: (0, s.jsx)("img", { src: C.A, width: "124", height: "160", alt: "" }),
        title: _.intl.string(_.t["7QsHmh"]),
        body: _.intl.string(_.t.byYNPX),
        content: (0, s.jsx)(f, {}),
        onClose: t,
    });
}
