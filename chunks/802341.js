"use strict";
n.d(t, { A: () => p, T: () => f });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(451988),
    a = n(397927),
    o = n(714114),
    u = n(323073),
    c = n(10862),
    d = n(734057),
    m = n(576705),
    h = n(874026),
    g = n(652215),
    A = n(110347);
function f(e) {
    let { channel: t, children: n, childWrapperClassName: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        d = i.useRef(
            new r.J_(50, () => {
                c(!0);
            }),
        ),
        m = i.useRef(
            new r.J_(175, () => {
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
    let g = i.useCallback(() => {
            m.current.cancel(), d.current.delay();
        }, []),
        A = i.useCallback(() => {
            d.current.cancel(), m.current.delay();
        }, []);
    return (0, l.jsx)(a.YNO, {
        targetElementRef: o,
        animation: a.YNO.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "right",
        shouldShow: u,
        renderPopout: () =>
            (0, l.jsx)("div", { onMouseEnter: g, onMouseLeave: A, children: (0, l.jsx)(h.A, { channel: t }) }),
        children: () => (0, l.jsx)("div", { className: s, ref: o, onMouseEnter: g, onMouseLeave: A, children: n }),
    });
}
function p(e) {
    let { guild: t, message: n } = e,
        { voiceState: i, voiceChannel: r } = (0, o.A)({ userId: n.author.id, guildId: t.id }),
        a = (0, s.bG)([d.A], () => d.A.getChannel(n.channel_id)?.isVocal()),
        h = (0, s.bG)([m.A], () => {
            if (null == r) return !1;
            let e = (0, u.r9)() && (0, u.UK)(r.id);
            return (r.isPrivate() || m.A.can(g.xBc.CONNECT, r)) && !e;
        });
    return null != i && null != r && r.isGuildVocal() && h && !a
        ? (0, l.jsx)(f, {
              channel: r,
              childWrapperClassName: A.y,
              children: (0, l.jsx)(c.A, {
                  className: A.B,
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  channel: r,
              }),
          })
        : null;
}
