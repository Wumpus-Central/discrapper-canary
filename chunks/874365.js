n.d(t, { S: () => b });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(772848),
    s = n(481060),
    l = n(626135),
    c = n(617136),
    u = n(110560),
    d = n(21730),
    f = n(981631),
    p = n(388032),
    _ = n(305348),
    m = n(87181);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e) {
    let { questId: t, questContent: n, fullWidth: i } = e,
        a = () => {
            (0, u.navigateToQuestHome)({ fromContent: n }),
                l.default.track(
                    f.rMx.QUEST_CONTENT_CLICKED,
                    g(
                        {
                            quest_id: t,
                            click_id: (0, o.Z)(),
                            cta_name: c.jZ.VIEW_QUESTS,
                            is_targeted: !1,
                        },
                        (0, c.mH)(n),
                    ),
                );
        };
    return (0, r.jsx)("div", {
        className: _.buttonContainer,
        children: (0, r.jsx)(s.Button, {
            fullWidth: i,
            variant: "primary",
            onClick: a,
            text: p.intl.string(p.t.GURBQl),
        }),
    });
}
function b(e) {
    let { questId: t, fallbackReason: n, bodyText: i, questContent: o } = e,
        { containerRef: l, size: u } = (0, d.h)();
    return (
        (0, c.Zk)(n, t),
        (0, r.jsxs)("div", {
            ref: (e) => {
                l.current = e;
            },
            className: a()(_.container, {
                [_.wide]: "lg" === u,
                [_.tall]: "lg" !== u,
            }),
            children: [
                (0, r.jsxs)("div", {
                    className: _.contentContainer,
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: "lg" === u ? "heading-xl/bold" : "heading-lg/bold",
                            color: "header-primary",
                            children: p.intl.string(p.t.vnP31W),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "lg" === u ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: _.__invalid_mobileWebCopy,
                            children: i,
                        }),
                        (0, r.jsx)(E, {
                            questId: t,
                            questContent: o,
                            fullWidth: "lg" !== u,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: _.imgContainer,
                    children: (0, r.jsx)("img", {
                        src: m,
                        alt: "",
                        className: _.missingQuestImage,
                    }),
                }),
            ],
        })
    );
}
