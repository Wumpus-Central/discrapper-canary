n.d(t, {
    A: () => c,
}),
    n(134528),
    n(947204);
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(890687),
    r = n(985018),
    s = n(406471);

function o(e) {
    let { header: t, children: n } = e;
    return (0, a.jsxs)("div", {
        className: s.Nr,
        children: [
            (0, a.jsxs)("div", {
                className: s.wx,
                children: [
                    (0, a.jsx)(l.EpV, {
                        size: "custom",
                        color: "currentColor",
                        className: s.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, a.jsx)(l.Heading, {
                        color: "text-default",
                        variant: "heading-sm/medium",
                        children: t,
                    }),
                ],
            }),
            (0, a.jsx)(l.Text, {
                color: "text-muted",
                variant: "text-xs/normal",
                className: s.r2,
                children: n,
            }),
        ],
    });
}
let c = function (e) {
    let { quest: t } = e,
        n = (0, i.aC)(t);
    if (0 === n.length) return null;
    let l = n.at(0);
    return l === r.intl.string(r.t.BV6xDm)
        ? (0, a.jsx)(o, {
              header: r.intl.string(r.t.onh6ct),
              children: r.intl.string(r.t.arVHRA),
          })
        : l === r.intl.string(r.t.MFGxFM)
          ? (0, a.jsx)(o, {
                header: r.intl.string(r.t.JPihZA),
                children: r.intl.string(r.t.MFGxFM),
            })
          : null;
};
