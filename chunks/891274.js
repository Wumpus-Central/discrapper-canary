var i = r(411104);
r(570140);
var a = r(147913);
r(674588);
var o = r(751189),
    s = r(409059);
r(652898);
var l = r(728675);
r(701190);
var u = r(960904),
    c = r(213753),
    d = r(830121);
function f(e) {
    let n = (0, d.ZP)(e.content);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            let { type: n, code: r } = e;
            if (n === u.g.INVITE);
            else if (n === u.g.TEMPLATE)
                (0, c.V)(async () => {
                    null == s.Z.getGuildTemplate(r) && (await o.Z.resolveGuildTemplate(r));
                });
            else if (n === u.g.BUILD_OVERRIDE || n === u.g.MANUAL_BUILD_OVERRIDE);
            else if (n === u.g.EVENT);
            else if (n === u.g.CHANNEL_LINK);
            else if (n === u.g.APP_DIRECTORY_PROFILE);
            else if (n === u.g.ACTIVITY_BOOKMARK);
            else if (n === u.g.EMBEDDED_ACTIVITY_INVITE);
            else if (n === u.g.GUILD_PRODUCT);
            else if (n === u.g.SERVER_SHOP);
            else if (n === u.g.QUESTS_EMBED);
            else if (n === u.g.APP_DIRECTORY_STOREFRONT);
            else if (n === u.g.APP_DIRECTORY_STOREFRONT_SKU);
            else if (n === u.g.APP_OAUTH2_LINK);
            else if (n === u.g.COLLECTIBLES_SHOP);
            else throw Error('Unknown coded link type: '.concat(n));
        });
}
class p extends a.Z {
    constructor() {
        super(), (0, l.Z)(this, f);
    }
}
n.Z = new p();
