"use strict";
n.d(t, { d: () => f });
var r = n(627968),
    i = n(64700),
    a = n(417597),
    s = n(397927),
    o = n(734057),
    l = n(323443),
    u = n(82149),
    c = n(446600),
    d = n(985018);
function _(e) {
    let { activity: t } = e,
        { channelId: n } = (0, u.UW)(t) ?? {},
        _ = (0, a.bG)([c.A], () => c.A.getStageInstanceByChannel(n), [n]),
        f = i.useRef(null),
        p = i.useCallback(() => {
            let e = o.A.getChannel(n);
            null != e && l.av(e);
        }, [n]),
        h = _?.topic ?? t.name,
        m = d.intl.formatToPlainString(d.t["T+DNAA"], { channel: h });
    return (0, r.jsx)("div", {
        ref: f,
        children: (0, r.jsx)(s.DUT, {
            onClick: p,
            focusProps: { ringTarget: f },
            children: (0, r.jsx)(s.Heading, { variant: "heading-sm/semibold", children: m }),
        }),
    });
}
class f {
    shouldShow(e) {
        return (0, u.IS)(e);
    }
    createHeader(e) {
        return { subtitle: d.intl.string(d.t["+AJFJy"]), icon: null };
    }
    body = _;
}
