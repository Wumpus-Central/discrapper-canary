n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    o = n.n(r),
    a = n(311907),
    s = n(43990),
    u = n(201275),
    c = n(141468),
    d = n(963852),
    m = n(20851),
    f = n(287809),
    g = n(562153),
    p = n(652215),
    A = n(985018),
    v = n(547886);
function _(e) {
    let { guildId: t, role: n, theme: r, content: _ = A.intl.string(A.t["6OSasb"]), className: S } = e,
        y = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        h = g.Ay.useName(t, null, y),
        E = (0, u.ox)(n),
        b = l.useMemo(
            () =>
                (0, c.rh)({
                    ...(0, d.Ay)({
                        channelId: "0",
                        content: _,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: y,
                    }),
                    state: p.cmJ.SENT,
                    id: "0",
                }),
            [y, _],
        ),
        N = { nick: h, colorString: n.colorString, colorStrings: n.colorStrings };
    return (0, i.jsx)(s.N, {
        theme: r,
        children: (e) =>
            (0, i.jsx)("div", {
                className: o()(e, v.k, S),
                children: (0, i.jsx)(m.A, {
                    hideTimestamp: !0,
                    author: N,
                    roleIcon: E,
                    message: b,
                    isGroupStart: !0,
                    disableInteraction: !0,
                }),
            }),
    });
}
