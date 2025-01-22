var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(433355),
    u = r(944486),
    c = r(581364);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = {};
function p() {
    return (f = {}), !0;
}
function h(e) {
    return (
        !(e in f) &&
            (f[e] = {
                activeCommand: null,
                activeCommandSection: null,
                activeOptionName: null,
                preferredCommandId: null,
                optionStates: {},
                initialValues: {},
                commandOrigin: null
            }),
        f[e]
    );
}
function _(e) {
    var n;
    let { channelId: r, command: i, section: a, initialValues: o, location: s, triggerSection: l, queryLength: u, sectionName: d, query: f, searchResultsPosition: p, source: _, commandOrigin: m } = e,
        g = h(r);
    if ((null == i ? void 0 : i.id) === (null === (n = g.activeCommand) || void 0 === n ? void 0 : n.id)) return !1;
    (g.activeCommand = i), (g.activeCommandSection = a), (g.activeOptionName = null), (g.preferredCommandId = null), (g.initialValues = null != o ? o : {}), (g.commandOrigin = null != m ? m : null), (g.source = _);
    let E = {};
    return (
        (null == i ? void 0 : i.options) != null &&
            i.options.forEach((e) => {
                E[e.name] = {
                    isActive: !1,
                    hasValue: !1,
                    lastValidationResult: null,
                    optionValue: null
                };
            }),
        (g.optionStates = E),
        null != i &&
            (0, c.qJ)({
                command: i,
                location: s,
                triggerSection: l,
                queryLength: u,
                sectionName: d,
                query: f,
                searchResultsPosition: p,
                source: _
            }),
        !0
    );
}
function m(e) {
    var n, r;
    let { channelId: i, commandId: a } = e,
        o = h(i);
    return a !== o.preferredCommandId && (null !== o.preferredCommandId || a !== (null !== (r = null === (n = o.activeCommand) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null)) && ((o.activeCommand = null), (o.activeOptionName = null), (o.preferredCommandId = a), (o.optionStates = {}), !0);
}
function g(e) {
    let { channelId: n, changedOptionStates: r } = e,
        i = h(n),
        a = { ...i.optionStates };
    for (let [e, n] of Object.entries(r)) {
        var o, s, l;
        if (!(e in i.optionStates)) continue;
        if (!(void 0 !== n.hasValue ? n.hasValue : a[e].hasValue)) {
            (a[e] = {
                hasValue: !1,
                isActive: !1,
                lastValidationResult: null,
                optionValue: null,
                location: void 0,
                length: void 0
            }),
                i.activeOptionName === e && (i.activeOptionName = null);
            continue;
        }
        let r = a[e];
        (a[e] = {
            hasValue: !0,
            isActive: void 0 !== n.isActive ? n.isActive : r.isActive,
            lastValidationResult: void 0 !== n.lastValidationResult ? n.lastValidationResult : r.lastValidationResult,
            optionValue: null !== (o = n.optionValue) && void 0 !== o ? o : r.optionValue,
            location: null !== (s = n.location) && void 0 !== s ? s : r.location,
            length: null !== (l = n.length) && void 0 !== l ? l : r.length
        }),
            void 0 !== n.isActive && (n.isActive ? (null != i.activeOptionName && i.activeOptionName !== e && ((a[i.activeOptionName] = { ...a[i.activeOptionName] }), (a[i.activeOptionName].isActive = !1)), (i.activeOptionName = e)) : e === i.activeOptionName && (i.activeOptionName = null));
    }
    return (i.optionStates = a), !0;
}
function E(e) {
    let { channelId: n, preferredCommandId: r, command: i, section: a, location: o, changedOptionStates: s } = e,
        l = _({
            type: 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND',
            channelId: n,
            command: i,
            section: a,
            location: o
        }),
        u = m({
            type: 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND',
            channelId: n,
            commandId: r
        }),
        c = g({
            type: 'APPLICATION_COMMAND_UPDATE_OPTIONS',
            channelId: n,
            changedOptionStates: s
        });
    return l || u || c;
}
class v extends (i = o.ZP.Store) {
    initialize() {
        l.ZP.addChangeListener(() => {
            let e = u.Z.getChannelId();
            if (null == e) return (f = {}), !0;
            let n = l.ZP.getCurrentSidebarChannelId(e);
            if (null != n && n in f) return !1;
            f = e in f ? { [e]: f[e] } : {};
        });
    }
    getActiveCommand(e) {
        return h(e).activeCommand;
    }
    getActiveCommandSection(e) {
        return h(e).activeCommandSection;
    }
    getActiveOptionName(e) {
        return h(e).activeOptionName;
    }
    getActiveOption(e) {
        var n, r, i;
        let a = h(e);
        return null !== (i = null === (r = a.activeCommand) || void 0 === r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.find((e) => e.name === a.activeOptionName)) && void 0 !== i ? i : null;
    }
    getPreferredCommandId(e) {
        return h(e).preferredCommandId;
    }
    getOptionStates(e) {
        return h(e).optionStates;
    }
    getOptionState(e, n) {
        return h(e).optionStates[n];
    }
    getCommandOrigin(e) {
        return h(e).commandOrigin;
    }
    getSource(e) {
        return h(e).source;
    }
    getOption(e, n) {
        var r, i;
        return null === (i = h(e).activeCommand) || void 0 === i ? void 0 : null === (r = i.options) || void 0 === r ? void 0 : r.find((e) => e.name === n);
    }
    getState(e) {
        return { ...h(e) };
    }
}
d(v, 'displayName', 'ApplicationCommandStore');
let y = new v(s.Z, {
    CONNECTION_OPEN: p,
    CHANNEL_SELECT: p,
    LOGOUT: p,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: _,
    APPLICATION_COMMAND_SET_PREFERRED_COMMAND: m,
    APPLICATION_COMMAND_UPDATE_OPTIONS: g,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: E
});
n.Z = y;
