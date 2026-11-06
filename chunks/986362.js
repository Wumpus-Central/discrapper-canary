var i = e(477900);
e(582128);
var a = e(189213),
    r = e(28863),
    l = e(975571);
e(40449);
var s = e(221858),
    u = e(792996);
e.d(
    n,
    {},
    {
        default: function (t) {
            let { transitionState: n, onClose: e, teenAgeRange: c, decidedPassed: o } = t;
            function d(t, n) {
                return (0, i.jsx)(
                    r.Anchor,
                    { href: l.A.getArticleURL(u.intl.string(s.default.agiNYw)), children: t },
                    n,
                );
            }
            return (0, i.jsx)(a.a, {
                transitionState: n,
                onClose: e,
                title: u.intl.string(s.default.AA3xYb),
                subtitle: o
                    ? u.intl.format(s.default["2+f8w1"], { teenAgeRange: c ?? "13-17", contentAndSettingsHook: d })
                    : u.intl.format(s.default.UIbYzl, { contentAndSettingsHook: d }),
                actions: [{ text: u.intl.string(u.t["NX+WJN"]), onClick: e }],
            });
        },
    },
);
