n.d(t, {
    NB: () => s,
    ar: () => u,
    fG: () => d,
    kg: () => a,
    pM: () => o
});
var i = n(881052);
n(496675);
var l = n(981631),
    r = n(388032);
let s = '_role';
function a(e) {
    if (!(e >= 0))
        switch (-e) {
            case l.evJ.ENTITY_TOO_LARGE:
                return r.intl.string(r.t.YbdEFB);
            case l.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                return r.intl.string(r.t.ZaXBoK);
            case 1:
                return r.intl.string(r.t.R0RpRU);
            default:
                return r.intl.formatToPlainString(r.t.cYwlp6, { code: -e });
        }
}
function o(e) {
    let { newRoleParams: t } = e;
    if (null != t && '' === t.name.trim()) {
        var n;
        return (
            (n = r.intl.string(r.t['V0B/k5'])),
            new i.Hx({
                status: 400,
                body: {
                    message: 'Invalid form body',
                    errors: {
                        [s]: {
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
function d(e) {
    var t;
    let { guildProductListing: n, name: i, priceTier: l, description: r, image: s, imageName: a, isImageChanged: o, newRoleParams: d, hasUnsavedAttachmentChanges: u } = e,
        c = {};
    (null == n ? void 0 : n.name) !== i && '' !== i.trim() && (c.name = i), (null !== (t = null == n ? void 0 : n.description) && void 0 !== t ? t : '') !== r && (c.description = r), (null == n ? void 0 : n.price_tier) !== l && null != l && (c.priceTier = l), null != d && '' !== d.name.trim() ? (c.createNewRole = !0) : null === d && (c.unlinkRole = !0), s.startsWith('data:') && (o || (null == n && (Object.keys(c).length > 0 || u))) && ((c.image = s), (c.imageName = a));
    let h = Object.keys(c).length > 0 || u;
    return {
        changes: c,
        hasUnsavedChanges: h,
        canSaveForDraft: h,
        canSaveForPublished: h,
        canPublishOrUnpublish: !(null == n || h)
    };
}
function u(e, t) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(l.Z5c.GUILD_PRODUCT(e, t));
}
