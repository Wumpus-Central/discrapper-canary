n.d(t, { B3: () => c, Bo: () => d });
var i = n(924985),
    l = n(576705),
    s = n(32603),
    a = n(281405),
    r = n(652215),
    o = n(349828);
function c(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === s.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === a.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === s.PU ||
                (e.id === o.Vc
                    ? n !== e.getSections(!1).length - 1
                    : !!t &&
                      (n === s.HP ||
                          (n !== s.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1)))))),
        canHaveVoiceSummary:
            n !== s.PU &&
            n !== s.HP &&
            n !== s.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
function d(e) {
    let { category: t, voiceStates: n, selectedChannelId: s, selectedVoiceChannelId: a } = e;
    return (
        (function (e) {
            let { category: t, voiceStates: n, selectedChannelId: s, selectedVoiceChannelId: a } = e;
            return !0 !== i.A.isCollapsed(t.record.id)
                ? []
                : t.getChannelRecords().filter((e) => {
                      if (!l.A.can(r.xBc.VIEW_CHANNEL, e)) return !1;
                      let t = n[e.id] ?? [];
                      return e.id !== a && e.id !== s && t.length > 0;
                  });
        })({ category: t, selectedChannelId: s, selectedVoiceChannelId: a, voiceStates: n }).length > 0
    );
}
