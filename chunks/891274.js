n.d(t, { Z: () => f }), n(411104), n(570140);
var i = n(147913);
n(674588);
var r = n(751189),
    a = n(409059);
n(652898);
var s = n(728675);
n(701190);
var o = n(960904),
    l = n(213753),
    u = n(830121);
function c(e) {
    let t = (0, u.ZP)(e.content);
    null != t &&
        0 !== t.length &&
        t.forEach((e) => {
            let { type: t, code: n } = e;
            if (t === o.g.INVITE);
            else if (t === o.g.TEMPLATE)
                (0, l.V)(async () => {
                    null == a.Z.getGuildTemplate(n) && (await r.Z.resolveGuildTemplate(n));
                });
            else if (t === o.g.BUILD_OVERRIDE || t === o.g.MANUAL_BUILD_OVERRIDE);
            else if (t === o.g.EVENT);
            else if (t === o.g.CHANNEL_LINK);
            else if (t === o.g.APP_DIRECTORY_PROFILE);
            else if (t === o.g.ACTIVITY_BOOKMARK);
            else if (t === o.g.EMBEDDED_ACTIVITY_INVITE);
            else if (t === o.g.GUILD_PRODUCT);
            else if (t === o.g.SERVER_SHOP);
            else if (t === o.g.QUESTS_EMBED);
            else if (t === o.g.APP_DIRECTORY_STOREFRONT);
            else if (t === o.g.APP_DIRECTORY_STOREFRONT_SKU);
            else if (t === o.g.APP_OAUTH2_LINK);
            else if (t === o.g.COLLECTIBLES_SHOP);
            else throw Error('Unknown coded link type: '.concat(t));
        });
}
class d extends i.Z {
    constructor() {
        super(), (0, s.Z)(this, c);
    }
}
let f = new d();
