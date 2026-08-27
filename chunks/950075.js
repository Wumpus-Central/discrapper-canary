n.d(t, { A: () => f });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(453903),
    r = n(922016),
    o = n(355622),
    c = n(151271),
    d = n(734057),
    u = n(446243),
    h = n(781137),
    p = n(495095),
    m = n(505252);
function A(e, t) {
    return null != e.activeView && e.activeViewType === o.oU.GUILD_ROOM && e.activeChannelId === t;
}
function f(e) {
    let { channelId: t, position: n, roomWidth: o } = e,
        f = (0, l.useRef)(null),
        x = (0, a.bG)([d.A], () => d.A.getChannel(t)),
        g = (0, c.RQ)((e) => A(e, t)),
        C = (0, l.useRef)(null),
        y = (0, l.useRef)(!1);
    return ((0, l.useEffect)(() => {
        let e = f.current?.ownerDocument;
        if (null != e)
            return (
                e.addEventListener("mousedown", n, !0),
                () => {
                    e.removeEventListener("mousedown", n, !0);
                }
            );
        function n() {
            y.current = A(c.RQ.getState(), t);
        }
    }, [t]),
    null == x)
        ? null
        : (0, i.jsx)(r.Y, {
              targetElementRef: f,
              position: "top",
              align: "center",
              spacing: 16,
              shouldShow: !0,
              onRequestClose: function (e, n) {
                  if ("system:click_outside" === n ? y.current : g) return C.current?.focus(), s.o;
                  (0, u.HW)(t);
              },
              renderPopout: () =>
                  (0, i.jsx)(p.A, {
                      channel: x,
                      position: n,
                      setEditorRef: (e) => {
                          C.current = e;
                      },
                  }),
              children: () =>
                  (0, i.jsx)("div", {
                      ref: f,
                      className: m.kL,
                      style: { left: `${n.x}%`, top: `${n.y}%` },
                      children: (0, i.jsx)(h.A, { roomWidth: o }),
                  }),
          });
}
