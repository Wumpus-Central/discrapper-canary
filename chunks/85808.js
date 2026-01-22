n.d(t, {
    B3: () => o,
    Bo: () => c,
});
var r = n(924985),
    l = n(576705),
    i = n(32603),
    a = n(281405),
    s = n(652215);
function o(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === i.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === a.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === i.PU ||
                (!!t &&
                    (n === i.HP ||
                        (n !== i.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1)))))),
        canHaveVoiceSummary:
            n !== i.PU &&
            n !== i.HP &&
            n !== i.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
function c(e) {
    let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: a } = e;
    return (
        (function (e) {
            let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: a } = e;
            return !0 !== r.A.isCollapsed(t.record.id)
                ? []
                : t.getChannelRecords().filter((e) => {
                      var t;
                      if (!l.A.can(s.xBc.VIEW_CHANNEL, e)) return !1;
                      let r = null != (t = n[e.id]) ? t : [];
                      return e.id !== a && e.id !== i && r.length > 0;
                  });
        })({
            category: t,
            selectedChannelId: i,
            selectedVoiceChannelId: a,
            voiceStates: n,
        }).length > 0
    );
}
