a.d(t, { A: () => p });
var n = a(627968),
    l = a(64700),
    i = a(270003),
    s = a(243721),
    r = a(198982),
    o = a(839214),
    d = a(98919),
    c = a(137365),
    u = a(278274),
    m = a(652215);
let h = (0, o.D)(() => ({
    includeFrecency: !0,
    includeFriends: !0,
    includeGDMs: !0,
    includeDMs: !0,
    includeQuickSwitcherState: !0,
    includeUserSearchWorkerState: !0,
    isUploading: !1,
    isSuccess: !1,
    errorMessage: null,
}));
function p() {
    let e = h.useField("includeFrecency"),
        t = h.useField("includeFriends"),
        a = h.useField("includeDMs"),
        o = h.useField("includeGDMs"),
        p = h.useField("includeQuickSwitcherState"),
        x = h.useField("includeUserSearchWorkerState"),
        g = h.useField("isUploading"),
        v = h.useField("isSuccess"),
        b = h.useField("errorMessage"),
        _ = l.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: i,
                isUploading: s,
            } = h.getState();
            if (!s)
                try {
                    h.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t && (0, c.it)(),
                        a && (0, c.Md)(),
                        n && (0, c.pD)(),
                        e && (0, c.a1)(),
                        l && (0, c._S)(),
                        i && (0, c.D7)(),
                        await (0, d.a)(m.Umv.WEB_APP),
                        h.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new r.LG(t);
                    h.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    h.setState({ isUploading: !1 });
                }
        }, []);
    return (0, n.jsxs)(i.n, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, n.jsx)(s.d, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => h.setState({ includeFrecency: !e }),
            }),
            (0, n.jsx)(s.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => h.setState({ includeFriends: !t }),
            }),
            (0, n.jsx)(s.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => h.setState({ includeDMs: !a }),
            }),
            (0, n.jsx)(s.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: o,
                onChange: () => h.setState({ includeGDMs: !o }),
            }),
            (0, n.jsx)(s.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: p,
                onChange: () => h.setState({ includeQuickSwitcherState: !p }),
            }),
            (0, n.jsx)(s.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: x,
                onChange: () => h.setState({ includeUserSearchWorkerState: !x }),
            }),
            (0, n.jsx)(u.q, {
                isUploading: g,
                isSuccess: v,
                errorMessage: b,
                onClick: _,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
