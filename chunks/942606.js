i.d(t, { G: () => s });
var n = i(260447);
class s extends n.z {
    getSentryAppContext() {
        return "billing";
    }
    getSentryTags(e, t) {
        return { ...super.getSentryTags(e, t), billing_context: "guild_boost" };
    }
    getSentryExtras(e) {
        let { guildBoostSlot: t, guildBoostSlotId: i } = this.props;
        return { ...super.getSentryExtras(e), guildBoostSlotId: i ?? t?.id ?? null };
    }
}
