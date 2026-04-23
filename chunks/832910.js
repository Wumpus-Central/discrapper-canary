"use strict";
s.d(t, { default: () => b });
var r = s(627968),
    i = s(64700),
    n = s(189213),
    a = s(17928),
    o = s(834730),
    l = s(349288),
    c = s(414121),
    d = s(266080),
    u = s(975571),
    p = s(643501),
    f = s(636537),
    m = s(47167),
    _ = s(71393),
    h = s(969341),
    C = s(994500),
    x = s(287809),
    g = s(544105),
    v = s(652215),
    y = s(985018),
    N = s(350701),
    j = s(378393);
function O(e) {
    let { step: t, instructions: s } = e;
    return (0, r.jsxs)("div", {
        className: j.RA,
        children: [
            (0, r.jsx)("div", {
                className: j.RY,
                children: (0, r.jsx)(o.E, { variant: "text-sm/semibold", className: j.CD, children: t }),
            }),
            (0, r.jsx)(o.E, { variant: "text-sm/normal", color: "text-strong", className: j.GA, children: s }),
        ],
    });
}
function b(e) {
    let { channel: t, transitionState: s, onClose: b } = e,
        A = (0, a.bG)([p.default], () => null != p.default.getRemoteSessionId()),
        E = (function (e, t) {
            let { nonce: s, forQRCode: r } = t,
                i = e.getGuildId(),
                n = _.A.getGuild(i),
                a = (0, g.hw)({
                    guildId: i ?? v.D0I,
                    channelId: e.id,
                    channelName: (0, m.m1)(e, x.default, C.A),
                    guildName: n?.name ?? y.intl.string(y.t.LJpTRF),
                    muted: h.Ay.isSelfMute(),
                    deafened: h.Ay.isSelfDeaf(),
                    nonce: s,
                });
            return r ? `${(0, f.TP)()}${v.Rsh.XBOX_HANDOFF}?${a.toString()}` : `${g.Gp}?${a.toString()}`;
        })(t, { forQRCode: !0 });
    return (
        i.useEffect(() => {
            A && b();
        }, [A, b]),
        i.useEffect(() => {
            (0, N.A)(t.id, g.f$.XBOX);
        }, [t.id]),
        (0, r.jsx)(n.Modal, {
            title: y.intl.string(y.t["f+Aijq"]),
            subtitle: y.intl.string(y.t.mYFmDY),
            actions: [],
            onClose: b,
            transitionState: s,
            children: (0, r.jsxs)("div", {
                className: j.Nr,
                children: [
                    (0, r.jsxs)("div", {
                        className: j.O,
                        children: [
                            (0, r.jsxs)(o.E, {
                                variant: "text-lg/semibold",
                                color: "text-strong",
                                className: j.RA,
                                children: [(0, r.jsx)(d.A, { className: j.Fp }), y.intl.string(y.t.ZNlYbK)],
                            }),
                            (0, r.jsx)(O, { step: 1, instructions: y.intl.string(y.t.dDtkl9) }),
                            (0, r.jsx)(O, { step: 2, instructions: y.intl.string(y.t.IWuXjC) }),
                            (0, r.jsx)(o.E, {
                                variant: "text-sm/medium",
                                children: (0, r.jsx)(l.Anchor, {
                                    className: j.C2,
                                    href: u.A.getArticleURL(v.MVz.XBOX_CONNECTION),
                                    children: y.intl.string(y.t.hvVgAZ),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(c.Ay, { className: j.JB, size: 120, text: E }),
                ],
            }),
        })
    );
}
