"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(201275),
    c = n(141468),
    d = n(963852),
    _ = n(20851),
    f = n(287809),
    p = n(562153),
    h = n(652215),
    m = n(985018),
    g = n(147297);
function E(e) {
    let { guildId: t, role: n, theme: a, content: E = m.intl.string(m.t["6OSasb"]), className: A } = e,
        I = (0, o.bG)([f.default], () => f.default.getCurrentUser()),
        T = p.Ay.useName(t, null, I),
        y = (0, u.ox)(n),
        S = i.useMemo(
            () =>
                (0, c.rh)({
                    ...(0, d.Ay)({
                        channelId: "0",
                        content: E,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: I,
                    }),
                    state: h.cmJ.SENT,
                    id: "0",
                }),
            [I, E],
        ),
        v = { nick: T, colorString: n.colorString, colorStrings: n.colorStrings };
    return (0, r.jsx)(l.NPJ, {
        theme: a,
        children: (e) =>
            (0, r.jsx)("div", {
                className: s()(e, g.k, A),
                children: (0, r.jsx)(_.A, {
                    hideTimestamp: !0,
                    author: v,
                    roleIcon: y,
                    message: S,
                    isGroupStart: !0,
                    disableInteraction: !0,
                }),
            }),
    });
}
