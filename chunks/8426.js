n.d(t, {
    Hr: function () {
        return C;
    },
    Hz: function () {
        return T;
    },
    To: function () {
        return E;
    },
    XG: function () {
        return I;
    },
    _N: function () {
        return x;
    },
    ad: function () {
        return _;
    },
    bj: function () {
        return A;
    },
    el: function () {
        return f;
    },
    hS: function () {
        return v;
    },
    lq: function () {
        return j;
    },
    mM: function () {
        return b;
    },
    oo: function () {
        return S;
    },
    q6: function () {
        return y;
    },
    r2: function () {
        return N;
    },
    vR: function () {
        return p;
    }
}),
    n(390547);
var i = n(392711),
    r = n.n(i),
    l = n(544891),
    a = n(570140),
    s = n(668781),
    o = n(563534),
    c = n(734893),
    d = n(626135),
    u = n(960048),
    m = n(969632),
    h = n(981631),
    g = n(388032);
function x(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE',
        welcomeMessage: e
    });
}
function p(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION',
        action: e
    });
}
function f(e, t) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION',
        channelId: e,
        action: t
    });
}
function C(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION',
        channelId: e
    });
}
function v(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION',
        actions: e
    });
}
async function _(e, t, n, i) {
    if (!i) return Promise.resolve();
    try {
        let i = await l.tn.patch({
                url: h.ANM.NEW_MEMBER_ACTION(e, t),
                body: { icon: n },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            r = (0, c.cq)(i.body);
        return (
            a.Z.dispatch({
                type: 'GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS',
                guildId: e,
                action: r
            }),
            Promise.resolve(i.body)
        );
    } catch (t) {
        var o;
        let e = r().flatMap(null !== (o = t.body) && void 0 !== o ? o : {}, (e) => e);
        return (
            s.Z.show({
                title: g.intl.string(g.t['6nCZyM']),
                body: g.intl.format(g.t.dYCPDw, { errorMessage: e.join(', ') })
            }),
            u.Z.addBreadcrumb({ message: 'Error updating new member action icon' }),
            Promise.reject()
        );
    }
}
function N(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL',
        resourceChannel: e
    });
}
function I(e, t) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL',
        channelId: e,
        resourceChannel: t
    });
}
function T(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL',
        resourceChannelId: e
    });
}
function j(e) {
    a.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL',
        resourceChannels: e
    });
}
async function b(e, t, n) {
    try {
        let i = await l.tn.put({
                url: h.ANM.RESOURCE_CHANNEL(e, t),
                body: { icon: n },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            r = (0, c.vD)(i.body);
        return (
            a.Z.dispatch({
                type: 'GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS',
                guildId: e,
                resourceChannel: r
            }),
            i.body
        );
    } catch (t) {
        var i;
        let e = r().flatMap(null !== (i = t.body) && void 0 !== i ? i : {}, (e) => e);
        s.Z.show({
            title: g.intl.string(g.t['6nCZyM']),
            body: g.intl.format(g.t.dYCPDw, { errorMessage: e.join(', ') })
        });
    }
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return n || m.Z.hasChanges()
        ? o.Z.getEnabled(e) && !(0, c.uo)(t)
            ? (s.Z.show({
                  title: g.intl.string(g.t['6nCZyM']),
                  body: g.intl.string(g.t.JuhUTU)
              }),
              u.Z.addBreadcrumb({ message: 'Error saving home settings' }),
              Promise.reject())
            : R(e, t)
        : Promise.resolve();
}
function E(e, t) {
    let n = o.Z.getSettings(e);
    if (t && !(0, c.uo)(n)) {
        s.Z.show({
            title: g.intl.string(g.t['6nCZyM']),
            body: g.intl.string(g.t.JuhUTU)
        });
        return;
    }
    return (
        a.Z.dispatch({
            type: 'GUILD_HOME_SETTINGS_TOGGLE_ENABLED',
            guildId: e,
            enabled: t
        }),
        R(e, {
            ...n,
            enabled: t
        })
    );
}
async function R(e, t) {
    var n, i, o, u, m, x, p, f, C;
    a.Z.dispatch({ type: 'GUILD_HOME_SETTINGS_UPDATE_START' });
    try {
        let r = await l.tn.put({
                url: h.ANM.GUILD_HOME_SETTINGS(e),
                body: (0, c.HH)(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            s = (0, c.tB)(r.body);
        return (
            a.Z.dispatch({
                type: 'GUILD_HOME_SETTINGS_UPDATE_SUCCESS',
                guildId: e,
                homeSettings: s
            }),
            d.default.track(h.rMx.GUILD_SETTINGS_GUIDE_UPDATED, {
                guild_id: e,
                welcome_message_author_id: (null !== (u = null == s ? void 0 : null === (n = s.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) && void 0 !== u ? u : [])[0],
                welcome_message_length: null !== (m = null == s ? void 0 : null === (o = s.welcomeMessage) || void 0 === o ? void 0 : null === (i = o.message) || void 0 === i ? void 0 : i.length) && void 0 !== m ? m : 0,
                member_action_channel_ids: (null !== (x = null == s ? void 0 : s.newMemberActions) && void 0 !== x ? x : []).map((e) => e.channelId),
                member_action_channel_actions: (null !== (p = null == s ? void 0 : s.newMemberActions) && void 0 !== p ? p : []).map((e) => e.actionType),
                resource_channel_ids: (null !== (f = null == s ? void 0 : s.resourceChannels) && void 0 !== f ? f : []).map((e) => e.channelId),
                enabled: null == s ? void 0 : s.enabled
            }),
            r.body
        );
    } catch (t) {
        let e = r().flatMap(null !== (C = t.body) && void 0 !== C ? C : {}, (e) => e);
        a.Z.dispatch({ type: 'GUILD_HOME_SETTINGS_UPDATE_FAIL' }),
            s.Z.show({
                title: g.intl.string(g.t['6nCZyM']),
                body: g.intl.format(g.t.dYCPDw, { errorMessage: e.join(', ') })
            });
    }
}
function y(e, t) {
    null != e &&
        a.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION',
            guildId: e,
            channelIds: t
        });
}
function A() {
    a.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET' });
}
