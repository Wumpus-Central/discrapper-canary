n.d(t, { Q: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(579872),
    s = n(104217),
    o = n(390248),
    l = n(900819),
    c = n(985018);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    if (
        ((0, o.hv)({
            action: o.rY.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
            messageId: t,
            channelId: e,
        }),
        !l.A.canSubmitFpReport(t))
    ) {
        a.A.show({
            title: c.intl.string(c.t["iS/eFN"]),
            body: c.intl.string(c.t.YrjcgR),
            confirmText: c.intl.string(c.t.BddRzS),
        }),
            s.A.disableFalsePositiveButton(e, t);
        return;
    }
    (0, i.mMO)(async () => {
        let { default: i } = await n(287002);
        return (n) =>
            (0, r.jsx)(
                i,
                d(
                    {
                        channelId: e,
                        messageId: t,
                    },
                    n,
                ),
            );
    });
}
