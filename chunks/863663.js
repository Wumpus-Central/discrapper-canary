n.d(e, {
    NB: function () {
        return o;
    },
    ar: function () {
        return c;
    },
    fG: function () {
        return s;
    },
    kg: function () {
        return u;
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
function u(t) {
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
    let { newRoleParams: e } = t;
    if (null != e && '' === e.name.trim()) {
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
function s(t) {
    var e;
    let { guildProductListing: n, name: i, priceTier: r, description: l, image: o, imageName: u, isImageChanged: a, newRoleParams: s, hasUnsavedAttachmentChanges: c } = t,
        d = {};
    (null == n ? void 0 : n.name) !== i && '' !== i.trim() && (d.name = i), (null !== (e = null == n ? void 0 : n.description) && void 0 !== e ? e : '') !== l && (d.description = l), (null == n ? void 0 : n.price_tier) !== r && null != r && (d.priceTier = r), null != s && '' !== s.name.trim() ? (d.createNewRole = !0) : null === s && (d.unlinkRole = !0), o.startsWith('data:') && (a || (null == n && (Object.keys(d).length > 0 || c))) && ((d.image = o), (d.imageName = u));
    let f = Object.keys(d).length > 0 || c;
    return {
        changes: d,
        hasUnsavedChanges: f,
        canSaveForDraft: f,
        canSaveForPublished: f,
        canPublishOrUnpublish: !(null == n || f)
    };
}
function c(t, e) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(r.Z5c.GUILD_PRODUCT(t, e));
}
