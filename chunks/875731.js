n.d(t, { d: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(417597),
    s = n(397927),
    o = n(734057),
    l = n(323443),
    c = n(82149),
    u = n(446600),
    d = n(985018);
function f(e, t, n) {
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
function p(e) {
    var t, n;
    let { activity: f } = e,
        { channelId: p } = null != (t = (0, c.UW)(f)) ? t : {},
        _ = (0, a.bG)([u.A], () => u.A.getStageInstanceByChannel(p), [p]),
        h = i.useRef(null),
        m = i.useCallback(() => {
            let e = o.A.getChannel(p);
            null != e && l.av(e);
        }, [p]),
        g = null != (n = null == _ ? void 0 : _.topic) ? n : f.name,
        E = d.intl.formatToPlainString(d.t["T+DNAA"], { channel: g });
    return (0, r.jsx)("div", {
        ref: h,
        children: (0, r.jsx)(s.DUT, {
            onClick: m,
            focusProps: { ringTarget: h },
            children: (0, r.jsx)(s.Heading, {
                variant: "heading-sm/semibold",
                children: E,
            }),
        }),
    });
}
class _ {
    shouldShow(e) {
        return (0, c.IS)(e);
    }
    createHeader(e) {
        return {
            subtitle: d.intl.string(d.t["+AJFJy"]),
            icon: null,
        };
    }
    constructor() {
        f(this, "body", p);
    }
}
