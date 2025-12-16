n.d(t, { s: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(594190),
    l = n(865066),
    c = n(823379),
    u = n(63063),
    d = n(981631),
    f = n(388032),
    p = n(46667);
function _(e) {
    switch (e.state) {
        case "unknown":
            return f.intl.string(f.t["KW+nqT"]);
        case "disabled":
            return f.intl.string(f.t["Q/wAF7"]);
        case "disconnected":
            return f.intl.string(f.t.Xvs9IM);
        case "initializing":
            return f.intl.string(f.t.h4qz8W);
        case "connecting":
            return f.intl.string(f.t.fSu9XF);
        case "handshaking":
            return f.intl.string(f.t["00aYLJ"]);
        case "running":
            return f.intl.string(f.t["54TB7Z"]);
        case "waiting-for-retry":
            return f.intl.string(f.t["0FONwi"]);
        case "failure":
            return f.intl.string(f.t.Ic0nkd);
        default:
            (0, c.vE)(e.state);
    }
}
function m() {
    let e = (0, l.O9)(),
        [t, n] = i.useState(!1),
        [c, m] = i.useState(() => (0, l.aL)()),
        h = (0, a.e7)([s.ZP], () => s.ZP.getSystemServiceStatus("input-service")),
        g = i.useCallback(async () => {
            n(!0), c ? await (0, l.OK)("windows-settings") : await (0, l.sU)("windows-settings"), n(!1), m((0, l.aL)());
        }, [c]);
    if (!e) return null;
    let E = "running" === h.state;
    return (0, r.jsxs)("div", {
        className: p.systemServiceContainer,
        children: [
            (0, r.jsxs)("div", {
                className: p.systemServiceTextContainer,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: f.intl.string(f.t.roHq80),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: f.intl.format(f.t["8CAL+D"], {
                            helpCenterLink: u.Z.getArticleURL(d.BhN.SYSTEM_SERVICE),
                        }),
                    }),
                    c
                        ? (0, r.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              color: E ? "text-feedback-positive" : "text-feedback-warning",
                              children: E ? f.intl.string(f.t.KHVMkW) : f.intl.format(f.t["5Rlr0b"], { status: _(h) }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(o.Button, {
                variant: c ? "critical-secondary" : "primary",
                loading: t,
                onClick: g,
                text: c ? f.intl.string(f.t.pAwbdL) : f.intl.string(f.t["1iI46O"]),
            }),
        ],
    });
}
