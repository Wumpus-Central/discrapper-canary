"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(954571),
    s = n(559868),
    o = n(652215),
    l = n(985018);
let u = () => {
    a.default.track(o.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: s.Do });
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
                            i.MzZ,
                            { onClick: u, target: "_blank", rel: "noreferrer noopener", href: s.Do, children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
