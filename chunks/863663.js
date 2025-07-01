(n.d(t, {
    NB: () => a,
    ar: () => u,
    fG: () => c,
    kg: () => o,
    pM: () => s
}),
    n(781311),
    n(953529));
var r = n(881052);
n(496675);
var i = n(981631),
    l = n(388032);
let a = '_role';
function o(e) {
    if (!(e >= 0))
        switch (-e) {
            case i.evJ.ENTITY_TOO_LARGE:
                return l.intl.string(l.t.YbdEFB);
            case i.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                return l.intl.string(l.t.ZaXBoK);
            case 1:
                return l.intl.string(l.t.R0RpRU);
            default:
                return l.intl.formatToPlainString(l.t.cYwlp6, { code: -e });
        }
}
function s(e) {
    let { newRoleParams: t } = e;
    if (null != t && '' === t.name.trim()) {
        var n;
        return (
            (n = l.intl.string(l.t['V0B/k5'])),
            new r.Hx({
                status: 400,
                body: {
                    message: 'Invalid form body',
                    errors: {
                        [a]: {
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
    let { guildProductListing: n, name: r, priceTier: i, description: l, image: a, imageName: o, isImageChanged: s, newRoleParams: c, hasUnsavedAttachmentChanges: u } = e,
        d = {};
    ((null == n ? void 0 : n.name) !== r && '' !== r.trim() && (d.name = r), (null != (t = null == n ? void 0 : n.description) ? t : '') !== l && (d.description = l), (null == n ? void 0 : n.price_tier) !== i && null != i && (d.priceTier = i), null != c && '' !== c.name.trim() ? (d.createNewRole = !0) : null === c && (d.unlinkRole = !0), a.startsWith('data:') && (s || (null == n && (Object.keys(d).length > 0 || u))) && ((d.image = a), (d.imageName = o)));
    let p = Object.keys(d).length > 0 || u;
    return {
        changes: d,
        hasUnsavedChanges: p,
        canSaveForDraft: p,
        canSaveForPublished: p,
        canPublishOrUnpublish: !(null == n || p)
    };
}
function u(e, t) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(i.Z5c.GUILD_PRODUCT(e, t));
}
