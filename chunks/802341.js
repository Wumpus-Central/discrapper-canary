"use strict";
n.d(t, { A: () => _, T: () => A });
var l = n(627968),
    a = n(64700),
    s = n(311907),
    i = n(451988),
    r = n(265872),
    o = n(714114),
    c = n(323073),
    u = n(10862),
    d = n(734057),
    m = n(576705),
    g = n(874026),
    h = n(652215),
    p = n(129728);
function A(e) {
    let { channel: t, children: n, childWrapperClassName: s } = e,
        o = a.useRef(null),
        [c, u] = a.useState(!1),
        d = a.useRef(
            new i.J_(50, () => {
                u(!0);
            }),
        ),
        m = a.useRef(
            new i.J_(175, () => {
                u(!1);
            }),
        );
    a.useEffect(() => {
        let e = d.current,
            t = m.current;
        return () => {
            e.cancel(), t.cancel();
        };
    }, []);
    let h = a.useCallback(() => {
            m.current.cancel(), d.current.delay();
        }, []),
        p = a.useCallback(() => {
            d.current.cancel(), m.current.delay();
        }, []);
    return (0, l.jsx)(r.Y, {
        targetElementRef: o,
        animation: r.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "right",
        shouldShow: c,
        renderPopout: () =>
            (0, l.jsx)("div", { onMouseEnter: h, onMouseLeave: p, children: (0, l.jsx)(g.A, { channel: t }) }),
        children: () => (0, l.jsx)("div", { className: s, ref: o, onMouseEnter: h, onMouseLeave: p, children: n }),
    });
}
function _(e) {
    let { guild: t, message: n } = e,
        { voiceState: a, voiceChannel: i } = (0, o.A)({ userId: n.author.id, guildId: t.id }),
        r = (0, s.bG)([d.A], () => d.A.getChannel(n.channel_id)?.isVocal()),
        g = (0, s.bG)([m.A], () => {
            if (null == i) return !1;
            let e = (0, c.r9)() && (0, c.UK)(i.id);
            return (i.isPrivate() || (m.A.can(h.xBc.VIEW_CHANNEL, i) && m.A.can(h.xBc.CONNECT, i))) && !e;
        });
    return null != a && null != i && i.isGuildVocal() && g && !r
        ? (0, l.jsx)(A, {
              channel: i,
              childWrapperClassName: p.y,
              children: (0, l.jsx)(u.A, {
                  className: p.B,
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  channel: i,
              }),
          })
        : null;
}
