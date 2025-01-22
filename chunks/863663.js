e.d(n, {
    NB: function () {
        return u;
    },
    ar: function () {
        return c;
    },
    fG: function () {
        return s;
    },
    kg: function () {
        return o;
    },
    pM: function () {
        return a;
    }
});
var i = e(881052);
e(496675);
var r = e(981631),
    l = e(388032);
let u = '_role';
function o(t) {
    if (!(t >= 0))
        switch (-t) {
            case r.evJ.ENTITY_TOO_LARGE:
                return l.intl.string(l.t.YbdEFB);
            case r.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                return l.intl.string(l.t.ZaXBoK);
            case 1:
                return l.intl.string(l.t.R0RpRU);
            default:
                return l.intl.formatToPlainString(l.t.cYwlp6, { code: -t });
        }
}
function a(t) {
    let { newRoleParams: n } = t;
    if (null != n && '' === n.name.trim()) {
        var e, r;
        return (
            (e = u),
            (r = l.intl.string(l.t['V0B/k5'])),
            new i.Hx({
                status: 400,
                body: {
                    message: 'Invalid form body',
                    errors: {
                        [e]: {
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
function s(t) {
    var n;
    let { guildProductListing: e, name: i, priceTier: r, description: l, image: u, imageName: o, isImageChanged: a, newRoleParams: s, hasUnsavedAttachmentChanges: c } = t,
        d = {};
    (null == e ? void 0 : e.name) !== i && '' !== i.trim() && (d.name = i), (null !== (n = null == e ? void 0 : e.description) && void 0 !== n ? n : '') !== l && (d.description = l), (null == e ? void 0 : e.price_tier) !== r && null != r && (d.priceTier = r), null != s && '' !== s.name.trim() ? (d.createNewRole = !0) : null === s && (d.unlinkRole = !0), u.startsWith('data:') && (a || (null == e && (Object.keys(d).length > 0 || c))) && ((d.image = u), (d.imageName = o));
    let f = Object.keys(d).length > 0 || c;
    return {
        changes: d,
        hasUnsavedChanges: f,
        canSaveForDraft: f,
        canSaveForPublished: f,
        canPublishOrUnpublish: !(null == e || f)
    };
}
function c(t, n) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(r.Z5c.GUILD_PRODUCT(t, n));
}
