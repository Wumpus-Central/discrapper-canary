s.d(e, { default: () => E });
var i = s(627968),
    n = s(64700),
    l = s(189213),
    a = s(17928),
    r = s(834730),
    d = s(349288),
    c = s(414121),
    o = s(266080),
    u = s(975571),
    m = s(643501),
    h = s(636537),
    x = s(47167),
    f = s(71393),
    g = s(235058),
    N = s(994500),
    j = s(287809),
    A = s(544105),
    p = s(652215),
    v = s(375708),
    C = s(350701),
    R = s(378393);
function b(t) {
    let { step: e, instructions: s } = t;
    return (0, i.jsxs)("div", {
        className: R.RA,
        children: [
            (0, i.jsx)("div", {
                className: R.RY,
                children: (0, i.jsx)(r.E, { variant: "text-sm/semibold", className: R.CD, children: e }),
            }),
            (0, i.jsx)(r.E, { variant: "text-sm/normal", color: "text-strong", className: R.GA, children: s }),
        ],
    });
}
function E(t) {
    let { channel: e, transitionState: s, onClose: E } = t,
        I = (0, a.bG)([m.default], () => null != m.default.getRemoteSessionId()),
        O = (function (t, e) {
            let { nonce: s, forQRCode: i } = e,
                n = t.getGuildId(),
                l = f.A.getGuild(n),
                a = (0, A.hw)({
                    guildId: n ?? p.D0I,
                    channelId: t.id,
                    channelName: (0, x.m1)(t, j.default, N.A),
                    guildName: l?.name ?? v.intl.string(v.t.LJpTRF),
                    muted: g.Ay.isSelfMute(),
                    deafened: g.Ay.isSelfDeaf(),
                    nonce: s,
                });
            return i ? `${(0, h.TP)()}${p.Rsh.XBOX_HANDOFF}?${a.toString()}` : `${A.Gp}?${a.toString()}`;
        })(e, { forQRCode: !0 });
    return (
        n.useEffect(() => {
            I && E();
        }, [I, E]),
        n.useEffect(() => {
            (0, C.A)(e.id, A.f$.XBOX);
        }, [e.id]),
        (0, i.jsx)(l.Modal, {
            title: v.intl.string(v.t["f+Aijq"]),
            subtitle: v.intl.string(v.t.mYFmDY),
            actions: [],
            onClose: E,
            transitionState: s,
            children: (0, i.jsxs)("div", {
                className: R.Nr,
                children: [
                    (0, i.jsxs)("div", {
                        className: R.O,
                        children: [
                            (0, i.jsxs)(r.E, {
                                variant: "text-lg/semibold",
                                color: "text-strong",
                                className: R.RA,
                                children: [(0, i.jsx)(o.A, { className: R.Fp }), v.intl.string(v.t.ZNlYbK)],
                            }),
                            (0, i.jsx)(b, { step: 1, instructions: v.intl.string(v.t.dDtkl9) }),
                            (0, i.jsx)(b, { step: 2, instructions: v.intl.string(v.t.IWuXjC) }),
                            (0, i.jsx)(r.E, {
                                variant: "text-sm/medium",
                                children: (0, i.jsx)(d.Anchor, {
                                    className: R.C2,
                                    href: u.A.getArticleURL(p.MVz.XBOX_CONNECTION),
                                    children: v.intl.string(v.t.hvVgAZ),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(c.Ay, { className: R.JB, size: 120, text: O }),
                ],
            }),
        })
    );
}
