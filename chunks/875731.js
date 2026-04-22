"use strict";
n.d(t, { d: () => E });
var r = n(627968),
    i = n(64700),
    s = n(417597),
    a = n(939249),
    o = n(534514),
    l = n(734057),
    u = n(323443),
    d = n(82149),
    c = n(446600),
    _ = n(985018);
function f(e) {
    let { activity: t } = e,
        { channelId: n } = (0, d.UW)(t) ?? {},
        f = (0, s.bG)([c.A], () => c.A.getStageInstanceByChannel(n), [n]),
        E = i.useRef(null),
        h = i.useCallback(() => {
            let e = l.A.getChannel(n);
            null != e && u.av(e);
        }, [n]),
        p = f?.topic ?? t.name,
        m = _.intl.formatToPlainString(_.t["T+DNAA"], { channel: p });
    return (0, r.jsx)("div", {
        ref: E,
        children: (0, r.jsx)(a.D, {
            onClick: h,
            focusProps: { ringTarget: E },
            children: (0, r.jsx)(o.D, { variant: "heading-sm/semibold", children: m }),
        }),
    });
}
class E {
    shouldShow(e) {
        return (0, d.IS)(e);
    }
    createHeader(e) {
        return { subtitle: _.intl.string(_.t["+AJFJy"]), icon: null };
    }
    body = f;
}
