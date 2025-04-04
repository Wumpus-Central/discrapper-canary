n.d(t, { Z: () => b }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(433355),
    s = n(944486),
    l = n(581364);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = {};
function f() {
    return (d = {}), !0;
}
function _(e) {
    return (
        e in d ||
            (d[e] = {
                activeCommand: null,
                activeCommandSection: null,
                activeOptionName: null,
                preferredCommandId: null,
                optionStates: {},
                initialValues: {},
                commandOrigin: null
            }),
        d[e]
    );
}
function p(e) {
    var t;
    let { channelId: n, command: r, section: i, initialValues: o, location: a, triggerSection: s, queryLength: c, sectionName: u, query: d, searchResultsPosition: f, source: p, commandOrigin: h } = e,
        m = _(n);
    if ((null == r ? void 0 : r.id) === (null == (t = m.activeCommand) ? void 0 : t.id)) return !1;
    (m.activeCommand = r), (m.activeCommandSection = i), (m.activeOptionName = null), (m.preferredCommandId = null), (m.initialValues = null != o ? o : {}), (m.commandOrigin = null != h ? h : null), (m.source = p);
    let g = {};
    return (
        (null == r ? void 0 : r.options) != null &&
            r.options.forEach((e) => {
                g[e.name] = {
                    isActive: !1,
                    hasValue: !1,
                    lastValidationResult: null,
                    optionValue: null
                };
            }),
        (m.optionStates = g),
        null != r &&
            (0, l.qJ)({
                command: r,
                location: a,
                triggerSection: s,
                queryLength: c,
                sectionName: u,
                query: d,
                searchResultsPosition: f,
                source: p
            }),
        !0
    );
}
function h(e) {
    var t, n;
    let { channelId: r, commandId: i } = e,
        o = _(r);
    return i !== o.preferredCommandId && (null !== o.preferredCommandId || i !== (null != (n = null == (t = o.activeCommand) ? void 0 : t.id) ? n : null)) && ((o.activeCommand = null), (o.activeOptionName = null), (o.preferredCommandId = i), (o.optionStates = {}), !0);
}
function m(e) {
    let { channelId: t, changedOptionStates: n } = e,
        r = _(t),
        i = u({}, r.optionStates);
    for (let [e, t] of Object.entries(n)) {
        var o, a, s;
        if (!(e in r.optionStates)) continue;
        if (!(void 0 !== t.hasValue ? t.hasValue : i[e].hasValue)) {
            (i[e] = {
                hasValue: !1,
                isActive: !1,
                lastValidationResult: null,
                optionValue: null,
                location: void 0,
                length: void 0
            }),
                r.activeOptionName === e && (r.activeOptionName = null);
            continue;
        }
        let n = i[e];
        (i[e] = {
            hasValue: !0,
            isActive: void 0 !== t.isActive ? t.isActive : n.isActive,
            lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
            optionValue: null != (o = t.optionValue) ? o : n.optionValue,
            location: null != (a = t.location) ? a : n.location,
            length: null != (s = t.length) ? s : n.length
        }),
            void 0 !== t.isActive && (t.isActive ? (null != r.activeOptionName && r.activeOptionName !== e && ((i[r.activeOptionName] = u({}, i[r.activeOptionName])), (i[r.activeOptionName].isActive = !1)), (r.activeOptionName = e)) : e === r.activeOptionName && (r.activeOptionName = null));
    }
    return (r.optionStates = i), !0;
}
function g(e) {
    let { channelId: t, preferredCommandId: n, command: r, section: i, location: o, changedOptionStates: a } = e,
        s = p({
            type: 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND',
            channelId: t,
            command: r,
            section: i,
            location: o
        }),
        l = h({
            type: 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND',
            channelId: t,
            commandId: n
        }),
        c = m({
            type: 'APPLICATION_COMMAND_UPDATE_OPTIONS',
            channelId: t,
            changedOptionStates: a
        });
    return s || l || c;
}
class E extends (r = i.ZP.Store) {
    initialize() {
        a.ZP.addChangeListener(() => {
            let e = s.Z.getChannelId();
            if (null == e) return (d = {}), !0;
            let t = a.ZP.getCurrentSidebarChannelId(e);
            if (null != t && t in d) return !1;
            d = e in d ? { [e]: d[e] } : {};
        });
    }
    getActiveCommand(e) {
        return _(e).activeCommand;
    }
    getActiveCommandSection(e) {
        return _(e).activeCommandSection;
    }
    getActiveOptionName(e) {
        return _(e).activeOptionName;
    }
    getActiveOption(e) {
        var t, n, r;
        let i = _(e);
        return null != (r = null == (n = i.activeCommand) || null == (t = n.options) ? void 0 : t.find((e) => e.name === i.activeOptionName)) ? r : null;
    }
    getPreferredCommandId(e) {
        return _(e).preferredCommandId;
    }
    getOptionStates(e) {
        return _(e).optionStates;
    }
    getOptionState(e, t) {
        return _(e).optionStates[t];
    }
    getCommandOrigin(e) {
        return _(e).commandOrigin;
    }
    getSource(e) {
        return _(e).source;
    }
    getOption(e, t) {
        var n, r;
        return null == (r = _(e).activeCommand) || null == (n = r.options) ? void 0 : n.find((e) => e.name === t);
    }
    getState(e) {
        return u({}, _(e));
    }
}
c(E, 'displayName', 'ApplicationCommandStore');
let b = new E(o.Z, {
    CONNECTION_OPEN: f,
    CHANNEL_SELECT: f,
    LOGOUT: f,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: p,
    APPLICATION_COMMAND_SET_PREFERRED_COMMAND: h,
    APPLICATION_COMMAND_UPDATE_OPTIONS: m,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: g
});
