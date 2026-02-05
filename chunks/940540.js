n.d(t, { A: () => h });
var a = n(627968),
    s = n(64700),
    i = n(397927),
    l = n(198982),
    r = n(839214),
    o = n(98919),
    d = n(137365),
    c = n(278274),
    u = n(652215);
let m = (0, r.D)(() => ({
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
function h() {
    let e = m.useField("includeFrecency"),
        t = m.useField("includeFriends"),
        n = m.useField("includeDMs"),
        r = m.useField("includeGDMs"),
        h = m.useField("includeQuickSwitcherState"),
        x = m.useField("includeUserSearchWorkerState"),
        p = m.useField("isUploading"),
        g = m.useField("isSuccess"),
        _ = m.useField("errorMessage"),
        f = s.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: n,
                includeDMs: a,
                includeQuickSwitcherState: s,
                includeUserSearchWorkerState: i,
                isUploading: r,
            } = m.getState();
            if (!r)
                try {
                    m.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t && (0, d.it)(),
                        n && (0, d.Md)(),
                        a && (0, d.pD)(),
                        e && (0, d.a1)(),
                        s && (0, d._S)(),
                        i && (0, d.D7)(),
                        await (0, o.a)(u.Umv.WEB_APP),
                        m.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new l.LG(t);
                    m.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    m.setState({ isUploading: !1 });
                }
        }, []);
    return (0, a.jsxs)(i.nVY, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, a.jsx)(i.dOG, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => m.setState({ includeFrecency: !e }),
            }),
            (0, a.jsx)(i.dOG, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => m.setState({ includeFriends: !t }),
            }),
            (0, a.jsx)(i.dOG, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => m.setState({ includeDMs: !n }),
            }),
            (0, a.jsx)(i.dOG, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: r,
                onChange: () => m.setState({ includeGDMs: !r }),
            }),
            (0, a.jsx)(i.dOG, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: h,
                onChange: () => m.setState({ includeQuickSwitcherState: !h }),
            }),
            (0, a.jsx)(i.dOG, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: x,
                onChange: () => m.setState({ includeUserSearchWorkerState: !x }),
            }),
            (0, a.jsx)(c.q, {
                isUploading: p,
                isSuccess: g,
                errorMessage: _,
                onClick: f,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
