"use strict";
n.d(t, { A: () => p });
var i = n(17928),
    r = n(228366),
    s = n(761640),
    a = n(309010),
    o = n(168186);
let l = {};
function u() {
    return (l = {}), !0;
}
function c(e) {
    return (
        e in l ||
            (l[e] = {
                activeCommand: null,
                activeCommandSection: null,
                activeOptionName: null,
                preferredCommandId: null,
                optionStates: {},
                initialValues: {},
                commandOrigin: null,
            }),
        l[e]
    );
}
function d(e) {
    let {
            channelId: t,
            command: n,
            section: i,
            initialValues: r,
            location: s,
            triggerSection: a,
            queryLength: l,
            sectionName: u,
            query: d,
            searchResultsPosition: _,
            source: h,
            commandOrigin: f,
        } = e,
        p = c(t);
    if (n?.id === p.activeCommand?.id) return !1;
    (p.activeCommand = n),
        (p.activeCommandSection = i),
        (p.activeOptionName = null),
        (p.preferredCommandId = null),
        (p.initialValues = r ?? {}),
        (p.commandOrigin = f ?? null),
        (p.source = h);
    let E = {};
    return (
        n?.options != null &&
            n.options.forEach((e) => {
                E[e.name] = { isActive: !1, hasValue: !1, lastValidationResult: null, optionValue: null };
            }),
        (p.optionStates = E),
        null != n &&
            (0, o.my)({
                command: n,
                location: s,
                triggerSection: a,
                queryLength: l,
                sectionName: u,
                query: d,
                searchResultsPosition: _,
                source: h,
            }),
        !0
    );
}
function _(e) {
    let { channelId: t, commandId: n } = e,
        i = c(t);
    return (
        n !== i.preferredCommandId &&
        (null !== i.preferredCommandId || n !== (i.activeCommand?.id ?? null)) &&
        ((i.activeCommand = null), (i.activeOptionName = null), (i.preferredCommandId = n), (i.optionStates = {}), !0)
    );
}
function h(e) {
    let { channelId: t, changedOptionStates: n } = e,
        i = c(t),
        r = { ...i.optionStates };
    for (let [e, t] of Object.entries(n)) {
        if (!(e in i.optionStates)) continue;
        if (!(void 0 !== t.hasValue ? t.hasValue : r[e].hasValue)) {
            (r[e] = {
                hasValue: !1,
                isActive: !1,
                lastValidationResult: null,
                optionValue: null,
                location: void 0,
                length: void 0,
            }),
                i.activeOptionName === e && (i.activeOptionName = null);
            continue;
        }
        let n = r[e];
        (r[e] = {
            hasValue: !0,
            isActive: void 0 !== t.isActive ? t.isActive : n.isActive,
            lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
            optionValue: t.optionValue ?? n.optionValue,
            location: t.location ?? n.location,
            length: t.length ?? n.length,
        }),
            void 0 !== t.isActive &&
                (t.isActive
                    ? (null != i.activeOptionName &&
                          i.activeOptionName !== e &&
                          ((r[i.activeOptionName] = { ...r[i.activeOptionName] }),
                          (r[i.activeOptionName].isActive = !1)),
                      (i.activeOptionName = e))
                    : e === i.activeOptionName && (i.activeOptionName = null));
    }
    return (i.optionStates = r), !0;
}
class f extends i.Ay.Store {
    static displayName = "ApplicationCommandStore";
    initialize() {
        this.waitFor(s.Ay, a.A),
            s.Ay.addChangeListener(() => {
                let e = a.A.getChannelId();
                if (null == e) return (l = {}), !0;
                let t = s.Ay.getCurrentSidebarChannelId(e);
                if (null != t && t in l) return !1;
                l = e in l ? { [e]: l[e] } : {};
            });
    }
    getActiveCommand(e) {
        return c(e).activeCommand;
    }
    getActiveCommandSection(e) {
        return c(e).activeCommandSection;
    }
    getActiveOptionName(e) {
        return c(e).activeOptionName;
    }
    getActiveOption(e) {
        let t = c(e);
        return t.activeCommand?.options?.find((e) => e.name === t.activeOptionName) ?? null;
    }
    getPreferredCommandId(e) {
        return c(e).preferredCommandId;
    }
    getOptionStates(e) {
        return c(e).optionStates;
    }
    getOptionState(e, t) {
        return c(e).optionStates[t];
    }
    getCommandOrigin(e) {
        return c(e).commandOrigin;
    }
    getSource(e) {
        return c(e).source;
    }
    getOption(e, t) {
        let n = c(e);
        return n.activeCommand?.options?.find((e) => e.name === t);
    }
    getState(e) {
        return { ...c(e) };
    }
}
let p = new f(r.h, {
    CONNECTION_OPEN: u,
    CHANNEL_SELECT: u,
    LOGOUT: u,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: d,
    APPLICATION_COMMAND_SET_PREFERRED_COMMAND: _,
    APPLICATION_COMMAND_UPDATE_OPTIONS: h,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
        let { channelId: t, preferredCommandId: n, command: i, section: r, location: s, changedOptionStates: a } = e,
            o = d({
                type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                channelId: t,
                command: i,
                section: r,
                location: s,
            }),
            l = _({ type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId: t, commandId: n }),
            u = h({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: t, changedOptionStates: a });
        return o || l || u;
    },
});
