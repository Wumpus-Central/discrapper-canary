i.d(e, { B: () => d });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(256311),
    r = i(883600),
    a = i(419954),
    u = i(780964),
    o = i(31760);
let d = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let t = (0, l.bG)([r.A], () => r.A.overrideId()),
            e = async (t) => {
                let e = r.A.getChangelog(t, "en-US");
                return null != e ? e : ((await s.A.fetchChangelog(t, "en-US", !1, !0)) ?? null);
            };
        return (0, n.jsx)(o.q, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: t ?? null,
            setOverride: (t) => s.A.setChangelogOverride(t),
            fetchOverride: e,
        });
    },
});
