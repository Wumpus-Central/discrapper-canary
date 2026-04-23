"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(349288),
    s = n(954571),
    a = n(559868),
    o = n(652215),
    l = n(985018);
let u = () => {
    s.default.track(o.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: a.Do });
};
function c() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("span", { children: l.intl.string(l.t.OJmNR9) }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("span", {
                children: l.intl.format(l.t.RCYeBL, {
                    blogHook: (e, t) =>
                        (0, r.jsx)(
                            i.Anchor,
                            { onClick: u, target: "_blank", rel: "noreferrer noopener", href: a.Do, children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
