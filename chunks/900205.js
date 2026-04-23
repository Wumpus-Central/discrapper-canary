c.d(s, { default: () => w });
var a = c(627968),
    e = c(64700),
    n = c(935399),
    i = c(22856),
    d = c(224640),
    r = c(315629),
    l = c(20742),
    o = c(534514),
    x = c(834730),
    _ = c(821609),
    b = c(403581);
let h =
    "https://cdn.discordapp.com/assets/content/c32c3094f835752871036a54f064a64c2529e643b14db4b6c9695777fce854a2.png";
function p(t) {
    let { alt: s, ariaLabel: c, ariaHidden: e, role: n, width: i = 288, height: d = 192 } = t;
    return (0, a.jsx)("img", {
        style: { width: i, height: d },
        src: h,
        srcSet: `${h} 1x, https://cdn.discordapp.com/assets/content/5b64487ae750fc26cd0dc918c77445068d18b74b68d888d2155b7ac2a3cacda6.png 2x`,
        alt: s,
        "aria-label": c,
        "aria-hidden": e,
        role: n ?? "img",
    });
}
var f = c(367727),
    m = c(975571),
    u = c(87719),
    g = c(652215),
    j = c(49999),
    v = c(985018),
    C = c(886626);
function w(t) {
    let { renderModalProps: s, dismissibleContent: c, markAsDismissed: h } = t,
        { onClose: w, transitionState: k } = s,
        { headingId: S } = (0, i.k)();
    return (
        (0, n.Ay)(() => {
            (0, f.Wx)(c);
        }),
        e.useEffect(
            () => () => {
                h(j.i.AUTO_DISMISS);
            },
            [h],
        ),
        (0, a.jsx)(d.d, {
            transitionState: k,
            onClose: w,
            size: "md",
            paddingSize: "lg",
            children: (0, a.jsxs)(r.h, {
                color: "nitro-pink",
                className: C.D7,
                children: [
                    (0, a.jsx)("div", { className: C.cG, children: (0, a.jsx)(l.s_, { shouldColorMix: !0 }) }),
                    (0, a.jsx)("div", {
                        className: C.JS,
                        children: (0, a.jsx)(p, { alt: "", width: 360, height: "auto" }),
                    }),
                    (0, a.jsxs)("div", {
                        className: C.Qs,
                        children: [
                            (0, a.jsx)(o.D, {
                                id: S,
                                variant: "display-md",
                                color: "text-strong",
                                className: C.wx,
                                children: v.intl.string(v.t.Xm5q5l),
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: C.rf,
                                children: v.intl.string(v.t.svsMII),
                            }),
                            (0, a.jsxs)("div", {
                                className: C.v0,
                                children: [
                                    (0, a.jsx)(_.$, {
                                        variant: "secondary",
                                        size: "md",
                                        onClick: () => window.open(m.A.getArticleURL(g.MVz.PREMIUM_DETAILS), "_blank"),
                                        text: v.intl.string(v.t.WHWwCY),
                                    }),
                                    (0, a.jsx)(_.$, {
                                        variant: "primary",
                                        size: "md",
                                        icon: b.t,
                                        text: v.intl.string(v.t["mHF+AF"]),
                                        onClick: () => (0, u.x)(w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
