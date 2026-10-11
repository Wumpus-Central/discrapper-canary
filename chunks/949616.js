n.d(t, { L: () => s, U: () => u });
var l = n(128761),
    i = n(238490),
    a = n(248675),
    r = n(660183);
function u(e) {
    let { installScope: t, integrationStatus: n } = e,
        l = e.status ?? { state: "unpublished", surface: null, previewAppChannels: [] },
        u = "up_to_date" === l.state && e.liveNameOutdated ? { ...l, state: "changes" } : l,
        s = (function (e) {
            let { installScope: t, status: n, appChannelName: l, appChannelPending: i, botInGuild: a } = e;
            return (
                "guild" === t &&
                null != n &&
                "unpublished" !== n.state &&
                ("activity" === n.surface ? null == l && !0 !== i : "bot" === n.surface && !1 === a)
            );
        })({ ...e, status: u }),
        o = (function (e) {
            let { installScope: t, guildName: n, canManageGuild: l } = e;
            return "guild" !== t || !1 !== l ? null : r.intl.format(a.default.N4NkyR, { server: n ?? "" });
        })(e),
        d = (0, i.Qg)({
            installScope: t,
            previewReady: n?.preview_ready === !0,
            integrationInstalled: n?.integration_installed ?? null,
            botPermissionsChanged: n?.bot_permissions_changed === !0,
        }),
        c = {
            intent: d ? "consent_then_publish" : "publish",
            isUpdate: "changes" === u.state && !s,
            disabledReason: o,
            confirmReason:
                null == o
                    ? (function (e) {
                          let { installScope: t, guildName: n, canManageChannels: l, usesAppChannels: i } = e;
                          return "guild" === t && i && !1 === l
                              ? r.intl.format(a.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(e)
                    : null,
            missingSurface: s ? ("activity" === u.surface ? "channel" : "bot") : null,
        };
    return d && n?.bot_permissions_changed === !0
        ? { ...c, label: r.intl.string(a.default["tUeY/h"]), action: "review_permissions" }
        : { ...c, label: r.intl.string(a.default["120EFN"]), action: "publish" };
}
function s(e) {
    let t = e?.publishedAt == null ? null : (0, l.YD)(e.publishedAt),
        n = e?.publishedRevision;
    return e?.state === "unpublished" || null == t || null == n
        ? null
        : r.intl.formatToPlainString(a.default.D9erxW, { time: (0, l.p9)(t), version: n });
}
