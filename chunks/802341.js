"use strict";
n.d(t, { A: () => A });
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
    h = n(874026),
    g = n(652215),
    p = n(692827);
function A(e) {
    let { guild: t, message: n } = e,
        A = i.useRef(null),
        { voiceState: f, voiceChannel: x } = (0, o.A)({ userId: n.author.id, guildId: t.id }),
        [v, j] = i.useState(!1),
        N = (0, s.bG)([d.A], () => d.A.getChannel(n.channel_id)?.isVocal()),
        b = i.useRef(
            new a.J_(50, () => {
                j(!0);
            }),
        ),
        C = i.useRef(
            new a.J_(175, () => {
                j(!1);
            }),
        );
    i.useEffect(() => {
        let e = b.current,
            t = C.current;
        return () => {
            e.cancel(), t.cancel();
        };
    }, []);
    let E = i.useCallback(() => {
            C.current.cancel(), b.current.delay();
        }, []),
        I = i.useCallback(() => {
            b.current.cancel(), C.current.delay();
        }, []),
        R = (0, s.bG)([m.A], () => {
            if (null == x) return !1;
            let e = (0, u.r9)() && (0, u.UK)(x.id);
            return (x.isPrivate() || m.A.can(g.xBc.CONNECT, x)) && !e;
        });
    return null != f && null != x && x.isGuildVocal() && R && !N
        ? (0, l.jsx)(r.YNO, {
              targetElementRef: A,
              animation: r.YNO.Animation.TRANSLATE,
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              shouldShow: v,
              renderPopout: () =>
                  (0, l.jsx)("div", {
                      onMouseEnter: E,
                      onMouseLeave: I,
                      children: (0, l.jsx)(h.A, { channel: x, message: n }),
                  }),
              children: () =>
                  (0, l.jsx)("span", {
                      className: p.B,
                      onMouseEnter: E,
                      onMouseLeave: I,
                      ref: A,
                      children: (0, l.jsx)(c.A, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          channel: x,
                      }),
                  }),
          })
        : null;
}
