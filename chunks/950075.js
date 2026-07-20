n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(453903),
    r = n(922016),
    o = n(355622),
    c = n(151271),
    d = n(734057),
    u = n(446243),
    p = n(781137),
    h = n(495095),
    m = n(599459);
function A(e, t) {
    return null != e.activeView && e.activeViewType === o.oU.GUILD_ROOM && e.activeChannelId === t;
}
function x(e) {
    let { channelId: t, position: n, roomWidth: o } = e,
        x = (0, l.useRef)(null),
        f = (0, a.bG)([d.A], () => d.A.getChannel(t)),
        g = (0, c.RQ)((e) => A(e, t)),
        C = (0, l.useRef)(null),
        y = (0, l.useRef)(!1);
    return ((0, l.useEffect)(() => {
        let e = x.current?.ownerDocument;
        if (null == e) return;
        let n = () => {
            y.current = A(c.RQ.getState(), t);
        };
        return (
            e.addEventListener("mousedown", n, !0),
            () => {
                e.removeEventListener("mousedown", n, !0);
            }
        );
    }, [t]),
    null == f)
        ? null
        : (0, i.jsx)(r.Y, {
              targetElementRef: x,
              position: "top",
              align: "center",
              spacing: 16,
              shouldShow: !0,
              onRequestClose: (e, n) => {
                  if ("system:click_outside" === n ? y.current : g) return C.current?.focus(), s.o;
                  (0, u.HW)(t);
              },
              renderPopout: () =>
                  (0, i.jsx)(h.A, {
                      channel: f,
                      position: n,
                      setEditorRef: (e) => {
                          C.current = e;
                      },
                  }),
              children: () =>
                  (0, i.jsx)("div", {
                      ref: x,
                      className: m.kL,
                      style: { left: `${n.x}%`, top: `${n.y}%` },
                      children: (0, i.jsx)(p.A, { roomWidth: o }),
                  }),
          });
}
