i.d(t, { A: () => v });
var n = i(477900),
    l = i(582128),
    r = i(503698),
    o = i.n(r),
    s = i(17928),
    a = i(43990),
    u = i(320095),
    c = i(963852),
    d = i(20851),
    m = i(69282),
    g = i(287809),
    f = i(562153),
    p = i(652215),
    _ = i(660183),
    S = i(241123);
function v(e) {
    let { guildId: t, role: i, theme: r, content: v = _.intl.string(_.t["6OSasb"]), className: A } = e,
        y = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
        E = f.Ay.useName(t, null, y),
        b = (0, m.ox)(i),
        h = l.useMemo(
            () =>
                (0, u.rh)({
                    ...(0, c.Ay)({
                        channelId: "0",
                        content: v,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: y,
                    }),
                    state: p.cmJ.SENT,
                    id: "0",
                }),
            [y, v],
        ),
        C = { nick: E, colorString: i.colorString, colorStrings: i.colorStrings };
    return (0, n.jsx)(a.N, {
        theme: "light" === r ? p.NJ8.LIGHT : "dark" === r ? p.NJ8.DARK : r,
        children: (e) =>
            (0, n.jsx)("div", {
                className: o()(e, S.k, A),
                children: (0, n.jsx)(d.A, {
                    hideTimestamp: !0,
                    author: C,
                    roleIcon: b,
                    message: h,
                    isGroupStart: !0,
                    disableInteraction: !0,
                }),
            }),
    });
}
