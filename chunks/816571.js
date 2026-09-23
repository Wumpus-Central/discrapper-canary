n.d(t, { d: () => s });
var i = n(260447);
class s extends i.z {
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
