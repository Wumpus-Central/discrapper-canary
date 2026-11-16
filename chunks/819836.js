l.r(i);
var n = l(477900),
    s = l(582128),
    u = l(855986),
    a = l(349494),
    r = l(340975),
    t = l(398590),
    d = l(186111),
    c = l(652215),
    f = l(794500);
l.d(
    i,
    {},
    {
        default: function () {
            let e = (0, r.XP)(),
                { pending: i, replayId: l } = (0, r.HF)(),
                o = (0, u.bG)([d.A], () => d.A.getLayers().includes(c.zgK.COMPONENT_PLAYGROUND)),
                p = s.useRef(null);
            s.useEffect(() => {
                if (null != i) {
                    if (o) return void (0, t.jH)();
                    ("hide" === i.action && (null != e && (0, a.S0)(e) ? p.current?.dismiss() : (0, r.aL)()),
                        (0, r.gQ)());
                }
            }, [i, o, e]);
            let h = i?.action === "replay" ? i.id : null;
            return null == e || (null != h && o)
                ? null
                : (0, n.jsx)("div", {
                      className: f.N,
                      "data-design-preview": "global-banner",
                      children: (0, n.jsx)(a.CF, { ref: p, config: e, onDismiss: r.aL }, h ?? l),
                  });
        },
    },
);
