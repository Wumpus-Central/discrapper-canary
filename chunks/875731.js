"use strict";
n.d(t, { d: () => h });
var i = n(627968),
    r = n(64700),
    s = n(702841),
    a = n(939249),
    o = n(534514),
    l = n(734057),
    _ = n(790535),
    d = n(82149),
    u = n(446600),
    c = n(985018);
function E(e) {
    let { activity: t } = e,
        { channelId: n } = (0, d.UW)(t) ?? {},
        E = (0, s.bG)([u.A], () => u.A.getStageInstanceByChannel(n), [n]),
        h = r.useRef(null),
        m = r.useCallback(() => {
            let e = l.A.getChannel(n);
            null != e && _.av(e);
        }, [n]),
        f = E?.topic ?? t.name,
        g = c.intl.formatToPlainString(c.t["T+DNAA"], { channel: f });
    return (0, i.jsx)("div", {
        ref: h,
        children: (0, i.jsx)(a.D, {
            onClick: m,
            focusProps: { ringTarget: h },
            children: (0, i.jsx)(o.D, { variant: "heading-sm/semibold", children: g }),
        }),
    });
}
class h {
    shouldShow(e) {
        return (0, d.IS)(e);
    }
    createHeader(e) {
        return { subtitle: c.intl.string(c.t["+AJFJy"]), icon: null };
    }
    body = E;
}
