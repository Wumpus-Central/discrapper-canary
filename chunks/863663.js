(n.d(t, {
    NB: () => a,
    ar: () => d,
    fG: () => u,
    kg: () => s,
    pM: () => c
}),
    n(781311),
    n(953529));
var r = n(881052);
n(496675);
var i = n(981631),
    o = n(388032);
let a = '_role';
function s(e) {
    if (!(e >= 0))
        switch (-e) {
            case i.evJ.ENTITY_TOO_LARGE:
                return o.intl.string(o.t.YbdEFB);
            case i.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                return o.intl.string(o.t.ZaXBoK);
            case 1:
                return o.intl.string(o.t.R0RpRU);
            default:
                return o.intl.formatToPlainString(o.t.cYwlp6, { code: -e });
        }
}
function l(e, t) {
    let n = {
        message: 'Invalid form body',
        errors: {
            [e]: {
                _errors: [
                    {
                        code: '',
                        message: t
                    }
                ]
            }
        }
    };
    return new r.Hx({
        status: 400,
        body: n
    });
}
function c(e) {
    let { newRoleParams: t } = e;
    if (null != t && '' === t.name.trim()) return l(a, o.intl.string(o.t['V0B/k5']));
}
function u(e) {
    var t;
    let { guildProductListing: n, name: r, priceTier: i, description: o, image: a, imageName: s, isImageChanged: l, newRoleParams: c, hasUnsavedAttachmentChanges: u } = e,
        d = {};
    ((null == n ? void 0 : n.name) !== r && '' !== r.trim() && (d.name = r), (null != (t = null == n ? void 0 : n.description) ? t : '') !== o && (d.description = o), (null == n ? void 0 : n.price_tier) !== i && null != i && (d.priceTier = i), null != c && '' !== c.name.trim() ? (d.createNewRole = !0) : null === c && (d.unlinkRole = !0), a.startsWith('data:') && (l || (null == n && (Object.keys(d).length > 0 || u))) && ((d.image = a), (d.imageName = s)));
    let f = Object.keys(d).length > 0 || u;
    return {
        changes: d,
        hasUnsavedChanges: f,
        canSaveForDraft: f,
        canSaveForPublished: f,
        canPublishOrUnpublish: !(null == n || f)
    };
}
function d(e, t) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(i.Z5c.GUILD_PRODUCT(e, t));
}
