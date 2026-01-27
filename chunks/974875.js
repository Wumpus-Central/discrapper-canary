n.d(t, {
    Q: () => u,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(579872),
    a = n(104217),
    s = n(390248),
    o = n(900819),
    c = n(985018);

function u(e, t) {
    if (
        ((0, s.hv)({
            action: s.rY.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
            messageId: t,
            channelId: e,
        }),
        !o.A.canSubmitFpReport(t))
    ) {
        l.A.show({
            title: c.intl.string(c.t["iS/eFN"]),
            body: c.intl.string(c.t.YrjcgR),
            confirmText: c.intl.string(c.t.BddRzS),
        }),
            a.A.disableFalsePositiveButton(e, t);
        return;
    }
    (0, i.mMO)(async () => {
        let { default: i } = await n(287002);
        return (n) =>
            (0, r.jsx)(
                i,
                (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        channelId: e,
                        messageId: t,
                    },
                    n,
                ),
            );
    });
}
