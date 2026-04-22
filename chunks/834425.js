n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(821609),
    a = n(729937),
    s = n(307600),
    r = n(998218);
function o(e) {
    let { activity: t, user: n, variant: o = "secondary", onAction: c, ...d } = e;
    if (t?.buttons == null || t.buttons.length < 1) return null;
    async function u(e, t, n) {
        try {
            let i = await (0, a.yb)(e, t);
            if (i.button_urls.length <= n) return;
            let l = i.button_urls[n];
            if ("string" != typeof l) return;
            let o = r.A.safeParseWithQuery(l);
            if (null == o || null == o.protocol || null == o.hostname) return;
            (0, s.h)({ href: r.A.format(o), trusted: !1 });
        } catch (e) {}
    }
    return (0, i.jsx)(i.Fragment, {
        children: t.buttons.map((e, a) =>
            (0, i.jsx)(
                l.$,
                {
                    text: e,
                    variant: o,
                    size: "sm",
                    fullWidth: !0,
                    onClick: () => {
                        c?.(), u(t, n.id, a);
                    },
                    ...d,
                },
                `customButton-${a}`,
            ),
        ),
    });
}
