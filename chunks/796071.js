"use strict";
n.d(t, { A: () => p });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    l = n(49229),
    s = n(58149),
    d = n(632738),
    o = n(734057),
    c = n(994500),
    u = n(562153),
    _ = n(652215),
    m = n(985018);
let p = (e) => {
    let { user: t, channelId: n, reportId: p } = e,
        { isIgnored: h, isBlocked: g } = (0, r.cf)(
            [c.A],
            () => ({ isIgnored: c.A.isIgnored(t.id), isBlocked: c.A.isBlocked(t.id) }),
            [t],
        ),
        f = (0, r.bG)([o.A], () => o.A.getChannel(n), [n]),
        b = i.useMemo(() => u.Ay.getName(f?.guild_id, f?.id, t), [f, t]),
        A = i.useCallback(() => {
            s.Ay.trackWithMetadata(_.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: p }),
                l.A.ignoreUser(t.id, "web_iar_ignore_user_element", n);
        }, [t, p, n]),
        x = i.useMemo(() => h || g, [h, g]);
    return (0, a.jsx)(d.PQ, {
        title: m.intl.formatToPlainString(m.t.U3yyFs, { username: b }),
        description: m.intl.string(m.t.naWE6W),
        buttonText: x ? m.intl.string(m.t.nDdxOG) : m.intl.string(m.t.ICYEfY),
        buttonDisabled: x,
        onButtonPress: A,
    });
};
