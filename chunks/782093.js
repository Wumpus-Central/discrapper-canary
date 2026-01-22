n.d(t, { A: () => f }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(554146),
    s = n(831741),
    o = n(826673),
    c = n(379848),
    u = n(320501),
    d = n(49999);
function f(e) {
    let { children: t, enabled: n, animationContainerClassName: f, glowClassName: p, trinketsClassName: h } = e,
        b = (0, i.bG)([u.A], () => u.A.hasCurrentUserSentMessageSinceAppStart()),
        g = l.useMemo(() => {
            let e = [];
            return b && n && e.push(a.M.ACTIVITIES_CHAT_BUTTON_NUX_V2), e;
        }, [b, n]),
        m = () => {
            setTimeout(() => (0, o.Dr)(a.M.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: d.i.AUTO_DISMISS }), 10000);
        };
    return (0, r.jsx)(c.Ay, {
        contentTypes: g,
        children: (e) => {
            let { visibleContent: n } = e;
            return n === a.M.ACTIVITIES_CHAT_BUTTON_NUX_V2
                ? (0, r.jsx)(s.R, {
                      animationContainerClassName: f,
                      glowClassName: p,
                      trinketsClassName: h,
                      onMount: m,
                      children: t,
                  })
                : t;
        },
    });
}
