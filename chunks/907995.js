n.d(t, { f: () => f });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(711703),
    c = n(484710),
    u = n(388032),
    d = n(449081);
function f(e) {
    let { label: t, labelHook: n, dismissNotice: a, className: f, noticeType: _ } = e,
        p = null != a;
    i.useEffect(() => {
        (0, l.l)(_, c.up.VIEWED);
    }, [_]);
    let h = i.useCallback(() => {
            null != a && (a(), (0, l.l)(_, c.up.DISMISS));
        }, [_, a]),
        m = i.useCallback(() => {
            n(), (0, l.l)(_, c.up.LEARN_MORE);
        }, [_, n]);
    return (0, r.jsxs)("div", {
        className: o()(d.safetySettingsNotice, f),
        children: [
            (0, r.jsx)(s.d3s, { size: "md" }),
            (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "interactive-active",
                children: u.intl.format(t, {
                    hook: (e, t) =>
                        (0, r.jsx)(
                            s.eee,
                            {
                                onClick: m,
                                children: e,
                            },
                            t,
                        ),
                }),
            }),
            p &&
                (0, r.jsx)(s.P3F, {
                    className: d.closeButton,
                    onClick: h,
                    children: (0, r.jsx)(s.Dio, {}),
                }),
        ],
    });
}
