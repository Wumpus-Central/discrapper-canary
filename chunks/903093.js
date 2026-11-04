n(321073);
var i = n(536637),
    l = n.n(i),
    d = n(834409),
    u = n(218113),
    r = n(792996);
let a = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
function s(t) {
    return null != t.raidDetectedAt && l()(t.raidDetectedAt).add(2, "hours") > l()();
}
n.d(
    e,
    {},
    {
        $5: function (t) {
            return null == t ? void 0 : s(t) ? d.V.JOIN_RAID : d.V.DM_RAID;
        },
        P$: s,
        Qm: function (t) {
            return null != t.dmSpamDetectedAt && l()(t.dmSpamDetectedAt).add(2, "hours") > l()();
        },
        Z7: function (t) {
            let e = t?.lockdownDurationHours;
            return null != e && (0, u.aE)().some((t) => t.value === e) ? e : 2;
        },
        _J: function (t) {
            return (
                (null != t.dmsDisabledUntil && new Date(t.dmsDisabledUntil) > new Date()) ||
                (null != t.invitesDisabledUntil && new Date(t.invitesDisabledUntil) > new Date())
            );
        },
        di: function (t) {
            return t?.dmsDisabledUntil != null && new Date(t.dmsDisabledUntil) > new Date();
        },
        fi: function (t, e) {
            let n = [];
            return (t || n.push(d.ZE.INVITES_DISABLED), e || n.push(d.ZE.DMS_DISABLED), n);
        },
        k$: function (t) {
            return (
                (null != t.dmSpamDetectedAt && l()(t.dmSpamDetectedAt).add(2, "hours") > l()()) ||
                (null != t.raidDetectedAt && l()(t.raidDetectedAt).add(2, "hours") > l()())
            );
        },
        mR: function (t, e) {
            let n = [];
            return (t && n.push(d.ZE.INVITES_DISABLED), e && n.push(d.ZE.DMS_DISABLED), n);
        },
        ql: function (t, e) {
            let n = t.dmsDisabledUntil ?? t.invitesDisabledUntil;
            if (null == n) return "";
            let i = null != t.dmsDisabledUntil,
                l = null != t.invitesDisabledUntil;
            switch (!0) {
                case i && l:
                    return r.intl.formatToPlainString(r.t.hCZitf, {
                        guildName: e,
                        time: new Date(n).toLocaleString(r.intl.currentLocale, a),
                    });
                case i:
                    return r.intl.formatToPlainString(r.t["HNKxf+"], {
                        guildName: e,
                        time: new Date(n).toLocaleString(r.intl.currentLocale, a),
                    });
                case l:
                    return r.intl.formatToPlainString(r.t.M3iSyL, {
                        guildName: e,
                        time: new Date(n).toLocaleString(r.intl.currentLocale, a),
                    });
                default:
                    return "";
            }
        },
        r2: function (t) {
            return t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date();
        },
        yc: a,
    },
);
