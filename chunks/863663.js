n.d(t, {
    NB: function () {
        return o;
    },
    ar: function () {
        return d;
    },
    fG: function () {
        return u;
    },
    kg: function () {
        return s;
    },
    pM: function () {
        return a;
    }
});
var i = n(881052);
n(496675);
var r = n(981631),
    l = n(388032);
let o = '_role';
function s(e) {
    if (!(e >= 0))
        switch (-e) {
            case r.evJ.ENTITY_TOO_LARGE:
                return l.intl.string(l.t.YbdEFB);
            case r.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                return l.intl.string(l.t.ZaXBoK);
            case 1:
                return l.intl.string(l.t.R0RpRU);
            default:
                return l.intl.formatToPlainString(l.t.cYwlp6, { code: -e });
        }
}
function a(e) {
    let { newRoleParams: t } = e;
    if (null != t && '' === t.name.trim()) {
        var n, r;
        return (
            (n = o),
            (r = l.intl.string(l.t['V0B/k5'])),
            new i.Hx({
                status: 400,
                body: {
                    message: 'Invalid form body',
                    errors: {
                        [n]: {
                            _errors: [
                                {
                                    code: '',
                                    message: r
                                }
                            ]
                        }
                    }
                }
            })
        );
    }
}
function u(e) {
    var t;
    let { guildProductListing: n, name: i, priceTier: r, description: l, image: o, imageName: s, isImageChanged: a, newRoleParams: u, hasUnsavedAttachmentChanges: d } = e,
        c = {};
    (null == n ? void 0 : n.name) !== i && '' !== i.trim() && (c.name = i), (null !== (t = null == n ? void 0 : n.description) && void 0 !== t ? t : '') !== l && (c.description = l), (null == n ? void 0 : n.price_tier) !== r && null != r && (c.priceTier = r), null != u && '' !== u.name.trim() ? (c.createNewRole = !0) : null === u && (c.unlinkRole = !0), o.startsWith('data:') && (a || (null == n && (Object.keys(c).length > 0 || d))) && ((c.image = o), (c.imageName = s));
    let h = Object.keys(c).length > 0 || d;
    return {
        changes: c,
        hasUnsavedChanges: h,
        canSaveForDraft: h,
        canSaveForPublished: h,
        canPublishOrUnpublish: !(null == n || h)
    };
}
function d(e, t) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(r.Z5c.GUILD_PRODUCT(e, t));
}
