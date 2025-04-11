n.d(t, {
    NB: () => o,
    ar: () => s,
    fG: () => c,
    kg: () => a,
    pM: () => u
}),
    n(781311),
    n(953529);
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
function c(e) {
    var t;
    let { guildProductListing: n, name: r, priceTier: i, description: l, image: o, imageName: a, isImageChanged: u, newRoleParams: c, hasUnsavedAttachmentChanges: s } = e,
        d = {};
    (null == n ? void 0 : n.name) !== r && '' !== r.trim() && (d.name = r), (null != (t = null == n ? void 0 : n.description) ? t : '') !== l && (d.description = l), (null == n ? void 0 : n.price_tier) !== i && null != i && (d.priceTier = i), null != c && '' !== c.name.trim() ? (d.createNewRole = !0) : null === c && (d.unlinkRole = !0), o.startsWith('data:') && (u || (null == n && (Object.keys(d).length > 0 || s))) && ((d.image = o), (d.imageName = a));
    let p = Object.keys(d).length > 0 || s;
    return {
        changes: d,
        hasUnsavedChanges: p,
        canSaveForDraft: p,
        canSaveForPublished: p,
        canPublishOrUnpublish: !(null == n || p)
    };
}
function s(e, t) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(i.Z5c.GUILD_PRODUCT(e, t));
}
