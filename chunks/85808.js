"use strict";
n.d(t, { B3: () => o, Bo: () => c });
var i = n(924985),
    s = n(576705),
    l = n(32603),
    r = n(281405),
    a = n(652215);
function o(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === l.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === r.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === l.PU ||
                (!!t &&
                    (n === l.HP ||
                        (n !== l.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1)))))),
        canHaveVoiceSummary:
            n !== l.PU &&
            n !== l.HP &&
            n !== l.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
function c(e) {
    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: r } = e;
    return (
        (function (e) {
            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: r } = e;
            return !0 !== i.A.isCollapsed(t.record.id)
                ? []
                : t.getChannelRecords().filter((e) => {
                      if (!s.A.can(a.xBc.VIEW_CHANNEL, e)) return !1;
                      let t = n[e.id] ?? [];
                      return e.id !== r && e.id !== l && t.length > 0;
                  });
        })({ category: t, selectedChannelId: l, selectedVoiceChannelId: r, voiceStates: n }).length > 0
    );
}
