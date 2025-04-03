n.d(t, {
    NB: () => o,
    ar: () => c,
    fG: () => s,
    kg: () => a,
    pM: () => u
}),
    n(566702),
    n(266796);
var r = n(881052);
n(496675);
var i = n(981631),
    l = n(388032);
let o = '_role';
function a(e) {
    if (!(e >= 0))
        switch (-e) {
            case i.evJ.ENTITY_TOO_LARGE:
                return l.NW.string(l.t.YbdEFB);
            case i.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                return l.NW.string(l.t.ZaXBoK);
            case 1:
                return l.NW.string(l.t.R0RpRU);
            default:
                return l.NW.formatToPlainString(l.t.cYwlp6, { code: -e });
        }
}
function u(e) {
    let { newRoleParams: t } = e;
    if (null != t && '' === t.name.trim()) {
        var n;
        return (
            (n = l.NW.string(l.t['V0B/k5'])),
            new r.Hx({
                status: 400,
                body: {
                    message: 'Invalid form body',
                    errors: {
                        [o]: {
                            _errors: [
                                {
                                    code: '',
                                    message: n
                                }
                            ]
                        }
                    }
                }
            })
        );
    }
}
function s(e) {
    var t;
    let { guildProductListing: n, name: r, priceTier: i, description: l, image: o, imageName: a, isImageChanged: u, newRoleParams: s, hasUnsavedAttachmentChanges: c } = e,
        d = {};
    (null == n ? void 0 : n.name) !== r && '' !== r.trim() && (d.name = r), (null != (t = null == n ? void 0 : n.description) ? t : '') !== l && (d.description = l), (null == n ? void 0 : n.price_tier) !== i && null != i && (d.priceTier = i), null != s && '' !== s.name.trim() ? (d.createNewRole = !0) : null === s && (d.unlinkRole = !0), o.startsWith('data:') && (u || (null == n && (Object.keys(d).length > 0 || c))) && ((d.image = o), (d.imageName = a));
    let p = Object.keys(d).length > 0 || c;
    return {
        changes: d,
        hasUnsavedChanges: p,
        canSaveForDraft: p,
        canSaveForPublished: p,
        canPublishOrUnpublish: !(null == n || p)
    };
}
function c(e, t) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(i.Z5c.GUILD_PRODUCT(e, t));
}
