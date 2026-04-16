"use strict";
n.d(t, { A: () => p, T: () => f });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(451988),
    r = n(397927),
    o = n(714114),
    u = n(323073),
    c = n(10862),
    d = n(734057),
    m = n(576705),
    g = n(874026),
    h = n(652215),
    A = n(129728);
function f(e) {
    let { channel: t, children: n, childWrapperClassName: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        d = i.useRef(
            new a.J_(50, () => {
                c(!0);
            }),
        ),
        m = i.useRef(
            new a.J_(175, () => {
                c(!1);
            }),
        );
    i.useEffect(() => {
        let e = d.current,
            t = m.current;
        return () => {
            e.cancel(), t.cancel();
        };
    }, []);
    let h = i.useCallback(() => {
            m.current.cancel(), d.current.delay();
        }, []),
        A = i.useCallback(() => {
            d.current.cancel(), m.current.delay();
        }, []);
    return (0, l.jsx)(r.YNO, {
        targetElementRef: o,
        animation: r.YNO.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "right",
        shouldShow: u,
        renderPopout: () =>
            (0, l.jsx)("div", { onMouseEnter: h, onMouseLeave: A, children: (0, l.jsx)(g.A, { channel: t }) }),
        children: () => (0, l.jsx)("div", { className: s, ref: o, onMouseEnter: h, onMouseLeave: A, children: n }),
    });
}
function p(e) {
    let { guild: t, message: n } = e,
        { voiceState: i, voiceChannel: a } = (0, o.A)({ userId: n.author.id, guildId: t.id }),
        r = (0, s.bG)([d.A], () => d.A.getChannel(n.channel_id)?.isVocal()),
        g = (0, s.bG)([m.A], () => {
            if (null == a) return !1;
            let e = (0, u.r9)() && (0, u.UK)(a.id);
            return (a.isPrivate() || (m.A.can(h.xBc.VIEW_CHANNEL, a) && m.A.can(h.xBc.CONNECT, a))) && !e;
        });
    return null != i && null != a && a.isGuildVocal() && g && !r
        ? (0, l.jsx)(f, {
              channel: a,
              childWrapperClassName: A.y,
              children: (0, l.jsx)(c.A, {
                  className: A.B,
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  channel: a,
              }),
          })
        : null;
}
