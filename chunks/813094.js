"use strict";
n.d(t, { A: () => i });
var r = n(488430);
class i {
    title;
    body;
    avatar;
    decorations;
    avatarDecorationSkuIds;
    dismissibleContent;
    version;
    refTargetBackground;
    badgeIcon;
    badgeText;
    constructor(e) {
        (this.type = r.G.COACHTIP),
            (this.title = e.title),
            (this.body = e.body),
            (this.avatar = e.avatar),
            (this.decorations = e.decorations),
            (this.avatarDecorationSkuIds = e.avatarDecorationSkuIds),
            (this.dismissibleContent = e.dismissibleContent),
            (this.version = e.version),
            (this.refTargetBackground = e.refTargetBackground),
            (this.badgeIcon = e.badgeIcon),
            (this.badgeText = e.badgeText);
    }
    static fromServer(e) {
        return new i({
            ...e,
            dismissibleContent: e.dismissible_content,
            avatarDecorationSkuIds: e.avatar_decoration_sku_ids,
            refTargetBackground: e.ref_target_background,
            badgeIcon: e.badge_icon,
            badgeText: e.badge_text,
        });
    }
}
