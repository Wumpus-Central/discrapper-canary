var i = n(477900),
    l = n(582128),
    a = n(855986),
    s = n(453903),
    r = n(265872),
    o = n(355622),
    d = n(151271),
    c = n(734057),
    u = n(303227),
    h = n(781137),
    p = n(495095),
    m = n(505252);
function A(e, t) {
    return null != e.activeView && e.activeViewType === o.oU.GUILD_ROOM && e.activeChannelId === t;
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, position: n, roomWidth: o } = e,
                f = (0, l.useRef)(null),
                g = (0, a.bG)([c.A], () => c.A.getChannel(t)),
                x = (0, d.RQ)((e) => A(e, t)),
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
                    y.current = A(d.RQ.getState(), t);
                }
            }, [t]),
            null == g)
                ? null
                : (0, i.jsx)(r.Y, {
                      targetElementRef: f,
                      position: "top",
                      align: "center",
                      spacing: 16,
                      shouldShow: !0,
                      onRequestClose: function (e, n) {
                          if ("system:click_outside" === n ? y.current : x) return (C.current?.focus(), s.oU);
                          (0, u.HW)(t);
                      },
                      renderPopout: () =>
                          (0, i.jsx)(p.A, {
                              channel: g,
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
        },
    },
);
