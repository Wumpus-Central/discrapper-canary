let r;
t(47120);
var i,
    l,
    u,
    o,
    s = t(392711),
    a = t.n(s),
    c = t(442837),
    d = t(570140),
    I = t(944163),
    E = t(246364),
    m = t(446495),
    f = t(999382),
    h = t(981631),
    N = t(388032);
let T = !1;
function x() {
    var e;
    let n = f.Z.getGuildId();
    return null == n ? null : null === (e = I.Z.get(n)) || void 0 === e ? void 0 : e.formFields;
}
function v() {
    let e = x();
    if (null == e) return;
    let n = e.find((e) => (0, E.J)(e));
    return null == n
        ? [
              {
                  id: (0, s.uniqueId)(),
                  value: ''
              }
          ]
        : n.values.map((e) => ({
              id: (0, s.uniqueId)(),
              value: e
          }));
}
function p() {
    let e = x();
    if (null == e) return;
    let n = e.find((e) => (0, E.J)(e));
    if (0 === e.length || (1 === e.length && null != n)) {
        let e = {
            field_type: E.QJ.TEXT_INPUT,
            label: N.intl.string(N.t['83ZsRU']),
            required: !0
        };
        return null != n ? [n, e] : [e];
    }
    return [...e];
}
function A(e) {
    return e.hasFeature(h.oNc.DISCOVERABLE) ? m.A.DISCOVERABLE : e.hasFeature(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? m.A.APPLY : m.A.INVITE;
}
function C() {
    let e = f.Z.getGuild();
    if (null == e || null == r) {
        T = !1;
        return;
    }
    if (A(e) !== r.joinType) {
        T = !0;
        return;
    }
    switch (r.joinType) {
        case m.A.INVITE:
            var n, t, i, l;
            let { requireTerms: u, termRules: o } = r,
                s = e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== u,
                c = null !== (i = null === (t = x()) || void 0 === t ? void 0 : null === (n = t.find((e) => (0, E.J)(e))) || void 0 === n ? void 0 : n.values) && void 0 !== i ? i : [],
                d = null !== (l = null == o ? void 0 : o.map((e) => e.value.trim()).filter((e) => '' !== e)) && void 0 !== l ? l : [],
                I = !a().isEqual(c, d);
            T = s || I;
            break;
        case m.A.APPLY:
            let N = x(),
                { pendingVerificationFields: v } = r;
            T = null == N ? null != v : null != v && !a().isEqual(N, v);
            break;
        case m.A.DISCOVERABLE:
            T = !1;
    }
}
function _() {
    let e = f.Z.getGuild();
    if (null == e) return !1;
    let n = A(e);
    switch (n) {
        case m.A.DISCOVERABLE:
            r = { joinType: n };
            break;
        case m.A.APPLY:
            r = {
                joinType: n,
                pendingVerificationFields: p()
            };
            break;
        case m.A.INVITE:
            r = {
                joinType: n,
                requireTerms: e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(h.oNc.CLAN),
                termRules: v()
            };
    }
    C();
}
function j() {
    if (null == f.Z.getGuildId()) return !1;
    (null == r ? void 0 : r.joinType) === m.A.APPLY
        ? (r = {
              ...r,
              pendingVerificationFields: p()
          })
        : (null == r ? void 0 : r.joinType) === m.A.INVITE &&
          (r = {
              ...r,
              termRules: v()
          }),
        C();
}
function g(e) {
    let { section: n } = e;
    return n !== h.pNK.ACCESS ? S() : _();
}
function S() {
    (r = void 0), (T = !1);
}
class R extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, I.Z),
            this.syncWith([f.Z, I.Z], () => {
                C();
            });
    }
    get pendingState() {
        return r;
    }
    showNotice() {
        return T;
    }
}
(o = 'GuildSettingsJoinRulesStore'),
    (u = 'displayName') in (l = R)
        ? Object.defineProperty(l, u, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[u] = o),
    (n.Z = new R(d.Z, {
        GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
            let { guildId: n, requireTerms: t, termRules: i } = e;
            if (n !== f.Z.getGuildId() || (null == r ? void 0 : r.joinType) !== m.A.INVITE) return !1;
            (r = {
                ...r,
                requireTerms: t,
                termRules: i
            }),
                C();
        },
        GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
            let { guildId: n, formFields: t } = e;
            if (n !== f.Z.getGuildId() || (null == r ? void 0 : r.joinType) !== m.A.APPLY) return !1;
            (r = {
                ...r,
                pendingVerificationFields: t
            }),
                C();
        },
        GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
            let { guildId: n, joinType: t } = e,
                i = f.Z.getGuild();
            if (n !== (null == i ? void 0 : i.id)) return !1;
            switch (t) {
                case m.A.INVITE:
                    r = {
                        joinType: m.A.INVITE,
                        requireTerms: i.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED),
                        termRules: v()
                    };
                    break;
                case m.A.APPLY:
                    r = {
                        joinType: m.A.APPLY,
                        pendingVerificationFields: p()
                    };
                    break;
                case m.A.DISCOVERABLE:
                    r = { joinType: m.A.DISCOVERABLE };
            }
            C();
        },
        MEMBER_VERIFICATION_FORM_UPDATE: j,
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: j,
        GUILD_SETTINGS_JOIN_RULES_RESET: function () {
            return _();
        },
        GUILD_SETTINGS_INIT: g,
        GUILD_SETTINGS_SET_SECTION: g,
        GUILD_SETTINGS_CLOSE: S
    }));
