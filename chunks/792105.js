n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    o = n.n(r),
    a = n(311907),
    s = n(397927),
    u = n(201275),
    c = n(141468),
    d = n(963852),
    m = n(20851),
    f = n(287809),
    g = n(562153),
    p = n(652215),
    A = n(985018),
    _ = n(147297);
function v(e) {
    let { guildId: t, role: n, theme: r, content: v = A.intl.string(A.t["6OSasb"]), className: S } = e,
        E = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        b = g.Ay.useName(t, null, E),
        h = (0, u.ox)(n),
        y = l.useMemo(
            () =>
                (0, c.rh)({
                    ...(0, d.Ay)({
                        channelId: "0",
                        content: v,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: E,
                    }),
                    state: p.cmJ.SENT,
                    id: "0",
                }),
            [E, v],
        ),
        N = { nick: b, colorString: n.colorString, colorStrings: n.colorStrings };
    return (0, i.jsx)(s.NPJ, {
        theme: r,
        children: (e) =>
            (0, i.jsx)("div", {
                className: o()(e, _.k, S),
                children: (0, i.jsx)(m.A, {
                    hideTimestamp: !0,
                    author: N,
                    roleIcon: h,
                    message: y,
                    isGroupStart: !0,
                    disableInteraction: !0,
                }),
            }),
    });
}
