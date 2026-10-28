n.d(t, { d: () => l });
var i = n(260447);
class l extends i.z {
    getSentryAppContext() {
        return "billing";
    }
    getSentryTags(e, t) {
        return { ...super.getSentryTags(e, t), billing_context: "guild_boost" };
    }
    getSentryExtras(e) {
        let { guildBoostSlot: t, guildBoostSlotId: n } = this.props;
        return { ...super.getSentryExtras(e), guildBoostSlotId: n ?? t?.id ?? null };
    }
}
