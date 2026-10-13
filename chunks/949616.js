n.d(t, { L: () => s, U: () => u });
var l = n(128761),
    i = n(238490),
    r = n(248675),
    a = n(660183);
function u(e) {
    let { installScope: t, integrationStatus: n } = e,
        l = e.status ?? { state: "unpublished", surface: null, previewAppChannels: [] },
        u = "up_to_date" === l.state && e.liveNameOutdated ? { ...l, state: "changes" } : l,
        s = (function (e) {
            let { installScope: t, status: n, appChannelName: l, appChannelPending: i, botInGuild: r } = e;
            return (
                "guild" === t &&
                null != n &&
                "unpublished" !== n.state &&
                ("activity" === n.surface ? null == l && !0 !== i : "bot" === n.surface && !1 === r)
            );
        })({ ...e, status: u }),
        o = (function (e) {
            let { installScope: t, guildName: n, canManageGuild: l } = e;
            return "guild" !== t || !1 !== l ? null : a.intl.format(r.default.N4NkyR, { server: n ?? "" });
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
                              ? a.intl.format(r.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(e)
                    : null,
            missingSurface: s ? ("activity" === u.surface ? "channel" : "bot") : null,
        };
    return d && n?.bot_permissions_changed === !0
        ? { ...c, label: a.intl.string(r.default["tUeY/h"]), action: "review_permissions" }
        : { ...c, label: a.intl.string(r.default["120EFN"]), action: "publish" };
}
function s(e) {
    let t = e?.publishedAt == null ? null : (0, l.YD)(e.publishedAt),
        n = e?.publishedRevision;
    return e?.state === "unpublished" || null == t || null == n
        ? null
        : a.intl.formatToPlainString(r.default.D9erxW, { time: (0, l.p9)(t), version: n });
}
