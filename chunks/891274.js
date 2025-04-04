n.d(t, { Z: () => f }), n(411104), n(570140);
var r = n(147913);
n(471518);
var i = n(751189),
    o = n(409059);
n(652898);
var a = n(728675);
n(701190);
var s = n(960904),
    l = n(213753),
    c = n(830121);
function u(e) {
    let t = (0, c.ZP)(e.content);
    null != t &&
        0 !== t.length &&
        t.forEach((e) => {
            let { type: t, code: n } = e;
            if (t === s.g.INVITE);
            else if (t === s.g.TEMPLATE)
                (0, l.V)(async () => {
                    null == o.Z.getGuildTemplate(n) && (await i.Z.resolveGuildTemplate(n));
                });
            else if (t === s.g.BUILD_OVERRIDE || t === s.g.MANUAL_BUILD_OVERRIDE);
            else if (t === s.g.EVENT);
            else if (t === s.g.CHANNEL_LINK);
            else if (t === s.g.APP_DIRECTORY_PROFILE);
            else if (t === s.g.ACTIVITY_BOOKMARK);
            else if (t === s.g.EMBEDDED_ACTIVITY_INVITE);
            else if (t === s.g.GUILD_PRODUCT);
            else if (t === s.g.SERVER_SHOP);
            else if (t === s.g.QUESTS_EMBED);
            else if (t === s.g.APP_DIRECTORY_STOREFRONT);
            else if (t === s.g.APP_DIRECTORY_STOREFRONT_SKU);
            else if (t === s.g.APP_OAUTH2_LINK);
            else if (t === s.g.COLLECTIBLES_SHOP);
            else throw Error('Unknown coded link type: '.concat(t));
        });
}
class d extends r.Z {
    constructor() {
        super(), (0, a.Z)(this, u);
    }
}
let f = new d();
