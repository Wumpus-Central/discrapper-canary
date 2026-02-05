"use strict";
n.d(t, { A: () => N, n: () => I });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(47167),
    l = n(713654),
    u = n(145497),
    c = n(734057),
    d = n(71393),
    _ = n(287809),
    f = n(659416),
    p = n(823854),
    h = n(45480),
    m = n(196959),
    g = n(926966),
    E = n(985018),
    A = n(9402),
    I = (function (e) {
        return (e.Popout = "popout"), (e.Tooltip = "tooltip"), e;
    })({});
function T(e) {
    let t = null == e ? 0 : Math.round(100 * e);
    return E.intl.formatToPlainString(g.default["Zr+U9W"], { percent: t });
}
function y(e) {
    switch (e.messageKind) {
        case f.cn.STATE:
            return e.phase;
        case f.cn.OFFER:
            return f.Ob.OFFERED;
        case f.cn.COMMAND:
            return f.Ob.RUNNING;
    }
}
function S(e) {
    switch (e) {
        case f.sb.MILD:
            return A.n9;
        case f.sb.SPICY:
            return A.xh;
        case f.sb.UNHINGED:
            return A.VS;
    }
}
function v(e, t) {
    let n = C(e, t);
    return null == n ? null : (0, r.jsx)(s.Text, { variant: "text-xs/normal", color: "text-muted", children: n });
}
function C(e, t) {
    switch (e.kind) {
        case f.H9.GAME:
            return E.intl.formatToPlainString(g.default.IQXv1L, { senderName: t.senderName });
        case f.H9.STREAM:
            return E.intl.string(g.default.UCldzY);
        case f.H9.VIDEO:
            return E.intl.string(g.default.HAPTNX);
        case f.H9.VOCAL:
            return E.intl.string(g.default.w3mS3p);
        case f.H9.TIMED:
        case f.H9.CHAT:
            return null;
    }
}
function b(e) {
    let { voiceDare: t, footer: n, surfaceKind: I = "popout" } = e,
        C = (0, a.bG)([_.default], () => _.default.getUser(t.senderId), [t.senderId]),
        b = (0, a.bG)([c.A], () => c.A.getChannel(t.channelId), [t.channelId]),
        N = b?.getGuildId(),
        R = (0, a.bG)([d.A], () => (null != N ? d.A.getGuild(N) : null), [N]),
        O = (0, a.bG)([p.A], () => p.A.getProgressForUserId(t.targetId), [t.targetId]),
        D = y(t),
        L = C?.globalName ?? C?.username ?? E.intl.string(g.default["7B17YX"]),
        w = (0, o.Ay)(b, !0),
        x = i.useCallback(() => {
            let e = (0, l.gU)(b);
            return null != e
                ? (0, r.jsx)(e, { className: A.p, "aria-hidden": !0, size: "xs", color: "currentColor" })
                : null;
        }, [b]),
        P = S(t.spiciness),
        M = E.intl.string((0, m.kC)(D)),
        k = D === f.Ob.COMPLETED ? (0, r.jsx)("span", { className: A.QA, children: M }) : M,
        U = (0, r.jsxs)("div", {
            className: A.Qs,
            children: [
                (0, r.jsxs)("div", {
                    className: A.U1,
                    children: [
                        (0, r.jsxs)("div", {
                            className: A.$,
                            children: [
                                (0, h.au)(t.kind, { size: "xs", color: "currentColor", className: A.x7 }),
                                (0, r.jsxs)(s.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: [E.intl.string((0, m.Tw)(t.kind)), " (", (0, m.E1)(t.durationSec), ")"],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: A.KZ,
                            children: [
                                (0, r.jsx)(s.Y3C, { className: P, size: "xs", color: "currentColor" }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: E.intl.string((0, m.Uf)(t.spiciness)),
                                }),
                            ],
                        }),
                    ],
                }),
                t.prompt.length > 0 &&
                    (0, r.jsx)(s.Text, { variant: "text-sm/medium", color: "text-default", children: t.prompt }),
                null != w &&
                    (0, r.jsxs)("div", {
                        className: A.cQ,
                        children: [
                            null != R &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: A.lE,
                                            children: [
                                                (0, r.jsx)(u.Ay, { guild: R, iconSize: 16, className: A.$f }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-muted",
                                                    className: A.Dy,
                                                    children: R.name,
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(s._BQ, { className: A.R6, size: "xs", color: "currentColor" }),
                                    ],
                                }),
                            (0, r.jsxs)("div", {
                                className: A.p_,
                                children: [
                                    x(),
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: A.bm,
                                        children: w,
                                    }),
                                ],
                            }),
                        ],
                    }),
                v(t, { senderName: L }),
                (0, r.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: (0, r.jsxs)(r.Fragment, {
                        children: [
                            k,
                            D === f.Ob.RUNNING
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [" ", E.intl.string(g.default.gpOjgH), " ", T(O)],
                                  })
                                : null,
                        ],
                    }),
                }),
                null != n && (0, r.jsx)("div", { className: A.qr, children: n }),
            ],
        });
    return "tooltip" === I
        ? (0, r.jsx)("div", { className: A.R3, children: U })
        : (0, r.jsx)(s.ZpM, { className: A.Ei, children: U });
}
function N(e) {
    let { userId: t, presence: n, footer: i, surfaceKind: s = "popout" } = e,
        o = (0, a.bG)([p.A], () => n ?? p.A.getTrackingEntryForUserId(t)?.presence, [t, n]);
    return null == o ? null : (0, r.jsx)(b, { voiceDare: o, footer: i, surfaceKind: s });
}
