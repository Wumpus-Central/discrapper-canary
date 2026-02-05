i.d(t, { A: () => o });
var n = i(627968);
i(64700);
var a = i(397927),
    l = i(729937),
    r = i(307600),
    s = i(998218);
function o(e) {
    let { activity: t, user: i, variant: o = "secondary", onAction: d, ...c } = e;
    if (t?.buttons == null || t.buttons.length < 1) return null;
    async function u(e, t, i) {
        try {
            let n = await (0, l.yb)(e, t);
            if (n.button_urls.length <= i) return;
            let a = n.button_urls[i];
            if ("string" != typeof a) return;
            let o = s.A.safeParseWithQuery(a);
            if (null == o || null == o.protocol || null == o.hostname) return;
            (0, r.h)({ href: s.A.format(o), trusted: !1 });
        } catch (e) {}
    }
    return (0, n.jsx)(n.Fragment, {
        children: t.buttons.map((e, l) =>
            (0, n.jsx)(
                a.Button,
                {
                    text: e,
                    variant: o,
                    size: "sm",
                    fullWidth: !0,
                    onClick: () => {
                        d?.(), u(t, i.id, l);
                    },
                    ...c,
                },
                `customButton-${l}`,
            ),
        ),
    });
}
