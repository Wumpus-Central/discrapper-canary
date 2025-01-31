n.d(t, { Z: () => E }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(433355),
    o = n(944486),
    l = n(581364);
function u(e, t, n) {
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
let c = {};
function d() {
    return (c = {}), !0;
}
function f(e) {
    return (
        e in c ||
            (c[e] = {
                activeCommand: null,
                activeCommandSection: null,
                activeOptionName: null,
                preferredCommandId: null,
                optionStates: {},
                initialValues: {},
                commandOrigin: null
            }),
        c[e]
    );
}
function _(e) {
    var t;
    let { channelId: n, command: i, section: r, initialValues: a, location: s, triggerSection: o, queryLength: u, sectionName: c, query: d, searchResultsPosition: _, source: p, commandOrigin: h } = e,
        m = f(n);
    if ((null == i ? void 0 : i.id) === (null === (t = m.activeCommand) || void 0 === t ? void 0 : t.id)) return !1;
    (m.activeCommand = i), (m.activeCommandSection = r), (m.activeOptionName = null), (m.preferredCommandId = null), (m.initialValues = null != a ? a : {}), (m.commandOrigin = null != h ? h : null), (m.source = p);
    let g = {};
    return (
        (null == i ? void 0 : i.options) != null &&
            i.options.forEach((e) => {
                g[e.name] = {
                    isActive: !1,
                    hasValue: !1,
                    lastValidationResult: null,
                    optionValue: null
                };
            }),
        (m.optionStates = g),
        null != i &&
            (0, l.qJ)({
                command: i,
                location: s,
                triggerSection: o,
                queryLength: u,
                sectionName: c,
                query: d,
                searchResultsPosition: _,
                source: p
            }),
        !0
    );
}
function p(e) {
    var t, n;
    let { channelId: i, commandId: r } = e,
        a = f(i);
    return r !== a.preferredCommandId && (null !== a.preferredCommandId || r !== (null !== (n = null === (t = a.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && ((a.activeCommand = null), (a.activeOptionName = null), (a.preferredCommandId = r), (a.optionStates = {}), !0);
}
function h(e) {
    let { channelId: t, changedOptionStates: n } = e,
        i = f(t),
        r = { ...i.optionStates };
    for (let [e, t] of Object.entries(n)) {
        var a, s, o;
        if (!(e in i.optionStates)) continue;
        if (!(void 0 !== t.hasValue ? t.hasValue : r[e].hasValue)) {
            (r[e] = {
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
        let n = r[e];
        (r[e] = {
            hasValue: !0,
            isActive: void 0 !== t.isActive ? t.isActive : n.isActive,
            lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
            optionValue: null !== (a = t.optionValue) && void 0 !== a ? a : n.optionValue,
            location: null !== (s = t.location) && void 0 !== s ? s : n.location,
            length: null !== (o = t.length) && void 0 !== o ? o : n.length
        }),
            void 0 !== t.isActive && (t.isActive ? (null != i.activeOptionName && i.activeOptionName !== e && ((r[i.activeOptionName] = { ...r[i.activeOptionName] }), (r[i.activeOptionName].isActive = !1)), (i.activeOptionName = e)) : e === i.activeOptionName && (i.activeOptionName = null));
    }
    return (i.optionStates = r), !0;
}
function m(e) {
    let { channelId: t, preferredCommandId: n, command: i, section: r, location: a, changedOptionStates: s } = e,
        o = _({
            type: 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND',
            channelId: t,
            command: i,
            section: r,
            location: a
        }),
        l = p({
            type: 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND',
            channelId: t,
            commandId: n
        }),
        u = h({
            type: 'APPLICATION_COMMAND_UPDATE_OPTIONS',
            channelId: t,
            changedOptionStates: s
        });
    return o || l || u;
}
class g extends (i = r.ZP.Store) {
    initialize() {
        s.ZP.addChangeListener(() => {
            let e = o.Z.getChannelId();
            if (null == e) return (c = {}), !0;
            let t = s.ZP.getCurrentSidebarChannelId(e);
            if (null != t && t in c) return !1;
            c = e in c ? { [e]: c[e] } : {};
        });
    }
    getActiveCommand(e) {
        return f(e).activeCommand;
    }
    getActiveCommandSection(e) {
        return f(e).activeCommandSection;
    }
    getActiveOptionName(e) {
        return f(e).activeOptionName;
    }
    getActiveOption(e) {
        var t, n, i;
        let r = f(e);
        return null !== (i = null === (n = r.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find((e) => e.name === r.activeOptionName)) && void 0 !== i ? i : null;
    }
    getPreferredCommandId(e) {
        return f(e).preferredCommandId;
    }
    getOptionStates(e) {
        return f(e).optionStates;
    }
    getOptionState(e, t) {
        return f(e).optionStates[t];
    }
    getCommandOrigin(e) {
        return f(e).commandOrigin;
    }
    getSource(e) {
        return f(e).source;
    }
    getOption(e, t) {
        var n, i;
        return null === (i = f(e).activeCommand) || void 0 === i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find((e) => e.name === t);
    }
    getState(e) {
        return { ...f(e) };
    }
}
u(g, 'displayName', 'ApplicationCommandStore');
let E = new g(a.Z, {
    CONNECTION_OPEN: d,
    CHANNEL_SELECT: d,
    LOGOUT: d,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: _,
    APPLICATION_COMMAND_SET_PREFERRED_COMMAND: p,
    APPLICATION_COMMAND_UPDATE_OPTIONS: h,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: m
});
