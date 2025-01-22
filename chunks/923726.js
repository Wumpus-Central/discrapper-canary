r.d(n, {
    $F: function () {
        return h;
    },
    Bt: function () {
        return o;
    },
    Gp: function () {
        return _;
    },
    hQ: function () {
        return d;
    },
    kT: function () {
        return s;
    },
    s1: function () {
        return l;
    },
    ss: function () {
        return f;
    },
    sy: function () {
        return c;
    },
    yi: function () {
        return p;
    }
}),
    r(223892);
var i = r(644542),
    a = r(981631);
function o(e) {
    let { enableRoleSubscriptionsForGuild: n } = i.Xv.useExperiment(
            {
                guildId: null != e ? e : a.lds,
                location: '504714_1'
            },
            { autoTrackExposure: !0 }
        ),
        { enableRoleSubscriptionsForUser: r } = i.Zo.useExperiment({ location: '504714_2' }, { autoTrackExposure: !1 });
    return null != e && n && r;
}
function s(e) {
    let { enableRoleSubscriptionsForGuild: n } = i.Xv.getCurrentConfig({
            guildId: null != e ? e : a.lds,
            location: '504714_3'
        }),
        { enableRoleSubscriptionsForUser: r } = i.Zo.getCurrentConfig({ location: '504714_4' }, { autoTrackExposure: !1 });
    return null != e && n && r;
}
function l(e) {
    return i.ai.useExperiment({
        guildId: null != e ? e : a.lds,
        location: '504714_7'
    });
}
let u = [a.oNc.ROLE_SUBSCRIPTIONS_ENABLED, a.oNc.CREATOR_MONETIZABLE, a.oNc.CREATOR_MONETIZABLE_PROVISIONAL],
    c = (e) => null != e && u.some((n) => e.hasFeature(n));
function d(e) {
    let { enabled: n } = i.jJ.getCurrentConfig(
        {
            guildId: null != e ? e : a.lds,
            location: '504714_9'
        },
        { autoTrackExposure: !1 }
    );
    return n;
}
function f(e) {
    let { enabled: n } = i.jJ.useExperiment(
        {
            guildId: null != e ? e : a.lds,
            location: '504714_10'
        },
        { autoTrackExposure: !1 }
    );
    return n;
}
function p(e) {
    let { showCreatorPortalLink: n } = i.jJ.useExperiment(
        {
            guildId: null != e ? e : a.lds,
            location: '504714_11'
        },
        { autoTrackExposure: !1 }
    );
    return n;
}
function h() {
    let { enabled: e } = i.$i.getCurrentConfig({ location: '504714_12' }, { autoTrackExposure: !1 });
    return e;
}
function _() {
    let { enabled: e } = i.$i.useExperiment({ location: '504714_13' }, { autoTrackExposure: !1 });
    return e;
}
